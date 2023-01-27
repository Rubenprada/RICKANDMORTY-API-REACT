import React from "react";
import "./Characters.scss";

import Paginations from "../Paginations/Paginations";

import { Link } from "react-router-dom";

const Characters = (props) => {
<<<<<<< HEAD
  
  const { character, info } = props.character;
  
=======
  const { character, info } = props.character;
  let page = props.page;
  console.log(page);

  //se define un componente de función llamado "Characters" que recibe props. Dentro del componente, se destructura la propiedad "character" en dos variables: "character" e "info". También se declara una variable "page" que recibe la propiedad "page" de las props.//

>>>>>>> origin/master
  const statusCharacter = (status) => {
    if (status === "Alive") {
      return <span className="alive">🟢</span>;
    } else if (status === "Dead") {
      return <span className="dead">🔴</span>;
    } else {
      return <span className="unknown">🟡</span>;
    }
  };
  //Luego se define una función llamada "statusCharacter" que recibe un parámetro "status" y devuelve un span con un emoji y una clase CSS dependiendo del valor del parámetro//
  return (
    //En la función "Characters" se utiliza una estructura de condicional ternaria para validar si "character" es diferente de "undefined", en caso afirmativo se renderizan los personajes en una estructura de divs y se utiliza un "map" para iterar sobre cada personaje. Cada personaje se renderiza como un "div" con un "Link" que redirige a una ruta específica. Dentro de este "div" se renderizan una imagen, un h2 con el nombre del personaje, un p con la información del status y la especie y un p con la información del origen del personaje.//
    <React.Fragment>
      {character !== undefined ? (
        <React.Fragment>
          <div className="characters">
            {character.map((character, index) => (
<<<<<<< HEAD
              
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
=======
              <div className="character" key={index} id={index} page={page}>
                <Link to={`/api/${character.id}`}>
                  <div className="image">
                    <img
                      className="img"
                      src={character.image}
                      alt={character.name}
                    />
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
>>>>>>> origin/master
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
            <h2 className="h2__error">No hay personajes</h2>
          </article>

          <Link className="link__detail" to="/api">
            <button className="button__detail"> VOLVER A API</button>
          </Link>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
/*Si "character" es igual a "undefined", se renderiza un artículo con un mensaje de "No hay personajes".
    Finalmente, se valida si hay más de una página de resultados, en caso afirmativo se renderiza el componente "Paginations" y se le pasan las funciones "nextPage" y "prevPage" como props. Por último, se exporta el componente "Characters" para ser utilizado en otro lugar de la aplicación.*/

export default Characters;
