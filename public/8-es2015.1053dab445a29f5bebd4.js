(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{zsQL:function(t,e,n){"use strict";n.r(e),n.d(e,"PublicationsModule",(function(){return v}));var i=n("sbAP"),o=n("tyNb"),a=n("fs1m"),r=n("nYpW"),c=n("lJxs"),b=n("zP0r"),p=n("1G5W"),s=n("fXoL"),l=n("ofXK");function d(t,e){if(1&t&&(s.Kb(0,"div",13),s.Kb(1,"p",14),s.Kb(2,"span",15),s.fc(3),s.Jb(),s.Kb(4,"b"),s.fc(5),s.Jb(),s.Ib(6,"br"),s.Kb(7,"span"),s.fc(8),s.Jb(),s.Jb(),s.Kb(9,"a",16),s.fc(10,"Publication"),s.Jb(),s.Jb()),2&t){const t=e.$implicit;s.xb(3),s.gc(t.name),s.xb(2),s.gc(t.title),s.xb(3),s.gc(t.description),s.xb(1),s.Xb("routerLink",t.route)}}function u(t,e){if(1&t&&(s.Kb(0,"div",10),s.Kb(1,"h2",11),s.fc(2),s.Jb(),s.ec(3,d,11,4,"div",12),s.Jb()),2&t){const t=e.$implicit;s.xb(2),s.gc(t.year),s.xb(1),s.Xb("ngForOf",t.publications)}}let g=(()=>{class t extends r.a{constructor(t,e,n){super(),this.scully=t,this.activatedRoute=e,this.cdr=n}ngOnInit(){this.items$=this.scully.available$.pipe(Object(c.a)(t=>t.filter(t=>t.route.includes("/publications/")))),this.page=this.activatedRoute.snapshot.data.page,this.activatedRoute.data.pipe(Object(b.a)(1),Object(p.a)(this.destroyed$)).subscribe(({page:t})=>{this.page=t,this.cdr.markForCheck()})}}return t.\u0275fac=function(e){return new(e||t)(s.Hb(i.c),s.Hb(o.a),s.Hb(s.h))},t.\u0275cmp=s.Bb({type:t,selectors:[["zg-publications"]],features:[s.vb],decls:14,vars:5,consts:[[1,"main","flex","jc-center","ai-center"],[1,"ta-center","b-b"],[1,"m-y-xl"],[1,"grid"],[1,"col-12","ta-center"],[1,"col-10","flex","jc-center","pub-wrapper"],[1,"pub-sidebar","m-t-m"],["name","","id","",1,"pub-select"],[1,"col-8","pub-container","m-t-m"],["class","year-wrapper m-y-m",4,"ngFor","ngForOf"],[1,"year-wrapper","m-y-m"],[1,"pub-year"],["class","wrapper flex p-x-l fw-wrap",4,"ngFor","ngForOf"],[1,"wrapper","flex","p-x-l","fw-wrap"],[1,"publication"],[1,"name"],[1,"link",3,"routerLink"]],template:function(t,e){1&t&&(s.Kb(0,"div",0),s.Kb(1,"h1",1),s.fc(2),s.Jb(),s.Jb(),s.Kb(3,"section",2),s.Kb(4,"div",3),s.Kb(5,"div",4),s.Kb(6,"h2"),s.fc(7),s.Jb(),s.Jb(),s.Kb(8,"div",5),s.Kb(9,"div",6),s.Ib(10,"select",7),s.Jb(),s.Kb(11,"div",8),s.ec(12,u,4,2,"div",9),s.Tb(13,"async"),s.Jb(),s.Jb(),s.Jb(),s.Jb()),2&t&&(s.xb(2),s.gc(e.page.title),s.xb(5),s.gc(e.page.title),s.xb(5),s.Xb("ngForOf",s.Ub(13,3,e.items$)))},directives:[l.i,o.f],pipes:[l.b],styles:['.main[_ngcontent-%COMP%]{height:500px;border-bottom:3px solid #323037}.b-b[_ngcontent-%COMP%]{border-bottom:2px solid #323037}.publication[_ngcontent-%COMP%]{width:100%;font-size:20px}.link[_ngcontent-%COMP%]{font-size:23px;text-decoration:underline}body[_ngcontent-%COMP%]{background:#aaa!important}.pub-select[_ngcontent-%COMP%]{position:relative;color:#919090;width:80%;border:1px solid #d8d8d8;border-radius:2px;text-align:center;-moz-text-align-last:center;text-align-last:center;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;font-size:15px;padding:10px 24px 10px 10px}.pub-select[_ngcontent-%COMP%]:after{content:"";position:absolute;right:25px;top:14px;border-bottom:2px solid #989797;border-right:2px solid #989797;transform:rotate(45deg);width:9px;height:9px}.pub-sidebar[_ngcontent-%COMP%]{width:350px}.pub-container[_ngcontent-%COMP%]{border-left:1px solid #868686}.pub-wrapper[_ngcontent-%COMP%]{border:1px solid #868686;padding:20px}.pub-year[_ngcontent-%COMP%]{letter-spacing:normal;font-size:24px;font-weight:400;margin-top:0;position:relative;text-align:left;color:#adadaf;width:100%;margin-left:70px}.pub-year[_ngcontent-%COMP%]:before{position:absolute;right:100%;left:-88px;top:2px;width:16px;height:16px;border:5px solid #fff;background:#b8b8ba;content:"";border-radius:100%;outline:none;background-clip:padding-box;overflow:hidden}'],changeDetection:0}),t})(),f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Bb({type:t,selectors:[["zg-publication"]],decls:2,vars:0,template:function(t,e){1&t&&(s.Kb(0,"p"),s.fc(1,"publication works!"),s.Jb())},styles:[""],changeDetection:0}),t})();var x=n("ZA+g");const m=[{path:"",component:g,data:{id:"publications",collection:"pages"},resolve:{page:a.a}},{path:":id",component:f,data:{collection:"publications"},resolve:{meta:x.a}}];let h=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[o.g.forChild(m)],o.g]}),t})();var w=n("d2mR");let v=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[i.b,h,w.a]]}),t})()}}]);