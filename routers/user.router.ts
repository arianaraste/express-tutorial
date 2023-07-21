import { NextFunction, Request, Response, Router, request, response } from "express";
import { CreateUser, GetUser, RemoveUser, UpdateUser } from "../controllers/user.controller";


const UserRouter : Router = Router();

    console.log("!");
    
    UserRouter.get("/user" , GetUser)
    UserRouter.post("/user",CreateUser)
    UserRouter.patch("/user/:id" , UpdateUser)
    UserRouter.delete("/user/:id" , RemoveUser)
    console.log("!");
    
export default UserRouter