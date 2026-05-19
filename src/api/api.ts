import type { Dispatch, SetStateAction } from "react";
import type { HttpMethods } from "./api.types"
import type { ObjUser } from "@/features/auth/types/Auth.types";

const api = {
    url: "https://antonina-supramolecular-dominga.ngrok-free.dev/"
}

export default api

let setObjUser: Dispatch<SetStateAction<ObjUser | null>>;

export const atualizarFunSetObjUser = (fun: Dispatch<SetStateAction<ObjUser | null>>) => {
    setObjUser = fun
}

//ABSTRACAO PRA NAO FICAR ESCREVENDO TODA HORA OS OPTIONS DO FETCH
export const resumeFetch = async (metodo: HttpMethods, endpoint: string, body?: Record<string, any>) => {
    try{

        const metodosSemBody = ['GET', 'DELETE', 'HEAD']

        let options: RequestInit = {
            method: metodo,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
            }
        }

        if(!metodosSemBody.includes(metodo.toUpperCase())){
            options = {...options, body: JSON.stringify(body)}
        }

        const requisicao = await fetch(`${api.url}${endpoint}`, options);

        return requisicao;
    }catch(error){
        throw error
    }
}

//FETCH PARA REQUISICOES AUTENTICADAS - SOLICITA NOVO TOKEN E ENVIA NOVAMENTE
export const fetchRetry = async (metodo: HttpMethods, endpoint: string, body: Record<string, any>) => {
    try{
        const response = await resumeFetch(metodo, endpoint, body)

        //CASO DE SUCESSO
        if(response.ok){
            return await response.json()
        }

        //TOKEN INVALIDO
        if(response.status == 403){
            //PEDIR NOVO TOKEN PELO REFRESH - JA INSERE NO COOKIE
            const tryRefresh = await resumeFetch('get', 'refreshtoken')

            //SE FALHAR A SOLICITACAO DO NOVO TOKEN, SIGNIFICA QUE O REFRESH TAMBEM ESTA EXPIRADO (LIMPA TUDO)
            if(!tryRefresh.ok){
                setObjUser(null);
                await resumeFetch('get', '/limpatoken');
                await resumeFetch('get', '/limparefreshtoken');
                return
            }

            //SEGUNDA TENTATIVA
            const responseRetry = await resumeFetch(metodo, endpoint, body)

            //ERRO 403 NA SEGUNDA TENTATIVA
            if(responseRetry.status == 403){
                setObjUser(null);
                await resumeFetch('get', '/limpatoken');
                await resumeFetch('get', '/limparefreshtoken');
                return
            }

            //QUALQUER OUTRO ERRO NA SEGUNDA TENTATIVA
            if(!responseRetry.ok){
                const erroRetry = await responseRetry.json()
                throw new Error(erroRetry.mensagem)
            }
            
            return await responseRetry.json();
        }

        //QUALQUER OUTRO ERRO NA PRIMEIRA TENTATIVA
        if(!response.ok){
            const erro = await response.json()
            throw new Error(erro.mensagem)
        }

    }catch(error){
        throw error
    }
}