<template>
	<!--图钉，可用作吸附顶部之类的-->
	<div class="affix" id="affix">
		<slot name="affix-div"></slot>
	</div>
</template>

<script>
	export default {
		name: "affix",
		props: {
			//传入的距离顶部
			top: {
				type: Number
			},
		},
		data() {
			return {
				scroller: "",
				flag: false,
			}
		},
		methods: {
			//监听scroller
			listener() {
				let dom = document.getElementById('affix');
				let nextDom = dom.nextElementSibling;
				let height = dom.offsetTop - this.top;
				let _this = this;
				if (window.attachEvent) {
					this.scroller = window.attachEvent('onscroll', function () {
						_this.onAffix(dom, nextDom, height, _this);
					})
				} else {
					this.scroller = window.addEventListener('scroll', function () {
						_this.onAffix(dom, nextDom, height, _this);
					})
				}
			},
			//执行图钉效果
			onAffix(dom, nextDom, height, _this) {
				let pageScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				//到达固定位置
				if (pageScrollTop > height && !this.flag) {
					dom.style.position = "fixed";
					dom.style.zIndex = 99;
					dom.style.top = _this.top + 'px';
					this.flag = true;
					//执行之后的回调方法
					this.$emit('affixFunc');
				}
				//恢复原来位置
				if (pageScrollTop < height && this.flag) {
					dom.style.position = "inherit";
					dom.style.zIndex = 1;
					dom.style.top = "inherit";
					this.flag = false;
					//恢复之后的回调方法
					this.$emit('backFunc')
				}
			}
		},
		mounted() {
			this.listener();
		},
		beforeDestroy() {
			this.scroller = null;
		}
	}
</script>

<style scoped>
	.affix {
		width: 100%;
	}
</style>
