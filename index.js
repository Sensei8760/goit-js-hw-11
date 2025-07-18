import{a as f,S as d,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="51353712-027e10f56e46728826cff41a4",m="https://pixabay.com/api/";async function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(m,{params:o})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new d(".gallery a");function h(s){const o=s.map(t=>`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
          </a>
          <div class="info">
            <p>👍 ${t.likes}</p>
            <p>👁 ${t.views}</p>
            <p>💬 ${t.comments}</p>
            <p>⬇️ ${t.downloads}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){c.innerHTML=""}function b(){l.classList.add("is-visible")}function v(){l.classList.remove("is-visible")}const u=document.querySelector(".form"),w=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const o=w.value.trim();if(!o){n.warning({message:"Please enter a search query!",position:"topRight"});return}L(),b();try{const t=await y(o);if(t.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits)}catch{n.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
