import { lambda } from "./Lambda";



export class Company extends lambda {
    NameofCompany?:string;
    DomaineofActivite?:String;
    NameofResponsible?:String;
    SocialReason?:String;
    link?:File;
  
    constructor(id: number, email: string, Password: string,phone_number: string,address:String,image : string) {
        super( id,email,Password,phone_number,address,image);
    }

}