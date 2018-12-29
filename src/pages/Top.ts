import { Vue, Component } from 'nuxt-property-decorator';
import LoginForm from '@/components/login/Form.vue';

@Component({
  components: {
    LoginForm,
  },
})
export default class extends Vue {
  created() {
    console.log('トップページ');
  }
}
