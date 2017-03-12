<template lang="pug">
div
  center
    h3 Create  a Team
    // multistep form
    form#msform(@submit.prevent='submitTeam')
      // fieldsets
      fieldset
        h2.fs-title Create New Team
        h3.fs-subtitle
        input(type='text', name='email', placeholder='Team Name', v-model='teamName')
        input(type='text', name='pass', placeholder='Team Description', v-model='teamDescription')
        input(type='text', name='cpass', placeholder='Member', v-model='newMember')
        button.next.action-button(type='button', @click='addMemberToArray')  Add Member To Team
        button.next.action-button(type='submit')  Create Team
    div(v-if='members.length>0')
      h4 New Members
      p
        | You new team has 
        b {{members.length}}
        |  members
      ul(v-for='(member, index) in members')
        li(@click='removeMember(index)') {{member.name}}

</template>



<script>

import {mapActions} from 'vuex'
import uuid from 'uuid'

export default {
    name: 'create',
	data(){
		return{
			teamName:'',
			teamDescription:'',
			newMember:'',
			members:[]
		}
	},
	methods:{
		...mapActions('teamStore', ['createTeam']),
		addMemberToArray(){
			this.members.push({
				name: this.newMember,
				active: true,
				isOnTeam: true,
				memberId: uuid()
				})
			this.newMember=''
		},
		removeMember(i){
			this.members.splice(i,1)
		},
		submitTeam(){
			this.createTeam({
				name: this.teamName,
				description: this.teamDescription,
				members: this.members
			})
			this.teamName=''
			this.teamDescription=''
			this.members=[]
		},
    	 verifyUser(){
	    	  return this.$root.$store.state.authStore.user.name? true: false
    		}
	 },
	 mounted(){
		 console.log(this.verifyUser())
	 }

}

</script>

<style>
.createForm{
    display: block;
    /*boarder: 10px solid red;*/
}

/*custom font*/
@import url(http://fonts.googleapis.com/css?family=Montserrat);

/*basic reset*/
* {margin: 0; padding: 0;}


body {
	font-family: montserrat, arial, verdana;
}
/*form styles*/
#msform {
	width: 400px;
	margin: 50px auto;
	text-align: center;
	position: relative;
}
#msform fieldset {
	background: white;
	border: 0 none;
	border-radius: 3px;
	box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
	padding: 20px 30px;
	box-sizing: border-box;
	width: 80%;
	margin: 0 10%;
	
	/*stacking fieldsets above each other*/
	position: relative;
}
/*Hide all except first fieldset*/
#msform fieldset:not(:first-of-type) {
	display: none;
}
/*inputs*/
#msform input, #msform textarea {
	padding: 15px;
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 10px;
	width: 100%;
	box-sizing: border-box;
	font-family: montserrat;
	color: #2C3E50;
	font-size: 13px;
}
/*buttons*/
#msform .action-button {
	width: 100px;
	background: #27AE60;
	font-weight: bold;
	color: white;
	border: 0 none;
	border-radius: 1px;
	cursor: pointer;
	padding: 10px 5px;
	margin: 10px 5px;
}
#msform .action-button:hover, #msform .action-button:focus {
	box-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;
}
/*headings*/
.fs-title {
	font-size: 15px;
	text-transform: uppercase;
	color: #2C3E50;
	margin-bottom: 10px;
}
.fs-subtitle {
	font-weight: normal;
	font-size: 13px;
	color: #666;
	margin-bottom: 20px;
}
/*progressbar*/
#progressbar {
	margin-bottom: 30px;
	overflow: hidden;
	/*CSS counters to number the steps*/
	counter-reset: step;
}
#progressbar li {
	list-style-type: none;
	color: white;
	text-transform: uppercase;
	font-size: 9px;
	width: 33.33%;
	float: left;
	position: relative;
}
#progressbar li:before {
	content: counter(step);
	counter-increment: step;
	width: 20px;
	line-height: 20px;
	display: block;
	font-size: 10px;
	color: #333;
	background: white;
	border-radius: 3px;
	margin: 0 auto 5px auto;
}
/*progressbar connectors*/
#progressbar li:after {
	content: '';
	width: 100%;
	height: 2px;
	background: white;
	position: absolute;
	left: -50%;
	top: 9px;
	z-index: -1; /*put it behind the numbers*/
}
#progressbar li:first-child:after {
	/*connector not needed before the first step*/
	content: none; 
}
/*marking active/completed steps green*/
/*The number of the step and the connector before it = green*/
#progressbar li.active:before,  #progressbar li.active:after{
	background: #27AE60;
	color: white;
}

button{
	background: darkslategray;
}



</style>