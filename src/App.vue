<template>
  <div>
    <center>
      <nav class="navbar navbar-default ">
        <div class="container">
          <div class="flex-container">
            <router-link :to="'/'">
              <h4><b><em>Shuffle</em></b></h4>
            </router-link>
            <router-link v-show="verifyUser" :to="'/dashboard'">Dashboard</router-link>
            <router-link v-show="verifyUser" :to="'/create'">Create Team</router-link>
            <a href="/" v-show="verifyUser" @click="logoutUser">Logout</a>
          </div>
        </div>
      </nav>
      <router-view></router-view>
    </center>
  </div>

</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'
  import router from './router'


  export default {
    name: 'app',
    methods: {
    ...mapActions('authStore', ['logout']),
      logoutUser() {
        this.logout()
      }
    },
    mounted() {
      this.verifyUser
    },
    computed: {
      verifyUser() {
        return this.$root.$store.state.authStore.user.name ? true : false
      }
    }
  }

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
       font-family: 'Roboto', sans-serif;
  }
  
  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  nav{
    background: #607d8b; 
  }
</style>