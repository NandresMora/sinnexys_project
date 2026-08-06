const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Services-CevcwTDn.js","assets/react-vendor-B9C_apPG.js","assets/icons-Bz1FBUzD.js","assets/Process-1lENFN9P.js","assets/Coverage-DsaTsqLM.js","assets/About-abFwsoIw.js","assets/Testimonials-Bo6_ltfN.js","assets/Contact-Ym4wZZqJ.js"])))=>i.map(i=>d[i]);
import{r as l,R as f,c as z}from"./react-vendor-B9C_apPG.js";import{X as w,M as D,F as R,T as L,I as T,L as O,S as N,A as B,Z as W,a as H,W as M,b as U}from"./icons-Bz1FBUzD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();var S={exports:{}},g={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y=l,q=Symbol.for("react.element"),V=Symbol.for("react.fragment"),$=Object.prototype.hasOwnProperty,X=Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function k(t,s,i){var a,r={},o=null,n=null;i!==void 0&&(o=""+i),s.key!==void 0&&(o=""+s.key),s.ref!==void 0&&(n=s.ref);for(a in s)$.call(s,a)&&!G.hasOwnProperty(a)&&(r[a]=s[a]);if(t&&t.defaultProps)for(a in s=t.defaultProps,s)r[a]===void 0&&(r[a]=s[a]);return{$$typeof:q,type:t,key:o,ref:n,props:r,_owner:X.current}}g.Fragment=V;g.jsx=k;g.jsxs=k;S.exports=g;var e=S.exports;const K="modulepreload",Z=function(t){return"/"+t},v={},h=function(s,i,a){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),c=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=Promise.allSettled(i.map(d=>{if(d=Z(d),d in v)return;v[d]=!0;const p=d.endsWith(".css"),C=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${C}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":K,p||(m.as="script"),m.crossOrigin="",m.href=d,c&&m.setAttribute("nonce",c),document.head.appendChild(m),p)return new Promise((A,P)=>{m.addEventListener("load",A),m.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(n){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=n,window.dispatchEvent(c),!c.defaultPrevented)throw n}return r.then(n=>{for(const c of n||[])c.status==="rejected"&&o(c.reason);return s().catch(o)})},F="/assets/logo-iK70wblv.avif",E="573123602705",ze="+57 312 360 2705",b=`https://wa.me/${E}`,De=`tel:+${E}`,Re="contactosinnexys@gmail.com",Le="Sabana Norte, Cundinamarca",Te="Colombia",Oe=[{days:"Lunes - Viernes",hours:"8:00 AM - 6:00 PM",opens:"08:00",closes:"18:00",dayRange:"Mo-Fr"},{days:"Sábados y Domingos",hours:"9:00 AM - 5:00 PM",opens:"09:00",closes:"17:00",dayRange:"Sa-Su"}],J={facebook:"https://www.facebook.com/sinnexys",twitter:null,instagram:null,linkedin:null};function Q(){const[t,s]=l.useState(!1),[i,a]=l.useState(!1);l.useEffect(()=>{let o=!1;const n=()=>{o||(o=!0,window.requestAnimationFrame(()=>{a(window.scrollY>20),o=!1}))};return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]);const r=o=>{const n=document.getElementById(o);n&&(n.scrollIntoView({behavior:"smooth"}),s(!1))};return e.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${i?"bg-[#0A1929] shadow-lg":"bg-transparent"}`,children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsx("div",{className:"flex-shrink-0 flex items-center gap-2",children:e.jsx("img",{src:F,alt:"Sinnexys",width:"189",height:"60",className:"h-12 w-auto",decoding:"async",fetchPriority:"high"})}),e.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[e.jsx("button",{onClick:()=>r("servicios"),className:"text-gray-300 hover:text-[#00D9FF] transition-colors",children:"Servicios"}),e.jsx("button",{onClick:()=>r("proceso"),className:"text-gray-300 hover:text-[#00D9FF] transition-colors",children:"Proceso"}),e.jsx("button",{onClick:()=>r("cobertura"),className:"text-gray-300 hover:text-[#00D9FF] transition-colors",children:"Cobertura"}),e.jsx("button",{onClick:()=>r("nosotros"),className:"text-gray-300 hover:text-[#00D9FF] transition-colors",children:"Nosotros"}),e.jsx("button",{onClick:()=>r("contacto"),className:"text-gray-300 hover:text-[#00D9FF] transition-colors",children:"Contacto"}),e.jsx("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"bg-[#0066FF] hover:bg-[#00D9FF] text-white px-6 py-2 rounded-lg transition-all hover:scale-105",children:"Solicitar servicio"})]}),e.jsx("div",{className:"md:hidden",children:e.jsx("button",{onClick:()=>s(!t),"aria-label":t?"Cerrar menú de navegación":"Abrir menú de navegación",className:"text-gray-300 hover:text-[#00D9FF] transition-colors",children:t?e.jsx(w,{size:24}):e.jsx(D,{size:24})})})]})}),t&&e.jsx("div",{className:"md:hidden bg-[#0A1929] border-t border-gray-800",children:e.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[e.jsx("button",{onClick:()=>r("servicios"),className:"block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-gray-800 rounded-md transition-colors",children:"Servicios"}),e.jsx("button",{onClick:()=>r("proceso"),className:"block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-gray-800 rounded-md transition-colors",children:"Proceso"}),e.jsx("button",{onClick:()=>r("cobertura"),className:"block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-gray-800 rounded-md transition-colors",children:"Cobertura"}),e.jsx("button",{onClick:()=>r("nosotros"),className:"block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-gray-800 rounded-md transition-colors",children:"Nosotros"}),e.jsx("button",{onClick:()=>r("contacto"),className:"block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-gray-800 rounded-md transition-colors",children:"Contacto"}),e.jsx("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center px-3 py-2 bg-[#0066FF] hover:bg-[#00D9FF] text-white rounded-md transition-colors",children:"Solicitar servicio"})]})})]})}function ee({isOpen:t,onClose:s}){return t?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:e.jsxs("div",{className:"relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-100",children:[e.jsx("h2",{className:"text-2xl font-bold text-[#0A1929]",children:"Política de Privacidad"}),e.jsx("button",{onClick:s,className:"p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0066FF]","aria-label":"Cerrar modal",children:e.jsx(w,{className:"w-6 h-6"})})]}),e.jsxs("div",{className:"p-6 overflow-y-auto text-gray-600 space-y-6",children:[e.jsx("p",{className:"font-medium text-sm text-gray-400",children:"Última actualización: Agosto de 2026"}),e.jsxs("p",{children:["En ",e.jsx("strong",{children:"SINNEXYS – Servicios IT y Soluciones Digitales"}),", valoramos la privacidad de nuestros usuarios y nos comprometemos a proteger la información personal que nos suministran a través de nuestro sitio web."]}),e.jsx("p",{children:"Al utilizar nuestro formulario de contacto, aceptas las condiciones descritas en esta Política de Privacidad."}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-bold text-[#0A1929] mb-2",children:"1. Responsable del tratamiento de datos"}),e.jsx("p",{children:"SINNEXYS es el responsable del tratamiento de los datos personales recopilados a través de este sitio web."}),e.jsxs("ul",{className:"mt-2 space-y-1",children:[e.jsx("li",{children:e.jsx("strong",{children:"Contacto:"})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Correo electrónico:"})," contactosinnexys@gmail.com ",e.jsx("span",{className:"text-sm text-gray-400"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-bold text-[#0A1929] mb-2",children:"2. Información que recopilamos"}),e.jsx("p",{children:"Cuando completas nuestro formulario de contacto podemos solicitar información como:"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2 space-y-1",children:[e.jsx("li",{children:"Nombre completo"}),e.jsx("li",{children:"Correo electrónico"}),e.jsx("li",{children:"Número de teléfono"}),e.jsx("li",{children:"Empresa (si aplica)"}),e.jsx("li",{children:"Tipo de servicio de interés"}),e.jsx("li",{children:"Mensaje o descripción de la necesidad"})]}),e.jsx("p",{className:"mt-2",children:"No solicitamos datos sensibles ni información financiera mediante este formulario."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-bold text-[#0A1929] mb-2",children:"3. Finalidad del tratamiento"}),e.jsx("p",{children:"Los datos suministrados serán utilizados únicamente para:"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2 space-y-1",children:[e.jsx("li",{children:"Responder solicitudes de información."}),e.jsx("li",{children:"Elaborar cotizaciones."}),e.jsx("li",{children:"Contactar al interesado sobre los servicios solicitados."}),e.jsx("li",{children:"Dar seguimiento a oportunidades comerciales."}),e.jsx("li",{children:"Gestionar el proceso comercial de SINNEXYS."})]}),e.jsx("p",{className:"mt-2",children:"No utilizaremos tus datos para finalidades diferentes sin tu autorización."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-bold text-[#0A1929] mb-2",children:"4. ¿Dónde se almacenan los datos?"}),e.jsx("p",{children:"La información enviada mediante el formulario se almacena de forma segura en la infraestructura tecnológica utilizada por SINNEXYS."}),e.jsx("p",{className:"mt-2",children:"Actualmente utilizamos:"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2 space-y-1",children:[e.jsx("li",{children:"Supabase como plataforma de base de datos y almacenamiento de la información enviada mediante el formulario."}),e.jsx("li",{children:"Servicios de infraestructura y alojamiento necesarios para el funcionamiento del sitio web."})]}),e.jsx("p",{className:"mt-2",children:"El acceso a esta información está restringido únicamente al personal autorizado de SINNEXYS."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-bold text-[#0A1929] mb-2",children:"5. Compartición de información"}),e.jsx("p",{children:"SINNEXYS no vende, alquila ni comercializa la información personal de sus usuarios."}),e.jsx("p",{className:"mt-2",children:"Solo podremos compartir información cuando:"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2 space-y-1",children:[e.jsx("li",{children:"exista obligación legal;"}),e.jsx("li",{children:"sea requerida por una autoridad competente;"}),e.jsx("li",{children:"sea necesario para prestar el servicio solicitado mediante proveedores tecnológicos que apoyan la operación."})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-bold text-[#0A1929] mb-2",children:"6. Conservación de los datos"}),e.jsx("p",{children:"Los datos se conservarán únicamente durante el tiempo necesario para atender la solicitud del usuario, mantener la relación comercial o cumplir obligaciones legales."}),e.jsx("p",{className:"mt-2",children:"Posteriormente podrán ser eliminados o anonimizados conforme a nuestras políticas internas."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-bold text-[#0A1929] mb-2",children:"7. Derechos del titular"}),e.jsx("p",{children:"De conformidad con la legislación colombiana, el titular de los datos podrá:"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2 space-y-1",children:[e.jsx("li",{children:"conocer la información almacenada;"}),e.jsx("li",{children:"solicitar su actualización;"}),e.jsx("li",{children:"corregir datos inexactos;"}),e.jsx("li",{children:"solicitar la eliminación cuando sea procedente;"}),e.jsx("li",{children:"revocar la autorización otorgada para el tratamiento de sus datos."})]}),e.jsx("p",{className:"mt-2",children:"Las solicitudes podrán realizarse mediante nuestro correo de contacto."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-bold text-[#0A1929] mb-2",children:"8. Seguridad de la información"}),e.jsx("p",{children:"SINNEXYS implementa medidas técnicas y organizativas razonables para proteger la información contra:"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2 space-y-1",children:[e.jsx("li",{children:"acceso no autorizado;"}),e.jsx("li",{children:"pérdida;"}),e.jsx("li",{children:"alteración;"}),e.jsx("li",{children:"divulgación;"}),e.jsx("li",{children:"destrucción accidental."})]}),e.jsx("p",{className:"mt-2",children:"Aunque ningún sistema es completamente invulnerable, trabajamos para mantener un nivel adecuado de seguridad acorde con el tamaño y naturaleza de nuestra operación."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-bold text-[#0A1929] mb-2",children:"9. Uso de cookies"}),e.jsx("p",{children:"Nuestro sitio puede utilizar cookies técnicas y de análisis para mejorar la experiencia de navegación y comprender el comportamiento de los visitantes."}),e.jsx("p",{className:"mt-2",children:"Estas cookies no tienen como finalidad identificar personalmente al usuario."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-bold text-[#0A1929] mb-2",children:"10. Cambios en esta política"}),e.jsx("p",{children:"SINNEXYS podrá actualizar esta Política de Privacidad cuando sea necesario para reflejar cambios legales, operativos o tecnológicos."}),e.jsx("p",{className:"mt-2",children:"La versión vigente será siempre la publicada en este sitio web."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-bold text-[#0A1929] mb-2",children:"11. Aceptación"}),e.jsx("p",{children:"Al enviar el formulario de contacto, el usuario manifiesta que ha leído esta Política de Privacidad y autoriza el tratamiento de sus datos personales para las finalidades aquí descritas."})]})]}),e.jsx("div",{className:"p-6 border-t border-gray-100 bg-gray-50 flex justify-end",children:e.jsx("button",{onClick:s,className:"px-6 py-2.5 bg-gradient-to-r from-[#0066FF] to-[#00D9FF] hover:scale-105 text-white rounded-lg font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#0066FF]",children:"Entendido"})})]})}):null}const te={facebook:R,twitter:L,instagram:T,linkedin:O},se={facebook:"Facebook",twitter:"Twitter",instagram:"Instagram",linkedin:"LinkedIn"};function re(){const[t,s]=l.useState(!1),i=a=>{const r=document.getElementById(a);r&&r.scrollIntoView({behavior:"smooth"})};return e.jsxs("footer",{className:"bg-[#0A1929] text-white pt-16 pb-8",children:[e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-12",children:[e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-3 mb-4",children:e.jsx("img",{src:F,alt:"Sinnexys",width:"120",height:"40",className:"h-10 w-auto"})}),e.jsx("p",{className:"text-gray-400 mb-4",children:"Soluciones tecnológicas para tu crecimiento"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold mb-4 text-[#00D9FF]",children:"Servicios"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsx("button",{onClick:()=>i("servicios"),className:"text-gray-400 hover:text-[#00D9FF] transition-colors",children:"Soporte y Mantenimiento"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>i("servicios"),className:"text-gray-400 hover:text-[#00D9FF] transition-colors",children:"Desarrollo Web"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>i("servicios"),className:"text-gray-400 hover:text-[#00D9FF] transition-colors",children:"Soluciones IT"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold mb-4 text-[#00D9FF]",children:"Empresa"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsx("button",{onClick:()=>i("nosotros"),className:"text-gray-400 hover:text-[#00D9FF] transition-colors",children:"Nosotros"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>i("proceso"),className:"text-gray-400 hover:text-[#00D9FF] transition-colors",children:"Proceso"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>i("cobertura"),className:"text-gray-400 hover:text-[#00D9FF] transition-colors",children:"Cobertura"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>i("contacto"),className:"text-gray-400 hover:text-[#00D9FF] transition-colors",children:"Contacto"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold mb-4 text-[#00D9FF]",children:"Síguenos"}),e.jsx("div",{className:"flex gap-4",children:Object.entries(J).filter(([,a])=>a!==null).map(([a,r])=>{const o=te[a];return e.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00D9FF] transition-colors","aria-label":`Síguenos en ${se[a]}`,children:e.jsx(o,{className:"w-5 h-5"})},a)})})]})]}),e.jsx("div",{className:"border-t border-gray-800 pt-8",children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[e.jsx("p",{className:"text-gray-400 text-sm mb-4 md:mb-0",children:"© 2026 Sinnexys. Todos los derechos reservados."}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx("span",{className:"text-gray-600 text-sm cursor-default",children:"Política de Privacidad"}),e.jsx("span",{className:"text-gray-600 text-sm cursor-default",children:"Términos y Condiciones"})]})]})})]}),e.jsx(ee,{isOpen:t,onClose:()=>s(!1)})]})}var y={},ie="@vercel/analytics",ae="1.6.1",oe=()=>{window.va||(window.va=function(...s){(window.vaq=window.vaq||[]).push(s)})};function _(){return typeof window<"u"}function I(){try{const t="production"}catch{}return"production"}function ne(t="auto"){if(t==="auto"){window.vam=I();return}window.vam=t}function le(){return(_()?window.vam:I())||"production"}function j(){return le()==="development"}function ce(t){return t.scriptSrc?t.scriptSrc:j()?"https://va.vercel-scripts.com/v1/script.debug.js":t.basePath?`${t.basePath}/insights/script.js`:"/_vercel/insights/script.js"}function de(t={debug:!0}){var s;if(!_())return;ne(t.mode),oe(),t.beforeSend&&((s=window.va)==null||s.call(window,"beforeSend",t.beforeSend));const i=ce(t);if(document.head.querySelector(`script[src*="${i}"]`))return;const a=document.createElement("script");a.src=i,a.defer=!0,a.dataset.sdkn=ie+(t.framework?`/${t.framework}`:""),a.dataset.sdkv=ae,t.disableAutoTrack&&(a.dataset.disableAutoTrack="1"),t.endpoint?a.dataset.endpoint=t.endpoint:t.basePath&&(a.dataset.endpoint=`${t.basePath}/insights`),t.dsn&&(a.dataset.dsn=t.dsn),a.onerror=()=>{const r=j()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${i}. ${r}`)},j()&&t.debug===!1&&(a.dataset.debug="false"),document.head.appendChild(a)}function me({route:t,path:s}){var i;(i=window.va)==null||i.call(window,"pageview",{route:t,path:s})}function xe(){if(!(typeof process>"u"||typeof y>"u"))return y.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function ue(t){return l.useEffect(()=>{var s;t.beforeSend&&((s=window.va)==null||s.call(window,"beforeSend",t.beforeSend))},[t.beforeSend]),l.useEffect(()=>{de({framework:t.framework||"react",basePath:t.basePath??xe(),...t.route!==void 0&&{disableAutoTrack:!0},...t})},[]),l.useEffect(()=>{t.route&&t.path&&me({route:t.route,path:t.path})},[t.route,t.path]),null}function fe(){return e.jsx("style",{children:`
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
    `})}function he(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"hero-grid-bg",style:{position:"absolute",inset:0,opacity:.5}}),e.jsx("div",{style:{position:"absolute",top:"10%",left:"-10%",width:500,height:500,background:"radial-gradient(circle, rgba(0,102,255,0.18) 0%, transparent 70%)",borderRadius:"50%",filter:"blur(40px)",animation:"pulseGlow 6s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",bottom:"5%",right:"-5%",width:400,height:400,background:"radial-gradient(circle, rgba(0,217,255,0.1) 0%, transparent 70%)",borderRadius:"50%",filter:"blur(40px)",animation:"pulseGlow 8s ease-in-out 2s infinite"}})]})}const pe=[{icon:e.jsx(W,{size:12}),label:"Desarrollo Web"},{icon:e.jsx(H,{size:12}),label:"Soporte Técnico"},{icon:e.jsx(M,{size:12}),label:"Redes & Conectividad"}];function ge({onScrollTo:t}){return e.jsxs("div",{children:[e.jsx("div",{className:"animate-fade-up-1",style:{marginBottom:28},children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,217,255,0.08)",border:"1px solid rgba(0,217,255,0.2)",borderRadius:999,padding:"8px 18px",fontSize:"0.8rem",color:"#00D9FF",fontWeight:500,letterSpacing:"0.04em",textTransform:"uppercase"},children:[e.jsx(N,{size:13}),"Soluciones tecnológicas profesionales"]})}),e.jsxs("div",{className:"animate-fade-up-2",children:[e.jsx("h1",{style:{fontFamily:"'Sora', 'Inter', sans-serif",fontSize:"clamp(2.8rem, 5vw, 4.2rem)",fontWeight:800,lineHeight:1.08,letterSpacing:"-0.03em",color:"#fff",marginBottom:8},children:"Sinnexys"}),e.jsx("h2",{style:{fontFamily:"'Sora', 'Inter', sans-serif",fontSize:"clamp(1.5rem, 3vw, 2.2rem)",fontWeight:600,lineHeight:1.2,marginBottom:24},children:e.jsxs("span",{className:"shimmer-text",children:["Soluciones que impulsan",e.jsx("br",{}),"tu crecimiento"]})})]}),e.jsx("div",{className:"animate-fade-up-3",children:e.jsx("p",{style:{fontSize:"1.05rem",color:"rgba(200,215,235,0.8)",lineHeight:1.75,maxWidth:480,marginBottom:36,fontWeight:300},children:"Transforma tu pyme con soluciones IT integrales: desarrollo web profesional, soporte técnico especializado y tecnología a tu medida."})}),e.jsx("div",{className:"animate-fade-up-3",style:{display:"flex",flexWrap:"wrap",gap:10,marginBottom:40},children:pe.map(({icon:s,label:i})=>e.jsxs("span",{className:"hero-service-pill",children:[s," ",i]},i))}),e.jsxs("div",{className:"animate-fade-up-4",style:{display:"flex",gap:14,flexWrap:"wrap"},children:[e.jsxs("button",{className:"hero-btn-primary",onClick:()=>t("servicios"),children:[e.jsx("span",{children:"Ver servicios"}),e.jsx(B,{size:16})]}),e.jsx("button",{className:"hero-btn-secondary",onClick:()=>t("contacto"),children:"Contactar ahora"})]})]})}const be="/assets/hero-D-e618ab.avif",je=[{color:"#0066FF",label:"Desarrollo Web Profesional",sub:"Landing pages · E-commerce · Sistemas"},{color:"#00D9FF",label:"Soporte & Mantenimiento",sub:"Respuesta rápida · Monitoreo continuo"}];function ve(){return e.jsxs("div",{className:"hero-visual-col animate-fade-left",style:{position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:440,height:440,zIndex:0},children:e.jsx("div",{className:"hero-ring-spin",style:{width:"100%",height:"100%",border:"1px dashed rgba(0,102,255,0.2)",borderRadius:"50%"}})}),e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:340,height:340,zIndex:0},children:e.jsx("div",{style:{width:"100%",height:"100%",border:"1px solid rgba(0,217,255,0.08)",borderRadius:"50%",animation:"spin-slow 18s linear reverse infinite"}})}),e.jsxs("div",{className:"hero-visual-card card-float",style:{position:"relative",zIndex:1},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 60% 30%, rgba(0,102,255,0.12) 0%, transparent 65%)",borderRadius:28,pointerEvents:"none"}}),e.jsxs("div",{style:{borderRadius:18,overflow:"hidden",marginBottom:24,position:"relative"},children:[e.jsx("img",{src:be,alt:"Equipo tecnológico de Sinnexys brindando soporte",width:"460",height:"260",fetchPriority:"high",style:{width:"100%",height:260,objectFit:"cover",display:"block"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(6,14,26,0.6) 0%, transparent 60%)"}})]}),je.map(({color:t,label:s,sub:i})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 0",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:[e.jsx("div",{style:{width:40,height:40,borderRadius:12,flexShrink:0,background:`${t}22`,border:`1px solid ${t}44`,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:10,height:10,borderRadius:3,background:t}})}),e.jsxs("div",{children:[e.jsx("div",{style:{color:"#fff",fontWeight:600,fontSize:"0.88rem"},children:s}),e.jsx("div",{style:{color:"rgba(180,200,220,0.5)",fontSize:"0.75rem",marginTop:2},children:i})]})]},s))]}),e.jsx("div",{className:"hero-float-badge card-float-delay",style:{top:-20,left:-32,zIndex:10},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"linear-gradient(135deg, #0066FF, #00D9FF)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(N,{size:16,color:"#fff"})}),e.jsxs("div",{children:[e.jsx("div",{style:{color:"#fff",fontWeight:700,fontSize:"0.85rem"},children:"Diseño a tu medida"}),e.jsx("div",{style:{color:"rgba(180,200,220,0.5)",fontSize:"0.72rem"},children:"Confía en nosotros"})]})]})}),e.jsx("div",{className:"hero-float-badge",style:{bottom:-20,right:-32,zIndex:10},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("div",{className:"hero-glow-dot"}),e.jsxs("div",{children:[e.jsx("div",{style:{color:"#fff",fontWeight:700,fontSize:"0.85rem"},children:"Chat disponible 24/7"}),e.jsx("div",{style:{color:"rgba(180,200,220,0.5)",fontSize:"0.72rem"},children:"Sin interrupciones"})]})]})})]})}function ye(){const t=s=>{const i=document.getElementById(s);i&&i.scrollIntoView({behavior:"smooth"})};return e.jsxs("section",{style:{fontFamily:"'DM Sans', 'Sora', 'Inter', sans-serif",background:"linear-gradient(135deg, #060E1A 0%, #0A1929 50%, #071428 100%)",minHeight:"100vh",position:"relative",overflow:"hidden",display:"flex",alignItems:"center"},children:[e.jsx(fe,{}),e.jsx(he,{}),e.jsx("div",{style:{position:"relative",maxWidth:1280,margin:"0 auto",padding:"96px 24px",width:"100%"},children:e.jsxs("div",{className:"hero-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center"},children:[e.jsx(ge,{onScrollTo:t}),e.jsx(ve,{})]})})]})}function we(){const[t,s]=l.useState(!1);return e.jsx("a",{href:b,target:"_blank",rel:"noopener noreferrer","aria-label":"Contactar por WhatsApp",className:"fixed bottom-6 right-6 z-50 group",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:e.jsxs("div",{className:"flex items-center gap-3",children:[t&&e.jsx("div",{className:"bg-white text-[#0A1929] px-4 py-2 rounded-lg shadow-lg font-semibold whitespace-nowrap animate-slideIn",children:"¿Necesitas ayuda? Escríbenos"}),e.jsx("div",{className:"w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all animate-pulse hover:animate-none",children:e.jsx(U,{className:"w-8 h-8 text-white"})})]})})}function Ne(t="300px"){const s=l.useRef(null),[i,a]=l.useState(!1);return l.useEffect(()=>{const r=s.current;if(!r||i)return;if(typeof IntersectionObserver>"u"){a(!0);return}const o=new IntersectionObserver(([n])=>{n.isIntersecting&&(a(!0),o.disconnect())},{rootMargin:t,threshold:0});return o.observe(r),()=>o.disconnect()},[t,i]),{ref:s,isInView:i}}function x({children:t,fallback:s,minHeight:i=400}){const{ref:a,isInView:r}=Ne();return e.jsx("div",{ref:a,style:r?void 0:{minHeight:i},children:r&&e.jsx(l.Suspense,{fallback:s,children:t})})}const Se=f.lazy(()=>h(()=>import("./Services-CevcwTDn.js"),__vite__mapDeps([0,1,2]))),ke=f.lazy(()=>h(()=>import("./Process-1lENFN9P.js"),__vite__mapDeps([3,2,1]))),Fe=f.lazy(()=>h(()=>import("./Coverage-DsaTsqLM.js"),__vite__mapDeps([4,2,1]))),Ee=f.lazy(()=>h(()=>import("./About-abFwsoIw.js"),__vite__mapDeps([5,2,1]))),_e=f.lazy(()=>h(()=>import("./Testimonials-Bo6_ltfN.js"),__vite__mapDeps([6,2,1]))),Ie=f.lazy(()=>h(()=>import("./Contact-Ym4wZZqJ.js"),__vite__mapDeps([7,1,2]))),u=()=>e.jsx("div",{className:"w-full py-20 bg-gray-50 flex items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"}),e.jsx("p",{className:"text-gray-400 text-sm font-medium",children:"Cargando sección..."})]})});function Ce(){return e.jsxs("div",{className:"min-h-screen",children:[e.jsx(Q,{}),e.jsx(ye,{}),e.jsx(x,{fallback:e.jsx(u,{}),minHeight:900,children:e.jsx(Se,{})}),e.jsx(x,{fallback:e.jsx(u,{}),minHeight:500,children:e.jsx(ke,{})}),e.jsx(x,{fallback:e.jsx(u,{}),minHeight:700,children:e.jsx(Fe,{})}),e.jsx(x,{fallback:e.jsx(u,{}),minHeight:500,children:e.jsx(Ee,{})}),e.jsx(x,{fallback:e.jsx(u,{}),minHeight:500,children:e.jsx(_e,{})}),e.jsx(x,{fallback:e.jsx(u,{}),minHeight:700,children:e.jsx(Ie,{})}),e.jsx(re,{}),e.jsx(we,{}),e.jsx(ue,{})]})}z(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(Ce,{})}));export{Le as B,Re as C,De as P,b as W,h as _,ze as a,Te as b,Oe as c,ee as d,e as j};
