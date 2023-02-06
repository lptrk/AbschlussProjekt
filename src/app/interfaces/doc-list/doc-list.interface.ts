import { Doc } from "../doc/doc.interface";

export interface DocList {
  Note: string;
  IsReleased: boolean;
  Docs: Doc[];
}
