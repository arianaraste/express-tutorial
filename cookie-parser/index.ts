
import express,{ Application,Request,Response } from "express";
import { Server, createServer } from "http";
import cookieParser, { signedCookie } from "cookie-parser";
const app : Application = express();
const server : Server = createServer(app);
const PORT : number = 3000

app.use(cookieParser("5707f256439a7ac7f72bb6b8197e0f97"));
app.get("/set-cookie" , (req : Request ,res: Response)=>{
    
    const d = new Date()
    res.cookie("CookieName" , "CookieValue" , {
        maxAge : 10000 ,
        expires : new Date(d.getTime() + 5000),
        httpOnly : true ,
        signed : true ,
        secure : true ,
        sameSite : "none"
    });
    res.send("cookie have been saved succesfully");

});
app.get("/get-cookie" , (req : Request ,res: Response)=>{
    
    const cookies = req.cookies
    const signcookie = req.signedCookies;
    res.send({cookies , signcookie});

});
app.get("/clear-cookie/:name" , (req : Request ,res: Response)=>{
    
   res.clearCookie(req.params.name);
   res.send("cookie have been delete")

})

server.listen(PORT,()=>{
    console.log(
        `server run on port ${PORT} : http://localhost:${PORT}`
        
    );
    
})