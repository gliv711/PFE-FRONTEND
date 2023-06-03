import { Questions } from "./Form/Questions";


export interface Result {
    id? : number ;
    questions? : Questions[] ;
    email? : string ;
    domain?:string ;
}