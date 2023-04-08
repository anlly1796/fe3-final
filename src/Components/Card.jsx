import React, { useContext, useEffect, useReducer,useState } from "react";
import { ContextGlobal } from "./utils/global.context";




const Card = ({ name, username, id }) => {
  const { theme } = useContext(ContextGlobal);

  const initialState = {
    myArray:  JSON.parse(localStorage.getItem('myArray')) || [],
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_ITEM':
        const arr = JSON.parse(localStorage.getItem('myArray')) || []

        const objectExists = arr.some(obj => obj.id === id);
        if (!objectExists) {
          const newArray = [...arr, action.payload];
          localStorage.setItem('myArray', JSON.stringify(newArray));
          return {
            myArray: newArray,
          }

        } else {
          return {
            myArray: arr,
          }
        }

      case 'REMOVE_ITEM':
        const filteredArray = state.myArray.filter(
          item => item.id !== action.payload.id
        );
 
        localStorage.setItem('myArray', JSON.stringify(filteredArray));
        return {
          myArray: filteredArray,
        };
      default:
        return state;
    }
  }



  const [state, dispatch] = useReducer(reducer, initialState)


  const addFav = (e) => {
    e.preventDefault();
    // Aqui iria la logica para agregar la Card en el localStorage
    const arr = JSON.parse(localStorage.getItem('myArray')) || []
    const objectExists = arr.some(obj => obj.id === id);
    if (!objectExists) {
      dispatch({ type: 'ADD_ITEM', payload: { 'name': name, 'username': username, 'id': id } });
    } else {
      dispatch({ type: 'REMOVE_ITEM', payload: { 'name': name, 'username': username, 'id': id } }); 
    }
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
