(this["webpackJsonpreact-social-site"]=this["webpackJsonpreact-social-site"]||[]).push([[0],{34:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(19),o=n.n(c),a=(n(34),n(3)),i=n(4),u=n(6),l=n(5),d=n(2),h=n(7),p=n(17),j="UPDATE_POSTS",f="LOGIN_START",m="LOGIN_SUCCESS",b="LOGIN_FAILED",O="SIGNUP_START",g="SIGNUP_SUCCESS",v="SIGNUP_FAILED",x="AUTHENTICATE_USER",S="LOG_OUT",N="CLEAR_AUTH_STATE",y="EDIT_PROFILE_SUCCESS",E="EDIT_PROFILE_FAILED",I="USER_PROFILE_SUCCESS",C="USER_PROFILE_FAILED",_="USER_PROFILE_BEGIN",k="CLEAR_PROFILE_STATE",T="FETCH_USER_FRIENDS_SUCCESS",P="FETCH_USER_FRIENDS_FAILED",F="FETCH_USER_FRIENDS_BEGIN",w="ADD_FRIEND_FAILED",R="ADD_FRIEND_SUCESS",L="ADD_FRIEND_BEGIN",U="REMOVE_FRIEND_FAILED",A="REMOVE_FRIEND_SUCESS",D="REMOVE_FRIEND_BEGIN",B="CLEAR_FRIEND_STATE",G="ADD_POST_SUCCESS",M="ADD_POST_FAILED",z="ADD_COMMENT_SUCCESS",H="ADD_COMMENT_FAILED",J="TOGGLE_LIKE_SUCCESS",q="TOGGLE_LIKE_FAILED",W="FETCH_SEARCH_USERS",K="CLEAR_SEARCH",V={posts:[],next:null,prev:null,error:null};var Q="https://powerful-hamlet-85569.herokuapp.com/api",X={fetchposts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return Q+"/posts?page=".concat(e,"&limit=").concat(t)},login:function(){return Q+"/users/login"},signup:function(){return Q+"/users/signup"},editProfile:function(){return Q+"/users/edit"},fetchProfile:function(e){return Q+"/users/".concat(e)},fetchFriends:function(){return Q+"/friendship/fetch_user_friends"},AddFriend:function(e){return Q+"/friendship/create_friendship?user_id=".concat(e)},RemoveFriend:function(e){return Q+"/friendship/remove_friendship?user_id=".concat(e)},createPost:function(){return Q+"/posts/create"},createComment:function(){return Q+"/comments"},toggleLike:function(e,t){return Q+"/likes/toggle?id=".concat(e,"&type=").concat(t)},SearchUsers:function(e){return Q+"/users/search?text=".concat(e)}},Y=X,Z=Y.login();function $(e){return console.log(e),function(t){t({type:f}),fetch(Z,{method:"POST",body:JSON.stringify({email:e.email,password:e.password}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){console.log(e),e.success?(localStorage.setItem("token",e.data.token),setTimeout((function(){var n;t((n=e.data.user,{type:m,user:n}))}),1e3)):setTimeout((function(){var n;t((n=e.error,{type:b,error:n}))}),1e3)})).catch((function(e){return console.log("error",e)}))}}function ee(){return{type:S}}function te(){return{type:N}}function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Y.fetchposts(e);return function(e){fetch(t).then((function(e){return e.json()})).then((function(t){var n=t.next,r=t.prev;"undefined"==typeof n&&(n=null),"undefined"==typeof r&&(r=null),e(re(t.data.posts,n,r))})).catch((function(e){return console.log("error",e)}))}}function re(e,t,n){return{type:j,posts:e,next:t,prev:n}}function se(e){var t=Y.createPost();return function(n){var r=localStorage.getItem("token");fetch(t,{method:"POST",body:JSON.stringify({content:e}),headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(r)}}).then((function(e){return"401"==e.status&&n(ee()),e.json()})).then((function(e){e.success?setTimeout((function(){var t;n((t=e.data.post,{type:G,post:t}))}),500):setTimeout((function(){var t;n((t=e.error,{type:M,error:t}))}),500)})).catch((function(e){return console.log("error",e)}))}}var ce=n(8),oe=n(12);function ae(e,t){var n=Y.createComment();return function(r){var s=localStorage.getItem("token");fetch(n,{method:"POST",body:JSON.stringify({content:e,post_id:t}),headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(s)}}).then((function(e){return"401"==e.status&&r(ee()),e.json()})).then((function(e){console.log(e),e.success?setTimeout((function(){r(function(e,t){return{type:z,comment:e,post_id:t}}(e.comment,t))}),500):setTimeout((function(){var t;r((t=e.error,{type:H,error:t}))}),500)})).catch((function(e){return console.log("error",e)}))}}function ie(e,t){var n=Y.toggleLike(e,t);return function(r){var s=localStorage.getItem("token");fetch(n,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(s)}}).then((function(e){return e.json()})).then((function(n){console.log(n),n.success?setTimeout((function(){r(function(e,t,n,r){return{type:J,deleted:e,id:t,likeabletype:n,like:r}}(n.data.deleted,e,t,n.data.liketosent))}),50):setTimeout((function(){var e;r((e=n.error,{type:q,error:e}))}),50)})).catch((function(e){return console.log("error",e)}))}}var ue=n(0),le=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.comment;return Object(ue.jsxs)("div",{className:"comment",children:[Object(ue.jsxs)("div",{className:"name-time",children:[e.user.name," a minute ago"]}),Object(ue.jsx)("div",{className:"comment-content",children:e.content}),Object(ue.jsxs)("div",{className:"comment-likes-count",children:[Object(ue.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/633/633759.png"}),e.likes.length]})]})}}]),n}(r.Component);var de=Object(h.b)((function(e){return{auth:e.auth,posts:e.posts}}))(le),he=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this)).handleChange=function(e){var t=e.target.value;r.setState({content:t})},r.handleAddcomment=function(e){var t=r.props.post;""!==r.state.content&&"Enter"==e.key&&(r.props.dispatch(ae(r.state.content,t._id)),r.setState({content:""}))},r.handleToggleLike=function(){var e=r.props.post;r.props.dispatch(ie(e._id,"Post"))},r.isLikedByUser=function(){var e,t=r.props.post,n=r.props.auth.user;for(e=0;e<t.likes.length;e++)if(t.likes[e].user==n._id)return!0;return!1},r.state={content:""},r}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.post,t=this.isLikedByUser();return console.log("LIKED",t),Object(ue.jsxs)("div",{className:"Post",children:[Object(ue.jsxs)("div",{className:"user-info",children:[Object(ue.jsx)(oe.b,{to:"/SocialSiteFrontendReact/user/".concat(e.user._id),children:Object(ue.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/560/560216.png",className:"post-icon"})}),Object(ue.jsxs)("div",{className:"post-user-name",children:[e.user.name,Object(ue.jsx)("div",{className:"time",children:"a minute ago"})]})]}),Object(ue.jsx)("p",{className:"post-content",children:e.content}),Object(ue.jsxs)("div",{className:"likes-comment-icon",children:[Object(ue.jsx)("img",{onClick:this.handleToggleLike,src:t?"https://cdn-icons-png.flaticon.com/512/1076/1076984.png":"https://cdn-icons-png.flaticon.com/512/1077/1077035.png"}),Object(ue.jsx)("div",{className:"likes-count",children:e.likes.length}),Object(ue.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/1380/1380338.png"}),Object(ue.jsx)("div",{className:"comments-count",children:e.comment.length})]}),Object(ue.jsxs)("div",{className:"comments",children:[Object(ue.jsx)("input",{onChange:this.handleChange,onKeyPress:this.handleAddcomment,onk:!0,className:"comments-form",placeholder:"Type your comment here"}),e.comment.map((function(e){return Object(ue.jsx)(de,{comment:e},e._id)}))]})]})}}]),n}(r.Component);var pe=Object(h.b)((function(e){return{auth:e.auth,posts:e.posts}}))(he),je=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handleChange=function(e){r.setState({post_content:e.target.value})},r.handleSubmit=function(){var e=r.state.post_content;0!=e.length&&r.props.dispatch(se(e))},r.state={post_content:""},r}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.posts.error;return Object(ue.jsxs)("div",{className:"post-form-container",children:[0==t&&Object(ue.jsx)("div",{className:"success-dialog",children:"Post Created Successfully"}),t&&Object(ue.jsx)("div",{className:"alert-dialog",children:t}),Object(ue.jsx)("div",{className:"post-input-container",children:Object(ue.jsx)("textarea",{onChange:function(t){return e.handleChange(t)},placeholder:"What's in your mind?"})}),Object(ue.jsx)("div",{className:"post-btn-container",children:Object(ue.jsx)("div",{onClick:this.handleSubmit,className:"post-btn",children:"Add Post"})})]})}}]),n}(r.Component);var fe=Object(h.b)((function(e){return{posts:e.posts}}))(je),me=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(ne())}},{key:"render",value:function(){var e=this.props.posts,t=e.posts,n=(e.error,this.props.auth.isLoggedIn);return console.log("PostList RENDERED"),Object(ue.jsxs)("div",{className:"post-list1",children:[n&&Object(ue.jsx)(fe,{}),Object(ue.jsx)("div",{className:n?"Post-list":"Post-listN",children:t.map((function(e){return Object(ue.jsx)(pe,{post:e},e._id)}))})]})}}]),n}(r.Component);var be=Object(h.b)((function(e){return{auth:e.auth,posts:e.posts}}))(me),Oe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.result;return console.log("RESULT",e),Object(ue.jsx)(oe.b,{to:"/SocialSiteFrontendReact/user/".concat(e._id),children:Object(ue.jsxs)("div",{className:"result",children:[Object(ue.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png"}),Object(ue.jsx)("div",{children:e.name})]})})}}]),n}(r.Component),ge=Oe;function ve(e){var t=Y.SearchUsers(e);return function(e){var n=localStorage.getItem("token");fetch(t,{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(n)}}).then((function(t){return"401"==t.status&&e(ee()),t.json()})).then((function(t){var n;e((n=t.data.users,{type:W,results:n}))})).catch((function(e){return console.log("error",e)}))}}var xe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=e.target.value;""!==t?r.props.dispatch(ve(t)):r.props.dispatch({type:K})},r}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.search.results;return console.log("RESULTS",e),Object(ue.jsxs)("div",{className:"search",children:[Object(ue.jsx)("input",{onChange:this.handleChange,placeholder:"Search name"}),0!=e.length&&Object(ue.jsx)("div",{className:"search-results",children:e.map((function(e){return Object(ue.jsx)(ge,{result:e},e._id)}))})]})}}]),n}(r.Component);var Se=Object(h.b)((function(e){return{auth:e.auth,search:e.search}}))(xe),Ne=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).logOut=function(){localStorage.removeItem("token"),e.props.dispatch(ee())},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.auth,t=e.isLoggedIn,n=e.user;return Object(ue.jsxs)("div",{className:"navbar",children:[Object(ue.jsxs)("div",{className:"nav-left-container",children:[Object(ue.jsx)(oe.b,{to:"/SocialSiteFrontendReact/",children:Object(ue.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/2111/2111421.png",className:"logo"})}),Object(ue.jsx)("div",{className:"site-name",children:"Socializer"})]}),Object(ue.jsx)("div",{className:"nav-middle-container",children:Object(ue.jsx)(Se,{})}),Object(ue.jsxs)("div",{className:"nav-right-container",children:[t&&Object(ue.jsxs)("div",{className:"user-nav",children:[Object(ue.jsx)(oe.b,{to:"/SocialSiteFrontendReact/settings",children:Object(ue.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png",className:"user-logo"})}),Object(ue.jsx)("div",{className:"username-nav",children:n.name})]}),0==t&&Object(ue.jsx)(oe.b,{className:"nav-btn",to:"/SocialSiteFrontendReact/login",children:Object(ue.jsx)("div",{children:"LogIn"})}),t&&Object(ue.jsx)("button",{onClick:this.logOut,className:"logout-btn",children:"LogOut"}),0==t&&Object(ue.jsx)(oe.b,{className:"nav-btn",to:"/SocialSiteFrontendReact/Register",children:Object(ue.jsx)("div",{children:"Register"})})]})]})}}]),n}(r.Component);var ye=Object(h.b)((function(e){return{auth:e.auth}}))(Ne);function Ee(){return function(e){var t=Y.fetchFriends(),n=localStorage.getItem("token");e({type:F}),fetch(t,{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(n)}}).then((function(t){return"401"==t.status&&e(ee()),t.json()})).then((function(t){console.log("Data",t),t.success?setTimeout((function(){var n;e((n=t.data.friendships,{type:T,friendships:n}))}),500):setTimeout((function(){var n;e((n=t.error,{type:P,error:n}))}),500)})).catch((function(e){return console.log("error",e)}))}}function Ie(e){return function(t){var n=Y.AddFriend(e),r=localStorage.getItem("token");t({type:L}),fetch(n,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(r)}}).then((function(e){return"401"==e.status&&t(ee()),e.json()})).then((function(e){console.log("Data",e),e.success?setTimeout((function(){var n;t((n=e.data.friendship,{type:R,friendship:n}))}),500):setTimeout((function(){var n;t((n=e.error,{type:w,error:n}))}),500)})).catch((function(e){return console.log("error",e)}))}}function Ce(){return{type:B}}function _e(e){return function(t){var n=Y.RemoveFriend(e),r=localStorage.getItem("token");t({type:D}),fetch(n,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(r)}}).then((function(e){return"401"==e.status&&t(ee()),e.json()})).then((function(e){console.log("Data",e),e.success?setTimeout((function(){t(function(e){return{type:A,id:e}}(e.removed_id))}),500):setTimeout((function(){var n;t((n=e.error,{type:U,error:n}))}),500)})).catch((function(e){return console.log("error",e)}))}}var ke=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.friend;return Object(ue.jsxs)("div",{className:"friend",children:[Object(ue.jsx)("div",{className:"friend-icon",children:Object(ue.jsx)(oe.b,{to:"/SocialSiteFrontendReact/user/".concat(e._id),children:Object(ue.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png"})})}),Object(ue.jsx)("div",{className:"friend-name",children:Object(ue.jsx)("div",{children:e.name})})]})}}]),n}(r.Component),Te=ke,Pe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){this.props.dispatch(Ce())}},{key:"componentDidMount",value:function(){this.props.dispatch(Ee())}},{key:"render",value:function(){var e=this.props.friends,t=e.friendships,n=e.inProgress,r=e.error,s=this.props.auth.user;return n?Object(ue.jsx)("h1",{children:"Fetching User Friends!"}):r?Object(ue.jsx)("h1",{children:r}):Object(ue.jsxs)("div",{className:"friends-container",children:[Object(ue.jsx)("div",{className:"friends-heading",children:"Friends"}),t.map((function(e){var t=e.from_user;return t._id==s._id&&(t=e.to_user),Object(ue.jsx)(Te,{friend:t})}))]})}}]),n}(r.Component);var Fe=Object(h.b)((function(e){return{auth:e.auth,friends:e.friends}}))(Pe),we=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handlenextclick=function(){var t=e.props.posts.next;e.props.dispatch(ne(t.page))},e.handleprevclick=function(){var t=e.props.posts.prev;e.props.dispatch(ne(t.page))},e}return Object(i.a)(n,[{key:"render",value:function(){this.props.posts.posts;var e=this.props.posts,t=e.next,n=e.prev;return Object(ue.jsxs)("div",{className:"Footer-container",children:[Object(ue.jsxs)("div",{className:"footer-btns",children:[Object(ue.jsx)("button",{onClick:this.handleprevclick,className:n?"fbtn":"fbtn hidebtn",children:"<"}),Object(ue.jsx)("button",{onClick:this.handlenextclick,className:t?"fbtn":"fbtn hidebtn",children:">"})]}),Object(ue.jsx)("div",{className:"footer",children:"\xa9 2021 Apoorv Jain"})]})}}]),n}(r.Component);var Re=Object(h.b)((function(e){return{posts:e.posts}}))(we),Le=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.auth.isLoggedIn;return console.log("props",this.props),Object(ue.jsxs)("div",{className:"home",children:[Object(ue.jsx)(be,{}),e&&Object(ue.jsx)(Fe,{})]})}}]),n}(r.Component);var Ue=Object(h.b)((function(e){return{auth:e.auth}}))(Le);var Ae=function(e){return Object(ue.jsx)("div",{children:Object(ue.jsx)("h1",{children:"404: Page not found"})})},De=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handleEmailInput=function(e){var t=e.target.value;r.setState({email:t})},r.handlePasswordInput=function(e){var t=e.target.value;r.setState({password:t})},r.handleSubmit=function(e){e.preventDefault(),console.log(r.state),r.props.dispatch($(r.state))},r.state={email:"",password:""},r}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){this.props.dispatch(te())}},{key:"render",value:function(){var e=this.props.auth,t=e.error,n=e.inProgress,r=e.user,s=e.isLoggedIn,c=(this.props.location.state||{from:{pathname:"/SocialSiteFrontendReact/"}}).from;return s?Object(ue.jsx)(ce.a,{to:c}):(console.log(this.props.auth),Object(ue.jsxs)("div",{className:"login-container",children:[Object(ue.jsx)("div",{className:"login-heading",children:"Login"}),t&&Object(ue.jsx)("div",{className:"alert-dialog",children:t}),s&&Object(ue.jsx)("div",{className:"success-dialog",children:"Successfully signed in as ".concat(r.name)}),Object(ue.jsxs)("form",{className:"login-form",children:[Object(ue.jsx)("input",{type:"email",required:!0,placeholder:"Enter your email",onChange:this.handleEmailInput}),Object(ue.jsx)("input",{type:"password",required:!0,placeholder:"Enter your password",onChange:this.handlePasswordInput}),n?Object(ue.jsx)("button",{type:"submit",className:"submit-btn",onClick:this.handleSubmit,disabled:n,children:"Logging In"}):Object(ue.jsx)("button",{type:"submit",className:"submit-btn",onClick:this.handleSubmit,children:"Log In"})]})]}))}}]),n}(r.Component);var Be=Object(h.b)((function(e){return{auth:e.auth}}))(De),Ge=Y.signup();function Me(e){return console.log(e),function(t){t({type:O}),fetch(Ge,{method:"POST",body:JSON.stringify({email:e.email,password:e.password,confirmpassword:e.confirmpassword,name:e.name}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){console.log(e),e.success?setTimeout((function(){var n;localStorage.setItem("token",e.data.token),t((n=e.data.user,{type:g,user:n}))}),1e3):setTimeout((function(){var n;t((n=e.error,{type:v,error:n}))}),1e3)})).catch((function(e){return console.log("error",e)}))}}var ze=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handleEmailInput=function(e){var t=e.target.value;r.setState({email:t})},r.handleConfirmPasswordInput=function(e){var t=e.target.value;r.setState({confirmpassword:t})},r.handleNameInput=function(e){var t=e.target.value;r.setState({name:t})},r.handlePasswordInput=function(e){var t=e.target.value;r.setState({password:t})},r.handleSubmit=function(e){e.preventDefault(),console.log(r.state),r.props.dispatch(Me(r.state))},r.state={email:"",password:"",confirmpassword:"",name:""},r}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){this.props.dispatch(te())}},{key:"render",value:function(){var e=this.props.auth,t=e.error,n=e.inProgress,r=e.user,s=e.isLoggedIn;return s?Object(ue.jsx)(ce.a,{to:"/SocialSiteFrontendReact"}):(console.log(this.props.auth),Object(ue.jsxs)("div",{className:"login-container",children:[Object(ue.jsx)("div",{className:"login-heading",children:"SignUp"}),t&&Object(ue.jsx)("div",{className:"alert-dialog",children:t}),s&&Object(ue.jsx)("div",{className:"success-dialog",children:"Successfully signed in as ".concat(r.user.name)}),Object(ue.jsxs)("form",{className:"login-form",children:[Object(ue.jsx)("input",{type:"text",required:!0,placeholder:"Enter your name",onChange:this.handleNameInput}),Object(ue.jsx)("input",{type:"email",required:!0,placeholder:"Enter your email",onChange:this.handleEmailInput}),Object(ue.jsx)("input",{type:"password",required:!0,placeholder:"Enter your password",onChange:this.handlePasswordInput}),Object(ue.jsx)("input",{type:"password",required:!0,placeholder:"Enter password again",onChange:this.handleConfirmPasswordInput}),n?Object(ue.jsx)("button",{type:"submit",className:"submit-btn",onClick:this.handleSubmit,disabled:n,children:"Signing Up"}):Object(ue.jsx)("button",{type:"submit",className:"submit-btn",onClick:this.handleSubmit,children:"Sign Up"})]})]}))}}]),n}(r.Component);var He=Object(h.b)((function(e){return{auth:e.auth}}))(ze),Je=n(27),qe=n(21),We=Y.editProfile();function Ke(e,t,n,r){return console.log(r),function(s){var c=localStorage.getItem("token");fetch(We,{method:"POST",body:JSON.stringify({name:e,password:t,confirmpassword:n,id:""+r}),headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(c)}}).then((function(e){return"401"==e.status&&s(ee()),e.json()})).then((function(e){console.log(e),e.success?(localStorage.setItem("token",e.data.token),setTimeout((function(){var t;s((t=e.data.user,{type:y,user:t}))}),500)):setTimeout((function(){s(Ve(e.error))}),500)})).catch((function(e){return console.log("error",e)}))}}function Ve(e){return{type:E,error:e}}var Qe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handleChange=function(e,t){r.setState(Object(qe.a)({},t,e))},r.handleEdit=function(){r.setState({editmode:!0})},r.handleBack=function(){r.setState({editmode:!1})},r.fun=function(){0==r.props.auth.error&&r.setState({editmode:!1})},r.handleSave=function(){var e=r.state,t=e.name,n=e.password,s=e.confirmpassword;if(0==t.length||0==n.length||s!=n)r.props.dispatch(Ve("Invalid Input"));else{var c=r.props.auth.user._id;console.log("Success",c),r.props.dispatch(Ke(t,n,s,c)),setTimeout(r.fun,1e3)}},r.state={editmode:!1,name:e.auth.user.name,password:"",confirmpassword:""},r}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){this.props.dispatch(te())}},{key:"render",value:function(){var e=this,t=this.state.editmode,n=this.props.auth,r=n.user,s=n.error;n.profile_changed;return console.log(t),Object(ue.jsxs)("div",{className:"setting-container",children:[Object(ue.jsx)("div",{className:"user-icon",children:Object(ue.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png"})}),s&&Object(ue.jsx)("div",{className:"alert-dialog",children:s}),0==s&&1==t&&Object(ue.jsx)("div",{className:"success-dialog",children:"Successfully Updated"}),Object(ue.jsxs)("div",{className:"show-field",children:[Object(ue.jsx)("div",{className:"show-field-heading",children:"Email"}),Object(ue.jsx)("div",{className:"show-field-input",children:r.email})]}),0==t&&Object(ue.jsxs)("div",{className:"show-field",children:[Object(ue.jsx)("div",{className:"show-field-heading",children:"Name"}),Object(ue.jsx)("div",{className:"show-field-input",children:r.name})]}),t&&Object(ue.jsxs)("div",{className:"show-input",children:[Object(ue.jsx)("div",{className:"show-field-heading",children:"Name"}),Object(ue.jsx)("input",{value:this.state.name,onChange:function(t){e.handleChange(t.target.value,"name")}})]}),t&&Object(ue.jsxs)("div",{className:"show-input",children:[Object(ue.jsx)("div",{className:"show-field-heading",children:"New Password"}),Object(ue.jsx)("input",{onChange:function(t){e.handleChange(t.target.value,"password")}})]}),t&&Object(ue.jsxs)("div",{className:"show-input",children:[Object(ue.jsx)("div",{className:"show-field-heading",children:"Confirm Password"}),Object(ue.jsx)("input",{onChange:function(t){e.handleChange(t.target.value,"confirmpassword")}})]}),Object(ue.jsxs)("div",{className:"Button-container",children:[0==t&&Object(ue.jsx)("button",{className:"setting-btn",onClick:this.handleEdit,children:"Edit Profile"}),t&&Object(ue.jsx)("button",{className:"setting-btn",onClick:this.handleSave,children:"Save Profile"}),t&&Object(ue.jsx)("button",{className:"setting-btn",onClick:this.handleBack,children:"Go Back"})]})]})}}]),n}(r.Component);var Xe=Object(h.b)((function(e){return{auth:e.auth}}))(Qe);function Ye(e){return function(t){var n=Y.fetchProfile(e);t({type:_});var r=localStorage.getItem("token");fetch(n,{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(r)}}).then((function(e){return"401"==e.status&&t(ee()),e.json()})).then((function(e){console.log(e),e.success?setTimeout((function(){var n;t((n=e.data.user,{type:I,user:n}))}),500):setTimeout((function(){var n;t((n=e.error,{type:C,error:n}))}),500)})).catch((function(e){return console.log("error",e)}))}}var Ze=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handleAddfriend=function(){var e=r.props.match.params.userId;r.props.dispatch(Ie(e))},r.handleRemoveFriend=function(){var e=r.props.match.params.userId;r.props.dispatch(_e(e))},r.checkIsUserFriend=function(){var e=r.props.match.params.userId,t=r.props.auth.user,n=r.props.friends.friendships,s=[];return n.map((function(e){var n=e.from_user._id;n==t._id&&(n=e.to_user._id),s.push(n)})),-1!==s.indexOf(e)},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.match.params.userId&&this.props.dispatch(Ye(this.props.match.params.userId))}},{key:"componentDidUpdate",value:function(e){var t=e.match.params,n=this.props.match.params;n&&t&&n.userId!==t.userId&&this.props.dispatch(Ye(n.userId))}},{key:"componentWillUnmount",value:function(){this.props.dispatch(Ce())}},{key:"render",value:function(){var e=this.checkIsUserFriend(),t=this.props.profile.user,n=this.props.auth.user,r=this.props.profile,s=r.error,c=r.inProgress;return n.email==t.email?Object(ue.jsx)(ce.a,{to:"/settings"}):c?Object(ue.jsx)("h1",{children:"Loading!"}):s?Object(ue.jsx)("h1",{children:s}):Object(ue.jsxs)("div",{className:"setting-container",children:[Object(ue.jsx)("div",{className:"user-icon",children:Object(ue.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png"})}),this.props.friends.error&&Object(ue.jsx)("div",{className:"alert-dialog",children:this.props.friends.error}),0==this.props.friends.error&&Object(ue.jsxs)("div",{className:"success-dialog",children:["Successfully ",e?"added":"removed"," friend"]}),Object(ue.jsxs)("div",{className:"show-field",children:[Object(ue.jsx)("div",{className:"show-field-heading",children:"Email"}),Object(ue.jsx)("div",{className:"show-field-input",children:t.email})]}),Object(ue.jsxs)("div",{className:"show-field",children:[Object(ue.jsx)("div",{className:"show-field-heading",children:"Name"}),Object(ue.jsx)("div",{className:"show-field-input",children:t.name})]}),Object(ue.jsx)("div",{className:"Button-container",children:0==e?Object(ue.jsx)("button",{className:"add-friend-btn",disabled:this.props.friends.inProgress,onClick:this.handleAddfriend,children:this.props.friends.inProgress?"Adding Friend":"Add Friend"}):Object(ue.jsx)("button",{className:"add-friend-btn",disabled:this.props.friends.inProgress,onClick:this.handleRemoveFriend,children:this.props.friends.inProgress?"Removing Friend":"Remove Friend"})})]})}}]),n}(r.Component);var $e=Object(h.b)((function(e){return{auth:e.auth,profile:e.profile,friends:e.friends}}))(Ze),et=function(e){var t=e.isLoggedIn,n=e.path,r=e.component;return Object(ue.jsx)(ce.b,{path:n,render:function(e){return console.log("Props",e),1==t?Object(ue.jsx)(r,Object(d.a)({},e)):Object(ue.jsx)(ce.a,{to:{pathname:"/SocialSiteFrontendReact/login",state:{from:e.location}}})}})},tt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("token");if(e){var t=Object(Je.a)(e);this.props.dispatch(function(e){return{type:x,user:e}}(t))}}},{key:"render",value:function(){var e=this.props,t=(e.posts,e.auth);return console.log("loggedin",t.isLoggedIn),Object(ue.jsx)(oe.a,{children:Object(ue.jsxs)("div",{children:[Object(ue.jsx)(ye,{}),Object(ue.jsxs)(ce.d,{children:[Object(ue.jsx)(ce.b,{exact:!0,path:"/SocialSiteFrontendReact",render:function(e){return Object(ue.jsx)(Ue,Object(d.a)({},e))}}),Object(ue.jsx)(ce.b,{path:"/SocialSiteFrontendReact/login",exact:!0,component:Be}),Object(ue.jsx)(ce.b,{path:"/SocialSiteFrontendReact/Register",exact:!0,component:He}),Object(ue.jsx)(et,{path:"/SocialSiteFrontendReact/settings",exact:!0,component:Xe,isLoggedIn:t.isLoggedIn}),Object(ue.jsx)(et,{path:"/SocialSiteFrontendReact/user/:userId",exact:!0,component:$e,isLoggedIn:t.isLoggedIn}),Object(ue.jsx)(ce.b,{component:Ae})]}),Object(ue.jsx)(Re,{})]})})}}]),n}(r.Component);var nt=Object(h.b)((function(e){return{posts:e.posts,auth:e.auth}}))(tt),rt=n(18),st=n(28),ct={user:{},error:null,isLoggedIn:!1,inProgress:!1,profile:""};var ot={inProgress:!1,user:{},error:null};var at={friendships:[],inProgress:!1,error:null};var it={results:[]};var ut=Object(rt.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(d.a)(Object(d.a)({},e),{},{posts:t.posts,next:t.next,prev:t.prev,error:null});case G:return{posts:[t.post].concat(Object(p.a)(e.posts)),error:!1};case M:return Object(d.a)(Object(d.a)({},e),{},{error:t.error});case z:var n=e.posts.map((function(e){return e._id==t.post_id?Object(d.a)(Object(d.a)({},e),{},{comment:[t.comment].concat(Object(p.a)(e.comment))}):e}));return Object(d.a)(Object(d.a)({},e),{},{posts:n,error:null});case H:return{error:t.error};case J:if("Post"==t.likeabletype){var r=e.posts.map((function(e){if(e._id==t.id){if(t.deleted){var n=e.likes.filter((function(e){return e._id!=t.like._id}));return Object(d.a)(Object(d.a)({},e),{},{likes:n})}var r=e.likes;return r.push(t.like),Object(d.a)(Object(d.a)({},e),{},{likes:r})}return e}));return Object(d.a)(Object(d.a)({},e),{},{posts:r})}default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action-----\x3e",t),t.type){case f:case O:return Object(d.a)(Object(d.a)({},e),{},{inProgress:!0});case m:case g:return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:!0,inProgress:!1,error:null,user:t.user});case b:case v:case E:return Object(d.a)(Object(d.a)({},e),{},{inProgress:!1,error:t.error});case x:return Object(d.a)(Object(d.a)({},e),{},{error:null,user:t.user,isLoggedIn:!0});case S:return{user:{},error:null,isLoggedIn:!1,inProgress:!1};case N:return Object(d.a)(Object(d.a)({},e),{},{error:null,editmode:!1});case y:return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:!0,inProgress:!1,error:!1,user:t.user,editmode:!1});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(d.a)(Object(d.a)({},e),{},{inProgress:!0,error:null});case I:return Object(d.a)(Object(d.a)({},e),{},{inProgress:!1,user:t.user,error:null});case C:return Object(d.a)(Object(d.a)({},e),{},{inProgress:!1,error:t.error});case k:return{inProgress:!1,user:{},error:null};default:return e}},friends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(d.a)(Object(d.a)({},e),{},{error:t.error,inProgress:!1});case F:return Object(d.a)(Object(d.a)({},e),{},{error:null,inProgress:!0});case T:return Object(d.a)(Object(d.a)({},e),{},{error:null,inProgress:!1,friendships:t.friendships});case R:return Object(d.a)(Object(d.a)({},e),{},{error:!1,inProgress:!1,friendships:[].concat(Object(p.a)(e.friendships),[t.friendship])});case L:case D:return Object(d.a)(Object(d.a)({},e),{},{inProgress:!0,error:null});case w:case U:return Object(d.a)(Object(d.a)({},e),{},{inProgress:!1,error:t.error});case B:return Object(d.a)(Object(d.a)({},e),{},{inProgress:!1,error:null});case A:return Object(d.a)(Object(d.a)({},e),{},{error:!1,inProgress:!1,friendships:e.friendships.filter((function(e){return e._id!==t.id}))});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(d.a)(Object(d.a)({},e),{},{results:t.results});case K:return{results:[]};default:return e}}}),lt=n(29),dt=n.n(lt);var ht=Object(rt.c)(ut,Object(rt.a)(dt.a,st.a));console.log(ht.getState()),o.a.render(Object(ue.jsx)(h.a,{store:ht,children:Object(ue.jsx)(s.a.StrictMode,{children:Object(ue.jsx)(nt,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9986ab7f.chunk.js.map