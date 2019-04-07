(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,a,t){},48:function(e,a,t){e.exports=t(96)},78:function(e,a){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),o=t(42),r=t.n(o),c=t(5),i=t(6),m=t(8),l=t(7),u=t(9),f=t(44),g=t(10),p=t(43),h=t.n(p),d=(t(81),t(82),function(){return s.a.createElement("h4",{className:"card-title"},"Awesome chat")}),v=(t(40),function(e){var a=e.nameValue,t=e.onChangeNameValue;return s.a.createElement("div",{className:"input-field"},s.a.createElement("input",{onChange:t,value:a,type:"text",id:"name",className:"validate",name:"name",required:!0}),s.a.createElement("label",{htmlFor:"name"},"Name"))}),b=function(e){var a=e.roomValue,t=e.onChangeRoomValue;return s.a.createElement("div",{className:"input-field"},s.a.createElement("input",{onChange:t,value:a,type:"text",id:"room",className:"validate",name:"room",required:!0}),s.a.createElement("label",{htmlFor:"room"},"Room"))},E=(t(83),function(){return s.a.createElement("div",{className:"card-action"},s.a.createElement("button",{className:"waves-effect waves-light btn",type:"submit"},"Enter chat"))}),N=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).state={nameValue:"",roomValue:""},t.resetInputs=function(e,a){t.setState({nameValue:e,roomValue:a})},t.onChangeRoomValue=function(e){var a=e.target.value,n=t.state.nameValue;t.resetInputs(n,a)},t.onChangeNameValue=function(e){var a=e.target.value,n=t.state.roomValue;t.resetInputs(a,n)},t.onHandleSubmit=function(e){var a=t.state,n=a.nameValue,s=a.roomValue;e.preventDefault(),t.resetInputs("",""),(0,t.props.history.push)("/chat?name=".concat(n,"&room=").concat(s))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.nameValue,t=e.roomValue;return s.a.createElement("form",{onSubmit:this.onHandleSubmit,className:"auth"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-content"},s.a.createElement(d,null),s.a.createElement(v,{nameValue:a,onChangeNameValue:this.onChangeNameValue}),s.a.createElement(b,{roomValue:t,onChangeRoomValue:this.onChangeRoomValue}),s.a.createElement(E,null))))}}]),a}(n.Component),j=t(47),y=(t(84),t(85),function(e){var a,t=e.users,n=e.id;return s.a.createElement("div",{className:"chat-users collection"},t.map(function(e,t){var o=e.name;return a=e.id===n?"collection-item active":"collection-item",s.a.createElement("a",{key:t,className:a},o)}))}),O=(t(86),function(e){var a,t=e.messages,n=e.id,o=e.messagesRef;return s.a.createElement("div",{ref:o,className:"chat-messages"},t.map(function(e,t){var o=e.messageID,r=e.name;return a=n===o?"message owner":"message",s.a.createElement("div",{key:t,className:a},s.a.createElement("div",{className:"message-content z-depth-1"},s.a.createElement("b",null,r),":             "," ",e.message))}))}),V=function(e){return s.a.createElement("div",{className:"chat"},s.a.createElement(y,e),s.a.createElement(O,e))},w=(t(87),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).onHandleChangeMessage=function(e){var a=e.target.value;(0,t.props.resetMessage)(a)},t.onSubmitMessage=function(){var e=t.props,a=e.socket,n=e.message,s=e.name,o=e.room,r=e.resetMessage,c=e.id;a.emit("createNewMessage",{message:n,name:s,room:o,id:c}),r("")},t.onKeyPress=function(e){var a=t.props.message;13===e.keyCode&&""!==a.trim()&&t.onSubmitMessage()},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.message;return s.a.createElement("div",{className:"actions"},s.a.createElement("div",{className:"input-field"},s.a.createElement("input",{type:"text",placeholder:"Type your message",autoFocus:!0,autoComplete:"false",onChange:this.onHandleChangeMessage,onKeyDown:this.onKeyPress,value:e})),s.a.createElement("button",{disabled:""===e.trim(),className:"btn",onClick:this.onSubmitMessage},"Send"))}}]),a}(n.Component)),C=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(o)))).messagesRef=s.a.createRef(),t.state={messages:[],message:"",room:"",name:"",id:"",messageID:"",users:[]},t.componentWillMount=function(){var e=t.props.location.search;t.searchParams(e)},t.componentDidMount=function(){t.joinNewUser()},t.searchParams=function(e){var a=e.split("&"),n=a[0].split("=")[1],s=a[1].split("=")[1];t.initializeParams(n,s)},t.initializeParams=function(e,a){t.setState({name:e,room:a})},t.joinNewUser=function(){var e=t.state,a=e.name,n=e.room;t.props.socket.emit("join",{name:a,room:n},function(e){t.setState({id:e.userID}),t.initializideMessage()})},t.initializideMessage=function(){var e=t.props.socket;e.on("usersUpdate",function(e){t.setState({users:e})}),e.on("newMessage",function(e){var a=e.message,n=e.messageID,s=e.name;t.addNewMessage({message:a,messageID:n,name:s});var o=t.messagesRef.current;t.messagesScrol(o)})},t.addNewMessage=function(e){var a=t.state.messages;t.setState({messages:[].concat(Object(j.a)(a),[e])})},t.resetMessage=function(e){t.setState({message:e})},t.messagesScrol=function(e){e.scrollTop=e.scrollHeight},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.socket;return s.a.createElement("div",{id:"actions"},s.a.createElement(V,Object.assign({},this.state,this.props,{messagesRef:this.messagesRef})),s.a.createElement(w,Object.assign({},this.state,{resetMessage:this.resetMessage,socket:e})))}}]),a}(n.Component),k=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).socket=h()(),t.componentWillMount=function(){t.socket.on("connect",function(){console.log("client connect")})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(f.a,null,s.a.createElement(g.a,{exact:!0,path:"/",component:function(e){return s.a.createElement(N,e)}}),s.a.createElement(g.a,{path:"/chat",component:function(a){return s.a.createElement(C,Object.assign({socket:e.socket},a))}}))}}]),a}(n.Component);r.a.render(s.a.createElement(k,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.05b813a7.chunk.js.map