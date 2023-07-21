
import express,{ Application,Request,Response } from "express";
import { Server, createServer } from "http";
const app : Application = express();
const server : Server = createServer(app);
const PORT : number = 3500

app.get(/[a-z]/,(req : Request , res: Response)=>{
    res.status(200).send("accepted : " + req.url)
})

server.listen(PORT,()=>{
    console.log(
        `server run on port ${PORT} : http://localhost:${PORT}`
        
    );
    
})