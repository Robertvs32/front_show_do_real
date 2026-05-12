import Logo from '@/assets/images/Logo.svg'
import styles from '@/shared/dataLogo/dataLogo.module.css'

export default function DataLogo(){
    return(
        <div className={styles.dataLogo}>

            <div className={styles.dataContainer}>
                <p className={styles.dia}>26/04/2025</p>
                <p className={styles.separador}>-</p>
                <p className={styles.diaSemana}>Quinta-Feira</p>
            </div>
            
            <img 
                className={styles.logo}
                src={Logo} 
                alt="Logo Show do Real" 
            />
        </div>
    )
}