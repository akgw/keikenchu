import { MutationTree, ActionTree, ActionContext, GetterTree } from 'vuex';
import { RootState } from '..';

const type = {
  START_FETCH_USERID: 'startFetchUserId',
  DONE_FETCH_USERID: 'doneFetchUserId',
  DONE_AUTH_SUCCESSED: 'doneAuthSuccessed',
};

export type State = {
  loading: boolean;
  userId: string;
};

const state: State = {
  loading: false,
  userId: '',
};

const mutations: MutationTree<State> = {
  [type.START_FETCH_USERID]: (state: State): void => {
    state.loading = true;
  },
  [type.DONE_FETCH_USERID]: (state: State): void => {
    state.loading = false;
  },
  [type.DONE_AUTH_SUCCESSED]: (state: State, payload): void => {
    state.userId = payload.userId;
    state.loading = false;
  },
};

const actions: ActionTree<State, RootState> = {
  startFetchUserId: async ({ commit, dispatch }: ActionContext<State, RootState>): Promise<void> => {
    commit(type.START_FETCH_USERID);
  },
  doneFetchUserId: async ({ commit, dispatch }: ActionContext<State, RootState>): Promise<void> => {
    commit(type.DONE_FETCH_USERID);
  },
  successed: async ({ commit, dispatch }: ActionContext<State, RootState>, { userId }): Promise<void> => {
    commit(type.DONE_AUTH_SUCCESSED, {
      userId,
    });
  },
};

const getters: GetterTree<State, RootState> = {
  value: (state: State): State => {
    return state;
  },
};

/**
 * vuex modules
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
