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
		"components-metaui-architecture-metaui-architecture-module"
	],
	"./components/+oss-rules/oss-rules.module": [
		"./src/app/components/+oss-rules/oss-rules.module.ts",
		"components-oss-rules-oss-rules-module"
	],
	"./components/+oss-syntax/oss-syntax.module": [
		"./src/app/components/+oss-syntax/oss-syntax.module.ts",
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
	return __webpack_require__.e(ids[1]).then(function() {
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
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_3__["routes"], { anchorScrolling: 'enabled' })],
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

module.exports = "<section id=\"wrapper\">\n  <app-header></app-header>\n\n  <mat-sidenav-container id=\"main\">\n    <mat-sidenav opened mode=\"side\" class=\"sidenav\">\n      <app-sidebar></app-sidebar>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <section id=\"content\">\n        <div class=\"content-holder\">\n          <router-outlet></router-outlet>\n\n        </div>\n\n        <aside class=\"aside-nav\">\n          <app-section-nav></app-section-nav>\n        </aside>\n      </section>\n\n      <app-footer></app-footer>\n    </mat-sidenav-content>\n\n  </mat-sidenav-container>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  display: flex;\n  height: 100vh;\n  flex-flow: column nowrap; }\n\n#main {\n  flex: 1; }\n\n#main .sidenav {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    top: 65px;\n    width: 260px;\n    overflow-y: auto; }\n\n/* mat-sidenav-container */\n\n.mat-sidenav-container {\n  height: 100%; }\n\n/* mat-sidenav-content */\n\n.mat-sidenav-content {\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap; }\n\n/* content */\n\n#content {\n  flex: 1;\n  flex-flow: row nowrap;\n  display: flex; }\n\n/* content-holder */\n\n.content-holder {\n  margin-right: 180px;\n  padding: 0 30px 50px;\n  box-sizing: border-box;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvaG9tZS92cy9Qcm9qZWN0cy9uZ3gtbWV0YS1kb2NzL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSxPQUFPLEVBQUE7O0FBRFQ7SUFJSSxlQUFlO0lBQ2YsT0FBTztJQUNQLFNBQVM7SUFDVCxTQUF5QjtJQUN6QixZQ05pQjtJRE9qQixnQkFBZ0IsRUFBQTs7QUFHcEIsMEJBQUE7O0FBQ0E7RUFDRSxZQUFZLEVBQUE7O0FBRWQsd0JBQUE7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3QixFQUFBOztBQUUxQixZQUFBOztBQUNBO0VBQ0UsT0FBTztFQUNQLHFCQUFxQjtFQUNyQixhQUFhLEVBQUE7O0FBRWYsbUJBQUE7O0FBQ0E7RUFDRSxtQkMzQnFCO0VENEJyQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlcy92YXJpYWJsZXNcIjtcblxuI3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG4jbWFpbiB7XG4gIGZsZXg6IDE7XG5cbiAgLnNpZGVuYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6ICRoZWFkZXItaGVpZ2h0ICsgMXB4O1xuICAgIHdpZHRoOiAkc2lkZW5hdi13aWR0aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG59XG4vKiBtYXQtc2lkZW5hdi1jb250YWluZXIgKi9cbi5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4vKiBtYXQtc2lkZW5hdi1jb250ZW50ICovXG4ubWF0LXNpZGVuYXYtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuLyogY29udGVudCAqL1xuI2NvbnRlbnQge1xuICBmbGV4OiAxO1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4vKiBjb250ZW50LWhvbGRlciAqL1xuLmNvbnRlbnQtaG9sZGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAkYXNpZGUtbmF2LXdpZHRoO1xuICBwYWRkaW5nOiAwIDMwcHggNTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuIiwiJGNvbG9yLWdyZXk6ICNDQ0M7XG4kY29sb3ItZ3JleS0wMjogIzQ1NUE2NDtcbiRjb2xvci1ncmV5LTAzOiAjNjA3ZDhiO1xuJGNvbG9yLWdyZXktMDQ6ICNmNWY1ZjU7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG5cbiRib3JkZXItY29sb3I6ICRjb2xvci1ncmV5O1xuXG4kaGVhZGVyLWhlaWdodDogNjRweDtcbiRzaWRlbmF2LXdpZHRoOiAyNjBweDtcbiRhc2lkZS1uYXYtd2lkdGg6IDE4MHB4O1xuJHRleHQtY29sb3I6ICRjb2xvci1ncmV5LTAzO1xuIl19 */"

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





var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
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
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
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
/* harmony import */ var _layout_section_nav_section_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/section-nav/section-nav.component */ "./src/app/layout/section-nav/section-nav.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");













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
                _layout_section_nav_section_nav_component__WEBPACK_IMPORTED_MODULE_11__["SectionNavComponent"],
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
                ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownModule"].forRoot()
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
        path: 'metaui-architecture',
        loadChildren: './components/+metaui-architecture/metaui-architecture.module#MetauiArchitectureModule',
        data: { title: 'MetaUI Architecture' }
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
        path: '',
        redirectTo: 'oss-rules',
        pathMatch: 'full',
    }
];


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

module.exports = "#footer {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-top: 1px solid #CCC;\n  color: #607d8b;\n  text-align: center; }\n  #footer a {\n    color: currentColor;\n    text-decoration: none;\n    transition: color 250ms ease; }\n  #footer a:hover {\n      text-decoration: none;\n      color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDBCQ0xlO0VETWYsY0NKcUI7RURLckIsa0JBQWtCLEVBQUE7RUFMcEI7SUFRSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDRCQUE0QixFQUFBO0VBVmhDO01BYU0scUJBQXFCO01BQ3JCLFdDWlksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuI2Zvb3RlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGEge1xuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDI1MG1zIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAkY29sb3ItYmxhY2s7XG4gICAgfVxuICB9XG59XG4iLCIkY29sb3ItZ3JleTogI0NDQztcbiRjb2xvci1ncmV5LTAyOiAjNDU1QTY0O1xuJGNvbG9yLWdyZXktMDM6ICM2MDdkOGI7XG4kY29sb3ItZ3JleS0wNDogI2Y1ZjVmNTtcbiRjb2xvci1ibGFjazogIzAwMDtcblxuJGJvcmRlci1jb2xvcjogJGNvbG9yLWdyZXk7XG5cbiRoZWFkZXItaGVpZ2h0OiA2NHB4O1xuJHNpZGVuYXYtd2lkdGg6IDI2MHB4O1xuJGFzaWRlLW5hdi13aWR0aDogMTgwcHg7XG4kdGV4dC1jb2xvcjogJGNvbG9yLWdyZXktMDM7XG4iXX0= */"

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
    FooterComponent.prototype.ngOnInit = function () {
    };
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

module.exports = "<mat-toolbar>\n  <header id=\"header\">\n    <strong class=\"logo\">\n      <a routerLink=\"\" aria-label=\"MetaUI logo\">metaUI</a>\n    </strong>\n\n    <ul class=\"socials\">\n      <li>\n        <a href=\"https://github.com/ngx-meta/rules\" aria-label=\"MetaUI on github\">\n          <mat-icon svgIcon=\"ngx-meta-github\"></mat-icon>\n        </a>\n      </li>\n\n      <li>\n        <a href=\"https://twitter.com/metauiframework\" aria-label=\"MetaUI on twitter\">\n          <mat-icon svgIcon=\"ngx-meta-twitter\"></mat-icon>\n        </a>\n      </li>\n    </ul>\n  </header>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border-bottom: 1px solid #CCC; }\n\n#header {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 100%; }\n\n.socials {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center; }\n\n.socials li {\n    height: 24px;\n    width: 24px; }\n\n.socials li:first-child {\n    margin-right: 20px; }\n\n.socials a {\n    display: block;\n    height: 100%;\n    color: #455A64;\n    transition: opacity 250ms ease; }\n\n.socials a:hover {\n      opacity: 0.85; }\n\n.logo {\n  display: block;\n  background: url('bg-logo.svg') no-repeat;\n  width: 149px;\n  height: 46px;\n  text-indent: -9999px;\n  transition: opacity 250ms ease; }\n\n.logo a {\n    display: block;\n    height: 100%; }\n\n.logo:hover {\n    opacity: 0.85; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw2QkNIZSxFQUFBOztBRE1qQjtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix1QkFBdUIsRUFBQTs7QUFOekI7SUFTSSxZQUFZO0lBQ1osV0FBVyxFQUFBOztBQVZmO0lBY0ksa0JBQWtCLEVBQUE7O0FBZHRCO0lBc0JJLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0N0Q21CO0lEdUNuQiw4QkFBOEIsRUFBQTs7QUF6QmxDO01BNEJNLGFBQWEsRUFBQTs7QUFLbkI7RUFDRSxjQUFjO0VBQ2Qsd0NBQStEO0VBQy9ELFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDhCQUE4QixFQUFBOztBQU5oQztJQVNJLGNBQWM7SUFDZCxZQUFZLEVBQUE7O0FBVmhCO0lBY0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG46aG9zdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xufVxuXG4jaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zb2NpYWxzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGxpIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gIH1cblxuICBsaTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLm1hdC1pY29uIHtcblxuICB9XG5cbiAgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS0wMjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDAuODU7XG4gICAgfVxuICB9XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctbG9nby5zdmdcIikgbm8tcmVwZWF0O1xuICB3aWR0aDogMTQ5cHg7XG4gIGhlaWdodDogNDZweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZTtcblxuICBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg1O1xuICB9XG59XG4iLCIkY29sb3ItZ3JleTogI0NDQztcbiRjb2xvci1ncmV5LTAyOiAjNDU1QTY0O1xuJGNvbG9yLWdyZXktMDM6ICM2MDdkOGI7XG4kY29sb3ItZ3JleS0wNDogI2Y1ZjVmNTtcbiRjb2xvci1ibGFjazogIzAwMDtcblxuJGJvcmRlci1jb2xvcjogJGNvbG9yLWdyZXk7XG5cbiRoZWFkZXItaGVpZ2h0OiA2NHB4O1xuJHNpZGVuYXYtd2lkdGg6IDI2MHB4O1xuJGFzaWRlLW5hdi13aWR0aDogMTgwcHg7XG4kdGV4dC1jb2xvcjogJGNvbG9yLWdyZXktMDM7XG4iXX0= */"

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
        this.matIconRegistry
            .addSvgIcon('ngx-meta-github', this.domSanitizer.bypassSecurityTrustResourceUrl('./ngx-meta/assets/images/ico-github.svg')).addSvgIcon('ngx-meta-twitter', this.domSanitizer.bypassSecurityTrustResourceUrl('./ngx-meta/assets/images/ico-twitter.svg'));
    }
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

/***/ "./src/app/layout/section-nav/section-nav.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/section-nav/section-nav.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"section-nav\">\n  <li *ngFor=\"let link of links\">\n    <a href=\"#\"> {{ link }} </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/layout/section-nav/section-nav.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/section-nav/section-nav.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 180px;\n  position: fixed;\n  right: 20px;\n  top: 65px; }\n\n.section-nav {\n  margin: 15px 0 0;\n  padding: 0;\n  border-left: 1px solid #CCC;\n  list-style: none; }\n\n.section-nav li {\n    font-size: 13px; }\n\n.section-nav li a {\n      display: block;\n      line-height: 24px;\n      color: #607d8b;\n      text-decoration: none;\n      padding: 0 20px;\n      transition: color 250ms ease, background-color 250ms ease; }\n\n.section-nav li a:hover {\n        background-color: #f5f5f5;\n        color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9sYXlvdXQvc2VjdGlvbi1uYXYvc2VjdGlvbi1uYXYuY29tcG9uZW50LnNjc3MiLCIvaG9tZS92cy9Qcm9qZWN0cy9uZ3gtbWV0YS1kb2NzL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUNRcUI7RURQckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUF5QixFQUFBOztBQUUzQjtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsMkJDVmU7RURXZixnQkFBZ0IsRUFBQTs7QUFKbEI7SUFPSSxlQUFlLEVBQUE7O0FBUG5CO01BVU0sY0FBYztNQUNkLGlCQUFpQjtNQUNqQixjQ2pCaUI7TURrQmpCLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YseURBQXlELEVBQUE7O0FBZi9EO1FBa0JRLHlCQ3RCZTtRRHVCZixXQ3RCVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NlY3Rpb24tbmF2L3NlY3Rpb24tbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcbjpob3N0IHtcbiAgd2lkdGg6ICRhc2lkZS1uYXYtd2lkdGg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDIwcHg7IC8vIHNjcm9sbGJhclxuICB0b3A6ICRoZWFkZXItaGVpZ2h0ICsgMXB4Oztcbn1cbi5zZWN0aW9uLW5hdiB7XG4gIG1hcmdpbjogMTVweCAwIDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcblxuICBsaSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuXG4gICAgYSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgY29sb3I6ICRjb2xvci1ncmV5LTAzO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktMDQ7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItYmxhY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkY29sb3ItZ3JleTogI0NDQztcbiRjb2xvci1ncmV5LTAyOiAjNDU1QTY0O1xuJGNvbG9yLWdyZXktMDM6ICM2MDdkOGI7XG4kY29sb3ItZ3JleS0wNDogI2Y1ZjVmNTtcbiRjb2xvci1ibGFjazogIzAwMDtcblxuJGJvcmRlci1jb2xvcjogJGNvbG9yLWdyZXk7XG5cbiRoZWFkZXItaGVpZ2h0OiA2NHB4O1xuJHNpZGVuYXYtd2lkdGg6IDI2MHB4O1xuJGFzaWRlLW5hdi13aWR0aDogMTgwcHg7XG4kdGV4dC1jb2xvcjogJGNvbG9yLWdyZXktMDM7XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/section-nav/section-nav.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/section-nav/section-nav.component.ts ***!
  \*************************************************************/
/*! exports provided: SectionNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionNavComponent", function() { return SectionNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SectionNavComponent = /** @class */ (function () {
    function SectionNavComponent() {
        this.links = [
            'item-01',
            'item-02',
            'item-03',
            'item-04',
            'item-05',
            'item-06',
        ];
    }
    SectionNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-nav',
            template: __webpack_require__(/*! ./section-nav.component.html */ "./src/app/layout/section-nav/section-nav.component.html"),
            styles: [__webpack_require__(/*! ./section-nav.component.scss */ "./src/app/layout/section-nav/section-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SectionNavComponent);
    return SectionNavComponent;
}());



/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <mat-list-item><a routerLink=\"/oss-rules\" routerLinkActive=\"active\">OSS Rules</a></mat-list-item>\n  <mat-list-item><a routerLink=\"/oss-syntax\" routerLinkActive=\"active\">OSS Syntax</a></mat-list-item>\n  <mat-list-item><a routerLink=\"/metaui-architecture\" routerLinkActive=\"active\">MetaUI Architecture</a></mat-list-item>\n  <!--<mat-list-item *ngFor=\"let link of links\">-->\n    <!--<a href=\"#\"> {{ link }} </a>-->\n  <!--</mat-list-item>-->\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding-bottom: 30px; }\n\n.mat-list-base .mat-list-item {\n  height: auto; }\n\n.mat-list-base .mat-list-item /deep/ .mat-list-item-content {\n    padding-left: 0;\n    padding-right: 0; }\n\n.mat-list-base .mat-list-item a {\n    display: block;\n    width: 100%;\n    padding: 0 16px;\n    line-height: 48px;\n    box-sizing: border-box; }\n\n.mat-list-base .mat-list-item a.active {\n      color: #000;\n      background-color: #CCC; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL25neC1tZXRhLWRvY3Mvc3JjL2FwcC9sYXlvdXQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdnMvUHJvamVjdHMvbmd4LW1ldGEtZG9jcy9zcmMvYXBwL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0IsRUFBQTs7QUFFdEI7RUFHSSxZQUFZLEVBQUE7O0FBSGhCO0lBTU0sZUFBZTtJQUNmLGdCQUFnQixFQUFBOztBQVB0QjtJQVdNLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0IsRUFBQTs7QUFmNUI7TUFrQlEsV0NwQlU7TURxQlYsc0JDekJTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4ubWF0LWxpc3QtYmFzZSB7XG5cbiAgLm1hdC1saXN0LWl0ZW0ge1xuICAgIGhlaWdodDogYXV0bztcblxuICAgIC9kZWVwLyAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItYmxhY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJGNvbG9yLWdyZXk6ICNDQ0M7XG4kY29sb3ItZ3JleS0wMjogIzQ1NUE2NDtcbiRjb2xvci1ncmV5LTAzOiAjNjA3ZDhiO1xuJGNvbG9yLWdyZXktMDQ6ICNmNWY1ZjU7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG5cbiRib3JkZXItY29sb3I6ICRjb2xvci1ncmV5O1xuXG4kaGVhZGVyLWhlaWdodDogNjRweDtcbiRzaWRlbmF2LXdpZHRoOiAyNjBweDtcbiRhc2lkZS1uYXYtd2lkdGg6IDE4MHB4O1xuJHRleHQtY29sb3I6ICRjb2xvci1ncmV5LTAzO1xuIl19 */"

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


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.links = [
            'M-item-01',
            'M-item-02',
            'M-item-03',
            'M-item-04',
            'M-item-05',
            'M-item-06',
        ];
    }
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
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