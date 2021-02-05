<template>
	<div class="home">
		<div class="block"></div>
		<div class="navbar" v-affix></div>
		<div class="block"></div>
		<div class="block"></div>
		<div class="block"></div>
		<div class="block"></div>
		<div class="block"></div>
		<div class="block"></div>
		<div class="block"></div>
		<div class="block"></div>
		<div class="block"></div>
		<div class="block"></div>
		<div class="block"></div>
		<div class="block"></div>
		<div class="block"></div>
	</div>
</template>

<script>

	import Affix_js from '../utils/Affix_js'; //引用自定义指令组件
	export default {
		name: 'Home',
	}
</script>

<style lang="scss">
	.home {
		.navbar {
			width: 100%;
			height: 100px;
			background-color: #2D93CA;
		}
		.block{
			width: 100%;
			height: 150px;
		}
	}
</style>
