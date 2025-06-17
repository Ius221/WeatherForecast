import { createApp } from 'vue'
import App from './App.vue'
import BigContainer from './components/UI/BigContainer.vue';
import SmallContainer from './components/UI/SmallContainer.vue';


const app = createApp(App);
app.component('big-container', BigContainer);
app.component('small-container', SmallContainer);

app.mount('#app')
