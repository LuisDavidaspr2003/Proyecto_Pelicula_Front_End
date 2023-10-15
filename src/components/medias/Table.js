
import React from 'react'

export default function Table({
  medias = [], 
  borrarMediasPorId
}) {

const borrarPorId = (e) =>{
  e.preventDefault()
  borrarMediasPorId(e)



}


  return (
    
      
     <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Serial</th>
          <th scope="col">Titulo</th>
          <th scope="col">sinopsis</th>
          <th scope="col">url</th>
          <th scope="col">imagen</th>
          <th scope="col">genero</th>
          <th scope="col">director</th>
          <th scope="col">productora</th>
          <th scope="col">tipo</th>
      
        </tr>
      </thead>
      <tbody>
    
   {
    medias.map((media,index) => {
      const {serial,titulo,sinopsis,url,imagen,genero,director,productora,tipo} = media
      return (
    <tr>
      <th scope="row">{index+1}</th>
      <td>{serial}</td>
      <td>{titulo}</td>
      <td>{sinopsis}</td>
      <td>{url}</td>
      <td>{imagen}</td>
      <td>{genero}</td>
      <td>{director}</td>
      <td>{productora}</td>
      <td>{tipo}</td>
      
        <td>
        <button type="button" class="btn btn-success">Editar</button>



      <button 
        type="button"
        class="btn btn-danger"
        id={media.id}
        onClick={borrarPorId}
       
       
       
       
       >
        Borrar
        
      </button>
       
        </td>


    </tr>)

    }  )
   
    }
      

  </tbody>
</table>
    
  )
}
