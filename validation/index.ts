
import express,{ Application,NextFunction,Request,Response } from "express";
import { Server, createServer } from "http";
import { ServerError, notFundRoute } from "./err.handel";
import { loginvalidation } from "./auth";
import {validate} from "express-validation"



const app : Application = express();
const server : Server = createServer(app);
const PORT : number = 3600
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.post("/login" ,validate(loginvalidation),(req : Request , res : Response , next : NextFunction)=>{
    try {
        res.send(req.body)
    } catch (error) {
        next(error)
    }
});

app.use(notFundRoute);
app.use(ServerError)
server.listen(PORT,()=>{
    console.log(
        `server run on port ${PORT} : http://localhost:${PORT}`
        
    );
    
})
