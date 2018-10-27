<template>
  <section class="about">
    <Hero/>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column content">
            <h2 class="subtitle is-3">Creative Web Designer &amp; Developer</h2>
            <p>I'm the Lead Developer at <a href="https://www.resiteonline.com" target="_blank">Resite Online</a> in Virginia Beach, VA. I have an obsession with clean, readable code and find satisfaction in micro animations that bring an application to life.</p>
            <p>Designing useful tools makes me happy. <router-link to="/contact">Let's find something to work on together</router-link></p>
            <p><router-link to="/work" class="button is-primary">Check out some of the cool stuff I've done</router-link></p>
            <p><router-link to="/resume" class="button is-primary">See my resumé</router-link></p>
          </div>
          <div class="column">
            <ul class="skills">
              <li v-for="skill in skills" class="skill-bar">
                <span class="fill-bar" :data-skill-level="skill.level"></span>
                <span class="label">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </li>
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
          name: 'UI/UX Design',
          level: 70,
        },
      ],
    };
  },
  methods: {
    fillSkillBars() {
      const bars = document.querySelectorAll('.fill-bar');
      let timeOut = 300;
      bars.forEach(function(bar) {
        let skillLevel = bar.getAttribute('data-skill-level');
        setTimeout(() => bar.setAttribute('style', `width: ${skillLevel}%`), timeOut);
        timeOut += 100;
      });
    },
  },
  mounted() {
    this.fillSkillBars();
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
  li.skill-bar {
    position: relative;
    padding-left: 120px;
    width: 100%;
    height: 35px;
    margin-bottom: 0.5em;
    background: #e3e3e3;
    border-radius: 2px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  span.label {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    font-size: 0.85em;
    position: absolute;
    top: 0;
    left: 0;
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
  span.skill-level {
    position: absolute;
    top: 45%;
    right: 0.85em;
    transform: translateY(-50%);
    color: $color;
  }
  span.fill-bar {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    background: lighten($primaryColor, 10%);
    width: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transition: width 1s ease-in-out;
  }
}
</style>
