!function(e){function t(o){if(n[o])return n[o].exports;var c=n[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/wp-content/plugins/crankwheel/dist/",t(t.s=1)}([function(e,t){e.exports=jQuery},function(e,t,n){n(2),e.exports=n(6)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=n(0),o=(n.n(t),n(3)),c=n(5),a=new o.a({toplevelPageCrankwheel:c.a});e(document).ready(function(){return a.loadEvents()})}.call(t,n(0))},function(e,t,n){"use strict";var o=n(4),c=function(e){this.routes=e};c.prototype.fire=function(e,t,n){void 0===t&&(t="init"),""!==e&&this.routes[e]&&"function"==typeof this.routes[e][t]&&this.routes[e][t](n)},c.prototype.loadEvents=function(){var e=this;this.fire("common"),document.body.className.toLowerCase().replace(/-/g,"_").split(/\s+/).map(o.a).forEach(function(t){e.fire(t),e.fire(t,"finalize")}),this.fire("common","finalize")},t.a=c},function(e,t,n){"use strict";t.a=function(e){return""+e.charAt(0).toLowerCase()+e.replace(/[\W_]/g,"|").split("|").map(function(e){return""+e.charAt(0).toUpperCase()+e.slice(1)}).join("").slice(1)}},function(e,t,n){"use strict";(function(e){t.a={init:function(){window.addEventListener("message",function(e){if(e.data.startsWith("closeFrame:")){var t=e.data.substr(e.data.search(":")+1);e.source.close(),location.href=location.href+"&cwresponse="+encodeURIComponent(t)}}),e.oauthPopup=function(e){e.callback=e.callback||function(){window.location.reload()},this._oauthWindow=window.open(e.path,"CrankWheel","location=0,status=0,width=600,height=400")}},finalize:function(){e("button[data-crankwheel]").click(function(t){t.preventDefault&&t.preventDefault();var n=e(this),o=cw.cw_api+"?token="+cw.nonce+"&displayname="+cw.plugin+"&callbackurl="+cw.json_api;n.prop("disabled",!0).text("Please Wait"),"connect"===n.data("crankwheel")?(e.oauthPopup({path:o}),e.ajax({url:cw.ajax_url,type:"post",dataType:"json",data:{nonce:cw.nonce,action:"do_cw_save_nonce"}})):"disconnect"===n.data("crankwheel")&&e.ajax({url:cw.ajax_url,type:"post",dataType:"json",data:{nonce:cw.nonce,action:"do_cw_disconnect"},success:function(t){200===t.code?location.reload():"msg"in t&&e(".cw-async-status").html(t.message)},error:function(t,n){e(".cw-async-status").html(n)}})});var t=document.querySelector(".cw-link-copy");t&&t.addEventListener("click",function(){document.querySelector(".cw-link-ipunt").select();try{var t=document.execCommand("copy");e('<span class="span-copy">'+(t?"Copied":"Unable to copy")+"</div>").appendTo(e(".cw-link-wrap")).fadeOut(2e3)}catch(t){e('<span class="span-copy">Unable to copy</div>').appendTo(e(".cw-link-wrap")).fadeOut(2e3)}});var n=document.querySelector(".cw-configure-demos");n&&n.addEventListener("click",function(){location.href="https://meeting.is/ss/instant_demo/configure"})}}}).call(t,n(0))},function(e,t){}]);