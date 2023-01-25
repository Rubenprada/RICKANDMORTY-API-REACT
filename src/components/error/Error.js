import "./error.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

function Error() {
 
        const navigate = useNavigate(); 

        return (
      

   
    <> <button onClick={() => navigate(-2)}>Go 2 pages back</button>
              <button onClick={() => navigate(-1)}>Logeate</button>
              
                <h2 ruta = "error">Error 404</h2> 
                </>
  );
  
}
; 
export default  Error;



