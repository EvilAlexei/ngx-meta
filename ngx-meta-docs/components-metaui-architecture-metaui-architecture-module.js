(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-metaui-architecture-metaui-architecture-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/+metaui-architecture/metaui-architecture.doc.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/+metaui-architecture/metaui-architecture.doc.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "# MetaUI Architecture\n\nThis document describes `MetaUI framework` fundamentals and also shows you the implementation aspects in the \nTypescript (Javascript) environment, what are the limitations and workarounds that we need to follow. \n\n\n_`Note: If you are trying to integrate MetaUI into your project you might want to read this document first!`_\n\n[GETTING-STARTED.md][1]\n\n\nLet's start with this simplified picture:\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/meta-1.0.png?size=small \"High Level Diagram\")\n\nWe can see 3 big pieces  here that makes `MetaUI` framework what it is. So Let's start from the bottom:\n\n#### Rule Engine\n\n_Rule engine_ is implemented by `UIMeta` class along with other helper classes and here we accepts different assignments passed \nfrom _UIContext_ and evaluate the best possible match and return set of properties which are used later on to \nrender _User Interface_.  The same way you would expect any Internet Browser to work when parsing CSS. Simple right ?\n\nRules are loaded from the `files` as well as from `objects` by introspecting typescript class and trying to figure \nsome info about the objects such as data types. This is why _Domain Object_ implements interface `Deserializable` \nfor retrieving types. \n\n\n```ts\n\nexport class User implements Entity\n{\n\n\n    constructor(public uniqueName?: string, public firstName?: string,\n                public lastName?: string, public age?: number, public dob?: Date)\n    {\n    }\n\n    identity(): string\n    {\n        return this.uniqueName;\n    }\n\n\n    /**\n     * Used by MetaUI\n     *\n     */\n    getTypes(): any\n    {\n        return {\n            uniqueName: String,\n            age: Number,\n            firstName: String,\n            lastName: String,\n            dob: Date\n        };\n    }    \n   ...\n\n```\n\n\nBut to load rules from the files we use different method. OSS files are compiled to the \nTS class and then are packaged along with the application. This is why we have in the `metaui-evolution` app file called \n`user-rules.ts` which references all the available rules and then inside our module we have this line:\n\n```ts\n    import * as userRules from './user-rules';\n``` \n\nwhich registers this within the `AppConfig` and `Rule engine` can then iterate over all the compiled rules, load, index and \nstore them locally.\n\n\n\n#### UI Context\n\n`UI Context` is used to communicate with the `Rule Engine` and to hold stack of current assignments those that \nyou push using `MetaContext` component.\n\n\n\n```html\n   <m-context [object]=\"userObject\" operation=\"edit\" layout=\"Inspect\">\n        <m-include-component></m-include-component>\n   </m-context>\n\n```\n\nWhen you use above HTML fragment it treats bindings as a list of key/values and results following calls:\n\n\n```ts\n    context: Context = ...    \n    //context.set(key, value);\n    context.set('layout', 'Inspect');\n    context.set('operation', 'edit');\n    context.set('object', userObject);\n    \n```\n\nEvery `.set()` call pushes key /value property onto the Stack (`Context`) followed by passing it the `Rule Engine` to get back a  result which is cached and properties are retrieved.\n\nExample of retrieved properties:\n\n```\n        {\n        'visible': true,\n        'class_trait': 'fiveZones',\n        'editable': true,\n        'bindings': {\n            'value': 'Default Title'\n        },\n        'field_trait': 'required',\n        'label': 'Title',\n        'type': 'string',\n        'required': true,\n        'editing': true,\n        'valid': '{{(value && value.length > 0) ? true : \\'Answer required\\'}}',\n        'component': 'InputFieldComponent',\n        'field': 'title',\n        'layout_trait': 'Form',\n        'trait': 'required',\n        'rank': 20,\n        'after': 'zLeft',\n        'class': 'CheckRequest1'\n    }\n\n```\n\n#### UI Generation\n\nOnce rules are evaluated and list of properties is retrieved then the `MetaIncludeComponent`\nwill take care of the rest.\n\nHere you can notice the second line the `<m-include-component>` that reads generated properties. Therefore the wrapping element\n`<m-context>` is responsible for pushing and the `<m-include-component>` is here for collecting whatever is available \nand rendering UI.\n \n\n```html\n   <m-context [object]=\"userObject\" operation=\"edit\" layout=\"Inspect\">\n        <m-include-component></m-include-component>\n   </m-context>\n\n```\n\nThis gives you possibility to put in additional content around the `<m-include-component>`: \n\nex.:\n```html\n   <m-context [object]=\"userObject\" operation=\"edit\" layout=\"Inspect\">\n        \n        <h2> User Detail Page: </h2>\n    \n        <m-include-component></m-include-component>\n        \n        <user-org-chart [user]=\"userObject\" ></user-org-chart>\n   </m-context>\n\n```\n\nTo render a UI we use Angular's API (`ComponentFactoryResolver`, `ViewContainerRef`) and some DOM native operations.\n\n\n**Example**\n\n\nAfter a quick introduction, let's look at this old picture that takes us one level down. Even I am not really _Michelangelo_\nI hope we can get some information out of it. \n\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/meta-1.1.jpg \"Sketch\")\n\nLet's start from the top left corner:\n\n1) We push 3 assignments using ` <m-contex>` \n2) Value is pre-processed and push one by one to the Stack\n3) Inside our Stack `(Context)`, we check and try to retrieve existing Activation which is sharable object\nthat holds Assignments hierarchy\n4) If it does not exists we initiate `match`\n5) Before it reaches Indexed KEYDATA store (completely on the right), on its way it broadcasts several notifications (see the phone)\n6) These notification are received by Observers that are responsible to pre-load and register\nnew rules relevant to current data\n7) `Rules Engine` gives back `Value Matches` which is at this point just pointers to RuleDB (not real properties)\n8) Assignment is created and its cached. If additional rule chaining needs to happen it is here, where certain\nproperties are mirrored and pushed again to (step #1)\n9) If no further chaining is needed we cache `Activation` for later use (step #3)\n10) Retrieve and convert match result to real properties that are used to render UI.\n \n\n## Typescript specifics\n\n\n### Rule file loading\n\nAs already mentioned above we can not simply load a rule file from the system since it's running inside \na browser but we do take the `OSS file` and compile it, it outputs `TS file`, which is then bundled as a part of the project.\n\nFor example something like this:\n\n```js\nclass=Order {\n     @field=title#derived {\n        type:String;\n        value:${\"Purchase Order: \" + object.name };\n        bindings:{\n            useNoLabelLayout:true;\n        }\n        wrapperComponent:GenericContainerComponent;\n        wrapperBindings: { tagName:h2; }\n    }\n\n    field=uniqueName {\n        label:\"PO #\"\n    }\n\n    field=description {\n        bindings: {\n            styleClass: 'u-description';\n        }\n    }\n    ...\n  }\n```\n\nis converted into something like this a Map-like format:\n\n```\n/**\n *  This is generated file. Do not edit !!\n *\n *  @formatter:off\n *\n */\n/* tslint:disable */\nexport const OrderRule = {\n \toss:\t\t\t[\n\t\t\t  {\n\t\t\t    '_selectors': [\n\t\t\t      {\n\t\t\t        '_key': 'class',\n\t\t\t        '_value': 'Order',\n\t\t\t        '_isDecl': false\n\t\t\t      }\n\t\t\t    ],\n\t\t\t    '_rank': 0\n\t\t\t  },\n\t\t\t  {\n\t\t\t    '_selectors': [\n\t\t\t      {\n\t\t\t        '_key': 'class',\n\t\t\t        '_value': 'Order',\n\t\t\t        '_isDecl': false\n\t\t\t      },\n\t\t\t      {\n\t\t\t        '_key': 'field',\n\t\t\t        '_value': 'title',\n\t\t\t        '_isDecl': true\n\t\t\t      }\n\t\t\t    ],\n\t\t\t    '_properties': {\n\t\t\t      'wrapperComponent': 'GenericContainerComponent',\n\t\t\t      'wrapperBindings': {\n\t\t\t        'tagName': 'h2'\n\t\t\t      },\n\t\t\t      'bindings': {\n\t\t\t        'useNoLabelLayout': true\n\t\t\t      },\n\t\t\t      'trait': 'derived',\n\t\t\t      'type': 'String',\n\t\t\t      'value': {\n\t\t\t        't': 'Expr',\n\t\t\t        'v': '\"Purchase Order: \" + object.name'\n\t\t\t      }\n\t\t\t    }\n            ..\n         }\t\t\t    \t\t\t    \n   ]\n\n```\n\nAnd this TS content is then read by our special loader `RuleLoader` which registers them with the rule \n engine (the `Meta` class).\n \n```ts\n\nexport interface RuleLoader\n{\n    loadRules (meta: Meta, source: any, module: string, onRule: (rule: Rule) => void): void;\n}\n\n```\n\nTherefore we are using following directory structure. Here we store `Rule files (.oss)`\n\n![alt text](https://raw.githubusercontent.com/ngx-meta/rules/master/docs/meta/meta-1.2.png?size=small \"Directory structure\")\n\nand barrel `index.ts` that just exports all from this directory. It is worth mentioning that you can pick any structure \nyou want as long you can have one file at the end like `user-rules.ts` that exports everything so it can be imported \nand used in the app module. The rest is standard cli's project.\n\nEverytime you change rules, you just run a OSS compiler.\n\n_You can see how its used in the packages.json_\n\n```\njava -jar lib/meta-ui-parser.jar --gen --user ./packages/metaui/src/core ./modules/metaui-evolution/src/app/rules\n\njava -jar <PATH TO meta-ui-parser> --gen --user <PATH to the system rules> <DIRECTORY WITH YOUR USER FILES>\n\nif you are using it in your application then it will be probably something like: \n\n    =>  <PATH TO meta-ui-parser> - node_modules/@aribaui/resources/tools/oss/meta-ui-parser.jar\n    \n    => <PATH to the system rules> -   node_modules/@aribaui/metaui/core\n\n    => <DIRECTORY WITH YOUR USER FILES> -   ~/<PATH TO YOUR PROJECT>/src/app/rules\n    \nex: \n\njava -jar node_modules/@aribaui/resources/tools/oss/meta-ui-parser.jar --gen --user node_modules/@aribaui/metaui/core ~/<PATH TO YOUR PROJECT>/src/app/rules\n    \n```\n\nOnce you run this command it will create `ts` directory under the `<DIRECTORY WITH YOUR USER FILES>`\n\n\n`Note: Rules are loaded lazily so a specific rule file for example the  order.oss (order.ts) is loaded after you really push Order object to a stack`\n\n**Even there is a activity in progress where we try to finish a parser in TS** (there is a branch called compiler) , but it does not go as fast as I \nwould like to. Maybe we will drop OSS completely and we will try to replace it somehow with TS support to define system level as well as user level \nrules. \n\n\n\n### Domain object introspection\n\nJust like in css world where you define CSS selectors and you try to match against these selectors your HTML along with some other context properties the same \nworks here. \n\nSo far we loaded and registered `OSS files (TS files) ` and now we need to introspect object to understand its internal structure so we \ncan register additional rules that are not covered by our `OSS files`.\n\n\nLet's remember OSS stands for `Object style sheet`, meaning there is the same analogy with CSS:\n\n* You first need to have rules in place\n* You throw in an `Object` and a selector(s) are matched\n* It returns properties that are defined under these selectors. \n* Properties are picked by `m-include-component`\n* UI is rendered\n\n\nSome example how we register rules for specific object:\n\n```ts\n\n// IntrospectionMetaProvider.ts\n\nprivate registerRulesForFields(object: any, className: string): void {\n        let fieldNames =...\n\n        let rank = 0;\n        for (let name of fieldNames) {\n            ...\n            let type = instance[name]. => GET TYPE\n            let properties = new Map<string, any>();\n\n            properties.set(ObjectMeta.KeyField, name);\n            properties.set(ObjectMeta.KeyType, type);\n            properties.set(ObjectMeta.KeyVisible, true);\n\n            // if we are dealing with array we need to know a type of actual element\n            if (isArray(instance[name])) {\n                ....\n                properties.set(ObjectMeta.KeyElementType, collectionElementType);                \n            }\n\n            // create programatically selector and proeprties\n            let selectorList: Array<Selector> = [\n                new Selector(ObjectMeta.KeyClass, className),\n                new Selector(ObjectMeta.KeyField, name),\n            ];            \n            properties.set(ObjectMeta.KeyRank, (rank++ + 1) * 10);\n            let rule: Rule = new Rule(selectorList, properties, ObjectMeta.ClassRulePriority);\n            this._meta.addRule(rule);\n        }\n    }\n}\n\n```\n\nThis way we automatically pre-register additional rules for  an `Object` such as data type for class field.\n\n\n[1]: ./oss-rules\n"

/***/ }),

/***/ "./src/app/components/+metaui-architecture/metaui-architecture-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/+metaui-architecture/metaui-architecture-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: MetauiArchitectureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetauiArchitectureRoutingModule", function() { return MetauiArchitectureRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _metaui_architecture_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metaui-architecture.component */ "./src/app/components/+metaui-architecture/metaui-architecture.component.ts");




var routes = [
    {
        path: '',
        component: _metaui_architecture_component__WEBPACK_IMPORTED_MODULE_3__["MetauiArchitectureComponent"]
    }
];
var MetauiArchitectureRoutingModule = /** @class */ (function () {
    function MetauiArchitectureRoutingModule() {
    }
    MetauiArchitectureRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MetauiArchitectureRoutingModule);
    return MetauiArchitectureRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/+metaui-architecture/metaui-architecture.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/+metaui-architecture/metaui-architecture.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MetauiArchitectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetauiArchitectureComponent", function() { return MetauiArchitectureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MetauiArchitectureComponent = /** @class */ (function () {
    function MetauiArchitectureComponent() {
        this.content = __webpack_require__(/*! !raw-loader!./metaui-architecture.doc.md */ "./node_modules/raw-loader/index.js!./src/app/components/+metaui-architecture/metaui-architecture.doc.md");
    }
    MetauiArchitectureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-metaui-architecture',
            template: "<markdown class=\"variable-binding\" [data]=\"content\"></markdown>",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MetauiArchitectureComponent);
    return MetauiArchitectureComponent;
}());



/***/ }),

/***/ "./src/app/components/+metaui-architecture/metaui-architecture.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/+metaui-architecture/metaui-architecture.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MetauiArchitectureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetauiArchitectureModule", function() { return MetauiArchitectureModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _metaui_architecture_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metaui-architecture-routing.module */ "./src/app/components/+metaui-architecture/metaui-architecture-routing.module.ts");
/* harmony import */ var _metaui_architecture_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metaui-architecture.component */ "./src/app/components/+metaui-architecture/metaui-architecture.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");







var MetauiArchitectureModule = /** @class */ (function () {
    function MetauiArchitectureModule() {
    }
    MetauiArchitectureModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _metaui_architecture_component__WEBPACK_IMPORTED_MODULE_5__["MetauiArchitectureComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _metaui_architecture_routing_module__WEBPACK_IMPORTED_MODULE_4__["MetauiArchitectureRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forChild()
            ],
        })
    ], MetauiArchitectureModule);
    return MetauiArchitectureModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-metaui-architecture-metaui-architecture-module.js.map