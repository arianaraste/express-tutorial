
import express,{ Application,NextFunction,Request,Response } from "express";
import { Server, createServer } from "http";
import { ServerError, notFundRoute } from "./../err/err.handller";
import { LoginValidateSchema } from "./Auth.Schema";


const app : Application = express();
const server : Server = createServer(app);
const PORT : number = 3600
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.post("/login" , (req : Request , res : Response , next : NextFunction)=>{
    try {
        const [error] = LoginValidateSchema.validate(req.body);
        if(error)throw error ;
        res.send(req.body)
    } catch (error) {
        next (error)
    }
})

app.use(notFundRoute);
app.use(ServerError)
server.listen(PORT,()=>{
    console.log(
        `server run on port ${PORT} : http://localhost:${PORT}`
        
    );
    
})
