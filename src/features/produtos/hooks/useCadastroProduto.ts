import { useState } from "react"

export default function useCadastroProduto(){

    const [dadosCadastroProduto, setDadosCadastroProduto] = useState({
        Nome: "",
        Codigo: "",
        Valor: ""
    });

    const alteraDadoProduto = (valor: string, campo: string) => {
        const valorReplace = valor.replace(',', '.');

        setDadosCadastroProduto({...dadosCadastroProduto, [campo]: valorReplace});
    }

    //FUNCAO CRIADA PORQUE OS COMPONENTES ESPERAM UM SETTER(VALOR) NO ONCHANGE, NAO DA PRA PASSAR PQ E OBJETO
    const alteraCodigo = (codigo: string) => {
        setDadosCadastroProduto({...dadosCadastroProduto, "Codigo": codigo});
        console.log(dadosCadastroProduto)
    }
    
    return{
        dadosCadastroProduto,
        alteraDadoProduto,
        alteraCodigo
    }
}