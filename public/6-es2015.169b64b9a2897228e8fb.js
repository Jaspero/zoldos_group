(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Hwsq:function(e,t,n){"use strict";n.r(t),n.d(t,"LabMembersModule",(function(){return O}));var o=n("sbAP"),r=n("d2mR"),i=n("tyNb"),b=n("fs1m"),c=n("ZA+g"),a=n("nYpW"),s=n("lJxs"),l=n("zP0r"),m=n("1G5W"),d=n("fXoL"),p=n("ofXK"),g=n("Tboe");const u=function(e){return{"background-image":e}};function f(e,t){if(1&e&&(d.Kb(0,"div",4),d.Kb(1,"div",5),d.Ib(2,"div",6),d.Kb(3,"div",7),d.Kb(4,"div",8),d.fc(5),d.Jb(),d.Ib(6,"p",9),d.Tb(7,"text"),d.Kb(8,"a",10),d.fc(9,"Read More"),d.Jb(),d.Jb(),d.Jb(),d.Jb()),2&e){const e=t.$implicit;d.xb(2),d.Xb("ngStyle",d.Zb(6,u,"url("+e.image+")")),d.xb(3),d.gc(e.title),d.xb(1),d.Xb("innerHTML",d.Ub(7,4,e.description),d.bc),d.xb(2),d.Xb("routerLink",e.route)}}const x=function(e){return{"background-image":e}},h=[{path:"",component:(()=>{class e extends a.a{constructor(e,t,n){super(),this.scully=e,this.activatedRoute=t,this.cdr=n}ngOnInit(){this.items$=this.scully.available$.pipe(Object(s.a)(e=>e.filter(e=>e.route.includes("/lab-members/")).sort((e,t)=>t.order-e.order))),this.page=this.activatedRoute.snapshot.data.page,this.activatedRoute.data.pipe(Object(l.a)(1),Object(m.a)(this.destroyed$)).subscribe(({page:e})=>{this.page=e,this.cdr.markForCheck()})}}return e.\u0275fac=function(t){return new(t||e)(d.Hb(o.c),d.Hb(i.a),d.Hb(d.h))},e.\u0275cmp=d.Bb({type:e,selectors:[["zg-lab-members"]],features:[d.vb],decls:6,vars:4,consts:[[1,"main","flex","jc-center","ai-center"],[1,"ta-center","b-b"],[1,"grid","m-y-xl"],["class","col-4 col-s-6 col-xs-12",4,"ngFor","ngForOf"],[1,"col-4","col-s-6","col-xs-12"],[1,"card"],[1,"members-image",3,"ngStyle"],[1,"flex","flex-1","fd-col","members-wrapper"],[1,"members-title"],[1,"members-text","m-y-s",3,"innerHTML"],[1,"members-btn",3,"routerLink"]],template:function(e,t){1&e&&(d.Kb(0,"div",0),d.Kb(1,"h1",1),d.fc(2),d.Jb(),d.Jb(),d.Kb(3,"div",2),d.ec(4,f,10,8,"div",3),d.Tb(5,"async"),d.Jb()),2&e&&(d.xb(2),d.gc(t.page.title),d.xb(2),d.Xb("ngForOf",d.Ub(5,2,t.items$)))},directives:[p.i,p.k,i.f],pipes:[p.b,g.a],styles:['.main[_ngcontent-%COMP%]{height:500px;border-bottom:3px solid #323037}.b-b[_ngcontent-%COMP%]{border-bottom:2px solid #323037}.card[_ngcontent-%COMP%]{background-color:#fff;border-radius:.25rem;box-shadow:0 20px 40px -14px rgba(0,0,0,.25);display:flex;flex-direction:column;overflow:hidden;height:100%}.members-title[_ngcontent-%COMP%]{color:grey;font-size:24px;font-weight:300;letter-spacing:2px;text-transform:uppercase}.members-text[_ngcontent-%COMP%]{font-size:18px;margin-bottom:20px}.members-btn[_ngcontent-%COMP%]{background-color:#fff;border:1px solid grey;color:#868686;padding:.5rem;text-transform:uppercase;display:block;width:100%;margin-top:auto;text-align:center;transition:all .4s ease-in-out}.members-btn[_ngcontent-%COMP%]:hover{background:#868686;color:#fff}.members-image[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;position:relative;height:300px;transition:all .4s ease-in-out;cursor:pointer}.members-image[_ngcontent-%COMP%]:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%;background:#484848;opacity:.5;transition:all .4s ease-in-out}.members-image[_ngcontent-%COMP%]:hover:before{background:transparent}.members-wrapper[_ngcontent-%COMP%]{padding:20px;display:flex;flex-direction:column;flex:1}@media (max-width:600px){h1[_ngcontent-%COMP%]{font-size:30px}.card[_ngcontent-%COMP%]{box-shadow:none;border:1px solid #868686}}'],changeDetection:0}),e})(),data:{id:"lab-members",collection:"pages"},resolve:{page:b.a}},{path:":id",component:(()=>{class e{constructor(e){this.activatedRoute=e}ngOnInit(){this.item=this.activatedRoute.snapshot.data.meta}}return e.\u0275fac=function(t){return new(t||e)(d.Hb(i.a))},e.\u0275cmp=d.Bb({type:e,selectors:[["zg-lab-member"]],decls:12,vars:5,consts:[[1,"main","flex","jc-center","ai-center"],[1,"ta-center","b-b"],[1,"grid","jc-between","m-y-xl"],[1,"col-6","members-image",3,"ngStyle"],[1,"col-6","members-info","p-x-l"],[1,"button-wrapper","flex","jc-end"],["routerLink","/lab-members",1,"members-btn"]],template:function(e,t){1&e&&(d.Kb(0,"div",0),d.Kb(1,"h1",1),d.fc(2),d.Jb(),d.Jb(),d.Kb(3,"div",2),d.Ib(4,"div",3),d.Kb(5,"div",4),d.Kb(6,"h3"),d.fc(7),d.Jb(),d.Ib(8,"scully-content"),d.Kb(9,"div",5),d.Kb(10,"a",6),d.fc(11,"Other Members"),d.Jb(),d.Jb(),d.Jb(),d.Jb()),2&e&&(d.xb(2),d.gc(t.item.title),d.xb(2),d.Xb("ngStyle",d.Zb(3,x,"url("+t.item.image+")")),d.xb(3),d.gc(t.item.title))},directives:[p.k,o.a,i.f],styles:[".main[_ngcontent-%COMP%]{height:500px;border-bottom:3px solid #323037}.b-b[_ngcontent-%COMP%]{border-bottom:2px solid #323037}.members-text[_ngcontent-%COMP%]{font-size:18px}.members-title[_ngcontent-%COMP%]{color:grey;font-size:24px;font-weight:300;letter-spacing:2px;text-transform:uppercase}.members-image[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;position:relative;height:500px;cursor:pointer}.members-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.button-wrapper[_ngcontent-%COMP%]{margin-top:auto}.members-btn[_ngcontent-%COMP%]{outline:none;border:1px solid #868686;color:#868686;font-size:20px;padding:10px 20px;border-radius:4px;font-weight:400;transition:all .4s ease-in-out}.members-btn[_ngcontent-%COMP%]:hover{color:#fff;background:#868686}"],changeDetection:0}),e})(),data:{collection:"lab-members"},resolve:{meta:c.a}}];let v=(()=>{class e{}return e.\u0275mod=d.Fb({type:e}),e.\u0275inj=d.Eb({factory:function(t){return new(t||e)},imports:[[i.g.forChild(h)],i.g]}),e})(),O=(()=>{class e{}return e.\u0275mod=d.Fb({type:e}),e.\u0275inj=d.Eb({factory:function(t){return new(t||e)},imports:[[o.b,v,r.a]]}),e})()}}]);