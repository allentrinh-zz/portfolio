<template>
  <div id="home">
    <section class="hero has-text-centered is-fullheight" :style="{ backgroundImage: 'url(' + require('../assets/color-cloud.jpg') + ')' }">
      <video autoplay="autoplay" loop="loop" muted="muted" class="video-bg" type="mp4">
        <source :src="require('../assets/milky-way-glowing-at-night.mp4')">
      </video>
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
            <SocialLinks/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SocialLinks from '@/components/SocialLinks.vue';

export default {
  name: 'Home',
  components: {
    SocialLinks,
  },
  data() {
    return {
      videoRatio: null,
    };
  },
  methods: {
    resize() {
      this.setContainerHeight();

      if (this.videoCanPlay()) {
        this.setVideoSize()
      }
    },
    videoCanPlay() {
      const video = document.querySelector('.video-bg');
      return !!video.canPlayType;
    },
    setContainerHeight() {
      const container = document.querySelector('.hero');
      container.style.height = `${window.innerHeight}px`;
    },
    setVideoSize() {
      const container = document.querySelector('.hero');
      const video = document.querySelector('.video-bg');
      let width, height, containerRatio = container.offsetWidth / container.offsetHeight;

      if (containerRatio > this.videoRatio) {
        width = container.offsetWidth;
      } else {
        height = container.offsetHeight;
      }

      video.style.width = width ? `${width}px` : 'auto';
      video.style.height = height ? `${height}px` : 'auto';
    },
  },
  mounted() {
    this.setContainerHeight();

    if (this.videoCanPlay()) {
      const video = document.querySelector('.video-bg');
      video.oncanplay = () => {
        this.videoRatio = video.videoWidth / video.videoHeight;
        this.setVideoSize();
        video.style.visibility = 'visible';
      };
    }

    window.addEventListener('resize', this.resize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.video-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  visibility: hidden;
  transform: translate(-50%, -50%);
  max-width: none;
}

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
  font-style: italic;
  font-weight: 400;
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
  p {
    animation: pulse 5s infinite;
  }
}

.social {
  margin-top: 4em;
}

@keyframes pulse {
  0% {
    transform: scale(0);
  }
  70% {
    transform: scale(1);
    opacity: 0;
    letter-spacing: 15px;
  }
  100% {
    opacity: 0;
  }
}
</style>
