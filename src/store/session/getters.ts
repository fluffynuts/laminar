import { SessionsState } from "@/store/session/index";

export const getters = {
  currentSession: (context: SessionsState) => {
    return context.currentSession;
  },
  history: (context: SessionsState) => {
    return context.history;
  }
};
