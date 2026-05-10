import styles from "@/features/auth/components/formLogin/components/btnLogin/btnLogin.module.css"

export default function BtnLogin(){
    return(
        <button 
            className={styles.btnLogin}
            type="submit"
        >
            Entrar
        </button>
    )
}