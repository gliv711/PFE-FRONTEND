import { lambda } from "./Lambda";




export class User extends lambda   {
   
    lastName?:string;
    name?:string;
    role?:string;
    domain?:string;
    university?:string;
    NameofCompany?:string;
    birthDate?:Date ;
    region?:string;
    startofStudy?:Date ;
    endofStudy?:Date ;
    startofWork?:Date ;
    endofWork?:Date ;

    constructor(id: number, email: string, Password: string,
        phone_number: string,address:string, lastName:string | undefined,name:string | undefined, role:string | undefined, 
        image : string,  domain:string | undefined,  university:string | undefined,NameofCompany:string,
        birthDate:Date , region :string,confpassword  :string, startofStudy:Date , 
         dateDeDebuNaissance:Date ,endofStudy:Date ,startofWork:Date, endofWork:Date )


         
         {
        super( id ,email,Password,phone_number,address,image);

    }

}