import api from "@/api/api";

const AuthServices = {

    login: async (email: string, senha: string) => {
        try{
            const response = await fetch(api.url, {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email, 
                    senha
                })
            }) 

            if(response.ok){
                const body = response.json();
                return body;
            }

            throw new Error("Verifique email ou senha!");

        }catch(error: any){
            throw error;
        }
    },

    logout: async () => {

    },

    verificaLogadoRefresh: async () => {
        
    }

}

export default AuthServices;