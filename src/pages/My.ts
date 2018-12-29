import { Vue } from 'nuxt-property-decorator';
import firebase, { googleProvider } from '../plugins/firebase';

export default Vue.extend({
  created() {
    console.log('myページ');
  },
  methods: {
    async handleClick() {
      const hoge = await firebase.auth().signInWithRedirect(googleProvider);

      console.log(hoge);
    },
  },
});
