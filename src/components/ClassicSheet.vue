<template>
	<div>
		<ConfirmModal
			v-if="clearModal"
			text="Tem certeza que deseja limpar a ficha?"
			@confirm="clearData"
			@exit="exitModal"
		/>
		<div @click="openModal" class="clear-button">Limpar</div>
		<StandardSheet>
			<BlockSheet
				title="Suspeitos"
				sprite="mdi-account-search"
				:contents="suspects"
			/>
			<BlockSheet title="Armas" sprite="mdi-sword-cross" :contents="weapons" />
			<BlockSheet
				title="Aposentos"
				sprite="mdi-map-marker"
				:contents="locations"
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
		const data = localStorage.getItem("classicData");
		if (data) {
			const classicData: StorageData = JSON.parse(data);

			const writeData = (item: SheetContent, key: keyof StorageData) => {
				const storageSelected = classicData[key].find(
					(f) => f.name == item.name,
				);
				item.selected = storageSelected ? storageSelected.selected : null;
			};

			suspects.forEach((e) => writeData(e, "suspects"));
			weapons.forEach((e) => writeData(e, "weapons"));
			locations.forEach((e) => writeData(e, "locations"));
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
		exitModal();
	};

	const suspects = reactive<SheetContent[]>([
		{
			prefix: "Col.",
			name: "Mostarda",
			color: "goldenrod",
		},
		{
			prefix: "Prof.",
			name: "Black",
			color: "black",
		},
		{
			prefix: "Dona.",
			name: "Violeta",
			color: "violet",
		},
		{
			prefix: "Sr.",
			name: "Marinho",
			color: "navy",
		},
		{
			prefix: "Srta.",
			name: "Rosa",
			color: "pink",
		},
		{
			prefix: "Dona.",
			name: "Branca",
			color: "white",
		},
	]);

	const weapons = reactive<SheetContent[]>([
		{
			name: "Punhal",
			sprite: "mdi-knife",
		},
		{
			name: "Castiçal",
			sprite: "mdi-candelabra",
		},
		{
			name: "Revólver",
			sprite: "mdi-pistol",
		},
		{
			name: "Corda",
			sprite: "mdi-gesture",
		},
		{
			name: "Cano",
			sprite: "mdi-pipe",
		},
		{
			name: "Chave Inglesa",
			sprite: "mdi-pipe-wrench",
		},
	]);

	const locations = reactive<SheetContent[]>([
		{
			name: "Hall",
		},
		{
			name: "Sala de Estar",
		},
		{
			name: "Cozinha",
		},
		{
			name: "Sala de Jantar",
		},
		{
			name: "Salão de Festas",
		},
		{
			name: "Sala de Música",
		},
		{
			name: "Salão de Jogos",
		},
		{
			name: "Biblioteca",
		},
		{
			name: "Escritório",
		},
	]);

	const classicData = computed<StorageData>(() => {
		return {
			suspects: suspects,
			weapons: weapons,
			locations: locations,
		};
	});

	watch(
		classicData,
		() => {
			const data = JSON.stringify(classicData.value);
			localStorage.setItem("classicData", data);
		},
		{ deep: true },
	);

	const clearModal = ref<boolean>(false);
	const openModal = () => {
		clearModal.value = true;
	};
	const exitModal = () => {
		clearModal.value = false;
	};
</script>

<style scoped lang="scss">
	.clear-button {
		background: #fff;
		margin-bottom: 8px;
		border-radius: 4px;
		padding: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
</style>
