export function lazyLoadData(container, div) {
	/*
	* 传入包裹的container（看需求的滚动区域是哪里）
	* 传入需要懒加载的div
	* */
	return new Promise(resolve => {
		var c = document.getElementById(container);
		var d = document.getElementById(div);
		var dH = d.offsetTop;
		var cH = c.clientHeight; //内容区块高度（外层固定的，类似于这个块的height）
		var scropTop = c.scrollTop; //滚动高度
		var flag = true;
		//本身就在可见范围内
		if (cH + scropTop + 50 >= dH) {
			resolve();
			flag = false;
		} else {
			if (c.attachEvent) {
				c.attachEvent('onscroll', throttle(function handle() {
					// 到达这个块
					if (cH + c.scrollTop + 50 >= dH && flag) {
						resolve();
						flag = false;
					}
				}));
			} else {
				c.addEventListener('scroll', throttle(function handle() {
					// 到达这个块
					if (cH + c.scrollTop + 50 >= dH && flag) {
						resolve();
						flag = false;
					}
				}), false);
			}
		}
	})
}

//节流函数--200毫秒节流
function throttle(fn, threshold, scope) {
	let timer;
	return function () {
		let context = scope || this, args = arguments;
		if (!timer) {
			timer = setTimeout(function () {
				fn.apply(context, args);
				timer = null;
			}, 200)
		}
	}
}

