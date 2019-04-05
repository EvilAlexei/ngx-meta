(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/+metaui-architecture/metaui-architecture.module": [
		"./src/app/components/+metaui-architecture/metaui-architecture.module.ts",
		"default~components-metaui-architecture-metaui-architecture-module~components-oss-rules-oss-rules-mod~0da6f4ef",
		"components-metaui-architecture-metaui-architecture-module"
	],
	"./components/+oss-rules/oss-rules.module": [
		"./src/app/components/+oss-rules/oss-rules.module.ts",
		"default~components-metaui-architecture-metaui-architecture-module~components-oss-rules-oss-rules-mod~0da6f4ef",
		"components-oss-rules-oss-rules-module"
	],
	"./components/+oss-syntax/oss-syntax.module": [
		"./src/app/components/+oss-syntax/oss-syntax.module.ts",
		"default~components-metaui-architecture-metaui-architecture-module~components-oss-rules-oss-rules-mod~0da6f4ef",
		"components-oss-syntax-oss-syntax-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_3__["routes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"wrapper\">\n  <app-header (navBtnClick)=\"sidenav.toggle()\"></app-header>\n\n  <mat-sidenav-container id=\"main\">\n    <mat-sidenav\n      [opened]=\"!tabletQuery.matches\"\n      [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n      #sidenav\n      class=\"sidenav\">\n      <app-sidebar></app-sidebar>\n    </mat-sidenav>\n\n    <mat-sidenav-content id=\"mat-content\">\n      <section id=\"content\">\n        <div class=\"content-holder\">\n          <router-outlet></router-outlet>\n        </div>\n\n        <aside [hidden]=\"mobileQuery.matches\" class=\"aside-nav\">\n          <app-aside-nav></app-aside-nav>\n        </aside>\n      </section>\n\n      <app-footer></app-footer>\n    </mat-sidenav-content>\n\n  </mat-sidenav-container>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  display: flex;\n  height: 100vh;\n  flex-flow: column nowrap;\n  min-width: 320px; }\n\n#main {\n  flex: 1; }\n\n#main .sidenav {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    top: 65px;\n    width: 260px;\n    overflow-y: auto; }\n\n/* mat-sidenav-container */\n\n.mat-sidenav-container {\n  height: 100%; }\n\n/* aside-nav */\n\n.aside-nav {\n  flex: 0 0 180px; }\n\n/* content */\n\n#content {\n  flex-flow: row nowrap;\n  display: flex; }\n\n/* content-holder */\n\n.content-holder {\n  padding: 0 30px 50px;\n  box-sizing: border-box;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvaG9tZS92cy9Qcm9qZWN0cy9uZ3gtbWV0YS1kb2NzL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsT0FBTyxFQUFBOztBQURUO0lBSUksZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsU0FBeUI7SUFDekIsWUNOaUI7SURPakIsZ0JBQWdCLEVBQUE7O0FBR3BCLDBCQUFBOztBQUNBO0VBQ0UsWUFBWSxFQUFBOztBQUVkLGNBQUE7O0FBQ0E7RUFDRSxlQ2ZxQixFQUFBOztBRGlCdkIsWUFBQTs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhLEVBQUE7O0FBRWYsbUJBQUE7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlcy92YXJpYWJsZXNcIjtcblxuI3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIG1pbi13aWR0aDogMzIwcHg7XG59XG4jbWFpbiB7XG4gIGZsZXg6IDE7XG5cbiAgLnNpZGVuYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6ICRoZWFkZXItaGVpZ2h0ICsgMXB4O1xuICAgIHdpZHRoOiAkc2lkZW5hdi13aWR0aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG59XG4vKiBtYXQtc2lkZW5hdi1jb250YWluZXIgKi9cbi5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4vKiBhc2lkZS1uYXYgKi9cbi5hc2lkZS1uYXYge1xuICBmbGV4OiAwIDAgJGFzaWRlLW5hdi13aWR0aDtcbn1cbi8qIGNvbnRlbnQgKi9cbiNjb250ZW50IHtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLyogY29udGVudC1ob2xkZXIgKi9cbi5jb250ZW50LWhvbGRlciB7XG4gIHBhZGRpbmc6IDAgMzBweCA1MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4iLCIkY29sb3ItZ3JleTogI0NDQztcbiRjb2xvci1ncmV5LTAyOiAjNDU1QTY0O1xuJGNvbG9yLWdyZXktMDM6ICM2MDdkOGI7XG4kY29sb3ItZ3JleS0wNDogI2Y1ZjVmNTtcbiRjb2xvci1ibGFjazogIzAwMDtcbiRjb2xvci1ibHVlOiAjMTk3NmQyO1xuXG4kYm9yZGVyLWNvbG9yOiAkY29sb3ItZ3JleTtcblxuJGhlYWRlci1oZWlnaHQ6IDY0cHg7XG4kc2lkZW5hdi13aWR0aDogMjYwcHg7XG4kYXNpZGUtbmF2LXdpZHRoOiAxODBweDtcbiR0ZXh0LWNvbG9yOiAkY29sb3ItZ3JleS0wMztcbiJdfQ== */"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService, changeDetectorRef, media) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.changeDetectorRef = changeDetectorRef;
        this.media = media;
        this.tabletQuery = media.matchMedia('(max-width: 1000px)');
        this.mobileQuery = media.matchMedia('(max-width: 780px)');
        this.tabletQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.tabletQuery.addListener(this.tabletQueryListener);
        this.mobileQuery.addListener(this.mobileQueryListener);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            _this.titleService.setTitle(event.title);
            if (_this.tabletQuery.matches) {
                _this.sidenav.close();
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.tabletQuery.removeListener(this.tabletQueryListener);
        this.mobileQuery.removeListener(this.mobileQueryListener);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"])
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["MediaMatcher"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _layout_aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/aside-nav/aside-nav.component */ "./src/app/layout/aside-nav/aside-nav.component.ts");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-page-scroll-core */ "./node_modules/ngx-page-scroll-core/fesm5/ngx-page-scroll-core.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _layout_aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_11__["AsideNavComponent"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_12__["NgxPageScrollCoreModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
var routes = [
    {
        path: 'oss-rules',
        loadChildren: './components/+oss-rules/oss-rules.module#OssRulesModule',
        data: { title: 'OSS Rules' }
    },
    {
        path: 'oss-syntax',
        loadChildren: './components/+oss-syntax/oss-syntax.module#OssSyntaxModule',
        data: { title: 'OSS Syntax' }
    },
    {
        path: 'metaui-architecture',
        loadChildren: './components/+metaui-architecture/metaui-architecture.module#MetauiArchitectureModule',
        data: { title: 'MetaUI Architecture' }
    },
    {
        path: '',
        redirectTo: 'oss-rules',
        pathMatch: 'full',
    }
];


/***/ }),

/***/ "./src/app/layout/aside-nav/aside-nav.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/aside-nav/aside-nav.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"aside-nav\">\n  <li *ngFor=\"let item of navItems\">\n    <a\n      [href]=\"'#' + item.id\"\n      [class.active]=\"item.id === activeFragment\"\n      (click)=\"anchorScroll($event)\"\n    >\n      {{ item.textContent }}\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/layout/aside-nav/aside-nav.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/aside-nav/aside-nav.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 180px;\n  position: fixed;\n  right: 20px;\n  top: 65px; }\n\n.aside-nav {\n  margin: 15px 0 0;\n  padding: 0;\n  border-left: 1px solid #CCC;\n  list-style: none; }\n\n.aside-nav li {\n    font-size: 13px;\n    margin-left: 6px; }\n\n.aside-nav li a {\n      display: block;\n      line-height: 1.1;\n      color: #607d8b;\n      text-decoration: none;\n      padding: 6px 14px 6px 15px;\n      position: relative;\n      transition: color 250ms ease, background-color 250ms ease; }\n\n.aside-nav li a:hover {\n        background-color: #f5f5f5;\n        color: #000; }\n\n.aside-nav li a.active {\n        color: #000; }\n\n.aside-nav li a.active:before {\n          content: '';\n          display: block;\n          width: 0;\n          height: 0;\n          border: 5px solid transparent;\n          border-right: 0;\n          border-left-color: currentColor;\n          position: absolute;\n          left: 0;\n          top: 50%;\n          margin-top: -5px; }\n\n.aside-nav li:first-child {\n      border-bottom: 1px solid #CCC; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9sYXlvdXQvYXNpZGUtbmF2L2FzaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQ1NxQjtFRFJyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViwyQkNWZTtFRFdmLGdCQUFnQixFQUFBOztBQUpsQjtJQU9JLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTs7QUFScEI7TUFXTSxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGNDbEJpQjtNRG1CakIscUJBQXFCO01BQ3JCLDBCQUEwQjtNQUMxQixrQkFBa0I7TUFDbEIseURBQXlELEVBQUE7O0FBakIvRDtRQW9CUSx5QkN4QmU7UUR5QmYsV0N4QlUsRUFBQTs7QURHbEI7UUF5QlEsV0M1QlUsRUFBQTs7QURHbEI7VUE0QlUsV0FBVztVQUNYLGNBQWM7VUFDZCxRQUFRO1VBQ1IsU0FBUztVQUNULDZCQUE2QjtVQUM3QixlQUFlO1VBQ2YsK0JBQStCO1VBQy9CLGtCQUFrQjtVQUNsQixPQUFPO1VBQ1AsUUFBUTtVQUNSLGdCQUFnQixFQUFBOztBQXRDMUI7TUE0Q00sNkJDbkRXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYXNpZGUtbmF2L2FzaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG46aG9zdCB7XG4gIHdpZHRoOiAkYXNpZGUtbmF2LXdpZHRoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyMHB4OyAvLyBzY3JvbGxiYXJcbiAgdG9wOiAkaGVhZGVyLWhlaWdodCArIDFweDs7XG59XG4uYXNpZGUtbmF2IHtcbiAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICBsaXN0LXN0eWxlOiBub25lO1xuXG4gIGxpIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcblxuICAgIGEge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgICAgY29sb3I6ICRjb2xvci1ncmV5LTAzO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgcGFkZGluZzogNnB4IDE0cHggNnB4IDE1cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS0wNDtcbiAgICAgICAgY29sb3I6ICRjb2xvci1ibGFjaztcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBjb2xvcjogJGNvbG9yLWJsYWNrO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgfVxuICB9XG59XG4iLCIkY29sb3ItZ3JleTogI0NDQztcbiRjb2xvci1ncmV5LTAyOiAjNDU1QTY0O1xuJGNvbG9yLWdyZXktMDM6ICM2MDdkOGI7XG4kY29sb3ItZ3JleS0wNDogI2Y1ZjVmNTtcbiRjb2xvci1ibGFjazogIzAwMDtcbiRjb2xvci1ibHVlOiAjMTk3NmQyO1xuXG4kYm9yZGVyLWNvbG9yOiAkY29sb3ItZ3JleTtcblxuJGhlYWRlci1oZWlnaHQ6IDY0cHg7XG4kc2lkZW5hdi13aWR0aDogMjYwcHg7XG4kYXNpZGUtbmF2LXdpZHRoOiAxODBweDtcbiR0ZXh0LWNvbG9yOiAkY29sb3ItZ3JleS0wMztcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/aside-nav/aside-nav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/aside-nav/aside-nav.component.ts ***!
  \*********************************************************/
/*! exports provided: AsideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideNavComponent", function() { return AsideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_headings_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/headings-list.service */ "./src/app/services/headings-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_anchor_scroll_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/anchor-scroll.service */ "./src/app/services/anchor-scroll.service.ts");






var AsideNavComponent = /** @class */ (function () {
    function AsideNavComponent(headingsListService, router, anchorScrollService) {
        var _this = this;
        this.headingsListService = headingsListService;
        this.router = router;
        this.anchorScrollService = anchorScrollService;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }))
            .subscribe(function () {
            _this.activeFragment = _this.router.url.split('#')[1];
        });
    }
    AsideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headingsListService.navList
            .subscribe(function (data) {
            _this.navItems = data;
        });
    };
    AsideNavComponent.prototype.anchorScroll = function (event) {
        event.preventDefault();
        var anchorTarget = event.currentTarget.hash;
        this.anchorScrollService.scrollToTarget(anchorTarget);
    };
    AsideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aside-nav',
            template: __webpack_require__(/*! ./aside-nav.component.html */ "./src/app/layout/aside-nav/aside-nav.component.html"),
            styles: [__webpack_require__(/*! ./aside-nav.component.scss */ "./src/app/layout/aside-nav/aside-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_headings_list_service__WEBPACK_IMPORTED_MODULE_2__["HeadingsListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_anchor_scroll_service__WEBPACK_IMPORTED_MODULE_5__["AnchorScrollService"]])
    ], AsideNavComponent);
    return AsideNavComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  <p>\n    All rights reserved &copy; 2019, Designed by\n    <a href=\"https://dribbble.com/mikhailvol\">Mikhail Voloshin</a> at\n    <a href=\"https://valor-software.com/\">Valor Software</a>\n  </p>\n</footer>\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-top: 1px solid #CCC;\n  color: #607d8b;\n  text-align: center; }\n  #footer a {\n    color: currentColor;\n    text-decoration: none;\n    transition: color 250ms ease; }\n  #footer a:hover {\n      text-decoration: none;\n      color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDBCQ0xlO0VETWYsY0NKcUI7RURLckIsa0JBQWtCLEVBQUE7RUFMcEI7SUFRSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDRCQUE0QixFQUFBO0VBVmhDO01BYU0scUJBQXFCO01BQ3JCLFdDWlksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuI2Zvb3RlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGEge1xuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDI1MG1zIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAkY29sb3ItYmxhY2s7XG4gICAgfVxuICB9XG59XG4iLCIkY29sb3ItZ3JleTogI0NDQztcbiRjb2xvci1ncmV5LTAyOiAjNDU1QTY0O1xuJGNvbG9yLWdyZXktMDM6ICM2MDdkOGI7XG4kY29sb3ItZ3JleS0wNDogI2Y1ZjVmNTtcbiRjb2xvci1ibGFjazogIzAwMDtcbiRjb2xvci1ibHVlOiAjMTk3NmQyO1xuXG4kYm9yZGVyLWNvbG9yOiAkY29sb3ItZ3JleTtcblxuJGhlYWRlci1oZWlnaHQ6IDY0cHg7XG4kc2lkZW5hdi13aWR0aDogMjYwcHg7XG4kYXNpZGUtbmF2LXdpZHRoOiAxODBweDtcbiR0ZXh0LWNvbG9yOiAkY29sb3ItZ3JleS0wMztcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <header id=\"header\">\n    <button class=\"nav-opener hamburger mat-button\" (click)=\"navToggle()\">\n      <mat-icon svgIcon=\"ngx-meta-hamburger\"></mat-icon>\n    </button>\n    <strong class=\"logo\">\n      <a routerLink=\"\" aria-label=\"MetaUI logo\">metaUI</a>\n    </strong>\n\n    <ul class=\"socials\">\n      <li>\n        <a href=\"https://github.com/ngx-meta/rules\" aria-label=\"MetaUI on github\">\n          <mat-icon svgIcon=\"ngx-meta-github\"></mat-icon>\n        </a>\n      </li>\n\n      <li>\n        <a href=\"https://twitter.com/metauiframework\" aria-label=\"MetaUI on twitter\">\n          <mat-icon svgIcon=\"ngx-meta-twitter\"></mat-icon>\n        </a>\n      </li>\n    </ul>\n  </header>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border-bottom: 1px solid #CCC; }\n\n#header {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  width: 100%;\n  height: 100%; }\n\n.socials {\n  margin: 0 0 0 auto;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center; }\n\n.socials li {\n    height: 24px;\n    width: 24px; }\n\n.socials li:first-child {\n    margin-right: 20px; }\n\n.socials a {\n    display: block;\n    height: 100%;\n    color: #455A64;\n    transition: opacity 250ms ease; }\n\n.socials a:hover {\n      opacity: 0.85; }\n\n.nav-opener {\n  border: none;\n  background: none;\n  padding: 0;\n  margin-right: 10px;\n  height: 64px;\n  width: 64px;\n  margin-left: -16px;\n  cursor: pointer;\n  outline: none;\n  transition: background-color 250ms ease; }\n\n.nav-opener:hover {\n    background-color: #CCC; }\n\n.logo {\n  display: block;\n  background: url('bg-logo.svg') no-repeat;\n  width: 149px;\n  height: 46px;\n  text-indent: -9999px;\n  transition: opacity 250ms ease; }\n\n.logo a {\n    display: block;\n    height: 100%; }\n\n.logo:hover {\n    opacity: 0.85; }\n\n.mat-toolbar-row,\n.mat-toolbar-single-row {\n  height: 64px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw2QkNIZSxFQUFBOztBRE1qQjtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QixFQUFBOztBQU56QjtJQVNJLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBVmY7SUFjSSxrQkFBa0IsRUFBQTs7QUFkdEI7SUFzQkksY0FBYztJQUNkLFlBQVk7SUFDWixjQ3JDbUI7SURzQ25CLDhCQUE4QixFQUFBOztBQXpCbEM7TUE0Qk0sYUFBYSxFQUFBOztBQUtuQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVDQUF1QyxFQUFBOztBQVZ6QztJQWFJLHNCQzVEYSxFQUFBOztBRGdFakI7RUFDRSxjQUFjO0VBQ2Qsd0NBQStEO0VBQy9ELFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDhCQUE4QixFQUFBOztBQU5oQztJQVNJLGNBQWM7SUFDZCxZQUFZLEVBQUE7O0FBVmhCO0lBY0ksYUFBYSxFQUFBOztBQUlqQjs7RUFFRSxZQzNFa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvYXBwL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbn1cblxuI2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNvY2lhbHMge1xuICBtYXJnaW46IDAgMCAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgbGkge1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogMjRweDtcbiAgfVxuXG4gIGxpOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cblxuICAubWF0LWljb24ge1xuXG4gIH1cblxuICBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6ICRjb2xvci1ncmV5LTAyO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMC44NTtcbiAgICB9XG4gIH1cbn1cblxuLm5hdi1vcGVuZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICB3aWR0aDogNjRweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleTtcbiAgfVxufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLWxvZ28uc3ZnXCIpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDE0OXB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHRleHQtaW5kZW50OiAtOTk5OXB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2U7XG5cbiAgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44NTtcbiAgfVxufVxuXG4ubWF0LXRvb2xiYXItcm93LFxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xufVxuIiwiJGNvbG9yLWdyZXk6ICNDQ0M7XG4kY29sb3ItZ3JleS0wMjogIzQ1NUE2NDtcbiRjb2xvci1ncmV5LTAzOiAjNjA3ZDhiO1xuJGNvbG9yLWdyZXktMDQ6ICNmNWY1ZjU7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG4kY29sb3ItYmx1ZTogIzE5NzZkMjtcblxuJGJvcmRlci1jb2xvcjogJGNvbG9yLWdyZXk7XG5cbiRoZWFkZXItaGVpZ2h0OiA2NHB4O1xuJHNpZGVuYXYtd2lkdGg6IDI2MHB4O1xuJGFzaWRlLW5hdi13aWR0aDogMTgwcHg7XG4kdGV4dC1jb2xvcjogJGNvbG9yLWdyZXktMDM7XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.navBtnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.matIconRegistry
            .addSvgIcon('ngx-meta-github', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/ico-github.svg')).addSvgIcon('ngx-meta-twitter', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/ico-twitter.svg')).addSvgIcon('ngx-meta-hamburger', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/ico-hamburger.svg'));
    }
    HeaderComponent.prototype.navToggle = function () {
        this.navBtnClick.emit(null);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], HeaderComponent.prototype, "navBtnClick", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <ng-container *ngFor=\"let item of menuList\">\n    <mat-list-item>\n      <a [routerLink]=\"item.path\" routerLinkActive=\"active\">{{ item.data.title }}</a>\n    </mat-list-item>\n    <ul class=\"sub-nav\" *ngIf=\"activeRoute === item.path\">\n      <li *ngFor=\"let item of navItems\">\n        <a\n          [href]=\"'#' + item.id\"\n          [class.active]=\"item.id === activeFragment\"\n          (click)=\"anchorScroll($event)\"\n        >\n          {{ item.textContent }}\n        </a>\n      </li>\n    </ul>\n  </ng-container>\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding-bottom: 30px; }\n\n.mat-list-base .mat-list-item {\n  height: auto; }\n\n.mat-list-base .mat-list-item /deep/ .mat-list-item-content {\n    padding-left: 0;\n    padding-right: 0; }\n\n.mat-list-base .mat-list-item a {\n    display: block;\n    width: 100%;\n    padding: 0 16px;\n    line-height: 48px;\n    box-sizing: border-box; }\n\n.mat-list-base .mat-list-item a.active {\n      color: #000;\n      background-color: #CCC; }\n\n.mat-list-base .mat-list-item /deep/ .mat-list-item-content {\n    flex-direction: column; }\n\n.sub-nav {\n  margin: 0;\n  padding: 10px 0 10px 16px;\n  list-style: none;\n  border-bottom: 1px solid #CCC; }\n\n.sub-nav a {\n    display: block;\n    font-size: 14px;\n    padding: 7px 10px;\n    transition: color 250ms ease, background-color 250ms ease; }\n\n.sub-nav a:hover {\n      color: #1976d2;\n      background-color: #f5f5f5; }\n\n.sub-nav a.active {\n      color: #1976d2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9sYXlvdXQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdnMvUHJvamVjdHMvbmd4LW1ldGEtZG9jcy9zcmMvYXBwL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0IsRUFBQTs7QUFFdEI7RUFHSSxZQUFZLEVBQUE7O0FBSGhCO0lBTU0sZUFBZTtJQUNmLGdCQUFnQixFQUFBOztBQVB0QjtJQVdNLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0IsRUFBQTs7QUFmNUI7TUFrQlEsV0NwQlU7TURxQlYsc0JDekJTLEVBQUE7O0FETWpCO0lBd0JNLHNCQUFzQixFQUFBOztBQUs1QjtFQUNFLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDZCQ3ZDZSxFQUFBOztBRG1DakI7SUFPSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5REFBeUQsRUFBQTs7QUFWN0Q7TUFhTSxjQzNDYztNRDRDZCx5QkM5Q2lCLEVBQUE7O0FEZ0N2QjtNQWtCTSxjQ2hEYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLm1hdC1saXN0LWJhc2Uge1xuXG4gIC5tYXQtbGlzdC1pdGVtIHtcbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAvZGVlcC8gLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBjb2xvcjogJGNvbG9yLWJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvZGVlcC8gLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxufVxuXG4uc3ViLW5hdiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTZweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG5cbiAgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDI1MG1zIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMjUwbXMgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRjb2xvci1ibHVlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktMDQ7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgY29sb3I6ICRjb2xvci1ibHVlO1xuICAgIH1cbiAgfVxufVxuIiwiJGNvbG9yLWdyZXk6ICNDQ0M7XG4kY29sb3ItZ3JleS0wMjogIzQ1NUE2NDtcbiRjb2xvci1ncmV5LTAzOiAjNjA3ZDhiO1xuJGNvbG9yLWdyZXktMDQ6ICNmNWY1ZjU7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG4kY29sb3ItYmx1ZTogIzE5NzZkMjtcblxuJGJvcmRlci1jb2xvcjogJGNvbG9yLWdyZXk7XG5cbiRoZWFkZXItaGVpZ2h0OiA2NHB4O1xuJHNpZGVuYXYtd2lkdGg6IDI2MHB4O1xuJGFzaWRlLW5hdi13aWR0aDogMTgwcHg7XG4kdGV4dC1jb2xvcjogJGNvbG9yLWdyZXktMDM7XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_headings_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/headings-list.service */ "./src/app/services/headings-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_anchor_scroll_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/anchor-scroll.service */ "./src/app/services/anchor-scroll.service.ts");







var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, headingsListService, anchorScrollService) {
        var _this = this;
        this.router = router;
        this.headingsListService = headingsListService;
        this.anchorScrollService = anchorScrollService;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }))
            .subscribe(function () {
            _this.activeRoute = _this.router.url.split('#')[0].replace('/', '');
            _this.activeFragment = _this.router.url.split('#')[1];
        });
        this.menuList = _app_routing__WEBPACK_IMPORTED_MODULE_4__["routes"].filter(function (route) {
            return route.path; // exclude empty route
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headingsListService.navList
            .subscribe(function (data) {
            _this.navItems = data;
        });
    };
    SidebarComponent.prototype.anchorScroll = function (event) {
        event.preventDefault();
        var anchorTarget = event.currentTarget.hash;
        this.anchorScrollService.scrollToTarget(anchorTarget);
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_headings_list_service__WEBPACK_IMPORTED_MODULE_2__["HeadingsListService"],
            _services_anchor_scroll_service__WEBPACK_IMPORTED_MODULE_6__["AnchorScrollService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/services/anchor-scroll.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/anchor-scroll.service.ts ***!
  \***************************************************/
/*! exports provided: AnchorScrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorScrollService", function() { return AnchorScrollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-page-scroll-core */ "./node_modules/ngx-page-scroll-core/fesm5/ngx-page-scroll-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AnchorScrollService = /** @class */ (function () {
    function AnchorScrollService(pageScrollService, router, document) {
        this.pageScrollService = pageScrollService;
        this.router = router;
        this.document = document;
    }
    AnchorScrollService.prototype.scrollToTarget = function (targetHash, changeHash) {
        var parentView = this.document.getElementById('mat-content');
        location.hash = !changeHash ? targetHash : location.hash;
        this.pageScrollService.scroll({
            document: this.document,
            scrollTarget: targetHash,
            scrollViews: [
                parentView
            ],
            scrollOffset: 20,
            duration: 250
        });
    };
    AnchorScrollService.prototype.scrollTop = function () {
        var parentView = this.document.getElementById('mat-content');
        parentView.scrollTo(0, 0);
    };
    AnchorScrollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_3__["PageScrollService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], Object])
    ], AnchorScrollService);
    return AnchorScrollService;
}());



/***/ }),

/***/ "./src/app/services/headings-list.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/headings-list.service.ts ***!
  \***************************************************/
/*! exports provided: HeadingsListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingsListService", function() { return HeadingsListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var HeadingsListService = /** @class */ (function () {
    function HeadingsListService() {
        this.navList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    HeadingsListService.prototype.getHeaders = function (element) {
        var headings = element.querySelectorAll('h1[id], h2[id], h3[id], h4[id]');
        this.navList.next(headings);
    };
    HeadingsListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeadingsListService);
    return HeadingsListService;
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

module.exports = __webpack_require__(/*! /home/vs/Projects/ngx-meta-docs/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map