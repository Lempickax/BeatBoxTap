(this.webpackJsonpbboxtap=this.webpackJsonpbboxtap||[]).push([[0],{145:function(a,e,t){a.exports={Icon:"Icons_Icon__3xMqa"}},147:function(a,e,t){a.exports={Modal:"Modal_Modal__1RDbF"}},148:function(a,e,t){a.exports={Backdrop:"Backdrop_Backdrop__24ubh"}},169:function(a,e,t){a.exports=t(301)},174:function(a,e,t){},175:function(a,e,t){},301:function(a,e,t){"use strict";t.r(e);var n=t(0),o=t.n(n),l=t(23),c=t.n(l),i=(t(174),t(175),t(18)),s=t(19),r=t(20),u=t(21),d=function(a){return a.children},p=t(306),m=t(8),h=t.n(m),g=t(30),f=t(49),y=t(50),_=t.n(y),b=t(51),x=t.n(b),P=t(52),v=t.n(P),k=t(53),w=t.n(k),E=t(54),j=t.n(E),F=t(55),C=t.n(F),O=t(56),N=t.n(O),B=t(57),S=t.n(B),M=t(58),A=t.n(M),T=t(59),D=t.n(T),I=t(60),z=t.n(I),W=t(61),J=t.n(W),U=t(62),V=t.n(U),q=t(63),G=t.n(q),H=t(64),R=t.n(H),Y=t(65),K=t.n(Y),L=t(66),Q=t.n(L),Z=t(67),$=t.n(Z),X=t(68),aa=t.n(X),ea=t(69),ta=t.n(ea),na=t(70),oa=t.n(na),la=t(71),ca=t.n(la),ia=t(72),sa=t.n(ia),ra=t(73),ua=t.n(ra),da=t(74),pa=t.n(da),ma=t(75),ha=t.n(ma),ga=t(76),fa=t.n(ga),ya=t(77),_a=t.n(ya),ba=t(78),xa=t.n(ba),Pa=t(79),va=t.n(Pa),ka=t(80),wa=t.n(ka),Ea=t(81),ja=t.n(Ea),Fa=t(82),Ca=t.n(Fa),Oa=t(83),Na=t.n(Oa),Ba=t(84),Sa=t.n(Ba),Ma=t(85),Aa=t.n(Ma),Ta=t(86),Da=t.n(Ta),Ia=t(87),za=t.n(Ia),Wa=t(88),Ja=t.n(Wa),Ua=t(89),Va=t.n(Ua),qa=t(90),Ga=t.n(qa),Ha=t(145),Ra=t.n(Ha),Ya=t(6),Ka=t(146),La=t.n(Ka),Qa=function(a){var e=[null,Ya.u1F601,Ya.u1F603,Ya.u1F604,Ya.u1F606,Ya.u1F607,Ya.u1F609,Ya.u1F60A,Ya.u1F60B,Ya.u1F60C,Ya.u1F60D,Ya.u1F60E,Ya.u1F60F,Ya.u1F610,Ya.u1F617,Ya.u1F61B,Ya.u1F621,Ya.u1F624,Ya.u1F627,Ya.u1F62D,Ya.u1F633][a.id];return o.a.createElement(La.a,{size:"2em",className:Ra.a.Icon,icon:e})},Za=function(a){Object(u.a)(t,a);var e=Object(r.a)(t);function t(){var a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=e.call.apply(e,[this].concat(o))).state={style:1,play:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],playing:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]},a.handleStart=function(){a.handlePlay(1),a.handlePlay(2),a.handlePlay(3),a.handlePlay(4),a.handlePlay(5),a.handlePlay(6),a.handlePlay(7),a.handlePlay(8),a.handlePlay(9),a.handlePlay(10),a.handlePlay(11),a.handlePlay(12),a.handlePlay(13),a.handlePlay(14),a.handlePlay(15),a.handlePlay(16),a.handlePlay(17),a.handlePlay(18),a.handlePlay(19),a.handlePlay(20)},a.handlePlay=function(e){a.sound=new f.Howl({src:[a.urls[e]],autoplay:!0,mute:!a.state.play[e]});var t=Object(g.a)(a.state.playing),n=t[e];n=a.state.play[e],t[e]=n,a.setState({playing:t})},a.handleMute=function(){a.sound.mute(!0),a.clock.stop(),a.event.clear(),a.event=null},a.handlePlayPress=function(e){var t=Object(g.a)(a.state.play),n=t[e];n=!n,t[e]=n,a.setState({play:t})},a}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.context=new window.AudioContext,this.clock=new _.a(this.context),this.clock.start(),this.event=this.clock.callbackAtTime(this.handleStart,0).repeat(1===this.state.style?5.3:8)}},{key:"componentWillUnmount",value:function(){this.handleMute()}},{key:"render",value:function(){var a=this;this.urls=1===this.state.style?[null,x.a,v.a,w.a,j.a,C.a,N.a,S.a,A.a,D.a,z.a,J.a,V.a,G.a,R.a,K.a,Q.a,$.a,aa.a,ta.a,oa.a]:[null,ca.a,sa.a,ua.a,pa.a,ha.a,fa.a,_a.a,xa.a,va.a,wa.a,ja.a,Ca.a,Na.a,Sa.a,Aa.a,Da.a,za.a,Ja.a,Va.a,Ga.a];var e=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((function(e){return o.a.createElement("button",{key:e,onClick:function(){return a.handlePlayPress(e)},className:[h.a.Button,h.a[a.state.play[e]],h.a["m"+a.state.playing[e]],h.a["v"+a.state.style]].join(" ")},o.a.createElement(Qa,{id:e}))}));return o.a.createElement(d,null,o.a.createElement("div",{className:[h.a.Page,h.a["v"+this.state.style]].join(" ")}," ",e))}}]),t}(n.Component),$a=function(a){Object(u.a)(t,a);var e=Object(r.a)(t);function t(){var a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=e.call.apply(e,[this].concat(o))).state={style:2,play:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],playing:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]},a.ur="src/assets/Sound/1/",a.handleStart=function(){a.handlePlay(1),a.handlePlay(2),a.handlePlay(3),a.handlePlay(4),a.handlePlay(5),a.handlePlay(6),a.handlePlay(7),a.handlePlay(8),a.handlePlay(9),a.handlePlay(10),a.handlePlay(11),a.handlePlay(12),a.handlePlay(13),a.handlePlay(14),a.handlePlay(15),a.handlePlay(16),a.handlePlay(17),a.handlePlay(18),a.handlePlay(19),a.handlePlay(20)},a.handlePlay=function(e){a.sound=new f.Howl({src:[a.urls[e]],autoplay:!0,mute:!a.state.play[e]});var t=Object(g.a)(a.state.playing),n=t[e];n=a.state.play[e],t[e]=n,a.setState({playing:t})},a.handlePlayPress=function(e){var t=Object(g.a)(a.state.play),n=t[e];n=!n,t[e]=n,a.setState({play:t})},a.handleMute=function(){a.sound.mute(!0),a.clock.stop(),a.event.clear(),a.event=null},a}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.context=new window.AudioContext,this.clock=new _.a(this.context),this.clock.start(),this.event=this.clock.callbackAtTime(this.handleStart,0).repeat(1===this.state.style?5.3:8)}},{key:"componentWillUnmount",value:function(){this.handleMute()}},{key:"render",value:function(){var a=this;this.urls=1===this.state.style?[null,x.a,v.a,w.a,j.a,C.a,N.a,S.a,A.a,D.a,z.a,J.a,V.a,G.a,R.a,K.a,Q.a,$.a,aa.a,ta.a,oa.a]:[null,ca.a,sa.a,ua.a,pa.a,ha.a,fa.a,_a.a,xa.a,va.a,wa.a,ja.a,Ca.a,Na.a,Sa.a,Aa.a,Da.a,za.a,Ja.a,Va.a,Ga.a];var e=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((function(e){return o.a.createElement("button",{key:e,onClick:function(){return a.handlePlayPress(e)},className:[h.a.Button,h.a[a.state.play[e]],h.a["m"+a.state.playing[e]],h.a["v"+a.state.style]].join(" ")},o.a.createElement(Qa,{id:e}))}));return o.a.createElement(d,null,o.a.createElement("div",{className:[h.a.Page,h.a["v"+this.state.style]].join(" ")}," ",e))}}]),t}(n.Component),Xa=t(147),ae=t.n(Xa),ee=t(148),te=t.n(ee),ne=function(a){return a.show?o.a.createElement("div",{className:te.a.Backdrop,onClick:a.clicked}):null},oe=function(a){return o.a.createElement(d,null,o.a.createElement(ne,{show:a.show,clicked:a.modalClosed}),o.a.createElement("div",{className:ae.a.Modal,style:{transform:a.show?"translateY(0)":"translateY(-100vh)",opacity:a.show?"1":"0"}},a.children))},le=t(31),ce=t(307),ie=function(a){Object(u.a)(t,a);var e=Object(r.a)(t);function t(){var a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=e.call.apply(e,[this].concat(o))).state={show:!1,pageNumber:1},a.handleToggle=function(){2===a.state.pageNumber?a.setState({pageNumber:1}):a.setState({pageNumber:2})},a}return Object(s.a)(t,[{key:"render",value:function(){var a=this,e=o.a.createElement("div",{className:[h.a.Tool,h.a["k"+this.state.pageNumber]]},o.a.createElement("div",{className:h.a.Checkbox},o.a.createElement(p.a,{slider:!0,onChange:this.handleToggle})),o.a.createElement("div",{className:h.a.menu},o.a.createElement(le.a,{style:{cursor:"pointer"},onClick:function(){return a.setState({show:!0})},size:"big",name:"bars",corner:"top right",color:"grey"}))),t=o.a.createElement(d,null,o.a.createElement("h2",null,"BeatBoxTap"),o.a.createElement("h3",null,"Raise the volume and enjoy!"),o.a.createElement("p",null,"Voiced by"," ",o.a.createElement("a",{target:"_blank",href:"https://www.incredibox.com/"},"Incredibox")),o.a.createElement("p",null,"Create by"," ",o.a.createElement("a",{target:"_blank",href:"https://www.instagram.com/djcixtynine/"},"DJ69")),o.a.createElement(ce.a,{target:"_blank",href:"https://github.com/Lempickax/BeatBoxTap"},o.a.createElement(le.a,{compact:"true",size:"big",name:"github"}),"Github"));return o.a.createElement(d,null,o.a.createElement(oe,{modalClosed:function(){return a.setState({show:!1})},show:this.state.show,style:{color:"#f9f7e8"}},t),e,1===this.state.pageNumber?o.a.createElement(Za,null):o.a.createElement($a,null))}}]),t}(n.Component),se=function(a){Object(u.a)(t,a);var e=Object(r.a)(t);function t(){var a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=e.call.apply(e,[this].concat(o))).state={},a}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(d,null,o.a.createElement(ie,null))}}]),t}(n.Component);t(300);var re=function(){return o.a.createElement("div",{className:"App",style:{backgroundColor:" #f9f7e8",fontFamily:"Quicksand"}},o.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},51:function(a,e,t){a.exports=t.p+"static/media/1_lead_a.7895055d.ogg"},52:function(a,e,t){a.exports=t.p+"static/media/2_deux_a.011ab3fc.ogg"},53:function(a,e,t){a.exports=t.p+"static/media/3_kosh_a.f300d35d.ogg"},54:function(a,e,t){a.exports=t.p+"static/media/4_shpok_a.c9e089dd.ogg"},55:function(a,e,t){a.exports=t.p+"static/media/5_tom_a.698c4c39.ogg"},56:function(a,e,t){a.exports=t.p+"static/media/6_nouana_a.49bacc6b.ogg"},57:function(a,e,t){a.exports=t.p+"static/media/7_scratch_a.3a812216.ogg"},58:function(a,e,t){a.exports=t.p+"static/media/8_trill_a.0bb72233.ogg"},59:function(a,e,t){a.exports=t.p+"static/media/9_bass_a.8f0d94db.ogg"},60:function(a,e,t){a.exports=t.p+"static/media/10_uh_a.da7b571e.ogg"},61:function(a,e,t){a.exports=t.p+"static/media/11_nugu_a.69e1f89e.ogg"},62:function(a,e,t){a.exports=t.p+"static/media/12_guit_a.eaa216ea.ogg"},63:function(a,e,t){a.exports=t.p+"static/media/13_tromp_a.76cf43dd.ogg"},64:function(a,e,t){a.exports=t.p+"static/media/14_pouin_a.c82f2f7b.ogg"},65:function(a,e,t){a.exports=t.p+"static/media/15_tung_a.217e94ea.ogg"},66:function(a,e,t){a.exports=t.p+"static/media/16_aoun_a.513b4b62.ogg"},67:function(a,e,t){a.exports=t.p+"static/media/17_hum_a.4de79e27.ogg"},68:function(a,e,t){a.exports=t.p+"static/media/18_get_a.d80daf7e.ogg"},69:function(a,e,t){a.exports=t.p+"static/media/19_tellme_a.ec9561d4.ogg"},70:function(a,e,t){a.exports=t.p+"static/media/20_make_a.4f6aabc3.ogg"},71:function(a,e,t){a.exports=t.p+"static/media/drum1.10d86d64.ogg"},72:function(a,e,t){a.exports=t.p+"static/media/drum2.6da3f7b3.ogg"},73:function(a,e,t){a.exports=t.p+"static/media/drum3.dbcc18bc.ogg"},74:function(a,e,t){a.exports=t.p+"static/media/drum4.bb231944.ogg"},75:function(a,e,t){a.exports=t.p+"static/media/drum5.0052f4b0.ogg"},76:function(a,e,t){a.exports=t.p+"static/media/effet1.280b58f1.ogg"},77:function(a,e,t){a.exports=t.p+"static/media/effet2.b085d3f1.ogg"},78:function(a,e,t){a.exports=t.p+"static/media/effet3.b04f44b5.ogg"},79:function(a,e,t){a.exports=t.p+"static/media/effet4.d4351577.ogg"},8:function(a,e,t){a.exports={Page:"Page_Page__gciFG",v2:"Page_v2__2ifNd",Button:"Page_Button__25Mtp",true:"Page_true__uutSr",v1:"Page_v1__2K1sz",mtrue:"Page_mtrue__2qdSa",shake:"Page_shake__2UZkP",Pages:"Page_Pages__g4iMn",menu:"Page_menu__1Ctw3",Checkbox:"Page_Checkbox__2o4au",Tool:"Page_Tool__3VrjV"}},80:function(a,e,t){a.exports=t.p+"static/media/effet5.2fa5e392.ogg"},81:function(a,e,t){a.exports=t.p+"static/media/melo1.05a5a104.ogg"},82:function(a,e,t){a.exports=t.p+"static/media/melo2.6029ebce.ogg"},83:function(a,e,t){a.exports=t.p+"static/media/melo3.d9444646.ogg"},84:function(a,e,t){a.exports=t.p+"static/media/melo4.d6f80b05.ogg"},85:function(a,e,t){a.exports=t.p+"static/media/melo5.03a0a1ae.ogg"},86:function(a,e,t){a.exports=t.p+"static/media/voix1.e6b2d78f.ogg"},87:function(a,e,t){a.exports=t.p+"static/media/voix2.99df7752.ogg"},88:function(a,e,t){a.exports=t.p+"static/media/voix3.6c6b4bca.ogg"},89:function(a,e,t){a.exports=t.p+"static/media/voix4.a0ce605b.ogg"},90:function(a,e,t){a.exports=t.p+"static/media/voix5.bc8e49af.ogg"}},[[169,1,2]]]);
//# sourceMappingURL=main.ee64ea36.chunk.js.map