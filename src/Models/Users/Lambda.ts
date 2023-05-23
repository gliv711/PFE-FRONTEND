export class lambda{
    id?:number;
    email?:String;
    Password?:String;
    phone_number?:String;
    address?:String;
    image?:string;
    constructor(id: number, email: string, Password: string,telephone: string,address:String,image : string) {
       this.id=id;
       this.email=email ;
       this.Password=Password;
       this.address=address;
       this.image=image;

    }
}
