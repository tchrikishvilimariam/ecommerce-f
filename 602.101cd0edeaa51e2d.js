"use strict";(self.webpackChunkecommerce_f=self.webpackChunkecommerce_f||[]).push([[602],{7602:(_,g,s)=>{s.r(g),s.d(g,{CategoriesModule:()=>u});var l=s(6895),m=s(3128),t=s(8256),p=s(6943);const f=function(o){return["/manager/categories/edit",o]};function h(o,e){if(1&o){const r=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"button",4),t._uU(7,"Edit"),t.qZA(),t.TgZ(8,"button",5),t.NdJ("click",function(){const Z=t.CHM(r).$implicit,T=t.oxw();return t.KtG(T.deleteItem(Z.id))}),t._uU(9,"Remove"),t.qZA()()()}if(2&o){const r=e.$implicit;t.xp6(2),t.Oqu(null==r?null:r.id),t.xp6(2),t.Oqu(null==r?null:r.name),t.xp6(2),t.Q6J("routerLink",t.VKq(3,f,r.id))}}class d{constructor(e){this.categoryService=e,this.categories=[]}ngOnInit(){this.getAll()}getAll(){this.categoryService.getAll().pipe().subscribe(e=>{this.categories=e})}deleteItem(e){this.categoryService.deleteItem(e).pipe().subscribe(()=>{this.getAll()})}}d.\u0275fac=function(e){return new(e||d)(t.Y36(p.H))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-categories"]],decls:13,vars:1,consts:[[1,"p-2","d-flex","justify-content-end"],["routerLink","/manager/categories/create",1,"btn","btn-primary"],[1,"table"],[4,"ngFor","ngForOf"],[1,"btn","btn-secondary","mr-2","edit-button",3,"routerLink"],[1,"btn","btn-danger",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t._uU(2,"Add"),t.qZA()(),t.TgZ(3,"table",2)(4,"thead")(5,"tr")(6,"th"),t._uU(7,"#"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Name"),t.qZA(),t._UZ(10,"th"),t.qZA()(),t.TgZ(11,"tbody"),t.YNc(12,h,10,5,"tr",3),t.qZA()()),2&e&&(t.xp6(12),t.Q6J("ngForOf",r.categories))},dependencies:[l.sg,m.rH],styles:[".edit-button[_ngcontent-%COMP%]{background-color:#000;border:1px solid rgb(255,203,255);display:grid;margin-bottom:1.5rem}.edit-button[_ngcontent-%COMP%]   .button-delete[_ngcontent-%COMP%]{background-color:red;border:1px solid red;display:grid}"]});var i=s(433),b=s(3900),C=s(9646);function v(o,e){1&o&&(t.TgZ(0,"div"),t._uU(1,"Name is required"),t.qZA())}function y(o,e){if(1&o&&(t.TgZ(0,"div",6),t.YNc(1,v,2,0,"div",7),t.qZA()),2&o){const r=t.oxw();let n;t.xp6(1),t.Q6J("ngIf",null==(n=r.form.get("name"))||null==n.errors?null:n.errors.required)}}class a{constructor(e,r,n){this.categoryService=e,this.route=r,this.router=n,this.form=new i.cw({id:new i.NI(null),name:new i.NI("",i.kI.required)})}ngOnInit(){this.route.params.pipe((0,b.w)(e=>e.id?this.categoryService.getOne(e.id):(0,C.of)(null))).subscribe(e=>{e&&this.form.patchValue(e)})}submit(){this.form.markAllAsTouched(),!this.form.invalid&&(this.form.value.id?this.categoryService.update(this.form.value.id,this.form.value).pipe().subscribe(()=>{this.router.navigate(["/manager/categories"]).then(()=>{this.form.reset()})}):this.categoryService.create(this.form.value).pipe().subscribe(()=>{this.router.navigate(["/manager/categories"]).then(()=>{this.form.reset()})}))}}a.\u0275fac=function(e){return new(e||a)(t.Y36(p.H),t.Y36(m.gz),t.Y36(m.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-category-add-edit"]],decls:8,vars:2,consts:[[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","id","name","placeholder","Name","formControlName","name",1,"form-control"],["class","mat-error error",4,"ngIf"],["type","submit",1,"btn","btn-primary","mt-3"],[1,"mat-error","error"],[4,"ngIf"]],template:function(e,r){if(1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return r.submit()}),t.TgZ(1,"div",1)(2,"label",2),t._uU(3,"Name"),t.qZA(),t._UZ(4,"input",3),t.YNc(5,y,2,1,"div",4),t.qZA(),t.TgZ(6,"button",5),t._uU(7,"Submit"),t.qZA()()),2&e){let n;t.Q6J("formGroup",r.form),t.xp6(5),t.Q6J("ngIf",(null==(n=r.form.get("name"))?null:n.invalid)&&(null==(n=r.form.get("name"))?null:n.touched))}},dependencies:[l.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".error[_ngcontent-%COMP%]{color:red}"]});const A=[{path:"",component:d},{path:"create",component:a},{path:"edit/:id",component:a}];class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[m.Bz.forChild(A),m.Bz]});class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[l.ez,c,i.UX]})}}]);