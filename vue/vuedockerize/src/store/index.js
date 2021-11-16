import { createStore } from 'vuex'

import auth from '../modules/auth/store/auth';
import kudoboard from '../modules/kudoboard/store/kudoboard';
import project from '../modules/project/store/project';

const store = createStore({
    modules: {
        auth,
        kudoboard,
        project
    }
})

export default store
