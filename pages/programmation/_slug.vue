<template>
  <main class="page artist">
     <h2>{{ title }}</h2>
     <p>{{ semaine }}</p>
     <p>{{ type }}</p>
     <p>{{ start }} > {{ end }}</p>    
      <header class="fond-principal">
        <img class="seconde-background" :src="background">
        <div class="mirror anim-filter" >
          <div class="mirror__source mirror__source--solid ">
            <svg id="main-background" version="1.1"  xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 1920 1080" viewBox="0 0 1920 1080" x="0px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px" preserveAspectRatio="xMidYMid meet">
              <image class="main-background" height="100%" style="overflow:visible" width="100%" :xlink:href="background"></image>			
            </svg>
          </div>
        </div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glitch">
              <feTurbulence baseFrequency="0.03 0.01" id="turb" numOctaves="1" result="warp" type="fractalNoise"></feTurbulence>
              <feColorMatrix in="warp" result="huedturb" type="hueRotate" values="90">
                <animate attributeName="values" attributeType="XML" dur="10s" repeatCount="indefinite" values="0;180;360"></animate>
              </feColorMatrix>
              <feDisplacementMap in="SourceGraphic" in2="huedturb" scale="30" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
            </filter>
          </defs>
        </svg>
      </header>
     <img style="display:none" id="background-image-event" :src="background" />
  </main>
</template>
<script>
import $ from 'jquery'
import VueMarkdown from 'vue-markdown'
import VueLazyload from 'vue-lazyload'
export default {
  layout: 'simple',
  transition: { name: 'intro', mode: 'out-in' },
  components: { VueMarkdown, VueLazyload },
  async asyncData({ params }) {
    let page = await import('~/content/programmation/page/' + params.slug + '.json');
    return page;
  },
  head() {
    return {
      title: `${this.title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.description}` },
        { 'property': 'og:title', 'content': `${this.title}`, 'vmid': 'og:title' },
        { 'property': 'og:description', 'content': `${this.description}` },
        { 'property': 'og:image', 'content': `${this.couverture}`, 'vmid': 'og:image' }
      ]
    }
  },
  mounted() {
  }
};
</script>
