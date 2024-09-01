import{a as y,S as b,i as n}from"./assets/vendor-C7qeghNe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const f=s=>` <li class="gallery-item">
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
  </li>`;y.defaults.baseURL="https://pixabay.com/api/";const h=(s,t)=>{const a={params:{key:"45539852-e7385dbf9677b23660ec365b6",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return y.get("",a)},c=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery"),l=document.querySelector(".loader"),g=document.querySelector(".loader-btn");g.insertAdjacentElement("afterend",l);const L=new b(".js-gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt",overlayOpacity:1});let p=1,d="",u=0;const x=async s=>{try{if(s.preventDefault(),d=c.elements.user_query.value.trim(),d===""){n.warning({message:"Please enter a search query.",position:"bottomRight"});return}i.innerHTML="",l.classList.remove("is-hidden"),p=1;const a=(await h(d,p)).data;if(!a.hits||a.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),i.innerHTML="",c.reset(),l.classList.add("is-hidden");return}const o=a.hits.map(e=>f(e)).join("");i.innerHTML=o,L.refresh(),g.classList.remove("is-hidden"),c.reset()}catch(t){console.log(t),n.error({message:"An error occurred. Please try again later.",position:"bottomRight"})}finally{l.classList.add("is-hidden")}},v=async s=>{try{p++;const t=await h(d,p),o=t.data.hits.map(r=>f(r)).join("");i.insertAdjacentHTML("beforeend",o),L.refresh();const{height:e}=i.firstElementChild.getBoundingClientRect();scrollBy({top:e*2,behavior:"smooth"}),u+=t.data.hits.length,u>=t.data.totalHits&&(n.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"24px",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconUrl:errorMessage,maxWidth:"385px",timeout:5e3}),l.classList.add("is-hidden"),g.classList.add("is-hidden"))}catch(t){console.log(t)}};c.addEventListener("submit",x);g.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
