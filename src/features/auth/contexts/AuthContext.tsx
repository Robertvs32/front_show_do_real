import { createContext, useState  } from "react";
import AuthServices from "../services/Auth.services";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

    const [objUser, setObjUser] = useState(null);

    const handleLogin = async (email: string, senha: string) => {
        try{
            const objUser = await AuthServices.login(email, senha);
            setObjUser(objUser);
            console.log(objUser)
        }catch(error){
            alert("Verifique email e senha");
        }
    }

    return(
        <AuthContext.Provider 
            value={{objUser, handleLogin}}
        >
            {children}
        </AuthContext.Provider>
    )
}