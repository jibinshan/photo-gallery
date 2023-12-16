import React, { useState } from 'react'
import "./upload.css"
import axios from 'axios'
import Navbar from './Navbar'

function Upload() {
    const [image,setImage] = useState(null)
    const [file,setFile] = useState("")
    const handlefile = (e)=>{
        const selectedimage = (e.target.files[0])
        setFile(selectedimage)
        const imageurl = URL.createObjectURL(selectedimage)
        setImage(imageurl)
      }
      const api = "http://localhost:1999/upload"
    const handlesubmit = async()=>{
      const formdata = new FormData()
      formdata.append("upload_file",file)
      try {
        const response = await axios(api,{
        method:"POST",
        data:formdata
        })
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div className='Upload'>
      <Navbar/>
      <div className="upload-container">
         <input type="file"  onChange={handlefile}/>
         <img src={image} alt="" />
         <button onClick={handlesubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Upload
