"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_confirm-details_date-time-modal_date-time-modal_module_ts"],{

/***/ 50942:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/confirm-details/date-time-modal/date-time-modal-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTimeModalPageRoutingModule": () => (/* binding */ DateTimeModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _date_time_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-time-modal.page */ 41678);




const routes = [
    {
        path: '',
        component: _date_time_modal_page__WEBPACK_IMPORTED_MODULE_0__.DateTimeModalPage
    }
];
let DateTimeModalPageRoutingModule = class DateTimeModalPageRoutingModule {
};
DateTimeModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DateTimeModalPageRoutingModule);



/***/ }),

/***/ 91876:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/confirm-details/date-time-modal/date-time-modal.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTimeModalPageModule": () => (/* binding */ DateTimeModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _date_time_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-time-modal-routing.module */ 50942);
/* harmony import */ var _date_time_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time-modal.page */ 41678);







let DateTimeModalPageModule = class DateTimeModalPageModule {
};
DateTimeModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _date_time_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.DateTimeModalPageRoutingModule
        ],
        declarations: [_date_time_modal_page__WEBPACK_IMPORTED_MODULE_1__.DateTimeModalPage]
    })
], DateTimeModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_confirm-details_date-time-modal_date-time-modal_module_ts.js.map