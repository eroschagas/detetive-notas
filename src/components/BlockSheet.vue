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
			<BlockContent v-if="item" :content="item" />
		</div>
	</div>
</template>

<script setup lang="ts">
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
	});
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
		}
	}
</style>
