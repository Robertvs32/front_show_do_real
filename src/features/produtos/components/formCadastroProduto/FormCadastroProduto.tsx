import InputForm from '@/shared/InputForm/InputForm'
import styles from '@/features/auth/components/formCadastroUser/formCadastroUser.module.css'
import useCadastroProduto from '@/features/produtos/hooks/useCadastroProduto'
import InputCodigoBarra from '../InputCodigoBarra/InputCodigoBarra'
import { useState } from 'react'
import Leitor from '@/features/leitor/components/Leitor/Leitor'
import ProdutosService from '../../services/Produtos.service'
import { useNavigate } from 'react-router'

export default function FormCadastroProduto(){

    const { dadosCadastroProduto, alteraDadoProduto, alteraCodigo  } = useCadastroProduto()
    const [leitorVisible, setLeitorVisible] = useState<boolean>(false);

    const navigate = useNavigate();

    return(
        <>
            {leitorVisible && (
                <Leitor
                    setCodigo={alteraCodigo}
                    setLeitorVisivel={setLeitorVisible}
                />
            )}

            <form
                className="formCadastroUser"
                onSubmit={async (e) => {
                    e.preventDefault();

                    const objDados = {...dadosCadastroProduto, Valor: Number(dadosCadastroProduto.Valor)}
                    const cadastrou = await ProdutosService.cadastrarProduto(objDados)

                    if(cadastrou){
                        navigate("/produtos")
                    }
                }}
            >

            <InputForm
                campo="Nome"
                placeholder="Garrafa termica"
                type="text"
                required={true}
                value={dadosCadastroProduto.Nome}
                onChange={alteraDadoProduto}
            />

            <InputForm
                campo="Valor"
                placeholder="25,80"
                type="text"
                required={true}
                value={dadosCadastroProduto.Valor}
                onChange={alteraDadoProduto}
            />

            <InputCodigoBarra
                setLeitorVisible={setLeitorVisible}
                codigo={dadosCadastroProduto.Codigo}
                setCodigo={alteraCodigo}
            />

            

            <button
                className={styles.btnCadastro}
            >
                Cadastrar
            </button>
                
            </form>
        </>
    )
}