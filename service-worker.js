if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const b=e=>a(e,r),f={module:{uri:r},exports:s,require:b};i[r]=Promise.all(c.map((e=>f[e]||b(e)))).then((e=>(d(...e),s)))}}define(["./workbox-f16d130a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"6fc5c60d823d9d6a7763b588060101e3"},{url:"archives/2024/01/index.html",revision:"6feff3c97a48de7857c56ca12fc02fea"},{url:"archives/2024/index.html",revision:"e505c8aece4fff2bb9706a8736b0d661"},{url:"archives/index.html",revision:"e3a61f31b1c3f608e5433e54b57b530a"},{url:"categories/DevOps/index.html",revision:"04c336afcd9714276a769b00e6ae8284"},{url:"categories/index.html",revision:"e72d2bb69e687b1406881fcf1653083a"},{url:"categories/Web/index.html",revision:"99a839630cf87518a2a4cb4ecd62741f"},{url:"css/index.css",revision:"541c05c2c2851134b8cc6744888e69a6"},{url:"css/loading-bar.css",revision:"f83646c6e3db46a7fc7f6fa0819871bb"},{url:"css/self.css",revision:"a40833de7e5582a45b80fae554488a8f"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"42c6c21e5cf1053da0982d903ec5097c"},{url:"img/archive.jpg",revision:"239bb72ce28d72103b0ab6c4fb5dfb44"},{url:"img/avatar.png",revision:"296bd8c753556aea7aa7030ed09b876e"},{url:"img/category.jpg",revision:"9c554c159aee1d7c96ce493ff12b2dea"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.jpg",revision:"39e7e165c001ca388cb13c0b6082d880"},{url:"img/logo.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"img/pwa/logo.png",revision:"296bd8c753556aea7aa7030ed09b876e"},{url:"img/tag.jpg",revision:"2dffdc774cb75394b687f550b7be7e65"},{url:"img/wechat.jpg",revision:"d6e810dc81ed26cecd073058b8d94d88"},{url:"index.html",revision:"7444e632b4b8588c9673fed095029d62"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"logo/aghenim.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"posts/4bbb0782/index.html",revision:"aa1080726932504ef455efe396a12481"},{url:"posts/6f34bf22/index.html",revision:"48689680ced6664862c5781f00bd6618"},{url:"posts/b1622bb3/index.html",revision:"909f8965c7d00d00b42ffe0eb9715151"},{url:"posts/c9954876/index.html",revision:"a501c19767867602c2343bf3f6f946b9"},{url:"posts/c9fe5e28/index.html",revision:"8a4e05fd1419061db62a86b908b312fc"},{url:"posts/dd126a4b/index.html",revision:"68849ebd60035a62a92f41a6bd40fa69"},{url:"tags/Blog/index.html",revision:"505f373bd2c9a60337137a8790e9e35a"},{url:"tags/Butterfly/index.html",revision:"727c887e3007b7373361854f8c706845"},{url:"tags/DevOps/index.html",revision:"692eac4526b6fc5d7831ba024b37324b"},{url:"tags/Frp/index.html",revision:"9619f8978715cd9ebd1d95ba0c658a63"},{url:"tags/Hexo/index.html",revision:"9c857a7ae1498bf49eed8b4c4de6ed95"},{url:"tags/index.html",revision:"ac7e27688580e77e344e844010c577b5"},{url:"tags/Network/index.html",revision:"da3676f93758f54d38cf9fac62015ea2"},{url:"tags/PWA/index.html",revision:"7000deae1be662a6fc8de42c84231ab2"},{url:"tags/Theme/index.html",revision:"6fcdc4df9c28bf2479ee81da674e972d"},{url:"tags/Web-App/index.html",revision:"e7c8a2323a880fc4c33e5f849a4725cc"},{url:"tags/Web/index.html",revision:"a273dd9f2cbcd03bccde549ececbcb19"},{url:"zh/404.html",revision:"028a8f8d3e46b6b256dc6f12f345c480"},{url:"zh/archives/2024/01/index.html",revision:"a7dc17b5456d956982f95ef9cd93de67"},{url:"zh/archives/2024/index.html",revision:"2fe4b6e7c545047740eb54ecc91e9713"},{url:"zh/archives/index.html",revision:"4c970fb14fba46276dc5d93d1a6248f9"},{url:"zh/categories/DevOps/index.html",revision:"66bc1edc36197c86117d22f456c5729c"},{url:"zh/categories/index.html",revision:"04527cfe7f80ab9eba97054976ca8cd2"},{url:"zh/categories/Web/index.html",revision:"330e61a99c493978c1e88a17dfe3e117"},{url:"zh/css/index.css",revision:"541c05c2c2851134b8cc6744888e69a6"},{url:"zh/css/loading-bar.css",revision:"f83646c6e3db46a7fc7f6fa0819871bb"},{url:"zh/css/self.css",revision:"53d56a6ba0354e71c741b8e0f836fc68"},{url:"zh/css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"zh/img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"zh/img/alipay.jpg",revision:"42c6c21e5cf1053da0982d903ec5097c"},{url:"zh/img/archive.jpg",revision:"239bb72ce28d72103b0ab6c4fb5dfb44"},{url:"zh/img/avatar.png",revision:"296bd8c753556aea7aa7030ed09b876e"},{url:"zh/img/category.jpg",revision:"9c554c159aee1d7c96ce493ff12b2dea"},{url:"zh/img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"zh/img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"zh/img/index.jpg",revision:"39e7e165c001ca388cb13c0b6082d880"},{url:"zh/img/logo.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"zh/img/pwa/logo.png",revision:"296bd8c753556aea7aa7030ed09b876e"},{url:"zh/img/tag.jpg",revision:"2dffdc774cb75394b687f550b7be7e65"},{url:"zh/img/wechat.jpg",revision:"d6e810dc81ed26cecd073058b8d94d88"},{url:"zh/index.html",revision:"a4eeb0de4eb13f99922bd22bb5d0b207"},{url:"zh/js/inject.js",revision:"b73d8dda62ef73800337cab3f6dca9f2"},{url:"zh/js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"zh/js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"zh/js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"zh/js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"zh/js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"zh/logo/aghenim.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"zh/posts/1fd3c959/index.html",revision:"ddea55fecd69bdc24d5bc69362fee7d4"},{url:"zh/posts/4b4dbb3/index.html",revision:"0fb1de8c69257f91a1562aa0c0cbab2d"},{url:"zh/posts/4bbb0782/index.html",revision:"bf396764871ce9b94812fe99ebb35c98"},{url:"zh/posts/8baa021c/index.html",revision:"a43c73f1475e1ce98d9304a5a822441b"},{url:"zh/posts/b1622bb3/index.html",revision:"eebf5972f086a5a6a128a69fdf1421d4"},{url:"zh/posts/c7190df0/index.html",revision:"50c6dab271994d1e9b7b258fdbbb8daa"},{url:"zh/tags/Blog/index.html",revision:"967af1fc27819b2961a17a779a12940a"},{url:"zh/tags/Butterfly/index.html",revision:"ed43d028d0464e845c711f0532dffbec"},{url:"zh/tags/DevOps/index.html",revision:"28a2a584e3131112bc4ca6912e0a65ca"},{url:"zh/tags/Frp/index.html",revision:"bd67873976480585088e297db3b78ce1"},{url:"zh/tags/Hexo/index.html",revision:"a083bdc3d7006241c2bfa9e757a0e9fd"},{url:"zh/tags/index.html",revision:"83b6158743c9fb8a0636b9d24722bd05"},{url:"zh/tags/Network/index.html",revision:"c321f122a0d81d25473dfadf4d6dfda0"},{url:"zh/tags/PWA/index.html",revision:"c072d341f7fc11bbbf3ac991d630ee8f"},{url:"zh/tags/Theme/index.html",revision:"0cf0d71fce71a3394ff7a0024a053f65"},{url:"zh/tags/Web-App/index.html",revision:"44aa5a0f6aece5b78f338dcf4a2dc975"},{url:"zh/tags/Web/index.html",revision:"7bb0cbfda7260b5406b71b31009d48be"}],{})}));
//# sourceMappingURL=service-worker.js.map
