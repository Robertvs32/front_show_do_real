import { createContext, useState  } from "react";
import AuthServices from "../services/Auth.services";
import type { JSX } from "react";
import type { AuthContextType, ObjUser } from "@/features/auth/types/Auth.types";

export const AuthContext = createContext<null | AuthContextType>(null);

export const AuthProvider = ({children}: {children: JSX.Element}) => {

    const [objUser, setObjUser] = useState<ObjUser | null>(null);

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