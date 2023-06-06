export class lambda{
    id?:number;
    email?:string;
    password?:string;
    phone_number?:string;
    address?:string;
    constructor(id: number, email: string, password: string,telephone: string,address:string) {
       this.id=id;
       this.email=email ;
       this.password=password;
       this.address=address;

    }
}
