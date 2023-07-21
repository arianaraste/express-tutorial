 
import express,{ Application,NextFunction,Request,Response } from "express";
import { Server, createServer } from "http";
import { IUser } from "./model/types.model";
import { UserModel } from "./model/user.model";
import { ServerError, notFundRoute } from "../err/err.handller";



const app : Application = express();
const server : Server = createServer(app);
const PORT : number = 3500;
app.use(express.urlencoded({extended : true}));
app.use(express.json());


app.post("/register" , async(req : Request , res : Response , next  : NextFunction)=>{
    
    try {
        const body : IUser = req.body;
        console.log(body);
        const newUser :IUser  = new UserModel(body)
        console.log(newUser);
        
    if (!newUser) {
        return res.json({
            status : 404 ,
            message : "not foun user"
        })
    }else{
        return res.json({
            status : 200 ,
            message : `welcome to website ${newUser.fullname}`
        })
    };
   } catch (error) {
        console.log(error);
        next(error)
   }
})
app.use(notFundRoute);
app.use(ServerError)

server.listen(PORT,()=>{
    console.log(
        `server run on port ${PORT} : http://localhost:${PORT}`
        
    );
    
})
