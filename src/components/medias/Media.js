import React from 'react'
import { useEffect,useState } from 'react';
import { borrarMedia, crearMedia, obtenerMedia } from '../../services/MediaService';
import Title from '../ui/Title';
import Modal from './Modal';
import Table from './Table';
import ButtonModal from '../ui/ButtonModal';
import Spinner from '../ui/Spinner';
import Swal from 'sweetalert2';


export default function Media() {
    const [medias,setMedias] = useState([])
    const [loader,setloader ] =  useState(false)
    const [media, setMedia] = useState({ 
    serial:'',
    titulo:'',
    sinopsis:'',
    url:'',
    imagen:'',
    añodeEstreno:'',  
    genero:'',
    director:'',
    productora:'',
    tipo:'',
    })


  useEffect(() => {
    listarMedias()
  
  },[])

  const listarMedias = async () => {
    setloader(true)
    try {
        const { data } = await obtenerMedia()
        
        
        setMedias(data)
        setloader(false)
    } catch (e) {
        console.log(e)
        setloader(false)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al cargar datos',
          footer: 'Intenta de Nuevo'
        })
      }

    }
//--------------------------------------------------------------
      const guardar = async () => {
        setloader(true)
        try {
            const response = await crearMedia(media)
            console.log(response)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Guardado exitoso',
              showConfirmButton: false,
              timer: 1500
            })
            setloader(false)
            clearforce()
            listarMedias()

        } catch (e) {
            console.log(e)
            setloader(false)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Error al Guardar',
              footer: 'Intenta de Nuevo'
            })
          }





}



  //-----------------------------------------------------------
const handleChange = e => {
  console.log(e.target)
  setMedia({
  ...media,
  [e.target.name]: e.target.value
})
}
const clearforce = () => {

  setMedia({ 
    serial:'',
    titulo:'',
    sinopsis:'',
    url:'',
    imagen:'',
    añodeEstreno:'',  
    genero:'',
    director:'',
    productora:'',
    tipo:'',
    })


}
  //-------------------------------------------------------
  const borrarMediasPorId = (e) => {
    const id = e.target.id
    setloader(true)
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Quieres Elimanar esta Serie o Pelicula?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si,Continuar',
      cancelButtonText: 'No,Cancelar',
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
         const response = await borrarMedia(id)
          console.log(response)
          setloader(false)
          listarMedias()
  
  
      } catch (e) {
          console.log(e)
          setloader(false)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al inteentar Eliminar',
            footer: 'Intenta de Nuevo'
          })
        }
        swalWithBootstrapButtons.fire(
          'Borrado Exitoso',
          'Media Borrado',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Eliminado Cancelado :)',
          'error'
        )
        setloader(false)
        
      }
    })
    
  

    }








  return (
  <>
    <Title title={'Media'} />
    {
      loader && (<Spinner />)
    }
    
     <Table medias={medias} 
      borrarMediasPorId={borrarMediasPorId}/>
     <ButtonModal title='Nueva Pelicula o serie'/>
     <Modal
      media={media} 
      change={handleChange}
      guardar={guardar}
      clearforce={clearforce}

           
           
           
           
           />
    </>
  )
}
