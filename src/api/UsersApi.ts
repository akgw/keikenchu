import firebase from '@/plugins/firebase';

export default class UsersApi {
  private referance;
  public constructor() {
    this.referance = firebase.database().ref('users');
  }

  public async fetch(userId: string) {
    console.log(userId);
    return this.referance.orderBy('created_at', 'desc').get();
  }
}
