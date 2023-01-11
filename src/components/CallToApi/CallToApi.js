import React from "react";
import { useEffect } from "react";

function CallToApi() {
    let api = `https://rickandmortyapi.com/api/character/?page=1`;
    useEffect(() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json());
          console.log(data);
        })();
    }, [api])
}

export default CallToApi;