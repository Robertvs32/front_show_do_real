import Login from "@/pages/Login/Login"
import Home from "@/pages/Home/Home";

export default function App(){

  const logado = true;

  if(!logado) return <Login/>

  return <Home/>

}