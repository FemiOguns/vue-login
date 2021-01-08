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
      return new Promise(async (resolve, reject) => {
        await fetch(api.postData('/login',payload)).then((res) => {
          //commit('set_current_user', user)
          //commit('set_auth_status',true)
          resolve(res.json())
        }).catch(err => { reject(); throw err })
      })
    },
    register({commit}, payload) {
      return new Promise(async (resolve, reject) => {
        await fetch(api.postData('/register',payload)).then((res) => {
          resolve(res.json())
        }).catch(err => { reject(); throw err })
      })
    }
  },
  modules: {
  }
})
