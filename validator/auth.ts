import { log } from "console";
import { body } from "express-validator"
import { type } from "os";

export const LoginValidator = ()=>[  
    body("username").isEmail(),
    body("password").isLength({  min :6 ,max : 16})
];


export const RegisterValidator = ()=>[
    body("fullname").isLength({min : 5 , max : 20}).withMessage("full name isnt valid"),
    body("age").custom(value=>{
        let age = +value
        
        console.log(typeof age);
        if (age > 90 || age < 18)throw new Error("your age dosent accses")
        
    }),
    body("mobile").isMobilePhone(["fa-IR"]).withMessage("mobile format isnt valid"),
    body("username").isEmail().withMessage("username isnt valid"),
    body("password").isLength({max : 16 , min : 8}).withMessage("pass have to be 8 to 16"),
    body("confirmpass").custom((value , {req})=>{
        if(value !== req.body.password) throw new Error("pass does not match with confirmation")
        return true

    })


];
