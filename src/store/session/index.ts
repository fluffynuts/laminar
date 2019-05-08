import { state } from "./state";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { ICheckItem } from "@/store/shared";

export interface Session {
  goals: string;
  goalItems: ICheckItem[];
  reflections: string;
}

export interface SessionsState {
  currentSession: Session;
  history: Session[];
}


export const session = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
