import { buffer } from "stream/consumers";

// basic
const userpass = "arian/12345";
const Base64Data = Buffer.from(userpass).toString(`base64`);
console.log(`data : ${Base64Data}`);

const decode = Buffer.from(Base64Data , `base64`).toString(`ascii`);
const [user , pass] = decode.split("/");
console.log(user , pass);

// bearer



// api key



// digest



// OAuth


