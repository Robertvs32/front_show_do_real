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
            placeholder="Joao Silva"
            type="email"
            required={true}
            value={dadosCadastro.Nome}
            onChange={alteraDadoCadastro}
        />

        <InputForm
            campo="Senha"
            placeholder="Joao Silva"
            type="text"
            required={true}
            value={dadosCadastro.Nome}
            onChange={alteraDadoCadastro}
        />

        <InputForm
            campo="Confirmar senha"
            placeholder="Joao Silva"
            type="text"
            required={true}
            value={dadosCadastro.Nome}
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