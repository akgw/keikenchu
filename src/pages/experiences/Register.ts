import { Vue } from 'nuxt-property-decorator';

export default Vue.extend({
  created() {
    console.log('経験登録');
    this.$store.dispatch('experiences/fetch', {
      userId: 'aaaaaaaa',
    });
  },
  methods: {
    registerExperience() {
      this.$store.dispatch('experiences/register', {
        userId: 'aaaaaaaa',
      });
    },
  },
});
