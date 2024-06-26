import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiSearch, MdKeyboardarrowdown } from "oh-vue-icons/icons";

addIcons(BiSearch, MdKeyboardarrowdown);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");