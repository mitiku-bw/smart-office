webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.navbar-header{\n    padding: 15px;\n}\n*/\n.navbar-brand{\n    font-size: 22px;\n    font-weight: 300;\n    color: #fed189;\n    /*float: none;\n    margin-top: 15px;*/\n    text-transform: uppercase;\n}\n.navbar-default .navbar-nav>li>a {\n    color: #00a0df;\n}\n.navbar-default .navbar-brand:hover {\n    color: #fed189;\n    background-color: transparent;\n}\n.welcome.img-circle{\n    height: 20px;\n}\n.orangish{\n    color: #fed189;\n}\n.lite{\n    color: #00a0df !important;\n}\n.sidenav {\n    height: 100%;\n    width: 250px;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: #394A59;\n    overflow-x: hidden;\n    transition: 0.5s;\n    padding-top: 60px;\n}\n.sidenav ul{\n    padding-left: 0;\n    margin: auto;\n}\n\n.sidenav ul li {\n    line-height: 20px !important;\n    border-bottom: 1px solid #999;\n    list-style: none;\n    /*padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    /*font-size: 25px;*/\n    /*color: #fff;\n    line-height: 20px !important;\n    display: block;\n    transition: 0.3s;*/\n}\n\n\n.sidenav ul li a {\n    color: #fff;\n    text-decoration: none;\n    display: block;\n    padding: 15px 0 15px 10px;\n    font-size: 16px;\n    font-weight: 300;\n    outline: none;\n    transition: all 0.3s ease;\n    /*border-right: 1px solid #D7D7D7;*/\n}\n.sidenav ul li:hover{\n    background-color: #fff;\n}\n.sidenav ul li a:hover{\n    color: #00a0df;\n}\n.sidenav ul .active{\n    background-color: #fff;\n}\n.sidenav ul .active a{\n    color: #00a0df;\n}\n.sidenav ul li a i{\n    padding: 0 6px;\n}\n\n.sidenav a:hover, .offcanvas a:focus{\n    color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n}\n#menuicon{\n    line-height: 50px;\n    font-size:30px;\n    cursor:pointer;\n    color: #00a0df;\n    float: left;\n}\n#mySidenav {\n    display: none;\n    transition: display .5s;\n}\n#main {\n    transition: margin-left .5s;\n    padding: 16px;\n}\n\nli[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\n    content: '\\E259';\n    display: block;\n    position: absolute;\n    right: 20px;\n    font-family: 'Glyphicons Halflings';\n    font-size: 0.6em;\n}\nli[aria-expanded=\"true\"]::before {\n    content: '\\E260';\n}\n\n.navbar-right li{ \n    display: inline-block;\n}\n\n/*************** Landing page header *****************/\n.intro-header {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  text-align: center;\n  color: #f8f8f8;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/intro-bg.jpg") + ") no-repeat center center;\n  /*background: url(../assets/images/bg3.jpg) no-repeat center center;*/\n  background-color: rgba(0, 0, 0, 0.8) !important;\n  background-size: cover;\n  height: calc(100vh - 80px);\n}\n\n.intro-message {\n    height: 80vh;\n    position: relative;\n    padding-top: 15%;\n    /*padding-bottom: 15%;*/\n    background-color: rgba(50, 50, 50, 0.5) !important;\n}\n\n.intro-message>h1 {\n  margin: 0;\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);\n  font-size: 6rem;\n}\n\n.intro-divider {\n  /*width: 400px;*/\n  padding: inherit;\n  border-top: 1px solid #f8f8f8;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.intro-message>h3 {\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);\n}\n.intro-message .btn{\n    color: aliceblue;\n    border-color: aliceblue;\n}\n.intro-message .btn:hover{\n    color: #fed189;\n    background-color: aliceblue;\n}\n.intro-social-buttons i {\n  font-size: 80%;\n}\n\n.section{\n    margin:2em auto;\n}\n.section .img-responsive {\n    margin: 0 auto;\n}\n\n.card {\n    /* Add shadows to create the \"card\" effect */\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n/*************** ./Landing page header *****************/\n/* .... Navigation link styles copied from angular.io */\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!---\n<div *ngIf=\"isValid;then content\"></div>\n\n<ng-template #content>content here...</ng-template>\n--->\n<div  *ngIf=\"auth.isAuthenticated();else landingPage\">\n    <div id=\"mySidenav\" class=\"sidenav\">\n        <!---<a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a>--->\n        <ul>\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/sensor-view\"><i class=\"fa fa-microchip fa-lg\"></i>Sensor view</a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/history\"><i class=\"fa fa-history fa-lg\"></i>History</a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/charts\"><i class=\"fa fa-bar-chart fa-lg\"></i>Charts</a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a routerLink=\"/profile\"><i class=\"fa fa-user fa-lg\"></i> Profile</a>\n            </li>\n            \n        </ul>\n    </div>\n    <div id=\"main\">\n        <app-navigation></app-navigation>\n        <router-outlet></router-outlet>\n    </div>\n</div>\n\n<ng-template #landingPage>\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#mobileBar\">\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span> \n                </button>\n                <a class=\"navbar-brand\" routerLink=\"/\"  routerLinkActive=\"active\">Smart<span class=\"lite\">OFFICE</span></a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"mobileBar\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li><a routerLinkActive=\"active\" (click)=\"auth.login()\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i><span> Sign Up</span></a></li>\n                    <li><a routerLinkActive=\"active\" (click)=\"auth.login()\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i><span> Login</span></a></li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <!-- Header -->\n    <header class=\"intro-header\">\n        <div class=\"container\">\n            <div class=\"intro-message\">\n                <h1 class=\"orangish\">SMART<span class=\"lite\">OFFICE</span></h1>\n                <h3>Sensor Data Visualization</h3>\n                <hr class=\"intro-divider\">\n                <ul class=\"list-inline intro-social-buttons\">\n                    <li class=\"list-inline-item\">\n                        <a href=\"#\" class=\"btn btn-secondary btn-lg\">\n                            <i class=\"fa fa-twitter fa-fw\"></i>\n                            <span class=\"network-name .hidden-xs\">Twitter</span>\n                        </a>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <a href=\"#\" class=\"btn btn-secondary btn-lg\">\n                            <i class=\"fa fa-github fa-fw\"></i>\n                            <span class=\"network-name .hidden-xs\">Github</span>\n                        </a>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <a href=\"#\" class=\"btn btn-secondary btn-lg\">\n                            <i class=\"fa fa-linkedin fa-fw\"></i>\n                            <span class=\"network-name .hidden-xs\">Linkedin</span>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </header>\n    <!-- Container (About Section) -->\n    <div class=\"container\">\n        <div class=\"row section\">\n            <div class=\"col-sm-6\">\n                <h2 class=\"lite\">Realtime Page</h2><br>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n            </div>\n            <div class=\"card col-sm-6\">\n                <img class=\"img-responsive\" src=\"../assets/images/realtime-screenshot.png\" alt=\"Realtime page\">\n            </div>\n        </div>\n        <div class=\"row section\">\n            <div class=\"col-sm-6 col-sm-push-6\">\n                <h2 class=\"lite\">Sensor View</h2><br>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n            </div>\n            <div class=\"card col-sm-6 col-sm-pull-6\">\n                <img class=\"img-responsive\" src=\"../assets/images/sensor-view.gif\" alt=\"Realtime page\">\n            </div>\n        </div>\n        <div class=\"row section\">\n            <div class=\"col-sm-6\">\n                <h2 class=\"lite\">Realtime Page</h2><br>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n            </div>\n            <div class=\"card col-sm-6\">\n                <img class=\"img-responsive\" src=\"../assets/images/realtime-screenshot.png\" alt=\"Realtime page\">\n            </div>\n        </div>\n        <div class=\"row section\">\n            <div class=\"col-sm-6 col-sm-push-6\">\n                <h2 class=\"lite\">Sensor View</h2><br>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n            </div>\n            <div class=\"card col-sm-6 col-sm-pull-6\">\n                <img class=\"img-responsive\" src=\"../assets/images/sensor-view.gif\" alt=\"Realtime page\">\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app works on cloud 9!';
        auth.handleAuthentication();
    }
    AppComponent.prototype.ngOnInit = function () {
        /*if (this.auth.userProfile) {
          this.profile = this.auth.userProfile;
        } else {
          this.auth.getProfile((err, profile) => {
            this.profile = profile;
          });
        }*/
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_realtime_service__ = __webpack_require__("../../../../../src/app/services/realtime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__side_nav_side_nav_component__ = __webpack_require__("../../../../../src/app/side-nav/side-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__history_history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__charts_charts_component__ = __webpack_require__("../../../../../src/app/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__barchart_barchart_component__ = __webpack_require__("../../../../../src/app/barchart/barchart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__callback_callback_component__ = __webpack_require__("../../../../../src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__linechart_linechart_component__ = __webpack_require__("../../../../../src/app/linechart/linechart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sensor_view_sensor_view_component__ = __webpack_require__("../../../../../src/app/sensor-view/sensor-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { AUTH_PROVIDERS } from 'angular2-jwt';





//import { AuthService } from './services/auth.service';








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__side_nav_side_nav_component__["a" /* SideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_13__history_history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_14__charts_charts_component__["a" /* ChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__barchart_barchart_component__["a" /* BarchartComponent */],
                __WEBPACK_IMPORTED_MODULE_16__callback_callback_component__["a" /* CallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_17__linechart_linechart_component__["a" /* LinechartComponent */],
                __WEBPACK_IMPORTED_MODULE_18__sensor_view_sensor_view_component__["a" /* SensorViewComponent */],
                __WEBPACK_IMPORTED_MODULE_19__navigation_navigation_component__["a" /* NavigationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["b" /* appRoutingProviders */],
                __WEBPACK_IMPORTED_MODULE_10__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_11__services_realtime_service__["a" /* RealtimeService */],
                __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* Auth */]
                /*AUTH_PROVIDERS,
                AuthService*/
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_charts_component__ = __webpack_require__("../../../../../src/app/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sensor_view_sensor_view_component__ = __webpack_require__("../../../../../src/app/sensor-view/sensor-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__callback_callback_component__ = __webpack_require__("../../../../../src/app/callback/callback.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'history',
        component: __WEBPACK_IMPORTED_MODULE_3__history_history_component__["a" /* HistoryComponent */]
    },
    {
        path: 'charts',
        component: __WEBPACK_IMPORTED_MODULE_4__charts_charts_component__["a" /* ChartsComponent */]
    },
    {
        path: 'sensor-view',
        component: __WEBPACK_IMPORTED_MODULE_5__sensor_view_sensor_view_component__["a" /* SensorViewComponent */]
    },
    {
        path: 'callback',
        component: __WEBPACK_IMPORTED_MODULE_6__callback_callback_component__["a" /* CallbackComponent */]
    },
    { path: '**', redirectTo: '' }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/barchart/barchart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".d3-chart {\n  width: 100%;\n  height: 350px;\n}\n\n.d3-chart .axis path,\n.d3-chart .axis line {\n  stroke: #999;\n}\n\n.d3-chart .axis text {\n  fill: #999;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/barchart/barchart.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>{{chartTitle}}</h4>\n<div class=\"d3-chart\" #chart></div>"

/***/ }),

/***/ "../../../../../src/app/barchart/barchart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarchartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarchartComponent = (function () {
    function BarchartComponent() {
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
    }
    BarchartComponent.prototype.ngOnInit = function () {
        this.createChart();
        if (this.data) {
            this.updateChart();
        }
    };
    BarchartComponent.prototype.ngOnChanges = function () {
        if (this.chart) {
            this.updateChart();
        }
    };
    BarchartComponent.prototype.createChart = function () {
        //this.chartTitle = 'test';
        var element = this.chartContainer.nativeElement;
        this.width = element.offsetWidth - this.margin.left - this.margin.right;
        this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](element).append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', element.offsetHeight);
        // chart plot area
        this.chart = svg.append('g')
            .attr('class', 'bars')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")");
        // define X & Y domains
        var xDomain = this.data.map(function (d) { return d[0]; });
        var yDomain = [0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](this.data, function (d) { return d[1]; })];
        // create scales
        this.xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleBand"]().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
        this.yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().domain(yDomain).range([this.height, 0]);
        // bar colors
        this.colors = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().domain([0, this.data.length]).range(['red', 'blue']);
        // x & y axis
        this.xAxis = svg.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', "translate(" + this.margin.left + ", " + (this.margin.top + this.height) + ")")
            .call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"](this.xScale));
        this.yAxis = svg.append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")")
            .call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"](this.yScale));
    };
    BarchartComponent.prototype.updateChart = function () {
        var _this = this;
        // update scales & axis
        this.xScale.domain(this.data.map(function (d) { return d[0]; }));
        this.yScale.domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](this.data, function (d) { return d[1]; })]);
        this.colors.domain([0, this.data.length]);
        this.xAxis.transition().call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"](this.xScale));
        this.yAxis.transition().call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"](this.yScale));
        var update = this.chart.selectAll('.bar')
            .data(this.data);
        // remove exiting bars
        update.exit().remove();
        // update existing bars
        this.chart.selectAll('.bar').transition()
            .attr('x', function (d) { return _this.xScale(d[0]); })
            .attr('y', function (d) { return _this.yScale(d[1]); })
            .attr('width', function (d) { return _this.xScale.bandwidth(); })
            .attr('height', function (d) { return _this.height - _this.yScale(d[1]); })
            .style('fill', function (d, i) { return _this.colors(i); });
        // add new bars
        update
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', function (d) { return _this.xScale(d[0]); })
            .attr('y', function (d) { return _this.yScale(0); })
            .attr('width', this.xScale.bandwidth())
            .attr('height', 0)
            .style('fill', function (d, i) { return _this.colors(i); })
            .transition()
            .delay(function (d, i) { return i * 10; })
            .attr('y', function (d) { return _this.yScale(d[1]); })
            .attr('height', function (d) { return _this.height - _this.yScale(d[1]); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('chart'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
    ], BarchartComponent.prototype, "chartContainer", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
        __metadata("design:type", Object)
    ], BarchartComponent.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
        __metadata("design:type", String)
    ], BarchartComponent.prototype, "chartTitle", void 0);
    BarchartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-barchart',
            template: __webpack_require__("../../../../../src/app/barchart/barchart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/barchart/barchart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BarchartComponent);
    return BarchartComponent;
    var _a;
}());

//# sourceMappingURL=barchart.component.js.map

/***/ }),

/***/ "../../../../../src/app/callback/callback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/images/loading.svg\" alt=\"loading\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallbackComponent = (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-callback',
            template: __webpack_require__("../../../../../src/app/callback/callback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/callback/callback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CallbackComponent);
    return CallbackComponent;
}());

//# sourceMappingURL=callback.component.js.map

/***/ }),

/***/ "../../../../../src/app/charts/charts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#barChart{\n  width: 80vw;\n  height: 80vh;\n}\n.bar {\n  fill: #fd6309\n}\n\n.bar:hover {\n  fill: #0080FF\n}\n/* CSS used here will be applied after bootstrap.css */\n\n.thumbnail {\n\tpadding:0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/charts.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i> | {{title}}</h2>\n\n<!---\n<div id=\"barChart\" #barChart>\n    <svg></svg>\n</div>\n--->\n<div class=\"col-sm-6 col-xs-12\">\n    <app-barchart *ngIf=\"tempratureData\" [data]=\"tempratureData\" [chartTitle]=\"chartTitleTem\"></app-barchart>\n</div>\n<div class=\"col-sm-6 col-xs-12\">\n    <app-barchart *ngIf=\"humidityData\" [data]=\"humidityData\" [chartTitle]=\"chartTitleHum\"></app-barchart>\n</div>\n<div class=\"col-sm-6 col-xs-12\">\n    <app-barchart *ngIf=\"pressureData\" [data]=\"pressureData\" [chartTitle]=\"chartTitlePre\"></app-barchart>\n</div>\n<div class=\"col-sm-6 col-xs-12\">\n    <app-barchart *ngIf=\"illuminationData\" [data]=\"illuminationData\" [chartTitle]=\"chartTitleIll\"></app-barchart>\n</div>\n<div class=\"col-sm-6 col-xs-12\">\n    <app-barchart *ngIf=\"loudnessData\" [data]=\"loudnessData\" [chartTitle]=\"chartTitleLou\"></app-barchart>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Component, OnInit } from '@angular/core';
//import { Component, ElementRef, OnInit, ViewEncapsulation } from "@angular/core";


var ChartsComponent = (function () {
    //constructor(private element: ElementRef, private sensorData: DataService) { }
    function ChartsComponent(sensorData) {
        this.sensorData = sensorData;
        /*@ViewChild('barChart') private chartContainer: ElementRef;*/
        /*data = [
                  {location: '183 Sensor-0',temperature:33},
                  {location: 'c06 Sensor-1',temperature:12},
                  {location: '580 Sensor-2',temperature:41},
                  {location: '386 Sensor-3',temperature:16},
                  {location: 'f05 Sensor-4',temperature:39},
                  {location: '605 Sensor-5',temperature:29}
              ];*/
        this.locationName = '';
        this.selectedLocation = {};
        this.data = [];
        //posts = [];
        this.title = "Charts";
        //Title of the charts
        this.chartTitleTem = 'Temperature (°C)';
        this.chartTitleHum = 'Humidity (%)';
        this.chartTitlePre = 'Pressure (bar)';
        this.chartTitleIll = 'Illumination (lx)';
        this.chartTitleLou = 'Loudness (dB)';
    }
    ChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* The chart is rendered here. */
        this.sensorData.getSensorData().subscribe(function (posts) {
            _this.tempratureData = [];
            _this.humidityData = [];
            _this.pressureData = [];
            _this.illuminationData = [];
            _this.loudnessData = [];
            delete posts[0]._id; //removes the _id : value pair leaving the object with sensor records only
            for (var key in posts[0]) {
                var temperatures = [key, posts[0][key].readings[0].ambientTemperature];
                var humidities = [key, posts[0][key].readings[0].humidity];
                var pressures = [key, posts[0][key].readings[0].pressure];
                var illuminations = [key, posts[0][key].readings[0].lux];
                var loudnesses = [key, posts[0][key].readings[0].loudness];
                _this.tempratureData.push(temperatures);
                _this.humidityData.push(humidities);
                _this.pressureData.push(pressures);
                _this.illuminationData.push(illuminations);
                _this.loudnessData.push(loudnesses);
            }
        });
    };
    ChartsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-charts',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ViewEncapsulation */].None,
            template: __webpack_require__("../../../../../src/app/charts/charts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/charts.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
    ], ChartsComponent);
    return ChartsComponent;
    var _a;
}());

//# sourceMappingURL=charts.component.js.map

/***/ }),

/***/ "../../../../../src/app/history/history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title\"><i class=\"fa fa-history\" aria-hidden=\"true\"></i> | {{title}}</h2>\n\n<!---<p>Sensor Data: {{ objectKeys(posts[\"0\"]).length }} records found!</p>----> \n<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">Sensor archive</div>\n    <div class=\"panel-body table-responsive\">\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Location</th>\n                    <th>Office</th>\n                    <th>Mac Address</th>\n                    <th>Time</th>\n                    <th>Temperature</th>\n                    <th>Humidity</th>\n                    <th>Pressure</th>\n                    <th>Illumination</th>\n                    <th>Loudness</th>\n                    <th>Remark</th>\n                </tr>\n            </thead>\n            <tbody *ngFor = \"let post of posts\">\n                <tr *ngFor = \"let key of objectKeys(post) | paginate: { itemsPerPage:8, currentPage: p }; let i = index\">\n                    <td *ngIf='(key != \"_id\")'>{{ i + 1 }}</td><!---- ngIf is not necessary here! ---->\n                    <td>{{ post[key].location }}</td>\n                    <td>{{ post[key].office }}</td>\n                    <td>{{ post[key].mac }}</td>\n                    <td>\n                        <tr *ngFor = \"let readings of post[key].readings;\">{{readings.read_time | date: 'medium'}}</tr>\n                    </td>\n                    <td>\n                        <tr *ngFor = \"let readings of post[key].readings;\">{{readings.ambientTemperature}} &#8451;</tr>\n                    </td>\n                    <td>\n                        <tr *ngFor = \"let readings of post[key].readings;\">{{readings.humidity}} %</tr>\n                    </td>\n                    <td>\n                        <tr *ngFor = \"let readings of post[key].readings;\">{{readings.pressure}} bar</tr>\n                    </td>\n                    <td>\n                        <tr *ngFor = \"let readings of post[key].readings;\">{{readings.lux}} lux</tr>\n                    </td>\n                    <td>\n                        <tr *ngFor = \"let readings of post[key].readings;\">{{readings.loudness}} dB</tr>\n                    </td>\n                    <td>\n                        <tr *ngFor = \"let readings of post[key].readings;\"></tr>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"panel-footer\">\n        <pagination-controls (pageChange) = \"p=$event\"></pagination-controls>\n    </div>\n</div>\n<!---\n<div>\n    <pre class=\"row\">{{ tempratureData | json }}</pre>\n</div>\n<div class=\"col-sm-6 col-xs-12\">\n    <app-barchart *ngIf=\"tempratureData\" [data]=\"tempratureData\" [chartTitle]=\"chartTitleTem\"></app-barchart>\n</div>\n<div class=\"col-sm-6 col-xs-12\">\n    <app-barchart *ngIf=\"humidityData\" [data]=\"humidityData\" [chartTitle]=\"chartTitleHum\"></app-barchart>\n</div>\n\n--->\n"

/***/ }),

/***/ "../../../../../src/app/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryComponent = (function () {
    //sensors = [];
    function HistoryComponent(sensorData) {
        this.sensorData = sensorData;
        /*
        _id: string;
        mac: string;
        objectTemperature: number;
        ambientTemperature: number;
        humidity: number;
        pressure: number;
        lux: number;
        loudness: number;
        location: string;
        office: string;
        read_time: number;
        */
        this.posts = [];
        this.objectKeys = Object.keys;
        this.title = 'History';
        this.chartTitleTem = 'Temperature Chart';
        this.chartTitleHum = 'Humidity Chart';
        /*for(let i = 0; i < 60; i++){
          this.sensors.push(`Location ${i}.0`);
        }*/
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sensorData.getSensorData().subscribe(function (posts) {
            _this.tempratureData = [];
            _this.humidityData = [];
            delete posts[0]._id; //removes the _id : value pair leaving the object with sensor records only
            console.log(posts);
            _this.posts = posts;
            for (var key in posts[0]) {
                var temperatures = [key, posts[0][key].readings[0].ambientTemperature];
                var humidities = [key, posts[0][key].readings[0].humidity];
                _this.tempratureData.push(temperatures);
                _this.humidityData.push(humidities);
            }
        });
    };
    HistoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-history',
            template: __webpack_require__("../../../../../src/app/history/history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
    ], HistoryComponent);
    return HistoryComponent;
    var _a;
}());

/*
interface Post{
  //id: string;
  mac_address: string;
  objectTemperature: number;
  ambientTemperature: number;
  humidity: number;
  pressure: number;
  lux: number;
  loudness: number;
  location: string;
  office: string;
  read_time: number;
}
*/
//# sourceMappingURL=history.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".info-box-number{\n    font-size: 2em;\n    font-weight: lighter;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!---<h4 *ngIf=\"auth.isAuthenticated()\">\n  You are logged in!\n</h4>----->\n<h4 *ngIf=\"!auth.isAuthenticated()\">\n  You are not logged in! Please <a (click)=\"auth.login()\">Log In</a> to continue.\n</h4>\n<h2 class=\"title\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> | {{title}}</h2>\n<!---<p>Sensor Data: {{ objectKeys(posts[\"0\"]).length }} records found!</p>----> \n<div class=\"row\">\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n            <span class=\"info-box-icon bg-firebrick\"><i class=\"ion fa fa-thermometer-full\" aria-hidden=\"true\"></i></span>\n            <ul class=\"info-box-content\">\n                <li class=\"info-box-text\">Max Temperature</li>\n                <li class=\"info-box-number\">{{MinAndMax.maxTemperature | number:'1.2-2' }}<small>&#8451;</small></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n            <span class=\"info-box-icon bg-aqua\"><i class=\"ion fa fa-thermometer-empty\" aria-hidden=\"true\"></i></span>\n            <ul class=\"info-box-content\">\n                <li class=\"info-box-text\">Min Temperature</li>\n                <li class=\"info-box-number\">{{MinAndMax.minTemperature | number:'1.2-2' }}<small>&#8451;</small></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n            <span class=\"info-box-icon bg-firebrick\"><i class=\"ion fa fa-mixcloud\" aria-hidden=\"true\"></i></span>\n            <ul class=\"info-box-content\">\n                <li class=\"info-box-text\">Max Humidity</li>\n                <li class=\"info-box-number\">{{MinAndMax.maxHumidity | number:'1.2-2' }}<small>%</small></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n            <span class=\"info-box-icon bg-aqua\"><i class=\"ion fa fa-mixcloud\" aria-hidden=\"true\"></i></span>\n            <ul class=\"info-box-content\">\n                <li class=\"info-box-text\">Min Humidity</li>\n                <li class=\"info-box-number\">{{MinAndMax.minHumidity | number:'1.2-2' }}<small>%</small></li>\n            </ul>\n        </div>\n    </div>\n</div>\n<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">Sensor table</div>\n    <div class=\"panel-body table-responsive\">\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Time</th>\n                    <th>Location</th>\n                    <th>Office</th>\n                    <th>Mac Address</th>\n                    <th>Temperature</th>\n                    <th>Humidity</th>\n                    <th>Pressure</th>\n                    <th>Illumination</th>\n                    <th>Loudness</th>\n                    <th>Remark</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor = \"let post of posts | paginate: { itemsPerPage:8, currentPage: p }; let i = index\">\n                    <td>{{i + 1}}</td><!---- ngIf is not necessary here! ---->\n                    <td>{{ posts[i].read_time | date: 'mediumTime'}}</td>\n                    <td>{{ posts[i].location }}</td>\n                    <td>{{ posts[i].office }}</td>\n                    <td>{{ posts[i].mac }}</td>\n                    <!---<td>{{ post[key][\"mac-address\"] }}</td>   to avoid a hyphen problem, key notation is used instead! ---->\n                    <td>{{ posts[i].temperature | number:'1.2-2' }} &#8451;</td>\n                    <td>{{ posts[i].humidity | number:'1.2-2' }} %</td>\n                    <td>{{ posts[i].pressure | number:'1.2-2' }} bar</td>\n                    <td>{{ posts[i].lux | number:'1.2-2' }} lux</td>\n                    <td>{{ posts[i].loudness | number:'1.2-2' }} dB</td>\n                    <td></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"panel-footer\">\n        <pagination-controls (pageChange) = \"p=$event\"></pagination-controls>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_realtime_service__ = __webpack_require__("../../../../../src/app/services/realtime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import * as io from 'socket.io-client';
var HomeComponent = (function () {
    function HomeComponent(_RealtimeService, auth) {
        this._RealtimeService = _RealtimeService;
        this.auth = auth;
        this.MinAndMax = {};
        this.objectKeys = Object.keys;
        this.title = 'Realtime Data';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.posts = new Array();
        this._RealtimeService.on('sensor_status', function (data) {
            updateData(data, _this.posts);
            _this.MinAndMax = {
                "maxTemperature": getMaxOf(getReadings(_this.posts).temperatureArray),
                "minTemperature": getMinOf(getReadings(_this.posts).temperatureArray),
                "maxHumidity": getMaxOf(getReadings(_this.posts).humidityArray),
                "minHumidity": getMinOf(getReadings(_this.posts).humidityArray)
            };
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_realtime_service__["a" /* RealtimeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_realtime_service__["a" /* RealtimeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* Auth */]) === "function" && _b || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());

function updateData(source, destination) {
    var found = [];
    for (var i in source) {
        found.push(false);
        for (var j in destination) {
            if (source[i].mac == destination[j].mac) {
                //desArr.find(i);
                console.log("Found " + source[i].mac + " at " + j + " ... updating values");
                destination[j] = source[i];
                found[i] = true;
            }
        }
        if (found[i] == false) {
            console.log("Adding new sensor data for " + source[i].mac);
            destination.push(source[i]);
        }
    }
}
;
function getReadings(sensorList) {
    var temperatureArray = [];
    var humidityArray = [];
    for (var _i = 0, sensorList_1 = sensorList; _i < sensorList_1.length; _i++) {
        var item = sensorList_1[_i];
        //console.log("Testing: ", item);
        temperatureArray.push(item.temperature);
        humidityArray.push(item.humidity);
    }
    return { "temperatureArray": temperatureArray, "humidityArray": humidityArray };
}
function getMaxOf(numArray) {
    return Math.max.apply(null, numArray);
}
function getMinOf(numArray) {
    return Math.min.apply(null, numArray);
}
/*existsIn(value, srcArr){
  src
}
addData(){
  
}
addData(){
  
}*/ 
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/linechart/linechart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".d3-chart {\n  width: 100%;\n  height: 400px;\n}\n\n.d3-chart .axis path,\n.d3-chart .axis line {\n  stroke: #999;\n}\n\n.d3-chart .axis text {\n  fill: #999;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/linechart/linechart.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>{{chartTitle}}</h4>\n<div class=\"d3-chart\" #guageChart></div>\n"

/***/ }),

/***/ "../../../../../src/app/linechart/linechart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinechartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinechartComponent = (function () {
    function LinechartComponent() {
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
    }
    LinechartComponent.prototype.ngOnInit = function () {
        this.createChart();
        if (this.data) {
            this.updateChart();
        }
    };
    LinechartComponent.prototype.ngOnChanges = function () {
        if (this.chart) {
            this.updateChart();
        }
    };
    LinechartComponent.prototype.createChart = function () {
        //this.chartTitle = 'test';
        var element = this.chartContainer.nativeElement;
        this.width = element.offsetWidth - this.margin.left - this.margin.right;
        this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](element).append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', element.offsetHeight);
        // chart plot area
        this.chart = svg.append('g')
            .attr('class', 'bars')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")");
        // define X & Y domains
        var xDomain = this.data.map(function (d) { return d[0]; });
        var yDomain = [0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](this.data, function (d) { return d[1]; })];
        // create scales
        this.xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleBand"]().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
        this.yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().domain(yDomain).range([this.height, 0]);
        // bar colors
        this.colors = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().domain([0, this.data.length]).range(['red', 'blue']);
        // x & y axis
        this.xAxis = svg.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', "translate(" + this.margin.left + ", " + (this.margin.top + this.height) + ")")
            .call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"](this.xScale));
        this.yAxis = svg.append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")")
            .call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"](this.yScale));
    };
    LinechartComponent.prototype.updateChart = function () {
        var _this = this;
        // update scales & axis
        this.xScale.domain(this.data.map(function (d) { return d[0]; }));
        this.yScale.domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](this.data, function (d) { return d[1]; })]);
        this.colors.domain([0, this.data.length]);
        this.xAxis.transition().call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"](this.xScale));
        this.yAxis.transition().call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"](this.yScale));
        var update = this.chart.selectAll('.bar')
            .data(this.data);
        // remove exiting bars
        update.exit().remove();
        // update existing bars
        this.chart.selectAll('.bar').transition()
            .attr('x', function (d) { return _this.xScale(d[0]); })
            .attr('y', function (d) { return _this.yScale(d[1]); })
            .attr('width', function (d) { return _this.xScale.bandwidth(); })
            .attr('height', function (d) { return _this.height - _this.yScale(d[1]); })
            .style('fill', function (d, i) { return _this.colors(i); });
        // add new bars
        update
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', function (d) { return _this.xScale(d[0]); })
            .attr('y', function (d) { return _this.yScale(0); })
            .attr('width', this.xScale.bandwidth())
            .attr('height', 0)
            .style('fill', function (d, i) { return _this.colors(i); })
            .transition()
            .delay(function (d, i) { return i * 10; })
            .attr('y', function (d) { return _this.yScale(d[1]); })
            .attr('height', function (d) { return _this.height - _this.yScale(d[1]); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('guageChart'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
    ], LinechartComponent.prototype, "chartContainer", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
        __metadata("design:type", Object)
    ], LinechartComponent.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
        __metadata("design:type", String)
    ], LinechartComponent.prototype, "chartTitle", void 0);
    LinechartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-linechart',
            template: __webpack_require__("../../../../../src/app/linechart/linechart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/linechart/linechart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinechartComponent);
    return LinechartComponent;
    var _a;
}());

//# sourceMappingURL=linechart.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-brand{\n    font-size: 22px;\n    font-weight: 300;\n    color: #fed189;\n    /*float: none;\n    margin-top: 15px;*/\n    text-transform: uppercase;\n}\n.navbar-default .navbar-nav>li>a {\n    color: #00a0df;\n}\n.navbar-default .navbar-brand:hover {\n    color: #fed189;\n    background-color: transparent;\n}\n.welcome.img-circle{\n    height: 20px;\n}\n.orangish{\n    color: #fed189;\n}\n.lite{\n    color: #00a0df !important;\n}\n#menuicon{\n    line-height: 50px;\n    font-size:30px;\n    cursor:pointer;\n    color: #00a0df;\n    float: left;\n}\n\nli[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\n    content: '\\E259';\n    display: block;\n    position: absolute;\n    right: 20px;\n    font-family: 'Glyphicons Halflings';\n    font-size: 0.6em;\n}\nli[aria-expanded=\"true\"]::before {\n    content: '\\E260';\n}\n\n.navbar-right li{ \n    display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <span id=\"menuicon\">&#9776;</span>\n            <a class=\"navbar-brand\" routerLink=\"/\"  routerLinkActive=\"active\">Smart<span class=\"lite\">OFFICE</span></a>\n        </div>\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li routerLinkActive=\"active\"><a routerLink=\"/profile\"><img src=\"{{profile?.picture}}\" class=\"welcome img-circle\" alt=\"avatar\"> {{ profile?.name }}</a></li>\n            <li><a routerLinkActive=\"active\" (click)=\"auth.logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(auth) {
        this.auth = auth;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
            });
        }
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */]) === "function" && _a || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a;
}());

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.profile-area img {\n  max-width: 150px;\n  margin-bottom: 20px;\n}*/\n\n.panel-body h3 {\n  margin-top: 0;\n}\n/****** Copied from How To Create a Profile Card W3Schhols *******/\n.card img{\n  width: 100%;\n}\n.card {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    /*max-width: 300px;*/\n    /*margin: auto;\n    text-align: center;*/\n}\n\n.title {\n    color: grey;\n    font-size: 18px;\n}\n\nbutton {\n    border: none;\n    outline: 0;\n    display: inline-block;\n    padding: 8px;\n    color: white;\n    background-color: #000;\n    text-align: center;\n    cursor: pointer;\n    width: 100%;\n    font-size: 18px;\n}\n\na {\n    text-decoration: none;\n    font-size: 22px;\n    color: black;\n}\n\nbutton:hover, a:hover {\n    opacity: 0.7;\n}\n\n/**** END ****/\n\n\n/******* Angle before the picture **********/\n.angel-style:before {\n    background-color: #fff;\n    content: \"\";\n    height: 100%;\n    position: absolute;\n    right: -30px;\n    top: 0;\n    -webkit-transform: rotate(5deg) scale(1.2);\n    transform: rotate(5deg) scale(1.2);\n    width: 60px;\n    z-index: -1;\n}\n\n/******* END -------------------- **********/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default profile-area\">\n  <div class=\"panel-heading\">\n    <h2><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i> | {{title}}</h2>\n  </div>\n  <div class=\"panel-body card\">\n    <div class=\"col-sm-4\">\n      <img src=\"{{profile?.picture}}\" class=\"avatar img-rounded\" alt=\"avatar\">\n    </div>\n    <div class=\"col-sm-8\">\n      <h1>{{ profile?.name }}</h1>\n      <h5><span class=\"label label-default\">Nick name :</span> {{ profile?.nickname }}</h5>\n      <h5><span class=\"label label-default\">Gender :</span> {{ profile?.gender }}</h5>\n      <h5><span class=\"label label-default\">Updated :</span> {{ profile?.updated_at | date: 'medium' }}</h5>\n      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n      <p><button>Contact</button></p>\n    </div>\n    <!---\n    <img src=\"{{profile?.picture}}\" class=\"avatar\" alt=\"avatar\">\n    <div>\n      <label><i class=\"glyphicon glyphicon-user\"></i> Nickname</label>\n      <h3 class=\"nickname\">{{ profile?.nickname }}</h3>\n    </div>\n    <pre class=\"full-profile\">{{ profile | json }}</pre>\n    --->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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
    function ProfileComponent(auth) {
        this.auth = auth;
        this.title = 'Profile';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
            });
        }
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* Auth */]) === "function" && _a || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/sensor-view/sensor-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#pieChart{\n  width: 80vw;\n  height: 80vh;\n}\n.bar {\n  fill: #fd6309\n}\n\n.bar:hover {\n  fill: #0080FF\n}\n/* CSS used here will be applied after bootstrap.css */\n\n.thumbnail {\n\tpadding:0;\n}\n.arc text {\n  font: 10px sans-serif;\n  text-anchor: middle;\n}\n\n.arc path {\n  stroke: #fff;\n}\n\n/***\nSVG Radial progress using d3.js\nA PEN BY Shell Bryson PRO\n***/\n#progress{\n  padding: 20px;\n}\n\n.radial-progress__text {\n  font-family: Arial, sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sensor-view/sensor-view.component.html":
/***/ (function(module, exports) {

module.exports = "<h2><i class=\"fa fa-microchip\" aria-hidden=\"true\"></i> | {{title}}</h2>\n<div *ngIf=\"posts\">\n    <!---<h4>Selected Location: {{selectedLocation.location}}</h4>---->\n    <label>Select Location: </label>\n    <select [(ngModel)]=\"selectedLocation\">\n        <option *ngFor=\"let sensor of posts\" [ngValue]=\"sensor\" name=\"sensor_location\">{{sensor.location}}\n            <!---<span *ngIf=\"showSad || h.emotion !== 'sad'\">\n                <option [ngValue]=\"h\">{{h.name}} ({{h.emotion}})</option>\n            </span>--->\n        </option>\n    </select>\n</div>\n<hr class=\"\">\n<div class=\"row\" *ngIf=\"selectedLocation\">\n    <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n            <span class=\"info-box-icon bg-teal\"><i class=\"ion fa fa-thermometer-full\" aria-hidden=\"true\"></i></span>\n            <ul class=\"info-box-content\">\n                <li class=\"info-box-text\">Temperature</li>\n                <li class=\"info-box-number\">{{selectedLocation.temperature | number:'1.2-2' }}<small> &#8451;</small></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n            <span class=\"info-box-icon bg-teal\"><i class=\"ion fa fa-mixcloud\" aria-hidden=\"true\"></i></span>\n            <ul class=\"info-box-content\">\n                <li class=\"info-box-text\">Humidity</li>\n                <li class=\"info-box-number\">{{selectedLocation.humidity | number:'1.2-2' }}<small> %</small></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n            <span class=\"info-box-icon bg-teal\"><i class=\"ion fa fa-tachometer\" aria-hidden=\"true\"></i></span>\n            <ul class=\"info-box-content\">\n                <li class=\"info-box-text\">Pressure</li>\n                <li class=\"info-box-number\">{{selectedLocation.pressure | number:'1.2-2' }}<small> bar</small></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n            <span class=\"info-box-icon bg-teal\"><i class=\"ion fa fa-lightbulb-o\" aria-hidden=\"true\"></i></span>\n            <ul class=\"info-box-content\">\n                <li class=\"info-box-text\">Illumination</li>\n                <li class=\"info-box-number\">{{selectedLocation.lux | number:'1.2-2' }}<small> lx</small></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n            <span class=\"info-box-icon bg-teal\"><i class=\"ion fa fa-volume-up\" aria-hidden=\"true\"></i></span>\n            <ul class=\"info-box-content\">\n                <li class=\"info-box-text\">Loudness</li>\n                <li class=\"info-box-number\">{{selectedLocation.loudness | number:'1.2-2' }}<small> dB</small></li>\n            </ul>\n        </div>\n    </div>\n</div>\n<hr class=\"\">\n<!---\n<div class=\"row\" *ngIf=\"selectedLocation\">\n    <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <div class=\"info-box text-center\" #tempChart\n        data-percentage=\"99\"\n        data-track-width=\"12\" \n        data-track-colour=\"D3D3D3\" \n        data-fill-colour=\"00C0FF\" \n        data-text-colour=\"00C0FF\"\n        data-stroke-colour=\"D3D3D3\" \n        data-stroke-spacing=\"0.5\">\n            \n        </div>\n    </div>\n    <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <div class=\"info-box\" #humChart>\n            \n        </div>\n    </div>\n    <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <div class=\"info-box\" #pressChart>\n            \n        </div>\n    </div>\n    <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <div class=\"info-box\" #luxChart>\n            \n        </div>\n    </div>\n    <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <div class=\"info-box\" #loudChart>\n            \n        </div>\n    </div>\n</div>\n<div id=\"progress\" \n    data-percentage=\"99\" \n    data-track-width=\"12\" \n    data-track-colour=\"D3D3D3\" \n    data-fill-colour=\"00C0FF\" \n    data-text-colour=\"00C0FF\" \n    data-stroke-colour=\"D3D3D3\" \n    data-stroke-spacing=\"0.5\"\n    #progress> \n</div>\n\n<div id=\"pieChart\" #pieChart>\n    <svg></svg>\n</div>\n\n<div class=\"col-sm-6 col-xs-12\">\n    <app-barchart *ngIf=\"tempratureData\" [data]=\"tempratureData\" [chartTitle]=\"chartTitleTem\"></app-barchart>\n</div>\n<div class=\"col-sm-6 col-xs-12\">\n    <app-barchart *ngIf=\"tempratureData\" [data]=\"tempratureData\" [chartTitle]=\"chartTitleTem\"></app-barchart>\n</div>\n<div>\n    <pre class=\"row\">{{ tempratureData | json }}</pre>\n</div>\n<div>\n    <pre class=\"row\">{{ posts | json }}</pre>\n</div>\n\n---->"

/***/ }),

/***/ "../../../../../src/app/sensor-view/sensor-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_realtime_service__ = __webpack_require__("../../../../../src/app/services/realtime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SensorViewComponent = (function () {
    function SensorViewComponent(element, _RealtimeService) {
        this.element = element;
        this._RealtimeService = _RealtimeService;
        /*data = [
                  {location: '183 Sensor-0',temperature:33},
                  {location: 'c06 Sensor-1',temperature:12},
                  {location: '580 Sensor-2',temperature:41},
                  {location: '386 Sensor-3',temperature:16},
                  {location: 'f05 Sensor-4',temperature:39},
                  {location: '605 Sensor-5',temperature:29}
              ];*/
        this.locationName = '';
        this.selectedLocation = {};
        this.objectKeys = Object.keys;
        this.title = 'Sensor View';
        this.chartTitleTem = 'Temperature Chart';
        this.chartTitleHum = 'Humidity Chart';
    }
    SensorViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.posts = new Array();
        this.tempratureData = [];
        this._RealtimeService.on('sensor_status', function (data) {
            console.log("This is my data: ", data);
            updateData(data, _this.posts, _this.tempratureData);
            _this.selectedLocation = _this.posts[0];
            //this.generateBarChart(this.selectedLocation["humidity"]);
            /*for(let sensor of this.posts){
              let temperatures = [sensor.location, sensor.temperature];
              let humidities = [sensor.location, sensor.humidity];
              this.tempratureData.push(temperatures);
              this.humidityData.push(humidities);
            }*/
        });
    };
    SensorViewComponent.prototype.generateBarChart = function (selectedLocation) {
        // set the dimensions and margins of the graph
        var margin = { top: 5, right: 20, bottom: 30, left: 40 };
        var element = this.temperatureChart.nativeElement;
        var chartSize = element.offsetWidth <= element.offsetHeight ? element.offsetWidth : element.offsetHeight;
        var width = chartSize - margin.left - margin.right;
        var height = chartSize - margin.top - margin.bottom;
        var start = 0;
        var StartAngle = -0.5 * Math.PI;
        var end = parseFloat(selectedLocation);
        var colours = {
            fill: '#' + element.dataset.fillColour,
            track: '#' + element.dataset.trackColour,
            text: '#' + element.dataset.textColour,
            stroke: '#' + element.dataset.strokeColour,
        };
        var radius = 100;
        var border = element.dataset.trackWidth;
        var strokeSpacing = element.dataset.strokeSpacing;
        var endAngle = 0.5 * Math.PI;
        /*let p = d3.precisionFixed(0.01)
        let formatText = d3.format("." + p + "f");*/
        var formatText = __WEBPACK_IMPORTED_MODULE_2_d3__["format"]('.01%');
        var boxSize = radius * 2;
        var count = end;
        var progress = start;
        var step = end < start ? -0.01 : 0.01;
        //Define the circle
        var circle = __WEBPACK_IMPORTED_MODULE_2_d3__["arc"]()
            .startAngle(StartAngle)
            .innerRadius(radius)
            .outerRadius(radius - border);
        ////setup SVG wrapper
        //let svg = d3.select(this.element.nativeElement).append('svg')
        var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](element)
            .append('svg')
            .attr('width', boxSize)
            .attr('height', boxSize);
        //plot area
        // ADD Group container
        var g = svg.append('g')
            .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');
        //Setup track
        var track = g.append('g').attr('class', 'radial-progress');
        track.append('path')
            .attr('class', 'radial-progress__background')
            .attr('fill', colours.track)
            .attr('stroke', colours.stroke)
            .attr('stroke-width', strokeSpacing + 'px')
            .attr('d', circle.endAngle(endAngle));
        //Add colour fill
        var value = track.append('path')
            .attr('class', 'radial-progress__value')
            .attr('fill', colours.fill)
            .attr('stroke', colours.stroke)
            .attr('stroke-width', strokeSpacing + 'px');
        //Add text value
        var numberText = track.append('text')
            .attr('class', 'radial-progress__text')
            .attr('fill', colours.text)
            .attr('text-anchor', 'middle')
            .attr('dy', '-0.5rem');
        function update(progress) {
            //update position of endAngle
            value.attr('d', circle.endAngle(StartAngle + 2 * endAngle * progress));
            //update text value
            numberText.text(formatText(progress));
        }
        (function iterate() {
            //call update to begin animation
            update(progress);
            if (count > 0) {
                //reduce count till it reaches 0
                count--;
                //increase progress
                progress += step;
                //Control the speed of the fill
                setTimeout(iterate, 10);
            }
        })();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('tempChart'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
    ], SensorViewComponent.prototype, "temperatureChart", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('humChart'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object)
    ], SensorViewComponent.prototype, "humidityChart", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('presChart'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _c || Object)
    ], SensorViewComponent.prototype, "pressureChart", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('luxChart'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _d || Object)
    ], SensorViewComponent.prototype, "luxChart", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('loudChart'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _e || Object)
    ], SensorViewComponent.prototype, "loudnessChart", void 0);
    SensorViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-sensor-view',
            template: __webpack_require__("../../../../../src/app/sensor-view/sensor-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sensor-view/sensor-view.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__services_realtime_service__["a" /* RealtimeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_realtime_service__["a" /* RealtimeService */]) === "function" && _g || Object])
    ], SensorViewComponent);
    return SensorViewComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

function updateData(source, destination, temperature) {
    var found = [];
    for (var i in source) {
        found.push(false);
        for (var j in destination) {
            if (source[i].mac == destination[j].mac) {
                //desArr.find(i);
                console.log("Found " + source[i].mac + " at " + j + " ... updating values");
                destination[j] = source[i];
                temperature[i][1] = source[i].temperature;
                found[i] = true;
            }
        }
        if (found[i] == false) {
            console.log("Adding new sensor data for " + source[i].mac);
            destination.push(source[i]);
            temperature.push([source[i].location, source[i].temperature]);
        }
    }
}
;
//# sourceMappingURL=sensor-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_variables__ = __webpack_require__("../../../../../src/app/services/auth0-variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_auth0_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Auth = (function () {
    function Auth(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_4_auth0_js__["WebAuth"]({
            clientID: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].clientID,
            domain: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain,
            responseType: 'token id_token',
            audience: "https://" + __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain + "/userinfo",
            redirectUri: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].callbackURL,
            scope: 'openid profile'
        });
    }
    Auth.prototype.login = function () {
        this.auth0.authorize();
    };
    Auth.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    Auth.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    Auth.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    Auth.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    Auth.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    Auth = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], Auth);
    return Auth;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth0-variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    clientID: 'CRJzORwBvP0XiO1ldgAtmD609OkOcKNj',
    domain: 'mitikubw.eu.auth0.com',
    callbackURL: 'http://thesis-mitikubw.c9users.io/callback'
};
//# sourceMappingURL=auth0-variables.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        console.log("Data Service connected!");
    }
    DataService.prototype.getSensorData = function () {
        return this.http.get('http://thesis-mitikubw.c9users.io/api')
            .map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], DataService);
    return DataService;
    var _a;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/realtime.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealtimeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RealtimeService = (function () {
    function RealtimeService() {
        this.eventName = 'sensor_status';
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__();
    }
    RealtimeService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                //console.log(data);
                callback(data);
            });
        }
    };
    ;
    RealtimeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RealtimeService);
    return RealtimeService;
}());

//# sourceMappingURL=realtime.service.js.map

/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #1a2580;\n  color: #fff;\n  position: fixed;\n  left: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 20%;\n  min-width: 250px;\n  z-index: 9999;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n}\n \nul {\n  font-size: 18px;\n  line-height: 3;\n  font-weight: 400;\n  padding-top: 50px;\n  list-style: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li>Menu Item</li>\n  <li>Menu Item</li>\n  <li>Menu Item</li>\n  <li>Menu Item</li>\n  <li>Menu Item</li>\n  <li>Menu Item</li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideNavComponent = (function () {
    function SideNavComponent() {
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-side-nav',
            template: __webpack_require__("../../../../../src/app/side-nav/side-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/side-nav/side-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SideNavComponent);
    return SideNavComponent;
}());

//# sourceMappingURL=side-nav.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/intro-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "intro-bg.ef2065398843a68a982f.jpg";

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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




//import * as $ from 'jQuery';
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map