import styles from '@/shared/title/title.module.css'

export default function Title({title}: {title: string}){
    return(
        <p className={styles.title}>{title}</p>
    )
}