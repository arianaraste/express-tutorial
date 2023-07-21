import multer, { Options } from "multer";
import path from "path";
import fs from "fs"
import { error } from "console";


const storage = multer.diskStorage({
    destination(req, file, callback) {

        fs.mkdirSync("multer/public/upload" , {recursive : true})
        callback(null ,"multer/public/upload" )
    },
    filename(req, file, callback) {
        const WhiteListFormat : string[] = [".jpg" , ".png" , ".webp" , ".jpeg"];
        const ext = path.extname(file.originalname);
        const fileName = Date.now() + ext;

        if(WhiteListFormat.includes(ext)){
            callback(null , fileName)
        }else{
            
            const err : Error = new Error("only png jpeg jpg webp allowed")
            callback(err , fileName)
            
        }
        console.log(ext , file.mimetype);
        
    },
});
const _3mb = 3 *1000*1000
export const uploadfile = multer({storage ,limits : {fileSize :_3mb}})