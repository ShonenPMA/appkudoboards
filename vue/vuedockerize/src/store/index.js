import { Store } from 'vuex'
import { createStore } from 'vuex-extensions'

import auth from '../modules/auth/store/auth';
import kudoboard from '../modules/kudoboard/store/kudoboard';
import project from '../modules/project/store/project';
import team from '../modules/team/store/team';

const store = createStore(Store,{
    modules: {
        auth,
        kudoboard,
        project,
        team
    }
})

export default store
