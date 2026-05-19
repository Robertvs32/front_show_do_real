import { resumeFetch } from "@/api/api"
import type { DadosProduto } from "../types/produtos.type";

const ProdutosService = {

    buscarProdutos: async (nome: string, codigo: string) => {
        try{
            const response = await resumeFetch('post', 'buscarprodutos', {nome, codigo});

            if(response.ok){
                const dados = await response.json();
                return dados   
            }

            throw new Error("Erro ao buscar produtos!");
            
        }catch(error){
            alert(error.message)
        }
    },

    cadastrarProduto: async (dadosProduto: DadosProduto) => {
        try{
            const response = await resumeFetch('post', 'cadastrarproduto', dadosProduto);

            const resposta = await response.json();
        
            if(response.ok){
                alert(resposta.mensagem)
                return true;
            }

            throw new Error(resposta.mensagem)
            
        }catch(error){
            alert(error.message)
        }
    }

}

export default ProdutosService