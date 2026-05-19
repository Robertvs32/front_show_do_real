import styles from '@/features/produtos/components/InputNome/inputNome.module.css'
import IconNome from '@/assets/icons/escrever.png'

export default function InputNome({setter, getter}){

    return(
        <div className={styles.inputNomeContainer}>
            <div className={styles.containerIconNome}>
                <img 
                    className={styles.iconNome}
                    src={IconNome} 
                    alt="Icone nome produto" 
                />
            </div>

            <input
                className={styles.inputNome}
                type="text"
                value={getter}
                placeholder="Biscoito Wafer"
                onChange={e => {
                    setter(e.target.value)
                }}
            />
        </div>
    )
}