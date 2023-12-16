import React from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
  return (
    <div className='navbar'>
      <h2 onClick={()=>navigate("/gallery")}>GALLERY</h2>
      <h2 onClick={()=>navigate("/")}>UPLOAD IMAGE</h2>
    </div>
  )
}

export default Navbar
