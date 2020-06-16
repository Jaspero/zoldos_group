function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var c=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{hl8i:function(e,t,n){"use strict";n.r(t),n.d(t,"ResearchesModule",(function(){return M}));var r,c=n("sbAP"),o=n("d2mR"),a=n("tyNb"),i=n("ZA+g"),s=n("fs1m"),l=n("fXoL"),b=n("ofXK"),p=n("Tboe"),u=function(e){return{"background-image":e}},h=((r=function(){function e(t){_classCallCheck(this,e),this.activatedRoute=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.item=this.activatedRoute.snapshot.data.meta}}]),e}()).\u0275fac=function(e){return new(e||r)(l.Hb(a.a))},r.\u0275cmp=l.Bb({type:r,selectors:[["zg-research"]],decls:28,vars:8,consts:[[1,"grid","m-t-xl"],[1,"col-12"],[1,"col-12","ta-center"],[1,"wrapper"],[1,"research-author"],[1,"research-image","m-y-m",3,"ngStyle"],[1,"research-description",3,"innerHTML"]],template:function(e,t){1&e&&(l.Kb(0,"section"),l.jc(1,"\n    "),l.Kb(2,"div",0),l.jc(3,"\n        "),l.Kb(4,"div",1),l.jc(5,"\n            "),l.Kb(6,"div",2),l.jc(7,"\n                "),l.Kb(8,"h1"),l.jc(9),l.Jb(),l.jc(10,"\n            "),l.Jb(),l.jc(11,"\n            "),l.Kb(12,"div",3),l.jc(13,"\n                "),l.Kb(14,"p",4),l.jc(15),l.Jb(),l.jc(16,"\n                "),l.Ib(17,"div",5),l.jc(18,"\n                "),l.Ib(19,"p",6),l.Wb(20,"text"),l.jc(21,"\n            "),l.Jb(),l.jc(22,"\n        "),l.Jb(),l.jc(23,"\n    "),l.Jb(),l.jc(24,"\n    "),l.Ib(25,"scully-content"),l.jc(26,"\n"),l.Jb(),l.jc(27,"\n")),2&e&&(l.xb(9),l.kc(t.item.title),l.xb(6),l.kc(t.item.author),l.xb(2),l.ac("ngStyle",l.cc(6,u,"url("+t.item.image+")")),l.xb(2),l.ac("innerHTML",l.Xb(20,4,t.item.description),l.fc))},directives:[b.k,c.a],pipes:[p.a],styles:[".research-author[_ngcontent-%COMP%]{font-size:24px;color:#a2a2a2}.research-image[_ngcontent-%COMP%]{background-size:cover;background-position:50%;background-repeat:no-repeat;height:400px}.wrapper[_ngcontent-%COMP%]{padding:20px}.research-description[_ngcontent-%COMP%]{font-size:20px}@media (max-width:900px){h1[_ngcontent-%COMP%]{font-size:30px}}"],changeDetection:0}),r),g=n("nYpW"),f=n("lJxs"),d=n("zP0r"),m=n("1G5W"),x=n("lrBO");function _(e,t){if(1&e&&l.Ib(0,"zg-block-renderer",6),2&e){var n=l.Vb();l.ac("blocks",n.page.blocks)}}var O=function(e){return{"background-image":e}};function C(e,t){if(1&e&&(l.Kb(0,"div",7),l.Kb(1,"a",8),l.Kb(2,"div",9),l.Kb(3,"h5",10),l.jc(4),l.Jb(),l.Kb(5,"p",11),l.jc(6),l.Jb(),l.Ib(7,"p",12),l.Wb(8,"text"),l.Kb(9,"div",13),l.Kb(10,"a",14),l.jc(11,"Read More"),l.Jb(),l.Jb(),l.Jb(),l.Kb(12,"div",15),l.Ib(13,"div",16),l.Jb(),l.Jb(),l.Jb()),2&e){var n=t.$implicit,r=t.odd,c=t.last;l.xb(1),l.zb("even",r)("m-b-l",!c),l.ac("routerLink",n.route),l.xb(1),l.zb("text",r),l.xb(2),l.kc(n.title),l.xb(2),l.kc(n.author),l.xb(1),l.ac("innerHTML",l.Xb(8,14,n.description),l.fc),l.xb(2),l.zb("flex-end",r),l.xb(1),l.ac("routerLink",n.route),l.xb(3),l.ac("ngStyle",l.cc(16,O,"url("+n.thumbImg+")"))}}var v,P,y,w=[{path:"",component:(v=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,c){var o;return _classCallCheck(this,n),(o=t.call(this)).scully=e,o.activatedRoute=r,o.cdr=c,o}return _createClass(n,[{key:"ngOnInit",value:function(){var e=this;this.items$=this.scully.available$.pipe(Object(f.a)((function(e){return e.filter((function(e){return e.route.includes("/researches/")}))}))),this.page=this.activatedRoute.snapshot.data.page,this.activatedRoute.data.pipe(Object(d.a)(1),Object(m.a)(this.destroyed$)).subscribe((function(t){var n=t.page;e.page=n,e.cdr.markForCheck()}))}}]),n}(g.a),v.\u0275fac=function(e){return new(e||v)(l.Hb(c.c),l.Hb(a.a),l.Hb(l.h))},v.\u0275cmp=l.Bb({type:v,selectors:[["zg-researches"]],features:[l.vb],decls:8,vars:5,consts:[[1,"main","flex","jc-center","ai-center","m-t-m"],[1,"ta-center"],[3,"blocks",4,"ngIf"],[1,"m-y-xl"],[1,"grid","jc-start"],["class","col-6 col-s-12",4,"ngFor","ngForOf"],[3,"blocks"],[1,"col-6","col-s-12"],[1,"research-image-block-wrapper","card",3,"routerLink"],[1,"research-image-block-text"],[1,"research-title"],[1,"research-author","m-y-s"],[1,"research-content",3,"innerHTML"],[1,"research-button-wrapper","w-full","flex","jc-end"],[1,"research-btn",3,"routerLink"],[1,"research-image-block-image","br-circle"],[1,"research-image",3,"ngStyle"]],template:function(e,t){1&e&&(l.Kb(0,"div",0),l.Kb(1,"h1",1),l.jc(2),l.Jb(),l.Jb(),l.ic(3,_,1,1,"zg-block-renderer",2),l.Kb(4,"section",3),l.Kb(5,"div",4),l.ic(6,C,14,18,"div",5),l.Wb(7,"async"),l.Jb(),l.Jb()),2&e&&(l.xb(2),l.kc(t.page.title),l.xb(1),l.ac("ngIf",t.page.blocks),l.xb(3),l.ac("ngForOf",l.Xb(7,3,t.items$)))},directives:[b.j,b.i,x.a,a.f,b.k],pipes:[b.b,p.a],styles:['.main[_ngcontent-%COMP%]{height:200px;border-bottom:3px solid #323037;margin-top:65px}.research-title[_ngcontent-%COMP%]{font-weight:100;font-size:30px}.card[_ngcontent-%COMP%]{transition:all .4s ease-in-out}.card[_ngcontent-%COMP%]:hover{box-shadow:0 0 13px 0 rgba(0,0,0,.75);cursor:pointer}.card[_ngcontent-%COMP%]:hover   .research-btn[_ngcontent-%COMP%]:after, .card[_ngcontent-%COMP%]:hover   .research-btn[_ngcontent-%COMP%]:before{width:100%}.research-author[_ngcontent-%COMP%]{font-size:18px;color:#a2a2a2;text-transform:uppercase}.research-image[_ngcontent-%COMP%]{height:200px;background-repeat:no-repeat;background-size:cover;background-position:50%;width:100%;border:9px solid #868686;border-radius:50%}.research-content[_ngcontent-%COMP%]{color:#666;font-size:15px}.research-button-wrapper[_ngcontent-%COMP%]{margin-top:auto}.research-image-block-wrapper[_ngcontent-%COMP%]{border:1px solid #323037;width:100%;flex-wrap:wrap;justify-content:space-between;padding:20px;min-height:350px;height:100%}.research-image-block-text[_ngcontent-%COMP%], .research-image-block-wrapper[_ngcontent-%COMP%]{display:flex;font-family:Raleway,Arial,Helvetica,sans-serif}.research-image-block-text[_ngcontent-%COMP%]{width:65%;text-align:right;flex-direction:column}.research-image-block-image[_ngcontent-%COMP%]{width:30%;display:flex;align-items:center;justify-content:center}.even[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]{text-align:left}.even[_ngcontent-%COMP%]{flex-direction:row-reverse}.flex-end[_ngcontent-%COMP%]{justify-content:flex-start}.research-btn[_ngcontent-%COMP%]{position:relative;border:none;outline:none;color:#323037;font-size:22px;transition:all .4s ease-in-out}.research-btn[_ngcontent-%COMP%]:before{top:105%;bottom:0}.research-btn[_ngcontent-%COMP%]:after, .research-btn[_ngcontent-%COMP%]:before{position:absolute;width:0;left:0;right:0;margin:auto;content:"";color:#323037;background:#323037;height:1px;transition:all .4s ease-in-out}.research-btn[_ngcontent-%COMP%]:after{bottom:105%;top:0}@media (max-width:1300px){.research-image[_ngcontent-%COMP%]{height:180px}}@media (max-width:1150px){.research-image[_ngcontent-%COMP%]{height:150px}}@media (max-width:1050px){.research-image[_ngcontent-%COMP%]{height:130px}}@media (max-width:900px){.research-image[_ngcontent-%COMP%]{border-radius:0;border:none;width:100%;height:300px}.research-image-block-image[_ngcontent-%COMP%]{width:100%;order:1}.research-image-block-text[_ngcontent-%COMP%]{width:100%;text-align:left;padding:15px;order:2}.research-button-wrapper[_ngcontent-%COMP%]{margin-top:calc(8px + .5vw)}}@media (max-width:600px){h1[_ngcontent-%COMP%]{font-size:30px}.research-image-block-wrapper[_ngcontent-%COMP%]{height:auto;padding:0}.research-button-wrapper[_ngcontent-%COMP%]{justify-content:flex-start}}'],changeDetection:0}),v),data:{id:"researches",collection:"pages"},resolve:{page:s.a}},{path:":id",component:h,data:{collection:"researches"},resolve:{meta:i.a}}],k=((y=function e(){_classCallCheck(this,e)}).\u0275mod=l.Fb({type:y}),y.\u0275inj=l.Eb({factory:function(e){return new(e||y)},imports:[[a.g.forChild(w)],a.g]}),y),M=((P=function e(){_classCallCheck(this,e)}).\u0275mod=l.Fb({type:P}),P.\u0275inj=l.Eb({factory:function(e){return new(e||P)},imports:[[o.a,c.b,k]]}),P)}}]);