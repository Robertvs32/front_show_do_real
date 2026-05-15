import styles from '@/features/produtos/cardPrevProduto/cardPrevProduto.module.css'

export default function CardPrevProduto({nome, codigo}: {nome:string, codigo:string}){
    return(
        <div className={styles.cardPrev}>
            <p className={styles.nomeCardPrev}>{nome}</p>
            <p className={styles.codigoCardPrev}>{codigo}</p>
        </div>
    )
}