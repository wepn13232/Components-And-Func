<template>
	<!--点击滚动展示数据-->
	<div class="scrollData">
		<div class="left-scroll" @click="turn(0)" :class="[{'display':displayBtn == 0}]">左</div>
		<div class="scroll-content" ref="scroll-content" :style="{left:count*width + '%'}">
			<div class="circus" v-for="(item,index) in nums" :key="index">{{index}}</div>
		</div>
		<div class="right-scroll" @click="turn(1)" :class="[{'display':displayBtn == 1}]">右</div>
	</div>
</template>

<script>
	export default {
		name: "scrollData",
		data() {
			return {
				nums: 8, //数据个数
				dom: '',
				width: 16, //一个数据的长度百分比
				count: 0,
				displayBtn: 0, //0-左边隐藏 1-右边隐藏
			}
		},
		methods: {
			//调整总长度
			getWidth() {
				this.dom = this.$refs['scroll-content']
				this.dom.style.width = (this.width * this.nums) + '%';
			},
			//左右滑动
			turn(val) {
				this.displayBtn = 2;
				let domWidth = parseInt(this.dom.style.width)
				if (val == 0) {
					//左滑
					this.count += 1;
					let totalWidth = this.count * this.width;
					if (totalWidth == 0) {
						this.displayBtn = 0; //滑到左边尽头
					}
				} else {
					//右滑
					this.count -= 1;
					let totalWidth = this.count * this.width;
					if (domWidth + totalWidth < 100) {
						this.displayBtn = 1; //滑到右边尽头
					}
				}
			}
		},
		mounted() {
			this.getWidth();
		}
	}
</script>

<style scoped lang="scss">
	.scrollData {
		width: 100%;
		height: 150px;
		background-color: #dddddd;
		position: relative;
		display: flex;
		align-items: center;
		overflow: hidden;
		transition: all 0.5s ease-in-out;
		-webkit-transition: all 0.5s ease-in-out;
		-o-transition: all 0.5s ease-in-out;
		-moz-transition: all 0.5s ease-in-out;
		
		
		.scroll-content {
			display: flex;
			padding: 0 40px;
			justify-content: space-between;
			position: absolute;
			transition: all 0.5s ease-in-out;
			-webkit-transition: all 0.5s ease-in-out;
			-o-transition: all 0.5s ease-in-out;
			-moz-transition: all 0.5s ease-in-out;
			
			.circus {
				width: 100px;
				height: 100px;
				border-radius: 40%;
				display: inline-block;
				background-color: #2D93CA;
				margin-right: 50px;
			}
		}
		
		
		.left-scroll {
			width: 50px;
			height: 50px;
			background-color: #ffffff;
			border-radius: 50%;
			position: absolute;
			top: 30%;
			left: 2%;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 2;
		}
		
		.right-scroll {
			width: 50px;
			height: 50px;
			background-color: #ffffff;
			border-radius: 50%;
			position: absolute;
			top: 30%;
			right: 2%;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 2;
		}
		
		.display {
			display: none;
		}
	}
</style>
