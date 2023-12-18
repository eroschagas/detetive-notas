<template>
	<div class="sheet__container">
		<h1>Detetive</h1>
		<divider>
			<icon size="24" color="black" icon="mdi-hat-fedora" />
		</divider>
		<div class="sheet__slot">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	.sheet__container {
		// border: 1px solid #fff;
		background: #fff;
		padding: 8px;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: center;
		h1 {
			font-size: 22px;
			letter-spacing: 8px;
			text-transform: uppercase;
		}
		.sheet__slot {
			display: flex;
			flex-direction: column;
			gap: 12px;
		}
	}
</style>
