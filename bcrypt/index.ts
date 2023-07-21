import bcrypt from "bcrypt";

function hashpassword(password : string):string{

    const salt : string = bcrypt.genSaltSync(10);
    const hash : string = bcrypt.hashSync(password , salt);
    return hash
};

function veriypass(pass :string , hash :string) : boolean {

    const verfypassword : boolean = bcrypt.compareSync(pass , hash);
    return verfypassword

};


const hash : string = hashpassword("123456");
console.log(veriypass("123456" , hash));

