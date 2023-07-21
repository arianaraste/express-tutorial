import { NextFunction, Request, Response } from "express";
import {Result, ValidationError, validationResult} from "express-validator";

export function cheackvalidator(req : Request , res : Response , next : NextFunction):void {
    try {

        const error = validationResult(req.body);
        
        
    } catch (error) {
        next(error)
    }

}