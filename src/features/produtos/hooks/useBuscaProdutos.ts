import { useState } from "react"
import ProdutosService from "@/features/produtos/services/Produtos.service";

const useBuscaProdutos = () => {

    const [produtos, setProdutos] = useState([]);
    const [codigo, setCodigo] = useState("");
    const [nome, setNome] = useState("");

    const buscaProdutos = async () => {
        try{
            const produtosLista = await ProdutosService.buscarProdutos(nome, codigo);
            setProdutos(produtosLista);
        }catch(error){
            alert("Erro ao buscar produtos");
        }
    }

    return{
        produtos, 
        codigo, 
        nome, 
        setCodigo, 
        setNome,
        buscaProdutos
    }
}

export default useBuscaProdutos