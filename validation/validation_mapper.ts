import { NextFunction ,Response,Request } from "express";
import { Context } from "express-validator/src/context";
import { json } from "stream/consumers";

const error = {
    "name": "ValidationError",
    "message": "Validation Failed",
    "statusCode": 400,
    "error": "Bad Request",
    "details":{ 
        "body": [
            {
                "message": "\"email\" is required",
                "path": [
                    "email"
                ],
                "type": "any.required",
                "context": {
                    "label": "email",
                    "key": "email"
                }
            }
        ]
    }
};

export function checkvalidation(err : any) : void{
    
      const {details} = err;

      let InvalidParam : any  = {}  

       if(details?.body?.length>0){
        for (const item of details?.body) {
            InvalidParam[item?.context?.key] = item.message
        }return InvalidParam
       }

       return InvalidParam
}