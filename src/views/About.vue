<template>
  <section class="about">
    <Hero/>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h2 class="subtitle is-3">Creative Web Designer &amp; Developer</h2>
            <p>I'm the Lead Developer at <a href="https://www.resiteonline.com" target="_blank">Resite Online</a> in Virginia Beach, VA. I have an obsession with clean, readable code and find satisfaction in micro animations that bring an application to life.</p>
            <p>Designing useful tools makes me happy. <router-link to="/contact">Let's find something to work on together</router-link></p>
          </div>
          <div class="column">
            <ul class="skills">
              <li v-for="skill in skills"><span class="label">{{ skill.name }}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue';

export default {
  name: 'About',
  components: {
    Hero,
  },
  data() {
    return {
      skills: [
        {
          name: 'HTML',
          level: 90,
        },
        {
          name: 'CSS',
          level: 80,
        },
        {
          name: 'JavaScript',
          level: 80,
        },
        {
          name: 'PHP',
          level: 70,
        },
        {
          name: 'React',
          level: 60,
        },
        {
          name: 'Vue',
          level: 65,
        },
        {
          name: 'PhotoShop',
          level: 60,
        },
        {
          name: 'Illustrator',
          level: 40,
        },
        {
          name: 'UI Design',
          level: 70,
        },
      ],
    };
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

.skills {
  li {
    position: relative;
    padding-left: 120px;
    width: 100%;
    height: 35px;
    margin-bottom: 0.5em;
  }
  span.label {
    font-size: 0.85em;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 120px;
    background: $primaryColor;
    padding-left: 0.85em;
    color: #fff;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    align-items: center;
    height: 100%;
  }
}
</style>
