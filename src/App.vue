<template>
  <div id="app">
    <div class="navigation-drawer" :class="{ open: drawerActive }">
      <router-link to="/">
        <img src="./assets/allen-trinh.png" class="profile-picture" alt="This is Allen Trinh">
      </router-link>
      <nav>
        <ul class="nav">
          <li>
            <router-link to="/">
              <i class="icon ion-ios-home"></i> Home
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <i class="icon ion-ios-person"></i> About Me
            </router-link>
          </li>
          <li>
            <router-link to="/resume">
              <i class="icon ion-ios-paper"></i> Resume
            </router-link>
          </li>
          <li>
            <router-link to="/work">
              <i class="icon ion-ios-code"></i> Work
            </router-link>
          </li>
          <li>
            <router-link to="/contact">
              <i class="icon ion-ios-mail"></i> Contact
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div id="panel" :class="{ padded: drawerActive }">
      <header id="header">
        <div class="mobile-header text-center d-lg-none">
          <div class="container-fluid">
            <router-link to="/" class="mobile-logo">Allen <span>Trinh</span></router-link>
            <button @click="toggleDrawer()" class="toggle-drawer">
              <i class="icon ion-ios-menu"></i>
            </button>
          </div>
        </div>
      </header>
      <main id="content">
        <transition name="router-animation" mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="200">
          <router-view/>
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawerActive: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerActive = !this.drawerActive;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
@import '@/assets/mixins.scss';

.mobile-header {
  background: $color;
  padding: 1em 0;
}

.mobile-logo {
  font-family: $heading;
  text-transform: uppercase;
  color: #fff;
  font-size: 2em;
  margin: 0;
  line-height: 1;
  span {
    color: $primaryColor;
  }
  &:hover {
    text-decoration: none;
    color: #fff;
  }
}

.toggle-drawer {
  float: right;
  background: transparent;
  border: 0;
  color: #fff;
  font-size: 2em;
  line-height: 1;
  &:active, &:focus {
    outline: 0;
  }
}

.profile-picture {
  border-bottom: 10px solid $primaryColor;
  max-width: 100%;
}

.navigation-drawer {
  width: 200px;
  height: 100%;
  background: $color;
  position: absolute;
  top: 0;
  left: 0;
  border-right: 1px solid $color;
  transform: translateX(-100%);
  @include transition;
  &.open {
    transform: translateX(0);
  }
  @media (min-width: $screen-lg) {
    transform: translateX(0);
  }
}

.nav {
  margin: 0;
  padding: 0;
  flex-direction: column;
  a {
    color: #fff;
    padding: 1em;
    font-size: 1em;;
    line-height: 1;
    display: block;
    font-family: $heading;
    letter-spacing: 1px;
    border-top: 1px solid $primaryColor;
    @include transition;
    &:hover {
      text-decoration: none;
      background: $primaryColor;
    }
  }
}

#panel {
  @include transition;
  @media (min-width: $screen-lg) {
    padding-left: 200px;
  }
  &.padded {
    @media (min-width: $screen-lg) {
      padding-left: 200px;
    }
  }
}
</style>
