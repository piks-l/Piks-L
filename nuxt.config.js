var webpack = require('webpack');
var glob = require('glob');
var path = require('path');
var dynamicRoutes = getDynamicPaths({
  '/blog': 'blog/posts/*.json',
  '/artworks': 'artworks/page/*.json',
  '/tattoos': 'tattoos/page/*.json'
});
module.exports = {
  head: {
    title: 'SEBASTIEN ODD',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Sébastien Odd est tatoueur chez Artcore Tattoos à Toulouse. Il travaille le tatouage réaliste, le newschool, le néo-trad et l’illustration.' },
      { 'property': 'og:title', 'content': 'SEBASTIEN ODD', 'vmid': 'og:title' },
      { 'property': 'og:description', 'content': 'Sébastien Odd est tatoueur chez Artcore Tattoos à Toulouse. Il travaille le tatouage réaliste, le newschool, le néo-trad et l’illustration.' },
      { 'property': 'og:image', 'content': 'images/uploads/link_share.jpg', 'vmid': 'og:image' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', integrity: 'sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz', href: 'https://use.fontawesome.com/releases/v5.4.1/css/all.css', crossorigin: 'anonymous' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', ssr: false },
      { src:'js/TweenMax.min.js', type: 'text/javascript' },
      { src:'js/imagesloaded.pkgd.min.js', type: 'text/javascript' }
    ]
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) { return { x: 0, y: 0 } }
  },
  css: [ '~/assets/css/global.css' ],
  plugins: [{src: '~/plugins/vue-lazyload', ssr: false}],
  loading: false,
  generate: {
    routes: dynamicRoutes
  },
  build: {
    vendor: ['jquery'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    extend(config, { isDev, isClient }) {
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      vueLoader.options.transformToRequire['img'] = ['src', 'data-src'];
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
