<template>
	<div
		:class="[
			'main-menu__item',
			{ 'main-menu__item--selected': route.name == props.item.name },
		]"
		@click="goToPage"
	>
		<p>{{ props.item.name }}</p>
	</div>
</template>

<script setup lang="ts">
	import { RouteRecordRaw, useRoute } from "vue-router";
	import router from "../router";
	const route = useRoute();
	const props = defineProps({
		item: {
			type: Object as () => RouteRecordRaw,
			required: true,
		},
	});

	const goToPage = () => {
		router.push(props.item.path);
	};
</script>

<style scoped lang="scss">
	.main-menu__item {
		cursor: pointer;
		user-select: none;
		padding: 8px;
		border-radius: 4px;
		transition: background 0.2s ease-in-out;
		& p {
			transition: color 0.1s ease-in-out;
		}
		&:hover {
			background: var(--hover-gray);
		}
	}
	.main-menu__item--selected,
	.main-menu__item--selected:hover {
		background: var(--selected);
		& p {
			color: #fff;
		}
	}
</style>
