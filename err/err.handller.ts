import { NextFunction, Request, Response } from "express";
import { Response_Type } from "../types";
import {checkvalidation} from "./../validation/validation_mapper";
import { error } from "console";

export function notFundRoute(req :Request , res : Response ,next : NextFunction) : void{
        const status : Number = +res.status | res.statusCode | 404;
        const message : string = "not fund page"
       res.json(
        {
            Status : status,
        Message : message
     }
       )
};
export function ServerError(err : any ,req :Request , res : Response ,next : NextFunction) : void{
    const status : number = +err?.statusCode || 500;
    const massage : string = err?.message || "InternalServerError "
    const errors  = err?.errors || checkvalidation(err) || [];
    
    
    const response: Response_Type = {

        Status_Code : status ,
        Response_Massage : massage ,
        errors : errors
          
    };
    
    res.json(response);
};
