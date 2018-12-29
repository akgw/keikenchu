import { Vue } from 'nuxt-property-decorator';
import firebase, { googleProvider } from '@/plugins/firebase';

export default class extends Vue {
  name: 'login-form';
  async singInWithGoogle() {
    await firebase.auth().signInWithRedirect(googleProvider);
  }
}
