<template>
	<div class="block-content__container">
		<div class="block-content__name">
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
	import { ref } from "vue";
	import { SheetContent } from "../model/SheetContent";

	const props = defineProps({
		content: {
			type: Object as () => SheetContent,
			required: true,
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
</script>

<style scoped lang="scss">
	.block-content__container {
		display: flex;
		gap: 12px;
		.block-content__name {
			display: flex;
			align-items: center;
			gap: 4px;
			min-width: 130px;
			> div {
				display: flex;
				p {
					font-size: 18px;
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
