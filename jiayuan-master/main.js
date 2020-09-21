import Vue from 'vue'
import App from './App'
import metadata from 'common/js/metadata'

Vue.config.productionTip = false

App.mpType = 'app'

wx.cloud.init({
  env: "xiaozhuyezi-5gt1yxnvf429b9bd"
})
const app = new Vue({
    ...App
})
app.$mount()
