import { axiosConfiguration } from '../configuration/axiosConfiguration';



//obtenermedia
const obtenerMedia = () => {
     return axiosConfiguration.get('medias',{
    headers:{
      'Content-Type': 'application/json'
    }
  })

}

const crearMedia = (data) => {
    return axiosConfiguration.post('medias', data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}


// ...

const editarMedia = (tipoId, data) => {
  return axiosConfiguration.put(`medias/${tipoId}`, data, {
      headers: {
          'Content-Type': 'application/json'
      }
  })
}

// borrar media
const borrarMedia = (tipoId) => {
  return axiosConfiguration.delete(`medias/${tipoId}`, {
      headers: {
          'Content-Type': 'application/json'
      }
  })
}

// ...

export{
    obtenerMedia,
    crearMedia,
    editarMedia,
    borrarMedia
}