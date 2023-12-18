import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import ClassicSheet from "./components/ClassicSheet.vue";
import CustomSheet from "./components/CustomSheet.vue";

export const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Clássica",
		component: ClassicSheet,
	},
	{
		path: "/customizada",
		name: "Customizada",
		component: CustomSheet,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
