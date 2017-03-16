import Vue from 'vue'
import axios from 'axios'
import mainStore from './index'
import router from '../router'

let api = axios.create({
    baseURL: 'https://shuffle-app-1.herokuapp.com/api/',
    timeout: 2000,
    withCredentials: true
})

export default {
    name: 'authStore',
    namespaced: true,
    state: {
        user: {}
    },
    getters: {
        getUser() {
            return this.user
        }
    },
    mutations: {
        forcedMutationLogin(state, payload) {
            state.user = payload
        },
        setUser(state, payload) {
            state.user = payload.data
            router.push('/dashboard')
        },
        logoutUser(state) {
            state.user = {}
        }
    },
    actions: {
        createNewAccount({ commit, dispatch }, newUser) {
            axios.post('https://shuffle-app-1.herokuapp.com/register', newUser).then(res => {
                if (res.data.error) {
                    console.log("ERROR  ", res.data.error)
                    if (res.data.error.code = 11000) {
                        Materialize.toast('This email address is already associated with an account.', 5000)
                        return
                    }
                }else{
                    return new Promise((res,rej)=>{
                        res()
                    })
                }
                return
            })
                .catch(err => console.log(err))
        },
        login({ commit }, payload) {
            api.post('https://shuffle-app-1.herokuapp.com/login', {
                email: payload.email,
                password: payload.password
            }
            ).then(res => {
                if (res.data.error) {
                    Materialize.toast(res.data.error, 4000)
                    return
                }
                commit('setUser', res.data)
            }).catch(err => console.log('ERROR: ' + error))
        },
        logout({ commit }) {
            axios.delete('https://shuffle-app-1.herokuapp.com/logout').then(res => {
                commit('logoutUser')
            })
        },
        authenticate({ commit }, payload) {
            api.get('https://shuffle-app-1.herokuapp.com/authenticate')
                .then(res => {
                }).catch(err => console.log(err))
        },

    }

}