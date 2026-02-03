import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Nora from "@primeuix/themes/nora";
import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primevue/themes";
import "./css/main.scss";

const NeutralNora = definePreset(Nora, {
  semantic: {
    primary: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a",
    },
  },
});

const NeutralAura = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a",
    },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: NeutralAura,
    // preset: Aura,
    options: { darkModeSelector: ".dark" },
  },
});

app.mount("#app");
