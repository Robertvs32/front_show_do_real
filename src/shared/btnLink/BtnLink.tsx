import styles from '@/shared/btnLink/btnLink.module.css'
import { Link } from 'react-router'

export default function BtnLink({path, text, icon}: {path: string, text: string, icon: string}){
    return(
        <Link 
            className={styles.btnLink}
            to={path}
        >
            <img src={icon} alt="Icone link" />
            <p>{text}</p>
        </Link>
    )
}