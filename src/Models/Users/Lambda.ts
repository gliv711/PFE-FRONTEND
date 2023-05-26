export class lambda{
    id?:number;
    email?:string;
    Password?:string;
    phone_number?:string;
    address?:string;
    image?:string;
    constructor(id: number, email: string, Password: string,telephone: string,address:string,image : string) {
       this.id=id;
       this.email=email ;
       this.Password=Password;
       this.address=address;
       this.image=image;

    }
}
