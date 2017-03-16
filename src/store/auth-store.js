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
            // mainStore.state.user = payload
            console.log('new user in auth store == state.user ', state.user)
            // console.log('new user in main store == state.user ', mainStore.state.user)

        },
        createNewUser(state, newUser) {
            console.log("YESSSSSSSSSSSSSSSSSSSS")
            state.user = newUser
            mainStore.state.user = newUser
            state.user = newUser;
            console.log('New User Has Been Created!', state.user)
            console.log('New User Has Been Created in the main store!', mainStore.state.user)


            Materialize.toast('Your Account Was Created! Welcome To Shuffle', 2000)
            router.push('/dashboard')
        },
        setUser(state, payload) {
            state.user = payload.data
            console.log('user has been set! you are logged in  ', state.user)
            console.log("This is the THIS  ", router)
            router.push('/dashboard')
        },
        logoutUser(state) {
            state.user = {}
            console.log('user is logged out', state.user)
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
                        // rej('shit it didnt work')
                    })
                }
                return
            })
                // .then(() => {
                //     let newUserPayload = {
                //         email: newUser.email,
                //         password: newUser.password
                //     }
                //     console.log('newUserPayload ', newUserPayload)
                //     mainStore.modules.authStore.actions.login(newUserPayload)
                // })
                .catch(err => console.log(err))
        },
        login({ commit }, payload) {
            console.log('payload ', payload)
            api.post('https://shuffle-app-1.herokuapp.com/login', {
                email: payload.email,
                password: payload.password
            }
            ).then(res => {
                console.log('almost logged in! calling mutation', res.data)
                if (res.data.error) {
                    Materialize.toast(res.data.error, 4000)
                    return
                }
                commit('setUser', res.data)
            }).catch(err => console.log('ERROR: ' + error))
        },
        logout({ commit }) {
            axios.delete('https://shuffle-app-1.herokuapp.com/logout').then(res => {
                console.log('calling mutation to end session ', res.data)
                commit('logoutUser')
            })
        },
        authenticate({ commit }, payload) {
            api.get('https://shuffle-app-1.herokuapp.com/authenticate')
                .then(res => {
                    console.log('User Authentication ', res.data.data)
                }).catch(err => console.log(err))
        },

    }

}