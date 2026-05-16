import { createContext, useState  } from "react";
import AuthServices from "../services/Auth.services";
import type { JSX } from "react";
import type { AuthContextType, ObjUser } from "@/features/auth/types/Auth.types";
import { useEffect } from "react";

export const AuthContext = createContext<null | AuthContextType>(null);

export const AuthProvider = ({children}: {children: JSX.Element}) => {

    const [objUser, setObjUser] = useState<ObjUser | null>();
    const [loading, setLoading] = useState<boolean>(true);

    const handleLogin = async (email: string, senha: string) => {
        try{
            const objUser = await AuthServices.login(email, senha);
            setObjUser(objUser);
            console.log(objUser)
        }catch(error){
            alert("Verifique email e senha");
        }
    }

    const verificaLogado = async () => {
        try{
            //CHAMA A FUNCAO QUE VERIFICA O REFRESH, ENVIA O TOKEN NO COOKIE E RETORNA OS DADOS DO USUARIO { ID, NOME, ROLE }
            //GUARDA OS DADOS NO OBJUSER
        }catch(error){
            alert(error);
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        verificaLogado()
    }, [])

    return(
        <AuthContext.Provider 
            value={{objUser, handleLogin, loading}}
        >
            {children}
        </AuthContext.Provider>
    )
}