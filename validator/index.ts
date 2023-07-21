
import express,{ Application,NextFunction,Request,Response } from "express";
import { Server, createServer } from "http";
import { ServerError, notFundRoute } from "./../err/err.handller";
import { LoginValidator, RegisterValidator} from "./auth"
import { Result, validationResult } from "express-validator"
import { error } from "console";
import { isJSDocReturnTag } from "typescript";
import { cheackvalidator } from "./checkvalidator";

const app : Application = express();
const server : Server = createServer(app);
const PORT : number = 3600
app.use(express.urlencoded({extended : true}));
app.use(express.json());
console.log("!");

app.post("/Login" ,LoginValidator(), (req : Request , res : Response , next : NextFunction)=>{
        
    try {
        const error = validationResult(req);
        res.send(error)
        
    } catch (error) {
        next(error)
    }
}
);
app.post("/Register" ,RegisterValidator(), (req : Request , res : Response , next : NextFunction)=>{
    try {
        const error = validationResult(req);
        res.send(error)

        
    } catch (error) {
        next(error)
    }
}
);
    
    


app.use(notFundRoute)
app.use(ServerError)
server.listen(PORT,()=>{
    console.log(
        `server run on port ${PORT} : http://localhost:${PORT}`
        
    );
    
})
