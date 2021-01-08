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
          process.env.VUE_APP_API+"/login",
          {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(payload) 
          })
        await fetch(request).then((res) => {
          let { user } = res.json()
         // commit('set_current_user', user)
          //commit('set_auth_status',true)
          resolve(res.json())
        }).catch(err => { reject(); throw err })
      })
    },
    register({commit}, payload) {
      return new Promise(async (resolve, reject) => {
        const request = new Request(
          process.env.VUE_APP_API+"/register",
          {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(payload) 
          })
        await fetch(request).then((res) => {
          resolve(res.json())
        }).catch(err => { reject(); throw err })
      })
    }
  },
  modules: {
  }
})
