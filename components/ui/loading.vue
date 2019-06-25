<template>
  <div v-if="loading" class="loading">
    <div class="center">
      <ea-logo/>
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
      this.loading = false 
    }
  }
}
</script>
