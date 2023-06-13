import { CustomFile } from "../CustomFile";

export class admin{
    id?:number;
    email?:string;
    password?:string;
    phone_number?:string;
    address?:string;
    picture?:CustomFile;

    constructor(id: number, email: string, password: string,telephone: string,address:string, picture:CustomFile) {
       this.id=id;
       this.email=email ;
       this.password=password;
       this.address=address;
       this.picture=picture;

    }
}