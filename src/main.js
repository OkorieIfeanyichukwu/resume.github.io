import { createApp } from 'vue'
import App from './App.vue'
import foodComp from './components/foodComp.vue'
import navBar from './components/navBar.vue'
import leftSide from './components/leftSide.vue'
import rightSide from './components/rightSide.vue'
import footerSign from './components/footerSign.vue'

const app=createApp(App)
app.component("food-list",foodComp)
app.component("nav-list",navBar)
app.component("left-side",leftSide)
app.component("right-side",rightSide)
app.component("footer-sign",footerSign)
app.mount('#app')
