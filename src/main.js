// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入MUI
import '../static/mui/css/mui.css'
// 引入全局基本属性(需要在最后导入)
import './assets/css/site.scss'
Vue.config.productionTip = false
// 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
// 时间格式过滤器
import moment from 'moment'
Vue.filter('datefmt', (value, fmtString) => {
  return moment(value).format(fmtString)
})

/* eslint-disable no-new */
new Vue({el: '#app', router, components: {
    App
  }, template: '<App/>'})
