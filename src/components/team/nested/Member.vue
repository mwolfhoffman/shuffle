<template>

    <div>
        <h5 @click="menu=!menu" :class="{active: isActive, inactive: !isActive, removed:isDeleted}">{{member.name}}</h5>
        <div v-show="menu==true">
            <button type="button" class="btn" @click="toggleActive(member.id)" v-show="isActive==true">Inactive</button>
            <button type="button" class="btn" @click="toggleActive(member.id)" v-show="isActive==false">Active</button>
            <button type="button" class="btn" @click="removeFromTeam">Remove</button>
        </div>
    </div>

</template>

<script>
    import { mapActions, mapState, mapGetters } from 'vuex'
    export default {
        name: 'member',
        props: ['member'],
        data() {
            return {
                menu: false,
                isActive: true,
                isDeleted: false
            }
        },
        methods: {
            ...mapActions('teamStore', ['removeTeamMember']),
            removeFromTeam() {
                let updatedMembers =
                    this.$parent.members.filter(member => {
                        return member.memberId != this.member.memberId
                    })
                console.log('Updated team?    =>  ', updatedMembers)

                this.removeTeamMember({
                    teamId: this.$route.params.id,
                    members: updatedMembers
                })
                // This will change the style for the deleted member
                this.isDeleted = !this.isDeleted
                //This will mark them inactive
                    this.member.active=false
                        console.log(this.member.active)
                        this.menu=!this.menu

            },
            toggleActive(id) {
                this.isActive = !this.isActive
                this.$parent.members.map(member => {
                    if (this.member.memberId === member.memberId) {
                        member.active = this.isActive;
                    }
                })
                console.log(this.$parent.members)
                this.menu=!this.menu
            }
        }
    }

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");

    .inactive {
        font-family: 'Roboto', sans-serif;
        text-decoration: line-through;
        color: red;
    }
    
    .active {
        font-family: 'Roboto', sans-serif;
        color: darkslateblue;
    }
    
    .removed {
        font-family: 'Roboto', sans-serif;
        text-decoration: line-through;
        color: black;
    }
</style>