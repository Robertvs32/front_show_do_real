export interface AuthContextType{
    objUser: ObjUser | null
    handleLogin: handleLogin,
    loading: boolean
}

export interface ObjUser{
    id: number,
    nome: string,
    email: string
}

export type handleLogin = (email: string, senha: string) => Promise<void>


//INTERFACES CADASTRO
export interface DadosCadastro{
    Nome: string,
    Email: string,
    Senha: string,
    ConfirmaSenha: string
}

export interface InputForm{
    campo: string, 
    placeholder: string, 
    type: string, 
    required: boolean,
    value: string,
    onChange: (valor: string, campo: string) => void
}