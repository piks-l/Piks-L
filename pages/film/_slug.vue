<template>
  <main class="1plus2-layout-film">
    <div class="left-side">
        <vue-markdown>{{ iframe }}</vue-markdown>
        <div class="diapo">
            <div v-for="s in social" class="image"><img class="selected" onclick="openModal();currentSlide(1)" src="assets/images/scene-c3po.jpg" alt="Residence 1+2 photo"></div>
        </div>
        <div id="myModal" class="modal">
            <span class="close-modal cursor" onclick="closeModal()">&times;</span>
            <div class="modal-content">

                <div class="mySlides">
                    <img src="assets/images/scene-c3po.jpg">
                </div>
                <div class="mySlides">
                    <img src="assets/images/bellenger-factory-2018.jpg">
                </div>
                <div class="mySlides">
                    <img src="assets/images/bellenger-factory-2018-05.jpg">
                </div>

                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>

            </div>
            <div class="caption-container">
                <p id="caption"></p>
            </div>
        </div>
    </div>
    <div class="right-side">
        <small class="date">2017</small>
        <h3 class="title-article">Les jours - cahiers photographiques</h3>
        <p class="description-article">Résidence 1+2 2017</p>
        <div class="content">
            <p><b>DOCUMENTAIRE - 26 MINUTES</b></p>
            <p><b>UN FILM DE CLEMENTINE CARRIE</b></p>
            <p>avec Israel Arino, Leslie Moquin et Christian Sanna</p>
            <p>Création musical: Augustin Charnet</p>
            <p>Direction artistique: Philippe Guionie</p>
            <br>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
              fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
              amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
              ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
              iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            <br>
            <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.</i></p>
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
    },
    destroyed() {
    },
    methods: {
    }
  };
</script>
