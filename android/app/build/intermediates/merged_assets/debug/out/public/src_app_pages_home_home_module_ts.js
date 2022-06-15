"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 57693:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-header/home-header.component */ 91421);






let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        exports: [_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_0__.HomeHeaderComponent],
        declarations: [_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_0__.HomeHeaderComponent],
    })
], ComponentsModule);



/***/ }),

/***/ 91421:
/*!*****************************************************************!*\
  !*** ./src/app/components/home-header/home-header.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeHeaderComponent": () => (/* binding */ HomeHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home-header.component.html */ 74258);
/* harmony import */ var _home_header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-header.component.scss */ 11166);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common.service */ 97197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);






let HomeHeaderComponent = class HomeHeaderComponent {
    constructor(router, commonService) {
        this.router = router;
        this.commonService = commonService;
    }
    ngOnInit() {
        this.name = this.commonService.user.value.user.name;
        console.log(this.commonService.user.value.user);
    }
    onNotification() {
        console.log('Notification Clicked');
        this.router.navigateByUrl('/notifications');
    }
    onGetStarted() {
        this.router.navigateByUrl('/tabs/home/select-service');
    }
};
HomeHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
HomeHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home-header',
        template: _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeHeaderComponent);



/***/ }),

/***/ 89639:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 88774);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 35129:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 89639);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 88774);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ 57693);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 88774:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 99090);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 40932);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api.service */ 67118);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/common.service */ 97197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/error-handler/alert-type.enum */ 78747);







let HomePage = class HomePage {
    constructor(commonService, api) {
        this.commonService = commonService;
        this.api = api;
        this.slideOpts = {
            slidesPerView: 4.8,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        };
        this.recommendationList = [];
    }
    ngOnInit() {
        this.url = "https://www.theninjacare.com/";
        this.categoryList = [
            {
                id: 1,
                name: 'Floor Cleaning',
                img: '/assets/images/exclamation.svg'
            },
            {
                id: 2,
                name: 'Utensil Cleaning',
                img: '/assets/images/share.svg'
            },
            {
                id: 3,
                name: 'Food Cooking',
                img: '/assets/images/file.svg'
            },
            {
                id: 4,
                name: 'Nursing',
                img: '/assets/images/exit.svg'
            },
            {
                id: 5,
                name: 'Security Guard',
                img: '/assets/images/exclamation.svg'
            },
        ];
        this.getCategoryList();
        this.getRecommendationList();
    }
    getCategoryList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.commonService.showLoader();
            this.api.getCategories().then((data) => {
                console.log(data);
                if (data.status == 200) {
                    console.log(data, "cat");
                    this.categoryList = data.data;
                }
            }).catch(err => {
                this.commonService.showAlert(src_app_services_error_handler_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__.AlertTypeEnum.Error, err.message);
            });
        });
    }
    getRecommendationList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.api.getRecommendations().then((data) => {
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
HomePage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _C_Users_Arramton_010_Desktop_ionic_TheNinjaCare_User_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 74258:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/home-header/home-header.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"div-style\">\r\n  <div class=\"flex-display\">\r\n    <ion-item lines=\"none\">\r\n      <ion-menu-button menu=\"m1\">\r\n        <img src=\"/assets/images/menu.svg\" />\r\n      </ion-menu-button>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" button detail=\"false\" (click)=\"onNotification()\">\r\n      <ion-icon name=\"notifications\" slot=\"end\" color=\"primary\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-padding-top ion-padding-start\">\r\n      <ion-label color=\"secondary\" style=\"font-size: 22px; padding-top: 12px; font-weight: 500;\">Hi {{name}}!</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"6\" class=\"ion-padding-start\">\r\n      <div>\r\n        <h1 class=\"h1-text\">What service do you need?</h1>\r\n        <br />\r\n        <ion-button shape=\"round\" color=\"secondary-primary\" (click)=\"onGetStarted()\">Get Started</ion-button>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <img src=\"/assets/images/home.svg\" />\r\n    </ion-col>\r\n  </ion-row>\r\n</div>");

/***/ }),

/***/ 99090:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/home/home.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <app-home-header></app-home-header>\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"ion-margin-top\">\r\n      <ion-col class=\"ion-align-self-baseline\">\r\n        <h3 style=\"color: var(--ion-color-primary); font-weight: bold; margin: 0px;\">Categories</h3>\r\n      </ion-col>\r\n      <ion-col class=\"ion-align-self-baseline\">\r\n        <ion-item lines=\"none\" detail=\"true\" style=\"--detail-icon-color: #0C3469 !important;\" routerLink=\"/tabs/home/select-service\">\r\n          <ion-label class=\"ion-text-end\" color=\"primary\">View All</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-slides pager=\"false\" [options]=\"slideOpts\">\r\n      <ion-slide *ngFor=\"let category of categoryList\">\r\n        <div class=\"aspect-set\">\r\n          <div class=\"scroll-category\">\r\n            <!-- <img width=\"76px\" height=\"76px\" [src]=\"category.image\" /> -->\r\n            <img width=\"76px\" height=\"76px\" [src]=\"url+category.image\" />\r\n          </div>\r\n          <ion-label>{{category.name}}</ion-label>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n\r\n    <ion-row class=\"ion-margin-top\">\r\n      <ion-col class=\"ion-align-self-baseline\">\r\n        <h3 style=\"color: var(--ion-color-primary); font-weight: bold; margin: 0px;\">Recommended</h3>\r\n      </ion-col>\r\n      <ion-col class=\"ion-align-self-baseline\">\r\n        <ion-item lines=\"none\" detail=\"true\" style=\"--detail-icon-color: #0C3469 !important;\">\r\n          <ion-label class=\"ion-text-end\" color=\"primary\">View All</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-list>\r\n      <ion-card *ngFor=\"let recommend of recommendationList\">\r\n        <ion-card-content>\r\n          <img [src]=\"url+recommend.working_partner.profile_image\" width=\"150px\" height=\"150px\" />\r\n          <div>\r\n            <ion-item lines=\"none\">\r\n              <img src=\"/assets/images/star.svg\" width=\"22px\" />\r\n              <ion-label color=\"primary\" class=\"ion-padding-start\" style=\"font-size: 20px; margin-bottom: 4px;\"><strong>{{recommend.working_partner.working_partner_average_ratings_count}}</strong></ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-label style=\"white-space: break-spaces;\" color=\"primary\">{{recommend.working_partner?.category_id}}</ion-label>\r\n            </ion-item>\r\n            <p class=\"ion-padding-start\">By {{recommend.name}}</p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-list>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ 11166:
/*!*******************************************************************!*\
  !*** ./src/app/components/home-header/home-header.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".div-style {\n  background-image: url(\"/assets/images/random.jpg\");\n  background-size: cover;\n  padding-top: 10%;\n}\n.div-style .flex-display {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.div-style ion-item {\n  --background: transparent;\n  padding-top: 4%;\n}\n.div-style .div-icon {\n  font-size: 31px;\n  padding-right: 2%;\n}\n.div-style .h1-text {\n  font-size: 32px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0RBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUo7QUFHRTtFQUNFLHlCQUFBO0VBRUEsZUFBQTtBQUZKO0FBS0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFISjtBQU1FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFKSiIsImZpbGUiOiJob21lLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtc3R5bGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3JhbmRvbS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIC8vICAgaGVpZ2h0OiAzMHZoO1xyXG5cclxuICAuZmxleC1kaXNwbGF5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgcGFkZGluZy10b3A6IDQlO1xyXG4gIH1cclxuXHJcbiAgLmRpdi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMzFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gIH1cclxuXHJcbiAgLmgxLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 40932:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = ".aspect-set {\n  padding: 6%;\n  display: flex;\n  flex-direction: column;\n}\n.aspect-set ion-label {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n  font-size: 16px;\n}\n.scroll-category {\n  align-self: center;\n  background: var(--ion-color-primary);\n  border-radius: 50%;\n  padding: 2vh;\n  width: 16vw;\n  height: 16vw;\n}\nion-card {\n  margin: 2px 2px 12px 2px;\n  border-radius: 2px;\n}\nion-card ion-card-content {\n  padding: 0px !important;\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQUU7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBRUE7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjtBQUVBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzcGVjdC1zZXQge1xyXG4gIHBhZGRpbmc6IDYlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2Nyb2xsLWNhdGVnb3J5IHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAydmg7XHJcbiAgd2lkdGg6IDE2dnc7XHJcbiAgaGVpZ2h0OiAxNnZ3O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgbWFyZ2luOiAycHggMnB4IDEycHggMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map