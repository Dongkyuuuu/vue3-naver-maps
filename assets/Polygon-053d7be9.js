import{c as _,S as m,r as p,o as d,I as v,p as c,q as f,_ as i,U as g,V as y,N as P,z as u}from"./framework-6e2137aa.js";import{u as h}from"./useLoad-79562827.js";import{l as N,n as O,N as x}from"./NaverMap-302c9891.js";import"./app-7682e42d.js";const L=_({__name:"NaverPolygon",props:{paths:null,options:null},emits:[...N,"onLoad"],setup(r,{emit:t}){const s=r,{paths:l,options:n}=m(s),o=p(),a=e=>{o.value=new window.naver.maps.Polygon({map:e,paths:l.value,...n==null?void 0:n.value}),O(t,o.value),t("onLoad",o.value)};return d(()=>h(a)),v(()=>o.value&&o.value.setMap(null)),(e,C)=>(c(),f("div"))}}),w=i(L,[["__file","NaverPolygon.vue"]]),z={__name:"Polygon",setup(r){const t=p(),s=p([[126.9797895,37.5670131],[126.979215,37.5649555],[126.9766789,37.5649082],[126.9789515,37.5637645],[126.9785598,37.5614914],[126.9804949,37.5632666],[126.9827689,37.5619065],[126.9818039,37.5639213],[126.9837414,37.5653719],[126.9811162,37.5651081]]),l={latitude:37.56663888630603,longitude:126.97838310403904,zoom:15,zoomControl:!1,zoomControlOptions:{position:"TOP_RIGHT"}},n=o=>{t.value=o};return(o,a)=>(c(),g(u(x),{style:{width:"100%",height:"400px"},mapOptions:l},{default:y(()=>[P(u(w),{paths:s.value,onOnLoad:a[0]||(a[0]=e=>n(e))},null,8,["paths"])]),_:1}))}},M=i(z,[["__file","Polygon.vue"]]);export{M as default};