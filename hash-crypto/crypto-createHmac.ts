import crypto from "crypto"
const secret = crypto.randomBytes(16).toString("hex")
const hash = crypto.createHmac("sha512",secret).update("123456").digest("hex");
console.log(hash);
