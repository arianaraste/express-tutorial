import { Router } from "express";
import { BlogController } from "../controllers/Blog.Controller";


const Blog= new BlogController()

const BlogRouter : Router = Router();

    console.log("!");
    
    BlogRouter.get("/Blog" , Blog.GetBlog)
    BlogRouter.post("/Blog",Blog.CreateBlog)
    BlogRouter.patch("/Blog/:id" , Blog.UpdateBlog)
    BlogRouter.delete("/Blog/:id" , Blog.RemoverBlog)
    console.log("!");
    
export default BlogRouter


