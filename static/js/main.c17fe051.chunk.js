(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(e,t,r){},30:function(e,t,r){e.exports=r(45)},35:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var a={};r.r(a),r.d(a,"GET_PLAYERS",(function(){return d})),r.d(a,"CHANGE_PLAYER_STATUS_FOR_MATCH",(function(){return f})),r.d(a,"getPlayersActionCreator",(function(){return g})),r.d(a,"changePlayerStatusMatchActionCreator",(function(){return y}));var n={};r.r(n),r.d(n,"RESET_GAME_SCORES",(function(){return E})),r.d(n,"HANDLE_GAME_POINT",(function(){return b})),r.d(n,"ADD_SET_SCORE",(function(){return v})),r.d(n,"ADD_NEW_SETS",(function(){return O})),r.d(n,"END_MATCH",(function(){return M})),r.d(n,"ADD_COMMENTATOR_MESSAGE",(function(){return N})),r.d(n,"CHANGE_GAME_MODE",(function(){return A})),r.d(n,"RESET_MATCH",(function(){return _})),r.d(n,"resetGameScoresActionCreator",(function(){return C})),r.d(n,"handleGamePointActionCreator",(function(){return j})),r.d(n,"addSetScoreActionCreator",(function(){return k})),r.d(n,"addNewSetsActionCreator",(function(){return w})),r.d(n,"endMatchActionCreator",(function(){return P})),r.d(n,"addCommentatorMessageActionCreator",(function(){return T})),r.d(n,"changeGameMode",(function(){return G})),r.d(n,"resetMatch",(function(){return R}));var c=r(0),o=r.n(c),i=r(20),s=r.n(i);r(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=r(48),u=r(2),m=r(23),p=r(24),h=r(12),d="GET_PLAYERS",f="CHANGE_PLAYER_STATUS_FOR_MATCH",g=function(){return{type:d}},y=function(e){return{type:f,playerId:e}},S={players:[{id:1,name:"Roger Federer",ranking:1,weight:80,height:184,country:"Switzerland",img:"https://www.tennisworldusa.org/imgb/89749/is-wimbledon-2020-the-last-slamchance-for-roger-federer.jpg",isInMatch:!1},{id:2,name:"Rafael Nadal",ranking:2,weight:85,height:186,country:"Spain",img:"https://img.bleacherreport.net/img/images/photos/003/826/651/hi-res-7feb9feca6ff85280c5faebebb9ed3dc_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",isInMatch:!1},{id:3,name:"Novak Djokovic",ranking:3,weight:78,height:110,country:"Serbia",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Paris-FR-75-open_de_tennis-31-5-17-Roland_Garros-Novak_Djokovic-13.jpg/1024px-Paris-FR-75-open_de_tennis-31-5-17-Roland_Garros-Novak_Djokovic-13.jpg",isInMatch:!1}]};var E="RESET_GAME_SCORES",b="HANDLE_GAME_POINT",v="ADD_SET_SCORE",O="ADD_NEW_SET",M="END_MATCH",N="ADD_COMMENTATOR_MESSAGE",A="CHANGE_GAME_MODE",_="RESET_MATCH",C=function(){return{type:E}},j=function(e,t){return{type:b,playerOrder:e,increment:t}},k=function(e,t){return{type:v,playerOrder:e,increment:t}},w=function(){return{type:O}},P=function(){return{type:M}},T=function(e){return{type:N,message:e}},G=function(){return{type:A}},R=function(){return{type:_}},D=["0","15","30","40","add"],I=function(e,t){return 3===e&&4===t},x=function(e,t){return 6===e&&6===t},W=function(e,t,r){return r?J(e,t):H(e,t)},H=function(e,t){var r=!1;return(3===e&&t<3||I(t,e))&&(r=!0),r},J=function(e,t){var r=!1;return 7===e&&t<5?r=!0:e>=6&&t>=6&&(r=e-t===2),r},B=function(e,t){var r=!1;return(6===e&&t<=4||7===e&&t<=5)&&(r=!0),r},L=function(e,t,r){var a=!1;return 3===r?a=2===e&&0===t||2===e&&1===t:5===r&&(console.log("Condition sets 5"),console.log(e),console.log(t),a=3===e&&0===t||4===e&&1===t||3===e&&2===t,console.log(a)),a},z=function(e){var t=["Great shot by "+e+"!!!","Amazing right hand by "+e+"!!!",e+" is on fire!",e+"'s backhand is remarkable!"];return t[Math.floor(Math.random()*t.length)]},F={isMatchOver:!1,maxSetNumber:3,commentatorMessage:"The Match starts!!!",player1:{id:0,gameScore:0,setScore:[0]},player2:{id:0,gameScore:0,setScore:[0]}};var U=Object(u.c)({players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,r=t.players,a=t.playerId;switch(t.type){case d:return Object(h.a)({},e,{players:r});case f:var n=JSON.parse(JSON.stringify(e)),c=n.players.findIndex((function(e){return e.id===a}));return n.players[c].isInMatch=!n.players[c].isInMatch,n;default:return e}},match:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,r={},a=t.playerOrder,n=t.increment,c=t.message,o="player"+a;switch(t.type){case E:return(r=Object(h.a)({},e)).player1.gameScore=0,r.player2.gameScore=0,r;case b:return(r=Object(h.a)({},e))[o].gameScore+=n,r;case v:var i=(r=JSON.parse(JSON.stringify(e)))[o].setScore.length;return r[o].setScore[i-1]+=n,r;case O:return(r=JSON.parse(JSON.stringify(e))).player1.setScore.push(0),r.player2.setScore.push(0),r;case M:return(r=Object(h.a)({},e)).isMatchOver=!0,r;case N:return Object(h.a)({},e,{commentatorMessage:c});case A:return 3===(r=Object(h.a)({},e)).maxSetNumber?r.maxSetNumber=5:5===r.maxSetNumber&&(r.maxSetNumber=3),r;case _:return(r=JSON.parse(JSON.stringify(F))).maxSetNumber=e.maxSetNumber,r;default:return e}}}),q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,X=Object(p.createLogger)({collapsed:!0}),Y=function(e){return Object(u.e)(U,e,q(Object(u.a)(m.a,X)))},K=r(11),V=r(47),$=r(3),Q=r(4),Z=r(6),ee=r(5),te=r(7),re=(r(19),r(40),function(e){function t(){return Object($.a)(this,t),Object(Z.a)(this,Object(ee.a)(t).apply(this,arguments))}return Object(te.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,r=e.imgSrc,a=e.subTitle;return o.a.createElement("div",{className:"card"},o.a.createElement("img",{src:r,alt:"Avatar",width:150,height:100}),o.a.createElement("div",{className:"container"},o.a.createElement("h4",null,o.a.createElement("b",null,t)),o.a.createElement("p",null,a)))}}]),t}(o.a.Component)),ae=function(e){function t(){return Object($.a)(this,t),Object(Z.a)(this,Object(ee.a)(t).apply(this,arguments))}return Object(te.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,r=e.name,a=e.img,n=e.ranking,c=e.isInMatch,i=e.click;return o.a.createElement("div",{onClick:function(){return i?i(t,c):null},className:"player"},o.a.createElement("div",{className:"player-top"},o.a.createElement(re,{name:r,imgSrc:a,subTitle:"#"+n})))}}]),t}(o.a.Component),ne=function(e){function t(){var e,r;Object($.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(r=Object(Z.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,a=r.props,n=a.isMatch,c=a.players,o=c.filter((function(e){return e.isInMatch})).length;r.checkIfPlayerMatchStatusShouldBeUpdated(n,t,o)&&r.props.changePlayerStatusMatchActionCreator(e)},r.checkIfPlayerMatchStatusShouldBeUpdated=function(e,t,r){return!e&&r<2||!e&&2===r&&t},r}return Object(te.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.isMatch,a=t.title,n=t.players;return o.a.createElement("div",null,o.a.createElement("div",{className:"players-container"},o.a.createElement("h2",{className:"players-container-title"},a),o.a.createElement("div",{className:"players-container-players"},n.length>0?function(t){return o.a.createElement("ol",{className:"players-grid",style:{justifyContent:r?"space-evenly":"center"}},t.map((function(t,a){return o.a.createElement("li",{style:{opacity:t.isInMatch&&!r?.5:1},key:a},o.a.createElement(ae,{id:t.id,name:t.name,img:t.img,ranking:t.ranking,isInMatch:t.isInMatch,click:e.handleClick}))})))}(n):function(e){var t=e?"Please select two players to start a match":"Add players";return o.a.createElement("div",{className:"players-grid"},t)}(r))))}}]),t}(o.a.Component);var ce=Object(K.b)(null,(function(e){return Object(u.b)(a,e)}))(ne),oe=r(26),ie=r.n(oe),se=function(e){function t(){return Object($.a)(this,t),Object(Z.a)(this,Object(ee.a)(t).apply(this,arguments))}return Object(te.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this.props.players,t=e?e.filter((function(e){return e.isInMatch})):[];return o.a.createElement("div",{className:"list-players"},o.a.createElement("div",{className:"list-players-title"},o.a.createElement("h1",null,"Tennis Game")),o.a.createElement("div",{className:"list-players-content"},o.a.createElement("div",null,o.a.createElement(ce,{title:"Players",isMatch:!1,players:e})),o.a.createElement("div",null,o.a.createElement(ce,{title:"Match",isMatch:!0,players:t}),t.length>1&&o.a.createElement("div",{className:"open-start-match"},o.a.createElement(ie.a,{to:"/match",className:"open-start-match"},"Start Match")))))}}]),t}(c.Component);var le=Object(K.b)((function(e){return{players:e.players.players}}),(function(e){return Object(u.b)(a,e)}))(se),ue=r(28),me=r.n(ue),pe=(r(41),function(e){function t(){return Object($.a)(this,t),Object(Z.a)(this,Object(ee.a)(t).apply(this,arguments))}return Object(te.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,r=e.sets,a=e.gameScore;return o.a.createElement("div",null,o.a.createElement("table",null,o.a.createElement("tr",null,o.a.createElement("th",{style:{width:"200px"}},t),r.map((function(e,t){return o.a.createElement("th",{key:t,style:{width:"30px"}},e)})),o.a.createElement("th",{className:"counter-game",style:{width:"30px",border:"1px solid black"}},a))))}}]),t}(o.a.Component)),he=r(27),de=r.n(he),fe=function(e){function t(){var e,r;Object($.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(r=Object(Z.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(n)))).goBack=function(){r.props.history.push("/")},r.continueGame=function(e,t,a,n,c){I(t,n)&&!c?r.props.handleGamePointActionCreator(a,-1):r.props.handleGamePointActionCreator(e,1)},r.continueSet=function(e){r.props.addSetScoreActionCreator(e,1)},r.getPlayersWonSets=function(e,t,r){return{setsWonP1:e.filter((function(e,a){return(a===r-1?e+1:e)>=6&&7!==t[a]})).length,setsWonP2:t.filter((function(t,r){return t>=6&&7!==e[r]})).length}},r.winPoint=function(e){var t=r.props,a=t.isMatchOver,n=t.maxSetNumber,c=r.props["player"+e],o=1===e?2:1,i=r.props["player"+o],s=c.setScore.length,l=x(c.setScore[s-1],i.setScore[s-1]),u=r.props.showPlayers[e-1].name,m="";if(!a)if(W(l?c.gameScore+1:c.gameScore,i.gameScore,l)){if(m=u+" Won the game!!",r.props.addCommentatorMessageActionCreator(m),B(c.setScore[s-1]+1,i.setScore[s-1])||l){m=u+" # Won the set "+s,r.props.addCommentatorMessageActionCreator(m);var p=r.getPlayersWonSets(c.setScore,i.setScore,s),h=p.setsWonP1,d=p.setsWonP2;L(h,d,n)?(m=u+" Won the match!!",console.log(m),r.props.addCommentatorMessageActionCreator(m),r.props.addSetScoreActionCreator(e,1),r.props.endMatchActionCreator()):(r.props.addSetScoreActionCreator(e,1),r.props.addNewSetsActionCreator())}else r.continueSet(e);r.props.resetGameScoresActionCreator()}else m=z(u),r.props.addCommentatorMessageActionCreator(m),r.continueGame(e,c.gameScore,o,i.gameScore,l)},r}return Object(te.a)(t,e),Object(Q.a)(t,[{key:"componentDidMount",value:function(){this.props.resetMatch()}},{key:"render",value:function(){var e=this,t=this.props,r=t.showPlayers,a=t.player1,n=t.player2,c=t.maxSetNumber,i=t.isMatchOver,s=r[0]||{},l=r[1]||{},u=a.setScore.length,m=x(a.setScore[u-1],n.setScore[u-1]),p=this.getPlayersWonSets(a.setScore,n.setScore,u),h=p.setsWonP1,d=p.setsWonP2,f=function(t,r,a,n){return o.a.createElement("div",{style:{opacity:!r&&n?"0.5":"1"}},o.a.createElement(ae,{id:t.id,name:t.name,img:t.img,ranking:t.ranking,isInMatch:t.isInMatch}),o.a.createElement("button",{className:"win-point-button",onClick:function(){return e.winPoint(a)}},"Win Point"))};return o.a.createElement("div",null,o.a.createElement("div",{className:"list-players"},o.a.createElement("div",{className:"match-list-players-title"},o.a.createElement("span",null,o.a.createElement("span",{onClick:this.goBack,className:"back-icon"},o.a.createElement(de.a,{size:30})),o.a.createElement("h1",{className:"title-match"},"Match!"))),r.length>0&&o.a.createElement("div",{className:"match-container"},o.a.createElement("div",{className:"players"},f(s,L(h,d,c),1,i),o.a.createElement("h1",null,"VS"),f(l,L(d,h,c),2,i)))),r.length>0&&o.a.createElement("div",{className:"score-board-container"},o.a.createElement(pe,{name:s.name,gameScore:m?a.gameScore.toString():D[a.gameScore],sets:a.setScore}),o.a.createElement(pe,{name:l.name,gameScore:m?n.gameScore.toString():D[n.gameScore],sets:n.setScore})),o.a.createElement("div",{className:"commentator"},o.a.createElement("img",{width:70,height:70,src:"https://www.shropshirestar.com/resizer/zqq449m6kEyRxwev_n_O9oKayRo=/1000x0/filters:quality(100)/arc-anglerfish-arc2-prod-shropshirestar-mna.s3.amazonaws.com/public/STRMTKBX3FBMXNKPJVPECJ6PSM.jpg",alt:""})," ",o.a.createElement("span",{className:"commentator-message"},r.length>0?this.props.commentatorMessage:"There are no players selected for the match!")))}}]),t}(c.Component);var ge=Object(K.b)((function(e){return{showPlayers:e.players.players.filter((function(e){return e.isInMatch})),player1:e.match.player1,player2:e.match.player2,isMatchOver:e.match.isMatchOver,maxSetNumber:e.match.maxSetNumber,commentatorMessage:e.match.commentatorMessage}}),(function(e){return Object(u.b)(n,e)}))(fe),ye=function(e){var t=e.store;return o.a.createElement(K.a,{store:t},o.a.createElement(me.a,null,o.a.createElement(V.a,{exact:!0,path:"/",component:le}),o.a.createElement(V.a,{path:"/match",render:function(e){var t=e.history;return o.a.createElement(ge,{history:t})}})))},Se=Y();s.a.render(o.a.createElement(l.a,null,o.a.createElement(ye,{store:Se})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.c17fe051.chunk.js.map