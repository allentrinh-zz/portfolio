<template>
  <section class="home d-flex align-items-center text-center" :style="{ backgroundImage: 'url(' + require('../assets/horizon.jpeg') + ')' }">
    <div class="container">
      <h1>Allen <span>Trinh</span></h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.home {
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  position: relative;
  color: #fff;
  &::before {
    content: '';
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.65+100 */
    background: -moz-radial-gradient(center, ellipse cover,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%); /* FF3.6-15 */
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(ellipse at center,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  > .container {
    position: relative;
  }
}
h1 {
  font-family: $font;
  font-weight: bold;
  font-size: 5em;
  span {
    color: $primaryColor;
  }
}
</style>
