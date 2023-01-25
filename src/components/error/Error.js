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
      <button className="ErrorButton" onClick={() => navigate(-1)}>ATRAS</button>
     
   </>
   
   



  );
}
export default Error;
