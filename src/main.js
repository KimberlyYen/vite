import App from "./App.vue";
import Varlet from "@varlet/ui";
import { createApp } from "vue";
import "@varlet/ui/es/style";
import "./index.css";

createApp(App).use(Varlet).mount("#app");
