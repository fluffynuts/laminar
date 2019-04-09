import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

Vue.use(Vuex);

export interface CheckItem {
  label: string;
  checked: boolean;
}

export interface Session {
  goals: string;
  goalItems: CheckItem[];
  reflections: string;
}

export interface SessionsState {
  currentSession: Session;
}

export interface RootState {
  sessions: SessionsState;
}

export function generateStoreData(): StoreOptions<RootState> {
  return {
    modules: {
      session: {
        namespaced: true,
        state: {
          currentSession: null
        } as SessionsState,
        getters: {
        },
        actions: {
        },
        mutations: {
        }
      }
    }
  };
}

const storeData = generateStoreData();
export const store = new Vuex.Store<RootState>(storeData);

