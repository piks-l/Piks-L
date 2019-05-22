<template> 
  <div class="page artist">
    <div :class="'decoration decoration-'+stage">
      <div class="volet-artist"></div>
    </div>
    <div id="main-container" class="artiste">
      <div class="container scene_element scene_element--fadein ">
        <nuxt-link to="/programmation/" class="fake-close">
            <div class="left"></div>
            <div class="right"></div>
        </nuxt-link>
        <div class="title">
            <div class="background"></div>
            <h2>{{ title }}</h2>
        </div>
        <div class="content-artiste">
            <div class="vertical-align">
                <div class="artiste-stage">
                    <p :id="'stage-'+stage">{{ stage }}</p>
                </div>
                <div class="artiste-date">
                    <p :id="'date-'+dateshow">{{ dateshow }}</p>
                </div>
                <div class="content">
                  <vue-markdown>{{description}}</vue-markdown>
                </div>
                <div class="social-artiste">
                  <a target="_blank" v-for="socia in social" :key="socia.awesome" :href="socia.lien"><i :class="socia.awesome"></i></a>
                </div>
            </div>
        </div>
        <div class="video">
            <vue-markdown>{{iframe}}</vue-markdown>
        </div>
      </div>
    </div>  
  </div>
</template>
<script>
import $ from 'jquery'
import VueMarkdown from 'vue-markdown'
import VueLazyload from 'vue-lazyload'
export default {
  layout: 'default',
  components: { VueMarkdown, VueLazyload },
  async asyncData({ params }) {
    let page = await import('~/content/artistes/page/' + params.slug + '.json');
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
    $('#date-vendredi').each( function() {
        var search = 'vendredi';
        var replace = 'VENDREDI 02 AOÛT'
        var el = $(this);
        var text = el.html();
        text = text.split(search).join(replace);
        el.html(text);
    });
    $('#date-samedi').each( function() {
        var search = 'samedi';
        var replace = 'SAMEDI 03 AOÛT'
        var el = $(this);
        var text = el.html();
        text = text.split(search).join(replace);
        el.html(text);
    });
    $('#stage-TECHNO').each( function() {
        var search = 'TECHNO';
        var replace = '<g>R2-D2</g> / TECHNO STAGE'
        var el = $(this);
        var text = el.html();
        text = text.split(search).join(replace);
        el.html(text);
    });
    $('#stage-HIPHOP').each( function() {
        var search = 'HIPHOP';
        var replace = '<g>C3-PO</g> / HIPHOP STAGE'
        var el = $(this);
        var text = el.html();
        text = text.split(search).join(replace);
        el.html(text);
    });
    $('#stage-TRANCE').each( function() {
        var search = 'TRANCE';
        var replace = '<g>WALL-E</g> / TRANCE STAGE'
        var el = $(this);
        var text = el.html();
        text = text.split(search).join(replace);
        el.html(text);
    });
     $('#stage-HARDCORE').each( function() {
        var search = 'HARDCORE';
        var replace = '<g>T-800</g> / HARDCORE STAGE'
        var el = $(this);
        var text = el.html();
        text = text.split(search).join(replace);
        el.html(text);
    });
  }
};
</script>
<style>
.decoration-TECHNO {background-image: url('https://electrobotik.netlify.com/images/scene-TECHNO.jpg');}
.decoration-TRANCE {background-image: url('https://electrobotik.netlify.com/images/scene-TRANCE.jpg');}
.decoration-HIPHOP {background-image: url('https://electrobotik.netlify.com/images/scene-HIPHOP.jpg');}
.decoration-HARDCORE {background-image: url('https://electrobotik.netlify.com/images/scene-HARDCORE.jpg');}
</style>
