(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7dgz":function(e,t,n){"use strict";n.r(t),n.d(t,"PhotoGalleryModule",(function(){return v}));var o=n("sbAP"),i=n("d2mR"),r=n("tyNb"),a=n("ZA+g"),c=n("fs1m"),l=n("nYpW"),s=n("lJxs"),g=n("zP0r"),b=n("1G5W"),d=n("fXoL"),p=n("ofXK");function m(e,t){if(1&e&&(d.Kb(0,"a",5),d.Kb(1,"div",6),d.Kb(2,"h2",7),d.jc(3),d.Jb(),d.Kb(4,"div",8),d.Ib(5,"img",9),d.Jb(),d.Jb(),d.Jb()),2&e){const e=t.$implicit;d.ac("routerLink",e.route)("id",e.year),d.xb(3),d.kc(e.year),d.xb(2),d.ac("src",e.image,d.gc)}}const h=function(e){return{"background-image":e}};function u(e,t){if(1&e){const e=d.Lb();d.Kb(0,"div",6),d.Kb(1,"div",7),d.Rb("click",(function(){return d.ec(e),d.Vb().toggleGallery()})),d.Jb(),d.Jb()}if(2&e){const e=t.$implicit;d.xb(1),d.ac("ngStyle",d.cc(1,h,"url("+e.thumbImg+")"))}}const y=[{path:"",component:(()=>{class e extends l.a{constructor(e,t,n){super(),this.scully=e,this.activatedRoute=t,this.cdr=n}ngOnInit(){this.items$=this.scully.available$.pipe(Object(s.a)(e=>e.filter(e=>e.route.includes("/photo-gallery/")).sort((e,t)=>e.year>t.year?-1:e.year<t.year?1:0))),this.page=this.activatedRoute.snapshot.data.page,this.activatedRoute.data.pipe(Object(g.a)(1),Object(b.a)(this.destroyed$)).subscribe(({page:e})=>{this.page=e,this.cdr.markForCheck()})}yearSelected(e){document.getElementById(e.target.value).scrollIntoView({behavior:"smooth"})}}return e.\u0275fac=function(t){return new(t||e)(d.Hb(o.c),d.Hb(r.a),d.Hb(d.h))},e.\u0275cmp=d.Bb({type:e,selectors:[["zg-photo-gallery"]],features:[d.vb],decls:8,vars:4,consts:[[1,"main","flex","jc-center","ai-center","m-t-m"],[1,"ta-center"],[1,"grid","m-y-m"],[1,"w-full","ta-center","m-y-l"],["class"," col-4 col-s-6 col-xs-12",3,"routerLink","id",4,"ngFor","ngForOf"],[1,"col-4","col-s-6","col-xs-12",3,"routerLink","id"],[1,"gallery-card"],[1,"year","m-y-s"],[1,"image-wrapper","w-full"],[1,"gallery-image",3,"src"]],template:function(e,t){1&e&&(d.Kb(0,"div",0),d.Kb(1,"h1",1),d.jc(2),d.Jb(),d.Jb(),d.Kb(3,"div",2),d.Kb(4,"h1",3),d.jc(5,"Browse trough our galleries"),d.Jb(),d.ic(6,m,6,4,"a",4),d.Wb(7,"async"),d.Jb()),2&e&&(d.xb(2),d.kc(t.page.title),d.xb(4),d.ac("ngForOf",d.Xb(7,2,t.items$)))},directives:[p.i,r.f],pipes:[p.b],styles:[".main[_ngcontent-%COMP%]{height:200px;border-bottom:3px solid #323037;margin-top:65px}.gallery-card[_ngcontent-%COMP%]{overflow:hidden;display:flex;flex-direction:column;background:#fff;border:1px solid #868686;align-items:center;justify-content:center;min-height:300px;height:100%;transition:all .3s ease-in-out}.gallery-card[_ngcontent-%COMP%]:hover{box-shadow:.3rem .4rem .4rem rgba(0,0,0,.4)}.gallery-image[_ngcontent-%COMP%]{display:block;width:100%;height:400px;-o-object-fit:cover;object-fit:cover}.gallery-sidebar[_ngcontent-%COMP%]{width:400px}.gallery-container[_ngcontent-%COMP%]{border-left:1px solid #868686}.select-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;margin-left:auto;margin-right:0}.year[_ngcontent-%COMP%]{letter-spacing:normal;font-size:30px;font-weight:400}@media (max-width:900px){h1[_ngcontent-%COMP%]{font-size:30px}}"],changeDetection:0}),e})(),data:{id:"photo-gallery",collection:"pages"},resolve:{page:c.a}},{path:":id",component:(()=>{class e{constructor(e){this.activatedRoute=e,this.gallery=!1}toggleGallery(){this.gallery=!this.gallery}ngOnInit(){this.item=this.activatedRoute.snapshot.data.meta}}return e.\u0275fac=function(t){return new(t||e)(d.Hb(r.a))},e.\u0275cmp=d.Bb({type:e,selectors:[["zg-photo-gallery-list"]],decls:8,vars:4,consts:[[1,"relative"],[1,"main","flex","jc-center","ai-center","m-t-m"],[1,"grid","m-y-xl"],["class","col-4 col-s-6 col-xs-12",4,"ngFor","ngForOf"],[1,"image-overlay"],[1,"image-container"],[1,"col-4","col-s-6","col-xs-12"],[1,"image-wrapper",3,"ngStyle","click"]],template:function(e,t){1&e&&(d.Kb(0,"section",0),d.Kb(1,"div",1),d.Kb(2,"h1"),d.jc(3),d.Jb(),d.Jb(),d.Kb(4,"div",2),d.ic(5,u,2,3,"div",3),d.Jb(),d.Kb(6,"div",4),d.Ib(7,"div",5),d.Jb(),d.Jb()),2&e&&(d.xb(3),d.lc("Photos from ",t.item.year,""),d.xb(2),d.ac("ngForOf",t.item.imageGallery),d.xb(1),d.zb("active-gallery",t.gallery))},directives:[p.i,p.k],styles:['.image-wrapper[_ngcontent-%COMP%]{height:400px;background-repeat:no-repeat;background-position:50%;background-size:cover;width:100%;cursor:pointer}.main[_ngcontent-%COMP%]{height:200px;border-bottom:3px solid #323037;margin-top:65px}.b-b[_ngcontent-%COMP%]{border-bottom:2px solid #323037}.image-overlay[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;pointer-events:none;position:absolute;content:"";top:0;left:0;width:100%;height:100vh;background:#000;opacity:0}.image-overlay.active-gallery[_ngcontent-%COMP%]{opacity:.8;pointer-events:all}@media (max-width:900px){h1[_ngcontent-%COMP%]{font-size:30px}}'],changeDetection:0}),e})(),data:{collection:"photo-gallery"},resolve:{meta:a.a}}];let f=(()=>{class e{}return e.\u0275mod=d.Fb({type:e}),e.\u0275inj=d.Eb({factory:function(t){return new(t||e)},imports:[[r.g.forChild(y)],r.g]}),e})(),v=(()=>{class e{}return e.\u0275mod=d.Fb({type:e}),e.\u0275inj=d.Eb({factory:function(t){return new(t||e)},imports:[[o.b,f,i.a]]}),e})()}}]);