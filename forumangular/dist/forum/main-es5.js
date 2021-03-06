function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cours_cours_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cours/cours.component */
    "./src/app/cours/cours.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _topics_topics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./topics/topics.component */
    "./src/app/topics/topics.component.ts");
    /* harmony import */


    var _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./posts/posts.component */
    "./src/app/posts/posts.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: '',
      canActivateChild: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
      children: [{
        path: 'cours',
        component: _cours_cours_component__WEBPACK_IMPORTED_MODULE_2__["CoursComponent"]
      }, {
        path: 'topics/:id',
        component: _topics_topics_component__WEBPACK_IMPORTED_MODULE_4__["TopicsComponent"]
      }, {
        path: 'posts/:id',
        component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"]
      }]
    }, {
      path: '**',
      component: _cours_cours_component__WEBPACK_IMPORTED_MODULE_2__["CoursComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'forum-angular';
    };

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _cours_cours_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cours/cours.component */
    "./src/app/cours/cours.component.ts");
    /* harmony import */


    var _topics_topics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./topics/topics.component */
    "./src/app/topics/topics.component.ts");
    /* harmony import */


    var _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./posts/posts.component */
    "./src/app/posts/posts.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./breadcrumb/breadcrumb.component */
    "./src/app/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _cours_cours_component__WEBPACK_IMPORTED_MODULE_5__["CoursComponent"], _topics_topics_component__WEBPACK_IMPORTED_MODULE_6__["TopicsComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _cours_cours_component__WEBPACK_IMPORTED_MODULE_5__["CoursComponent"], _topics_topics_component__WEBPACK_IMPORTED_MODULE_6__["TopicsComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setComponentScope"](_topics_topics_component__WEBPACK_IMPORTED_MODULE_6__["TopicsComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["??angular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTableDirective"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorComponent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _cours_cours_component__WEBPACK_IMPORTED_MODULE_5__["CoursComponent"], _topics_topics_component__WEBPACK_IMPORTED_MODULE_6__["TopicsComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivateChild",
        value: function canActivateChild(next, state) {
          var url = state.url; //return this.checkLogin(url);

          return true;
        }
      }, {
        key: "checkLogin",
        value: function checkLogin(url) {
          if (this.authService.isLoggedIn) {
            return true;
          }

          if (url == "/login") {
            url = "/cours";
          } // Store the attempted URL for redirecting


          this.authService.redirectUrl = url; // Navigate to the login page with extras

          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.??fac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.isLoggedIn = false;
        this.redirectUrl = "";
      }

      _createClass(AuthService, [{
        key: "sendAuthentification",
        value: function sendAuthentification(username, pwd) {
          var formData = new FormData();
          formData.append("username", username);
          formData.append("password", pwd);
          return this.http.post( //'http://127.0.0.1:8080/forum/angular/checkLogin.php',
          'http://forum/angular/checkLogin.php', formData, {
            withCredentials: true
          });
        }
      }, {
        key: "finalizeAuthentication",
        value: function finalizeAuthentication(reponse) {
          if (reponse.status == "ok") {
            this.isLoggedIn = true;
          } else {
            this.isLoggedIn = false;
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.??fac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthService,
      factory: AuthService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/breadcrumb/breadcrumb.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/breadcrumb/breadcrumb.component.ts ***!
    \****************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcAppBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function BreadcrumbComponent_li_2_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var path_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("routerLink", path_r1.route);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](path_r1.nom);
      }
    }

    function BreadcrumbComponent_li_2_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var path_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](path_r1.nom);
      }
    }

    function BreadcrumbComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BreadcrumbComponent_li_2_a_1_Template, 2, 2, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, BreadcrumbComponent_li_2_span_2_Template, 2, 1, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var path_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", path_r1.route.length != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", path_r1.route.length == 0);
      }
    }

    var BreadcrumbComponent = /*#__PURE__*/function () {
      function BreadcrumbComponent() {
        _classCallCheck(this, BreadcrumbComponent);
      }

      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent.??fac = function BreadcrumbComponent_Factory(t) {
      return new (t || BreadcrumbComponent)();
    };

    BreadcrumbComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BreadcrumbComponent,
      selectors: [["app-breadcrumb"]],
      inputs: {
        paths: "paths"
      },
      decls: 3,
      vars: 1,
      consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"]],
      template: function BreadcrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ol", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, BreadcrumbComponent_li_2_Template, 3, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.paths);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-breadcrumb',
          templateUrl: './breadcrumb.component.html',
          styleUrls: ['./breadcrumb.component.css']
        }]
      }], function () {
        return [];
      }, {
        paths: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cours/cours.component.ts":
  /*!******************************************!*\
    !*** ./src/app/cours/cours.component.ts ***!
    \******************************************/

  /*! exports provided: CoursComponent */

  /***/
  function srcAppCoursCoursComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoursComponent", function () {
      return CoursComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/topics", a1];
    };

    function CoursComponent_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var cour_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, cour_r1.id_cours));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cour_r1.nom);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cour_r1.nb_sujet);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cour_r1.nb_post);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cour_r1.date_maj);
      }
    }

    var CoursComponent = /*#__PURE__*/function () {
      function CoursComponent(http) {
        _classCallCheck(this, CoursComponent);

        this.http = http;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(CoursComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var recup = this.recupCours();
          recup.subscribe(function (value) {
            _this.cours = value.data;
            console.log(_this.cours);

            _this.dtTrigger.next();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.dtTrigger.unsubscribe();
        }
      }, {
        key: "recupCours",
        value: function recupCours() {
          return this.http.post( //'http://127.0.0.1:8080/forum/angular/checkLogin.php',
          'http://forum/angular/getCours.php', null, {
            withCredentials: true
          });
        }
      }]);

      return CoursComponent;
    }();

    CoursComponent.??fac = function CoursComponent_Factory(t) {
      return new (t || CoursComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    CoursComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CoursComponent,
      selectors: [["app-cours"]],
      decls: 18,
      vars: 2,
      consts: [["datatable", "", 1, "table", "table-hover", 3, "dtTrigger"], [1, "thead-dark"], ["style", "transform: rotate(0);", 4, "ngFor", "ngForOf"], [2, "transform", "rotate(0)"], ["scope", "row"], ["routerLinkActive", "Topic", 1, "stretched-link", 3, "routerLink"]],
      template: function CoursComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Liste des cours");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Nom cours");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " #Topics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " #Posts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Derni\xE8re modification ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, CoursComponent_tr_17_Template, 11, 7, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dtTrigger", ctx.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.cours);
        }
      },
      directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzL2NvdXJzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CoursComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cours',
          templateUrl: './cours.component.html',
          styleUrls: ['./cours.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.errorMessage);
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(service, router) {
        _classCallCheck(this, LoginComponent);

        this.service = service;
        this.router = router;
        this.username = "";
        this.password = "";
        this.errorMessage = "";
      } //constructor() { }


      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "authenticate",
        value: function authenticate() {
          var _this2 = this;

          if (this.username.trim() == "" || this.password.trim() == "") {
            this.errorMessage = "erreur : un des deux champs est vide";
          } else {
            var reponse = this.service.sendAuthentification(this.username, this.password);
            reponse.subscribe({
              next: function next(value) {
                return _this2.service.finalizeAuthentication(value);
              },
              complete: function complete() {
                return _this2.finalizeCheck();
              }
            });
          }
        }
      }, {
        key: "finalizeCheck",
        value: function finalizeCheck() {
          if (this.service.isLoggedIn) {
            this.errorMessage = "";

            if (this.service.redirectUrl == "") {
              this.router.navigateByUrl("/cours");
            } else {
              this.router.navigateByUrl(this.service.redirectUrl);
            }
          } else {
            this.errorMessage = "Login ou Mdp incorrects";
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.??fac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 4,
      vars: 3,
      consts: [["type", "text", "placeholder", "Enter your username", "required", "", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Enter your password", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Submit", 3, "click"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_0_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_input_click_2_listener() {
            return ctx.authenticate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, LoginComponent_div_3_Template, 2, 1, "div", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.errorMessage.length > 0);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.??fac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 3,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-xl", "navbar-dark", "bg-dark"], ["routerLink", "/cours"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Forum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/posts/posts.component.ts":
  /*!******************************************!*\
    !*** ./src/app/posts/posts.component.ts ***!
    \******************************************/

  /*! exports provided: PostsComponent */

  /***/
  function srcAppPostsPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsComponent", function () {
      return PostsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../breadcrumb/breadcrumb.component */
    "./src/app/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PostsComponent_tr_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h6", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var post_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](post_r1.fk_utilisateur);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](post_r1.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", post_r1.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
      }
    }

    var PostsComponent = /*#__PURE__*/function () {
      function PostsComponent(http, route) {
        _classCallCheck(this, PostsComponent);

        this.http = http;
        this.route = route;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
      }

      _createClass(PostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var recup = this.recupPosts();
          recup.subscribe(function (value) {
            _this3.posts = value.data;
            console.log(_this3.posts);

            _this3.dtTrigger.next();

            _this3.breadcrumb = [{
              nom: 'Tous les cours',
              route: '/cours'
            }, {
              nom: _this3.posts[0]['nom_cours'],
              route: '/topics/' + _this3.posts[0]['id_post']
            }, {
              nom: _this3.posts[0]['nom_topic'],
              route: ''
            }];
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.dtTrigger.unsubscribe();
        }
      }, {
        key: "recupPosts",
        value: function recupPosts() {
          var formData = new FormData();
          var id = this.route.snapshot.paramMap.get('id');
          formData.append("id", id);
          return this.http.post( //'http://127.0.0.1:8080/forum/angular/checkLogin.php',
          'http://forum/angular/getPosts.php', formData, {
            withCredentials: true
          });
        }
      }, {
        key: "sendNewPost",
        value: function sendNewPost() {
          var _this4 = this;

          //console.log(this.newTopic);
          var formData = new FormData();
          var id = this.route.snapshot.paramMap.get('id');
          formData.append("fk_topic", id);
          formData.append("description", this.newpost);
          var recup = this.http.post( //'http://127.0.0.1:8080/forum/angular/checkLogin.php',
          'http://forum/angular/nouveauPostBdd.php', formData, {
            withCredentials: true
          });
          recup.subscribe({
            next: function next(value) {
              _this4.posts.push({
                id_cours: 0,
                nom_cours: '',
                nom_topic: '',
                id_post: value.data[0][0],
                description: _this4.newpost,
                date: value.data[0][3],
                fk_utilisateur: 'theo'
              });
            },
            complete: function complete() {
              $('#modal_post').modal('hide'), console.log(_this4.posts), _this4.dtElement.dtInstance.then(function (dtInstance) {
                // on commence par d??truire la table
                dtInstance.destroy(); // on r??appelle le dtTrigger afin de r??afficher la table

                _this4.dtTrigger.next();
              });
            }
          });
        }
      }]);

      return PostsComponent;
    }();

    PostsComponent.??fac = function PostsComponent_Factory(t) {
      return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    PostsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PostsComponent,
      selectors: [["app-posts"]],
      viewQuery: function PostsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.dtElement = _t.first);
        }
      },
      decls: 35,
      vars: 5,
      consts: [[3, "paths"], ["type", "button", "data-toggle", "modal", "data-target", "#modal_post", 1, "btn", "btn-primary"], ["id", "modal_post", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "modalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "editor", "ngModel", "ngModelChange"], ["id", "newTopicError", 1, "my-1"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "id", "btn_new_topic", 1, "btn", "btn-primary", 3, "click"], ["datatable", "", "id", "tablePosts", 1, "tablePosts", "table", "table-hover", "tablePosts", 3, "dtTrigger"], [1, "thead-light"], ["scope", "col", 1, "tablePosts"], ["class", "tablePosts", 4, "ngFor", "ngForOf"], [1, "tablePosts"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-3"], [1, "border-top", "border-secondary", "pt-2", 3, "innerHTML"]],
      template: function PostsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-breadcrumb", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Liste des posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " nouveau post ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Nouveau post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Saisissez un nouveau post :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "ckeditor", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PostsComponent_Template_ckeditor_ngModelChange_19_listener($event) {
            return ctx.newpost = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Fermer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PostsComponent_Template_button_click_24_listener() {
            return ctx.sendNewPost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Cr\xE9er nouveau post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "thead", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, PostsComponent_tr_34_Template, 8, 3, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("paths", ctx.breadcrumb);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("editor", ctx.Editor)("ngModel", ctx.newpost);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dtTrigger", ctx.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.posts);
        }
      },
      directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
      styles: ["[_nghost-%COMP%]     .ck-editor__editable_inline {\r\n    min-height: 10em !important;\r\n    }\r\n    \r\n    td.tablePosts[_ngcontent-%COMP%] {\r\n        border: 2px solid #585858 !important;\r\n        border-radius: 5px;\r\n        background-color: #e6f2ff;\r\n    }\r\n    \r\n    th.tablePosts[_ngcontent-%COMP%] {\r\n        background-color: #0062cc !important;\r\n        color: white !important;\r\n        border-radius: 5px;\r\n    }\r\n    \r\n    table.tablePosts[_ngcontent-%COMP%] {\r\n        border-collapse: separate !important;\r\n        border-spacing: 5px !important;\r\n    }\r\n    \r\n    body[_ngcontent-%COMP%] {\r\n        background-color: #000000;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQjs7SUFFQTtRQUNJLG9DQUFvQztRQUNwQyxrQkFBa0I7UUFDbEIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksb0NBQW9DO1FBQ3BDLHVCQUF1QjtRQUN2QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxvQ0FBb0M7UUFDcEMsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xyXG4gICAgbWluLWhlaWdodDogMTBlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0ZC50YWJsZVBvc3RzIHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNTg1ODU4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmYyZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoLnRhYmxlUG9zdHMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDYyY2MgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRhYmxlLnRhYmxlUG9zdHMge1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItc3BhY2luZzogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-posts',
          templateUrl: './posts.component.html',
          styleUrls: ['./posts.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, {
        dtElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/topics/topics.component.ts":
  /*!********************************************!*\
    !*** ./src/app/topics/topics.component.ts ***!
    \********************************************/

  /*! exports provided: TopicsComponent */

  /***/
  function srcAppTopicsTopicsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopicsComponent", function () {
      return TopicsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/posts", a1];
    };

    function TopicsComponent_tr_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var topic_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, topic_r1.id_sujet));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](topic_r1.nom);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](topic_r1.nb_post);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](topic_r1.dernier_maj);
      }
    }

    var TopicsComponent = /*#__PURE__*/function () {
      function TopicsComponent(http, route) {
        _classCallCheck(this, TopicsComponent);

        this.http = http;
        this.route = route;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(TopicsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          var recup = this.recupTopics();
          recup.subscribe(function (value) {
            _this5.topics = value.data; //console.log(this.topics);

            _this5.dtTrigger.next();

            _this5.breadcrumb = [{
              nom: 'Tous les cours',
              route: '/cours'
            }, {
              nom: _this5.topics[0][0],
              route: ''
            }];
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.dtTrigger.unsubscribe();
        }
      }, {
        key: "recupTopics",
        value: function recupTopics() {
          var formData = new FormData();
          var id = this.route.snapshot.paramMap.get('id');
          formData.append("id", id);
          return this.http.post( //'http://127.0.0.1:8080/forum/angular/checkLogin.php',
          'http://forum/angular/getTopics.php', formData, {
            withCredentials: true
          });
        }
      }, {
        key: "sendNewTopic",
        value: function sendNewTopic() {
          var _this6 = this;

          //console.log(this.newTopic);
          var formData = new FormData();
          var id = this.route.snapshot.paramMap.get('id');
          formData.append("fk_cours", id);
          formData.append("new_topic", this.newTopic);
          var recup = this.http.post( //'http://127.0.0.1:8080/forum/angular/checkLogin.php',
          'http://forum/angular/nouveauSujetBdd.php', formData, {
            withCredentials: true
          });
          recup.subscribe({
            next: function next(value) {
              _this6.topics.push({
                id_sujet: value.data[0][0],
                nom: _this6.newTopic,
                nb_post: 0,
                dernier_maj: value.data[0][3],
                0: value.data[0][4]
              });
            },
            complete: function complete() {
              $('#modal_sujet').modal('hide'), console.log(_this6.topics), _this6.dtElement.dtInstance.then(function (dtInstance) {
                // on commence par d??truire la table
                dtInstance.destroy(); // on r??appelle le dtTrigger afin de r??afficher la table

                _this6.dtTrigger.next();
              });
            }
          });
        }
      }]);

      return TopicsComponent;
    }();

    TopicsComponent.??fac = function TopicsComponent_Factory(t) {
      return new (t || TopicsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    TopicsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: TopicsComponent,
      selectors: [["app-topics"]],
      viewQuery: function TopicsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.dtElement = _t.first);
        }
      },
      decls: 40,
      vars: 4,
      consts: [[3, "paths"], ["type", "button", "data-toggle", "modal", "data-target", "#modal_sujet", 1, "btn", "btn-primary"], ["id", "modal_sujet", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "modalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "text", "id", "new_subject", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "newTopicError", 1, "my-1"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "id", "btn_new_topic", 1, "btn", "btn-primary", 3, "click"], ["datatable", "", "id", "tablesujet", 1, "table", "table-hover", 3, "dtTrigger"], [1, "thead-dark"], ["style", "transform: rotate(0);", 4, "ngFor", "ngForOf"], [2, "transform", "rotate(0)"], ["scope", "row"], ["routerLinkActive", "Post", 1, "stretched-link", 3, "routerLink"]],
      template: function TopicsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-breadcrumb", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Liste des topics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " nouveau sujet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Nouveau sujet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Saisissez un nouveau sujet :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TopicsComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.newTopic = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Fermer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopicsComponent_Template_button_click_24_listener() {
            return ctx.sendNewTopic();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Cr\xE9er nouveau sujet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "thead", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Nom topic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " #Posts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Derni\xE8re modification ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, TopicsComponent_tr_39_Template, 9, 6, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("paths", ctx.breadcrumb);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newTopic);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dtTrigger", ctx.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.topics);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGljcy90b3BpY3MuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TopicsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-topics',
          templateUrl: './topics.component.html',
          styleUrls: ['./topics.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, {
        dtElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Ali\Documents\S8\Cloud\forum_project\forumangular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map