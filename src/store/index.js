import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // передаем ошибки сюда (по умолчанию, все ок)
    error: null
  },
  mutations: {
    // отслеживание и передача ошибки в state
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    // получение доступа к ошибке
    error: state => state.error
  },
  actions: {
  },
  modules: {
    auth
  }
})
