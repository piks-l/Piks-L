<template>
  <div v-if="loading" class="loading">
      <ea-logo/>
      <div class="deco-video">
        <video autoplay="autoplay" loop="loop" muted="muted">
          <source src="/videos/etiquette-noir.mp4" type="video/mp4">
        </video>
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
