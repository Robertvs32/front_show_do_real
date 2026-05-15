import styles from '@/shared/paginacao/paginacao.module.css'
import seta from '@/assets/icons/seta.png'

export default function Paginacao(){
    return(
        <div className={styles.paginacao}>

            <button
                className={`${styles.btnPaginacao} ${styles.btnPaginacaoLeft}`}
            >
                <img 
                    src={seta}
                    alt="Icone seta" 
                />
            </button>

            <p className={styles.numberPaginacao}>1</p>

            <button
                className={styles.btnPaginacao}
            >
                <img 
                    src={seta}
                    alt="Icone seta" 
                />
            </button>

        </div>
    )
}