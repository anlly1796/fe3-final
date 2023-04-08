import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {
  const { theme } = useContext(ContextGlobal);
  const addFav = (e) => {
    e.preventDefault();
    // Aqui iria la logica para agregar la Card en el localStorage
  }


  return (
    <>
      <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="./images/doctor.jpg" alt="" />
        <div>{name}</div>
        <div>{username}</div>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button style={{ color: theme.font }} onClick={addFav} className="favButton">Add fav</button>
      </div>
      
    </>
  );
};

export default Card;
