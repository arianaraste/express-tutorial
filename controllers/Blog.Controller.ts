import { NextFunction, Request, Response } from "express";

export class BlogController{

    GetBlog(req : Request , res : Response , next : NextFunction){
        res.send("Blog")
    }
    CreateBlog(req : Request , res : Response , next : NextFunction){
        res.send("newuser")
    }
    UpdateBlog(req : Request , res : Response , next : NextFunction){
        res.send(`update blog by id #${req.params.id}`)
    }
    RemoverBlog(req : Request , res : Response , next : NextFunction){
        res.send(`delete blog by id #${req.params.id}`)
    }
}