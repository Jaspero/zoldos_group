(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{zsQL:function(t,e,i){"use strict";i.r(e),i.d(e,"PublicationsModule",(function(){return f}));var a=i("sbAP"),n=i("tyNb"),c=i("fs1m"),o=i("nYpW"),s=i("lJxs"),u=i("zP0r"),r=i("1G5W"),l=i("fXoL");let b=(()=>{class t extends o.a{constructor(t,e,i){super(),this.scully=t,this.activatedRoute=e,this.cdr=i}ngOnInit(){this.items$=this.scully.available$.pipe(Object(s.a)(t=>t.filter(t=>t.route.includes("/publications/")))),this.page=this.activatedRoute.snapshot.data.page,this.activatedRoute.data.pipe(Object(u.a)(1),Object(r.a)(this.destroyed$)).subscribe(({page:t})=>{this.page=t,this.cdr.markForCheck()})}}return t.\u0275fac=function(e){return new(e||t)(l.Hb(a.c),l.Hb(n.a),l.Hb(l.h))},t.\u0275cmp=l.Bb({type:t,selectors:[["zg-publications"]],features:[l.vb],decls:20,vars:0,consts:[[1,"main","flex","jc-center","ai-center"],[1,"col-5","c-light","z-index","ta-center"],[1,"m-y-xl"],[1,"grid"],[1,"col-12","ta-center"],[1,"col-12","flex","fw-wrap"],["href","",1,"publication"],["href","",1,"m-y-s","publication"]],template:function(t,e){1&t&&(l.Kb(0,"div",0),l.Kb(1,"div",1),l.Kb(2,"h1"),l.ec(3,"Publications"),l.Jb(),l.Jb(),l.Jb(),l.Kb(4,"section",2),l.Kb(5,"div",3),l.Kb(6,"div",4),l.Kb(7,"h2"),l.ec(8,"Publications"),l.Jb(),l.Jb(),l.Kb(9,"div",5),l.Kb(10,"a",6),l.ec(11,"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"),l.Jb(),l.Kb(12,"a",7),l.ec(13,"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),l.Jb(),l.Kb(14,"a",6),l.ec(15,"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."),l.Jb(),l.Kb(16,"a",7),l.ec(17,"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu"),l.Jb(),l.Kb(18,"a",6),l.ec(19,"Sed ut perspiciatis unde omnis iste natus "),l.Jb(),l.Jb(),l.Jb(),l.Jb())},styles:[".main[_ngcontent-%COMP%]{height:100vh;background-image:url(publications.0996baa1dd6913274fe8.jpg);background-repeat:no-repeat;background-position:50%;background-size:cover;margin-top:-65px}.publication[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),t})(),p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Bb({type:t,selectors:[["zg-publication"]],decls:2,vars:0,template:function(t,e){1&t&&(l.Kb(0,"p"),l.ec(1,"publication works!"),l.Jb())},styles:[""],changeDetection:0}),t})();var d=i("ZA+g");const m=[{path:"",component:b,data:{id:"publications",collection:"pages"},resolve:{page:c.a}},{path:":id",component:p,data:{collection:"publications"},resolve:{meta:d.a}}];let g=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(e){return new(e||t)},imports:[[n.g.forChild(m)],n.g]}),t})();var h=i("d2mR");let f=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(e){return new(e||t)},imports:[[a.b,g,h.a]]}),t})()}}]);