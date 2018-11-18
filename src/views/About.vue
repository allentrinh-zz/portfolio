<template>
  <section class="about">
    <Hero/>
    <div class="section">
      <div class="container">
        <h2 class="subtitle is-3">Creative Web Designer &amp; Developer</h2>
        <div class="columns">
          <div class="column content">
            <div class="columns">
              <div class="column is-4">
                <img :src="require('../assets/allen-trinh.png')" class="profile-picture" alt="Hi, I'm Allen">
              </div>
              <div class="column">
                <p>Hi! I'm the Lead Developer at <a href="https://www.resiteonline.com" target="_blank">Resite Online</a> in Virginia Beach, VA. I have an obsession with clean, readable code and find satisfaction in micro animations that bring an application to life.</p>
                <p>Designing useful tools makes me happy. <router-link to="/contact">Let's find something to work on together</router-link></p>
                <a href="" class="button is-primary pdf-link"><i class="fa fa-file-pdf-o"></i> Download my resumé</a>
              </div>
            </div>
          </div>
          <div class="column">
            <ul class="skills">
              <li v-for="(skill, index) in skills" class="skill-bar" :key="index">
                <span class="fill-bar" :data-skill-level="skill.level"></span>
                <span class="label">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </li>
            </ul>
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
    <div class="recent-work section">
      <div class="container content">
        <h2 class="subtitle has-text-centered">Recent Work</h2>
        <div class="columns">
          <div class="column">
            <img src="https://placehold.it/400x250" alt="">
          </div>
          <div class="column">
            <img src="https://placehold.it/400x250" alt="">
          </div>
          <div class="column">
            <img src="https://placehold.it/400x250" alt="">
          </div>
          <div class="column">
            <img src="https://placehold.it/400x250" alt="">
          </div>
          <div class="column">
            <img src="https://placehold.it/400x250" alt="">
          </div>
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
          name: 'WordPress',
          level: 75,
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
      bars.forEach((bar) => {
        const skillLevel = bar.getAttribute('data-skill-level');
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
    @include box-shadow;
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

.pdf-link {
  i {
    margin-right: 8px
  }
}

.profile-picture {
  border-radius: 2px;
  @include box-shadow;
}

.recent-work {
  img {
    border-radius: 2px;
  }
}
</style>
