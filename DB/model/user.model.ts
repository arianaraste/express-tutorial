import { Schema, model } from "mongoose";
import { IUser } from "./types.model";

const UsersSchema = new Schema<IUser>({
    fullname:{type : String , required : true , trim : true},
    age:{type : Number  , required : true },
    username:{type : String , required : true },
    password:{type : String , required : true}
},{
    timestamps : true
})

export const UserModel = model<IUser>("users" ,UsersSchema);