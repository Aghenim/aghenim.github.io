if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const s=e=>d(e,c),b={module:{uri:c},exports:n,require:s};i[c]=Promise.all(a.map((e=>b[e]||s(e)))).then((e=>(r(...e),n)))}}define(["./workbox-f16d130a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"ed88b1214babed6a00da3c8c51d3c07f"},{url:"archives/2024/01/index.html",revision:"cddea2e6291c7285b5089d9990a4c2ea"},{url:"archives/2024/04/index.html",revision:"6d504b0f6a10336dfc8782ad99cdf4fd"},{url:"archives/2024/index.html",revision:"7990892aae88c8143784aade77195969"},{url:"archives/index.html",revision:"ce78c904de5cce22a0c62656aeaa78f1"},{url:"categories/Cloud/index.html",revision:"51b9f3c144769a9a605771b3643447aa"},{url:"categories/DevOps/index.html",revision:"4cd0d821430ed3cdabe555c5d4158bd8"},{url:"categories/index.html",revision:"5e31bae58e5b0d4641a3bdbad24a33d5"},{url:"categories/Web/index.html",revision:"4142b75e3bc6dbbcd84432b29db75ecf"},{url:"css/index.css",revision:"7ad6770e52ff191e9c6bc5b7cdc34bc5"},{url:"css/loading-bar.css",revision:"f83646c6e3db46a7fc7f6fa0819871bb"},{url:"css/self.css",revision:"6e2d52b54855e1082b829328e3cfec18"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"en/404.html",revision:"de6ba30fe755977bde1daf493f454966"},{url:"en/archives/2024/01/index.html",revision:"2362d0cae4e230a35e33160292144d18"},{url:"en/archives/2024/04/index.html",revision:"a74d3e848c732a251323943c40f4d974"},{url:"en/archives/2024/index.html",revision:"bef9176f68fe7c15bd1b9c57475af1c7"},{url:"en/archives/index.html",revision:"b97dc67dafbe9aafc03115ef7e0df32f"},{url:"en/categories/Cloud/index.html",revision:"5b79e783f3a281f3a23f9d25bdcf75ee"},{url:"en/categories/DevOps/index.html",revision:"aabbc7b8d8151ed64d777b575b023240"},{url:"en/categories/index.html",revision:"29e89cdaa8e33ba7566df1ef2b4ba4b7"},{url:"en/categories/Web/index.html",revision:"719b1c8c5730dd4be6d31e76fbcc0d6b"},{url:"en/css/index.css",revision:"7ad6770e52ff191e9c6bc5b7cdc34bc5"},{url:"en/css/loading-bar.css",revision:"f83646c6e3db46a7fc7f6fa0819871bb"},{url:"en/css/self.css",revision:"abdf0183cfd7057706a6f3e07c685a13"},{url:"en/css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"en/img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"en/img/alipay.jpg",revision:"42c6c21e5cf1053da0982d903ec5097c"},{url:"en/img/archive.jpg",revision:"239bb72ce28d72103b0ab6c4fb5dfb44"},{url:"en/img/avatar.png",revision:"296bd8c753556aea7aa7030ed09b876e"},{url:"en/img/category.jpg",revision:"9c554c159aee1d7c96ce493ff12b2dea"},{url:"en/img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"en/img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"en/img/index.jpg",revision:"39e7e165c001ca388cb13c0b6082d880"},{url:"en/img/logo.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"en/img/pwa/logo.png",revision:"296bd8c753556aea7aa7030ed09b876e"},{url:"en/img/tag.jpg",revision:"2dffdc774cb75394b687f550b7be7e65"},{url:"en/img/wechat.jpg",revision:"d6e810dc81ed26cecd073058b8d94d88"},{url:"en/index.html",revision:"885167ee1bda6dcc0eb99622727376fd"},{url:"en/js/inject.js",revision:"8e5f243e9c052c2bea5727090dbb2787"},{url:"en/js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"en/js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"en/js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"en/js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"en/js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"en/logo/aghenim.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"en/portfolios/iframe-keep-alive.html",revision:"3bf94a2910cd466a5b8f22addf2ed13b"},{url:"en/portfolios/ir-calculator.html",revision:"5ac4be66e479dd3683d386c7e3fe29e1"},{url:"en/portfolios/resume.html",revision:"9fdb6a856579eeff340b945b1519dc4c"},{url:"en/posts/4bbb0782/index.html",revision:"3aa6345789337767f50a29d369128b8f"},{url:"en/posts/6f34bf22/index.html",revision:"1afbd86d36b80616aaa64cf2d686918d"},{url:"en/posts/c9954876/index.html",revision:"0210e3ccd221ee08bea87844a21406cb"},{url:"en/posts/c9fe5e28/index.html",revision:"5c0d16863e94684c8d4c4a1751686993"},{url:"en/posts/d87f7e0c/index.html",revision:"68b95a35cad70f43e6d011e6136b300e"},{url:"en/posts/dd126a4b/index.html",revision:"d1b474010a24b71ca626691ee67c6e7b"},{url:"en/tags/Authentication/index.html",revision:"5b2884f238568e7d3c38ef2b52201ed8"},{url:"en/tags/Blog/index.html",revision:"041898a86909e6c7f0e09c8b9c5ddd91"},{url:"en/tags/Butterfly/index.html",revision:"0710131fda1598c0004055c3ecf3fc42"},{url:"en/tags/Cloud/index.html",revision:"41b231e15f8f59607df01394f171e898"},{url:"en/tags/DevOps/index.html",revision:"30594223dfd868c7709344521e904bff"},{url:"en/tags/Frp/index.html",revision:"70c35b71d7010294945aa95330e4a81d"},{url:"en/tags/Git/index.html",revision:"f7e50ca4571c3ef6f51a35bbb2fb4c55"},{url:"en/tags/GitHub/index.html",revision:"10548dd6570e83273557ebb46ef48d84"},{url:"en/tags/Hexo/index.html",revision:"cc6bf2948c92d7389ed6a950c7b0ab17"},{url:"en/tags/index.html",revision:"2c0dde8b409f56a2b5096b9ddf0b29f0"},{url:"en/tags/Network/index.html",revision:"188daa7b73d669f6a2edea160dd6d5aa"},{url:"en/tags/PWA/index.html",revision:"c50e31e4646c15dba7bdeff895a7c574"},{url:"en/tags/SSH/index.html",revision:"106550ef41f94b603301d9a659bcd7fd"},{url:"en/tags/Theme/index.html",revision:"951c9218b5e8986a17bcee8f284e5db8"},{url:"en/tags/Web-App/index.html",revision:"06649786335b63d2e3345717c6d98d9e"},{url:"en/tags/Web/index.html",revision:"9e7c7563b763e126f92ba53e7c659e4a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"42c6c21e5cf1053da0982d903ec5097c"},{url:"img/avatar.png",revision:"296bd8c753556aea7aa7030ed09b876e"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.jpg",revision:"39e7e165c001ca388cb13c0b6082d880"},{url:"img/logo.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"img/pwa/logo.png",revision:"296bd8c753556aea7aa7030ed09b876e"},{url:"img/wechat.jpg",revision:"d6e810dc81ed26cecd073058b8d94d88"},{url:"index.html",revision:"86b7db8ad0fa32fa625d11a86059140b"},{url:"js/inject.js",revision:"8e5f243e9c052c2bea5727090dbb2787"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"portfolios/iframe-keep-alive.html",revision:"8908ad697f5bfc7b95d62e3ea5e7ccde"},{url:"portfolios/ir-calculator.html",revision:"2240dcbc52d90c87bb64a1094c1882f8"},{url:"posts/1fd3c959/index.html",revision:"660744dd903b33a95bbfe9fbab2960f0"},{url:"posts/4b4dbb3/index.html",revision:"3c63cba9fa55d4948c2d54784aaf1658"},{url:"posts/4bbb0781/index.html",revision:"722d050145db94d173ec98253c9510d8"},{url:"posts/8baa021c/index.html",revision:"f8496d39f7f17f9d8a25ffa85ab3afdd"},{url:"posts/c7190df0/index.html",revision:"e8ce4a7e146d1be06b9f8657313877c7"},{url:"posts/d87f7e0c/index.html",revision:"41741e2c27303eeb0405d8489641a498"},{url:"tags/Authentication/index.html",revision:"cedecdf88fac30ef40797d367f498a35"},{url:"tags/Blog/index.html",revision:"3726759d9020a5647f0d45538c7b29e0"},{url:"tags/Butterfly/index.html",revision:"e013749f89c41e204e2372504dd4231d"},{url:"tags/Cloud/index.html",revision:"b4cdb9897a944d703961881bedc3d7ea"},{url:"tags/DevOps/index.html",revision:"49f16b5fe933fc7613e88160892a26e2"},{url:"tags/Frp/index.html",revision:"fbc755c6b6e024be5b4fde85183b88de"},{url:"tags/Git/index.html",revision:"1828d8247b54e7d288c74c9dba58f226"},{url:"tags/GitHub/index.html",revision:"f91c9037418d32eaa9eb6a9907777b5f"},{url:"tags/Hexo/index.html",revision:"906dac01ca73da580d9818ef152f99c7"},{url:"tags/index.html",revision:"a6540e0f646da2d8e7a82025b1256687"},{url:"tags/Network/index.html",revision:"ee1b39a684ffffbcd487ac9eefa12d8a"},{url:"tags/PWA/index.html",revision:"77d0f04d40eaab29160b919167a877ba"},{url:"tags/SSH/index.html",revision:"8c92c46ae1baf65e220a572c97474a60"},{url:"tags/Theme/index.html",revision:"afb962311517509139e8f7512f71b028"},{url:"tags/Web-App/index.html",revision:"9578b5a79b7b99d8b4bb2a5922a77622"},{url:"tags/Web/index.html",revision:"d71b74d043bec0c9fe22e82d3d1f9bf2"}],{})}));
//# sourceMappingURL=service-worker.js.map
