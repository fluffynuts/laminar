import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { session } from "@/store/session";
import { SessionsState } from "@/store/session";
import { preparation } from "@/store/preparation";
export * from "./shared";

Vue.use(Vuex);

export interface RootState {
  sessions: SessionsState;
}

export function generateStoreData(): StoreOptions<RootState> {
  return {
    modules: {
      session,
      preparation
    }
  };
}

const storeData = generateStoreData();
export const store = new Vuex.Store<RootState>(storeData);

