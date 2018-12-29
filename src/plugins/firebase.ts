import * as firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default (!firebase.apps.length ? firebase.initializeApp(config) : firebase.app());
