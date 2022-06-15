"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_my-booking_my-booking_module_ts"],{

/***/ 72566:
/*!***************************************************************!*\
  !*** ./src/app/pages/my-booking/my-booking-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyBookingPageRoutingModule": () => (/* binding */ MyBookingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _my_booking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-booking.page */ 60041);




const routes = [
    {
        path: '',
        component: _my_booking_page__WEBPACK_IMPORTED_MODULE_0__.MyBookingPage
    }
];
let MyBookingPageRoutingModule = class MyBookingPageRoutingModule {
};
MyBookingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyBookingPageRoutingModule);



/***/ }),

/***/ 87383:
/*!*******************************************************!*\
  !*** ./src/app/pages/my-booking/my-booking.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyBookingPageModule": () => (/* binding */ MyBookingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _my_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-booking-routing.module */ 72566);
/* harmony import */ var _my_booking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-booking.page */ 60041);







let MyBookingPageModule = class MyBookingPageModule {
};
MyBookingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyBookingPageRoutingModule
        ],
        declarations: [_my_booking_page__WEBPACK_IMPORTED_MODULE_1__.MyBookingPage]
    })
], MyBookingPageModule);



/***/ }),

/***/ 60041:
/*!*****************************************************!*\
  !*** ./src/app/pages/my-booking/my-booking.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyBookingPage": () => (/* binding */ MyBookingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_booking_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./my-booking.page.html */ 74957);
/* harmony import */ var _my_booking_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-booking.page.scss */ 45105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 67118);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ 97197);
/* harmony import */ var src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/error-handler/alert-type.enum */ 78747);







let MyBookingPage = class MyBookingPage {
    constructor(_apiService, commonService) {
        this._apiService = _apiService;
        this.commonService = commonService;
        this.selectedSegment = 'upcoming';
    }
    ngOnInit() {
        this.today = new Date();
        this.getBooking();
    }
    segmentChange(event) {
        // console.log(event.detail.value);
        this.selectedSegment = event.detail.value;
    }
    getBooking() {
        this._apiService.getMyBookings().then((data) => {
            console.log(data);
            if (data.status == 200) {
                //   this.categoryList = data.data;
                console.log(data, "booking");
            }
        }).catch(err => {
            this.commonService.showAlert(src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__.AlertTypeEnum.Error, err.message);
        });
        // this.api.getCategories().then((data: any) => {
        //   console.log(data);
        //   if (data.status == 200) {
        //     this.categoryList = data.data;
        //   }
        // }).catch(err => {
        //   this.commonService.showAlert(AlertTypeEnum.Error, err.message);
        // });
    }
};
MyBookingPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService }
];
MyBookingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-my-booking',
        template: _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_booking_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_booking_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyBookingPage);



/***/ }),

/***/ 74957:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/my-booking/my-booking.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar style=\"--background: transparent;\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"m1\">\r\n        <img src=\"/assets/images/menu.svg\" />\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"primary\">My Bookings</ion-title>\r\n    <ion-buttons slot=\"end\" color=\"primary\">\r\n      <ion-button routerLink=\"/notifications\">\r\n        <ion-icon name=\"notifications\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment (ionChange)=\"segmentChange($event)\" [value]=\"selectedSegment\" mode=\"md\">\r\n    <ion-segment-button value=\"upcoming\">\r\n      <ion-label [color]=\"selectedSegment == 'upcoming' ? 'secondary' : 'primary'\">Upcoming</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"past\">\r\n      <ion-label [color]=\"selectedSegment == 'past' ? 'secondary' : 'primary'\">Past</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size-xl=\"6\" offset-xl=\"3\">\r\n        <ion-list *ngIf=\"selectedSegment == 'upcoming'\">\r\n          <ion-card *ngFor=\"let i of [1,2,3,4]\">\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-subtitle>\r\n                Cleaning Service <span class=\"ion-float-right\">{{'04-12-2022' | date}}</span>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <div style=\"display: flex; flex-direction: row;\">\r\n                <img src=\"/assets/images/stock-image.svg\" style=\"padding: 2%;\" />\r\n                <div style=\"width: 100%;\">\r\n                  <ion-list>\r\n                    <ion-item lines=\"full\">\r\n                      <ion-icon name=\"time\" slot=\"start\"></ion-icon>\r\n                      <ion-label>{{today | date: 'shortTime'}}</ion-label>\r\n                    </ion-item>\r\n                    <ion-item lines=\"full\">\r\n                      <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n                      <ion-label>{{'Rahul Raj'}}</ion-label>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </div>\r\n              </div>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-button (click)=\"onClick()\" expand=\"block\" color=\"secondary-primary\" shape=\"round\" size=\"small\">\r\n                    Update\r\n                  </ion-button>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-button (click)=\"onClick()\" expand=\"block\" color=\"primary\" shape=\"round\" size=\"small\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-list>\r\n        \r\n        <ion-list *ngIf=\"selectedSegment == 'past'\">\r\n          <ion-card *ngFor=\"let i of [1,2,3,4]\">\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-subtitle>\r\n                Cleaning Service <span class=\"ion-float-right\">{{'03-12-2022' | date}}</span>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <div style=\"display: flex; flex-direction: row;\">\r\n                <img src=\"/assets/images/stock-image.svg\" style=\"padding: 2%;\" />\r\n                <div style=\"width: 100%;\">\r\n                  <ion-list>\r\n                    <ion-item lines=\"full\">\r\n                      <ion-icon name=\"time\" slot=\"start\"></ion-icon>\r\n                      <ion-label>{{today | date: 'shortTime'}}</ion-label>\r\n                    </ion-item>\r\n                    <ion-item lines=\"full\">\r\n                      <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n                      <ion-label>{{'Rahul Raj'}}</ion-label>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </div>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 45105:
/*!*******************************************************!*\
  !*** ./src/app/pages/my-booking/my-booking.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  margin: 2px 2px 12px 2px;\n}\nion-card ion-card-header {\n  padding: 3%;\n}\nion-card ion-card-content {\n  padding: 0px !important;\n}\nion-segment ion-segment-button {\n  margin: 5px;\n  --background: var(--ion-color-tertiary);\n  border-radius: 30px;\n  --background-checked: var(--ion-color-primary);\n  --indicator-height: 0px;\n  width: 50vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWJvb2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtBQUNKO0FBRUU7RUFDRSx1QkFBQTtBQUFKO0FBS0U7RUFDRSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRkoiLCJmaWxlIjoibXktYm9va2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgbWFyZ2luOiAycHggMnB4IDEycHggMnB4O1xyXG5cclxuICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLXNlZ21lbnQge1xyXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICB9XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-booking_my-booking_module_ts.js.map