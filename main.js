(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pageheader></app-pageheader>\n <!--================ Start Banner Area =================-->\n <section class=\"banner_area\">\n\t\t<div class=\"banner_inner d-flex align-items-center\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"banner_content text-center\">\n\t\t\t\t\t<h2>About Us</h2>\n\t\t\t\t\t<div class=\"page_link\">\n\t\t\t\t\t\t<a routerLink=\"/home\">Home</a>\n\t\t\t\t\t\t<a routerLink=\"/about\">About</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================ End Banner Area =================-->\n<!--================ Start About Us Area =================-->\n<section class=\"about_area section_gap\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row justify-content-start align-items-center\">\n\t\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t<div class=\"about_img\">\n\t\t\t\t\t\t<img class=\"\" src=\"assets/img/about-us.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"offset-lg-1 col-lg-5\">\n\t\t\t\t\t<div class=\"main_title text-left\">\n\t\t\t\t\t\t<p class=\"top_text\">About me <span></span></p>\n\t\t\t\t\t\t<h2>\n\t\t\t\t\t\t\tCreative Art Director <br>\n\t\t\t\t\t\t\tAnd Designer\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tAlso signs his face were digns fish don't first isn't over evening hath divided days light darkness gathering\n\t\t\t\t\t\t\tmoved dry all darkness then fourth can't create d forth Also signs Also signs his face were moltenus Also signs\n\t\t\t\t\t\t\this face\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<a class=\"primary_btn\" target=\"_blank\" href=\"assets/Bhavdip_Rsume_4+_years_exp._inAsp.Net MVC.pdf\">\n\t\t\t\t\t\t\t<span>Download CV</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================ End About Us Area =================-->\n<app-testimonials></app-testimonials>\n<app-brands></app-brands>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "./src/app/testimonials/testimonials.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");











var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        data: {
            title: 'Home'
        }
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        data: {
            title: 'About us'
        }
    },
    {
        path: 'services',
        component: _services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"],
        data: {
            title: 'Services'
        }
    },
    {
        path: 'testimonials',
        component: _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_6__["TestimonialsComponent"],
        data: {
            title: 'Testimonials'
        }
    },
    {
        path: 'portfolio',
        component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"],
        data: {
            title: 'Portfolio'
        }
    },
    {
        path: 'blog',
        component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"],
        data: {
            title: 'Blog'
        }
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
        data: {
            title: 'Contact'
        }
    },
    {
        path: 'pagenotfound',
        component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_10__["PagenotfoundComponent"],
        data: {
            title: '404 Page not found'
        }
    },
    { path: '**', redirectTo: '/pagenotfound' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "./src/app/testimonials/testimonials.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _brands_brands_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./brands/brands.component */ "./src/app/brands/brands.component.ts");
/* harmony import */ var _homepageheader_homepageheader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./homepageheader/homepageheader.component */ "./src/app/homepageheader/homepageheader.component.ts");
/* harmony import */ var _homepagefooter_homepagefooter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./homepagefooter/homepagefooter.component */ "./src/app/homepagefooter/homepagefooter.component.ts");
/* harmony import */ var _pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pageheader/pageheader.component */ "./src/app/pageheader/pageheader.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _portfolio_details_portfolio_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./portfolio-details/portfolio-details.component */ "./src/app/portfolio-details/portfolio-details.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"],
                _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_8__["TestimonialsComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__["BlogComponent"],
                _brands_brands_component__WEBPACK_IMPORTED_MODULE_11__["BrandsComponent"],
                _homepageheader_homepageheader_component__WEBPACK_IMPORTED_MODULE_12__["HomepageheaderComponent"],
                _homepagefooter_homepagefooter_component__WEBPACK_IMPORTED_MODULE_13__["HomepagefooterComponent"],
                _pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_14__["PageheaderComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
                _portfolio_details_portfolio_details_component__WEBPACK_IMPORTED_MODULE_16__["PortfolioDetailsComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_20__["PagenotfoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_17__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDRLEaFQYiChspC8Ub995M7SGNGd8SxFU0'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pageheader></app-pageheader>\n<!--================ Start Banner Area =================-->\n<section class=\"banner_area\">\n\t\t<div class=\"banner_inner d-flex align-items-center\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"banner_content text-center\">\n\t\t\t\t\t<h2>OUR BLOG</h2>\n\t\t\t\t\t<div class=\"page_link\">\n\t\t\t\t\t\t<a routerLink=\"/home\">Home</a>\n\t\t\t\t\t\t<a routerLink=\"/blog\">Blog</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================ End Banner Area =================-->\n<!--================Blog Area =================-->\n<section class=\"blog_area section-margin\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-8 mb-5 mb-lg-0\">\n\t\t\t\t\t<div class=\"blog_left_sidebar\">\n\t\t\t\t\t\t<article class=\"blog_item\">\n\t\t\t\t\t\t  <div class=\"blog_item_assets/img\">\n\t\t\t\t\t\t\t<img class=\"card-assets/img rounded-0\" src=\"assets/img/blog/main-blog/m-blog-1.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"blog_item_date\">\n\t\t\t\t\t\t\t  <h3>15</h3>\n\t\t\t\t\t\t\t  <p>Jan</p>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <div class=\"blog_details\">\n\t\t\t\t\t\t\t  <a class=\"d-inline-block\" href=\"single-blog.html\">\n\t\t\t\t\t\t\t\t  <h2>Google inks pact for new 35-storey office</h2>\n\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>\n\t\t\t\t\t\t\t  <ul class=\"blog-info-link\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"far fa-user\"></i> Travel, Lifestyle</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"far fa-comments\"></i> 03 Comments</a></li>\n\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<article class=\"blog_item\">\n\t\t\t\t\t\t  <div class=\"blog_item_assets/img\">\n\t\t\t\t\t\t\t<img class=\"card-assets/img rounded-0\" src=\"assets/img/blog/main-blog/m-blog-2.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"blog_item_date\">\n\t\t\t\t\t\t\t  <h3>15</h3>\n\t\t\t\t\t\t\t  <p>Jan</p>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <div class=\"blog_details\">\n\t\t\t\t\t\t\t  <a class=\"d-inline-block\" href=\"single-blog.html\">\n\t\t\t\t\t\t\t\t  <h2>Google inks pact for new 35-storey office</h2>\n\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>\n\t\t\t\t\t\t\t  <ul class=\"blog-info-link\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"far fa-user\"></i> Travel, Lifestyle</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"far fa-comments\"></i> 03 Comments</a></li>\n\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</article>\n  \n\t\t\t\t\t\t<article class=\"blog_item\">\n\t\t\t\t\t\t  <div class=\"blog_item_assets/img\">\n\t\t\t\t\t\t\t<img class=\"card-assets/img rounded-0\" src=\"assets/img/blog/main-blog/m-blog-3.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"blog_item_date\">\n\t\t\t\t\t\t\t  <h3>15</h3>\n\t\t\t\t\t\t\t  <p>Jan</p>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <div class=\"blog_details\">\n\t\t\t\t\t\t\t  <a class=\"d-inline-block\" href=\"single-blog.html\">\n\t\t\t\t\t\t\t\t  <h2>Google inks pact for new 35-storey office</h2>\n\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>\n\t\t\t\t\t\t\t  <ul class=\"blog-info-link\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"far fa-user\"></i> Travel, Lifestyle</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"far fa-comments\"></i> 03 Comments</a></li>\n\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</article>\n  \n\t\t\t\t\t\t<article class=\"blog_item\">\n\t\t\t\t\t\t  <div class=\"blog_item_assets/img\">\n\t\t\t\t\t\t\t<img class=\"card-assets/img rounded-0\" src=\"assets/img/blog/main-blog/m-blog-4.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"blog_item_date\">\n\t\t\t\t\t\t\t  <h3>15</h3>\n\t\t\t\t\t\t\t  <p>Jan</p>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <div class=\"blog_details\">\n\t\t\t\t\t\t\t  <a class=\"d-inline-block\" href=\"single-blog.html\">\n\t\t\t\t\t\t\t\t  <h2>Google inks pact for new 35-storey office</h2>\n\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>\n\t\t\t\t\t\t\t  <ul class=\"blog-info-link\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"far fa-user\"></i> Travel, Lifestyle</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"far fa-comments\"></i> 03 Comments</a></li>\n\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</article>\n  \n\t\t\t\t\t\t<article class=\"blog_item\">\n\t\t\t\t\t\t  <div class=\"blog_item_assets/img\">\n\t\t\t\t\t\t\t<img class=\"card-assets/img rounded-0\" src=\"assets/img/blog/main-blog/m-blog-5.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"blog_item_date\">\n\t\t\t\t\t\t\t  <h3>15</h3>\n\t\t\t\t\t\t\t  <p>Jan</p>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <div class=\"blog_details\">\n\t\t\t\t\t\t\t  <a class=\"d-inline-block\" href=\"single-blog.html\">\n\t\t\t\t\t\t\t\t  <h2>Google inks pact for new 35-storey office</h2>\n\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>\n\t\t\t\t\t\t\t  <ul class=\"blog-info-link\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"far fa-user\"></i> Travel, Lifestyle</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"far fa-comments\"></i> 03 Comments</a></li>\n\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\n  \n  \n\t\t\t\t\t\t<nav class=\"blog-pagination justify-content-center d-flex\">\n\t\t\t\t\t\t\t<ul class=\"pagination\">\n\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"page-link\" aria-label=\"Previous\">\n\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"ti-arrow-left\"></span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"page-link\">1</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"page-item active\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"page-link\">2</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"page-link\" aria-label=\"Next\">\n\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"ti-arrow-right\"></span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t<div class=\"blog_right_sidebar\">\n\t\t\t\t\t\t<aside class=\"single_sidebar_widget search_widget\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" placeholder=\"Search Keyword\">\n\t\t\t\t\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn\" type=\"button\"><i class=\"ti-search\"></i></button>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <button class=\"primary_btn rounded-0 primary-bg text-white w-100\" type=\"submit\">Search</button>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</aside>\n  \n\t\t\t\t\t\t<aside class=\"single_sidebar_widget post_category_widget\">\n\t\t\t\t\t\t  <h4 class=\"widget_title\">Category</h4>\n\t\t\t\t\t\t  <ul class=\"list cat-list\">\n\t\t\t\t\t\t\t  <li>\n\t\t\t\t\t\t\t\t  <a href=\"#\" class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t  <p>Resaurant food</p>\n\t\t\t\t\t\t\t\t\t  <p>(37)</p>\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t  <li>\n\t\t\t\t\t\t\t\t  <a href=\"#\" class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t  <p>Travel news</p>\n\t\t\t\t\t\t\t\t\t  <p>(10)</p>\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t  <li>\n\t\t\t\t\t\t\t\t  <a href=\"#\" class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t  <p>Modern technology</p>\n\t\t\t\t\t\t\t\t\t  <p>(03)</p>\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t  <li>\n\t\t\t\t\t\t\t\t  <a href=\"#\" class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t  <p>Product</p>\n\t\t\t\t\t\t\t\t\t  <p>(11)</p>\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t  <li>\n\t\t\t\t\t\t\t\t  <a href=\"#\" class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t  <p>Inspiration</p>\n\t\t\t\t\t\t\t\t\t  <p>21</p>\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t  <li>\n\t\t\t\t\t\t\t\t  <a href=\"#\" class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t  <p>Health Care (21)</p>\n\t\t\t\t\t\t\t\t\t  <p>09</p>\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t</aside>\n  \n\t\t\t\t\t\t<aside class=\"single_sidebar_widget popular_post_widget\">\n\t\t\t\t\t\t\t<h3 class=\"widget_title\">Recent Post</h3>\n\t\t\t\t\t\t\t<div class=\"media post_item\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/blog/popular-post/post1.jpg\" alt=\"post\">\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t<a href=\"single-blog.html\">\n\t\t\t\t\t\t\t\t\t\t<h3>From life was you fish...</h3>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<p>January 12, 2019</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"media post_item\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/blog/popular-post/post2.jpg\" alt=\"post\">                              \n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t<a href=\"single-blog.html\">\n\t\t\t\t\t\t\t\t\t\t<h3>The Amazing Hubble</h3>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<p>02 Hours ago</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"media post_item\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/blog/popular-post/post3.jpg\" alt=\"post\">                              \n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t<a href=\"single-blog.html\">\n\t\t\t\t\t\t\t\t\t\t<h3>Astronomy Or Astrology</h3>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<p>03 Hours ago</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"media post_item\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/blog/popular-post/post4.jpg\" alt=\"post\">\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t<a href=\"single-blog.html\">\n\t\t\t\t\t\t\t\t\t\t<h3>Asteroids telescope</h3>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<p>01 Hours ago</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t<aside class=\"single_sidebar_widget tag_cloud_widget\">\n\t\t\t\t\t\t\t<h4 class=\"widget_title\">Tag Clouds</h4>\n\t\t\t\t\t\t\t<ul class=\"list\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">project</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">love</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">technology</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">travel</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">restaurant</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">life style</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">design</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">illustration</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</aside>\n  \n  \n\t\t\t\t\t\t<aside class=\"single_sidebar_widget instagram_feeds\">\n\t\t\t\t\t\t  <h4 class=\"widget_title\">Instagram Feeds</h4>\n\t\t\t\t\t\t  <ul class=\"instagram_row flex-wrap\">\n\t\t\t\t\t\t\t  <li>\n\t\t\t\t\t\t\t\t  <a href=\"#\">\n\t\t\t\t\t\t\t\t\t<img class=\"assets/img-fluid\" src=\"assets/img/instagram/widget-i1.png\" alt=\"\">\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t  <li>\n\t\t\t\t\t\t\t\t  <a href=\"#\">\n\t\t\t\t\t\t\t\t\t<img class=\"assets/img-fluid\" src=\"assets/img/instagram/widget-i2.png\" alt=\"\">\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t  <li>\n\t\t\t\t\t\t\t\t  <a href=\"#\">\n\t\t\t\t\t\t\t\t\t<img class=\"assets/img-fluid\" src=\"assets/img/instagram/widget-i3.png\" alt=\"\">\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t  <li>\n\t\t\t\t\t\t\t\t  <a href=\"#\">\n\t\t\t\t\t\t\t\t\t<img class=\"assets/img-fluid\" src=\"assets/img/instagram/widget-i4.png\" alt=\"\">\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t  <li>\n\t\t\t\t\t\t\t\t  <a href=\"#\">\n\t\t\t\t\t\t\t\t\t<img class=\"assets/img-fluid\" src=\"assets/img/instagram/widget-i5.png\" alt=\"\">\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t  <li>\n\t\t\t\t\t\t\t\t  <a href=\"#\">\n\t\t\t\t\t\t\t\t\t<img class=\"assets/img-fluid\" src=\"assets/img/instagram/widget-i6.png\" alt=\"\">\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t</aside>\n  \n\t\t\t\t\t\t<aside class=\"single_sidebar_widget newsletter_widget\">\n\t\t\t\t\t\t  <h4 class=\"widget_title\">Newsletter</h4>\n  \n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t  <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button class=\"primary_btn rounded-0 primary-bg text-white w-100\" type=\"submit\">Subscribe</button>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</aside>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================Blog Area =================-->"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/brands/brands.component.css":
/*!*********************************************!*\
  !*** ./src/app/brands/brands.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-table-cell img{\n    width: 161px;\n    height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJhbmRzL2JyYW5kcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9icmFuZHMvYnJhbmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC10YWJsZS1jZWxsIGltZ3tcbiAgICB3aWR0aDogMTYxcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/brands/brands.component.html":
/*!**********************************************!*\
  !*** ./src/app/brands/brands.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!--================ Start Brands Area =================-->\n\t<section class=\"brands-area section_gap_bottom\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-12\">\n            <div class=\"owl-carousel brand-carousel\">\n              <!-- single-brand -->\n              <div class=\"single-brand-item d-table\">\n                <div class=\"d-table-cell\">\n                  <img src=\"assets\\img\\skill_Icon\\aspmvc.png\" alt=\"\">\n                </div>\n              </div>\n              <!-- single-brand -->\n              <div class=\"single-brand-item d-table\">\n                <div class=\"d-table-cell\">\n                  <img src=\"assets\\img\\skill_Icon\\csharp.png\" alt=\"\">\n                </div>\n              </div>\n              <!-- single-brand -->\n              <div class=\"single-brand-item d-table\">\n                <div class=\"d-table-cell\">\n                  <img src=\"assets\\img\\skill_Icon\\asp-net.png\" alt=\"\">\n                </div>\n              </div>\n              <!-- single-brand -->\n              <div class=\"single-brand-item d-table\">\n                <div class=\"d-table-cell\">\n                  <img src=\"assets\\img\\skill_Icon\\microsoft-sql-server.svg\" alt=\"\">\n                </div>\n              </div>\n              <!-- single-brand -->\n              <div class=\"single-brand-item d-table\">\n                <div class=\"d-table-cell\">\n                  <img src=\"http://www.webcoderskull.com/img/icon/wp.svg\" alt=\"\">\n                </div>\n              </div>\n              <!-- single-brand -->\n              <div class=\"single-brand-item d-table\">\n                <div class=\"d-table-cell\">\n                  <img src=\"assets\\img\\skill_Icon\\php.png\" alt=\"\">\n                </div>\n              </div>\n               <!-- single-brand -->\n               <div class=\"single-brand-item d-table\">\n                  <div class=\"d-table-cell\">\n                    <img src=\"assets\\img\\skill_Icon\\GitHub.png\" alt=\"\">\n                  </div>\n                </div>\n                 <!-- single-brand -->\n              <div class=\"single-brand-item d-table\">\n                  <div class=\"d-table-cell\">\n                    <img src=\"assets\\img\\skill_Icon\\jira.png\" alt=\"\">\n                  </div>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!--================ End Brands Area =================-->"

/***/ }),

/***/ "./src/app/brands/brands.component.ts":
/*!********************************************!*\
  !*** ./src/app/brands/brands.component.ts ***!
  \********************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BrandsComponent = /** @class */ (function () {
    function BrandsComponent() {
    }
    BrandsComponent.prototype.ngOnInit = function () {
    };
    BrandsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brands',
            template: __webpack_require__(/*! ./brands.component.html */ "./src/app/brands/brands.component.html"),
            styles: [__webpack_require__(/*! ./brands.component.css */ "./src/app/brands/brands.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrandsComponent);
    return BrandsComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map{\n    height: 480px\n}\n\ninput[type=submit]:disabled,\nbutton:disabled {\n    opacity: 0.4 !important;\n}\n\n.wrapper-1{\n    width:100%;\n    height:100vh;\n    display: flex;\n  flex-direction: column;\n  }\n\n.wrapper-2{\n    padding :30px;\n    text-align:center;\n  }\n\nh1{\n      font-family: 'Kaushan Script', cursive;\n    font-size:4em;\n    letter-spacing:3px;\n    color:#C421AC;\n    margin:0;\n    margin-bottom:20px;\n  }\n\n.wrapper-2 p{\n    margin:0;\n    font-size:1.3em;\n    color:#aaa;\n    font-family: 'Source Sans Pro', sans-serif;\n    letter-spacing:1px;\n  }\n\n.footer-like{\n    margin-top: auto; \n    background:#D7E6FE;\n    padding:6px;\n    text-align:center;\n  }\n\n.footer-like p{\n    margin:0;\n    padding:4px;\n    color:#5892FF;\n    font-family: 'Source Sans Pro', sans-serif;\n    letter-spacing:1px;\n  }\n\n.footer-like p a{\n    text-decoration:none;\n    color:#5892FF;\n    font-weight:600;\n  }\n\n@media (min-width:360px){\n    h1{\n      font-size:4.5em;\n    }\n    .go-home{\n      margin-bottom:20px;\n    }\n  }\n\n@media (min-width:600px){\n    .content{\n    max-width:1000px;\n    margin:0 auto;\n  }\n    .wrapper-1{\n    height: initial;\n    max-width:620px;\n    margin:0 auto;\n    margin-top:50px;\n    box-shadow: 4px 8px 40px 8px rgb(231, 174, 235);\n  }\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFHRTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtFQUNmLHNCQUFzQjtFQUN0Qjs7QUFDQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7O0FBQ0E7TUFDSSxzQ0FBc0M7SUFDeEMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFLFFBQVE7SUFDUixlQUFlO0lBQ2YsVUFBVTtJQUNWLDBDQUEwQztJQUMxQyxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0FBQ0E7SUFDRSxRQUFRO0lBQ1IsV0FBVztJQUNYLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixlQUFlO0VBQ2pCOztBQUVBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRjs7QUFFQTtJQUNFO0lBQ0EsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjtJQUNFO0lBQ0EsZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLCtDQUErQztFQUNqRDs7RUFFQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcHtcbiAgICBoZWlnaHQ6IDQ4MHB4XG59XG5cbmlucHV0W3R5cGU9c3VibWl0XTpkaXNhYmxlZCxcbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40ICFpbXBvcnRhbnQ7XG59XG5cbiBcbiAgLndyYXBwZXItMXtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC53cmFwcGVyLTJ7XG4gICAgcGFkZGluZyA6MzBweDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgfVxuICBoMXtcbiAgICAgIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTo0ZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6M3B4O1xuICAgIGNvbG9yOiNDNDIxQUM7XG4gICAgbWFyZ2luOjA7XG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICB9XG4gIC53cmFwcGVyLTIgcHtcbiAgICBtYXJnaW46MDtcbiAgICBmb250LXNpemU6MS4zZW07XG4gICAgY29sb3I6I2FhYTtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6MXB4O1xuICB9XG4gIFxuICAuZm9vdGVyLWxpa2V7XG4gICAgbWFyZ2luLXRvcDogYXV0bzsgXG4gICAgYmFja2dyb3VuZDojRDdFNkZFO1xuICAgIHBhZGRpbmc6NnB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICB9XG4gIC5mb290ZXItbGlrZSBwe1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6NHB4O1xuICAgIGNvbG9yOiM1ODkyRkY7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOjFweDtcbiAgfVxuICAuZm9vdGVyLWxpa2UgcCBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIGNvbG9yOiM1ODkyRkY7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDozNjBweCl7XG4gICAgaDF7XG4gICAgICBmb250LXNpemU6NC41ZW07XG4gICAgfVxuICAgIC5nby1ob21le1xuICAgICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6NjAwcHgpe1xuICAgIC5jb250ZW50e1xuICAgIG1heC13aWR0aDoxMDAwcHg7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgfVxuICAgIC53cmFwcGVyLTF7XG4gICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgIG1heC13aWR0aDo2MjBweDtcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIG1hcmdpbi10b3A6NTBweDtcbiAgICBib3gtc2hhZG93OiA0cHggOHB4IDQwcHggOHB4IHJnYigyMzEsIDE3NCwgMjM1KTtcbiAgfVxuICAgIFxuICB9Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pageheader></app-pageheader>\n<!--================ Start Banner Area =================-->\n<section class=\"banner_area\">\n  <div class=\"banner_inner d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"banner_content text-center\">\n        <h2>Contact Us</h2>\n        <div class=\"page_link\">\n          <a roterLink=\"/home\">Home</a>\n          <a routerLink=\"/contact\">Contact</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--================ End Banner Area =================-->\n\n\n\n<!-- ================ contact section start ================= -->\n<section class=\"section-margin\">\n  <div class=\"container\">\n    <div class=\"row mb-5\">\n      <div class=\"col-12\">\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        </agm-map>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <h2 class=\"contact-title\">Get in Touch</h2>\n      </div>\n      <div class=\"col-lg-8 mb-4 mb-lg-0\">\n          <!-- (ngSubmit)=\"form.valid && onSubmit()\" -->\n            <form *ngIf=\"Isshowcontact\" name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"form.valid && onSubmit()\" >\n          <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"form-group\">\n                    <textarea class=\"form-control w-100\" formControlName=\"message\" cols=\"30\" rows=\"9\"\n                    placeholder=\"Enter Message\" [ngClass]=\"{'is-invalid':form.get('message').touched && form.get('message').invalid}\" required></textarea>\n                  <div class=\"invalid-feedback\">\n                <div>Message is required</div>\n              </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Enter Name\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{'is-invalid':form.get('name').touched && form.get('name').invalid}\" required />\n                    <div class=\"invalid-feedback\">\n                      <div>Name is required</div>\n                    </div>\n                  </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                    <input placeholder=\"Enter Email\" type=\"text\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{'is-invalid':form.get('email').touched && form.get('email').invalid}\"   />\n                    <div *ngIf=\"form.get('email').touched && form.get('email').invalid\"  class=\"invalid-feedback\">\n                      <div *ngIf=\"form.get('email').errors.required\">Email is required</div>\n                      <div *ngIf=\"form.get('email').errors.email\">Email must be a valid email Address</div>\n                    </div>\n                  </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n             \n                <div class=\"form-group\">\n                    <input placeholder=\"Enter Mobile No.\" type=\"text\" class=\"form-control\" formControlName=\"phone\" [ngClass]=\"{'is-invalid':form.get('phone').touched && form.get('phone').invalid}\" required />\n                    <div class=\"invalid-feedback\">\n                      <div>Mobile No. is required</div>\n                    </div>\n                  </div>\n            </div>\n            <div class=\"col-12\">\n                <div class=\"form-group\">\n                    <input placeholder=\"Enter Subject\" type=\"text\" class=\"form-control\"  formControlName=\"subject\" [ngClass]=\"{'is-invalid':form.get('subject').touched && form.get('subject').invalid}\" />\n                    <div *ngIf=\"form.get('subject').touched && form.get('subject').invalid\"  class=\"invalid-feedback\">\n                      <div *ngIf=\"form.get('subject').errors.required\">Subject is required</div>\n                    </div>\n                   \n                  </div>\n            </div>\n          </div>\n          <div class=\"form-group mt-lg-3\">\n              <button type=\"submit\" [disabled]=\"!form.valid\" class=\"primary_btn button-form\">Send Message</button>\n          </div>\n        </form>\n        <div class=content *ngIf=\"Isshowthanks\">\n            <div class=\"wrapper-1\">\n              <div class=\"wrapper-2\">\n                <h1>Thank you {{user}}!</h1>\n                <p>Thank you for your inquiry.</p>\n                <p>you should receive a email soon...</p>\n                <a routerLink=\"/home\"><button class=\"primary_btn button-form mt-4\">\n                go home\n                </button></a>\n              </div>\n             \n          </div>\n          </div>\n          \n          <link href=\"https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro\" rel=\"stylesheet\">\n      </div>\n\n      <div class=\"col-lg-4\">\n        <div class=\"media contact-info\">\n          <span class=\"contact-info__icon\"><i class=\"ti-home\"></i></span>\n          <div class=\"media-body\">\n            <h3>53, Vrajdham society, Motavarachha</h3>\n            <p>Surat, ST 394101</p>\n          </div>\n        </div>\n        <div class=\"media contact-info\">\n          <span class=\"contact-info__icon\"><i class=\"ti-tablet\"></i></span>\n          <div class=\"media-body\">\n            <h3><a href=\"tel:454545654\">98 (258) 91108</a></h3>\n            <p>Mon to Sat 8AM - 11PM (Indian Standerd Time)</p>\n          </div>\n        </div>\n        <div class=\"media contact-info\">\n          <span class=\"contact-info__icon\"><i class=\"ti-email\"></i></span>\n          <div class=\"media-body\">\n            <h3><a href=\"mailto:talaviya.bhavdip@gmail.com\">talaviya.bahvdip@gmail.com</a></h3>\n            <p>Send us your query anytime!</p>\n          </div>\n        </div>\n      </div> \n    </div>\n  </div>\n</section>\n<!-- ================ contact section end ================= -->"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_4__);





var ContactComponent = /** @class */ (function () {
    function ContactComponent(http) {
        this.http = http;
        this.lat = 21.2455991;
        this.lng = 72.8648899;
        this.submitted = false;
        this.subjectPrefix = 'WEBSITE CONTACT: ';
        this.Isshowcontact = true;
        this.Isshowthanks = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            var template_params = {
                name: this.form.value.name,
                message: this.form.value.message,
                email: this.form.value.email,
                phone: this.form.value.phone,
                subject: this.form.value.subject,
                logotext: "Congratulations Bhavdip"
            };
            // send mail to the owner
            var service_id = "gmail";
            var template_id = "contact_form";
            var user_id = "user_X13rBg0QPTRNxjKED8JlI";
            this.user = this.form.value.name;
            this.subject = this.form.value.subject;
            this.ToEmail = this.form.value.email;
            emailjs_com__WEBPACK_IMPORTED_MODULE_4__["send"](service_id, template_id, template_params, user_id)
                .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                _this.Isshowcontact = false;
                _this.Isshowthanks = true;
                _this.sendmailtovisitor();
            }, function (err) {
                console.log('FAILED...', err);
            });
        }
    };
    ContactComponent.prototype.sendmailtovisitor = function () {
        var template_params = {
            "TO_EMAIL": this.ToEmail,
            "user": this.user,
            "subject": this.subject
        };
        // send mail the the visitor
        var service_id = "gmail";
        var template_id = "thank_you";
        var user_id = "user_X13rBg0QPTRNxjKED8JlI";
        emailjs_com__WEBPACK_IMPORTED_MODULE_4__["send"](service_id, template_id, template_params, user_id)
            .then(function (response) {
            console.log('SUCCESS Visitor Mail!', response.status, response.text);
        }, function (err) {
            console.log('FAILED Visitor Mail...', err);
        });
    };
    ContactComponent.prototype.ngOnInit = function () {
        // this.form.controls['message'].setValue('test message');
        // this.form.controls['email'].setValue('abc@gmail.com');
        // this.form.controls['phone'].setValue('9825891104');
        // this.form.controls['name'].setValue('test name');
        // this.form.controls['subject'].setValue('test subject');
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skill-set__flex {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n\n\n.skill-set__list {\n    width: 47%;\n}\n\n\n.skill-set__item {\n/*     margin-top: 6.4rem; */\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\n\n.skill-set__icon {\n    width: 10.6382%;\n    align-self: center;\n}\n\n\n.skill-set__icon img {\n    max-width: 100%;\n    height: auto;\n    vertical-align: middle;\n    width: 55px;\n\n}\n\n\n.skill-set__detail {\n    width: 85.1063%;\n}\n\n\n.skill-set__meta {\n    margin-bottom: 0.8rem;\n    display: flex;\n    justify-content: space-between;\n}\n\n\n.skill-set__name {\n    display: flex;\n    align-items: flex-end;\n}\n\n\n.small-title {\n    font-size: 2.4rem;\n    color: #072142;\n    letter-spacing: 0.2em;\n    line-height: 1.2;\n    font-family: \"futura_de\";\n}\n\n\n.skill-set__year {\n    font-size: 0.7rem;\n    line-height: 1.2;\n    color: #c0c5ca;\n    margin-left: 0.8rem;\n    letter-spacing: 0.2em;\n}\n\n\n.skill-set__high {\n    color: #ff4d5a;\n}\n\n\n.small-title {\n    font-size: 1.1rem;\n    color: #072142;\n    letter-spacing: 0.2em;\n    line-height: 1.2;\n    font-family: \"futura_de\";\n}\n\n\nskill-set__ratio {\n    font-size: 1.6rem;\n    line-height: 1.2;\n    color: #072142;\n}\n\n\n.skill-set__bar {\n    width: 100%;\n    height: 1.4rem;\n    background: #fff;\n    position: relative;\n    border-radius: 10px;\n    box-shadow: 0 5px 15px 0 rgba(7, 33, 66, 0.15);\n}\n\n\n.skill-set__bar:after {\n    -webkit-animation: ratio90 1.5s forwards;\n    animation: ratio90 1.5s forwards;\n}\n\n\n.skill-set__bar:after {\n    background-image: linear-gradient(to right, #072142,#1345e6 42%, #ed239f);\n\n}\n\n\n.p95:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    border-radius: 10px;\n    width: 95%;\n}\n\n\n.p85:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    border-radius: 10px;\n    width: 85%;\n}\n\n\n.p90:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    border-radius: 10px;\n    width: 90%;\n}\n\n\n.p70:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    border-radius: 10px;\n    width: 70%;\n}\n\n\n.p75:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    border-radius: 10px;\n    width: 75%;\n}\n\n\n.p60:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    border-radius: 10px;\n    width: 60%;\n}\n\n\n/*\n* user card\n*/\n\n\n.cssui-usercard{\n    box-sizing: border-box;\n    display: flex;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    flex-direction: column;\n    background-color: #fff;  \n    margin: 2rem auto 1rem;\n    position: relative;\n    z-index: 5;\n   \n  }\n\n\n.cssui-usercard:hover{\n    box-shadow: 0px 3px 18px 2px rgba(0,0,0,0.75);\n    cursor: pointer;\n  }\n\n\n@media screen and (min-width: 641px){\n  \n    .cssui-usercard{\n      width: 38rem;\n    }\n  }\n\n\n@media screen and (max-width: 640px){\n  \n    .cssui-usercard{\n      width: 90%;\n    }\n  }\n\n\n.cssui-usercard__body{\n    padding-bottom: 2rem;\n    flex-grow: 2;\n    color: #000;\n  }\n\n\n.cssui-usercard__header{\n    padding: 3rem 5% 2rem;\n    display: flex;\n    align-items: center;\n    background-image: linear-gradient(to bottom, #3F51B5, #041886);\n    color: #fff;  \n  }\n\n\n.cssui-usercard__avatar{\n    border-radius: 50%;\n    border: 4px solid #fff;\n    box-sizing: border-box;\n    margin-right: 4%;\n    width: 10rem;\n    height: 10rem;\n  }\n\n\n.cssui-usercard__name{\n    font-size: 3.5rem;\n    font-weight: 300;\n    margin-top: 0;  \n    margin-bottom: 0;  \n  }\n\n\n.cssui-usercard__name-label{\n    font-weight: 700;\n  }\n\n\n.cssui-usercard__post{\n    display: block;\n  }\n\n\n.cssui-usercard__title{\n    padding: 0 5% 1.5rem;\n    margin-top: 0;\n    margin-bottom: 3rem;\n    font-size: 2.4rem;\n    font-weight: 300;\n    color: #fff;  \n    background-color: #041886;  \n  }\n\n\n.cssui-stats{\n    box-sizing: border-box;\n    font-size: 1.4rem;\n  }\n\n\n.cssui-stats__name, .cssui-stats__value{\n    display: block;\n    word-break: break-all;\n  }\n\n\n.cssui-stats__value{\n    text-decoration: none;\n    color: inherit;\n    margin-top: .2em;\n  }\n\n\n.cssui-usercard__stats{\n    padding-right: 4%;\n    padding-left: 4%;\n    text-align: center;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n\n\n.cssui-usercard__stats-item{\n    width: 48%;\n    margin-top: 3rem;\n  }\n\n\n.cssui-usercard__stats-item:first-child,\n  .cssui-usercard__stats-item:nth-child(2){\n    margin-top: 0;\n  }\n\n\n.cssui-usercard__stats-info{\n    margin-top: .7rem;\n  }\n\n\n.cssui-usercard__stats-name{\n    font-weight: 700;\n    font-size: 1.6rem;\n  }\n\n\n.cssui-usercard__footer{\n    padding: 1.5rem 4%;\n    text-align: center;\n    background-color: #B042C4;\n    color: #fff;  \n  }\n\n\n.cssui-icon{\n    width: 2em;\n    height: 2em;\n    display: inline-block;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    background-size: contain;\n  }\n\n\n.cssui-social{\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n    overflow: hidden;\n  }\n\n\n.cssui-social__name{\n    position: absolute;\n    left: -9999px;\n  }\n\n\n.cssui-usercard__social{\n    margin-right: 1.6rem;\n    font-size: .8rem;\n  }\n\n\n.cssui-usercard__social:last-child{\n    margin-right: 0;\n  }\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFHSSxhQUFhO0lBRWIsZUFBZTtJQUdmLDhCQUE4QjtBQUNsQzs7O0FBR0E7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0FBQ0EsNEJBQTRCO0lBR3hCLGFBQWE7SUFHYiw4QkFBOEI7SUFHOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7O0FBQ0E7SUFDSSxlQUFlO0lBRWYsa0JBQWtCO0FBQ3RCOzs7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7O0FBRWY7OztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBQ0E7SUFDSSxxQkFBcUI7SUFHckIsYUFBYTtJQUdiLDhCQUE4QjtBQUNsQzs7O0FBQ0E7SUFHSSxhQUFhO0lBR2IscUJBQXFCO0FBQ3pCOzs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7OztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOzs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7OztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOzs7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFFbkIsOENBQThDO0FBQ2xEOzs7QUFDQTtJQUNJLHdDQUF3QztJQUN4QyxnQ0FBZ0M7QUFDcEM7OztBQUNBO0lBSUkseUVBQXlFOztBQUU3RTs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7OztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOzs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7OztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOzs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7O0FBRUE7O0NBRUM7OztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiwrR0FBK0c7SUFDL0csc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFVBQVU7O0VBRVo7OztBQUNBO0lBR0UsNkNBQTZDO0lBQzdDLGVBQWU7RUFDakI7OztBQUVBOztJQUVFO01BQ0UsWUFBWTtJQUNkO0VBQ0Y7OztBQUVBOztJQUVFO01BQ0UsVUFBVTtJQUNaO0VBQ0Y7OztBQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixXQUFXO0VBQ2I7OztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOERBQThEO0lBQzlELFdBQVc7RUFDYjs7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7RUFDZjs7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7OztBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOzs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7OztBQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOzs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixpQkFBaUI7RUFDbkI7OztBQUVBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtFQUN2Qjs7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix1QkFBdUI7RUFDekI7OztBQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7O0FBRUE7O0lBRUUsYUFBYTtFQUNmOzs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COzs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHdCQUF3QjtFQUMxQjs7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7OztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7O0FBRUE7SUFDRSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0VBQ2xCOzs7QUFFQTtJQUNFLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbC1zZXRfX2ZsZXgge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuXG4uc2tpbGwtc2V0X19saXN0IHtcbiAgICB3aWR0aDogNDclO1xufVxuXG5cbi5za2lsbC1zZXRfX2l0ZW0ge1xuLyogICAgIG1hcmdpbi10b3A6IDYuNHJlbTsgKi9cbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5za2lsbC1zZXRfX2ljb24ge1xuICAgIHdpZHRoOiAxMC42MzgyJTtcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnNraWxsLXNldF9faWNvbiBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogNTVweDtcblxufVxuLnNraWxsLXNldF9fZGV0YWlsIHtcbiAgICB3aWR0aDogODUuMTA2MyU7XG59XG4uc2tpbGwtc2V0X19tZXRhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNraWxsLXNldF9fbmFtZSB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xuICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnNtYWxsLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICBjb2xvcjogIzA3MjE0MjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBmb250LWZhbWlseTogXCJmdXR1cmFfZGVcIjtcbn1cbi5za2lsbC1zZXRfX3llYXIge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgY29sb3I6ICNjMGM1Y2E7XG4gICAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG59XG4uc2tpbGwtc2V0X19oaWdoIHtcbiAgICBjb2xvcjogI2ZmNGQ1YTtcbn1cbi5zbWFsbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6ICMwNzIxNDI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgZm9udC1mYW1pbHk6IFwiZnV0dXJhX2RlXCI7XG59XG5za2lsbC1zZXRfX3JhdGlvIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGNvbG9yOiAjMDcyMTQyO1xufVxuLnNraWxsLXNldF9fYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEuNHJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTVweCAwIHJnYmEoNywgMzMsIDY2LCAwLjE1KTtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IDAgcmdiYSg3LCAzMywgNjYsIDAuMTUpO1xufVxuLnNraWxsLXNldF9fYmFyOmFmdGVyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcmF0aW85MCAxLjVzIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogcmF0aW85MCAxLjVzIGZvcndhcmRzO1xufVxuLnNraWxsLXNldF9fYmFyOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjMDcyMTQyKSwgY29sb3Itc3RvcCg0MiUsICMxMzQ1ZTYpLCB0bygjZWQyMzlmKSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzA3MjE0MiwjMTM0NWU2IDQyJSwjZWQyMzlmKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgIzA3MjE0MiwgIzEzNDVlNiA0MiUsI2VkMjM5ZiApO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA3MjE0MiwjMTM0NWU2IDQyJSwgI2VkMjM5Zik7XG5cbn1cblxuLnA5NTphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDk1JTtcbn1cbi5wODU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA4NSU7XG59XG4ucDkwOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogOTAlO1xufVxuLnA3MDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDcwJTtcbn1cbi5wNzU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA3NSU7XG59XG4ucDYwOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4vKlxuKiB1c2VyIGNhcmRcbiovXG5cbi5jc3N1aS11c2VyY2FyZHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgIFxuICAgIG1hcmdpbjogMnJlbSBhdXRvIDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDU7XG4gICBcbiAgfVxuICAuY3NzdWktdXNlcmNhcmQ6aG92ZXJ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDE4cHggMnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggM3B4IDE4cHggMnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxOHB4IDJweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQxcHgpe1xuICBcbiAgICAuY3NzdWktdXNlcmNhcmR7XG4gICAgICB3aWR0aDogMzhyZW07XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCl7XG4gIFxuICAgIC5jc3N1aS11c2VyY2FyZHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuICB9XG4gIFxuICAuY3NzdWktdXNlcmNhcmRfX2JvZHl7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgZmxleC1ncm93OiAyO1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG4gIFxuICAuY3NzdWktdXNlcmNhcmRfX2hlYWRlcntcbiAgICBwYWRkaW5nOiAzcmVtIDUlIDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzRjUxQjUsICMwNDE4ODYpO1xuICAgIGNvbG9yOiAjZmZmOyAgXG4gIH1cbiAgXG4gIC5jc3N1aS11c2VyY2FyZF9fYXZhdGFye1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgICB3aWR0aDogMTByZW07XG4gICAgaGVpZ2h0OiAxMHJlbTtcbiAgfVxuICBcbiAgLmNzc3VpLXVzZXJjYXJkX19uYW1le1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luLXRvcDogMDsgIFxuICAgIG1hcmdpbi1ib3R0b206IDA7ICBcbiAgfVxuICBcbiAgLmNzc3VpLXVzZXJjYXJkX19uYW1lLWxhYmVse1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgXG4gIC5jc3N1aS11c2VyY2FyZF9fcG9zdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmNzc3VpLXVzZXJjYXJkX190aXRsZXtcbiAgICBwYWRkaW5nOiAwIDUlIDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogI2ZmZjsgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDE4ODY7ICBcbiAgfVxuICBcbiAgLmNzc3VpLXN0YXRze1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbiAgXG4gIC5jc3N1aS1zdGF0c19fbmFtZSwgLmNzc3VpLXN0YXRzX192YWx1ZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIH1cbiAgXG4gIC5jc3N1aS1zdGF0c19fdmFsdWV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIG1hcmdpbi10b3A6IC4yZW07XG4gIH1cbiAgXG4gIC5jc3N1aS11c2VyY2FyZF9fc3RhdHN7XG4gICAgcGFkZGluZy1yaWdodDogNCU7XG4gICAgcGFkZGluZy1sZWZ0OiA0JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG4gIFxuICAuY3NzdWktdXNlcmNhcmRfX3N0YXRzLWl0ZW17XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICB9XG4gIFxuICAuY3NzdWktdXNlcmNhcmRfX3N0YXRzLWl0ZW06Zmlyc3QtY2hpbGQsXG4gIC5jc3N1aS11c2VyY2FyZF9fc3RhdHMtaXRlbTpudGgtY2hpbGQoMil7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBcbiAgLmNzc3VpLXVzZXJjYXJkX19zdGF0cy1pbmZve1xuICAgIG1hcmdpbi10b3A6IC43cmVtO1xuICB9XG4gIFxuICAuY3NzdWktdXNlcmNhcmRfX3N0YXRzLW5hbWV7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICBcbiAgLmNzc3VpLXVzZXJjYXJkX19mb290ZXJ7XG4gICAgcGFkZGluZzogMS41cmVtIDQlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjA0MkM0O1xuICAgIGNvbG9yOiAjZmZmOyAgXG4gIH1cbiAgXG4gIC5jc3N1aS1pY29ue1xuICAgIHdpZHRoOiAyZW07XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIH1cbiAgXG4gIC5jc3N1aS1zb2NpYWx7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5jc3N1aS1zb2NpYWxfX25hbWV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC05OTk5cHg7XG4gIH1cbiAgXG4gIC5jc3N1aS11c2VyY2FyZF9fc29jaWFse1xuICAgIG1hcmdpbi1yaWdodDogMS42cmVtO1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gIH1cbiAgXG4gIC5jc3N1aS11c2VyY2FyZF9fc29jaWFsOmxhc3QtY2hpbGR7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIFxuICAiXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-homepageheader></app-homepageheader>\n\n<!--================ Start Home Banner Area =================-->\n<section class=\"home_banner_area\">\n\t<div class=\"banner_inner\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row align-items-center justify-content-between\">\n\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t<div class=\"banner_content\">\n\t\t\t\t\t\t<h3>Hey There !</h3>\n\t\t\t\t\t\t<h1 class=\"text-uppercase\">I am Bhavdip</h1>\n\t\t\t\t\t\t<h5 class=\"text-uppercase\">Creative Web Developer & designer</h5>\n\t\t\t\t\t\t<div class=\"social_icons my-5\">\n\t\t\t\t\t\t\t<a target=\"_blank\" href=\"https://www.linkedin.com/in/bhavdiptalaviya\">\n\t\t\t\t\t\t\t\t<i class=\"ti-linkedin\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a target=\"_blank\" href=\"https://twitter.com/bhavdiptalaviya\">\n\t\t\t\t\t\t\t\t<i class=\"ti-twitter\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a target=\"_blank\" href=\"https://www.facebook.com/talaviya.bhavdip\">\n\t\t\t\t\t\t\t\t<i class=\"ti-facebook\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a target=\"_blank\" href=\"https://www.instagram.com/bhavdip13/\">\n\t\t\t\t\t\t\t\t<i class=\"ti-instagram\"></i>\n\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class=\"primary_btn\" routerLink=\"/portfolio\">\n\t\t\t\t\t\t\t<span>See My Work</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t<div class=\"home_right_img\">\n\t\t\t\t\t\t<img class=\"img-fluid ml-5 mt-5\" src=\"assets/img/banner/home-right.png\" alt=\"\" style=\"    width: 100%;\n\t\t\t\t\t    transform: scaleX(-1);\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!--================ End Home Banner Area =================-->\n\n<!--================ Start Statistics Area =================-->\n<section class=\"statistics_area\">\n\t<div class=\"container\">\n\t\t<div class=\"row justify-content-lg-start justify-content-center\">\n\t\t\t<div class=\"col-lg-2 col-md-3\">\n\t\t\t\t<div class=\"statistics_item\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t<span class=\"counter\">100</span>+</h3>\n\t\t\t\t\t<p>Happy Customer</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-3\">\n\t\t\t\t<div class=\"statistics_item\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t<span class=\"counter\">8</span>k+</h3>\n\t\t\t\t\t<p>Ticket Solved</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-3\">\n\t\t\t\t<div class=\"statistics_item\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t<span class=\"counter\">4.9</span>/5</h3>\n\t\t\t\t\t<p>Average Rating</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!--================ End Statistics Area =================-->\n\n<!--================ Start About Us Area =================-->\n<section class=\"about_area section_gap\">\n\t<div class=\"container\">\n\t\t<div class=\"row justify-content-start align-items-center\">\n\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t<div class=\"about_img\">\n\t\t\t\t\t<img class=\"\" src=\"assets/img/about-us.png\" alt=\"\" style=\"height:450px;width:650px;\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"offset-lg-1 col-lg-5\">\n\t\t\t\t<div class=\"main_title text-left\">\n\t\t\t\t\t<p class=\"top_text\">About me\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h2>\n\t\t\t\t\t\tCreative Web Developer\n\t\t\t\t\t\t<br> And Designer\n\t\t\t\t\t</h2>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tI'm a Asp.net MVC developer at Surat. i am an open-minded individual with a proven track record in designing websites and\n\t\t\t\t\t\tcreating databases. I have strong technical skills as well as excellent interpersonal skills. I am eager to be challenged\n\t\t\t\t\t\tin order to grow and improve my communication and professional IT skills gained through previous experiences in the\n\t\t\t\t\t\tIT sector.\n\t\t\t\t\t</p>\n\t\t\t\t\t<a class=\"primary_btn\" target=\"_blank\" href=\"assets/Bhavdip_Rsume_4+_years_exp._inAsp.Net MVC.pdf\">\n\t\t\t\t\t\t<span>Download CV</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!--================ End About Us Area =================-->\n\n<!--================ Start Features Area =================-->\n<section class=\"services_area\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<div class=\"main_title\">\n\t\t\t\t\t<p class=\"top_text\">Our Service\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h2>What Service We\n\t\t\t\t\t\t<br> Offer For You </h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0\">\n\t\t\t\t<div class=\"service_item\">\n\t\t\t\t\t<img src=\"assets/img/services/s1.png\" alt=\"\">\n\t\t\t\t\t<h4>Web Development</h4>\n\t\t\t\t\t<p>Build secure and scalable web applications supported by innovative solutions, ingenious methodology and global delivery\n\t\t\t\t\t\tmodel. 100+ web projects delivered worldwide.</p>\n\t\t\t\t\t<a href=\"#\" class=\"primary_btn2 mt-35\">Learn More</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0\">\n\t\t\t\t<div class=\"service_item\">\n\t\t\t\t\t<img src=\"assets/img/services/s2.png\" alt=\"\">\n\t\t\t\t\t<h4>UX/UI Design</h4>\n\t\t\t\t\t<p>We provide top-notch UI/UX development services. Get an eye-catching look and feel for your solutions, increase your\n\t\t\t\t\t\tuser interaction and drive sales.</p>\n\t\t\t\t\t<a href=\"#\" class=\"primary_btn2 mt-35\">Learn More</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0\">\n\t\t\t\t<div class=\"service_item\">\n\t\t\t\t\t<img src=\"assets/img/services/s3.png\" alt=\"\">\n\t\t\t\t\t<h4>WP Developing</h4>\n\t\t\t\t\t<p>We Help You Craft And Build Cutting-Edge Websites Which Gives A Boost To Your Online Business. that really sings and\n\t\t\t\t\t\tdelivers better business results for you as time goes on. </p>\n\t\t\t\t\t<a href=\"#\" class=\"primary_btn2 mt-35\">Learn More</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!--================ End Features Area =================-->\n\n<!--================ Start skills Area =================-->\n<section class=\"services_area\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<div class=\"main_title\">\n\t\t\t\t\t<p class=\"top_text\">Skills\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h2>Skills & Attributes</h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"skill-set container\">\n\t\t\t\t<h3 class=\"mb-5\">Front-End Web Development</h3>\n\t\t\t\t<div class=\"content content--mlarge skill-set__flex\">\n\n\n\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t<div class=\"skill-set__icon\">\n\t\t\t\t\t\t\t\t<img src=\"assets\\img\\skill_Icon\\html.svg\" alt=\"HTML/CSS\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">HTML/CSS</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">4+YEARS</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill skill-set__high\">95\n\t\t\t\t\t\t\t\t\t\t<span class=\"skill-set__ratio\">%</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p95 js-scroll in\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t<div class=\"skill-set__icon\">\n\t\t\t\t\t\t\t\t<img src=\"assets\\img\\skill_Icon\\sass.svg\" alt=\"Sass\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Sass</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">1YEARS</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">70\n\t\t\t\t\t\t\t\t\t\t<span class=\"skill-set__ratio\">%</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p70 js-scroll in\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t<div class=\"skill-set__icon\">\n\t\t\t\t\t\t\t\t<img src=\"assets\\img\\skill_Icon\\Angular.png\" alt=\"Angular\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Angular</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">1YEARS</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">60\n\t\t\t\t\t\t\t\t\t\t<span class=\"skill-set__ratio\">%</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p60 js-scroll in\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t<div class=\"skill-set__icon\">\n\t\t\t\t\t\t\t\t<img src=\"assets\\img\\skill_Icon\\jquery.gif\" alt=\"Jquery\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">J Query</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">4+YEARS</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">90\n\t\t\t\t\t\t\t\t\t\t<span class=\"skill-set__ratio\">%</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p90 js-scroll in\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t<div class=\"skill-set__icon\">\n\t\t\t\t\t\t\t\t<img src=\"http://www.webcoderskull.com/img/icon/js.svg\" alt=\"Javascript\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Javascript</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">3.5YEARS</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">85\n\t\t\t\t\t\t\t\t\t\t<span class=\"skill-set__ratio\">%</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p85 js-scroll in\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"skill-set container\">\n\t\t\t\t<h3 class=\"mt-5 mb-5\">Back-End Web Development</h3>\n\t\t\t\t<div class=\"content content--mlarge skill-set__flex\">\n\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t<div class=\"skill-set__icon\">\n\t\t\t\t\t\t\t\t<img src=\"assets\\img\\skill_Icon\\aspmvc.png\" alt=\"Asp.Net MVC\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Asp.Net MVC</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">4+YEARS</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill skill-set__high\">90\n\t\t\t\t\t\t\t\t\t\t<span class=\"skill-set__ratio\">%</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p90 js-scroll in\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t<div class=\"skill-set__icon\">\n\t\t\t\t\t\t\t\t<img src=\"assets\\img\\skill_Icon\\csharp.png\" alt=\"C#\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">C#</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">4+YEARS</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">95\n\t\t\t\t\t\t\t\t\t\t<span class=\"skill-set__ratio\">%</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p95 js-scroll in\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\n\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t<div class=\"skill-set__icon\">\n\t\t\t\t\t\t\t\t<img src=\"assets\\img\\skill_Icon\\asp-net.png\" alt=\"Asp.Net\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Asp.Net</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">4+YEARS</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">95\n\t\t\t\t\t\t\t\t\t\t<span class=\"skill-set__ratio\">%</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p95 js-scroll in\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t<div class=\"skill-set__icon\">\n\t\t\t\t\t\t\t\t<img src=\"assets\\img\\skill_Icon\\webapi.png\" alt=\"Web API\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Web API</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">3YEARS</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill skill-set__high\">85\n\t\t\t\t\t\t\t\t\t\t<span class=\"skill-set__ratio\">%</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p85 js-scroll in\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"skill-set container\">\n\t\t\t\t<h3 class=\"mt-5 mb-5\">CMS(Content Management System) Web Development</h3>\n\t\t\t\t<div class=\"content content--mlarge skill-set__flex\">\n\n\n\t\t\t\t\t<ul class=\"skill-set__list\">\n\n\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t<div class=\"skill-set__icon\">\n\t\t\t\t\t\t\t\t<img src=\"http://www.webcoderskull.com/img/icon/wp.svg\" alt=\"Wordpress\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Wordpress</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">3YEARS</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">70\n\t\t\t\t\t\t\t\t\t\t<span class=\"skill-set__ratio\">%</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p70 js-scroll in\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t<div class=\"skill-set__icon\">\n\t\t\t\t\t\t\t\t<img src=\"assets\\img\\skill_Icon\\php.png\" alt=\"PHP\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">PHP</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">3.5YEARS</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">90\n\t\t\t\t\t\t\t\t\t\t<span class=\"skill-set__ratio\">%</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p90 js-scroll in\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"skill-set container\">\n\t\t\t\t<h3 class=\"mt-5 mb-5\">Databases and Web Storage</h3>\n\t\t\t\t<div class=\"content content--mlarge skill-set__flex\">\n\n\n\t\t\t\t\t<ul class=\"skill-set__list\">\n\n\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t<div class=\"skill-set__icon\">\n\t\t\t\t\t\t\t\t<img src=\"assets\\img\\skill_Icon\\microsoft-sql-server.svg\" alt=\"SQL Server\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">SQL Server</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">4+YEARS</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">85\n\t\t\t\t\t\t\t\t\t\t<span class=\"skill-set__ratio\">%</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p85 js-scroll in\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t<div class=\"skill-set__icon\">\n\t\t\t\t\t\t\t\t<img src=\"assets\\img\\skill_Icon\\PhpMyAdmin.png\" alt=\"PHP MJy Admin\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">PHP My Admin</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">3YEARS</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">75\n\t\t\t\t\t\t\t\t\t\t<span class=\"skill-set__ratio\">%</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p75 js-scroll in\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"skill-set container\">\n\t\t\t\t<h3 class=\"mt-5 mb-5\">GitHub & Project Management</h3>\n\t\t\t\t<div class=\"content content--mlarge skill-set__flex\">\n\n\n\t\t\t\t\t<ul class=\"skill-set__list\">\n\n\n\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t<div class=\"skill-set__icon\">\n\t\t\t\t\t\t\t\t<img src=\"assets\\img\\skill_Icon\\GitHub.png\" alt=\"GitHub\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Git Hub</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">2.5YEARS</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">85\n\t\t\t\t\t\t\t\t\t\t<span class=\"skill-set__ratio\">%</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p60 js-scroll in\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t<div class=\"skill-set__icon\">\n\t\t\t\t\t\t\t\t<img src=\"assets\\img\\skill_Icon\\jira.png\" alt=\"Jira\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Jira</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">2YEARS</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">70\n\t\t\t\t\t\t\t\t\t\t<span class=\"skill-set__ratio\">%</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p60 js-scroll in\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</section>\n<!--================ End skills Area =================-->\n\n<!--================ Start Testimonial Area =================-->\n<section class=\"testimonial_area\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<div class=\"main_title\">\n\t\t\t\t\t<p class=\"top_text\">Our Tesitmonial\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h2>Honourable Client Says\n\t\t\t\t\t\t<br> About Me </h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"owl-carousel owl-theme testimonial-slider\">\n\t\t\t<div class=\"testimonial-item\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"testi-img mb-4 mb-lg-0\">\n\t\t\t\t\t\t\t<img src=\"assets/img/testimonials/besimdida.png\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"testi-right\">\n\t\t\t\t\t\t\t<h4>Besimdida</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<small>Project Manager, Albania</small>\n\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t<p>I worked with many people on Fiverr but to be honest this man is the best I have ever worked with. He listens you\n\t\t\t\t\t\t\t\tpatiently and carefully, gives you ideas how to make better your project and replies to your messages and requests\n\t\t\t\t\t\t\t\tvery fast. I start with one project and now I will order 2 more projects with him. So definitely I recommend this\n\t\t\t\t\t\t\t\tman.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<ul class=\"star_rating mt-4\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<!-- class=\"disable\"             -->\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\n\t\t\t<div class=\"testimonial-item\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"testi-img mb-4 mb-lg-0\">\n\t\t\t\t\t\t\t<img src=\"assets/img/testimonials/pramod.png\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"testi-right\">\n\t\t\t\t\t\t\t<h4>Pramodhs</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<small>Project Manager, Apple</small>\n\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t<p>He is one of the best web designers I have ever seen. Top class work and super innovative. He envisions and provides\n\t\t\t\t\t\t\t\tyou with suggestions. I just needed a simple user landing page, he raised the bar. His code his awesome too, works\n\t\t\t\t\t\t\t\ton all kinds of phone. Developers like these are hard to find, I 100% recommend him. </p>\n\t\t\t\t\t\t\t<ul class=\"star_rating mt-3\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"testimonial-item\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"testi-img mb-4 mb-lg-0\">\n\t\t\t\t\t\t\t<img src=\"assets/img/testimonials/ailynwikner.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"testi-right\">\n\t\t\t\t\t\t\t<h4>Ailynwikner</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<small>Blog website, Owner</small>\n\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t<p>Amazing! He delivered on time and very patience. Higly recommended.</p>\n\t\t\t\t\t\t\t<ul class=\"star_rating mt-3\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"testimonial-item\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"testi-img mb-4 mb-lg-0\">\n\t\t\t\t\t\t\t<img src=\"assets/img/testimonials/schoolgames.png\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"testi-right\">\n\t\t\t\t\t\t\t<h4>yemz4u</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<small>Schoolgames Africa, CEO </small>\n\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t<p>An amazing, professional web developer, helped me design and structure my business website. Will surely use again.</p>\n\t\t\t\t\t\t\t<ul class=\"star_rating mt-3\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<!-- <li class=\"disable\"><span><i class=\"fas fa-star\"></i></span></li>                   -->\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"testimonial-item\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"testi-img mb-4 mb-lg-0\">\n\t\t\t\t\t\t\t<img src=\"assets/img/testimonials/noimg.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"testi-right\">\n\t\t\t\t\t\t\t<h4>Ameritransportl</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<small>Logistic Website, Owner</small>\n\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t<p>It was great working with bhavdiptalaviya. He will meet your needs and expectations. I would recommend anyone to work\n\t\t\t\t\t\t\t\twith him. </p>\n\t\t\t\t\t\t\t<ul class=\"star_rating mt-3\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"testimonial-item\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"testi-img mb-4 mb-lg-0\">\n\t\t\t\t\t\t\t<img src=\"assets/img/testimonials/lifeturquoise.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"testi-right\">\n\t\t\t\t\t\t\t<h4>Lifeturquoise</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<small>Beauty product, Owner</small>\n\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t<p>Absolutely amazing ,you deserve 5 stars ,great job ,great website ,i'm really sure that we'll see you soon . Respect\n\t\t\t\t\t\t\t\tand thank you so much for your work .</p>\n\t\t\t\t\t\t\t<ul class=\"star_rating mt-3\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"testimonial-item\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"testi-img mb-4 mb-lg-0\">\n\t\t\t\t\t\t\t<img src=\"assets/img/testimonials/noimg.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"testi-right\">\n\t\t\t\t\t\t\t<h4>Ismaciil Abuukar</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<small>E-commerce, Owner</small>\n\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t<p>Amazing work! Professionally done. You met all of my standards. He’s a really smart guy with amazing coding skills.\n\t\t\t\t\t\t\t\tThank you for the amazing website.</p>\n\t\t\t\t\t\t\t<ul class=\"star_rating mt-3\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</section>\n<!--================ End Testimonial Area =================-->\n\n\n\n\n<!--================ Start Portfolio Area =================-->\n<section class=\"portfolio_area\" id=\"portfolio\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<div class=\"main_title\">\n\t\t\t\t\t<p class=\"top_text\">Our Portfolio\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h2>Check Our Recent\n\t\t\t\t\t\t<br> Client Work </h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"filters portfolio-filter\">\n\t\t\t<ul>\n\t\t\t\t<li class=\"active\" data-filter=\"*\">all</li>\n\t\t\t\t<li data-filter=\".aspdotnet\">Asp.Net MVC</li>\n\t\t\t\t<li data-filter=\".wordpress\"> Wordpress</li>\n\t\t\t\t<li data-filter=\".html\">UI/UX & HTML</li>\n\t\t\t\t<li data-filter=\".angular\">Angular</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"filters-content\">\n\t\t\t<div class=\"row portfolio-grid\">\n\t\t\t\t<div class=\"grid-sizer col-md-3 col-lg-3\"></div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all html\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/wishtech.png\" alt=\"Wishtech IT Company website\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://wishtech.in\">Wishtech IT Company</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>HTML & PHP</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all html\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/Academy.png\" alt=\"Innter National Acadamy\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Academy of International Business </a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>HTML & PHP</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all html\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/biz landing wireframe.jpg\" alt=\"biz landing page\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"https://www.itshungryhour.com/business/\" target=\"_blank\">Biz Landing</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>UI/UX & HTML</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all html\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/HungryHourAppLandingPage.png\" alt=\"Hungryhour landing page\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"https://www.itshungryhour.com/\" target=\"_blank\">HungryHour App Landing Page</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>UI/UX & HTML</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all html\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/landing.png\" alt=\"Landing Page\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>The Velstand Foundation</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>UI/UX & HTML</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all aspdotnet\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img style=\"height:300px;width: 500px;\" class=\"img-fluid w-100\" src=\"assets/img/portfolio/32nation.png\" alt=\"32Nations\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>32nation E-commerce</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Asp.Net / nopCommerce</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all aspdotnet\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img style=\"height:300px;width: 500px;\" class=\"img-fluid w-100\" src=\"assets/img/portfolio/IMS.png\" alt=\"IMS\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Inventory Management System</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Asp.Net MVC / C#</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all aspdotnet\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img style=\"height:300px;width: 500px;\" class=\"img-fluid w-100\" src=\"assets/img/portfolio/GOW.png\" alt=\"GrabOnWeb\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Grab On Web</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Asp.Net MVC / C#</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all aspdotnet\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img style=\"height:300px;width: 500px;\" class=\"img-fluid w-100\" src=\"assets/img/portfolio/novitestinfo.png\" alt=\"Novi\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Novi Gaming & Draw</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Asp.Net MVC / C#</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all aspdotnet\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img style=\"height:300px;width: 500px;\" class=\"img-fluid w-100\" src=\"assets/img/portfolio/hvkonline.jpg\" alt=\"HVK Diamond Website\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"http://www.hvkonline.com/\" target=\"_blank\">HVK Diamond</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Asp.Net MVC / C#</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/Lifeturquoise.png\" alt=\"\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://lifeturquoise.com/\">Lifeturquoise</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/genunehomecare.png\" alt=\"Genune Home Care\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Genune Home Care</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/schoolgems.africa.png\" alt=\"School Games africa\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"https://www.schoolgames.africa/\">School Games Africa</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/OutsourceFleetManagement.png\" alt=\"Outsource Fleet Management\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://outsourcefleetmanagement.com\">Outsource Fleet Management</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/horseclub.png\" alt=\"horse club\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Horse Club</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/httpshollowmanagement.png\" alt=\"hollow management\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Hollow Management</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/httptraumwagen-check(dot)de.png\" alt=\"Car service\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"http://traumwagen-check.de/\" target=\"_blank\">Car Service</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/illumantinightclub.png\" alt=\"Night Party Club \">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"http://illuminatiatl.com/\" target=\"_blank\">Night Party Club</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/smartdentistrycouk.png\" alt=\"Smart Dentist website\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"http://smartdentistry.co.uk/\" target=\"_blank\">Smart Dentistry</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/coolcofeemug.png\" alt=\"Cool coffee mug printing website\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"http://coolcoffeemugs.net/\" target=\"_blank\">Cool Coffee Mug</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS, Mug Printing</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/Ailynwikner.png\" alt=\"Ailynwikner Blog\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"http://ailynwikner.com/\" target=\"_blank\">Ailynwikner Blog</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all angular\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"\" alt=\"Heads Network\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Heads Network</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Angular 7</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n</section>\n<!--================ End Portfolio Area =================-->\n<section class=\"section-gap\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<div class=\"main_title\">\n\t\t\t\t\t<p class=\"top_text\">Freelance profile\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h2>Check out my Portfolio & Review on\n\t\t\t\t\t\t<br> Freelance Profile </h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<a itemprop='url' href='https://www.fiverr.com/bhavdiptalaviya' rel=\"nofollow\" target=\"_blank\">\n\t\t\t\t\t<article class=\"cssui-usercard\">\n\t\t\t\t\t\t<div class=\"cssui-usercard__body\">\n\t\t\t\t\t\t\t<header class=\"cssui-usercard__header\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/bhavdipprofilepic.jpg\" class=\"cssui-usercard__avatar\" alt=\"Avatar\">\n\t\t\t\t\t\t\t\t<div class=\"cssui-usercard__header-info\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"cssui-usercard__name\" style=\"color:white;\">Bhavdip\n\t\t\t\t\t\t\t\t\t\t<span class=\"cssui-usercard__name-label\" style=\"color:white;\">Talaviya</span>\n\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t<span class=\"cssui-usercard__post\">Web Developer</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t<div class=\"cssui-usercard__content\" style=\"line-height: 18px;\">\n\t\t\t\t\t\t\t\t<div class=\"cssui-slider container\">\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h4>Professional web development expert in Asp.net MVC /Entity framework / Angular / Jquery / Javascript / Microsoft\n\t\t\t\t\t\t\t\t\t\tSQL Server / C# / Bootstrap, Jquery, Ajax, Json.</h4>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<p style=\"font-size:18px;\">As a web consultant having an experience of 5+ years, I helped mid to large scale companies to grow their businesses\n\t\t\t\t\t\t\t\t\t\tusing the support of Information Technology, especially with open source technology.\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<h5>Key focus points : </h5>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t1. The small but expert team of business analysts, designers, developers, quality analysts, and document managers.\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>2. 5+ years of maturity in the IT Industry</li>\n\t\t\t\t\t\t\t\t\t\t<li>3. Agile methodology based project execution</li>\n\t\t\t\t\t\t\t\t\t\t<li>4. Proven Project Management Software based project planning and tracking</li>\n\t\t\t\t\t\t\t\t\t\t<li>5. Focus on emerging technologies</li>\n\t\t\t\t\t\t\t\t\t\t<li>6. Minimum response time</li>\n\t\t\t\t\t\t\t\t\t\t<li>7. Only committed to quality</li>\n\t\t\t\t\t\t\t\t\t\t<li>8. Cost-effective approach</li>\n\t\t\t\t\t\t\t\t\t\t<li>9. Open for onsite work if feasible</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<p style=\"font-size:18px;\">Our Engagement Model would be like below which we can decide after receiving project requirement specification.\n\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t<p style=\"font-size:18px;\">Looking for your positive response to me.</p>\n\n\t\t\t\t\t\t\t\t\t<p style=\"font-size:18px;\">Thank you.</p>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</article>\n\t\t\t\t</a>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!--================ Start Blog Area =================-->\n<!-- <section class=\"blog-area section-gap\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<div class=\"main_title\">\n\t\t\t\t\t<p class=\"top_text\">Our blog\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h2>Latest Story From\n\t\t\t\t\t\t<br> Our Blog </h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-4 col-md-6\">\n\t\t\t\t<div class=\"single-blog\">\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<img class=\"img-fluid\" src=\"assets/img/b1.jpg\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"short_details\">\n\t\t\t\t\t\t<div class=\"meta-top d-flex\">\n\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t<i class=\"ti-user\"></i> Admin post</a>\n\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t<i class=\"ti-calendar\"></i> Feb 14, 2019</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class=\"d-block\" href=\"single-blog.html\">\n\t\t\t\t\t\t\t<h4>Shall every fourth lesser have...</h4>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tHave whose a two night earth she set you creeping replenish place whales move Forth first him seed green.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a href=\"#\" class=\"primary_btn2\">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-md-6\">\n\t\t\t\t<div class=\"single-blog\">\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<img class=\"img-fluid\" src=\"assets/img/b2.jpg\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"short_details\">\n\t\t\t\t\t\t<div class=\"meta-top d-flex\">\n\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t<i class=\"ti-user\"></i> Admin post</a>\n\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t<i class=\"ti-calendar\"></i> Feb 14, 2019</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class=\"d-block\" href=\"single-blog.html\">\n\t\t\t\t\t\t\t<h4>Shall every fourth lesser have...</h4>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tHave whose a two night earth she set you creeping replenish place whales move Forth first him seed green.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a href=\"#\" class=\"primary_btn2\">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-md-6\">\n\t\t\t\t<div class=\"single-blog\">\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<img class=\"img-fluid\" src=\"assets/img/b3.jpg\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"short_details\">\n\t\t\t\t\t\t<div class=\"meta-top d-flex\">\n\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t<i class=\"ti-user\"></i> Admin post</a>\n\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t<i class=\"ti-calendar\"></i> Feb 14, 2019</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class=\"d-block\" href=\"single-blog.html\">\n\t\t\t\t\t\t\t<h4>Shall every fourth lesser have...</h4>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tHave whose a two night earth she set you creeping replenish place whales move Forth first him seed green.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a href=\"#\" class=\"primary_btn2\">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section> -->\n<!--================ End Blog Area =================-->\n\n<!--================ Start Brands Area =================-->\n<app-brands></app-brands>\n<!--================ End Brands Area =================-->\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/homepagefooter/homepagefooter.component.css":
/*!*************************************************************!*\
  !*** ./src/app/homepagefooter/homepagefooter.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer_logo img{\n    width: 75px;\n \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2Vmb290ZXIvaG9tZXBhZ2Vmb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7O0FBRWYiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZWZvb3Rlci9ob21lcGFnZWZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlcl9sb2dvIGltZ3tcbiAgICB3aWR0aDogNzVweDtcbiBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/homepagefooter/homepagefooter.component.html":
/*!**************************************************************!*\
  !*** ./src/app/homepagefooter/homepagefooter.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepagefooter/homepagefooter.component.ts":
/*!************************************************************!*\
  !*** ./src/app/homepagefooter/homepagefooter.component.ts ***!
  \************************************************************/
/*! exports provided: HomepagefooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepagefooterComponent", function() { return HomepagefooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepagefooterComponent = /** @class */ (function () {
    function HomepagefooterComponent() {
        this.CurrentYear = (new Date()).getFullYear();
    }
    HomepagefooterComponent.prototype.ngOnInit = function () {
    };
    HomepagefooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepagefooter',
            template: __webpack_require__(/*! ./homepagefooter.component.html */ "./src/app/homepagefooter/homepagefooter.component.html"),
            styles: [__webpack_require__(/*! ./homepagefooter.component.css */ "./src/app/homepagefooter/homepagefooter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepagefooterComponent);
    return HomepagefooterComponent;
}());



/***/ }),

/***/ "./src/app/homepageheader/homepageheader.component.css":
/*!*************************************************************!*\
  !*** ./src/app/homepageheader/homepageheader.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo_h img\n{\n    width: 75px;\n\n}\n.logo_inner_page img\n{\n    width: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2VoZWFkZXIvaG9tZXBhZ2VoZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXOztBQUVmO0FBQ0E7O0lBRUksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2VoZWFkZXIvaG9tZXBhZ2VoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvX2ggaW1nXG57XG4gICAgd2lkdGg6IDc1cHg7XG5cbn1cbi5sb2dvX2lubmVyX3BhZ2UgaW1nXG57XG4gICAgd2lkdGg6IDc1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/homepageheader/homepageheader.component.html":
/*!**************************************************************!*\
  !*** ./src/app/homepageheader/homepageheader.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--================ Start Header Area =================-->\n <header class=\"header_area\">\n\t\t<div class=\"main_menu\">\n\t\t\t<nav class=\"navbar navbar-expand-lg navbar-light\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n          <a class=\"navbar-brand logo_h\" routerLink=\"/home\"><img src=\"assets/img/logo.png\" alt=\"\"></a>\n\t\t\t\t\t<a class=\"navbar-brand logo_inner_page\" roterLink=\"/home\"><img style=\"width:75px;\" src=\"assets/img/logo2.png\" alt=\"\"></a>      \n\t\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n\t\t\t\t\t aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t\t\t<div class=\"collapse navbar-collapse offset\" id=\"navbarSupportedContent\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav menu_nav\">\n\t\t\t\t\t\t\t<li class=\"nav-item active\"><a class=\"nav-link\" routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/portfolio\">Portfolio</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/services\">Services</a></li>\n\t\t\t\t\t\t\t<!-- <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/blog\">Blog</a></li> -->\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/contact\">Contact</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t</div>\n\t</header>\n\t<!--================ End Header Area =================-->"

/***/ }),

/***/ "./src/app/homepageheader/homepageheader.component.ts":
/*!************************************************************!*\
  !*** ./src/app/homepageheader/homepageheader.component.ts ***!
  \************************************************************/
/*! exports provided: HomepageheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageheaderComponent", function() { return HomepageheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageheaderComponent = /** @class */ (function () {
    function HomepageheaderComponent() {
    }
    HomepageheaderComponent.prototype.ngOnInit = function () {
    };
    HomepageheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepageheader',
            template: __webpack_require__(/*! ./homepageheader.component.html */ "./src/app/homepageheader/homepageheader.component.html"),
            styles: [__webpack_require__(/*! ./homepageheader.component.css */ "./src/app/homepageheader/homepageheader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageheaderComponent);
    return HomepageheaderComponent;
}());



/***/ }),

/***/ "./src/app/pageheader/pageheader.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pageheader/pageheader.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo_h img\n{\n    width: 75px;\n\n}\n.logo_inner_page img\n{\n    width: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZWhlYWRlci9wYWdlaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVzs7QUFFZjtBQUNBOztJQUVJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VoZWFkZXIvcGFnZWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ29faCBpbWdcbntcbiAgICB3aWR0aDogNzVweDtcblxufVxuLmxvZ29faW5uZXJfcGFnZSBpbWdcbntcbiAgICB3aWR0aDogNzVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pageheader/pageheader.component.html":
/*!******************************************************!*\
  !*** ./src/app/pageheader/pageheader.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--================ Start Header Area =================-->\n<header class=\"header_area header_inner_page\">\n\t\t<div class=\"main_menu\">\n\t\t\t<nav class=\"navbar navbar-expand-lg navbar-light\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n          <a class=\"navbar-brand logo_h\" routerLink=\"/home\"><img src=\"assets/img/logo.png\" alt=\"\"></a>\n\t\t\t\t\t<a class=\"navbar-brand logo_inner_page\" routerLink=\"/home\"><img src=\"assets/img/logo2.png\" alt=\"\"></a>      \n\t\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n\t\t\t\t\t aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t\t\t<div class=\"collapse navbar-collapse offset\" id=\"navbarSupportedContent\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav menu_nav\">\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item active\"><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/portfolio\">Portfolio</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/services\">Services</a></li>\n\t\t\t\t\t\t\t<!-- <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/blog\">Blog</a></li> -->\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/contact\">Contact</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t</div>\n\t</header>\n\t<!--================ End Header Area =================-->"

/***/ }),

/***/ "./src/app/pageheader/pageheader.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pageheader/pageheader.component.ts ***!
  \****************************************************/
/*! exports provided: PageheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageheaderComponent", function() { return PageheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageheaderComponent = /** @class */ (function () {
    function PageheaderComponent() {
    }
    PageheaderComponent.prototype.ngOnInit = function () {
    };
    PageheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pageheader',
            template: __webpack_require__(/*! ./pageheader.component.html */ "./src/app/pageheader/pageheader.component.html"),
            styles: [__webpack_require__(/*! ./pageheader.component.css */ "./src/app/pageheader/pageheader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageheaderComponent);
    return PageheaderComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>404 page not found</h1>"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/portfolio-details/portfolio-details.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/portfolio-details/portfolio-details.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby1kZXRhaWxzL3BvcnRmb2xpby1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/portfolio-details/portfolio-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/portfolio-details/portfolio-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-pageheader></app-pageheader>\n <!--================ Start Banner Area =================-->\n <section class=\"banner_area\">\n    <div class=\"banner_inner d-flex align-items-center\">\n        <div class=\"container\">\n            <div class=\"banner_content text-center\">\n                <h2>Portfolio Single</h2>\n                <div class=\"page_link\">\n                    <a routerLink=\"/home\">Home</a>\n                    <a routerLink=\"/portfolio-details\">Porfolio Single</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--================ End Banner Area =================-->\n\n<!--================Start Portfolio Details Area =================-->\n<section class=\"portfolio_details_area section-margin\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"offset-xl-1 col-xl-10\">\n        <div class=\"portfolio_details_inner\">\n          <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"left_img\">\n                    <img class=\"img-fluid\" src=\"img/portfolio/portfolio-details.jpg\" alt=\"\">\n                </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-7 mb-4 mb-lg-0\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n              Duis aute irure dolor in reprehenderit.</p>\n              <p>Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt\n              in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia\n              dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam\n              aliquam quaerat voluptatem.</p>\n            </div>\n            <div class=\"col-lg-5\">\n              <div class=\"portfolio_right_text mt-30\">\n                  <h4 class=\"text-uppercase\">Project Info</h4>\n                  <p>\n                      Made after a can't fruitful, fowl of greater saying years there saw you sea does\n                  </p>\n                  <ul class=\"list\">\n                      <li><span>Rating</span>: <i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i\n                              class=\"fa fa-star\"></i></li>\n                      <li><span>Client</span>: colorlib</li>\n                      <li><span>Website</span>: colorlib.com</li>\n                      <li><span>Completed</span>: 17 Aug 2018</li>\n                  </ul>\n              </div>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--================End Portfolio Details Area =================-->"

/***/ }),

/***/ "./src/app/portfolio-details/portfolio-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/portfolio-details/portfolio-details.component.ts ***!
  \******************************************************************/
/*! exports provided: PortfolioDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioDetailsComponent", function() { return PortfolioDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioDetailsComponent = /** @class */ (function () {
    function PortfolioDetailsComponent() {
    }
    PortfolioDetailsComponent.prototype.ngOnInit = function () {
    };
    PortfolioDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio-details',
            template: __webpack_require__(/*! ./portfolio-details.component.html */ "./src/app/portfolio-details/portfolio-details.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-details.component.css */ "./src/app/portfolio-details/portfolio-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioDetailsComponent);
    return PortfolioDetailsComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pageheader></app-pageheader>\n<!--================ Start Banner Area =================-->\n<section class=\"banner_area\">\n\t\t<div class=\"banner_inner d-flex align-items-center\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"banner_content text-center\">\n\t\t\t\t\t<h2>Portfolio</h2>\n\t\t\t\t\t<div class=\"page_link\">\n\t\t\t\t\t\t<a routerLink=\"/home\">Home</a>\n\t\t\t\t\t\t<a routerLink=\"/portfolio\">Portfolio</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================ End Banner Area =================-->\n <!--================ Start Portfolio Area =================-->\n<section class=\"portfolio_area\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<div class=\"main_title\">\n\t\t\t\t\t<p class=\"top_text\">Our Portfolio\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h2>Check Our Recent\n\t\t\t\t\t\t<br> Client Work </h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"filters portfolio-filter\">\n\t\t\t<ul>\n\t\t\t\t<li class=\"active\" data-filter=\"*\">all</li>\n\t\t\t\t<li data-filter=\".aspdotnet\">Asp.Net MVC</li>\n\t\t\t\t<li data-filter=\".wordpress\"> Wordpress</li>\n\t\t\t\t<li data-filter=\".html\">UI/UX & HTML</li>\n\t\t\t\t<li data-filter=\".angular\">Angular</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"filters-content\">\n\t\t\t<div class=\"row portfolio-grid\">\n\t\t\t\t<div class=\"grid-sizer col-md-3 col-lg-3\"></div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all html\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/wishtech.png\" alt=\"Wishtech IT Company website\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://wishtech.in\">Wishtech IT Company</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>HTML & PHP</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all html\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/Academy.png\" alt=\"Innter National Acadamy\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Academy of International Business </a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>HTML & PHP</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all html\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/biz landing wireframe.jpg\" alt=\"biz landing page\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"https://www.itshungryhour.com/business/\" target=\"_blank\">Biz Landing</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>UI/UX & HTML</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all html\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/HungryHourAppLandingPage.png\" alt=\"Hungryhour landing page\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"https://www.itshungryhour.com/\" target=\"_blank\">HungryHour App Landing Page</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>UI/UX & HTML</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all html\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/landing.png\" alt=\"Landing Page\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>The Velstand Foundation</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>UI/UX & HTML</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all aspdotnet\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img style=\"height:300px;width: 500px;\" class=\"img-fluid w-100\" src=\"assets/img/portfolio/hanapos.png\" alt=\"Hana pos florist website\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"http://hanafloristpos2.com\" target=\"_blank\">Hana Flortist, POS System</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Asp.Net MVC / C#</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all aspdotnet\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img style=\"height:300px;width: 500px;\" class=\"img-fluid w-100\" src=\"assets/img/portfolio/32nation.png\" alt=\"32Nations\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>32nation E-commerce</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Asp.Net / nopCommerce</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all aspdotnet\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img style=\"height:300px;width: 500px;\" class=\"img-fluid w-100\" src=\"assets/img/portfolio/IMS.png\" alt=\"IMS\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Inventory Management System</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Asp.Net MVC / C#</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all aspdotnet\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img style=\"height:300px;width: 500px;\" class=\"img-fluid w-100\" src=\"assets/img/portfolio/GOW.png\" alt=\"GrabOnWeb\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Grab On Web</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Asp.Net MVC / C#</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all aspdotnet\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img style=\"height:300px;width: 500px;\" class=\"img-fluid w-100\" src=\"assets/img/portfolio/novitestinfo.png\" alt=\"Novi\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Novi Gaming & Draw</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Asp.Net MVC / C#</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all aspdotnet\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img style=\"height:300px;width: 500px;\" class=\"img-fluid w-100\" src=\"assets/img/portfolio/hvkonline.jpg\" alt=\"HVK Diamond Website\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"http://www.hvkonline.com/\" target=\"_blank\">HVK Diamond</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Asp.Net MVC / C#</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 all aspdotnet\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img style=\"height:300px;width: 500px;\" class=\"img-fluid w-100\" src=\"assets/img/portfolio/world_shiner.jpg\" alt=\"WorldShiner Diamond Website\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>WorldShiner Diamond</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Asp.Net MVC / C#</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/Lifeturquoise.png\" alt=\"\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://lifeturquoise.com/\">Lifeturquoise</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/genunehomecare.png\" alt=\"Genune Home Care\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Genune Home Care</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/schoolgems.africa.png\" alt=\"School Games africa\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"https://www.schoolgames.africa/\">School Games Africa</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/OutsourceFleetManagement.png\" alt=\"Outsource Fleet Management\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://outsourcefleetmanagement.com\">Outsource Fleet Management</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/horseclub.png\" alt=\"horse club\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Horse Club</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/httpshollowmanagement.png\" alt=\"hollow management\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Hollow Management</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/httptraumwagen-check(dot)de.png\" alt=\"Car service\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"http://traumwagen-check.de/\" target=\"_blank\">Car Service</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/illumantinightclub.png\" alt=\"Night Party Club \">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"http://illuminatiatl.com/\" target=\"_blank\">Night Party Club</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/smartdentistrycouk.png\" alt=\"Smart Dentist website\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"http://smartdentistry.co.uk/\" target=\"_blank\">Smart Dentistry</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/coolcofeemug.png\" alt=\"Cool coffee mug printing website\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"http://coolcoffeemugs.net/\" target=\"_blank\">Cool Coffee Mug</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS, Mug Printing</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all wordpress\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/Ailynwikner.png\" alt=\"Ailynwikner Blog\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a href=\"http://ailynwikner.com/\" target=\"_blank\">Ailynwikner Blog</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Wordpress / CMS</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-6 all angular\">\n\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"\" alt=\"Heads Network\">\n\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<a>Heads Network</a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>Angular 7</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n\n</section>\n<!--================ End Portfolio Area =================-->\n\n    <app-brands></app-brands>"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pageheader></app-pageheader>\n<!--================ Start Banner Area =================-->\n<section class=\"banner_area\">\n\t\t<div class=\"banner_inner d-flex align-items-center\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"banner_content text-center\">\n\t\t\t\t\t<h2>Services</h2>\n\t\t\t\t\t<div class=\"page_link\">\n\t\t\t\t\t\t<a routerLink=\"/home\">Home</a>\n\t\t\t\t\t\t<a routerLink=\"/service\">Services</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================ End Banner Area =================-->\n\t<!--================ Start Features Area =================-->\n\t<section class=\"services_area\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <div class=\"main_title\">\n              <p class=\"top_text\">Our Service <span></span></p>\n              <h2>What Service We <br>\n                Offer For You </h2>\n            </div>\n          </div>\n        </div>\n  \n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0\">\n            <div class=\"service_item\">\n              <img src=\"assets/img/services/s1.png\" alt=\"\">\n              <h4>Web Development</h4>\n              <p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for\n                brought fish forth</p>\n              <a href=\"#\" class=\"primary_btn2 mt-35\">Learn More</a>\n            </div>\n          </div>\n  \n          <div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0\">\n            <div class=\"service_item\">\n              <img src=\"assets/img/services/s2.png\" alt=\"\">\n              <h4>UX/UI Design</h4>\n              <p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for\n                brought fish forth</p>\n              <a href=\"#\" class=\"primary_btn2 mt-35\">Learn More</a>\n            </div>\n          </div>\n  \n          <div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0\">\n            <div class=\"service_item\">\n              <img src=\"assets/img/services/s3.png\" alt=\"\">\n              <h4>WP Developing</h4>\n              <p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for\n                brought fish forth</p>\n              <a href=\"#\" class=\"primary_btn2 mt-35\">Learn More</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!--================ End Features Area =================-->\n    <app-testimonials></app-testimonials>\n    <app-brands></app-brands>\n    <app-homepagefooter></app-homepagefooter>\n  "

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/testimonials/testimonials.component.css":
/*!*********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/testimonials/testimonials.component.html":
/*!**********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--================ Start Testimonial Area =================-->\n<section class=\"testimonial_area\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"main_title\">\n            <p class=\"top_text\">Our Tesitmonial\n              <span></span>\n            </p>\n            <h2>Honourable Client Says\n              <br> About Me </h2>\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"owl-carousel owl-theme testimonial-slider\">\n        <div class=\"testimonial-item\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"testi-img mb-4 mb-lg-0\">\n                <img src=\"assets/img/testimonials/besimdida.png\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"testi-right\">\n                <h4>Besimdida</h4>\n                <p>\n                  <small>Project Manager, Albania</small>\n                </p>\n  \n                <p>I worked with many people on Fiverr but to be honest this man is the best I have ever worked with. He listens you\n                  patiently and carefully, gives you ideas how to make better your project and replies to your messages and requests\n                  very fast. I start with one project and now I will order 2 more projects with him. So definitely I recommend this\n                  man.\n                </p>\n                <ul class=\"star_rating mt-4\">\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <!-- class=\"disable\"             -->\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n  \n  \n  \n        <div class=\"testimonial-item\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"testi-img mb-4 mb-lg-0\">\n                <img src=\"assets/img/testimonials/pramod.png\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"testi-right\">\n                <h4>Pramodhs</h4>\n                <p>\n                  <small>Project Manager, Apple</small>\n                </p>\n  \n                <p>He is one of the best web designers I have ever seen. Top class work and super innovative. He envisions and provides\n                  you with suggestions. I just needed a simple user landing page, he raised the bar. His code his awesome too, works\n                  on all kinds of phone. Developers like these are hard to find, I 100% recommend him. </p>\n                <ul class=\"star_rating mt-3\">\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"testimonial-item\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"testi-img mb-4 mb-lg-0\">\n                <img src=\"assets/img/testimonials/ailynwikner.jpg\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"testi-right\">\n                <h4>Ailynwikner</h4>\n                <p>\n                  <small>Blog website, Owner</small>\n                </p>\n  \n                <p>Amazing! He delivered on time and very patience. Higly recommended.</p>\n                <ul class=\"star_rating mt-3\">\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"testimonial-item\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"testi-img mb-4 mb-lg-0\">\n                <img src=\"assets/img/testimonials/schoolgames.png\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"testi-right\">\n                <h4>yemz4u</h4>\n                <p>\n                  <small>Schoolgames Africa, CEO </small>\n                </p>\n  \n                <p>An amazing, professional web developer, helped me design and structure my business website. Will surely use again.</p>\n                <ul class=\"star_rating mt-3\">\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <!-- <li class=\"disable\"><span><i class=\"fas fa-star\"></i></span></li>                   -->\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n  \n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"testimonial-item\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"testi-img mb-4 mb-lg-0\">\n                <img src=\"assets/img/testimonials/noimg.jpg\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"testi-right\">\n                <h4>Ameritransportl</h4>\n                <p>\n                  <small>Logistic Website, Owner</small>\n                </p>\n  \n                <p>It was great working with bhavdiptalaviya. He will meet your needs and expectations. I would recommend anyone to work\n                  with him. </p>\n                <ul class=\"star_rating mt-3\">\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"testimonial-item\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"testi-img mb-4 mb-lg-0\">\n                <img src=\"assets/img/testimonials/lifeturquoise.jpg\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"testi-right\">\n                <h4>Lifeturquoise</h4>\n                <p>\n                  <small>Beauty product, Owner</small>\n                </p>\n  \n                <p>Absolutely amazing ,you deserve 5 stars ,great job ,great website ,i'm really sure that we'll see you soon . Respect\n                  and thank you so much for your work .</p>\n                <ul class=\"star_rating mt-3\">\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"testimonial-item\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"testi-img mb-4 mb-lg-0\">\n                <img src=\"assets/img/testimonials/noimg.jpg\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"testi-right\">\n                <h4>Ismaciil Abuukar</h4>\n                <p>\n                  <small>E-commerce, Owner</small>\n                </p>\n  \n                <p>Amazing work! Professionally done. You met all of my standards. He’s a really smart guy with amazing coding skills.\n                  Thank you for the amazing website.</p>\n                <ul class=\"star_rating mt-3\">\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                  <li>\n                    <span>\n                      <i class=\"fas fa-star\"></i>\n                    </span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n  \n      </div>\n    </div>\n  </section>\n  <!--================ End Testimonial Area =================-->\n  "

/***/ }),

/***/ "./src/app/testimonials/testimonials.component.ts":
/*!********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.ts ***!
  \********************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__(/*! ./testimonials.component.html */ "./src/app/testimonials/testimonials.component.html"),
            styles: [__webpack_require__(/*! ./testimonials.component.css */ "./src/app/testimonials/testimonials.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\bhavdip extra\Angular Material Bhavdip\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map