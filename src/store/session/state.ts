import { Session, SessionsState } from "@/store/session";

export const state: SessionsState = {
  currentSession: null,
  history: [] as Session[]
};
