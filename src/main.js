import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.config.ignoredElements = [
  "mwc-drawer",
  "mwc-top-app-bar",
  "mwc-button",
  "mwc-icon-button",
  "mwc-dialog",
  "mwc-textfield"
];


new Vue({
  render: h => h(App),
}).$mount('#app')
