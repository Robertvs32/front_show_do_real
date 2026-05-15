import DataLogo from "@/shared/dataLogo/DataLogo"
import BtnReturn from "@/shared/btnReturn/BtnReturn"
import Title from "@/shared/title/Title"
import IconNovoUser from '@/assets/icons/novouser.png'
import styles from '@/pages/Produtos/produtos.module.css'
import BtnLink from "@/shared/btnLink/BtnLink"
import LinhaSeparador from "@/shared/linhaSeparador/LinhaSeparador"
import InputCodigoBarra from "@/features/produtos/components/InputCodigoBarra/InputCodigoBarra"
import InputNome from "@/features/produtos/components/InputNome/InputNome"
import CardPrevProduto from "@/features/produtos/cardPrevProduto/CardPrevProduto"
import Paginacao from "@/shared/paginacao/Paginacao"
import { useState } from "react"
import Leitor from "@/features/leitor/components/Leitor/Leitor"

export default function Produtos(){

    const [leitorVisible, setLeitorVisible] = useState<boolean>(false);
    const [codigo, setCodigo] = useState<string>("");

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
                    path="aaa"
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
            
            <InputNome/>

            <button 
                className={styles.btnBuscar}
            >
                Buscar produto
            </button>

            <LinhaSeparador/>

            <p className={styles.textResultado}>Resultados</p>

            <Paginacao/>

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />

            <CardPrevProduto
                nome="Garrafa termica"
                codigo="789123123124"
            />
        </div>
    )
}