"use strict";(self.webpackChunksrl_web=self.webpackChunksrl_web||[]).push([[749],{6749:(L,h,s)=>{s.r(h),s.d(h,{LoginModule:()=>m});var w=s(6895),i=s(9299),r=s(4006),o=s(4650),Z=s(4296),f=s(4691),b=s(8423),y=s(7185);function F(n,t){1&n&&(o.TgZ(0,"div",19),o._uU(1," username is required "),o.qZA())}function P(n,t){if(1&n&&(o.TgZ(0,"div"),o.YNc(1,F,2,0,"div",18),o.qZA()),2&n){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.submitted&&e.f.username.errors.required)}}class d{constructor(t,e,a,c,g){this.formBuilder=t,this.authService=e,this.http=a,this.spinner=c,this.toast=g,this.submitted=!1,this.corporates=[],this.loginForm=this.formBuilder.group({username:["",[r.kI.required]],password:["",[r.kI.required,r.kI.minLength(4),r.kI.maxLength(12)]]})}ngOnInit(){}get f(){return this.loginForm.controls}login(t){this.submitted=!0,!this.loginForm.invalid&&this.authService.login(t)}getCorporates(){this.spinner.show(),this.http.get("corporates").subscribe(t=>{this.spinner.hide(),"success"===t.message&&(this.corporates=t.result)},t=>{this.spinner.hide(),this.toast.error("Something went wrong")})}}d.\u0275fac=function(t){return new(t||d)(o.Y36(r.qu),o.Y36(Z.e),o.Y36(f.O),o.Y36(b.t2),o.Y36(y._W))},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-login"]],decls:24,vars:2,consts:[[1,"container-fluid","h-100"],[1,"row","h-100","justify-content-center","align-items-center"],[1,"card","login","bg-info"],[1,"card-header"],[1,"text-light",2,"margin-bottom","0"],[1,"fa","fa-lock"],[1,"card-body","bg-light"],[3,"formGroup","ngSubmit"],["form","ngForm"],[1,"input-group","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"fa","fa-user"],["type","tel","name","username","formControlName","username","placeholder","Enter username",1,"form-control","form-control-sm"],[4,"ngIf"],["type","password","formControlName","password","placeholder","Enter password",1,"form-control","form-control-sm"],["type","submit","name","login","value","Login",1,"btn","btn-block","btn-info"],["routerLink","/auth/forgot-password",1,"btn","btn-link"],["class","error",4,"ngIf"],[1,"error"]],template:function(t,e){if(1&t){const a=o.EpF();o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),o._UZ(5,"i",5),o._uU(6," Login "),o.qZA()(),o.TgZ(7,"div",6)(8,"form",7,8),o.NdJ("ngSubmit",function(){o.CHM(a);const g=o.MAs(9);return o.KtG(e.login(g))}),o.TgZ(10,"div",9)(11,"div",10)(12,"span",11),o._UZ(13,"i",12),o.qZA()(),o._UZ(14,"input",13),o.qZA(),o.YNc(15,P,2,1,"div",14),o.TgZ(16,"div",9)(17,"div",10)(18,"span",11),o._UZ(19,"i",5),o.qZA()(),o._UZ(20,"input",15),o.qZA(),o._UZ(21,"input",16),o.qZA(),o.TgZ(22,"a",17),o._uU(23,"Forgot Password ?"),o.qZA()()()()()}2&t&&(o.xp6(8),o.Q6J("formGroup",e.loginForm),o.xp6(7),o.Q6J("ngIf",e.f.username.errors))},dependencies:[w.O5,i.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".login[_ngcontent-%COMP%]{width:350px}"]});var T=s(5226),v=s.n(T);class l{constructor(t,e){this.formBuilder=t,this.http=e}ngOnInit(){this.forgotPasswordForm=this.formBuilder.group({email:["",[r.kI.required,r.kI.email]]})}onSubmit(){this.forgotPasswordForm.valid&&this.http.post("auth/forgot-password",this.forgotPasswordForm.value).subscribe(e=>{"success"===e.message&&v().fire("","Reset password link sent to your registered email!","success")})}}l.\u0275fac=function(t){return new(t||l)(o.Y36(r.qu),o.Y36(f.O))},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-forgot-password"]],decls:17,vars:1,consts:[[1,"container-fluid","h-100"],[1,"row","h-100","justify-content-center","align-items-center"],[1,"card","login","bg-info"],[1,"card-header"],[1,"text-light",2,"margin-bottom","0"],[1,"fa","fa-lock"],[1,"card-body","bg-light"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["type","email","id","email","formControlName","email","required","",1,"form-control"],["type","submit",1,"btn","btn-primary"],["routerLink","/auth/login",1,"btn","btn-link"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),o._UZ(5,"i",5),o._uU(6," Forgot Password "),o.qZA()(),o.TgZ(7,"div",6)(8,"form",7),o.NdJ("ngSubmit",function(){return e.onSubmit()}),o.TgZ(9,"div",8)(10,"label",9),o._uU(11,"Email:"),o.qZA(),o._UZ(12,"input",10),o.qZA(),o.TgZ(13,"button",11),o._uU(14,"Submit"),o.qZA()(),o.TgZ(15,"a",12),o._uU(16,"Login"),o.qZA()()()()()),2&t&&(o.xp6(8),o.Q6J("formGroup",e.forgotPasswordForm))},dependencies:[i.rH,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u]});class p{constructor(t,e,a,c,g){this.formBuilder=t,this.http=e,this.router=a,this.route=c,this.spinner=g}ngOnInit(){this.route.params.subscribe(t=>{null!=t.token&&(this.token=t.token)}),this.resetPasswordForm=this.formBuilder.group({password:["",[r.kI.required,r.kI.minLength(6)]],confirmPassword:["",[r.kI.required,r.kI.minLength(6)]]})}onSubmit(){if(this.resetPasswordForm.valid){let t={password:this.resetPasswordForm.value.password,token:this.token};this.spinner.show(),this.http.post("auth/reset-password",t).subscribe(e=>{this.spinner.hide(),"success"===e.message&&(v().fire("Login with new password to continue","Password reset succesfullyl!","success"),this.router.navigate(["/auth/login"]))},e=>{this.spinner.hide()})}}}p.\u0275fac=function(t){return new(t||p)(o.Y36(r.qu),o.Y36(f.O),o.Y36(i.F0),o.Y36(i.gz),o.Y36(b.t2))},p.\u0275cmp=o.Xpm({type:p,selectors:[["app-reset-password"]],decls:21,vars:1,consts:[[1,"container-fluid","h-100"],[1,"row","h-100","justify-content-center","align-items-center"],[1,"card","login","bg-info"],[1,"card-header"],[1,"text-light",2,"margin-bottom","0"],[1,"fa","fa-lock"],[1,"card-body","bg-light"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","password"],["type","password","id","password","formControlName","password","required","",1,"form-control"],["for","confirmPassword"],["type","password","id","confirmPassword","formControlName","confirmPassword","required","",1,"form-control"],["type","submit",1,"btn","btn-primary"],["routerLink","/auth/login",1,"btn","btn-link"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),o._UZ(5,"i",5),o._uU(6," Reset Password "),o.qZA()(),o.TgZ(7,"div",6)(8,"form",7),o.NdJ("ngSubmit",function(){return e.onSubmit()}),o.TgZ(9,"div",8)(10,"label",9),o._uU(11,"New Password:"),o.qZA(),o._UZ(12,"input",10),o.qZA(),o.TgZ(13,"div",8)(14,"label",11),o._uU(15,"Confirm Password:"),o.qZA(),o._UZ(16,"input",12),o.qZA(),o.TgZ(17,"button",13),o._uU(18,"Reset Password"),o.qZA()(),o.TgZ(19,"a",14),o._uU(20,"Login"),o.qZA()()()()()),2&t&&(o.xp6(8),o.Q6J("formGroup",e.resetPasswordForm))},dependencies:[i.rH,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u]});const C=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:d},{path:"forgot-password",component:l},{path:"reset-password/:token",component:p}];class u{}u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=o.oAB({type:u}),u.\u0275inj=o.cJS({imports:[i.Bz.forChild(C),i.Bz]});class m{}m.\u0275fac=function(t){return new(t||m)},m.\u0275mod=o.oAB({type:m}),m.\u0275inj=o.cJS({imports:[w.ez,u,r.u5,r.UX]})}}]);