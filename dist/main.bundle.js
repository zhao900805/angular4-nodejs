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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invalid_invalid_component__ = __webpack_require__("../../../../../src/app/invalid/invalid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_list_edit_list_component__ = __webpack_require__("../../../../../src/app/edit-list/edit-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__repositories_repositories_component__ = __webpack_require__("../../../../../src/app/repositories/repositories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__issues_issues_component__ = __webpack_require__("../../../../../src/app/issues/issues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_by_id_user_by_id_component__ = __webpack_require__("../../../../../src/app/user-by-id/user-by-id.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_by_category_user_by_category_component__ = __webpack_require__("../../../../../src/app/user-by-category/user-by-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tags_manager_tags_manager_component__ = __webpack_require__("../../../../../src/app/tags-manager/tags-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__weather_detail_by_city_weather_detail_by_city_component__ = __webpack_require__("../../../../../src/app/weather-detail-by-city/weather-detail-by-city.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], children: [
            { path: "users", component: __WEBPACK_IMPORTED_MODULE_6__users_users_component__["a" /* UsersComponent */], children: [
                    { path: ":id", component: __WEBPACK_IMPORTED_MODULE_9__user_by_id_user_by_id_component__["a" /* UserByIdComponent */] },
                    { path: "tag/:tag", component: __WEBPACK_IMPORTED_MODULE_10__user_by_category_user_by_category_component__["a" /* UserByCategoryComponent */] }
                ] },
            { path: "repositories", component: __WEBPACK_IMPORTED_MODULE_7__repositories_repositories_component__["a" /* RepositoriesComponent */] },
            { path: "issues", component: __WEBPACK_IMPORTED_MODULE_8__issues_issues_component__["a" /* IssuesComponent */] },
        ] },
    { path: "tagsManager", component: __WEBPACK_IMPORTED_MODULE_11__tags_manager_tags_manager_component__["a" /* TagsManagerComponent */] },
    { path: "history", component: __WEBPACK_IMPORTED_MODULE_3__history_history_component__["a" /* HistoryComponent */], children: [
            { path: ":id", component: __WEBPACK_IMPORTED_MODULE_5__edit_list_edit_list_component__["a" /* EditListComponent */] },
        ] },
    { path: "weather/:position", component: __WEBPACK_IMPORTED_MODULE_12__weather_detail_by_city_weather_detail_by_city_component__["a" /* WeatherDetailByCityComponent */] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_4__invalid_invalid_component__["a" /* InvalidComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    font-family: Georgia;\r\n    font-weight:bold;\r\n}\r\n.navbarSettings{\r\n    margin: 10px;\r\n}\r\n#home{\r\n    position: relative;\r\n    left: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html>\n<head>\n  <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js\" integrity=\"sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4\" crossorigin=\"anonymous\"></script>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\" integrity=\"sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M\" crossorigin=\"anonymous\">\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js\" integrity=\"sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1\" crossorigin=\"anonymous\"></script>\n  <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n</head>\n<body>\n  <!--<nav class=\"navbar navbar-dark bg-dark\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <a href=\"/home/users\">Home</a>\n      </div>\n      <div class=\"col\">\n        <a href=\"/history\">History</a>\n      </div>\n      <div class=\"col\">\n        <a href=\"/tagsManager\">tagsManager</a>\n      </div>\n    </div>\n  </div>\n  </nav>-->\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div id=\"home\">\n  <a class=\"navbar-brand navbarSettings\" href=\"/home/users\">Home</a>\n  <a class=\"navbar-brand navbarSettings\" href=\"/history\">History</a>\n  <a class=\"navbar-brand navbarSettings\" href=\"/tagsManager\">tagsManager</a>\n  </div>\n</nav>\n<br />\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</body>\n</html>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__history_history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__invalid_invalid_component__ = __webpack_require__("../../../../../src/app/invalid/invalid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_list_edit_list_component__ = __webpack_require__("../../../../../src/app/edit-list/edit-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular4_drag_drop__ = __webpack_require__("../../../../angular4-drag-drop/angular4-drag-drop.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__repositories_repositories_component__ = __webpack_require__("../../../../../src/app/repositories/repositories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__issues_issues_component__ = __webpack_require__("../../../../../src/app/issues/issues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_by_id_user_by_id_component__ = __webpack_require__("../../../../../src/app/user-by-id/user-by-id.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_history_pipe__ = __webpack_require__("../../../../../src/app/pipes/history.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__user_by_category_user_by_category_component__ = __webpack_require__("../../../../../src/app/user-by-category/user-by-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__tags_manager_tags_manager_component__ = __webpack_require__("../../../../../src/app/tags-manager/tags-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__weather_detail_by_city_weather_detail_by_city_component__ = __webpack_require__("../../../../../src/app/weather-detail-by-city/weather-detail-by-city.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//import from angular io the element from '@angular/material' manually.





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__history_history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__invalid_invalid_component__["a" /* InvalidComponent */],
                __WEBPACK_IMPORTED_MODULE_10__edit_list_edit_list_component__["a" /* EditListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_13__repositories_repositories_component__["a" /* RepositoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__issues_issues_component__["a" /* IssuesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__user_by_id_user_by_id_component__["a" /* UserByIdComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_history_pipe__["a" /* HistoryPipe */],
                __WEBPACK_IMPORTED_MODULE_21__user_by_category_user_by_category_component__["a" /* UserByCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_22__tags_manager_tags_manager_component__["a" /* TagsManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_23__weather_detail_by_city_weather_detail_by_city_component__["a" /* WeatherDetailByCityComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular4_drag_drop__["a" /* DragDropDirectiveModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["e" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_17_ng2_completer__["b" /* Ng2CompleterModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/edit-list/edit-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-list/edit-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/edit-list/edit-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditListComponent = (function () {
    function EditListComponent() {
    }
    EditListComponent.prototype.ngOnInit = function () {
    };
    EditListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-list',
            template: __webpack_require__("../../../../../src/app/edit-list/edit-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-list/edit-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditListComponent);
    return EditListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/history/history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.EditBtn{\r\n  margin-top: 8%;\r\n}\r\n.btn-group{\r\n  margin-left:200%;\r\n}\r\n.tagBtn{\r\n  margin: 3px;\r\n  margin-top: 2px;\r\n}\r\n#containerSettings{\r\n  width: 100%;\r\n  border-radius: 15px;\r\n  border: 1px solid #96C5CE;\r\n  margin: 10px;\r\n}\r\n#inputSettings{\r\n  border: 1px solid #96C5CE;\r\n  border-radius: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"row\">\n<div class=\"col-lg-8\">\n\n<div class=\"container\" [@historyAnimation]=\"AllUers.length\" id=\"containerSettings\" *ngFor=\"let currUser of AllUers |historyFilter:filterInput:searchStr\">\n  <table class=\"table\" >\n    <tbody>\n      <tr>\n        <th scope=\"row\">id</th>\n        <td><a href=\"{{currUser.id}}\">{{currUser.id}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">url</th>\n        <td><a href=\"{{currUser.url}}\">{{currUser.url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">login</th>\n        <td><a href=\"{{currUser.login}}\">{{currUser.login}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">score</th>\n        <td><a href=\"{{currUser.scope}}\">{{currUser.score}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">html_url</th>\n        <td><a href=\"{{currUser.html_url}}\">{{currUser.html_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">followers_url</th>\n        <td><a href=\"{{currUser.followers_url}}\">{{currUser.followers_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">following_url</th>\n        <td><a href=\"{{currUser.following_url}}\">{{currUser.following_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">subscriptions_url</th>\n        <td><a href=\"{{currUser.subscriptions_url}}\">{{currUser.subscriptions_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">organizations_url</th>\n        <td><a href=\"{{currUser.organizations_url}}\">{{currUser.organizations_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">repos_url</th>\n        <td><a href=\"{{currUser.repos_url}}\">{{currUser.repos_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">received_events_url</th>\n        <td><a href=\"{{currUser.received_events_url}}\">{{currUser.received_events_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">blog</th>\n        <td><a href=\"{{currUser.blog}}\">{{currUser.blog}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">location</th>\n        <td><button type=\"button\" class=\"btn btn-warning\" (click)=\"checkCurrentPositionWeather(currUser.location)\" >{{currUser.location}}</button></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">email</th>\n        <td><a href=\"{{currUser.email}}\">{{currUser.email}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">public_repos</th>\n        <td><a href=\"{{currUser.public_repos}}\">{{currUser.public_repos}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">public_gists</th>\n        <td><a href=\"{{currUser.public_gists}}\">{{currUser.public_gists}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">followers</th>\n        <td><a href=\"{{currUser.followers}}\">{{currUser.followers}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">following</th>\n        <td><a href=\"{{currUser.following}}\">{{currUser.following}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">created_at</th>\n        <td><a href=\"{{currUser.created_at}}\">{{currUser.created_at}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">updated_at</th>\n        <td><a href=\"{{currUser.updated_at}}\">{{currUser.updated_at}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">Tags:</th>\n        <span *ngFor=\"let tag of currUser.tags\" class=\"tagBtn\">\n            <a class=\"badge badge-primary\" href=\"/home/users/tag/{{tag}}\">{{tag}}</a>  \n        </span>\n      </tr>\n    </tbody>\n    <hr />\n    <button type=\"button\" class=\"btn btn-link\" (click)=\"removeUser(currUser.id)\">more</button>\n  </table>\n  <hr />\n</div>\n</div>\n\n<div class=\"col-lg-3\" [@historyAnimation_2] id=\"inputSettings\">\n  <div class=\"container\" id=\"searchContainer\">\n    <h3>Search:</h3>\n    <hr />\n      <div class=\"form-group\">\n        <label  class=\"col-sm-2 col-form-label\">Attribute:</label>\n        <ng2-completer style=\"size: 15px;\" class=\"form-control\" #autoComplete [(ngModel)]=\"searchStr\" [datasource]=\"attributesArray\" [minSearchLength]=\"0\">\n        </ng2-completer>\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"enter()\">Enter</button>\n        <hr />\n        <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Keyword:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"inputPassword\" [(ngModel)]=\"filterInput\">{{filterInput}}\n        </div>\n      </div>\n      <hr />\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"search()\">Search</button>\n      <hr />\n  </div>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__historyAnimation__ = __webpack_require__("../../../../../src/app/history/historyAnimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__historyAnimation_2__ = __webpack_require__("../../../../../src/app/history/historyAnimation_2.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 //use jquery in angular4!


var HistoryComponent = (function () {
    function HistoryComponent(userService, completerService, router) {
        this.userService = userService;
        this.completerService = completerService;
        this.router = router;
        this.AllUers = [];
        this.searchData = [
            { color: 'red', value: '#f00' },
            { color: 'green', value: '#0f0' },
            { color: 'blue', value: '#00f' },
            { color: 'cyan', value: '#0ff' },
            { color: 'magenta', value: '#f0f' },
            { color: 'yellow', value: '#ff0' },
            { color: 'black', value: '#000' }
        ];
        this.attributesArray = [
            'url', 'login', 'id', 'score', 'html_url', 'followers_url',
            'following_url', 'subscriptions_url', 'organizations_url',
            'repos_url', 'received_events_url', 'blog', 'location', 'email',
            'public_repos', 'public_gists', 'followers', 'following', 'following',
            'updated_at'
        ];
        this.dataService = completerService.local(this.searchData, 'color', 'color');
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (data) {
            if (!data.success) {
                console.log("failed to get all users");
                _this.alertMsg = "You have not saved any users yet!";
            }
            else {
                _this.AllUers = data.users;
                console.log("all users:" + _this.AllUers);
            }
        });
    };
    HistoryComponent.prototype.search = function () {
        console.log("search");
    };
    HistoryComponent.prototype.valueChanged = function (e) {
        console.log("valueChanged");
    };
    HistoryComponent.prototype.enter = function () {
        console.log("enter");
    };
    HistoryComponent.prototype.removeUser = function (id) {
        console.log("removeUser");
        console.log("id to be removed:" + id);
        this.router.navigate(["home", "users", id]);
    };
    HistoryComponent.prototype.closeAlert = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".close").click(function () {
            console.log("closeAlert");
            __WEBPACK_IMPORTED_MODULE_4_jquery__("#alert1").css("display", "none"); //remove the alert element
            __WEBPACK_IMPORTED_MODULE_4_jquery__("#alert2").css("display", "none");
        });
    };
    HistoryComponent.prototype.checkCurrentPositionWeather = function (position) {
        console.log("we have location:" + position);
        this.router.navigate(["weather", position]);
    };
    HistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-history',
            template: __webpack_require__("../../../../../src/app/history/history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/history/history.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]],
            animations: [__WEBPACK_IMPORTED_MODULE_5__historyAnimation__["a" /* historyAnimation */], __WEBPACK_IMPORTED_MODULE_6__historyAnimation_2__["a" /* historyAnimation_2 */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_completer__["a" /* CompleterService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/history/historyAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return historyAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var historyAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])("historyAnimation", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])("*=>*", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])("table", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])("table", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])("1000ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("2s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: "translateY(-100%)", offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, transform: "translateY(-25%)", offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.6, transform: "translateY(15%)", offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: "translateY(0)", offset: 1 })
            ]))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/history/historyAnimation_2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return historyAnimation_2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var historyAnimation_2 = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])("historyAnimation_2", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])("*=>*", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])("#searchContainer", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])("#searchContainer", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])("1000ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("2s 1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: "translateX(100%)", offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, transform: "translateX(55%)", offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.6, transform: "translateX(15%)", offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: "translateX(0)", offset: 1 })
            ]))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  .dropArea{\n            border: 1px groove black;\n            height:100px;\n            width: 100px;\n            background: black;\n        }\n  .btnContainer{\n            border: 1px groove black;\n            height:200px;\n            width: 200px;\n            background: green;\n  }\n  </style>\n<!--<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-9\">\n      <div class=\"row\">\n        <h2>category</h2>\n        <div class=\"container btnContainer\">\n          <tr *ngFor=\"let cate of CATEGORIES\" [dragDirective]='cate' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button class=\"btn btn-sm\">{{cate}}</button>\n          </tr>\n        </div>\n      </div>\n      <div class=\"row\">\n        <h2>keyword</h2>\n        <div class=\"container btnContainer\">\n          <tr *ngFor=\"let key of keywordArray\" [dragDirective]='cate' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button class=\"btn btn-sm\">{{key}}</button>\n          </tr>\n        </div>\n      </div>\n      <input type=\"text\" #keyword (keyup.enter)=\"createKeywordBtn(keyword.value);keyword.value=''\">\n      <div class=\"row\">\n        <h2>language</h2>\n        <div class=\"container btnContainer\">\n          <tr *ngFor=\"let lan of languageArray\" [dragDirective]='cate' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button class=\"btn btn-sm\">{{lan}}</button>\n          </tr>\n        </div>\n      </div>\n      <input type=\"text\" #language (keyup.enter)=\"createLanguageBtn(language.value);language.value = ''\">\n      <div class=\"row\">\n        <h2>sorted</h2>\n        <div class=\"container btnContainer\">\n          <tr *ngFor=\"let sort of sortedArray\" [dragDirective]='cate' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button class=\"btn btn-sm\">{{sort}}</button>\n          </tr>\n        </div>\n      </div>\n      <div class=\"row\">\n        <h2>orders</h2>\n        <div class=\"container btnContainer\">\n          <tr *ngFor=\"let order of ordersArray\" [dragDirective]='cate' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button class=\"btn btn-sm\">{{order}}</button>\n          </tr>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"row\">\n        <h1>search queue</h1>\n        <div  class=\"container\" >\n          <div  class=\"droppable dropArea\" [dropHighlight]=\"'highlight'\" dropDirective (dropEvent)=\"addDropItem_1($event)\"  item-width=\"300\" item-height=\"300\">\n            <tr *ngFor=\"let btn of droppedBtns_1\" [dragDirective]='btn' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n              <button class=\"btn btn-sm btn-success\">{{btn}}</button>\n            </tr>\n            <tr *ngFor=\"let d_key of Dragged_keywordArray\" [dragDirective]='key' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n              <button class=\"btn btn-sm btn-success\">{{d_key}}</button>\n            </tr>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <h1>delete queue</h1>\n        <div  class=\"container\" >\n          <div  class=\"droppable dropArea\" [dropHighlight]=\"'highlight'\" dropDirective (dropEvent)=\"removeDropItem($event)\"  item-width=\"300\" item-height=\"300\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\" col-sm-2\">\n      <h1>category</h1>\n      <div class=\" container btnContainer\">\n        <tr *ngFor=\"let cate of CATEGORIES\" [dragDirective]='cate' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n          <button class=\"btn btn-sm\">{{cate}}</button>\n        </tr>\n      </div>\n    </div>\n\n    <div class=\"col-sm-2\">\n      <h2>keyword</h2>\n      <div class=\"container btnContainer\">\n        <tr *ngFor=\"let key of keywordArray\" [dragDirective]='cate' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n          <button class=\"btn btn-sm\">{{key}}</button>\n        </tr>\n      </div>\n        keyword:<input type=\"text\" #keyword (keyup.enter)=\"createKeywordBtn(keyword.value);keyword.value=''\">\n    </div>\n\n    <div class=\"col-sm-2\">\n      <h2>language</h2>\n      <div class=\"container btnContainer\">\n        <tr *ngFor=\"let lan of languageArray\" [dragDirective]='cate' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n          <button class=\"btn btn-sm\">{{lan}}</button>\n        </tr>\n      </div>\n    </div>\n\n    <div class=\"col-sm-2\">\n      <h2>sorted</h2>\n      <div class=\"container btnContainer\">\n        <tr *ngFor=\"let sort of sortedArray\" [dragDirective]='cate' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n          <button class=\"btn btn-sm\">{{sort}}</button>\n        </tr>\n      </div>\n    </div>\n\n    <div class=\"col-sm-2\">\n      <h2>orders</h2>\n      <div class=\"container btnContainer\">\n        <tr *ngFor=\"let order of ordersArray\" [dragDirective]='cate' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n          <button class=\"btn btn-sm\">{{order}}</button>\n        </tr>\n      </div>\n    </div>\n\n  </div>\n</div>-->\n\n\n<!--<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <button class=\"btn btn-lg btn-primary\" (click)=\"goToUser()\">User</button>\n    </div>\n    <div class=\"col\">\n      <button class=\"btn btn-lg btn-primary\" (click)=\"goToRepository()\">Repositories</button>\n    </div>\n    <div class=\"col\">\n      <button class=\"btn btn-lg btn-primary\" (click)=\"goToIssue()\">Issues</button>\n    </div>\n  </div>\n</div>-->\n<div class=\"conatiner\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_github_service__ = __webpack_require__("../../../../../src/app/services/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_RX__ = __webpack_require__("../../../../rxjs/RX.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_RX___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_RX__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function HomeComponent(githubService, router) {
        this.githubService = githubService;
        this.router = router;
        this.droppedBtns_1 = [];
        this.keywordArray = [];
        this.languageArray = [];
        this.ordersArray = [];
        this.sortedArray = [];
        this.Dragged_keywordArray = [];
    }
    HomeComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    HomeComponent.prototype.ngOnInit = function () {
        //this.InitCategoriesdArray();
        //this.InitOrdersArray();
        //this.InitSortedArray();
        //this.InitKeywordsdArray();
        //this.InitLanguagesdArray();
        //this.droppedBtns_1 = [];
    };
    HomeComponent.prototype.addDropItem_1 = function (e) {
        console.log(e); //print name of the element!
        this.beingDraggingBtn_1 = e;
    };
    HomeComponent.prototype.releaseDrop_1 = function (e) {
        console.log("e:" + e);
        console.log("releaseDrop_1");
        //e.stopPropagation();
        this.droppedBtns_1.push(this.beingDraggingBtn_1);
        //this.Dragged_keywordArray.push(this.beingDraggingBtn_1);
    };
    HomeComponent.prototype.removeDropItem = function (e) {
        //e.stopPropagation();
        console.log("e:" + e);
        console.log("removeDropItem");
    };
    HomeComponent.prototype.startDrag_1 = function () {
        console.log("startDrag");
    };
    HomeComponent.prototype.createKeywordBtn = function (keyword) {
        console.log("createBtn");
        console.log(keyword);
        if (keyword != null) {
            //this.keywordArray.push(keyword);
            if (localStorage["myKeywords"] == null) {
                console.log("null");
                this.keywordArray.push(keyword);
                localStorage["myKeywords"] = JSON.stringify(this.keywordArray);
            }
            else {
                console.log("not null");
                this.keywordArray = JSON.parse(localStorage["myKeywords"]);
                this.keywordArray.push(keyword);
                console.log(this.keywordArray);
                localStorage["myKeywords"] = JSON.stringify(this.keywordArray);
            }
        }
    };
    HomeComponent.prototype.createLanguageBtn = function (language) {
        console.log("createLanguageBtn");
        console.log(language);
        if (language != null) {
            //this.languageArray.push(language);
            if (localStorage["myLanguages"] == null) {
                console.log("null");
                this.languageArray.push(language);
                localStorage["myLanguages"] = JSON.stringify(this.languageArray);
            }
            else {
                console.log("not null");
                this.languageArray = JSON.parse(localStorage["myLanguages"]);
                console.log(this.languageArray);
                this.languageArray.push(language);
                console.log(this.languageArray);
                localStorage["myLanguages"] = JSON.stringify(this.languageArray);
            }
        }
    };
    HomeComponent.prototype.InitCategoriesdArray = function () {
        console.log("InitCategoriesdArray");
        if (localStorage["myCategories"] == null) {
            console.log("null");
            this.CATEGORIES = ["users", "issues", "repositories"];
            localStorage["myCategories"] = JSON.stringify(this.CATEGORIES);
        }
        else {
            console.log("not null");
            this.CATEGORIES = JSON.parse(localStorage["myCategories"]);
        }
    };
    HomeComponent.prototype.InitLanguagesdArray = function () {
        console.log("InitLanguagesdArray");
        if (localStorage["myLanguages"] == null) {
            console.log("null");
            localStorage["myLanguages"] = JSON.stringify(this.languageArray);
        }
        else {
            console.log("not null");
            this.languageArray = JSON.parse(localStorage["myLanguages"]);
            localStorage["myLanguages"] = JSON.stringify(this.languageArray);
        }
    };
    HomeComponent.prototype.InitKeywordsdArray = function () {
        console.log("InitKeywordsdArray");
        if (localStorage["myKeywords"] == null) {
            console.log("null");
            localStorage["myKeywords"] = JSON.stringify(this.keywordArray);
        }
        else {
            console.log("not null");
            this.keywordArray = JSON.parse(localStorage["myKeywords"]);
            localStorage["myKeywords"] = JSON.stringify(this.keywordArray);
        }
    };
    HomeComponent.prototype.InitOrdersArray = function () {
        console.log("InitOrdersArray");
        if (localStorage["myOrders"] == null) {
            this.ordersArray = ["asc", "desc"];
            localStorage["myOrders"] = JSON.stringify(this.ordersArray);
        }
        else {
            this.ordersArray = JSON.parse(localStorage["myOrders"]);
        }
    };
    HomeComponent.prototype.InitSortedArray = function () {
        console.log("InitSortedArray");
        if (localStorage["mySorted"] == null) {
            console.log("null");
            this.sortedArray = ["states", "updated", "created"];
            localStorage["mySorted"] = JSON.stringify(this.sortedArray);
        }
        else {
            console.log("not null");
            this.sortedArray = JSON.parse(localStorage["mySorted"]);
        }
    };
    HomeComponent.prototype.releaseDrop = function (e) {
        console.log("releaseDrop");
        console.log(e + "is released!");
        /*let index = this.itemsToDrop.indexOf(event);
        if (index >= 0){
            this.itemsToDrop.splice(index,1);
        }*/
    };
    HomeComponent.prototype.goToUser = function () {
        console.log("goToUser");
        this.router.navigate(["home/users"]);
    };
    HomeComponent.prototype.goToRepository = function () {
        console.log("goToRepository");
        this.router.navigate(["home/repositories"]);
    };
    HomeComponent.prototype.goToIssue = function () {
        console.log("goToIssue");
        this.router.navigate(["home/issues"]);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GithubService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GithubService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invalid/invalid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invalid/invalid.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  invalid works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/invalid/invalid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvalidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvalidComponent = (function () {
    function InvalidComponent() {
    }
    InvalidComponent.prototype.ngOnInit = function () {
    };
    InvalidComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invalid',
            template: __webpack_require__("../../../../../src/app/invalid/invalid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invalid/invalid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InvalidComponent);
    return InvalidComponent;
}());



/***/ }),

/***/ "../../../../../src/app/issues/issues.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropArea{\r\n            border: 1px groove black;\r\n            height:100px;\r\n                  \r\n        }\r\n  .btnContainer{\r\n            border: 1px groove black;\r\n            height:200px;\r\n            width: 250px;\r\n            background: green;\r\n  }\r\n  #addQuestion{\r\n    background-color: #C5C9B8;\r\n    width: 100%;\r\n    color: #333333;\r\n    height: 150px;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n    padding: 10px 0;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    float: none;\r\n}\r\n#insideContainer{\r\n  margin:25px;\r\n}\r\n#btnGroup{\r\n  margin-left:970px;\r\n  margin-top:5px;\r\n}\r\n#save_skip{\r\n    margin-left:75%;\r\n    margin-top:-5%;\r\n}\r\n\r\n/*------*/\r\n\r\nbody{\r\n    background:#eee;\r\n    margin-top:20px;\r\n}\r\n\r\n.m-t-30 {\r\n    margin-top: 30px;\r\n}\r\n.m-t-10 {\r\n    margin-top: 10px;\r\n}\r\n.font-medium {\r\n    font-weight: 500;\r\n}\r\n.img-circle {\r\n    border-radius: 150%;\r\n    margin-left: 32%;\r\n}\r\nh4 {\r\n    line-height: 22px;\r\n    font-size: 18px;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    color: #455a64;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 400;\r\n}\r\n.card .card-subtitle {\r\n    font-weight: 300;\r\n    margin-bottom: 15px;\r\n    color: #99abb4;\r\n}\r\na.link {\r\n    color: #455a64;\r\n}\r\n.btn-secondary, .btn-secondary.disabled {\r\n    box-shadow: 0 2px 2px 0 rgba(169, 169, 169, 0.14), 0 3px 1px -2px rgba(169, 169, 169, 0.2), 0 1px 5px 0 rgba(169, 169, 169, 0.12);\r\n    transition: 0.2s ease-in;\r\n    background-color: #ffffff;\r\n    color: #67757c;\r\n    border-color: #b1b8bb;\r\n}\r\n.btn-circle {\r\n    border-radius: 100%;\r\n    width: 40px;\r\n    height: 40px;\r\n    padding: 10px;\r\n}\r\n/*.btn {\r\n    padding: 7px 12px;\r\n    cursor: pointer;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/issues/issues.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" id=\"addQuestion\">\n  <h1 class=\"text-lg-center\" >Issues Users</h1><br />\n  <form class=\"form-inline\">\n    <div class=\"form-group row\">\n      <label class=\"col-2 col-form-label\">Keyword:</label>\n      <input class=\"form-control\" type=\"text\" style=\"width: 400px\" #keywordInput>\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"newKeywordBtn(keywordInput.value)\">Enter</button>\n  </form>\n</div>\n\n<br />\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h2 class=\"text-lg-center\">language</h2>\n        <div class=\"container btnContainer\">\n          <div class=\"row\">\n            <ul class=\"list-group\" style=\"margin:10px\">\n              <tr *ngFor=\"let lan1 of languageArray_1\" [dragDirective]='lan1' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_lan($event)\">\n                <button class=\"btn btn-sm\">{{lan1}}</button>\n              </tr>\n            </ul>\n            <ul class=\"list-group\" style=\"margin:10px\">\n              <tr *ngFor=\"let lan2 of languageArray_2\" [dragDirective]='lan2' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_lan($event)\">\n                <button class=\"btn btn-sm\">{{lan2}}</button>\n              </tr>\n            </ul>\n          </div>\n        </div>\n    </div>\n    <div class=\"col\">\n    <h2 class=\"text-lg-center\">sorted</h2>\n        <div class=\"container btnContainer\">\n          <ul class=\"list-group\" style=\"margin:10px\">\n              <tr *ngFor=\"let sort of sortedArray\" [dragDirective]='sort' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_sort($event)\">\n                <button class=\"btn btn-sm\">{{sort}}</button>\n              </tr>\n          </ul>\n        </div>\n    </div>\n\n    <div class=\"col\">\n        <h2 class=\"text-lg-center\">orders</h2>\n        <div class=\"container btnContainer\">\n          <ul class=\"list-group\" style=\"margin:10px\">\n            <tr *ngFor=\"let order of orderArray\" [dragDirective]='order' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_order($event)\">\n              <button class=\"btn btn-sm\">{{order}}</button>\n            </tr>\n          </ul>\n        </div>\n    </div>\n  </div>\n</div>\n<br />\n<div class=\"container\">\n  <div  class=\"droppable dropArea\" [dropHighlight]=\"'highlight'\" dropDirective (dropEvent)=\"addDropItem($event)\">\n    <div class=\"container\" id=\"insideContainer\" #InsideContainer>\n      <div class=\"row\">\n        <ul class=\"list-group\" style=\"margin:2px\">\n          <tr *ngFor=\"let key of keywordArray\" [dragDirective]='key' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button #keyBtn type=\"button\" class=\"btn btn-lg btn-info\" value=\"{{key}}\">{{key}}</button>\n          </tr>\n        </ul>\n        <ul class=\"list-group\" style=\"margin:2px\">\n          <tr *ngFor=\"let d_lan of dragged_languageArray\" [dragDirective]='d_lan' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button  type=\"button\" class=\"btn btn-lg btn-success\">{{d_lan}}</button>\n          </tr>\n        </ul>\n        <ul class=\"list-group\" style=\"margin:2px\">\n          <tr *ngFor=\"let d_sort of dragged_sortedArray\" [dragDirective]='d_sort' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button type=\"button\" class=\"btn btn-lg btn-warning\">{{d_sort}}</button>\n          </tr>\n        </ul>\n        <ul class=\"list-group\" style=\"margin:2px\">\n          <tr *ngFor=\"let d_order of dragged_orderArray\" [dragDirective]='d_order' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button type=\"button\" class=\"btn btn-lg btn-danger\">{{d_order}}</button>\n          </tr>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\" id=\"btnGroup\">\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"go()\">Go</button>\n    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"insideContainer.innerHTML = ''\">Reset</button>\n  </div>\n</div>\n<hr />\n\n<!---result list from github-->\n\n<h3>User List</h3><br />\n<div class=\"container\" *ngFor=\"let user_api of user_from_api\">\n<ul class=\"list-group\">\n  <a href=\"{{user_api.url}}\"><li class=\"list-group-item\"><b>url</b> : {{user_api.url}}</li></a>\n  <a href=\"{{user_api.repository_url}}\"><li class=\"list-group-item\"><b>repository_url</b> : {{user_api.repository_url}}</li></a>\n  <a href=\"{{user_api.labels_url}}\"><li class=\"list-group-item\"><b>labels_url</b> : {{user_api.labels_url}}</li></a>\n  <a href=\"{{user_api.comments_url}}\"><li class=\"list-group-item\"><b>comments_url</b> : {{user_api.comments_url}}</li></a>\n  <a href=\"{{user_api.events_url}}\"><li class=\"list-group-item\"><b>events_url</b> : {{user_api.events_url}}</li></a>\n</ul>\n<br />\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/issues/issues.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_github_service__ = __webpack_require__("../../../../../src/app/services/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_RX__ = __webpack_require__("../../../../rxjs/RX.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_RX___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_RX__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IssuesComponent = (function () {
    function IssuesComponent(githubService, router) {
        this.githubService = githubService;
        this.router = router;
        this.keywordArray = [];
        this.sortedArray = [];
        this.orderArray = [];
        this.dragged_languageArray = [];
        this.dragged_sortedArray = [];
        this.dragged_orderArray = [];
    }
    IssuesComponent.prototype.ngOnInit = function () {
        this.InitLanguagesdArray();
        this.InitSortedArray();
        this.InitOrdersArray();
    };
    IssuesComponent.prototype.newKeywordBtn = function (keyword) {
        console.log("newKeywordBtn");
        console.log(keyword);
        this.keywordArray.push(keyword);
    };
    IssuesComponent.prototype.InitLanguagesdArray = function () {
        console.log("InitLanguagesdArray");
        if (localStorage["myLanguages"] == null) {
            console.log("null");
            this.languageArray_1 = ["HTML", "JAVA", "C", "C#", "C++"];
            this.languageArray_2 = ["Python", "CSS", "Js", "PHP", "Ruby"];
            console.log(this.languageArray_1);
            console.log(this.languageArray_2);
            localStorage["myLanguages_1"] = JSON.stringify(this.languageArray_1);
            localStorage["myLanguages_2"] = JSON.stringify(this.languageArray_2);
        }
        else {
            console.log("not null");
            this.languageArray_1 = JSON.parse(localStorage["myLanguages_1"]);
            this.languageArray_2 = JSON.parse(localStorage["myLanguages_2"]);
        }
    };
    IssuesComponent.prototype.InitSortedArray = function () {
        console.log("InitSortedArray");
        if (localStorage["mySorted"] == null) {
            console.log("null");
            this.sortedArray = ["states", "updated", "created"];
            localStorage["mySorted"] = JSON.stringify(this.sortedArray);
        }
        else {
            console.log("not null");
            this.sortedArray = JSON.parse(localStorage["mySorted"]);
        }
    };
    IssuesComponent.prototype.InitOrdersArray = function () {
        console.log("InitOrdersArray");
        if (localStorage["myOrders"] == null) {
            this.orderArray = ["asc", "desc"];
            localStorage["myOrders"] = JSON.stringify(this.orderArray);
        }
        else {
            this.orderArray = JSON.parse(localStorage["myOrders"]);
        }
    };
    IssuesComponent.prototype.releaseDrop_lan = function (e) {
        console.log("releaseDrop");
        this.dragged_languageArray.push(e);
    };
    IssuesComponent.prototype.releaseDrop_sort = function (e) {
        console.log("releaseDrop_sort");
        this.dragged_sortedArray.push(e);
    };
    IssuesComponent.prototype.releaseDrop_order = function (e) {
        console.log("releaseDrop_order");
        this.dragged_orderArray.push(e);
    };
    IssuesComponent.prototype.addDropItem = function (e) {
        console.log("addDropItem");
        console.log("e to be removed:" + e);
        var lan1_index = -1;
        var lan2_index = -1;
        var sort_index = -1;
        var order_index = -1;
        for (var i = 0; i < this.languageArray_1.length; i++) {
            if (e == this.languageArray_1[i]) {
                lan1_index = i;
                break;
            }
        }
        for (var i = 0; i < this.languageArray_2.length; i++) {
            if (e == this.languageArray_2[i]) {
                lan2_index = i;
                break;
            }
        }
        for (var i = 0; i < this.sortedArray.length; i++) {
            if (e == this.sortedArray[i]) {
                sort_index = i;
                break;
            }
        }
        for (var i = 0; i < this.orderArray.length; i++) {
            if (e == this.orderArray[i]) {
                order_index = i;
                break;
            }
        }
        console.log(lan1_index + "," + lan2_index + "," + sort_index + "," + order_index);
        if (lan1_index != -1) {
            this.languageArray_1.splice(lan1_index, 1);
        }
        if (lan2_index != -1) {
            this.languageArray_2.splice(lan2_index, 1);
        }
        if (sort_index != -1) {
            this.sortedArray.splice(sort_index, 1);
        }
        if (order_index != -1) {
            this.orderArray.splice(order_index, 1);
        }
    };
    IssuesComponent.prototype.go = function () {
        console.log("go");
        console.log(this.keywordArray[0]);
        console.log(this.dragged_languageArray[0]);
        console.log(this.dragged_orderArray[0]);
        console.log(this.dragged_sortedArray[0]);
        this.startGithubApi(this.keywordArray[0], "issues", this.dragged_languageArray[0], this.dragged_orderArray[0], this.dragged_sortedArray[0]);
    };
    IssuesComponent.prototype.startGithubApi = function (keyword, category, language, sorted, order) {
        var _this = this;
        console.log("startGithubApi");
        this.githubService.getUsersByMultipleInputs(keyword, category, language, sorted, order).subscribe(function (users) {
            _this.user_from_api = users;
            console.log(users[0].url);
            console.log(users[0].repository_url);
            console.log(users[0].labels_url);
            console.log(users[0].comments_url);
            console.log(users[0].events_url);
        });
    };
    IssuesComponent.prototype.saveBtn = function () {
        console.log("saveBtn");
    };
    IssuesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-issues',
            template: __webpack_require__("../../../../../src/app/issues/issues.component.html"),
            styles: [__webpack_require__("../../../../../src/app/issues/issues.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GithubService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GithubService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], IssuesComponent);
    return IssuesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(avatar_url, url, login, id, score, html_url, followers_url, following_url, subscriptions_url, organizations_url, repos_url, received_events_url, blog, location, email, public_repos, public_gists, followers, following, created_at, updated_at, tags) {
        this.avatar_url = avatar_url;
        this.url = url;
        this.login = login;
        this.id = id;
        this.score = score;
        this.html_url = html_url;
        this.followers_url = followers_url;
        this.following_url = following_url;
        this.subscriptions_url = subscriptions_url;
        this.organizations_url = organizations_url;
        this.repos_url = repos_url;
        this.received_events_url = received_events_url;
        this.blog = blog;
        this.location = location;
        this.email = email;
        this.public_repos = public_repos;
        this.public_gists = public_gists;
        this.followers = followers;
        this.following = following;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.comment = null;
        this.tags = tags;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (searchText != null) {
            return items.filter(function (item) {
                if (("" + item.id).includes(searchText) || ("" + item.login).includes(searchText)) {
                    return true;
                }
                return false;
            });
        }
        else {
            return items;
        }
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/history.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HistoryPipe = (function () {
    function HistoryPipe() {
    }
    HistoryPipe.prototype.transform = function (items, searchText, attribute) {
        var searchTerm;
        console.log("We have attribute: " + attribute);
        console.log("We have searchText: " + searchText);
        console.log("We have searchTerm: " + searchTerm);
        if (searchText != undefined && attribute != undefined) {
            return items.filter(function (item) {
                switch (attribute) {
                    case "url": {
                        console.log("attribute is url");
                        searchTerm = "" + item.url;
                        break;
                    }
                    case "login": {
                        console.log("attribute is login");
                        searchTerm = "" + item.login;
                        break;
                    }
                    case "score": {
                        console.log("attribute is score");
                        searchTerm = "" + item.score;
                        break;
                    }
                    case "html_url": {
                        console.log("attribute is html_url");
                        searchTerm = "" + item.html_url;
                        break;
                    }
                    case "followers_url": {
                        console.log("attribute is followers_url");
                        searchTerm = "" + item.followers_url;
                        break;
                    }
                    case "following_url": {
                        console.log("attribute is following_url");
                        searchTerm = "" + item.following_url;
                        break;
                    }
                    case "subscriptions_url": {
                        console.log("attribute is subscriptions_url");
                        searchTerm = "" + item.subscriptions_url;
                        break;
                    }
                    case "organizations_url": {
                        console.log("attribute is organizations_url");
                        searchTerm = "" + item.organizations_url;
                        break;
                    }
                    case "repos_url": {
                        console.log("attribute is repos_url");
                        searchTerm = "" + item.repos_url;
                        break;
                    }
                    case "received_events_url": {
                        console.log("attribute is received_events_url");
                        searchTerm = "" + item.received_events_url;
                        break;
                    }
                    case "blog": {
                        console.log("attribute is blog");
                        searchTerm = "" + item.blog;
                        break;
                    }
                    case "location": {
                        console.log("attribute is location");
                        searchTerm = "" + item.location;
                        break;
                    }
                    case "email": {
                        console.log("attribute is email");
                        searchTerm = "" + item.email;
                        break;
                    }
                    case "public_repos": {
                        console.log("attribute is public_repos");
                        searchTerm = "" + item.public_repos;
                        break;
                    }
                    case "public_gists": {
                        console.log("attribute is public_gists");
                        searchTerm = "" + item.public_gists;
                        break;
                    }
                    case "followers": {
                        console.log("attribute is followers");
                        searchTerm = "" + item.followers;
                        break;
                    }
                    case "following": {
                        console.log("attribute is following");
                        searchTerm = "" + item.following;
                        break;
                    }
                    case "created_at": {
                        console.log("attribute is created_at");
                        searchTerm = "" + item.created_at;
                        break;
                    }
                    case "updated_at": {
                        console.log("attribute is updated_at");
                        searchTerm = "" + item.updated_at;
                        break;
                    }
                }
                if (searchTerm == undefined) {
                    searchTerm = " ";
                }
                if ((searchTerm != "") && (searchTerm).includes(searchText)) {
                    return true;
                }
                return false;
            });
        }
        else {
            return items;
        }
    };
    HistoryPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'historyFilter'
        })
    ], HistoryPipe);
    return HistoryPipe;
}());



/***/ }),

/***/ "../../../../../src/app/repositories/repositories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropArea{\r\n            border: 1px groove black;\r\n            height:100px;\r\n                  \r\n        }\r\n  .btnContainer{\r\n            border: 1px groove black;\r\n            height:200px;\r\n            width: 250px;\r\n            background: green;\r\n  }\r\n  #addQuestion{\r\n    background-color: #C5C9B8;\r\n    width: 100%;\r\n    color: #333333;\r\n    height: 150px;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n    padding: 10px 0;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    float: none;\r\n}\r\n#insideContainer{\r\n  margin:25px;\r\n}\r\n#btnGroup{\r\n  margin-left:970px;\r\n  margin-top:5px;\r\n}\r\n#save_skip{\r\n    margin-left:75%;\r\n    margin-top:-5%;\r\n}\r\n\r\n/*------*/\r\n\r\nbody{\r\n    background:#eee;\r\n    margin-top:20px;\r\n}\r\n\r\n.m-t-30 {\r\n    margin-top: 30px;\r\n}\r\n.m-t-10 {\r\n    margin-top: 10px;\r\n}\r\n.font-medium {\r\n    font-weight: 500;\r\n}\r\n.img-circle {\r\n    border-radius: 150%;\r\n    margin-left: 32%;\r\n}\r\nh4 {\r\n    line-height: 22px;\r\n    font-size: 18px;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    color: #455a64;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 400;\r\n}\r\n.card .card-subtitle {\r\n    font-weight: 300;\r\n    margin-bottom: 15px;\r\n    color: #99abb4;\r\n}\r\na.link {\r\n    color: #455a64;\r\n}\r\n.btn-secondary, .btn-secondary.disabled {\r\n    box-shadow: 0 2px 2px 0 rgba(169, 169, 169, 0.14), 0 3px 1px -2px rgba(169, 169, 169, 0.2), 0 1px 5px 0 rgba(169, 169, 169, 0.12);\r\n    transition: 0.2s ease-in;\r\n    background-color: #ffffff;\r\n    color: #67757c;\r\n    border-color: #b1b8bb;\r\n}\r\n.btn-circle {\r\n    border-radius: 100%;\r\n    width: 40px;\r\n    height: 40px;\r\n    padding: 10px;\r\n}\r\n/*.btn {\r\n    padding: 7px 12px;\r\n    cursor: pointer;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/repositories/repositories.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" id=\"addQuestion\">\n  <h1 class=\"text-lg-center\" >Search Repositories</h1><br />\n  <form class=\"form-inline\">\n    <div class=\"form-group row\">\n      <label class=\"col-2 col-form-label\">Keyword:</label>\n      <input class=\"form-control\" type=\"text\" style=\"width: 400px\" #keywordInput>\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"newKeywordBtn(keywordInput.value)\">Enter</button>\n  </form>\n</div>\n\n<br />\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h2 class=\"text-lg-center\">language</h2>\n        <div class=\"container btnContainer\">\n          <div class=\"row\">\n            <ul class=\"list-group\" style=\"margin:10px\">\n              <tr *ngFor=\"let lan1 of languageArray_1\" [dragDirective]='lan1' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_lan($event)\">\n                <button class=\"btn btn-sm\">{{lan1}}</button>\n              </tr>\n            </ul>\n            <ul class=\"list-group\" style=\"margin:10px\">\n              <tr *ngFor=\"let lan2 of languageArray_2\" [dragDirective]='lan2' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_lan($event)\">\n                <button class=\"btn btn-sm\">{{lan2}}</button>\n              </tr>\n            </ul>\n          </div>\n        </div>\n    </div>\n    <div class=\"col\">\n    <h2 class=\"text-lg-center\">sorted</h2>\n        <div class=\"container btnContainer\">\n          <ul class=\"list-group\" style=\"margin:10px\">\n              <tr *ngFor=\"let sort of sortedArray\" [dragDirective]='sort' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_sort($event)\">\n                <button class=\"btn btn-sm\">{{sort}}</button>\n              </tr>\n          </ul>\n        </div>\n    </div>\n\n    <div class=\"col\">\n        <h2 class=\"text-lg-center\">orders</h2>\n        <div class=\"container btnContainer\">\n          <ul class=\"list-group\" style=\"margin:10px\">\n            <tr *ngFor=\"let order of orderArray\" [dragDirective]='order' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_order($event)\">\n              <button class=\"btn btn-sm\">{{order}}</button>\n            </tr>\n          </ul>\n        </div>\n    </div>\n  </div>\n</div>\n<br />\n<div class=\"container\">\n  <div  class=\"droppable dropArea\" [dropHighlight]=\"'highlight'\" dropDirective (dropEvent)=\"addDropItem($event)\">\n    <div class=\"container\" id=\"insideContainer\" #InsideContainer>\n      <div class=\"row\">\n        <ul class=\"list-group\" style=\"margin:2px\">\n          <tr *ngFor=\"let key of keywordArray\" [dragDirective]='key' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button #keyBtn type=\"button\" class=\"btn btn-lg btn-info\" value=\"{{key}}\">{{key}}</button>\n          </tr>\n        </ul>\n        <ul class=\"list-group\" style=\"margin:2px\">\n          <tr *ngFor=\"let d_lan of dragged_languageArray\" [dragDirective]='d_lan' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button  type=\"button\" class=\"btn btn-lg btn-success\">{{d_lan}}</button>\n          </tr>\n        </ul>\n        <ul class=\"list-group\" style=\"margin:2px\">\n          <tr *ngFor=\"let d_sort of dragged_sortedArray\" [dragDirective]='d_sort' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button type=\"button\" class=\"btn btn-lg btn-warning\">{{d_sort}}</button>\n          </tr>\n        </ul>\n        <ul class=\"list-group\" style=\"margin:2px\">\n          <tr *ngFor=\"let d_order of dragged_orderArray\" [dragDirective]='d_order' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button type=\"button\" class=\"btn btn-lg btn-danger\">{{d_order}}</button>\n          </tr>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\" id=\"btnGroup\">\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"go()\">Go</button>\n    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"InsideContainer.innerHTML = ''\">Reset</button>\n  </div>\n</div>\n<hr />\n\n<!---result list from github-->\n\n<h3>User List</h3>\n<div class=\"container\">\n  <div *ngFor=\"let user_api of user_from_api\"> \n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"m-t-30\"> <img src=\"{{user_api.owner.avatar_url}}\" class=\"img-circle\" width=\"160\">\n            <h3 class=\"card-title m-t-10\">{{user_api.name}}</h3>\n              <h6 class=\"card-subtitle\">{{user_api.full_name}}</h6>\n                <div class=\"row text-center justify-content-md-center\">\n                  <div class=\"col-4\"><i class=\"fa fa-user fa-lg\"></i> <font class=\"font-medium\">owner id:{{user_api.owner.login}}</font></div>\n                    <div class=\"col-4\"><i class=\"fa fa-desktop fa-lg\"></i> <font class=\"font-medium\">owner url:{{user_api.owner.url}}</font></div>\n                  </div>\n          </div>\n        </div>\n        <div>\n            <hr> \n        </div>\n        <div class=\"card-body\"> \n          <div class=\"btn-group\" role=\"group\" id=\"save_skip\">\n            <button class=\"btn btn-outline-success\" (click)=\"saveBtn()\">save</button>\n            <button class=\"btn btn-outline-info\" >skip</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/repositories/repositories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_github_service__ = __webpack_require__("../../../../../src/app/services/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_RX__ = __webpack_require__("../../../../rxjs/RX.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_RX___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_RX__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RepositoriesComponent = (function () {
    function RepositoriesComponent(githubService, router) {
        this.githubService = githubService;
        this.router = router;
        this.keywordArray = [];
        this.sortedArray = [];
        this.orderArray = [];
        this.dragged_languageArray = [];
        this.dragged_sortedArray = [];
        this.dragged_orderArray = [];
    }
    RepositoriesComponent.prototype.ngOnInit = function () {
        this.InitLanguagesdArray();
        this.InitSortedArray();
        this.InitOrdersArray();
    };
    RepositoriesComponent.prototype.newKeywordBtn = function (keyword) {
        console.log("newKeywordBtn");
        console.log(keyword);
        this.keywordArray.push(keyword);
    };
    RepositoriesComponent.prototype.InitLanguagesdArray = function () {
        console.log("InitLanguagesdArray");
        if (localStorage["myLanguages"] == null) {
            console.log("null");
            this.languageArray_1 = ["HTML", "JAVA", "C", "C#", "C++"];
            this.languageArray_2 = ["Python", "CSS", "Js", "PHP", "Ruby"];
            console.log(this.languageArray_1);
            console.log(this.languageArray_2);
            localStorage["myLanguages_1"] = JSON.stringify(this.languageArray_1);
            localStorage["myLanguages_2"] = JSON.stringify(this.languageArray_2);
        }
        else {
            console.log("not null");
            this.languageArray_1 = JSON.parse(localStorage["myLanguages_1"]);
            this.languageArray_2 = JSON.parse(localStorage["myLanguages_2"]);
        }
    };
    RepositoriesComponent.prototype.InitSortedArray = function () {
        console.log("InitSortedArray");
        if (localStorage["mySorted"] == null) {
            console.log("null");
            this.sortedArray = ["states", "updated", "created"];
            localStorage["mySorted"] = JSON.stringify(this.sortedArray);
        }
        else {
            console.log("not null");
            this.sortedArray = JSON.parse(localStorage["mySorted"]);
        }
    };
    RepositoriesComponent.prototype.InitOrdersArray = function () {
        console.log("InitOrdersArray");
        if (localStorage["myOrders"] == null) {
            this.orderArray = ["asc", "desc"];
            localStorage["myOrders"] = JSON.stringify(this.orderArray);
        }
        else {
            this.orderArray = JSON.parse(localStorage["myOrders"]);
        }
    };
    RepositoriesComponent.prototype.releaseDrop_lan = function (e) {
        console.log("releaseDrop");
        this.dragged_languageArray.push(e);
    };
    RepositoriesComponent.prototype.releaseDrop_sort = function (e) {
        console.log("releaseDrop_sort");
        this.dragged_sortedArray.push(e);
    };
    RepositoriesComponent.prototype.releaseDrop_order = function (e) {
        console.log("releaseDrop_order");
        this.dragged_orderArray.push(e);
    };
    RepositoriesComponent.prototype.addDropItem = function (e) {
        console.log("addDropItem");
        console.log("e to be removed:" + e);
        var lan1_index = -1;
        var lan2_index = -1;
        var sort_index = -1;
        var order_index = -1;
        for (var i = 0; i < this.languageArray_1.length; i++) {
            if (e == this.languageArray_1[i]) {
                lan1_index = i;
                break;
            }
        }
        for (var i = 0; i < this.languageArray_2.length; i++) {
            if (e == this.languageArray_2[i]) {
                lan2_index = i;
                break;
            }
        }
        for (var i = 0; i < this.sortedArray.length; i++) {
            if (e == this.sortedArray[i]) {
                sort_index = i;
                break;
            }
        }
        for (var i = 0; i < this.orderArray.length; i++) {
            if (e == this.orderArray[i]) {
                order_index = i;
                break;
            }
        }
        console.log(lan1_index + "," + lan2_index + "," + sort_index + "," + order_index);
        if (lan1_index != -1) {
            this.languageArray_1.splice(lan1_index, 1);
        }
        if (lan2_index != -1) {
            this.languageArray_2.splice(lan2_index, 1);
        }
        if (sort_index != -1) {
            this.sortedArray.splice(sort_index, 1);
        }
        if (order_index != -1) {
            this.orderArray.splice(order_index, 1);
        }
    };
    RepositoriesComponent.prototype.go = function () {
        console.log("go");
        console.log(this.keywordArray[0]);
        console.log(this.dragged_languageArray[0]);
        console.log(this.dragged_orderArray[0]);
        console.log(this.dragged_sortedArray[0]);
        this.startGithubApi(this.keywordArray[0], "repositories", this.dragged_languageArray[0], this.dragged_orderArray[0], this.dragged_sortedArray[0]);
    };
    RepositoriesComponent.prototype.startGithubApi = function (keyword, category, language, sorted, order) {
        var _this = this;
        console.log("startGithubApi");
        this.githubService.getUsersByMultipleInputs(keyword, category, language, sorted, order).subscribe(function (users) {
            _this.user_from_api = users;
            console.log(users[0].id);
            console.log(users[0].name);
            console.log(users[0].full_name);
            console.log(users[0].owner);
            console.log(users[0].owner.login);
            console.log(users[0].owner.id);
            console.log(users[0].owner.avatar_url);
            console.log(users[0].owner.url);
        });
    };
    RepositoriesComponent.prototype.saveBtn = function () {
        console.log("saveBtn");
    };
    RepositoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-repositories',
            template: __webpack_require__("../../../../../src/app/repositories/repositories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/repositories/repositories.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GithubService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GithubService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RepositoriesComponent);
    return RepositoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/github.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GithubService = (function () {
    function GithubService(http) {
        this.http = http;
        this.getUserDetailsEndPoint = "https://api.github.com/users/";
    }
    GithubService.prototype.getUsersByMultipleInputs = function (keyword, category, language, sorted, order) {
        var url;
        if (category == "users") {
            this.searchUsersEndPoint = "https://api.github.com/search/users?q=";
        }
        if (category == "issues") {
            this.searchUsersEndPoint = "https://api.github.com/search/issues?q=";
        }
        if (category == "repositories") {
            this.searchUsersEndPoint = "https://api.github.com/search/repositories?q=";
        }
        if (keyword != null) {
            url = "" + this.searchUsersEndPoint + keyword;
        }
        else {
            url = this.searchUsersEndPoint;
        }
        if (language != null) {
            //url = `${this.searchUsersEndPoint}+language:${language}`;
            url = url + ("+language:" + language);
        }
        if (sorted != null) {
            //url = `${this.searchUsersEndPoint}&sort=${sorted}`;
            url = url + ("&sort=" + sorted);
        }
        if (order != null) {
            //url = `${this.searchUsersEndPoint}&order=${order}`;
            url = url + ("&order=" + order);
        }
        console.log("we have url:" + url);
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GithubService.prototype.getDetailsByUserName = function (username) {
        if (username) {
            var url = "" + this.getUserDetailsEndPoint + username;
            console.log("we have url for user:" + url);
            return this.http.get(url)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
    };
    GithubService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("extractData:" + body);
        return body.items || {};
    };
    GithubService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    GithubService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GithubService);
    return GithubService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Observable } from 'rxjs/Rx';//use RX instead of Observable!



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.createNewUser = function (user) {
        var newUser;
        console.log("we have user login:" + user.login);
        console.log(user.repos_url);
        newUser = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */](user.avatar_url, user.url, user.login, user.id, user.score, user.html_url, user.followers_url, user.following_url, user.subscriptions_url, user.organizations_url, user.repos_url, user.received_events_url, user.blog, user.location, user.email, user.public_repos, user.public_gists, user.followers, user.following, user.created_at, user.updated_at, user.tags);
        //let body = JSON.stringify({"login":user.login});//succeed!
        var body = JSON.stringify({ "newUser": newUser }); //req.body.newUser.login(url,id)!!
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post("/home/users", body, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserById = function (id) {
        console.log("getUserById");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({ "id": id });
        return this.http.post("/home/users/:id", body, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.getAllUsers = function () {
        console.log("getAllUsers");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({});
        return this.http.post("/history", body, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.removeUserById = function (id) {
        console.log("removeUserById");
        console.log("id to be deleted:" + id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.delete("/home/users/" + id).map(function (res) { return res.json(); });
    };
    UserService.prototype.updateUserById = function (id, newUser) {
        console.log("updateUserById");
        console.log("id to be updated:" + id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({ "user": newUser });
        return this.http.put("/home/users/" + id, body, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.getUsersByTag = function (tag) {
        console.log("getUsersByTag");
        console.log("tag to be found:" + tag);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({ "tag": tag });
        return this.http.post("/home/users/tag/" + tag, body, options).map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/wunderground.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WundergroundService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WundergroundService = (function () {
    function WundergroundService(http) {
        this.http = http;
        this.myApiKey = "33ff2c5fb2752e9c";
        this.basic_url = "http://api.wunderground.com/api/";
    }
    WundergroundService.prototype.getInfoByCityAndState = function (state, city) {
        state = state.replace(/\s/g, '');
        console.log(state);
        console.log(city);
        var newUrl = this.basic_url + this.myApiKey + '/conditions/q/' + state + '/' + city + '.json';
        console.log("we have newUrl: " + newUrl);
        return this.http.get(newUrl).map(function (res) { return res.json(); });
    };
    WundergroundService.prototype.getForecastByCityAndStat = function (state, city) {
        var newUrl = this.basic_url + this.myApiKey + '/forecast/q/' + state + '/' + city + '.json';
        console.log("we have newUrl: " + newUrl);
        return this.http.get(newUrl).map(function (res) { return res.json(); });
    };
    WundergroundService.prototype.hourlyForecast = function (state, city) {
        var newUrl = this.basic_url + this.myApiKey + '/hourly/q/' + state + '/' + city + '.json';
        console.log("we have newUrl: " + newUrl);
        return this.http.get(newUrl).map(function (res) { return res.json(); });
    };
    WundergroundService.prototype.tenDaysForecast = function (state, city) {
        var newUrl = this.basic_url + this.myApiKey + '/forecast10day/q/' + state + '/' + city + '.json';
        console.log("we have newUrl: " + newUrl);
        return this.http.get(newUrl).map(function (res) { return res.json(); });
    };
    WundergroundService.prototype.history = function (state, city) {
    };
    WundergroundService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], WundergroundService);
    return WundergroundService;
}());



/***/ }),

/***/ "../../../../../src/app/tags-manager/BtnAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return btnAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var btnAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])("btnAnimation", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])("*=>*", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
            opacity: 0,
            transform: "translateX(-100%)"
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.6, offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, offset: 1 })
            ])),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: "translateX(-100%)", offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: "translateX(15px)", offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: "translateX(30px)", offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: "translateX(0)", offset: 1 })
            ]))
        ]),
    ])
]);


/***/ }),

/***/ "../../../../../src/app/tags-manager/alertAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alertAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var alertAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])("alertAnimation", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])("*=>*", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(".alert:enter", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(".alert:enter", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])("1s", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: "translateX(-100%)", offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, transform: "translateX(15px)", offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.6, transform: "translateX(30px)", offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: "translateX(0)", offset: 1 })
            ]))
        ]), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(".alert:leave", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])("1s", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: "translateX(15px)", offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.7, transform: "translateX(-50%)", offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, transform: "translateX(-75%)", offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: "translateX(-100%)", offset: 1 })
            ]))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/tags-manager/tagAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tagAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var tagAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])("tagAnimation", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])("*=>*", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(".usersContainer", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(".usersContainer", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])("100ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: "translateY(-100%)", offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, transform: "translateY(15px)", offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.6, transform: "translateY(30px)", offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: "translateY(0)", offset: 1 })
            ]))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/tags-manager/tags-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alertSettings{\r\n    width: 180px;\r\n    margin: 10px;\r\n}\r\n.tagContainer{\r\n    display:inline;\r\n}\r\n.usersContainer{\r\n    margin: 10px;\r\n    border-radius: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tags-manager/tags-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [@tagAnimation]=\"AllUsers.length\"  style=\"border: 1px solid cadetblue\">\n  <div  class=\"usersContainer\" *ngFor=\"let user of AllUsers,let index_user = index\">\n    <div class=\"container zcc\">\n      <h3>{{user.id}}--{{user.login}}</h3>\n      <div>\n      <div style=\"display: inline-block\" *ngFor=\"let tag of user.tags,let i = index\" [@btnAnimation]>\n        <div *ngIf=\"tag!=null\" class=\"alertSettings alert alert-primary alert-dismissible fade show\" role=\"alert\">\n          <strong>{{tag}}</strong>\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"deleteBtn(user.id,index_user,i)\">\n              <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n      </div>\n      </div>\n      <div [@alertAnimation] id=\"zcc\"class=\"alert alert-warning\" role=\"alert\" *ngIf=\"alertMsg&&idFlag==user.id\">\n        <strong>{{alertMsg}}</strong>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"closeButton()\" aria-label=\"Close\" id=\"closeBtn\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tags-manager/tags-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tagAnimation__ = __webpack_require__("../../../../../src/app/tags-manager/tagAnimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alertAnimation__ = __webpack_require__("../../../../../src/app/tags-manager/alertAnimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BtnAnimation__ = __webpack_require__("../../../../../src/app/tags-manager/BtnAnimation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //use jquery in angular4!




var TagsManagerComponent = (function () {
    function TagsManagerComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.AllUsers = [];
    }
    TagsManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (data) {
            if (!data.success) {
                console.log("failed to get all users");
            }
            else {
                _this.AllUsers = data.users;
                console.log("all users:" + _this.AllUsers);
            }
        });
    };
    TagsManagerComponent.prototype.deleteBtn = function (id, index_user, index_tag) {
        var _this = this;
        console.log("deleteBtn");
        console.log(index_user);
        console.log(index_tag);
        console.log(id);
        if (index_tag <= 2) {
            this.alertMsg = "we need at two tags!";
            this.idFlag = id;
            console.log(this.idFlag);
            this.closeButton();
        }
        else {
            var currUser = this.AllUsers[index_user];
            var currtags = currUser.tags;
            currtags.splice(index_tag, 1);
            currUser.tags = currtags;
            this.userService.updateUserById(id, currUser).subscribe(function (data) {
                _this.AllUsers = data.users;
                location.reload();
            });
        }
    };
    TagsManagerComponent.prototype.closeButton = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__("#closeBtn").click(function () {
            console.log("closeBtn clicked!");
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#zcc").css("display", "none");
        });
    };
    TagsManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tags-manager',
            template: __webpack_require__("../../../../../src/app/tags-manager/tags-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tags-manager/tags-manager.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]],
            animations: [__WEBPACK_IMPORTED_MODULE_4__tagAnimation__["a" /* tagAnimation */], __WEBPACK_IMPORTED_MODULE_5__alertAnimation__["a" /* alertAnimation */], __WEBPACK_IMPORTED_MODULE_6__BtnAnimation__["a" /* btnAnimation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], TagsManagerComponent);
    return TagsManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-by-category/user-by-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.EditBtn{\r\n  margin-top: 8%;\r\n}\r\n.btn-group{\r\n  margin-left:200%;\r\n}\r\n.tagBtn{\r\n  margin: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-by-category/user-by-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class=\"col-lg-8\">\n<div class=\"container\" style=\"width: 100%;border: 1px solid black\" [@historyAnimation]=\"AllUers.length\" *ngFor=\"let currUser of AllUers |historyFilter:filterInput:searchStr\">\n  <table class=\"table\">\n    <tbody>\n      <tr>\n        <th scope=\"row\">id</th>\n        <td><a href=\"{{currUser.id}}\">{{currUser.id}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">url</th>\n        <td><a href=\"{{currUser.url}}\">{{currUser.url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">login</th>\n        <td><a href=\"{{currUser.login}}\">{{currUser.login}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">score</th>\n        <td><a href=\"{{currUser.scope}}\">{{currUser.score}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">html_url</th>\n        <td><a href=\"{{currUser.html_url}}\">{{currUser.html_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">followers_url</th>\n        <td><a href=\"{{currUser.followers_url}}\">{{currUser.followers_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">following_url</th>\n        <td><a href=\"{{currUser.following_url}}\">{{currUser.following_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">subscriptions_url</th>\n        <td><a href=\"{{currUser.subscriptions_url}}\">{{currUser.subscriptions_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">organizations_url</th>\n        <td><a href=\"{{currUser.organizations_url}}\">{{currUser.organizations_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">repos_url</th>\n        <td><a href=\"{{currUser.repos_url}}\">{{currUser.repos_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">received_events_url</th>\n        <td><a href=\"{{currUser.received_events_url}}\">{{currUser.received_events_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">blog</th>\n        <td><a href=\"{{currUser.blog}}\">{{currUser.blog}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">location</th>\n        <td><button type=\"button\" class=\"btn btn-warning\" (click)=\"checkCurrentPositionWeather(currUser.location)\">{{currUser.location}}</button></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">email</th>\n        <td><a href=\"{{currUser.email}}\">{{currUser.email}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">public_repos</th>\n        <td><a href=\"{{currUser.public_repos}}\">{{currUser.public_repos}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">public_gists</th>\n        <td><a href=\"{{currUser.public_gists}}\">{{currUser.public_gists}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">followers</th>\n        <td><a href=\"{{currUser.followers}}\">{{currUser.followers}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">following</th>\n        <td><a href=\"{{currUser.following}}\">{{currUser.following}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">created_at</th>\n        <td><a href=\"{{currUser.created_at}}\">{{currUser.created_at}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">updated_at</th>\n        <td><a href=\"{{currUser.updated_at}}\">{{currUser.updated_at}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">Tags:</th>\n        <span *ngFor=\"let tag of currUser.tags\" class=\"tagBtn\">\n            <a class=\"badge badge-primary\" href=\"/home/users/tag/{{tag}}\">{{tag}}</a>  \n        </span>\n      </tr>\n    </tbody>\n    <hr />\n    <button type=\"button\" class=\"btn btn-link\" (click)=\"removeUser(currUser.id)\">more</button>\n  </table>\n  <hr />\n</div>\n</div>\n\n<div class=\"col-lg-3\" [@historyAnimation_2]>\n  <div class=\"container\" style=\"border: 1px solid blue\" id=\"searchContainer\">\n    <h3>Search:</h3>\n    <hr />\n      <div class=\"form-group\">\n        <label  class=\"col-sm-2 col-form-label\">Attribute:</label>\n        <ng2-completer style=\"size: 15px;\" class=\"form-control\" #autoComplete [(ngModel)]=\"searchStr\" [datasource]=\"attributesArray\" [minSearchLength]=\"0\">\n        </ng2-completer>\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"enter()\">Enter</button>\n        <hr />\n        <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Keyword:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"inputPassword\" [(ngModel)]=\"filterInput\">{{filterInput}}\n        </div>\n      </div>\n      <hr />\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"search()\">Search</button>\n      <hr />\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-by-category/user-by-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserByCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_historyAnimation_2__ = __webpack_require__("../../../../../src/app/history/historyAnimation_2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__history_historyAnimation__ = __webpack_require__("../../../../../src/app/history/historyAnimation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 //use jquery in angular4!


var UserByCategoryComponent = (function () {
    function UserByCategoryComponent(userService, completerService, router, route) {
        this.userService = userService;
        this.completerService = completerService;
        this.router = router;
        this.route = route;
        this.AllUers = [];
        this.searchData = [
            { color: 'red', value: '#f00' },
            { color: 'green', value: '#0f0' },
            { color: 'blue', value: '#00f' },
            { color: 'cyan', value: '#0ff' },
            { color: 'magenta', value: '#f0f' },
            { color: 'yellow', value: '#ff0' },
            { color: 'black', value: '#000' }
        ];
        this.attributesArray = [
            'url', 'login', 'id', 'score', 'html_url', 'followers_url',
            'following_url', 'subscriptions_url', 'organizations_url',
            'repos_url', 'received_events_url', 'blog', 'location', 'email',
            'public_repos', 'public_gists', 'followers', 'following', 'following',
            'updated_at'
        ];
        this.dataService = completerService.local(this.searchData, 'color', 'color');
    }
    UserByCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tag = this.route.snapshot.params["tag"];
        console.log("current tag is:" + tag);
        this.userService.getUsersByTag(tag).subscribe(function (data) {
            if (!data.success) {
                console.log("failed to get all users by tag");
                _this.alertMsg = "You have not saved any users yet!";
            }
            else {
                _this.AllUers = data.user;
                console.log("all users:" + _this.AllUers);
            }
        });
    };
    UserByCategoryComponent.prototype.search = function () {
        console.log("search");
    };
    UserByCategoryComponent.prototype.valueChanged = function (e) {
        console.log("valueChanged");
    };
    UserByCategoryComponent.prototype.enter = function () {
        console.log("enter");
    };
    UserByCategoryComponent.prototype.removeUser = function (id) {
        console.log("removeUser");
        console.log("id to be removed:" + id);
        this.router.navigate(["home", "users", id]);
    };
    UserByCategoryComponent.prototype.closeAlert = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".close").click(function () {
            console.log("closeAlert");
            __WEBPACK_IMPORTED_MODULE_4_jquery__("#alert1").css("display", "none"); //remove the alert element
            __WEBPACK_IMPORTED_MODULE_4_jquery__("#alert2").css("display", "none");
        });
    };
    UserByCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-by-category',
            template: __webpack_require__("../../../../../src/app/user-by-category/user-by-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-by-category/user-by-category.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]],
            animations: [__WEBPACK_IMPORTED_MODULE_5__history_historyAnimation_2__["a" /* historyAnimation_2 */], __WEBPACK_IMPORTED_MODULE_6__history_historyAnimation__["a" /* historyAnimation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_completer__["a" /* CompleterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], UserByCategoryComponent);
    return UserByCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-by-id/user-by-id.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.EditBtn{\r\n  margin-top: 8%;\r\n}\r\n.btn-group{\r\n  margin-left:200%;\r\n}\r\n.tagBtn{\r\n  margin: 3px;\r\n  margin-top: 5px;\r\n}\r\n.form-group{\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-by-id/user-by-id.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"currUser\" [@userByIdAnimation]>\n\n  <table class=\"table table-striped\" style=\"width: 100%;border: 1px\">\n    <tbody>\n      <tr>\n        <th scope=\"row\">id</th>\n        <td><a href=\"{{currUser.id}}\">{{currUser.id}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">url</th>\n        <td><a href=\"{{currUser.url}}\">{{currUser.url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">login</th>\n        <td><a href=\"{{currUser.login}}\">{{currUser.login}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">score</th>\n        <td><a href=\"{{currUser.scope}}\">{{currUser.score}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">html_url</th>\n        <td><a href=\"{{currUser.html_url}}\">{{currUser.html_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">followers_url</th>\n        <td><a href=\"{{currUser.followers_url}}\">{{currUser.followers_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">following_url</th>\n        <td><a href=\"{{currUser.following_url}}\">{{currUser.following_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">subscriptions_url</th>\n        <td><a href=\"{{currUser.subscriptions_url}}\">{{currUser.subscriptions_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">organizations_url</th>\n        <td><a href=\"{{currUser.organizations_url}}\">{{currUser.organizations_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">repos_url</th>\n        <td><a href=\"{{currUser.repos_url}}\">{{currUser.repos_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">received_events_url</th>\n        <td><a href=\"{{currUser.received_events_url}}\">{{currUser.received_events_url}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">blog</th>\n        <td><a href=\"{{currUser.blog}}\">{{currUser.blog}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">location</th>\n        <td><button type=\"button\" class=\"btn btn-warning\" (click)=\"checkCurrentPositionWeather(currUser.location)\">{{currUser.location}}</button></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">email</th>\n        <td><a href=\"{{currUser.email}}\">{{currUser.email}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">public_repos</th>\n        <td><a href=\"{{currUser.public_repos}}\">{{currUser.public_repos}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">public_gists</th>\n        <td><a href=\"{{currUser.public_gists}}\">{{currUser.public_gists}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">followers</th>\n        <td><a href=\"{{currUser.followers}}\">{{currUser.followers}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">following</th>\n        <td><a href=\"{{currUser.following}}\">{{currUser.following}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">created_at</th>\n        <td><a href=\"{{currUser.created_at}}\">{{currUser.created_at}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">updated_at</th>\n        <td><a href=\"{{currUser.updated_at}}\">{{currUser.updated_at}}</a></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">Tags:</th>\n        <span *ngFor=\"let tag of currUser.tags\" class=\"tagBtn\">\n            <a class=\"badge badge-primary\" href=\"/home/users/tag/{{tag}}\">{{tag}}</a>  \n        </span>\n      </tr>\n      <hr/>\n      <!--alert start-->\n      <div *ngIf=\"saved_flag\" id=\"aler1\" style=\"width:100%\">\n        <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n          <button type=\"button\" (click)=\"closeAlert()\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <strong>Successfully!  </strong>the user has been updated!\n        </div>\n      </div>\n      <div *ngIf=\"failed_flag\" id=\"aler2\" style=\"width:100%\">\n        <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n          <button type=\"button\" (click)=\"closeAlert()\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <strong>Successfully!  </strong>the user has been updated!\n        </div>\n      </div>\n      <div *ngIf=\"saved_flag_tag\" id=\"aler3\">\n        <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n          <button type=\"button\" (click)=\"closeAlert()\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <strong>Successfully!  </strong>just added a new tag!\n        </div>\n      </div>\n      <div *ngIf=\"failed_flag_tag\" id=\"aler4\">\n        <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n          <button type=\"button\" (click)=\"closeAlert()\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <strong>Bad!  </strong>failed to add a new tag!\n        </div>\n      </div>\n      <div *ngIf=\"duplicate_flag_tag\" id=\"aler5\">\n        <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n          <button type=\"button\" (click)=\"closeAlert()\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <strong>tag existed!  </strong>please type in a new one!\n        </div>\n      </div>\n      <!--alert end-->\n      <!--two inputs-->\n\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"commentArea\">Comments</label>\n              <textarea class=\"form-control\" id=\"commentArea\" rows=\"3\" #commentArea>{{currUser.comment}}</textarea><br/>\n              <button class=\"btn btn-info\" type=\"button\" (click)=\"saveComment(currUser.id,commentArea.value)\">Save</button>\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"commentArea\">new Tags</label>\n              <textarea class=\"form-control\" id=\"commentArea\" rows=\"3\" #tagArea></textarea><br/>\n              <button class=\"btn btn-info\" type=\"button\" (click)=\"addNewTag(currUser.id,tagArea.value)\">Save</button>\n            </div>\n          </div>\n        </div>\n\n      <!--end two inputs-->\n      <hr />\n      <button class=\"btn btn-link\" type=\"button\" (click)=\"removeUser()\">Remove</button>\n    </tbody>\n  </table>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/user-by-id/user-by-id.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserByIdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_github_service__ = __webpack_require__("../../../../../src/app/services/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userByIdAnimation__ = __webpack_require__("../../../../../src/app/user-by-id/userByIdAnimation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






 //use jquery in angular4!

var UserByIdComponent = (function () {
    function UserByIdComponent(activated, githubService, router, userService) {
        this.activated = activated;
        this.githubService = githubService;
        this.router = router;
        this.userService = userService;
        this.USER = [];
        this.saved_flag = false;
        this.failed_flag = false;
        this.saved_flag_tag = false;
        this.failed_flag_tag = false;
        this.duplicate_flag_tag = false;
    }
    UserByIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        var curr_id = this.activated.snapshot.params["id"]; //use snapshot!!!!
        this.userService.getUserById(curr_id).toPromise().then(function (data) {
            _this.userById = data.user; //data:{success:true,user:user}
            console.log("current tags is:" + _this.userById.tags);
            console.log("current tags is:" + _this.userById.tags[0]);
            _this.currUser =
                {
                    "avatar_url": _this.userById.avatar_url,
                    "url": _this.userById.url,
                    "login": _this.userById.login,
                    "id": _this.userById.id,
                    "score": _this.userById.score,
                    "html_url": _this.userById.html_url,
                    "followers_url": _this.userById.followers_url,
                    "following_url": _this.userById.following_url,
                    "subscriptions_url": _this.userById.subscriptions_url,
                    "organizations_url": _this.userById.organizations_url,
                    "repos_url": _this.userById.repos_url,
                    "received_events_url": _this.userById.received_events_url,
                    "blog": _this.userById.blog,
                    "location": _this.userById.location,
                    "email": _this.userById.email,
                    "public_repos": _this.userById.public_repos,
                    "public_gists": _this.userById.public_gists,
                    "followers": _this.userById.followers,
                    "following": _this.userById.following,
                    "created_at": _this.userById.created_at,
                    "updated_at": _this.userById.updated_at,
                    "comment": _this.userById.comment,
                    "tags": _this.userById.tags
                };
        });
    };
    UserByIdComponent.prototype.removeUser = function () {
        var _this = this;
        console.log("removeUser");
        var curr_id = this.activated.snapshot.params["id"]; //use snapshot!!!!
        console.log("id to be deleted:" + curr_id);
        this.userService.removeUserById(curr_id).subscribe(function (data) {
            if (data.success) {
                console.log("success deleted!");
                _this.router.navigate(["history"]);
            }
            else {
                console.log("failed deleted!");
            }
        });
    };
    UserByIdComponent.prototype.saveComment = function (id, comment) {
        var _this = this;
        console.log("saveComment");
        this.currUser.comment = comment;
        this.userService.updateUserById(id, this.currUser).subscribe(function (data) {
            if (data.success) {
                _this.saved_flag = true;
                console.log("success updated!");
                _this.router.navigate(["home", "users", _this.currUser.id]);
                //console.log(this.currUser.login);
            }
            else {
                _this.failed_flag = true;
                console.log("failed udpated!");
            }
        });
    };
    UserByIdComponent.prototype.closeAlert = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".close").click(function () {
            console.log("closeAlert");
            __WEBPACK_IMPORTED_MODULE_6_jquery__("#aler1").css("display", "none"); //remove the alert element
            __WEBPACK_IMPORTED_MODULE_6_jquery__("#aler2").css("display", "none");
            __WEBPACK_IMPORTED_MODULE_6_jquery__("#aler3").css("display", "none");
            __WEBPACK_IMPORTED_MODULE_6_jquery__("#aler4").css("display", "none");
            __WEBPACK_IMPORTED_MODULE_6_jquery__("#aler5").css("display", "none");
        });
    };
    UserByIdComponent.prototype.addNewTag = function (id, newTag) {
        var _this = this;
        console.log("addNewTag");
        if (this.checkDuplicateTag(newTag)) {
            console.log("unique tag!");
            this.duplicate_flag_tag = false;
            this.currUser.tags.push(newTag);
            this.userService.updateUserById(id, this.currUser).subscribe(function (data) {
                if (data.success) {
                    _this.saved_flag_tag = true;
                    console.log("success updated!");
                    _this.router.navigate(["home", "users", _this.currUser.id]);
                    //console.log(this.currUser.login);
                }
                else {
                    _this.failed_flag_tag = true;
                    console.log("failed udpated!");
                }
            });
        }
        else {
            this.duplicate_flag_tag = true;
            console.log("found duplicate tag!");
        }
    };
    UserByIdComponent.prototype.checkDuplicateTag = function (newTag) {
        return !this.currUser.tags.includes(newTag);
    };
    UserByIdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-by-id',
            template: __webpack_require__("../../../../../src/app/user-by-id/user-by-id.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-by-id/user-by-id.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GithubService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]],
            animations: [__WEBPACK_IMPORTED_MODULE_7__userByIdAnimation__["a" /* userByIdAnimation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GithubService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], UserByIdComponent);
    return UserByIdComponent;
}());

/*import { Component, OnInit } from '@angular/core';
import {GithubService} from "../services/github.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/subject";
import {Router,ActivatedRoute} from "@angular/router";
import {User} from "../models/user";
import { Http, Headers } from '@angular/http';
import {UserService} from "../services/user.service";
import 'rxjs/add/operator/map';
import {MatTableDataSource} from '@angular/material';
import 'rxjs/add/operator/toPromise';
import * as $ from 'jquery';//use jquery in angular4!
import { forkJoin } from "rxjs/observable/forkJoin";

@Component({
  selector: 'app-user-by-id',
  templateUrl: './user-by-id.component.html',
  styleUrls: ['./user-by-id.component.css'],
  providers:[GithubService,UserService]
})

export class UserByIdComponent implements OnInit {

  //dataSource:any;
  displayedColumns:string[] = [];
  USER :User[] = [];

  constructor(private activated:ActivatedRoute,private githubService:GithubService,private router: Router,private userService:UserService) {
    console.log(this.USER);
   }

   ngOnInit() {
     let curr_id = this.activated.snapshot.params["id"];
     this.userService.getUserById(curr_id).subscribe((res)=>{
        console.log(res.user);
        this.USER.push(res.user);
        console.log(this.USER);
        this.dataSource = new MatTableDataSource(this.USER);
     })
     //this.dataSource = new MatTableDataSource(this.USER);
     console.log(this.USER);//same as inside!
   }
    dataSource = new MatTableDataSource(this.USER);//ts:User<--->html:user

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];*/


/***/ }),

/***/ "../../../../../src/app/user-by-id/userByIdAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userByIdAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var userByIdAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])("userByIdAnimation", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])("*=>*", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])("tr", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])("tr", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])("500ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: "translateY(-100%)", offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, transform: "translateY(15px)", offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.6, transform: "translateY(30px)", offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: "translateY(0)", offset: 1 })
            ]))
        ]), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(".form-group", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(".form-group", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])("2000ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s 3s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: "translateX(-100%)", offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, transform: "translateX(15px)", offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.6, transform: "translateX(30px)", offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: "translateY(0)", offset: 1 })
            ]))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/users/searchInputAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return searchInputAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var searchInputAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])("searchInputAnimation", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])("inactive", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
        opacity: 0
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])("active", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
        opacity: 1
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])("inactive=>active", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s 1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: "scale(0,0)", offset: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, transform: "scale(0.6,0.6)", offset: 0.3 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.6, transform: "scale(1.3,1.3)", offset: 0.6 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: "scale(1,1)", offset: 1 })
        ]))
    ])
]);


/***/ }),

/***/ "../../../../../src/app/users/userAlertAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userAlertAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var userAlertAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])("userAlertAnimation", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])("inactive", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
        opacity: 0
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])("active", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
        opacity: 1
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])("inactive=>active", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: " rotate(0) ,scale(0,0)" }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.25, transform: " rotate(90deg) ,scale(0.7,0.7)" }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.25, transform: " rotate(270deg) ,scale(1.4,1.4)" }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.25, transform: " rotate(360deg) ,scale(1,1)" })
        ]))
    ])
]);


/***/ }),

/***/ "../../../../../src/app/users/userAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var userAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])("userAnimation", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])("*=>*", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])("#addQuestion", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(".btnContainer", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(".droppable", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])("#addQuestion", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])("1000ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("2s 1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: "scale(0,0)", offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, transform: "scale(0.6,0.6)", offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.6, transform: "scale(1.2,1.2)", offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: "scale(1,1)", offset: 1 })
            ]))
        ]), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(".btnContainer", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])("1000ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: "translateX(-100%)", offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, transform: "translateX(-25%)", offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.6, transform: "translateX(15%)", offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: "translateX(0)", offset: 1 })
            ]))
        ]), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(".droppable", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])("1000ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("2s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: "scale(0,0)", offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, transform: "scale(0.6,0.6)", offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.6, transform: "scale(1.2,1.2)", offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: "scale(1,1)", offset: 1 })
            ]))
        ]), { optional: true })
    ]),
]);


/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropArea{\r\n            border: 1px groove black;\r\n            height:100px;\r\n                  \r\n        }\r\n.alertSettings{\r\n    margin: 2px;\r\n}\r\n#alertGroupSettings{\r\n    position: absolute;\r\n    top: 770px;\r\n}\r\n  .btnContainer{\r\n            border: 1px groove #9CDEE3;\r\n            height:280px;\r\n            width: 100%;\r\n            background: #BBF4F9;\r\n  }\r\n  .optionBtn{\r\n      margin: 2px;\r\n  }\r\n  div{\r\n      border-radius:10px;\r\n  }\r\n  .text-lg-center2{\r\n    border-radius:6px;\r\n    background-color: #A5DADE;\r\n    width: 100%;\r\n    color: #333333;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n    padding: 10px 0;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    float: none;\r\n  }\r\n  .text-lg-center{\r\n    text-align:center;\r\n    border-radius:6px;\r\n    background-color: #C5C9B8;\r\n    width: 100%;\r\n    color: #333333;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n    padding: 10px 0;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    float: none;\r\n  }\r\n  #addQuestion{\r\n    background-color: #C5C9B8;\r\n    width: 100%;\r\n    color: #333333;\r\n    height: 150px;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n    padding: 10px 0;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    float: none;\r\n}\r\n#insideContainer{\r\n  margin:25px;\r\n}\r\n#btnGroup{\r\n    position: relative;\r\n    left: -30px;\r\n  margin-left:970px;\r\n  margin-top:5px;\r\n}\r\n#save_skip{\r\n    margin-left:75%;\r\n    margin-top:-5%;\r\n}\r\n\r\n/*------*/\r\n\r\nbody{\r\n    background:#eee;\r\n    margin-top:20px;\r\n}\r\n\r\n.m-t-30 {\r\n    margin-top: 30px;\r\n    margin-left: 9%;\r\n    \r\n}\r\n.m-t-10 {\r\n    margin-top: 10px;\r\n    text-align: center;\r\n}\r\n.font-medium {\r\n    font-weight: 500;\r\n}\r\n.img-circle {\r\n    border-radius: 150%;\r\n    margin-left: 32%;\r\n}\r\nh4 {\r\n    line-height: 22px;\r\n    font-size: 18px;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    color: #455a64;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 400;\r\n}\r\n.card .card-subtitle {\r\n    font-weight: 300;\r\n    margin-bottom: 15px;\r\n    color: #99abb4;\r\n    text-align: center;\r\n}\r\na.link {\r\n    color: #455a64;\r\n}\r\n.btn-secondary, .btn-secondary.disabled {\r\n    box-shadow: 0 2px 2px 0 rgba(169, 169, 169, 0.14), 0 3px 1px -2px rgba(169, 169, 169, 0.2), 0 1px 5px 0 rgba(169, 169, 169, 0.12);\r\n    transition: 0.2s ease-in;\r\n    background-color: #ffffff;\r\n    color: #67757c;\r\n    border-color: #b1b8bb;\r\n}\r\n.btn-circle {\r\n    border-radius: 100%;\r\n    width: 40px;\r\n    height: 40px;\r\n    padding: 10px;\r\n}\r\n.justify-content-start{\r\n    border: 1 solid;\r\n    border-radius:10px;\r\n    box-shadow: 10px 10px 5px #99abb4;\r\n    -webkit-animation: content;\r\n            animation: content;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n}\r\n@-webkit-keyframes content{\r\n    0%{opacity: 0;width: 20%;height: 20%}\r\n    100%{opacity: 1;width: 100%;height: 100%}\r\n}\r\n@keyframes content{\r\n    0%{opacity: 0;width: 20%;height: 20%}\r\n    100%{opacity: 1;width: 100%;height: 100%}\r\n}\r\ninput:hover{\r\n    width: 50px;\r\n    height: 50px;\r\n    box-shadow: 5px 5px 2px #1FE8F9\r\n}\r\n.btn{\r\n    box-shadow: 3px 3px 1px #636768\r\n}\r\n.bnt:active{\r\n    -webkit-transform: scale(1.5) perspective(1px);\r\n            transform: scale(1.5) perspective(1px);\r\n    color:#7D8283;\r\n}\r\n#enterBtn{\r\n  position: relative;\r\n  top: -39px;\r\n  left: 410px;\r\n}\r\n.pluginBtn{\r\n    -webkit-animation-name: pluginBtnAnimation;\r\n            animation-name: pluginBtnAnimation;\r\n    -webkit-animation-delay: 0s;\r\n            animation-delay: 0s;\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n    -webkit-transform:rotateX(360deg);\r\n            transform:rotateX(360deg);\r\n}\r\n@-webkit-keyframes pluginBtnAnimation{\r\n    from{opacity:0}\r\n    to{opacity: 1}\r\n}\r\n@keyframes pluginBtnAnimation{\r\n    from{opacity:0}\r\n    to{opacity: 1}\r\n}\r\n#filterContainer{\r\n    border: 1px solid black;\r\n    box-shadow: 5px 5px 2px #99abb4;\r\n    -webkit-animation-delay: 0s;\r\n            animation-delay: 0s;\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n}\r\n@-webkit-keyframes filterContainerAnimation{\r\n    from{right:-300px}\r\n    to{right:300px}\r\n}\r\n@keyframes filterContainerAnimation{\r\n    from{right:-300px}\r\n    to{right:300px}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@userAnimation]> <!--animation-->\n\n<div class=\"container\" id=\"addQuestion\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1 class=\"text-lg-center\">Search Users</h1><br />\n    </div>\n    <div class=\"col\">\n      <form class=\"form-inline\">\n        <div class=\"form-group\">\n          <label class=\"col-2 col-form-label\" style=\"margin-right: 10px\">Keyword:</label>\n          <input class=\"form-control\" type=\"text\" style=\"width: 320px\" #keywordInput id=\"keyWordInput\">\n        </div>\n        <button class=\"btn btn-primary \" (click)=\"newKeywordBtn(keywordInput.value)\" id=\"enterBtn\">Enter</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<br />\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h2 class=\"text-lg-center2\">language</h2><hr />\n        <div class=\"container btnContainer\">\n          <div class=\"row\">\n            <ul class=\"list-group\" style=\"margin:10px\">\n              <tr *ngFor=\"let lan1 of languageArray_1\" [dragDirective]='lan1' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_lan($event)\">\n                <button class=\"btn btn-lg optionBtn\">{{lan1}}</button>\n              </tr>\n            </ul>\n            <ul class=\"list-group\" style=\"margin:10px\">\n              <tr *ngFor=\"let lan2 of languageArray_2\" [dragDirective]='lan2' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_lan($event)\">\n                <button class=\"btn btn-lg optionBtn\">{{lan2}}</button>\n              </tr>\n            </ul>\n          </div>\n        </div>\n    </div>\n    <div class=\"col\">\n    <h2 class=\"text-lg-center2\">sorted</h2><hr />\n        <div class=\"container btnContainer\">\n          <ul class=\"list-group\" style=\"margin:10px\">\n              <tr *ngFor=\"let sort of sortedArray\" [dragDirective]='sort' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_sort($event)\">\n                <button class=\"btn btn-lg optionBtn\">{{sort}}</button>\n              </tr>\n          </ul>\n        </div>\n    </div>\n\n    <div class=\"col\">\n        <h2 class=\"text-lg-center2\">orders</h2><hr />\n        <div class=\"container btnContainer\">\n          <ul class=\"list-group\" style=\"margin:10px\">\n            <tr *ngFor=\"let order of orderArray\" [dragDirective]='order' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_order($event)\">\n              <button class=\"btn btn-lg optionBtn\">{{order}}</button>\n            </tr>\n          </ul>\n        </div>\n    </div>\n  </div>\n</div>\n<br />\n<div class=\"container\">\n  <div  class=\"droppable dropArea\" [dropHighlight]=\"'highlight'\" dropDirective (dropEvent)=\"addDropItem($event)\">\n    <div class=\"container\" id=\"insideContainer\" #InsideContainer>\n      <div class=\"row\">\n        <ul class=\"list-group\" style=\"margin:2px\">\n          <tr *ngFor=\"let key of keywordArray\" [dragDirective]='key' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button #keyBtn type=\"button\" class=\"btn btn-lg btn-info pluginBtn\" value=\"{{key}}\">{{key}}</button>\n          </tr>\n        </ul>\n        <ul class=\"list-group\" style=\"margin:2px\">\n          <tr *ngFor=\"let d_lan of dragged_languageArray\" [dragDirective]='d_lan' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button  type=\"button\" class=\"btn btn-lg btn-success pluginBtn\">{{d_lan}}</button>\n          </tr>\n        </ul>\n        <ul class=\"list-group\" style=\"margin:2px\">\n          <tr *ngFor=\"let d_sort of dragged_sortedArray\" [dragDirective]='d_sort' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button type=\"button\" class=\"btn btn-lg btn-warning pluginBtn\">{{d_sort}}</button>\n          </tr>\n        </ul>\n        <ul class=\"list-group\" style=\"margin:2px\">\n          <tr *ngFor=\"let d_order of dragged_orderArray\" [dragDirective]='d_order' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop_1($event)\" (startDrag)=\"startDrag_1(item)\">\n            <button type=\"button\" class=\"btn btn-lg btn-danger pluginBtn\">{{d_order}}</button>\n          </tr>\n        </ul>\n      </div>\n    </div>\n\n    <!--alert message-->\n    <div [@userAlertAnimation]=\"alert_animation_flag\" id=\"alertGroupSettings\">\n      <div class=\"alert alert-danger alertSettings\" role=\"alert\" *ngIf=\"zero_flag\" style=\"width: 900px;\">\n        search query can not be empty!\n      </div>\n      <div class=\"alert alert-danger alertSettings\" role=\"alert\" *ngIf=\"one_flag\" style=\"width: 200px;\">\n        poor\n      </div>\n      <div class=\"alert alert-warning alertSettings\" role=\"alert\" *ngIf=\"two_flag\" style=\"width: 400px;\">\n        mid\n      </div>\n      <div class=\"alert alert-info alertSettings\" role=\"alert\" *ngIf=\"three_flag\" style=\"width: 600px;\">\n        good\n      </div>\n      <div class=\"alert alert-success alertSettings\" role=\"alert\" *ngIf=\"four_flag\" style=\"width: 800px;\">\n        excellent\n      </div>\n    </div>\n    <!--end of alert message-->\n\n  </div>\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\" id=\"btnGroup\">\n    <button type=\"button\" class=\"btn btn-outline-primary btn-lg\" (click)=\"go()\">Go</button>\n    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\" (click)=\"reset()\">Reset</button>\n  </div>\n</div>\n\n<!---result list from github-->\n\n<hr /><br />\n<h3>User List</h3>\n<br />\n<div class=\"row\">\n<div class=\"col-lg-8\">\n\n<div class=\"container\">\n  <div *ngFor=\"let user_api of user_from_api\"> \n    <div class=\"justify-content-start\"><!--col-lg-8-->\n      <div class=\"card\" #card>\n        <div class=\"card-body\">\n          <div class=\"m-t-30\"> <img src=\"{{user_api.avatar_url}}\" class=\"img-circle\" width=\"160\">\n            <h3 class=\"card-title m-t-10\" >{{user_api.login}}</h3>\n              <h6 class=\"card-subtitle\" >{{user_api.url}}</h6>\n              <input type=\"hidden\" name=\"country\" value=\"{{user_api.id}}\">\n                <div class=\"row text-center justify-content-md-center\">\n                  <div class=\"col-4\"><i class=\"fa fa-user fa-lg\"></i> <font class=\"font-medium\" >id:{{user_api.id}}</font></div>\n                    <div class=\"col-4\"><i class=\"fa fa-desktop fa-lg\"></i> <font class=\"font-medium\">score:{{user_api.score|number : '1.2-3'}}</font></div>\n                  </div>\n          </div>\n        </div>\n        <div>\n            <hr> \n        </div>\n        <div class=\"card-body\"> \n          <div class=\"btn-group\" role=\"group\" id=\"save_skip\">\n            <button class=\"btn btn-outline-success btn-lg\" (click)=\"saveBtn(user_api)\">save</button>\n            <button class=\"btn btn-outline-info btn-lg\" (click)=\"card.remove()\">skip</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr />\n    <!--alert-->\n    <div *ngIf=\"user_api.id==alertMsg&&first\" id=\"alertDiv\">\n      <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n        <button type=\"button\" (click)=\"closeAlert()\" class=\"close btn-lg\" data-dismiss=\"alert\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n          <strong>Successfully!  </strong>the user has been saved!\n          <a href=\"/home/users/{{user_api.id}}\">   More</a>\n        </div>\n    </div>\n    <div *ngIf=\"user_api.id==alertMsg2&&second\" id=\"alertDiv_2\" >\n      <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n        <button type=\"button\" (click)=\"closeAlert()\" class=\"close btn-lg\" data-dismiss=\"alert\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n          <strong>Bad!  </strong>the user has been saved before!\n          <a href=\"/home/users/{{user_api.id}}\">   More</a>\n        </div>\n    </div>\n    <!--end of alert-->\n  </div>\n  <hr />\n</div>\n\n</div>\n<!--search input-->\n<div class=\"col-lg-4\" id=\"smallTable\" style=\"display: none\" [@searchInputAnimation]=\"input_animation_flag\">\n  <div class=\"container\" id=\"filterContainer\">\n    <div class=\"input-group\" style=\"margin-top: 8px;\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-secondary btn-lg\" type=\"button\">Reset</button>\n      </span>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" >\n    </div><hr />\n    <table class=\"table table-dark\">\n      <thead>\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">id</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user_api of user_from_api | filter:searchText ,let i = index\">\n          <th scope=\"row\">{{i}}</th>\n          <td>{{user_api.login}}</td>\n          <td>{{user_api.id}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<!--end of search input-->\n</div>\n</div><!--end of animation-->\n\n<div>\n  <router-outlet></router-outlet><!--there goes the user by id component-->\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_github_service__ = __webpack_require__("../../../../../src/app/services/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userAnimation__ = __webpack_require__("../../../../../src/app/users/userAnimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__searchInputAnimation__ = __webpack_require__("../../../../../src/app/users/searchInputAnimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__userAlertAnimation__ = __webpack_require__("../../../../../src/app/users/userAlertAnimation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import "rxjs/RX";




 //use jquery in angular4!



var UsersComponent = (function () {
    function UsersComponent(githubService, router, userService) {
        this.githubService = githubService;
        this.router = router;
        this.userService = userService;
        this.sortedArray = [];
        this.orderArray = [];
        this.keywordArray = [];
        this.dragged_languageArray = [];
        this.dragged_sortedArray = [];
        this.dragged_orderArray = [];
        this.first = false;
        this.second = false;
        this.input_animation_flag = "inactive";
        this.alert_animation_flag = "inactive";
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.InitAllFlags();
        this.InitLanguagesdArray();
        this.InitSortedArray();
        this.InitOrdersArray();
    };
    UsersComponent.prototype.newKeywordBtn = function (keyword) {
        console.log("newKeywordBtn");
        console.log(keyword);
        if (this.keywordArray.length != 0) {
            this.keywordArray = [];
            this.total--;
        }
        this.keywordArray.push(keyword);
        this.total++;
        this.alertHelper();
    };
    UsersComponent.prototype.InitAllFlags = function () {
        this.zero_flag = false;
        this.one_flag = false;
        this.two_flag = false;
        this.three_flag = false;
        this.four_flag = false;
        this.total = 0;
    };
    UsersComponent.prototype.InitLanguagesdArray = function () {
        console.log("InitLanguagesdArray");
        if (localStorage["myLanguages"] == null) {
            console.log("null");
            this.languageArray_1 = ["HTML", "JAVA", "C", "C#", "C++"];
            this.languageArray_2 = ["Python", "CSS", "Js", "PHP", "Ruby"];
            console.log(this.languageArray_1);
            console.log(this.languageArray_2);
            localStorage["myLanguages_1"] = JSON.stringify(this.languageArray_1);
            localStorage["myLanguages_2"] = JSON.stringify(this.languageArray_2);
        }
        else {
            console.log("not null");
            this.languageArray_1 = JSON.parse(localStorage["myLanguages_1"]);
            this.languageArray_2 = JSON.parse(localStorage["myLanguages_2"]);
        }
    };
    UsersComponent.prototype.InitSortedArray = function () {
        console.log("InitSortedArray");
        if (localStorage["mySorted"] == null) {
            console.log("null");
            this.sortedArray = ["states", "updated", "created"];
            localStorage["mySorted"] = JSON.stringify(this.sortedArray);
        }
        else {
            console.log("not null");
            this.sortedArray = JSON.parse(localStorage["mySorted"]);
        }
    };
    UsersComponent.prototype.InitOrdersArray = function () {
        console.log("InitOrdersArray");
        if (localStorage["myOrders"] == null) {
            this.orderArray = ["asc", "desc"];
            localStorage["myOrders"] = JSON.stringify(this.orderArray);
        }
        else {
            this.orderArray = JSON.parse(localStorage["myOrders"]);
        }
    };
    UsersComponent.prototype.releaseDrop_lan = function (e) {
        console.log("releaseDrop");
        if (this.dragged_languageArray.length != 0) {
            this.dragged_languageArray = [];
            this.total--;
        }
        this.dragged_languageArray.push(e);
        this.total++;
        this.alertHelper();
    };
    UsersComponent.prototype.releaseDrop_sort = function (e) {
        console.log("releaseDrop_sort");
        if (this.dragged_sortedArray.length != 0) {
            this.dragged_sortedArray = [];
            this.total--;
        }
        this.dragged_sortedArray.push(e);
        this.total++;
        this.alertHelper();
    };
    UsersComponent.prototype.releaseDrop_order = function (e) {
        console.log("releaseDrop_order");
        if (this.dragged_orderArray.length != 0) {
            this.dragged_orderArray = [];
            this.total--;
        }
        this.dragged_orderArray.push(e);
        this.total++;
        this.alertHelper();
    };
    UsersComponent.prototype.addDropItem = function (e) {
        console.log("addDropItem");
        console.log("e to be removed:" + e);
        var lan1_index = -1;
        var lan2_index = -1;
        var sort_index = -1;
        var order_index = -1;
        for (var i = 0; i < this.languageArray_1.length; i++) {
            if (e == this.languageArray_1[i]) {
                lan1_index = i;
                break;
            }
        }
        for (var i = 0; i < this.languageArray_2.length; i++) {
            if (e == this.languageArray_2[i]) {
                lan2_index = i;
                break;
            }
        }
        for (var i = 0; i < this.sortedArray.length; i++) {
            if (e == this.sortedArray[i]) {
                sort_index = i;
                break;
            }
        }
        for (var i = 0; i < this.orderArray.length; i++) {
            if (e == this.orderArray[i]) {
                order_index = i;
                break;
            }
        }
        console.log(lan1_index + "," + lan2_index + "," + sort_index + "," + order_index);
        if (lan1_index != -1) {
            this.languageArray_1.splice(lan1_index, 1);
        }
        if (lan2_index != -1) {
            this.languageArray_2.splice(lan2_index, 1);
        }
        if (sort_index != -1) {
            this.sortedArray.splice(sort_index, 1);
        }
        if (order_index != -1) {
            this.orderArray.splice(order_index, 1);
        }
    };
    UsersComponent.prototype.go = function () {
        console.log("current total is:" + this.total);
        if (this.total == 0) {
            console.log("zero_flag!");
            this.input_animation_flag = "active";
            this.zero_flag = true;
            this.alertHelper();
        }
        else {
            this.input_animation_flag = "active";
            console.log("go");
            console.log(this.keywordArray[0]);
            console.log(this.dragged_languageArray[0]);
            console.log(this.dragged_orderArray[0]);
            console.log(this.dragged_sortedArray[0]);
            __WEBPACK_IMPORTED_MODULE_6_jquery__("#smallTable").show();
            this.startGithubApi(this.keywordArray[0], "users", this.dragged_languageArray[0], this.dragged_orderArray[0], this.dragged_sortedArray[0]);
        }
    };
    UsersComponent.prototype.startGithubApi = function (keyword, category, language, sorted, order) {
        var _this = this;
        console.log("startGithubApi");
        this.githubService.getUsersByMultipleInputs(keyword, category, language, sorted, order).subscribe(function (users) {
            _this.user_from_api = users;
            console.log(users[0].followers_url);
        });
    };
    UsersComponent.prototype.saveBtn = function (user) {
        var _this = this;
        console.log("saveBtn");
        console.log(user.url);
        this.githubService.getDetailsByUserName(user.login).subscribe(function (data) {
            _this.newUser = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */](data.avatar_url, data.url, data.login, data.id, data.score, data.html_url, data.followers_url, data.following_url, data.subscriptions_url, data.organizations_url, data.repos_url, data.received_events_url, data.blog, data.location, data.email, data.public_repos, data.public_gists, data.followers, data.following, data.created_at, data.updated_at, [_this.keywordArray[0], _this.dragged_languageArray[0]]);
            console.log(data.login);
            console.log(data.repos_url);
            console.log(data.created_at);
            console.log(data.updated_at);
            _this.createNewUser(_this.newUser);
        });
    };
    UsersComponent.prototype.createNewUser = function (newUser) {
        var _this = this;
        console.log(newUser.repos_url);
        this.userService.createNewUser(newUser).subscribe(function (data) {
            console.log(data.success);
            if (data.success) {
                _this.alertMsg = newUser.id;
                _this.first = true;
                _this.second = false;
                //$("#alertDiv").show();
                //$("#alertDiv_2").show();
            }
            else {
                _this.alertMsg2 = newUser.id;
                _this.first = false;
                _this.second = true;
                console.log("has been saved before!");
                //$("#alertDiv_2").show();
                //$("#alertDiv").hide();
            }
        });
    };
    UsersComponent.prototype.closeAlert = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".close").click(function () {
            console.log("closeAlert");
            __WEBPACK_IMPORTED_MODULE_6_jquery__("#alertDiv").css("display", "none"); //remove the alert element
        });
    };
    UsersComponent.prototype.reset = function () {
        console.log("reset");
        var inputElement = document.getElementById('keyWordInput');
        inputElement.value = "";
        //this.router.navigate(["home","users"]);
        //window.location.reload();
        this.keywordArray = [];
        this.dragged_languageArray = [];
        this.dragged_sortedArray = [];
        this.dragged_orderArray = [];
        this.ngOnInit();
    };
    UsersComponent.prototype.alertHelper = function () {
        console.log("alertHelper");
        if (this.total == 0) {
            this.zero_flag = true;
            this.alert_animation_flag = "active";
            this.one_flag = false;
            this.two_flag = false;
            this.three_flag = false;
            this.four_flag = false;
            console.log("total:" + this.total);
        }
        if (this.total == 1) {
            this.alert_animation_flag = "active";
            this.zero_flag = false;
            this.one_flag = true;
            this.two_flag = false;
            this.three_flag = false;
            this.four_flag = false;
            console.log("total:" + this.total);
        }
        if (this.total == 2) {
            this.alert_animation_flag = "active";
            this.zero_flag = false;
            this.two_flag = true;
            this.one_flag = false;
            this.three_flag = false;
            this.four_flag = false;
            console.log("total:" + this.total);
        }
        if (this.total == 3) {
            this.alert_animation_flag = "active";
            this.zero_flag = false;
            this.three_flag = true;
            this.two_flag = false;
            this.one_flag = false;
            this.four_flag = false;
            console.log("total:" + this.total);
        }
        if (this.total == 4) {
            this.alert_animation_flag = "active";
            this.zero_flag = false;
            this.four_flag = true;
            this.two_flag = false;
            this.three_flag = false;
            this.one_flag = false;
            console.log("total:" + this.total);
        }
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GithubService */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]],
            animations: [__WEBPACK_IMPORTED_MODULE_7__userAnimation__["a" /* userAnimation */], __WEBPACK_IMPORTED_MODULE_8__searchInputAnimation__["a" /* searchInputAnimation */], __WEBPACK_IMPORTED_MODULE_9__userAlertAnimation__["a" /* userAlertAnimation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GithubService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/weather-detail-by-city/weather-detail-by-city.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return weatherAnimation_2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var weatherAnimation_2 = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])("weatherAnimation_2", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])("*=>*", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(".row", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(".row", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])("1000ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("2s 1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: "scale(0,0)", offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, transform: "scale(0.6,0.6)", offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.6, transform: "scale(1.2,1.2)", offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: "scale(1,1)", offset: 1 })
            ]))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/weather-detail-by-city/weather-detail-by-city.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4{\r\n    text-align:left;\r\n}\r\nh1{\r\n    text-align:center;\r\n    margin: 4px;\r\n}\r\n#mainImg{\r\n    position: relative;\r\n    left: 48%;\r\n}\r\nli{\r\n    margin: 2px;\r\n    border: 1px solid #99E3F1;\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 2px #588D97;\r\n}\r\n#infoButn{\r\n    position: relative;\r\n    left:80%;\r\n}\r\nbutton{\r\n    margin-top : 4px;\r\n    margin-bottom: 4px;\r\n}\r\nimg{\r\n    size: 80%;\r\n    position: relative;\r\n    left: -10px;\r\n}\r\n.col{\r\n    width: 100%;\r\n    margin: 3px;\r\n    border-radius: 3px;\r\n    box-shadow: 1px 1px 1px #FFFFFF\r\n}\r\n.card{\r\n    box-shadow: 2px 2px 2px #588D97\r\n}\r\n.row{\r\n    margin:3px;\r\n}\r\n.card-body{\r\n    text-align: center;\r\n}\r\nimg{\r\n    position: relative;\r\n    left: 48%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather-detail-by-city/weather-detail-by-city.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"weathers\" @weatherByCityAnimationTitle>\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container centerSettings\">\n      <img id=\"mainImg\" align=\"middle\" src=\"{{weathers.current_observation.icon_url}}\">\n      <h1>{{weathers.current_observation.display_location.full}}</h1>\n      <h1>{{weathers.current_observation.weather}}</h1>\n      <h1>{{weathers.current_observation.temp_f}}</h1>\n      <h1 class=\"display-3\"></h1>\n      <ul class=\"list-group\" @weatherByCityAnimationList>\n        <li class=\"list-group-item\"><h4>latitude,longitude,zipcode : \n                                                        {{weathers.current_observation.display_location.latitude}}, \n                                                        {{weathers.current_observation.display_location.longitude}}, \n                                                        {{weathers.current_observation.display_location.zip}}\n        </h4></li>\n        <li class=\"list-group-item\"><h4>observation_location : {{weathers.current_observation.observation_location.city}}</h4></li>\n        <li class=\"list-group-item\"><h4>observation_time : {{weathers.current_observation.observation_time}}</h4></li>\n        <li class=\"list-group-item\"><h4>relative_humidity : {{weathers.current_observation.relative_humidity}}</h4></li>\n        <li class=\"list-group-item\"><h4>temperature_string : {{weathers.current_observation.temperature_string}}</h4></li>\n        <li class=\"list-group-item\"><h4>visibility : {{weathers.current_observation.visibility_km}}(km) - {{weathers.current_observation.visibility_mi}}(mi)</h4></li>\n      </ul>\n      <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"generalForecast()\">\n        General Forecast\n      </button>\n\n      <!--table-->\n      <div *ngIf=\"generalforecast\" id=\"generalforecastId\">\n        <table class=\"table\">\n          <thead class=\"thead-dark\">\n            <tr>\n              <th>image</th>\n              <th scope=\"col\">date</th>\n              <th scope=\"col\">conditions</th>\n              <th scope=\"col\">avewind</th>\n              <th scope=\"col\">maxwind</th>\n              <th scope=\"col\">low</th>\n              <th scope=\"col\">high</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let fore of generalforecast,let i = index\">\n              <th scope=\"row\"><img src=\"{{fore.icon_url}}\"></th>\n              <td >{{fore.date.day}}th</td>\n              <td>{{fore.conditions}}</td>\n              <td>mph : {{fore.avewind.mph}} , kph : {{fore.avewind.kph}} , dir: {{fore.avewind.dir}} , degrees: {{fore.avewind.degrees}}</td>\n              <td>mph : {{fore.maxwind.mph}} , kph : {{fore.maxwind.kph}} , dir: {{fore.maxwind.dir}} , degrees: {{fore.maxwind.degrees}}</td>\n              <td>celsius: {{fore.low.celsius}} , fahrenheit: {{fore.low.fahrenheit}}</td>\n              <td>celsius: {{fore.high.celsius}} , fahrenheit: {{fore.high.fahrenheit}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    <!--end of table-->\n      <br />\n      <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"hourlyForecast()\">\n        Hourly Forecast\n      </button>\n\n      <!--table-->\n      <div *ngIf=\"hourlyforecast\" id=\"hourlyforecastId\" @weatherAnimation_2>\n        <div *ngFor=\"let hour of hourlyforecast,let i = index\">\n\n          <div *ngIf=\"i/6==0\" class=\"row\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i].icon_url}}\">\n                <h4>{{hourlyforecast[i].condition}}</h4>\n                {{i}}th-{{hourlyforecast[i].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+1].icon_url}}\">\n                <h4>{{hourlyforecast[i+1].condition}}</h4>\n                {{i+1}}th-{{hourlyforecast[i+1].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+2].icon_url}}\">\n                <h4>{{hourlyforecast[i+2].condition}}</h4>\n                {{i+2}}th-{{hourlyforecast[i+2].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+3].icon_url}}\">\n                <h4>{{hourlyforecast[i+3].condition}}</h4>\n                {{i+3}}th-{{hourlyforecast[i+3].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+4].icon_url}}\">\n                <h4>{{hourlyforecast[i+4].condition}}</h4>\n                {{i+4}}th-{{hourlyforecast[i+4].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+5].icon_url}}\">\n                <h4>{{hourlyforecast[i+5].condition}}</h4>\n                {{i+5}}th-{{hourlyforecast[i+5].FCTTIME.civil}}\n              </div>\n            </div>\n          </div>\n            \n\n          <div *ngIf=\"i/6==1\" class=\"row\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i].icon_url}}\">\n                <h4>{{hourlyforecast[i].condition}}</h4>\n                {{i}}th-{{hourlyforecast[i].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+1].icon_url}}\">\n                <h4>{{hourlyforecast[i+1].condition}}</h4>\n                {{i+1}}th-{{hourlyforecast[i+1].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+2].icon_url}}\">\n                <h4>{{hourlyforecast[i+2].condition}}</h4>\n                {{i+2}}th-{{hourlyforecast[i+2].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+3].icon_url}}\">\n                <h4>{{hourlyforecast[i+3].condition}}</h4>\n                {{i+3}}th-{{hourlyforecast[i+3].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+4].icon_url}}\">\n                <h4>{{hourlyforecast[i+4].condition}}</h4>\n                {{i+4}}th-{{hourlyforecast[i+4].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+5].icon_url}}\">\n                <h4>{{hourlyforecast[i+5].condition}}</h4>\n                {{i+5}}th-{{hourlyforecast[i+5].FCTTIME.civil}}\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"i/6==2\" class=\"row\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i].icon_url}}\">\n                <h4>{{hourlyforecast[i].condition}}</h4>\n                {{i}}th-{{hourlyforecast[i].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+1].icon_url}}\">\n                <h4>{{hourlyforecast[i+1].condition}}</h4>\n                {{i+1}}th-{{hourlyforecast[i+1].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+2].icon_url}}\">\n                <h4>{{hourlyforecast[i+2].condition}}</h4>\n                {{i+2}}th-{{hourlyforecast[i+2].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+3].icon_url}}\">\n                <h4>{{hourlyforecast[i+3].condition}}</h4>\n                {{i+3}}th-{{hourlyforecast[i+3].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+4].icon_url}}\">\n                <h4>{{hourlyforecast[i+4].condition}}</h4>\n                {{i+4}}th-{{hourlyforecast[i+4].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+5].icon_url}}\">\n                <h4>{{hourlyforecast[i+5].condition}}</h4>\n                {{i+5}}th-{{hourlyforecast[i+5].FCTTIME.civil}}\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"i/6==3\" class=\"row\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i].icon_url}}\">\n                <h4>{{hourlyforecast[i].condition}}</h4>\n                {{i}}th-{{hourlyforecast[i].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+1].icon_url}}\">\n                <h4>{{hourlyforecast[i+1].condition}}</h4>\n                {{i+1}}th-{{hourlyforecast[i+1].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+2].icon_url}}\">\n                <h4>{{hourlyforecast[i+2].condition}}</h4>\n                {{i+2}}th-{{hourlyforecast[i+2].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+3].icon_url}}\">\n                <h4>{{hourlyforecast[i+3].condition}}</h4>\n                {{i+3}}th-{{hourlyforecast[i+3].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+4].icon_url}}\">\n                <h4>{{hourlyforecast[i+4].condition}}</h4>\n                {{i+4}}th-{{hourlyforecast[i+4].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+5].icon_url}}\">\n                <h4>{{hourlyforecast[i+5].condition}}</h4>\n                {{i+5}}th-{{hourlyforecast[i+5].FCTTIME.civil}}\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"i/6==4\" class=\"row\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i].icon_url}}\">\n                <h4>{{hourlyforecast[i].condition}}</h4>\n                {{i}}th-{{hourlyforecast[i].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+1].icon_url}}\">\n                <h4>{{hourlyforecast[i+1].condition}}</h4>\n                {{i+1}}th-{{hourlyforecast[i+1].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+2].icon_url}}\">\n                <h4>{{hourlyforecast[i+2].condition}}</h4>\n                {{i+2}}th-{{hourlyforecast[i+2].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+3].icon_url}}\">\n                <h4>{{hourlyforecast[i+3].condition}}</h4>\n                {{i+3}}th-{{hourlyforecast[i+3].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+4].icon_url}}\">\n                <h4>{{hourlyforecast[i+4].condition}}</h4>\n                {{i+4}}th-{{hourlyforecast[i+4].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+5].icon_url}}\">\n                <h4>{{hourlyforecast[i+5].condition}}</h4>\n                {{i+5}}th-{{hourlyforecast[i+5].FCTTIME.civil}}\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"i/6==5\" class=\"row\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i].icon_url}}\">\n                <h4>{{hourlyforecast[i].condition}}</h4>\n                {{i}}th-{{hourlyforecast[i].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+1].icon_url}}\">\n                <h4>{{hourlyforecast[i+1].condition}}</h4>\n                {{i+1}}th-{{hourlyforecast[i+1].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+2].icon_url}}\">\n                <h4>{{hourlyforecast[i+2].condition}}</h4>\n                {{i+2}}th-{{hourlyforecast[i+2].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+3].icon_url}}\">\n                <h4>{{hourlyforecast[i+3].condition}}</h4>\n                {{i+3}}th-{{hourlyforecast[i+3].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+4].icon_url}}\">\n                <h4>{{hourlyforecast[i+4].condition}}</h4>\n                {{i+4}}th-{{hourlyforecast[i+4].FCTTIME.civil}}\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <img src=\"{{hourlyforecast[i+5].icon_url}}\">\n                <h4>{{hourlyforecast[i+5].condition}}</h4>\n                {{i+5}}th-{{hourlyforecast[i+5].FCTTIME.civil}}\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <!--end of table-->\n      <!--<button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"tenDaysForecast()\">\n        10days Forecast\n      </button>\n      <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"history()\">\n        history\n      </button>-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/weather-detail-by-city/weather-detail-by-city.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherDetailByCityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_wunderground_service__ = __webpack_require__("../../../../../src/app/services/wunderground.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weatherByCityAnimation__ = __webpack_require__("../../../../../src/app/weather-detail-by-city/weatherByCityAnimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__weatherByCityAnimationTitle__ = __webpack_require__("../../../../../src/app/weather-detail-by-city/weatherByCityAnimationTitle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weather_detail_by_city_animation__ = __webpack_require__("../../../../../src/app/weather-detail-by-city/weather-detail-by-city.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //use jquery in angular4!




var WeatherDetailByCityComponent = (function () {
    function WeatherDetailByCityComponent(wundergroundService, route) {
        this.wundergroundService = wundergroundService;
        this.route = route;
    }
    WeatherDetailByCityComponent.prototype.ngOnInit = function () {
        var _this = this;
        var position = this.route.snapshot.params["position"];
        this.city = position.split(",")[0];
        this.state = position.split(",")[1];
        console.log("current state:" + this.state);
        console.log("current city:" + this.city);
        console.log("location now is:" + position);
        this.wundergroundService.getInfoByCityAndState(this.state, this.city).subscribe(function (weathers) {
            console.log(weathers);
            _this.weathers = weathers;
        });
    };
    WeatherDetailByCityComponent.prototype.generalForecast = function () {
        var _this = this;
        if (this.generalforecast != null) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#generalforecastId").hide();
            this.generalforecast = null;
        }
        else {
            this.wundergroundService.getForecastByCityAndStat(this.state, this.city).subscribe(function (forecast) {
                _this.generalforecast = forecast.forecast.simpleforecast.forecastday;
            });
        }
    };
    WeatherDetailByCityComponent.prototype.hourlyForecast = function () {
        var _this = this;
        if (this.hourlyforecast != null) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#hourlyforecastId").hide();
            this.hourlyforecast = null;
        }
        else {
            this.wundergroundService.hourlyForecast(this.state, this.city).subscribe(function (forecast) {
                console.log(forecast); //index from 0-35
                console.log(forecast.hourly_forecast[0].FCTTIME.civil); //time 
                console.log(forecast.hourly_forecast[0].condition);
                console.log(forecast.hourly_forecast[0].icon_url);
                _this.hourlyforecast = forecast.hourly_forecast;
            });
        }
    };
    WeatherDetailByCityComponent.prototype.tenDaysForecast = function () {
        var _this = this;
        if (this.tendaysforecast != null) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#").hide();
            this.tendaysforecast = null;
        }
        else {
            this.wundergroundService.tenDaysForecast(this.state, this.city).subscribe(function (forecast) {
                console.log(forecast);
                _this.tendaysforecast = forecast;
            });
        }
    };
    WeatherDetailByCityComponent.prototype.history = function () {
    };
    WeatherDetailByCityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-weather-detail-by-city',
            template: __webpack_require__("../../../../../src/app/weather-detail-by-city/weather-detail-by-city.component.html"),
            styles: [__webpack_require__("../../../../../src/app/weather-detail-by-city/weather-detail-by-city.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_wunderground_service__["a" /* WundergroundService */]],
            animations: [__WEBPACK_IMPORTED_MODULE_4__weatherByCityAnimation__["a" /* WeatherByCityAnimation */],
                __WEBPACK_IMPORTED_MODULE_5__weatherByCityAnimationTitle__["a" /* weatherByCityAnimationTitle */],
                __WEBPACK_IMPORTED_MODULE_6__weather_detail_by_city_animation__["a" /* weatherAnimation_2 */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_wunderground_service__["a" /* WundergroundService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], WeatherDetailByCityComponent);
    return WeatherDetailByCityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/weather-detail-by-city/weatherByCityAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherByCityAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var WeatherByCityAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])("weatherByCityAnimationList", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])("*=>*", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])("li", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])("h1", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])("li", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])("1000ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: "translateY(-100%)", offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, transform: "translateY(15px)", offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.6, transform: "translateY(30px)", offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: "translateY(0)", offset: 1 })
            ]))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/weather-detail-by-city/weatherByCityAnimationTitle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return weatherByCityAnimationTitle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var weatherByCityAnimationTitle = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])("weatherByCityAnimationTitle", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])("*=>*", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])("h1,img", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])("#generalforecastId", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])("h1,img", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])("1000ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: "translateX(-100%)", offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, transform: "translateX(15px) scale(1)", offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.6, transform: "translateX(30px) scale(1.3)", offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: "translateX(0) scale(1)", offset: 1 })
            ]))
        ]), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])("#generalforecastId", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])("1000ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.3, offset: 0.3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0.6, offset: 0.6 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, offset: 1 })
            ]))
        ]), { optional: true })
    ])
]);


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
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