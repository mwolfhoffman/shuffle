webpackJsonp([1,2],{100:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(6),n=a.n(s),r=a(5);a.n(r);t.default={name:"member",props:["member"],data:function(){return{menu:!1,isActive:!0,isDeleted:!1}},methods:n()({},a.i(r.mapActions)("teamStore",["removeTeamMember"]),{removeFromTeam:function(){var e=this,t=this.$parent.members.filter(function(t){return t.memberId!=e.member.memberId});this.removeTeamMember({teamId:this.$route.params.id,members:t}),this.isDeleted=!this.isDeleted,this.member.active=!1,this.menu=!this.menu},toggleActive:function(e){var t=this;this.isActive=!this.isActive,this.$parent.members.map(function(e){t.member.memberId===e.memberId&&(e.active=t.isActive)}),this.menu=!this.menu}})}},101:function(e,t,a){"use strict";var s=a(104),n=a.n(s),r=a(13),i=(a.n(r),a(16)),o=a.n(i),c=(a(24),a(17)),m=o.a.create({baseURL:"https://shuffle-app-1.herokuapp.com/api/",timeout:2e3,withCredentials:!0});t.a={name:"authStore",namespaced:!0,state:{user:{}},getters:{getUser:function(){return this.user}},mutations:{forcedMutationLogin:function(e,t){e.user=t,console.log("new user in auth store == state.user ",e.user)},setUser:function(e,t){e.user=t.data,console.log("user has been set! you are logged in  ",e.user),console.log("This is the THIS  ",c.a),c.a.push("/dashboard")},logoutUser:function(e){e.user={},console.log("user is logged out",e.user)}},actions:{createNewAccount:function(e,t){e.commit,e.dispatch;o.a.post("https://shuffle-app-1.herokuapp.com/register",t).then(function(e){return e.data.error?(console.log("ERROR  ",e.data.error),(e.data.error.code=11e3)?void Materialize.toast("This email address is already associated with an account.",5e3):void 0):new n.a(function(e,t){e()})}).catch(function(e){return console.log(e)})},login:function(e,t){var a=e.commit;console.log("payload ",t),m.post("https://shuffle-app-1.herokuapp.com/login",{email:t.email,password:t.password}).then(function(e){return console.log("almost logged in! calling mutation",e.data),e.data.error?void Materialize.toast(e.data.error,4e3):void a("setUser",e.data)}).catch(function(e){return console.log("ERROR: "+error)})},logout:function(e){var t=e.commit;o.a.delete("https://shuffle-app-1.herokuapp.com/logout").then(function(e){console.log("calling mutation to end session ",e.data),t("logoutUser")})},authenticate:function(e,t){e.commit;m.get("https://shuffle-app-1.herokuapp.com/authenticate").then(function(e){console.log("User Authentication ",e.data.data)}).catch(function(e){return console.log(e)})}}}},102:function(e,t,a){"use strict";var s=a(13),n=(a.n(s),a(16)),r=a.n(n),i=(a(24),a(17)),o=r.a.create({baseURL:"https://shuffle-app-1.herokuapp.com/api/",timeout:2e3,withCredentials:!0});t.a={name:"teamStore",namespaced:!0,state:{currentTeam:{}},getters:{},mutations:{setTeam:function(e,t){e.currentTeam=t.data},setDeletedTeamState:function(e){e.currentTeam={},i.a.push("/dashboard")},updateTeam:function(e,t){e.currentTeam=t,Materialize.toast("Team Member Was Successfully Deleted")}},actions:{createTeam:function(e,t){e.commit;o.post("teams",t).then(function(e){Materialize.toast("Team Was Successfully Created",4e3),i.a.push("/dashboard")}).catch(function(e){return console.log(e)})},getThisTeam:function(e,t){var a=e.commit;o.get("teams/"+t).then(function(e){a("setTeam",e.data)}).catch(console.log)},removeTeamMember:function(e,t){e.commit;o.put("teams/"+t.teamId,{members:t.members}).then(function(e){Materialize.toast("Team Member Was Successfully Deleted",4e3)})},removeTeam:function(e,t){var a=e.commit;o.delete("teams/"+t.teamId).then(function(e){a("setDeletedTeamState",e),Materialize.toast("This team was deleted!  ",4e3)})}}}},151:function(e,t){},152:function(e,t){},153:function(e,t){},154:function(e,t){},155:function(e,t){},156:function(e,t){},168:function(e,t,a){a(155);var s=a(12)(a(96),a(177),null,null);e.exports=s.exports},169:function(e,t,a){a(152);var s=a(12)(a(97),a(174),null,null);e.exports=s.exports},17:function(e,t,a){"use strict";var s=a(13),n=a.n(s),r=a(179),i=a.n(r),o=a(169),c=a.n(o),m=a(168),u=a.n(m),l=a(170),d=a.n(l),p=a(171),v=a.n(p);n.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"Login",component:d.a},{path:"/dashboard",name:"Dashboard",component:c.a},{path:"/create",name:"Create",component:u.a},{path:"/team/:id",name:"Team",component:v.a}]})},170:function(e,t,a){a(151);var s=a(12)(a(98),a(173),"data-v-0e596401",null);e.exports=s.exports},171:function(e,t,a){a(153);var s=a(12)(a(99),a(175),null,null);e.exports=s.exports},172:function(e,t,a){a(156);var s=a(12)(a(100),a(178),null,null);e.exports=s.exports},173:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{directives:[{name:"show",rawName:"v-show",value:e.verifyUser,expression:"verifyUser"}]},[e._v("You are already logged in ")]),a("div",{staticClass:"login"},[e.createAccount?e._e():a("div",{staticClass:"container"},[a("div",{staticClass:"card card-container"},[a("center",[a("h5",[e._v("Please Log In "),a("br")])]),a("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),a("p",{staticClass:"profile-name-card",attrs:{id:"profile-name"}}),a("form",{staticClass:"form-signin",on:{submit:function(t){t.preventDefault(),e.loginUser(t)}}},[a("span",{staticClass:"reauth-email",attrs:{id:"reauth-email"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"inputEmail",type:"email",placeholder:"Email address",required:"",autofocus:""},domProps:{value:e._s(e.email)},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"inputPassword",type:"password",placeholder:"Password",required:""},domProps:{value:e._s(e.password)},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("button",{staticClass:"btn btn-lg btn-primary btn-block btn-signin",attrs:{type:"submit"}},[e._v("Sign in")])]),a("a",{staticClass:"create-account",on:{click:function(t){e.createAccount=!e.createAccount}}},[e._v("Create New Account")])],1)]),e.createAccount?a("div",{staticClass:"container"},[a("div",{staticClass:"card card-container"},[a("center",[a("h4",[e._v("Create Account")])]),a("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),a("p",{staticClass:"profile-name-card",attrs:{id:"profile-name"}}),a("form",{staticClass:"form-signin",on:{submit:function(t){t.preventDefault(),e.createUser(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],staticClass:"form-control",attrs:{id:"inputEmail",type:"text",placeholder:"First Name",autofocus:"",required:""},domProps:{value:e._s(e.firstName)},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],staticClass:"form-control",attrs:{id:"inputEmail",type:"text",placeholder:"Last Name",autofocus:"",required:""},domProps:{value:e._s(e.lastName)},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newEmail,expression:"newEmail"}],staticClass:"form-control",attrs:{id:"inputEmail",type:"email",placeholder:"Email address",autofocus:"",required:""},domProps:{value:e._s(e.newEmail)},on:{input:function(t){t.target.composing||(e.newEmail=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],staticClass:"form-control",attrs:{id:"inputPassword",type:"password",placeholder:"Password",required:""},domProps:{value:e._s(e.newPassword)},on:{input:function(t){t.target.composing||(e.newPassword=t.target.value)}}}),a("button",{staticClass:"btn btn-lg btn-primary btn-block btn-signin",attrs:{type:"submit"}},[e._v("Create Account")])]),a("a",{staticClass:"create-account",on:{click:function(t){e.createAccount=!e.createAccount}}},[e._v("I already have a login")])],1)]):e._e()])])},staticRenderFns:[]}},174:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h4",[e._v("Dashboard")]),e._v(" "),a("div",{staticClass:"card-container"},e._l(e.teamArr,function(t){return a("div",{staticClass:"well"},[a("router-link",{attrs:{to:"/team/"+t._id}},[e._v(e._s(t.name)+" "),a("br")]),e._v(" "),a("p",{on:{click:function(t){e.showDelete=!e.showDelete}}},[e._v(e._s(t.description))])],1)}))])},staticRenderFns:[]}},175:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row team-title"},[a("div",{staticClass:"col s12"},[a("h4",{attrs:{col:"",s12:""},on:{click:function(t){e.showDelete=!e.showDelete}}},[e._v(e._s(e.team.name))]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showDelete,expression:"showDelete"}],attrs:{col:"",s12:""},on:{click:e.removeFromTeam}},[a("i",{staticClass:"material-icons"},[e._v("delete_forever")])]),e._v(" "),a("p",{attrs:{col:"",s12:""}},[e._v(" "+e._s(e.team.description))]),e._v(" "),e.members?a("p",[e._v("Team Members: "+e._s(e.members.length))]):e._e()])])]),e._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row team-title"},[a("div",{staticClass:"col s6 offset-s3"},[a("form",{on:{submit:function(t){t.preventDefault(),e.createGroup(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.num,expression:"num"}],staticClass:"input-class center-align",attrs:{type:"text",placeholder:"Enter Size of Group.",required:""},domProps:{value:e._s(e.num)},on:{input:function(t){t.target.composing||(e.num=t.target.value)}}})])])])]),e._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s2 member-class"},e._l(e.members,function(e){return a("member",{attrs:{member:e}})})),e._v(" "),a("div",{staticClass:"col s10"},[a("div",{staticClass:"row"},e._l(e.results,function(t){return e.results.length>0?a("div",{staticClass:"group-container col s6",attrs:{div:""}},e._l(t,function(t){return a("div",{staticClass:"group"},[a("h5",[e._v(e._s(t.name))])])})):e._e()}))])])])])},staticRenderFns:[]}},176:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("center",[a("nav",{staticClass:"navbar navbar-default "},[a("div",{staticClass:"container"},[a("div",{staticClass:"flex-container"},[a("router-link",{attrs:{to:"/"}},[a("h4",[a("b",[a("em",[e._v("Shuffle")])])])]),e._v(" "),a("router-link",{directives:[{name:"show",rawName:"v-show",value:e.verifyUser,expression:"verifyUser"}],attrs:{to:"/dashboard"}},[e._v("Dashboard")]),e._v(" "),a("router-link",{directives:[{name:"show",rawName:"v-show",value:e.verifyUser,expression:"verifyUser"}],attrs:{to:"/create"}},[e._v("Create Team")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:e.verifyUser,expression:"verifyUser"}],attrs:{href:"/"},on:{click:e.logoutUser}},[e._v("Logout")])],1)])]),e._v(" "),a("router-view")],1)],1)},staticRenderFns:[]}},177:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("center",[a("h3",[e._v("Create  a Team")]),a("form",{attrs:{id:"msform"},on:{submit:function(t){t.preventDefault(),e.submitTeam(t)}}},[a("fieldset",[a("h2",{staticClass:"fs-title"},[e._v("Create New Team")]),a("h3",{staticClass:"fs-subtitle"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.teamName,expression:"teamName"}],attrs:{type:"text",name:"email",placeholder:"Team Name"},domProps:{value:e._s(e.teamName)},on:{input:function(t){t.target.composing||(e.teamName=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.teamDescription,expression:"teamDescription"}],attrs:{type:"text",name:"pass",placeholder:"Team Description"},domProps:{value:e._s(e.teamDescription)},on:{input:function(t){t.target.composing||(e.teamDescription=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newMember,expression:"newMember"}],attrs:{type:"text",name:"cpass",placeholder:"Member"},domProps:{value:e._s(e.newMember)},on:{input:function(t){t.target.composing||(e.newMember=t.target.value)}}}),a("button",{staticClass:"next action-button",attrs:{type:"button"},on:{click:e.addMemberToArray}},[e._v(" Add Member To Team")]),a("button",{staticClass:"next action-button",attrs:{type:"submit"}},[e._v(" Create Team")])])]),e.members.length>0?a("div",[a("h4",[e._v("New Members")]),a("p",[e._v("You new team has "),a("b",[e._v(e._s(e.members.length))]),e._v(" members")]),e._l(e.members,function(t,s){return a("ul",[a("li",{on:{click:function(t){e.removeMember(s)}}},[e._v(e._s(t.name))])])})],2):e._e()])],1)},staticRenderFns:[]}},178:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h5",{class:{active:e.isActive,inactive:!e.isActive,removed:e.isDeleted},on:{click:function(t){e.menu=!e.menu}}},[e._v(e._s(e.member.name))]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.menu,expression:"menu==true"}]},[a("button",{directives:[{name:"show",rawName:"v-show",value:1==e.isActive,expression:"isActive==true"}],staticClass:"btn",attrs:{type:"button"},on:{click:function(t){e.toggleActive(e.member.id)}}},[e._v("Inactive")]),e._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:0==e.isActive,expression:"isActive==false"}],staticClass:"btn",attrs:{type:"button"},on:{click:function(t){e.toggleActive(e.member.id)}}},[e._v("Active")]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.removeFromTeam}},[e._v("Remove")])])])},staticRenderFns:[]}},183:function(e,t){},184:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(13),n=a.n(s),r=a(75),i=a.n(r),o=a(5),c=a.n(o),m=a(24),u=a(74),l=a.n(u),d=a(17),p=a(73),v=a.n(p),h=a(16),f=a.n(h),g=(f.a.create({baseURL:"https://shuffle-app-1.herokuapp.com/api/",timeout:2e3,withCredentials:!0}),v()("https://shuffle-app-1.herokuapp.com/"));g.on("CONNECTED",function(e){console.log(e)}),n.a.use(i.a),n.a.use(c.a);var b=new c.a.Store(m.a);new n.a({el:"#app",store:b,router:d.a,template:"<App/>",components:{App:l.a}})},24:function(e,t,a){"use strict";var s=a(16),n=a.n(s),r=a(101),i=a(102),o=n.a.create({baseURL:"https://shuffle-app-1.herokuapp.com/api/",timeout:2e5,withCredentials:!0});t.a={modules:{authStore:r.a,teamStore:i.a},state:{user:{},myTeams:[]},getters:{getMyTeams:function(e){return e.myTeams}},mutations:{setMyTeams:function(e,t){e.myTeams=t}},actions:{getTheTeams:function(e){var t=e.commit;o.get("teams").then(function(e){var a=e.data.data.filter(function(e,t){return e.creatorId===r.a.state.user._id});t("setMyTeams",a)}).catch(function(e){return console.log(e)})}}}},74:function(e,t,a){a(154);var s=a(12)(a(95),a(176),null,null);e.exports=s.exports},95:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(6),n=a.n(s),r=a(5);a.n(r),a(17);t.default={name:"app",methods:n()({},a.i(r.mapActions)("authStore",["logout"]),{logoutUser:function(){this.logout()}}),mounted:function(){this.verifyUser},computed:{verifyUser:function(){return!!this.$root.$store.state.authStore.user.name}}}},96:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(6),n=a.n(s),r=a(5),i=(a.n(r),a(165)),o=a.n(i);t.default={name:"create",data:function(){return{teamName:"",teamDescription:"",newMember:"",members:[]}},methods:n()({},a.i(r.mapActions)("teamStore",["createTeam"]),{addMemberToArray:function(){this.members.push({name:this.newMember,active:!0,isOnTeam:!0,memberId:o()()}),this.newMember=""},removeMember:function(e){this.members.splice(e,1)},submitTeam:function(){this.createTeam({name:this.teamName,description:this.teamDescription,members:this.members}),this.teamName="",this.teamDescription="",this.members=[]},verifyUser:function(){return!!this.$root.$store.state.authStore.user.name}}),mounted:function(){console.log(this.verifyUser())}}},97:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(6),n=a.n(s),r=a(5);a.n(r);t.default={name:"dashboard",data:function(){return{showDelete:!1}},computed:n()({},a.i(r.mapState)("authStore",["user"]),a.i(r.mapState)(["myTeams"]),{user:function(){return this.user},teamArr:function(){return this.myTeams},checkLogin:function(){!!this.currentUser}}),methods:n()({},a.i(r.mapActions)(["getTheTeams"]),{getUserTeams:function(){this.getTheTeams()},verifyUser:function(){return!!this.$root.$store.state.authStore.user.name}}),watch:{currentUser:function(){this.getUserTeams(this.currentUser)}},mounted:function(){this.getUserTeams(this.currentUser),console.log(this.verifyUser())}}},98:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(6),n=a.n(s),r=a(13),i=(a.n(r),a(5));a.n(i);t.default={name:"login",data:function(){return{email:"",password:"",createAccount:!1,firstName:"",lastName:"",newEmail:"",newPassword:""}},methods:n()({},a.i(i.mapActions)("authStore",["createNewAccount","login","logout","authenticate"]),{loginUser:function(){this.login({email:this.email,password:this.password}),this.email="",this.password=""},createUser:function(){var e=this,t={name:this.firstName+" "+this.lastName,email:this.newEmail,password:this.newPassword};this.firstName="",this.lastName="",this.newEmail="",this.newPassword="",this.createNewAccount(t).then(function(a){e.login({email:t.email,password:t.password}).catch(function(e){console.log(e)})})},logout:function(){this.logout()},authenticateUser:function(){this.authenticate()}}),computed:{verifyUser:function(){return!!this.$root.$store.state.authStore.user.name}},mounted:function(){console.log(this.verifyUser)}}},99:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(6),n=a.n(s),r=a(5),i=(a.n(r),a(159)),o=a.n(i),c=a(172),m=a.n(c);t.default={name:"team",components:{Member:m.a},data:function(){return{showDelete:!1,num:"",results:[],activeMembers:[]}},methods:n()({},a.i(r.mapActions)("teamStore",["getThisTeam","removeTeam"]),{getTeam:function(){this.getThisTeam(this.$route.params.id)},createGroup:function(){var e=this;this.activeMembers=[],this.members.forEach(function(t){1==t.active&&e.activeMembers.push(t)});var t=o.a.shuffle(this.activeMembers);this.results=o.a.chunk(t,this.num),this.results[this.results.length-2].length!=this.results[this.results.length-1].length&&(this.results[this.results.length-1].forEach(function(t,a){e.results[a].push(t)}),this.results.splice(this.results.length-1,1)),this.num=""},removeFromTeam:function(){this.removeTeam({teamId:this.currentTeam._id})}}),computed:n()({},a.i(r.mapState)("teamStore",["currentTeam"]),{team:function(){return this.currentTeam},members:function(){if(this.team.members)return this.team.members}}),mounted:function(){this.getTeam()}}}},[184]);
//# sourceMappingURL=app.b9c6ce647ef5bc026f04.js.map