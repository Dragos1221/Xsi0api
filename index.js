const express = require("express");
const app = express();
const server = require("http").Server(app);
const io =require("socket.io")(server);
const { v4:uuidv4 } =require('uuid');

app.use(express.json());
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.send("Bine ati venit");
})

app.get("/newLobby", (req,res)=>{
    res.send(uuidv4());
})

server.listen(3000 , ()=>{
    console.log("Serverul asculta pe 3000...")
})

