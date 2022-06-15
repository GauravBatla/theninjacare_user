"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_select-service_select-service_module_ts"],{

/***/ 54724:
/*!***********************************************************************!*\
  !*** ./src/app/pages/select-service/select-service-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectServicePageRoutingModule": () => (/* binding */ SelectServicePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _select_service_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-service.page */ 50997);




const routes = [
    {
        path: '',
        component: _select_service_page__WEBPACK_IMPORTED_MODULE_0__.SelectServicePage
    }
];
let SelectServicePageRoutingModule = class SelectServicePageRoutingModule {
};
SelectServicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectServicePageRoutingModule);



/***/ }),

/***/ 58180:
/*!***************************************************************!*\
  !*** ./src/app/pages/select-service/select-service.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectServicePageModule": () => (/* binding */ SelectServicePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _select_service_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-service-routing.module */ 54724);
/* harmony import */ var _select_service_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-service.page */ 50997);







let SelectServicePageModule = class SelectServicePageModule {
};
SelectServicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _select_service_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectServicePageRoutingModule
        ],
        declarations: [_select_service_page__WEBPACK_IMPORTED_MODULE_1__.SelectServicePage]
    })
], SelectServicePageModule);



/***/ }),

/***/ 50997:
/*!*************************************************************!*\
  !*** ./src/app/pages/select-service/select-service.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectServicePage": () => (/* binding */ SelectServicePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_service_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./select-service.page.html */ 82778);
/* harmony import */ var _select_service_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-service.page.scss */ 92112);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 97197);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 67118);
/* harmony import */ var src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/error-handler/alert-type.enum */ 78747);








let SelectServicePage = class SelectServicePage {
    constructor(api, router, commonService) {
        this.api = api;
        this.router = router;
        this.commonService = commonService;
        this.arr = [1, 2, 3, 4, 5, 6, 7];
        this.select = {};
        this.arr1 = [];
    }
    ngOnInit() {
        this.getCategoryList();
    }
    segmentChanged(event) {
        console.log(event);
        const temp = event.detail.value;
        const a = temp.name;
        const tmp = a.toString();
        if (this.select[tmp]) {
            this.arr1 = this.arr1.filter((itam) => {
                return itam != tmp;
            });
            this.select[tmp] = false;
        }
        else {
            this.select[tmp] = true;
            this.arr1.push(tmp);
            console.log(this.select[tmp]);
        }
        console.log(this.arr1, "arr");
        this.arr.push(event.detail.value.index);
        if (this.select[tmp] === true) {
        }
        else {
            return;
        }
    }
    onConfirmDetails() {
        if (this.arr1.length) {
            this.commonService.setData(this.arr1);
            this.router.navigateByUrl('/confirm-details');
        }
        else {
            this.commonService.showToast('Please select any one service to continue.');
        }
    }
    getCategoryList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.commonService.showLoader();
            this.api.getCategories().then((data) => {
                console.log(data);
                if (data.status == 200) {
                    console.log(data);
                    this.categoryList = data.data;
                }
            }).catch(err => {
                this.commonService.showAlert(src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__.AlertTypeEnum.Error, err.message);
            });
        });
    }
};
SelectServicePage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
SelectServicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-select-service',
        template: _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_service_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_select_service_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectServicePage);



/***/ }),

/***/ 82778:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/select-service/select-service.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar style=\"--background: transparent;\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\" defaultHref=\"/tabs\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"primary\">Select Service</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon name=\"notifications\" color=\"primary\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1 style=\"color: var(--ion-color-primary); font-size: 32px; font-weight: bold;\" class=\"ion-padding-start\">Choose Service</h1>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size-xl=\"6\" offset-xl=\"3\" class=\"ion-no-padding\">\r\n        <ion-segment (ionChange)=\"segmentChanged($event)\" style=\"background: transparent;\">\r\n          <ion-segment-button [ngStyle]=\"{'background': select[category.name] == true ? 'var(--ion-color-primary)' : 'none'}\" [value]=\"{category: category.id, name :category.name, index: i}\" mode=\"md\" *ngFor=\"let category of categoryList; let i = index;\">\r\n            <ion-img src=\"https://www.theninjacare.com/{{category.image}}\" style=\"margin-top: 12%\"></ion-img>\r\n            <ion-label style=\"font-size: smaller; font-weight: 800;\" [ngStyle]=\"{'color': select[category.name] == true ? 'var(--ion-color-secondary)' : 'var(--ion-color-primary)'}\">{{category.name}}</ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n    <ion-fab-button color=\"secondary-primary\">\r\n      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button expand=\"block\" color=\"secondary-primary\" shape=\"round\" (click)=\"onConfirmDetails()\">\r\n    <strong>Next</strong>\r\n  </ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 92112:
/*!***************************************************************!*\
  !*** ./src/app/pages/select-service/select-service.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-segment {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  max-width: 100vw;\n  grid-gap: 5px;\n  gap: 5px;\n}\nion-segment ion-segment-button {\n  --background: var(--ion-color-tertiary);\n  --background-checked: var(--ion-color-secondary);\n  --color: var(--ion-color-primary);\n  --color-checked: var(--ion-color-light);\n  --indicator-height: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1zZXJ2aWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QUFKRjtBQU1FO0VBQ0UsdUNBQUE7RUFDQSxnREFBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSx1QkFBQTtBQUpKIiwiZmlsZSI6InNlbGVjdC1zZXJ2aWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jb2wtaGVpZ2h0IHtcclxuLy8gICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgXHJcbi8vIH1cclxuXHJcbmlvbi1zZWdtZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuICBnYXA6IDVweDtcclxuXHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIC0taW5kaWNhdG9yLWhlaWdodDogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIC5zZWxlY3Qge1xyXG4vLyAgIGRpc3BsYXk6IGdyaWQ7XHJcbi8vICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuLy8gICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4vLyAgIGdhcDogMXB4O1xyXG4vLyB9XHJcblxyXG4vLyAuc2VsZWN0X19pdGVtIHtcclxuLy8gICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICBmb250LWZhbWlseTogJ0hlZWJvJywgc2Fucy1zZXJpZjtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMyU7XHJcbi8vICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlKTtcclxuLy8gICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMXM7XHJcbi8vIH1cclxuXHJcbi8vIC5zZWxlY3RfX2l0ZW0tLXNlbGVjdGVkIHtcclxuLy8gICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuLy8gICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_select-service_select-service_module_ts.js.map