<template>
    <nuxt-link to="/" id="scene" class="logo-link">
      <div class="carre bleu" data-depth="0.2"></div>
      <div class="carre jaune" data-depth="0.4"></div>
      <div class="carre rouge" data-depth="0.6"><img class="logo" src="https://www.piks-l.com/2019/residence/assets/images/logo.png"></div>
    </nuxt-link>
</template>

<script>
export default {
  components: {
  },
  mounted: () => {
      this.parallax();
  },
  methods: {
    parallax(){
      var scene = document.getElementById('scene');
      var parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        hoverOnly: true
      });
    }
  }
}
