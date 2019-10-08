<template>
  <section id="four-oh-four">
    <Hero image="horizon.jpeg" :isFullHeight="true" :hideArrow="true">
      <template #heroContent>
        <p>Oh no! It looks like you've tried reaching a page that doesn't exits.</p>
        <p>This is a pretty small website, so you can check out <router-link to="who-am-i">Who I Am</router-link> or just <router-link to="contact">Contact</router-link> me!</p>
      </template>
    </Hero>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue';

export default {
  name: 'Four04',
  components: {
    Hero,
  },
  data() {
    return {

    };
  },
};
</script>
