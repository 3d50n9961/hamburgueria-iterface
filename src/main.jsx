import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/index";
import GlobalStyles from './styles/globalstyles'
import { ToastContainer} from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
    <GlobalStyles />
    <ToastContainer/>
  </StrictMode>,
)
