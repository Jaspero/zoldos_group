(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Hwsq:function(e,t,n){"use strict";n.r(t),n.d(t,"LabMembersModule",(function(){return O}));var o=n("sbAP"),r=n("d2mR"),i=n("tyNb"),c=n("fs1m"),a=n("ZA+g"),s=n("nYpW"),b=n("lJxs"),m=n("zP0r"),d=n("1G5W"),l=n("fXoL"),p=n("ofXK"),g=n("Tboe");const u=function(e){return{"background-image":e}};function f(e,t){if(1&e&&(l.Kb(0,"div",4),l.Kb(1,"a",5),l.Ib(2,"div",6),l.Kb(3,"div",7),l.Kb(4,"div",8),l.hc(5),l.Jb(),l.Ib(6,"p",9),l.Ub(7,"text"),l.Kb(8,"a",10),l.hc(9,"Read More"),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&e){const e=t.$implicit;l.xb(1),l.Yb("routerLink",e.route),l.xb(1),l.Yb("ngStyle",l.ac(6,u,"url("+e.thumbImage+")")),l.xb(3),l.ic(e.title),l.xb(1),l.Yb("innerHTML",l.Vb(7,4,e.description),l.dc)}}const x=function(e){return{"background-image":e}},h=[{path:"",component:(()=>{class e extends s.a{constructor(e,t,n){super(),this.scully=e,this.activatedRoute=t,this.cdr=n}ngOnInit(){this.items$=this.scully.available$.pipe(Object(b.a)(e=>e.filter(e=>e.route.includes("/lab-members/")).sort((e,t)=>e.order-t.order))),this.page=this.activatedRoute.snapshot.data.page,this.activatedRoute.data.pipe(Object(m.a)(1),Object(d.a)(this.destroyed$)).subscribe(({page:e})=>{this.page=e,this.cdr.markForCheck()})}}return e.\u0275fac=function(t){return new(t||e)(l.Hb(o.c),l.Hb(i.a),l.Hb(l.h))},e.\u0275cmp=l.Bb({type:e,selectors:[["zg-lab-members"]],features:[l.vb],decls:6,vars:4,consts:[[1,"main","flex","jc-center","ai-center","m-t-m"],[1,"ta-center","b-b"],[1,"grid","jc-start","m-y-xl"],["class","col-4 col-s-6 col-xs-12 m-y-s",4,"ngFor","ngForOf"],[1,"col-4","col-s-6","col-xs-12","m-y-s"],[1,"card",3,"routerLink"],[1,"members-image",3,"ngStyle"],[1,"flex","flex-1","fd-col","members-wrapper"],[1,"members-title"],[1,"members-text","m-y-s",3,"innerHTML"],[1,"members-btn"]],template:function(e,t){1&e&&(l.Kb(0,"div",0),l.Kb(1,"h1",1),l.hc(2),l.Jb(),l.Jb(),l.Kb(3,"div",2),l.gc(4,f,10,8,"div",3),l.Ub(5,"async"),l.Jb()),2&e&&(l.xb(2),l.ic(t.page.title),l.xb(2),l.Yb("ngForOf",l.Vb(5,2,t.items$)))},directives:[p.i,i.f,p.k],pipes:[p.b,g.a],styles:['.main[_ngcontent-%COMP%]{height:200px;border-bottom:3px solid #323037}.b-b[_ngcontent-%COMP%]{border-bottom:2px solid #323037}.card[_ngcontent-%COMP%]{background-color:#fff;border-radius:.25rem;display:flex;border:1px solid #868686;flex-direction:column;overflow:hidden;height:100%;cursor:pointer;transition:all .4s ease-in-out}.card[_ngcontent-%COMP%]:hover{box-shadow:0 0 13px 0 rgba(0,0,0,.75)}.card[_ngcontent-%COMP%]:hover   .members-image[_ngcontent-%COMP%]:before{background:transparent}.card[_ngcontent-%COMP%]:hover   .members-btn[_ngcontent-%COMP%]{background:#868686;color:#fff}.members-title[_ngcontent-%COMP%]{color:grey;font-size:24px;font-weight:300;letter-spacing:2px;text-transform:uppercase}.members-text[_ngcontent-%COMP%]{font-size:18px;margin-bottom:20px}.members-btn[_ngcontent-%COMP%]{background-color:#fff;border:1px solid grey;color:#868686;padding:.5rem;text-transform:uppercase;display:block;width:100%;margin-top:auto;text-align:center}.members-btn[_ngcontent-%COMP%], .members-image[_ngcontent-%COMP%]{transition:all .4s ease-in-out}.members-image[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;position:relative;height:300px;cursor:pointer}.members-image[_ngcontent-%COMP%]:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%;background:#484848;opacity:.5;transition:all .4s ease-in-out}.members-wrapper[_ngcontent-%COMP%]{padding:20px;display:flex;flex-direction:column;flex:1}@media (max-width:600px){h1[_ngcontent-%COMP%]{font-size:30px}.card[_ngcontent-%COMP%]{box-shadow:none;border:1px solid #868686}}'],changeDetection:0}),e})(),data:{id:"lab-members",collection:"pages"},resolve:{page:c.a}},{path:":id",component:(()=>{class e{constructor(e){this.activatedRoute=e}ngOnInit(){this.item=this.activatedRoute.snapshot.data.meta}}return e.\u0275fac=function(t){return new(t||e)(l.Hb(i.a))},e.\u0275cmp=l.Bb({type:e,selectors:[["zg-lab-member"]],decls:11,vars:4,consts:[[1,"main","flex","jc-center","ai-center","m-t-m"],[1,"ta-center","b-b"],[1,"grid","m-y-xl"],[1,"col-10","flex","jc-center","fw-wrap"],[1,"col-12","members-image",3,"ngStyle"],[1,"col-12"],[1,"m-y-s"],[1,"button-wrapper","flex","jc-end"],["routerLink","/lab-members",1,"members-btn"]],template:function(e,t){1&e&&(l.Kb(0,"div",0),l.Kb(1,"h1",1),l.hc(2),l.Jb(),l.Jb(),l.Kb(3,"div",2),l.Kb(4,"div",3),l.Ib(5,"div",4),l.Kb(6,"div",5),l.Ib(7,"scully-content",6),l.Kb(8,"div",7),l.Kb(9,"a",8),l.hc(10,"Other Members"),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&e&&(l.xb(2),l.ic(t.item.title),l.xb(3),l.Yb("ngStyle",l.ac(2,x,"url("+t.item.image+")")))},directives:[p.k,o.a,i.f],styles:[".main[_ngcontent-%COMP%]{height:200px;border-bottom:3px solid #323037}.b-b[_ngcontent-%COMP%]{border-bottom:2px solid #323037}.members-image[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;position:relative;height:600px;cursor:pointer}.button-wrapper[_ngcontent-%COMP%]{margin-top:40px}.members-btn[_ngcontent-%COMP%]{outline:none;border:1px solid #868686;color:#868686;font-size:20px;padding:10px 20px;border-radius:4px;font-weight:400;transition:all .4s ease-in-out}.members-btn[_ngcontent-%COMP%]:hover{color:#fff;background:#868686}"],changeDetection:0}),e})(),data:{collection:"lab-members"},resolve:{meta:a.a}}];let v=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(t){return new(t||e)},imports:[[i.g.forChild(h)],i.g]}),e})(),O=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(t){return new(t||e)},imports:[[o.b,v,r.a]]}),e})()}}]);