import { Questions } from "./Questions";


export interface Survey{
    id?: number;
    title?: string;
    description?: string;
    questions?: Questions[];
}