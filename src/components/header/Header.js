import React from "react";
import './header.scss'
import { Link } from "react-router-dom";

function Header () {
    return (
        <ul className="header__ul">
            
            <Link to='/' className="header__ul_li">Home</Link>
            <Link to='/about' className="header__ul_li">About</Link>
            <Link to='/login'><button className="header__ul_li2">Login</button></Link>
            
        </ul>
    )
};
//Este es un componente funcional en React que muestra un encabezado con tres enlaces: "Inicio", "Acerca de" e "Iniciar sesión". El componente utiliza el componente "Enlace" de "react-router-dom" para crear los enlaces, lo que permite el enrutamiento del lado del cliente. Los enlaces "Inicio" y "Acerca de" navegan a las rutas correspondientes, mientras que el botón "Iniciar sesión" está envuelto en un componente de enlace, lo que le permite navegar también a la ruta de "inicio de sesión" cuando se hace clic. El componente también usa una clase llamada 'header__ul' y 'header__ul_li' y 'header__ul_li2' para el estilo. El componente se exporta para que pueda usarse en otras partes de la aplicación.//

export default Header;