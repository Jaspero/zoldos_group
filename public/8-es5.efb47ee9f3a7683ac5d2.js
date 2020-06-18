function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,o=_getPrototypeOf(t);if(e){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7dgz":function(t,e,n){"use strict";n.r(e),n.d(e,"PhotoGalleryModule",(function(){return w}));var o=n("sbAP"),i=n("d2mR"),r=n("tyNb"),c=n("ZA+g"),a=n("fs1m"),l=n("nYpW"),s=n("lJxs"),u=n("zP0r"),g=n("1G5W"),f=n("fXoL"),p=n("ofXK");function b(t,e){if(1&t&&(f.Kb(0,"a",4),f.Kb(1,"div",5),f.Kb(2,"h2",6),f.jc(3),f.Jb(),f.Kb(4,"div",7),f.Ib(5,"img",8),f.Jb(),f.Jb(),f.Jb()),2&t){var n=e.$implicit;f.ac("routerLink",n.route)("id",n.year),f.xb(3),f.kc(n.year),f.xb(2),f.ac("src",n.image,f.gc)}}var d=function(t){return{"background-image":t}};function h(t,e){if(1&t){var n=f.Lb();f.Kb(0,"div",11),f.Kb(1,"div",12),f.Rb("click",(function(){f.ec(n);var t=e.$implicit;return f.Vb().toggleGallery(t.fullImg)})),f.Jb(),f.Jb()}if(2&t){var o=e.$implicit;f.xb(1),f.ac("ngStyle",f.cc(1,d,"url("+o.thumbImg+")"))}}var y,m,v,_,x=[{path:"",component:(m=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,o,i){var r;return _classCallCheck(this,n),(r=e.call(this)).scully=t,r.activatedRoute=o,r.cdr=i,r}return _createClass(n,[{key:"ngOnInit",value:function(){var t=this;this.items$=this.scully.available$.pipe(Object(s.a)((function(t){return t.filter((function(t){return t.route.includes("/photo-gallery/")})).sort((function(t,e){return t.year>e.year?-1:t.year<e.year?1:0}))}))),this.page=this.activatedRoute.snapshot.data.page,this.activatedRoute.data.pipe(Object(u.a)(1),Object(g.a)(this.destroyed$)).subscribe((function(e){var n=e.page;t.page=n,t.cdr.markForCheck()}))}},{key:"yearSelected",value:function(t){document.getElementById(t.target.value).scrollIntoView({behavior:"smooth"})}}]),n}(l.a),m.\u0275fac=function(t){return new(t||m)(f.Hb(o.c),f.Hb(r.a),f.Hb(f.h))},m.\u0275cmp=f.Bb({type:m,selectors:[["zg-photo-gallery"]],features:[f.vb],decls:6,vars:4,consts:[[1,"main","flex","jc-center","ai-center","m-t-m"],[1,"ta-center"],[1,"grid","m-y-xl"],["class"," col-4 col-s-6 col-xs-12",3,"routerLink","id",4,"ngFor","ngForOf"],[1,"col-4","col-s-6","col-xs-12",3,"routerLink","id"],[1,"gallery-card"],[1,"year","m-y-s"],[1,"image-wrapper","w-full"],[1,"gallery-image",3,"src"]],template:function(t,e){1&t&&(f.Kb(0,"div",0),f.Kb(1,"h1",1),f.jc(2),f.Jb(),f.Jb(),f.Kb(3,"div",2),f.ic(4,b,6,4,"a",3),f.Wb(5,"async"),f.Jb()),2&t&&(f.xb(2),f.kc(e.page.title),f.xb(2),f.ac("ngForOf",f.Xb(5,2,e.items$)))},directives:[p.i,r.f],pipes:[p.b],styles:[".main[_ngcontent-%COMP%]{height:200px;border-bottom:3px solid #323037;margin-top:65px}.gallery-card[_ngcontent-%COMP%]{overflow:hidden;display:flex;flex-direction:column;background:#fff;border:1px solid #868686;align-items:center;justify-content:center;min-height:300px;height:100%;transition:all .3s ease-in-out}.gallery-card[_ngcontent-%COMP%]:hover{box-shadow:.3rem .4rem .4rem rgba(0,0,0,.4)}.gallery-image[_ngcontent-%COMP%]{display:block;width:100%;height:400px;-o-object-fit:cover;object-fit:cover}.gallery-sidebar[_ngcontent-%COMP%]{width:400px}.gallery-container[_ngcontent-%COMP%]{border-left:1px solid #868686}.select-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;margin-left:auto;margin-right:0}.year[_ngcontent-%COMP%]{letter-spacing:normal;font-size:30px;font-weight:400}@media (max-width:900px){h1[_ngcontent-%COMP%]{font-size:30px}}"],changeDetection:0}),m),data:{id:"photo-gallery",collection:"pages"},resolve:{page:a.a}},{path:":id",component:(y=function(){function t(e,n){_classCallCheck(this,t),this.document=e,this.activatedRoute=n}return _createClass(t,[{key:"toggleGallery",value:function(t){this.gallery=t,this.document.body.classList.toggle("of-hidden")}},{key:"ngOnInit",value:function(){this.item=this.activatedRoute.snapshot.data.meta}}]),t}(),y.\u0275fac=function(t){return new(t||y)(f.Hb(p.d),f.Hb(r.a))},y.\u0275cmp=f.Bb({type:y,selectors:[["zg-photo-gallery-list"]],decls:13,vars:5,consts:[[1,"relative"],[1,"main","flex","jc-center","ai-center","m-t-m"],[1,"grid","m-y-xl"],["class","col-4 col-s-6 col-xs-12",4,"ngFor","ngForOf"],[1,"image-overlay"],[1,"image-container"],["alt","",1,"full-img",3,"src"],[1,"close-btn-container",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","white",1,"close"],["d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"],["d","M0 0h24v24H0z","fill","none"],[1,"col-4","col-s-6","col-xs-12"],[1,"image-wrapper",3,"ngStyle","click"]],template:function(t,e){1&t&&(f.Kb(0,"section",0),f.Kb(1,"div",1),f.Kb(2,"h1"),f.jc(3),f.Jb(),f.Jb(),f.Kb(4,"div",2),f.ic(5,h,2,3,"div",3),f.Kb(6,"div",4),f.Kb(7,"div",5),f.Ib(8,"img",6),f.Kb(9,"div",7),f.Rb("click",(function(){return e.toggleGallery()})),f.Ub(),f.Kb(10,"svg",8),f.Ib(11,"path",9),f.Ib(12,"path",10),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Jb()),2&t&&(f.xb(3),f.lc("Photos from ",e.item.year,""),f.xb(2),f.ac("ngForOf",e.item.imageGallery),f.xb(1),f.zb("active-gallery",e.gallery),f.xb(2),f.ac("src",e.gallery,f.gc))},directives:[p.i,p.k],styles:['.image-wrapper[_ngcontent-%COMP%]{height:400px;background-repeat:no-repeat;background-position:50%;background-size:cover;width:100%;cursor:pointer}.main[_ngcontent-%COMP%]{height:200px;border-bottom:3px solid #323037;margin-top:65px}.b-b[_ngcontent-%COMP%]{border-bottom:2px solid #323037}.image-overlay[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;pointer-events:none;position:fixed;content:"";top:0;left:0;width:100%;height:100vh;background:#000;opacity:0}.image-overlay.active-gallery[_ngcontent-%COMP%]{z-index:99;opacity:1;pointer-events:all}.image-container[_ngcontent-%COMP%]{height:600px;width:100%;display:flex;align-items:center;justify-content:center;position:relative}.full-img[_ngcontent-%COMP%]{height:500px;width:50%;-o-object-fit:cover;object-fit:cover}.close-btn-container[_ngcontent-%COMP%]{position:absolute;right:20%;top:0;border:1px solid #fff;border-radius:50%;cursor:pointer}.close[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}@media (max-width:900px){h1[_ngcontent-%COMP%]{font-size:30px}.full-img[_ngcontent-%COMP%]{width:80%}.close-btn-container[_ngcontent-%COMP%]{right:5%}}@media (max-width:600px){.full-img[_ngcontent-%COMP%]{width:100%;height:250px}.image-container[_ngcontent-%COMP%]{height:350px}}'],changeDetection:0}),y),data:{collection:"photo-gallery"},resolve:{meta:c.a}}],O=((_=function t(){_classCallCheck(this,t)}).\u0275mod=f.Fb({type:_}),_.\u0275inj=f.Eb({factory:function(t){return new(t||_)},imports:[[r.g.forChild(x)],r.g]}),_),w=((v=function t(){_classCallCheck(this,t)}).\u0275mod=f.Fb({type:v}),v.\u0275inj=f.Eb({factory:function(t){return new(t||v)},imports:[[o.b,O,i.a]]}),v)}}]);