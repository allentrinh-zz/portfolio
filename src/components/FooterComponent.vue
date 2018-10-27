<template>
  <footer id="footer" class="section has-text-centered">
    <div class="container">
      <p class="copyright">{{ copyright }} Allen Trinh</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  computed: {
    copyright() {
      return `\u00A9 ${new Date().getFullYear()}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

#footer {
  background: darken($color, 5%);
}
</style>
