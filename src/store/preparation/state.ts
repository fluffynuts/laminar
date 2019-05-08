import { PreparationState } from "@/store/preparation/index";
import { unchecked } from "@/store/shared";

export const state = {
  beforeSessionChecklist: [
    unchecked("fetch a snack"),
    unchecked("fetch a beverage"),
    unchecked("visit the facilities"),
    unchecked("assist a team-mate")
  ]
} as PreparationState;
