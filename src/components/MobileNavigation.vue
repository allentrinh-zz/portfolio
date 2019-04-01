<template>
  <nav id="mobile-navigation" :class="{active: mobileNavActive}">
    <ul class="nav">
      <li><router-link to="/who-am-i" @click.native="toggleNav(); trackMobileNavigation('Who Am I');">Who Am I</router-link></li>
      <li><router-link to="/contact" @click.native="toggleNav(); trackMobileNavigation('Contact');">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MobileNavigation',
  props: {
    mobileNavActive: Boolean,
  },
  methods: {
    toggleNav() {
      const isActive = !this.mobileNavActive;
      this.$emit('mobileNavActive', isActive); // pass mobile nav state back to App.vue
    },
    trackMobileNavigation(page) {
      this.$ga.event('Mobile Navigation', 'Click', page);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

#mobile-navigation {
  height: 100vh;
  width: 100%;
  position: fixed;
  background: fade-out(darken($primaryColor, 30%), 0.15);
  top: 0;
  left: 0;
  z-index: 5;
  transform: translate(100%, -100%) scale(0.025);
  transition: all .5s cubic-bezier(0.76,-0.32, 0.46, 1.39);
  border-radius: 100%;
  &.active {
    transform: translateY(0);
    border-radius: 0;
    transform: scale(1);
  }
}

.nav {
  position: absolute;
  top: 50%;
  font-size: 3rem;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
  a {
    color: #fff;
    padding: 0.25rem 1rem;
    font-family: $font;
  }
}
</style>
