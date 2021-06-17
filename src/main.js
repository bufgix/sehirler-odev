import { createApp } from "vue";
import App from "./App.vue";

import store from "./store";
import router from "./router";

import Map from "./components/Map.vue";
import DetailPanel from "./components/DetailPanel.vue";

import "./styles/app.scss";

const app = createApp(App);
app.use(store);
app.use(router);
app.component("Map", Map);
app.component("DetailPanel", DetailPanel);
app.mount("#app");
