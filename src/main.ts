import './style/tailwind.css';
import { createApp } from 'vue';
import App from './App.vue';
import Router from '@/router';

// 通用字体
import 'vfonts/Lato.css';
// 等宽字体
import 'vfonts/FiraCode.css';

const app = createApp(App);
app.use(Router);
app.mount('#app');
