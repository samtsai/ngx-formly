webpackJsonp([31],{0:function(e,o,t){e.exports=t("6Wgd")},"1ITJ":function(e,o,t){function n(e){var o=i[e];return o?Promise.all(o.slice(1).map(t.e)).then(function(){return t(o[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var i={"./advanced/multi-step-form/config.module":["w7Yp",27,0],"./advanced/repeating-section/config.module":["GUYg",1,0],"./bootstrap-formly/select/config.module":["Gnan",26,0],"./bootstrap-formly/table-rows/config.module":["tyNG",25,0],"./bootstrap-specific/advanced-layout/config.module":["E3Ww",24,0],"./bootstrap-specific/bootstrap-horizontal/config.module":["3LwM",7,0],"./bootstrap-specific/input-add-ons/config.module":["UEHC",23,0],"./examples/examples.module":["htB7",29],"./field-options/default-value/config.module":["1IIP",22,0],"./field-options/expression-properties/config.module":["Euvw",21,0],"./field-options/hide-fields/config.module":["IuUL",20,0],"./field-options/model-options/config.module":["Y7XJ",19,0],"./form-options/form-state/config.module":["4/0r",18,0],"./form-options/reset-model/config.module":["9bHw",17,0],"./guides/guides.module":["Z/7V",28],"./introduction/config.module":["CTb6",6,0],"./other/advanced-layout-flex/config.module":["OmQX",3,0],"./other/button/config.module":["xwYZ",5,0],"./other/cascaded-select/config.module":["joJx",16,0],"./other/json-powered/config.module":["99Cc",2,0],"./other/nested-formly-forms/config.module":["1C2E",4,0],"./validation/built-in-validations/config.module":["/dHa",15,0],"./validation/custom-validation/config.module":["gG8r",14,0],"./validation/disable-submit-button/config.module":["4qJP",13,0],"./validation/force-show-error/config.module":["+vt3",12,0],"./validation/matching-two-fields/config.module":["3uPq",11,0],"./validation/toggle-required/config.module":["53cc",10,0],"./validation/unique-value-async-validation/config.module":["sWYR",9,0],"./validation/validation-message/config.module":["guOk",8,0]};n.keys=function(){return Object.keys(i)},n.id="1ITJ",e.exports=n},"6Wgd":function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t("/oeL"),i=t("Qa4U"),a=t("6Xbx"),r=t("fc+i"),s=t("fL27"),c=t("BkNc"),d=t("nqtx"),l=t("Xa16"),p=function(){function e(){}return e=a.b([Object(n.o)({selector:"formly-app",template:t("XUmN")})],e)}(),m=function(){function e(){}return e=a.b([Object(n.o)({selector:"formly-app-home",template:t("cW9y"),styles:[t("GPH1")]})],e)}(),u=function(){function e(){}return e=a.b([Object(n.M)({declarations:[p,m],imports:[r.a,s.a,l.b,d.a,c.g.forRoot([{path:"",component:m},{path:"guide",loadChildren:"./guides/guides.module#GuidesModule"},{path:"examples",loadChildren:"./examples/examples.module#ExamplesModule"}])],bootstrap:[p]})],e)}();Object(n._23)(),Object(i.a)().bootstrapModule(u).catch(function(e){return console.log(e)})},GPH1:function(e,o,t){(e.exports=t("rP7Y")(!1)).push([e.i,".docs-header-background{overflow:hidden}.docs-header-section{text-align:center;padding-top:10px}.docs-header-headline h1{font-size:56px;font-weight:300;line-height:56px;margin:15px 5px}.docs-header-headline h2{font-size:18px;font-weight:300;line-height:28px;margin:15px 0 25px 0}.docs-homepage-promo{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:16px}.docs-homepage-promo h2{font-size:25px;font-weight:400;margin:0 0 16px 0;padding:0}.docs-homepage-promo p{font-size:16px;font-weight:400;line-height:28px;margin:0 0 24px 0;padding:0}.docs-homepage-row{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:920px;margin:10px 0}.docs-homepage-row .docs-svg-image{max-width:90%}.docs-homepage-reverse-row{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.docs-header-start,.docs-homepage-bottom-start{text-align:center;margin:60px 0}.docs-homepage-promo-desc,.docs-homepage-promo-img{width:50%}.docs-homepage-promo-img{text-align:center}.docs-homepage-promo-desc{line-height:2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media (max-width:720px){.docs-header-section{padding-top:15px}.docs-header-start,.docs-homepage-bottom-start,.docs-homepage-row{margin:15px 0}}",""]),e.exports=e.exports.toString()},XUmN:function(e,o){e.exports='<ngx-loading-bar [color]="\'#fafafa\'"></ngx-loading-bar>\n<mat-sidenav-container fullscreen>\n  <mat-toolbar color="primary" class="mat-elevation-z6">\n    <a mat-button routerLink="">\n      <img style="height: 26px; margin: 0 4px 3px 0;" src="https://material.angular.io/assets/img/homepage/angular-white-transparent.svg" alt="">\n      FORMLY\n    </a>\n\n    <a mat-button routerLink="guide">Guides</a>\n    <a mat-button routerLink="examples">Examples</a>\n\n    <span class="spacer" [style.flex]="\'1 1 auto\'"></span>\n\n    <a mat-button href="https://github.com/formly-js/ngx-formly">\n      <img style="height: 26px;" src="https://material.angular.io/assets/img/homepage/github-circle-white-transparent.svg" alt="">\n      GitHub\n    </a>\n  </mat-toolbar>\n\n  <router-outlet></router-outlet>\n</mat-sidenav-container>\n'},Xa16:function(e,o,t){"use strict";var n=t("6Xbx"),i=t("/oeL"),a=t("qbdv"),r=t("jk5D"),s=t("e0rv"),c=t("YXpL"),d=t("vgc3"),l=t("ghl+"),p=t("dYU3"),m=t("ZFRd"),u=function(){function e(){}return e.prototype.copyText=function(e){this.createTextareaAndSelect(e);var o=document.execCommand("copy");return this.removeFake(),o},e.prototype.createTextareaAndSelect=function(e){this.textarea=document.createElement("textarea"),this.textarea.style.fontSize="12pt",this.textarea.classList.add("cdk-visually-hidden");var o=window.pageYOffset||document.documentElement.scrollTop;this.textarea.style.top=o+"px",this.textarea.setAttribute("readonly",""),this.textarea.value=e,document.body.appendChild(this.textarea),this.textarea.select(),this.textarea.setSelectionRange(0,this.textarea.value.length)},e.prototype.removeFake=function(){this.textarea&&(document.body.removeChild(this.textarea),this.textarea=null)},e=n.b([Object(i.C)()],e)}(),g=function(){function e(e,o){this.copier=e,this.componentFactoryResolver=o,this.showSource=!1}return e.prototype.ngOnInit=function(){var e=this.componentFactoryResolver.resolveComponentFactory(this.component);this.demoComponentRef=this.demoRef.createComponent(e)},e.prototype.ngOnDestroy=function(){this.demoComponentRef&&this.demoComponentRef.destroy()},e.prototype.toggleSourceView=function(){this.showSource=!this.showSource},e.prototype.copySource=function(e){this.copier.copyText(e.innerText)},n.b([Object(i.F)(),n.d("design:type",Object)],e.prototype,"title",void 0),n.b([Object(i.F)(),n.d("design:type",Object)],e.prototype,"description",void 0),n.b([Object(i.F)(),n.d("design:type",Object)],e.prototype,"component",void 0),n.b([Object(i.F)(),n.d("design:type",Array)],e.prototype,"example",void 0),n.b([Object(i._16)("demo",{read:i._18}),n.d("design:type","function"==typeof(o=void 0!==i._18&&i._18)&&o||Object)],e.prototype,"demoRef",void 0),e=n.b([Object(i.o)({selector:"formly-example-viewer",template:t("p6Aw"),styles:[t("iGED")]}),n.d("design:paramtypes",["function"==typeof(a=void 0!==u&&u)&&a||Object,"function"==typeof(r=void 0!==i.q&&i.q)&&r||Object])],e);var o,a,r}(),f=t("BkNc"),h=function(){function e(e){this.router=e}return e=n.b([Object(i.o)({selector:"formly-examples-viewer",template:'\n    <ng-container *ngIf="router.data | async as data">\n      <formly-example-viewer *ngFor="let example of data.examples"\n        [title]="example.title"\n        [description]="example.description"\n        [component]="example.component"\n        [example]="example.files">\n      </formly-example-viewer>\n    </ng-container>\n  '}),n.d("design:paramtypes",["function"==typeof(o=void 0!==f.a&&f.a)&&o||Object])],e);var o}(),x=function(){function e(){}return e=n.b([Object(i.M)({imports:[a.b,r.a,m.a,d.a,l.a],exports:[a.b,s.a,c.a,d.a,l.a,p.a,m.a,h],declarations:[g,h],providers:[u]})],e)}();t.d(o,"b",function(){return x}),t.d(o,"a",function(){return h})},cW9y:function(e,o){e.exports='<header class="docs-header-background">\n  <div class="docs-header-section">\n    <div class="docs-header-headline">\n      <h1 class="mat-h1"> Angular Formly</h1>\n      <h2>Dynamic Forms for ANGULAR</h2>\n    </div>\n    <div class="docs-header-start">\n      <a mat-raised-button class="docs-button" routerLink="/guide/getting-started">Get started</a>\n    </div>\n  </div>\n</header>\n\n<div class="docs-homepage-promo">\n  <div class="docs-homepage-row">\n    <div class="docs-homepage-promo-img"></div>\n    <div class="docs-homepage-promo-desc">\n      <h2>What is Formly</h2>\n      <p>\n        `ngx-formly` is an Angular module which has a Components to help customize and render JavaScript/JSON configured forms. The\n        `formly-form` Component and the `FormlyConfig` service are very powerful and bring unmatched maintainability to your applications\n        forms.\n      </p>\n    </div>\n  </div>\n  <div class="docs-homepage-row docs-homepage-reverse-row">\n    <div class="docs-homepage-promo-img"></div>\n    <div class="docs-homepage-promo-desc">\n      <h2>Simpler than cake</h2>\n      <p>\n        Do it yourself templates through `formlyConfig` service, and fully customizable for when you need to stay on-brand or just\n        have extra field type.\n      </p>\n    </div>\n  </div>\n  <div class="docs-homepage-row">\n    <div class="docs-homepage-promo-img"></div>\n    <div class="docs-homepage-promo-desc">\n      <h2>One developer, many frameworks</h2>\n      <p>\n        A single Web development team is now a cross-framework application powerhouse. Focus more energy on building better experiences,\n      and less energy on making experiences consistent across development teams and frameworks.\n      </p>\n    </div>\n  </div>\n  <div class="docs-homepage-row docs-homepage-reverse-row">\n    <div class="docs-homepage-promo-img"></div>\n    <div class="docs-homepage-promo-desc">\n      <h2>Optimized for Angular</h2>\n      <p>\n        Built by the Angular team to integrate seamlessly with Angular.\n      </p>\n    </div>\n  </div>\n  <div class="docs-homepage-bottom-start">\n    <a mat-raised-button class="docs-button" routerLink="/guide/getting-started">Get started</a>\n  </div>\n</div>\n\n\x3c!-- <app-footer></app-footer> --\x3e\n'},iGED:function(e,o,t){(e.exports=t("rP7Y")(!1)).push([e.i,":host{display:block;padding:20px 0}.docs-example-viewer-wrapper h3{margin-top:10px}.docs-example-viewer-title{-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:8px 20px}.docs-example-viewer-title-spacer{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.docs-example-source-copy{position:absolute;top:8px;display:none}.docs-example-source-wrapper:hover .docs-example-source-copy{display:inline-block}.docs-example-source{min-height:150px}.docs-example-viewer-body{padding:30px}",""]),e.exports=e.exports.toString()},p6Aw:function(e,o){e.exports='<div class="docs-example-viewer-wrapper">\n  <div class="docs-example-viewer-title">\n    <div class="docs-example-viewer-title-spacer">{{ title }}</div>\n    <button mat-icon-button type="button" (click)="toggleSourceView()" [matTooltip]="\'View source\'">\n      <mat-icon>\n        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet"\n          focusable="false">\n          <path fill="none" d="M0 0h24v24H0V0z"></path>\n          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>\n        </svg>\n      </mat-icon>\n    </button>\n  </div>\n\n  <div class="docs-example-viewer-source" *ngIf="showSource">\n    <mat-tab-group>\n      <mat-tab *ngFor="let f of example" [label]="f.file">\n        <div class="docs-example-source-wrapper">\n          <button mat-icon-button type="button" class="docs-example-source-copy" title="Copy example source" aria-label="Copy example source to clipboard"\n            (click)="copySource(textContent)">\n            <mat-icon class="fa fa-copy"></mat-icon>\n          </button>\n          <pre class="docs-example-source" [innerHtml]="f.content" #textContent></pre>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n\n  <div class="docs-example-viewer-body">\n    <div class="alert alert-info" *ngIf="description" [innerHtml]="description"></div>\n    <ng-template #demo></ng-template>\n\n    <div *ngIf="demoComponentRef">\n      <h3>Form Data</h3>\n      <pre>{{ demoComponentRef.instance.model | json }}</pre>\n    </div>\n  </div>\n</div>\n'}},[0]);