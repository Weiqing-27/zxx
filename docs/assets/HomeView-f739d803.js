import{e as C,i as $,c as l,m as A,d as B,_ as w,o as r,a as c,b as o,t as a,u as D,w as p,f as n,g as _,v as H,r as f,h as T}from"./index-97037613.js";import{d as h}from"./dayjs.min-40a0aa38.js";import{m as V,u as F,s as O,a as W}from"./index-c09a8951.js";import{B as M}from"./index-54895d77.js";import"./use-expose-41792aad.js";let u;const N={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let U=C({},N);function I(){({instance:u}=V({setup(){const{state:t,toggle:s}=F();return()=>l(O,A(t,{"onUpdate:show":s}),null)}}))}function j(e){return $?new Promise((t,s)=>{u||I(),u.open(C({},U,e,{callback:i=>{(i==="confirm"?t:s)(i)}}))}):Promise.resolve()}const L=B({name:"HelloWorld",props:{msg:String}}),z={class:"hello"};function R(e,t,s,i,E,b){return r(),c("div",z,[o("h1",null,a(e.msg),1)])}const y=w(L,[["render",R]]),m=B({name:"HomePgae",components:{HelloWorld:y},data(){return{direction:"top",pinPadding:0,time:"",timer:0,color:"red",city:["","",""]}},methods:{changeColor(){W("字体颜色已改蓝色"),this.color="blue"},handleClick(){j({title:"标题",message:"这是一个全局按钮组件"})},initTime(){this.time=h().format("YYYY-MM-DD HH:mm:ss"),this.timer=setInterval(()=>{this.time=h().format("YYYY-MM-DD HH:mm:ss")},1e3)}},created(){this.initTime()},beforeUnmount(){clearInterval(this.timer)}}),g=()=>{D(e=>({f12e12a8:e.color}))},v=m.setup;m.setup=v?(e,t)=>(g(),v(e,t)):g;const q=m,G=""+new URL("logo-03d6d6da.png",import.meta.url).href;const J={class:"home text-center"},K={style:{width:"100%","text-align":"center"},class:"max640"},Q={class:"text-color"},X={class:"mg20 text-color"},Z=o("img",{alt:"Vue logo",src:G},null,-1),ee=o("p",{class:"mg10 text-color"},"以下是自定义全局组件",-1),te={class:"mg-b20"},oe={class:"mg-b20"},se={class:"mg-b20 flex flex-center"};function ne(e,t,s,i,E,b){const Y=y,k=f("YuiButton"),x=f("YuiSelect"),P=M,S=T("pin");return r(),c("div",J,[p((r(),c("header",K,[o("p",null,[n(" Stick me "),o("span",Q,a(e.pinPadding),1),n(" px from the "+a(e.direction)+" of the page ",1)])])),[[S,e.pinPadding,e.direction]]),o("p",X,a(e.time),1),Z,l(Y,{msg:"Welcome to Your Vue.js + TypeScript App"}),ee,o("div",te,[l(k,{onClick:t[0]||(t[0]=d=>e.handleClick())},{default:_(()=>[n("自定义全局按钮")]),_:1})]),o("div",oe,[l(x)]),o("div",se,[n(" 自定义指令： "),p(o("input",{type:"range",min:"0",max:"500","onUpdate:modelValue":t[1]||(t[1]=d=>e.pinPadding=d),style:{"z-index":"9"}},null,512),[[H,e.pinPadding]])]),l(P,{type:"success",onClick:e.changeColor},{default:_(()=>[n("更改字体颜色")]),_:1},8,["onClick"])])}const ue=w(q,[["render",ne]]);export{ue as default};
