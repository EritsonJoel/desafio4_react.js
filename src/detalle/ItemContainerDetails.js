import React from 'react'
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';



function ItemDetailsContainer() {


    const [productoIndividual , setProducto] = useState({});
    
    const  {idcategoria} = useParams();


 
   

  // hago la promesa para  obtener  la id de la url 


  
   
   useEffect(()=>{

    const getDatos =  async () =>{
     const data = await  fetch(`https://jsonplaceholder.typicode.com/todos/${idcategoria}`)
      const users = await  data.json()
     setProducto(users)
      }

    getDatos();

    }, [idcategoria])


    console.log(productoIndividual)



    return (
        <>
               <p style={{fontSize: 20, color: "black"}}>  Lista </p>
    
        

            <div>
 
              <h3>{productoIndividual.title}</h3>
           
            </div>
            
            
     
     
        </>
    )
}

export default ItemDetailsContainer



