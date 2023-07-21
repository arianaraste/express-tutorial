import { Router } from "express";
import UserRouter from "./user.router";
import BlogRouter from "./Blog.router";
console.log("!");
const router : Router = Router();

router.use(UserRouter);
router.use(BlogRouter)
export default router