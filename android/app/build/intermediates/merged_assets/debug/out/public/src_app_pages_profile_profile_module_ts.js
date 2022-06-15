"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 20559:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource),
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    /**
     * Prompts the user to select either the photo album or take a photo.
     */
    CameraSource["Prompt"] = "PROMPT";
    /**
     * Take a new photo using the camera.
     */
    CameraSource["Camera"] = "CAMERA";
    /**
     * Pick an existing photo fron the gallery or photo album.
     */
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));


/***/ }),

/***/ 53201:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource),
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 20559);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 31482)).then(m => new m.CameraWeb()),
});




/***/ }),

/***/ 63104:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 66462);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 59029:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 63104);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 66462);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 66462:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.page.html */ 31654);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 74415);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api.service */ 67118);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/common.service */ 97197);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 53201);
/* harmony import */ var src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/error-handler/alert-type.enum */ 78747);









let ProfilePage = class ProfilePage {
    constructor(formBuilder, commonService, api) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.api = api;
        this.imageUrl = null;
        this.takePicture = () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Base64
            });
            console.log(image);
            this.imageUrl = `data:image/${image.format};base64,${image.base64String}`;
            if (this.imageUrl != null) {
                this.profileForm.patchValue({
                    'image': this.imageUrl
                });
            }
            // var imageUrl = image.webPath;
        });
    }
    ngOnInit() {
        this.userData = this.commonService.user.value.user;
        this._buildForm();
    }
    _buildForm() {
        this.profileForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.userData.name, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3)])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.userData.email, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.userData.mobile, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.userData.address, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.userData.profile_image, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([])),
        });
    }
    update() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.profileForm.value);
            this.commonService.showLoader();
            this.api.updateProfile(this.profileForm.value).then((data) => {
                console.log(data);
                if (data.status == 200) {
                    this.commonService.updateLocalUser(data.data);
                    // this.navCtrl.navigateRoot('/tabs');
                    this.commonService.showToast('Profile updated!');
                }
                else {
                    this.commonService.showAlert(src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_5__.AlertTypeEnum.Error, data.message);
                }
            }).catch(err => {
                // console.log('ERROR', err);
                this.commonService.showAlert(src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_5__.AlertTypeEnum.Error, err.message);
            });
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 31654:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/profile/profile.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar style=\"--background: transparent;\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"m1\">\r\n        <img src=\"/assets/images/menu.svg\" />\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"primary\">Profile</ion-title>\r\n    <ion-buttons slot=\"end\" color=\"primary\">\r\n      <ion-button routerLink=\"/notifications\">\r\n        <ion-icon name=\"notifications\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size-xl=\"6\" offset-xl=\"3\">\r\n        <div class=\"div-center\" (click)=\"takePicture()\">\r\n          <img src=\"/assets/images/user.png\" width=\"149px\" *ngIf=\"imageUrl == null\" />\r\n          <img [src]=\"imageUrl\" width=\"149px\" height=\"149px\" *ngIf=\"imageUrl != null\" style=\"border-radius: 50%;\" />\r\n          <h2><strong>Hi there, {{userData.name}}!</strong></h2>\r\n          <div style=\"position: absolute; left: 45vw; top: 14vh; font-size: 30px;\">\r\n            <ion-icon name=\"camera\" color=\"light\"></ion-icon>\r\n          </div>\r\n        </div>\r\n        <form [formGroup]=\"profileForm\" (ngSubmit)=\"update()\">\r\n          <ion-list>\r\n            <ion-label class=\"ion-padding-left label-css\">Name</ion-label>\r\n            <ion-item class=\"input ion-margin-vertical\" lines=\"none\">\r\n              <ion-label class=\"ion-padding-left\">Name</ion-label>\r\n              <ion-input formControlName=\"name\" type=\"text\" placeholder=\"Enter your name\"></ion-input>\r\n            </ion-item>\r\n            <ion-label class=\"ion-padding-left label-css\">Email</ion-label>\r\n            <ion-item class=\"input ion-margin-vertical\" lines=\"none\">\r\n              <ion-label class=\"ion-padding-left\">Email</ion-label>\r\n              <ion-input formControlName=\"email\" type=\"email\" placeholder=\"Enter your email\"></ion-input>\r\n            </ion-item>\r\n            <ion-label class=\"ion-padding-left label-css\">Phone Number</ion-label>\r\n            <ion-item class=\"input ion-margin-vertical\" lines=\"none\">\r\n              <ion-label class=\"ion-padding-left\">Phone Number</ion-label>\r\n              <ion-input formControlName=\"mobile\" type=\"tel\" placeholder=\"Enter your phone number\" minlength=\"10\" maxlength=\"10\"></ion-input>\r\n            </ion-item>\r\n            <ion-label class=\"ion-padding-left label-css\">Address</ion-label>\r\n            <ion-item class=\"input ion-margin-vertical\" lines=\"none\">\r\n              <ion-label class=\"ion-padding-left\">Address</ion-label>\r\n              <ion-textarea rows=\"3\" formControlName=\"address\" type=\"text\" placeholder=\"Enter your address\"></ion-textarea>\r\n            </ion-item>\r\n          </ion-list>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button type=\"submit\" expand=\"block\" shape=\"round\" color=\"secondary-primary\" [disabled]=\"!profileForm.valid\">\r\n                Update\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 74415:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".div-center {\n  text-align: center;\n  margin-bottom: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA4JTtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map