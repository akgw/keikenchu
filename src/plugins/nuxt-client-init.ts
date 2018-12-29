export default async (ctx: any) => {
  await ctx.store.dispatch('nuxtClientInit', ctx);
};
