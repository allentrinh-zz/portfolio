<template>
  <section class="hero has-text-centered is-large" :style="getBackgroundImage()">
    <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="heading-container">
          <h1 class="title">{{ this.$route.name | cleanName | capitalize }}</h1>
          <div class="duped-headings">
            <p>{{ this.$route.name | cleanName | capitalize }}</p>
          </div>
        </div>
      </div>
    </div>
    <button class="auto-scroll"
      @click="autoScroll()">
      <i class="fa fa-chevron-down"></i>
    </button>
  </section>
</template>

<script>
const defaultBackground = require('../assets/color-cloud.jpg');

export default {
  name: 'Hero',
  props: {
    heroContent: String,
    image: String,
  },
  methods: {
    getBackgroundImage() {
      if (typeof this.image !== 'undefined') {
        return `backgroundImage: url(${require(`../assets/${this.image}`)})`;
      }
      return `backgroundImage: url(${defaultBackground})`;
    },
    autoScroll() {
      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: this.$el.offsetHeight,
      });
    },
  },
  filters: {
    capitalize(str) {
      return str.toLowerCase()
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    },
    cleanName(str) {
      return str.replace(/-/g, ' ');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.lines {
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100vw;
  height: 100vh;
  padding-right: 10%;
  padding-left: 10%;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  pointer-events: none;
  .line {
    width: 25%;
    height: 100%;
    border-right: 1px solid hsla(0, 0%, 92%, .08);
    &:first-child {
      border-left: 1px solid hsla(0, 0%, 92%, .08);
      border-right-width: 1px;
    }
  }
}

.hero {
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1px 25px rgba(0, 0, 0, 0.25);
  padding: 4em 0;
  @media (min-width: $screen-sm) {
    padding: 0;
  }
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
}

.heading-container {
  position: relative;
  padding-top: 50px;
  @media (min-width: $screen-lg) {
    padding-top: 0;
  }
}

.title, .subtitle {
  font-family: $font;
  color: #e3e3e3;
}

.duped-headings {
  font-family: $heading;
  font-style: italic;
  font-weight: 400;
  color: #fff;
  font-size: 2em;
  opacity: 0.15;
  line-height: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
  @media (min-width: $screen-md) {
    font-size: 3em;
  }
  @media (min-width: $screen-lg) {
    font-size: 4em;
    top: 0;
  }
}

.auto-scroll {
  display: none;
  @media (min-width: $screen-lg) {
    display: block;
    position: absolute;
    color: #fff;
    background: transparent;
    border: 0;
    font-size: 3rem;
    bottom: 1em;
    left: 50%;
    margin-left: -24px;
    line-height: 1;
    cursor: pointer;
    @include transition;
    &:focus, &:active {
      outline: 0;
    }
    &:hover {
      transform: scale(1.25);
      text-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  }
}
</style>
