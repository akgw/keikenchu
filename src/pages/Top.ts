import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class extends Vue {
  created() {
    console.log('トップページ');
  }
}
