
import express,{ Application,NextFunction,Request,Response } from "express";
import { Server, createServer } from "http";
import path from "path";
import index from "serve-index"
const app : Application = express();
const server : Server = createServer(app);
const PORT : number = 3900
app.use(express.static("./serve-index/public/ftp"))
app.use("/ftp" , index("./serve-index/public/ftp" , {icons : true}))


server.listen(PORT,()=>{
    console.log(
        `server run on port ${PORT} : http://localhost:${PORT}`
        
    );
    
})