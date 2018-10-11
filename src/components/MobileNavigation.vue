<template>
  <nav id="mobile-navigation" :class="{active: mobileNavActive}">
    <ul class="nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/resume">Resumé</router-link></li>
      <li><router-link to="/work">Work</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MobileNavigation',
  props: {
    mobileNavActive: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

#mobile-navigation {
  height: 100vh;
  width: 100%;
  position: absolute;
  background: fade-out(darken($primaryColor, 30%), 0.15);
  top: 0;
  left: 0;
  z-index: 5;
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
