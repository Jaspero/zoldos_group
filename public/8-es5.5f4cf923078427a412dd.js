function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7dgz":function(e,t,r){"use strict";r.r(t),r.d(t,"PhotoGalleryModule",(function(){return C}));var n=r("sbAP"),o=r("d2mR"),i=r("tyNb"),c=r("ZA+g"),a=r("fs1m"),s=r("nYpW"),l=r("lJxs"),u=r("zP0r"),f=r("1G5W"),p=r("fXoL"),b=r("ofXK");function g(e,t){if(1&e&&(p.Kb(0,"a",5),p.Kb(1,"div",6),p.Kb(2,"h2",7),p.hc(3),p.Jb(),p.Kb(4,"div",8),p.Ib(5,"img",9),p.Jb(),p.Jb(),p.Jb()),2&e){var r=t.$implicit;p.Yb("routerLink",r.route)("id",r.year),p.xb(3),p.ic(r.year),p.xb(2),p.Yb("src",r.image,p.ec)}}var h=function(e){return{"background-image":e}};function d(e,t){if(1&e&&(p.Kb(0,"div",4),p.Ib(1,"div",5),p.Jb()),2&e){var r=t.$implicit;p.xb(1),p.Yb("ngStyle",p.ac(1,h,"url("+r.thumbImg+")"))}}var y,m,v,_,O=[{path:"",component:(m=function(e){_inherits(r,e);var t=_createSuper(r);function r(e,n,o){var i;return _classCallCheck(this,r),(i=t.call(this)).scully=e,i.activatedRoute=n,i.cdr=o,i}return _createClass(r,[{key:"ngOnInit",value:function(){var e=this;this.items$=this.scully.available$.pipe(Object(l.a)((function(e){return e.filter((function(e){return e.route.includes("/photo-gallery/")})).sort((function(e,t){return e.year>t.year?-1:e.year<t.year?1:0}))}))),this.page=this.activatedRoute.snapshot.data.page,this.activatedRoute.data.pipe(Object(u.a)(1),Object(f.a)(this.destroyed$)).subscribe((function(t){var r=t.page;e.page=r,e.cdr.markForCheck()}))}},{key:"yearSelected",value:function(e){document.getElementById(e.target.value).scrollIntoView({behavior:"smooth"})}}]),r}(s.a),m.\u0275fac=function(e){return new(e||m)(p.Hb(n.c),p.Hb(i.a),p.Hb(p.h))},m.\u0275cmp=p.Bb({type:m,selectors:[["zg-photo-gallery"]],features:[p.vb],decls:8,vars:4,consts:[[1,"main","flex","jc-center","ai-center"],[1,"ta-center","b-b"],[1,"grid","m-y-m"],[1,"w-full","ta-center","m-y-l"],["class"," col-4",3,"routerLink","id",4,"ngFor","ngForOf"],[1,"col-4",3,"routerLink","id"],[1,"gallery-card"],[1,"year","m-y-s"],[1,"image-wrapper","w-full"],[1,"gallery-image",3,"src"]],template:function(e,t){1&e&&(p.Kb(0,"div",0),p.Kb(1,"h1",1),p.hc(2),p.Jb(),p.Jb(),p.Kb(3,"div",2),p.Kb(4,"h1",3),p.hc(5,"Browse trough our galleries"),p.Jb(),p.gc(6,g,6,4,"a",4),p.Ub(7,"async"),p.Jb()),2&e&&(p.xb(2),p.ic(t.page.title),p.xb(4),p.Yb("ngForOf",p.Vb(7,2,t.items$)))},directives:[b.i,i.f],pipes:[b.b],styles:[".main[_ngcontent-%COMP%]{height:200px;border-bottom:3px solid #323037}.gallery-card[_ngcontent-%COMP%]{overflow:hidden;display:flex;flex-direction:column;background:#fff;border:1px solid #868686;align-items:center;justify-content:center;min-height:300px;height:100%;transition:all .3s ease-in-out}.gallery-card[_ngcontent-%COMP%]:hover{box-shadow:.3rem .4rem .4rem rgba(0,0,0,.4)}.gallery-image[_ngcontent-%COMP%]{display:block;width:100%;height:400px;-o-object-fit:cover;object-fit:cover}.gallery-sidebar[_ngcontent-%COMP%]{width:400px}.gallery-container[_ngcontent-%COMP%]{border-left:1px solid #868686}.select-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;margin-left:auto;margin-right:0}.year[_ngcontent-%COMP%]{letter-spacing:normal;font-size:30px;font-weight:400}"],changeDetection:0}),m),data:{id:"photo-gallery",collection:"pages"},resolve:{page:a.a}},{path:":id",component:(y=function(){function e(t){_classCallCheck(this,e),this.activatedRoute=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.item=this.activatedRoute.snapshot.data.meta}}]),e}(),y.\u0275fac=function(e){return new(e||y)(p.Hb(i.a))},y.\u0275cmp=p.Bb({type:y,selectors:[["zg-photo-gallery-list"]],decls:6,vars:2,consts:[[1,"m-y-xl"],[1,"grid"],[1,"col-12","ta-center"],["class","col-4",4,"ngFor","ngForOf"],[1,"col-4"],[1,"image-wrapper",3,"ngStyle"]],template:function(e,t){1&e&&(p.Kb(0,"section",0),p.Kb(1,"div",1),p.Kb(2,"div",2),p.Kb(3,"h1"),p.hc(4),p.Jb(),p.Jb(),p.gc(5,d,2,3,"div",3),p.Jb(),p.Jb()),2&e&&(p.xb(4),p.jc("Photos from ",t.item.year,""),p.xb(1),p.Yb("ngForOf",t.item.imageGallery))},directives:[b.i,b.k],styles:[".image-wrapper[_ngcontent-%COMP%]{height:400px;background-repeat:no-repeat;background-position:50%;background-size:cover;width:100%}"],changeDetection:0}),y),data:{collection:"photo-gallery"},resolve:{meta:c.a}}],w=((_=function e(){_classCallCheck(this,e)}).\u0275mod=p.Fb({type:_}),_.\u0275inj=p.Eb({factory:function(e){return new(e||_)},imports:[[i.g.forChild(O)],i.g]}),_),C=((v=function e(){_classCallCheck(this,e)}).\u0275mod=p.Fb({type:v}),v.\u0275inj=p.Eb({factory:function(e){return new(e||v)},imports:[[n.b,w,o.a]]}),v)}}]);