import { state } from "./state";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { ICheckItem } from "@/store/shared";

export interface PreparationState {
  beforeSessionChecklist: ICheckItem[];
}

export const preparation = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
