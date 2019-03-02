import auth, { State as AuthState } from './auth';
import experiences, { State as ExperiencesState } from './experiences';

export type State = {
  auth: AuthState;
  experiences: ExperiencesState;
};

export default {
  auth,
  experiences,
};
