import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const RootAppComponent = defineComponent({
  name: 'Root',

  data() {
    return {
      radioValue: 1,
      title: 'MEETUP_TITLE'
    }
  },
  
  watch: {
    radioValue: {
      immediate: true,
      handler(newValue, oldValue) {
        this.getMeetup(newValue, oldValue);
      },
    },
  },

  methods: {
    async getMeetup(newValue) {
        let meetup = await fetchMeetupById(newValue);
        this.title = meetup.title;
    }
  },

});

createApp(RootAppComponent).mount('#app');