import { error } from 'console';
import mongoose, { Mongoose } from 'mongoose';
const DB = mongoose.connect("mongodb://localhost/227017/users").then(()=>{console.log("connected to db")}).catch((error : any)=>{console.log(error.message)});
