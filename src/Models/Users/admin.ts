export class admin{
    id?:number;
    email?:string;
    password?:string;
    phone_number?:string;
    address?:string;
    image?:string;
    constructor(id: number, email: string, password: string,telephone: string,address:string,image : string) {
       this.id=id;
       this.email=email ;
       this.password=password;
       this.address=address;
       this.image=image;

    }
}