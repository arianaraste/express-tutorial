
import express,{ Application,NextFunction,Request,Response } from "express";
import { Server, createServer } from "http";
import path from "path";
import favicon from "serve-favicon"
const app : Application = express();
const server : Server = createServer(app);
const PORT : number = 3200

app.use(favicon(path.join(__dirname,"arsify.png")))
app.get("/" , (req : Request , res : Response , next : NextFunction)=>{
    res.send("hllo")
})

server.listen(PORT,()=>{
    console.log(
        `server run on port ${PORT} : http://localhost:${PORT}`
        
    );
    
})