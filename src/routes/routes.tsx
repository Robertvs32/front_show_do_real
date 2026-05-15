import { createBrowserRouter } from "react-router"
import CadastroUsuario from "@/pages/CadastroUsuarios/CadastroUsuario";
import InfosUsuario from "@/pages/InfosUsuario/InfosUsuario";
import Login from "@/pages/Login/Login";
import Usuarios from "@/pages/Usuarios/Usuarios";
import Home from "@/pages/Home/Home";
import Produtos from "@/pages/Produtos/Produtos";

const router = createBrowserRouter([
    {
        path: "/infos",
        element: <InfosUsuario/>
    },
    {
        path: "/cadastro",
        element: <CadastroUsuario/>
    },
    {
        path: "/login",
        element: <Login/>
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
    }
])

export default router;