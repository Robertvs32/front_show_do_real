import Login from "@/pages/Login/Login"
import { AuthContext } from "@/features/auth/contexts/AuthContext";
import { useContext } from "react";
import { Outlet } from "react-router";

export default function App(){

  const { objUser, loading } = useContext(AuthContext)

  if(loading){
    return <p>Carregandooooooo</p>
  }

  if(!objUser) return <Login/>

  return <Outlet/>

}