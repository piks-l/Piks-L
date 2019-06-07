<template>
  <div v-if="loading" class="loading">
    <div class="center">
      <ea-logo/>
      <div class="deco-video">
        <video autoplay="autoplay" loop="loop" muted="muted">
          <source src="/videos/etiquette-noir.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>
<script>
import eaLogo from '~/components/ui/logo.vue'
export default {
  components: {
    eaLogo
  },
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
       
    },
    mounted: () => {
         $(window).load(function() {
            setTimeout(() => {
                this.loading = false
                console.log('loading');
            }, 4000)
         });        
        console.log('loading');
    }
  }
}
</script>
