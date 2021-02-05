个人开发中所封装好的公共组件或者公共方法都会直接放到这边，方便任何项目的使用

【components目录】

|--- Affix组件：仿照其他UI自定义一个图钉组件，可以让某块随着滚动之后固定在页面的顶部（吸顶）

|--- scrollData组件：一个左右滑动展览的组件。隐藏过长的内容，使用点击滑动显示代替


【utils目录】

|---Affix.js：图钉组件，直接引入这份JS，在需要使用图钉的div或者其他地方上加“v-affix”即可

|---commonUtils.js：公共方法js

|--- lazyLoad.js：懒加载js

|---Promise.js：手写一份Promise函数
