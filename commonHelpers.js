import{S as d,i as n}from"./assets/vendor-B07T6_gy.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const m=t=>` <li class="gallery-item">
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
  </li>`,p="https://pixabay.com/api/?",y=t=>{const l=new URLSearchParams({key:"45539852-e7385dbf9677b23660ec365b6",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}${l}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},c=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),i=document.querySelector(".loader"),f=new d(".js-gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt",overlayOpacity:1}),g=t=>{t.preventDefault();const l=c.elements.user_query.value.trim();if(l===""){n.warning({message:"Please enter a search query.",position:"bottomRight"});return}i.classList.remove("is-hidden"),y(l).then(r=>{if(i.classList.add("is-hidden"),!r.hits||r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),u.innerHTML="",c.reset();return}const o=r.hits.map(e=>m(e)).join("");u.innerHTML=o,f.refresh(),i.classList.add("is-hidden")}).catch(r=>{i.classList.add("is-hidden"),n.error({message:"An error occurred. Please try again later.",position:"bottomRight"}),console.log(r)})};c.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
