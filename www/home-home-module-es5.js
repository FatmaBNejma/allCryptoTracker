(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content *ngIf=\"bitcoin$ ; else loading\" forceOverscroll=false>\r\n    <div id=\"section1\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n        <ion-icon name=\"refresh-outline\" (click)=\"changeFiat()\"></ion-icon>\r\n      </ion-buttons>\r\n      \r\n      <small class=\"infoText\">{{selectedCrypto}} price </small>\r\n      <div id=\"sub-sec1\">\r\n        <p> {{bitcoin$.current_price  | currency:selectedFiat:true}} \r\n          <small [ngClass]=\"(bitcoin$.price_change_percentage_24h > 0) ?'positivePriceChange':'negativePriceChange'\">{{bitcoin$.price_change_percentage_24h | number:'1.1-1'}}%\r\n          <div *ngIf=\"bitcoin$.price_change_percentage_24h > 0; then tradingup else tradingdown\">\r\n          </div>\r\n        \r\n          <ng-template #tradingup>\r\n            <ion-icon  name=\"trending-up-outline\"></ion-icon>\r\n          </ng-template>\r\n          \r\n          <ng-template #tradingdown>\r\n            <ion-icon  name=\"trending-down-outline\"></ion-icon>\r\n          </ng-template>\r\n  \r\n          </small></p>  \r\n        <ion-select la interface=\"popover\" [(ngModel)]=\"selectedFiat\" (ionChange)=\"changeFiat()\">\r\n          <ion-select-option *ngFor=\"let fiat of fiats\" value=\"{{fiat}}\">{{fiat}}</ion-select-option>\r\n        </ion-select>\r\n        <div>\r\n          \r\n          <ion-avatar>\r\n            <img src=\"{{bitcoin$.image}}\" alt=\"Bitcoin\"/>\r\n          </ion-avatar>\r\n        </div>\r\n      </div>\r\n      <small class=\"infoText\">The current circulating supply is {{bitcoin$.circulating_supply}} coin</small>\r\n      <p class=\"subText\" *ngIf=\"bitcoins$ ; else loading\">Market Cup Rank</p>\r\n      <div id=\"sub-sec2\">\r\n        <span *ngFor=\"let rank of bitcoins$ ;index as indexOfelement;\">\r\n          <ion-avatar>\r\n            <img src=\"{{rank.image}}\" alt=\"Bitcoin\"/>\r\n          </ion-avatar>\r\n          <p>Rank {{rank.market_cap_rank}}</p>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <h2><b>Recent Trading</b></h2>\r\n      <app-card  [bitcoin$]=bitcoin$ [selectedFiat]=selectedFiat></app-card>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  </ion-content>\r\n  ";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('blueBg.jpg') no-repeat center center / cover;\n}\nion-content #section1 ion-buttons {\n  color: white;\n  justify-content: space-between;\n}\nion-content #section1 ion-buttons ion-icon {\n  font-size: 23px;\n  padding: 0px 18px;\n}\nion-content #section1 .infoText {\n  font-size: 14px;\n  color: white;\n  margin: 0px;\n  padding: 0 25px;\n}\nion-content #section1 .subText {\n  font-size: 14px;\n  color: #bac3d1;\n  margin: 0px;\n  margin-top: 10px;\n  padding: 0 25px;\n}\nion-content #section1 #sub-sec1 {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 25px;\n}\nion-content #section1 #sub-sec1 ion-select {\n  color: #fff;\n  margin-left: -30px;\n}\nion-content #section1 #sub-sec1 p {\n  display: flex;\n  flex-direction: row;\n  font-size: 30px;\n  color: #ffffff;\n  margin: 0px;\n}\nion-content #section1 #sub-sec1 p small {\n  display: flex;\n  flex-direction: unset;\n  width: auto;\n  font-size: small;\n}\nion-content #section1 #sub-sec1 p small ion-icon {\n  font-size: small;\n}\nion-content #section1 #sub-sec1 div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\nion-content #section1 #sub-sec1 div ion-icon {\n  font-size: 25px;\n  color: #bac3d1;\n}\nion-content #section1 #sub-sec1 div ion-avatar {\n  width: 60px;\n  height: 60px;\n  --border-radius:50%;\n  border: 1px solid #ffffff;\n}\nion-content #section1 #sub-sec2 {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  padding: 0 10px;\n  margin: 10px;\n}\nion-content #section1 #sub-sec2 ion-avatar {\n  width: 40px;\n  height: 40px;\n  --border-radius:50%;\n  background-color: white;\n  border: 1px solid #ffffff;\n}\nion-content #section1 #sub-sec2 span {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nion-content #section1 #sub-sec2 span ion-icon {\n  font-size: 30px;\n  background: #ffffff;\n  border-radius: 15px;\n  padding: 5px;\n  color: #607d9d;\n}\nion-content #section1 #sub-sec2 span p {\n  font-size: 14px;\n  color: #90a5cc;\n  margin: 0px;\n  padding-top: 5px;\n}\nion-content ion-card {\n  --background: #ffffff;\n  margin: 0;\n  border-radius: 20px 20px 0 0;\n}\nion-content ion-card ion-card-content h2 {\n  Color: #033278;\n  padding: 10px;\n}\nion-content .positivePriceChange {\n  color: limegreen;\n}\nion-content .negativePriceChange {\n  color: red;\n}\n/* Animation & SplashScreen*/\n#custom-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100000;\n  width: 100%;\n  background-color: #002a3e;\n}\n.flb {\n  background-color: #033278;\n  height: 100%;\n  width: 100%;\n  -webkit-animation: pulse 1s linear forwards;\n          animation: pulse 1s linear forwards;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.Aligner-item {\n  max-width: 50%;\n}\n.Aligner-item--top {\n  align-self: flex-start;\n}\n.Aligner-item--bottom {\n  align-self: flex-end;\n}\n#custom-overlay img {\n  display: block;\n  margin: 0 auto;\n  width: 50%;\n  height: auto;\n  -webkit-animation: animation 3100ms linear infinite both;\n          animation: animation 3100ms linear infinite both;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n@-webkit-keyframes pulse {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes pulse {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/* Animation */\n.animation-target {\n  -webkit-animation: animation 2800ms linear both;\n  animation: animation 2800ms linear both;\n}\n@-webkit-keyframes animation {\n  0% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -500, 0, 0, 1);\n  }\n  1.14% {\n    transform: matrix3d(1, 0, 0, 0, 0.621, 1, 0, 0, 0, 0, 1, 0, -282.728, 0, 0, 1);\n  }\n  2.29% {\n    transform: matrix3d(1, 0, 0, 0, 0.829, 1, 0, 0, 0, 0, 1, 0, -149.309, 0, 0, 1);\n  }\n  3.43% {\n    transform: matrix3d(1, 0, 0, 0, 0.695, 1, 0, 0, 0, 0, 1, 0, -72.484, 0, 0, 1);\n  }\n  4.54% {\n    transform: matrix3d(1, 0, 0, 0, 0.477, 1, 0, 0, 0, 0, 1, 0, -31.997, 0, 0, 1);\n  }\n  4.58% {\n    transform: matrix3d(1, 0, 0, 0, 0.47, 1, 0, 0, 0, 0, 1, 0, -31.079, 0, 0, 1);\n  }\n  6.76% {\n    transform: matrix3d(1, 0, 0, 0, 0.146, 1, 0, 0, 0, 0, 1, 0, -1.766, 0, 0, 1);\n  }\n  6.86% {\n    transform: matrix3d(1, 0, 0, 0, 0.135, 1, 0, 0, 0, 0, 1, 0, -1.214, 0, 0, 1);\n  }\n  9.01% {\n    transform: matrix3d(1, 0, 0, 0, -0.003, 1, 0, 0, 0, 0, 1, 0, 2.88, 0, 0, 1);\n  }\n  9.15% {\n    transform: matrix3d(1, 0, 0, 0, -0.007, 1, 0, 0, 0, 0, 1, 0, 2.886, 0, 0, 1);\n  }\n  11.23% {\n    transform: matrix3d(1, 0, 0, 0, -0.033, 1, 0, 0, 0, 0, 1, 0, 1.99, 0, 0, 1);\n  }\n  20.16% {\n    transform: matrix3d(1, 0, 0, 0, 0.002, 1, 0, 0, 0, 0, 1, 0, 0.01, 0, 0, 1);\n  }\n  23.45% {\n    transform: matrix3d(1, 0, 0, 0, 0.001, 1, 0, 0, 0, 0, 1, 0, -0.003, 0, 0, 1);\n  }\n  28.47% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.001, 0, 0, 1);\n  }\n  28.57% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.001, 0, 0, 1);\n  }\n  29.1% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -7.992, 0, 1);\n  }\n  29.86% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.001, -15.312, 0, 1);\n  }\n  31.15% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.001, -19.275, 0, 1);\n  }\n  32.75% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -15.606, 0, 1);\n  }\n  34.33% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -9.111, 0, 1);\n  }\n  35.71% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -4.058, 0, 1);\n  }\n  35.94% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -3.395, 0, 1);\n  }\n  37.51% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.013, 0, 1);\n  }\n  40.08% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1.622, 0, 1);\n  }\n  46.45% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.002, 0, 1);\n  }\n  49.02% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.137, 0, 1);\n  }\n  55.38% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  57.96% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.011, 0, 1);\n  }\n  62.4% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.003, 0, 1);\n  }\n  62.5% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.002, 0, 1);\n  }\n  64.04% {\n    transform: matrix3d(1, 0, 0, 0, 0.375, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  64.19% {\n    transform: matrix3d(1, 0, 0, 0, 0.41, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  64.29% {\n    transform: matrix3d(1, 0, 0, 0, 0.434, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  64.29% {\n    transform: matrix3d(1, 0, 0, 0, 0.434, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  65.57% {\n    transform: matrix3d(1, 0, 0, 0, 0.704, 1, 0, 0, 0, 0, 1, 0, 218.852, 0, 0, 1);\n  }\n  65.82% {\n    transform: matrix3d(1, 0, 0, 0, 0.747, 1, 0, 0, 0, 0, 1, 0, 257.135, 0, 0, 1);\n  }\n  67.11% {\n    transform: matrix3d(1, 0, 0, 0, 0.903, 1, 0, 0, 0, 0, 1, 0, 416.676, 0, 0, 1);\n  }\n  67.36% {\n    transform: matrix3d(1, 0, 0, 0, 0.921, 1, 0, 0, 0, 0, 1, 0, 439.293, 0, 0, 1);\n  }\n  68.65% {\n    transform: matrix3d(1, 0, 0, 0, 0.957, 1, 0, 0, 0, 0, 1, 0, 517.583, 0, 0, 1);\n  }\n  68.9% {\n    transform: matrix3d(1, 0, 0, 0, 0.956, 1, 0, 0, 0, 0, 1, 0, 526.138, 0, 0, 1);\n  }\n  70.43% {\n    transform: matrix3d(1, 0, 0, 0, 0.922, 1, 0, 0, 0, 0, 1, 0, 546.667, 0, 0, 1);\n  }\n  72.62% {\n    transform: matrix3d(1, 0, 0, 0, 0.864, 1, 0, 0, 0, 0, 1, 0, 528.816, 0, 0, 1);\n  }\n  74.4% {\n    transform: matrix3d(1, 0, 0, 0, 0.839, 1, 0, 0, 0, 0, 1, 0, 510.313, 0, 0, 1);\n  }\n  76.59% {\n    transform: matrix3d(1, 0, 0, 0, 0.832, 1, 0, 0, 0, 0, 1, 0, 498.826, 0, 0, 1);\n  }\n  78.37% {\n    transform: matrix3d(1, 0, 0, 0, 0.834, 1, 0, 0, 0, 0, 1, 0, 496.885, 0, 0, 1);\n  }\n  84.52% {\n    transform: matrix3d(1, 0, 0, 0, 0.84, 1, 0, 0, 0, 0, 1, 0, 500.078, 0, 0, 1);\n  }\n  86.31% {\n    transform: matrix3d(1, 0, 0, 0, 0.839, 1, 0, 0, 0, 0, 1, 0, 500.208, 0, 0, 1);\n  }\n  92.49% {\n    transform: matrix3d(1, 0, 0, 0, 0.839, 1, 0, 0, 0, 0, 1, 0, 499.994, 0, 0, 1);\n  }\n  94.28% {\n    transform: matrix3d(1, 0, 0, 0, 0.839, 1, 0, 0, 0, 0, 1, 0, 499.986, 0, 0, 1);\n  }\n  98.21% {\n    transform: matrix3d(1, 0, 0, 0, 0.839, 1, 0, 0, 0, 0, 1, 0, 499.997, 0, 0, 1);\n  }\n  100% {\n    transform: matrix3d(1, 0, 0, 0, 0.839, 1, 0, 0, 0, 0, 1, 0, 500, 0, 0, 1);\n  }\n}\n@keyframes animation {\n  0% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -500, 0, 0, 1);\n  }\n  1.14% {\n    transform: matrix3d(1, 0, 0, 0, 0.621, 1, 0, 0, 0, 0, 1, 0, -282.728, 0, 0, 1);\n  }\n  2.29% {\n    transform: matrix3d(1, 0, 0, 0, 0.829, 1, 0, 0, 0, 0, 1, 0, -149.309, 0, 0, 1);\n  }\n  3.43% {\n    transform: matrix3d(1, 0, 0, 0, 0.695, 1, 0, 0, 0, 0, 1, 0, -72.484, 0, 0, 1);\n  }\n  4.54% {\n    transform: matrix3d(1, 0, 0, 0, 0.477, 1, 0, 0, 0, 0, 1, 0, -31.997, 0, 0, 1);\n  }\n  4.58% {\n    transform: matrix3d(1, 0, 0, 0, 0.47, 1, 0, 0, 0, 0, 1, 0, -31.079, 0, 0, 1);\n  }\n  6.76% {\n    transform: matrix3d(1, 0, 0, 0, 0.146, 1, 0, 0, 0, 0, 1, 0, -1.766, 0, 0, 1);\n  }\n  6.86% {\n    transform: matrix3d(1, 0, 0, 0, 0.135, 1, 0, 0, 0, 0, 1, 0, -1.214, 0, 0, 1);\n  }\n  9.01% {\n    transform: matrix3d(1, 0, 0, 0, -0.003, 1, 0, 0, 0, 0, 1, 0, 2.88, 0, 0, 1);\n  }\n  9.15% {\n    transform: matrix3d(1, 0, 0, 0, -0.007, 1, 0, 0, 0, 0, 1, 0, 2.886, 0, 0, 1);\n  }\n  11.23% {\n    transform: matrix3d(1, 0, 0, 0, -0.033, 1, 0, 0, 0, 0, 1, 0, 1.99, 0, 0, 1);\n  }\n  20.16% {\n    transform: matrix3d(1, 0, 0, 0, 0.002, 1, 0, 0, 0, 0, 1, 0, 0.01, 0, 0, 1);\n  }\n  23.45% {\n    transform: matrix3d(1, 0, 0, 0, 0.001, 1, 0, 0, 0, 0, 1, 0, -0.003, 0, 0, 1);\n  }\n  28.47% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.001, 0, 0, 1);\n  }\n  28.57% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.001, 0, 0, 1);\n  }\n  29.1% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -7.992, 0, 1);\n  }\n  29.86% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.001, -15.312, 0, 1);\n  }\n  31.15% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.001, -19.275, 0, 1);\n  }\n  32.75% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -15.606, 0, 1);\n  }\n  34.33% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -9.111, 0, 1);\n  }\n  35.71% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -4.058, 0, 1);\n  }\n  35.94% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -3.395, 0, 1);\n  }\n  37.51% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.013, 0, 1);\n  }\n  40.08% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1.622, 0, 1);\n  }\n  46.45% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.002, 0, 1);\n  }\n  49.02% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.137, 0, 1);\n  }\n  55.38% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  57.96% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.011, 0, 1);\n  }\n  62.4% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.003, 0, 1);\n  }\n  62.5% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.002, 0, 1);\n  }\n  64.04% {\n    transform: matrix3d(1, 0, 0, 0, 0.375, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  64.19% {\n    transform: matrix3d(1, 0, 0, 0, 0.41, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  64.29% {\n    transform: matrix3d(1, 0, 0, 0, 0.434, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  64.29% {\n    transform: matrix3d(1, 0, 0, 0, 0.434, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  65.57% {\n    transform: matrix3d(1, 0, 0, 0, 0.704, 1, 0, 0, 0, 0, 1, 0, 218.852, 0, 0, 1);\n  }\n  65.82% {\n    transform: matrix3d(1, 0, 0, 0, 0.747, 1, 0, 0, 0, 0, 1, 0, 257.135, 0, 0, 1);\n  }\n  67.11% {\n    transform: matrix3d(1, 0, 0, 0, 0.903, 1, 0, 0, 0, 0, 1, 0, 416.676, 0, 0, 1);\n  }\n  67.36% {\n    transform: matrix3d(1, 0, 0, 0, 0.921, 1, 0, 0, 0, 0, 1, 0, 439.293, 0, 0, 1);\n  }\n  68.65% {\n    transform: matrix3d(1, 0, 0, 0, 0.957, 1, 0, 0, 0, 0, 1, 0, 517.583, 0, 0, 1);\n  }\n  68.9% {\n    transform: matrix3d(1, 0, 0, 0, 0.956, 1, 0, 0, 0, 0, 1, 0, 526.138, 0, 0, 1);\n  }\n  70.43% {\n    transform: matrix3d(1, 0, 0, 0, 0.922, 1, 0, 0, 0, 0, 1, 0, 546.667, 0, 0, 1);\n  }\n  72.62% {\n    transform: matrix3d(1, 0, 0, 0, 0.864, 1, 0, 0, 0, 0, 1, 0, 528.816, 0, 0, 1);\n  }\n  74.4% {\n    transform: matrix3d(1, 0, 0, 0, 0.839, 1, 0, 0, 0, 0, 1, 0, 510.313, 0, 0, 1);\n  }\n  76.59% {\n    transform: matrix3d(1, 0, 0, 0, 0.832, 1, 0, 0, 0, 0, 1, 0, 498.826, 0, 0, 1);\n  }\n  78.37% {\n    transform: matrix3d(1, 0, 0, 0, 0.834, 1, 0, 0, 0, 0, 1, 0, 496.885, 0, 0, 1);\n  }\n  84.52% {\n    transform: matrix3d(1, 0, 0, 0, 0.84, 1, 0, 0, 0, 0, 1, 0, 500.078, 0, 0, 1);\n  }\n  86.31% {\n    transform: matrix3d(1, 0, 0, 0, 0.839, 1, 0, 0, 0, 0, 1, 0, 500.208, 0, 0, 1);\n  }\n  92.49% {\n    transform: matrix3d(1, 0, 0, 0, 0.839, 1, 0, 0, 0, 0, 1, 0, 499.994, 0, 0, 1);\n  }\n  94.28% {\n    transform: matrix3d(1, 0, 0, 0, 0.839, 1, 0, 0, 0, 0, 1, 0, 499.986, 0, 0, 1);\n  }\n  98.21% {\n    transform: matrix3d(1, 0, 0, 0, 0.839, 1, 0, 0, 0, 0, 1, 0, 499.997, 0, 0, 1);\n  }\n  100% {\n    transform: matrix3d(1, 0, 0, 0, 0.839, 1, 0, 0, 0, 0, 1, 0, 500, 0, 0, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtEQUFBO0FBQ0Y7QUFHTTtFQUNJLFlBQUE7RUFDQSw4QkFBQTtBQURWO0FBR1U7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFEZDtBQUlNO0VBQ0UsZUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUZWO0FBSU07RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGVjtBQUtNO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFIVjtBQUtVO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBSGQ7QUFNVTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUpkO0FBTWM7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFKbEI7QUFLa0I7RUFDRSxnQkFBQTtBQUhwQjtBQVFVO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQU5kO0FBU2M7RUFDSSxlQUFBO0VBQ0QsY0FBQTtBQVBqQjtBQVVjO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBUmxCO0FBYU07RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFYVjtBQWFVO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFYZDtBQWFVO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVhkO0FBWWM7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBVmxCO0FBWWM7RUFD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QXpOQTtJQUEwRix1RUFBQTtFQTZOMUY7RUE1TkE7SUFBeUYsc0VBQUE7RUFnT3pGO0VBL05BO0lBQTBGLHVFQUFBO0VBbU8xRjtFQWxPQTtJQUEwRix1RUFBQTtFQXNPMUY7RUFyT0E7SUFBZ0csNkVBQUE7RUF5T2hHO0VBeE9BO0lBQWdHLDZFQUFBO0VBNE9oRztFQTNPQTtJQUFnRyw2RUFBQTtFQStPaEc7RUE5T0E7SUFBZ0csNkVBQUE7RUFrUGhHO0VBalBBO0lBQWdHLDZFQUFBO0VBcVBoRztFQXBQQTtJQUErRiw2RUFBQTtFQXdQL0Y7RUF2UEE7SUFBZ0csNkVBQUE7RUEyUGhHO0VBMVBBO0lBQWdHLDZFQUFBO0VBOFBoRztFQTdQQTtJQUErRiw2RUFBQTtFQWlRL0Y7RUFoUUE7SUFBZ0csNkVBQUE7RUFvUWhHO0VBblFBO0lBQWdHLDZFQUFBO0VBdVFoRztFQXRRQTtJQUErRiw0RUFBQTtFQTBRL0Y7RUF6UUE7SUFBZ0csNkVBQUE7RUE2UWhHO0VBNVFBO0lBQWdHLDZFQUFBO0VBZ1JoRztFQS9RQTtJQUFnRyw2RUFBQTtFQW1SaEc7RUFsUkE7SUFBZ0csNkVBQUE7RUFzUmhHO0VBclJBO0lBQTBGLHlFQUFBO0VBeVIxRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9ibHVlQmcuanBnJykgIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG5cbiAgI3NlY3Rpb24xIHtcbiAgICAgIFxuICAgICAgaW9uLWJ1dHRvbnMge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmluZm9UZXh0e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgIH1cbiAgICAgIC5zdWJUZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6ICNiYWMzZDE7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgICB9XG5cbiAgICAgICNzdWItc2VjMSB7XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuXG4gICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG5cbiAgICAgICAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiB1bnNldDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDBweDtcblxuICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgIGNvbG9yOiAjYmFjM2QxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAjc3ViLXNlYzIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG5cbiAgICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICM2MDdkOWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTBhNWNjO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgaW9uLWNhcmQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbiAgICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDI2N3B4KTtcblxuICAgICAgaW9uLWNhcmQtY29udGVudCB7XG5cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIENvbG9yOiMwMzMyNzg7XG4gICAgICAgICAgICAgIHBhZGRpbmcgOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIC5wb3NpdGl2ZVByaWNlQ2hhbmdlIHtcbiAgICAgIGNvbG9yOiBsaW1lZ3JlZW47XG4gIH1cbiAgLm5lZ2F0aXZlUHJpY2VDaGFuZ2Uge1xuICAgICAgY29sb3I6IHJlZDtcbiAgfVxuXG59XG5cblxuLyogQW5pbWF0aW9uICYgU3BsYXNoU2NyZWVuKi9cbiNjdXN0b20tb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwMDA7XG4gIHdpZHRoOjEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJhM2U7XG59XG5cbi5mbGIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMzMjc4O1xuICBoZWlnaHQ6MTAwJTtcbiAgd2lkdGg6MTAwJTtcbiAgYW5pbWF0aW9uOiBwdWxzZSAxcyBsaW5lYXIgZm9yd2FyZHM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLkFsaWduZXItaXRlbSB7XG4gIG1heC13aWR0aDogNTAlO1xufVxuLkFsaWduZXItaXRlbS0tdG9wIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi5BbGlnbmVyLWl0ZW0tLWJvdHRvbSB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuI2N1c3RvbS1vdmVybGF5IGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBhbmltYXRpb246IGFuaW1hdGlvbiAzMTAwbXMgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgb3BhY2l0eTowO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6MTtcbiAgfVxufVxuXG4vKiBBbmltYXRpb24gKi9cblxuXG4uYW5pbWF0aW9uLXRhcmdldCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRpb24gMjgwMG1zIGxpbmVhciBib3RoO1xuICBhbmltYXRpb246IGFuaW1hdGlvbiAyODAwbXMgbGluZWFyIGJvdGg7XG59XG5cblxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGlvbiB7IFxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtNTAwLCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtNTAwLCAwLCAwLCAxKTsgfVxuICAxLjE0JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjYyMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTI4Mi43MjgsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuNjIxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMjgyLjcyOCwgMCwgMCwgMSk7IH1cbiAgMi4yOSUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC44MjksIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0xNDkuMzA5LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjgyOSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTE0OS4zMDksIDAsIDAsIDEpOyB9XG4gIDMuNDMlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuNjk1LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtNzIuNDg0LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjY5NSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTcyLjQ4NCwgMCwgMCwgMSk7IH1cbiAgNC41NCUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC40NzcsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0zMS45OTcsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuNDc3LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMzEuOTk3LCAwLCAwLCAxKTsgfVxuICA0LjU4JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjQ3LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMzEuMDc5LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjQ3LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMzEuMDc5LCAwLCAwLCAxKTsgfVxuICA2Ljc2JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjE0NiwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTEuNzY2LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjE0NiwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTEuNzY2LCAwLCAwLCAxKTsgfVxuICA2Ljg2JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjEzNSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTEuMjE0LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjEzNSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTEuMjE0LCAwLCAwLCAxKTsgfVxuICA5LjAxJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAtMC4wMDMsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDIuODgsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIC0wLjAwMywgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMi44OCwgMCwgMCwgMSk7IH1cbiAgOS4xNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgLTAuMDA3LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAyLjg4NiwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgLTAuMDA3LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAyLjg4NiwgMCwgMCwgMSk7IH1cbiAgMTEuMjMlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIC0wLjAzMywgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMS45OSwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgLTAuMDMzLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxLjk5LCAwLCAwLCAxKTsgfVxuICAyMC4xNiUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC4wMDIsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAuMDEsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuMDAyLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLjAxLCAwLCAwLCAxKTsgfVxuICAyMy40NSUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC4wMDEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0wLjAwMywgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC4wMDEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0wLjAwMywgMCwgMCwgMSk7IH1cbiAgMjguNDclIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0wLjAwMSwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTAuMDAxLCAwLCAwLCAxKTsgfVxuICAyOC41NyUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTAuMDAxLCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMC4wMDEsIDAsIDAsIDEpOyB9XG4gIDI5LjElIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIC03Ljk5MiwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTcuOTkyLCAwLCAxKTsgfVxuICAyOS44NiUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMC4wMDEsIC0xNS4zMTIsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAuMDAxLCAtMTUuMzEyLCAwLCAxKTsgfVxuICAzMS4xNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMC4wMDEsIC0xOS4yNzUsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAuMDAxLCAtMTkuMjc1LCAwLCAxKTsgfVxuICAzMi43NSUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTE1LjYwNiwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTE1LjYwNiwgMCwgMSk7IH1cbiAgMzQuMzMlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIC05LjExMSwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTkuMTExLCAwLCAxKTsgfVxuICAzNS43MSUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTQuMDU4LCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtNC4wNTgsIDAsIDEpOyB9XG4gIDM1Ljk0JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtMy4zOTUsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIC0zLjM5NSwgMCwgMSk7IH1cbiAgMzcuNTElIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIC0wLjAxMywgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTAuMDEzLCAwLCAxKTsgfVxuICA0MC4wOCUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTEuNjIyLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtMS42MjIsIDAsIDEpOyB9XG4gIDQ2LjQ1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtMC4wMDIsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIC0wLjAwMiwgMCwgMSk7IH1cbiAgNDkuMDIlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIC0wLjEzNywgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTAuMTM3LCAwLCAxKTsgfVxuICA1NS4zOCUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7IH1cbiAgNTcuOTYlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIC0wLjAxMSwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTAuMDExLCAwLCAxKTsgfVxuICA2Mi40JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtMC4wMDMsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIC0wLjAwMywgMCwgMSk7IH1cbiAgNjIuNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTAuMDAyLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtMC4wMDIsIDAsIDEpOyB9XG4gIDY0LjA0JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjM3NSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC4zNzUsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpOyB9XG4gIDY0LjE5JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjQxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjQxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTsgfVxuICA2NC4yOSUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC40MzQsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuNDM0LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTsgfVxuICA2NC4yOSUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC40MzQsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuNDM0LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTsgfVxuICA2NS41NyUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC43MDQsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDIxOC44NTIsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuNzA0LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAyMTguODUyLCAwLCAwLCAxKTsgfVxuICA2NS44MiUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC43NDcsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDI1Ny4xMzUsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuNzQ3LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAyNTcuMTM1LCAwLCAwLCAxKTsgfVxuICA2Ny4xMSUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC45MDMsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDQxNi42NzYsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuOTAzLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA0MTYuNjc2LCAwLCAwLCAxKTsgfVxuICA2Ny4zNiUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC45MjEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDQzOS4yOTMsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuOTIxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA0MzkuMjkzLCAwLCAwLCAxKTsgfVxuICA2OC42NSUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC45NTcsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDUxNy41ODMsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuOTU3LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA1MTcuNTgzLCAwLCAwLCAxKTsgfVxuICA2OC45JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjk1NiwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNTI2LjEzOCwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC45NTYsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDUyNi4xMzgsIDAsIDAsIDEpOyB9XG4gIDcwLjQzJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjkyMiwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNTQ2LjY2NywgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC45MjIsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDU0Ni42NjcsIDAsIDAsIDEpOyB9XG4gIDcyLjYyJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjg2NCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNTI4LjgxNiwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC44NjQsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDUyOC44MTYsIDAsIDAsIDEpOyB9XG4gIDc0LjQlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuODM5LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA1MTAuMzEzLCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjgzOSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNTEwLjMxMywgMCwgMCwgMSk7IH1cbiAgNzYuNTklIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuODMyLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA0OTguODI2LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjgzMiwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNDk4LjgyNiwgMCwgMCwgMSk7IH1cbiAgNzguMzclIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuODM0LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA0OTYuODg1LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjgzNCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNDk2Ljg4NSwgMCwgMCwgMSk7IH1cbiAgODQuNTIlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuODQsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDUwMC4wNzgsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuODQsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDUwMC4wNzgsIDAsIDAsIDEpOyB9XG4gIDg2LjMxJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjgzOSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNTAwLjIwOCwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC44MzksIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDUwMC4yMDgsIDAsIDAsIDEpOyB9XG4gIDkyLjQ5JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjgzOSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNDk5Ljk5NCwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC44MzksIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDQ5OS45OTQsIDAsIDAsIDEpOyB9XG4gIDk0LjI4JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjgzOSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNDk5Ljk4NiwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC44MzksIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDQ5OS45ODYsIDAsIDAsIDEpOyB9XG4gIDk4LjIxJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjgzOSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNDk5Ljk5NywgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC44MzksIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDQ5OS45OTcsIDAsIDAsIDEpOyB9XG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC44MzksIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDUwMCwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC44MzksIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDUwMCwgMCwgMCwgMSk7IH0gXG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0aW9uIHsgXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC01MDAsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC01MDAsIDAsIDAsIDEpOyB9XG4gIDEuMTQlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuNjIxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMjgyLjcyOCwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC42MjEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0yODIuNzI4LCAwLCAwLCAxKTsgfVxuICAyLjI5JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjgyOSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTE0OS4zMDksIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuODI5LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMTQ5LjMwOSwgMCwgMCwgMSk7IH1cbiAgMy40MyUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC42OTUsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC03Mi40ODQsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuNjk1LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtNzIuNDg0LCAwLCAwLCAxKTsgfVxuICA0LjU0JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjQ3NywgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTMxLjk5NywgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC40NzcsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0zMS45OTcsIDAsIDAsIDEpOyB9XG4gIDQuNTglIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuNDcsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0zMS4wNzksIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuNDcsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0zMS4wNzksIDAsIDAsIDEpOyB9XG4gIDYuNzYlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuMTQ2LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMS43NjYsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuMTQ2LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMS43NjYsIDAsIDAsIDEpOyB9XG4gIDYuODYlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuMTM1LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMS4yMTQsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuMTM1LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMS4yMTQsIDAsIDAsIDEpOyB9XG4gIDkuMDElIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIC0wLjAwMywgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMi44OCwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgLTAuMDAzLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAyLjg4LCAwLCAwLCAxKTsgfVxuICA5LjE1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAtMC4wMDcsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDIuODg2LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAtMC4wMDcsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDIuODg2LCAwLCAwLCAxKTsgfVxuICAxMS4yMyUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgLTAuMDMzLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxLjk5LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAtMC4wMzMsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDEuOTksIDAsIDAsIDEpOyB9XG4gIDIwLjE2JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjAwMiwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMC4wMSwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC4wMDIsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAuMDEsIDAsIDAsIDEpOyB9XG4gIDIzLjQ1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjAwMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTAuMDAzLCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjAwMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTAuMDAzLCAwLCAwLCAxKTsgfVxuICAyOC40NyUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTAuMDAxLCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMC4wMDEsIDAsIDAsIDEpOyB9XG4gIDI4LjU3JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMC4wMDEsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0wLjAwMSwgMCwgMCwgMSk7IH1cbiAgMjkuMSUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTcuOTkyLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtNy45OTIsIDAsIDEpOyB9XG4gIDI5Ljg2JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLjAwMSwgLTE1LjMxMiwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMC4wMDEsIC0xNS4zMTIsIDAsIDEpOyB9XG4gIDMxLjE1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLjAwMSwgLTE5LjI3NSwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMC4wMDEsIC0xOS4yNzUsIDAsIDEpOyB9XG4gIDMyLjc1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtMTUuNjA2LCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtMTUuNjA2LCAwLCAxKTsgfVxuICAzNC4zMyUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTkuMTExLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtOS4xMTEsIDAsIDEpOyB9XG4gIDM1LjcxJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtNC4wNTgsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIC00LjA1OCwgMCwgMSk7IH1cbiAgMzUuOTQlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIC0zLjM5NSwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTMuMzk1LCAwLCAxKTsgfVxuICAzNy41MSUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTAuMDEzLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtMC4wMTMsIDAsIDEpOyB9XG4gIDQwLjA4JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtMS42MjIsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIC0xLjYyMiwgMCwgMSk7IH1cbiAgNDYuNDUlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIC0wLjAwMiwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTAuMDAyLCAwLCAxKTsgfVxuICA0OS4wMiUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTAuMTM3LCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtMC4xMzcsIDAsIDEpOyB9XG4gIDU1LjM4JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTsgfVxuICA1Ny45NiUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTAuMDExLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtMC4wMTEsIDAsIDEpOyB9XG4gIDYyLjQlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIC0wLjAwMywgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgLTAuMDAzLCAwLCAxKTsgfVxuICA2Mi41JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAtMC4wMDIsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIC0wLjAwMiwgMCwgMSk7IH1cbiAgNjQuMDQlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuMzc1LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjM3NSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7IH1cbiAgNjQuMTklIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuNDEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuNDEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpOyB9XG4gIDY0LjI5JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjQzNCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC40MzQsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpOyB9XG4gIDY0LjI5JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjQzNCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC40MzQsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpOyB9XG4gIDY1LjU3JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjcwNCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMjE4Ljg1MiwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC43MDQsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDIxOC44NTIsIDAsIDAsIDEpOyB9XG4gIDY1LjgyJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjc0NywgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMjU3LjEzNSwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC43NDcsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDI1Ny4xMzUsIDAsIDAsIDEpOyB9XG4gIDY3LjExJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjkwMywgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNDE2LjY3NiwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC45MDMsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDQxNi42NzYsIDAsIDAsIDEpOyB9XG4gIDY3LjM2JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjkyMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNDM5LjI5MywgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC45MjEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDQzOS4yOTMsIDAsIDAsIDEpOyB9XG4gIDY4LjY1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjk1NywgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNTE3LjU4MywgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC45NTcsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDUxNy41ODMsIDAsIDAsIDEpOyB9XG4gIDY4LjklIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuOTU2LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA1MjYuMTM4LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjk1NiwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNTI2LjEzOCwgMCwgMCwgMSk7IH1cbiAgNzAuNDMlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuOTIyLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA1NDYuNjY3LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjkyMiwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNTQ2LjY2NywgMCwgMCwgMSk7IH1cbiAgNzIuNjIlIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuODY0LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA1MjguODE2LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjg2NCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNTI4LjgxNiwgMCwgMCwgMSk7IH1cbiAgNzQuNCUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC44MzksIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDUxMC4zMTMsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuODM5LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA1MTAuMzEzLCAwLCAwLCAxKTsgfVxuICA3Ni41OSUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC44MzIsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDQ5OC44MjYsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuODMyLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA0OTguODI2LCAwLCAwLCAxKTsgfVxuICA3OC4zNyUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC44MzQsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDQ5Ni44ODUsIDAsIDAsIDEpOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuODM0LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA0OTYuODg1LCAwLCAwLCAxKTsgfVxuICA4NC41MiUgeyAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC44NCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNTAwLjA3OCwgMCwgMCwgMSk7IHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMC44NCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNTAwLjA3OCwgMCwgMCwgMSk7IH1cbiAgODYuMzElIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuODM5LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA1MDAuMjA4LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjgzOSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNTAwLjIwOCwgMCwgMCwgMSk7IH1cbiAgOTIuNDklIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuODM5LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA0OTkuOTk0LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjgzOSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNDk5Ljk5NCwgMCwgMCwgMSk7IH1cbiAgOTQuMjglIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuODM5LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA0OTkuOTg2LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjgzOSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNDk5Ljk4NiwgMCwgMCwgMSk7IH1cbiAgOTguMjElIHsgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAuODM5LCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA0OTkuOTk3LCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjgzOSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNDk5Ljk5NywgMCwgMCwgMSk7IH1cbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjgzOSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNTAwLCAwLCAwLCAxKTsgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLjgzOSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNTAwLCAwLCAwLCAxKTsgfSBcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_coingecko_consumer_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/coingecko-consumer-service.service */
      "./src/app/services/coingecko-consumer-service.service.ts");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(navCtrl, coinProvider, route, router) {
          var _this = this;

          _classCallCheck(this, HomePage);

          this.navCtrl = navCtrl;
          this.coinProvider = coinProvider;
          this.route = route;
          this.router = router;
          this.selectedCrypto = 'bitcoin';
          this.fiats = ['USD', 'EUR', 'GBP', 'JPY'];
          this.selectedFiat = 'USD';
          this.cryptos = ['bitcoin', 'ethereum', 'ripple', 'litecoin'];
          this.splash = true; // console.log("testy " + this.navParams.get('crypto') ); 

          this.route.queryParams.subscribe(function (params) {
            if (params && params.special) {
              _this.selectedCrypto = JSON.parse(params.special);

              _this.changeFiat();

              _this.sideMenu = document.querySelector('ion-menu');
              _this.sideMenu.style.visibility = 'hidden';
            }
          });
          console.log("crypto --> " + this.selectedCrypto);
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.sideMenu = document.querySelector('ion-menu');
                      this.sideMenu.style.visibility = 'hidden';
                      setTimeout(function () {
                        _this2.sideMenu.style.visibility = 'visible';
                        _this2.splash = false;
                      }, 4000);
                      console.log('bit', this.bitcoin$);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "callService",
          value: function callService() {
            return this.coinProvider.getCoinInfos(this.selectedFiat, this.cryptos).toPromise();
          }
        }, {
          key: "callChartService",
          value: function callChartService() {
            var currentDate = new Date();
            var yesterdayDate = new Date();
            yesterdayDate.setDate(yesterdayDate.getDate() - 1);
            return this.coinProvider.getMarketChartRange(this.selectedFiat, this.selectedCrypto, this.toTimestamp(yesterdayDate), this.toTimestamp(currentDate)).toPromise();
          }
        }, {
          key: "toTimestamp",
          value: function toTimestamp(strDate) {
            var datum = Date.parse(strDate);
            return (datum / 1000).toString();
          }
        }, {
          key: "changeFiat",
          value: function changeFiat() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var d;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.callService();

                    case 2:
                      d = _context2.sent;
                      console.log("changeFiat --> " + d);
                      this.bitcoins$ = d;
                      this.bitcoin$ = d.find(function (a) {
                        return a.id == _this3.selectedCrypto;
                      });
                      _context2.next = 8;
                      return this.callChartService();

                    case 8:
                      this.bitcoin$.chart = _context2.sent;

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _services_coingecko_consumer_service_service__WEBPACK_IMPORTED_MODULE_4__["CoingeckoConsumerServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map