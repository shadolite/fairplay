import { Category, Split } from "./enums"

export type ResponsibilityEntity = {
  id: string;
  category: Category;
  definition: string;
  dailyGrind: boolean;
  happinessTrio: boolean;
  split: Split;
}