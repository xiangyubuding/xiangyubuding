import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _745d738e = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _dfe690a4 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _71c2867a = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _373cbf0c = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _39127f72 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _8bfb2708 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _69a83872 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
    component: _745d738e,
    children: [{
      path: "",
      component: _dfe690a4,
      name: "home"
    }, {
      path: "/login",
      component: _71c2867a,
      name: "login"
    }, {
      path: "/register",
      component: _71c2867a,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _373cbf0c,
      name: "profile"
    }, {
      path: "/settings",
      component: _39127f72,
      name: "settings"
    }, {
      path: "/editor",
      component: _8bfb2708,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _69a83872,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
