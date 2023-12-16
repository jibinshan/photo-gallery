const express = require("express")
const router = express.Router()
const multer = require("multer")
const imageArr = []
      const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, '/public/images')
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
            const extension = file.originalname.split(".").pop();
            cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
          },
      })
      
      
      const upload = multer({ storage: storage })
    router.get("/images",(req,res)=>{
        try {
       
            return res.status(200).json( imageArr)
        
        } catch (error) {
           res.status(404).json(error.message) 
        }
    })
    router.post("/upload",upload.single("upload_file"),(req,res)=>{
         try {
            console.log(typeof(req.file.filename));
            imageArr.push(req.file.filename)
           return res.status(200).json(imageArr)
         } catch (error) {
           return res.status(401).json(error.message)
         }
    })
    module.exports = router;
