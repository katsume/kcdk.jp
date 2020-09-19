import {
  createApp
} from 'vue'

import {
  createRouter,
  createWebHistory
} from 'vue-router'

import App from './App.vue'
import Home from '@/views/Home.vue'

import './scss/main.scss'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

;(function(d) {
  var config = {
    kitId: 'tzs6dei',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document)

createApp(App).use(router).mount('#app')
