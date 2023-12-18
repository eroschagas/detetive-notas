<template>
	<div class="divider__container">
		<div class="divider"></div>
		<slot />
		<div class="divider"></div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	.divider__container {
		display: flex;
		align-items: center;
		width: 100%;
		gap: 4px;
		.divider {
			display: flex;
			flex-grow: 1;
			height: 1px;
			border-bottom: 1px solid #000;
		}
	}
</style>
