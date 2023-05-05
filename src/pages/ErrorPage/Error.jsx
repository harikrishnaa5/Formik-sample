import React from 'react'
import { Link } from 'react-router-dom'
import "./Error.css"

const Error = () => {
  return (
    <div className='error-container'><h1>Error 404</h1>
    <h3>Page not found</h3><br />
    <Link className='back-home' to="../Home">
            Back to home
        </Link>
    </div>
  )
}

export default Error