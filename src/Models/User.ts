import { lamba } from "./Lamba";




export class User extends lamba   {
   
    lastName?:String;
    name?:String;
    role?:String;
    image?:String;
    domain?:String;
    university?:String;
    NameofCompany?:String;
    BirthDate?:Date ;
    region?:String;
    startofStudy?:Date ;
    endofStudy?:Date ;
    startofWork?:Date ;
    endofWork?:Date ;
    constructor(id: string, email: string, Password: string,phone_number: string,address:String, lastName:String,name:String, role:String, image:String,  domain:String,  university:String,nomdesocite:String, dateDeNaissance:Date , region :String,confpassword  :String, startofStudy:Date , dateDeDebuNaissance:Date ,endofStudy:Date ,startofWork:Date, endofWork:Date ){
        super( id ,email,Password,phone_number,address);

    }

}