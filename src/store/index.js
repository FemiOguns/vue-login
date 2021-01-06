import { createStore } from 'vuex'

export default createStore({
  state: {
    currentUser: null,
    isAuthenticated: false
  },
  mutations: {
    set_current_user(state, user) {
      state.user = user
    },
    set_auth_status(state, status) {
      state.isAuthenticated = status
    }
  },
  actions: {
    login({commit}, payload) {
      return new Promise(async (resolve, reject) => {
        const request = new Request(
          process.env.VUE_APP_API_URL+"/login",
          {
            method: "POST",
            mode: "cors",
            cache: "default",
            body: JSON.stringify(payload)
          }
        );
        await fetch(request).then((res) => {
          let { user } = res.json()
          commit('set_current_user', user)
          commit('set_auth_status',true)
          resolve(res.json())
        }).catch(err => { reject(); throw err })
      })
    },
    register({commit}, payload) {
      return new Promise(async (resolve, reject) => {
        const request = new Request(
          process.env.VUE_APP_API_URL+"/register",
          {
            method: "POST",
            mode: "cors",
            cache: "default",
            body: JSON.stringify(payload)
          }
        );
        await fetch(request).then((res) => {
          let { user } = res.json()
          commit('set_current_user', user)
          commit('set_auth_status',true)
          resolve(res.json())
        }).catch(err => { reject(); throw err })
      })
    }
  },
  modules: {
  }
})
