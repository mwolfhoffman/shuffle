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
            console.log('state.user ', state.user)
        },
        createNewUser(state, newUser) {
            state.user = newUser
            console.log('New User Has Been Created!', state.user)
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
        createNewAccount({commit}, newUser) {
            debugger
            axios.post('https://shuffle-app-1.herokuapp.com/register', newUser).then(res => {
                if(res.data.error){
                    debugger 
                    console.log("ERROR  ", res.data.error)

                    if(res.data.error.code=11000){
                        Materialize.toast('This email address is already associated with an account.', 5000)
                        return
                    }


                    return
                }
                console.log('creating new user', res.data),
                    commit('createNewUser', newUser)
            }).catch(err => console.log(err))
        },
        login({commit}, payload) {
            api.post('https://shuffle-app-1.herokuapp.com/login', {
                email: payload.email,
                password: payload.password
            }
            ).then(res => {
                console.log('almost logged in! calling mutation', res.data)
                if(res.data.error){
                     Materialize.toast(res.data.error, 4000) 
                    return   
                }
                commit('setUser', res.data)
            }).catch(err => console.log('ERROR: '+  error) )
        },
        logout({commit}) {
            axios.delete('https://shuffle-app-1.herokuapp.com/logout').then(res => {
                console.log('calling mutation to end session ', res.data)
                commit('logoutUser')
            })
        },
        authenticate({commit}, payload) {
            api.get('https://shuffle-app-1.herokuapp.com/authenticate')
                .then(res => {
                    console.log('User Authentication ',  res.data.data)
                }).catch(err=>console.log(err))
        },

    }

}