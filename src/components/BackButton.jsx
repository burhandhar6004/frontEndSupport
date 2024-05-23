import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({url}) => {
  return (
    <Link to={url} className='btn btn-dark btn-sm mb-3'>
     <i className="fa-solid fa-arrow-left"></i>
    </Link>
  )
}

export default BackButton