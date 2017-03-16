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
    name: 'teamStore',
    namespaced: true,
    state: {
        currentTeam: {}
    },
    getters: {},
    mutations: {
        setTeam(state, payload) {
            state.currentTeam = payload.data
        },
        setDeletedTeamState(state) {
            state.currentTeam = {}
            router.push('/dashboard')
        },
        updateTeam(state, payload) {
            state.currentTeam = payload
            Materialize.toast("Team Member Was Successfully Deleted")

        }
    },
    actions: {
        createTeam({ commit }, payload) {
            api.post('teams', payload).then(res => {
                Materialize.toast("Team Was Successfully Created", 4000)
                router.push('/dashboard')
            }).catch(err => console.log(err))
        },
        getThisTeam({ commit }, id) {
            api.get('teams/' + id).then(res => {
                commit('setTeam', res.data)
            }).catch(console.log)
        },
        removeTeamMember({ commit }, payload) {
            api.put('teams/' + payload.teamId, { members: payload.members }).then(res => {
                // commit('updateTeam', payload.members)
                Materialize.toast("Team Member Was Successfully Deleted", 4000)

            })
        },
        removeTeam({ commit }, payload) {
            api.delete('teams/' + payload.teamId).then(res => {
                commit('setDeletedTeamState', res)
                Materialize.toast('This team was deleted!  ', 4000)
            })
        }
    }
}