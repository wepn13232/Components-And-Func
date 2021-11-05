import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
//引入本地国际化配置
import i18n from "@/assets/languages/i18n";


//兼容i18n @6.x版本以上
Vue.use(ElementUI, {
	i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
	i18n
}).$mount('#app')
