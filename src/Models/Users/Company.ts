import { CustomFile } from "../CustomFile";
import { lambda } from "./Lambda";



export class Company extends lambda {
    nameofCompany?:string;
    domaineofActivity?:string;
    nameofResponsible?:string;
    socialReason?:string;
    link?:File;
    picture?:CustomFile;

    constructor(id: number, email: string, Password: string,phone_number: string,address:string,domaineofActivity : string,nameofResponsible : string,nameofCompany:string) {
        super( id,email,Password,phone_number,address);
       
    }

}