import { createStore } from 'vuex'
import api from '@/services/api'

export default createStore({
  state: {
    currentUser: null,
    isAuthenticated: false
  },
  mutations: {
    set_current_user(state, user) { state.user = user },
    set_auth_status(state, status) { state.isAuthenticated = status }
  },
  actions: {
    login({commit}, payload) {
      api.login(payload).then((res) => {
        return res.json()
      }).catch((err) => console.error(err))
    },
    register({commit}, payload) {
      api.register(payload).then((res) => {
        return res.json()
      }).catch((err) => console.error(err))
    }
  },
  modules: {
  }
})
