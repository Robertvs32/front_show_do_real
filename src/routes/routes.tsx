import { createBrowserRouter } from "react-router"
import CadastroUsuario from "@/pages/CadastroUsuario/CadastroUsuario";
import InfosUsuario from "@/pages/InfosUsuario/InfosUsuario";
import Usuarios from "@/pages/Usuarios/Usuarios";
import Home from "@/pages/Home/Home";
import Produtos from "@/pages/Produtos/Produtos";
import App from "@/App";
import { Navigate } from "react-router";
import CadastroProduto from "@/pages/CadastroProduto/CadastroProduto";

const router = createBrowserRouter([

    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/infos",
                element: <InfosUsuario/>
            },
            {
                path: "/cadastro",
                element: <CadastroUsuario/>
            },
            {
                path: "/usuarios",
                element: <Usuarios/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/produtos",
                element: <Produtos/>
            },
            {
                path: "/cadastroprodutos",
                element: <CadastroProduto/>
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/"/>
    }
    
])

export default router;