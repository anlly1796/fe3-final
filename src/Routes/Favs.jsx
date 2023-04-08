import React,{useState} from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favorites=JSON.parse(localStorage.getItem('myArray'))
  const { theme } = useContext(ContextGlobal);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favorites.map(ob=>(
          <Link style={{ background: theme.background, color: theme.font }} key={ob.id} to={`/dentist/${ob.id}`} ><Card  name={ob.name} username={ob.username} id={ob.id}/></Link> 
        ))}   
      </div>
    </>
  );
};

export default Favs;
