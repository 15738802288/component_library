<template>
	<div id="nav">
		<div class="main_left">
			<li class="nav-list nav-first">
				<a>组件</a>
			</li>
			<li class="nav-list nav-basic">
				<a>通用</a>
			</li>
			<li class="nav-list">
				<router-link to="/zzButton">button按钮</router-link>
			</li>

			<li class="nav-list nav-basic">
				<a>Form表单</a>
			</li>
			<li class="nav-list">
				<router-link to="/zzInput">input输入框</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/zzSelect">select选择器</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/checkbox">checkbox多选框</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/zzCascader">cascader联级器</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/zzDatePicker">datePicker日期选择器</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/zzTransfer">transfer穿梭框</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/zzSlider">slider滑块</router-link>
			</li>

			<li class="nav-list nav-basic">
				<a>数据</a>
			</li>
			<li class="nav-list">
				<router-link to="/zzTable">table表格</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/zzTree">tree树</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/zzGanttChart">ganttChart甘特图</router-link>
			</li>

			<li class="nav-list nav-basic">
				<a>导航</a>
			</li>
			<li class="nav-list">
				<router-link to="/zzNavMenu">NavMenu导航</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/zzTabs">tabs标签页</router-link>
			</li>
			<li class="nav-list nav-basic">
				<a>其它</a>
			</li>
			<li class="nav-list">
				<router-link to="/zzAlert">alert 警告</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/zzLoading">loading 加载</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/zzTooltip">tooltip 文字提示</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/zzDialog">dialog 弹框</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/zzCarousel">carousel 走马灯</router-link>
			</li>
		</div>
		<div class="main_body">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {};
</script>
<style>
.main_body{
	text-align: left;
}
</style>
