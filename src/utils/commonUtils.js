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

//防抖函数
function debounce(fn, deplay, scope) {
	let timer = null;
	return function () {
		let context = scope || this, args = arguments;
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(context, args)
		}, deplay)
	};

}

//设置匹配文字高亮展示
function setHighLight(fileName, keyWord) {
	if (!fileName || fileName === '') return; //空搜索不进行高亮匹配
	let map_index = 0; //开始遍历的位置
	let font_length = keyWord.length;
	let fileName_length = fileName.length;
	let highLight_font = `<span style="color:#dd4b39">${keyWord}</span>`;
	let final_p = "";
	while (map_index <= fileName_length) {
		let start_index = fileName.indexOf(keyWord);
		//如果匹配到了
		if (start_index > -1) {
			//切割原有的两个文字，并添加高亮文字
			let p_1 = fileName.substr(0, start_index); //前段文字
			final_p += p_1 + highLight_font; //拼接文字样式
			map_index = start_index + font_length; //从切割文字后开始重新遍历
			fileName = fileName.substr(map_index, fileName_length); //重新截取剩余的片段
		} else {
			final_p += fileName; //拼接最后的后段文字
			break;
		}
	}
	return final_p;
}
