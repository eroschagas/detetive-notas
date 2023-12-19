<template>
	<div class="main-footer__container">
		<p>Feito por Eros Chagas</p>
		<icon
			@click="instagram"
			class="main-footer__icon"
			size="28"
			icon="mdi-instagram"
		/>
		<icon
			@click="linkedin"
			class="main-footer__icon"
			size="28"
			icon="mdi-linkedin"
		/>
		<icon
			@click="github"
			class="main-footer__icon"
			size="28"
			icon="mdi-github"
		/>
	</div>
</template>

<script setup lang="ts">
	const instagram = () => {
		window.open("https://www.instagram.com/eros.chagas", "_blank");
	};
	const linkedin = () => {
		window.open("https://www.linkedin.com/in/eros-chagas-b93911b3/", "_blank");
	};
	const github = () => {
		window.open("https://github.com/eroschagas", "_blank");
	};
</script>

<style scoped lang="scss">
	.main-footer__container {
		background: #fff;
		min-height: 60px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		.main-footer__icon {
			cursor: pointer;
		}
	}
</style>
