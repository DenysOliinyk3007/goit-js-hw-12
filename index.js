import{S as q,a as S,i as l}from"./assets/vendor-MjawMu3A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const f=document.querySelector(".loader"),g=document.querySelector(".gallery"),y=document.querySelector(".show-more-btn");let w=new q(".gallery a",{captionsData:"alt",captionDelay:250,preloading:!1});function L(){f.classList.remove("hidden")}function n(){f.classList.add("hidden")}function h(){g.innerHTML=""}function R(r){const t=r.map(e=>`<li class="gallery-item">
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
    </li>`).join("");g.innerHTML=t,w.refresh()}function C(r){const t=r.map(e=>`<li class="gallery-item">
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
    </li>`).join("");g.insertAdjacentHTML("beforeend",t),w.refresh()}function o(){y.classList.add("hidden")}function b(){y.classList.remove("hidden")}function T(){return document.querySelector(".gallery-item").getBoundingClientRect().height+2*24}const H="53125865-ed9f58673896f3ad0b9dfa3df";async function v(r,t,e){let c=new URLSearchParams({key:H,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:e,page:t});const s=await S({method:"get",url:`https://pixabay.com/api/?${c}`});return{array:s.data.hits,totalHits:s.data.totalHits}}const I=document.querySelector(".submit-btn"),M=document.querySelector(".form-input"),P=document.querySelector(".show-more-btn");let i=1,u=15,$="",m=0,p=[];n();o();I.addEventListener("click",async r=>{r.preventDefault(),o();const t=M.value.trim();if(!t){h(),o(),l.error({message:"Please enter a query",position:"topRight"});return}L();try{$=t,i=1,p=[],h();const e=await v(t,i,u);if(e.array.length===0){n(),o(),l.error({message:"No images were found. Try another query.",position:"topRight"});return}n(),p=e.array,R(e.array),m=e.totalHits,i+=1,i*u<=m?b():(l.error({message:"You have reached the limit.",position:"topRight"}),o())}catch(e){n(),console.log(e),l.error({message:"Something went wrong. Try again.",position:"topRight"})}});P.addEventListener("click",async r=>{r.preventDefault(),o(),L();try{const t=await v($,i,u);p=p.concat(t.array),n(),C(t.array),setTimeout(()=>{let e=T();window.scrollBy({top:e*2,behavior:"smooth"})},100),i+=1,i*u>m?(o(),l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch(t){console.log(t),n(),o(),l.error({message:"Something went wrong. Try again.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
