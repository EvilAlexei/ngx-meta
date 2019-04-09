(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-getting-started-getting-started-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/+getting-started/getting-started.doc.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/+getting-started/getting-started.doc.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "# Getting started\n\nIn this section we'll cover basics of the MetaUI rules framework `@ngx-metaui/rules` to assemble user interface on the fly without templates.\n \n\n### Prerequisites\n+ Knowledge of typescript \n+ Basic Web development\n+ Angular 7.x\n\n_Continuing without prior knowledge of all above is not recomended_ and result is unknown.\n\n----\n\n## Quickstart \n\nTo get everything up and running run following commands:\n\n#### Step 1\n\nCreate new angular application (unless you are integrating it with existing one)\n```\n  ng new MyDetailPage --style=scss\n```\n\n\n#### Step 2\n\nAdd `@ngx-metaui/rules` to your app\n```\n  cd MyDetailPage/\n  ng add @ngx-metaui/rules --uiLib=\"prime-ng\"\n```\n\nOnce finished you are fully configured to start some rule driven development but we skip ahead generate some ready to use page!\nThe `--uiLib=\"prime-ng\"`  switch pre-configures UI Library to be used with the MetaUI. Even we currently support only `PrimeNg`\nthe `Material 2` library is somethign we are working on right now...\n\n\n\n#### Step 3\n\nCreate `UserDetail` page with different page modes:  `Create`, `Edit` and `View`  Even this does't do much it will show  \nbasic aspects of _MetaUI_.\n\n```\nng g  @ngx-metaui/rules:mPage --modelClass=User --name=UserDetail \n```\nand follow instructions printed in console such as `compile oss rules` _(We will get to this)_:\n\n```\nnpm run compile:oss\n```\n\n### Step 4\n\nEither attach created page into your router or like in our case  we will simply replace the out of box \n_welcome_ content of the  `app.component.html` with this line\n\n```\n<app-user-detail></app-user-detail>\n```\n\n### Step 5\n\nRun the application \n\n```\nng serve\n```\nand access the page [http://localhost:4200][2] and you just created a page which is based on rules.\n\n\n\n#### Let's Recap what just happened and what was created: \n\n*  `/model/user.ts` to represent our domain object\n*  Component `UserDetailComponent` with just 3 main lines to generate whole content and 3 buttons to switch between `Create`, `Edit` and `View` \nmodes\n* A Rule file `User.oss` ( _OSS - Object style sheet_ ) to style how the object should be rendered and behave for different situations\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/getting-started-1.1.png \"Generate MetaUI Application\")\n\nThe page should look like this showing different fields based on selected operation\n\n\n#### Next Step \n\nNow we just touched the surface of the rule driven UI development and looked at other ways how web application can be \nbuilt. \n\n* To understand how this works please jump to the [next topic][2] where we extend this application and give you \ndeeper introduction to the MetaUI.\n\n* Or you can read [High level fundamentals][3] that are behind this framework. \n    \n [1]: http://localhost:4200\n [2]: https://github.com/ngx-meta/rules/blob/master/docs/OSSRules.md\n [3]: https://github.com/ngx-meta/rules/blob/master/docs/metaui-architecture.md\n \n     \n"

/***/ }),

/***/ "./src/app/components/+getting-started/getting-started-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/+getting-started/getting-started-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: GettingStartedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedRoutingModule", function() { return GettingStartedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _getting_started_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getting-started.component */ "./src/app/components/+getting-started/getting-started.component.ts");




var routes = [
    {
        path: '',
        component: _getting_started_component__WEBPACK_IMPORTED_MODULE_3__["GettingStartedComponent"]
    }
];
var GettingStartedRoutingModule = /** @class */ (function () {
    function GettingStartedRoutingModule() {
    }
    GettingStartedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GettingStartedRoutingModule);
    return GettingStartedRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/+getting-started/getting-started.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/+getting-started/getting-started.component.ts ***!
  \**************************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GettingStartedComponent = /** @class */ (function () {
    function GettingStartedComponent() {
        this.mdFile = __webpack_require__(/*! !raw-loader!./getting-started.doc.md */ "./node_modules/raw-loader/index.js!./src/app/components/+getting-started/getting-started.doc.md");
    }
    GettingStartedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oss-rules',
            template: "<app-markdown [mdFile]=\"mdFile\"></app-markdown>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GettingStartedComponent);
    return GettingStartedComponent;
}());



/***/ }),

/***/ "./src/app/components/+getting-started/getting-started.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/+getting-started/getting-started.module.ts ***!
  \***********************************************************************/
/*! exports provided: GettingStartedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedModule", function() { return GettingStartedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _getting_started_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getting-started-routing.module */ "./src/app/components/+getting-started/getting-started-routing.module.ts");
/* harmony import */ var _getting_started_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getting-started.component */ "./src/app/components/+getting-started/getting-started.component.ts");
/* harmony import */ var _layout_markdown_markdown_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/markdown/markdown.module */ "./src/app/layout/markdown/markdown.module.ts");






var GettingStartedModule = /** @class */ (function () {
    function GettingStartedModule() {
    }
    GettingStartedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _getting_started_component__WEBPACK_IMPORTED_MODULE_4__["GettingStartedComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _getting_started_routing_module__WEBPACK_IMPORTED_MODULE_3__["GettingStartedRoutingModule"],
                _layout_markdown_markdown_module__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"]
            ],
        })
    ], GettingStartedModule);
    return GettingStartedModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-getting-started-getting-started-module.js.map