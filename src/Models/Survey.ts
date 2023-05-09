import { Questions } from "./Questions";


export interface Survey{
    id?: number;
    title?: string;
    description?: string;
    field_survey? : string ;
    questions?: Questions[];
}