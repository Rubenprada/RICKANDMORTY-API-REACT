
import React, { useState } from "react";
//importamos los datos del json
import data from '../../data/data.json';
import './login.scss'


//prop de Users ---> handleUser y setError
function Login({handleUser, setError}) {

    //variable de estado para guardar datos del formulario, de manera excepcionalse crea en este
    //componente ya que solo la usaremos aquí
    const [userLogin, setUserLogin] = useState({
        username: '',
        password: ''
    });
    const handleChange = (ev) => {
        //  [ev.target.name] al meterle [] coge el valor que esta guardado en una variable
        setUserLogin({...userLogin, [ev.target.name] : ev.target.value})
    };
    const handleClick = (ev) => {
        ev.preventDefault();
        //forzamos reseteo cuando buscamos nuevos usuarios
        handleUser({});
        //buscamos al usuario que hemos guardado en userLogin y lo guardamos en el ususario founduser
        const foundUser = data.find((item) => item.username === userLogin.username && item.password === userLogin.password);
        //ternario en el que si el ususario no es correcto ponga un error
        foundUser ? handleUser(foundUser) : setError('Usuario o clave incorrecta')
    } 
    
    return (
        
            <form action="" className="form">
                <label className="form__label1" htmlFor="user">Usuario</label>
                <input className="form__input" type="text" placeholder="usuario" id="user" onChange={handleChange} name='username'/><br></br>
                <label className="form__label2" htmlFor="pass">Contraseña</label>
                <input type="password" placeholder="contraseña" id="pass" onChange={handleChange} name='password'/><br></br>
                <input type="button" value='login' onClick={handleClick} className='button'/>
            </form>
        
    )
};

export default Login;