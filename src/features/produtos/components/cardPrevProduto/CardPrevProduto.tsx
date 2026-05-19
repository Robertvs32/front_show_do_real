import styles from '@/features/produtos/components/cardPrevProduto/cardPrevProduto.module.css'

export default function CardPrevProduto({nome, codigo, valor}: {nome:string, codigo:string, valor: number}){
    return(
        <div className={styles.cardPrev}>
            <p className={styles.nomeCardPrev}>{nome}</p>
            <p className={styles.codigoCardPrev}>{codigo}</p>
            <p className={styles.valorCardPrev}>{`R$ ${valor}`}</p>
        </div>
    )
}