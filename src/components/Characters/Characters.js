import React from "react";

import Paginations from "../Paginations/Paginations";



import { Link } from "react-router-dom";
import { useState } from "react";

const Characters = (props) => {
  console.log(props)
  const { character, info } = props.character;
  let page = props.page;
  console.log(page)
  
  
  const statusCharacter = (status) => {
    if (status === "Alive") {
      return <span className="alive">🟢</span>;
    } else if (status === "Dead") {
      return <span className="dead">🔴</span>;
    } else {
      return <span className="unknown">🟡</span>;
    }
  };


  return (
    
    <React.Fragment>
      
      {character !== undefined ? (
        <React.Fragment>
          
          <div className="characters">
            {character.map((character, index) => (
              
              <div className="character" key={index} id={index} page={page}>
                <Link to={`/api/${index}${page}`}>
                
                <div className="image">
                  <img className="img" src={character.image} alt={character.name} />
                </div>
                <div className="info">
                  <h2>{character.name}</h2>
                  <p className="status">
                    {statusCharacter(character.status)}
                    {character.status} -{character.species}
                  </p>
                  <p className="origin">
                    Origin:
                    <span> {character.origin.name}</span>
                  </p>
                </div>
                </Link>
              </div>
              
            ))}
          </div>
          {info.pages > 1 ? (
            <Paginations
              nextPage={props.nextPage}
              prevPage={props.prevPage}
              page={props.page}
            />
          ) : null}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <article className="articleNull">
            <h2>No hay personajes con el nombre que buscaste, intenta
              con otro nombre.</h2>

            <div className= "return">
              <a href="/api">Volver</a>
           </div>


          </article>
        </React.Fragment>
      )}
      
    </React.Fragment>
  );
};

export default Characters;
