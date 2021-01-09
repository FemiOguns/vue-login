import axios from 'axios'

let api = {
    login(payload) {
        return new Promise((resolve,reject) => {
            axios.post(process.env.VUE_APP_API+"/login",payload).then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    register(payload) {
        return new Promise((resolve,reject) => {
            axios.post(process.env.VUE_APP_API+"/register",payload).then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    },
}

export default api