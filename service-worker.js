if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>a(e,r),n={module:{uri:r},exports:s,require:f};i[r]=Promise.all(c.map((e=>n[e]||f(e)))).then((e=>(d(...e),s)))}}define(["./workbox-f16d130a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"19084fa15dd1b4a846e8fce639c34432"},{url:"archives/2024/01/index.html",revision:"17e41c1bd810107bc23ca27ac276d04d"},{url:"archives/2024/index.html",revision:"39f4271a2d7028e5b8fbeda3f4abfa1b"},{url:"archives/index.html",revision:"ae6b5255e91b711c1c10770206951f4d"},{url:"css/index.css",revision:"89b5560305854a35505218a09f2f5b5a"},{url:"css/loading-bar.css",revision:"f83646c6e3db46a7fc7f6fa0819871bb"},{url:"css/self.css",revision:"593248bd4ff55c6f480b71720e10767b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"42c6c21e5cf1053da0982d903ec5097c"},{url:"img/avatar.jpg",revision:"61654f0a37311c3a9d9c27e08ddf0c1b"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.jpg",revision:"39e7e165c001ca388cb13c0b6082d880"},{url:"img/pwa/144.png",revision:"a185d0fd58edb94a8fd248f9b16b3a69"},{url:"img/pwa/16.png",revision:"1ac4e7125954843e5be7fd0644ffb2e0"},{url:"img/pwa/32.png",revision:"f50d5afe9edb42e816e9837025b60137"},{url:"img/pwa/logo.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"img/wechat.jpg",revision:"d6e810dc81ed26cecd073058b8d94d88"},{url:"index.html",revision:"2a752203315efacbbd1cdcfadb11cacb"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"posts/4a17b156/index.html",revision:"0ccbcf2f7dacf53c4708731a83c30b9d"},{url:"zh/404.html",revision:"5c91cc4317bca2c3b0535ee1e5d99b04"},{url:"zh/archives/2024/01/index.html",revision:"98d5a526305e4ec5cbb76aead063318d"},{url:"zh/archives/2024/index.html",revision:"d4213c9ec7a4c41af17704b86e1435df"},{url:"zh/archives/index.html",revision:"e65a7c8119cd54ea9bb258d08d4c4fa8"},{url:"zh/css/index.css",revision:"89b5560305854a35505218a09f2f5b5a"},{url:"zh/css/loading-bar.css",revision:"f83646c6e3db46a7fc7f6fa0819871bb"},{url:"zh/css/self.css",revision:"593248bd4ff55c6f480b71720e10767b"},{url:"zh/css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"zh/img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"zh/img/alipay.jpg",revision:"42c6c21e5cf1053da0982d903ec5097c"},{url:"zh/img/avatar.jpg",revision:"61654f0a37311c3a9d9c27e08ddf0c1b"},{url:"zh/img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"zh/img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"zh/img/index.jpg",revision:"39e7e165c001ca388cb13c0b6082d880"},{url:"zh/img/pwa/144.png",revision:"a185d0fd58edb94a8fd248f9b16b3a69"},{url:"zh/img/pwa/16.png",revision:"1ac4e7125954843e5be7fd0644ffb2e0"},{url:"zh/img/pwa/32.png",revision:"f50d5afe9edb42e816e9837025b60137"},{url:"zh/img/pwa/logo.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"zh/img/wechat.jpg",revision:"d6e810dc81ed26cecd073058b8d94d88"},{url:"zh/index.html",revision:"7ee67be4e48216ad2770383c1ef690ab"},{url:"zh/js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"zh/js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"zh/js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"zh/js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"zh/js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"zh/posts/4a17b156/index.html",revision:"551f52eaa69edc55e8c2ea0cb400ce6d"}],{})}));
//# sourceMappingURL=service-worker.js.map
