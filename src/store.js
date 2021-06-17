import { createStore } from "vuex";
import sehirlerDetay from "./assets/sehirler_detay.json";

const store = createStore({
  state: {
    sehirlerDetay: {},
  },
  actions: {
    initSehirDetay({ state }) {
      const data = {};
      Object.entries(sehirlerDetay).forEach(([, obj]) => {
        data[obj.il.plaka] = obj.il;
      });
      state.sehirlerDetay = data;
    },
  },
});

export default store;
