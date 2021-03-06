import Vue from 'vue'
import Vuex from 'vuex';
import actions from './actions'
import mutations from './mutations'
import state from 'state'

Vue.use(Vuex);

export const store = new Vuex.store({
    state,
    mutations,
    actions
});