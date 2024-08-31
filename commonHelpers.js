import{a as y,S as b,i as l}from"./assets/vendor-C7qeghNe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const f=s=>` <li class="gallery-item">
    <a class="gallery-link" href="${s.largeImageURL}">
      <img class="gallery-img"
      src="${s.webformatURL}"
      alt="${s.tags}"
      loading="lazy" />
    </a>
    <ul class="gallery-info">
      <li class="gallery-info-item">
        <p class="gallery-info-title">Likes</p>
        <p class="gallery-info-text">${s.likes}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Views</p>
        <p class="gallery-info-text">${s.views}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Comments</p>
        <p class="gallery-info-text">${s.comments}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Downloads</p>
        <p class="gallery-info-text">${s.downloads}</p>
      </li>
    </ul>
  </li>`;y.defaults.baseURL="https://pixabay.com/api/";const h=(s,t)=>{const a={params:{key:"45539852-e7385dbf9677b23660ec365b6",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return y.get("",a)},p=document.querySelector(".js-search-form"),g=document.querySelector(".js-gallery"),i=document.querySelector(".loader"),m=document.querySelector(".loader-btn"),L=new b(".js-gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt",overlayOpacity:1});let c=1,n="",u=0;const x=async s=>{try{if(s.preventDefault(),n=p.elements.user_query.value.trim(),n===""){l.warning({message:"Please enter a search query.",position:"bottomRight"});return}i.classList.remove("is-hidden"),c=1;const a=(await h(n,c)).data;if(!a.hits||a.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),g.innerHTML="",p.reset(),i.classList.add("is-hidden");return}const o=a.hits.map(e=>f(e)).join("");g.innerHTML=o,L.refresh(),m.classList.remove("is-hidden")}catch(t){console.log(t),l.error({message:"An error occurred. Please try again later.",position:"bottomRight"})}finally{i.classList.add("is-hidden")}},v=async s=>{try{c++;const t=await h(n,c),o=t.data.hits.map(e=>f(e)).join("");g.insertAdjacentHTML("beforeend",o),L.refresh(),u+=t.data.hits.length,u>=t.data.totalHits&&(l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"24px",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconUrl:errorMessage,maxWidth:"385px",timeout:5e3}),i.classList.add("is-hidden"),m.classList.add("is-hidden"))}catch(t){console.log(t)}};p.addEventListener("submit",x);m.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
