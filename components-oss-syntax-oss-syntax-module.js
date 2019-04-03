(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-oss-syntax-oss-syntax-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/+oss-syntax/oss-syntax.doc.md":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/+oss-syntax/oss-syntax.doc.md ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "##  OSS Syntax\n\n \nRule format is inspired by CSS, but extended to support nesting and chaining and tweaked to deal with identifiers containing `.`s. \n\n**CSS**\n```css\n  div#toc a {\n      text-decoration:underline;\n  }\n```\n\n\n**OSS**\n ```ts\n     class=User field=email {\n         toolTip:\"Your email\";\n     }\n\n```\n\n* **CSS**: if an `a` tag appears in a `div` named toc, set the property `text-decoration` to `underline`\n* **OSS**: if a field named `email` appears in a class named `User`, set the property `toolTip` to `Your email address`\n\n\n### Basic syntax\n\n#### Nesting\n\nThese are equivalent\n\n```ts\nclass=User {\n  field=firstName {\n    editing=true { \n      visible:true; \n    }\n  }\n}\n\nclass=User {\n  field=lastName {\n    editing=true { \n      visible:true; \n    }\n  }\n}\n\nclass=User {\n  field=email {\n    editing=true { \n      visible:true; \n    }\n  }\n}\n\n\n```\nor \n\n```ts\nclass=User field=firstName editing { visible:true; }\nclass=User field=lastName  editing { visible:true; }\nclass=User field=email editing     { visible:true; }\n\n```\n\nor \n\n```ts\nclass=User editing {\n    field=firstName { visible:true; }\n    field=lastName  { visible:true; }\n    field=email     { visible:true; }\n}\n```\n\nor \n\n```ts\nclass=User editing field=(firstName, lastName) {\n    visible:true; \n}\n```\n\n\n#### Values\n\nValues can be Boolean, Integer, String, List, Map, and Expressions \n\n```ts\nfield=password {\n    // boolean\n    editable:true;\n    \n    //String literal quoted\n    toolTip:\"This is required\";\n    \n    // This is how specify list of values \n    trait:(required, secret);\n    \n    // String literal (unquoted)\n    component:AWPasswordField;\n    \n    // Map\n    bindings: {\n        size:20;\n    }\n    \n    // Expression\n    valid: ${ value.length > 5 } \n}\n```\n\n\n#### Traits\n\nLike CSS classes: Used to assign sets of properties. E.g.:\n\n```ts\nclass=User {\n    field=password {\n        trait: required, secret;\n    }\n}\n```\n\nis expanded to:\n\n```ts\nclass=User {\n      field=password {\n          // When editable use PasswordFieldComponent\n          editable {\n                  component:PasswordFieldComponent;\n          }\n          \n          // If in operation edit or create make it mandatory with defining custom validity condition\n          operation=(edit, create) {\n            required:true;            \n            object {\n                valid: ${(value != null && value !=\"\") ? true : \"Answer required\"}\n            }\n          }\n      }    \n}\n```\n\nSince `build-in` rules contains following trait definition:\n\n```ts\nfield trait=secret {    \n    editable {\n        component:PasswordFieldComponent;\n    }\n}\n\nfield trait=required operation=(edit, create) {\n    required:true;\n    object {\n        valid: ${(value != null && value !=\"\") ? true : \"Answer required\"}\n        }\n    }\n}\n```\n\n\n\n#### Declaration\n\n* When _MetaUI_ collects lists of modules, layouts, classes, or actions to display it matches declared items (in the current context, that are visible).\n* Some items are declared automatically based on introspection\n  * Please see [IntrospectionMetaProvider][1] in the ObjectMeta\n* Others can be added with the “@ Notation” in .oss files.\n\n\n**A derived field declaration:**\n\n```ts\nclass=User {\n  @field=fullName {\n      value:${firstName + \" \" + lastName};\n  }\n}\n```\n\n\n**List of section layouts**\n\n```ts\nlayout=InvoicePage#Sections {\n    @layout=Header#Form {\n        zonePath:Header;\n        title:\"Label for header section\";\n        description:$object.itemDescription;\n        opened:false;\n    }\n\n    @layout=Participant {\n        title:\"Label for Participant section\";\n        visible:true;\n        canEdit:true;\n        component:Section2Component;\n        editing {\n            bindings:{\n                oper:'editx';\n            }\n        }\n        editing=false {\n            bindings:{\n                oper:'vieaaa';\n            }\n        }\n    }\n```\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/section-expanded.png \"Custom links with new m-context element\")\n\n\n ### Advanced syntax\n\n\n#### Traits\n\nThese are equivalent:\n \n```ts\nfield=firstName {\n    trait:required;\n}\n```\n\nvs\n\n```ts\n// with # trait assignment \nfield=firstName#required;\n```\n \n \n \n#### Field rank\n\n```ts\nfield=firstName {\n    after:zLeft;\n    trait:required;\n}\nfield=lastName {\n    after:firstName;\n    trait:required;\n}\nfield=password {\n   after:lastName;\n   trait:required,secret;\n}\n\n```\n\nvs using predecessor operator\n\n```ts\n\nzLeft => firstName#required => lastName#required => password#required,secret\n```\n\n# Exrepssions\n\nExpressions are wrapped in `${…}` and use the AWExpr language which perfectly can execute also javascript code\nThe `“this”` is the `Context object` – key paths reference assignments in context\n\n  * This is one of the reason why we actively thinking about new way how to be less dependant on OSS any legacy expression libraries\n  while trying to more close to the code. This is phase [OSS Files and its next phase][2] \n\n\n```ts\nobject field=bio{\n    editable: ${object.credits > 50}\n}\nobject @field=fullname {\n    value: ${object.firstName + “ “ + object.lastName}\n}\n```\n\nThe context has special keys for value and properties \n\n\n\n```ts\nfield=budget{\n    valid: ${value >= 0 ? true : \"Budget must be non-negative\" }\n}\n\nfield {\n    fancyLabel:${properties.label + \"!!!\"}\n}\n```\n\n\n\n\n#### Grammar\n\n**`rules ::= rule *`**\n  * A OSS Rule file can have more then one rule defined in the file. Each rule can nest other rules as well\n\n\n\n**`rule ::= selector+  traitList? ('{' ruleBody  '}' | ';')`**\n  * Each rule starts with selector or selectors and can be followed by list of traits.\n    * If you remember we mentioned in the advanced syntax that trait can be written like this `#required ` with `#` character\n\n**`traitList ::= '#' IDENTIFIER  (',' IDENTIFIER)*`**\n * When using trait advanced syntax then we start with `#` character and add one or more trait delimited by comma\n \n \n**`**selector ::= '@'? (selectorDef |  '~' IDENTIFIER_KEY)**`**\n  * A selector can start with `@` in case we are declaring a field\n      ```ts\n         @field=fullName {\n              value:${firstName + \" \" + lastName};\n          }\n      ```\n  * Followed by one or more _selector definition_ which is always key/value or just one or more  _identifier_. You probably saw this already. We can say\n       \n```\n               class operation=edit {               \n                   field { editing:true; }               \n               }\n```\nwhich is equivalent to:\n       \n```ts\n               class=* operation=edit {               \n                   field=* {\n                    editing:true; \n                   }               \n               }\n```\n      \n\n\n**`selectorDef ::=  IDENTIFIER_KEY   selectorValue?`**\n * The selector definition  is just a key which is always string and can have a value. If does not have value then there is a implicit `*`\n or `true` assigned\n\n**`selectorValue ::= '=' (simpleValue | '(' valueOrList ')' )`**\n  * When value is assigned there is a always `=` sign followed by simple value :\n    * String literal\n    * true or false\n    * null \n    * integer or float \n  \n  \n* or complex value such as :\n  * List\n  * map\n  * expression\n  * field path with `.`s\n  * and others\n\n**`ruleBody ::= ruleBodyKeyValue*  rule* ruleBodyKeyValue* rule* precedenceChain*`**\n* Rule body contains actual properties (key/values) or can contain other rules\n* They can also contain at the end of definition the chain of predecessor operators \n  * the `zLeft => aaa => bbbb;`\n\n**`ruleBodyKeyValue ::= (key ':' value '!'? ';'? )`**\n* Just like in css its key/value pair. you can add `!` character  to override existing rule (something like `!important`)\n\n\n[1]: https://github.com/ngx-meta/rules/blob/master/libs/rules/src/lib/metaui/core/object-meta.ts\n[2]: https://github.com/ngx-meta/rules/projects\n"

/***/ }),

/***/ "./src/app/components/+oss-syntax/oss-syntax-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/+oss-syntax/oss-syntax-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OssSyntaxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OssSyntaxRoutingModule", function() { return OssSyntaxRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _oss_syntax_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oss-syntax.component */ "./src/app/components/+oss-syntax/oss-syntax.component.ts");




var routes = [
    {
        path: '',
        component: _oss_syntax_component__WEBPACK_IMPORTED_MODULE_3__["OssSyntaxComponent"]
    }
];
var OssSyntaxRoutingModule = /** @class */ (function () {
    function OssSyntaxRoutingModule() {
    }
    OssSyntaxRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OssSyntaxRoutingModule);
    return OssSyntaxRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/+oss-syntax/oss-syntax.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/+oss-syntax/oss-syntax.component.ts ***!
  \****************************************************************/
/*! exports provided: OssSyntaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OssSyntaxComponent", function() { return OssSyntaxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OssSyntaxComponent = /** @class */ (function () {
    function OssSyntaxComponent() {
        this.mdFile = __webpack_require__(/*! !raw-loader!./oss-syntax.doc.md */ "./node_modules/raw-loader/index.js!./src/app/components/+oss-syntax/oss-syntax.doc.md");
    }
    OssSyntaxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oss-syntax',
            template: "<app-markdown [mdFile]=\"mdFile\"></app-markdown>",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OssSyntaxComponent);
    return OssSyntaxComponent;
}());



/***/ }),

/***/ "./src/app/components/+oss-syntax/oss-syntax.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/+oss-syntax/oss-syntax.module.ts ***!
  \*************************************************************/
/*! exports provided: OssSyntaxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OssSyntaxModule", function() { return OssSyntaxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _oss_syntax_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oss-syntax-routing.module */ "./src/app/components/+oss-syntax/oss-syntax-routing.module.ts");
/* harmony import */ var _oss_syntax_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oss-syntax.component */ "./src/app/components/+oss-syntax/oss-syntax.component.ts");
/* harmony import */ var _layout_markdown_markdown_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/markdown/markdown.module */ "./src/app/layout/markdown/markdown.module.ts");






var OssSyntaxModule = /** @class */ (function () {
    function OssSyntaxModule() {
    }
    OssSyntaxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _oss_syntax_component__WEBPACK_IMPORTED_MODULE_4__["OssSyntaxComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _oss_syntax_routing_module__WEBPACK_IMPORTED_MODULE_3__["OssSyntaxRoutingModule"],
                _layout_markdown_markdown_module__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"]
            ],
        })
    ], OssSyntaxModule);
    return OssSyntaxModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-oss-syntax-oss-syntax-module.js.map