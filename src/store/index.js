import axios from 'axios'
import authStore from './auth-store'
import teamStore from './team-store'

let api = axios.create({
    baseURL: 'https://shuffle-app-1.herokuapp.com/api/',
    timeout: 200000,
    withCredentials: true
})

export default {
  modules: {
    authStore,
    teamStore
  },
  state: {
    user: {},
    myTeams: []
  },
  getters: {
    getMyTeams(state) {
      return state.myTeams
    }
  },
  mutations: {
    setMyTeams(state, payload){
      state.myTeams=payload
      console.log('teams were set in store ...   ', state.myTeams)
    }
  },
  actions: {
    getTheTeams({commit}){
      api.get('teams').then(res=>{
          let newPayload = res.data.data.filter((team,i)=>{
          return team.creatorId === authStore.state.user._id })
        commit('setMyTeams', newPayload)
      }).catch(err=>console.log(err))
    }
  }


}