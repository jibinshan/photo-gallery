import React, { useEffect, useState } from 'react'
import './gallery.css'
import axios from 'axios'
import Navbar from './Navbar'

function Gallery() {
    
    const [pictures,setPictures] = useState([])
    const api = "http://localhost:1999/images"
    const fetchdata = async()=>{
      const response = await axios(api)
       setPictures(response.data)  
       console.log(response.data,"=====/////");
    }
    useEffect(()=>{
      fetchdata()
    },[])
  return (
    <div className='gallery'>
        <Navbar/>
        <div className='images'>
        {
          pictures.map((pic)=>{
            console.log(pic);
            return(
              <img src={`http://localhost:1999/images/${pic}`} alt="noimage" />
              )
            })
          }
          </div>
    
    </div>
  )
}

export default Gallery
