import{S as u,i as p}from"./assets/vendor-B07T6_gy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const y=t=>` <li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img class="gallery-img"
      src="${t.webformatURL}"
      alt="${t.tags}"
      loading="lazy" />
    </a>
    <ul class="gallery-info">
      <li class="gallery-info-item">
        <p class="gallery-info-title">Likes</p>
        <p class="gallery-info-text">${t.likes}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Views</p>
        <p class="gallery-info-text">${t.views}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Comments</p>
        <p class="gallery-info-text">${t.comments}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Downloads</p>
        <p class="gallery-info-text">${t.downloads}</p>
      </li>
    </ul>
  </li>`,m="https://pixabay.com/api/?",f=t=>{const s=new URLSearchParams({key:"45539852-e7385dbf9677b23660ec365b6",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}${s}`).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})},i=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),c=document.querySelector(".loader"),d=new u(".js-gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt",overlayOpacity:1}),g=t=>{t.preventDefault();const s=i.elements.user_query.value.trim();c.classList.remove("is-hidden"),f(s).then(l=>{if(l.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"toRight"}),n.innerHTML="",i.reset();return}const o=l.hits.map(e=>y(e)).join("");n.innerHTML=o,d.refresh(),c.classList.add("is-hidden")}).catch(l=>{console.log(l)})};i.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
