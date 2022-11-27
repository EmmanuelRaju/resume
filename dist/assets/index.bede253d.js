(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function f(){}function se(t){return t()}function Q(){return Object.create(null)}function X(t){t.forEach(se)}function re(t){return typeof t=="function"}function S(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ae(t){return Object.keys(t).length===0}function a(t,e){t.appendChild(e)}function w(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function A(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ce(t){return document.createTextNode(t)}function _(){return ce(" ")}function de(){return ce("")}function l(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ue(t){return Array.from(t.childNodes)}let U;function W(t){U=t}const O=[],Y=[],F=[],ee=[],fe=Promise.resolve();let K=!1;function pe(){K||(K=!0,fe.then(oe))}function G(t){F.push(t)}const J=new Set;let B=0;function oe(){const t=U;do{for(;B<O.length;){const e=O[B];B++,W(e),me(e.$$)}for(W(null),O.length=0,B=0;Y.length;)Y.pop()();for(let e=0;e<F.length;e+=1){const n=F[e];J.has(n)||(J.add(n),n())}F.length=0}while(O.length);for(;ee.length;)ee.pop()();K=!1,J.clear(),W(t)}function me(t){if(t.fragment!==null){t.update(),X(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}const z=new Set;let he;function b(t,e){t&&t.i&&(z.delete(t),t.i(e))}function E(t,e,n,i){if(t&&t.o){if(z.has(t))return;z.add(t),he.c.push(()=>{z.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function L(t){t&&t.c()}function k(t,e,n,i){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),i||G(()=>{const o=t.$$.on_mount.map(se).filter(re);t.$$.on_destroy?t.$$.on_destroy.push(...o):X(o),t.$$.on_mount=[]}),r.forEach(G)}function x(t,e){const n=t.$$;n.fragment!==null&&(X(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ge(t,e){t.$$.dirty[0]===-1&&(O.push(t),pe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(t,e,n,i,s,r,o,p=[-1]){const d=U;W(t);const c=t.$$={fragment:null,ctx:[],props:r,update:f,not_equal:s,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:Q(),dirty:p,skip_bound:!1,root:e.target||d.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(v,M,...y)=>{const P=y.length?y[0]:M;return c.ctx&&s(c.ctx[v],c.ctx[v]=P)&&(!c.skip_bound&&c.bound[v]&&c.bound[v](P),u&&ge(t,v)),M}):[],c.update(),u=!0,X(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const v=ue(e.target);c.fragment&&c.fragment.l(v),v.forEach(h)}else c.fragment&&c.fragment.c();e.intro&&b(t.$$.fragment),k(t,e.target,e.anchor,e.customElement),oe()}W(d)}class R{$destroy(){x(this,1),this.$destroy=f}$on(e,n){if(!re(n))return f;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ae(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ve(t){let e;return{c(){e=g("section"),e.innerHTML=`<h2 class="section-title">ACADEMIC ACHIEVEMENTS</h2> 
  <ul class="list"><li>Graduating in distinction without a single backlog ever!</li> 
    <li>Worked as an event coordinator at BHASWARA 2k14.</li> 
    <li>Winner of an event conducted by ALFAMATICA 2k15.</li> 
    <li>Runner in paper presentation conducted by BHASWARA 2k15.</li> 
    <li>Winner of Technical Quiz 2015 (Mechanical department).</li> 
    <li>Winner of paper presentation conducted by ELECTRIKA 2k16.</li> 
    <li>Winner of PHOENIX event conducted by NEN 2016.</li> 
    <li>Winner of MEMO FIESTA event conducted by ALFAMATICA 2k17</li></ul>`},m(n,i){w(n,e,i)},p:f,i:f,o:f,d(n){n&&h(e)}}}class $e extends R{constructor(e){super(),H(this,e,null,ve,S,{})}}function te(t){let e,n;return{c(){e=A("svg"),n=A("path"),l(n,"fill-rule","evenodd"),l(n,"clip-rule","evenodd"),l(n,"d","M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"),l(n,"fill","currentColor"),l(e,"width","24"),l(e,"height","24"),l(e,"viewBox","0 0 24 24"),l(e,"fill","none"),l(e,"xmlns","http://www.w3.org/2000/svg")},m(i,s){w(i,e,s),a(e,n)},d(i){i&&h(e)}}}function ne(t){let e,n,i;return{c(){e=A("svg"),n=A("path"),i=A("path"),l(n,"d","M13 16H11V18H13V16Z"),l(n,"fill","currentColor"),l(i,"fill-rule","evenodd"),l(i,"clip-rule","evenodd"),l(i,"d","M5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4ZM7 4H17V20H7L7 4Z"),l(i,"fill","currentColor"),l(e,"width","24"),l(e,"height","24"),l(e,"viewBox","0 0 24 24"),l(e,"fill","none"),l(e,"xmlns","http://www.w3.org/2000/svg")},m(s,r){w(s,e,r),a(e,n),a(e,i)},d(s){s&&h(e)}}}function ie(t){let e,n,i;return{c(){e=A("svg"),n=A("path"),i=A("path"),l(n,"fill-rule","evenodd"),l(n,"clip-rule","evenodd"),l(n,"d","M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"),l(n,"fill","currentColor"),l(i,"fill-rule","evenodd"),l(i,"clip-rule","evenodd"),l(i,"d","M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"),l(i,"fill","currentColor"),l(e,"width","24"),l(e,"height","24"),l(e,"viewBox","0 0 24 24"),l(e,"fill","none"),l(e,"xmlns","http://www.w3.org/2000/svg")},m(s,r){w(s,e,r),a(e,n),a(e,i)},d(s){s&&h(e)}}}function le(t){let e,n,i,s,r;return{c(){e=A("svg"),n=A("g"),i=A("path"),s=A("path"),r=A("path"),l(i,"id","XMLID_802_"),l(i,"d",`M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z`),l(s,"id","XMLID_803_"),l(s,"d",`M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z`),l(r,"id","XMLID_804_"),l(r,"d",`M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z`),l(n,"id","XMLID_801_"),l(e,"width","18"),l(e,"height","18"),l(e,"viewBox","0 0 310 310"),l(e,"fill","currentColor")},m(o,p){w(o,e,p),a(e,n),a(n,i),a(n,s),a(n,r)},d(o){o&&h(e)}}}function _e(t){let e,n,i,s,r=t[0]==="mail"&&te(),o=t[0]==="phone"&&ne(),p=t[0]==="pin"&&ie(),d=t[0]==="linkedIn"&&le();return{c(){r&&r.c(),e=_(),o&&o.c(),n=_(),p&&p.c(),i=_(),d&&d.c(),s=de()},m(c,u){r&&r.m(c,u),w(c,e,u),o&&o.m(c,u),w(c,n,u),p&&p.m(c,u),w(c,i,u),d&&d.m(c,u),w(c,s,u)},p(c,[u]){c[0]==="mail"?r||(r=te(),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),c[0]==="phone"?o||(o=ne(),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null),c[0]==="pin"?p||(p=ie(),p.c(),p.m(i.parentNode,i)):p&&(p.d(1),p=null),c[0]==="linkedIn"?d||(d=le(),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null)},i:f,o:f,d(c){r&&r.d(c),c&&h(e),o&&o.d(c),c&&h(n),p&&p.d(c),c&&h(i),d&&d.d(c),c&&h(s)}}}function we(t,e,n){let{kind:i}=e;return t.$$set=s=>{"kind"in s&&n(0,i=s.kind)},[i]}class Z extends R{constructor(e){super(),H(this,e,we,_e,S,{kind:0})}}function ye(t){let e,n,i,s,r,o,p,d,c,u,v,M,y,P,I,V,C,N,j,D,T;return i=new Z({props:{kind:"mail"}}),d=new Z({props:{kind:"phone"}}),y=new Z({props:{kind:"pin"}}),N=new Z({props:{kind:"linkedIn"}}),{c(){e=g("ul"),n=g("li"),L(i.$$.fragment),s=_(),r=g("p"),r.textContent="eraj007@gmail.com",o=_(),p=g("li"),L(d.$$.fragment),c=_(),u=g("p"),u.textContent="+91-7989234688",v=_(),M=g("li"),L(y.$$.fragment),P=_(),I=g("p"),I.textContent="Hyderabad, India",V=_(),C=g("li"),L(N.$$.fragment),j=_(),D=g("a"),D.textContent="linkedin.com/in/emmanuel-raju",l(n,"class","svelte-1wmh43c"),l(p,"class","svelte-1wmh43c"),l(M,"class","svelte-1wmh43c"),l(D,"href","linkedin.com/in/emmanuel-raju"),l(C,"class","ml-2 svelte-1wmh43c"),l(e,"class","svelte-1wmh43c")},m($,m){w($,e,m),a(e,n),k(i,n,null),a(n,s),a(n,r),a(e,o),a(e,p),k(d,p,null),a(p,c),a(p,u),a(e,v),a(e,M),k(y,M,null),a(M,P),a(M,I),a(e,V),a(e,C),k(N,C,null),a(C,j),a(C,D),T=!0},p:f,i($){T||(b(i.$$.fragment,$),b(d.$$.fragment,$),b(y.$$.fragment,$),b(N.$$.fragment,$),T=!0)},o($){E(i.$$.fragment,$),E(d.$$.fragment,$),E(y.$$.fragment,$),E(N.$$.fragment,$),T=!1},d($){$&&h(e),x(i),x(d),x(y),x(N)}}}class Ce extends R{constructor(e){super(),H(this,e,null,ye,S,{})}}function be(t){let e;return{c(){e=g("section"),e.innerHTML=`<h2 class="section-title">CERTIFICATES &amp; CREDENTIALS</h2> 
  <ul class="list"><li><p>The Complete 2020 Web Development Bootcamp</p> 
      <p>A full-stack course on web development by Dr. Angela Yu (Udemy)</p></li> 
    <li><p>React - The complete guide</p> 
      <p>A course on React which covers hooks, redux, Typescript etc by
        Academind (Udemy)</p></li> 
    <li><p>LinkedIn certifications</p> 
      <p>Was able to clear LinkedIn assessments on HTML, CSS, JS, React,
        Front- End Development</p></li> 
    <li><p>Amongst TOP 2% out of 122696 participants in cssbattle.dev</p></li> 
    <li><p>SILVER badge in 10 Days of JS challenge of HackerRank</p></li></ul>`},m(n,i){w(n,e,i)},p:f,i:f,o:f,d(n){n&&h(e)}}}class ke extends R{constructor(e){super(),H(this,e,null,be,S,{})}}function xe(t){let e;return{c(){e=g("section"),e.innerHTML=`<h2 class="section-title">EDUCATION</h2> 
  
  <div><h3 class="title">B.Tech (Mechanical Engineering)</h3> 
    <h3 class="sub-title">Geetanjali College of Engineering and Technology</h3> 
    <div class="timeline"><p>06/2013 - 06/2017</p> 
      <p>Hyderabad, India</p></div> 
    <div><h4 class="list-heading">Projects</h4> 
      <ul class="list"><li>ARI - Air energy Replenishing Instrument</li> 
        <li>Study of LFH bogies</li> 
        <li>Technical seminar on Polymagnets</li></ul></div></div>`},m(n,i){w(n,e,i)},p:f,i:f,o:f,d(n){n&&h(e)}}}class Ae extends R{constructor(e){super(),H(this,e,null,xe,S,{})}}function Me(t){let e;return{c(){e=g("section"),e.innerHTML=`<h2 class="section-title">WORK EXPERIENCE</h2> 
  
  <div><h3 class="title">Software Engineer (IOT - FullStack Web developer)</h3> 
    <h3 class="sub-title">Maker&#39;s Lab, Tech Mahindra</h3> 
    <div class="timeline"><p>07/2018 - Present</p> 
      <p>Pune, India</p></div> 
    <div><h4 class="list-heading">Achievements/Tasks</h4> 
      <ul class="list"><li>4 Awardees of BRAVO, 2 Special appreciation awards</li> 
        <li>Represented Lab at various premier forums</li> 
        <li>Been recognized as the future leader of Maker&#39;s Lab</li></ul></div></div> 

  
  <div><h3 class="title">SME (Customer service)</h3> 
    <h3 class="sub-title">Amazon</h3> 
    <div class="timeline"><p>08/2017 - 06/2018</p> 
      <p>Hyderabad, India</p></div> 
    <div><h4 class="list-heading">Achievements/Tasks</h4> 
      <ul class="list"><li>Awardee of Most valuable player (MVP)</li> 
        <li>Secured position in top 100 CSA&#39;s at Amazon</li> 
        <li>Promoted to role of SME in just 4 months on floor</li></ul></div></div>`},m(n,i){w(n,e,i)},p:f,i:f,o:f,d(n){n&&h(e)}}}class Ee extends R{constructor(e){super(),H(this,e,null,Me,S,{})}}function Le(t){let e;return{c(){e=g("header"),e.innerHTML=`<div><h1>Emmanuel Raju D</h1> 
    <h3 class="svelte-ryp320">Web Developer</h3> 
    <p class="svelte-ryp320">Mechanical by Education; Software by Profession; Engineer by PASSION</p></div> 
  <div class="header-img svelte-ryp320"><img src="emmanuel.jpg" alt="emmanuel"/></div>`,l(e,"class","svelte-ryp320")},m(n,i){w(n,e,i)},p:f,i:f,o:f,d(n){n&&h(e)}}}class Te extends R{constructor(e){super(),H(this,e,null,Le,S,{})}}function Ie(t){let e;return{c(){e=g("section"),e.innerHTML=`<h2 class="section-title">PROJECTS</h2> 
  
  <div><h4 class="list-title">EtherWatch - Marketplace for satellite data</h4> 
    <ul class="list"><li>Building a web application with React as frontend and Django backend
        sourcing in data from partner APIs. This application will serve as a
        market place for satellite data for monitoring various aspects such
        as weather and asset conditions.</li></ul></div> 
  
  <div><h4 class="list-title">eNetra - Smart energy management</h4> 
    <ul class="list"><li>Developed full stack application with Django as backend and React
        frontend implementing Redux pattern</li></ul></div> 
  
  <div><h4 class="list-title">eFortify - Covid Tracker application</h4> 
    <ul class="list"><li>Was the key resource in developing the solution as a whole, majorly
        contributing in developing React-Native based mobile application</li></ul></div> 
  
  <div><h4 class="list-title">Deep Tech Makers</h4> 
    <ul class="list"><li>Trained 200+ employees on IoT technology as part of company wide
        innovation upskilling</li></ul></div> 
  
  <div><h4 class="list-title">Vetturino - Blackbox for automobiles</h4> 
    <ul class="list"><li>Been part of the project since inception and contributed at various
        fronts such as project architecture, dashboard designing and product
        development</li></ul></div>`},m(n,i){w(n,e,i)},p:f,i:f,o:f,d(n){n&&h(e)}}}class Se extends R{constructor(e){super(),H(this,e,null,Ie,S,{})}}function He(t){let e;return{c(){e=g("section"),e.innerHTML=`<h2 class="section-title">SKILLS</h2> 
  <ul class="svelte-1ep1wld"><li class="svelte-1ep1wld">HTML</li> 
    <li class="svelte-1ep1wld">CSS</li> 
    <li class="svelte-1ep1wld">JS</li> 
    <li class="svelte-1ep1wld">React</li> 
    <li class="svelte-1ep1wld">Django</li> 
    <li class="svelte-1ep1wld">IoT</li> 
    <li class="svelte-1ep1wld">Redux</li> 
    <li class="svelte-1ep1wld">React-Native</li> 
    <li class="svelte-1ep1wld">Git</li> 
    <li class="svelte-1ep1wld">Powerpoint</li> 
    <li class="svelte-1ep1wld">Word</li> 
    <li class="svelte-1ep1wld">Excel</li></ul>`},m(n,i){w(n,e,i)},p:f,i:f,o:f,d(n){n&&h(e)}}}class Re extends R{constructor(e){super(),H(this,e,null,He,S,{})}}function Ne(t){let e,n,i,s,r,o,p,d,c,u,v,M,y,P,I,V,C,N,j,D,T,$;return o=new Te({}),d=new Ce({}),v=new Ee({}),y=new Re({}),I=new Se({}),C=new Ae({}),j=new $e({}),T=new ke({}),{c(){e=g("link"),n=g("link"),i=g("link"),s=_(),r=g("main"),L(o.$$.fragment),p=_(),L(d.$$.fragment),c=_(),u=g("div"),L(v.$$.fragment),M=_(),L(y.$$.fragment),P=_(),L(I.$$.fragment),V=_(),L(C.$$.fragment),N=_(),L(j.$$.fragment),D=_(),L(T.$$.fragment),l(e,"rel","preconnect"),l(e,"href","https://fonts.googleapis.com"),l(n,"rel","preconnect"),l(n,"href","https://fonts.gstatic.com"),l(n,"crossorigin",""),l(i,"href","https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"),l(i,"rel","stylesheet"),document.title="Emmanuel's Resume",l(u,"class","px-8 pt-6 pb-10"),l(r,"class","bg-white flex flex-col justify-center")},m(m,q){a(document.head,e),a(document.head,n),a(document.head,i),w(m,s,q),w(m,r,q),k(o,r,null),a(r,p),k(d,r,null),a(r,c),a(r,u),k(v,u,null),a(u,M),k(y,u,null),a(u,P),k(I,u,null),a(u,V),k(C,u,null),a(u,N),k(j,u,null),a(u,D),k(T,u,null),$=!0},p:f,i(m){$||(b(o.$$.fragment,m),b(d.$$.fragment,m),b(v.$$.fragment,m),b(y.$$.fragment,m),b(I.$$.fragment,m),b(C.$$.fragment,m),b(j.$$.fragment,m),b(T.$$.fragment,m),$=!0)},o(m){E(o.$$.fragment,m),E(d.$$.fragment,m),E(v.$$.fragment,m),E(y.$$.fragment,m),E(I.$$.fragment,m),E(C.$$.fragment,m),E(j.$$.fragment,m),E(T.$$.fragment,m),$=!1},d(m){h(e),h(n),h(i),m&&h(s),m&&h(r),x(o),x(d),x(v),x(y),x(I),x(C),x(j),x(T)}}}class je extends R{constructor(e){super(),H(this,e,null,Ne,S,{})}}new je({target:document.getElementById("app")});
