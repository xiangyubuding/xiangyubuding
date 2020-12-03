import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a8d2740e = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _14af276e = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _fd23e28c = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _9167ce8c = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _7911e19c = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _c0702788 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _c3d347f2 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _a8d2740e,
    children: [{
      path: "",
      component: _14af276e,
      name: "home"
    }, {
      path: "/login",
      component: _fd23e28c,
      name: "login"
    }, {
      path: "/register",
      component: _fd23e28c,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _9167ce8c,
      name: "profile"
    }, {
      path: "/settings",
      component: _7911e19c,
      name: "settings"
    }, {
      path: "/editor",
      component: _c0702788,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _c3d347f2,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
