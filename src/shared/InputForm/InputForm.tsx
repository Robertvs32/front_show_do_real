import type { InputForm } from "@/shared/InputForm/InputForm.types"
import styles from '@/shared/InputForm/inputForm.module.css'

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