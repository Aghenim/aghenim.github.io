if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>a(e,r),n={module:{uri:r},exports:s,require:f};i[r]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(c(...e),s)))}}define(["./workbox-f16d130a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"f28205d2c796a17bcf4b1ae14ed6e54c"},{url:"archives/2024/01/index.html",revision:"de3b41945e01e8a98f2083a5e49e378b"},{url:"archives/2024/index.html",revision:"64141d8bd0fd4c3f13592c30ae8d6fa9"},{url:"archives/index.html",revision:"a59a23ebefa7538ac6e1c142bd81532a"},{url:"css/index.css",revision:"89b5560305854a35505218a09f2f5b5a"},{url:"css/loading-bar.css",revision:"f83646c6e3db46a7fc7f6fa0819871bb"},{url:"css/self.css",revision:"ff073bb20610a595e0405ebcd61a8366"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"42c6c21e5cf1053da0982d903ec5097c"},{url:"img/avatar.jpg",revision:"61654f0a37311c3a9d9c27e08ddf0c1b"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.jpg",revision:"39e7e165c001ca388cb13c0b6082d880"},{url:"img/pwa/144.png",revision:"a185d0fd58edb94a8fd248f9b16b3a69"},{url:"img/pwa/16.png",revision:"1ac4e7125954843e5be7fd0644ffb2e0"},{url:"img/pwa/32.png",revision:"f50d5afe9edb42e816e9837025b60137"},{url:"img/pwa/logo.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"img/wechat.jpg",revision:"d6e810dc81ed26cecd073058b8d94d88"},{url:"index.html",revision:"6cb8b9870332bd2e79aa60fb03ab316e"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"posts/4a17b156/index.html",revision:"0e72507c4ddb5b9a2e884b83249b4fc4"},{url:"zh/404.html",revision:"dac13e5eae80440a0fac8a230b9365f7"},{url:"zh/archives/2024/01/index.html",revision:"ff60da91a2239770210b97efe0159de7"},{url:"zh/archives/2024/index.html",revision:"3b0ed385adc07ba43e871d5d55f19c69"},{url:"zh/archives/index.html",revision:"383c94be892f52d5fcc078e69a58f787"},{url:"zh/css/index.css",revision:"89b5560305854a35505218a09f2f5b5a"},{url:"zh/css/loading-bar.css",revision:"f83646c6e3db46a7fc7f6fa0819871bb"},{url:"zh/css/self.css",revision:"3c2b99f81eecacb770e6b60dd387ddb7"},{url:"zh/css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"zh/img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"zh/img/alipay.jpg",revision:"42c6c21e5cf1053da0982d903ec5097c"},{url:"zh/img/avatar.jpg",revision:"61654f0a37311c3a9d9c27e08ddf0c1b"},{url:"zh/img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"zh/img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"zh/img/index.jpg",revision:"39e7e165c001ca388cb13c0b6082d880"},{url:"zh/img/pwa/144.png",revision:"a185d0fd58edb94a8fd248f9b16b3a69"},{url:"zh/img/pwa/16.png",revision:"1ac4e7125954843e5be7fd0644ffb2e0"},{url:"zh/img/pwa/32.png",revision:"f50d5afe9edb42e816e9837025b60137"},{url:"zh/img/pwa/logo.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"zh/img/wechat.jpg",revision:"d6e810dc81ed26cecd073058b8d94d88"},{url:"zh/index.html",revision:"068df6d29711c828cf147628e251e447"},{url:"zh/js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"zh/js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"zh/js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"zh/js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"zh/js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"zh/posts/4a17b156/index.html",revision:"8d21d151a4e5c83f4092db60edd3ed65"}],{})}));
//# sourceMappingURL=service-worker.js.map
