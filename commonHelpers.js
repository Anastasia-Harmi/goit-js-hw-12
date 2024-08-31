import{a as d,S as u,i}from"./assets/vendor-C7qeghNe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y=r=>` <li class="gallery-item">
    <a class="gallery-link" href="${r.largeImageURL}">
      <img class="gallery-img"
      src="${r.webformatURL}"
      alt="${r.tags}"
      loading="lazy" />
    </a>
    <ul class="gallery-info">
      <li class="gallery-info-item">
        <p class="gallery-info-title">Likes</p>
        <p class="gallery-info-text">${r.likes}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Views</p>
        <p class="gallery-info-text">${r.views}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Comments</p>
        <p class="gallery-info-text">${r.comments}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Downloads</p>
        <p class="gallery-info-text">${r.downloads}</p>
      </li>
    </ul>
  </li>`;d.defaults.baseURL="https://pixabay.com/api/";const m=(r,s)=>{const a={params:{key:"45539852-e7385dbf9677b23660ec365b6",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}};return d.get("",a)},c=document.querySelector(".js-search-form"),p=document.querySelector(".js-gallery"),n=document.querySelector(".loader"),g=new u(".js-gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt",overlayOpacity:1}),f=async r=>{r.preventDefault();const s=c.elements.user_query.value.trim();if(s===""){i.warning({message:"Please enter a search query.",position:"bottomRight"});return}try{n.classList.remove("is-hidden");const l=(await m(s,1)).data;if(!l.hits||l.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),p.innerHTML="",c.reset(),n.classList.add("is-hidden");return}const e=l.hits.map(t=>y(t)).join("");p.innerHTML=e,g.refresh()}catch(a){console.log(a),i.error({message:"An error occurred. Please try again later.",position:"bottomRight"})}finally{n.classList.add("is-hidden")}};c.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
