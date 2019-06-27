<template>
  <main class="1plus2-layout-film">
    <div class="left-side">
        <vue-markdown>{{ iframe }}</vue-markdown>
        <div class="diapo">
            <div v-for="i in galerie" class="image">
              <img class="selected" :click="openModal()" :src="i.image" :alt="i.alt">
            </div>
        </div>
        <div id="myModal" class="modal">
            <span class="close-modal cursor" :click="closeModal()">&times;</span>
            <div class="modal-content">

                <div v-for="i in galerie" class="mySlides">
                    <img :src="i.image" :alt="i.alt">
                </div>

                <a class="prev" :click="plusSlides(-1)">&#10094;</a>
                <a class="next" :click="plusSlides(1)">&#10095;</a>

            </div>
            <div class="caption-container">
                <p id="caption"></p>
            </div>
        </div>
    </div>
    <div class="right-side">
        <small class="date">{{ date }}</small>
        <h3 class="title-article">{{ title }}</h3>
        <p class="description-article">{{ soustitre }}</p>
        <div class="content">
            <vue-markdown>{{ description }}</vue-markdown>
            <br>
            <vue-markdown>{{ article }}</vue-markdown>
            <br>
            <p class="read-more">POUR EN SAVOIR PLUS</p>
            <a href="#" class="link">Résidence 2017</a>
            <p class="no-margin">LIENS &#62;</p>
            <a href="#" class="more-link">Clémentine Carrié</a>
            <a href="#" class="more-link">Augustin Charnet</a>
        </div>

    </div>
  </main>
</template>
<script>
  import $ from 'jquery'
  import VueMarkdown from 'vue-markdown'
  import VueLazyload from 'vue-lazyload'
  export default {
    layout: 'default',
    transition: { name: 'intro', mode: 'out-in' },
    components: { VueMarkdown, VueLazyload },
    async asyncData({ params }) {
      let page = await import('~/content/film/page/' + params.slug + '.json');
      return page;
    },
    head() {
      return {
        title: '1+2 – Photographie & Sciences | ' +this.title,
        meta: [
          { hid: 'description', name: 'description', content: `${this.descriptionseo}` },
          { 'property': 'og:title', 'content': `${this.title}`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `${this.descriptionseo}` },
          { 'property': 'og:image', 'content': `${this.thumbnail}`, 'vmid': 'og:image' }
        ]
      }
    },
    updated() {
    },
    beforeMount(){
    },
    mounted() {
      this.openModal();
      this.closeModal();
    },
    destroyed() {
    },
    methods: {
      openModal() {
        $("#myModal").css('display', 'block');
      },
      closeModal() {
        $("#myModal").css('display', 'none');
      }
    }
  };
</script>
