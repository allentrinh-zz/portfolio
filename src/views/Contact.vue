<template>
  <section class="contact">
    <Hero image="dolomites.jpg"/>
    <div class="section content">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <h2 class="subtitle is-spaced is-5">Let's work together</h2>
            <p class="large-print">If you want to make something fancy but don't have the <em>know-how</em>, let's chat!</p>
            <a href="mailto:allenmtrinh@gmail.com?subject=Hey,%20Allen!&body=Let's%20build%20something!" class="button ghost" @click="trackEvent('Contact Page Email');">allenmtrinh@gmail.com</a>
            <hr>
            <h4 class="subtitle is-5">Follow me!</h4>
            <SocialLinks/>
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
  methods: {
    trackEvent(label) {
      this.$ga.event('Email', 'Click', label);
    },
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
  font-size: 2rem;
}

.social {
  justify-content: left;
}
</style>
