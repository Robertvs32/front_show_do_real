import FormLogin from "@/features/auth/components/formLogin/FormLogin";
import styles from "@/pages/Login/login.module.css"

export default function Login(){
    return(
        <div className={styles.loginContainer}>
            <FormLogin/>
        </div>
    )
}