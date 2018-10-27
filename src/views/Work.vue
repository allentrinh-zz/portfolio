<template>
  <section class="work">
    <Hero/>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue';

export default {
  name: 'Work',
  components: {
    Hero,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';
</style>
