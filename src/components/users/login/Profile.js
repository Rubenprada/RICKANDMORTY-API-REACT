import React, {useContext} from "react";
//importamos el componente de los usuarios
import UserContext from "../../../context/userContext";
import CallToApi from "../../CallToApi/CallToApi";
import Buscador from "../../Search/Search";






//Componente en el que nos diga el usuario que esta logeado
function Profile () {
    //mandamos las props de user, con userContext
    const user = useContext(UserContext);
    return (
        <div>  
            <h2>Nombre: {user.name}</h2>
            <p>Usuario: {user.username}</p>
            <Buscador/>
            <CallToApi/>
           
        </div>
    )
};

export default Profile;