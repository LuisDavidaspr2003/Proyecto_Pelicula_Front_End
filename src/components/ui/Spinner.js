import React from 'react'

export default function Spinner() {
  return (
    <div>
        <div className="d-flex justify-content-center">
      <div className="d-flex align-items-center">
        <button className="btn btn-primary" type="button" disabled>
          <span className="spinner-grow spinner-grow-sm " aria-hidden="true"></span>
          <span role="status">Loading...</span>
        </button>
      </div>
    </div>

    </div>
  )
}
