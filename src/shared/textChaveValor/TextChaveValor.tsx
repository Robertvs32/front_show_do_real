import styles from '@/shared/textChaveValor/textChaveValor.module.css'

export default function TextChaveValor({chave, valor}: {chave: string, valor: string}){
    return(
        <div className={styles.textChaveValor}>
            <p className={styles.chave}>{chave}</p>
            <p className={styles.valor}>{valor}</p>
        </div>
    )
}