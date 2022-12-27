"use strict";(self.webpackChunkecommerce_f=self.webpackChunkecommerce_f||[]).push([[623],{3623:(J,f,c)=>{c.r(f),c.d(f,{ProductsModule:()=>u});var i=c(6895),a=c(3128),t=c(8256),m=c(7644),C=c(6943);class d{constructor(e,n,r){this.authService=e,this.template=n,this.container=r}ngAfterViewInit(){this.authService.token?this.container.createEmbeddedView(this.template):this.container.clear()}}function P(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(h){t.CHM(n);const T=t.oxw();return t.KtG(T.addToCart(h))}),t._uU(1,"Add to Cart"),t.qZA()}}d.\u0275fac=function(e){return new(e||d)(t.Y36(m.e8),t.Y36(t.Rgc),t.Y36(t.s_b))},d.\u0275dir=t.lG2({type:d,selectors:[["","appAuthAccess",""]]});const y=function(o){return{"background-image":o}};class p{constructor(e){this.cartService=e,this.product={}}ngOnInit(){}addToCart(e){e.stopPropagation(),this.cartService.addToCart({productId:this.product.id,quantity:1}).subscribe()}}p.\u0275fac=function(e){return new(e||p)(t.Y36(m.Ni))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-product-card"]],inputs:{product:"product"},decls:14,vars:10,consts:[[1,"card"],[1,"card-image",3,"ngStyle"],[1,"title"],[1,"desc"],[1,"d-flex","justify-content-between","align-items-center","p-2"],[1,"price"],["type","button","class","btn btn-outline-primary me-2",3,"click",4,"appAuthAccess"],["type","button",1,"btn","btn-outline-primary","me-2",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2)(3,"i"),t._uU(4),t.qZA()(),t.TgZ(5,"div",3)(6,"p"),t._uU(7),t.qZA()(),t.TgZ(8,"div",4)(9,"div",5),t._uU(10),t.ALo(11,"currency"),t.qZA(),t.TgZ(12,"div"),t.YNc(13,P,2,0,"button",6),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("ngStyle",t.VKq(8,y,"url("+n.product.image+")")),t.xp6(3),t.Oqu(n.product.name),t.xp6(3),t.Oqu(n.product.description),t.xp6(3),t.hij(" ",t.Dn7(11,4,n.product.price,"USD",!0)," "))},dependencies:[i.PC,d,i.H9],styles:[".card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:100%;border:1px solid #ccc;border-radius:4px;box-shadow:0 0 1px #00000024}.card-image[_ngcontent-%COMP%]{width:100%;height:300px;background-size:cover;background-position:center}h3[_ngcontent-%COMP%]{margin:0;font-size:1.2rem;font-weight:400}.price[_ngcontent-%COMP%]{font-size:1.5rem;margin:0;color:#000}.title[_ngcontent-%COMP%]{text-align:center;margin-bottom:10px}i[_ngcontent-%COMP%]{font-size:30px}.desc[_ngcontent-%COMP%]{color:#666b85;margin-left:10px}.category[_ngcontent-%COMP%]{text-align:start}"]});var g=c(433);const v=function(){return["/products"]},_=function(o){return{category:o}};function x(o,e){if(1&o&&(t.TgZ(0,"a",9),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.Q6J("routerLink",t.DdM(3,v))("queryParams",t.VKq(4,_,n.id)),t.xp6(1),t.hij(" ",n.name," ")}}function A(o,e){1&o&&t._UZ(0,"app-product-card",12),2&o&&t.Q6J("product",e.$implicit)}function b(o,e){if(1&o&&(t.TgZ(0,"div",10),t.YNc(1,A,1,1,"app-product-card",11),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.products)}}function M(o,e){1&o&&(t.TgZ(0,"div",13)(1,"h3",14),t._uU(2,"No products found \u{1f6d2} !"),t.qZA()())}class l{constructor(e,n,r){this.productService=e,this.categoryService=n,this.route=r,this.products=[],this.categories$=this.categoryService.getAll()}ngOnInit(){this.route.queryParams.subscribe(e=>{this.categoryId=e.category,this.search=e.search,this.getProducts()})}getProducts(){this.productService.getProducts({categoryId:this.categoryId||null,search:this.search||null}).pipe().subscribe(n=>{this.products=n})}searchHandle(e){this.search=e,this.getProducts()}}l.\u0275fac=function(e){return new(e||l)(t.Y36(m.su),t.Y36(C.H),t.Y36(a.gz))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-products"]],decls:13,vars:8,consts:[[1,"d-flex","gap-4"],[1,"sidebar"],[1,"list-group"],[1,"list-group-item","list-group-item-action","all-categories",3,"routerLink"],["routerLinkActive","active","class","list-group-item list-group-item-action",3,"routerLink","queryParams",4,"ngFor","ngForOf"],[1,"flex-fill"],["type","search","placeholder","Search",1,"form-control",3,"ngModel","ngModelChange"],["class","product-items",4,"ngIf","ngIfElse"],["noProducts",""],["routerLinkActive","active",1,"list-group-item","list-group-item-action",3,"routerLink","queryParams"],[1,"product-items"],[3,"product",4,"ngFor","ngForOf"],[3,"product"],[1,"no-product"],[1,"total"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),t._uU(4,"All"),t.qZA(),t.YNc(5,x,2,6,"a",4),t.ALo(6,"async"),t.qZA()(),t.TgZ(7,"div",5)(8,"div")(9,"input",6),t.NdJ("ngModelChange",function(h){return n.searchHandle(h)}),t.qZA()(),t.YNc(10,b,2,1,"div",7),t.YNc(11,M,3,0,"ng-template",null,8,t.W1O),t.qZA()()),2&e){const r=t.MAs(12);t.xp6(3),t.Q6J("routerLink",t.DdM(7,v)),t.xp6(2),t.Q6J("ngForOf",t.lcZ(6,5,n.categories$)),t.xp6(4),t.Q6J("ngModel",n.search),t.xp6(1),t.Q6J("ngIf",n.products.length)("ngIfElse",r)}},dependencies:[i.sg,i.O5,a.rH,a.Od,p,g.Fj,g.JJ,g.On,i.Ov],styles:[".sidebar[_ngcontent-%COMP%]{width:200px}.product-items[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:20px;margin:20px 0}.all-categories[_ngcontent-%COMP%]{background-color:#4e5066;color:#000}.total[_ngcontent-%COMP%]{margin:100px 0;text-align:center}"]});const Z=[{path:"",component:l}];class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[a.Bz.forChild(Z),a.Bz]});var O=c(7938);class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[i.ez,s,O.$,g.u5]})}}]);