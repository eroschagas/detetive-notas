<template>
	<div class="app__container">
		<MainMenu />
		<div class="router-view__container">
			<router-view />
			<MainFooter />
		</div>
	</div>
</template>

<script setup lang="ts">
	import MainFooter from "./components/MainFooter.vue";
	import MainMenu from "./components/MainMenu.vue";
</script>

<style scoped lang="scss">
	.app__container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		overflow: hidden;
		.router-view__container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			margin-top: 8px;
			overflow-y: auto;
			height: calc(100% - 40px);
			width: 100%;
			gap: 8px;
		}
	}
</style>
