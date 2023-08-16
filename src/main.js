import { createApp } from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fab, fas, far)

import router from './router'
import './assets/main.css';
import './assets/style.scss'
import './router'



createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount('#app')
  