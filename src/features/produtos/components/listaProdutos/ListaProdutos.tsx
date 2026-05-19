import styles from '@/features/produtos/components/listaProdutos/listaProdutos.module.css';
import CardPrevProduto from '@/features/produtos/components/cardPrevProduto/CardPrevProduto';

interface PrevProduto {
    id_produto: number;
    nome: string;
    valor: number;
    codigo: string;
    created_at: string;
}

export default function ListaProdutos({produtos}: {produtos: PrevProduto[]}){

    return(
        <div className={styles.listaProdutos}>

            {produtos && produtos.map(produto =>    
                <CardPrevProduto 
                    nome={produto.nome}
                    codigo={produto.codigo}
                    valor={produto.valor}
                />
            )}

        </div>
    )
}