import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import bodyparser from 'body-parser'
import cors from 'cors';
const _dirname = dirname(fileURLToPath(import.meta.url));
const app =  express();
// const corsOptions ={
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//  }
// app.use(cors(corsOptions))
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",(req,res) => {
   // console.log(dirname + "\index.html");
    res.set('Access-Control-Allow-Origin', '*');
    res.json([{name:"VP", id:5},{name:"TV", id:3}]);
})

app.get("/middleware",(req,res) =>{
    console.log(_dirname + "\\index.html");
    res.sendFile(_dirname + "\\index.html")
})

app.post("/submit", (req,res) =>{
    console.log(req.body);

})

app.post("/About",(req,res) => {
    res.sendStatus(201);
})

app.put("/Contact/phone",(req,res) => {
    res.sendStatus(200);
})

app.patch("/user/Venkat",(req,res) => {
    res.sendStatus(200);
})

app.delete("/user/Venkat",(req,res) => {
    res.sendStatus(200);
})

app.listen(5000,() => {
console.log("server is running in port 5000");
})