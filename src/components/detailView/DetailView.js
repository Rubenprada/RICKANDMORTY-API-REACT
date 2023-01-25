import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailView = () => {
  //queda por arreglar el enrutado dinamico que hay en character y aqui
  const { id, page} = useParams();
  
  

  let [person, setPerson] = useState([]);


  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setPerson(data);
      console.log(data)
    })();
  }, [api]);
  return (
    <div>
      
      <img src={person.image} alt="" />
      <p>Nombre: {person.name}</p>
      <p>Genero: {person.gender}</p>
      <p>Estado: {person.status}</p>
      <p>Especie: {person.species}</p>
      <Link to='/api'><button>API</button></Link>
    </div>
  );
};

export default DetailView;