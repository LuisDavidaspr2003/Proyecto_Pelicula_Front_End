import React from 'react'

export default function ButtonModal({title = ''}) {
  return (
    <button 
    type="button" 
    className="btn btn-outline-info" 
    data-bs-toggle="modal" 
    data-bs-target="#exampleModal" 
    data-bs-whatever="@mdo"
    >
      {title} 
      </button>
  )
}
