import Vue from 'vue'
import NuxtLoading from '~/components/ui/loading.vue'


let layouts = {

  "_default": () => import('..\\layouts\\default.vue'  /* webpackChunkName: "layouts_default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"Electrobotik Invasion - le 2 & 3 Août 2019","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, shrink-to-fit=no"},{"hid":"description","name":"description","content":"Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83)."},{"property":"og:title","content":"Electrobotik Invasion - le 2 & 3 Août 2019","vmid":"og:title"},{"property":"og:description","content":"Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83)."},{"property":"og:image","content":"images\u002Fuploads\u002Flink_share.jpg","vmid":"og:image"}],"link":[{"rel":"shortcut icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","integrity":"sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.4.1\u002Fcss\u002Fall.css","crossorigin":"anonymous"}],"script":[{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fjquery\u002F3.1.1\u002Fjquery.min.js","ssr":false}],"style":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}

