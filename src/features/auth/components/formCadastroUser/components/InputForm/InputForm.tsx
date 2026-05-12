import type { InputForm } from "@/features/auth/types/Auth.types"
import styles from '@/features/auth/components/formCadastroUser/components/InputForm/inputForm.module.css'

export default function InputForm({campo, placeholder, type, required, value, onChange}: InputForm){
    return(
        <div className={styles.inputForm}>
            <label className={styles.label}>{campo}</label>
            <input 
                className={styles.input}
                type={type}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={e => onChange(e.target.value, campo)}
            />
        </div>
    )
}