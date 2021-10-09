import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faGoogle,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

library.add(faGoogle)
library.add(faGithub)
library.add(faTwitter)

import {
  faUser,
  faLock
} from '@fortawesome/free-solid-svg-icons'

library.add(faUser)
library.add(faLock)

createApp(App)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
