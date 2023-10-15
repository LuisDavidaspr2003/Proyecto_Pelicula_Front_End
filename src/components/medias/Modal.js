import React from 'react'

export default function Modal({
  media,
  change,
  guardar,
  clearforce
  
}) {

  const handleChange = e => {
    change(e)
  }

  const guardarmedia = (e) => {
    e.preventDefault()
    guardar()
  }
  const clear = () => {
    clearforce()
  }







  return (
     <div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva Pelicula o Serie</h1>
        <button type="button"
         className="btn-close" 
         data-bs-dismiss="modal" 
         aria-label="Close"
         onClick={clear}
         
         >

         </button>
      </div>
      <div className="modal-body">
        <form onSubmit={guardarmedia}>
        <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Serial:</label>
                <input
                    type="number" inputmode="numeric" 
                    className="form-control" 
                    id="recipient-name"
                    onChange={handleChange}
                    value={media.serial}
                    name="serial"
                 
                 />
                </div>
            
            <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Titulo:</label>
                <input
                  type="text" 
                  className="form-control" 
                  id="recipient-name"
                  onChange={handleChange}
                    value={media.titulo}
                    name="titulo"
                  
                 
                 
                 
                 
                 
                 />
            </div>

            <div className="mb-3">
                <label for="message-text" className="col-form-label">Sinopsis:</label>
                <textarea
                  className="form-control"
                  id="message-text"
                  onChange={handleChange}
                  value={media.sinopsis}
                  name="sinopsis"
                  
                  
                  
                  
                  >
                 
                  </textarea>
            </div>

            <div className="mt-3">
                <label for="url-text" className="col-form-label">URL:</label>
                <input
                   type="url"
                  className="form-control" 
                  id="url-text" 
                  placeholder="Solo url"
                  onChange={handleChange}
                  value={media.url}
                  name="url"
                  
                 
                 
                 
                 
                 
                 
                 />
            </div>

            <div className="mt-3">
                <label for="url-text" className="col-form-label">Imagen:</label>
                <input 
                    type="url"
                    className="form-control"
                    id="imagen-text" 
                    placeholder="Solo Url de la Imagen"
                    onChange={handleChange}
                    value={media.imagen}
                    name="imagen"
                  
                  
                  
                  
                  
                  
                  
                  
                  />
            </div>

            <div className="mb-3">
                <label for="message-text" className="col-form-label">añoEstreno:</label>
                <textarea
                    className="form-control" 
                    id="recipient-name"
                    onChange={handleChange}
                    value={media.añoEstreno}
                    name="añoEstreno"
                    
                   
                   
                   
                   >
                  
                </textarea>
            </div>


            <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Genero:</label>
                <input 
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  placeholder="id de Genero"
                  onChange={handleChange}
                  value={media.genero}
                  name="genero"

                   
                   
                   
                   
                   
                   
                   />
            </div>

            <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Director:</label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  placeholder="id de Director"
                  onChange={handleChange}
                  value={media.director}
                  name="director"
                   
                   
                   
                   
                   />
            </div>

            <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Productora:</label>
                <input 
                  type="text"
                  className="form-control"
                  id="recipient-name" 
                  placeholder="id de Productora"
                  onChange={handleChange}
                    value={media.productora}
                    name="productora"
                  
                  
                  
                  
                  
                  />
            </div>

            <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Tipo:</label>
                <input
                  type="text"
                  className="form-control" 
                  id="recipient-name"
                  placeholder="id de Tipo"
                  onChange={handleChange}
                    value={media.tipo}
                    name="tipo"
                  
                  
                  
                  
                  
                  />
            </div>

            <div className="modal-footer">
        <button
         type="button"
          className="btn btn-secondary"
           data-bs-dismiss="modal"
           onClick={clear}

           >
             Cerrar
            </button>
        
        
        
        
        
        
        
        
        <button
         type="submit" 
         className="btn btn-primary"
         disabled={media.serial.length == 1}
         
         
         >
          
          
          
          Guardar
          </button>
      
      </div>
        </form>
      </div>
      
    </div>
  </div>
</div>
    </div>
  )
}
