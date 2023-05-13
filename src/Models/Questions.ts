import { Answer } from "./Answer";
import { Survey } from "./Survey";

export interface Questions {
  question_id?: number;
    question?: string;
    field?: string;
    answers?: Answer[];
    questions?:Questions[];
    surveys?:Survey[];
  }