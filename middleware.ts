
import express,{ Application,NextFunction,Request,Response, urlencoded } from "express";
import { Server, createServer } from "http";
import { users,  product, Blog } from "./types";
const app : Application = express();
const server : Server = createServer(app);
const PORT : number = 3000
app.use(express.urlencoded({extended : true}))
app.use(express.json())
const products : product[] = [
    {id : "1",product_name : "sabon_golnar" , price : 1 , cunt : 10},
    {id : "2",product_name : "soda" , price : 3 , cunt : 1},
    {id : "3",product_name : "wood" , price : 10 , cunt : 5},
];
const users : users[] = [
    {id : "1" , name : "arian" , age :20},
    {id : "2" , name : "daniel" , age :18},
    {id : "3" , name : "ali" , age :21}
]

const Blog :Blog[] = [
    {
        title : "trade",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nulla"
    },
    {
        title : "digital marketing",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nulla"
    },
    {
        title : "node js",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nulla"
    },
    {
        title : "backend",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nulla"
    }
]

app.get("/" ,(req : Request , res : Response)=>{

        const query : Object = req.query;
        console.log(query);
        return res.json({

                status : 200 ,
                message : "success",
                data : query,
                url : req.url
                
            })         
});
function check_Auth(req : Request , res : Response , next : NextFunction) {
    const {username , pass} = req.body;
    const real_pass : String = "7862";
    const real_user : string = "arian";
    
    try {
        if (username !== real_user && pass !== real_pass)return res.send("cant accespt")
    } catch (error) {
        console.log(error);
        
    }
    next()
}
app.use(check_Auth)
app.get("/Product"  , (req , res , next :NextFunction)=>{
    return res.send(products[5])
    console.log(users[5]);
    
})
/*
app.get("/Blog" , (req : Request , res : Response)=>{
    const {title} = req.query ;
    const reg : RegExp = new RegExp (`${title}` ?? "");
    const filter : Blog | undefined = Blog.find(Blog => Blog.title.match(reg)) 
    if(!filter) return res.json({status : 404 , message : "not fund blog"});
    return res.json({
        status : 200 ,
        data : filter
    });
})
*/

app.use((req : Request , res : Response , next : NextFunction)=>{
    res.status(404).json({
        status : 404 ,
        massage : "not found"
    })
});
app.use((err : any ,req : Request , res : Response , next : NextFunction)=>{
    res.json({
        status : err.status || 500 ,
        massage : err.massage || "internall server error"
    })
})

server.listen(PORT,()=>{
    console.log(
        `server run on port ${PORT} : http://localhost:${PORT}`
        
    );
    
})



