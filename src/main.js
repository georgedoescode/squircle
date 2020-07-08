import './assets/styles/app.css';

import Vue from 'vue';
import App from './App.vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import VueSocialSharing from 'vue-social-sharing';
import Toasted from 'vue-toasted';

Vue.use(VueSocialSharing);
Vue.use(Toasted);

Vue.config.productionTip = false;

const requireComponent = require.context(
    './components',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);

    const componentName = upperFirst(
        camelCase(
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, '')
        )
    );

    Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
    render: (h) => h(App),
}).$mount('#app');
