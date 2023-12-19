<template>
	<div
		tabindex="0"
		ref="ConfirmModal"
		@keydown.enter="handleConfirm"
		@keydown.esc="handleExit"
		class="confirm-modal__container"
	>
		<div @click="handleExit" class="confirm-modal__backdrop"></div>
		<div class="confirm-modal">
			<h4>{{ props.text }}</h4>
			<div class="confirm-modal__buttons">
				<div @click="handleConfirm">Sim</div>
				<div @click="handleExit">Não</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted } from "vue";

	const props = defineProps({
		text: {
			type: String,
		},
	});

	const emits = defineEmits(["confirm", "exit"]);

	const handleExit = () => {
		emits("exit");
	};

	const handleConfirm = () => {
		emits("confirm");
	};

	onMounted(() => {
		ConfirmModal.value.focus();
	});
	const ConfirmModal = ref();
</script>

<style scoped lang="scss">
	.confirm-modal__container {
		position: fixed;
		height: 100vh;
		width: 100vw;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		.confirm-modal__backdrop {
			background: #00000027;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		.confirm-modal {
			z-index: 10;
			background: #fff;
			padding: 24px;
			border-radius: 4px;
			max-width: 100vw;
			text-align: center;
			gap: 12px;
			display: flex;
			flex-direction: column;
			.confirm-modal__buttons {
				display: flex;
				justify-content: center;
				gap: 16px;
				> div {
					cursor: pointer;
					border: 1px solid #000;
					padding: 16px;
					border-radius: 4px;
					transition: box-shadow 0.2s ease-out;
					&:hover {
						box-shadow: 0 0 8px 0px #000;
					}
				}
			}
		}
	}
</style>
