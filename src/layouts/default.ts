import { Vue, Component } from 'nuxt-property-decorator';
import Header from './Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class extends Vue {}
