(this.webpackJsonpportfoli=this.webpackJsonpportfoli||[]).push([[4],{33:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},34:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},35:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return function(){var t,n=a(e);if(r()){var o=a(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return s(this,t)}}n.d(t,"a",(function(){return i}))},36:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",(function(){return r}))},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var a=n(61);Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return a.EmailJSResponseStatus}});var r=n(62),o=null,s="https://api.emailjs.com";function i(e,t,n){return void 0===n&&(n={}),new Promise((function(r,o){var s=new XMLHttpRequest;for(var i in s.addEventListener("load",(function(e){var t=new a.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?r(t):o(t)})),s.addEventListener("error",(function(e){o(new a.EmailJSResponseStatus(e.target))})),s.open("POST",e,!0),n)s.setRequestHeader(i,n[i]);s.send(t)}))}function c(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function u(e,t){o=e,s=t||"https://api.emailjs.com"}function l(e,t,n,a){var r={lib_version:"2.6.3",user_id:a||o,service_id:e,template_id:t,template_params:c(n)};return i(s+"/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})}function m(e,t,n,a){var c;if("string"===typeof n&&(n=document.querySelector("#"!==(c=n)[0]?"#"+c:c)),!n||"FORM"!==n.nodeName)throw"Expected the HTML form element or the style selector of form";r.UI.progressState(n);var u=new FormData(n);return u.append("lib_version","2.6.3"),u.append("service_id",e),u.append("template_id",t),u.append("user_id",a||o),i(s+"/api/v1.0/email/send-form",u).then((function(e){return r.UI.successState(n),e}),(function(e){return r.UI.errorState(n),Promise.reject(e)}))}t.init=u,t.send=l,t.sendForm=m,t.default={init:u,send:l,sendForm:m}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var a=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=a},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var a=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=a},63:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(33),r=n(34),o=n(35),s=n(36),i=n(0),c=n.n(i),u=n(60),l=n.n(u),m=n(13),f=(n(63),function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).sendEmail=function(e){e.preventDefault(),l.a.sendForm("gmail","template_imiolg3",e.target,"user_iI1ucHAVW8QB1TXw91Inv").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.contactFromProps;return c.a.createElement("section",{className:"contact",id:"contacts","data-aos":"zoom-in-down","data-aos-duration":"1000"},c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"title"},"Contact me"),c.a.createElement("div",{className:"contact-content"},c.a.createElement("div",{className:"column left"},c.a.createElement("div",{className:"text"},"Get in Touch"),c.a.createElement("p",null,"If you have any questions or projects that you weant to discuss. Feel free to write me on any time."),c.a.createElement("div",{className:"icons"},e.map((function(e){return c.a.createElement("a",{className:"row",key:e.id},c.a.createElement("i",{className:"fas fa-user"}),c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"head"},e.head),c.a.createElement("div",{className:"sub-title"},e.subTitle)))})))),c.a.createElement("div",{className:"column right"},c.a.createElement("div",{className:"text"},"Message me"),c.a.createElement("form",{className:"form",onSubmit:this.sendEmail},c.a.createElement("div",{className:"fields"},c.a.createElement("div",{className:"field name"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Name",required:!0})),c.a.createElement("div",{className:"field email"},c.a.createElement("input",{type:"email",name:"email",placeholder:"Email",required:!0}))),c.a.createElement("div",{className:"field textarea"},c.a.createElement("textarea",{cols:"30",rows:"10",name:"message",placeholder:"Describe project...",required:!0})),c.a.createElement("div",{className:"button"},c.a.createElement("button",{type:"submit"},"Submit")))))))}}]),n}(c.a.Component));t.default=Object(m.b)((function(e){return{contactFromProps:e.contact.contacts}}))(f)}}]);
//# sourceMappingURL=4.f5c823a6.chunk.js.map