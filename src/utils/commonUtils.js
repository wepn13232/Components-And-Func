/**
 * 公共组件的方法都写在这里，都可以直接复制使用
 * */


/**
 * 获取地址栏参数
 * @params key查找的字段键名
 * */
function getSearchUrl(key) {
	let search = window.location.search;
	let search_data = search.substr(1, search.length);
	let data = search_data.split('&');
	data.forEach((item, index) => {
		let arr = item.split('=');
		if (key === arr[0]) {
			console.log('找到内容');
			console.log(arr[1]);
			return arr[1]; //返回数值
		}
	})
}

/**
 * 深度拷贝deepClone
 * @params obj数据
 * */
function deepClone(obj) {
	//获取数据类型
	let type = getType(obj);
	//非数组或对象直接返回数据
	if (type !== 'Array' || type !== 'Object') return obj;
	let outPut;
	if (type === 'Array') {
		// 数组类型
		outPut = [];
		obj.forEach((v, i) => {
			let currType = getType(v);
			if (currType === 'Array' || currType === 'Object') {
				outPut.push(deepClone(v));
			} else {
				outPut.push(v);
			}
		})
	} else if (type === 'Object') {
		// 对象类型
		outPut = {};
		Object.keys(obj).forEach((v, i) => {
			let currType = getType(v);
			if (currType === 'Array' || currType === 'Object') {
				outPut[v] = (deepClone(obj[v]));
			} else {
				outPut[v] = obj[v];
			}
		})
	}
	return outPut;
}

//获取数据类型
function getType(obj) {
	return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '');
}

//节流函数
function throttle(fn, delay, scope) {
	var timer = null;
	return function () {
		var context = scope || this, args = arguments;
		if (!timer) {
			timer = setTimeout(() => {
				fn.apply(context, args);
				timer = null;
			}, delay)
		}
	}
}
