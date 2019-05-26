import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _13cf3540 = () => import('..\\pages\\soirees\\index.vue' /* webpackChunkName: "pages_soirees_index" */).then(m => m.default || m)
const _4ed0d843 = () => import('..\\pages\\lieux\\index.vue' /* webpackChunkName: "pages_lieux_index" */).then(m => m.default || m)
const _854aceae = () => import('..\\pages\\articles\\index.vue' /* webpackChunkName: "pages_articles_index" */).then(m => m.default || m)
const _69ff89b1 = () => import('..\\pages\\artistes\\index.vue' /* webpackChunkName: "pages_artistes_index" */).then(m => m.default || m)
const _6848e869 = () => import('..\\pages\\artistes\\_slug.vue' /* webpackChunkName: "pages_artistes__slug" */).then(m => m.default || m)
const _88b8113e = () => import('..\\pages\\articles\\_slug.vue' /* webpackChunkName: "pages_articles__slug" */).then(m => m.default || m)
const _4d1a36fb = () => import('..\\pages\\lieux\\_slug.vue' /* webpackChunkName: "pages_lieux__slug" */).then(m => m.default || m)
const _173c77d0 = () => import('..\\pages\\soirees\\_slug.vue' /* webpackChunkName: "pages_soirees__slug" */).then(m => m.default || m)
const _3276dcf4 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/soirees",
			component: _13cf3540,
			name: "soirees"
		},
		{
			path: "/lieux",
			component: _4ed0d843,
			name: "lieux"
		},
		{
			path: "/articles",
			component: _854aceae,
			name: "articles"
		},
		{
			path: "/artistes",
			component: _69ff89b1,
			name: "artistes"
		},
		{
			path: "/artistes/:slug",
			component: _6848e869,
			name: "artistes-slug"
		},
		{
			path: "/articles/:slug",
			component: _88b8113e,
			name: "articles-slug"
		},
		{
			path: "/lieux/:slug",
			component: _4d1a36fb,
			name: "lieux-slug"
		},
		{
			path: "/soirees/:slug",
			component: _173c77d0,
			name: "soirees-slug"
		},
		{
			path: "/",
			component: _3276dcf4,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
