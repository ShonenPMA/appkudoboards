import state from './state'
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

const kudoboardModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default kudoboardModule