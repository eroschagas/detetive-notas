<template>
	<div class="main-menu__container">
		<p>Jogo:</p>
		<MenuItem v-for="(item, index) in routes" :key="index" :item="item" />
	</div>
</template>

<script setup lang="ts">
	import { routes } from "../router";
	import MenuItem from "./MenuItem.vue";
</script>

<style scoped lang="scss">
	.main-menu__container {
		position: sticky;
		top: 0;
		background: white;
		border-bottom: 1px solid #000;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 2px 8px;
	}
</style>
