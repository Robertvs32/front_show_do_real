import types from '@/pages/CadastroUsuarios/cadastroUsuario.module.css'
import DataLogo from '@/shared/dataLogo/DataLogo'
import Title from '@/shared/title/Title'
import BtnReturn from '@/shared/btnReturn/BtnReturn'
import LinhaSeparador from '@/shared/linhaSeparador/LinhaSeparador'
import FormCadastroUser from '@/features/auth/components/formCadastroUser/FormCadastroUser'

export default function CadastroUsuario(){
    return(
        <div className={types.cadastroUsuario}>
            <DataLogo/>

            <BtnReturn
                path="/usuarios"
            />

            <Title
                title="Cadastrar usuario"
            />

            <LinhaSeparador/>

            <FormCadastroUser/>

        </div>
    )
}