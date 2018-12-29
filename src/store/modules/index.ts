import auth, { State as AuthState } from './auth';

export type State = {
  auth: AuthState;
};

export default {
  auth,
};
