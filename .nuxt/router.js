import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0bf7ae22 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3bf2b600 = () => interopDefault(import('../pages/blog-post.vue' /* webpackChunkName: "pages/blog-post" */))
const _62799c23 = () => interopDefault(import('../pages/blog-posts.vue' /* webpackChunkName: "pages/blog-posts" */))
const _10ba4b5e = () => interopDefault(import('../pages/components.vue' /* webpackChunkName: "pages/components" */))
const _217cfc16 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _3f0a28d5 = () => interopDefault(import('../pages/ecommerce.vue' /* webpackChunkName: "pages/ecommerce" */))
const _1551a804 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _49b0ba9b = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _d82da978 = () => interopDefault(import('../pages/product.vue' /* webpackChunkName: "pages/product" */))
const _112e0a04 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _519613ae = () => interopDefault(import('../pages/sections.vue' /* webpackChunkName: "pages/sections" */))
const _01e840d3 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _c7b86238 = () => interopDefault(import('../pages/starter.vue' /* webpackChunkName: "pages/starter" */))
const _1df8e970 = () => interopDefault(import('../pages/thankyou.vue' /* webpackChunkName: "pages/thankyou" */))
const _2baf88e7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0bf7ae22,
    name: "about"
  }, {
    path: "/blog-post",
    component: _3bf2b600,
    name: "blog-post"
  }, {
    path: "/blog-posts",
    component: _62799c23,
    name: "blog-posts"
  }, {
    path: "/components",
    component: _10ba4b5e,
    name: "components"
  }, {
    path: "/contact",
    component: _217cfc16,
    name: "contact"
  }, {
    path: "/ecommerce",
    component: _3f0a28d5,
    name: "ecommerce"
  }, {
    path: "/login",
    component: _1551a804,
    name: "login"
  }, {
    path: "/pricing",
    component: _49b0ba9b,
    name: "pricing"
  }, {
    path: "/product",
    component: _d82da978,
    name: "product"
  }, {
    path: "/profile",
    component: _112e0a04,
    name: "profile"
  }, {
    path: "/sections",
    component: _519613ae,
    name: "sections"
  }, {
    path: "/signup",
    component: _01e840d3,
    name: "signup"
  }, {
    path: "/starter",
    component: _c7b86238,
    name: "starter"
  }, {
    path: "/thankyou",
    component: _1df8e970,
    name: "thankyou"
  }, {
    path: "/",
    component: _2baf88e7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
