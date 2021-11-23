import {createApp} from 'vue'
import App from './App.vue'
import Router from "@/router";

import NaiveUI from "@/plugins/NaiveUI";

const app = createApp(App)
app.use(Router)
app.use(NaiveUI)
app.mount('#app')
