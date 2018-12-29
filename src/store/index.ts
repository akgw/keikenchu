import Vuex from 'vuex';
import modules, { State } from './modules';
import firebase from '@/plugins/firebase';

export type RootState = State;

const createStore = () => {
  return new Vuex.Store({
    actions: {
      nuxtClientInit: async ({ commit, state, dispatch }: any, { req }) => {
        await dispatch('auth/startFetchUserId');
        await fetchUserId(state, dispatch);
      },
    },
    modules,
  });
};

/**
 * ユーザIDを非同期で取得する
 *
 * @param state
 * @param dispatch
 */
const fetchUserId = async (state, dispatch) => {
  // storeへ問い合わせ
  if (state.auth.userId) {
    return dispatch('auth/doneFetchUserId');
  }

  // sessionStorageへ問い合わせ
  const userId = sessionStorage.getItem('uid');
  if (userId != null) {
    await dispatch('auth/successed', { userId });
    return dispatch('auth/doneFetchUserId');
  }

  // firebaseへ問い合わせ
  await firebase.auth().onAuthStateChanged(user => {
    if (user && user.uid) {
      dispatch('auth/successed', { userId: user.uid });
      sessionStorage.setItem('uid', user.uid);
    }
  });
};

export default createStore;
