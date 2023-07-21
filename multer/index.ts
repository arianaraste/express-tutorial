

import express,{ Application,NextFunction,Request,Response } from "express";
import { Server, createServer } from "http";
import multer from "multer";
import { uploadfile } from "./multer";
import { ServerError, notFundRoute } from "../err/err.handller";


const app : Application = express();
const server : Server = createServer(app);
const PORT : number = 4600


app.use(express.static("public"))
app.use(express.urlencoded({extended : true}));
app.use(express.json());



app.post("/upload" , uploadfile.single("image"),(req : Request , res : Response , next : NextFunction)=>{
    res.send(req.file),
    console.log(req.body);
    
})
app.use(notFundRoute);
app.use(ServerError)

server.listen(PORT,()=>{
    console.log(
        `server run on port ${PORT} : http://localhost:${PORT}`
        
    );
    
})
