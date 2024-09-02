import{a as u,S as b,i as c}from"./assets/vendor-C7qeghNe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const f=s=>` <li class="gallery-item">
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
  </li>`;u.defaults.baseURL="https://pixabay.com/api/";const y=(s,t)=>{const a={params:{key:"45539852-e7385dbf9677b23660ec365b6",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return u.get("",a)},d=document.querySelector(".js-search-form"),o=document.querySelector(".js-gallery"),n=document.querySelector(".loader"),l=document.querySelector(".loader-btn");l.insertAdjacentElement("afterend",n);const L=new b(".js-gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt",overlayOpacity:1});let g=1,p="",m=0;const x=async s=>{try{if(s.preventDefault(),p=d.elements.user_query.value.trim(),p===""){c.warning({message:"Please enter a search query.",position:"bottomRight"});return}o.innerHTML="",n.classList.remove("is-hidden"),g=1;const t=await y(p,g),a=t.data;if(!a.hits||a.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),o.innerHTML="",d.reset(),n.classList.add("is-hidden"),l.classList.add("is-hidden");return}const i=a.hits.map(e=>f(e)).join("");o.innerHTML=i,L.refresh(),l.classList.remove("is-hidden"),d.reset(),m+=t.data.hits.length}catch(t){console.log(t),c.error({message:"An error occurred. Please try again later.",position:"bottomRight"})}finally{n.classList.add("is-hidden")}},v=async s=>{try{g++;const t=await y(p,g),a=t.data;if(!a.hits||a.hits.length===0){l.classList.add("is-hidden");return}const i=a.hits.map(r=>f(r)).join("");o.insertAdjacentHTML("beforeend",i),L.refresh();const{height:e}=o.firstElementChild.getBoundingClientRect();scrollBy({top:e*2,behavior:"smooth"}),m+=t.data.hits.length,m>=t.data.totalHits&&(c.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"24px",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconUrl:errorMessage,maxWidth:"385px",timeout:5e3}),n.classList.add("is-hidden"),l.classList.add("is-hidden"))}catch(t){console.log(t)}};d.addEventListener("submit",x);l.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
