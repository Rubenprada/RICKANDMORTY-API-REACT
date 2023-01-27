import React, { useState, useEffect } from "react";
import "./CallToApi.scss";
import Characters from "../Characters/Characters";
import Buscador from "../Search/Search";
//obtener información sobre los personajes de la API//
function CallApi() {
  let urlCharacters = `https://rickandmortyapi.com/api/character/`;
  let dataURL = {
    info: {},
    character: [],
    error: "",
  };
  //Declara algunas variables iniciales: urlCharacters, que es la URL base para hacer la llamada a la API, y dataURL, que es un objeto vacío con las propiedades "info", "character" y "error".//

<<<<<<< HEAD
  const [characters, setCharacters] = useState(dataURL);
  const [ulr, setURL] = useState(urlCharacters);
  const [page, setPage] = useState(1);
  //Utiliza "useState" para crear tres variables de estado: "characters", "ulr" y "page". characters es un objeto con la información de los personajes de la serie, info es un objeto con información adicional sobre la paginación y error es un string vacío. "url" almacena la URL actual para hacer la llamada a la API y "page" almacena el número de página actual.//
=======
import Character   from '../Characters/Characters';
import Buscador from '../Search/Search';


>>>>>>> origin/master

  useEffect(() => {
    const fetchAPI = () => {
      fetch(ulr)
        .then((res) => res.json())
        .then((data) =>
          setCharacters({
            character: data.results,
            info: data.info,
            error: data.error,
          })
        )
        .catch((error) => console.log(error));
    };
    fetchAPI();
  }, [ulr]);
  //"useEffect" para hacer una llamada a la API cada vez que cambia la URL almacenada en "ulr". La función "fetchAPI" utiliza el método fetch para hacer la llamada a la API, luego se procesa la respuesta con el método json() y se actualiza el estado de "characters" con los datos recibidos.//

  const nextPage = () => {
    setURL(characters.info.next);
    setPage(page + 1);
    scroll();
  };

<<<<<<< HEAD
  const prevPage = () => {
    if (characters.info.prev != null) {
      setURL(characters.info.prev);
      setPage(page - 1);
      scroll();
    }
  };
  //Define las funciones "nextPage" y "prevPage" para cambiar la página de resultados de la API. Estas funciones actualizan la URL almacenada en "ulr" y "page" y llaman a la función "scroll" para desplazarse al comienzo de la página.//
=======
	const nextPage = () => {
		setURL(characters.info.next);
		setPage(page + 1);
		scroll();
	};
	
>>>>>>> origin/master

  const scroll = () => {
    const elemento = document.querySelector(".container");
    elemento.scrollIntoView("auto", "start");
  };
  //Define la función "scroll" que se encarga de desplazarse al comienzo de la página utilizando el método scrollIntoView.//

  const searchData = (data) => {
    urlCharacters = `https://rickandmortyapi.com/api/character/?name=${data}`;
    setURL(urlCharacters);
    setPage(1);
  };
  //Define la función "searchData" para realizar búsquedas por nombre de personaje en la API. Esta función actualiza la URL de la llamada a la API y el número de página almacenado en "ulr" y "page".//

  return (
    <div className="container">
      <h1 className="title">Rick and Morty</h1>
      <Buscador className="Buscador" searchData={searchData} />
      <Characters
        character={characters}
        prevPage={prevPage}
        nextPage={nextPage}
        page={page}
      />
    </div>
  );
}

//componente renderiza una estructura de HTML que incluye un título "Rick and Morty", el componente personalizado "Buscador" y "Characters". Además, se pasan las funciones prevPage, nextPage y searchData como propiedades a los componentes personalizados y se pasan los datos de personajes, info y error al componente Characters.//

export default CallApi;
