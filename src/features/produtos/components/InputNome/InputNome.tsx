import styles from '@/features/produtos/components/InputNome/inputNome.module.css'
import IconNome from '@/assets/icons/escrever.png'

export default function InputNome(){

    return(
        <div className={styles.inputNomeContainer}>
            <div className={styles.containerIconNome}>
                <img 
                    className={styles.iconNome}
                    src={IconNome} 
                    alt="Icone codigo de barras" 
                />
            </div>

            <input
                className={styles.inputNome}
                type="text"
                placeholder="Biscoito Wafer"
            />
        </div>
    )
}