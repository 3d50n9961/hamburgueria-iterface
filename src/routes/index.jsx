import { createBrowserRouter  } from "react-router-dom";
import { Login } from "../containers/login";
import { Registro } from "../containers/cadastro";
import { Home } from "../containers/home";


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


])