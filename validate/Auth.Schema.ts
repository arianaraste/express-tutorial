import Schema from "validate";


export const LoginValidateSchema = new Schema({
    username : {
        type : String ,
        required : true , 
        //length : {min : 6 , max : 12},
        message :  "user name invalid"

    },
    password : {
        type : String ,
        required : true ,
        //length : {min : 6 , max : 12},
        message : "password  invalid"
    }
})