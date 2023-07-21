import crypto from "crypto"

function hashpassword(password : string) : string {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto.pbkdf2Sync(password , salt , 1000 , 64 , "sha512");
    console.log(salt);
    const newhash = `2s.${salt}.${hash}`
    return newhash
};
function verifypassword(password : string ,hashpassword : string) :boolean {
    const salt = hashpassword.split(".")?.[1];
    const hash = crypto.pbkdf2Sync(password , salt , 1000 , 64 , "sha512");
    const newhash = `2s.${salt}.${hash}`
    return (newhash == hashpassword)
}

const hashpass = hashpassword("123456");
const result = verifypassword("123456" , hashpass);

console.log(result);

