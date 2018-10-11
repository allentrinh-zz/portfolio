<template>
  <div id="app">
    <MobileNavigation :mobileNavActive="mobileNavActive"/>
    <HeaderComponent :mobileNavActive="mobileNavActive" v-on:mobileNavActive="showMobileNavigation($event)"/>
    <main id="content">
      <transition name="router-animation" mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="200">
        <router-view/>
      </transition>
    </main>
    <FooterComponent/>
  </div>
</template>

<script>
import MobileNavigation from '@/components/MobileNavigation.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    MobileNavigation,
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      mobileNavActive: false,
    };
  },
  methods: {
    showMobileNavigation(isActive) {
      this.mobileNavActive = isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

#app {

}
</style>
