<template>
  <nav id="mobile-navigation" :class="{active: mobileNavActive}">
    <ul class="nav">
      <li><router-link to="/" @click.native="toggleNav">Home</router-link></li>
      <li><router-link to="/about" @click.native="toggleNav">About</router-link></li>
      <li><router-link to="/resume" @click.native="toggleNav">Resumé</router-link></li>
      <li><router-link to="/work" @click.native="toggleNav">Work</router-link></li>
      <li><router-link to="/contact" @click.native="toggleNav">Contact</router-link></li>
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
  transform: scale(0) translateY(-100%);
  transition: all 0.4s ease-in-out;
  &.active {
    transform: scale(1) translateY(0);
  }
}

.nav {
  position: absolute;
  top: 50%;
  font-size: 3rem;
  transform: translateY(-50%);
  a {
    color: #fff;
    padding: 0.25rem 1rem;
  }
}
</style>
