import "./error.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import error1 from "../../assets/error1.jpg";

function Error() {
  const navigate = useNavigate();

  return (
    <>
      <div className="error__div">
        <img src={error1} alt="" className="error__div_h1" />
      </div>
      <h2 className="error">Pagina no encontrada</h2>
      <button className="ErrorButton" onClick={() => navigate(-1)}>
        ATRAS
      </button>
    </>
  );
}
export default Error;

//se define una función llamada "Error" que utiliza el hook "useNavigate" de React Router. Dentro de la función se renderiza un elemento div con una imagen, un h2 con el texto "Página no encontrada", y un botón con un evento onClick que utiliza la función "navigate" para navegar hacia la página anterior. Finalmente, la función "Error" es exportada para ser utilizada en otro lugar de la aplicación.//
