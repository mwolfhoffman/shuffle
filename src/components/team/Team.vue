<template lang="html">
    <div>
        <div class="container">
            <div class="row team-title">
                <div class="col s12">
                    <h4 col s12 @click="showDelete=!showDelete">{{team.name}}</h4>
                    <div col s12 v-show="showDelete" @click="removeFromTeam"><i class="material-icons">delete_forever</i></div>
                    <p col s12> {{team.description}}</p>
                    <p v-if="members">Team Members: {{members.length}}</p>
                    <!--<p v-if="members">Active Members: {{activeMembers.length}} </p>-->
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row team-title">
                <div class="col s6 offset-s3">
                    <form @submit.prevent="createGroup">
                        <input type="text" v-model="num" placeholder="Enter Size of Group." required="" class="input-class center-align" />
                    </form>
                </div>
            </div>
        </div>
        <!--Row with Results and Team-->
        <div class="container-fluid">
            <div class="row">
                <div class="col s2 member-class">
                    <member v-for="member in members" :member="member"></member>
                </div>
                <div class="col s10">
                    <div class="row">
                        <div class="group-container col s6" div v-if="results.length>0" v-for="group in results">
                            <div v-for="person in group" class="group">
                                <h5>{{person.name}}</h5>
                                <!--<hr>-->
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import _ from 'lodash'
    import Member from './nested/Member'

    export default {
        name: 'team',
        components: { Member },
        data() {
            return {
                showDelete: false,
                num: '',
                results: [],
                activeMembers: []
            }
        },
        methods: {
        ...mapActions('teamStore', ['getThisTeam', 'removeTeam'] ),
            getTeam() {
                this.getThisTeam(this.$route.params.id)
            },
            createGroup() {
                this.activeMembers = []
                this.members.forEach(m => {
                    if (m.active == true) {
                        this.activeMembers.push(m)
                    }
                })
                console.log('active members array ', this.activeMembers)
                let shuffled = _.shuffle(this.activeMembers)
                this.results = _.chunk(shuffled, this.num)
                if (this.results[this.results.length - 2].length != this.results[this.results.length - 1].length) {
                    this.results[this.results.length - 1].forEach((member, index) => {
                        this.results[index].push(member)
                    })
                    this.results.splice(this.results.length - 1, 1)
                    console.log(this.results)
                }
                this.num = ''
            },
            removeFromTeam() {
                console.log('its going to delete ', this.currentTeam._id, 'the type of the id is ', typeof this.currentTeam._id)
                this.removeTeam({ teamId: this.currentTeam._id })
            }
        },
        computed: {
            ...mapState('teamStore', ['currentTeam']),
            team() {
                return this.currentTeam
            },
            members() {
                if (this.team.members) {
                    return this.team.members
                }
            }
        },
        mounted() {
            this.getTeam()
            console.log('The members   ', this.team.members)
            console.log('The ACTIVE members   ', this.team.members)
        }
    }

</script>

<style>
    .input-class {
        border: 2px solid black;
    }
    /*.results-container {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: baseline;
    }*/
    
    .group-container {
        /*padding: 50%;*/
        /*margin: 0.1%;*/
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        /*width: 100%;*/
        height: 10%;
        border: 3px solid black;
        border-radius: 20px;
        align-content: center;
    }
    .group {
    width: 100%;
    display: block;
    }
    
    .team-title {
        display: inline;
        vertical-align: middle;
        text-align: center;
    }

    .member-class{
    
    box-shadow: 10px 10px 5px #888888;
    }
</style>