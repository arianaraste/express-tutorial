
export type users = Object&{
    id : string,
    name : string
    age : number
}
export type product = {
    id:string
    product_name : string;
    price : number;
    cunt : number
};
export type Blog = {
    title : string,
    desc : string
}

export type Response_Type = {

    Status_Code : number ,
    Response_Massage? : string | undefined,
    Response_Data? : object | undefined,
    errors? : object | undefined,
    data ? : string| undefined
    

};