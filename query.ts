
import express,{ Application,Request,Response } from "express";
import { Server, createServer } from "http";
import { users,  product, Blog } from "./types";
const app : Application = express();
const server : Server = createServer(app);
const PORT : number = 3000
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

server.listen(PORT,()=>{
    console.log(
        `server run on port ${PORT} : http://localhost:${PORT}`
        
    );
    
})
