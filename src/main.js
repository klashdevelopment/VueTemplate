// Import vue createApp function.
import { createApp } from 'vue';
// Import the app.vue file
import App from './App.vue';

// Import the router.
import router from './router';

// Import FontAwesome Brand Icons
import { faDiscord, faTwitter, faGithub, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
// Import FontAwesome Solid Icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// Import FontAwesome's core and Vue plugin.
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import our css.
import './assets/main.css';

// Create the Vue app.
var vueApp = createApp(App);
// Make it use our router.
vueApp.use(router);
// Add our FontAwesome icons
library.add(faDiscord, faTwitter, faGithub, faYoutube, faTiktok, faEnvelope);
// Register the FontAwesome component.
vueApp.component('font-awesome-icon', FontAwesomeIcon)

// Mount it!
vueApp.mount('#app')