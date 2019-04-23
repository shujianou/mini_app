import Vue from 'vue'
import App from './App'

import login from './pages/login.vue'
Vue.component('login',login)

import home from './pages/home/home.vue'
Vue.component('home',home)

import book from './pages/book/book.vue'
Vue.component('book',book)

import me from './pages/ucenter/me.vue'
Vue.component('me',me)

import message from './pages/message/message'
Vue.component('message',message)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()





