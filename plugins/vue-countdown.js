// plugins/vue-countdown.js
import VueCountdown from '@chenfengyuan/vue-countdown';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.vueApp.component(VueCountdown.name, VueCountdown);
  }
});