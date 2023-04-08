import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  let { id } = useParams();
  const [dentist,setDentist]=useState({})

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const getData = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await resp.json();
    console.log(data)
    setDentist(data)
  }
  useEffect(()=>{getData()},[])
  

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>

    </>
  )
}

export default Detail