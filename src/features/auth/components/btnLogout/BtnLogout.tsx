import IconSair from '@/features/auth/components/btnLogout/icons/sair.png'
import styles from '@/features/auth/components/btnLogout/btnLogout.module.css'

export default function BtnLogout(){
    return(
        <button className={styles.logoutBtn}>
            <img src={IconSair} alt="" />
            <p>Sair</p>
        </button>
    )
}