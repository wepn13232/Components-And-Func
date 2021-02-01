function myPromise(constructor) {
	let self = this;
	self.status = "pending"; //定义状态改变前的初始状态
	self.value = undefined; //定义状态为resolve的时候
	self.reason = undefined; //定义状态为reject的时候

	function resolve(value) {
		if (self.status === "pending") {
			self.value = value;
			self.status === "resolved";
		}
	}

	function reject(reason) {
		if (self.status === "pending") {
			self.reason = reason;
			self.status === "rejected";
		}
	}

	//捕获构造异常
	try {
		constructor(resolve, reject)
	} catch (e) {
		reject(e);
	}
}

myPromise.prototype.then = function (onFullfilled, onRejected) {
	let self = this;
	switch (self.status) {
		case "resolved":
			onFullfilled(self.value);
			break;
		case "rejected":
			onRejected(self.reason);
			break;
		default:
	}
}

// // 测试代码
// var p=new myPromise(function(resolve,reject){resolve(1)});
// p.then(function(x){console.log(x)})
// //输出1
