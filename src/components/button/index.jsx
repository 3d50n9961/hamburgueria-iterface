import PropTypes from "prop-types"
import Conteinerbutton from "./styles";


export function Button( {children,...props}){
    return <Conteinerbutton {...props}>{children}</Conteinerbutton>
}



Button.propTypes = {
    children: PropTypes.string,
}