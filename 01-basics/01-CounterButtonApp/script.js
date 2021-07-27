import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootAppComponent = defineComponent({
    name: 'Root',

    data() {
        return {
            count: 0,
        }
    },
});

createApp(RootAppComponent).mount('#app');