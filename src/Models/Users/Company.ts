import { lambda } from "./Lambda";



export class Company extends lambda {
    nameofCompany?:string;
    domaineofActivity?:string;
    nameofResponsible?:string;
    socialReason?:string;
    link?:File;
  
    constructor(id: number, email: string, Password: string,phone_number: string,address:string,image : string) {
        super( id,email,Password,phone_number,address,image);
    }

}