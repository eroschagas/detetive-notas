<template>
	<div>
		<ConfirmModal
			v-if="clearModal"
			text="Tem certeza que deseja apagar tudo?"
			@confirm="clearData"
			@exit="exitModalClear"
		/>
		<ConfirmModal
			v-if="resetModal"
			text="Tem certeza que deseja apagar tudo?"
			@confirm="resetData"
			@exit="exitModalReset"
		/>
		<div class="button-line__container">
			<div @click="openModalClear" class="clear-button">Apagar Tudo</div>
			<div @click="openModalReset" class="clear-button">Reiniciar</div>
		</div>
		<StandardSheet>
			<BlockSheet
				title="Suspeitos"
				sprite="mdi-account-search"
				:contents="suspects"
				custom
			/>
			<BlockSheet
				title="Armas"
				sprite="mdi-sword-cross"
				:contents="weapons"
				custom
			/>
			<BlockSheet
				title="Aposentos"
				sprite="mdi-map-marker"
				:contents="locations"
				custom
			/>
		</StandardSheet>
	</div>
</template>

<script setup lang="ts">
	import { ref, reactive, computed, watch, onMounted } from "vue";

	import { SheetContent } from "../model/SheetContent";
	import { StorageData } from "../model/StorageData";

	import BlockSheet from "./BlockSheet.vue";
	import StandardSheet from "./StandardSheet.vue";
	import ConfirmModal from "./ConfirmModal.vue";

	onMounted(() => {
		const data = localStorage.getItem("customData");
		if (data) {
			const customData: StorageData = JSON.parse(data);

			customData.suspects.forEach((e) => {
				suspects.push(e);
			});
			customData.weapons.forEach((e) => {
				weapons.push(e);
			});
			customData.locations.forEach((e) => {
				locations.push(e);
			});
		}
	});

	const clearData = () => {
		suspects.forEach((e) => {
			delete e.selected;
		});
		weapons.forEach((e) => {
			delete e.selected;
		});
		locations.forEach((e) => {
			delete e.selected;
		});
		exitModalClear();
	};

	const resetData = () => {
		suspects.splice(0, suspects.length);
		weapons.splice(0, weapons.length);
		locations.splice(0, locations.length);
		exitModalReset();
	};

	const suspects = reactive<SheetContent[]>([]);

	const weapons = reactive<SheetContent[]>([]);

	const locations = reactive<SheetContent[]>([]);

	const customData = computed<StorageData>(() => {
		return {
			suspects: suspects,
			weapons: weapons,
			locations: locations,
		};
	});

	watch(
		customData,
		() => {
			const data = JSON.stringify(customData.value);
			localStorage.setItem("customData", data);
		},
		{ deep: true },
	);

	const clearModal = ref<boolean>(false);
	const openModalClear = () => {
		clearModal.value = true;
	};
	const exitModalClear = () => {
		clearModal.value = false;
	};

	const resetModal = ref<boolean>(false);
	const openModalReset = () => {
		resetModal.value = true;
	};
	const exitModalReset = () => {
		resetModal.value = false;
	};
</script>

<style scoped lang="scss">
	.button-line__container {
		display: flex;
		gap: 8px;
		// width: 100%;
		.clear-button {
			background: #fff;
			margin-bottom: 8px;
			border-radius: 4px;
			padding: 12px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			width: 100%;
		}
	}
</style>
