//importamos React y useContext
import React, { useContext } from "react";
//importamos el componente de los usuarios
import UserContext from "../../../context/userContext";

import './logout.scss'

//mandamos por props al usuario y el error
function LogOut ({ handleUser, setError}) {
    //mandamos las props, de una con userContext
    const user = useContext(UserContext);
    //hacemos el logOut
    const loginOut = () => {
        //reseteamos
        handleUser({});
        setError('Se ha cerrado correctamente la sesión')
    }
    
    //Ternario en el que si no hay nombre de usuario, se genera un div
    //con enlace para que inicie sesión
    return user.name ? (
        <div className="logout__div">
            <input className="logout__input" value='cerrar sesión' type="submit" onClick={loginOut}/>
        </div>
    ) : (
        <div></div>
    )
};

export default LogOut;