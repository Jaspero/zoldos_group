(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{hl8i:function(e,t,n){"use strict";n.r(t),n.d(t,"ResearchesModule",(function(){return P}));var r=n("sbAP"),c=n("d2mR"),o=n("tyNb"),a=n("ZA+g"),i=n("fs1m"),s=n("fXoL"),b=n("ofXK"),l=n("Tboe");const g=function(e){return{"background-image":e}};let h=(()=>{class e{constructor(e){this.activatedRoute=e}ngOnInit(){this.item=this.activatedRoute.snapshot.data.meta}}return e.\u0275fac=function(t){return new(t||e)(s.Hb(o.a))},e.\u0275cmp=s.Bb({type:e,selectors:[["zg-research"]],decls:13,vars:8,consts:[[1,"grid","m-t-xl"],[1,"col-8","b-r","b-l"],[1,"col-12","ta-center"],[1,"wrapper"],[1,"research-author"],[1,"research-image","m-y-m",3,"ngStyle"],[1,"research-description",3,"innerHTML"]],template:function(e,t){1&e&&(s.Kb(0,"section"),s.Kb(1,"div",0),s.Kb(2,"div",1),s.Kb(3,"div",2),s.Kb(4,"h1"),s.hc(5),s.Jb(),s.Jb(),s.Kb(6,"div",3),s.Kb(7,"p",4),s.hc(8),s.Jb(),s.Ib(9,"div",5),s.Ib(10,"p",6),s.Ub(11,"text"),s.Jb(),s.Jb(),s.Jb(),s.Ib(12,"scully-content"),s.Jb()),2&e&&(s.xb(5),s.ic(t.item.title),s.xb(3),s.ic(t.item.author),s.xb(1),s.Yb("ngStyle",s.ac(6,g,"url("+t.item.image+")")),s.xb(1),s.Yb("innerHTML",s.Vb(11,4,t.item.description),s.dc))},directives:[b.k,r.a],pipes:[l.a],styles:[".research-author[_ngcontent-%COMP%]{font-size:24px;color:#a2a2a2}.research-image[_ngcontent-%COMP%]{background-size:cover;background-position:50%;background-repeat:no-repeat;height:300px}.wrapper[_ngcontent-%COMP%]{padding:20px}.research-description[_ngcontent-%COMP%]{font-size:20px}"],changeDetection:0}),e})();var p=n("nYpW"),d=n("lJxs"),u=n("zP0r"),f=n("1G5W"),m=n("lrBO");function x(e,t){if(1&e&&s.Ib(0,"zg-block-renderer",6),2&e){const e=s.Tb();s.Yb("blocks",e.page.blocks)}}const O=function(e){return{"background-image":e}};function M(e,t){if(1&e&&(s.Kb(0,"div",7),s.Kb(1,"div",8),s.Kb(2,"div",9),s.Kb(3,"h5",10),s.hc(4),s.Jb(),s.Kb(5,"p",11),s.hc(6),s.Jb(),s.Ib(7,"p",12),s.Ub(8,"text"),s.Kb(9,"div",13),s.Kb(10,"a",14),s.hc(11,"Read More"),s.Jb(),s.Jb(),s.Jb(),s.Kb(12,"div",15),s.Ib(13,"div",16),s.Jb(),s.Jb(),s.Jb()),2&e){const e=t.$implicit,n=t.odd,r=t.last;s.xb(1),s.zb("even",n)("m-b-l",!r),s.xb(1),s.zb("text",n),s.xb(2),s.ic(e.title),s.xb(2),s.ic(e.author),s.xb(1),s.Yb("innerHTML",s.Vb(8,13,e.description),s.dc),s.xb(2),s.zb("flex-end",n),s.xb(1),s.Yb("routerLink",e.route),s.xb(3),s.Yb("ngStyle",s.ac(15,O,"url("+e.thumbImg+")"))}}const v=[{path:"",component:(()=>{class e extends p.a{constructor(e,t,n){super(),this.scully=e,this.activatedRoute=t,this.cdr=n}ngOnInit(){this.items$=this.scully.available$.pipe(Object(d.a)(e=>e.filter(e=>e.route.includes("/researches/")))),this.page=this.activatedRoute.snapshot.data.page,this.activatedRoute.data.pipe(Object(u.a)(1),Object(f.a)(this.destroyed$)).subscribe(({page:e})=>{this.page=e,this.cdr.markForCheck()})}}return e.\u0275fac=function(t){return new(t||e)(s.Hb(r.c),s.Hb(o.a),s.Hb(s.h))},e.\u0275cmp=s.Bb({type:e,selectors:[["zg-researches"]],features:[s.vb],decls:8,vars:5,consts:[[1,"main","flex","jc-center","ai-center"],[1,"ta-center","b-b"],[3,"blocks",4,"ngIf"],[1,"m-y-xl"],[1,"grid","jc-start"],["class","col-6 col-s-12",4,"ngFor","ngForOf"],[3,"blocks"],[1,"col-6","col-s-12"],[1,"research-image-block-wrapper","m-b-l"],[1,"research-image-block-text"],[1,"research-title"],[1,"research-author","m-y-s"],[1,"research-content",3,"innerHTML"],[1,"research-button-wrapper","w-full","flex","jc-end"],[1,"research-btn",3,"routerLink"],[1,"research-image-block-image","br-circle"],[1,"research-image",3,"ngStyle"]],template:function(e,t){1&e&&(s.Kb(0,"div",0),s.Kb(1,"h1",1),s.hc(2),s.Jb(),s.Jb(),s.gc(3,x,1,1,"zg-block-renderer",2),s.Kb(4,"section",3),s.Kb(5,"div",4),s.gc(6,M,14,17,"div",5),s.Ub(7,"async"),s.Jb(),s.Jb()),2&e&&(s.xb(2),s.ic(t.page.title),s.xb(1),s.Yb("ngIf",t.page.blocks),s.xb(3),s.Yb("ngForOf",s.Vb(7,3,t.items$)))},directives:[b.j,b.i,m.a,o.f,b.k],pipes:[b.b,l.a],styles:['.main[_ngcontent-%COMP%]{height:500px;border-bottom:3px solid #323037}.b-b[_ngcontent-%COMP%]{border-bottom:2px solid #323037}research-info[_ngcontent-%COMP%]{padding:20px;display:flex;flex-direction:column;flex:1}.research-title[_ngcontent-%COMP%]{font-weight:100;font-size:30px}.research-author[_ngcontent-%COMP%]{font-size:18px;color:#a2a2a2;text-transform:uppercase}.research-image[_ngcontent-%COMP%]{height:200px;background-repeat:no-repeat;background-size:cover;background-position:50%;width:100%;border:9px solid #868686;border-radius:50%}.research-content[_ngcontent-%COMP%]{color:#666;font-size:15px}.research-button-wrapper[_ngcontent-%COMP%]{margin-top:auto}.research-image-block-wrapper[_ngcontent-%COMP%]{border:1px solid #323037;width:100%;flex-wrap:wrap;justify-content:space-between;padding:20px;min-height:350px;height:100%}.research-image-block-text[_ngcontent-%COMP%], .research-image-block-wrapper[_ngcontent-%COMP%]{display:flex;font-family:Raleway,Arial,Helvetica,sans-serif}.research-image-block-text[_ngcontent-%COMP%]{width:65%;text-align:right;flex-direction:column}.research-image-block-image[_ngcontent-%COMP%]{width:30%;display:flex;align-items:center;justify-content:center}.even[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]{text-align:left}.even[_ngcontent-%COMP%]{flex-direction:row-reverse}.flex-end[_ngcontent-%COMP%]{justify-content:flex-start}.research-btn[_ngcontent-%COMP%]{position:relative;border:none;outline:none;color:#323037;font-size:22px}.research-btn[_ngcontent-%COMP%]:before{top:105%;bottom:0}.research-btn[_ngcontent-%COMP%]:after, .research-btn[_ngcontent-%COMP%]:before{position:absolute;width:0;left:0;right:0;margin:auto;content:"";color:#323037;background:#323037;height:1px;transition:all .4s ease-in-out}.research-btn[_ngcontent-%COMP%]:after{bottom:105%;top:0}.research-btn[_ngcontent-%COMP%]:hover:after, .research-btn[_ngcontent-%COMP%]:hover:before{width:100%}@media (max-width:600px){h1[_ngcontent-%COMP%]{font-size:30px}.research-image-block-wrapper[_ngcontent-%COMP%]{height:auto;padding:0}.research-image-block-image[_ngcontent-%COMP%]{width:100%;order:1}.research-image[_ngcontent-%COMP%]{border-radius:0;border:none}.research-image-block-text[_ngcontent-%COMP%]{width:100%;text-align:left;padding:15px;order:2}.research-button-wrapper[_ngcontent-%COMP%]{justify-content:flex-start}}'],changeDetection:0}),e})(),data:{id:"researches",collection:"pages"},resolve:{page:i.a}},{path:":id",component:h,data:{collection:"researches"},resolve:{meta:a.a}}];let C=(()=>{class e{}return e.\u0275mod=s.Fb({type:e}),e.\u0275inj=s.Eb({factory:function(t){return new(t||e)},imports:[[o.g.forChild(v)],o.g]}),e})(),P=(()=>{class e{}return e.\u0275mod=s.Fb({type:e}),e.\u0275inj=s.Eb({factory:function(t){return new(t||e)},imports:[[c.a,r.b,C]]}),e})()}}]);