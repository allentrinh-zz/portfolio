<template>
  <div id="home">
    <section class="hero has-text-centered is-fullheight" :style="{ backgroundImage: 'url(' + require('../assets/color-cloud.jpg') + ')' }">
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="heading-container">
            <h1 class="title">Learn something</h1>
            <h2 class="subtitle">Interesting</h2>
            <div class="duped-headings">
              <p>Learn something</p>
              <p>Interesting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.lines {
  position: fixed;
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
}

.title, .subtitle {
  font-family: $font;
  color: #e3e3e3;
}

.duped-headings {
  font-family: $heading;
  color: #fff;
  font-size: 2em;
  opacity: 0.15;
  line-height: 1;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -25%);
  @media (min-width: $screen-md) {
    font-size: 3em;
  }
  @media (min-width: $screen-lg) {
    font-size: 4em;
  }
}
</style>
