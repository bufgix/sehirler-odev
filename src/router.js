import { createRouter, createWebHashHistory } from "vue-router";

import HomeScreen from "./views/Home.vue";
import DetayScreen from "./views/Detail.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: HomeScreen,
      children: [
        {
          path: ":id",
          name: "detay",
          component: DetayScreen,
        },
      ],
    },
  ],
});
