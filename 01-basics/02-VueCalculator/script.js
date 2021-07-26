import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootAppComponent = defineComponent({
    name: 'Root',

    data() {
        return {
            number1: 0,
            number2: 0,
            sign: 'sum',
        }
    },

    computed: {
        result() {
            switch (this.sign) {
                case 'sum':
                    return this.number1 + this.number2;

                case 'subtract':
                    return this.number1 - this.number2;

                case 'multiply':
                    return this.number1 * this.number2;

                case 'divide':
                    return this.number1 / this.number2;

                default:
                    return 0;
            }
        }
    },

});

createApp(RootAppComponent).mount('#app');