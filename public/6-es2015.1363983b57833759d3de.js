(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{YXEz:function(e,t,n){"use strict";n.r(t),n.d(t,"NewsModule",(function(){return y}));var o=n("sbAP"),i=n("tyNb"),r=n("fs1m"),c=n("ZA+g"),a=n("nYpW"),b=n("lJxs"),s=n("zP0r"),d=n("1G5W"),p=n("fXoL"),l=n("ofXK"),g=n("lrBO"),u=n("Tboe");function f(e,t){if(1&e&&p.Ib(0,"zg-block-renderer",7),2&e){const e=p.Sb();p.Xb("blocks",e.page.blocks)}}const w=function(e){return{"background-image":e}};function m(e,t){if(1&e&&(p.Kb(0,"div",8),p.Kb(1,"div",9),p.Ib(2,"div",10),p.Kb(3,"div",11),p.Kb(4,"h5",12),p.fc(5),p.Jb(),p.Kb(6,"div",13),p.Kb(7,"p",14),p.fc(8),p.Jb(),p.Kb(9,"p",15),p.fc(10),p.Jb(),p.Jb(),p.Ib(11,"p",16),p.Tb(12,"text"),p.Kb(13,"div",17),p.Kb(14,"a",18),p.fc(15,"Read More"),p.Jb(),p.Jb(),p.Jb(),p.Jb(),p.Jb()),2&e){const e=t.$implicit;p.xb(2),p.Xb("ngStyle",p.Zb(8,w,"url("+e.image+")")),p.xb(3),p.gc(e.title),p.xb(3),p.gc(e.author),p.xb(2),p.gc(e.date),p.xb(1),p.Xb("innerHTML",p.Ub(12,6,e.description),p.bc),p.xb(3),p.Xb("routerLink",e.route)}}const x=function(e){return{"background-image":e}},h=[{path:"",component:(()=>{class e extends a.a{constructor(e,t,n){super(),this.scully=e,this.activatedRoute=t,this.cdr=n}ngOnInit(){this.items$=this.scully.available$.pipe(Object(b.a)(e=>e.filter(e=>e.route.includes("/news/")))),this.page=this.activatedRoute.snapshot.data.page,this.activatedRoute.data.pipe(Object(s.a)(1),Object(d.a)(this.destroyed$)).subscribe(({page:e})=>{this.page=e,this.cdr.markForCheck()})}}return e.\u0275fac=function(t){return new(t||e)(p.Hb(o.c),p.Hb(i.a),p.Hb(p.h))},e.\u0275cmp=p.Bb({type:e,selectors:[["zg-news"]],features:[p.vb],decls:12,vars:5,consts:[[1,"main","flex","jc-center","ai-center"],[1,"col-5","c-light","z-index","ta-center"],[3,"blocks",4,"ngIf"],[1,"m-y-xl"],[1,"grid"],[1,"col-12","m-y-l","ta-center"],["class","col-4",4,"ngFor","ngForOf"],[3,"blocks"],[1,"col-4"],[1,"card","br-rounded"],[1,"img-wrapper",3,"ngStyle"],[1,"news-info","ta-left"],[1,"news-title"],[1,"flex","jc-between","ai-center"],[1,"news-author","m-y-s"],[1,"date"],[1,"news-description",3,"innerHTML"],[1,"news-button-wrapper","w-full","flex","jc-center"],[1,"btn-secondary",3,"routerLink"]],template:function(e,t){1&e&&(p.Kb(0,"div",0),p.Kb(1,"div",1),p.Kb(2,"h1"),p.fc(3),p.Jb(),p.Jb(),p.Jb(),p.ec(4,f,1,1,"zg-block-renderer",2),p.Kb(5,"section",3),p.Kb(6,"div",4),p.Kb(7,"div",5),p.Kb(8,"h1"),p.fc(9,"Read about our news"),p.Jb(),p.Jb(),p.ec(10,m,16,10,"div",6),p.Tb(11,"async"),p.Jb(),p.Jb()),2&e&&(p.xb(3),p.gc(t.page.title),p.xb(1),p.Xb("ngIf",t.page.blocks),p.xb(6),p.Xb("ngForOf",p.Ub(11,3,t.items$)))},directives:[l.j,l.i,g.a,l.k,i.f],pipes:[l.b,u.a],styles:['.main[_ngcontent-%COMP%]{height:100vh;background:url(news-main.b74d90e0a3a06f3720a2.jpg);background-repeat:no-repeat;background-position:50%;background-size:cover}.main[_ngcontent-%COMP%]:before{position:absolute;content:"";width:100%;height:100%;top:0;left:0;background:#484848;opacity:.4}.img-wrapper[_ngcontent-%COMP%]{background-size:cover;background-position:50%;background-repeat:no-repeat;min-height:300px}.news-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:300;letter-spacing:2px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.date[_ngcontent-%COMP%], .news-title[_ngcontent-%COMP%]{color:#696969}.news-info[_ngcontent-%COMP%]{padding:20px;display:flex;flex-direction:column;flex:1}.card[_ngcontent-%COMP%]{border-radius:.25rem;box-shadow:0 20px 40px -14px rgba(0,0,0,.25);display:flex;flex-direction:column;overflow:hidden;height:100%}.btn-secondary[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]{background-color:#fff}.btn-secondary[_ngcontent-%COMP%]{border:1px solid #ccc;color:#696969;padding:.5rem;text-transform:lowercase;max-width:100%;width:100%;display:block;text-align:center;font-size:100%;line-height:1.15;margin:0}.news-description[_ngcontent-%COMP%]{color:#999;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:20px}.news-button-wrapper[_ngcontent-%COMP%]{margin-top:auto}'],changeDetection:0}),e})(),data:{id:"news",collection:"pages"},resolve:{page:r.a}},{path:":id",component:(()=>{class e{constructor(e){this.activatedRoute=e}ngOnInit(){this.item=this.activatedRoute.snapshot.data.meta}}return e.\u0275fac=function(t){return new(t||e)(p.Hb(i.a))},e.\u0275cmp=p.Bb({type:e,selectors:[["zg-news-list"]],decls:19,vars:9,consts:[[1,"grid","m-t-xl"],[1,"col-10","b-r","b-l"],[1,"col-12","ta-center"],[1,"wrapper"],[1,"flex","ai-center","jc-between","b-b"],[1,"news-author"],[1,"news-image","m-y-m",3,"ngStyle"],[1,"news-description",3,"innerHTML"],[1,"flex","news-button-wrapper","jc-end","ai-center"],["routerLink","/news",1,"news-btn"]],template:function(e,t){1&e&&(p.Kb(0,"section"),p.Kb(1,"div",0),p.Kb(2,"div",1),p.Kb(3,"div",2),p.Kb(4,"h1"),p.fc(5),p.Jb(),p.Jb(),p.Kb(6,"div",3),p.Kb(7,"div",4),p.Kb(8,"p",5),p.fc(9),p.Jb(),p.Kb(10,"p",5),p.fc(11),p.Jb(),p.Jb(),p.Ib(12,"div",6),p.Ib(13,"p",7),p.Tb(14,"text"),p.Kb(15,"div",8),p.Kb(16,"a",9),p.fc(17,"Read more news"),p.Jb(),p.Jb(),p.Jb(),p.Jb(),p.Jb(),p.Ib(18,"scully-content"),p.Jb()),2&e&&(p.xb(5),p.gc(t.item.title),p.xb(4),p.gc(t.item.author),p.xb(2),p.gc(t.item.date),p.xb(1),p.Xb("ngStyle",p.Zb(7,x,"url("+t.item.image+")")),p.xb(1),p.Xb("innerHTML",p.Ub(14,5,t.item.description),p.bc))},directives:[l.k,i.f,o.a],pipes:[u.a],styles:[".news-author[_ngcontent-%COMP%]{font-size:24px;color:#a2a2a2}.news-image[_ngcontent-%COMP%]{background-size:cover;background-position:50%;background-repeat:no-repeat;height:300px}.wrapper[_ngcontent-%COMP%]{padding:20px;display:flex;flex-direction:column;flex-wrap:wrap}.news-description[_ngcontent-%COMP%]{flex:1;font-size:20px;margin-bottom:50px}.news-btn[_ngcontent-%COMP%]{background:#fff;color:#323037;outline:none;font-size:20px;font-weight:400;border:1px solid #323037;padding:10px 20px;border-radius:4px;transition:all .4s ease-in-out;position:relative}.news-btn[_ngcontent-%COMP%]:hover{background:#323037;color:#fff}.news-button-wrapper[_ngcontent-%COMP%]{margin-top:auto}"],changeDetection:0}),e})(),data:{collection:"news"},resolve:{meta:c.a}}];let v=(()=>{class e{}return e.\u0275mod=p.Fb({type:e}),e.\u0275inj=p.Eb({factory:function(t){return new(t||e)},imports:[[i.g.forChild(h)],i.g]}),e})();var k=n("d2mR");let y=(()=>{class e{}return e.\u0275mod=p.Fb({type:e}),e.\u0275inj=p.Eb({factory:function(t){return new(t||e)},imports:[[o.b,v,k.a]]}),e})()}}]);