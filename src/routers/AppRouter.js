import React from 'react'
import NavBar from '../components/ui/NavBar'
import Media from '../components/medias/Media'
import Genero from '../components/generos/Genero'
import { Route, Routes } from 'react-router-dom'
import Director from '../components/directores/Director'
import Productora from '../components/productores/Productora'
import Tipo from '../components/tipo/Tipo'
import NotFound from '../components/ui/NotFound'
import Fooster from '../components/ui/Footer'


export default function AppRouter() {
  return (
    <div className='container'>
    <NavBar />
    
    <Routes>
        <Route path='/' element={<Media />}/>
        <Route path='/generos' element={<Genero/>}/>
        <Route path='/directores' element={<Director />}/>
        <Route path='/productoras' element={<Productora/>}/>
        <Route path='/tipo' element={< Tipo/>}/>
        <Route path='*' element={< NotFound/>}/>
      
</Routes>

<div>
     <Fooster />  
    </div>

    </div>
    
  )
}
