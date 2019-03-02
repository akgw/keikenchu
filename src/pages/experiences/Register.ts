import { Vue } from 'nuxt-property-decorator';

export default Vue.extend({
  created() {
    console.log('経験登録');
  },
  methods: {
    registerExperience() {
      this.$store.dispatch('experiences/register', {
        userId: 'aaaaaaaa',
      });
    },
  },
});
