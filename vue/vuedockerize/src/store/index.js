import { createStore } from 'vuex'

import auth from '../modules/auth/store/auth';
import kudoboard from '../modules/kudoboard/store/kudoboard';

const store = createStore({
    modules: {
        auth,
        kudoboard
    }
})

export default store
