import { Request,Response,NextFunction } from "express";
console.log("!");
export function GetUser(req:Request , res:Response , next:NextFunction){
   return res.send("Blog")
};
export function CreateUser(req:Request , res:Response , next:NextFunction){
   return res.send("newBlog")
 };
export function UpdateUser(req:Request , res:Response , next:NextFunction){
   return res.send(`Update user id #${req.params.id}`)
 };
export function RemoveUser(req:Request , res:Response , next:NextFunction){
   return res.send(`delete user id #${req.params.id}`)
 };
 console.log("!");