<template>
	<div class="block-sheet__container">
		<div class="block-sheet__title">
			<icon size="20" :icon="props.sprite" />
			<h2>{{ props.title }}</h2>
		</div>
		<div
			class="block-sheet"
			v-for="(item, index) in props.contents"
			:key="index"
		>
			<BlockContent
				v-if="item"
				:content="item"
				:remove="removeItem"
				:custom="props.custom"
			/>
		</div>
		<div v-if="customizing" class="block-sheet__input">
			<input
				ref="InputBlock"
				@keyup.enter="inputConfirm"
				@keyup.esc="inputClose"
				v-model="inputModel"
				type="text"
			/>
			<icon
				class="block-sheet__input-action"
				@click="inputConfirm"
				size="20"
				icon="mdi-check"
			/>
			<icon
				class="block-sheet__input-action"
				@click="inputClose"
				size="20"
				icon="mdi-close"
			/>
		</div>
		<div v-else @click="add" class="block-sheet__add" v-if="custom">
			<icon size="20" icon="mdi-plus" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, nextTick } from "vue";

	import { SheetContent } from "../model/SheetContent";
	import BlockContent from "./BlockContent.vue";

	const props = defineProps({
		title: {
			type: String,
			required: true,
		},
		sprite: {
			type: String,
			required: true,
		},
		contents: {
			type: Array as () => SheetContent[],
		},
		custom: {
			type: Boolean,
		},
	});

	const inputModel = ref<string>("");
	const customizing = ref<boolean>(false);
	const InputBlock = ref();
	const add = () => {
		inputModel.value = "";
		customizing.value = true;
		nextTick(() => {
			InputBlock.value.focus();
		});
	};
	const inputClose = () => {
		customizing.value = false;
	};
	const inputConfirm = () => {
		if (inputModel.value) {
			props.contents?.push({ name: inputModel.value });
		}
		customizing.value = false;
	};
	const removeItem = (item: SheetContent) => {
		const itemIndex = props.contents?.indexOf(item);
		console.log(itemIndex);
		if ((itemIndex && itemIndex > -1) || itemIndex == 0) {
			props.contents?.splice(itemIndex, 1);
		}
	};
</script>

<style scoped lang="scss">
	.block-sheet__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		.block-sheet__title {
			display: flex;
			align-items: center;
			gap: 8px;
			h2 {
				font-size: 20px;
				font-weight: normal;
				letter-spacing: 2px;
				text-transform: uppercase;
			}
		}
		.block-sheet {
			align-self: flex-start;
			width: 100%;
		}
		.block-sheet__add {
			cursor: pointer;
			background: #00000017;
			width: 100%;
			height: 26px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 4px;
		}
		.block-sheet__input {
			width: 100%;
			height: 26px;
			display: flex;
			gap: 8px;
			input {
				width: 100%;
				height: 100%;
				padding: 8px;
			}
			.block-sheet__input-action {
				cursor: pointer;
			}
		}
	}
</style>
