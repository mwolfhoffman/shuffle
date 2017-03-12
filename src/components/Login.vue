<template lang="pug">
div
  p(v-show="verifyUser") You are already logged in 
  .login
    .container(v-if='!createAccount')
      .card.card-container
        center
         h5 Please Log In <br/>
        img#profile-img.profile-img-card(src='//ssl.gstatic.com/accounts/ui/avatar_2x.png')
        p#profile-name.profile-name-card
        form.form-signin(@submit.prevent='loginUser')
          span#reauth-email.reauth-email
          input#inputEmail.form-control(type='email', placeholder='Email address', required='', autofocus='', v-model='email')
          input#inputPassword.form-control(type='password', placeholder='Password', required='', v-model='password')
          button.btn.btn-lg.btn-primary.btn-block.btn-signin(type='submit') Sign in
        a.create-account(@click='createAccount=!createAccount') Create New Account
    .container(v-if='createAccount')
      .card.card-container
        center
          h4 Create Account
        img#profile-img.profile-img-card(src='//ssl.gstatic.com/accounts/ui/avatar_2x.png')
        p#profile-name.profile-name-card
        form.form-signin(@submit.prevent='createUser')
          input#inputEmail.form-control(type='text', placeholder='First Name', autofocus='', v-model='firstName', required='')
          input#inputEmail.form-control(type='text', placeholder='Last Name', autofocus='', v-model='lastName', required='')
          input#inputEmail.form-control(type='email', placeholder='Email address', autofocus='', v-model='newEmail', required='')
          input#inputPassword.form-control(type='password', placeholder='Password', v-model='newPassword', required='')
          button.btn.btn-lg.btn-primary.btn-block.btn-signin(type='submit') Create Account
        a.create-account(@click='createAccount=!createAccount') I already have a login


</template>

<script>
import vue from 'vue'
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
    name: 'login',
    data(){
        return{
            email: '',
            password: '',
            createAccount:false,
            firstName: '',
            lastName: '',
            newEmail: '',
            newPassword: ''
        }
    },
    methods:{
  ...mapActions('authStore', ['createNewAccount', 'login', 'logout', 'authenticate']),

   loginUser(){
      console.log('at least the method is working')
      this.login({
          email: this.email,
          password: this.password
      })
            this.email='',
            this.password=''    
        },
   
   createUser(){
        console.log('creating user')
         let newUser = {
         name: this.firstName +' '+  this.lastName,
         email: this.newEmail,
         password: this.newPassword
            }
   console.log('new user ', newUser)
       this.createNewAccount(newUser)
       this.firstName='',
       this.lastName='',
       this.newEmail='',
      this.newPassword=''
            },
       
        logout(){
            this.logout()
        },
       
        authenticateUser(){
            this.authenticate()
    }
  },
  computed:{
        verifyUser(){
      return this.$root.$store.state.authStore.user.name? true: false
    }
  },
    mounted(){
       console.log(this.verifyUser)
   }

}
</script>

<style scoped>
.card-container.card {
    max-width: 350px;
    padding: 40px 40px;
}

.btn {
    font-weight: 700;
    height: 36px;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: default;
}

/*
 * Card component
 */
.card {
    background-color: #F7F7F7;
    /* just in case there no content*/
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    /* shadows and rounded borders */
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

/*
 * Form styles
 */
.profile-name-card {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0 0;
    min-height: 1em;
}

.reauth-email {
    display: block;
    color: #404040;
    line-height: 2;
    margin-bottom: 10px;
    font-size: 14px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.form-signin #inputEmail,
.form-signin #inputPassword {
    direction: ltr;
    height: 44px;
    font-size: 16px;
}

.form-signin input[type=email],
.form-signin input[type=password],
.form-signin input[type=text],
.form-signin button {
    width: 100%;
    display: block;
    margin-bottom: 10px;
    z-index: 1;
    position: relative;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.form-signin .form-control:focus {
    border-color: rgb(104, 145, 162);
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);
}

.btn.btn-signin {
    /*background-color: #4d90fe; */
    background-color: rgb(104, 145, 162);
    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/
    padding: 0px;
    font-weight: 700;
    font-size: 14px;
    height: 36px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    border: none;
    -o-transition: all 0.218s;
    -moz-transition: all 0.218s;
    -webkit-transition: all 0.218s;
    transition: all 0.218s;
}

.btn.btn-signin:hover,
.btn.btn-signin:active,
.btn.btn-signin:focus {
    background-color: rgb(12, 97, 33);
}

.create-account {
    color: rgb(104, 145, 162);
}

.create-account:hover,
.create-account:active,
.create-account:focus{
    color: rgb(12, 97, 33);
}

</style>