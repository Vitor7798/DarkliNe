const express = require("express")

const server = express()

server.get("/", (req, res)=>{
  res.sendFile("/app/src/script/index.html")
})



server.use(express.static("src"))



server.listen(process.env.PORT)