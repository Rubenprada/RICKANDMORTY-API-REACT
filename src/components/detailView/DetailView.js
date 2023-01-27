import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./DetailView.scss";

const DetailView = () => {
  
  let { id } = useParams();
  console.log(id)

  let [person, setPerson] = useState([]);
  
  

  let api = `https://rickandmortyapi.com/api/character/${id}`
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setPerson(data);
     
    })();
  }, [api]);
  return (
    <div className="div__detail">
      
      <img className= 'img__detail' src={person.image} alt="" />
      <div className="detail">
      <p>Nombre: {person.name}</p>
      <p className='detail__gen'>Genero: {person.gender}</p>
      <p>Estado: {person.status}</p>
      <p>Especie: {person.species}</p>
      </div>
      <Link className="link__detail" to='/api'><button className="button__detail"> VOLVER A API</button></Link>
    </div>
  );
};

export default DetailView;

//Utiliza varios componentes de React Router, como "useParams" y "Link", para navegar entre diferentes vistas de la aplicación. También utiliza "useState" y "useEffect" para manejar el estado y realizar una solicitud a una API externa para obtener información sobre el personaje específico. Finalmente, renderiza la información en una vista de detalles y proporciona un botón para volver a la vista principal de la API.//