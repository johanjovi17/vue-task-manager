import { createApp } from "vue";
import { Quasar, Notify } from "quasar";
import quasarLang from "quasar/lang/en-US";
import quasarIconSet from "quasar/icon-set/material-icons";
import { createPinia } from "pinia";

import App from "./App.vue";
import { router } from "./router";
import "quasar/src/css/index.sass";

const app = createApp(App);

app.use(Quasar, {
  plugins: { Notify },
  lang: quasarLang,
  iconSet: quasarIconSet,
});
app.use(createPinia());
app.use(router);

app.mount("#app");
