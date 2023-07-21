
import express,{ Application,Request,Response } from "express";
import { Server, createServer } from "http";
import ApplicationRouter from "./index"
const app : Application = express();
const server : Server = createServer(app);
const PORT : number = 5600
console.log("!");
app.use(ApplicationRouter)


server.listen(PORT,()=>{
    console.log(
        `server run on port ${PORT} : http://localhost:${PORT}`
        
    );
    
})
