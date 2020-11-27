import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/_reset.scss'
import './assets/styles/fonts.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faCode } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch)
library.add(faCode)
library.add(faLinkedin)
library.add(faGithub)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
