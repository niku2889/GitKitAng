webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet>\r\n  <span class=\"loading\"></span>\r\n</router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_timepicker__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_cmp__ = __webpack_require__("../../../../../src/app/home/home.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__event_addevent_addEvent_cmp__ = __webpack_require__("../../../../../src/app/event/addevent/addEvent.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__event_eventDetails_eventDetail_cmp__ = __webpack_require__("../../../../../src/app/event/eventDetails/eventDetail.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__event_payment_payment_cmp__ = __webpack_require__("../../../../../src/app/event/payment/payment.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_header_header_cmp__ = __webpack_require__("../../../../../src/app/common/header/header.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_footer_footer_cmp__ = __webpack_require__("../../../../../src/app/common/footer/footer.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_login_login_cmp__ = __webpack_require__("../../../../../src/app/common/login/login.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_profile_profile_cmp__ = __webpack_require__("../../../../../src/app/common/profile/profile.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_logout_logout_cmp__ = __webpack_require__("../../../../../src/app/common/logout/logout.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_register_register_cmp__ = __webpack_require__("../../../../../src/app/common/register/register.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_credit_cards__ = __webpack_require__("../../../../ngx-credit-cards/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_credit_cards___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ngx_credit_cards__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_table__ = __webpack_require__("../../../../primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_primeng_table__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var routes = [];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_13__home_home_cmp__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_17__common_header_header_cmp__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_18__common_footer_footer_cmp__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_19__common_login_login_cmp__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_22__common_register_register_cmp__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__event_addevent_addEvent_cmp__["a" /* AddEventComponent */], __WEBPACK_IMPORTED_MODULE_15__event_eventDetails_eventDetail_cmp__["a" /* EventDetailComponent */], __WEBPACK_IMPORTED_MODULE_16__event_payment_payment_cmp__["a" /* PaymentComponent */], __WEBPACK_IMPORTED_MODULE_20__common_profile_profile_cmp__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_21__common_logout_logout_cmp__["a" /* LogoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ngx_carousel__["a" /* NgxCarouselModule */],
                __WEBPACK_IMPORTED_MODULE_23_ngx_credit_cards__["NgXCreditCardsModule"],
                __WEBPACK_IMPORTED_MODULE_24_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_25_primeng_table__["TableModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_cmp__ = __webpack_require__("../../../../../src/app/home/home.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_addevent_addEvent_cmp__ = __webpack_require__("../../../../../src/app/event/addevent/addEvent.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_eventDetails_eventDetail_cmp__ = __webpack_require__("../../../../../src/app/event/eventDetails/eventDetail.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_payment_payment_cmp__ = __webpack_require__("../../../../../src/app/event/payment/payment.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_profile_profile_cmp__ = __webpack_require__("../../../../../src/app/common/profile/profile.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_logout_logout_cmp__ = __webpack_require__("../../../../../src/app/common/logout/logout.cmp.ts");







var userRole = localStorage.getItem('usertype');
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_cmp__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'addevent', component: __WEBPACK_IMPORTED_MODULE_2__event_addevent_addEvent_cmp__["a" /* AddEventComponent */] },
    { path: 'eventDetail/:id', component: __WEBPACK_IMPORTED_MODULE_3__event_eventDetails_eventDetail_cmp__["a" /* EventDetailComponent */] },
    { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_4__event_payment_payment_cmp__["a" /* PaymentComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__common_profile_profile_cmp__["a" /* ProfileComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_6__common_logout_logout_cmp__["a" /* LogoutComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/common/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommonService = (function () {
    function CommonService(http) {
        this.http = http;
        this.API_ENDPOINT = "http://70.35.198.86/GTIKITappLayer/";
    }
    CommonService.prototype.createUser = function (user) {
        var body = JSON.stringify({
            "firstname": user.firstName,
            "lastname": user.lastName,
            "email": user.email,
            "password": user.password
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('Access-Control-Allow-Origin', '*');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.API_ENDPOINT + 'GTIKIT/GTCustomer', body, options)
            .map(function (response) { return response.json(); });
    };
    CommonService.prototype.createBillingUser = function (billing) {
        var body = JSON.stringify({
            "firstname": billing.firstName,
            "lastname": billing.lastName,
            "email": billing.email,
            "password": billing.firstName + billing.lastName
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('Access-Control-Allow-Origin', '*');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.API_ENDPOINT + 'GTIKIT/GTCustomer', body, options)
            .map(function (response) { return response.json(); });
    };
    CommonService.prototype.loginUser = function (email, pssword) {
        var baseurl = this.API_ENDPOINT + 'GTIKIT/GTCustomer?';
        var param1 = 'UserName=';
        var param2 = '&Password=';
        var url = "" + ("" + baseurl + ("" + param1) + ("" + email) +
            ("" + param2) + ("" + pssword));
        ;
        return this.http.get(url, '')
            .map(function (response) { return response.json(); });
    };
    CommonService.prototype.getTickets = function () {
        return this.http.get(this.API_ENDPOINT + 'GTIKIT/GTCustomer/GetCustomerOrderHistory/' + localStorage.getItem('custid'))
            .map(function (response) { return response.json(); });
    };
    CommonService.prototype.getAllUserData = function () {
        return this.http.get(this.API_ENDPOINT + 'GTCustomerDashBoard/' + localStorage.getItem('custid'))
            .map(function (response) { return response.json(); });
    };
    CommonService.prototype.changeProfileDetails = function (profileData) {
        var body = JSON.stringify({
            "FirstName": profileData.firstName,
            "LastName": profileData.lastName,
            "Email": profileData.email,
            "Password": profileData.password,
            "IsSubscribe": true,
            "IsActive": true,
            "IsDelete": false,
            "Id": localStorage.getItem('custid')
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.API_ENDPOINT + 'GTIKIT/GTCustomer', body, options)
            .map(function (response) { return response.json(); });
    };
    CommonService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json());
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "../../../../../src/app/common/footer/footer.cmp.html":
/***/ (function(module, exports) {

module.exports = "<!-- FOOTER SEARCH -->\r\n<section class=\"fo-search\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-5\">\r\n        Never miss an important event in your city again\r\n      </div>\r\n      <div class=\"col-md-7\">\r\n        <form class=\"navbar-form navbar-right\" role=\"search\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Enter your email address\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" name=\"password\" placeholder=\"Enter your zip code\">\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Search</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- / FOOTER SEARCH -->\r\n<!-- FOOTER -->\r\n<footer>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 col-sm-6 col-xs-12\">\r\n        <h3>Quick Links</h3>\r\n        <ul class=\"fo-link\">\r\n          <li><a href=\"#\">About</a></li>\r\n          <li><a href=\"#\">Services</a></li>\r\n          <li><a href=\"#\">How it Works</a></li>\r\n          <li><a href=\"#\">Pricing</a></li>\r\n          <li><a href=\"#\">Press</a></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-2 col-sm-6 col-xs-12\">\r\n        <h3>Discover</h3>\r\n        <ul class=\"fo-link\">\r\n          <li><a href=\"#\">Events</a></li>\r\n          <li><a href=\"#\">Tours</a></li>\r\n          <li><a href=\"#\">Venues</a></li>\r\n          <li><a href=\"#\">Artists</a></li>\r\n          <li><a href=\"#\">Organizers</a></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-2 col-sm-6 col-xs-12\">\r\n        <h3>Resources</h3>\r\n        <ul class=\"fo-link\">\r\n          <li><a href=\"#\">Blog</a></li>\r\n          <li><a href=\"#\">Videos</a></li>\r\n          <li><a href=\"#\">Download Logo</a></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-2 col-sm-6 col-xs-12\">\r\n        <h3>Support</h3>\r\n        <ul class=\"fo-link\">\r\n          <li><a href=\"#\">Terms</a></li>\r\n          <li><a href=\"#\">Refund</a></li>\r\n          <li><a href=\"#\">FAQs</a></li>\r\n          <li><a href=\"#\">Privacy</a></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-12 col-xs-12 text-center fo-logo\">\r\n        <img src=\"assets/img/fo-logo.png\" alt=\"fo-logo\" />\r\n        <ul class=\"country\">\r\n          <li><img src=\"assets/img/country/country1.png\" alt=\"fo-logo\" /></li>\r\n          <li><img src=\"assets/img/country/country2.png\" alt=\"fo-logo\" /></li>\r\n          <li><img src=\"assets/img/country/country3.png\" alt=\"fo-logo\" /></li>\r\n          <li><img src=\"assets/img/country/country4.png\" alt=\"fo-logo\" /></li>\r\n          <li><img src=\"assets/img/country/country5.png\" alt=\"fo-logo\" /></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <hr>\r\n        <p class=\"text-center\">Copyright 2017 <strong>GTIKIT</strong>.  All Rights Reserved</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n<!-- / FOOTER -->\r\n<app-login></app-login>\r\n<app-register></app-register>"

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.cmp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/common/footer/footer.cmp.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/header/header.cmp.html":
/***/ (function(module, exports) {

module.exports = "<!-- navigation -->\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n        aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">\r\n        <img src=\"assets/img/logo.png\" alt=\"\">\r\n      </a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <div class=\"pull-right\" style=\"margin-left: 2%;\" *ngIf=\"isAccount\">\r\n        <ul class=\"nav pull-right\">\r\n          <li class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa \tfa fa-user-circle-o fa-2x\"></i> Welcome, User\r\n              <b class=\"caret\"></b>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li>\r\n                <a [routerLink]=\"['/profile']\">\r\n                  <i class=\"fa fa-user\"></i> Profile</a>\r\n              </li>\r\n              <li class=\"divider\"></li>\r\n              <li>\r\n                <a href=\"\" (click)=\"logout()\">\r\n                  <i class=\"fa fa-sign-out\"></i> Logout</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a href=\"#\" *ngIf=\"!isAccount\" role=\"button\" data-toggle=\"modal\" data-target=\"#login-modal\">Login</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" *ngIf=\"!isAccount\" role=\"button\" data-toggle=\"modal\" data-target=\"#register-modal\">Registration</a>\r\n        </li>\r\n        <li>\r\n          <a class=\"event\" [routerLink]=\"['/addevent']\">Add Event</a>\r\n        </li>\r\n      </ul>\r\n\r\n\r\n    </div>\r\n    <!-- /.navbar-collapse -->\r\n  </div>\r\n  <!-- /.container-fluid -->\r\n</nav>\r\n<!-- /navigation -->"

/***/ }),

/***/ "../../../../../src/app/common/header/header.cmp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.isAccount = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var flag = localStorage.getItem('login');
        if (flag != 'false') {
            this.isAccount = true;
            this.router.navigate(['/profile']);
        }
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.setItem('login', 'false');
        this.isAccount = false;
        this.router.navigate(['/']);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/common/header/header.cmp.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/login/login.cmp.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN # MODAL LOGIN -->\r\n<div class=\"model-form\">\r\n  <div class=\"modal fade\" id=\"login-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\" align=\"center\">\r\n          <h2>Please Login</h2>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n        <!-- Begin # DIV Form -->\r\n        <div id=\"div-forms2\">\r\n          <!-- Begin # Login Form -->\r\n          <form name=\"loginform\" (ngSubmit)=\"lf.form.valid && login()\" #lf=\"ngForm\" novalidate>\r\n            <div class=\"modal-body\">\r\n              <div *ngIf=\"successMsg\" class=\"help-block alert alert-success\">{{successMsg}}</div>\r\n              <div *ngIf=\"errorMsg\" class=\"help-block alert alert-danger\">{{errorMsg}}</div>\r\n              <div class=\"input-group\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': lf.submitted && !loginEmail.valid }\">\r\n                  <label for=\"username\">Email</label>\r\n                  <input type=\"email\" class=\"form-control\" name=\"loginEmail\" placeholder=\"Email Id\" [(ngModel)]=\"model.loginEmail\" #loginEmail=\"ngModel\"\r\n                    required email pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" />\r\n                  <div *ngIf=\"lf.submitted && !loginEmail.valid\" class=\"help-block alert alert-danger\">Email Id is required or Invalid</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': lf.submitted && !password.valid }\">\r\n                  <label for=\"password\">Password</label>\r\n                  <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                  <div *ngIf=\"lf.submitted && !password.valid\" class=\"help-block alert alert-danger\">Password is required</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <label>\r\n                  <input type=\"checkbox\" name=\"terms\"> Remember me </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <div class=\"form-group text-center\">\r\n                <button [disabled]=\"loading\" class=\"btn btn-primary btn-lg btn-block\">Login</button>\r\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n                />\r\n              </div>\r\n              <div>\r\n                <p class=\"text-center\">\r\n                  <a href=\"#\">Forgot Password</a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <!-- End # Login Form -->\r\n        </div>\r\n        <!-- End # DIV Form -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END # MODAL LOGIN -->"

/***/ }),

/***/ "../../../../../src/app/common/login/login.cmp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__("../../../../../src/app/common/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, cService) {
        this.router = router;
        this.cService = cService;
        this.model = {};
        this.loading = false;
        this.successMsg = '';
        this.errorMsg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.cService.loginUser(this.model.loginEmail, this.model.password)
            .subscribe(function (response) {
            _this.successMsg = response;
            $("#login-modal").modal('hide');
            _this.loading = false;
            setTimeout(function () {
                this.successMsg = '';
            }.bind(_this), 5000);
            localStorage.setItem('custid', response.Id);
            localStorage.setItem('login', 'true');
            window.location.reload();
        }, function (error) {
            _this.loading = false;
            _this.errorMsg = error._body;
            setTimeout(function () {
                this.errorMsg = '';
            }.bind(_this), 5000);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/common/login/login.cmp.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/logout/logout.cmp.html":
/***/ (function(module, exports) {

module.exports = "<p>logout</p>"

/***/ }),

/***/ "../../../../../src/app/common/logout/logout.cmp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(router) {
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        localStorage.setItem('login', 'false');
        localStorage.setItem('custid', '');
        this.router.navigate(['/']);
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/common/logout/logout.cmp.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/profile/profile.cmp.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .ui-table .ui-table-thead > tr > th {\r\n    background: #e2d2d2;\r\n    color: #1e2548;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    border: none;\r\n    border-top: 1px solid lightgray;\r\n    height: 40px;\r\n    border-bottom: 1px solid lightgray;\r\n    text-align: left;\r\n    /* padding-right: 25px; */\r\n}\r\n\r\n:host /deep/ .ui-table .ui-table-tbody > tr > td {\r\n    border: none;\r\n    background: inherit;\r\n    font-size: 14px;\r\n    padding: .9em .5em;\r\n    color:#656565;\r\n    text-align: left;\r\n    padding-right: 10px;\r\n}\r\n\r\n:host /deep/ .ui-table .ui-table-tbody > tr {\r\n    background: #ffffff;\r\n    color: #222222;\r\n    border-bottom: 1px solid lightgray;\r\n}\r\n\r\n:host /deep/  .ui-table .ui-table-tbody > tr:nth-child(even) {\r\n    background-color: #f9f9f9!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/profile/profile.cmp.html":
/***/ (function(module, exports) {

module.exports = "<!-- DASHBOARD -->\r\n<section class=\"dashboard\">\r\n    <div class=\"dash-bg\">\r\n        <img class=\"img-responsive\" src=\"assets/img/dassboard-banner-bg.jpg\" alt=\"\" />\r\n        <h1>User Profile</h1>\r\n    </div>\r\n    <div class=\"da-over\">\r\n        <div class=\"container\">\r\n            <div class=\"dash-inner\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"left-dash\">\r\n                            <div class=\"user-box\">\r\n                                <div class=\"user-img\">\r\n                                    <img src=\"assets/img/avatar-1.jpg\" alt=\"user-img\" class=\"img-circle img-thumbnail img-responsive\">\r\n                                    <div class=\"user-status offline\">\r\n                                        <i class=\"zmdi zmdi-dot-circle\"></i>\r\n                                    </div>\r\n                                </div>\r\n                                <h5>Welcome {{profileData.name}}</h5>\r\n                                <ul class=\"list-inline\">\r\n                                    <li>\r\n                                        <a href=\"\" (click)=\"logout()\">\r\n                                            <img width=\"20\" src=\"assets/img/login.png\" alt=\"\" class=\"img-responsive\">\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-2\"\r\n                                aria-expanded=\"false\">\r\n                                <span class=\"sr-only\">Toggle navigation</span>\r\n                                <span class=\"icon-bar\"></span>\r\n                                <span class=\"icon-bar\"></span>\r\n                                <span class=\"icon-bar\"></span>\r\n                            </button>\r\n                            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-2\">\r\n                                <ul id=\"nav-tabs-wrapper\" class=\"nav nav-tabs nav-pills nav-stacked\">\r\n                                    <li class=\"active\">\r\n                                        <a href=\"#vtab1\" data-toggle=\"tab\">\r\n                                            <span class=\"sm-icon\">\r\n                                                <img width=\"20\" src=\"assets/img/reports.png\" alt=\"\" class=\"img-responsive\">\r\n                                            </span>Reports</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#vtab2\" data-toggle=\"tab\">\r\n                                            <span class=\"sm-icon\">\r\n                                                <img width=\"20\" src=\"assets/img/profile.png\" alt=\"\" class=\"img-responsive\">\r\n                                            </span>Profile</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#vtab5\" data-toggle=\"tab\">\r\n                                            <span class=\"sm-icon\">\r\n                                                <img width=\"20\" src=\"assets/img/list.png\" alt=\"\" class=\"img-responsive\">\r\n                                            </span>My Tickets</a>\r\n                                    </li>\r\n                                    <!-- <li><a href=\"#vtab3\" data-toggle=\"tab\"><span class=\"sm-icon\"><img width=\"20\" src=\"assets/img/mail.png\" alt=\"\" class=\"img-responsive\"></span>Bulk Emailers</a></li>\r\n                                         <li><a href=\"#vtab4\" data-toggle=\"tab\"><span class=\"sm-icon\"><img width=\"20\" src=\"assets/img/list.png\" alt=\"\" class=\"img-responsive\"></span>Mailling lista</a></li>\r\n                                         <li><a href=\"#vtab5\" data-toggle=\"tab\"><span class=\"sm-icon\"><img width=\"20\" src=\"assets/img/user.png\" alt=\"\" class=\"img-responsive\"></span>my user</a></li> -->\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"right-dash bg-white\">\r\n\r\n                            <div class=\"tab-content\">\r\n                                <div role=\"tabpanel\" class=\"tab-pane fade in active table-responsive\" id=\"vtab1\">\r\n                                    <div class=\"event\">\r\n                                        <button (click)=\"pastEvents()\" class=\"btn btn-default\">Show Past Event</button>\r\n                                    </div>\r\n                                    <div class=\"report\">\r\n                                        <p-table #dt [value]=\"eventData\" [columns]=\"cols1\">\r\n                                            <ng-template pTemplate=\"header\" let-columns>\r\n                                                <tr>\r\n                                                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [style.width]=\"col.width\">\r\n                                                        {{col.header}}\r\n                                                        <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                                                    </th>\r\n                                                </tr>\r\n                                            </ng-template>\r\n                                            <ng-template pTemplate=\"body\" let-ticket let-index=\"rowIndex\">\r\n                                                <tr>\r\n                                                    <td>{{ticket.EventName}}</td>\r\n                                                    <td>{{ticket.TotalTicketQty}}</td>\r\n                                                    <td>{{ticket.TotalTicketSoldQty}}</td>\r\n                                                </tr>\r\n                                            </ng-template>\r\n                                            <ng-template pTemplate=\"emptymessage\" let-ticket>\r\n                                                <tr>\r\n                                                    <td [attr.colspan]=\"7\" style=\"text-align:center;\">\r\n                                                        No records found\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </ng-template>\r\n                                        </p-table>\r\n                                        <!-- <table class=\"table table-striped\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th class=\"text-left\">Event Details</th>\r\n                                                    <th class=\"text-left\">Views</th>\r\n                                                    <th class=\"text-left\">Tickets</th>\r\n                                                    <th class=\"text-left\">Total Sale</th>\r\n                                                    <th class=\"text-left\">Action</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tr>\r\n                                                <td class=\"text-left\">Lorem ipsum dolor sit amet</td>\r\n                                                <td class=\"text-left\">1000</td>\r\n                                                <td class=\"text-left\">2000</td>\r\n                                                <td class=\"text-left\">800</td>\r\n                                                <td class=\"text-left\">\r\n                                                    <a class=\"btn btn-info btn-xs\" href=\"#\">\r\n                                                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edit</a>\r\n                                                    <a href=\"#\" class=\"btn btn-danger btn-xs\">\r\n                                                        <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Del</a>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-left\">Lorem ipsum dolor sit amet</td>\r\n                                                <td class=\"text-left\">1000</td>\r\n                                                <td class=\"text-left\">2000</td>\r\n                                                <td class=\"text-left\">800</td>\r\n                                                <td class=\"text-left\">\r\n                                                    <a class=\"btn btn-info btn-xs\" href=\"#\">\r\n                                                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edit</a>\r\n                                                    <a href=\"#\" class=\"btn btn-danger btn-xs\">\r\n                                                        <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Del</a>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-left\">Lorem ipsum dolor sit amet</td>\r\n                                                <td class=\"text-left\">1000</td>\r\n                                                <td class=\"text-left\">2000</td>\r\n                                                <td class=\"text-left\">800</td>\r\n                                                <td class=\"text-left\">\r\n                                                    <a class=\"btn btn-info btn-xs\" href=\"#\">\r\n                                                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edit</a>\r\n                                                    <a href=\"#\" class=\"btn btn-danger btn-xs\">\r\n                                                        <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Del</a>\r\n                                                </td>\r\n                                            </tr>\r\n\r\n                                            <tr>\r\n                                                <td class=\"text-left\">Lorem ipsum dolor sit amet</td>\r\n                                                <td class=\"text-left\">1000</td>\r\n                                                <td class=\"text-left\">2000</td>\r\n                                                <td class=\"text-left\">800</td>\r\n                                                <td class=\"text-left\">\r\n                                                    <a class=\"btn btn-info btn-xs\" href=\"#\">\r\n                                                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edit</a>\r\n                                                    <a href=\"#\" class=\"btn btn-danger btn-xs\">\r\n                                                        <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Del</a>\r\n                                                </td>\r\n                                            </tr>\r\n\r\n\r\n\r\n                                        </table> -->\r\n                                    </div>\r\n                                </div>\r\n                                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"vtab2\">\r\n                                    <div class=\"profile\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                                <div class=\"left-side\">\r\n                                                    <img src=\"assets/img/avatar-1.jpg\" alt=\"\" class=\"img-responsive img-circle\" width=\"118\">\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                                                <div class=\"right-side\">\r\n                                                    <h3>{{profileData.name}}</h3>\r\n                                                    <ul>\r\n                                                        <li>\r\n                                                            <i class=\"fa fa-home\"></i>{{profileData.address}}</li>\r\n                                                        <li>\r\n                                                            <i class=\"fa fa-phone\"></i>{{profileData.phone}}</li>\r\n                                                        <li>\r\n                                                            <i class=\"fa fa-envelope\"></i>{{profileData.email}}</li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12 btn-tog\">\r\n                                                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">Edit Profile</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                                        <form class=\"banner-search roll\" role=\"search\" (ngSubmit)=\"fp.form.valid && profileChange()\" #fp=\"ngForm\" novalidate>\r\n                                            <div *ngIf=\"successMsg\" class=\"help-block alert alert-success\">{{successMsg}}</div>\r\n                                            <div *ngIf=\"errorMsg\" class=\"help-block alert alert-danger\">{{errorMsg}}</div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label>Organizing Company Name</label>\r\n                                                        <input type=\"text\" class=\"form-control\" name=\"cmpname\" [(ngModel)]=\"profileData.cmpname\" readonly>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label>Company Email</label>\r\n                                                        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"profileData.email\" readonly>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label>Company Telephone</label>\r\n                                                        <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"profileData.phone\" readonly>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label>Address</label>\r\n                                                        <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"profileData.address\" readonly>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label>City</label>\r\n                                                        <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"profileData.city\" readonly>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label>State</label>\r\n                                                        <input type=\"text\" class=\"form-control\" name=\"state\" [(ngModel)]=\"profileData.state\" readonly>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label>Zip code</label>\r\n                                                        <input type=\"text\" class=\"form-control\" name=\"zip\" [(ngModel)]=\"profileData.zip\" readonly>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                    <label>Country</label>\r\n                                                    <input type=\"text\" class=\"form-control\" name=\"country\" [(ngModel)]=\"profileData.country\" readonly>\r\n                                                    <!-- <select class=\"form-control minimal\" [(ngModel)]=\"profileData.country\" name=\"country\">\r\n                                                        <option value=\"\" selected=\"selected\">Country</option>\r\n                                                        <option value=\"Afghanistan\">Afghanistan</option>\r\n                                                        <option value=\"Albania\">Albania</option>\r\n                                                        <option value=\"Algeria\">Algeria</option>\r\n                                                        <option value=\"American Samoa\">American Samoa</option>\r\n                                                        <option value=\"Andorra\">Andorra</option>\r\n                                                        <option value=\"Angola\">Angola</option>\r\n                                                        <option value=\"Anguilla\">Anguilla</option>\r\n                                                        <option value=\"Antartica\">Antarctica</option>\r\n                                                        <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\r\n                                                        <option value=\"Argentina\">Argentina</option>\r\n                                                        <option value=\"Armenia\">Armenia</option>\r\n                                                        <option value=\"Aruba\">Aruba</option>\r\n                                                        <option value=\"Australia\">Australia</option>\r\n                                                        <option value=\"Austria\">Austria</option>\r\n                                                        <option value=\"Azerbaijan\">Azerbaijan</option>\r\n                                                        <option value=\"Bahamas\">Bahamas</option>\r\n                                                        <option value=\"Bahrain\">Bahrain</option>\r\n                                                        <option value=\"Bangladesh\">Bangladesh</option>\r\n                                                        <option value=\"Barbados\">Barbados</option>\r\n                                                        <option value=\"Belarus\">Belarus</option>\r\n                                                        <option value=\"Belgium\">Belgium</option>\r\n                                                        <option value=\"Belize\">Belize</option>\r\n                                                        <option value=\"Benin\">Benin</option>\r\n                                                        <option value=\"Bermuda\">Bermuda</option>\r\n                                                        <option value=\"Bhutan\">Bhutan</option>\r\n                                                        <option value=\"Bolivia\">Bolivia</option>\r\n                                                        <option value=\"Bosnia and Herzegowina\">Bosnia and Herzegowina</option>\r\n                                                        <option value=\"Botswana\">Botswana</option>\r\n                                                        <option value=\"Bouvet Island\">Bouvet Island</option>\r\n                                                        <option value=\"Brazil\">Brazil</option>\r\n                                                        <option value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\r\n                                                        <option value=\"Brunei Darussalam\">Brunei Darussalam</option>\r\n                                                        <option value=\"Bulgaria\">Bulgaria</option>\r\n                                                        <option value=\"Burkina Faso\">Burkina Faso</option>\r\n                                                        <option value=\"Burundi\">Burundi</option>\r\n                                                        <option value=\"Cambodia\">Cambodia</option>\r\n                                                        <option value=\"Cameroon\">Cameroon</option>\r\n                                                        <option value=\"Canada\">Canada</option>\r\n                                                        <option value=\"Cape Verde\">Cape Verde</option>\r\n                                                        <option value=\"Cayman Islands\">Cayman Islands</option>\r\n                                                        <option value=\"Central African Republic\">Central African Republic</option>\r\n                                                        <option value=\"Chad\">Chad</option>\r\n                                                        <option value=\"Chile\">Chile</option>\r\n                                                        <option value=\"China\">China</option>\r\n                                                        <option value=\"Christmas Island\">Christmas Island</option>\r\n                                                        <option value=\"Cocos Islands\">Cocos (Keeling) Islands</option>\r\n                                                        <option value=\"Colombia\">Colombia</option>\r\n                                                        <option value=\"Comoros\">Comoros</option>\r\n                                                        <option value=\"Congo\">Congo</option>\r\n                                                        <option value=\"Congo\">Congo, the Democratic Republic of the</option>\r\n                                                        <option value=\"Cook Islands\">Cook Islands</option>\r\n                                                        <option value=\"Costa Rica\">Costa Rica</option>\r\n                                                        <option value=\"Cota D'Ivoire\">Cote d'Ivoire</option>\r\n                                                        <option value=\"Croatia\">Croatia (Hrvatska)</option>\r\n                                                        <option value=\"Cuba\">Cuba</option>\r\n                                                        <option value=\"Cyprus\">Cyprus</option>\r\n                                                        <option value=\"Czech Republic\">Czech Republic</option>\r\n                                                        <option value=\"Denmark\">Denmark</option>\r\n                                                        <option value=\"Djibouti\">Djibouti</option>\r\n                                                        <option value=\"Dominica\">Dominica</option>\r\n                                                        <option value=\"Dominican Republic\">Dominican Republic</option>\r\n                                                        <option value=\"East Timor\">East Timor</option>\r\n                                                        <option value=\"Ecuador\">Ecuador</option>\r\n                                                        <option value=\"Egypt\">Egypt</option>\r\n                                                        <option value=\"El Salvador\">El Salvador</option>\r\n                                                        <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\r\n                                                        <option value=\"Eritrea\">Eritrea</option>\r\n                                                        <option value=\"Estonia\">Estonia</option>\r\n                                                        <option value=\"Ethiopia\">Ethiopia</option>\r\n                                                        <option value=\"Falkland Islands\">Falkland Islands (Malvinas)</option>\r\n                                                        <option value=\"Faroe Islands\">Faroe Islands</option>\r\n                                                        <option value=\"Fiji\">Fiji</option>\r\n                                                        <option value=\"Finland\">Finland</option>\r\n                                                        <option value=\"France\">France</option>\r\n                                                        <option value=\"France Metropolitan\">France, Metropolitan</option>\r\n                                                        <option value=\"French Guiana\">French Guiana</option>\r\n                                                        <option value=\"French Polynesia\">French Polynesia</option>\r\n                                                        <option value=\"French Southern Territories\">French Southern Territories</option>\r\n                                                        <option value=\"Gabon\">Gabon</option>\r\n                                                        <option value=\"Gambia\">Gambia</option>\r\n                                                        <option value=\"Georgia\">Georgia</option>\r\n                                                        <option value=\"Germany\">Germany</option>\r\n                                                        <option value=\"Ghana\">Ghana</option>\r\n                                                        <option value=\"Gibraltar\">Gibraltar</option>\r\n                                                        <option value=\"Greece\">Greece</option>\r\n                                                        <option value=\"Greenland\">Greenland</option>\r\n                                                        <option value=\"Grenada\">Grenada</option>\r\n                                                        <option value=\"Guadeloupe\">Guadeloupe</option>\r\n                                                        <option value=\"Guam\">Guam</option>\r\n                                                        <option value=\"Guatemala\">Guatemala</option>\r\n                                                        <option value=\"Guinea\">Guinea</option>\r\n                                                        <option value=\"Guinea-Bissau\">Guinea-Bissau</option>\r\n                                                        <option value=\"Guyana\">Guyana</option>\r\n                                                        <option value=\"Haiti\">Haiti</option>\r\n                                                        <option value=\"Heard and McDonald Islands\">Heard and Mc Donald Islands</option>\r\n                                                        <option value=\"Holy See\">Holy See (Vatican City State)</option>\r\n                                                        <option value=\"Honduras\">Honduras</option>\r\n                                                        <option value=\"Hong Kong\">Hong Kong</option>\r\n                                                        <option value=\"Hungary\">Hungary</option>\r\n                                                        <option value=\"Iceland\">Iceland</option>\r\n                                                        <option value=\"India\">India</option>\r\n                                                        <option value=\"Indonesia\">Indonesia</option>\r\n                                                        <option value=\"Iran\">Iran (Islamic Republic of)</option>\r\n                                                        <option value=\"Iraq\">Iraq</option>\r\n                                                        <option value=\"Ireland\">Ireland</option>\r\n                                                        <option value=\"Israel\">Israel</option>\r\n                                                        <option value=\"Italy\">Italy</option>\r\n                                                        <option value=\"Jamaica\">Jamaica</option>\r\n                                                        <option value=\"Japan\">Japan</option>\r\n                                                        <option value=\"Jordan\">Jordan</option>\r\n                                                        <option value=\"Kazakhstan\">Kazakhstan</option>\r\n                                                        <option value=\"Kenya\">Kenya</option>\r\n                                                        <option value=\"Kiribati\">Kiribati</option>\r\n                                                        <option value=\"Democratic People's Republic of Korea\">Korea, Democratic People's Republic of</option>\r\n                                                        <option value=\"Korea\">Korea, Republic of</option>\r\n                                                        <option value=\"Kuwait\">Kuwait</option>\r\n                                                        <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\r\n                                                        <option value=\"Lao\">Lao People's Democratic Republic</option>\r\n                                                        <option value=\"Latvia\">Latvia</option>\r\n                                                        <option value=\"Lebanon\" selected>Lebanon</option>\r\n                                                        <option value=\"Lesotho\">Lesotho</option>\r\n                                                        <option value=\"Liberia\">Liberia</option>\r\n                                                        <option value=\"Libyan Arab Jamahiriya\">Libyan Arab Jamahiriya</option>\r\n                                                        <option value=\"Liechtenstein\">Liechtenstein</option>\r\n                                                        <option value=\"Lithuania\">Lithuania</option>\r\n                                                        <option value=\"Luxembourg\">Luxembourg</option>\r\n                                                        <option value=\"Macau\">Macau</option>\r\n                                                        <option value=\"Macedonia\">Macedonia, The Former Yugoslav Republic of</option>\r\n                                                        <option value=\"Madagascar\">Madagascar</option>\r\n                                                        <option value=\"Malawi\">Malawi</option>\r\n                                                        <option value=\"Malaysia\">Malaysia</option>\r\n                                                        <option value=\"Maldives\">Maldives</option>\r\n                                                        <option value=\"Mali\">Mali</option>\r\n                                                        <option value=\"Malta\">Malta</option>\r\n                                                        <option value=\"Marshall Islands\">Marshall Islands</option>\r\n                                                        <option value=\"Martinique\">Martinique</option>\r\n                                                        <option value=\"Mauritania\">Mauritania</option>\r\n                                                        <option value=\"Mauritius\">Mauritius</option>\r\n                                                        <option value=\"Mayotte\">Mayotte</option>\r\n                                                        <option value=\"Mexico\">Mexico</option>\r\n                                                        <option value=\"Micronesia\">Micronesia, Federated States of</option>\r\n                                                        <option value=\"Moldova\">Moldova, Republic of</option>\r\n                                                        <option value=\"Monaco\">Monaco</option>\r\n                                                        <option value=\"Mongolia\">Mongolia</option>\r\n                                                        <option value=\"Montserrat\">Montserrat</option>\r\n                                                        <option value=\"Morocco\">Morocco</option>\r\n                                                        <option value=\"Mozambique\">Mozambique</option>\r\n                                                        <option value=\"Myanmar\">Myanmar</option>\r\n                                                        <option value=\"Namibia\">Namibia</option>\r\n                                                        <option value=\"Nauru\">Nauru</option>\r\n                                                        <option value=\"Nepal\">Nepal</option>\r\n                                                        <option value=\"Netherlands\">Netherlands</option>\r\n                                                        <option value=\"Netherlands Antilles\">Netherlands Antilles</option>\r\n                                                        <option value=\"New Caledonia\">New Caledonia</option>\r\n                                                        <option value=\"New Zealand\">New Zealand</option>\r\n                                                        <option value=\"Nicaragua\">Nicaragua</option>\r\n                                                        <option value=\"Niger\">Niger</option>\r\n                                                        <option value=\"Nigeria\">Nigeria</option>\r\n                                                        <option value=\"Niue\">Niue</option>\r\n                                                        <option value=\"Norfolk Island\">Norfolk Island</option>\r\n                                                        <option value=\"Northern Mariana Islands\">Northern Mariana Islands</option>\r\n                                                        <option value=\"Norway\">Norway</option>\r\n                                                        <option value=\"Oman\">Oman</option>\r\n                                                        <option value=\"Pakistan\">Pakistan</option>\r\n                                                        <option value=\"Palau\">Palau</option>\r\n                                                        <option value=\"Panama\">Panama</option>\r\n                                                        <option value=\"Papua New Guinea\">Papua New Guinea</option>\r\n                                                        <option value=\"Paraguay\">Paraguay</option>\r\n                                                        <option value=\"Peru\">Peru</option>\r\n                                                        <option value=\"Philippines\">Philippines</option>\r\n                                                        <option value=\"Pitcairn\">Pitcairn</option>\r\n                                                        <option value=\"Poland\">Poland</option>\r\n                                                        <option value=\"Portugal\">Portugal</option>\r\n                                                        <option value=\"Puerto Rico\">Puerto Rico</option>\r\n                                                        <option value=\"Qatar\">Qatar</option>\r\n                                                        <option value=\"Reunion\">Reunion</option>\r\n                                                        <option value=\"Romania\">Romania</option>\r\n                                                        <option value=\"Russia\">Russian Federation</option>\r\n                                                        <option value=\"Rwanda\">Rwanda</option>\r\n                                                        <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option> \r\n                                                        <option value=\"Saint LUCIA\">Saint LUCIA</option>\r\n                                                        <option value=\"Saint Vincent\">Saint Vincent and the Grenadines</option>\r\n                                                        <option value=\"Samoa\">Samoa</option>\r\n                                                        <option value=\"San Marino\">San Marino</option>\r\n                                                        <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option> \r\n                                                        <option value=\"Saudi Arabia\">Saudi Arabia</option>\r\n                                                        <option value=\"Senegal\">Senegal</option>\r\n                                                        <option value=\"Seychelles\">Seychelles</option>\r\n                                                        <option value=\"Sierra\">Sierra Leone</option>\r\n                                                        <option value=\"Singapore\">Singapore</option>\r\n                                                        <option value=\"Slovakia\">Slovakia (Slovak Republic)</option>\r\n                                                        <option value=\"Slovenia\">Slovenia</option>\r\n                                                        <option value=\"Solomon Islands\">Solomon Islands</option>\r\n                                                        <option value=\"Somalia\">Somalia</option>\r\n                                                        <option value=\"South Africa\">South Africa</option>\r\n                                                        <option value=\"South Georgia\">South Georgia and the South Sandwich Islands</option>\r\n                                                        <option value=\"Span\">Spain</option>\r\n                                                        <option value=\"SriLanka\">Sri Lanka</option>\r\n                                                        <option value=\"St. Helena\">St. Helena</option>\r\n                                                        <option value=\"St. Pierre and Miguelon\">St. Pierre and Miquelon</option>\r\n                                                        <option value=\"Sudan\">Sudan</option>\r\n                                                        <option value=\"Suriname\">Suriname</option>\r\n                                                        <option value=\"Svalbard\">Svalbard and Jan Mayen Islands</option>\r\n                                                        <option value=\"Swaziland\">Swaziland</option>\r\n                                                        <option value=\"Sweden\">Sweden</option>\r\n                                                        <option value=\"Switzerland\">Switzerland</option>\r\n                                                        <option value=\"Syria\">Syrian Arab Republic</option>\r\n                                                        <option value=\"Taiwan\">Taiwan, Province of China</option>\r\n                                                        <option value=\"Tajikistan\">Tajikistan</option>\r\n                                                        <option value=\"Tanzania\">Tanzania, United Republic of</option>\r\n                                                        <option value=\"Thailand\">Thailand</option>\r\n                                                        <option value=\"Togo\">Togo</option>\r\n                                                        <option value=\"Tokelau\">Tokelau</option>\r\n                                                        <option value=\"Tonga\">Tonga</option>\r\n                                                        <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\r\n                                                        <option value=\"Tunisia\">Tunisia</option>\r\n                                                        <option value=\"Turkey\">Turkey</option>\r\n                                                        <option value=\"Turkmenistan\">Turkmenistan</option>\r\n                                                        <option value=\"Turks and Caicos\">Turks and Caicos Islands</option>\r\n                                                        <option value=\"Tuvalu\">Tuvalu</option>\r\n                                                        <option value=\"Uganda\">Uganda</option>\r\n                                                        <option value=\"Ukraine\">Ukraine</option>\r\n                                                        <option value=\"United Arab Emirates\">United Arab Emirates</option>\r\n                                                        <option value=\"United Kingdom\">United Kingdom</option>\r\n                                                        <option value=\"United States\">United States</option>\r\n                                                        <option value=\"United States Minor Outlying Islands\">United States Minor Outlying Islands</option>\r\n                                                        <option value=\"Uruguay\">Uruguay</option>\r\n                                                        <option value=\"Uzbekistan\">Uzbekistan</option>\r\n                                                        <option value=\"Vanuatu\">Vanuatu</option>\r\n                                                        <option value=\"Venezuela\">Venezuela</option>\r\n                                                        <option value=\"Vietnam\">Viet Nam</option>\r\n                                                        <option value=\"Virgin Islands (British)\">Virgin Islands (British)</option>\r\n                                                        <option value=\"Virgin Islands (U.S)\">Virgin Islands (U.S.)</option>\r\n                                                        <option value=\"Wallis and Futana Islands\">Wallis and Futuna Islands</option>\r\n                                                        <option value=\"Western Sahara\">Western Sahara</option>\r\n                                                        <option value=\"Yemen\">Yemen</option>\r\n                                                        <option value=\"Yugoslavia\">Yugoslavia</option>\r\n                                                        <option value=\"Zambia\">Zambia</option>\r\n                                                        <option value=\"Zimbabwe\">Zimbabwe</option>\r\n                                                    </select> -->\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                    <div>\r\n                                                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': fp.submitted && !firstName.valid }\">\r\n                                                            <label for=\"firstName\">First Name</label>\r\n                                                            <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First Name\" [(ngModel)]=\"profileData.firstName\" #firstName=\"ngModel\"\r\n                                                                required />\r\n                                                            <div *ngIf=\"fp.submitted && !firstName.valid\" class=\"help-block alert alert-danger\">First Name is required</div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                    <div>\r\n                                                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': fp.submitted && !lastName.valid }\">\r\n                                                            <label for=\"lastName\">Last Name</label>\r\n                                                            <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"Last Name\" [(ngModel)]=\"profileData.lastName\" #lastName=\"ngModel\"\r\n                                                                required />\r\n                                                            <div *ngIf=\"fp.submitted && !lastName.valid\" class=\"help-block alert alert-danger\">Last Name is required</div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                    <div>\r\n                                                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': fp.submitted && !password.valid }\">\r\n                                                            <label for=\"password\">Password</label>\r\n                                                            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"profileData.password\" #password=\"ngModel\"\r\n                                                                required />\r\n                                                            <div *ngIf=\"fp.submitted && !password.valid\" class=\"help-block alert alert-danger\">Password is required</div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                    <!-- <div>\r\n                                                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': fp.submitted && !confirmPassword.valid }\">\r\n                                                            <label for=\"confirmPassword\">Retype password</label>\r\n                                                            <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" placeholder=\"Retype Password\" [(ngModel)]=\"profileData.confirmPassword\"\r\n                                                                #confirmPassword=\"ngModel\" required validateEqual=\"password\"\r\n                                                            />\r\n                                                            <div *ngIf=\"!confirmPassword.valid && (confirmPassword.pristine && fp.submitted)\" class=\"help-block alert alert-danger\">Password mismatch</div>\r\n                                                        </div>\r\n                                                    </div> -->\r\n                                                </div>\r\n                                            </div>\r\n                                            <!-- <div class=\"row\">\r\n                                                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <div class=\"input-group\">\r\n                                                            <span class=\"input-group-btn\">\r\n                                                                <span class=\"btn btn-default btn-file\">\r\n                                                                    Your Picture…\r\n                                                                    <input type=\"file\" accept=\"image/png, image/jpeg, image/gif\" id=\"imgInp\">\r\n                                                                </span>\r\n                                                            </span>\r\n                                                            <input id=\"urlname\" type=\"text\" class=\"form-control\" readonly>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div> -->\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                    <button type=\"submit\" class=\"btn btn-primary btn-lg\">Update profile</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- <div role=\"tabpanel\" class=\"tab-pane fade in\" id=\"vtab3\">\r\n                                    <div class=\"bu-email\">\r\n                                        <h2 class=\"text-center\">Send Emails to Your Subscribers</h2>\r\n                                        <form>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label>Subject</label>\r\n                                                        <input class=\"form-control\" name=\"username\" type=\"text\" required>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label>Message</label>\r\n                                                        <textarea class=\"form-control\" rows=\"4\" required></textarea>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label>Lists to send emails (Events)</label>\r\n                                                        <select class=\"form-control minimal\">\r\n                                                            <option value=\"\" selected=\"selected\"></option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label>Lists to send emails (Subscribers)</label>\r\n                                                        <select class=\"form-control minimal\">\r\n                                                            <option value=\"\" selected=\"selected\"></option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <button type=\"submit\" class=\"btn btn-primary btn-lg\">Send</button>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                                <div role=\"tabpanel\" class=\"tab-pane fade in\" id=\"vtab4\">\r\n                                    <div class=\"mail-list\">\r\n                                        <h2 class=\"text-center\">Upload a CSV file to import bulk email addresses</h2>\r\n                                        <form>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label>Group Name</label>\r\n                                                        <input class=\"form-control\" name=\"username\" type=\"text\" required>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-12\">\r\n                                                    <div class=\"alert alert-success\" role=\"alert\">This will be used while sending out emails from dashboard</div>\r\n                                                    <div class=\"alert alert-success\" role=\"alert\">\r\n                                                        Please consider the follwing format of the CSV file you are uploading to make sure that all the email addresses of the file\r\n                                                        get processed. Do not keep \"Name\" and \"Email\" on your CSV file.\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-5\">\r\n                                                                <table class=\"table table-bordered table-condensed table-stripped em-des\">\r\n                                                                    <tbody>\r\n                                                                        <tr>\r\n                                                                            <th align=\"left\">Name</th>\r\n                                                                            <th align=\"left\">Email</th>\r\n                                                                        </tr>\r\n                                                                        <tr>\r\n                                                                            <td>AAA</td>\r\n                                                                            <td>aaa@example.com</td>\r\n                                                                        </tr>\r\n                                                                        <tr>\r\n                                                                            <td>BBB</td>\r\n                                                                            <td>bbb@example.com</td>\r\n                                                                        </tr>\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-12\">\r\n                                                    <label>Upload file</label>\r\n                                                    <label class=\"myLabel\">\r\n                                                        <input type=\"file\" required/>\r\n                                                        <span>\r\n                                                            <img src=\"assets/img/upload.png\" width=\"50\" alt=\"\" />\r\n                                                        </span>\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <button type=\"submit\" class=\"btn btn-primary btn-lg\">Import</button>\r\n                                        </form>\r\n                                    </div>\r\n                                </div> -->\r\n                                <div role=\"tabpanel\" class=\"tab-pane fade in\" id=\"vtab5\">\r\n                                    <div class=\"m-user\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12\">\r\n                                                <div id=\"custom-search-input\">\r\n                                                    <div class=\"input-group\">\r\n                                                        <input type=\"text\" class=\"form-control input-lg\" placeholder=\"Search for\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\r\n                                                        />\r\n                                                        <span class=\"input-group-btn\">\r\n                                                            <button class=\"btn btn-info btn-lg\" type=\"button\">\r\n                                                                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                                                            </button>\r\n                                                        </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <!-- <div class=\"col-md-6 user-btn\">\r\n                                                <button type=\"button\" class=\"btn btn-primary\" role=\"button\" data-toggle=\"modal\" data-target=\"#add-user\">Add Sub User</button>\r\n                                            </div> -->\r\n                                        </div>\r\n                                        <br>\r\n                                        <div class=\"user table-responsive table-striped\">\r\n                                            <p-table #dt [value]=\"ticket\" [columns]=\"cols\">\r\n                                                <!-- <ng-template pTemplate=\"header\">\r\n                                                    <tr>\r\n                                                        <th style=\"width:10%;\">Sr No.</th>\r\n                                                        <th style=\"width:20%;\">Date</th>\r\n                                                        <th style=\"width:30%;\">Event Name</th>\r\n                                                        <th style=\"width:10%;\">Quantity</th>\r\n                                                        <th style=\"width:10%;\">Price</th>\r\n                                                        <th style=\"width:10%;\">Fee</th>\r\n                                                        <th style=\"width:10%;\">Total</th>\r\n                                                    </tr>\r\n                                                </ng-template> -->\r\n                                                <ng-template pTemplate=\"header\" let-columns>\r\n                                                    <tr>\r\n                                                        <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [style.width]=\"col.width\">\r\n                                                            {{col.header}}\r\n                                                            <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                                                        </th>\r\n                                                    </tr>\r\n                                                </ng-template>\r\n                                                <ng-template pTemplate=\"body\" let-ticket let-index=\"rowIndex\">\r\n                                                    <tr>\r\n                                                        <td>{{ticket.no}}</td>\r\n                                                        <td>{{ticket.date | date:'short'}}</td>\r\n                                                        <td>{{ticket.eventname}}</td>\r\n                                                        <td>{{ticket.qty}}</td>\r\n                                                        <td>$ {{ticket.price}}</td>\r\n                                                        <td>$ {{ticket.fee}}</td>\r\n                                                        <td>$ {{ticket.discount}}</td>\r\n                                                        <td>\r\n                                                            <strong> $ {{ticket.total}}</strong>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </ng-template>\r\n                                                <ng-template pTemplate=\"emptymessage\" let-ticket>\r\n                                                    <tr>\r\n                                                        <td [attr.colspan]=\"8\" style=\"text-align:center;\">\r\n                                                            No records found\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </ng-template>\r\n                                            </p-table>\r\n                                            <!-- <table class=\"table table-striped\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th class=\"text-left\">Sr No.</th>\r\n                                                        <th class=\"text-left\">Name</th>\r\n                                                        <th class=\"text-left\">Email</th>\r\n                                                        <th class=\"text-left\">User Type</th>\r\n                                                        <th class=\"text-left\">Action</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tr>\r\n                                                    <td class=\"text-left\">1</td>\r\n                                                    <td class=\"text-left\">Sumon Saha</td>\r\n                                                    <td class=\"text-left\">sumonsaha@gmail.com</td>\r\n                                                    <td class=\"text-left\">400</td>\r\n                                                    <td class=\"text-left\">\r\n                                                        <a class=\"btn btn-info btn-xs\" href=\"#\">\r\n                                                            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edit</a>\r\n                                                        <a href=\"#\" class=\"btn btn-danger btn-xs\">\r\n                                                            <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Del</a>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td class=\"text-left\">2</td>\r\n                                                    <td class=\"text-left\">Radhika Debnath</td>\r\n                                                    <td class=\"text-left\">radhikadebnath@gmail.com</td>\r\n                                                    <td class=\"text-left\">200</td>\r\n                                                    <td class=\"text-left\">\r\n                                                        <a class=\"btn btn-info btn-xs\" href=\"#\">\r\n                                                            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edit</a>\r\n                                                        <a href=\"#\" class=\"btn btn-danger btn-xs\">\r\n                                                            <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Del</a>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td class=\"text-left\">3</td>\r\n                                                    <td class=\"text-left\">Susanto Ghosh</td>\r\n                                                    <td class=\"text-left\">susantoghosh@gmail.com</td>\r\n                                                    <td class=\"text-left\">250</td>\r\n                                                    <td class=\"text-left\">\r\n                                                        <a class=\"btn btn-info btn-xs\" href=\"#\">\r\n                                                            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edit</a>\r\n                                                        <a href=\"#\" class=\"btn btn-danger btn-xs\">\r\n                                                            <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Del</a>\r\n                                                    </td>\r\n                                                </tr>\r\n\r\n                                                <tr>\r\n                                                    <td class=\"text-left\">4</td>\r\n                                                    <td class=\"text-left\">Tanmoy Pramanik</td>\r\n                                                    <td class=\"text-left\">tanmoypramanik@gmail.com</td>\r\n                                                    <td class=\"text-left\">100</td>\r\n                                                    <td class=\"text-left\">\r\n                                                        <a class=\"btn btn-info btn-xs\" href=\"#\">\r\n                                                            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edit</a>\r\n                                                        <a href=\"#\" class=\"btn btn-danger btn-xs\">\r\n                                                            <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Del</a>\r\n                                                    </td>\r\n                                                </tr>\r\n\r\n\r\n\r\n                                            </table> -->\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- / Dasboard inner -->\r\n</section>\r\n<!-- / DASHBOARD -->"

/***/ }),

/***/ "../../../../../src/app/common/profile/profile.cmp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__("../../../../../src/app/common/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(router, cService) {
        this.router = router;
        this.cService = cService;
        this.model = {};
        this.loading = false;
        this.successMsg = '';
        this.errorMsg = '';
        this.ticket = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.profileData = {
            name: '',
            address: '',
            phone: '',
            email: '',
            cmpname: '',
            zip: '',
            city: '',
            state: '',
            country: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
        };
        this.getTickets();
        this.cols = [
            { field: 'no', header: 'Sr No.', width: '10%' },
            { field: 'date', header: 'Date', width: '18%' },
            { field: 'eventname', header: 'Event Name', width: '15%' },
            { field: 'qty', header: 'Quantity', width: '11%' },
            { field: 'price', header: 'Price', width: '12%' },
            { field: 'fee', header: 'Fee', width: '10%' },
            { field: 'dicount', header: 'Discount', width: '12%' },
            { field: 'total', header: 'Total', width: '12%' }
        ];
        this.cols1 = [
            { field: 'EventName', header: 'Event Details', width: '60%' },
            { field: 'TotalTicketQty', header: 'Tickets', width: '20%' },
            { field: 'TotalTicketSoldQty', header: 'Total Sale', width: '20%' }
        ];
    };
    ProfileComponent.prototype.getTickets = function () {
        var _this = this;
        this.cService.getAllUserData()
            .subscribe(function (response) {
            _this.ticketData = response;
            console.log(_this.ticketData);
            _this.eventData = _this.ticketData.Events != null ? _this.ticketData.Events.filter(function (a) { return a.IsActive == true; }) : [];
            _this.profileData = {
                name: (_this.ticketData.GTCustomerMain != null ? _this.ticketData.GTCustomerMain[0].FirstName : '') + ' ' + (_this.ticketData.GTCustomerMain != null ? _this.ticketData.GTCustomerMain[0].LastName : ''),
                address: (_this.ticketData.AddressDetail != null ? _this.ticketData.AddressDetail[0].AddressLine1 : '') + ' - ' +
                    (_this.ticketData.AddressDetail != null ? _this.ticketData.AddressDetail[0].AddressLine2 : '') + ', ' +
                    (_this.ticketData.AddressDetail != null ? _this.ticketData.AddressDetail[0].City : '') + ', ' +
                    (_this.ticketData.AddressDetail != null ? _this.ticketData.AddressDetail[0].States : '') + ', ' +
                    (_this.ticketData.AddressDetail != null ? _this.ticketData.AddressDetail[0].Country : '') + ', ',
                phone: _this.ticketData.Events != null ? _this.ticketData.Events[0].ContactNumber : '',
                email: _this.ticketData.GTCustomerMain != null ? _this.ticketData.GTCustomerMain[0].Email : '',
                cmpname: _this.ticketData.Events != null ? _this.ticketData.Events[0].ProviderName : '',
                zip: _this.ticketData.AddressDetail != null ? _this.ticketData.AddressDetail[0].AddressLine2 : '',
                city: _this.ticketData.AddressDetail != null ? _this.ticketData.AddressDetail[0].City : '',
                state: _this.ticketData.AddressDetail != null ? _this.ticketData.AddressDetail[0].States : '',
                country: _this.ticketData.AddressDetail != null ? _this.ticketData.AddressDetail[0].Country : '',
                firstName: _this.ticketData.GTCustomerMain != null ? _this.ticketData.GTCustomerMain[0].FirstName : '',
                lastName: _this.ticketData.GTCustomerMain != null ? _this.ticketData.GTCustomerMain[0].LastName : '',
                password: _this.ticketData.GTCustomerMain != null ? _this.ticketData.GTCustomerMain[0].Password : '',
                confirmPassword: '',
            };
            if (_this.ticketData.Order != null) {
                if (_this.ticketData.Order.length > 0) {
                    for (var i = 0; i < _this.ticketData.Order.length; i++) {
                        if (_this.ticketData.OrderDetail != null) {
                            for (var j = 0; j < _this.ticketData.OrderDetail.length; j++) {
                                if (_this.ticketData.OrderDetail[j].OrderRowId == _this.ticketData.Order[i].OrderRowId) {
                                    var ticket = {
                                        no: _this.ticketData.Order[i].OrderId,
                                        date: _this.ticketData.Order[i].Created,
                                        eventname: _this.ticketData.OrderDetail[j].EventName,
                                        qty: _this.ticketData.OrderDetail[j].Qty,
                                        price: _this.ticketData.OrderDetail[j].RegularPrice,
                                        fee: _this.ticketData.OrderDetail[j].ServiceFee,
                                        discount: _this.ticketData.OrderDetail[j].Discount,
                                        total: (_this.ticketData.OrderDetail[j].RegularPrice + _this.ticketData.OrderDetail[j].ServiceFee - _this.ticketData.OrderDetail[j].Discount)
                                    };
                                    _this.ticket.push(ticket);
                                }
                            }
                        }
                    }
                }
            }
        }, function (error) {
            _this.errorMsg = error._body;
            setTimeout(function () {
                this.errorMsg = '';
            }.bind(_this), 5000);
        });
    };
    ProfileComponent.prototype.logout = function () {
        localStorage.setItem('login', 'false');
        this.router.navigate(['/']);
    };
    ProfileComponent.prototype.pastEvents = function () {
        this.eventData = this.ticketData.Events != null ? this.ticketData.Events : [];
    };
    ProfileComponent.prototype.profileChange = function () {
        var _this = this;
        this.cService.changeProfileDetails(this.profileData)
            .subscribe(function (data) {
            _this.successMsg = data;
            console.log(data);
            setTimeout(function () {
                this.successMsg = '';
            }.bind(_this), 5000);
        }, function (error) {
            _this.errorMsg = error._body;
            setTimeout(function () {
                this.errorMsg = '';
            }.bind(_this), 5000);
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/common/profile/profile.cmp.html"),
            styles: [__webpack_require__("../../../../../src/app/common/profile/profile.cmp.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/register/register.cmp.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN # MODAL REGISTER -->\r\n<div class=\"model-form\">\r\n  <div class=\"modal fade\" id=\"register-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\" align=\"center\">\r\n          <h2>Please SIGNUP</h2>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n        <!-- Begin # DIV Form -->\r\n        <div id=\"div-forms\">\r\n          <!-- Begin # Login Form -->\r\n          <div id=\"target\">\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n              <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                  <div *ngIf=\"successMsg\" class=\"help-block alert alert-success\">{{successMsg}}</div>\r\n                  <div *ngIf=\"errorMsg\" class=\"help-block alert alert-danger\">{{errorMsg}}</div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"input-group\">\r\n                      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\r\n                        <label for=\"firstName\">First Name</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First Name\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\"\r\n                          required />\r\n                        <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block alert alert-danger\">First Name is required</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"input-group\">\r\n                      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\r\n                        <label for=\"lastName\">Last Name</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"Last Name\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\"\r\n                          required />\r\n                        <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block alert alert-danger\">Last Name is required</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"input-group\">\r\n                      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                        <label for=\"username\">Email</label>\r\n                        <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email Id\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required\r\n                          email pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" />\r\n                        <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block alert alert-danger\">Email Id is required or Invalid</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"input-group\">\r\n                      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                        <label for=\"password\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\r\n                          required />\r\n                        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block alert alert-danger\">Password is required</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"input-group\">\r\n                  <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !terms.valid }\">\r\n                    <label>\r\n                      <input type=\"checkbox\" name=\"terms\" [(ngModel)]=\"model.terms\" #terms=\"ngModel\" required> I Agree to Terms and Conditions </label>\r\n                    <div *ngIf=\"f.submitted && !terms.valid\" class=\"help-block alert alert-danger\">Please agree to Terms and Conditions</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <div>\r\n                  <div class=\"form-group\">\r\n                    <button [disabled]=\"loading\" class=\"btn btn-primary btn-lg btn-block\">Create account</button>\r\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div>\r\n                  <!--<p class=\"text-center\"><a href=\"#\">Here there will be a link where it will say Are you an Event Organizer?</a></p>-->\r\n                </div>\r\n              </div>\r\n            </form>\r\n            <div class=\"modal-footer\">\r\n              <button class=\"redir\" onclick=\"toggleVisibility('replace_target');\">Are you an Event Organizer?</button>\r\n            </div>\r\n          </div>\r\n          <!-- End # Login Form -->\r\n          <!-- Begin # Login Form -->\r\n          <div id=\"replace_target\" style=\"display:none;\">\r\n            <form>\r\n              <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"input-group\">\r\n                      <label>Company Name</label>\r\n                      <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Company Name\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"input-group\">\r\n                      <label>First Name</label>\r\n                      <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"First Name\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"input-group\">\r\n                      <label>Last Name</label>\r\n                      <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Last Name\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"input-group\">\r\n                      <label>Email</label>\r\n                      <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"input-group\">\r\n                      <label>Password</label>\r\n                      <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"input-group\">\r\n                      <label>Address Line 1</label>\r\n                      <textarea class=\"form-control\" placeholder=\"Company Address Line 1\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"input-group\">\r\n                      <label>Address Line 2</label>\r\n                      <textarea class=\"form-control\" placeholder=\"Company Address Line 2\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"input-group\">\r\n                      <label>City</label>\r\n                      <input type=\"text\" name=\"password\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"input-group\">\r\n                      <label>State</label>\r\n                      <input type=\"text\" name=\"password\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"input-group\">\r\n                      <label>Zip Code</label>\r\n                      <input type=\"text\" name=\"password\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <label>Company Logo</label>\r\n                    <input type=\"file\" id=\"exampleInputFile\">\r\n                    <div class=\"space1\"></div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"input-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" name=\"terms\"> I Agree to Terms and Conditions </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <div>\r\n                  <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Create account</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n            <div class=\"modal-footer\">\r\n              <button class=\"redir\" onclick=\"toggleVisibility('target');\">Are you a Customer?</button>\r\n            </div>\r\n          </div>\r\n          <!-- End # Login Form -->\r\n        </div>\r\n        <!-- End # DIV Form -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END # MODAL REGISTER -->"

/***/ }),

/***/ "../../../../../src/app/common/register/register.cmp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__("../../../../../src/app/common/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, cService) {
        this.router = router;
        this.cService = cService;
        this.model = {};
        this.loading = false;
        this.successMsg = '';
        this.errorMsg = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.cService.createUser(this.model)
            .subscribe(function (data) {
            _this.successMsg = data;
            _this.loading = false;
            setTimeout(function () {
                this.successMsg = '';
            }.bind(_this), 5000);
        }, function (error) {
            _this.loading = false;
            _this.errorMsg = error._body;
            setTimeout(function () {
                this.errorMsg = '';
            }.bind(_this), 5000);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/common/register/register.cmp.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/addevent/addEvent.cmp.html":
/***/ (function(module, exports) {

module.exports = "<!-- EVENT CREATE -->\r\n<section class=\"event-create\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-md-offset-3\">\r\n        <!--<form role=\"form\" class=\"registration-form\" action=\"javascript:void(0);\">-->\r\n        <form name=\"addEventform\" (ngSubmit)=\"aef.form.valid && addEvent()\" #aef=\"ngForm\" novalidate>\r\n          <fieldset *ngIf=\"isSectionHide1\">\r\n            <div class=\"form-bottom\">\r\n              <div class=\"ticket-book\">\r\n                <div class=\"ev-lo\"><img class=\"img-responsive\" src=\"assets/img/logo.png\" alt=\"\" /></div>\r\n                <h2>Let's get started</h2>\r\n                <p>Enter your Event Title And Event Type</p>\r\n\r\n                <div class=\"form-group\">\r\n                  <label>Event Title</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"eventModel.eventTitle\" #eventTitle=\"ngModel\" name=\"eventTitle\" placeholder=\"Event Title\" type=\"text\" required>\r\n                  <div *ngIf=\"aef.submitted && !eventTitle.valid\" class=\"help-block alert alert-danger\">Event Title is required</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Event Type </label>\r\n                  <select class=\"form-control minimal\" [(ngModel)]=\"eventModel.eventType\" #eventType=\"ngModel\" name=\"eventType\" required>\r\n                    <option value=\"\" selected=\"selected\">Event Type</option>\r\n                    <option value=\"1\">Musical</option>\r\n                    <option value=\"2\">Play</option>\r\n                    <option value=\"3\">Religious</option>\r\n                  </select>\r\n                  <div *ngIf=\"aef.submitted && !eventType.valid\" class=\"help-block alert alert-danger\">Event Type is required</div>\r\n                </div>\r\n                <hr>\r\n                <button class=\"btn btn-next\">Get Started</button>\r\n\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n        </form>\r\n        <form name=\"addLocationform\" (ngSubmit)=\"alf.form.valid && addLocation()\" #alf=\"ngForm\" novalidate>\r\n          <fieldset *ngIf=\"isSectionHide2\">\r\n            <div class=\"form-bottom\">\r\n              <div class=\"ticket-book\">\r\n                <div class=\"ev-lo\"><img class=\"img-responsive\" src=\"assets/img/logo.png\" alt=\"\" /></div>\r\n                <h2>Let's get started</h2>\r\n                <p>Enter your Event Location</p>\r\n                <div *ngIf=\"isAddress\" class=\"help-block alert alert-danger\">Event address details are required</div>\r\n                <div class=\"form-group\">\r\n                  \r\n                  <label>Event Location</label>\r\n                  <select [(ngModel)]=\"locationModel.location\" #location=\"ngModel\" name=\"location\" class=\"form-control minimal\" required>\r\n                    <option value=\"\" selected=\"selected\">Event Location</option>\r\n                    <option value=\"1\">India</option>\r\n                    <option value=\"2\">US</option>\r\n                    <option value=\"3\">Canada</option>\r\n                    <option value=\"4\">UAE</option>\r\n                    <option value=\"5\">UK</option>\r\n                    <option value=\"6\">Australia</option>\r\n                  </select>\r\n                  <div *ngIf=\"alf.submitted && !location.valid\" class=\"help-block alert alert-danger\">Event location is required</div>\r\n                </div>\r\n                <a class=\"btn btn-info\" href=\"#\" role=\"button\" data-toggle=\"modal\" data-target=\"#address-modal\">enter address</a>\r\n                <hr>\r\n                <div class=\"inner-btn\">\r\n                  <button type=\"button\" class=\"btn btn-previous\" (click)=\"backMenu1()\">Previous</button>\r\n                  <button type=\"submit\" class=\"btn btn-next\">Next</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n        </form>\r\n        <form name=\"addDateform\" (ngSubmit)=\"adf.form.valid && addDate()\" #adf=\"ngForm\" novalidate>\r\n          <fieldset *ngIf=\"isSectionHide3\">\r\n            <div class=\"form-bottom\">\r\n              <div class=\"ticket-book\">\r\n                <div class=\"ev-lo\"><img class=\"img-responsive\" src=\"assets/img/logo.png\" alt=\"\" /></div>\r\n                <h2>Let's get started</h2>\r\n                <p>Enter your Event Location</p>\r\n                <div class=\"form-group\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"control-label\">Event Start Date/End Date</label>\r\n                        <div class=\"input-group date\">\r\n                          <input #drp=\"bsDaterangepicker\" #startEndDate=\"ngModel\" class=\"form-control\" bsDaterangepicker [(ngModel)]=\"dateModel.startEndDate\" name=\"startEndDate\" required>\r\n                          <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngIf=\"adf.submitted && !startEndDate.valid\" class=\"help-block alert alert-danger\">Event start/end date is required</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"control-label\">Event Start Time</label>\r\n                        <div class=\"input-group\">\r\n                          <timepicker [(ngModel)]=\"dateModel.startTime\" name=\"startTime\" required #startTime=\"ngModel\"></timepicker>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngIf=\"adf.submitted && !startTime.valid\" class=\"help-block alert alert-danger\">Event start time is required</div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"control-label\">Event End Time</label>\r\n                        <div class=\"input-group\">\r\n                          <timepicker [(ngModel)]=\"dateModel.endTime\" name=\"endTime\" required #endTime=\"ngModel\"></timepicker>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngIf=\"adf.submitted && !endTime.valid\" class=\"help-block alert alert-danger\">Event end time is required</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Event Image</label>\r\n                  <input type=\"file\" [(ngModel)]=\"dateModel.image\" name=\"image\" #image=\"ngModel\">\r\n                  <!--<div *ngIf=\"adf.submitted && !image.valid\" class=\"help-block alert alert-danger\">Event image is required</div>-->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Event Description</label>\r\n                  <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"dateModel.description\" name=\"description\" #description=\"ngModel\" required></textarea>\r\n                  <div *ngIf=\"adf.submitted && !description.valid\" class=\"help-block alert alert-danger\">Event description is required</div>\r\n                </div>\r\n                <div class=\"form-group event-link\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6 text-center\"><a href=\"#\" role=\"button\" data-toggle=\"modal\" data-target=\"#shudule-modal\">Schedule Multiple Events</a></div>\r\n                    <div class=\"col-md-6 text-center\"><a href=\"#\" role=\"button\" data-toggle=\"modal\" data-target=\"#timezone-modal\">Timezone & Date Settings</a></div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n                <div class=\"inner-btn\">\r\n                  <button type=\"button\" class=\"btn btn-previous\" (click)=\"backMenu2()\">Previous</button>\r\n                  <button type=\"submit\" class=\"btn btn-next\">Next</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n        </form>\r\n        <fieldset *ngIf=\"isSectionHide4\">\r\n          <div class=\"form-bottom\">\r\n            <div class=\"ticket-book\">\r\n              <div class=\"ev-lo\"><img class=\"img-responsive\" src=\"assets/img/logo.png\" alt=\"\" /></div>\r\n              <h2>Let's get started</h2>\r\n              <p class=\"la-step\">Create your Tickets</p>\r\n              <!--<div class=\"form-group\">\r\n                <h6 id=\"ask\">What type of ticket would you like to start with?</h6>\r\n              </div>-->\r\n              <div *ngIf=\"successMsg\" class=\"help-block alert alert-success\">{{successMsg}}</div>\r\n              <div *ngIf=\"errorMsg\" class=\"help-block alert alert-danger\">{{errorMsg}}</div>\r\n              <div class=\"contents\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <table class=\"table table-striped table-condensed\">\r\n                      <tr *ngFor=\"let row of ticketData;let i = index\">\r\n                        <td>{{row.ticketName}}</td>\r\n                        <td>{{row.quantity}}</td>\r\n                        <td>{{row.price}}</td>\r\n                        <td>{{row.perOrder}}</td>\r\n                        <td style=\"width:5%\"><button type=\"button\" class=\"btn btn-danger btn-group-sm\" (click)=\"deleteTicket(i)\" ><i class=\"fa fa-trash\"></i></button></td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <!--Free-->\r\n                <div class=\"form-group\" *ngIf=\"isFreeTicket\">\r\n                  <form name=\"addFreeform\" (ngSubmit)=\"aFreef.form.valid && addFreeTicket()\" #aFreef=\"ngForm\" novalidate>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                          <input class=\"form-control\" [(ngModel)]=\"freeModel.ticketName\" #ticketName=\"ngModel\" name=\"ticketName\" placeholder=\"Ticket Name\" type=\"text\" required>\r\n                          <div *ngIf=\"aFreef.submitted && !ticketName.valid\" class=\"help-block alert alert-danger\">Ticket Name is required</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-3\">\r\n                        <div class=\"form-group\">\r\n                          <input class=\"form-control\" [(ngModel)]=\"freeModel.quantity\" #quantity=\"ngModel\" name=\"quantity\" placeholder=\"Quantity\" type=\"number\" min=\"1\" required>\r\n                          <div *ngIf=\"aFreef.submitted && !quantity.valid\" class=\"help-block alert alert-danger\">Quantity is required</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-3\">\r\n                        <span class=\"label label-success btn\">Free</span>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <input class=\"form-control\" [(ngModel)]=\"freeModel.perOrder\" #perOrder=\"ngModel\" name=\"perOrder\" placeholder=\"Tickets allowed per order\" type=\"number\" required>\r\n                          <div *ngIf=\"aFreef.submitted && !perOrder.valid\" class=\"help-block alert alert-danger\">Tickets allowed per order is required</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <span class=\"rem\"><button type=\"submit\" class=\"btn btn-success btn-sm\">Add</button></span>\r\n                  </form>\r\n                </div>\r\n                <!--Paid-->\r\n                <div class=\"form-group\" *ngIf=\"isPaidTicket\">\r\n                  <form name=\"addPaidform\" (ngSubmit)=\"aPaidf.form.valid && addPaidTicket()\" #aPaidf=\"ngForm\" novalidate>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                          <input class=\"form-control\" [(ngModel)]=\"paidModel.ticketName\" #ticketName=\"ngModel\" name=\"ticketName\" placeholder=\"Ticket Name\" type=\"text\" required>\r\n                          <div *ngIf=\"aPaidf.submitted && !ticketName.valid\" class=\"help-block alert alert-danger\">Ticket Name is required</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-3\">\r\n                        <div class=\"form-group\">\r\n                          <input class=\"form-control\" [(ngModel)]=\"paidModel.quantity\" #quantity=\"ngModel\" name=\"quantity\" placeholder=\"Quantity\" type=\"number\" min=\"1\" required>\r\n                          <div *ngIf=\"aPaidf.submitted && !quantity.valid\" class=\"help-block alert alert-danger\">Quantity is required</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-3\">\r\n                        <input class=\"form-control\" [(ngModel)]=\"paidModel.price\" #price=\"ngModel\" name=\"price\" placeholder=\"Price\" type=\"number\" min=\"1\" required>\r\n                        <div *ngIf=\"aPaidf.submitted && !price.valid\" class=\"help-block alert alert-danger\">Price is required</div>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <input class=\"form-control\" [(ngModel)]=\"paidModel.perOrder\" #perOrder=\"ngModel\" name=\"perOrder\" placeholder=\"Tickets allowed per order\" type=\"number\" required>\r\n                          <div *ngIf=\"aPaidf.submitted && !perOrder.valid\" class=\"help-block alert alert-danger\">Tickets allowed per order is required</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <span class=\"rem\"><button type=\"submit\" class=\"btn btn-success btn-sm\">Add</button></span>\r\n                  </form>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\"><a class=\"btn btn-info add\" (click)=\"freeTicket()\">Free ticket</a></div>\r\n                  <div class=\"col-md-6\"><a class=\"btn btn-info add2\" (click)=\"paidTicket()\">Paid ticket</a></div>\r\n                </div>\r\n                <hr>\r\n                <button class=\"btn btn-next\" (click)=\"SaveEvent()\"><i class=\"fa fa-heart\" ></i> Save This Event</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n<!-- / EVENT CREATE -->\r\n<!-- BEGIN # MODAL ADDRESS -->\r\n<div class=\"model-form add-form\">\r\n  <div class=\"modal fade\" id=\"address-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\" align=\"center\">\r\n          <h2>Location</h2>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n\r\n        <!-- Begin # DIV Form -->\r\n        <div id=\"div-forms3\">\r\n\r\n          <!-- Begin # Login Form -->\r\n          <form id=\"add-form\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"input-group\">\r\n                <label>Enter the venue's name</label>\r\n                <input [(ngModel)]=\"locationModel.vanueName\" #vanueName=\"ngModel\" name=\"vanueName\" type=\"text\" class=\"form-control\" placeholder=\"Enter the venue's name\">\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <label>Address</label>\r\n                <input [(ngModel)]=\"locationModel.address1\" #address1=\"ngModel\" type=\"text\" name=\"address1\" class=\"form-control\" placeholder=\"Address\">\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <label>Address 2</label>\r\n                <input [(ngModel)]=\"locationModel.address2\" #address2=\"ngModel\" type=\"text\" name=\"address2\" class=\"form-control\" placeholder=\"Address 2\">\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <label>City</label>\r\n                <input [(ngModel)]=\"locationModel.city\" #city=\"ngModel\" type=\"text\" name=\"city\" class=\"form-control\" placeholder=\"City\">\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>State</label>\r\n                      <input [(ngModel)]=\"locationModel.state\" #state=\"ngModel\" type=\"text\" name=\"state\" class=\"form-control\" placeholder=\"State\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Zip/Postal</label>\r\n                      <input [(ngModel)]=\"locationModel.zipCode\" #zipCode=\"ngModel\" type=\"text\" name=\"zipCode\" class=\"form-control\" placeholder=\"Zip/Postal\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <label>Country</label>\r\n                <select [(ngModel)]=\"locationModel.country\" #country=\"ngModel\" name=\"country\" class=\"form-control minimal\">\r\n                  <option value=\"\" selected=\"selected\">Please select a country.</option>\r\n                  <option value=\"US\">United States</option>\r\n                  <option value=\"AF\">Afghanistan</option>\r\n                  <option value=\"AX\">Åland Islands</option>\r\n                  <option value=\"AL\">Albania</option>\r\n                  <option value=\"DZ\">Algeria</option>\r\n                  <option value=\"AS\">American Samoa</option>\r\n                  <option value=\"AD\">Andorra</option>\r\n                  <option value=\"AO\">Angola</option>\r\n                  <option value=\"AI\">Anguilla</option>\r\n                  <option value=\"AQ\">Antarctica</option>\r\n                  <option value=\"AG\">Antigua and Barbuda</option>\r\n                  <option value=\"AR\">Argentina</option>\r\n                  <option value=\"AM\">Armenia</option>\r\n                  <option value=\"AW\">Aruba</option>\r\n                  <option value=\"AU\">Australia</option>\r\n                  <option value=\"AT\">Austria</option>\r\n                  <option value=\"AZ\">Azerbaijan</option>\r\n                  <option value=\"BS\">Bahamas</option>\r\n                  <option value=\"BH\">Bahrain</option>\r\n                  <option value=\"BD\">Bangladesh</option>\r\n                  <option value=\"BB\">Barbados</option>\r\n                  <option value=\"BY\">Belarus</option>\r\n                  <option value=\"BE\">Belgium</option>\r\n                  <option value=\"BZ\">Belize</option>\r\n                  <option value=\"BJ\">Benin</option>\r\n                  <option value=\"BM\">Bermuda</option>\r\n                  <option value=\"BT\">Bhutan</option>\r\n                  <option value=\"BO\">Bolivia, Plurinational State of</option>\r\n                  <option value=\"BQ\">Bonaire, Sint Eustatius and Saba</option>\r\n                  <option value=\"BA\">Bosnia and Herzegovina</option>\r\n                  <option value=\"BW\">Botswana</option>\r\n                  <option value=\"BV\">Bouvet Island</option>\r\n                  <option value=\"BR\">Brazil</option>\r\n                  <option value=\"IO\">British Indian Ocean Territory</option>\r\n                  <option value=\"BN\">Brunei Darussalam</option>\r\n                  <option value=\"BG\">Bulgaria</option>\r\n                  <option value=\"BF\">Burkina Faso</option>\r\n                  <option value=\"BI\">Burundi</option>\r\n                  <option value=\"CV\">Cabo Verde</option>\r\n                  <option value=\"KH\">Cambodia</option>\r\n                  <option value=\"CM\">Cameroon</option>\r\n                  <option value=\"CA\">Canada</option>\r\n                  <option value=\"KY\">Cayman Islands</option>\r\n                  <option value=\"CF\">Central African Republic</option>\r\n                  <option value=\"TD\">Chad</option>\r\n                  <option value=\"CL\">Chile</option>\r\n                  <option value=\"CN\">China</option>\r\n                  <option value=\"CX\">Christmas Island</option>\r\n                  <option value=\"CC\">Cocos (Keeling) Islands</option>\r\n                  <option value=\"CO\">Colombia</option>\r\n                  <option value=\"KM\">Comoros</option>\r\n                  <option value=\"CG\">Congo</option>\r\n                  <option value=\"CD\">Congo, The Democratic Republic of the</option>\r\n                  <option value=\"CK\">Cook Islands</option>\r\n                  <option value=\"CR\">Costa Rica</option>\r\n                  <option value=\"CI\">Côte d'Ivoire</option>\r\n                  <option value=\"HR\">Croatia</option>\r\n                  <option value=\"CW\">Curaçao</option>\r\n                  <option value=\"CY\">Cyprus</option>\r\n                  <option value=\"CZ\">Czechia</option>\r\n                  <option value=\"DK\">Denmark</option>\r\n                  <option value=\"DJ\">Djibouti</option>\r\n                  <option value=\"DM\">Dominica</option>\r\n                  <option value=\"DO\">Dominican Republic</option>\r\n                  <option value=\"EC\">Ecuador</option>\r\n                  <option value=\"EG\">Egypt</option>\r\n                  <option value=\"SV\">El Salvador</option>\r\n                  <option value=\"GQ\">Equatorial Guinea</option>\r\n                  <option value=\"ER\">Eritrea</option>\r\n                  <option value=\"EE\">Estonia</option>\r\n                  <option value=\"ET\">Ethiopia</option>\r\n                  <option value=\"FK\">Falkland Islands (Malvinas)</option>\r\n                  <option value=\"FO\">Faroe Islands</option>\r\n                  <option value=\"FJ\">Fiji</option>\r\n                  <option value=\"FI\">Finland</option>\r\n                  <option value=\"FR\">France</option>\r\n                  <option value=\"GF\">French Guiana</option>\r\n                  <option value=\"PF\">French Polynesia</option>\r\n                  <option value=\"TF\">French Southern Territories</option>\r\n                  <option value=\"GA\">Gabon</option>\r\n                  <option value=\"GM\">Gambia</option>\r\n                  <option value=\"GE\">Georgia</option>\r\n                  <option value=\"DE\">Germany</option>\r\n                  <option value=\"GH\">Ghana</option>\r\n                  <option value=\"GI\">Gibraltar</option>\r\n                  <option value=\"GR\">Greece</option>\r\n                  <option value=\"GL\">Greenland</option>\r\n                  <option value=\"GD\">Grenada</option>\r\n                  <option value=\"GP\">Guadeloupe</option>\r\n                  <option value=\"GU\">Guam</option>\r\n                  <option value=\"GT\">Guatemala</option>\r\n                  <option value=\"GG\">Guernsey</option>\r\n                  <option value=\"GN\">Guinea</option>\r\n                  <option value=\"GW\">Guinea-Bissau</option>\r\n                  <option value=\"GY\">Guyana</option>\r\n                  <option value=\"HT\">Haiti</option>\r\n                  <option value=\"HM\">Heard Island and McDonald Islands</option>\r\n                  <option value=\"VA\">Holy See (Vatican City State)</option>\r\n                  <option value=\"HN\">Honduras</option>\r\n                  <option value=\"HK\">Hong Kong</option>\r\n                  <option value=\"HU\">Hungary</option>\r\n                  <option value=\"IS\">Iceland</option>\r\n                  <option value=\"IN\">India</option>\r\n                  <option value=\"ID\">Indonesia</option>\r\n                  <option value=\"IQ\">Iraq</option>\r\n                  <option value=\"IE\">Ireland</option>\r\n                  <option value=\"IM\">Isle of Man</option>\r\n                  <option value=\"IL\">Israel</option>\r\n                  <option value=\"IT\">Italy</option>\r\n                  <option value=\"JM\">Jamaica</option>\r\n                  <option value=\"JP\">Japan</option>\r\n                  <option value=\"JE\">Jersey</option>\r\n                  <option value=\"JO\">Jordan</option>\r\n                  <option value=\"KZ\">Kazakhstan</option>\r\n                  <option value=\"KE\">Kenya</option>\r\n                  <option value=\"KI\">Kiribati</option>\r\n                  <option value=\"KR\">Korea, Republic of</option>\r\n                  <option value=\"KW\">Kuwait</option>\r\n                  <option value=\"KG\">Kyrgyzstan</option>\r\n                  <option value=\"LA\">Lao People's Democratic Republic</option>\r\n                  <option value=\"LV\">Latvia</option>\r\n                  <option value=\"LB\">Lebanon</option>\r\n                  <option value=\"LS\">Lesotho</option>\r\n                  <option value=\"LR\">Liberia</option>\r\n                  <option value=\"LY\">Libya</option>\r\n                  <option value=\"LI\">Liechtenstein</option>\r\n                  <option value=\"LT\">Lithuania</option>\r\n                  <option value=\"LU\">Luxembourg</option>\r\n                  <option value=\"MO\">Macao</option>\r\n                  <option value=\"MK\">Macedonia, Republic of</option>\r\n                  <option value=\"MG\">Madagascar</option>\r\n                  <option value=\"MW\">Malawi</option>\r\n                  <option value=\"MY\">Malaysia</option>\r\n                  <option value=\"MV\">Maldives</option>\r\n                  <option value=\"ML\">Mali</option>\r\n                  <option value=\"MT\">Malta</option>\r\n                  <option value=\"MH\">Marshall Islands</option>\r\n                  <option value=\"MQ\">Martinique</option>\r\n                  <option value=\"MR\">Mauritania</option>\r\n                  <option value=\"MU\">Mauritius</option>\r\n                  <option value=\"YT\">Mayotte</option>\r\n                  <option value=\"MX\">Mexico</option>\r\n                  <option value=\"FM\">Micronesia, Federated States of</option>\r\n                  <option value=\"MD\">Moldova, Republic of</option>\r\n                  <option value=\"MC\">Monaco</option>\r\n                  <option value=\"MN\">Mongolia</option>\r\n                  <option value=\"ME\">Montenegro</option>\r\n                  <option value=\"MS\">Montserrat</option>\r\n                  <option value=\"MA\">Morocco</option>\r\n                  <option value=\"MZ\">Mozambique</option>\r\n                  <option value=\"MM\">Myanmar</option>\r\n                  <option value=\"NA\">Namibia</option>\r\n                  <option value=\"NR\">Nauru</option>\r\n                  <option value=\"NP\">Nepal</option>\r\n                  <option value=\"NL\">Netherlands</option>\r\n                  <option value=\"NC\">New Caledonia</option>\r\n                  <option value=\"NZ\">New Zealand</option>\r\n                  <option value=\"NI\">Nicaragua</option>\r\n                  <option value=\"NE\">Niger</option>\r\n                  <option value=\"NG\">Nigeria</option>\r\n                  <option value=\"NU\">Niue</option>\r\n                  <option value=\"NF\">Norfolk Island</option>\r\n                  <option value=\"MP\">Northern Mariana Islands</option>\r\n                  <option value=\"NO\">Norway</option>\r\n                  <option value=\"OM\">Oman</option>\r\n                  <option value=\"PK\">Pakistan</option>\r\n                  <option value=\"PW\">Palau</option>\r\n                  <option value=\"PS\">Palestine, State of</option>\r\n                  <option value=\"PA\">Panama</option>\r\n                  <option value=\"PG\">Papua New Guinea</option>\r\n                  <option value=\"PY\">Paraguay</option>\r\n                  <option value=\"PE\">Peru</option>\r\n                  <option value=\"PH\">Philippines</option>\r\n                  <option value=\"PN\">Pitcairn</option>\r\n                  <option value=\"PL\">Poland</option>\r\n                  <option value=\"PT\">Portugal</option>\r\n                  <option value=\"PR\">Puerto Rico</option>\r\n                  <option value=\"QA\">Qatar</option>\r\n                  <option value=\"RE\">Réunion</option>\r\n                  <option value=\"RO\">Romania</option>\r\n                  <option value=\"RU\">Russian Federation</option>\r\n                  <option value=\"RW\">Rwanda</option>\r\n                  <option value=\"BL\">Saint Barthélemy</option>\r\n                  <option value=\"SH\">Saint Helena, Ascension and Tristan da Cunha</option>\r\n                  <option value=\"KN\">Saint Kitts and Nevis</option>\r\n                  <option value=\"LC\">Saint Lucia</option>\r\n                  <option value=\"MF\">Saint Martin (French part)</option>\r\n                  <option value=\"PM\">Saint Pierre and Miquelon</option>\r\n                  <option value=\"VC\">Saint Vincent and the Grenadines</option>\r\n                  <option value=\"WS\">Samoa</option>\r\n                  <option value=\"SM\">San Marino</option>\r\n                  <option value=\"ST\">Sao Tome and Principe</option>\r\n                  <option value=\"SA\">Saudi Arabia</option>\r\n                  <option value=\"SN\">Senegal</option>\r\n                  <option value=\"RS\">Serbia</option>\r\n                  <option value=\"SC\">Seychelles</option>\r\n                  <option value=\"SL\">Sierra Leone</option>\r\n                  <option value=\"SG\">Singapore</option>\r\n                  <option value=\"SX\">Sint Maarten (Dutch part)</option>\r\n                  <option value=\"SK\">Slovakia</option>\r\n                  <option value=\"SI\">Slovenia</option>\r\n                  <option value=\"SB\">Solomon Islands</option>\r\n                  <option value=\"SO\">Somalia</option>\r\n                  <option value=\"ZA\">South Africa</option>\r\n                  <option value=\"GS\">South Georgia and the South Sandwich Islands</option>\r\n                  <option value=\"SS\">South Sudan</option>\r\n                  <option value=\"ES\">Spain</option>\r\n                  <option value=\"LK\">Sri Lanka</option>\r\n                  <option value=\"SR\">Suriname</option>\r\n                  <option value=\"SJ\">Svalbard and Jan Mayen</option>\r\n                  <option value=\"SZ\">Swaziland</option>\r\n                  <option value=\"SE\">Sweden</option>\r\n                  <option value=\"CH\">Switzerland</option>\r\n                  <option value=\"TW\">Taiwan R.O.C.</option>\r\n                  <option value=\"TJ\">Tajikistan</option>\r\n                  <option value=\"TZ\">Tanzania, United Republic of</option>\r\n                  <option value=\"TH\">Thailand</option>\r\n                  <option value=\"TL\">Timor-Leste</option>\r\n                  <option value=\"TG\">Togo</option>\r\n                  <option value=\"TK\">Tokelau</option>\r\n                  <option value=\"TO\">Tonga</option>\r\n                  <option value=\"TT\">Trinidad and Tobago</option>\r\n                  <option value=\"TN\">Tunisia</option>\r\n                  <option value=\"TR\">Turkey</option>\r\n                  <option value=\"TM\">Turkmenistan</option>\r\n                  <option value=\"TC\">Turks and Caicos Islands</option>\r\n                  <option value=\"TV\">Tuvalu</option>\r\n                  <option value=\"UG\">Uganda</option>\r\n                  <option value=\"UA\">Ukraine</option>\r\n                  <option value=\"AE\">United Arab Emirates</option>\r\n                  <option value=\"GB\">United Kingdom</option>\r\n                  <option value=\"UM\">United States Minor Outlying Islands</option>\r\n                  <option value=\"UY\">Uruguay</option>\r\n                  <option value=\"UZ\">Uzbekistan</option>\r\n                  <option value=\"VU\">Vanuatu</option>\r\n                  <option value=\"VE\">Venezuela, Bolivarian Republic of</option>\r\n                  <option value=\"VN\">Viet Nam</option>\r\n                  <option value=\"VG\">Virgin Islands, British</option>\r\n                  <option value=\"VI\">Virgin Islands, U.S.</option>\r\n                  <option value=\"WF\">Wallis and Futuna</option>\r\n                  <option value=\"EH\">Western Sahara</option>\r\n                  <option value=\"YE\">Yemen</option>\r\n                  <option value=\"ZM\">Zambia</option>\r\n                  <option value=\"ZW\">Zimbabwe</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"modal-footer\">\r\n              <div>\r\n                <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" data-dismiss=\"modal\">Submit</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <!-- End # Login Form -->\r\n\r\n\r\n        </div>\r\n        <!-- End # DIV Form -->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END # MODAL ADDRESS -->\r\n<!-- BEGIN # MODAL Schedule dates -->\r\n<div class=\"model-form add-form sc-even\">\r\n  <div class=\"modal fade\" id=\"shudule-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\" style=\"width:750px;\">\r\n        <div class=\"modal-header\" align=\"center\">\r\n          <h2>Schedule dates</h2>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n        <!-- Begin # DIV Form -->\r\n        <div id=\"div-forms4\">\r\n          <!-- Begin # Login Form -->\r\n          <form name=\"addOccureform\" (ngSubmit)=\"aof.form.valid && addEventOccur()\" #aof=\"ngForm\" novalidate>\r\n            <div class=\"modal-body\">\r\n              <div class=\"input-group\">\r\n                <label>HOW OFTEN DOES THIS EVENT OCCUR?</label>\r\n                <select class=\"form-control minimal\" [(ngModel)]=\"occurModel.eventOccur\" name=\"eventOccur\" #eventOccur=\"ngModel\" required>\r\n                  <option value=\"days\" selected>Daily</option>\r\n                  <option value=\"weeks\">Weekly</option>\r\n                  <option value=\"months\">Monthly</option>\r\n                  <option value=\"custom\">Custom</option>\r\n                </select>\r\n                <div *ngIf=\"aof.submitted && !eventOccur.valid\" class=\"help-block alert alert-danger\">Required</div>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">FROM</label>\r\n                      <div class=\"input-group\">\r\n                        <timepicker [(ngModel)]=\"occurModel.fromOccur\" name=\"fromOccur\" #fromOccur=\"ngModel\" required></timepicker>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"aof.submitted && !fromOccur.valid\" class=\"help-block alert alert-danger\">Required</div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">TO</label>\r\n                      <div class=\"input-group\">\r\n                        <timepicker [(ngModel)]=\"occurModel.toOccur\" name=\"toOccur\" #toOccur=\"ngModel\" required></timepicker>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"aof.submitted && !toOccur.valid\" class=\"help-block alert alert-danger\">Required</div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">OF THE</label>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control minimal\" [(ngModel)]=\"occurModel.dayOccur\" name=\"dayOccur\" #dayOccur=\"ngModel\" required>\r\n                          <option value=\"0\" selected>Same day</option>\r\n                          <option value=\"1\">Next day</option>\r\n                          <option value=\"2\">2nd day</option>\r\n                          <option value=\"3\">3rd day</option>\r\n                          <option value=\"4\">4th day</option>\r\n                          <option value=\"5\">5th day</option>\r\n                          <option value=\"6\">6th day</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"aof.submitted && !dayOccur.valid\" class=\"help-block alert alert-danger\">Required</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">OCCURS FROM / OCCURS UNTIL</label>\r\n                      <div class=\"input-group date\">\r\n                        <input #drp1=\"bsDaterangepicker\" class=\"form-control\" bsDaterangepicker [(ngModel)]=\"occurModel.occureFromUntil\" name=\"occureFromUntil\" #occureFromUntil=\"ngModel\" required>\r\n                        <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"aof.submitted && !occureFromUntil.valid\" class=\"help-block alert alert-danger\">OCCURS FROM / UNTIL is Required</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Add</button>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <button type=\"button\" class=\"btn btn-previous btn-lg btn-block\" data-dismiss=\"modal\" aria-label=\"Close\">cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <!-- End # Login Form -->\r\n        </div>\r\n        <!-- End # DIV Form -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END # MODAL Schedule dates -->\r\n<!-- BEGIN # MODAL Date & Time Settings -->\r\n<div class=\"model-form add-form sc-even\">\r\n  <div class=\"modal fade\" id=\"timezone-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\" align=\"center\">\r\n          <h2>Date & Time Settings</h2>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n        <!-- Begin # DIV Form -->\r\n        <div id=\"div-forms5\">\r\n          <!-- Begin # Login Form -->\r\n          <form id=\"add-form3\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"input-group\">\r\n                <label>SELECT YOUR TIME ZONE</label>\r\n                <select class=\"form-control minimal\" [(ngModel)]=\"timeZoneModel.timeZone\" name=\"timeZone\" #timeZone=\"ngModel\">\r\n                  <option value=\"Pacific/Pago_Pago\">(GMT-1100) American Samoa Time</option>\r\n                  <option value=\"Pacific/Niue\">(GMT-1100) Niue Time</option>\r\n                  <option value=\"Pacific/Midway\">(GMT-1100) U.S. Outlying Islands (Midway) Time</option>\r\n                  <option value=\"Pacific/Rarotonga\">(GMT-1000) Cook Islands Time</option>\r\n                  <option value=\"Pacific/Tahiti\">(GMT-1000) French Polynesia Time</option>\r\n                  <option value=\"Pacific/Honolulu\">(GMT-1000) United States (Honolulu) Time</option>\r\n                  <option value=\"Pacific/Marquesas\">(GMT-0930) World (Marquesas) Time</option>\r\n                  <option value=\"America/Adak\">(GMT-0900) World (Adak) Time</option>\r\n                  <option value=\"Pacific/Gambier\">(GMT-0900) World (Gambier) Time</option>\r\n                  <option value=\"America/Anchorage\">(GMT-0800) United States (Anchorage) Time</option>\r\n                  <option value=\"America/Juneau\">(GMT-0800) United States (Juneau) Time</option>\r\n                  <option value=\"America/Nome\">(GMT-0800) United States (Nome) Time</option>\r\n                  <option value=\"America/Sitka\">(GMT-0800) United States (Sitka) Time</option>\r\n                  <option value=\"America/Yakutat\">(GMT-0800) United States (Yakutat) Time</option>\r\n                  <option value=\"America/Metlakatla\">(GMT-0800) World (Metlakatla) Time</option>\r\n                  <option value=\"Pacific/Pitcairn\">(GMT-0800) World (Pitcairn) Time</option>\r\n                  <option value=\"America/Creston\">(GMT-0700) Canada (Creston) Time</option>\r\n                  <option value=\"America/Dawson_Creek\">(GMT-0700) Canada (Dawson Creek) Time</option>\r\n                  <option value=\"America/Dawson\">(GMT-0700) Canada (Dawson) Time</option>\r\n                  <option value=\"America/Vancouver\">(GMT-0700) Canada (Vancouver) Time</option>\r\n                  <option value=\"America/Whitehorse\">(GMT-0700) Canada (Whitehorse) Time</option>\r\n                  <option value=\"America/Hermosillo\">(GMT-0700) Mexico (Hermosillo) Time</option>\r\n                  <option value=\"America/Santa_Isabel\">(GMT-0700) Mexico (Santa Isabel) Time</option>\r\n                  <option value=\"America/Tijuana\">(GMT-0700) Mexico (Tijuana) Time</option>\r\n                  <option value=\"America/Los_Angeles\" selected=\"selected\">(GMT-0700) United States (Los Angeles) Time</option>\r\n                  <option value=\"America/Phoenix\">(GMT-0700) United States (Phoenix) Time</option>\r\n                  <option value=\"America/Fort_Nelson\">(GMT-0700) Unknown Region (Fort Nelson) Time</option>\r\n                  <option value=\"America/Belize\">(GMT-0600) Belize Time</option>\r\n                  <option value=\"America/Cambridge_Bay\">(GMT-0600) Canada (Cambridge Bay) Time</option>\r\n                  <option value=\"America/Edmonton\">(GMT-0600) Canada (Edmonton) Time</option>\r\n                  <option value=\"America/Inuvik\">(GMT-0600) Canada (Inuvik) Time</option>\r\n                  <option value=\"America/Regina\">(GMT-0600) Canada (Regina) Time</option>\r\n                  <option value=\"America/Swift_Current\">(GMT-0600) Canada (Swift Current) Time</option>\r\n                  <option value=\"America/Yellowknife\">(GMT-0600) Canada (Yellowknife) Time</option>\r\n                  <option value=\"America/Costa_Rica\">(GMT-0600) Costa Rica Time</option>\r\n                  <option value=\"Pacific/Galapagos\">(GMT-0600) Ecuador (Galapagos) Time</option>\r\n                  <option value=\"America/El_Salvador\">(GMT-0600) El Salvador Time</option>\r\n                  <option value=\"America/Guatemala\">(GMT-0600) Guatemala Time</option>\r\n                  <option value=\"America/Tegucigalpa\">(GMT-0600) Honduras Time</option>\r\n                  <option value=\"America/Chihuahua\">(GMT-0600) Mexico (Chihuahua) Time</option>\r\n                  <option value=\"America/Mazatlan\">(GMT-0600) Mexico (Mazatlan) Time</option>\r\n                  <option value=\"America/Ojinaga\">(GMT-0600) Mexico (Ojinaga) Time</option>\r\n                  <option value=\"America/Managua\">(GMT-0600) Nicaragua Time</option>\r\n                  <option value=\"America/Boise\">(GMT-0600) United States (Boise) Time</option>\r\n                  <option value=\"America/Denver\">(GMT-0600) United States (Denver) Time</option>\r\n                  <option value=\"America/Eirunepe\">(GMT-0500) Brazil (Eirunepe) Time</option>\r\n                  <option value=\"America/Rio_Branco\">(GMT-0500) Brazil (Rio Branco) Time</option>\r\n                  <option value=\"America/Atikokan\">(GMT-0500) Canada (Atikokan) Time</option>\r\n                  <option value=\"America/Rainy_River\">(GMT-0500) Canada (Rainy River) Time</option>\r\n                  <option value=\"America/Rankin_Inlet\">(GMT-0500) Canada (Rankin Inlet) Time</option>\r\n                  <option value=\"America/Resolute\">(GMT-0500) Canada (Resolute) Time</option>\r\n                  <option value=\"America/Winnipeg\">(GMT-0500) Canada (Winnipeg) Time</option>\r\n                  <option value=\"America/Cayman\">(GMT-0500) Cayman Islands Time</option>\r\n                  <option value=\"America/Bogota\">(GMT-0500) Colombia Time</option>\r\n                  <option value=\"America/Guayaquil\">(GMT-0500) Ecuador (Guayaquil) Time</option>\r\n                  <option value=\"America/Jamaica\">(GMT-0500) Jamaica Time</option>\r\n                  <option value=\"America/Bahia_Banderas\">(GMT-0500) Mexico (Bahia Banderas) Time</option>\r\n                  <option value=\"America/Cancun\">(GMT-0500) Mexico (Cancun) Time</option>\r\n                  <option value=\"America/Matamoros\">(GMT-0500) Mexico (Matamoros) Time</option>\r\n                  <option value=\"America/Merida\">(GMT-0500) Mexico (Merida) Time</option>\r\n                  <option value=\"America/Mexico_City\">(GMT-0500) Mexico (Mexico City) Time</option>\r\n                  <option value=\"America/Monterrey\">(GMT-0500) Mexico (Monterrey) Time</option>\r\n                  <option value=\"America/Panama\">(GMT-0500) Panama Time</option>\r\n                  <option value=\"America/Lima\">(GMT-0500) Peru Time</option>\r\n                  <option value=\"America/North_Dakota/Beulah\">(GMT-0500) United States (Beulah, North Dakota) Time</option>\r\n                  <option value=\"America/North_Dakota/Center\">(GMT-0500) United States (Center, North Dakota) Time</option>\r\n                  <option value=\"America/Chicago\">(GMT-0500) United States (Chicago) Time</option>\r\n                  <option value=\"America/Indiana/Knox\">(GMT-0500) United States (Knox, Indiana) Time</option>\r\n                  <option value=\"America/Menominee\">(GMT-0500) United States (Menominee) Time</option>\r\n                  <option value=\"America/North_Dakota/New_Salem\">(GMT-0500) United States (New Salem, North Dakota) Time</option>\r\n                  <option value=\"America/Indiana/Tell_City\">(GMT-0500) United States (Tell City, Indiana) Time</option>\r\n                  <option value=\"Pacific/Easter\">(GMT-0500) World (Easter) Time</option>\r\n                  <option value=\"America/Anguilla\">(GMT-0400) Anguilla Time</option>\r\n                  <option value=\"America/Antigua\">(GMT-0400) Antigua &amp; Barbuda Time</option>\r\n                  <option value=\"America/Aruba\">(GMT-0400) Aruba Time</option>\r\n                  <option value=\"America/Nassau\">(GMT-0400) Bahamas Time</option>\r\n                  <option value=\"America/Barbados\">(GMT-0400) Barbados Time</option>\r\n                  <option value=\"America/La_Paz\">(GMT-0400) Bolivia Time</option>\r\n                  <option value=\"America/Boa_Vista\">(GMT-0400) Brazil (Boa Vista) Time</option>\r\n                  <option value=\"America/Manaus\">(GMT-0400) Brazil (Manaus) Time</option>\r\n                  <option value=\"America/Porto_Velho\">(GMT-0400) Brazil (Porto Velho) Time</option>\r\n                  <option value=\"America/Tortola\">(GMT-0400) British Virgin Islands Time</option>\r\n                  <option value=\"America/Blanc-Sablon\">(GMT-0400) Canada (Blanc-Sablon) Time</option>\r\n                  <option value=\"America/Iqaluit\">(GMT-0400) Canada (Iqaluit) Time</option>\r\n                  <option value=\"America/Nipigon\">(GMT-0400) Canada (Nipigon) Time</option>\r\n                  <option value=\"America/Pangnirtung\">(GMT-0400) Canada (Pangnirtung) Time</option>\r\n                  <option value=\"America/Thunder_Bay\">(GMT-0400) Canada (Thunder Bay) Time</option>\r\n                  <option value=\"America/Toronto\">(GMT-0400) Canada (Toronto) Time</option>\r\n                  <option value=\"America/Kralendijk\">(GMT-0400) Caribbean Netherlands Time</option>\r\n                  <option value=\"America/Havana\">(GMT-0400) Cuba Time</option>\r\n                  <option value=\"America/Curacao\">(GMT-0400) Curaçao Time</option>\r\n                  <option value=\"America/Dominica\">(GMT-0400) Dominica Time</option>\r\n                  <option value=\"America/Santo_Domingo\">(GMT-0400) Dominican Republic Time</option>\r\n                  <option value=\"America/Grenada\">(GMT-0400) Grenada Time</option>\r\n                  <option value=\"America/Guadeloupe\">(GMT-0400) Guadeloupe Time</option>\r\n                  <option value=\"America/Guyana\">(GMT-0400) Guyana Time</option>\r\n                  <option value=\"America/Port-au-Prince\">(GMT-0400) Haiti Time</option>\r\n                  <option value=\"America/Martinique\">(GMT-0400) Martinique Time</option>\r\n                  <option value=\"America/Montserrat\">(GMT-0400) Montserrat Time</option>\r\n                  <option value=\"America/Puerto_Rico\">(GMT-0400) Puerto Rico Time</option>\r\n                  <option value=\"America/Lower_Princes\">(GMT-0400) Sint Maarten Time</option>\r\n                  <option value=\"America/St_Barthelemy\">(GMT-0400) St. Barthélemy Time</option>\r\n                  <option value=\"America/St_Kitts\">(GMT-0400) St. Kitts &amp; Nevis Time</option>\r\n                  <option value=\"America/St_Lucia\">(GMT-0400) St. Lucia Time</option>\r\n                  <option value=\"America/Marigot\">(GMT-0400) St. Martin Time</option>\r\n                  <option value=\"America/St_Vincent\">(GMT-0400) St. Vincent &amp; Grenadines Time</option>\r\n                  <option value=\"America/Port_of_Spain\">(GMT-0400) Trinidad &amp; Tobago Time</option>\r\n                  <option value=\"America/Grand_Turk\">(GMT-0400) Turks &amp; Caicos Islands Time</option>\r\n                  <option value=\"America/St_Thomas\">(GMT-0400) U.S. Virgin Islands Time</option>\r\n                  <option value=\"America/Detroit\">(GMT-0400) United States (Detroit) Time</option>\r\n                  <option value=\"America/Indiana/Indianapolis\">(GMT-0400) United States (Indianapolis) Time</option>\r\n                  <option value=\"America/Kentucky/Louisville\">(GMT-0400) United States (Louisville) Time</option>\r\n                  <option value=\"America/Indiana/Marengo\">(GMT-0400) United States (Marengo, Indiana) Time</option>\r\n                  <option value=\"America/Kentucky/Monticello\">(GMT-0400) United States (Monticello, Kentucky) Time</option>\r\n                  <option value=\"America/New_York\">(GMT-0400) United States (New York) Time</option>\r\n                  <option value=\"America/Indiana/Petersburg\">(GMT-0400) United States (Petersburg, Indiana) Time</option>\r\n                  <option value=\"America/Indiana/Vevay\">(GMT-0400) United States (Vevay, Indiana) Time</option>\r\n                  <option value=\"America/Indiana/Vincennes\">(GMT-0400) United States (Vincennes, Indiana) Time</option>\r\n                  <option value=\"America/Indiana/Winamac\">(GMT-0400) United States (Winamac, Indiana) Time</option>\r\n                  <option value=\"America/Caracas\">(GMT-0400) Venezuela Time</option>\r\n                  <option value=\"Antarctica/Palmer\">(GMT-0300) Antarctica (Palmer) Time</option>\r\n                  <option value=\"Antarctica/Rothera\">(GMT-0300) Antarctica (Rothera) Time</option>\r\n                  <option value=\"America/Argentina/La_Rioja\">(GMT-0300) Argentina (Argentina/La Rioja) Time</option>\r\n                  <option value=\"America/Argentina/Rio_Gallegos\">(GMT-0300) Argentina (Argentina/Rio Gallegos) Time</option>\r\n                  <option value=\"America/Argentina/Salta\">(GMT-0300) Argentina (Argentina/Salta) Time</option>\r\n                  <option value=\"America/Argentina/San_Juan\">(GMT-0300) Argentina (Argentina/San Juan) Time</option>\r\n                  <option value=\"America/Argentina/San_Luis\">(GMT-0300) Argentina (Argentina/San Luis) Time</option>\r\n                  <option value=\"America/Argentina/Tucuman\">(GMT-0300) Argentina (Argentina/Tucuman) Time</option>\r\n                  <option value=\"America/Argentina/Ushuaia\">(GMT-0300) Argentina (Argentina/Ushuaia) Time</option>\r\n                  <option value=\"America/Argentina/Buenos_Aires\">(GMT-0300) Argentina (Buenos Aires) Time</option>\r\n                  <option value=\"America/Argentina/Catamarca\">(GMT-0300) Argentina (Catamarca) Time</option>\r\n                  <option value=\"America/Argentina/Cordoba\">(GMT-0300) Argentina (Cordoba) Time</option>\r\n                  <option value=\"America/Argentina/Jujuy\">(GMT-0300) Argentina (Jujuy) Time</option>\r\n                  <option value=\"America/Argentina/Mendoza\">(GMT-0300) Argentina (Mendoza) Time</option>\r\n                  <option value=\"Atlantic/Bermuda\">(GMT-0300) Bermuda Time</option>\r\n                  <option value=\"America/Araguaina\">(GMT-0300) Brazil (Araguaina) Time</option>\r\n                  <option value=\"America/Bahia\">(GMT-0300) Brazil (Bahia) Time</option>\r\n                  <option value=\"America/Belem\">(GMT-0300) Brazil (Belem) Time</option>\r\n                  <option value=\"America/Campo_Grande\">(GMT-0300) Brazil (Campo Grande) Time</option>\r\n                  <option value=\"America/Cuiaba\">(GMT-0300) Brazil (Cuiaba) Time</option>\r\n                  <option value=\"America/Fortaleza\">(GMT-0300) Brazil (Fortaleza) Time</option>\r\n                  <option value=\"America/Maceio\">(GMT-0300) Brazil (Maceio) Time</option>\r\n                  <option value=\"America/Recife\">(GMT-0300) Brazil (Recife) Time</option>\r\n                  <option value=\"America/Santarem\">(GMT-0300) Brazil (Santarem) Time</option>\r\n                  <option value=\"America/Glace_Bay\">(GMT-0300) Canada (Glace Bay) Time</option>\r\n                  <option value=\"America/Goose_Bay\">(GMT-0300) Canada (Goose Bay) Time</option>\r\n                  <option value=\"America/Halifax\">(GMT-0300) Canada (Halifax) Time</option>\r\n                  <option value=\"America/Moncton\">(GMT-0300) Canada (Moncton) Time</option>\r\n                  <option value=\"America/Santiago\">(GMT-0300) Chile Time</option>\r\n                  <option value=\"Atlantic/Stanley\">(GMT-0300) Falkland Islands Time</option>\r\n                  <option value=\"America/Cayenne\">(GMT-0300) French Guiana Time</option>\r\n                  <option value=\"America/Thule\">(GMT-0300) Greenland (Thule) Time</option>\r\n                  <option value=\"America/Asuncion\">(GMT-0300) Paraguay Time</option>\r\n                  <option value=\"America/Paramaribo\">(GMT-0300) Suriname Time</option>\r\n                  <option value=\"America/Punta_Arenas\">(GMT-0300) Unknown Region (Punta Arenas) Time</option>\r\n                  <option value=\"America/Montevideo\">(GMT-0300) Uruguay Time</option>\r\n                  <option value=\"America/St_Johns\">(GMT-0230) Canada (St. John’s) Time</option>\r\n                  <option value=\"America/Noronha\">(GMT-0200) Brazil (Noronha) Time</option>\r\n                  <option value=\"America/Sao_Paulo\">(GMT-0200) Brazil (Sao Paulo) Time</option>\r\n                  <option value=\"America/Godthab\">(GMT-0200) Greenland (Nuuk) Time</option>\r\n                  <option value=\"Atlantic/South_Georgia\">(GMT-0200) South Georgia &amp; South Sandwich Islands Time</option>\r\n                  <option value=\"America/Miquelon\">(GMT-0200) World (Miquelon) Time</option>\r\n                  <option value=\"Atlantic/Cape_Verde\">(GMT-0100) Cape Verde Time</option>\r\n                  <option value=\"Africa/Ouagadougou\">(GMT+0000) Burkina Faso Time</option>\r\n                  <option value=\"Africa/Abidjan\">(GMT+0000) Côte d’Ivoire Time</option>\r\n                  <option value=\"Africa/Banjul\">(GMT+0000) Gambia Time</option>\r\n                  <option value=\"Africa/Accra\">(GMT+0000) Ghana Time</option>\r\n                  <option value=\"America/Danmarkshavn\">(GMT+0000) Greenland (Danmarkshavn) Time</option>\r\n                  <option value=\"America/Scoresbysund\">(GMT+0000) Greenland (Ittoqqortoormiit) Time</option>\r\n                  <option value=\"Africa/Conakry\">(GMT+0000) Guinea Time</option>\r\n                  <option value=\"Africa/Bissau\">(GMT+0000) Guinea-Bissau Time</option>\r\n                  <option value=\"Atlantic/Reykjavik\">(GMT+0000) Iceland Time</option>\r\n                  <option value=\"Africa/Monrovia\">(GMT+0000) Liberia Time</option>\r\n                  <option value=\"Africa/Bamako\">(GMT+0000) Mali Time</option>\r\n                  <option value=\"Africa/Nouakchott\">(GMT+0000) Mauritania Time</option>\r\n                  <option value=\"Atlantic/Azores\">(GMT+0000) Portugal (Azores) Time</option>\r\n                  <option value=\"Africa/Sao_Tome\">(GMT+0000) São Tomé &amp; Príncipe Time</option>\r\n                  <option value=\"Africa/Dakar\">(GMT+0000) Senegal Time</option>\r\n                  <option value=\"Africa/Freetown\">(GMT+0000) Sierra Leone Time</option>\r\n                  <option value=\"Atlantic/St_Helena\">(GMT+0000) St. Helena Time</option>\r\n                  <option value=\"Africa/Lome\">(GMT+0000) Togo Time</option>\r\n                  <option value=\"UTC\">UTC</option>\r\n                  <option value=\"Africa/Algiers\">(GMT+0100) Algeria Time</option>\r\n                  <option value=\"Africa/Luanda\">(GMT+0100) Angola Time</option>\r\n                  <option value=\"Africa/Porto-Novo\">(GMT+0100) Benin Time</option>\r\n                  <option value=\"Africa/Douala\">(GMT+0100) Cameroon Time</option>\r\n                  <option value=\"Africa/Bangui\">(GMT+0100) Central African Republic Time</option>\r\n                  <option value=\"Africa/Ndjamena\">(GMT+0100) Chad Time</option>\r\n                  <option value=\"Africa/Brazzaville\">(GMT+0100) Congo - Brazzaville Time</option>\r\n                  <option value=\"Africa/Kinshasa\">(GMT+0100) Congo - Kinshasa (Kinshasa) Time</option>\r\n                  <option value=\"Africa/Malabo\">(GMT+0100) Equatorial Guinea Time</option>\r\n                  <option value=\"Atlantic/Faroe\">(GMT+0100) Faroe Islands Time</option>\r\n                  <option value=\"Africa/Libreville\">(GMT+0100) Gabon Time</option>\r\n                  <option value=\"Europe/Guernsey\">(GMT+0100) Guernsey Time</option>\r\n                  <option value=\"Europe/Dublin\">(GMT+0100) Ireland Time</option>\r\n                  <option value=\"Europe/Isle_of_Man\">(GMT+0100) Isle of Man Time</option>\r\n                  <option value=\"Europe/Jersey\">(GMT+0100) Jersey Time</option>\r\n                  <option value=\"Africa/Casablanca\">(GMT+0100) Morocco Time</option>\r\n                  <option value=\"Africa/Niamey\">(GMT+0100) Niger Time</option>\r\n                  <option value=\"Africa/Lagos\">(GMT+0100) Nigeria Time</option>\r\n                  <option value=\"Europe/Lisbon\">(GMT+0100) Portugal (Lisbon) Time</option>\r\n                  <option value=\"Atlantic/Madeira\">(GMT+0100) Portugal (Madeira) Time</option>\r\n                  <option value=\"Atlantic/Canary\">(GMT+0100) Spain (Canary) Time</option>\r\n                  <option value=\"Africa/Tunis\">(GMT+0100) Tunisia Time</option>\r\n                  <option value=\"Europe/London\">(GMT+0100) United Kingdom Time</option>\r\n                  <option value=\"Africa/El_Aaiun\">(GMT+0100) Western Sahara Time</option>\r\n                  <option value=\"Europe/Tirane\">(GMT+0200) Albania Time</option>\r\n                  <option value=\"Europe/Andorra\">(GMT+0200) Andorra Time</option>\r\n                  <option value=\"Europe/Vienna\">(GMT+0200) Austria Time</option>\r\n                  <option value=\"Europe/Brussels\">(GMT+0200) Belgium Time</option>\r\n                  <option value=\"Europe/Sarajevo\">(GMT+0200) Bosnia &amp; Herzegovina Time</option>\r\n                  <option value=\"Africa/Gaborone\">(GMT+0200) Botswana Time</option>\r\n                  <option value=\"Africa/Bujumbura\">(GMT+0200) Burundi Time</option>\r\n                  <option value=\"Africa/Lubumbashi\">(GMT+0200) Congo - Kinshasa (Lubumbashi) Time</option>\r\n                  <option value=\"Europe/Zagreb\">(GMT+0200) Croatia Time</option>\r\n                  <option value=\"Europe/Prague\">(GMT+0200) Czech Republic Time</option>\r\n                  <option value=\"Europe/Copenhagen\">(GMT+0200) Denmark Time</option>\r\n                  <option value=\"Africa/Cairo\">(GMT+0200) Egypt Time</option>\r\n                  <option value=\"Europe/Paris\">(GMT+0200) France Time</option>\r\n                  <option value=\"Europe/Berlin\">(GMT+0200) Germany (Berlin) Time</option>\r\n                  <option value=\"Europe/Busingen\">(GMT+0200) Germany (Busingen) Time</option>\r\n                  <option value=\"Europe/Gibraltar\">(GMT+0200) Gibraltar Time</option>\r\n                  <option value=\"Europe/Budapest\">(GMT+0200) Hungary Time</option>\r\n                  <option value=\"Europe/Rome\">(GMT+0200) Italy Time</option>\r\n                  <option value=\"Africa/Maseru\">(GMT+0200) Lesotho Time</option>\r\n                  <option value=\"Africa/Tripoli\">(GMT+0200) Libya Time</option>\r\n                  <option value=\"Europe/Vaduz\">(GMT+0200) Liechtenstein Time</option>\r\n                  <option value=\"Europe/Luxembourg\">(GMT+0200) Luxembourg Time</option>\r\n                  <option value=\"Europe/Skopje\">(GMT+0200) Macedonia Time</option>\r\n                  <option value=\"Africa/Blantyre\">(GMT+0200) Malawi Time</option>\r\n                  <option value=\"Europe/Malta\">(GMT+0200) Malta Time</option>\r\n                  <option value=\"Europe/Monaco\">(GMT+0200) Monaco Time</option>\r\n                  <option value=\"Europe/Podgorica\">(GMT+0200) Montenegro Time</option>\r\n                  <option value=\"Africa/Maputo\">(GMT+0200) Mozambique Time</option>\r\n                  <option value=\"Africa/Windhoek\">(GMT+0200) Namibia Time</option>\r\n                  <option value=\"Europe/Amsterdam\">(GMT+0200) Netherlands Time</option>\r\n                  <option value=\"Europe/Oslo\">(GMT+0200) Norway Time</option>\r\n                  <option value=\"Europe/Warsaw\">(GMT+0200) Poland Time</option>\r\n                  <option value=\"Europe/Kaliningrad\">(GMT+0200) Russia (Kaliningrad) Time</option>\r\n                  <option value=\"Africa/Kigali\">(GMT+0200) Rwanda Time</option>\r\n                  <option value=\"Europe/San_Marino\">(GMT+0200) San Marino Time</option>\r\n                  <option value=\"Europe/Belgrade\">(GMT+0200) Serbia Time</option>\r\n                  <option value=\"Europe/Bratislava\">(GMT+0200) Slovakia Time</option>\r\n                  <option value=\"Europe/Ljubljana\">(GMT+0200) Slovenia Time</option>\r\n                  <option value=\"Africa/Johannesburg\">(GMT+0200) South Africa Time</option>\r\n                  <option value=\"Africa/Ceuta\">(GMT+0200) Spain (Ceuta) Time</option>\r\n                  <option value=\"Europe/Madrid\">(GMT+0200) Spain (Madrid) Time</option>\r\n                  <option value=\"Arctic/Longyearbyen\">(GMT+0200) Svalbard &amp; Jan Mayen Time</option>\r\n                  <option value=\"Africa/Mbabane\">(GMT+0200) Swaziland Time</option>\r\n                  <option value=\"Europe/Stockholm\">(GMT+0200) Sweden Time</option>\r\n                  <option value=\"Europe/Zurich\">(GMT+0200) Switzerland Time</option>\r\n                  <option value=\"Europe/Vatican\">(GMT+0200) Vatican City Time</option>\r\n                  <option value=\"Antarctica/Troll\">(GMT+0200) World (Troll) Time</option>\r\n                  <option value=\"Africa/Lusaka\">(GMT+0200) Zambia Time</option>\r\n                  <option value=\"Africa/Harare\">(GMT+0200) Zimbabwe Time</option>\r\n                  <option value=\"Europe/Mariehamn\">(GMT+0300) Åland Islands Time</option>\r\n                  <option value=\"Antarctica/Syowa\">(GMT+0300) Antarctica (Syowa) Time</option>\r\n                  <option value=\"Asia/Bahrain\">(GMT+0300) Bahrain Time</option>\r\n                  <option value=\"Europe/Minsk\">(GMT+0300) Belarus Time</option>\r\n                  <option value=\"Europe/Sofia\">(GMT+0300) Bulgaria Time</option>\r\n                  <option value=\"Indian/Comoro\">(GMT+0300) Comoros Time</option>\r\n                  <option value=\"Asia/Nicosia\">(GMT+0300) Cyprus Time</option>\r\n                  <option value=\"Africa/Djibouti\">(GMT+0300) Djibouti Time</option>\r\n                  <option value=\"Africa/Asmara\">(GMT+0300) Eritrea Time</option>\r\n                  <option value=\"Europe/Tallinn\">(GMT+0300) Estonia Time</option>\r\n                  <option value=\"Africa/Addis_Ababa\">(GMT+0300) Ethiopia Time</option>\r\n                  <option value=\"Europe/Helsinki\">(GMT+0300) Finland Time</option>\r\n                  <option value=\"Europe/Athens\">(GMT+0300) Greece Time</option>\r\n                  <option value=\"Asia/Baghdad\">(GMT+0300) Iraq Time</option>\r\n                  <option value=\"Asia/Jerusalem\">(GMT+0300) Israel Time</option>\r\n                  <option value=\"Asia/Amman\">(GMT+0300) Jordan Time</option>\r\n                  <option value=\"Africa/Nairobi\">(GMT+0300) Kenya Time</option>\r\n                  <option value=\"Asia/Kuwait\">(GMT+0300) Kuwait Time</option>\r\n                  <option value=\"Europe/Riga\">(GMT+0300) Latvia Time</option>\r\n                  <option value=\"Asia/Beirut\">(GMT+0300) Lebanon Time</option>\r\n                  <option value=\"Europe/Vilnius\">(GMT+0300) Lithuania Time</option>\r\n                  <option value=\"Indian/Antananarivo\">(GMT+0300) Madagascar Time</option>\r\n                  <option value=\"Indian/Mayotte\">(GMT+0300) Mayotte Time</option>\r\n                  <option value=\"Europe/Chisinau\">(GMT+0300) Moldova Time</option>\r\n                  <option value=\"Asia/Qatar\">(GMT+0300) Qatar Time</option>\r\n                  <option value=\"Europe/Bucharest\">(GMT+0300) Romania Time</option>\r\n                  <option value=\"Europe/Moscow\">(GMT+0300) Russia (Moscow) Time</option>\r\n                  <option value=\"Europe/Simferopol\">(GMT+0300) Russia (Simferopol) Time</option>\r\n                  <option value=\"Europe/Volgograd\">(GMT+0300) Russia (Volgograd) Time</option>\r\n                  <option value=\"Asia/Riyadh\">(GMT+0300) Saudi Arabia Time</option>\r\n                  <option value=\"Africa/Mogadishu\">(GMT+0300) Somalia Time</option>\r\n                  <option value=\"Africa/Juba\">(GMT+0300) South Sudan Time</option>\r\n                  <option value=\"Africa/Khartoum\">(GMT+0300) Sudan Time</option>\r\n                  <option value=\"Asia/Damascus\">(GMT+0300) Syria Time</option>\r\n                  <option value=\"Africa/Dar_es_Salaam\">(GMT+0300) Tanzania Time</option>\r\n                  <option value=\"Europe/Istanbul\">(GMT+0300) Turkey Time</option>\r\n                  <option value=\"Africa/Kampala\">(GMT+0300) Uganda Time</option>\r\n                  <option value=\"Europe/Kiev\">(GMT+0300) Ukraine (Kiev) Time</option>\r\n                  <option value=\"Europe/Uzhgorod\">(GMT+0300) Ukraine (Uzhhorod) Time</option>\r\n                  <option value=\"Europe/Zaporozhye\">(GMT+0300) Ukraine (Zaporozhye) Time</option>\r\n                  <option value=\"Asia/Famagusta\">(GMT+0300) Unknown Region (Famagusta) Time</option>\r\n                  <option value=\"Europe/Kirov\">(GMT+0300) Unknown Region (Kirov) Time</option>\r\n                  <option value=\"Asia/Gaza\">(GMT+0300) World (Gaza) Time</option>\r\n                  <option value=\"Asia/Hebron\">(GMT+0300) World (Hebron) Time</option>\r\n                  <option value=\"Asia/Aden\">(GMT+0300) Yemen Time</option>\r\n                  <option value=\"Asia/Tehran\">(GMT+0330) Iran Time</option>\r\n                  <option value=\"Asia/Yerevan\">(GMT+0400) Armenia Time</option>\r\n                  <option value=\"Asia/Baku\">(GMT+0400) Azerbaijan Time</option>\r\n                  <option value=\"Asia/Tbilisi\">(GMT+0400) Georgia Time</option>\r\n                  <option value=\"Indian/Mauritius\">(GMT+0400) Mauritius Time</option>\r\n                  <option value=\"Asia/Muscat\">(GMT+0400) Oman Time</option>\r\n                  <option value=\"Indian/Reunion\">(GMT+0400) Réunion Time</option>\r\n                  <option value=\"Europe/Samara\">(GMT+0400) Russia (Samara) Time</option>\r\n                  <option value=\"Indian/Mahe\">(GMT+0400) Seychelles Time</option>\r\n                  <option value=\"Asia/Dubai\">(GMT+0400) United Arab Emirates Time</option>\r\n                  <option value=\"Europe/Astrakhan\">(GMT+0400) Unknown Region (Astrakhan) Time</option>\r\n                  <option value=\"Europe/Saratov\">(GMT+0400) Unknown Region (Saratov) Time</option>\r\n                  <option value=\"Europe/Ulyanovsk\">(GMT+0400) Unknown Region (Ulyanovsk) Time</option>\r\n                  <option value=\"Asia/Kabul\">(GMT+0430) Afghanistan Time</option>\r\n                  <option value=\"Antarctica/Mawson\">(GMT+0500) Antarctica (Mawson) Time</option>\r\n                  <option value=\"Indian/Kerguelen\">(GMT+0500) French Southern Territories Time</option>\r\n                  <option value=\"Asia/Aqtau\">(GMT+0500) Kazakhstan (Aqtau) Time</option>\r\n                  <option value=\"Asia/Aqtobe\">(GMT+0500) Kazakhstan (Aqtobe) Time</option>\r\n                  <option value=\"Asia/Oral\">(GMT+0500) Kazakhstan (Oral) Time</option>\r\n                  <option value=\"Indian/Maldives\">(GMT+0500) Maldives Time</option>\r\n                  <option value=\"Asia/Karachi\">(GMT+0500) Pakistan Time</option>\r\n                  <option value=\"Asia/Yekaterinburg\">(GMT+0500) Russia (Yekaterinburg) Time</option>\r\n                  <option value=\"Asia/Dushanbe\">(GMT+0500) Tajikistan Time</option>\r\n                  <option value=\"Asia/Ashgabat\">(GMT+0500) Turkmenistan Time</option>\r\n                  <option value=\"Asia/Atyrau\">(GMT+0500) Unknown Region (Atyrau) Time</option>\r\n                  <option value=\"Asia/Samarkand\">(GMT+0500) Uzbekistan (Samarkand) Time</option>\r\n                  <option value=\"Asia/Tashkent\">(GMT+0500) Uzbekistan (Tashkent) Time</option>\r\n                  <option value=\"Asia/Kolkata\">(GMT+0530) India Time</option>\r\n                  <option value=\"Asia/Colombo\">(GMT+0530) Sri Lanka Time</option>\r\n                  <option value=\"Asia/Kathmandu\">(GMT+0545) Nepal Time</option>\r\n                  <option value=\"Antarctica/Vostok\">(GMT+0600) Antarctica (Vostok) Time</option>\r\n                  <option value=\"Asia/Dhaka\">(GMT+0600) Bangladesh Time</option>\r\n                  <option value=\"Asia/Thimphu\">(GMT+0600) Bhutan Time</option>\r\n                  <option value=\"Indian/Chagos\">(GMT+0600) British Indian Ocean Territory Time</option>\r\n                  <option value=\"Asia/Urumqi\">(GMT+0600) China (Urumqi) Time</option>\r\n                  <option value=\"Asia/Almaty\">(GMT+0600) Kazakhstan (Almaty) Time</option>\r\n                  <option value=\"Asia/Qyzylorda\">(GMT+0600) Kazakhstan (Qyzylorda) Time</option>\r\n                  <option value=\"Asia/Bishkek\">(GMT+0600) Kyrgyzstan Time</option>\r\n                  <option value=\"Asia/Omsk\">(GMT+0600) Russia (Omsk) Time</option>\r\n                  <option value=\"Indian/Cocos\">(GMT+0630) Cocos (Keeling) Islands Time</option>\r\n                  <option value=\"Asia/Rangoon\">(GMT+0630) Myanmar (Burma) Time</option>\r\n                  <option value=\"Asia/Yangon\">(GMT+0630) Unknown Region (Yangon) Time</option>\r\n                  <option value=\"Antarctica/Davis\">(GMT+0700) Antarctica (Davis) Time</option>\r\n                  <option value=\"Asia/Phnom_Penh\">(GMT+0700) Cambodia Time</option>\r\n                  <option value=\"Indian/Christmas\">(GMT+0700) Christmas Island Time</option>\r\n                  <option value=\"Asia/Jakarta\">(GMT+0700) Indonesia (Jakarta) Time</option>\r\n                  <option value=\"Asia/Pontianak\">(GMT+0700) Indonesia (Pontianak) Time</option>\r\n                  <option value=\"Asia/Vientiane\">(GMT+0700) Laos Time</option>\r\n                  <option value=\"Asia/Hovd\">(GMT+0700) Mongolia (Hovd) Time</option>\r\n                  <option value=\"Asia/Krasnoyarsk\">(GMT+0700) Russia (Krasnoyarsk) Time</option>\r\n                  <option value=\"Asia/Novokuznetsk\">(GMT+0700) Russia (Novokuznetsk) Time</option>\r\n                  <option value=\"Asia/Novosibirsk\">(GMT+0700) Russia (Novosibirsk) Time</option>\r\n                  <option value=\"Asia/Bangkok\">(GMT+0700) Thailand Time</option>\r\n                  <option value=\"Asia/Barnaul\">(GMT+0700) Unknown Region (Barnaul) Time</option>\r\n                  <option value=\"Asia/Tomsk\">(GMT+0700) Unknown Region (Tomsk) Time</option>\r\n                  <option value=\"Asia/Ho_Chi_Minh\">(GMT+0700) Vietnam Time</option>\r\n                  <option value=\"Australia/Perth\">(GMT+0800) Australia (Perth) Time</option>\r\n                  <option value=\"Asia/Brunei\">(GMT+0800) Brunei Time</option>\r\n                  <option value=\"Asia/Shanghai\">(GMT+0800) China (Shanghai) Time</option>\r\n                  <option value=\"Asia/Hong_Kong\">(GMT+0800) Hong Kong SAR China Time</option>\r\n                  <option value=\"Asia/Makassar\">(GMT+0800) Indonesia (Makassar) Time</option>\r\n                  <option value=\"Asia/Macau\">(GMT+0800) Macau SAR China Time</option>\r\n                  <option value=\"Asia/Kuala_Lumpur\">(GMT+0800) Malaysia (Kuala Lumpur) Time</option>\r\n                  <option value=\"Asia/Kuching\">(GMT+0800) Malaysia (Kuching) Time</option>\r\n                  <option value=\"Asia/Choibalsan\">(GMT+0800) Mongolia (Choibalsan) Time</option>\r\n                  <option value=\"Asia/Ulaanbaatar\">(GMT+0800) Mongolia (Ulaanbaatar) Time</option>\r\n                  <option value=\"Asia/Manila\">(GMT+0800) Philippines Time</option>\r\n                  <option value=\"Asia/Irkutsk\">(GMT+0800) Russia (Irkutsk) Time</option>\r\n                  <option value=\"Asia/Singapore\">(GMT+0800) Singapore Time</option>\r\n                  <option value=\"Asia/Taipei\">(GMT+0800) Taiwan Time</option>\r\n                  <option value=\"Asia/Pyongyang\">(GMT+0830) World (Pyongyang) Time</option>\r\n                  <option value=\"Australia/Eucla\">(GMT+0845) World (Eucla) Time</option>\r\n                  <option value=\"Asia/Jayapura\">(GMT+0900) Indonesia (Jayapura) Time</option>\r\n                  <option value=\"Asia/Tokyo\">(GMT+0900) Japan Time</option>\r\n                  <option value=\"Pacific/Palau\">(GMT+0900) Palau Time</option>\r\n                  <option value=\"Asia/Chita\">(GMT+0900) Russia (Chita) Time</option>\r\n                  <option value=\"Asia/Khandyga\">(GMT+0900) Russia (Khandyga) Time</option>\r\n                  <option value=\"Asia/Yakutsk\">(GMT+0900) Russia (Yakutsk) Time</option>\r\n                  <option value=\"Asia/Seoul\">(GMT+0900) South Korea Time</option>\r\n                  <option value=\"Asia/Dili\">(GMT+0900) Timor-Leste Time</option>\r\n                  <option value=\"Australia/Darwin\">(GMT+0930) Australia (Darwin) Time</option>\r\n                  <option value=\"Antarctica/DumontDUrville\">(GMT+1000) Antarctica (Dumont d’Urville) Time</option>\r\n                  <option value=\"Australia/Brisbane\">(GMT+1000) Australia (Brisbane) Time</option>\r\n                  <option value=\"Australia/Lindeman\">(GMT+1000) Australia (Lindeman) Time</option>\r\n                  <option value=\"Pacific/Guam\">(GMT+1000) Guam Time</option>\r\n                  <option value=\"Pacific/Chuuk\">(GMT+1000) Micronesia (Chuuk) Time</option>\r\n                  <option value=\"Pacific/Saipan\">(GMT+1000) Northern Mariana Islands Time</option>\r\n                  <option value=\"Pacific/Port_Moresby\">(GMT+1000) Papua New Guinea (Port Moresby) Time</option>\r\n                  <option value=\"Asia/Ust-Nera\">(GMT+1000) Russia (Ust-Nera) Time</option>\r\n                  <option value=\"Asia/Vladivostok\">(GMT+1000) Russia (Vladivostok) Time</option>\r\n                  <option value=\"Australia/Adelaide\">(GMT+1030) Australia (Adelaide) Time</option>\r\n                  <option value=\"Australia/Broken_Hill\">(GMT+1030) Australia (Broken Hill) Time</option>\r\n                  <option value=\"Antarctica/Casey\">(GMT+1100) Antarctica (Casey) Time</option>\r\n                  <option value=\"Australia/Currie\">(GMT+1100) Australia (Currie) Time</option>\r\n                  <option value=\"Australia/Hobart\">(GMT+1100) Australia (Hobart) Time</option>\r\n                  <option value=\"Antarctica/Macquarie\">(GMT+1100) Australia (Macquarie) Time</option>\r\n                  <option value=\"Australia/Melbourne\">(GMT+1100) Australia (Melbourne) Time</option>\r\n                  <option value=\"Australia/Sydney\">(GMT+1100) Australia (Sydney) Time</option>\r\n                  <option value=\"Pacific/Kosrae\">(GMT+1100) Micronesia (Kosrae) Time</option>\r\n                  <option value=\"Pacific/Pohnpei\">(GMT+1100) Micronesia (Pohnpei) Time</option>\r\n                  <option value=\"Pacific/Noumea\">(GMT+1100) New Caledonia Time</option>\r\n                  <option value=\"Pacific/Bougainville\">(GMT+1100) Papua New Guinea (Bougainville) Time</option>\r\n                  <option value=\"Asia/Magadan\">(GMT+1100) Russia (Magadan) Time</option>\r\n                  <option value=\"Asia/Sakhalin\">(GMT+1100) Russia (Sakhalin) Time</option>\r\n                  <option value=\"Asia/Srednekolymsk\">(GMT+1100) Russia (Srednekolymsk) Time</option>\r\n                  <option value=\"Pacific/Guadalcanal\">(GMT+1100) Solomon Islands Time</option>\r\n                  <option value=\"Pacific/Efate\">(GMT+1100) Vanuatu Time</option>\r\n                  <option value=\"Australia/Lord_Howe\">(GMT+1100) World (Lord Howe) Time</option>\r\n                  <option value=\"Pacific/Norfolk\">(GMT+1100) World (Norfolk) Time</option>\r\n                  <option value=\"Pacific/Fiji\">(GMT+1200) Fiji Time</option>\r\n                  <option value=\"Pacific/Tarawa\">(GMT+1200) Kiribati (Tarawa) Time</option>\r\n                  <option value=\"Pacific/Kwajalein\">(GMT+1200) Marshall Islands (Kwajalein) Time</option>\r\n                  <option value=\"Pacific/Majuro\">(GMT+1200) Marshall Islands (Majuro) Time</option>\r\n                  <option value=\"Pacific/Nauru\">(GMT+1200) Nauru Time</option>\r\n                  <option value=\"Asia/Anadyr\">(GMT+1200) Russia (Anadyr) Time</option>\r\n                  <option value=\"Asia/Kamchatka\">(GMT+1200) Russia (Kamchatka) Time</option>\r\n                  <option value=\"Pacific/Funafuti\">(GMT+1200) Tuvalu Time</option>\r\n                  <option value=\"Pacific/Wake\">(GMT+1200) U.S. Outlying Islands (Wake) Time</option>\r\n                  <option value=\"Pacific/Wallis\">(GMT+1200) Wallis &amp; Futuna Time</option>\r\n                  <option value=\"Antarctica/McMurdo\">(GMT+1300) Antarctica (McMurdo) Time</option>\r\n                  <option value=\"Pacific/Enderbury\">(GMT+1300) Kiribati (Enderbury) Time</option>\r\n                  <option value=\"Pacific/Auckland\">(GMT+1300) New Zealand Time</option>\r\n                  <option value=\"Pacific/Fakaofo\">(GMT+1300) Tokelau Time</option>\r\n                  <option value=\"Pacific/Tongatapu\">(GMT+1300) Tonga Time</option>\r\n                  <option value=\"Pacific/Chatham\">(GMT+1345) World (Chatham) Time</option>\r\n                  <option value=\"Pacific/Kiritimati\">(GMT+1400) Kiribati (Kiritimati) Time</option>\r\n                  <option value=\"Pacific/Apia\">(GMT+1400) Samoa Time</option>\r\n                </select>\r\n              </div>\r\n              <h3>Event Page Settings</h3>\r\n              <hr>\r\n              <div class=\"input-group\">\r\n                <input type=\"checkbox\" checked> Display start time on event page\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"checkbox\" checked> Display end time on event page\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"checkbox\" checked> Display time zone on event page\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Save</button>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <button type=\"reset\" class=\"btn btn-previous btn-lg btn-block\" data-dismiss=\"modal\" aria-label=\"Close\">cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <!-- End # Login Form -->\r\n        </div>\r\n        <!-- End # DIV Form -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END # MODAL Date & Time Settings -->\r\n"

/***/ }),

/***/ "../../../../../src/app/event/addevent/addEvent.cmp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_service__ = __webpack_require__("../../../../../src/app/event/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddEventComponent = (function () {
    function AddEventComponent(router, toastr, vcr, eService) {
        this.router = router;
        this.toastr = toastr;
        this.eService = eService;
        this.eventModel = {};
        this.locationModel = {};
        this.dateModel = {};
        this.occurModel = {};
        this.timeZoneModel = {};
        this.freeModel = {};
        this.paidModel = {};
        this.ticketData = [];
        this.successMsg = '';
        this.errorMsg = '';
        this.isSectionHide1 = true;
        this.isSectionHide2 = false;
        this.isSectionHide3 = false;
        this.isSectionHide4 = false;
        this.isFreeTicket = false;
        this.isPaidTicket = false;
        this.isAddress = false;
        this.toastr.setRootViewContainerRef(vcr);
    }
    AddEventComponent.prototype.ngOnInit = function () {
        this.eventModel.eventType = '';
        this.locationModel.location = '';
        this.locationModel.country = '';
        this.occurModel.dayOccur = '0';
        this.occurModel.eventOccur = 'days';
        this.timeZoneModel.timeZone = 'Pacific/Pago_Pago';
    };
    AddEventComponent.prototype.addEvent = function () {
        this.setDivHideShow(false, true, false, false);
    };
    AddEventComponent.prototype.addLocation = function () {
        if (this.locationModel.address1) {
            this.setDivHideShow(false, false, true, false);
        }
        else {
            this.isAddress = true;
        }
    };
    AddEventComponent.prototype.addDate = function () {
        this.setDivHideShow(false, false, false, true);
    };
    AddEventComponent.prototype.addEventOccur = function () {
    };
    AddEventComponent.prototype.backMenu1 = function () {
        this.setDivHideShow(true, false, false, false);
    };
    AddEventComponent.prototype.backMenu2 = function () {
        this.setDivHideShow(false, true, false, false);
    };
    AddEventComponent.prototype.setDivHideShow = function (sec1, sec2, sec3, sec4) {
        this.isSectionHide1 = sec1;
        this.isSectionHide2 = sec2;
        this.isSectionHide3 = sec3;
        this.isSectionHide4 = sec4;
    };
    AddEventComponent.prototype.freeTicket = function () {
        this.paidModel = {};
        this.setTicketDiveHideShow(true, false);
    };
    AddEventComponent.prototype.paidTicket = function () {
        this.freeModel = {};
        this.setTicketDiveHideShow(false, true);
    };
    AddEventComponent.prototype.addFreeTicket = function () {
        this.freeModel.price = 0;
        this.freeModel.type = "0";
        this.ticketData.push(this.freeModel);
        this.freeModel = {};
    };
    AddEventComponent.prototype.addPaidTicket = function () {
        this.freeModel.type = "1";
        this.ticketData.push(this.paidModel);
        this.paidModel = {};
    };
    AddEventComponent.prototype.deleteTicket = function (index) {
        this.ticketData.splice(index, 1);
    };
    AddEventComponent.prototype.setTicketDiveHideShow = function (free, paid) {
        this.isFreeTicket = free;
        this.isPaidTicket = paid;
    };
    AddEventComponent.prototype.SaveEvent = function () {
        var _this = this;
        var tData = [];
        for (var i = 0; i < this.ticketData.length; i++) {
            var ticket = {
                "EventTicketId": 0,
                "ProviderEventId": 0,
                "TicketType": this.ticketData[i].type,
                "TicketStatus": this.ticketData[i].ticketName,
                "TicketQty": this.ticketData[i].quantity,
                "TicketPrice": this.ticketData[i].price,
                "TicketDiscount": this.ticketData[i].perOrder,
                "IsActive": true
            };
            tData.push(ticket);
        }
        this.eService.saveEvent(this.eventModel, this.locationModel, this.dateModel, this.occurModel, this.timeZoneModel, tData)
            .subscribe(function (data) {
            _this.addEventAddress();
            _this.successMsg = data;
            setTimeout(function () {
                this.successMsg = '';
            }.bind(_this), 5000);
        }, function (error) {
            _this.errorMsg = error._body;
            setTimeout(function () {
                this.errorMsg = '';
            }.bind(_this), 5000);
        });
    };
    AddEventComponent.prototype.addEventAddress = function () {
        this.eService.addEventAddress(this.locationModel)
            .subscribe(function (data) {
        }, function (error) {
            console.log(error);
        });
    };
    AddEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-event',
            template: __webpack_require__("../../../../../src/app/event/addevent/addEvent.cmp.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__event_service__["a" /* EventService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_3__event_service__["a" /* EventService */]])
    ], AddEventComponent);
    return AddEventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventService = (function () {
    function EventService(http) {
        this.http = http;
        this.API_ENDPOINT = "http://70.35.198.86/GTIKITappLayer/";
    }
    EventService.prototype.saveEvent = function (event, location, date, occur, timezone, tickit) {
        var body = JSON.stringify({
            "ProviderEventId": 0,
            "ProviderId": 1,
            "CategoryId": event.eventType,
            "EventName": event.eventTitle,
            "PlaceId": location.location,
            "WebSite": "www.gtikit.com",
            "Email": "testmail@gmail.com",
            "ContactName": "Test Name",
            "ContactNumber": "1234567891",
            "IsFreeEvent": true,
            "Address": location == undefined ? '' : (location.vanueName == undefined ? '' : location.vanueName) + ' ' +
                (location.address1 == undefined ? '' : location.address1) + ' ' +
                (location.address2 == undefined ? '' : location.address2) + ' ' +
                (location.city == undefined ? '' : location.city) + ' ' +
                (location.state == undefined ? '' : location.state) + ' ' +
                (location.zipCode == undefined ? '' : location.zipCode) + ' ' +
                (location.country == undefined ? '' : location.country),
            "IsActive": true,
            "EventStartDateTime": date.startEndDate[0],
            "EventEndDateTime": date.startEndDate[1],
            "Language": "English",
            "EventImage1": "test.jpg",
            "EventImage2": "123.jpg",
            "EventImage3": "123.jpg",
            "EventImage4": "",
            "EventImage5": "",
            "ImageCategoryId": 1,
            "EventTicketRate": tickit
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.API_ENDPOINT + 'GTIKIT/GTCustomer/GTEvents', body, options)
            .map(function (response) { return response.json(); });
    };
    EventService.prototype.getEventDetails = function (id) {
        return this.http.get(this.API_ENDPOINT + 'GTEvent/' + id)
            .map(function (response) { return response.json(); });
    };
    EventService.prototype.GetAllEvents = function () {
        return this.http.get(this.API_ENDPOINT + 'GTEvent')
            .map(function (response) { return response.json(); });
    };
    EventService.prototype.addEventAddress = function (location) {
        var body = JSON.stringify({
            "AddressLine1": (location.address1 == undefined ? '' : location.address1),
            "AddressLine2": (location.address2 == undefined ? '' : location.address2),
            "City": (location.city == undefined ? '' : location.city),
            "CountryID": (location.country == undefined ? '' : location.country),
            "FaxNo": "123456",
            "IsActive": true,
            "IsDelete": false,
            "PhoneNo": "1234567891",
            "PinCode": (location.zipCode == undefined ? '' : location.zipCode),
            "PlaceDetailName": location == undefined ? '' : (location.vanueName == undefined ? '' : location.vanueName),
            "PlaceGroupId": 1,
            "PlaceId": location.location,
            "State": (location.state == undefined ? '' : location.state),
            "WebSite": "www.gtikit.com"
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.API_ENDPOINT + 'GTIKIT/GTCustomer/GTEventPlace/Addresses', body, options)
            .map(function (response) { return response.json(); });
    };
    EventService.prototype.getEventAddress = function (eventid) {
        return this.http.get(this.API_ENDPOINT + 'GTIKIT/GTCustomer/EventPlaceAddress/' + eventid)
            .map(function (response) { return response.json(); });
    };
    EventService.prototype.addBillingAddress = function (billing, cutomerId) {
        var body = JSON.stringify({
            "Id": 0,
            "CustomerId": cutomerId,
            "AddressType": "Main",
            "AddressLine1": billing.address,
            "AddressLine2": billing.zip,
            "City": billing.city,
            "States": billing.state,
            "Country": billing.country,
            "Mobile": billing.phone,
            "IsActive": true
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.API_ENDPOINT + 'GTIKIT/GTCustomer/Addresses', body, options)
            .map(function (response) { return response.json(); });
    };
    EventService.prototype.addCardDetails = function (card, cutomerId) {
        var body = JSON.stringify({
            "CustomerId": cutomerId,
            "CardType": 1,
            "CardNumber": card.cardNumber,
            "ExpMonth": card.month,
            "ExpYear": card.year,
            "SecurityNo": card.cardCVC,
            "IsDefault": 1,
            "CreditCardID": cutomerId + 10000
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.API_ENDPOINT + 'GTIKIT/GTCustomer/Payments', body, options)
            .map(function (response) { return response.json(); });
    };
    EventService.prototype.addCustomerOrder = function (CustomerId, ticketdata) {
        var body = JSON.stringify({
            "OrderRowId": 0,
            "OrderId": "OrderNo" + CustomerId,
            "CustomerId": CustomerId,
            "IsVoid": true,
            "OrderDetail": ticketdata
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.API_ENDPOINT + 'GTIKIT/GTCustomer/Order', body, options)
            .map(function (response) { return response.json(); });
    };
    EventService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json());
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "../../../../../src/app/event/eventDetails/eventDetail.cmp.html":
/***/ (function(module, exports) {

module.exports = "<!-- event details start -->\r\n<section class=\"event-detail\" *ngIf=\"isEvent\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 text-center\">\r\n                <h2>{{eventData[0]?.EventName}}</h2>\r\n                <p>\r\n                    <a href=\"#\">{{eventData[0]?.PlaceName}} , {{addressData[0]?.AddressLine1}} {{addressData[0]?.AddressLine2}} , {{addressData[0]?.City}}\r\n                        , {{addressData[0]?.State}} , {{addressData[0]?.PinCode}} </a>\r\n                </p>\r\n            </div>\r\n            <div class=\"col-md-6 col-md-offset-3\">\r\n                <div class=\"eve-time\">\r\n                    <ul>\r\n                        <li>\r\n                            <i class=\"fa fa-calendar\"></i>\r\n                            <h4>{{eventData[0]?.EventEndDateTime | date:'shortDate'}}</h4>\r\n                        </li>\r\n\r\n                        <li>\r\n                            <i class=\"fa fa-clock-o\"></i>\r\n                            <h4>{{eventData[0]?.EventEndDateTime | date:'mediumTime'}}</h4>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div *ngIf=\"noTicket\" class=\"help-block alert alert-danger\">{{noTicket}}</div>\r\n            <div class=\"col-md-8\">\r\n                <div class=\"event-detail-box\">\r\n                    <h3>Ticket Information</h3>\r\n                    <div class=\"ticket-box\">\r\n                        <table class=\"table table-striped table-condensed\" width=\"100%\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th width=\"68%\" align=\"left\">Type</th>\r\n                                    <th>&nbsp;</th>\r\n                                    <th width=\"32%\" align=\"right\">Quantity</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of ticketData;let i = index\">\r\n                                    <td>\r\n                                        <strong>{{item.TicketType}}</strong>\r\n                                        <div class=\"des\">Presentation is 60 minutes. Please arrive 10-15 minutes early to allow time to check\r\n                                            in.\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span *ngIf=\"item.TicketPrice == 0\" class=\"label label-success\">Free</span>\r\n                                        <span *ngIf=\"item.TicketPrice > 0\" class=\"label label-success\">$ {{item.TicketPrice}}</span>\r\n                                    </td>\r\n                                    <td align=\"right\">\r\n                                        <select class=\"form-control minimal\" (change)=\"getTicketDeatails($event.target.value,item.TicketPrice,i)\">\r\n                                            <option value=\"0\">0</option>\r\n                                            <option value=\"1\">1</option>\r\n                                            <option value=\"2\">2</option>\r\n                                            <option value=\"3\">3</option>\r\n                                            <option value=\"4\">4</option>\r\n                                        </select>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <a class=\"btn btn-default more\" role=\"button\" data-toggle=\"modal\" data-target=\"#register-modal\">Register</a>\r\n                        <a class=\"btn btn-default more\" (click)=\"proceedToPayment()\" style=\"float:right;\">Buy Ticket</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"event-detail-box\">\r\n                    <h3>Order Summary</h3>\r\n                    <div class=\"ticket-box\">\r\n                        <form>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"or-list\">Total Tickets</div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"0\" disabled value=\"{{totalTicket}}\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"or-list\">Add-on</div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"$0.00 USD\" disabled>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"or-list\">Processing Fee</div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"$0.00 USD\" disabled>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"or-list\">\r\n                                        <strong>Sub Total</strong>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group mar-bottom\">\r\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"$0.00 USD\" disabled value=\"{{totalPrice}}\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <!-- / Order Summary -->\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"event-detail-box\">\r\n                    <h3>Where </h3>\r\n                    <div class=\"go-map\">\r\n                        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.56298726925!2d88.04954505934278!3d22.675752108874445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C+West+Bengal!5e0!3m2!1sen!2sin!4v1505115444596\"\r\n                            width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 form-des\">\r\n                <p>All Sales are FINAL.</p>\r\n                <p>All tickets are NON-REFUNDABLE and NON-TRANSFERABLE.</p>\r\n                <p>The person in whose name the ticket is issued must also be present at the door with valid photo ID.</p>\r\n                <p>A printout of the order receipt issued by tickethungama.com should be produced at the venue. Please NOTE\r\n                    that some venues / organizers may need you to exchange the eTicket issued by TicketHungama.com with the\r\n                    actual ticket in order to get an entry.</p>\r\n                <p>If the event attendee is different from the credit card holder, a copy of the credit card used for ticket\r\n                    purchase must be produced along with the order.</p>\r\n                <p>Any failure in providing the aforementioned documents may result in denial of admission to the event with\r\n                    no refund.</p>\r\n                <p>In case of event being cancelled/postponed tickethungama.com will refund only the face value of the ticket\r\n                    and NOT the service fee.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container-fluid other-event\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <h2 class=\"text-center\">Other Events You May Like</h2>\r\n                <div class=\"event-carou\">\r\n                    <ngx-carousel [inputs]=\"carouselTile\" (carouselLoad)=\"carouselTileLoad($event)\">\r\n                        <ngx-tile NgxCarouselItem *ngFor=\"let Tile of carouselTileItems;let i = index\">\r\n                            <div class=\"main\">\r\n                                <div class=\"event-img view view-first\">\r\n                                    <img class=\"img-responsive\" src=\"assets/img/event/img{{allEventData[i]?.EventImage1}}\" alt=\"\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"event-con\">\r\n                                <h3>{{allEventData[i]?.EventName}}</h3>\r\n                                <p class=\"pad-top\">\r\n                                    <i class=\"fa fa-calendar\"></i>{{allEventData[i]?.EventStartDateTime | date:'short'}}</p>\r\n                                <p>\r\n                                    <i class=\"fa fa-map-marker\"></i>{{allEventData[i]?.PlaceName}}</p>\r\n                            </div>\r\n                        </ngx-tile>\r\n\r\n                        <button NgxCarouselPrev class='leftRs'>&lt;</button>\r\n                        <button NgxCarouselNext class='rightRs'>&gt;</button>\r\n                    </ngx-carousel>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- event details end -->\r\n\r\n<!-- payment details start -->\r\n<section class=\"card\" *ngIf=\"!isEvent\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 text-center\">\r\n                <h2>{{eventData[0]?.EventName}}</h2>\r\n                <p>\r\n                    <a href=\"#\">{{eventData[0]?.PlaceName}} , {{addressData[0]?.AddressLine1}} {{addressData[0]?.AddressLine2}} , {{addressData[0]?.City}}\r\n                        , {{addressData[0]?.State}} , {{addressData[0]?.PinCode}} </a>\r\n                </p>\r\n            </div>\r\n            <div class=\"col-md-6 col-md-offset-3\">\r\n                <div class=\"eve-time\">\r\n                    <ul>\r\n                        <li>\r\n                            <i class=\"fa fa-calendar\"></i>\r\n                            <h4>{{eventData[0]?.EventEndDateTime | date:'shortDate'}}</h4>\r\n                        </li>\r\n\r\n                        <li>\r\n                            <i class=\"fa fa-clock-o\"></i>\r\n                            <h4>{{eventData[0]?.EventEndDateTime | date:'mediumTime'}}</h4>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"event-detail-box\">\r\n                    <div class=\"board\">\r\n                        <div class=\"board-inner\">\r\n                            <ul class=\"nav nav-tabs\" id=\"myTab\">\r\n                                <div class=\"liner\"></div>\r\n                                <li class=\"active\">\r\n                                    <a href=\"#home\" data-toggle=\"tab\" title=\"Ticket Information\">\r\n                                        <span class=\"round-tabs one\">\r\n                                            <i class=\"fa fa-file-text-o\"></i>\r\n                                        </span>\r\n                                    </a>\r\n                                    <p class=\"su-head\">Ticket Information</p>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#profile\" data-toggle=\"tab\" title=\"Ticket Buyer Details\">\r\n                                        <span class=\"round-tabs two\">\r\n                                            <i class=\"fa fa-pencil-square-o\"></i>\r\n                                        </span>\r\n                                    </a>\r\n                                    <p class=\"su-head\">Ticket Buyer Details</p>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#messages\" data-toggle=\"tab\" title=\"Credit Card Details\">\r\n                                        <span class=\"round-tabs three\">\r\n                                            <i class=\"fa fa-credit-card\"></i>\r\n                                        </span>\r\n                                    </a>\r\n                                    <p class=\"su-head\">Credit Card Details</p>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"tab-content\">\r\n                            <div class=\"tab-pane fade in active\" id=\"home\">\r\n                                <div class=\"table-responsive\">\r\n                                    <table class=\"table table-striped table-condensed\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>Ticket Type</th>\r\n                                                <th>Unit Price</th>\r\n                                                <th>FEE</th>\r\n                                                <th>Quantity</th>\r\n                                                <th>Total Price</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let item of ticketData;let i = index\">\r\n                                                <td>\r\n                                                    <p>{{item.TicketType}}</p>\r\n                                                </td>\r\n                                                <td>{{item.TicketPrice}}</td>\r\n                                                <td>$0.00</td>\r\n                                                <td>\r\n                                                    <input type=\"text\" *ngIf=\"array2[i] != null\" [(ngModel)]=\"array2[i]\" disabled class=\"form-control\" style=\"width:50px;\" />\r\n                                                    <input type=\"text\" *ngIf=\"!array2[i]\" value=\"0\" disabled class=\"form-control\" style=\"width:50px;\" />\r\n                                                </td>\r\n                                                <td>\r\n                                                    <p *ngIf=\"array1[i] != null\">$ {{array1[i]}}</p>\r\n                                                    <p *ngIf=\"!array1[i]\">$ 0</p>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <div class=\"inn-code\">\r\n                                    <p>If you have a promotional code, please enter it here</p>\r\n                                    <form>\r\n                                        <input class=\"form-control\" name=\"username\" type=\"text\">\r\n                                        <a class=\"btn btn-next\">Apply</a>\r\n                                    </form>\r\n                                    <a href=\"#profile\" data-toggle=\"tab\" title=\"Ticket Buyer Details\" class=\"btn btn-info\" style=\"float:right;\">Next\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"total\">\r\n                                    <div class=\"gr-01\">\r\n                                        <h4>Total</h4>\r\n                                    </div>\r\n                                    <div class=\"gr-02\">\r\n                                        <div class=\"to-pri\">\r\n                                            <h4>$ {{totalPrice}}</h4>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"tab-pane fade\" id=\"profile\">\r\n                                <form name=\"billingform\" (ngSubmit)=\"bl.form.valid && addBilling()\" #bl=\"ngForm\" novalidate>\r\n                                    <div *ngIf=\"successMsg\" class=\"help-block alert alert-success\">{{successMsg}}</div>\r\n                                    <div *ngIf=\"errorMsg\" class=\"help-block alert alert-danger\">{{errorMsg}}</div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>First Name</label>\r\n                                                <input [(ngModel)]=\"billingModel.firstname\" #firstname=\"ngModel\" required class=\"form-control\" name=\"firstname\" placeholder=\"First Name\"\r\n                                                    type=\"text\">\r\n                                                <div *ngIf=\"bl.submitted && !firstname.valid\" class=\"help-block alert alert-danger\">Username is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Last Name</label>\r\n                                                <input [(ngModel)]=\"billingModel.lastname\" #lastname=\"ngModel\" required class=\"form-control\" name=\"lastname\" placeholder=\"Last Name\"\r\n                                                    type=\"text\">\r\n                                                <div *ngIf=\"bl.submitted && !lastname.valid\" class=\"help-block alert alert-danger\">Last Name is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Email ID</label>\r\n                                                <input [(ngModel)]=\"billingModel.email\" #email=\"ngModel\" class=\"form-control\" name=\"email\" placeholder=\"Email ID\" type=\"text\"\r\n                                                    required email pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" [readonly]=\"readonly\">\r\n                                                <div *ngIf=\"bl.submitted && !email.valid\" class=\"help-block alert alert-danger\">Email is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Mobile Phone</label>\r\n                                                <input [(ngModel)]=\"billingModel.phone\" #phone=\"ngModel\" required class=\"form-control\" name=\"phone\" placeholder=\"Mobile Phone\"\r\n                                                    type=\"number\" minlength=\"10\">\r\n                                                <div *ngIf=\"bl.submitted && !phone.valid\" class=\"help-block alert alert-danger\">Mobile Phone is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Zipe</label>\r\n                                                <input [(ngModel)]=\"billingModel.zip\" #zip=\"ngModel\" required class=\"form-control\" name=\"zip\" placeholder=\"Zip\" type=\"number\">\r\n                                                <div *ngIf=\"bl.submitted && !zip.valid\" class=\"help-block alert alert-danger\">Zip-code is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>City</label>\r\n                                                <input [(ngModel)]=\"billingModel.city\" #city=\"ngModel\" required class=\"form-control\" name=\"city\" placeholder=\"City\" type=\"text\">\r\n                                                <div *ngIf=\"bl.submitted && !city.valid\" class=\"help-block alert alert-danger\">City is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>State</label>\r\n                                                <select class=\"form-control minimal\" [(ngModel)]=\"billingModel.state\" #state=\"ngModel\" required name=\"state\">\r\n                                                    <option value=\"\" selected=\"selected\">Select</option>\r\n                                                    <option value=\"AK\">AK</option>\r\n                                                    <option value=\"AL\">AL</option>\r\n                                                    <option value=\"AR\">AR</option>\r\n                                                    <option value=\"AZ\">AZ</option>\r\n                                                    <option value=\"CA\">CA</option>\r\n                                                    <option value=\"CO\">CO</option>\r\n                                                    <option value=\"CT\">CT</option>\r\n                                                    <option value=\"DC\">DC</option>\r\n                                                    <option value=\"DE\">DE</option>\r\n                                                    <option value=\"FL\">FL</option>\r\n                                                    <option value=\"GA\">GA</option>\r\n                                                    <option value=\"HI\">HI</option>\r\n                                                    <option value=\"IA\">IA</option>\r\n                                                    <option value=\"ID\">ID</option>\r\n                                                    <option value=\"IL\">IL</option>\r\n                                                    <option value=\"IN\">IN</option>\r\n                                                    <option value=\"KS\">KS</option>\r\n                                                    <option value=\"KY\">KY</option>\r\n                                                    <option value=\"LA\">LA</option>\r\n                                                    <option value=\"MA\">MA</option>\r\n                                                    <option value=\"MD\">MD</option>\r\n                                                    <option value=\"ME\">ME</option>\r\n                                                    <option value=\"MI\">MI</option>\r\n                                                    <option value=\"MN\">MN</option>\r\n                                                    <option value=\"MO\">MO</option>\r\n                                                    <option value=\"MS\">MS</option>\r\n                                                    <option value=\"MT\">MT</option>\r\n                                                    <option value=\"NC\">NC</option>\r\n                                                    <option value=\"ND\">ND</option>\r\n                                                    <option value=\"NE\">NE</option>\r\n                                                    <option value=\"NH\">NH</option>\r\n                                                    <option value=\"NJ\">NJ</option>\r\n                                                    <option value=\"NM\">NM</option>\r\n                                                    <option value=\"NV\">NV</option>\r\n                                                    <option value=\"NY\">NY</option>\r\n                                                    <option value=\"OH\">OH</option>\r\n                                                    <option value=\"OK\">OK</option>\r\n                                                    <option value=\"OR\">OR</option>\r\n                                                    <option value=\"PA\">PA</option>\r\n                                                    <option value=\"RI\">RI</option>\r\n                                                    <option value=\"SC\">SC</option>\r\n                                                    <option value=\"SD\">SD</option>\r\n                                                    <option value=\"TN\">TN</option>\r\n                                                    <option value=\"TX\">TX</option>\r\n                                                    <option value=\"UT\">UT</option>\r\n                                                    <option value=\"VA\">VA</option>\r\n                                                    <option value=\"VT\">VT</option>\r\n                                                    <option value=\"WA\">WA</option>\r\n                                                    <option value=\"WI\">WI</option>\r\n                                                    <option value=\"WV\">WV</option>\r\n                                                    <option value=\"WY\">WY</option>\r\n                                                </select>\r\n                                                <div *ngIf=\"bl.submitted && !state.valid\" class=\"help-block alert alert-danger\">State is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Country</label>\r\n                                                <select class=\"form-control minimal\" [(ngModel)]=\"billingModel.country\" #country=\"ngModel\" required name=\"country\">\r\n                                                    <option value=\"USA\" selected=\"selected\">USA</option>\r\n                                                    <option value=\"Canada\">Canada</option>\r\n                                                </select>\r\n                                                <div *ngIf=\"bl.submitted && !country.valid\" class=\"help-block alert alert-danger\">Country is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <label>Address</label>\r\n                                            <textarea class=\"form-control\" placeholder=\"Please enter your Address here...\" rows=\"3\" [(ngModel)]=\"billingModel.address\"\r\n                                                #address=\"ngModel\" required name=\"address\"></textarea>\r\n                                            <div *ngIf=\"bl.submitted && !address.valid\" class=\"help-block alert alert-danger\">Address is required</div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <button type=\"submit\" class=\"btn btn-success btn-block\">Save</button>\r\n                                </form>\r\n                                <br>\r\n                                <a href=\"#home\" data-toggle=\"tab\" title=\"Ticket Information\" class=\"btn btn-info\" style=\"float:left;\">Previous\r\n                                </a>\r\n                                <a href=\"#messages\" data-toggle=\"tab\" title=\"Credit Card Details\" class=\"btn btn-info\" style=\"float:right;\">Next\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"tab-pane fade\" id=\"messages\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-7\">\r\n                                                <!-- CREDIT CARD FORM STARTS HERE -->\r\n                                                <div class=\"panel panel-default credit-card-box\">\r\n                                                    <div class=\"panel-heading display-table\">\r\n                                                        <div class=\"row display-tr\">\r\n                                                            <h3 class=\"panel-title display-td\">Pay using Credit Card.</h3>\r\n                                                            <div class=\"display-td text-center\">\r\n                                                                <img class=\"img-responsive\" src=\"assets/img/visa.png\" alt=\"\">\r\n                                                                <img class=\"img-responsive\" src=\"assets/img/mastercard.png\" alt=\"\">\r\n                                                                <img class=\"img-responsive\" src=\"assets/img/discover.png\" alt=\"\">\r\n                                                                <img class=\"img-responsive\" src=\"assets/img/american-express.png\" alt=\"\"> </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"panel-body\">\r\n                                                        <form name=\"paymentForm\" (ngSubmit)=\"pay.form.valid && addCreditCard()\" #pay=\"ngForm\" novalidate>\r\n                                                            <div class=\"row\">\r\n                                                                <div *ngIf=\"successMsg1\" class=\"help-block alert alert-success\">{{successMsg1}}</div>\r\n                                                                <div *ngIf=\"errorMsg1\" class=\"help-block alert alert-danger\">{{errorMsg1}}</div>\r\n                                                                <div class=\"col-xs-12\">\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <label for=\"cardNumber\">CARD NUMBER</label>\r\n                                                                        <div class=\"input-group\">\r\n                                                                            <input type=\"tel\" class=\"form-control\" [(ngModel)]=\"paymentModel.cardNumber\" #cardNumber=\"ngModel\" name=\"cardNumber\" placeholder=\"Valid Card Number\"\r\n                                                                                autocomplete=\"cc-number\" required autofocus creditCard\r\n                                                                            />\r\n                                                                            <span class=\"input-group-addon\">\r\n                                                                                <i class=\"fa fa-credit-card\"></i>\r\n                                                                            </span>\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"pay.submitted && !cardNumber.valid\" class=\"help-block alert alert-danger\">Card no is invalid or required</div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-xs-12\">\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <label for=\"couponCode\">Name on Card</label>\r\n                                                                        <input [(ngModel)]=\"paymentModel.name\" #name=\"ngModel\" required class=\"form-control\" name=\"name\" placeholder=\"Name of card holder\"\r\n                                                                            type=\"text\">\r\n                                                                        <div *ngIf=\"pay.submitted && !name.valid\" class=\"help-block alert alert-danger\">Name is required</div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-xs-4 col-md-4\">\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <label for=\"cardExpiry\">\r\n                                                                            <span class=\"hidden-xs\">EXP. MONTH</span>\r\n                                                                        </label>\r\n                                                                        <select class=\"form-control minimal\" [(ngModel)]=\"paymentModel.month\" #month=\"ngModel\" required name=\"month\">\r\n                                                                            <option value=''>Month</option>\r\n                                                                            <option value='01'>January</option>\r\n                                                                            <option value='02'>February</option>\r\n                                                                            <option value='03'>March</option>\r\n                                                                            <option value='04'>April</option>\r\n                                                                            <option value='05'>May</option>\r\n                                                                            <option value='06'>June</option>\r\n                                                                            <option value='07'>July</option>\r\n                                                                            <option value='08'>August</option>\r\n                                                                            <option value='09'>September</option>\r\n                                                                            <option value='10'>October</option>\r\n                                                                            <option value='11'>November</option>\r\n                                                                            <option value='12'>December</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                    <div *ngIf=\"pay.submitted && !month.valid\" class=\"help-block alert alert-danger\">Expiry month required</div>\r\n                                                                </div>\r\n                                                                <div class=\"col-xs-3 col-md-3\">\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <label for=\"cardExpiry\">\r\n                                                                            <span class=\"hidden-xs\">EXP. YEAR</span>\r\n                                                                        </label>\r\n                                                                        <select class=\"form-control minimal\" [(ngModel)]=\"paymentModel.year\" #year=\"ngModel\" required name=\"year\">\r\n                                                                            <option value=''>Year</option>\r\n                                                                            <option value='2018'>2018</option>\r\n                                                                            <option value='2019'>2019</option>\r\n                                                                            <option value='2020'>2020</option>\r\n                                                                            <option value='2021'>2021</option>\r\n                                                                            <option value='2022'>2022</option>\r\n                                                                            <option value='2023'>2023</option>\r\n                                                                            <option value='2024'>2024</option>\r\n                                                                            <option value='2025'>2025</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                    <div *ngIf=\"pay.submitted && !year.valid\" class=\"help-block alert alert-danger\">Expiry year required</div>\r\n                                                                </div>\r\n                                                                <div class=\"col-xs-5 col-md-5 pull-right\">\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <label for=\"cardCVC\">CVV\r\n                                                                            <a data-toggle=\"popover\" data-placement=\"right\">What is this</a>\r\n                                                                        </label>\r\n                                                                        <input type=\"tel\" [(ngModel)]=\"paymentModel.cardCVC\" #cardCVC=\"ngModel\" required class=\"form-control\" autocomplete=\"cc-csc\"\r\n                                                                            name=\"cardCVC\" placeholder=\"CVV\" type=\"text\" maxlength=\"3\">\r\n                                                                        <div *ngIf=\"pay.submitted && !cardCVC.valid\" class=\"help-block alert alert-danger\">Expiry date is required</div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-xs-12\">\r\n                                                                    <button class=\"subscribe btn btn-previous btn-lg btn-block\" type=\"submit\">Pay Now</button>\r\n                                                                    <small class=\"text-center\">By clicking \"Pay Now\", I acknowledge that I have read\r\n                                                                        and agree with the sulekha.com’s terms of service,\r\n                                                                        privacy policy, and cookie policy.</small>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\" style=\"display:none;\">\r\n                                                                <div class=\"col-xs-12\">\r\n                                                                    <p class=\"payment-errors\"></p>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </form>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- CREDIT CARD FORM ENDS HERE -->\r\n                                            </div>\r\n                                            <div class=\"col-md-5\">\r\n                                                <div>\r\n                                                    <h3>Amount Summary</h3>\r\n                                                    <div class=\"ticket-box\">\r\n                                                        <table class=\"table table-striped table-condensed\">\r\n                                                            <tbody>\r\n                                                                <tr>\r\n                                                                    <td>Sub Total</td>\r\n                                                                    <td>$ {{totalPrice}}</td>\r\n                                                                </tr>\r\n                                                                <tr>\r\n                                                                    <td>Service Fee</td>\r\n                                                                    <td>$ 0.00</td>\r\n                                                                </tr>\r\n                                                                <tr>\r\n                                                                    <td>Amount Payable</td>\r\n                                                                    <td>\r\n                                                                        <strong>$ {{totalPrice}}</strong>\r\n                                                                    </td>\r\n                                                                </tr>\r\n                                                            </tbody>\r\n                                                        </table>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <h3>Ticket Summary</h3>\r\n                                                    <div class=\"ticket-box\">\r\n                                                        <table class=\"table table-striped table-condensed\">\r\n                                                            <thead>\r\n                                                                <tr>\r\n                                                                    <th>Type</th>\r\n                                                                    <th>No. of Ticket</th>\r\n                                                                </tr>\r\n                                                            </thead>\r\n                                                            <tbody>\r\n                                                                <tr *ngFor=\"let t of ticketData;let i =index;\">\r\n                                                                    <td>{{t.TicketType}}</td>\r\n                                                                    <td>{{array2[i]}}</td>\r\n                                                                </tr>\r\n                                                            </tbody>\r\n                                                        </table>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <h3>Billing Summary</h3>\r\n                                                    <div class=\"ticket-box\">\r\n                                                        <table class=\"table table-striped table-condensed\">\r\n                                                            <tbody>\r\n                                                                <tr>\r\n                                                                    <td>\r\n                                                                        <strong>{{billingModel.firstname}} {{billingModel.lastname}}</strong>\r\n                                                                    </td>\r\n                                                                </tr>\r\n                                                                <tr>\r\n                                                                    <td>\r\n                                                                        <b>Email : </b> {{billingModel.email}}</td>\r\n                                                                </tr>\r\n                                                                <tr>\r\n                                                                    <td>\r\n                                                                        <b>Phone : </b> {{billingModel.phone}}</td>\r\n                                                                </tr>\r\n                                                                <tr>\r\n                                                                    <td>\r\n                                                                        <b>Address : </b> {{billingModel.address}} - {{billingModel.zip}}\r\n                                                                        , {{billingModel.city}} , {{billingModel.state}}\r\n                                                                        , {{billingModel.country}}</td>\r\n                                                                </tr>\r\n                                                            </tbody>\r\n                                                        </table>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <a href=\"#profile\" data-toggle=\"tab\" title=\"Ticket Buyer Details\" class=\"btn btn-info\" style=\"float:left;\">Previous\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- / Order Summary -->\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 terms\">\r\n                <div class=\"event-detail-box\">\r\n                    <h4>Terms and Conditions:</h4>\r\n                    <ul>\r\n                        <li>All Sales are FINAL.</li>\r\n                        <li>All tickets are NON-REFUNDABLE and NON-TRANSFERABLE.</li>\r\n                        <li>The person in whose name the ticket is issued must also be present at the door with valid photo ID.</li>\r\n                        <li>A printout of the order receipt issued by sulekha.com should be produced at the venue.</li>\r\n                        <li>If the event attendee is different from the credit card holder, a copy of the credit card used for\r\n                            ticket purchase must be produced along with the order.</li>\r\n                        <li>Any failure in providing the aforementioned documents may result in denial of admission to the event\r\n                            with no refund.\r\n                        </li>\r\n                        <li>In case of event being cancelled/postponed Sulekha will refund only the face value of the ticket\r\n                            and NOT the service fee.</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- payment details end -->"

/***/ }),

/***/ "../../../../../src/app/event/eventDetails/eventDetail.cmp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_service__ = __webpack_require__("../../../../../src/app/event/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_credit_cards__ = __webpack_require__("../../../../ngx-credit-cards/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_credit_cards___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_credit_cards__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__("../../../../../src/app/common/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventDetailComponent = (function () {
    function EventDetailComponent(router, route, eService, cService, fb) {
        this.router = router;
        this.route = route;
        this.eService = eService;
        this.cService = cService;
        this.fb = fb;
        this.allEventData = [];
        this.eventData = [];
        this.ticketData = [];
        this.addressData = [];
        this.totalPrice = 0;
        this.totalTicket = 0;
        this.array1 = [];
        this.array2 = [];
        this.isEvent = true;
        this.billingModel = {};
        this.paymentModel = {};
        this.successMsg = '';
        this.errorMsg = '';
        this.successMsg1 = '';
        this.errorMsg1 = '';
        this.noTicket = '';
        this.readonly = false;
        this.form = this.fb.group({
            cardNumber: ['', __WEBPACK_IMPORTED_MODULE_4_ngx_credit_cards__["CreditCardValidator"].validateCardNumber],
            cardExpDate: ['', __WEBPACK_IMPORTED_MODULE_4_ngx_credit_cards__["CreditCardValidator"].validateCardExpiry],
            cardCvv: ['', __WEBPACK_IMPORTED_MODULE_4_ngx_credit_cards__["CreditCardValidator"].validateCardCvc],
            cardName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
        });
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEventDetails();
        this.GetAllEvents();
        this.getEventAddress();
        this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.carouselTile = {
            grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
            slide: 1,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: false
            },
            load: 1,
            touch: true,
            easing: 'ease'
        };
        var custId = localStorage.getItem('custid');
        if (custId != '' && custId != undefined && localStorage.getItem('login') == 'true') {
            this.cService.getAllUserData()
                .subscribe(function (response) {
                _this.userData = response;
                _this.billingModel = {
                    firstname: _this.userData.GTCustomerMain != null ? _this.userData.GTCustomerMain[0].FirstName : '',
                    lastname: _this.userData.GTCustomerMain != null ? _this.userData.GTCustomerMain[0].LastName : '',
                    email: _this.userData.GTCustomerMain != null ? _this.userData.GTCustomerMain[0].Email : '',
                };
                _this.readonly = true;
            }, function (error) {
                _this.errorMsg = error._body;
                setTimeout(function () {
                    this.errorMsg = '';
                }.bind(_this), 5000);
            });
        }
    };
    EventDetailComponent.prototype.carouselTileLoad = function (evt) {
        var len = this.carouselTileItems.length;
        if (len <= 30) {
            for (var i = len; i < len; i++) {
                this.carouselTileItems.push(i);
            }
        }
    };
    EventDetailComponent.prototype.getEventDetails = function () {
        var _this = this;
        this.eService.getEventDetails(this.route.snapshot.paramMap.get('id'))
            .subscribe(function (response) {
            _this.eventData = response;
            _this.ticketData = _this.eventData[0].TicketRate;
        }, function (error) {
            console.log(error);
        });
    };
    EventDetailComponent.prototype.getEventAddress = function () {
        var _this = this;
        this.eService.getEventAddress(this.route.snapshot.paramMap.get('id'))
            .subscribe(function (response) {
            _this.addressData = response;
        }, function (error) {
            console.log(error);
        });
    };
    EventDetailComponent.prototype.GetAllEvents = function () {
        var _this = this;
        this.eService.GetAllEvents()
            .subscribe(function (response) {
            _this.allEventData = response.filter(function (x) { return x.ProviderEventId != _this.route.snapshot.paramMap.get('id'); });
            _this.carouselTileItems = [];
            for (var i = 0; i < _this.allEventData.length; i++) {
                _this.carouselTileItems.push(i);
            }
        }, function (error) {
            console.log(error);
        });
    };
    EventDetailComponent.prototype.getTicketDeatails = function (noofTicket, ticketPrice, index) {
        this.array1[index] = (noofTicket * ticketPrice);
        this.array2[index] = (noofTicket);
        this.totalPrice = 0;
        for (var i = 0; i < this.array1.length; i++) {
            if (this.array1[i]) {
                this.totalPrice = this.totalPrice + Number(this.array1[i]);
            }
        }
        this.totalTicket = 0;
        for (var i = 0; i < this.array2.length; i++) {
            if (this.array2[i]) {
                this.totalTicket = this.totalTicket + Number(this.array2[i]);
            }
        }
    };
    EventDetailComponent.prototype.proceedToPayment = function () {
        if (this.array2.length > 0) {
            this.isEvent = false;
        }
        else {
            this.noTicket = "Kindly choose any ticket type to proceed.";
            setTimeout(function () {
                this.noTicket = '';
            }.bind(this), 5000);
        }
    };
    EventDetailComponent.prototype.addBilling = function (e) {
        var _this = this;
        if (this.billingModel) {
            var custId = localStorage.getItem('custid');
            if (custId != '' && custId != undefined && localStorage.getItem('login') == 'true') {
                this.customerId = custId;
                //Billing Address service call
                this.eService.addBillingAddress(this.billingModel, custId)
                    .subscribe(function (data1) {
                    _this.addOrder();
                    _this.successMsg = "Successfully added customer billing and order details";
                    setTimeout(function () {
                        this.successMsg = '';
                    }.bind(_this), 5000);
                }, function (error) {
                    _this.errorMsg = error._body;
                    setTimeout(function () {
                        this.errorMsg = '';
                    }.bind(_this), 5000);
                });
            }
            else {
                this.cService.createBillingUser(this.billingModel)
                    .subscribe(function (data) {
                    _this.customerId = data.Id;
                    localStorage.setItem('custid', _this.customerId);
                    localStorage.setItem('login', 'true');
                    //Billing Address service call
                    _this.eService.addBillingAddress(_this.billingModel, data.Id)
                        .subscribe(function (data1) {
                        _this.addOrder();
                        _this.successMsg = "Successfully added customer billing and order details";
                        setTimeout(function () {
                            this.successMsg = '';
                        }.bind(_this), 5000);
                    }, function (error) {
                        _this.errorMsg = error._body;
                        setTimeout(function () {
                            this.errorMsg = '';
                        }.bind(_this), 5000);
                    });
                }, function (error) {
                    _this.errorMsg = error._body;
                    setTimeout(function () {
                        this.errorMsg = '';
                    }.bind(_this), 5000);
                });
            }
        }
    };
    EventDetailComponent.prototype.addOrder = function () {
        var _this = this;
        //Customer order service call
        var tData = [];
        for (var i = 0; i < this.ticketData.length; i++) {
            if (this.array2[i] > 0) {
                var ticket = {
                    "OrderRowId": this.ticketData[i].type,
                    "EventId": this.ticketData[i].type,
                    "TicketRateId": i + 1,
                    "Qty": this.array2[i],
                    "RegularPrice": this.array1[i],
                    "Discount": 10,
                    "SubTotal": this.array1[i],
                    "ServiceFee": 0,
                    "IsVoid": true,
                    "EventName": this.eventData[0].EventName
                };
                tData.push(ticket);
            }
        }
        this.eService.addCustomerOrder(this.customerId, tData)
            .subscribe(function (data2) {
            _this.successMsg = "Successfully added customer billing and order details";
            setTimeout(function () {
                this.successMsg = '';
            }.bind(_this), 5000);
        }, function (error) {
            _this.errorMsg = error._body;
            setTimeout(function () {
                this.errorMsg = '';
            }.bind(_this), 5000);
        });
    };
    EventDetailComponent.prototype.addCreditCard = function () {
        var _this = this;
        if (this.billingModel && this.customerId) {
            if (this.paymentModel) {
                this.eService.addCardDetails(this.paymentModel, this.customerId)
                    .subscribe(function (data1) {
                    _this.router.navigate(['/payment']);
                    _this.successMsg1 = "Successfully added payment details";
                    setTimeout(function () {
                        this.successMsg1 = '';
                    }.bind(_this), 5000);
                }, function (error) {
                    _this.errorMsg1 = error._body;
                    setTimeout(function () {
                        this.errorMsg = '';
                    }.bind(_this), 5000);
                });
            }
        }
        else {
            this.errorMsg1 = "Please enter billing deails";
            setTimeout(function () {
                this.errorMsg1 = '';
            }.bind(this), 5000);
        }
    };
    EventDetailComponent.prototype.onClick = function (link) {
        // Do something relevant with the object... 
        return false;
    };
    EventDetailComponent.prototype.onSubmit = function () {
    };
    EventDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__("../../../../../src/app/event/eventDetails/eventDetail.cmp.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */]],
            styles: ["\n    \n        h1{\n          min-height: 200px;\n          background-color: #ccc;\n          text-align: center;\n          line-height: 200px;\n        }\n        .leftRs {\n            position: absolute;\n            margin: auto;\n            top: 0;\n            bottom: 0;\n            width: 50px;\n            height: 50px;\n            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n            border-radius: 999px;\n            left: 0;\n        }\n    \n        .rightRs {\n            position: absolute;\n            margin: auto;\n            top: 0;\n            bottom: 0;\n            width: 50px;\n            height: 50px;\n            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n            border-radius: 999px;\n            right: 0;\n        }\n      "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/payment/payment.cmp.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"container\" style=\"margin-top:8%;margin-bottom: 8%;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <div class=\"invoice-title\">\r\n                    <h2 style=\"color:lightgreen;text-align:center\">Your Order is Successful</h2>\r\n                </div>\r\n                <br>\r\n                <div style=\"text-align:center\">\r\n                    Kindly go to\r\n                    <a (click)=\"reload()\" style=\"cursor:pointer;\">\r\n                        <i class=\"fa fa-user\"></i>profile\r\n                    </a> section to see your order information.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/event/payment/payment.cmp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentComponent = (function () {
    function PaymentComponent(router) {
        this.router = router;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        // let flag = localStorage.getItem('login');
        // if (flag != 'false') {
        //     this.isAccount = true;
        //     this.router.navigate(['/profile']);
        // }
    };
    PaymentComponent.prototype.reload = function () {
        window.location.reload();
    };
    PaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__("../../../../../src/app/event/payment/payment.cmp.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.cmp.html":
/***/ (function(module, exports) {

module.exports = "<!-- CAROUSEL -->\r\n<section class=\"banner\">\r\n  <div id=\"bootstrap-touch-slider\" class=\"carousel bs-slider fade  control-round indicators-line\" data-ride=\"carousel\" data-pause=\"hover\"\r\n    data-interval=\"5000\">\r\n    <!-- Wrapper For Slides -->\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n      <!-- Slide -->\r\n      <div class=\"item active\">\r\n        <!-- Slide Background -->\r\n        <img src=\"assets/img/banner.jpg\" alt=\"\" class=\"slide-image\" />\r\n        <div class=\"bs-slider-overlay\"></div>\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <!-- Slide Text Layer -->\r\n            <div class=\"slide-text slide_style_center\">\r\n              <h3 data-animation=\"animated fadeInDown\">What is Lorem Ipsum?</h3>\r\n              <h1 data-animation=\"animated fadeInDownBig\">Lorem ipsum dolor sit amet</h1>\r\n              <p data-animation=\"animated fadeInLeft\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\r\n              <a href=\"#\" target=\"_blank\" class=\"btn btn-default\" data-animation=\"animated fadeInLeft\">Find Out More</a>\r\n              <div class=\"left-line\" data-animation=\"animated fadeInDown\">\r\n                <img src=\"assets/img/line.png\" alt=\"\" />\r\n              </div>\r\n              <div class=\"right-line\" data-animation=\"animated fadeInDown\">\r\n                <img src=\"assets/img/line.png\" alt=\"\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- End of Slide -->\r\n      <!-- Slide -->\r\n      <div class=\"item\">\r\n        <!-- Slide Background -->\r\n        <img src=\"assets/img/banner2.jpg\" alt=\"\" class=\"slide-image\" />\r\n        <div class=\"bs-slider-overlay\"></div>\r\n        <!-- Slide Text Layer -->\r\n        <div class=\"slide-text slide_style_center\">\r\n          <h3 data-animation=\"animated fadeInDown\">What is Lorem Ipsum?</h3>\r\n          <h1 data-animation=\"animated fadeInDownBig\">Lorem ipsum dolor sit amet</h1>\r\n          <p data-animation=\"animated fadeInLeft\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\r\n          <a href=\"#\" target=\"_blank\" class=\"btn btn-default\" data-animation=\"animated fadeInLeft\">Find Out More</a>\r\n          <div class=\"left-line\" data-animation=\"animated fadeInDown\">\r\n            <img src=\"assets/img/line.png\" alt=\"\" />\r\n          </div>\r\n          <div class=\"right-line\" data-animation=\"animated fadeInDown\">\r\n            <img src=\"assets/img/line.png\" alt=\"\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- End of Slide -->\r\n    </div>\r\n    <!-- End of Wrapper For Slides -->\r\n  </div>\r\n</section>\r\n<!-- / CAROUSEL -->\r\n<!-- MAIN CONTENT -->\r\n<section class=\"body-con\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"banner-form\">\r\n          <h1 class=\"text-center\">Find your next experience </h1>\r\n          <form class=\"banner-search\" role=\"search\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" [(ngModel)]=\"searchByCategory\" class=\"form-control\" name=\"searchByCategory\" placeholder=\"Search events or categories\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" [(ngModel)]=\"searchByPlace\" class=\"form-control\" name=\"searchByPlace\" placeholder=\"kolkta,India\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <select class=\"form-control minimal\" [(ngModel)]=\"searchByDate\" name=\"searchByDate\">\r\n                  <option value=\"\" selected=\"selected\">All Dates</option>\r\n                  <option value=\"today\">Today</option>\r\n                  <option value=\"tomorrow\">Tomorrow</option>\r\n                  <option value=\"this_week\">This Week</option>\r\n                  <option value=\"this_weekend\">This Weekend</option>\r\n                  <option value=\"next_week\">Next Week</option>\r\n                  <option value=\"next_month\">Next Month</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <button type=\"submit\" class=\"btn btn-default\" (click)=\"GetSearchEvents()\">Search</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- Banner bot-form -->\r\n      <div class=\"col-md-12\">\r\n        <h2 class=\"text-center\">Popular Events in</h2>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div *ngFor=\"let item of eventData; let i = index\">\r\n            <div class=\"col-md-4\" *ngIf=\"!isSeeMore || i < 6\">\r\n              <div class=\"event-box\">\r\n                <div class=\"main\">\r\n                  <div class=\"event-img view view-first\">\r\n                    <img class=\"img-responsive\" src=\"assets/img/event/img{{item.EventImage1}}\" alt=\"\" />\r\n                    <div class=\"mask\">\r\n                      <a [routerLink]=\"['eventDetail',item.ProviderEventId]\" class=\"info\">\r\n                        <i class=\"fa fa-link\"></i>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"event-con\">\r\n                  <h3>{{item.EventName}}</h3>\r\n                  <p class=\"pad-top\">\r\n                    <i class=\"fa fa-calendar\"></i>{{item.EventStartDateTime | date:'short'}}</p>\r\n                  <p style=\"margin-bottom:5px;\">\r\n                    <i class=\"fa fa-map-marker\"></i>{{item.PlaceName}}\r\n                    <a [routerLink]=\"['eventDetail',item.ProviderEventId]\" class=\"btn btn-default btn-xs\" style=\"float:right;border-radius: 3px;\">More</a>\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12 text-center\" *ngIf=\"isSeeMore\">\r\n        <a class=\"btn btn-info more\" (click)=\"SeeMoreEvents()\">See more</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br />\r\n</section>\r\n<!-- / MAIN CONTENT -->"

/***/ }),

/***/ "../../../../../src/app/home/home.cmp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(router, hService, toastr, vcr) {
        this.router = router;
        this.hService = hService;
        this.toastr = toastr;
        this.eventData = [];
        this.noOfEvent = 0;
        this.isSeeMore = false;
        this.searchByCategory = '';
        this.searchByPlace = '';
        this.searchByDate = '';
        this.toastr.setRootViewContainerRef(vcr);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.GetAllEvents();
    };
    HomeComponent.prototype.GetAllEvents = function () {
        var _this = this;
        this.hService.GetAllEvents()
            .subscribe(function (response) {
            _this.eventData = response;
            _this.noOfEvent = _this.eventData.length;
            if (_this.noOfEvent > 6) {
                _this.isSeeMore = true;
            }
        }, function (error) {
            _this.toastr.error(error, 'Error!');
        });
    };
    HomeComponent.prototype.SeeMoreEvents = function () {
        this.isSeeMore = false;
    };
    HomeComponent.prototype.GetSearchEvents = function () {
        var _this = this;
        this.hService.GetSearchEvents(this.searchByCategory, this.searchByPlace, this.searchByDate)
            .subscribe(function (response) {
            _this.eventData = response;
            _this.noOfEvent = _this.eventData.length;
            if (_this.noOfEvent > 6) {
                _this.isSeeMore = true;
            }
        }, function (error) {
            _this.toastr.error(error, 'Error!');
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.cmp.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        this.API_ENDPOINT = "http://70.35.198.86/GTIKITappLayer/";
    }
    HomeService.prototype.GetAllEvents = function () {
        return this.http.get(this.API_ENDPOINT + 'GTEvent')
            .map(function (response) { return response.json(); });
    };
    HomeService.prototype.GetSearchEvents = function (category, place, date) {
        if (category != '') {
            return this.http.get(this.API_ENDPOINT + 'GTIKIT/GTCustomer/SearchResult/' + category)
                .map(function (response) { return response.json(); });
        }
        else if (place != '') {
            return this.http.get(this.API_ENDPOINT + 'GTIKIT/GTCustomer/SearchResult/' + place)
                .map(function (response) { return response.json(); });
        }
        else if (date != '') {
            return this.http.get(this.API_ENDPOINT + 'GTIKIT/GTCustomer/SearchResult/' + date)
                .map(function (response) { return response.json(); });
        }
        else {
            this.GetAllEvents();
        }
    };
    HomeService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json());
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map