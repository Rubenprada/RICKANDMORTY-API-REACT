import React, {useContext} from "react";
//importamos el componente de los usuarios
import UserContext from "../../../context/userContext";








//Componente en el que nos diga el usuario que esta logeado
function Profile () {
    //mandamos las props de user, con userContext
    const user = useContext(UserContext);
    return (
        <div>  
            <h2>Nombre: {user.name}</h2>
            <p>Usuario: {user.username}</p>

            <img src={user.url} alt="avatar" />
          

           
        </div>
    )
};

export default Profile;