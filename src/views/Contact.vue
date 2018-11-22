<template>
  <section class="contact">
    <Hero image="dolomites.jpg"/>
    <div class="section content">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h2 class="subtitle is-spaced is-4">Let's work together</h2>
            <p class="large-print">If you want to make something fancy but don't have the <em>know-how</em>, let's chat!</p>
            <hr>
            <h4 class="subtitle is-2">Follow me!</h4>
            <SocialLinks/>
          </div>
          <div class="column">
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'Contact',
  components: {
    Hero,
    ContactForm,
    SocialLinks,
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

h2, h4 {
  color: #fff;
}

.large-print {
  color: #fff;
  font-size: 3.5rem;
}

.social {
  justify-content: left;
}
</style>
