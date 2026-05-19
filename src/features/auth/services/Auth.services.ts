import { resumeFetch } from "@/api/api";

const AuthServices = {

    login: async (email: string, senha: string) => {
        try{
            const response = await resumeFetch('post', 'login', { email, senha });

            if(response.ok){
                const dados = await response.json();
                console.log("dados")
                console.log(dados)
                return dados;
            }

            throw new Error("Verifique email ou senha!");

        }catch(error: any){
            throw error;
        }
    },

    logout: async () => {
        try{
            await resumeFetch('get', 'logout');

        }catch(error){
            throw error
        }
    },

    verificaLogadoRefresh: async () => {
        try{
            const response = await resumeFetch('get', 'refresh');

            if(response.ok){
                const objUser = await response.json();
                return objUser;
            }

            throw new Error("Erro ao verificar refreshToken");
        }catch(error){
            throw error
        }
    }

}

export default AuthServices;