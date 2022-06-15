"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_wallet_wallet_module_ts"],{

/***/ 96656:
/*!*******************************************************!*\
  !*** ./src/app/pages/wallet/wallet-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletPageRoutingModule": () => (/* binding */ WalletPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet.page */ 94278);




const routes = [
    {
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_0__.WalletPage
    }
];
let WalletPageRoutingModule = class WalletPageRoutingModule {
};
WalletPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WalletPageRoutingModule);



/***/ }),

/***/ 90106:
/*!***********************************************!*\
  !*** ./src/app/pages/wallet/wallet.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletPageModule": () => (/* binding */ WalletPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet-routing.module */ 96656);
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet.page */ 94278);







let WalletPageModule = class WalletPageModule {
};
WalletPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__.WalletPageRoutingModule
        ],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_1__.WalletPage]
    })
], WalletPageModule);



/***/ }),

/***/ 94278:
/*!*********************************************!*\
  !*** ./src/app/pages/wallet/wallet.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletPage": () => (/* binding */ WalletPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_wallet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./wallet.page.html */ 65242);
/* harmony import */ var _wallet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet.page.scss */ 14458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 97197);





let WalletPage = class WalletPage {
    constructor(commonService) {
        this.commonService = commonService;
    }
    ngOnInit() {
        this.commonService.user.subscribe((data) => {
            this.bal = data.user.wallet;
            // console.log(this.userData);
        });
    }
};
WalletPage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
WalletPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-wallet',
        template: _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_wallet_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_wallet_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WalletPage);



/***/ }),

/***/ 65242:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/wallet/wallet.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"/\" color=\"secondary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xl=\"6\" offset-xl=\"3\">\n        <div class=\"ion-text-center\">\n          <img src=\"/assets/images/payment-status.png\" width=\"337px\" />\n        </div>\n        <h1>Available Balance {{bal | currency:'INR'}}</h1>\n        <ion-list>\n          <ion-card button>\n            <ion-card-content>\n              <img src=\"http://www.downloadclipart.net/large/payment-download-png-image.png\" />\n              <h2 style=\"color: var(--ion-color-primary); font-size: 22px;\">Payment Status</h2>\n            </ion-card-content>\n          </ion-card>\n          <ion-card button>\n            <ion-card-content>\n              <img src=\"http://www.downloadclipart.net/large/payment-download-png-image.png\" />\n              <h2 style=\"color: var(--ion-color-primary); font-size: 22px;\">Request for Payment</h2>\n            </ion-card-content>\n          </ion-card>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ 14458:
/*!***********************************************!*\
  !*** ./src/app/pages/wallet/wallet.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  box-shadow: none;\n  margin: 4% 1%;\n  background: var(--ion-color-tertiary);\n  border-radius: 20px;\n}\nion-card ion-card-content {\n  padding: 4%;\n  align-items: center;\n  display: flex;\n}\nion-card ion-card-content img {\n  width: 33vw;\n  padding-right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDUjtBQUNRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBQ1oiLCJmaWxlIjoid2FsbGV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW46IDQlIDElO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogNCU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMzN2dztcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_wallet_wallet_module_ts.js.map