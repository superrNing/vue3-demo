import{j as h,d as f,F as E,x as R,Y as G,c as l,Z as P,$ as T,D as S,a0 as N,N as V,E as D,a1 as F,I as $,e as L,a2 as I,l as _,H as x,a3 as j,G as O,a4 as H,m as K,a5 as y,n as U,P as Y}from"./index-97037613.js";import{g as q,s as M}from"./index-7d2359eb.js";import{C as Z,u as J}from"./main-fe8e16d0.js";import{N as Q}from"./index-63a49186.js";import{B as W}from"./index-54895d77.js";const[w,X]=h("radio-group"),p={disabled:Boolean,iconSize:P,direction:String,modelValue:T,checkedColor:String},A=Symbol(w);var ee=f({name:w,props:p,emits:["change","update:modelValue"],setup(e,{emit:n,slots:a}){const{linkChildren:i}=E(A),c=d=>n("update:modelValue",d);return R(()=>e.modelValue,d=>n("change",d)),i({props:e,updateValue:c}),G(()=>e.modelValue),()=>{var d;return l("div",{class:X([e.direction]),role:"radiogroup"},[(d=a.default)==null?void 0:d.call(a)])}}});const ae=S(ee),[te,B]=h("tag"),le={size:String,mark:Boolean,show:V,type:D("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var ne=f({name:te,props:le,emits:["close"],setup(e,{slots:n,emit:a}){const i=t=>{t.stopPropagation(),a("close",t)},c=()=>e.plain?{color:e.textColor||e.color,borderColor:e.color}:{color:e.textColor,background:e.color},d=()=>{var t;const{type:o,mark:s,plain:u,round:m,size:r,closeable:g}=e,b={mark:s,plain:u,round:m};r&&(b[r]=r);const v=g&&l($,{name:"cross",class:[B("close"),F],onClick:i},null);return l("span",{style:c(),class:B([b,o])},[(t=n.default)==null?void 0:t.call(n),v])};return()=>l(N,{name:e.closeable?"van-fade":void 0},{default:()=>[e.show?d():null]})}});const de=S(ne),z={name:T,shape:D("round"),disabled:Boolean,iconSize:P,modelValue:T,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var oe=f({props:L({},z,{bem:I(Function),role:String,parent:Object,checked:Boolean,bindGroup:V}),emits:["click","toggle"],setup(e,{emit:n,slots:a}){const i=_(),c=r=>{if(e.parent&&e.bindGroup)return e.parent.props[r]},d=x(()=>c("disabled")||e.disabled),t=x(()=>c("direction")),o=x(()=>{const r=e.checkedColor||c("checkedColor");if(r&&e.checked&&!d.value)return{borderColor:r,backgroundColor:r}}),s=r=>{const{target:g}=r,b=i.value,v=b===g||(b==null?void 0:b.contains(g));!d.value&&(v||!e.labelDisabled)&&n("toggle"),n("click",r)},u=()=>{const{bem:r,shape:g,checked:b}=e,v=e.iconSize||c("iconSize");return l("div",{ref:i,class:r("icon",[g,{disabled:d.value,checked:b}]),style:{fontSize:j(v)}},[a.icon?a.icon({checked:b,disabled:d.value}):l($,{name:"success",style:o.value},null)])},m=()=>{if(a.default)return l("span",{class:e.bem("label",[e.labelPosition,{disabled:d.value}])},[a.default()])};return()=>{const r=e.labelPosition==="left"?[m(),u()]:[u(),m()];return l("div",{role:e.role,class:e.bem([{disabled:d.value,"label-disabled":e.labelDisabled},t.value]),tabindex:d.value?void 0:0,"aria-checked":e.checked,onClick:s},[r])}}});const[se,ie]=h("radio");var ce=f({name:se,props:z,emits:["update:modelValue"],setup(e,{emit:n,slots:a}){const{parent:i}=O(A),c=()=>(i?i.props.modelValue:e.modelValue)===e.name,d=()=>{i?i.updateValue(e.name):n("update:modelValue",e.name)};return()=>l(oe,K({bem:ie,role:"radio",parent:i,checked:c(),onToggle:d},e),H(a,["default","icon"]))}});const re=S(ce),[ue,k]=h("address-item");var me=f({name:ue,props:{address:I(Object),disabled:Boolean,switchable:Boolean,defaultTagText:String},emits:["edit","click","select"],setup(e,{slots:n,emit:a}){const i=()=>{e.switchable&&a("select"),a("click")},c=()=>l($,{name:"edit",class:k("edit"),onClick:o=>{o.stopPropagation(),a("edit"),a("click")}},null),d=()=>{if(n.tag)return n.tag(e.address);if(e.address.isDefault&&e.defaultTagText)return l(de,{type:"primary",round:!0,class:k("tag")},{default:()=>[e.defaultTagText]})},t=()=>{const{address:o,disabled:s,switchable:u}=e,m=[l("div",{class:k("name")},[`${o.name} ${o.tel}`,d()]),l("div",{class:k("address")},[o.address])];return u&&!s?l(re,{name:o.id,iconSize:18},{default:()=>[m]}):m};return()=>{var o;const{disabled:s}=e;return l("div",{class:k({disabled:s}),onClick:i},[l(Z,{border:!1,titleClass:k("title")},{title:t,"right-icon":c}),(o=n.bottom)==null?void 0:o.call(n,L({},e.address,{disabled:s}))])}}});const[be,C,fe]=h("address-list"),ge={list:y(),modelValue:P,switchable:V,disabledText:String,disabledList:y(),addButtonText:String,defaultTagText:String};var ke=f({name:be,props:ge,emits:["add","edit","select","clickItem","editDisabled","selectDisabled","update:modelValue"],setup(e,{slots:n,emit:a}){const i=(t,o,s)=>{const u=()=>a(s?"editDisabled":"edit",t,o),m=()=>a("clickItem",t,o),r=()=>{a(s?"selectDisabled":"select",t,o),s||a("update:modelValue",t.id)};return l(me,{key:t.id,address:t,disabled:s,switchable:e.switchable,defaultTagText:e.defaultTagText,onEdit:u,onClick:m,onSelect:r},{bottom:n["item-bottom"],tag:n.tag})},c=(t,o)=>{if(t)return t.map((s,u)=>i(s,u,o))},d=()=>l("div",{class:[C("bottom"),"van-safe-area-bottom"]},[l(W,{round:!0,block:!0,type:"primary",text:e.addButtonText||fe("add"),class:C("add"),onClick:()=>a("add")},null)]);return()=>{var t,o;const s=c(e.list),u=c(e.disabledList,!0),m=e.disabledText&&l("div",{class:C("disabled-text")},[e.disabledText]);return l("div",{class:C()},[(t=n.top)==null?void 0:t.call(n),l(ae,{modelValue:e.modelValue},{default:()=>[s]}),m,u,(o=n.default)==null?void 0:o.call(n),d()])}}});const ve=S(ke);const Pe=f(()=>{const e=Y(),n=J(),a=_(),i=q("addressList"),c=U(i||[{id:1,name:"张三",tel:"13012345678",address:"浙江省杭州市西湖区文三路138号东方通信大厦7楼501室",ads:"文三路 138 号东方通信大厦7楼501室",city:["浙江省","杭州市","西湖区"],isDefault:!0},{id:2,name:"李四",tel:"13112345678",address:"浙江省杭州市拱墅区莫干山路50号",ads:"莫干山路 50 号",city:["浙江省","杭州市","拱墅区"],isDefault:!1},{id:3,name:"王五",tel:"13212345678",address:"浙江省杭州市滨江区江南大道15号",ads:"江南大道 15 号",city:["浙江省","杭州市","滨江区"],isDefault:!1}]);i||M("addressList",c);const d=()=>{e.push("/address/edit")},t=s=>{n.selectAddress=s,e.push("/address/edit")},o=()=>{e.back()};return()=>l("div",{class:"pd-nav",style:"background:#f7f8fa;min-height:100vh"},[l(Q,{fixed:!0,title:"地址管理","left-text":"返回","left-arrow":!0,onClickLeft:o},null),l(ve,{modelValue:a.value,"onUpdate:modelValue":s=>a.value=s,list:c,defaultTagText:"默认",onAdd:d,onEdit:t},null)])});export{Pe as default};
