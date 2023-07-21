
import express,{ Application,NextFunction,Request,Response } from "express";
import { Server, createServer } from "http";
import dotenv from "dotenv";
import path from "path";
dotenv.config()

const Node_Env = process.env.NODE_ENV;

dotenv.config({
    path : path.join(__dirname , `.env${Node_Env}`)
})

const app : Application = express();
const server : Server = createServer(app);

app.get("/" , (req : Request , res : Response , next: NextFunction)=>{
    res.send(req.url)
})

server.listen(process.env.PORT,()=>{
    console.log(
        `server run on port ${process.env.PORT} : http://localhost:${process.env.PORT}`
        
    );
    
})