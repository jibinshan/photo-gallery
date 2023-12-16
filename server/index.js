const express = require("express")
const cors = require("cors")
const app = express()
const image = require("./router/pictures")

app.use(cors())
app.use(express.json())
app.use(express.static("public"))
app.use("/",image)


app.listen(1999,()=>console.log("the server is running on port no.1999"))