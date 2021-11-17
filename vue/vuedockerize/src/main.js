import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faFolder,
    faHandHoldingHeart,
    faPlus,
    faSignOutAlt,
    faSync,
    faTrashAlt,
    faUserAlt,
    faUserPlus,
    faUsers,
    faUserTie,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import generalApi from './api/generalApi';
library.add(
    faFolder,
    faHandHoldingHeart,
    faPlus,
    faSignOutAlt, 
    faSync,
    faTrashAlt,
    faUserAlt,
    faUserPlus,
    faUsers,
    faUserTie,
)

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.VUE_APP_WEBSOCKET_APP_KEY,
    cluster: process.env.VUE_APP_WEBSOCKET_APP_CLUSTER,
    wsHost: process.env.VUE_APP_WEBSOCKET_WS_HOST,
    wsPort: process.env.VUE_APP_WEBSOCKET_WS_PORT,
    forceTLS: process.env.VUE_APP_WEBSOCKET_FORCE_TLS,
    encrypted: process.env.VUE_APP_WEBSOCKET_ENCRYPTED,
    disabledStats: process.env.VUE_APP_WEBSOCKET_DISABLED_STATS,
    authorizer: (channel, options) => {
        return {
            authorize: (socketId, callback) => {
                generalApi.post('/broadcasting/auth', {
                    socket_id: socketId,
                    channel_name: channel.name
                })
                .then(response => {
                    callback(false, response.data);
                })
                .catch(error => {
                    callback(true, error);
                });
            }
        };
    },
});


createApp(App)
    .use(store)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
