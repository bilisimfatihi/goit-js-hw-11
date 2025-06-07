import{a as m,S as f,i as c}from"./assets/vendor-DT131awv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="50720875-9e46c15e3f43f509a571f7064",g="https://pixabay.com/api/";async function h(r){const o=`${g}?key=${p}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=20`;try{return await m.get(o)}catch(i){throw new Error(i.message)}}const y=document.querySelector(".gallery");let v=new f(".image-li a",{captionDelay:250,captionsData:"alt"});function b(r){const o=r.map(({largeImageURL:i,webformatURL:n,tags:e,likes:t,views:s,comments:d,downloads:u})=>`<li class="image-li">
           <a href="${i}"> <img class="li-img" src="${n}" alt="${e.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${t}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${s}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${d}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${u}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");y.insertAdjacentHTML("beforeend",o),v.refresh()}function L(){const r=document.querySelector(".gallery");r&&(r.innerHTML="")}function w(){var r;(r=document.querySelector(".loading"))==null||r.classList.remove("hidden")}function a(){var r;(r=document.querySelector(".loading"))==null||r.classList.add("hidden")}const l=document.querySelector(".form"),S=document.querySelector('input[name="keywords"]');l.addEventListener("submit",r=>{r.preventDefault();const o=S.value.trim();if(L(),w(),!o)return a(),c.error({title:"Error",message:"Please enter a search term.",position:"topRight"});h(o).then(i=>{if(i.data.hits.length<=0){a(),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.reset();return}b(i.data.hits),a(),l.reset()}).catch(i=>{a(),c.error({title:"Error",message:i.message,position:"topRight"})})});
//# sourceMappingURL=index.js.map
