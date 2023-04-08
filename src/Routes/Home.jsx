import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [vector,setVector]=useState([])

  const getData= async ()=>{
     const resp=await fetch('https://jsonplaceholder.typicode.com/users');
     const data=await resp.json();
     setVector(data)
  }

  useEffect(()=>{
    getData()
  },[])
  

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}   
        
        {vector.map(ob=>(
          <Link key={ob.id} to={`/dentist/${ob.id}`} ><Card  name={ob.name} username={ob.username} id={ob.id}/></Link> 
        ))}     
      </div>
    </main>
  )
}

export default Home