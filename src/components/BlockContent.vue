<template>
	<div v-if="editing" class="block-content__input">
		<input
			ref="InputContent"
			@keyup.enter="inputConfirm"
			@keyup.esc="inputClose"
			@keyup.delete="inputRemove"
			v-model="inputModel"
			type="text"
		/>
		<icon
			class="block-content__input-action"
			@click="inputConfirm"
			size="20"
			icon="mdi-check"
		/>
		<icon
			class="block-content__input-action"
			@click="inputClose"
			size="20"
			icon="mdi-close"
		/>
		<icon
			class="block-content__input-action"
			@click="inputRemove"
			size="20"
			icon="mdi-delete-outline"
		/>
	</div>
	<div v-else class="block-content__container">
		<div @click="edit" class="block-content__name">
			<div>
				<p>
					<i>{{ props.content.prefix }}</i>
				</p>
				<p v-if="props.content.prefix">&nbsp;</p>
				<p>{{ props.content.name }}</p>
			</div>
			<div
				v-if="props.content.color"
				class="block-content__color"
				:style="`background-color: ${props.content.color};`"
			/>
			<icon
				v-if="props.content.sprite"
				size="18"
				:icon="props.content.sprite"
			/>
		</div>
		<div class="block-content__action-selected">
			<icon
				v-if="props.content.selected"
				size="18"
				:icon="props.content.selected"
			/>
		</div>
		<div class="block-content__actions">
			<icon
				class="block-content__action"
				size="18"
				color="white"
				v-for="(item, index) in actions"
				:key="index"
				:icon="item"
				@click="select(item)"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, nextTick } from "vue";
	import { SheetContent } from "../model/SheetContent";

	const props = defineProps({
		content: {
			type: Object as () => SheetContent,
			required: true,
		},
		remove: {
			type: Function,
		},
		custom: {
			type: Boolean,
		},
	});

	const actions = ref<string[]>([
		"mdi-plus",
		"mdi-minus",
		"mdi-help",
		"mdi-eraser",
	]);

	// const selected = ref<string | null>(null);
	const select = (icon: string) => {
		if (icon == "mdi-eraser") {
			props.content.selected = null;
			return;
		}
		props.content.selected = icon;
	};

	const editing = ref<boolean>(false);
	const inputModel = ref<string>();
	const InputContent = ref();
	const edit = () => {
		if (!props.custom) return;
		inputModel.value = props.content.name;
		editing.value = true;
		nextTick(() => {
			InputContent.value.focus();
		});
	};
	const inputClose = () => {
		editing.value = false;
	};
	const inputConfirm = () => {
		if (inputModel.value) {
			props.content.name = inputModel.value;
		}
		editing.value = false;
	};
	const inputRemove = () => {
		editing.value = false;
		if (props.remove) {
			props.remove(props.content);
		}
	};
</script>

<style scoped lang="scss">
	.block-content__input {
		width: 100%;
		height: 26px;
		display: flex;
		gap: 8px;
		input {
			width: 100%;
			height: 100%;
			padding: 8px;
		}
		.block-content__input-action {
			cursor: pointer;
		}
	}

	.block-content__container {
		display: flex;
		gap: 12px;
		.block-content__name {
			display: flex;
			align-items: center;
			gap: 4px;
			width: 100%;
			> div {
				display: flex;
				max-width: 135px;
				overflow: hidden;
				p {
					font-size: 18px;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
			.block-content__color {
				height: 18px;
				width: 18px;
				border-radius: 50%;
				border: 2px solid #000;
			}
		}
		.block-content__actions {
			display: flex;
			gap: 4px;
			.block-content__action {
				background: #000;
				border-radius: 4px;
				padding: 4px;
				cursor: pointer;
			}
		}
		.block-content__action-selected {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 26px;
		}
	}
</style>
