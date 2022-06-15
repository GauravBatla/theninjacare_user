"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_shared-form-modal_shared-form-modal_module_ts"],{

/***/ 28369:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/shared-form-modal/shared-form-modal-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedFormModalPageRoutingModule": () => (/* binding */ SharedFormModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_form_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-form-modal.page */ 72818);




const routes = [
    {
        path: '',
        component: _shared_form_modal_page__WEBPACK_IMPORTED_MODULE_0__.SharedFormModalPage
    }
];
let SharedFormModalPageRoutingModule = class SharedFormModalPageRoutingModule {
};
SharedFormModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SharedFormModalPageRoutingModule);



/***/ }),

/***/ 87941:
/*!*********************************************************************!*\
  !*** ./src/app/pages/shared-form-modal/shared-form-modal.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedFormModalPageModule": () => (/* binding */ SharedFormModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _shared_form_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-form-modal-routing.module */ 28369);
/* harmony import */ var _shared_form_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-form-modal.page */ 72818);







let SharedFormModalPageModule = class SharedFormModalPageModule {
};
SharedFormModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _shared_form_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.SharedFormModalPageRoutingModule
        ],
        declarations: [_shared_form_modal_page__WEBPACK_IMPORTED_MODULE_1__.SharedFormModalPage]
    })
], SharedFormModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_shared-form-modal_shared-form-modal_module_ts.js.map