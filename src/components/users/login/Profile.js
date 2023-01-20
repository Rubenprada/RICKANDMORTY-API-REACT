import React, {useContext} from "react";
//importamos el componente de los usuarios
import UserContext from "../../../context/userContext";
import './profile.scss';







//Componente en el que nos diga el usuario que esta logeado
function Profile () {
    //mandamos las props de user, con userContext
    const user = useContext(UserContext);
    return (
        <div className="profile__div">  
            <p className="profile__div_p">Bienvenido: {user.username}</p>
            <img className="profile__div_img" src={user.url} alt="avatar" />
         </div>
    )
};

export default Profile;