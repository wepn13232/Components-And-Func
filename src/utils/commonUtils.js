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
