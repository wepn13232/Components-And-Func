import Vue from "vue";
import VueI18n from "vue-i18n";


Vue.use(VueI18n)


//使用require.context来动态获取目录结构
let langFiles = require.context("./config", false, /\.js$/);

let regExp = /\.\/([^\.\/]+)\.([^\.]+)$/ //正则用于匹配 ./en.js中的'en'

let messages = {} //声明一个数据模型，对应i18n中的message属性

langFiles.keys().forEach(key => {
	let prop = regExp.exec(key)[1] //正则匹配en|zh这样的值
	//messages[prop]相当于 messages['en'] = {table:{...}}
	messages[prop] = langFiles(key).default
})

const i18n = new VueI18n({
	locale:'zh',
	messages
})

export default i18n





