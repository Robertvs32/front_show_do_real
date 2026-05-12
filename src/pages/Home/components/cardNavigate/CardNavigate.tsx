import styles from '@/pages/Home/components/cardNavigate/cardNavigate.module.css'

export default function CardNavigate({name, icon}: {name: string, icon: string}){
    return(
        <div className={styles.cardNavigate}>
            <img src={icon}/>
            <p>{name}</p>
        </div>
    )
}