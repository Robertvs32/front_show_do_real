import useCadastro from '@/features/auth/hooks/useCadastro'
import InputForm from '@/features/auth/components/formCadastroUser/components/InputForm/InputForm'
import styles from '@/features/auth/components/formCadastroUser/formCadastroUser.module.css'

export default function FormCadastroUser(){

    const { dadosCadastro, alteraDadoCadastro  } = useCadastro()

    return(
        <form
            className="formCadastroUser"
        >

        <InputForm
            campo="Nome"
            placeholder="Joao Silva"
            type="text"
            required={true}
            value={dadosCadastro.Nome}
            onChange={alteraDadoCadastro}
        />

        <InputForm
            campo="Email"
            placeholder="joaosilva@showdoreal.com"
            type="email"
            required={true}
            value={dadosCadastro.Email}
            onChange={alteraDadoCadastro}
        />

        <InputForm
            campo="Senha"
            placeholder="*********"
            type="password"
            required={true}
            value={dadosCadastro.Senha}
            onChange={alteraDadoCadastro}
        />

        <InputForm
            campo="ConfirmaSenha"
            placeholder="*********"
            type="password"
            required={true}
            value={dadosCadastro.ConfirmaSenha}
            onChange={alteraDadoCadastro}
        />

        <button
            className={styles.btnCadastro}
        >
            Cadastrar
        </button>
            
        </form>
    )
}