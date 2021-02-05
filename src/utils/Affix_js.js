import Vue from 'vue'

/**
 * 这个针对于Vue自定义指令，自定义一个v-affix来实现固定（图钉）功能
 * el对应dom节点，binding对应绑定的数据结构，具体参考Vue官网 https://cn.vuejs.org/v2/guide/custom-directive.html
 * */
Vue.directive('affix', {
	inserted: function (el, binding, vnode) {
		//获取用户定义的吸顶时距离顶部高度
		let user_defined_height = binding.value || 0;
		let flag = false;
		let init_marginTop = el.style.marginTop;
		//dom节点距离顶部的高度
		let el_offsetTop = el.offsetTop;
		let final_height = el_offsetTop - user_defined_height;
		//添加滚动监听
		let scroller = window.addEventListener('scroll', function () {
			//获取滚动高度
			let win_scroll_height = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			console.log('滚动高度---->', win_scroll_height, '用户定义的高度--->', user_defined_height, '最终需要固定高度---->', final_height);
			//滚到到对应高度的时候操作
			if (win_scroll_height > final_height && !flag) {
				el.style.position = "fixed";
				el.style.zIndex = 99;
				el.style.top = user_defined_height + 'px';
				el.style.marginTop = 0;
				flag = true;
			}
			//恢复高度
			if (win_scroll_height < final_height && flag) {
				el.style.position = "inherit";
				el.style.zIndex = 1;
				el.style.top = "inherit";
				el.style.marginTop = init_marginTop + 'px';
				flag = false;
			}
		});
	},
});
