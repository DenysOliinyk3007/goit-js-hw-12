import{S as q,a as S,i as a}from"./assets/vendor-MjawMu3A.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function d(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=d(t);fetch(t.href,o)}})();const h=document.querySelector(".loader"),y=document.querySelector(".gallery"),f=document.querySelector(".show-more-btn");let C=new q(".gallery a",{captionsData:"alt",captionDelay:250,preloading:!1});function w(){h.classList.remove("hidden")}function c(){h.classList.add("hidden")}function p(){y.innerHTML=""}function L(r){y.innerHTML=r.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
          width="360"
          height="200"
        />
      </a>
      <div class="card">
        <ul>
          <li>
            <p class="title">Likes</p>
            <p class="subtitle">${e.likes}</p>
          </li>
          <li>
            <p class="title">Views</p>
            <p class="subtitle">${e.views}</p>
          </li>
          <li>
            <p class="title">Comments</p>
            <p class="subtitle">${e.comments}</p>
          </li>
          <li>
            <p class="title">Downloads</p>
            <p class="subtitle">${e.downloads}</p>
          </li>
        </ul>
      </div>
    </li>`).join(""),C.refresh()}function i(){f.classList.add("hidden")}function R(){f.classList.remove("hidden")}function $(){return document.querySelector(".gallery-item").getBoundingClientRect().height+2*24}const P="53125865-ed9f58673896f3ad0b9dfa3df";async function b(r,e,d){let l=new URLSearchParams({key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:e});const t=await S({method:"get",url:`https://pixabay.com/api/?${l}`});return{array:t.data.hits,totalHits:t.data.totalHits}}const B=document.querySelector(".submit-btn"),H=document.querySelector(".form-input"),I=document.querySelector(".show-more-btn");let s=1,u=15,v="",g=0,n=[];c();i();B.addEventListener("click",async()=>{const r=H.value.trim();if(!r){p(),i(),a.error({message:"Please enter a query",position:"topRight"});return}w();try{v=r,s=1,n=[],p();const e=await b(r,s,u);if(e.array.length===0){c(),i(),a.error({message:"No images were found. Try another query.",position:"topRight"});return}c(),n=e.array,L(e.array),g=e.totalHits,s+=1,s*u<=g?R():(a.error({message:"You have reached the limit.",position:"topRight"}),i())}catch(e){console.log(e),a.error({message:"Something went wrong. Try again.",position:"topRight"})}});I.addEventListener("click",async()=>{w();try{const r=await b(v,s,u);n=n.concat(r.array),c(),L(n),setTimeout(()=>{let e=$();window.scrollBy({top:e*2,behavior:"smooth"})},100),s+=1,s*u>g&&(i(),a.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(r){console.log(r),a.error({message:"Something went wrong. Try again.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
