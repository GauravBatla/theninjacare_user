"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_recommended-list_recommended-list_module_ts"],{

/***/ 53860:
/*!***************************************************************************!*\
  !*** ./src/app/pages/recommended-list/recommended-list-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecommendedListPageRoutingModule": () => (/* binding */ RecommendedListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _recommended_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recommended-list.page */ 4420);




const routes = [
    {
        path: '',
        component: _recommended_list_page__WEBPACK_IMPORTED_MODULE_0__.RecommendedListPage
    }
];
let RecommendedListPageRoutingModule = class RecommendedListPageRoutingModule {
};
RecommendedListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecommendedListPageRoutingModule);



/***/ }),

/***/ 75905:
/*!*******************************************************************!*\
  !*** ./src/app/pages/recommended-list/recommended-list.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecommendedListPageModule": () => (/* binding */ RecommendedListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _recommended_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recommended-list-routing.module */ 53860);
/* harmony import */ var _recommended_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recommended-list.page */ 4420);







let RecommendedListPageModule = class RecommendedListPageModule {
};
RecommendedListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recommended_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecommendedListPageRoutingModule
        ],
        declarations: [_recommended_list_page__WEBPACK_IMPORTED_MODULE_1__.RecommendedListPage]
    })
], RecommendedListPageModule);



/***/ }),

/***/ 4420:
/*!*****************************************************************!*\
  !*** ./src/app/pages/recommended-list/recommended-list.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecommendedListPage": () => (/* binding */ RecommendedListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_recommended_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./recommended-list.page.html */ 80770);
/* harmony import */ var _recommended_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recommended-list.page.scss */ 42723);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common.service */ 97197);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 67118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/error-handler/alert-type.enum */ 78747);







let RecommendedListPage = class RecommendedListPage {
    constructor(api, commonService) {
        this.api = api;
        this.commonService = commonService;
        this.recommendationList = [];
    }
    ngOnInit() {
        this.url = "https://www.theninjacare.com/";
        this.getRecommendedList();
    }
    getRecommendedList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.commonService.showLoader();
            this.api.getRecommendations(60).then((data) => {
                console.log(data);
                if (data.status == 200) {
                    this.recommendationList = data.data;
                }
            }).catch(err => {
                this.commonService.showAlert(src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__.AlertTypeEnum.Error, err.message);
            });
        });
    }
};
RecommendedListPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
RecommendedListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-recommended-list',
        template: _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_recommended_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_recommended_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecommendedListPage);



/***/ }),

/***/ 80770:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/recommended-list/recommended-list.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar style=\"--background: transparent;\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\" defaultHref=\"/tabs\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Recommended List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size-xl=\"6\" offset-xl=\"3\">\r\n        <ion-list>\r\n          <ion-list>\r\n            <ion-card *ngFor=\"let recommend of recommendationList\">\r\n              <ion-card-content>\r\n                <img [src]=\"url+recommend.working_partner.profile_image\" width=\"150px\" height=\"150px\" />\r\n                <div>\r\n                  <ion-item lines=\"none\">\r\n                    <img slot=\"start\" src=\"/assets/images/star.svg\" width=\"22px\" />\r\n                    <ion-label class=\"label-css\">Avg Rating: </ion-label>\r\n                    <ion-badge slot=\"end\"><strong>{{recommend.working_partner.working_partner_average_ratings_count}}</strong></ion-badge>\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label style=\"white-space: break-spaces;\" color=\"primary\">{{recommend.working_partner?.category_id}}</ion-label>\r\n                  </ion-item>\r\n                  <p class=\"ion-padding-start\">By {{recommend.name}}</p>\r\n                </div>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-list>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 42723:
/*!*******************************************************************!*\
  !*** ./src/app/pages/recommended-list/recommended-list.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  margin: 2px 2px 12px 2px;\n  border-radius: 2px;\n}\nion-card ion-card-content {\n  padding: 0px !important;\n  display: flex;\n  flex-direction: row;\n}\nion-card ion-card-content .label-css {\n  font-size: 20px;\n  margin-bottom: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZGVkLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFDTiIsImZpbGUiOiJyZWNvbW1lbmRlZC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICBtYXJnaW46IDJweCAycHggMTJweCAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG5cclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgLmxhYmVsLWNzcyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recommended-list_recommended-list_module_ts.js.map