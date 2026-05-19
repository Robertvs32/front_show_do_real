import DataLogo from "@/shared/dataLogo/DataLogo"
import BtnReturn from "@/shared/btnReturn/BtnReturn"
import Title from "@/shared/title/Title"
import IconNovoUser from '@/assets/icons/novouser.png'
import styles from '@/pages/Produtos/produtos.module.css'
import BtnLink from "@/shared/btnLink/BtnLink"
import LinhaSeparador from "@/shared/linhaSeparador/LinhaSeparador"
import InputCodigoBarra from "@/features/produtos/components/InputCodigoBarra/InputCodigoBarra"
import InputNome from "@/features/produtos/components/InputNome/InputNome"
import CardPrevProduto from "@/features/produtos/components/cardPrevProduto/CardPrevProduto"
import Paginacao from "@/shared/paginacao/Paginacao"
import { useState, useEffect } from "react"
import Leitor from "@/features/leitor/components/Leitor/Leitor"
import ListaProdutos from "@/features/produtos/components/listaProdutos/ListaProdutos"
import useBuscaProdutos from "@/features/produtos/hooks/useBuscaProdutos"

export default function Produtos(){

    const [leitorVisible, setLeitorVisible] = useState<boolean>(false);

    const { codigo, nome, setCodigo, setNome, buscaProdutos, produtos } = useBuscaProdutos();

    useEffect(() => {
        buscaProdutos();
    }, [])

    return(
        <div className={styles.produtos}>

            {leitorVisible && (
                <Leitor
                    setLeitorVisivel={setLeitorVisible}
                    setCodigo={setCodigo}
                />
            )}
            
            <DataLogo/>

            <BtnReturn
                path="/home"
            />


            <div className={styles.titleCadastroContainer}>
                <Title
                    title="Produtos"
                />
                
                <BtnLink
                    path="/cadastroprodutos"
                    text="Cadastrar produto"
                    icon={IconNovoUser}
                />
            </div>

            <LinhaSeparador/>

            <InputCodigoBarra
                setCodigo={setCodigo}
                codigo={codigo}
                setLeitorVisible={setLeitorVisible}
            />
            
            <InputNome
                setter={setNome}
                getter={nome}
            />

            <button 
                className={styles.btnBuscar}
                onClick={buscaProdutos}
            >
                Buscar produto
            </button>

            <LinhaSeparador/>

            <p className={styles.textResultado}>Resultados</p>

            {/* <Paginacao/> */}

            <ListaProdutos
                produtos={produtos}
            />
        </div>
    )
}