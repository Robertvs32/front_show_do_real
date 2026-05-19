export interface AuthContextType{
    objUser: ObjUser | null
    handleLogin: handleLogin,
    handleLogout: handleLogout
    loading: boolean
}

export interface ObjUser{
    id: number,
    nome: string,
    role: string
}

export type handleLogin = (email: string, senha: string) => Promise<void>
export type handleLogout = () => Promise<void>;


//INTERFACES CADASTRO
export interface DadosCadastro{
    Nome: string,
    Email: string,
    Senha: string,
    ConfirmaSenha: string
}

