if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const b=e=>a(e,r),n={module:{uri:r},exports:s,require:b};i[r]=Promise.all(c.map((e=>n[e]||b(e)))).then((e=>(d(...e),s)))}}define(["./workbox-f16d130a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"3942e2895babe4570206c30293e0dd57"},{url:"archives/2024/01/index.html",revision:"fe73a5c8eb3f6e31951136ba99a4b311"},{url:"archives/2024/index.html",revision:"9c755c7baa700303189a662aced42add"},{url:"archives/index.html",revision:"4c325d839096c79594cae4e8e51501ad"},{url:"categories/index.html",revision:"7d5198d2e2f3f39c8f51d127cf690078"},{url:"categories/Web/index.html",revision:"97fcfbbe6b041fbabee26c0f35cead72"},{url:"css/index.css",revision:"541c05c2c2851134b8cc6744888e69a6"},{url:"css/loading-bar.css",revision:"f83646c6e3db46a7fc7f6fa0819871bb"},{url:"css/self.css",revision:"a40833de7e5582a45b80fae554488a8f"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"42c6c21e5cf1053da0982d903ec5097c"},{url:"img/archive.jpg",revision:"239bb72ce28d72103b0ab6c4fb5dfb44"},{url:"img/avatar.png",revision:"296bd8c753556aea7aa7030ed09b876e"},{url:"img/category.jpg",revision:"9c554c159aee1d7c96ce493ff12b2dea"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.jpg",revision:"39e7e165c001ca388cb13c0b6082d880"},{url:"img/logo.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"img/pwa/logo.png",revision:"296bd8c753556aea7aa7030ed09b876e"},{url:"img/tag.jpg",revision:"2dffdc774cb75394b687f550b7be7e65"},{url:"img/wechat.jpg",revision:"d6e810dc81ed26cecd073058b8d94d88"},{url:"index.html",revision:"b89ba4c5042e3529618b546747d8d0eb"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"logo/aghenim.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"posts/4bbb0782/index.html",revision:"7dab99014bef0d7630d8e65a83f93c0e"},{url:"posts/6f34bf22/index.html",revision:"4998baab26118dc6c42b41fcad45a123"},{url:"posts/b1622bb3/index.html",revision:"d4b56a94094232795e18078a8302338c"},{url:"posts/c9954876/index.html",revision:"6bd3f128e3ce82da95cea8d8c9b0c10b"},{url:"posts/c9fe5e28/index.html",revision:"cd4ff83df7474599e6461b4fb73bdf95"},{url:"tags/Blog/index.html",revision:"0f59f9f6626c54367c945dae0397dcfb"},{url:"tags/Butterfly/index.html",revision:"c64c079148ffe644a14acb5ce21ed307"},{url:"tags/Hexo/index.html",revision:"3b01509f81454d874775120e431b5094"},{url:"tags/index.html",revision:"d69e13bc548a682554d1114131fa61b6"},{url:"tags/PWA/index.html",revision:"dd8ca760d186ecd651ae9dcd719d480b"},{url:"tags/Theme/index.html",revision:"d128d27beec181a15348cd7aaee2a62d"},{url:"tags/Web-App/index.html",revision:"a4654ed89e1681dee80911b00a5cf2e8"},{url:"tags/Web/index.html",revision:"5a6f1a37a14a97743cac0166923b2cf6"},{url:"zh/404.html",revision:"4fea7dde0ecd93ab951994fc6333a6f3"},{url:"zh/archives/2024/01/index.html",revision:"bf83eb6857944eac4e8cc8bb35052e7e"},{url:"zh/archives/2024/index.html",revision:"44be4a5a678d016b9896afbd11e6317f"},{url:"zh/archives/index.html",revision:"33a53ae2214245999c81de12bd8599dd"},{url:"zh/categories/index.html",revision:"024f3fc7ae4fea94d95b820019ac4ede"},{url:"zh/categories/Web/index.html",revision:"2856c476aaac303bd0d1eadb301cee4f"},{url:"zh/css/index.css",revision:"541c05c2c2851134b8cc6744888e69a6"},{url:"zh/css/loading-bar.css",revision:"f83646c6e3db46a7fc7f6fa0819871bb"},{url:"zh/css/self.css",revision:"53d56a6ba0354e71c741b8e0f836fc68"},{url:"zh/css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"zh/img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"zh/img/alipay.jpg",revision:"42c6c21e5cf1053da0982d903ec5097c"},{url:"zh/img/archive.jpg",revision:"239bb72ce28d72103b0ab6c4fb5dfb44"},{url:"zh/img/avatar.png",revision:"296bd8c753556aea7aa7030ed09b876e"},{url:"zh/img/category.jpg",revision:"9c554c159aee1d7c96ce493ff12b2dea"},{url:"zh/img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"zh/img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"zh/img/index.jpg",revision:"39e7e165c001ca388cb13c0b6082d880"},{url:"zh/img/logo.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"zh/img/pwa/logo.png",revision:"296bd8c753556aea7aa7030ed09b876e"},{url:"zh/img/tag.jpg",revision:"2dffdc774cb75394b687f550b7be7e65"},{url:"zh/img/wechat.jpg",revision:"d6e810dc81ed26cecd073058b8d94d88"},{url:"zh/index.html",revision:"7d78f40cbc1b43b9c751fa15e475bbc2"},{url:"zh/js/inject.js",revision:"b73d8dda62ef73800337cab3f6dca9f2"},{url:"zh/js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"zh/js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"zh/js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"zh/js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"zh/js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"zh/logo/aghenim.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"zh/posts/1fd3c959/index.html",revision:"e90bbbb5d0fb40711553ac300a3ba5a9"},{url:"zh/posts/4b4dbb3/index.html",revision:"25720bcc66914b806472eac593ee9652"},{url:"zh/posts/4bbb0782/index.html",revision:"c07bdae501a3eea8eb7b9f600000e1ec"},{url:"zh/posts/8baa021c/index.html",revision:"6dd988e1da6fbeb9cd8ce9b5830419f0"},{url:"zh/posts/b1622bb3/index.html",revision:"4df606b20e8fa6a6bd19140293798927"},{url:"zh/tags/Blog/index.html",revision:"12321f433e909a74c3732fe3fd520ed1"},{url:"zh/tags/Butterfly/index.html",revision:"07693e73dd4113f87629160a176e8aae"},{url:"zh/tags/Hexo/index.html",revision:"923b8d26dc501c10011c544c1c15b291"},{url:"zh/tags/index.html",revision:"e5dadf4188cde76f6ba7745b74815dff"},{url:"zh/tags/PWA/index.html",revision:"24f22e780acf843c8d3139583ab67e9e"},{url:"zh/tags/Theme/index.html",revision:"cab57303049befbbf86caebd6ce26c11"},{url:"zh/tags/Web-App/index.html",revision:"73937e633040ca83ef153c3dcb2fcbee"},{url:"zh/tags/Web/index.html",revision:"256443243ab311d7d43ebd6e3e4c3d2c"}],{})}));
//# sourceMappingURL=service-worker.js.map
