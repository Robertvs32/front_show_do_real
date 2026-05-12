import { useState } from "react";
import type { DadosCadastro } from "@/features/auth/types/Auth.types";

export default function useCadastro(){

    const [dadosCadastro, setDadosCadastro] = useState<DadosCadastro>({
        Nome: "",
        Email: "",
        Senha: "",
        ConfirmaSenha: ""
    })

    const alteraDadoCadastro = (valor: string, campo: string) => {
        setDadosCadastro({...dadosCadastro, [campo]: valor})
    }
    
    return{
        dadosCadastro,
        alteraDadoCadastro
    }
}