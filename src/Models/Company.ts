import { lamba } from "./Lamba";



export class Company extends lamba {
    NameofCompany?:string;
    DomaineofActivite?:String;
    NameofResponsible?:String;
    SocialReason?:String;
    lien?:String;
  
    constructor(id: string, email: string, Password: string,phone_number: string,address:String) {
        super( id,email,Password,phone_number,address);
    }

}