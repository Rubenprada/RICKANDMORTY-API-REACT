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