import React from "react";
import "../styles/App.css";
import Header from "./header/Header";
import About from "./about/About";
import Home from "./home/Home";
import Users from "./users/login/Users";
import { Route, Routes } from "react-router-dom";
import CallToApi from "./CallToApi/CallToApi";
import Footer from "./footer/Footer";
import Error from "./error/Error";
import DetailView from "./detailView/DetailView";
import Back from "./error/Error";
import Search from "../components/Search/Search";

function App() {
  return (
    <div className="app__div">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/api" element={<CallToApi />} />
        <Route path="/api/:id" element={<DetailView />} />

        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/api" element={<CallToApi />} />

        <Route path="/api" element={<Back />} />
        <Route path="/api" element={<Search />} />

        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

/*Este código es un componente de función en React que renderiza una aplicación con varias rutas. Utiliza el componente "Routes" y "Route" de "react-router-dom" para crear las rutas, lo que permite la navegación cliente. El componente "Header" se importa y se renderiza en la aplicación, así como otros componentes como "About", "Home", "Users", "CallToApi", "Footer", "Error", "DetailView", "Back" y "Search". Cada ruta tiene un elemento asociado que se renderiza cuando se navega a esa ruta. El componente también utiliza una clase llamada "app__div" para el estilo. Finalmente, el componente se exporta para que pueda ser utilizado en otras partes de la aplicación.*/