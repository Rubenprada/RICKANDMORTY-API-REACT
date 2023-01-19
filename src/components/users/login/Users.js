
//import del userContext para mandar props de una, por el árbol de hijos, padre, etc..
import UserContext from '../../../context/userContext';
//import componente Header
import LogOut from './LogOut';
//import componente Profile
import Profile from './Profile';
import { useEffect } from 'react';


//importamos el componente para logearse
import Login from './Login';
import { useState } from 'react';
import CallApi from '../../CallToApi/CallToApi';




function Users() {
  
  //creamos variable de estado para los ususarios
  const [user, setUser] = useState({});

  //variable de estado para manejar errores de logeo
  const [error, setError] = useState('');

  //recibimos el ususario, para mandarlo despues por una prop a login
  const handleUser = (value) => {
    setUser(value)
  };
  //elimina los mensajes de error
  useEffect(() => {
    setTimeout(() => {
        setError()
    }, 3000)
  })

  return (
    <>
    {/*si no hay ususario logeado muestra el login, si existe ususario logeado no muestra nada*/}
      
      
      <p>{error}</p>
      {!user.name ? (
        <Login
          handleUser={handleUser}
          setError={setError}
        />
      ) : null }
      
      
      {/*le damos el contexto del user a el header */}
      <UserContext.Provider value={user}>
        <LogOut 
          handleUser={handleUser}
          setError={setError}
        />
        {/*si hay usuario logeado muestra el perfil, si no, no muestra nada*/}
        {user.name ? (
          <>
            <Profile />
            <CallApi />
           

          </>
        ) : null}
      </UserContext.Provider>
    </>
  );
}

export default Users;
