webpackJsonp([18],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(726);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ModalPageModule = class ModalPageModule {
};
ModalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
        ],
    })
], ModalPageModule);

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ModalPage = class ModalPage {
    constructor(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ionViewDidLoad() {
        // console.log('ionViewDidLoad ModalPage');
        console.log('ionViewDidLoad ModalPage');
        console.log(this.navParams.get('message'));
    }
    closeModal() {
        this.viewCtrl.dismiss();
    }
    gotoTopicListPage() {
        this.navCtrl.setRoot('TopicsListPage');
    }
};
ModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-modal',template:/*ion-inline-start:"/home/nitish/Documents/pathfinder/src/pages/modal/modal.html"*/'<ion-header>\n\n  <ion-navbar>\n      <ion-grid>\n          <ion-row text-center>\n              <ion-col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center no-padding>\n                  <ion-searchbar icon-end></ion-searchbar>\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n      <!-- <ion-title>ModalPage</ion-title>\n      <ion-buttons end>\n      <button ion-button (click)="closeModal()">Close</button>\n      </ion-buttons> -->\n  </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n  </ion-content>\n  <ion-footer>\n      <ion-grid class="footer_Grid">\n          <ion-row>\n              <ion-col col-6>\n                  <img src="assets/imgs/back.png" height="35px" ion-start (click)="closeModal();">\n                  <!-- <ion-icon ion-start class="footer-Icon" name="md-arrow-back" (click)="gotoMethodsPage();"></ion-icon> -->\n              </ion-col>\n              <ion-col col-6>\n                  <!-- <ion-icon name="search" style="zoom:2.2;" color="light"   (click)="openModal();"float-right></ion-icon>    -->\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  </ion-footer>'/*ion-inline-end:"/home/nitish/Documents/pathfinder/src/pages/modal/modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
], ModalPage);

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=18.js.map