import Vue from 'vue'
import Vuex from 'vuex'

import systemInfo from './systemInfo'
import userInfo from './userInfo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    systemInfo,
    userInfo
  }
})

export default store
