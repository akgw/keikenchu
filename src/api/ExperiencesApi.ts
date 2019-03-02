// import firebase from '@/plugins/firebase';
import firebase from 'firebase/app';
import 'firebase/database';

export interface IRegisterRequest {
  user_id: string;
  title: string;
  description: string;
  progress: number;
}

export default class ExperiencesApi {
  private referance;
  public constructor() {
    this.referance = firebase.database().ref('experiences');
  }

  public async register(requestParams: IRegisterRequest) {
    return this.referance.push(requestParams);
  }
}
