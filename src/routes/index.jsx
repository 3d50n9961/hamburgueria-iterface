import { createBrowserRouter  } from "react-router-dom";
import { Login } from "../containers/login";
import { Registro } from "../containers/cadastro";
import { Home } from "../containers/home";
import {Menu} from "../containers/menu"



export const routes = createBrowserRouter([
{
  path:'/login',
  element:<Login/>
},

{
    path:'/registro',
    element:<Registro/>
  },
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/cardapio',
    element:<Menu/>
  },


])