import styles from '@/shared/modalConfirm/modalConfirm.module.css'
import LinhaSeparador from '@/shared/linhaSeparador/LinhaSeparador'

export default function ModalConfirm({text}){
    return(
        <div className={styles.modalConfirm}>
            <div className={styles.cardModalConfirm}>
                <p className={styles.textModal}>{text}</p>

                <LinhaSeparador/>

                <div className={styles.btnsModalConfirm}>
                    <button
                        className={styles.btnCancelModal}
                    >
                        Cancelar
                    </button>

                    <button
                        className={styles.btnConfirmModal}
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    )
}