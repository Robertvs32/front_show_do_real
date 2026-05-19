import styles from '@/pages/Home/components/cardNavigate/cardNavigate.module.css'
import { Link } from 'react-router'

export default function CardNavigate({name, icon, path}: {name: string, icon: string, path: string}){
    return(
        <Link 
            className={styles.cardNavigate}
            to={path}
        >
            <img src={icon}/>
            <p>{name}</p>
        </Link>
    )
}