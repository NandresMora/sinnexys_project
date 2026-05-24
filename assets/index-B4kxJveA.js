const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Services-DmkSK0Ca.js","assets/react-vendor-B9C_apPG.js","assets/icons-Bz1FBUzD.js","assets/Process-DBglP85T.js","assets/Coverage-hct5Cv46.js","assets/About-DNTGsiw_.js","assets/Testimonials-BgxMYq9V.js","assets/Contact-sq07zhmd.js"])))=>i.map(i=>d[i]);
import{r as l,R as m,c as E}from"./react-vendor-B9C_apPG.js";import{X as D,M as C,F as I,T as P,I as z,L as R,S as v,A,Z as T,a as L,W as B,b as O}from"./icons-Bz1FBUzD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();var y={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W=l,V=Symbol.for("react.element"),$=Symbol.for("react.fragment"),H=Object.prototype.hasOwnProperty,U=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function j(t,r,s){var i,o={},a=null,n=null;s!==void 0&&(a=""+s),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(n=r.ref);for(i in r)H.call(r,i)&&!M.hasOwnProperty(i)&&(o[i]=r[i]);if(t&&t.defaultProps)for(i in r=t.defaultProps,r)o[i]===void 0&&(o[i]=r[i]);return{$$typeof:V,type:t,key:a,ref:n,props:o,_owner:U.current}}u.Fragment=$;u.jsx=j;u.jsxs=j;y.exports=u;var e=y.exports;const Y="modulepreload",q=function(t){return"/"+t},g={},h=function(r,s,i){let o=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),c=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));o=Promise.allSettled(s.map(d=>{if(d=q(d),d in g)return;g[d]=!0;const x=d.endsWith(".css"),S=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${S}`))return;const f=document.createElement("link");if(f.rel=x?"stylesheet":Y,x||(f.as="script"),f.crossOrigin="",f.href=d,c&&f.setAttribute("nonce",c),document.head.appendChild(f),x)return new Promise((N,_)=>{f.addEventListener("load",N),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(n){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=n,window.dispatchEvent(c),!c.defaultPrevented)throw n}return o.then(n=>{for(const c of n||[])c.status==="rejected"&&a(c.reason);return r().catch(a)})},w="/assets/logo-iK70wblv.avif";function G(){const[t,r]=l.useState(!1),[s,i]=l.useState(!1);l.useEffect(()=>{const a=()=>{i(window.scrollY>20)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const o=a=>{const n=document.getElementById(a);n&&(n.scrollIntoView({behavior:"smooth"}),r(!1))};return e.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${s?"bg-[#0A1929] shadow-lg":"bg-transparent"}`,children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsx("div",{className:"flex-shrink-0 flex items-center gap-2",children:e.jsx("img",{src:w,alt:"Sinnexys",width:"189",height:"60",className:"h-12 w-auto",decoding:"async",fetchPriority:"high"})}),e.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[e.jsx("button",{onClick:()=>o("servicios"),className:"text-gray-300 hover:text-[#00D9FF] transition-colors",children:"Servicios"}),e.jsx("button",{onClick:()=>o("proceso"),className:"text-gray-300 hover:text-[#00D9FF] transition-colors",children:"Proceso"}),e.jsx("button",{onClick:()=>o("cobertura"),className:"text-gray-300 hover:text-[#00D9FF] transition-colors",children:"Cobertura"}),e.jsx("button",{onClick:()=>o("nosotros"),className:"text-gray-300 hover:text-[#00D9FF] transition-colors",children:"Nosotros"}),e.jsx("button",{onClick:()=>o("contacto"),className:"text-gray-300 hover:text-[#00D9FF] transition-colors",children:"Contacto"}),e.jsx("a",{href:"https://wa.me/573123602705",target:"_blank",rel:"noopener noreferrer",className:"bg-[#0066FF] hover:bg-[#00D9FF] text-white px-6 py-2 rounded-lg transition-all hover:scale-105",children:"Solicitar servicio"})]}),e.jsx("div",{className:"md:hidden",children:e.jsx("button",{onClick:()=>r(!t),"aria-label":t?"Cerrar menú de navegación":"Abrir menú de navegación",className:"text-gray-300 hover:text-[#00D9FF] transition-colors",children:t?e.jsx(D,{size:24}):e.jsx(C,{size:24})})})]})}),t&&e.jsx("div",{className:"md:hidden bg-[#0A1929] border-t border-gray-800",children:e.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[e.jsx("button",{onClick:()=>o("servicios"),className:"block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-gray-800 rounded-md transition-colors",children:"Servicios"}),e.jsx("button",{onClick:()=>o("proceso"),className:"block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-gray-800 rounded-md transition-colors",children:"Proceso"}),e.jsx("button",{onClick:()=>o("cobertura"),className:"block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-gray-800 rounded-md transition-colors",children:"Cobertura"}),e.jsx("button",{onClick:()=>o("nosotros"),className:"block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-gray-800 rounded-md transition-colors",children:"Nosotros"}),e.jsx("button",{onClick:()=>o("contacto"),className:"block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-gray-800 rounded-md transition-colors",children:"Contacto"}),e.jsx("a",{href:"https://wa.me/573123602705",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center px-3 py-2 bg-[#0066FF] hover:bg-[#00D9FF] text-white rounded-md transition-colors",children:"Solicitar servicio"})]})})]})}function X(){const t=r=>{const s=document.getElementById(r);s&&s.scrollIntoView({behavior:"smooth"})};return e.jsx("footer",{className:"bg-[#0A1929] text-white pt-16 pb-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-12",children:[e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-3 mb-4",children:e.jsx("img",{src:w,alt:"Sinnexys",width:"120",height:"40",className:"h-10 w-auto"})}),e.jsx("p",{className:"text-gray-400 mb-4",children:"Soluciones tecnológicas para tu crecimiento"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold mb-4 text-[#00D9FF]",children:"Servicios"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsx("button",{onClick:()=>t("servicios"),className:"text-gray-400 hover:text-[#00D9FF] transition-colors",children:"Soporte y Mantenimiento"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>t("servicios"),className:"text-gray-400 hover:text-[#00D9FF] transition-colors",children:"Desarrollo Web"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>t("servicios"),className:"text-gray-400 hover:text-[#00D9FF] transition-colors",children:"Soluciones IT"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold mb-4 text-[#00D9FF]",children:"Empresa"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsx("button",{onClick:()=>t("nosotros"),className:"text-gray-400 hover:text-[#00D9FF] transition-colors",children:"Nosotros"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>t("proceso"),className:"text-gray-400 hover:text-[#00D9FF] transition-colors",children:"Proceso"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>t("cobertura"),className:"text-gray-400 hover:text-[#00D9FF] transition-colors",children:"Cobertura"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>t("contacto"),className:"text-gray-400 hover:text-[#00D9FF] transition-colors",children:"Contacto"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold mb-4 text-[#00D9FF]",children:"Síguenos"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("a",{href:"https://www.facebook.com/sinnexys",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00D9FF] transition-colors","aria-label":"Síguenos en Facebook",children:e.jsx(I,{className:"w-5 h-5"})}),e.jsx("a",{href:"#",className:"w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00D9FF] transition-colors","aria-label":"Síguenos en Twitter",children:e.jsx(P,{className:"w-5 h-5"})}),e.jsx("a",{href:"#",className:"w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00D9FF] transition-colors","aria-label":"Síguenos en Instagram",children:e.jsx(z,{className:"w-5 h-5"})}),e.jsx("a",{href:"#",className:"w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00D9FF] transition-colors","aria-label":"Síguenos en LinkedIn",children:e.jsx(R,{className:"w-5 h-5"})})]})]})]}),e.jsx("div",{className:"border-t border-gray-800 pt-8",children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[e.jsx("p",{className:"text-gray-400 text-sm mb-4 md:mb-0",children:"© 2026 Sinnexys. Todos los derechos reservados."}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx("a",{href:"#",className:"text-gray-400 hover:text-[#00D9FF] text-sm transition-colors",children:"Política de Privacidad"}),e.jsx("a",{href:"#",className:"text-gray-400 hover:text-[#00D9FF] text-sm transition-colors",children:"Términos y Condiciones"})]})]})})]})})}var b={},K="@vercel/analytics",Z="1.6.1",J=()=>{window.va||(window.va=function(...r){(window.vaq=window.vaq||[]).push(r)})};function F(){return typeof window<"u"}function k(){try{const t="production"}catch{}return"production"}function Q(t="auto"){if(t==="auto"){window.vam=k();return}window.vam=t}function ee(){return(F()?window.vam:k())||"production"}function p(){return ee()==="development"}function te(t){return t.scriptSrc?t.scriptSrc:p()?"https://va.vercel-scripts.com/v1/script.debug.js":t.basePath?`${t.basePath}/insights/script.js`:"/_vercel/insights/script.js"}function re(t={debug:!0}){var r;if(!F())return;Q(t.mode),J(),t.beforeSend&&((r=window.va)==null||r.call(window,"beforeSend",t.beforeSend));const s=te(t);if(document.head.querySelector(`script[src*="${s}"]`))return;const i=document.createElement("script");i.src=s,i.defer=!0,i.dataset.sdkn=K+(t.framework?`/${t.framework}`:""),i.dataset.sdkv=Z,t.disableAutoTrack&&(i.dataset.disableAutoTrack="1"),t.endpoint?i.dataset.endpoint=t.endpoint:t.basePath&&(i.dataset.endpoint=`${t.basePath}/insights`),t.dsn&&(i.dataset.dsn=t.dsn),i.onerror=()=>{const o=p()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${s}. ${o}`)},p()&&t.debug===!1&&(i.dataset.debug="false"),document.head.appendChild(i)}function oe({route:t,path:r}){var s;(s=window.va)==null||s.call(window,"pageview",{route:t,path:r})}function se(){if(!(typeof process>"u"||typeof b>"u"))return b.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function ie(t){return l.useEffect(()=>{var r;t.beforeSend&&((r=window.va)==null||r.call(window,"beforeSend",t.beforeSend))},[t.beforeSend]),l.useEffect(()=>{re({framework:t.framework||"react",basePath:t.basePath??se(),...t.route!==void 0&&{disableAutoTrack:!0},...t})},[]),l.useEffect(()=>{t.route&&t.path&&oe({route:t.route,path:t.path})},[t.route,t.path]),null}function ae(){return e.jsx("style",{children:`
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50%       { transform: translateY(-18px) rotate(3deg); }
      }
      @keyframes floatDelay {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50%       { transform: translateY(-12px) rotate(-2deg); }
      }
      @keyframes fadeSlideUp {
        from { opacity: 0; transform: translateY(32px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeSlideLeft {
        from { opacity: 0; transform: translateX(24px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      @keyframes pulseGlow {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50%       { opacity: 1;   transform: scale(1.08); }
      }
      @keyframes shimmer {
        0%   { background-position: -200% center; }
        100% { background-position:  200% center; }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes ping-slow {
        0%   { transform: scale(1);   opacity: 0.8; }
        80%  { transform: scale(2.2); opacity: 0; }
        100% { transform: scale(2.2); opacity: 0; }
      }

      /* Entrada animada por pasos */
      .animate-fade-up-1 { animation: fadeSlideUp 0.7s ease          forwards; opacity: 0; }
      .animate-fade-up-2 { animation: fadeSlideUp 0.7s ease 0.15s    forwards; opacity: 0; }
      .animate-fade-up-3 { animation: fadeSlideUp 0.7s ease 0.30s    forwards; opacity: 0; }
      .animate-fade-up-4 { animation: fadeSlideUp 0.7s ease 0.45s    forwards; opacity: 0; }
      .animate-fade-up-5 { animation: fadeSlideUp 0.7s ease 0.60s    forwards; opacity: 0; }
      .animate-fade-left { animation: fadeSlideLeft 0.8s ease 0.30s  forwards; opacity: 0; }

      /* Flotación de tarjetas */
      .card-float       { animation: float      4s ease-in-out infinite; }
      .card-float-delay { animation: floatDelay 5s ease-in-out 1s infinite; }

      /* Texto con shimmer cian→blanco→azul */
      .shimmer-text {
        background: linear-gradient(90deg, #00D9FF 0%, #ffffff 40%, #0066FF 60%, #00D9FF 100%);
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 4s linear infinite;
      }

      /* Botón primario con overlay hover */
      .hero-btn-primary {
        position: relative;
        overflow: hidden;
        background: linear-gradient(135deg, #0066FF, #0055DD);
        color: #fff;
        border: none;
        border-radius: 14px;
        padding: 15px 32px;
        font-size: 0.95rem;
        font-weight: 600;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: transform 0.2s, box-shadow 0.2s;
        box-shadow: 0 4px 24px rgba(0,102,255,0.35);
        font-family: inherit;
        letter-spacing: 0.01em;
      }
      .hero-btn-primary::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, #00D9FF, #0066FF);
        opacity: 0;
        transition: opacity 0.3s;
      }
      .hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,102,255,0.5); }
      .hero-btn-primary:hover::before { opacity: 1; }
      .hero-btn-primary span,
      .hero-btn-primary svg { position: relative; z-index: 1; }

      /* Botón secundario outline */
      .hero-btn-secondary {
        background: transparent;
        color: #00D9FF;
        border: 1.5px solid rgba(0,217,255,0.4);
        border-radius: 14px;
        padding: 15px 32px;
        font-size: 0.95rem;
        font-weight: 600;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: all 0.25s;
        font-family: inherit;
        letter-spacing: 0.01em;
        backdrop-filter: blur(8px);
      }
      .hero-btn-secondary:hover {
        background: rgba(0,217,255,0.1);
        border-color: #00D9FF;
        transform: translateY(-2px);
      }

      /* Pill de servicio */
      .hero-service-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(0,102,255,0.12);
        border: 1px solid rgba(0,102,255,0.25);
        border-radius: 999px;
        padding: 8px 16px;
        font-size: 0.8rem;
        font-weight: 500;
        color: #7EB8FF;
        transition: all 0.2s;
      }
      .hero-service-pill:hover {
        background: rgba(0,102,255,0.22);
        color: #fff;
      }

      /* Tarjeta visual (columna derecha) */
      .hero-visual-card {
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.09);
        border-radius: 28px;
        padding: 32px;
        backdrop-filter: blur(16px);
        position: relative;
      }

      /* Badge flotante */
      .hero-float-badge {
        position: absolute;
        background: rgba(10,25,41,0.85);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 16px;
        padding: 12px 18px;
        backdrop-filter: blur(20px);
        box-shadow: 0 16px 40px rgba(0,0,0,0.4);
      }

      /* Punto de estado activo (verde pulsante) */
      .hero-glow-dot {
        width: 8px; height: 8px;
        background: #22C55E;
        border-radius: 50%;
        position: relative;
        flex-shrink: 0;
      }
      .hero-glow-dot::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: #22C55E;
        animation: ping-slow 2s cubic-bezier(0,0,0.2,1) infinite;
      }

      /* Anillo giratorio de fondo */
      .hero-ring-spin { animation: spin-slow 12s linear infinite; }

      /* Grid de fondo sutil */
      .hero-grid-bg {
        background-image:
          linear-gradient(rgba(0,102,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,102,255,0.06) 1px, transparent 1px);
        background-size: 60px 60px;
      }

      /* Responsive: en tablet/móvil solo se muestra la columna de texto */
      @media (max-width: 1023px) {
        .hero-grid  { grid-template-columns: 1fr !important; }
        .hero-visual-col { display: none !important; }
      }
    `})}function ne(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"hero-grid-bg",style:{position:"absolute",inset:0,opacity:.5}}),e.jsx("div",{style:{position:"absolute",top:"10%",left:"-10%",width:500,height:500,background:"radial-gradient(circle, rgba(0,102,255,0.18) 0%, transparent 70%)",borderRadius:"50%",filter:"blur(40px)",animation:"pulseGlow 6s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",bottom:"5%",right:"-5%",width:400,height:400,background:"radial-gradient(circle, rgba(0,217,255,0.1) 0%, transparent 70%)",borderRadius:"50%",filter:"blur(40px)",animation:"pulseGlow 8s ease-in-out 2s infinite"}})]})}const le=[{icon:e.jsx(T,{size:12}),label:"Desarrollo Web"},{icon:e.jsx(L,{size:12}),label:"Soporte Técnico"},{icon:e.jsx(B,{size:12}),label:"Redes & Conectividad"}];function ce({onScrollTo:t}){return e.jsxs("div",{children:[e.jsx("div",{className:"animate-fade-up-1",style:{marginBottom:28},children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,217,255,0.08)",border:"1px solid rgba(0,217,255,0.2)",borderRadius:999,padding:"8px 18px",fontSize:"0.8rem",color:"#00D9FF",fontWeight:500,letterSpacing:"0.04em",textTransform:"uppercase"},children:[e.jsx(v,{size:13}),"Soluciones tecnológicas profesionales"]})}),e.jsxs("div",{className:"animate-fade-up-2",children:[e.jsx("h1",{style:{fontFamily:"'Sora', sans-serif",fontSize:"clamp(2.8rem, 5vw, 4.2rem)",fontWeight:800,lineHeight:1.08,letterSpacing:"-0.03em",color:"#fff",marginBottom:8},children:"Sinnexys"}),e.jsx("h2",{style:{fontFamily:"'Sora', sans-serif",fontSize:"clamp(1.5rem, 3vw, 2.2rem)",fontWeight:600,lineHeight:1.2,marginBottom:24},children:e.jsxs("span",{className:"shimmer-text",children:["Soluciones que impulsan",e.jsx("br",{}),"tu crecimiento"]})})]}),e.jsx("div",{className:"animate-fade-up-3",children:e.jsx("p",{style:{fontSize:"1.05rem",color:"rgba(200,215,235,0.8)",lineHeight:1.75,maxWidth:480,marginBottom:36,fontWeight:300},children:"Transforma tu pyme con soluciones IT integrales: desarrollo web profesional, soporte técnico especializado y tecnología a tu medida."})}),e.jsx("div",{className:"animate-fade-up-3",style:{display:"flex",flexWrap:"wrap",gap:10,marginBottom:40},children:le.map(({icon:r,label:s})=>e.jsxs("span",{className:"hero-service-pill",children:[r," ",s]},s))}),e.jsxs("div",{className:"animate-fade-up-4",style:{display:"flex",gap:14,flexWrap:"wrap"},children:[e.jsxs("button",{className:"hero-btn-primary",onClick:()=>t("servicios"),children:[e.jsx("span",{children:"Ver servicios"}),e.jsx(A,{size:16})]}),e.jsx("button",{className:"hero-btn-secondary",onClick:()=>t("contacto"),children:"Contactar ahora"})]})]})}const de="/assets/hero-D-e618ab.avif",fe=[{color:"#0066FF",label:"Desarrollo Web Profesional",sub:"Landing pages · E-commerce · Sistemas"},{color:"#00D9FF",label:"Soporte & Mantenimiento",sub:"Respuesta rápida · Monitoreo continuo"}];function me(){return e.jsxs("div",{className:"hero-visual-col animate-fade-left",style:{position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:440,height:440,zIndex:0},children:e.jsx("div",{className:"hero-ring-spin",style:{width:"100%",height:"100%",border:"1px dashed rgba(0,102,255,0.2)",borderRadius:"50%"}})}),e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:340,height:340,zIndex:0},children:e.jsx("div",{style:{width:"100%",height:"100%",border:"1px solid rgba(0,217,255,0.08)",borderRadius:"50%",animation:"spin-slow 18s linear reverse infinite"}})}),e.jsxs("div",{className:"hero-visual-card card-float",style:{position:"relative",zIndex:1},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 60% 30%, rgba(0,102,255,0.12) 0%, transparent 65%)",borderRadius:28,pointerEvents:"none"}}),e.jsxs("div",{style:{borderRadius:18,overflow:"hidden",marginBottom:24,position:"relative"},children:[e.jsx("img",{src:de,alt:"Equipo tecnológico de Sinnexys brindando soporte",width:"460",height:"260",fetchPriority:"high",style:{width:"100%",height:260,objectFit:"cover",display:"block"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(6,14,26,0.6) 0%, transparent 60%)"}})]}),fe.map(({color:t,label:r,sub:s})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 0",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:[e.jsx("div",{style:{width:40,height:40,borderRadius:12,flexShrink:0,background:`${t}22`,border:`1px solid ${t}44`,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:10,height:10,borderRadius:3,background:t}})}),e.jsxs("div",{children:[e.jsx("div",{style:{color:"#fff",fontWeight:600,fontSize:"0.88rem"},children:r}),e.jsx("div",{style:{color:"rgba(180,200,220,0.5)",fontSize:"0.75rem",marginTop:2},children:s})]})]},r))]}),e.jsx("div",{className:"hero-float-badge card-float-delay",style:{top:-20,left:-32,zIndex:10},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"linear-gradient(135deg, #0066FF, #00D9FF)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(v,{size:16,color:"#fff"})}),e.jsxs("div",{children:[e.jsx("div",{style:{color:"#fff",fontWeight:700,fontSize:"0.85rem"},children:"Diseño a tu medida"}),e.jsx("div",{style:{color:"rgba(180,200,220,0.5)",fontSize:"0.72rem"},children:"Confía en nosotros"})]})]})}),e.jsx("div",{className:"hero-float-badge",style:{bottom:-20,right:-32,zIndex:10},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("div",{className:"hero-glow-dot"}),e.jsxs("div",{children:[e.jsx("div",{style:{color:"#fff",fontWeight:700,fontSize:"0.85rem"},children:"Chat disponible 24/7"}),e.jsx("div",{style:{color:"rgba(180,200,220,0.5)",fontSize:"0.72rem"},children:"Sin interrupciones"})]})]})})]})}function he(){const t=r=>{const s=document.getElementById(r);s&&s.scrollIntoView({behavior:"smooth"})};return e.jsxs("section",{style:{fontFamily:"'DM Sans', 'Sora', sans-serif",background:"linear-gradient(135deg, #060E1A 0%, #0A1929 50%, #071428 100%)",minHeight:"100vh",position:"relative",overflow:"hidden",display:"flex",alignItems:"center"},children:[e.jsx(ae,{}),e.jsx(ne,{}),e.jsx("div",{style:{position:"relative",maxWidth:1280,margin:"0 auto",padding:"96px 24px",width:"100%"},children:e.jsxs("div",{className:"hero-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center"},children:[e.jsx(ce,{onScrollTo:t}),e.jsx(me,{})]})})]})}function xe(){const[t,r]=l.useState(!1);return e.jsx("a",{href:"https://wa.me/573123602705",target:"_blank",rel:"noopener noreferrer","aria-label":"Contactar por WhatsApp",className:"fixed bottom-6 right-6 z-50 group",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:e.jsxs("div",{className:"flex items-center gap-3",children:[t&&e.jsx("div",{className:"bg-white text-[#0A1929] px-4 py-2 rounded-lg shadow-lg font-semibold whitespace-nowrap animate-slideIn",children:"¿Necesitas ayuda? Escríbenos"}),e.jsx("div",{className:"w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all animate-pulse hover:animate-none",children:e.jsx(O,{className:"w-8 h-8 text-white"})})]})})}const ue=m.lazy(()=>h(()=>import("./Services-DmkSK0Ca.js"),__vite__mapDeps([0,1,2]))),pe=m.lazy(()=>h(()=>import("./Process-DBglP85T.js"),__vite__mapDeps([3,2,1]))),ge=m.lazy(()=>h(()=>import("./Coverage-hct5Cv46.js"),__vite__mapDeps([4,2,1]))),be=m.lazy(()=>h(()=>import("./About-DNTGsiw_.js"),__vite__mapDeps([5,2,1]))),ve=m.lazy(()=>h(()=>import("./Testimonials-BgxMYq9V.js"),__vite__mapDeps([6,2,1]))),ye=m.lazy(()=>h(()=>import("./Contact-sq07zhmd.js"),__vite__mapDeps([7,1,2]))),je=()=>e.jsx("div",{className:"w-full py-20 bg-gray-50 flex items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"}),e.jsx("p",{className:"text-gray-400 text-sm font-medium",children:"Cargando sección..."})]})});function we(){return e.jsxs("div",{className:"min-h-screen",children:[e.jsx(G,{}),e.jsx(he,{}),e.jsxs(l.Suspense,{fallback:e.jsx(je,{}),children:[e.jsx(ue,{}),e.jsx(pe,{}),e.jsx(ge,{}),e.jsx(be,{}),e.jsx(ve,{}),e.jsx(ye,{})]}),e.jsx(X,{}),e.jsx(xe,{}),e.jsx(ie,{})]})}E(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(we,{})}));export{h as _,e as j};
