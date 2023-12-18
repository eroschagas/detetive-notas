import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";
import Icon from "./components/global/Icon.vue";
import Divider from "./components/global/Divider.vue";

createApp(App)
	.use(router)
	.component("icon", Icon)
	.component("divider", Divider)
	.mount("#app");
