import { MutationTree, ActionTree, ActionContext, GetterTree } from 'vuex';
import { RootState } from '..';
import RepositoryFactory from '@/repositories/RepositoryFactory';

const type = {
  START_REGISTER_EXPERIENCE: 'START_REGISTER_EXPERIENCE',
};

export type State = {
  loading: boolean;
};

const state: State = {
  loading: false,
};

const mutations: MutationTree<State> = {
  [type.START_REGISTER_EXPERIENCE]: (state: State): void => {
    state.loading = true;
  },
};

const repository = RepositoryFactory.createExperiencesRpository();
const actions: ActionTree<State, RootState> = {
  fetch: async ({ commit, dispatch }: ActionContext<State, RootState>, payload): Promise<void> => {
    return await repository.fetch(payload.userId);
  },

  register: async ({ commit, dispatch }: ActionContext<State, RootState>, payload): Promise<void> => {
    commit(type.START_REGISTER_EXPERIENCE);

    await repository.register(payload.userId, 'test_title', 'test_description', 0);
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
