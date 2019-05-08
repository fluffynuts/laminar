import { PreparationState } from "@/store/preparation/index";

export const getters = {
  beforeSessionChecklist: (context: PreparationState) => {
    return context.beforeSessionChecklist;
  }
};
