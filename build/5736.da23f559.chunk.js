(self.webpackChunkwebsite_strapi=self.webpackChunkwebsite_strapi||[]).push([[5736],{44174:x=>{function P(e,t,r,p){for(var E=-1,m=e==null?0:e.length;++E<m;){var i=e[E];t(p,i,r(i),e)}return p}x.exports=P},81119:(x,P,e)=>{var t=e(89881);function r(p,E,m,i){return t(p,function(g,f,s){E(i,g,m(g),s)}),i}x.exports=r},55189:(x,P,e)=>{var t=e(44174),r=e(81119),p=e(67206),E=e(1469);function m(i,g){return function(f,s){var l=E(f)?t:r,u=g?g():{};return l(f,i,p(s,2),u)}}x.exports=m},94654:(x,P,e)=>{var t=e(21078),r=e(35161);function p(E,m){return t(r(E,m),1)}x.exports=p},7739:(x,P,e)=>{var t=e(89465),r=e(55189),p=Object.prototype,E=p.hasOwnProperty,m=r(function(i,g,f){E.call(i,f)?i[f].push(g):t(i,f,[g])});x.exports=m},35161:(x,P,e)=>{var t=e(29932),r=e(67206),p=e(69199),E=e(1469);function m(i,g){var f=E(i)?t:p;return f(i,r(g,3))}x.exports=m},2407:(x,P,e)=>{"use strict";e.d(P,{$:()=>v,O:()=>M});var t=e(67294),r=e(45697),p=e(71893),E=e(16405),m=e(72735),i=e(35961),g=e(46273),f=e(63237),s=Object.defineProperty,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,h=(a,d,c)=>d in a?s(a,d,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[d]=c,y=(a,d)=>{for(var c in d||(d={}))u.call(d,c)&&h(a,c,d[c]);if(l)for(var c of l(d))C.call(d,c)&&h(a,c,d[c]);return a},n=(a,d)=>{var c={};for(var b in a)u.call(a,b)&&d.indexOf(b)<0&&(c[b]=a[b]);if(a!=null&&l)for(var b of l(a))d.indexOf(b)<0&&C.call(a,b)&&(c[b]=a[b]);return c};const o=(0,p.default)(g.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }
  :last-of-type ${i.x} {
    display: none;
  }
  :last-of-type ${m.Z} {
    color: ${({theme:a})=>a.colors.neutral800};
    font-weight: ${({theme:a})=>a.fontWeights.bold};
  }
`,v=({children:a})=>t.createElement(o,{inline:!0,as:"li"},t.createElement(m.Z,{variant:"pi",textColor:"neutral600"},a),t.createElement(i.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},t.createElement(E.default,null)));v.displayName="Crumb",v.propTypes={children:r.node.isRequired};const O=r.shape({type:r.oneOf([v])}),M=a=>{var d=a,{children:c,label:b}=d,D=n(d,["children","label"]);return t.createElement(g.k,y({},D),t.createElement(f.T,null,b),t.createElement("ol",{"aria-hidden":!0},c))};M.displayName="Breadcrumbs",M.propTypes={children:r.oneOfType([r.arrayOf(O),O]).isRequired,label:r.string.isRequired}},36989:(x,P,e)=>{"use strict";e.d(P,{Z:()=>f});var t=e(67294),r=e(45697),p=e(71893),E=e(35961),m=e(46273);const i=(0,p.default)(m.k)`
  & > * + * {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }

  margin-left: ${({pullRight:s})=>s?"auto":void 0};
`,g=(0,p.default)(i)`
  flex-shrink: 0;
`,f=({startActions:s,endActions:l})=>s||l?t.createElement(E.x,{paddingLeft:10,paddingRight:10},t.createElement(E.x,{paddingBottom:4},t.createElement(m.k,{justifyContent:"space-between",alignItems:"flex-start"},s&&t.createElement(i,{wrap:"wrap"},s),l&&t.createElement(g,{pullRight:!0},l)))):null;f.defaultProps={endActions:void 0,startActions:void 0},f.propTypes={endActions:r.node,startActions:r.node}},53192:(x,P,e)=>{"use strict";e.d(P,{m:()=>y});var t=e(67294),r=e(71893),p=e(45697),E=e(11276),m=Object.defineProperty,i=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,s=(n,o,v)=>o in n?m(n,o,{enumerable:!0,configurable:!0,writable:!0,value:v}):n[o]=v,l=(n,o)=>{for(var v in o||(o={}))g.call(o,v)&&s(n,v,o[v]);if(i)for(var v of i(o))f.call(o,v)&&s(n,v,o[v]);return n},u=(n,o)=>{var v={};for(var O in n)g.call(n,O)&&o.indexOf(O)<0&&(v[O]=n[O]);if(n!=null&&i)for(var O of i(n))o.indexOf(O)<0&&f.call(n,O)&&(v[O]=n[O]);return v};const C=`${232/16}rem`,h=(0,r.default)(E.r)`
  width: ${C};
  background: ${({theme:n})=>n.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:n})=>n.colors.neutral200};
  z-index: 1;
`,y=n=>{var o=n,{ariaLabel:v}=o,O=u(o,["ariaLabel"]);return t.createElement(h,l({"aria-label":v,as:"nav"},O))};y.propTypes={ariaLabel:p.string.isRequired}},38702:(x,P,e)=>{"use strict";e.d(P,{p:()=>o});var t=e(67294),r=e(45697),p=e(71893),E=e(97184),m=e(46273),i=e(72735),g=e(12028),f=e(35961),s=e(70004),l=e(49123),u=e(8509),C=e(41762);const h=v=>{const O=(0,t.useRef)();return(0,t.useEffect)(()=>{O.current=v}),O.current};var y=e(7801);const n=(0,p.default)(s.i)`
  width: ${24/16}rem;
  background-color: ${({theme:v})=>v.colors.neutral200};
`,o=({as:v,label:O,searchLabel:M,searchable:a,onChange:d,value:c,onClear:b,onSubmit:D,id:B})=>{const[_,R]=(0,t.useState)(!1),T=h(_),K=(0,C.M)("subnav-searchbar-clear",B),A=(0,t.useRef)(),I=(0,t.useRef)();(0,t.useEffect)(()=>{_&&A.current&&A.current.focus(),T&&!_&&I.current&&I.current.focus()},[_,T]);const $=()=>{R(L=>!L)},S=L=>{b(L),A.current.focus()},U=L=>{var j;((j=L.relatedTarget)==null?void 0:j.id)!==K&&R(!1)},W=L=>{L.key===y.y.ESCAPE&&R(!1)};return _?t.createElement(f.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4},t.createElement(u.U,null,t.createElement(l.w,{name:"searchbar",value:c,onChange:d,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:W,ref:A,onBlur:U,onClear:S,onSubmit:D,clearLabel:"Clear",size:"S"},M)),t.createElement(f.x,{paddingLeft:2,paddingTop:4},t.createElement(n,null))):t.createElement(f.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4},t.createElement(m.k,{justifyContent:"space-between",alignItems:"flex-start"},t.createElement(i.Z,{variant:"beta",as:v},O),a&&t.createElement(g.h,{ref:I,onClick:$,label:M,icon:t.createElement(E.default,null)})),t.createElement(f.x,{paddingTop:4},t.createElement(n,null)))};o.defaultProps={as:"h2",searchable:!1,onChange(){},onClear(){},onSubmit(){},value:"",searchLabel:"",id:void 0},o.propTypes={as:r.string,id:r.string,label:r.string.isRequired,onChange:r.func,onClear:r.func,onSubmit:r.func,searchLabel:r.string,searchable:r.bool,value:r.string}},52305:(x,P,e)=>{"use strict";e.d(P,{E:()=>M});var t=e(67294),r=e(45697),p=e(71893),E=e(71818),m=e(35961),i=e(72735),g=e(46273),f=e(63507),s=Object.defineProperty,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,h=(a,d,c)=>d in a?s(a,d,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[d]=c,y=(a,d)=>{for(var c in d||(d={}))u.call(d,c)&&h(a,c,d[c]);if(l)for(var c of l(d))C.call(d,c)&&h(a,c,d[c]);return a},n=(a,d)=>{var c={};for(var b in a)u.call(a,b)&&d.indexOf(b)<0&&(c[b]=a[b]);if(a!=null&&l)for(var b of l(a))d.indexOf(b)<0&&C.call(a,b)&&(c[b]=a[b]);return c};const o=(0,p.default)(m.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:a})=>a.colors.neutral800};
  svg > * {
    fill: ${({theme:a})=>a.colors.neutral600};
  }

  &.active {
    ${({theme:a})=>`
      background-color: ${a.colors.primary100};
      border-right: 2px solid ${a.colors.primary600};
      svg > * {
        fill: ${a.colors.primary700};
      }
      ${i.Z} {
        color: ${a.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,v=(0,p.default)(E.default)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:a,$active:d})=>d?a.colors.primary600:a.colors.neutral600};
  }
`,O=p.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,M=t.forwardRef((a,d)=>{var c=a,{children:b,icon:D,withBullet:B,as:_,isSubSectionChild:R}=c,T=n(c,["children","icon","withBullet","as","isSubSectionChild"]);return t.createElement(o,y({as:_,icon:D,background:"neutral100",paddingLeft:R?9:7,paddingBottom:2,paddingTop:2,ref:d},T),t.createElement(g.k,null,D?t.createElement(O,null,D):t.createElement(v,null),t.createElement(m.x,{paddingLeft:2},t.createElement(i.Z,{as:"span"},b))),B&&t.createElement(m.x,{as:g.k,paddingRight:4},t.createElement(v,{$active:!0})))});M.displayName="SubNavLink",M.defaultProps={as:f.f,icon:null,isSubSectionChild:!1,withBullet:!1},M.propTypes={as:r.elementType,children:r.node.isRequired,icon:r.element,isSubSectionChild:r.bool,withBullet:r.bool}},29489:(x,P,e)=>{"use strict";e.d(P,{D:()=>n});var t=e(67294),r=e(45697),p=e(71893),E=e(35961),m=e(30190),i=e(7681),g=e(12645),f=e(72735),s=e(46273);const l=(0,p.default)(s.k)`
  border: none;
  padding: 0;
  background: transparent;
`,u=p.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:o})=>o?"0deg":"180deg"});
`,C=({collapsable:o,label:v,onClick:O,ariaExpanded:M,ariaControls:a})=>o?t.createElement(l,{as:"button",onClick:O,"aria-expanded":M,"aria-controls":a,textAlign:"left"},t.createElement(E.x,{paddingRight:1},t.createElement(f.Z,{variant:"sigma",textColor:"neutral600"},v)),o&&t.createElement(u,{rotated:M},t.createElement(g.default,{"aria-hidden":!0}))):t.createElement(l,null,t.createElement(E.x,{paddingRight:1},t.createElement(f.Z,{variant:"sigma",textColor:"neutral600"},v)));C.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick(){}},C.propTypes={ariaControls:r.string,ariaExpanded:r.bool,collapsable:r.bool,label:r.string.isRequired,onClick:r.func};var h=e(41762);const y=(0,p.default)(E.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }
`,n=({collapsable:o,label:v,badgeLabel:O,children:M,id:a})=>{const[d,c]=(0,t.useState)(!0),b=(0,h.M)("subnav-list",a),D=()=>{c(B=>!B)};return t.createElement(i.K,{spacing:1},t.createElement(y,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4},t.createElement(E.x,{position:"relative",paddingRight:O?6:0},t.createElement(C,{onClick:D,ariaExpanded:d,ariaControls:b,collapsable:o,label:v}),O&&t.createElement(m.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},O))),(!o||d)&&t.createElement("ol",{id:b},t.Children.map(M,(B,_)=>t.createElement("li",{key:_},B))))};n.defaultProps={badgeLabel:null,collapsable:!1,id:void 0},n.propTypes={badgeLabel:r.string,children:r.node.isRequired,collapsable:r.bool,id:r.string,label:r.string.isRequired}},34446:(x,P,e)=>{"use strict";e.d(P,{Z:()=>C});var t=e(67294),r=e(45697),p=e(7681),E=e(35961),m=Object.defineProperty,i=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,s=(h,y,n)=>y in h?m(h,y,{enumerable:!0,configurable:!0,writable:!0,value:n}):h[y]=n,l=(h,y)=>{for(var n in y||(y={}))g.call(y,n)&&s(h,n,y[n]);if(i)for(var n of i(y))f.call(y,n)&&s(h,n,y[n]);return h},u=(h,y)=>{var n={};for(var o in h)g.call(h,o)&&y.indexOf(o)<0&&(n[o]=h[o]);if(h!=null&&i)for(var o of i(h))y.indexOf(o)<0&&f.call(h,o)&&(n[o]=h[o]);return n};const C=h=>{var y=h,{children:n}=y,o=u(y,["children"]);return t.createElement(E.x,{paddingTop:2,paddingBottom:4},t.createElement(p.K,l({as:"ol",spacing:2},o),t.Children.map(n,(v,O)=>t.createElement("li",{key:O},v))))};C.propTypes={children:r.node.isRequired}},67109:(x,P,e)=>{"use strict";e.d(P,{Z:()=>f});var t=e(67294),r=Object.defineProperty,p=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,i=(s,l,u)=>l in s?r(s,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):s[l]=u,g=(s,l)=>{for(var u in l||(l={}))E.call(l,u)&&i(s,u,l[u]);if(p)for(var u of p(l))m.call(l,u)&&i(s,u,l[u]);return s};function f(s){return t.createElement("svg",g({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s),t.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}},71818:(x,P,e)=>{"use strict";e.r(P),e.d(P,{default:()=>f});var t=e(67294),r=Object.defineProperty,p=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,i=(s,l,u)=>l in s?r(s,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):s[l]=u,g=(s,l)=>{for(var u in l||(l={}))E.call(l,u)&&i(s,u,l[u]);if(p)for(var u of p(l))m.call(l,u)&&i(s,u,l[u]);return s};function f(s){return t.createElement("svg",g({width:"1em",height:"1em",viewBox:"0 0 4 4",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s),t.createElement("rect",{width:4,height:4,rx:2,fill:"#A5A5BA"}))}}}]);
