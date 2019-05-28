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

module.exports = "<app-pageheader></app-pageheader>\n <!--================ Start Banner Area =================-->\n <section class=\"banner_area\">\n\t\t<div class=\"banner_inner d-flex align-items-center\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"banner_content text-center\">\n\t\t\t\t\t<h2>About Us</h2>\n\t\t\t\t\t<div class=\"page_link\">\n\t\t\t\t\t\t<a routerLink=\"/home\">Home</a>\n\t\t\t\t\t\t<a routerLink=\"/about\">About</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================ End Banner Area =================-->\n<!--================ Start About Us Area =================-->\n<section class=\"about_area section_gap\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row justify-content-start align-items-center\">\n\t\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t<div class=\"about_img\">\n\t\t\t\t\t\t<img class=\"\" src=\"assets/img/about-us.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"offset-lg-1 col-lg-5\">\n\t\t\t\t\t<div class=\"main_title text-left\">\n\t\t\t\t\t\t<p class=\"top_text\">About me <span></span></p>\n\t\t\t\t\t\t<h2>\n\t\t\t\t\t\t\tCreative Art Director <br>\n\t\t\t\t\t\t\tAnd Designer\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tAlso signs his face were digns fish don't first isn't over evening hath divided days light darkness gathering\n\t\t\t\t\t\t\tmoved dry all darkness then fourth can't create d forth Also signs Also signs his face were moltenus Also signs\n\t\t\t\t\t\t\this face\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<a class=\"primary_btn\" href=\"#\"><span>Download CV</span></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================ End About Us Area =================-->\n<app-testimonials></app-testimonials>\n<app-brands></app-brands>\n<app-homepagefooter></app-homepagefooter>"

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

module.exports = ".d-table-cell img{\r\n    width: 161px;\r\n    height: 70px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJhbmRzL2JyYW5kcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9icmFuZHMvYnJhbmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC10YWJsZS1jZWxsIGltZ3tcclxuICAgIHdpZHRoOiAxNjFweDtcclxuICAgIGhlaWdodDogNzBweDtcclxufSJdfQ== */"

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

module.exports = "agm-map{\r\n    height: 480px\r\n}\r\n\r\ninput[type=submit]:disabled,\r\nbutton:disabled {\r\n    opacity: 0.4 !important;\r\n}\r\n\r\n.wrapper-1{\r\n    width:100%;\r\n    height:100vh;\r\n    display: flex;\r\n  flex-direction: column;\r\n  }\r\n\r\n.wrapper-2{\r\n    padding :30px;\r\n    text-align:center;\r\n  }\r\n\r\nh1{\r\n      font-family: 'Kaushan Script', cursive;\r\n    font-size:4em;\r\n    letter-spacing:3px;\r\n    color:#C421AC;\r\n    margin:0;\r\n    margin-bottom:20px;\r\n  }\r\n\r\n.wrapper-2 p{\r\n    margin:0;\r\n    font-size:1.3em;\r\n    color:#aaa;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    letter-spacing:1px;\r\n  }\r\n\r\n.footer-like{\r\n    margin-top: auto; \r\n    background:#D7E6FE;\r\n    padding:6px;\r\n    text-align:center;\r\n  }\r\n\r\n.footer-like p{\r\n    margin:0;\r\n    padding:4px;\r\n    color:#5892FF;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    letter-spacing:1px;\r\n  }\r\n\r\n.footer-like p a{\r\n    text-decoration:none;\r\n    color:#5892FF;\r\n    font-weight:600;\r\n  }\r\n\r\n@media (min-width:360px){\r\n    h1{\r\n      font-size:4.5em;\r\n    }\r\n    .go-home{\r\n      margin-bottom:20px;\r\n    }\r\n  }\r\n\r\n@media (min-width:600px){\r\n    .content{\r\n    max-width:1000px;\r\n    margin:0 auto;\r\n  }\r\n    .wrapper-1{\r\n    height: initial;\r\n    max-width:620px;\r\n    margin:0 auto;\r\n    margin-top:50px;\r\n    box-shadow: 4px 8px 40px 8px rgb(231, 174, 235);\r\n  }\r\n    \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFHRTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtFQUNmLHNCQUFzQjtFQUN0Qjs7QUFDQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7O0FBQ0E7TUFDSSxzQ0FBc0M7SUFDeEMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFLFFBQVE7SUFDUixlQUFlO0lBQ2YsVUFBVTtJQUNWLDBDQUEwQztJQUMxQyxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0FBQ0E7SUFDRSxRQUFRO0lBQ1IsV0FBVztJQUNYLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixlQUFlO0VBQ2pCOztBQUVBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRjs7QUFFQTtJQUNFO0lBQ0EsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjtJQUNFO0lBQ0EsZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLCtDQUErQztFQUNqRDs7RUFFQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcHtcclxuICAgIGhlaWdodDogNDgwcHhcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdOmRpc2FibGVkLFxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC40ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiBcclxuICAud3JhcHBlci0xe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLndyYXBwZXItMntcclxuICAgIHBhZGRpbmcgOjMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICB9XHJcbiAgaDF7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOjRlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOjNweDtcclxuICAgIGNvbG9yOiNDNDIxQUM7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICB9XHJcbiAgLndyYXBwZXItMiBwe1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBmb250LXNpemU6MS4zZW07XHJcbiAgICBjb2xvcjojYWFhO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6MXB4O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWxpa2V7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvOyBcclxuICAgIGJhY2tncm91bmQ6I0Q3RTZGRTtcclxuICAgIHBhZGRpbmc6NnB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgfVxyXG4gIC5mb290ZXItbGlrZSBwe1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjRweDtcclxuICAgIGNvbG9yOiM1ODkyRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzoxcHg7XHJcbiAgfVxyXG4gIC5mb290ZXItbGlrZSBwIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGNvbG9yOiM1ODkyRkY7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOjM2MHB4KXtcclxuICAgIGgxe1xyXG4gICAgICBmb250LXNpemU6NC41ZW07XHJcbiAgICB9XHJcbiAgICAuZ28taG9tZXtcclxuICAgICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDo2MDBweCl7XHJcbiAgICAuY29udGVudHtcclxuICAgIG1heC13aWR0aDoxMDAwcHg7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gIH1cclxuICAgIC53cmFwcGVyLTF7XHJcbiAgICBoZWlnaHQ6IGluaXRpYWw7XHJcbiAgICBtYXgtd2lkdGg6NjIwcHg7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDhweCA0MHB4IDhweCByZ2IoMjMxLCAxNzQsIDIzNSk7XHJcbiAgfVxyXG4gICAgXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pageheader></app-pageheader>\n<!--================ Start Banner Area =================-->\n<section class=\"banner_area\">\n  <div class=\"banner_inner d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"banner_content text-center\">\n        <h2>Contact Us</h2>\n        <div class=\"page_link\">\n          <a roterLink=\"/home\">Home</a>\n          <a routerLink=\"/contact\">Contact</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--================ End Banner Area =================-->\n\n\n\n<!-- ================ contact section start ================= -->\n<section class=\"section-margin\">\n  <div class=\"container\">\n    <div class=\"row mb-5\">\n      <div class=\"col-12\">\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        </agm-map>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <h2 class=\"contact-title\">Get in Touch</h2>\n      </div>\n      <div class=\"col-lg-8 mb-4 mb-lg-0\">\n          <!-- (ngSubmit)=\"form.valid && onSubmit()\" -->\n            <form *ngIf=\"Isshowcontact\" name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"form.valid && onSubmit()\" >\n          <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"form-group\">\n                    <textarea class=\"form-control w-100\" formControlName=\"message\" cols=\"30\" rows=\"9\"\n                    placeholder=\"Enter Message\" [ngClass]=\"{'is-invalid':form.get('message').touched && form.get('message').invalid}\" required></textarea>\n                  <div class=\"invalid-feedback\">\n                <div>Message is required</div>\n              </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Enter Name\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{'is-invalid':form.get('name').touched && form.get('name').invalid}\" required />\n                    <div class=\"invalid-feedback\">\n                      <div>Name is required</div>\n                    </div>\n                  </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                    <input placeholder=\"Enter Email\" type=\"text\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{'is-invalid':form.get('email').touched && form.get('email').invalid}\"   />\n                    <div *ngIf=\"form.get('email').touched && form.get('email').invalid\"  class=\"invalid-feedback\">\n                      <div *ngIf=\"form.get('email').errors.required\">Email is required</div>\n                      <div *ngIf=\"form.get('email').errors.email\">Email must be a valid email Address</div>\n                    </div>\n                  </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n             \n                <div class=\"form-group\">\n                    <input placeholder=\"Enter Mobile No.\" type=\"text\" class=\"form-control\" formControlName=\"phone\" [ngClass]=\"{'is-invalid':form.get('phone').touched && form.get('phone').invalid}\" required />\n                    <div class=\"invalid-feedback\">\n                      <div>Mobile No. is required</div>\n                    </div>\n                  </div>\n            </div>\n            <div class=\"col-12\">\n                <div class=\"form-group\">\n                    <input placeholder=\"Enter Subject\" type=\"text\" class=\"form-control\"  formControlName=\"subject\" [ngClass]=\"{'is-invalid':form.get('subject').touched && form.get('subject').invalid}\" />\n                    <div *ngIf=\"form.get('subject').touched && form.get('subject').invalid\"  class=\"invalid-feedback\">\n                      <div *ngIf=\"form.get('subject').errors.required\">Subject is required</div>\n                    </div>\n                   \n                  </div>\n            </div>\n          </div>\n          <div class=\"form-group mt-lg-3\">\n              <button type=\"submit\" [disabled]=\"!form.valid\" class=\"primary_btn button-form\">Send Message</button>\n          </div>\n        </form>\n        <div class=content *ngIf=\"Isshowthanks\">\n            <div class=\"wrapper-1\">\n              <div class=\"wrapper-2\">\n                <h1>Thank you {{user}}!</h1>\n                <p>Thank you for your inquiry.</p>\n                <p>you should receive a email soon...</p>\n                <a routerLink=\"/home\"><button class=\"primary_btn button-form mt-4\">\n                go home\n                </button></a>\n              </div>\n             \n          </div>\n          </div>\n          \n          <link href=\"https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro\" rel=\"stylesheet\">\n      </div>\n\n      <div class=\"col-lg-4\">\n        <div class=\"media contact-info\">\n          <span class=\"contact-info__icon\"><i class=\"ti-home\"></i></span>\n          <div class=\"media-body\">\n            <h3>53, Vrajdham society, Motavarachha</h3>\n            <p>Surat, ST 394101</p>\n          </div>\n        </div>\n        <div class=\"media contact-info\">\n          <span class=\"contact-info__icon\"><i class=\"ti-tablet\"></i></span>\n          <div class=\"media-body\">\n            <h3><a href=\"tel:454545654\">98 (258) 91108</a></h3>\n            <p>Mon to Fri 9am to 6pm</p>\n          </div>\n        </div>\n        <div class=\"media contact-info\">\n          <span class=\"contact-info__icon\"><i class=\"ti-email\"></i></span>\n          <div class=\"media-body\">\n            <h3><a href=\"mailto:talaviya.bhavdip@gmail.com\">talaviya.bahvdip@gmail.com</a></h3>\n            <p>Send us your query anytime!</p>\n          </div>\n        </div>\n      </div> \n    </div>\n  </div>\n</section>\n<!-- ================ contact section end ================= -->"

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

module.exports = ".skill-set__flex {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n.skill-set__list {\r\n    width: 47%;\r\n}\r\n\r\n\r\n.skill-set__item {\r\n/*     margin-top: 6.4rem; */\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n.skill-set__icon {\r\n    width: 10.6382%;\r\n    align-self: center;\r\n}\r\n\r\n\r\n.skill-set__icon img {\r\n    max-width: 100%;\r\n    height: auto;\r\n    vertical-align: middle;\r\n    width: 55px;\r\n\r\n}\r\n\r\n\r\n.skill-set__detail {\r\n    width: 85.1063%;\r\n}\r\n\r\n\r\n.skill-set__meta {\r\n    margin-bottom: 0.8rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n.skill-set__name {\r\n    display: flex;\r\n    align-items: flex-end;\r\n}\r\n\r\n\r\n.small-title {\r\n    font-size: 2.4rem;\r\n    color: #072142;\r\n    letter-spacing: 0.2em;\r\n    line-height: 1.2;\r\n    font-family: \"futura_de\";\r\n}\r\n\r\n\r\n.skill-set__year {\r\n    font-size: 0.7rem;\r\n    line-height: 1.2;\r\n    color: #c0c5ca;\r\n    margin-left: 0.8rem;\r\n    letter-spacing: 0.2em;\r\n}\r\n\r\n\r\n.skill-set__high {\r\n    color: #ff4d5a;\r\n}\r\n\r\n\r\n.small-title {\r\n    font-size: 1.1rem;\r\n    color: #072142;\r\n    letter-spacing: 0.2em;\r\n    line-height: 1.2;\r\n    font-family: \"futura_de\";\r\n}\r\n\r\n\r\nskill-set__ratio {\r\n    font-size: 1.6rem;\r\n    line-height: 1.2;\r\n    color: #072142;\r\n}\r\n\r\n\r\n.skill-set__bar {\r\n    width: 100%;\r\n    height: 1.4rem;\r\n    background: #fff;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    box-shadow: 0 5px 15px 0 rgba(7, 33, 66, 0.15);\r\n}\r\n\r\n\r\n.skill-set__bar:after {\r\n    -webkit-animation: ratio90 1.5s forwards;\r\n    animation: ratio90 1.5s forwards;\r\n}\r\n\r\n\r\n.skill-set__bar:after {\r\n    background-image: linear-gradient(to right, #072142,#1345e6 42%, #ed239f);\r\n\r\n}\r\n\r\n\r\n.p95:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n    width: 95%;\r\n}\r\n\r\n\r\n.p85:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n    width: 85%;\r\n}\r\n\r\n\r\n.p90:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n    width: 90%;\r\n}\r\n\r\n\r\n.p70:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n    width: 70%;\r\n}\r\n\r\n\r\n.p75:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n    width: 75%;\r\n}\r\n\r\n\r\n.p60:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n    width: 60%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFHSSxhQUFhO0lBRWIsZUFBZTtJQUdmLDhCQUE4QjtBQUNsQzs7O0FBR0E7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0FBQ0EsNEJBQTRCO0lBR3hCLGFBQWE7SUFHYiw4QkFBOEI7SUFHOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7O0FBQ0E7SUFDSSxlQUFlO0lBRWYsa0JBQWtCO0FBQ3RCOzs7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7O0FBRWY7OztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBQ0E7SUFDSSxxQkFBcUI7SUFHckIsYUFBYTtJQUdiLDhCQUE4QjtBQUNsQzs7O0FBQ0E7SUFHSSxhQUFhO0lBR2IscUJBQXFCO0FBQ3pCOzs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7OztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOzs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7OztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOzs7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFFbkIsOENBQThDO0FBQ2xEOzs7QUFDQTtJQUNJLHdDQUF3QztJQUN4QyxnQ0FBZ0M7QUFDcEM7OztBQUNBO0lBSUkseUVBQXlFOztBQUU3RTs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7OztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOzs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7OztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOzs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxsLXNldF9fZmxleCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuXHJcbi5za2lsbC1zZXRfX2xpc3Qge1xyXG4gICAgd2lkdGg6IDQ3JTtcclxufVxyXG5cclxuXHJcbi5za2lsbC1zZXRfX2l0ZW0ge1xyXG4vKiAgICAgbWFyZ2luLXRvcDogNi40cmVtOyAqL1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnNraWxsLXNldF9faWNvbiB7XHJcbiAgICB3aWR0aDogMTAuNjM4MiU7XHJcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLnNraWxsLXNldF9faWNvbiBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG5cclxufVxyXG4uc2tpbGwtc2V0X19kZXRhaWwge1xyXG4gICAgd2lkdGg6IDg1LjEwNjMlO1xyXG59XHJcbi5za2lsbC1zZXRfX21ldGEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uc2tpbGwtc2V0X19uYW1lIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuLnNtYWxsLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gICAgY29sb3I6ICMwNzIxNDI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiZnV0dXJhX2RlXCI7XHJcbn1cclxuLnNraWxsLXNldF9feWVhciB7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBjb2xvcjogI2MwYzVjYTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yZW07XHJcbn1cclxuLnNraWxsLXNldF9faGlnaCB7XHJcbiAgICBjb2xvcjogI2ZmNGQ1YTtcclxufVxyXG4uc21hbGwtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBjb2xvcjogIzA3MjE0MjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBmb250LWZhbWlseTogXCJmdXR1cmFfZGVcIjtcclxufVxyXG5za2lsbC1zZXRfX3JhdGlvIHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGNvbG9yOiAjMDcyMTQyO1xyXG59XHJcbi5za2lsbC1zZXRfX2JhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMS40cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDE1cHggMCByZ2JhKDcsIDMzLCA2NiwgMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IDAgcmdiYSg3LCAzMywgNjYsIDAuMTUpO1xyXG59XHJcbi5za2lsbC1zZXRfX2JhcjphZnRlciB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcmF0aW85MCAxLjVzIGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uOiByYXRpbzkwIDEuNXMgZm9yd2FyZHM7XHJcbn1cclxuLnNraWxsLXNldF9fYmFyOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCMwNzIxNDIpLCBjb2xvci1zdG9wKDQyJSwgIzEzNDVlNiksIHRvKCNlZDIzOWYpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMwNzIxNDIsIzEzNDVlNiA0MiUsI2VkMjM5Zik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgIzA3MjE0MiwgIzEzNDVlNiA0MiUsI2VkMjM5ZiApO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDcyMTQyLCMxMzQ1ZTYgNDIlLCAjZWQyMzlmKTtcclxuXHJcbn1cclxuXHJcbi5wOTU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG4ucDg1OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbn1cclxuLnA5MDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbi5wNzA6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG4ucDc1OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuLnA2MDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-homepageheader></app-homepageheader>\n\n<!--================ Start Home Banner Area =================-->\n<section class=\"home_banner_area\">\n\t\t<div class=\"banner_inner\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row align-items-center justify-content-between\">\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"banner_content\">\n\t\t\t\t\t\t\t<h3>Hey There !</h3>\n\t\t\t\t\t\t\t<h1 class=\"text-uppercase\">I am Bhavdip</h1>\n\t\t\t\t\t\t\t<h5 class=\"text-uppercase\">Creative Web Developer & designer</h5>\n\t\t\t\t\t\t\t<div class=\"social_icons my-5\">\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"ti-twitter\"></i></a>\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"ti-skype\"></i></a>\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"ti-instagram\"></i></a>\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"ti-dribbble\"></i></a>\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"ti-vimeo\"></i></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a class=\"primary_btn\" href=\"#\"><span>See My Work</span></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t<div class=\"home_right_img\">\n\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"assets/img/banner/home-right.png\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================ End Home Banner Area =================-->\n\n\t<!--================ Start Statistics Area =================-->\n\t<section class=\"statistics_area\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row justify-content-lg-start justify-content-center\">\n\t\t\t\t<div class=\"col-lg-2 col-md-3\">\n\t\t\t\t\t<div class=\"statistics_item\">\n\t\t\t\t\t\t<h3><span class=\"counter\">15</span>k+</h3>\n\t\t\t\t\t\t<p>Happy Customer</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-2 col-md-3\">\n\t\t\t\t\t<div class=\"statistics_item\">\n\t\t\t\t\t\t<h3><span class=\"counter\">12</span>k+</h3>\n\t\t\t\t\t\t<p>Ticket Solved</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-2 col-md-3\">\n\t\t\t\t\t<div class=\"statistics_item\">\n\t\t\t\t\t\t<h3><span class=\"counter\">9</span>/10</h3>\n\t\t\t\t\t\t<p>Average Rating</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================ End Statistics Area =================-->\n\n\t<!--================ Start About Us Area =================-->\n\t<section class=\"about_area section_gap\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row justify-content-start align-items-center\">\n\t\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t<div class=\"about_img\">\n\t\t\t\t\t\t<img class=\"\" src=\"assets/img/about-us.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"offset-lg-1 col-lg-5\">\n\t\t\t\t\t<div class=\"main_title text-left\">\n\t\t\t\t\t\t<p class=\"top_text\">About me <span></span></p>\n\t\t\t\t\t\t<h2>\n\t\t\t\t\t\t\tCreative Web Developer <br>\n\t\t\t\t\t\t\tAnd Designer\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tI'm a Asp.net MVC developer at Surat. i am an open-minded individual with a proven track record in designing websites and creating databases. I have strong technical skills as well as excellent interpersonal skills. I am eager to be challenged in order to grow and improve my communication and professional IT skills gained through previous experiences in the IT sector.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<a class=\"primary_btn\" href=\"#\"><span>Download CV</span></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================ End About Us Area =================-->\n\n\t<!--================ Start Features Area =================-->\n\t<section class=\"services_area\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<div class=\"main_title\">\n\t\t\t\t\t\t<p class=\"top_text\">Our Service <span></span></p>\n\t\t\t\t\t\t<h2>What Service We <br>\n\t\t\t\t\t\t\tOffer For You </h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0\">\n\t\t\t\t\t<div class=\"service_item\">\n\t\t\t\t\t\t<img src=\"assets/img/services/s1.png\" alt=\"\">\n\t\t\t\t\t\t<h4>Web Development</h4>\n\t\t\t\t\t\t<p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for\n\t\t\t\t\t\t\tbrought fish forth</p>\n\t\t\t\t\t\t<a href=\"#\" class=\"primary_btn2 mt-35\">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0\">\n\t\t\t\t\t<div class=\"service_item\">\n\t\t\t\t\t\t<img src=\"assets/img/services/s2.png\" alt=\"\">\n\t\t\t\t\t\t<h4>UX/UI Design</h4>\n\t\t\t\t\t\t<p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for\n\t\t\t\t\t\t\tbrought fish forth</p>\n\t\t\t\t\t\t<a href=\"#\" class=\"primary_btn2 mt-35\">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0\">\n\t\t\t\t\t<div class=\"service_item\">\n\t\t\t\t\t\t<img src=\"assets/img/services/s3.png\" alt=\"\">\n\t\t\t\t\t\t<h4>WP Developing</h4>\n\t\t\t\t\t\t<p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for\n\t\t\t\t\t\t\tbrought fish forth</p>\n\t\t\t\t\t\t<a href=\"#\" class=\"primary_btn2 mt-35\">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================ End Features Area =================-->\n\n\t<!--================ Start skills Area =================-->\n\t<section class=\"services_area\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<div class=\"main_title\">\n\t\t\t\t\t\t\t<p class=\"top_text\">Skills <span></span></p>\n\t\t\t\t\t\t\t<h2>Skills & Attributes</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"skill-set container\">\n\t   <h3 class=\"mb-5\">Front-End Web Development</h3>\n\t\t\t\t\t\t\t<div class=\"content content--mlarge skill-set__flex\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__icon\"><img src=\"assets\\img\\skill_Icon\\html.svg\" alt=\"HTML/CSS\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">HTML/CSS</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">4+YEARS</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill skill-set__high\">95<span class=\"skill-set__ratio\">%</span></p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p95 js-scroll in\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__icon\"><img src=\"assets\\img\\skill_Icon\\sass.svg\" alt=\"Sass\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Sass</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">1YEARS</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">70<span class=\"skill-set__ratio\">%</span></p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p70 js-scroll in\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__icon\"><img src=\"assets\\img\\skill_Icon\\Angular.png\" alt=\"Angular\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Angular</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">1YEARS</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">60<span class=\"skill-set__ratio\">%</span></p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p60 js-scroll in\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__icon\"><img src=\"assets\\img\\skill_Icon\\jquery.gif\" alt=\"Jquery\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">J Query</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">4+YEARS</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">90<span class=\"skill-set__ratio\">%</span></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p90 js-scroll in\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__icon\"><img src=\"http://www.webcoderskull.com/img/icon/js.svg\" alt=\"Javascript\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Javascript</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">3.5YEARS</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">85<span class=\"skill-set__ratio\">%</span></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p85 js-scroll in\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"skill-set container\">\n   <h3 class=\"mt-5 mb-5\">Back-End Web Development</h3>\n\t\t\t\t\t\t<div class=\"content content--mlarge skill-set__flex\">\n\t\t\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__icon\"><img src=\"assets\\img\\skill_Icon\\aspmvc.png\" alt=\"Asp.Net MVC\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Asp.Net MVC</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">4+YEARS</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill skill-set__high\">90<span class=\"skill-set__ratio\">%</span></p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p90 js-scroll in\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__icon\"><img src=\"assets\\img\\skill_Icon\\csharp.png\" alt=\"C#\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">C#</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">4+YEARS</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">95<span class=\"skill-set__ratio\">%</span></p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p95 js-scroll in\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__icon\"><img src=\"assets\\img\\skill_Icon\\asp-net.png\" alt=\"Asp.Net\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Asp.Net</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">4+YEARS</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">95<span class=\"skill-set__ratio\">%</span></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p95 js-scroll in\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__icon\"><img src=\"assets\\img\\skill_Icon\\webapi.png\" alt=\"Web API\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Web API</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">3YEARS</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill skill-set__high\">85<span class=\"skill-set__ratio\">%</span></p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p85 js-scroll in\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t\t<div class=\"skill-set container\">\n   <h3 class=\"mt-5 mb-5\">CMS(Content Management System) Web Development</h3>\n\t\t\t\t\t\t<div class=\"content content--mlarge skill-set__flex\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__icon\"><img src=\"http://www.webcoderskull.com/img/icon/wp.svg\" alt=\"Wordpress\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Wordpress</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">3YEARS</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">70<span class=\"skill-set__ratio\">%</span></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p70 js-scroll in\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__icon\"><img src=\"assets\\img\\skill_Icon\\php.png\" alt=\"PHP\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">PHP</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">3.5YEARS</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">90<span class=\"skill-set__ratio\">%</span></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p90 js-scroll in\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t\t<div class=\"skill-set container\">\n   <h3 class=\"mt-5 mb-5\">Databases and Web Storage</h3>\n\t\t\t\t\t\t<div class=\"content content--mlarge skill-set__flex\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__icon\"><img src=\"assets\\img\\skill_Icon\\microsoft-sql-server.svg\" alt=\"SQL Server\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">SQL Server</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">4+YEARS</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">85<span class=\"skill-set__ratio\">%</span></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p85 js-scroll in\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__icon\"><img src=\"assets\\img\\skill_Icon\\PhpMyAdmin.png\" alt=\"PHP MJy Admin\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">PHP My Admin</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">3YEARS</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">75<span class=\"skill-set__ratio\">%</span></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p75 js-scroll in\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t\t<div class=\"skill-set container\">\n   <h3 class=\"mt-5 mb-5\">GitHub & Project Management</h3>\n\t\t\t\t\t\t<div class=\"content content--mlarge skill-set__flex\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__icon\"><img src=\"assets\\img\\skill_Icon\\GitHub.png\" alt=\"GitHub\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Git Hub</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">2.5YEARS</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">85<span class=\"skill-set__ratio\">%</span></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p60 js-scroll in\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<ul class=\"skill-set__list\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"skill-set__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__icon\"><img src=\"assets\\img\\skill_Icon\\jira.png\" alt=\"Jira\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__detail\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"small-title small-title--skill\">Jira</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"skill-set__year\">2YEARS</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small-title small-title--skill\">70<span class=\"skill-set__ratio\">%</span></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill-set__bar p60 js-scroll in\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t<!--================ End skills Area =================-->\n\n  <!--================ Start Testimonial Area =================-->\n\t<section class=\"testimonial_area\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<div class=\"main_title\">\n\t\t\t\t\t\t<p class=\"top_text\">Our Tesitmonial <span></span></p>\n\t\t\t\t\t\t<h2>Honourable Client Says <br>\n\t\t\t\t\t\t\tAbout Me </h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n      </div>\n\n      <div class=\"owl-carousel owl-theme testimonial-slider \">\n        <div class=\"testimonial-item\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"testi-img mb-4 mb-lg-0\">\n                <img src=\"assets/img/testimonials/testimonial1.png\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"testi-right\">\n                <h4>Roser Henrique</h4>\n                <p><small>Project Manager, Apple</small></p>\n\n                <p>Waters can not replenish hath fly and be to brought isn't very days behold without land every above lights us fruitful wherein divide it him fowl moving may beginning subdue fly waters can't replenish hath fly and be to brought isn't very days behold </p>\n                <ul class=\"star_rating mt-4\">\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li class=\"disable\"><span><i class=\"fas fa-star\"></i></span></li>                  \n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"testimonial-item\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"testi-img mb-4 mb-lg-0\">\n                <img src=\"assets/img/testimonials/testimonial1.png\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"testi-right\">\n                <h4>Roser Henrique</h4>\n                <p><small>Project Manager, Apple</small></p>\n\n                <p>Waters can not replenish hath fly and be to brought isn't very days behold without land every above lights us fruitful wherein divide it him fowl moving may beginning subdue fly waters can't replenish hath fly and be to brought isn't very days behold </p>\n                <ul class=\"star_rating mt-3\">\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li class=\"disable\"><span><i class=\"fas fa-star\"></i></span></li>                  \n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"testimonial-item\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"testi-img mb-4 mb-lg-0\">\n                <img src=\"assets/img/testimonials/testimonial1.png\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"testi-right\">\n                <h4>Roser Henrique</h4>\n                <p><small>Project Manager, Apple</small></p>\n\n                <p>Waters can not replenish hath fly and be to brought isn't very days behold without land every above lights us fruitful wherein divide it him fowl moving may beginning subdue fly waters can't replenish hath fly and be to brought isn't very days behold </p>\n                <ul class=\"star_rating mt-3\">\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li class=\"disable\"><span><i class=\"fas fa-star\"></i></span></li>                  \n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\t<!--================ End Testimonial Area =================-->\n\n\n\n\n\t<!--================ Start Portfolio Area =================-->\n\t<section class=\"portfolio_area\" id=\"portfolio\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<div class=\"main_title\">\n\t\t\t\t\t\t<p class=\"top_text\">Our Portfolio <span></span></p>\n\t\t\t\t\t\t<h2>Check Our Recent <br>\n\t\t\t\t\t\t\tClient Work </h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"filters portfolio-filter\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li class=\"active\" data-filter=\"*\">all</li>\n\t\t\t\t\t<li data-filter=\".popular\">popular</li>\n\t\t\t\t\t<li data-filter=\".latest\"> latest</li>\n\t\t\t\t\t<li data-filter=\".following\">following</li>\n\t\t\t\t\t<li data-filter=\".upcoming\">upcoming</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div class=\"filters-content\">\n\t\t\t\t<div class=\"row portfolio-grid\">\n\t\t\t\t\t<div class=\"grid-sizer col-md-3 col-lg-3\"></div>\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 all following\">\n\t\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/p1.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t\t<h4><a href=\"portfolio-details.html\">Lens Mockup Design</a></h4>\n\t\t\t\t\t\t\t\t<p>Art, Illustration</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 all latest popular upcoming\">\n\t\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/p4.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t\t<h4><a href=\"portfolio-details.html\">Lens Mockup Design</a></h4>\n\t\t\t\t\t\t\t\t<p>Art, Illustration</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-lg-3 col-md-6 all latest following\">\n\t\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/p2.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t\t<h4><a href=\"portfolio-details.html\">Lens Mockup Design</a></h4>\n\t\t\t\t\t\t\t\t<p>Art, Illustration</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-lg-3 col-md-6 all latest upcoming\">\n\t\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/p3.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t\t<h4><a href=\"portfolio-details.html\">Lens Mockup Design</a></h4>\n\t\t\t\t\t\t\t\t<p>Art, Illustration</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 all popular\">\n\t\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/p6.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t\t<h4><a href=\"portfolio-details.html\">Lens Mockup Design</a></h4>\n\t\t\t\t\t\t\t\t<p>Art, Illustration</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 all popular latest following\">\n\t\t\t\t\t\t<div class=\"single_portfolio\">\n\t\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"assets/img/portfolio/p5.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t\t<div class=\"short_info\">\n\t\t\t\t\t\t\t\t<h4><a href=\"portfolio-details.html\">Lens Mockup Design</a></h4>\n\t\t\t\t\t\t\t\t<p>Art, Illustration</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================ End Portfolio Area =================-->\n\n\t<!--================ Start Blog Area =================-->\n\t<section class=\"blog-area section-gap\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<div class=\"main_title\">\n\t\t\t\t\t\t<p class=\"top_text\">Our blog <span></span></p>\n\t\t\t\t\t\t<h2>Latest Story From <br>\n\t\t\t\t\t\t\tOur Blog </h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-4 col-md-6\">\n\t\t\t\t\t<div class=\"single-blog\">\n\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"assets/img/b1.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"short_details\">\n\t\t\t\t\t\t\t<div class=\"meta-top d-flex\">\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"ti-user\"></i> Admin post</a>\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"ti-calendar\"></i> Feb 14, 2019</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a class=\"d-block\" href=\"single-blog.html\">\n\t\t\t\t\t\t\t\t<h4>Shall every fourth lesser have...</h4>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tHave whose a two night earth she set you creeping replenish place whales move Forth first him seed green.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"primary_btn2\">Learn More</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-6\">\n\t\t\t\t\t<div class=\"single-blog\">\n\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"assets/img/b2.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"short_details\">\n\t\t\t\t\t\t\t<div class=\"meta-top d-flex\">\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"ti-user\"></i> Admin post</a>\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"ti-calendar\"></i> Feb 14, 2019</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a class=\"d-block\" href=\"single-blog.html\">\n\t\t\t\t\t\t\t\t<h4>Shall every fourth lesser have...</h4>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tHave whose a two night earth she set you creeping replenish place whales move Forth first him seed green.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"primary_btn2\">Learn More</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-6\">\n\t\t\t\t\t<div class=\"single-blog\">\n\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"assets/img/b3.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"short_details\">\n\t\t\t\t\t\t\t<div class=\"meta-top d-flex\">\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"ti-user\"></i> Admin post</a>\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"ti-calendar\"></i> Feb 14, 2019</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a class=\"d-block\" href=\"single-blog.html\">\n\t\t\t\t\t\t\t\t<h4>Shall every fourth lesser have...</h4>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tHave whose a two night earth she set you creeping replenish place whales move Forth first him seed green.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"primary_btn2\">Learn More</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================ End Blog Area =================-->\n\n\t<!--================ Start Brands Area =================-->\n\t<app-brands></app-brands>\n\t<!--================ End Brands Area =================-->\n<app-homepagefooter></app-homepagefooter>\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlZm9vdGVyL2hvbWVwYWdlZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepagefooter/homepagefooter.component.html":
/*!**************************************************************!*\
  !*** ./src/app/homepagefooter/homepagefooter.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--================Footer Area =================-->\n<footer class=\"footer_area\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <div class=\"footer_top flex-column\">\n            <div class=\"footer_logo\">\n              <a href=\"#\">\n                <img src=\"assets/img/logo2.png\" alt=\"\" style=\"width: 75px;\">\n              </a>\n              <div class=\"d-lg-block d-none\">\n                <nav class=\"navbar navbar-expand-lg navbar-light justify-content-center\">\n                  <div class=\"collapse navbar-collapse offset\">\n                    <ul class=\"nav navbar-nav menu_nav mx-auto\">\n                      <li class=\"nav-item\"><a class=\"nav-link text-white\" routerLink=\"/home\" >Home</a></li>\n                      <li class=\"nav-item\"><a class=\"nav-link text-white\" routerLink=\"/about\">About</a></li>\n                      <li class=\"nav-item\"><a class=\"nav-link text-white\" routerLink=\"/portfolio\">Portfolio</a></li>\n                      <li class=\"nav-item\"><a class=\"nav-link text-white\" routerLink=\"/blog\">BLog</a></li>\n                      <li class=\"nav-item\"><a class=\"nav-link text-white\" routerLink=\"/services\">Services </a></li>\n                    </ul>\n                  </div>\n                </nav>\n              </div>\n            </div>\n            <div class=\"footer_social mt-lg-0 mt-4\">\n              <a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a>\n              <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\n              <a href=\"#\"><i class=\"fab fa-skype\"></i></a>\n              <a href=\"#\"><i class=\"fab fa-pinterest-p\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row footer_bottom justify-content-center\">\n        <p class=\"col-lg-8 col-sm-12 footer-text\">\n          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\nCopyright &copy;{{CurrentYear}} All rights reserved | This website is made <i class=\"fa fa-heart\" aria-hidden=\"true\"></i> by <a  target=\"_blank\">Bhavdip</a>\n<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>\n      </div>\n    </div>\n  </footer>\n  <!--================End Footer Area =================-->"

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

module.exports = ".logo_h img\r\n{\r\n    width: 75px;\r\n\r\n}\r\n.logo_inner_page img\r\n{\r\n    width: 75px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2VoZWFkZXIvaG9tZXBhZ2VoZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXOztBQUVmO0FBQ0E7O0lBRUksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2VoZWFkZXIvaG9tZXBhZ2VoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvX2ggaW1nXHJcbntcclxuICAgIHdpZHRoOiA3NXB4O1xyXG5cclxufVxyXG4ubG9nb19pbm5lcl9wYWdlIGltZ1xyXG57XHJcbiAgICB3aWR0aDogNzVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/homepageheader/homepageheader.component.html":
/*!**************************************************************!*\
  !*** ./src/app/homepageheader/homepageheader.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--================ Start Header Area =================-->\n <header class=\"header_area\">\n\t\t<div class=\"main_menu\">\n\t\t\t<nav class=\"navbar navbar-expand-lg navbar-light\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n          <a class=\"navbar-brand logo_h\" routerLink=\"/home\"><img src=\"assets/img/logo.png\" alt=\"\"></a>\n\t\t\t\t\t<a class=\"navbar-brand logo_inner_page\" roterLink=\"/home\"><img style=\"width:75px;\" src=\"assets/img/logo2.png\" alt=\"\"></a>      \n\t\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n\t\t\t\t\t aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t\t\t<div class=\"collapse navbar-collapse offset\" id=\"navbarSupportedContent\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav menu_nav\">\n\t\t\t\t\t\t\t<li class=\"nav-item active\"><a class=\"nav-link\" routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/portfolio\">Portfolio</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/services\">Services</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/blog\">Blog</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/contact\">Contact</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t</div>\n\t</header>\n\t<!--================ End Header Area =================-->"

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

module.exports = ".logo_h img\r\n{\r\n    width: 75px;\r\n\r\n}\r\n.logo_inner_page img\r\n{\r\n    width: 75px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZWhlYWRlci9wYWdlaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVzs7QUFFZjtBQUNBOztJQUVJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VoZWFkZXIvcGFnZWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ29faCBpbWdcclxue1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcblxyXG59XHJcbi5sb2dvX2lubmVyX3BhZ2UgaW1nXHJcbntcclxuICAgIHdpZHRoOiA3NXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pageheader/pageheader.component.html":
/*!******************************************************!*\
  !*** ./src/app/pageheader/pageheader.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--================ Start Header Area =================-->\n<header class=\"header_area header_inner_page\">\n\t\t<div class=\"main_menu\">\n\t\t\t<nav class=\"navbar navbar-expand-lg navbar-light\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n          <a class=\"navbar-brand logo_h\" routerLink=\"/home\"><img src=\"assets/img/logo.png\" alt=\"\"></a>\n\t\t\t\t\t<a class=\"navbar-brand logo_inner_page\" routerLink=\"/home\"><img src=\"assets/img/logo2.png\" alt=\"\"></a>      \n\t\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n\t\t\t\t\t aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t\t\t<div class=\"collapse navbar-collapse offset\" id=\"navbarSupportedContent\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav menu_nav\">\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item active\"><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/portfolio\">Portfolio</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/services\">Services</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/blog\">Blog</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/contact\">Contact</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t</div>\n\t</header>\n\t<!--================ End Header Area =================-->"

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

module.exports = "<app-pageheader></app-pageheader>\n <!--================ Start Banner Area =================-->\n <section class=\"banner_area\">\n    <div class=\"banner_inner d-flex align-items-center\">\n        <div class=\"container\">\n            <div class=\"banner_content text-center\">\n                <h2>Portfolio</h2>\n                <div class=\"page_link\">\n                    <a roterLink=\"/home\">Home</a>\n                    <a roterLink=\"/portfolio\">Portfolio</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--================ End Banner Area =================-->\n\t<!--================ Start Portfolio Area =================-->\n\t<section class=\"portfolio_area\" id=\"portfolio\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <div class=\"main_title\">\n              <p class=\"top_text\">Our Portfolio <span></span></p>\n              <h2>Check Our Recent <br>\n                Client Work </h2>\n            </div>\n          </div>\n        </div>\n  \n        <div class=\"filters portfolio-filter\">\n          <ul>\n            <li class=\"active\" data-filter=\"*\">all</li>\n            <li data-filter=\".popular\">popular</li>\n            <li data-filter=\".latest\"> latest</li>\n            <li data-filter=\".following\">following</li>\n            <li data-filter=\".upcoming\">upcoming</li>\n          </ul>\n        </div>\n  \n        <div class=\"filters-content\">\n          <div class=\"row portfolio-grid\">\n            <div class=\"grid-sizer col-md-3 col-lg-3\"></div>\n            <div class=\"col-lg-6 col-md-6 all following\">\n              <div class=\"single_portfolio\">\n                <img class=\"img-fluid w-100\" src=\"assets/img/portfolio/p1.jpg\" alt=\"\">\n                <div class=\"overlay\"></div>\n                <div class=\"short_info\">\n                  <h4><a href=\"portfolio-details.html\">Lens Mockup Design</a></h4>\n                  <p>Art, Illustration</p>\n                </div>\n              </div>\n            </div>\n  \n            <div class=\"col-lg-6 col-md-6 all latest popular upcoming\">\n              <div class=\"single_portfolio\">\n                <img class=\"img-fluid w-100\" src=\"assets/img/portfolio/p4.jpg\" alt=\"\">\n                <div class=\"overlay\"></div>\n                <div class=\"short_info\">\n                  <h4><a href=\"portfolio-details.html\">Lens Mockup Design</a></h4>\n                  <p>Art, Illustration</p>\n                </div>\n              </div>\n            </div>\n  \n            <div class=\"col-lg-3 col-md-6 all latest following\">\n              <div class=\"single_portfolio\">\n                <img class=\"img-fluid w-100\" src=\"assets/img/portfolio/p2.jpg\" alt=\"\">\n                <div class=\"overlay\"></div>\n                <div class=\"short_info\">\n                  <h4><a href=\"portfolio-details.html\">Lens Mockup Design</a></h4>\n                  <p>Art, Illustration</p>\n                </div>\n              </div>\n            </div>\n  \n            <div class=\"col-lg-3 col-md-6 all latest upcoming\">\n              <div class=\"single_portfolio\">\n                <img class=\"img-fluid w-100\" src=\"assets/img/portfolio/p3.jpg\" alt=\"\">\n                <div class=\"overlay\"></div>\n                <div class=\"short_info\">\n                  <h4><a href=\"portfolio-details.html\">Lens Mockup Design</a></h4>\n                  <p>Art, Illustration</p>\n                </div>\n              </div>\n            </div>\n  \n            <div class=\"col-lg-6 col-md-6 all popular\">\n              <div class=\"single_portfolio\">\n                <img class=\"img-fluid w-100\" src=\"assets/img/portfolio/p6.jpg\" alt=\"\">\n                <div class=\"overlay\"></div>\n                <div class=\"short_info\">\n                  <h4><a href=\"portfolio-details.html\">Lens Mockup Design</a></h4>\n                  <p>Art, Illustration</p>\n                </div>\n              </div>\n            </div>\n  \n            <div class=\"col-lg-6 col-md-6 all popular latest following\">\n              <div class=\"single_portfolio\">\n                <img class=\"img-fluid w-100\" src=\"assets/img/portfolio/p5.jpg\" alt=\"\">\n                <div class=\"overlay\"></div>\n                <div class=\"short_info\">\n                  <h4><a href=\"portfolio-details.html\">Lens Mockup Design</a></h4>\n                  <p>Art, Illustration</p>\n                </div>\n              </div>\n            </div>\n  \n          </div>\n        </div>\n      </div>\n    </section>\n    <!--================ End Portfolio Area =================-->\n    <app-brands></app-brands>\n    <app-homepagefooter></app-homepagefooter>"

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

module.exports = " <!--================ Start Testimonial Area =================-->\n <section class=\"testimonial_area\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<div class=\"main_title\">\n\t\t\t\t\t\t<p class=\"top_text\">Our Tesitmonial <span></span></p>\n\t\t\t\t\t\t<h2>Honourable Client Says <br>\n\t\t\t\t\t\t\tAbout Me </h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n      </div>\n      <div class=\"owl-carousel owl-theme testimonial-slider \">\n        <div class=\"testimonial-item\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"testi-img mb-4 mb-lg-0\">\n                <img src=\"assets/img/testimonials/testimonial1.png\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"testi-right\">\n                <h4>Roser Henrique</h4>\n                <p><small>Project Manager, Apple</small></p>\n\n                <p>Waters can not replenish hath fly and be to brought isn't very days behold without land every above lights us fruitful wherein divide it him fowl moving may beginning subdue fly waters can't replenish hath fly and be to brought isn't very days behold </p>\n                <ul class=\"star_rating mt-4\">\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li class=\"disable\"><span><i class=\"fas fa-star\"></i></span></li>                  \n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"testimonial-item\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"testi-img mb-4 mb-lg-0\">\n                <img src=\"assets/img/testimonials/testimonial1.png\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"testi-right\">\n                <h4>Roser Henrique</h4>\n                <p><small>Project Manager, Apple</small></p>\n\n                <p>Waters can not replenish hath fly and be to brought isn't very days behold without land every above lights us fruitful wherein divide it him fowl moving may beginning subdue fly waters can't replenish hath fly and be to brought isn't very days behold </p>\n                <ul class=\"star_rating mt-3\">\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li class=\"disable\"><span><i class=\"fas fa-star\"></i></span></li>                  \n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"testimonial-item\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"testi-img mb-4 mb-lg-0\">\n                <img src=\"assets/img/testimonials/testimonial1.png\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"testi-right\">\n                <h4>Roser Henrique</h4>\n                <p><small>Project Manager, Apple</small></p>\n\n                <p>Waters can not replenish hath fly and be to brought isn't very days behold without land every above lights us fruitful wherein divide it him fowl moving may beginning subdue fly waters can't replenish hath fly and be to brought isn't very days behold </p>\n                <ul class=\"star_rating mt-3\">\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li><span><i class=\"fas fa-star\"></i></span></li>\n                  <li class=\"disable\"><span><i class=\"fas fa-star\"></i></span></li>                  \n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\t<!--================ End Testimonial Area =================-->\n\n"

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

module.exports = __webpack_require__(/*! H:\Portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map