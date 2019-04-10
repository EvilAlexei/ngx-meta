(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/+getting-started/getting-started.module": [
		"./src/app/components/+getting-started/getting-started.module.ts",
		"default~components-getting-started-getting-started-module~components-metaui-architecture-metaui-arch~4c3722b2",
		"components-getting-started-getting-started-module"
	],
	"./components/+metaui-architecture/metaui-architecture.module": [
		"./src/app/components/+metaui-architecture/metaui-architecture.module.ts",
		"default~components-getting-started-getting-started-module~components-metaui-architecture-metaui-arch~4c3722b2",
		"components-metaui-architecture-metaui-architecture-module"
	],
	"./components/+oss-rules/oss-rules.module": [
		"./src/app/components/+oss-rules/oss-rules.module.ts",
		"default~components-getting-started-getting-started-module~components-metaui-architecture-metaui-arch~4c3722b2",
		"components-oss-rules-oss-rules-module"
	],
	"./components/+oss-syntax/oss-syntax.module": [
		"./src/app/components/+oss-syntax/oss-syntax.module.ts",
		"default~components-getting-started-getting-started-module~components-metaui-architecture-metaui-arch~4c3722b2",
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
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_3__["routes"], {
                    anchorScrolling: 'enabled'
                })],
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

module.exports = "<section id=\"wrapper\">\n  <app-header (navBtnClick)=\"sidenav.toggle()\"></app-header>\n\n  <mat-sidenav-container id=\"main\">\n    <mat-sidenav\n      [opened]=\"!mobileQuery.matches\"\n      [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n      #sidenav\n      class=\"sidenav\">\n      <app-sidebar></app-sidebar>\n    </mat-sidenav>\n\n    <mat-sidenav-content id=\"mat-content\">\n      <section id=\"content\">\n        <div class=\"content-holder\">\n          <router-outlet></router-outlet>\n        </div>\n\n        <aside [hidden]=\"mobileQuery.matches\" class=\"aside-nav\">\n          <app-aside-nav></app-aside-nav>\n        </aside>\n      </section>\n\n      <app-footer></app-footer>\n    </mat-sidenav-content>\n\n  </mat-sidenav-container>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  display: flex;\n  height: 100vh;\n  flex-flow: column nowrap;\n  min-width: 320px; }\n\n#main {\n  flex: 1; }\n\n#main .sidenav {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    top: 65px;\n    width: 260px;\n    overflow-y: auto; }\n\n/* mat-sidenav-container */\n\n.mat-sidenav-container {\n  height: 100%; }\n\n/* mat-sidenav-content */\n\n.mat-sidenav-content {\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap; }\n\n/* aside-nav */\n\n.aside-nav {\n  flex: 0 0 180px; }\n\n/* content */\n\n#content {\n  flex: 1;\n  flex-flow: row nowrap;\n  display: flex; }\n\n/* content-holder */\n\n.content-holder {\n  padding: 0 30px 50px;\n  box-sizing: border-box;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvaG9tZS92cy9Qcm9qZWN0cy9uZ3gtbWV0YS1kb2NzL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsT0FBTyxFQUFBOztBQURUO0lBSUksZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsU0FBeUI7SUFDekIsWUNOaUI7SURPakIsZ0JBQWdCLEVBQUE7O0FBR3BCLDBCQUFBOztBQUNBO0VBQ0UsWUFBWSxFQUFBOztBQUVkLHdCQUFBOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0IsRUFBQTs7QUFFMUIsY0FBQTs7QUFDQTtFQUNFLGVDckJxQixFQUFBOztBRHVCdkIsWUFBQTs7QUFDQTtFQUNFLE9BQU87RUFDUCxxQkFBcUI7RUFDckIsYUFBYSxFQUFBOztBQUVmLG1CQUFBOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvdmFyaWFibGVzXCI7XG5cbiN3cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBtaW4td2lkdGg6IDMyMHB4O1xufVxuI21haW4ge1xuICBmbGV4OiAxO1xuXG4gIC5zaWRlbmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAkaGVhZGVyLWhlaWdodCArIDFweDtcbiAgICB3aWR0aDogJHNpZGVuYXYtd2lkdGg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxufVxuLyogbWF0LXNpZGVuYXYtY29udGFpbmVyICovXG4ubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLyogbWF0LXNpZGVuYXYtY29udGVudCAqL1xuLm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cbi8qIGFzaWRlLW5hdiAqL1xuLmFzaWRlLW5hdiB7XG4gIGZsZXg6IDAgMCAkYXNpZGUtbmF2LXdpZHRoO1xufVxuLyogY29udGVudCAqL1xuI2NvbnRlbnQge1xuICBmbGV4OiAxO1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4vKiBjb250ZW50LWhvbGRlciAqL1xuLmNvbnRlbnQtaG9sZGVyIHtcbiAgcGFkZGluZzogMCAzMHB4IDUwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiIsIiRjb2xvci1ncmV5OiAjY2VjZWNlO1xuJGNvbG9yLWdyZXktMDI6ICM0NTVBNjQ7XG4kY29sb3ItZ3JleS0wMzogIzYwN2Q4YjtcbiRjb2xvci1ncmV5LTA0OiAjZjVmNWY1O1xuJGNvbG9yLWJsYWNrOiAjMjUzMTM3O1xuJGNvbG9yLWJsdWU6ICMyMTk2ZjM7XG5cbiRib3JkZXItY29sb3I6ICRjb2xvci1ncmV5O1xuXG4kaGVhZGVyLWhlaWdodDogNjRweDtcbiRzaWRlbmF2LXdpZHRoOiAyNjBweDtcbiRhc2lkZS1uYXYtd2lkdGg6IDE4MHB4O1xuJHRleHQtY29sb3I6ICRjb2xvci1ncmV5LTAzO1xuIl19 */"

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
        path: 'getting-started',
        loadChildren: './components/+getting-started/getting-started.module#GettingStartedModule',
        data: { title: 'Getting Started' }
    },
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
        redirectTo: 'getting-started',
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

module.exports = "<ul class=\"aside-nav\">\n  <li *ngFor=\"let item of navItems\">\n    <a\n      [routerLink]=\"activeRoute\"\n      [fragment]=\"item.id\"\n      [class.active]=\"item.id === activeFragment\"\n    >\n      {{ item.textContent }}\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/layout/aside-nav/aside-nav.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/aside-nav/aside-nav.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 180px;\n  position: fixed;\n  right: 20px;\n  top: 65px; }\n\n.aside-nav {\n  margin: 15px 0 0;\n  padding: 0;\n  border-left: 1px solid #cecece;\n  list-style: none; }\n\n.aside-nav li {\n    font-size: 13px;\n    margin-left: 6px; }\n\n.aside-nav li a {\n      display: block;\n      line-height: 1.1;\n      color: #455A64;\n      text-decoration: none;\n      padding: 6px 14px 6px 15px;\n      position: relative;\n      transition: color 250ms ease, background-color 250ms ease; }\n\n.aside-nav li a:hover {\n        background-color: #f5f5f5;\n        color: #253137; }\n\n.aside-nav li a.active {\n        color: #253137;\n        font-weight: 600; }\n\n.aside-nav li a.active:before {\n          content: '';\n          display: block;\n          width: 0;\n          height: 0;\n          border: 5px solid transparent;\n          border-right: 0;\n          border-left-color: #2196f3;\n          position: absolute;\n          left: 0;\n          top: 50%;\n          margin-top: -5px; }\n\n.aside-nav li:first-child {\n      border-bottom: 1px solid #cecece; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9sYXlvdXQvYXNpZGUtbmF2L2FzaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQ1NxQjtFRFJyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViw4QkNWa0I7RURXbEIsZ0JBQWdCLEVBQUE7O0FBSmxCO0lBT0ksZUFBZTtJQUNmLGdCQUFnQixFQUFBOztBQVJwQjtNQVdNLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsY0NuQmlCO01Eb0JqQixxQkFBcUI7TUFDckIsMEJBQTBCO01BQzFCLGtCQUFrQjtNQUNsQix5REFBeUQsRUFBQTs7QUFqQi9EO1FBb0JRLHlCQ3hCZTtRRHlCZixjQ3hCYSxFQUFBOztBREdyQjtRQXlCUSxjQzVCYTtRRDZCYixnQkFBZ0IsRUFBQTs7QUExQnhCO1VBNkJVLFdBQVc7VUFDWCxjQUFjO1VBQ2QsUUFBUTtVQUNSLFNBQVM7VUFDVCw2QkFBNkI7VUFDN0IsZUFBZTtVQUNmLDBCQ3JDVTtVRHNDVixrQkFBa0I7VUFDbEIsT0FBTztVQUNQLFFBQVE7VUFDUixnQkFBZ0IsRUFBQTs7QUF2QzFCO01BNkNNLGdDQ3BEYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FzaWRlLW5hdi9hc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xuOmhvc3Qge1xuICB3aWR0aDogJGFzaWRlLW5hdi13aWR0aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMjBweDsgLy8gc2Nyb2xsYmFyXG4gIHRvcDogJGhlYWRlci1oZWlnaHQgKyAxcHg7O1xufVxuLmFzaWRlLW5hdiB7XG4gIG1hcmdpbjogMTVweCAwIDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcblxuICBsaSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG5cbiAgICBhIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS0wMjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDZweCAxNHB4IDZweCAxNXB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktMDQ7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItYmxhY2s7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1ibGFjaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogJGNvbG9yLWJsdWU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgfVxuICB9XG59XG4iLCIkY29sb3ItZ3JleTogI2NlY2VjZTtcbiRjb2xvci1ncmV5LTAyOiAjNDU1QTY0O1xuJGNvbG9yLWdyZXktMDM6ICM2MDdkOGI7XG4kY29sb3ItZ3JleS0wNDogI2Y1ZjVmNTtcbiRjb2xvci1ibGFjazogIzI1MzEzNztcbiRjb2xvci1ibHVlOiAjMjE5NmYzO1xuXG4kYm9yZGVyLWNvbG9yOiAkY29sb3ItZ3JleTtcblxuJGhlYWRlci1oZWlnaHQ6IDY0cHg7XG4kc2lkZW5hdi13aWR0aDogMjYwcHg7XG4kYXNpZGUtbmF2LXdpZHRoOiAxODBweDtcbiR0ZXh0LWNvbG9yOiAkY29sb3ItZ3JleS0wMztcbiJdfQ== */"

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
            _this.activeRoute = _this.router.url.split('#')[0].replace('/', '');
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

module.exports = "#footer {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-top: 1px solid #cecece;\n  color: #607d8b;\n  text-align: center; }\n  #footer a {\n    color: currentColor;\n    text-decoration: none;\n    transition: color 250ms ease; }\n  #footer a:hover {\n      text-decoration: none;\n      color: #253137; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDZCQ0xrQjtFRE1sQixjQ0pxQjtFREtyQixrQkFBa0IsRUFBQTtFQUxwQjtJQVFJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsNEJBQTRCLEVBQUE7RUFWaEM7TUFhTSxxQkFBcUI7TUFDckIsY0NaZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4jZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgYSB7XG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICRjb2xvci1ibGFjaztcbiAgICB9XG4gIH1cbn1cbiIsIiRjb2xvci1ncmV5OiAjY2VjZWNlO1xuJGNvbG9yLWdyZXktMDI6ICM0NTVBNjQ7XG4kY29sb3ItZ3JleS0wMzogIzYwN2Q4YjtcbiRjb2xvci1ncmV5LTA0OiAjZjVmNWY1O1xuJGNvbG9yLWJsYWNrOiAjMjUzMTM3O1xuJGNvbG9yLWJsdWU6ICMyMTk2ZjM7XG5cbiRib3JkZXItY29sb3I6ICRjb2xvci1ncmV5O1xuXG4kaGVhZGVyLWhlaWdodDogNjRweDtcbiRzaWRlbmF2LXdpZHRoOiAyNjBweDtcbiRhc2lkZS1uYXYtd2lkdGg6IDE4MHB4O1xuJHRleHQtY29sb3I6ICRjb2xvci1ncmV5LTAzO1xuIl19 */"

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

module.exports = ":host {\n  border-bottom: 1px solid #cecece; }\n\n#header {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  width: 100%;\n  height: 100%; }\n\n.socials {\n  margin: 0 0 0 auto;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center; }\n\n.socials li {\n    height: 24px;\n    width: 24px; }\n\n.socials li:first-child {\n    margin-right: 20px; }\n\n.socials a {\n    display: block;\n    height: 100%;\n    color: #455A64;\n    transition: opacity 250ms ease; }\n\n.socials a:hover {\n      opacity: 0.85; }\n\n.nav-opener {\n  border: none;\n  background: none;\n  padding: 0;\n  margin-right: 10px;\n  height: 64px;\n  width: 64px;\n  margin-left: -16px;\n  cursor: pointer;\n  outline: none;\n  transition: background-color 250ms ease; }\n\n.nav-opener:hover {\n    background-color: #cecece; }\n\n.logo {\n  display: block;\n  background: url('bg-logo.svg') no-repeat;\n  width: 149px;\n  height: 46px;\n  text-indent: -9999px;\n  transition: opacity 250ms ease; }\n\n.logo a {\n    display: block;\n    height: 100%; }\n\n.logo:hover {\n    opacity: 0.85; }\n\n.mat-toolbar-row,\n.mat-toolbar-single-row {\n  height: 64px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQ0NIa0IsRUFBQTs7QURNcEI7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix1QkFBdUIsRUFBQTs7QUFOekI7SUFTSSxZQUFZO0lBQ1osV0FBVyxFQUFBOztBQVZmO0lBY0ksa0JBQWtCLEVBQUE7O0FBZHRCO0lBc0JJLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0NyQ21CO0lEc0NuQiw4QkFBOEIsRUFBQTs7QUF6QmxDO01BNEJNLGFBQWEsRUFBQTs7QUFLbkI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYix1Q0FBdUMsRUFBQTs7QUFWekM7SUFhSSx5QkM1RGdCLEVBQUE7O0FEZ0VwQjtFQUNFLGNBQWM7RUFDZCx3Q0FBK0Q7RUFDL0QsWUFBWTtFQUNaLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsOEJBQThCLEVBQUE7O0FBTmhDO0lBU0ksY0FBYztJQUNkLFlBQVksRUFBQTs7QUFWaEI7SUFjSSxhQUFhLEVBQUE7O0FBSWpCOztFQUVFLFlDM0VrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG46aG9zdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xufVxuXG4jaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc29jaWFscyB7XG4gIG1hcmdpbjogMCAwIDAgYXV0bztcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBsaSB7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICB9XG5cbiAgbGk6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuXG4gIC5tYXQtaWNvbiB7XG5cbiAgfVxuXG4gIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktMDI7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwLjg1O1xuICAgIH1cbiAgfVxufVxuXG4ubmF2LW9wZW5lciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIHdpZHRoOiA2NHB4O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xuICB9XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctbG9nby5zdmdcIikgbm8tcmVwZWF0O1xuICB3aWR0aDogMTQ5cHg7XG4gIGhlaWdodDogNDZweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZTtcblxuICBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg1O1xuICB9XG59XG5cbi5tYXQtdG9vbGJhci1yb3csXG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG59XG4iLCIkY29sb3ItZ3JleTogI2NlY2VjZTtcbiRjb2xvci1ncmV5LTAyOiAjNDU1QTY0O1xuJGNvbG9yLWdyZXktMDM6ICM2MDdkOGI7XG4kY29sb3ItZ3JleS0wNDogI2Y1ZjVmNTtcbiRjb2xvci1ibGFjazogIzI1MzEzNztcbiRjb2xvci1ibHVlOiAjMjE5NmYzO1xuXG4kYm9yZGVyLWNvbG9yOiAkY29sb3ItZ3JleTtcblxuJGhlYWRlci1oZWlnaHQ6IDY0cHg7XG4kc2lkZW5hdi13aWR0aDogMjYwcHg7XG4kYXNpZGUtbmF2LXdpZHRoOiAxODBweDtcbiR0ZXh0LWNvbG9yOiAkY29sb3ItZ3JleS0wMztcbiJdfQ== */"

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

module.exports = "<mat-nav-list>\n  <ng-container *ngFor=\"let item of menuList\">\n    <mat-list-item>\n      <a [routerLink]=\"item.path\" routerLinkActive=\"active\">{{ item.data.title }}</a>\n    </mat-list-item>\n    <ul class=\"sub-nav\" *ngIf=\"activeRoute === item.path\">\n      <li *ngFor=\"let item of navItems\">\n        <a\n          [routerLink]=\"activeRoute\"\n          [fragment]=\"item.id\"\n          [class.active]=\"item.id === activeFragment\"\n        >\n          {{ item.textContent }}\n        </a>\n      </li>\n    </ul>\n  </ng-container>\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding-bottom: 30px; }\n\n.mat-list-base .mat-list-item {\n  height: auto; }\n\n.mat-list-base .mat-list-item /deep/ .mat-list-item-content {\n    padding-left: 0;\n    padding-right: 0; }\n\n.mat-list-base .mat-list-item a {\n    display: block;\n    width: 100%;\n    padding: 0 16px;\n    line-height: 42px;\n    box-sizing: border-box;\n    font-size: 15px;\n    font-weight: 600; }\n\n.mat-list-base .mat-list-item a.active {\n      color: #2196f3; }\n\n.mat-list-base .mat-list-item /deep/ .mat-list-item-content {\n    flex-direction: column; }\n\n.sub-nav {\n  margin: 0;\n  padding: 0 0 10px 16px;\n  list-style: none;\n  border-bottom: 1px solid #cecece; }\n\n.sub-nav a {\n    display: block;\n    font-size: 14px;\n    padding: 6px 10px;\n    transition: color 250ms ease, background-color 250ms ease; }\n\n.sub-nav a:hover {\n      color: #2196f3;\n      background-color: #f5f5f5; }\n\n.sub-nav a.active {\n      color: #2196f3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9sYXlvdXQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdnMvUHJvamVjdHMvbmd4LW1ldGEtZG9jcy9zcmMvYXBwL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0IsRUFBQTs7QUFFdEI7RUFHSSxZQUFZLEVBQUE7O0FBSGhCO0lBTU0sZUFBZTtJQUNmLGdCQUFnQixFQUFBOztBQVB0QjtJQVdNLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQixFQUFBOztBQWpCdEI7TUFvQlEsY0NyQlksRUFBQTs7QURDcEI7SUF5Qk0sc0JBQXNCLEVBQUE7O0FBSzVCO0VBQ0UsU0FBUztFQUNULHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0NDeENrQixFQUFBOztBRG9DcEI7SUFPSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5REFBeUQsRUFBQTs7QUFWN0Q7TUFhTSxjQzVDYztNRDZDZCx5QkMvQ2lCLEVBQUE7O0FEaUN2QjtNQWtCTSxjQ2pEYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLm1hdC1saXN0LWJhc2Uge1xuXG4gIC5tYXQtbGlzdC1pdGVtIHtcbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAvZGVlcC8gLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1ibHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC9kZWVwLyAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICB9XG59XG5cbi5zdWItbmF2IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMTBweCAxNnB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcblxuICBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJGNvbG9yLWJsdWU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS0wNDtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJGNvbG9yLWJsdWU7XG4gICAgfVxuICB9XG59XG4iLCIkY29sb3ItZ3JleTogI2NlY2VjZTtcbiRjb2xvci1ncmV5LTAyOiAjNDU1QTY0O1xuJGNvbG9yLWdyZXktMDM6ICM2MDdkOGI7XG4kY29sb3ItZ3JleS0wNDogI2Y1ZjVmNTtcbiRjb2xvci1ibGFjazogIzI1MzEzNztcbiRjb2xvci1ibHVlOiAjMjE5NmYzO1xuXG4kYm9yZGVyLWNvbG9yOiAkY29sb3ItZ3JleTtcblxuJGhlYWRlci1oZWlnaHQ6IDY0cHg7XG4kc2lkZW5hdi13aWR0aDogMjYwcHg7XG4kYXNpZGUtbmF2LXdpZHRoOiAxODBweDtcbiR0ZXh0LWNvbG9yOiAkY29sb3ItZ3JleS0wMztcbiJdfQ== */"

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
        // this.pageScrollService.scroll({
        //   document: this.document,
        //   scrollTarget: targetHash,
        //   scrollViews: [
        //     parentView
        //   ],
        //   scrollOffset: 20,
        //   duration: 250
        // });
        //
        // const element = document.querySelector(targetHash);
        //
        // if (element) {
        //   console.log(42);
        //   // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        //   location.hash = !changeHash ? targetHash : location.hash;
        // }
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