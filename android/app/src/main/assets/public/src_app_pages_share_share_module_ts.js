"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_share_share_module_ts"],{

/***/ 7418:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 65114:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Share": () => (/* binding */ Share)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 7418);

const Share = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Share', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_share_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 92591)).then(m => new m.ShareWeb()),
});




/***/ }),

/***/ 76100:
/*!*****************************************************!*\
  !*** ./src/app/pages/share/share-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharePageRoutingModule": () => (/* binding */ SharePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _share_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share.page */ 45881);




const routes = [
    {
        path: '',
        component: _share_page__WEBPACK_IMPORTED_MODULE_0__.SharePage
    }
];
let SharePageRoutingModule = class SharePageRoutingModule {
};
SharePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SharePageRoutingModule);



/***/ }),

/***/ 96565:
/*!*********************************************!*\
  !*** ./src/app/pages/share/share.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharePageModule": () => (/* binding */ SharePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _share_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share-routing.module */ 76100);
/* harmony import */ var _share_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share.page */ 45881);







let SharePageModule = class SharePageModule {
};
SharePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _share_routing_module__WEBPACK_IMPORTED_MODULE_0__.SharePageRoutingModule
        ],
        declarations: [_share_page__WEBPACK_IMPORTED_MODULE_1__.SharePage]
    })
], SharePageModule);



/***/ }),

/***/ 45881:
/*!*******************************************!*\
  !*** ./src/app/pages/share/share.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharePage": () => (/* binding */ SharePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_share_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./share.page.html */ 47800);
/* harmony import */ var _share_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share.page.scss */ 39293);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common.service */ 97197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/share */ 65114);






let SharePage = class SharePage {
    constructor(commonService) {
        this.commonService = commonService;
    }
    ngOnInit() {
        this.refer_code = this.commonService.user.value.user.refer_code;
    }
    share() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_share__WEBPACK_IMPORTED_MODULE_3__.Share.share({
                title: 'See cool stuff',
                text: 'Really awesome thing you need to see right meow',
                url: 'http://ionicframework.com/',
                dialogTitle: 'Share with buddies',
            });
        });
    }
};
SharePage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
SharePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-share',
        template: _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_share_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_share_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SharePage);



/***/ }),

/***/ 47800:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/share/share.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\r\n  <ion-toolbar style=\"--background: transparent;\">\r\n    <ion-title>share</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size-xl=\"6\" offset-xl=\"3\">\r\n        <div class=\"top-header ion-text-center\">\r\n          <div class=\"logo\">\r\n            <img src=\"/assets/images/share-1.png\" class=\"centerIMG\" />\r\n          </div>\r\n          <h1 style=\"font-size: 32px;\">The Ninja Care</h1>\r\n          <p style=\"font-size: 22px; color: var(--ion-color-primary);\">Share the app and invite to unlock great rewards.</p>\r\n          <h1 class=\"refer-code\">{{refer_code}}</h1>\r\n          <ion-row>\r\n            <ion-col class=\"ion-margin-top\">\r\n              <ion-button expand=\"block\" color=\"secondary\" (click)=\"share()\">\r\n                Share to friends\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 39293:
/*!*********************************************!*\
  !*** ./src/app/pages/share/share.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.centerIMG {\n  width: 55%;\n  margin-bottom: 5%;\n}\n\n.refer-code {\n  background: var(--ion-color-light-tint);\n  padding: 4%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoic2hhcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jZW50ZXJJTUcge1xyXG4gIHdpZHRoOiA1NSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5yZWZlci1jb2RlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XHJcbiAgcGFkZGluZzogNCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_share_share_module_ts.js.map