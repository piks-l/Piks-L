<template>
  <div class="loading-page">
    <div class="big-logo">
      <img class="logo" src="https://electrobotik.netlify.com/images/logo-horizontal.svg"  alt="Logo Electrobotik Invasion">
      <div class="circle"><img src="https://electrobotik.netlify.com/images/circle.svg"/></div>
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
      console.log("Loading true")
    },
    finish() {
      setTimeout(function () { 
        this.loading = false
        console.log("Loading false")
      }.bind(this), 5000)
    }
  }
}
</script>

<style>
  .loading-page {
    z-index:666;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 1);
    text-align: center;
    font-size: 30px;
  }
</style>
