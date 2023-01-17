
import React, { useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";

function CallToApi ()  {
  const [listCharacter, setListCharacter] = useState([]);
  const [next, setNext] = useState("");


  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => response, json())
      .then((res) => {
        setListCharacter(res.data.results);
        setNext(res.data.info.next);
       
      });
      }, []);
 
  const handleClick = (ev) => {
    axios.get(next).then((res) => {
      setListCharacter(res.data.results);
      setNext(res.data.info.next);
    });
  };



  


  return (
    <div className="api">
      <button onClick={handleClick}>Next</button>

      <ul>
        {listCharacter.map((character) => {
          return (
            <li key={character.id}>
              <h2>{character.name}</h2>
              <img src={character.image} alt={character.name} />
            </li>
          );
        })}
      </ul>
    </div>
  )
}

import axios from "axios";
import React from "react";
import { useEffect } from "react";



const CallToApi = () => {
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then((res) => {
      console.log(res)
    })
  }, []);
  return(
    <div></div>
  )
}
export default CallToApi;