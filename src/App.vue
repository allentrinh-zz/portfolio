<template>
  <div id="app">
    <HeaderComponent/>
    <main id="content">
      <transition name="router-animation" mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="200">
        <router-view/>
      </transition>
    </main>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

#app {

}
</style>
