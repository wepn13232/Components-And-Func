<template>
	<!--图钉，可用作吸附顶部之类的-->
	<div class="affix" id="affix">
		<slot name="affix-div"></slot>
	</div>
</template>

<script>
	export default {
		name: "affix",
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
				let height = dom.offsetTop;
				if (window.attachEvent) {
					this.scroller = window.attachEvent('onscroll', function () {
						let pageScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
						if (pageScrollTop > height && !this.flag) {
							dom.style.position = "fixed";
							dom.style.top = 0;
							this.flag = true;
						}
						if (this.pageScrollTop < height && this.flag) {
							dom.style.position = "unset";
							dom.style.top = "unset";
							this.flag = false
						}
					})
				} else {
					this.scroller = window.addEventListener('scroll', function () {
						let pageScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
						if (pageScrollTop > height && !this.flag) {
							dom.style.position = "fixed";
							dom.style.top = 0;
							this.flag = true;
						}
						if (pageScrollTop < height && this.flag) {
							dom.style.position = "unset";
							dom.style.top = "unset";
							this.flag = false
						}
					})
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
