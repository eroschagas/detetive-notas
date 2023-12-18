<template>
	<div class="app__container">
		<MainMenu />
		<div class="router-view__container">
			<router-view />
		</div>
	</div>
</template>

<script setup lang="ts">
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
			margin: 8px 0;
			padding: 0 16px;
			overflow-y: scroll;
			height: calc(100% - 40px);
		}
	}
</style>
