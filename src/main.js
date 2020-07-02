import './assets/styles/app.css';

import Vue from 'vue';
import App from './App.vue';
import VueSocialSharing from 'vue-social-sharing';

Vue.use(VueSocialSharing);

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');
