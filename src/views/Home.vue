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

		<el-table :data="tableData"
				  style="width: 100%">
			<el-table-column prop="date"
							 :label="$t('table.date')"
							 width="180">
			</el-table-column>
			<el-table-column prop="name"
							 :label="$t('table.name')"
							 width="180">
			</el-table-column>
			<el-table-column prop="address"
							 :label="$t('table.address')">
			</el-table-column>
		</el-table>

		<el-date-picker
			v-model="value1"
			type="date"
			placeholder="选择日期">
		</el-date-picker>

		<el-button type="primary"
				   @click="change('zh')">点击切换中文
		</el-button>
		<el-button type="primary"
				   @click="change('en')">点击切换英文
		</el-button>
	</div>
</template>

<script>

	import Affix_js from '../utils/Affix_js'; //引用自定义指令组件
	export default {
		name: 'Home',
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				value1: ""
			}
		},
		methods: {
			change(lang) { //切换方法
				this.$i18n.locale = lang
				// localStorage.setItem('lang', lang)
				// window.location.reload() //localSotrage是不响应的，为了演示效果所以直接调用刷新
			}
		},
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
