import { createApp } from 'vue';
import App from './App.vue';
import { mountRouter } from '@/router';
import './style/config';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia());
mountRouter(app);
app.mount('#app');
