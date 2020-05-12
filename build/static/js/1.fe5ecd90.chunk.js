webpackJsonp([1],{158:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function a(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),l=t.n(i),u=t(159),c=t(48),s=t(171),A=t.n(s),d=t(10),p=t(6),b=t(49),h=t(8),g=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),m=function(e){function n(){var e,t,a,i;r(this,n);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return t=a=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(u))),a.state={controls:{email:{elementtype:"input",elementconfig:{type:"email",placeholder:"Enter Email ID"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementtype:"input",elementconfig:{type:"password",placeholder:"Enter Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},signIn:!1},a.onSubmitHandler=function(e){e.preventDefault(),a.props.onAuth(a.state.controls.email.value,a.state.controls.password.value,a.state.signIn)},a.inputChangedHandler=function(e,n){var t=Object.assign({},a.state.controls),r=Object.assign({},t[n]);r.value=e.target.value,r.valid=a.checkValidity(r.value,r.validation),r.touched=!0,t[n]=r,a.setState({controls:t})},a.changeMethod=function(){var e=a.state.signIn;a.setState({signIn:!e})},i=t,o(a,i)}return a(n,e),g(n,[{key:"componentDidMount",value:function(){this.props.buying||"/"===this.props.url||this.props.onChangeUrl()}},{key:"checkValidity",value:function(e,n){var t=!0;return!n||(n.required&&(t=""!==e.trim()&&t),n.minLength&&(t=e.length>=n.minLength&&t),n.maxLength&&(t=e.length<=n.maxLength&&t),t)}},{key:"render",value:function(){var e=this,n=[];for(var t in this.state.controls)n.push({id:t,config:this.state.controls[t]});var r=null,o=l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.onSubmitHandler},n.map(function(n){return l.a.createElement(u.a,{key:n.id,elementType:n.config.elementtype,elementConfig:n.config.elementconfig,value:n.config.value,invalid:!n.config.valid,shouldvalidate:n.config.validation,touched:n.config.touched,changed:function(t){return e.inputChangedHandler(t,n.id)}})}),l.a.createElement(c.a,{btnType:"Success"},"SUBMIT")),l.a.createElement(c.a,{btnType:"Success",clicked:this.changeMethod},this.state.signIn?"SignUp":"SignIn"));this.props.loading&&(o=l.a.createElement(b.a,null)),this.props.error&&(r=this.props.error.message);var a=null;return this.props.isAuth&&(a=l.a.createElement(h.c,{to:this.props.url})),l.a.createElement("div",{className:A.a.Auth},a,r,o)}}]),n}(i.Component),f=function(e){return{isAuth:null!=e.auth.token,loading:e.auth.loading,error:e.auth.error,url:e.auth.url,buying:e.burger.buying}},v=function(e){return{onAuth:function(n,t,r){return e(d.b(n,t,r))},onChangeUrl:function(){return e(d.d("/"))}}};n.default=Object(p.b)(f,v)(m)},159:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(160),i=t.n(a),l=function(e){var n=null,t=[i.a.InputElement];switch(e.invalid&&e.shouldvalidate&&e.touched&&t.push(i.a.Invalid),e.elementType){case"input":n=o.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":n=o.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":n=o.a.createElement("select",{className:t.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=o.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}var r=null;return e.invalid&&e.touched&&(r=o.a.createElement("p",null,"Please enter a valid value!")),o.a.createElement("div",{className:i.a.Input},o.a.createElement("label",{className:i.a.Label},e.label),n,r)};n.a=l},160:function(e,n,t){var r=t(161);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(155)(r,o);r.locals&&(e.exports=r.locals)},161:function(e,n,t){n=e.exports=t(154)(!0),n.push([e.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#ccc}.Input__Invalid__38X2d{border:1px solid red;background-color:#fda49a}","",{version:3,sources:["D:/codes/react/code/BurgerWRedux/BurgerWRedux/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,uBACI,qBAAsB,AACtB,wBAA0B,CAC7B",file:"Input.css",sourcesContent:[".Input{\r\n    width: 100%;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.Label{\r\n    font-weight: bold;\r\n    display: block;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.InputElement{\r\n    outline: none;\r\n    border: 1px solid #ccc;\r\n    background-color: white;\r\n    font: inherit;\r\n    padding: 6px 10px;\r\n    display: block;\r\n    width: 100%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.InputElement:focus{\r\n    outline: none;\r\n    background-color: #ccc;\r\n}\r\n\r\n.Invalid{\r\n    border: 1px solid red;\r\n    background-color: #FDA49A;\r\n}"],sourceRoot:""}]),n.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},171:function(e,n,t){var r=t(172);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(155)(r,o);r.locals&&(e.exports=r.locals)},172:function(e,n,t){n=e.exports=t(154)(!0),n.push([e.i,".Auth__Auth__1TInt{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.Auth__Auth__1TInt{width:500px}}","",{version:3,sources:["D:/codes/react/code/BurgerWRedux/BurgerWRedux/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACI,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAGD,yBACI,mBACI,WAAa,CAChB,CACJ",file:"Auth.css",sourcesContent:[".Auth{\r\n    margin: 20px auto;\r\n    width: 80%;\r\n    text-align: center;\r\n    -webkit-box-shadow: 0 2px 3px #ccc;\r\n            box-shadow: 0 2px 3px #ccc;\r\n    border: 1px solid #eee;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n\r\n@media (min-width: 600px){\r\n    .Auth{\r\n        width: 500px;\r\n    }\r\n}"],sourceRoot:""}]),n.locals={Auth:"Auth__Auth__1TInt"}}});
//# sourceMappingURL=1.fe5ecd90.chunk.js.map