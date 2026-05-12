import styles from "@/features/auth/components/formLogin/formLogin.module.css"
import type { SyntheticEvent } from "react"
import InputLogin from "@/features/auth/components/formLogin/components/InputLogin/InputLogin"
import Logo from "@/assets/images/Logo.svg"
import BtnLogin from "./components/btnLogin/BtnLogin";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import type { AuthContextType } from "../../types/Auth.types";

export default function FormLogin(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { handleLogin } = useContext(AuthContext) as AuthContextType

    const login = async (e: SyntheticEvent) => {
        e.preventDefault();

        try{
            await handleLogin(email, senha)
        }catch(error: any){
            alert("Erro");
        }
        
    }

    return(
        <div className={styles.formLogin}>
            <img 
                className={styles.logo}
                src={Logo} 
                alt="Logo show do real"
            />

            <form 
                className={styles.formContainer}
                onSubmit={login}
            >
                <InputLogin
                    title="Email"
                    getter={email}
                    setter={setEmail}
                    type="email"
                    required={true}
                />

                <InputLogin
                    title="Senha"
                    getter={senha}
                    setter={setSenha}
                    type="password"
                    required={true}
                />

                <BtnLogin
                />
            </form>
        </div>
    )
}