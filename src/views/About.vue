<template>
  <section class="about">
    <Hero image="arch.jpeg"/>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column content">
            <h2 class="subtitle is-3">Creative Web Designer &amp; Developer</h2>
            <div class="columns is-desktop">
              <div class="column is-4-desktop">
                <img :src="require('../assets/allen-trinh.png')" class="profile-picture" alt="Hi, I'm Allen">
              </div>
              <div class="column">
                <p>Hi! I'm the Engineering Manager at <a href="https://www.thinkresite.com" target="_blank">Resite</a> in Virginia Beach, VA. I have an obsession with clean, readable code and find satisfaction in micro animations that bring an application to life.</p>
                <p>Designing useful tools makes me happy. <router-link to="/contact">Let's find something to work on together</router-link></p>
              </div>
            </div>
          </div>
          <div class="column">
            <h2 class="subtitle is-3">Technologies Used</h2>
            <p class="mb-1">My curiosity for web technologies has led me to experiment with many different languages, frameworks, and workflows.</p>
            <p class="tech" v-for="tech in techUsed" :key=tech>{{ tech }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container content">
        <h2 class="subtitle">Work History</h2>
        <div class="columns is-desktop">
          <div class="column is-4-desktop">
            <p>Starting off as a humble web designer, I quickly learned my love for user interface was only bested by my love for useful, functional tools.</p>
            <p>There is no greater user experience than using a tool that just works!</p>
            <p>I am currently exploring utilizing Vuejs and Nativescript to build apps.</p>
          </div>
          <div class="column is-7-desktop is-offset-1-desktop">
            <TimeLine/>
          </div>
        </div>
      </div>
    </div>
    <div class="closer section has-text-centered">
      <div class="columns">
        <div class="column is-4 is-offset-4 content">
          <p>I enjoy every project I work on as they bring on new experiences and growth. I invite you to bring me your ideas and we'll see how we can bring them to fruition!</p>
          <router-link to="/contact" class="button ghost">Contact</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue';
import TimeLine from '@/components/TimeLine.vue';

export default {
  name: 'About',
  components: {
    Hero,
    TimeLine,
  },
  data() {
    return {
      techUsed: [
        'html5',
        'sass/scss',
        'javascript',
        'php',
        'npm',
        'node',
        'gulpjs',
        'linux',
        'react',
        'vuejs/nuxt',
        'laravel',
        'wordpress',
        'shopify',
        'opencart',
      ],
    };
  },
  methods: {
    fillSkillBars() {
      const bars = document.querySelectorAll('.fill-bar');
      let timeOut = 300;
      bars.forEach((bar) => {
        const skillLevel = bar.getAttribute('data-skill-level');
        setTimeout(() => bar.setAttribute('style', `width: ${skillLevel}%`), timeOut);
        timeOut += 100;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.about {
  font-family: $font;
  background: $color;
  color: #fff;
}

.subtitle {
  color: #fff;
}

.porfolio-thumbnail {
  width: 100%;
}

.pdf-link {
  i {
    margin-right: 8px
  }
}

.profile-picture {
  border-radius: 2px;
  @include box-shadow;
}

.ghost {
  margin-top: 2em;
}

.tech {
  display: inline-block;
  padding: .35rem;
  border: 1px solid #fff;
  border-radius: 4px;
  background: #fff;
  color: $color;
  margin: 0 .25rem .25rem 0;
}
</style>
