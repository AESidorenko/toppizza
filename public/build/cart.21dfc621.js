(window.webpackJsonp=window.webpackJsonp||[]).push([["cart"],{F8JR:function(e,t,n){"use strict";var r=n("tycR").forEach,a=n("pkCn"),o=n("rkAj"),i=a("forEach"),c=o("forEach");e.exports=i&&c?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},FZtP:function(e,t,n){var r=n("2oRo"),a=n("/byt"),o=n("F8JR"),i=n("kRJp");for(var c in a){var l=r[c],s=l&&l.prototype;if(s&&s.forEach!==o)try{i(s,"forEach",o)}catch(e){s.forEach=o}}},QWBl:function(e,t,n){"use strict";var r=n("I+eb"),a=n("F8JR");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},xZLW:function(e,t,n){"use strict";n.r(t);n("wLYn"),n("eoL8"),n("XENs"),n("SYky");var r=n("q1tI"),a=n.n(r),o=n("lya3"),i=(n("pNMO"),n("4Brf"),n("0oug"),n("yyme"),n("QWBl"),n("pjDv"),n("J30X"),n("4mDm"),n("2B1R"),n("E9XD"),n("+2oP"),n("DQNa"),n("sMBO"),n("uL8W"),n("NBAS"),n("ExoC"),n("07d7"),n("SuFq"),n("JfAA"),n("PKPk"),n("FZtP"),n("3bBZ"),n("vDqi")),c=n.n(i),l=n("IP2g"),s=n("wHSu"),u=n("2oG/");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,n,r,o=f(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={itemCount:e.itemCount},t.handleClickAddToCart=t.handleClickAddToCart.bind(y(t)),t.handleClickRemoveFromCart=t.handleClickRemoveFromCart.bind(y(t)),t}return t=i,(n=[{key:"handleClickAddToCart",value:function(e){this.setState((function(e){return{itemCount:e.itemCount+1}}),(function(){this.props.onCountChanged(this.props.item.id,this.state.itemCount)}))}},{key:"handleClickRemoveFromCart",value:function(e){this.setState((function(e){return{itemCount:e.itemCount>0?e.itemCount-1:0}}),(function(){this.props.onCountChanged(this.props.item.id,this.state.itemCount)}))}},{key:"render",value:function(){return 0===this.state.itemCount?"":a.a.createElement("div",{className:"row m-3"},a.a.createElement("div",{className:"col-2"},a.a.createElement("img",{className:"img-thumbnail",src:"/img/"+this.props.item.thumbnail,alt:"Card image cap"})),a.a.createElement("div",{className:"col-3"},a.a.createElement("p",null,a.a.createElement("b",null,this.props.item.title)),a.a.createElement("p",null,a.a.createElement("small",{className:"text-secondary"},this.props.item.description))),a.a.createElement("div",{className:"col-3"},a.a.createElement("p",null,u.a.currencyStringRule(this.props.item.price*this.state.itemCount,this.props.currencyCode))),a.a.createElement("div",{className:"col-4 text-right"},1===this.state.itemCount?a.a.createElement("button",{className:"btn btn-success btn-add-to-cart",id:"add-to-cart-"+this.props.item.id.toString(),onClick:this.handleClickRemoveFromCart},a.a.createElement(l.a,{icon:s.b})):a.a.createElement("button",{className:"btn btn-success btn-remove-from-cart",id:"remove-from-cart-"+this.props.item.id.toString(),onClick:this.handleClickRemoveFromCart},a.a.createElement(l.a,{icon:s.a})),a.a.createElement("span",{className:"ml-3 mr-3"},"x",this.state.itemCount),a.a.createElement("button",{className:"btn btn-success btn-add-to-cart",id:"add-to-cart-"+this.props.item.id.toString(),onClick:this.handleClickAddToCart},"+",u.a.currencyStringRule(this.props.item.price,this.props.currencyCode))))}}])&&m(t.prototype,n),r&&m(t,r),i}(r.Component);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var a=N(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return k(this,n)}}function k(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}c.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(l,e);var t,n,r,i=O(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e)).state={cartStorage:new o.a},t.nameInput=a.a.createRef(),t.addressInput=a.a.createRef(),t.phoneInput=a.a.createRef(),t.handleOrderSubmit=t.handleOrderSubmit.bind(P(t)),t.handleChange=t.handleChange.bind(P(t)),t}return t=l,(n=[{key:"handleOrderSubmit",value:function(){var e=this;this.validateForm()&&c()({method:"post",url:"/api/order",data:{items:g(this.props.cart.entries()),contacts:{username:this.props.clientName,address:this.props.clientAddress,phone:this.props.clientPhone},usdRate:1.15,totalPrice:this.props.totalPrice,idempotencyKey:this.state.cartStorage.getIdempotencyKey()}}).then((function(t){200==t.status?(e.state.cartStorage.reset(),e.state.cartStorage.updateIdempotencyKey(),e.props.onDone()):e.props.onError()})).catch((function(){e.props.onError()}))}},{key:"handleChange",value:function(e){this.props.onChange(e)}},{key:"validateForm",value:function(){return 0===[this.nameInput.current,this.addressInput.current,this.phoneInput.current].reduce((function(e,t){var n,r;return""===t.value?((r=t.classList).add.apply(r,["border","border-danger"]),1):((n=t.classList).remove.apply(n,["border","border-danger"]),0)}),0)}},{key:"render",value:function(){return a.a.createElement("div",{className:"mt-5"},a.a.createElement("h4",null,"Please fill in the form below to make an order:"),a.a.createElement("form",null,a.a.createElement("div",{className:"form-group row"},a.a.createElement("label",{htmlFor:"username",className:"col-sm-2 col-form-label"},"Name"),a.a.createElement("div",{className:"col-sm-4"},a.a.createElement("input",{type:"text",maxLength:"255",className:"form-control",id:"clientName",ref:this.nameInput,value:this.props.clientName,onChange:this.handleChange}))),a.a.createElement("div",{className:"form-group row"},a.a.createElement("label",{htmlFor:"clientAddress",className:"col-sm-2 col-form-label"},"Address"),a.a.createElement("div",{className:"col-sm-4"},a.a.createElement("input",{type:"text",maxLength:"255",className:"form-control",id:"clientAddress",ref:this.addressInput,value:this.props.clientAddress,onChange:this.handleChange}))),a.a.createElement("div",{className:"form-group row"},a.a.createElement("label",{htmlFor:"clientPhone",className:"col-sm-2 col-form-label"},"Phone"),a.a.createElement("div",{className:"col-sm-4"},a.a.createElement("input",{type:"tel",maxLength:"32",className:"form-control",id:"clientPhone",ref:this.phoneInput,value:this.props.clientPhone,onChange:this.handleChange}))),a.a.createElement("button",{type:"button",id:"btnSubmitOrder",className:"btn btn-primary",onClick:this.handleOrderSubmit},"Submit order")))}}])&&S(t.prototype,n),r&&S(t,r),l}(r.Component),j=function(e){var t=e.handleClose,n=e.show,r=e.config,o=n?"modal display-block":"modal display-none";return a.a.createElement("div",{className:o},a.a.createElement("section",{className:"modal-main"},a.a.createElement("h4",null,r.title),a.a.createElement("p",null,r.text),a.a.createElement("button",{type:"button",className:"btn btn-primary float-right",onClick:t},"Close")))};function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=L(e);if(t){var a=L(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return M(this,n)}}function M(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?D(e):t}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}c.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(i,e);var t,n,r,o=T(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={items:[],loading:!0,cartEmpty:!1,orderSubmitted:!1,deliveryPrice:0,currencyCode:e.currencyCode,modal:{title:"",text:""},showModal:!1,modalCallback:t.hideModal,clientName:"",clientAddress:"",clientPhone:""},t.itemRefs=[],t.loadItems=t.loadItems.bind(D(t)),t.handleCountChanged=t.handleCountChanged.bind(D(t)),t.getTotalPrice=t.getTotalPrice.bind(D(t)),t.hideModal=t.hideModal.bind(D(t)),t.handleOrderSubmitted=t.handleOrderSubmitted.bind(D(t)),t.handleOrderFailed=t.handleOrderFailed.bind(D(t)),t.setCurrencyCode=t.setCurrencyCode.bind(D(t)),t.handleChange=t.handleChange.bind(D(t)),t}return t=i,(n=[{key:"componentDidMount",value:function(){this.loadItems()}},{key:"loadItems",value:function(){var e=this;c()({method:"post",url:"/api/cart",data:{items:I(this.props.cart).map((function(e){return e[0]})),username:"",password:"",_csrf_token:window.csrf_token}}).then((function(t){var n=t.data;0===n.items.length&&(window.location="/"),e.itemRefs=Array(n.items.length).fill(null).map((function(){return a.a.createRef()}));var r=I(e.props.cart).reduce((function(e,t){return e+t[1]}),0);e.setState({items:n.items,loading:!1,cartEmpty:0===r,deliveryPrice:n.deliveryPrice,clientName:n.clientName,clientAddress:n.clientAddress,clientPhone:n.clientPhone})}))}},{key:"setCurrencyCode",value:function(e){console.log(u.a),this.setState({currencyCode:e})}},{key:"handleChange",value:function(e){var t={};t[e.target.id]=e.target.value,this.setState(t)}},{key:"handleOrderSubmitted",value:function(){this.setState({orderSubmitted:!0,modal:{title:"Error occurred",text:"Order submit failed, please try one more time"},showModal:!0,modalCallback:function(){window.location="/"}})}},{key:"handleOrderFailed",value:function(){this.setState({modal:{title:"Error occurred",text:"Order submit failed, please try one more time"},showModal:!0,modalCallback:this.hideModal})}},{key:"hideModal",value:function(){this.setState({modal:{title:"",text:""},showModal:!1})}},{key:"handleCountChanged",value:function(e,t){this.props.onItemCountChanged(e,t);var n=I(this.props.cart).reduce((function(e,t){return e+t[1]}),0);this.setState({cartEmpty:0===n})}},{key:"getTotalPrice",value:function(){var e=this;return I(this.props.cart).reduce((function(t,n){return t+e.getItemPrice(n[0])*n[1]}),0)+this.state.deliveryPrice}},{key:"getItemPrice",value:function(e){var t=0;return this.state.items.forEach((function(n){n.id===e&&(t=n.price)})),t}},{key:"render",value:function(){var e=this;return this.state.orderSubmitted?a.a.createElement("div",null,a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-body"},"Thank you for your order! We will deliver it within an hour."))):this.state.cartEmpty?a.a.createElement("div",null,a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-body"},"Your cart is empty."))):a.a.createElement("div",null,a.a.createElement(j,{show:this.state.showModal,handleClose:this.state.modalCallback,config:this.state.modal}),this.state.loading?a.a.createElement("div",{className:"spinner-border",role:"status"},a.a.createElement("span",{className:"sr-only"},"Loading...")):this.state.items.map((function(t,n){var r;return a.a.createElement(v,{item:t,itemCount:null!==(r=e.props.cart.get(t.id))&&void 0!==r?r:0,onCountChanged:e.handleCountChanged,currencyCode:e.state.currencyCode,ref:e.itemRefs[n],key:n})}),this),a.a.createElement("div",{className:"mt-3"},"+",u.a.currencyStringRule(this.state.deliveryPrice,this.state.currencyCode)," for delvery"),a.a.createElement("div",{className:"mt-3"},"Total price: ",u.a.currencyStringRule(this.getTotalPrice(),this.state.currencyCode)),this.state.cartEmpty?"":a.a.createElement(R,{onDone:this.handleOrderSubmitted,onError:this.handleOrderFailed,cart:this.props.cart,totalPrice:this.getTotalPrice(),clientName:this.state.clientName,clientAddress:this.state.clientAddress,clientPhone:this.state.clientPhone,onChange:this.handleChange}))}}])&&x(t.prototype,n),r&&x(t,r),i}(r.Component),J=n("i8i4"),W=n.n(J),q=n("VO4U");function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Z=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cartStorage=new o.a,this.currencyCode=this.cartStorage.getCurrency(),this.cartStorage.load(),this.init=this.init.bind(this),this.handleItemCountChanged=this.handleItemCountChanged.bind(this),this.handleCurrencyChange=this.handleCurrencyChange.bind(this)}var t,n,r;return t=e,(n=[{key:"init",value:function(e,t){this.cartStorage.exists()||(window.location="/"),this.CartElement=a.a.createElement(B,{cart:this.cartStorage.cart,onItemCountChanged:this.handleItemCountChanged,currencyCode:this.currencyCode}),this.CurrnecyElement=a.a.createElement(q.a,{value:this.currencyCode,onChange:this.handleCurrencyChange}),W.a.render(this.CurrnecyElement,document.getElementById(t)),this.cartObject=W.a.render(this.CartElement,document.getElementById(e))}},{key:"handleCurrencyChange",value:function(e){this.cartStorage.setCurrency(e),this.currencyCode=e,this.cartObject.setCurrencyCode(e)}},{key:"handleItemCountChanged",value:function(e,t){this.cartStorage.cart.set(e,t>0?t:0),this.cartStorage.save()}}])&&X(t.prototype,n),r&&X(t,r),e}());document.addEventListener("DOMContentLoaded",(function(){Z.init("cart","currency-container")}));t.default=Z}},[["xZLW","runtime",0,1]]]);