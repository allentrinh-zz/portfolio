<template>
  <section class="contact">
    <Hero/>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <ContactForm/>
          </div>
          <div class="column">

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue';
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'Contact',
  components: {
    Hero,
    ContactForm,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.contact {
  font-family: $font;
  background: $color;
  color: #fff;
}
</style>
