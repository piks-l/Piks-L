<template>
  <div v-if="loading" class="loading-page">
    <div class="big-logo">
      <img class="logo large-logo" src="https://electrobotik.netlify.com/images/logo.svg"  alt="Logo Electrobotik Invasion">
      <img class="logo small-logo" src="https://electrobotik.netlify.com/images/logo-horizontal.svg"  alt="Logo Electrobotik Invasion">
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 1);
    text-align: center;
    font-size: 30px;
    font-family: sans-serif;
  }
</style>
