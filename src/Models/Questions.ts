import { Answer } from "./Answer";

export interface Questions {
  question_id?: number;
    question?: string;
    field?: string;
    answers?: Answer[];
  }