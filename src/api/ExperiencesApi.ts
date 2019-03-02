import firebase from 'firebase/app';
import 'firebase/database';

const initialExperience = {
  user_id: '',
  title: '',
  description: '',
  progress: 0,
};

interface IExperience {
  user_id: string;
  title: string;
  description: string;
  progress: number;
}

export interface IRegisterRequest extends IExperience {}
type IFetchResponse = IExperience[];

export default class ExperiencesApi {
  private database = firebase.database();
  private databaseName = 'experiences';

  public async fetch(user_id: string): Promise<IFetchResponse> {
    let ret;
    await this.database.ref(`${this.databaseName}/${user_id}`).once('value', snapshot => {
      ret = snapshot ? snapshot.val() : null;
    });

    return ret ? ret : [initialExperience];
  }

  public async register(requestParams: IRegisterRequest) {
    return this.database.ref(`${this.databaseName}/${requestParams.user_id}`).push(requestParams);
  }
}
