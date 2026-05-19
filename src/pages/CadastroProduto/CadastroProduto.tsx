import styles from '@/pages/CadastroProduto/cadastroproduto.module.css'
import DataLogo from '@/shared/dataLogo/DataLogo'
import BtnReturn from '@/shared/btnReturn/BtnReturn'
import Title from '@/shared/title/Title'
import LinhaSeparador from '@/shared/linhaSeparador/LinhaSeparador'
import FormCadastroProduto from '@/features/produtos/components/formCadastroProduto/FormCadastroProduto'

export default function CadastroProduto(){
    return(
        <div 
            className={styles.cadastroProduto}
        >
            <DataLogo/>

            <BtnReturn
                path="/produtos"
            />

            <Title
                title="Cadastrar produto"
            />

            <LinhaSeparador/>

            <FormCadastroProduto/>

        </div>
    )
}