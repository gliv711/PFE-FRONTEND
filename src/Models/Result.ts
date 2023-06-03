import { Questions } from "./Form/Questions";


export interface Result {
    result_id? : number ;
    questions? : Questions[] ;
    email? : string ;
    domain?:string ;
}