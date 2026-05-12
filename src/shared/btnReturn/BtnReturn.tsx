import { Link } from "react-router"
import IconReturn from '@/assets/icons/voltar.png'
import styles from '@/shared/btnReturn/btnReturn.module.css'

export default function BtnReturn({path}: {path: string}){
    return(
        <Link 
            className={styles.btnReturn}
            to={path}
        >
            <img src={IconReturn} alt="icone retornar" />
        </Link>
    )
}