import { createApp } from "vue";
import App from "./App.vue";

import Map from "./components/Map.vue";

import "./styles/app.scss";

const app = createApp(App);
app.component("Map", Map);
app.mount("#app");
