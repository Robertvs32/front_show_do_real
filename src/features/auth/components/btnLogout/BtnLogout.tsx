import IconSair from '@/features/auth/components/btnLogout/icons/sair.png'
import styles from '@/features/auth/components/btnLogout/btnLogout.module.css'
import { useContext } from 'react'
import { AuthContext } from '@/features/auth/contexts/AuthContext'

export default function BtnLogout(){

    const {handleLogout} = useContext(AuthContext)
    console.log(handleLogout)

    return(
        <button 
            className={styles.logoutBtn}
            onClick={async () => await handleLogout()}
        >
            <img src={IconSair} alt="Icone logout" />
            <p>Sair</p>
        </button>
    )
}