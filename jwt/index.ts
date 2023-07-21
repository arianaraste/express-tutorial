import jwt from "jsonwebtoken";

const secret = "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92"

const Token = jwt.sign({
    id : "1",
    user : "arian"
},secret , {
    expiresIn : "1s",
    
});




console.log(Token);
setTimeout(() => {
    try {
        const veriy = jwt.verify(Token , secret);
        console.log(veriy);
    } catch (err) {

        console.log(err);
        
    }
}, 1000);

setTimeout(() => {
    try {
        const decode = jwt.decode(Token)
        console.log(decode);
        
    } catch (err) {
        
        console.log(err);
        
    }
}, 1000);
