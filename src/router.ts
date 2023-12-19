import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import ClassicSheet from "./components/ClassicSheet.vue";
import CustomSheet from "./components/CustomSheet.vue";

export const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Clássico",
		component: ClassicSheet,
	},
	{
		path: "/customizada",
		name: "Customizado",
		component: CustomSheet,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
