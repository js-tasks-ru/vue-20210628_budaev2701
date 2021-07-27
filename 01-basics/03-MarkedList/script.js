import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const RootAppComponent = defineComponent({
  name: 'Root',

  data() {
    return {
      rawEmails: emails,
      searchText: '',
    }
  },

  computed: {
    emails() {
      return this.rawEmails.map(email => ({
        value: email,
        isMarked: false,
      }))
    },

    filteredEmails() {
      if (!this.emails)
        return null;

      const foundEmails = this.emails.filter((e) => e.value.toLowerCase()
        .includes(this.searchText.toLowerCase()));

      this.emails.forEach((email) => {
        if (this.searchText && foundEmails.includes(email))
          email.isMarked = true;
        else
          email.isMarked = false;
      });

      return this.emails;
    },
  },

});

createApp(RootAppComponent).mount('#app');