<template>

<div>
  <h4>Dashboard</h4>
  <div class="card-container">
    <div v-for="team in teamArr" class="well">
      <router-link :to="'/team/'+ team._id">{{team.name}} <br/></router-link>   
        <p @click="showDelete=!showDelete">{{team.description}}</p>
    </div>
  </div>


</div>

</template>

<script>
// import Modal from './Modal'
import { mapActions, mapState, mapGetters} from 'vuex'
export default {
    name: 'dashboard',
    // components: {Modal},
    data(){
        return {
            showDelete:false
            // currentUser: this.$store.state.authStore.user
        }
    },
    computed:{
        ...mapState('authStore', ['user']),
        ...mapState(['myTeams']),
        user(){
            return this.user
        },
        teamArr(){
            return this.myTeams
        },
        checkLogin(){
            this.currentUser ? true: false
        }

     },
    methods:{
        ...mapActions(['getTheTeams']),
        getUserTeams(){
            this.getTheTeams()
        },
                  verifyUser(){
      return this.$root.$store.state.authStore.user.name? true: false
    }

    },
    watch:{
        currentUser(){
        this.getUserTeams(this.currentUser)
      },
   },
   mounted(){
       this.getUserTeams(this.currentUser)
       console.log(this.verifyUser())
   }

}
</script>

<style>
.card-container{
    display: flex;
     flex-direction: row;
    flex-wrap: wrap;
      justify-content:space-around;
    
}

.cards{
    width: 25%;
    height: 200px;
    margin: 1%; 
}

.well{
    width:25%;
    margin: 2%;
}

</style>