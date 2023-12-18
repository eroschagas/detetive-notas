<template>
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
</template>

<script setup lang="ts">
	import { reactive } from "vue";
	import BlockSheet from "./BlockSheet.vue";
	import StandardSheet from "./StandardSheet.vue";
	import { SheetContent } from "../model/SheetContent";

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
</script>

<style scoped lang="scss"></style>
