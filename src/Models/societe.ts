import { lamba } from "./Lamba";



export class societe extends lamba {
    nameSociete?:string;
    domaineActivite?:String;
    nameResponsable?:String;
    raisionSocial?:String;
    adresse?:String;
    lien?:String;
  
    constructor(id: string, email: string, Password: string,phone_number: string,address:String) {
        super( id,email,Password,phone_number,address);
    }

}