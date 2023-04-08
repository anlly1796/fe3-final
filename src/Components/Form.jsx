
import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [validation, setValidation]=useState()

  const handlerName= (e)=>{

    setName(e.target.value)

  }
  const handlerEmail= (e)=>{
    setEmail(e.target.value)

  }
  const handlerValidation = (e)=>{
    
    e.preventDefault();

    if(name.length >5 && email.split('@')[1].split('.').length ==2){
      setValidation(true)

    }
    else{
      setValidation(false)
    }
   


  }
    

  

  return (
    <div>
      <form onSubmit={handlerValidation}>
        
        <input onChange={handlerName} placeholder="Name" type="text" id="name" name="name"/>

        
        <input onChange={handlerEmail} placeholder="Email" type="email" id="email" name="email"/>

          <input type="submit" value="Enviar"/>
      </form>
      <div>
      
      {validation&&<p>Gracias {name}, te estaremos contactando cuanto antes via mail</p>}
      {(name&&email)&&validation==false&&<p>Por favor verifique su información nuevamente</p>}
        
      </div>
    </div>
            );
};

            export default Form;
