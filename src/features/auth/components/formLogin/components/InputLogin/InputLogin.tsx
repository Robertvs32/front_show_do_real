import styles from '@/features/auth/components/formLogin/components/InputLogin/inputLogin.module.css'

export default function InputLogin({title, getter, setter, type, required}){
    return(
        <div className={styles.inputLogin}>
            <label>{title}</label>
            <input type={type}
                value={getter}
                onChange={e => setter(e.target.value)}
                required={required}
            />
        </div>
    )
}