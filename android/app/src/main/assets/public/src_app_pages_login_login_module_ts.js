"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 16215:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 59004);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 82371:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 16215);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 59004);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 59004:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 57230);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 80863);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api.service */ 67118);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/common.service */ 97197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/error-handler/alert-type.enum */ 78747);








let LoginPage = class LoginPage {
    constructor(commonService, navCtrl, api) {
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.api = api;
        this.nameCheck = false;
        this.mobileCheck = false;
        this.country_code = '+91';
    }
    ngOnInit() {
        this.otpdiv = false;
    }
    blurName(event) {
        // console.log(event);
        if (event.target.value.length > 3) {
            this.nameCheck = true;
        }
        else {
            this.nameCheck = false;
        }
    }
    blurMobile(event) {
        // console.log(event);
        if (event.target.value.length == 10) {
            this.mobileCheck = true;
        }
        else {
            this.mobileCheck = false;
        }
    }
    onNext() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.commonService.showLoader();
            this.api.login({ role_id: 4, name: this.name, mobile: this.mobile }).then((data) => {
                console.log(data);
                if (data.status == 200) {
                    this.otpdiv = true;
                }
            }).catch(err => {
                this.commonService.showAlert(_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__.AlertTypeEnum.Error, err.message);
            });
            // this.otpdiv = true;
        });
    }
    onResendOTP() {
        this.onNext();
    }
    otpController(event, next, prev) {
        if (event.target.value.length < 1 && prev) {
            prev.setFocus();
        }
        else if (next && event.target.value.length > 0) {
            next.setFocus();
        }
        else {
            return 0;
        }
    }
    OTPVerify() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let otpPin = `${this.opt1}${this.opt2}${this.opt3}${this.opt4}`;
            console.log('->', otpPin);
            this.commonService.showLoader();
            this.api.verify_otp({ role_id: 4, mobile: this.mobile, otp: otpPin }).then((data) => {
                console.log(data);
                setTimeout(() => {
                    this.navCtrl.navigateRoot('/tabs');
                }, 200);
            }).catch(err => {
                this.commonService.showAlert(_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__.AlertTypeEnum.Error, err.message);
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 57230:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/login/login.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\r\n  <ion-toolbar style=\"--background: transparent;\">\r\n    <ion-title>login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div class=\"top-header\">\r\n    <div *ngIf=\"!otpdiv\">\r\n      <div class=\"logo\">\r\n        <img src=\"/assets/images/login-image.svg\" class=\"centerIMG\" />\r\n      </div>\r\n      <p style=\"font-size: 25px;\" class=\"para-text ion-text-center\">Sign In <span>with mobile no.</span></p>\r\n      <ion-label class=\"ion-padding-left\">Name</ion-label>\r\n      <ion-item class=\"input ion-margin-vertical\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Enter your name\" [(ngModel)]=\"name\" (ionBlur)=\"blurName($event)\"></ion-input>\r\n        <ion-icon name=\"checkmark-circle\" color=\"success\" *ngIf=\"nameCheck\"></ion-icon>\r\n      </ion-item>\r\n      <ion-label class=\"ion-padding-left\">Mobile No.</ion-label>\r\n      <ion-item class=\"input ion-margin-vertical\" lines=\"none\" style=\"--padding-start: 0px !important;\">\r\n        <div class=\"country-code\">{{country_code}}</div>\r\n        <ion-input type=\"tel\" placeholder=\"Enter your mobile no.\" minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"mobile\" (ionInput)=\"blurMobile($event)\" style=\"--padding-start: 5px !important;\"></ion-input>\r\n        <ion-icon name=\"checkmark-circle\" color=\"success\" *ngIf=\"mobileCheck\"></ion-icon>\r\n      </ion-item>\r\n      <ion-row>\r\n        <ion-col class=\"ion-margin-top ion-no-padding\">\r\n          <ion-button expand=\"block\" (click)=\"onNext()\" [disabled]=\"!mobileCheck\" shape=\"round\" color=\"secondary-primary\">Next</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <!-- <ion-row>\r\n        <ion-col class=\"ion-text-center ion-margin-top\">\r\n          <p class=\"extra-text\">Don't have an account? <span routerLink=\"/register\"><u>Register Here</u></span></p>\r\n        </ion-col>\r\n      </ion-row> -->\r\n    </div>\r\n\r\n    <div *ngIf=\"otpdiv\">\r\n      <div class=\"logo\">\r\n        <img src=\"/assets/images/otp-image.svg\" class=\"centerIMG\" />\r\n      </div>\r\n      <h4 class=\"header-otp\">We have sent an OTP to your Mobile</h4>\r\n      <h5 class=\"header-otp-label\">Please check your entered mobile no.</h5>\r\n      <ion-row text-center>\r\n        <ion-col class=\"ion-text-center\" style=\"font-size: 28px;\">\r\n          <ion-input class=\"otp-input\" #otp1 required maxLength=\"1\" (keyup)=\"otpController($event,otp2,'')\" [(ngModel)]=\"opt1\" type=\"tel\">\r\n          </ion-input>\r\n          <ion-input class=\"otp-input\" #otp2 required maxLength=\"1\" (keyup)=\"otpController($event,otp3,otp1)\" [(ngModel)]=\"opt2\" type=\"tel\">\r\n          </ion-input>\r\n          <ion-input class=\"otp-input\" #otp3 required maxLength=\"1\" (keyup)=\"otpController($event,otp4,otp2)\" [(ngModel)]=\"opt3\" type=\"tel\">\r\n          </ion-input>\r\n          <ion-input class=\"otp-input\" #otp4  required maxLength=\"1\" (keyup)=\"otpController($event,otp5,otp3)\" [(ngModel)]=\"opt4\" type=\"tel\">\r\n          </ion-input>\r\n          <ion-input class=\"otp-input\" #otp5  required maxLength=\"1\" (keyup)=\"otpController($event,'',otp4)\" style=\"display: none;\" type=\"tel\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-button type=\"submit\" expand=\"block\" (click)=\"OTPVerify()\" shape=\"round\" color=\"secondary-primary\">Verify</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\" (click)=\"onResendOTP()\">\r\n          <p class=\"extra-text\">Didn't Receive? <span>Resend OTP</span></p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center ion-margin-top\">\r\n          <p class=\"extra-text\">Back to <span (click)=\"otpdiv = false\"><u>Login</u></span></p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 80863:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.centerIMG {\n  width: 55%;\n  margin-bottom: 5%;\n}\n\n.header-otp {\n  color: #4a4b4d;\n  font-size: 25px;\n  text-align: center;\n}\n\n.header-otp-label {\n  color: #7c7d7e;\n  font-size: 14px;\n  text-align: center;\n}\n\n.otp-input {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  margin: 12px;\n  border-radius: 25%;\n  --background: var(--ion-color-light);\n  --padding-start: 10px;\n  text-align: center;\n}\n\n.country-code {\n  background: var(--ion-color-primary);\n  color: var(--ion-color-light);\n  font-size: 17px;\n  font-weight: 600;\n  padding: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2VudGVySU1HIHtcclxuICB3aWR0aDogNTUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uaGVhZGVyLW90cCB7XHJcbiAgY29sb3I6ICM0YTRiNGQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1vdHAtbGFiZWwge1xyXG4gIGNvbG9yOiAjN2M3ZDdlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vdHAtaW5wdXQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvdW50cnktY29kZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDQlO1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map