<template>
	<span
		class="icon__container"
		:style="`color: ${props.color}; font-size: ${props.size}px;`"
		v-if="iconClass"
		:class="iconClass"
	></span>
</template>

<script setup lang="ts">
	import { computed } from "vue";

	const props = defineProps({
		icon: {
			type: String,
			required: true,
		},
		size: {
			type: [String, Number],
		},
		color: {
			type: String,
		},
	});

	const iconClass = computed<string>(() => {
		return `mdi ${props.icon}`;
	});
</script>

<style scoped lang="scss">
	.icon__container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
