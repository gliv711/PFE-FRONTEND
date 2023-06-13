import { Questions } from "./Questions";

export interface Answer {
    answer_id?: number;
    answer?: string;
    status?: boolean;
    questions?:Questions;
}