import { Joi } from "express-validation";

export const loginvalidation = {
    body : Joi.object({
        email : Joi.string().email().required(),
        password : Joi.string().min(6).max(16).required().regex(/[a-zA-Z0-9]{6,20}/)
    })
}