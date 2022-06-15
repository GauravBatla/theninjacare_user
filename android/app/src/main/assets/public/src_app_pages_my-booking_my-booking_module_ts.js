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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 67118);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ 97197);
/* harmony import */ var src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/error-handler/alert-type.enum */ 78747);








let MyBookingPage = class MyBookingPage {
    constructor(_apiService, commonService, alertCtrl) {
        this._apiService = _apiService;
        this.commonService = commonService;
        this.alertCtrl = alertCtrl;
        this.upcomingBookingList = [];
        this.cancelledBookingList = [];
        this.completedBookingList = [];
        this.selectedSegment = 'upcoming';
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.getBooking();
    }
    segmentChange(event) {
        // console.log(event.detail.value);
        this.selectedSegment = event.detail.value;
    }
    getBooking() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this._apiService.getMyBookings().then((data) => {
                console.log(data);
                if (data.status == 200) {
                    this.upcomingBookingList = data.data.Booked;
                    this.cancelledBookingList = data.data.Cancelled;
                    this.completedBookingList = data.data.Completed;
                }
            }).catch(err => {
                this.commonService.showAlert(src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__.AlertTypeEnum.Error, err.message);
            });
        });
    }
    onCancelBooking(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.commonService.showLoader();
            this._apiService.cancelBooking(id).then((data) => {
                console.log(data);
                if (data.status == 200) {
                    this.commonService.showToast(data.msg);
                    this.getBooking();
                }
            }).catch(err => {
                this.commonService.showAlert(src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__.AlertTypeEnum.Error, err.message);
            });
        });
    }
    presentAlert(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Warning',
                message: 'Are you sure want to cancel?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            this.onCancelBooking(id);
                        }
                    },
                    {
                        text: 'No',
                        role: 'cancel'
                    }
                ]
            });
            alert.present();
        });
    }
};
MyBookingPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
MyBookingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar style=\"--background: transparent;\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"m1\">\r\n        <img src=\"/assets/images/menu.svg\" />\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"primary\">My Bookings</ion-title>\r\n    <ion-buttons slot=\"end\" color=\"primary\">\r\n      <ion-button routerLink=\"/notifications\">\r\n        <ion-icon name=\"notifications\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment (ionChange)=\"segmentChange($event)\" [value]=\"selectedSegment\" mode=\"md\">\r\n    <ion-segment-button value=\"upcoming\">\r\n      <ion-label [color]=\"selectedSegment == 'upcoming' ? 'secondary' : 'primary'\">Upcoming</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"past\">\r\n      <ion-label [color]=\"selectedSegment == 'past' ? 'secondary' : 'primary'\">Past</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"cancelled\">\r\n      <ion-label [color]=\"selectedSegment == 'cancelled' ? 'secondary' : 'primary'\">Cancelled</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size-xl=\"6\" offset-xl=\"3\">\r\n        <ion-list *ngIf=\"selectedSegment == 'upcoming' && upcomingBookingList.length\">\r\n          <ion-card *ngFor=\"let booking of upcomingBookingList\">\r\n            <ion-card-header [color]=\"booking.status == 'Booked' ? 'warning' : 'success'\">\r\n              <ion-card-subtitle>\r\n                <!-- {{booking.bookingdetails[0].category_name}}, {{booking.bookingdetails[1].category_name}}... <span class=\"ion-float-right\">{{ booking.booking_date_start | date}}</span> -->\r\n                Service <span *ngIf=\"booking.status == 'Confirmed'\">[{{booking.status}}]</span> <span class=\"ion-float-right\">{{booking.booking_date_start | date}}</span>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <div style=\"display: flex; flex-direction: row;\">\r\n                <img src=\"/assets/images/stock-image.svg\" style=\"padding: 2%;\" />\r\n                <div style=\"width: 100%;\">\r\n                  <ion-list>\r\n                    <ion-item lines=\"full\">\r\n                      <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\r\n                      <ion-label style=\"white-space: pre-wrap;\">{{booking.booking_date_start | date}} - {{booking.booking_date_end | date}}</ion-label> <!--| date: 'shortTime'-->\r\n                    </ion-item>\r\n                    <ion-item lines=\"full\">\r\n                      <ion-icon name=\"time\" slot=\"start\"></ion-icon>\r\n                      <ion-label>{{booking.start_time.toString().substr(0,5)}} - {{booking.end_time.toString().substr(0,5)}}</ion-label> <!--| date: 'shortTime'-->\r\n                    </ion-item>\r\n                    <ion-item lines=\"full\" *ngIf=\"booking.status == 'Confirmed'\">\r\n                      <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n                      <ion-label style=\"white-space: pre-wrap;\">{{booking.worker?.name}}</ion-label>\r\n                    </ion-item>\r\n                    <ion-item lines=\"full\">\r\n                      <ion-icon name=\"location\" slot=\"start\"></ion-icon>\r\n                      <ion-label style=\"white-space: pre-wrap;\">{{booking.location}}</ion-label>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </div>\r\n              </div>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-button (click)=\"onUpdateBooking()\" expand=\"block\" color=\"secondary-primary\" shape=\"round\">\r\n                    Update\r\n                  </ion-button>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-button (click)=\"presentAlert(booking.unique_id)\" expand=\"block\" color=\"primary\" shape=\"round\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-list>\r\n        \r\n        <ion-list *ngIf=\"selectedSegment == 'past' && completedBookingList.length\">\r\n          <ion-card *ngFor=\"let booking of completedBookingList\">\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-subtitle>\r\n                Cleaning Service <span class=\"ion-float-right\">{{'03-12-2022' | date}}</span>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <div style=\"display: flex; flex-direction: row;\">\r\n                <img src=\"/assets/images/stock-image.svg\" style=\"padding: 2%;\" />\r\n                <div style=\"width: 100%;\">\r\n                  <ion-list>\r\n                    <ion-item lines=\"full\">\r\n                      <ion-icon name=\"time\" slot=\"start\"></ion-icon>\r\n                      <ion-label>{{today | date: 'shortTime'}}</ion-label>\r\n                    </ion-item>\r\n                    <ion-item lines=\"full\">\r\n                      <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n                      <ion-label>{{'Rahul Raj'}}</ion-label>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </div>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-list>\r\n\r\n        <ion-list *ngIf=\"selectedSegment == 'cancelled' && cancelledBookingList.length\">\r\n          <ion-card *ngFor=\"let booking of cancelledBookingList\">\r\n            <ion-card-header color=\"danger\">\r\n              <ion-card-subtitle>\r\n                Service [Cancelled] <span class=\"ion-float-right\">{{booking.booking_date_start | date}}</span>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <div style=\"display: flex; flex-direction: row;\">\r\n                <img src=\"/assets/images/stock-image.svg\" style=\"padding: 2%;\" />\r\n                <div style=\"width: 100%;\">\r\n                  <ion-list>\r\n                    <ion-item lines=\"full\">\r\n                      <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\r\n                      <ion-label style=\"white-space: pre-wrap;\">{{booking.booking_date_start | date}} - {{booking.booking_date_end | date}}</ion-label> <!--| date: 'shortTime'-->\r\n                    </ion-item>\r\n                    <ion-item lines=\"full\">\r\n                      <ion-icon name=\"time\" slot=\"start\"></ion-icon>\r\n                      <ion-label>{{booking.start_time.toString().substr(0,5)}} - {{booking.end_time.toString().substr(0,5)}}</ion-label> <!--| date: 'shortTime'-->\r\n                    </ion-item>\r\n                    <ion-item lines=\"full\" *ngIf=\"booking.status == 'Confirmed'\">\r\n                      <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n                      <ion-label>{{booking.worker?.name}}</ion-label>\r\n                    </ion-item>\r\n                    <ion-item lines=\"full\">\r\n                      <ion-icon name=\"location\" slot=\"start\"></ion-icon>\r\n                      <ion-label style=\"white-space: pre-wrap;\">{{booking.location}}</ion-label>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </div>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-list>\r\n\r\n        <div *ngIf=\"(selectedSegment == 'past' && !completedBookingList.length) || (selectedSegment == 'upcoming' && !upcomingBookingList.length) || (selectedSegment == 'cancelled' && !cancelledBookingList.length)\">\r\n          <div class=\"empty-booking\">\r\n            <ion-icon name=\"calendar-clear\"></ion-icon>\r\n            <p>You dont have any bookings here!</p>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 45105:
/*!*******************************************************!*\
  !*** ./src/app/pages/my-booking/my-booking.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  margin: 2px 2px 12px 2px;\n}\nion-card ion-card-header {\n  padding: 3%;\n}\nion-card ion-card-content {\n  padding: 0px !important;\n}\nion-segment ion-segment-button {\n  margin: 5px;\n  --background: var(--ion-color-tertiary);\n  border-radius: 30px;\n  --background-checked: var(--ion-color-primary);\n  --indicator-height: 0px;\n  width: 33vw;\n}\n.empty-booking {\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--ion-color-light-shade);\n  margin-top: 20vh;\n}\n.empty-booking ion-icon {\n  font-size: 8rem;\n}\n.empty-booking p {\n  text-align: center;\n  font-size: 1.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWJvb2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtBQUNKO0FBRUU7RUFDRSx1QkFBQTtBQUFKO0FBS0U7RUFDRSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRko7QUFNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQUhGO0FBS0U7RUFDRSxlQUFBO0FBSEo7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFKSiIsImZpbGUiOiJteS1ib29raW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICBtYXJnaW46IDJweCAycHggMTJweCAycHg7XHJcblxyXG4gIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICB9XHJcblxyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tc2VnbWVudCB7XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiAzM3Z3O1xyXG4gIH1cclxufVxyXG5cclxuLmVtcHR5LWJvb2tpbmcge1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gIG1hcmdpbi10b3A6IDIwdmg7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogOHJlbTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-booking_my-booking_module_ts.js.map