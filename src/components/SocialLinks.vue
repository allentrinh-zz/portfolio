<template>
  <ul class="social">
    <li v-for="(socialLink, key) in socialLinks" :key="key">
      <a :href="socialLink.url" target="_blank"><span class="icon"><i :class="['fa', socialLink.icon ]"></i></span></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SocialLinks',
  data() {
    return {
      socialLinks: {
        facebook: {
          url: 'https://facebook.com/allentrinh',
          icon: 'fa-facebook',
        },
        instagram: {
          url: 'https://instagram.com/allentrinh',
          icon: 'fa-instagram',
        },
        twitter: {
          url: 'https://twitter.com/allenmtrinh',
          icon: 'fa-twitter',
        },
        linked: {
          url: 'https://www.linkedin.com/in/allen-trinh-5b805760/',
          icon: 'fa-linkedin',
        },
        github: {
          url: 'https://github.com/allentrinh',
          icon: 'fa-github-alt',
        },
        codepen: {
          url: 'https://codepen.io/allentrinh/',
          icon: 'fa-codepen',
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.social {
  display: flex;
  justify-content: center;
  li {
    padding: 0 0.25em;
  }
  a {
    padding: 0.65em 0.25em 0.25em;
    border-radius: 4px;
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    display: block;
    width: 45px;
    height: 45px;
    @include transition;
    &:hover {
      background: #fff;
      color: $primaryColor;
    }
  }
}
</style>
