(this.webpackJsonpportfoli=this.webpackJsonpportfoli||[]).push([[5],{36:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},37:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},43:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return function(){var e,n=r(t);if(o()){var i=r(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return a(this,e)}}n.d(e,"a",(function(){return c}))},44:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},49:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var r=n(36),o=n(37),i=n(43),a=n(44),c=n(0),u=n.n(c),f=n(13),s=n(15),l=(n(49),n(38)),p=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.navLinks,n=t.isHiddenBtn,r=t.toggleCartHidden;return u.a.createElement("nav",{className:"navbar"},u.a.createElement("div",{className:"navbar-items container"},u.a.createElement("div",{className:"logo"},u.a.createElement(l.Link,{to:"home",smooth:!0,offset:70,duration:700},"Portfo",u.a.createElement("span",null,"lio"))),u.a.createElement("ul",{className:"menu",style:n?null:{left:"0"}},e.map((function(t){return u.a.createElement("li",{key:t.id},u.a.createElement(l.Link,{activeClass:"active",to:t.link,spy:!0,smooth:!0,offset:70,duration:700,onClick:function(){return r()}},t.name))}))),u.a.createElement("div",{className:"menu-btn",onClick:function(){return r().isHidden}},n?u.a.createElement("i",{className:"fa fa-bars"}):u.a.createElement("i",{className:"fas fa-times"}))))}}]),n}(u.a.Component);e.default=Object(f.b)((function(t){return console.log("Navigation:I am being called"),{navLinks:t.navLinks.navLinks,isHiddenBtn:t.navLinks.isHidden}}),(function(t){return{toggleCartHidden:function(){return t({type:s.a.NAV_LINK,payload:e});var e}}}))(p)}}]);
//# sourceMappingURL=5.1fe1e008.chunk.js.map