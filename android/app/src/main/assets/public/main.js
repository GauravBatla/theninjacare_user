(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 3036);




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 27926)).then(m => m.TabsPageModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 82371)).then(m => m.LoginPageModule)
    },
    {
        path: 'confirm-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_confirm-details_confirm-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/confirm-details/confirm-details.module */ 87771)).then(m => m.ConfirmDetailsPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notifications_notifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notifications/notifications.module */ 96011)).then(m => m.NotificationsPageModule)
    },
    {
        path: 'shared-form-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_shared-form-modal_shared-form-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/shared-form-modal/shared-form-modal.module */ 87941)).then(m => m.SharedFormModalPageModule)
    },
    {
        path: 'recommended-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_recommended-list_recommended-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/recommended-list/recommended-list.module */ 75905)).then(m => m.RecommendedListPageModule)
    },
    {
        path: 'wallet',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_wallet_wallet_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/wallet/wallet.module */ 90106)).then(m => m.WalletPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../environments/environment */ 18260);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/api.service */ 67118);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/common.service */ 97197);
/* harmony import */ var _pages_shared_form_modal_shared_form_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/shared-form-modal/shared-form-modal.page */ 72818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ 17897);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/browser */ 39337);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 53831);
/* harmony import */ var _services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/error-handler/alert-type.enum */ 78747);
/* harmony import */ var _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/email-composer/ngx */ 76097);















let AppComponent = class AppComponent {
    constructor(storage, platform, router, menuCtrl, modalCtrl, actionSheetCtrl, call, email, commonService, api, alertCtrl, navCtrl) {
        this.storage = storage;
        this.platform = platform;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.call = call;
        this.email = email;
        this.commonService = commonService;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.openCapacitorSite = (type) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (type == 'privacy')
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_6__.Browser.open({ url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseURL}privacy-policy/app/user`, presentationStyle: 'fullscreen' });
            else if (type == 'terms')
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_6__.Browser.open({ url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseURL}term-condition/app/user`, presentationStyle: 'fullscreen' });
            else if (type == 'about')
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_6__.Browser.open({ url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseURL}about/app/user`, presentationStyle: 'fullscreen' });
            else
                this.commonService.showAlert(_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_8__.AlertTypeEnum.Error, 'Something went wrong!');
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            this.platform.backButton.subscribeWithPriority(-1, () => {
                if (this.router.url === '/login' || this.router.url === '/tabs/home') {
                    navigator['app'].exitApp();
                }
            });
            this.getContactInfo();
        });
    }
    onMenuClose() {
        this.menuCtrl.close('m1');
    }
    openModal(flag) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _pages_shared_form_modal_shared_form_modal_page__WEBPACK_IMPORTED_MODULE_5__.SharedFormModalPage,
                componentProps: { type: flag },
                swipeToClose: true,
                mode: 'ios',
                presentingElement: this.routerOutlet.nativeEl
            });
            modal.present();
        });
    }
    getContactInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.api.contactInfo().then((data) => {
                console.log(data);
                if (data.status == 200) {
                    this.contactNumber = data.data.support_mobile;
                    this.contactEmail = data.data.support_email;
                }
            }).catch(err => {
                this.commonService.showAlert(_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_8__.AlertTypeEnum.Error, err.message);
            });
        });
    }
    onContact() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Contact',
                buttons: [
                    {
                        text: `${this.contactNumber}`,
                        icon: 'call',
                        handler: () => {
                            this.call.callNumber(`${this.contactNumber}`, true).then((data) => {
                                console.log('Dialer Launched: ', data);
                            }).catch(err => {
                                console.log('Error launching Dailer', err);
                                this.commonService.showAlert(_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_8__.AlertTypeEnum.Error, 'Something went wrong!');
                            });
                        }
                    },
                    {
                        text: `${this.contactEmail}`,
                        icon: 'mail',
                        handler: () => {
                            let email = {
                                to: `${this.contactEmail}`,
                                subject: 'Contact Query',
                                body: '',
                                isHtml: true
                            };
                            this.email.open(email);
                        }
                    },
                    {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        });
    }
    onLogout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.commonService.showLoader();
            this.api.logout().then((data) => {
                console.log(data);
                if (data.status == 200) {
                    this.commonService.showToast(data.message);
                    this.commonService.logout();
                    this.navCtrl.navigateRoot('/login');
                }
            });
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Warning',
                message: 'Are you sure want to logout?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            this.onLogout();
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
AppComponent.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController },
    { type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__.CallNumber },
    { type: _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_9__.EmailComposer },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController }
];
AppComponent.propDecorators = {
    routerOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRouterOutlet, { static: true },] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-root',
        template: _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mobiscroll/angular */ 24745);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _services_http_config_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/http.config.interceptor */ 60147);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage-angular */ 2688);
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ 8418);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 53831);
/* harmony import */ var _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/email-composer/ngx */ 76097);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 46506);

















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [
            _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_8__.MbscModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot({ mode: 'ios' }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__.IonicStorageModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy }, _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder, _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__.CallNumber, _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__.EmailComposer, { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS, useClass: _services_http_config_interceptor__WEBPACK_IMPORTED_MODULE_2__.HttpConfigInterceptor, multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3036:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/common.service */ 97197);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ 17897);





let AuthGuard = class AuthGuard {
    constructor(navCtrl, commonService, storage) {
        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.storage = storage;
        this.storage.create();
    }
    canActivate(route, state) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.get('user').then((user) => {
                // console.log(user);
                if (user) {
                    this.commonService.user.next(user);
                    resolve(true);
                }
                else {
                    console.log('User is not logged in');
                    this.navCtrl.navigateRoot('/login');
                    // resolve(false);
                }
            });
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__.Storage }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 55892:
/*!*************************************!*\
  !*** ./src/app/models/user/user.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(user, token) {
        this.user = user;
        this.token = token;
    }
}


/***/ }),

/***/ 72818:
/*!*******************************************************************!*\
  !*** ./src/app/pages/shared-form-modal/shared-form-modal.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedFormModalPage": () => (/* binding */ SharedFormModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_shared_form_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./shared-form-modal.page.html */ 28710);
/* harmony import */ var _shared_form_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-form-modal.page.scss */ 27593);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api.service */ 67118);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/common.service */ 97197);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/error-handler/alert-type.enum */ 78747);









let SharedFormModalPage = class SharedFormModalPage {
    constructor(modalCtrl, formBuilder, commonService, api) {
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.api = api;
    }
    ngOnInit() {
        this._buildForm();
    }
    _buildForm() {
        this.queryForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])),
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.type, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])),
        });
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.commonService.showLoader();
            this.api.queryForm(this.queryForm.value).then((data) => {
                console.log(data);
            }).catch(err => {
                this.commonService.showAlert(src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__.AlertTypeEnum.Error, err.message);
            });
        });
    }
    onDismiss() {
        this.modalCtrl.dismiss();
    }
};
SharedFormModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
SharedFormModalPage.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
SharedFormModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-shared-form-modal',
        template: _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_shared_form_modal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_shared_form_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SharedFormModalPage);



/***/ }),

/***/ 67118:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _models_user_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user/user */ 55892);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.service */ 97197);
/* harmony import */ var _error_handler_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handler/error.handler */ 65858);
/* harmony import */ var _error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handler/alert-type.enum */ 78747);
/* harmony import */ var _request_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-manager.service */ 28447);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ 17897);








let ApiService = class ApiService {
    constructor(storage, requestManager, commonService) {
        this.storage = storage;
        this.requestManager = requestManager;
        this.commonService = commonService;
        this.login = (formData) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.requestManager.post('login', formData).subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    console.log(err);
                    reject(new _error_handler_error_handler__WEBPACK_IMPORTED_MODULE_2__.Error(err.errors, err.status));
                });
            });
        });
        this.verify_otp = (formData) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.requestManager.post('verifyOtp', formData).subscribe((data) => {
                    // console.log(data);
                    if (data.status == 200) {
                        console.log('User Logged In!');
                        var user = new _models_user_user__WEBPACK_IMPORTED_MODULE_0__.User(data.user, data.token);
                        this.storage.set('user', user);
                        this.commonService.user.next(user);
                    }
                    else {
                        setTimeout(() => {
                            this.commonService.showAlert(_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_3__.AlertTypeEnum.Error, data.msg);
                        }, 3000);
                    }
                    resolve(user);
                }, (err) => {
                    console.log(err);
                    reject(new _error_handler_error_handler__WEBPACK_IMPORTED_MODULE_2__.Error(err.errors, err.status));
                });
            });
        });
        this.contactInfo = () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this, this.requestManager.get('supportData').subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    console.log(err);
                    reject(new _error_handler_error_handler__WEBPACK_IMPORTED_MODULE_2__.Error(err.errors, err.status));
                });
            });
        });
        this.queryForm = (formData) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this, this.requestManager.post('contactForm', formData).subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    console.log(err);
                    reject(new _error_handler_error_handler__WEBPACK_IMPORTED_MODULE_2__.Error(err.errors, err.status));
                });
            });
        });
        this.getCategories = () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this, this.requestManager.get('getAllCategory').subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    console.log(err);
                    reject(new _error_handler_error_handler__WEBPACK_IMPORTED_MODULE_2__.Error(err.errors, err.status));
                });
            });
        });
        this.getRecommendations = (formData) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this, this.requestManager.get(`recommendedList/${formData}`).subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    console.log(err);
                    reject(new _error_handler_error_handler__WEBPACK_IMPORTED_MODULE_2__.Error(err.errors, err.status));
                });
            });
        });
        this.updateProfile = (formData) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this, this.requestManager.post('updateProfile', formData).subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    console.log(err);
                    reject(new _error_handler_error_handler__WEBPACK_IMPORTED_MODULE_2__.Error(err.errors, err.status));
                });
            });
        });
        this.booking = (formData) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this, this.requestManager.post('booking', formData).subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    console.log(err);
                    reject(new _error_handler_error_handler__WEBPACK_IMPORTED_MODULE_2__.Error(err.errors, err.status));
                });
            });
        });
        this.getMyBookings = () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this, this.requestManager.get('getMyBooking').subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    console.log(err);
                    reject(new _error_handler_error_handler__WEBPACK_IMPORTED_MODULE_2__.Error(err.errors, err.status));
                });
            });
        });
        this.cancelBooking = (formData) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this, this.requestManager.get(`cancelledBooking?booking_id=${formData}`).subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    console.log(err);
                    reject(new _error_handler_error_handler__WEBPACK_IMPORTED_MODULE_2__.Error(err.errors, err.status));
                });
            });
        });
        this.getNotification = () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this, this.requestManager.get('getNotification').subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    console.log(err);
                    reject(new _error_handler_error_handler__WEBPACK_IMPORTED_MODULE_2__.Error(err.errors, err.status));
                });
            });
        });
        this.logout = () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.requestManager.get('logout').subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    console.log(err);
                    reject(new _error_handler_error_handler__WEBPACK_IMPORTED_MODULE_2__.Error(err.errors, err.status));
                });
            });
        });
        // console.log(this.commonService.user.value.token)
    }
};
ApiService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _request_manager_service__WEBPACK_IMPORTED_MODULE_4__.RequestManagerService },
    { type: _common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 97197:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ 17897);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-handler/alert-type.enum */ 78747);






let CommonService = class CommonService {
    constructor(storage, loadingCtrl, toastctrl, alertCtrl) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.toastctrl = toastctrl;
        this.alertCtrl = alertCtrl;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.showLoader = () => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: 'Please Wait...',
                keyboardClose: true,
                spinner: 'bubbles',
                duration: 3000,
            });
            yield this.loading.present();
        });
        this.showLoaderExtend = () => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: 'Please Wait...',
                keyboardClose: true,
                spinner: 'bubbles',
            });
            yield this.loading.present();
        });
        this.hideLoader = () => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.loadingCtrl
                .getTop()
                .then((v) => (v ? this.loadingCtrl.dismiss() : null));
        });
        this.showToast = (message) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.toast = yield this.toastctrl.create({
                animated: true,
                message: message,
                duration: 2000,
                color: 'dark',
                mode: 'ios',
            });
            yield this.toast.present();
        });
        this.showAlert = (alertType, message) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            switch (alertType) {
                case _error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_0__.AlertTypeEnum.Error:
                    this.alert = yield this.alertCtrl.create({
                        header: 'Error',
                        subHeader: '',
                        message: message,
                        buttons: ['OK']
                    });
                    this.alert.present();
                    break;
                case _error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_0__.AlertTypeEnum.Warning:
                    this.alert = yield this.alertCtrl.create({
                        header: 'Warning',
                        subHeader: '',
                        message: message,
                        buttons: ['OK']
                    });
                    this.alert.present();
                    break;
                case _error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_0__.AlertTypeEnum.Information:
                    this.alert = yield this.alertCtrl.create({
                        header: 'Information',
                        subHeader: '',
                        message: message,
                        buttons: ['OK']
                    });
                    this.alert.present();
                    break;
                default:
                    break;
            }
        });
        this.updateLocalUser = (user) => {
            const tempUser = this.user.value;
            tempUser.user = user;
            this.user.next(tempUser);
            this.storage.set('user', tempUser);
        };
        this.logout = () => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.remove('user');
        });
    }
    setData(data) {
        this.passedData = data;
    }
    getData() {
        return this.passedData;
    }
    setExtraData(exData, flag) {
        this.extraData = exData;
        this.flag = flag;
    }
    getExtraData() {
        let body = {
            data: this.extraData,
            flag: this.flag
        };
        return body;
    }
};
CommonService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
CommonService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ 78747:
/*!***********************************************************!*\
  !*** ./src/app/services/error-handler/alert-type.enum.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertTypeEnum": () => (/* binding */ AlertTypeEnum)
/* harmony export */ });
var AlertTypeEnum;
(function (AlertTypeEnum) {
    AlertTypeEnum[AlertTypeEnum["Warning"] = 0] = "Warning";
    AlertTypeEnum[AlertTypeEnum["Error"] = 1] = "Error";
    AlertTypeEnum[AlertTypeEnum["Information"] = 2] = "Information";
})(AlertTypeEnum || (AlertTypeEnum = {}));


/***/ }),

/***/ 65858:
/*!*********************************************************!*\
  !*** ./src/app/services/error-handler/error.handler.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error": () => (/* binding */ Error)
/* harmony export */ });
class Error {
    constructor(error, errorCode) {
        this.message = '';
        this.statusCode = errorCode;
        this.parseErrorMessage(error);
    }
    ;
    parseErrorMessage(error) {
        console.log("Error : ", error, typeof (error.error));
        if (error.message) {
            this.message = error.message;
        }
        else if (typeof (error.error) === 'object') {
            for (const key in error.error) {
                if (Object.prototype.hasOwnProperty.call(error.error, key)) {
                    this.message += error.error[key] + '<br>';
                    console.log(key);
                }
            }
        }
        else if (typeof (error.error) === 'string') {
            this.message = error.error;
        }
        else if (error.errors && error.errors.length) {
            error.errors.forEach(err => {
                this.message += err;
            });
        }
    }
}


/***/ }),

/***/ 60147:
/*!*****************************************************!*\
  !*** ./src/app/services/http.config.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpConfigInterceptor": () => (/* binding */ HttpConfigInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.service */ 97197);






let HttpConfigInterceptor = class HttpConfigInterceptor {
    constructor(commonService) {
        this.commonService = commonService;
    }
    intercept(request, next) {
        const token = '';
        // console.log('USER: ', this.commonService.user.value);
        // Authentication by setting header with token value
        if (this.commonService.user.value && this.commonService.user.value.token) {
            // console.log(this.commonService.user.value.token, "token");
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this.commonService.user.value.token
                },
            });
            // console.log('request header: ', request.headers);
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json',
                },
            });
        }
        request = request.clone({
            headers: request.headers.set('Accept', 'application/json'),
        });
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
                // console.log('event--->>>', event);
            }
            this.commonService.hideLoader();
            return event;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            console.error(error);
            this.commonService.hideLoader();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
        }));
    }
};
HttpConfigInterceptor.ctorParameters = () => [
    { type: _common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService }
];
HttpConfigInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], HttpConfigInterceptor);



/***/ }),

/***/ 28447:
/*!*****************************************************!*\
  !*** ./src/app/services/request-manager.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestManagerService": () => (/* binding */ RequestManagerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88377);




let RequestManagerService = class RequestManagerService {
    // url: string = 'http://192.168.68.140:9001/api/v1/';    //test
    constructor(http) {
        this.http = http;
        this.url = 'https://www.theninjacare.com/api/v1/'; //domain
    }
    get(endpoint, param, reqOpts) {
        if (!reqOpts) {
            reqOpts = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams() };
        }
        ;
        if (param) {
            reqOpts.param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
            for (let k in param) {
                reqOpts.param = reqOpts.param.set(k, param[k]);
            }
        }
        const URL = this.url + endpoint;
        return this.http.get(URL, reqOpts).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            const res = response;
            return res;
        }));
    }
    post(endpoint, data, reqOpts) {
        try {
            if (typeof reqOpts == 'undefined') {
                reqOpts = {};
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
                headers.append("Accept", "application/json");
                headers.append("Content-Type", "application/json");
                headers.append('Access-Control-Allow-Origin', '*');
                headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
                headers.append('timeout', '3000');
                reqOpts.headers = headers;
            }
            const URL = this.url + endpoint;
            return this.http.post(URL, data, reqOpts).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
                const res = response;
                return res;
            }));
        }
        catch (err) {
            console.log('POST http error: ', err);
        }
    }
    put(endpoint, data, reqOpts) {
        const URL = this.url + endpoint;
        return this.http.put(URL, data, reqOpts).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            const res = response;
            return res;
        }));
    }
    delete(endpoint, reqOpts) {
        const URL = this.url + endpoint;
        return this.http.delete(URL, reqOpts).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            const res = response;
            return res;
        }));
    }
    patch(endpoint, data, reqOpts) {
        const URL = this.url + endpoint;
        return this.http.patch(URL, data, reqOpts).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            const res = response;
            return res;
        }));
    }
};
RequestManagerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
RequestManagerService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RequestManagerService);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseURL: 'https://www.theninjacare.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-menu side=\"start\" menuId=\"m1\" type=\"overlay\" contentId=\"my-content\">\r\n    <ion-content>\r\n      <div class=\"divStyle\">\r\n        <ion-label (click)=\"onMenuClose()\" style=\"padding: 3vw; font-size: 32px;\">\r\n          <ion-icon name=\"close-outline\" color=\"light\"></ion-icon>\r\n        </ion-label>\r\n      </div>\r\n      <ion-item class=\"divStyle\" style=\"--background: transparent;\" lines=\"none\">\r\n        <img src=\"/assets/images/person-secondary.svg\" class=\"image-css\" />\r\n        <ion-label color=\"secondary\" class=\"menu-label-top\">\r\n          Welcome to\r\n          <p style=\"color: var(--ion-color-secondary); font-size: 22px;\">The Ninja<strong> Care</strong></p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-list>\r\n        <ion-menu-toggle>\r\n          <ion-item lines=\"none\" button routerDirection=\"root\" [routerLink]=\"['/wallet']\">\r\n            <img src=\"/assets/images/exclamation.svg\" />\r\n            <ion-label class=\"menu-label\">Wallet</ion-label>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" button routerDirection=\"root\" (click)=\"openModal('complaints')\">\r\n            <img src=\"/assets/images/exclamation.svg\" />\r\n            <ion-label class=\"menu-label\">Complaints</ion-label>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" button routerDirection=\"root\" (click)=\"openModal('suggestion')\">\r\n            <img src=\"/assets/images/idea.svg\" />\r\n            <ion-label class=\"menu-label\">Suggestion</ion-label>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" button routerDirection=\"root\" (click)=\"openCapacitorSite('terms')\">\r\n            <img src=\"/assets/images/file.svg\" />\r\n            <ion-label class=\"menu-label\">Terms & Condition</ion-label>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" button routerDirection=\"root\" (click)=\"openCapacitorSite('privacy')\">\r\n            <img src=\"/assets/images/shield.svg\" />\r\n            <ion-label class=\"menu-label\">Privacy Policy</ion-label>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" button routerDirection=\"root\" (click)=\"openCapacitorSite('about')\">\r\n            <img src=\"/assets/images/info.svg\" />\r\n            <ion-label class=\"menu-label\">About App</ion-label>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" button routerDirection=\"root\" (click)=\"onContact()\">\r\n            <img src=\"/assets/images/call.svg\" />\r\n            <ion-label class=\"menu-label\">Contact</ion-label>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" button (click)=\"presentAlert()\">\r\n            <img src=\"/assets/images/exit.svg\" />\r\n            <ion-label class=\"menu-label\">Logout</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"my-content\"></ion-router-outlet>\r\n</ion-app>=");

/***/ }),

/***/ 28710:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/shared-form-modal/shared-form-modal.page.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      {{type == 'complaints' ? 'Complaint Form' : 'Suggestion Form'}}\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"light\" (click)=\"onDismiss()\">\r\n        <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"type == 'complaints' || type == 'suggestion'\">\r\n      <ion-col size-xl=\"6\" offset-xl=\"3\">\r\n        <form [formGroup]=\"queryForm\" (ngSubmit)=\"submit()\">\r\n          <ion-list>\r\n            <ion-label color=\"primary\" class=\"ion-padding-start\">Name</ion-label>\r\n            <ion-item lines=\"none\" class=\"input ion-margin-bottom\">\r\n              <ion-label>Name</ion-label>\r\n              <ion-input formControlName=\"name\" type=\"text\" placeholder=\"Enter your name\"></ion-input>\r\n            </ion-item>\r\n            <ion-label color=\"primary\" class=\"ion-padding-start\">Phone</ion-label>\r\n            <ion-item lines=\"none\" class=\"input ion-margin-bottom\">\r\n              <ion-label>Phone</ion-label>\r\n              <ion-input formControlName=\"phone\" type=\"tel\" placeholder=\"Enter your phone\" minlength=\"10\" maxlength=\"10\"></ion-input>\r\n            </ion-item>\r\n            <ion-label color=\"primary\" class=\"ion-padding-start\">Email</ion-label>\r\n            <ion-item lines=\"none\" class=\"input ion-margin-bottom\">\r\n              <ion-label>Email</ion-label>\r\n              <ion-input formControlName=\"email\" type=\"email\" placeholder=\"Enter your email\"></ion-input>\r\n            </ion-item>\r\n            <ion-label color=\"primary\" class=\"ion-padding-start\">Query</ion-label>\r\n            <ion-item lines=\"none\" class=\"input ion-margin-bottom\">\r\n              <ion-label>Query</ion-label>\r\n              <ion-textarea rows=\"3\" formControlName=\"query\" type=\"text\" placeholder=\"Enter your query\"></ion-textarea>\r\n            </ion-item>\r\n          </ion-list>\r\n          <ion-row *ngIf=\"type == 'complaints'\">\r\n            <ion-col class=\"ion-margin-top\">\r\n              <ion-button type=\"submit\" expand=\"block\" color=\"secondary-primary\">\r\n                Raise Issue\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row *ngIf=\"type == 'suggestion'\">\r\n            <ion-col class=\"ion-margin-top\">\r\n              <ion-button type=\"submit\" expand=\"block\" color=\"secondary-primary\">\r\n                Submit Suggestion\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-row *ngIf=\"type == 'terms' || type == 'privacy' || type == 'about'\">\r\n      <ion-col size-xl=\"6\" offset-xl=\"3\">\r\n        <div [innerHTML]=\"HTMLData\"></div>\r\n      </ion-col>\r\n    </ion-row> -->\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: var(--ion-color-primary);\n}\nion-content ion-list {\n  background: transparent;\n}\nion-content ion-list ion-item {\n  --background: transparent;\n  margin-bottom: 8%;\n  --detail-icon-color: #fff;\n}\n.divStyle {\n  margin-top: 13vw;\n  margin-left: 3vw;\n  margin-bottom: 8vw;\n}\n.image-css {\n  background: var(--ion-color-light);\n  padding: 4%;\n  border-radius: 50%;\n}\n.menu-label {\n  color: var(--ion-color-light);\n  font-size: 18px;\n  font-weight: 400;\n  padding-left: 10%;\n}\n.menu-label-top {\n  color: var(--ion-color-secondary);\n  font-size: 18px;\n  font-weight: 400;\n  padding-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0FBQ0Y7QUFBRTtFQUNFLHVCQUFBO0FBRUo7QUFESTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUdOO0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0Usa0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGlvbi1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4JTtcclxuICAgICAgLS1kZXRhaWwtaWNvbi1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kaXZTdHlsZSB7XHJcbiAgbWFyZ2luLXRvcDogMTN2dztcclxuICBtYXJnaW4tbGVmdDogM3Z3O1xyXG4gIG1hcmdpbi1ib3R0b206IDh2dztcclxufVxyXG5cclxuLmltYWdlLWNzcyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBwYWRkaW5nOiA0JTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5tZW51LWxhYmVsIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLm1lbnUtbGFiZWwtdG9wIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 27593:
/*!*********************************************************************!*\
  !*** ./src/app/pages/shared-form-modal/shared-form-modal.page.scss ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQtZm9ybS1tb2RhbC5wYWdlLnNjc3MifQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map