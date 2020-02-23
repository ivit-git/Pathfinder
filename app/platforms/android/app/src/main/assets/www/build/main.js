webpackJsonp([19],{

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ask-us/ask-us.module": [
		696,
		17
	],
	"../pages/dashboard/dashboard.module": [
		712,
		16
	],
	"../pages/faq-methods/faq-methods.module": [
		697,
		15
	],
	"../pages/faq/faq.module": [
		698,
		14
	],
	"../pages/fp-overview/fp-overview.module": [
		699,
		13
	],
	"../pages/home/home.module": [
		700,
		12
	],
	"../pages/incentives/incentives.module": [
		701,
		11
	],
	"../pages/key-content/key-content.module": [
		702,
		10
	],
	"../pages/key-message/key-message.module": [
		705,
		9
	],
	"../pages/library/library.module": [
		714,
		8
	],
	"../pages/methods/methods.module": [
		703,
		7
	],
	"../pages/modal/modal.module": [
		704,
		18
	],
	"../pages/quiz-category/quiz-category.module": [
		709,
		0
	],
	"../pages/quiz/quiz.module": [
		707,
		6
	],
	"../pages/tool-one/tool-one.module": [
		706,
		5
	],
	"../pages/tool-two/tool-two.module": [
		713,
		4
	],
	"../pages/topics-content/topics-content.module": [
		710,
		3
	],
	"../pages/topics-list/topics-list.module": [
		711,
		2
	],
	"../pages/user-profile/user-profile.module": [
		708,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//import { Component, ViewEncapsulation } from '@angular/core';
var language;
(function (language) {
    language["language_english"] = "English";
    language["language_hindi"] = "\u0939\u093F\u0902\u0926\u0940";
    language["language_marathi"] = "\u092E\u0930\u093E\u0920\u0940";
})(language || (language = {}));
var language_english;
(function (language_english) {
    language_english["downloadMsg"] = "Content downloaded successfully.";
    language_english["updateMsg"] = "Tap to Continue";
    language_english["interNetMsg"] = "Please check your internet connectivity.";
    language_english["noUpdate"] = "No Update Available.";
    language_english["Create_Your_Profile"] = "Create Your Profile";
    language_english["Tap_to_here_to_create_your_profile"] = "Tap here to create your Profile";
    language_english["User_Profile"] = "User Profile";
    language_english["User_Name"] = "Name";
    language_english["User_Type"] = "User Type";
    language_english["Gender"] = "Gender";
    language_english["Date_of_Birth"] = "Date of Birth";
    language_english["Orgnization_Type"] = "Organization Type";
    language_english["Preferd_Language"] = "Preferred Language";
    language_english["Country"] = "Country";
    language_english["State"] = "State";
    language_english["District"] = "District";
    language_english["Mobile_No"] = "Mobile No.";
    language_english["Save"] = "Save";
    language_english["Cancel"] = "Cancel";
    language_english["overview"] = "FP OVERVIEW";
    language_english["Faq"] = "FAQ";
    language_english["keyMessage"] = "KEY MESSAGE";
    language_english["counselling"] = "COUNSELLING";
    language_english["Quiz"] = "QUIZ";
    language_english["library"] = "LIBRARY";
    language_english["incentive"] = "SCHEME";
    language_english["AskUs"] = "ASK US";
    language_english["Methods"] = "CONTRACEPTIVE METHODS";
    language_english["submit"] = "Submit";
    language_english["question_PlaceHolder"] = "Write your feedback/query here...";
    language_english["questionError"] = "Please enter your question";
    language_english["noDataFound"] = "No Data Available.";
    language_english["correct"] = "Correct";
    language_english["incorrect"] = "Incorrect";
    language_english["response"] = "The Correct Response is:-";
    language_english["incentiveLabel"] = "Incentive ";
    language_english["indeminityLabel"] = "Indeminity ";
    language_english["levelText"] = "Level ";
    language_english["playQuiz"] = "Do You Want to Play Again?";
    language_english["quizAlert"] = "Please complete both levels of the quiz first.";
    language_english["quizMessage"] = "Please try again after 48 hours.";
})(language_english || (language_english = {}));
var language_hindi;
(function (language_hindi) {
    language_hindi["downloadMsg"] = "\u0938\u093E\u092E\u0917\u094D\u0930\u0940 \u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0940 \u0917\u0908\u0964";
    language_hindi["updateMsg"] = "\u091C\u093E\u0930\u0940 \u0930\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092C\u091F\u0928 \u0926\u092C\u093E\u090F\u0902";
    language_hindi["interNetMsg"] = "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u0940 \u0907\u0902\u091F\u0930\u0928\u0947\u091F \u0915\u0928\u0947\u0915\u094D\u091F\u093F\u0935\u093F\u091F\u0940 \u0915\u0940 \u091C\u093E\u0901\u091A \u0915\u0930\u0947\u0902\u0964";
    language_hindi["noUpdate"] = "\u0915\u094B\u0908 \u0905\u0926\u094D\u092F\u0924\u0928 \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964";
    language_hindi["Create_Your_Profile"] = "\u0905\u092A\u0928\u093E \u092A\u094D\u0930\u094B\u092B\u093C\u093E\u0907\u0932 \u092C\u0928\u093E\u090F";
    language_hindi["Tap_to_here_to_create_your_profile"] = "\u0905\u092A\u0928\u0940 \u092A\u094D\u0930\u094B\u092B\u093C\u093E\u0907\u0932 \u092C\u0928\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092F\u0939\u093E\u0902 \u091F\u0948\u092A \u0915\u0930\u0947\u0902";
    language_hindi["User_Profile"] = "\u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u092A\u094D\u0930\u094B\u092B\u093C\u093E\u0907\u0932";
    language_hindi["User_Name"] = "\u0928\u093E\u092E";
    language_hindi["User_Type"] = "\u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u0915\u093E \u092A\u094D\u0930\u0915\u093E\u0930";
    language_hindi["Gender"] = "\u0932\u093F\u0902\u0917";
    language_hindi["Date_of_Birth"] = "\u091C\u0928\u094D\u092E \u0915\u0940 \u0924\u093E\u0930\u0940\u0916";
    language_hindi["Orgnization_Type"] = "\u0938\u0902\u0917\u0920\u0928 \u092A\u094D\u0930\u0915\u093E\u0930";
    language_hindi["Preferd_Language"] = "\u092A\u0938\u0902\u0926\u0940\u0926\u093E \u092D\u093E\u0937\u093E";
    language_hindi["Country"] = "\u0926\u0947\u0936";
    language_hindi["State"] = "\u0930\u093E\u091C\u094D\u092F";
    language_hindi["District"] = "\u091C\u093F\u0932\u093E";
    language_hindi["Mobile_No"] = "\u092E\u094B\u092C\u093E\u0907\u0932 \u0928\u0902\u092C\u0930";
    language_hindi["Save"] = "\u091C\u092E\u093E \u0915\u0930\u0947\u0902";
    language_hindi["Cancel"] = "\u0930\u0926\u094D\u0926 \u0915\u0930\u0928\u093E";
    language_hindi["overview"] = "\u092A\u0930\u093F\u0935\u093E\u0930 \u0928\u093F\u092F\u094B\u091C\u0928 \u0905\u0935\u0932\u094B\u0915\u0928";
    language_hindi["Faq"] = "\u0905\u0915\u094D\u0938\u0930 \u092A\u0942\u091B\u0947 \u091C\u093E\u0928\u0947 \u0935\u093E\u0932\u0947 \u092A\u094D\u0930\u0936\u094D\u0928";
    language_hindi["keyMessage"] = "\u092E\u0942\u0932 \u0938\u0902\u0926\u0947\u0936";
    language_hindi["counselling"] = "\u092A\u0930\u093E\u092E\u0930\u094D\u0936";
    language_hindi["Quiz"] = "\u092A\u094D\u0930\u0936\u094D\u0928\u094B\u0924\u094D\u0924\u0930\u0940";
    language_hindi["library"] = "\u092A\u0941\u0938\u094D\u0924\u0915\u093E\u0932\u092F";
    language_hindi["incentive"] = " \u092F\u094B\u091C\u0928\u093E";
    language_hindi["AskUs"] = "\u0939\u092E\u0938\u0947 \u092A\u0942\u091B\u0947\u0902";
    language_hindi["Methods"] = "\u0917\u0930\u094D\u092D\u0928\u093F\u0930\u094B\u0927\u0915 \u0938\u093E\u0927\u0928";
    language_hindi["submit"] = "\u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0915\u0930\u0947";
    language_hindi["question_PlaceHolder"] = "\u0905\u092A\u0928\u093E \u092A\u094D\u0930\u0936\u094D\u0928 \u092F\u0939\u093E\u0901 \u0932\u093F\u0916\u0947\u0902...";
    language_hindi["questionError"] = "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u093E \u092A\u094D\u0930\u0936\u094D\u0928 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902";
    language_hindi["noDataFound"] = "\u0915\u094B\u0908 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948";
    language_hindi["correct"] = "\u0938\u0939\u0940";
    language_hindi["incorrect"] = "\u0917\u093C\u0932\u0924";
    language_hindi["response"] = "\u0938\u0939\u0940 \u0909\u0924\u094D\u0924\u0930 \u0939\u0948:-";
    language_hindi["incentiveLabel"] = "\u092A\u094D\u0930\u094B\u0924\u094D\u0938\u093E\u0939\u0928";
    language_hindi["indeminityLabel"] = "\u0915\u094D\u0937\u0924\u093F\u092A\u0942\u0930\u094D\u0924\u093F";
    language_hindi["levelText"] = "\u0938\u094D\u0924\u0930 ";
    language_hindi["playQuiz"] = "\u0915\u094D\u092F\u093E \u0906\u092A \u092B\u093F\u0930 \u0938\u0947 \u0916\u0947\u0932\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902?";
    language_hindi["quizAlert"] = "\u0915\u0943\u092A\u092F\u093E \u092A\u0939\u0932\u0947 \u092A\u094D\u0930\u0936\u094D\u0928\u094B\u0924\u094D\u0924\u0930\u0940 \u0915\u0947 \u0926\u094B\u0928\u094B\u0902 \u0938\u094D\u0924\u0930\u094B\u0902 \u0915\u094B \u092A\u0942\u0930\u093E \u0915\u0930\u0947\u0902\u0964";
    language_hindi["quizMessage"] = "\u0915\u0943\u092A\u092F\u093E 48 \u0918\u0902\u091F\u0947 \u092C\u093E\u0926 \u092A\u0941\u0928: \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902\u0964";
})(language_hindi || (language_hindi = {}));
var language_marathi;
(function (language_marathi) {
    language_marathi["downloadMsg"] = "\u0938\u093E\u092E\u0917\u094D\u0930\u0940 \u092F\u0936\u0938\u094D\u0935\u0940\u0930\u093F\u0924\u094D\u092F\u093E \u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0947\u0932\u0940.";
    language_marathi["updateMsg"] = "\u0938\u0941\u0930\u0942 \u0920\u0947\u0935\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 \u091F\u0945\u092A \u0915\u0930\u093E";
    language_marathi["interNetMsg"] = "\u0915\u0943\u092A\u092F\u093E \u0924\u0941\u092E\u091A\u0940 \u0907\u0902\u091F\u0930\u0928\u0947\u091F \u0915\u0928\u0947\u0915\u094D\u091F\u093F\u0935\u094D\u0939\u093F\u091F\u0940 \u0924\u092A\u093E\u0938\u093E.";
    language_marathi["noUpdate"] = "\u0905\u0926\u094D\u092F\u0924\u0928 \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u093E\u0939\u0940.";
    language_marathi["Create_Your_Profile"] = "\u0906\u092A\u0932\u0947 \u092A\u094D\u0930\u094B\u092B\u093E\u0907\u0932 \u0924\u092F\u093E\u0930 \u0915\u0930\u093E";
    language_marathi["Tap_to_here_to_create_your_profile"] = "\u0906\u092A\u0932\u0947 \u092A\u094D\u0930\u094B\u092B\u093E\u0907\u0932 \u0924\u092F\u093E\u0930 \u0915\u0930\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 \u092F\u0947\u0925\u0947 \u091F\u0945\u092A \u0915\u0930\u093E";
    language_marathi["User_Profile"] = "\u0935\u093E\u092A\u0930\u0915\u0930\u094D\u0924\u093E \u092A\u094D\u0930\u094B\u092B\u093E\u0907\u0932";
    language_marathi["User_Name"] = "\u0928\u093E\u0935";
    language_marathi["User_Type"] = "\u0935\u093E\u092A\u0930\u0915\u0930\u094D\u0924\u093E \u092A\u094D\u0930\u0915\u093E\u0930";
    language_marathi["Gender"] = "\u0932\u093F\u0902\u0917";
    language_marathi["Date_of_Birth"] = "\u091C\u0928\u094D\u092E\u0924\u093E\u0930\u0940\u0916";
    language_marathi["Orgnization_Type"] = "\u0938\u0902\u0918\u091F\u0928\u0947\u091A\u093E \u092A\u094D\u0930\u0915\u093E\u0930";
    language_marathi["Preferd_Language"] = "\u092A\u094D\u0930\u093E\u0927\u093E\u0928\u094D\u092F\u0940\u0915\u0943\u0924 \u092D\u093E\u0937\u093E";
    language_marathi["Country"] = "\u0926\u0947\u0936";
    language_marathi["State"] = "\u0930\u093E\u091C\u094D\u092F";
    language_marathi["District"] = "\u091C\u093F\u0932\u094D\u0939\u093E";
    language_marathi["Mobile_No"] = "\u092E\u094B\u092C\u093E\u0907\u0932 \u0928\u0902\u092C\u0930";
    language_marathi["Save"] = "\u0938\u0947\u0935\u094D\u0939";
    language_marathi["Cancel"] = "\u0930\u0926\u094D\u0926 \u0915\u0930\u093E";
    language_marathi["overview"] = "\u090F\u092B\u092A\u0940 \u0905\u0935\u0932\u094B\u0915\u0928";
    language_marathi["Faq"] = "FAQ";
    language_marathi["keyMessage"] = "\u092E\u0941\u0916\u094D\u092F \u0938\u0902\u0926\u0947\u0936";
    language_marathi["counselling"] = "\u0915\u0928\u094D\u0938\u0932\u093F\u0902\u0917";
    language_marathi["Quiz"] = "\u0915\u094D\u0935\u093F\u091D";
    language_marathi["library"] = "\u0932\u093E\u0907\u092C\u094D\u0930\u0930\u0940";
    language_marathi["incentive"] = "\u0938\u094D\u0915\u0940\u092E";
    language_marathi["AskUs"] = "ASK \u092F\u0942\u090F\u0938";
    language_marathi["Methods"] = "\u0915\u0949\u0928\u094D\u091F\u094D\u0930\u0945\u0915\u094D\u0938\u0947\u092A\u094D\u091F\u093F\u0935\u094D\u0939 \u092E\u0947\u0925\u093F\u0921\u094D\u0938";
    language_marathi["submit"] = "\u0938\u092C\u092E\u093F\u091F \u0915\u0930\u093E";
    language_marathi["question_PlaceHolder"] = "\u092F\u0947\u0925\u0947 \u0906\u092A\u0932\u093E \u0905\u092D\u093F\u092A\u094D\u0930\u093E\u092F / \u0915\u094D\u0935\u0947\u0930\u0940 \u0932\u093F\u0939\u093E ...";
    language_marathi["questionError"] = "\u0915\u0943\u092A\u092F\u093E \u0906\u092A\u0932\u093E \u092A\u094D\u0930\u0936\u094D\u0928 \u092A\u094D\u0930\u0935\u093F\u0937\u094D\u091F \u0915\u0930\u093E";
    language_marathi["noDataFound"] = "\u0921\u0947\u091F\u093E \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u093E\u0939\u0940.";
    language_marathi["correct"] = "\u092C\u0930\u094B\u092C\u0930";
    language_marathi["incorrect"] = "\u091A\u0941\u0915\u0940\u091A\u0947";
    language_marathi["response"] = "\u092C\u0930\u094B\u092C\u0930 \u092A\u094D\u0930\u0924\u093F\u0938\u093E\u0926 \u0939\u093E \u0906\u0939\u0947: -";
    language_marathi["incentiveLabel"] = "\u092A\u094D\u0930\u094B\u0924\u094D\u0938\u093E\u0939\u0928 ";
    language_marathi["indeminityLabel"] = "\u0928\u093F\u0930\u094D\u0932\u091C\u094D\u091C\u0924\u093E ";
    language_marathi["levelText"] = "\u0932\u0947\u0935\u094D\u0939\u0932 ";
    language_marathi["playQuiz"] = "\u0906\u092A\u0932\u094D\u092F\u093E\u0932\u093E \u092A\u0941\u0928\u094D\u0939\u093E \u0916\u0947\u0933\u093E\u092F\u091A\u0947 \u0906\u0939\u0947 \u0915\u093E?";
    language_marathi["quizAlert"] = "\u0915\u0943\u092A\u092F\u093E \u092A\u094D\u0930\u0925\u092E \u0915\u094D\u0935\u093F\u091D\u091A\u0940 \u0926\u094B\u0928\u094D\u0939\u0940 \u092A\u093E\u0924\u0933\u0940 \u092A\u0942\u0930\u094D\u0923 \u0915\u0930\u093E.";
    language_marathi["quizMessage"] = "\u0915\u0943\u092A\u092F\u093E 48 \u0924\u093E\u0938\u093E\u0902\u0928\u0902\u0924\u0930 \u092A\u0941\u0928\u094D\u0939\u093E \u092A\u094D\u0930\u092F\u0924\u094D\u0928 \u0915\u0930\u093E.";
})(language_marathi || (language_marathi = {}));
class AppEnum {
    constructor() {
        this.Entitylanguage = language;
        this.Entity_language_english = language_english;
        this.Entity_language_hindi = language_hindi;
        this.Entity_language_marathi = language_marathi;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppEnum;

//# sourceMappingURL=app.enum.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite_porter__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
let DatabaseProvider = class DatabaseProvider {
    constructor(sqlitePorter, storage, sqlite, platform, http) {
        this.sqlitePorter = sqlitePorter;
        this.storage = storage;
        this.sqlite = sqlite;
        this.platform = platform;
        this.http = http;
        this.databaseReady = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["BehaviorSubject"](false);
        this.platform.ready().then(() => {
            this.sqlite.create({
                name: 'developers.db',
                location: 'default'
            })
                .then((db) => {
                this.database = db;
                this.storage.get('database_filled').then(val => {
                    if (val) {
                        this.databaseReady.next(true);
                    }
                    else {
                        this.fillDatabase();
                    }
                });
            });
        });
    }
    fillDatabase() {
        this.http.get('assets/table.sql')
            .map(res => res.text())
            .subscribe(sql => {
            this.sqlitePorter.importSqlToDb(this.database, sql)
                .then(data => {
                this.databaseReady.next(true);
                this.storage.set('database_filled', true);
            })
                .catch(e => alert(JSON.stringify(e)));
        });
    }
    fillTableDatabase() {
        this.http.get('assets/table.sql')
            .map(res => res.text())
            .subscribe(sql => {
            this.sqlitePorter.importSqlToDb(this.database, sql)
                .then(data => {
                this.databaseReady.next(true);
                this.storage.set('database_filled', true);
            })
                .catch(e => console.error(e));
        });
    }
    formatNumber(number) {
        const formattedNumber = ('0' + number).slice(-2);
        return formattedNumber;
    }
    addMethodsList(result) {
        var query = "INSERT INTO Methodsdata(MethodId,MethodLabel,MethodName,MethodSequenceNo,MobileIcon,MobileIconURL,TabletIcon,TabletIconURL,LanguageId,StackHolderId,MethodCategory,MethodCategoryName) VALUES";
        var data = [];
        var rowArgs = [];
        result.forEach(function (methods) {
            rowArgs.push("(?, ?, ?,?, ?, ?, ?,?,?,?,?,?)");
            data.push(methods.MethodId);
            data.push(methods.MethodLabel);
            data.push(methods.MethodName);
            data.push(methods.MethodSequenceNo);
            data.push(methods.MobileIcon);
            data.push(methods.MobileIconURL);
            data.push(methods.TabletIcon);
            data.push(methods.TabletIconURL);
            data.push(methods.LanguageId);
            data.push(methods.StackHolderId);
            data.push(methods.MethodCategory);
            data.push(methods.MethodCategoryName);
        });
        query += rowArgs.join(", ");
        return this.database.executeSql(query, data).then(data => {
            return data;
        }, err => {
            alert('Error addMethodsData: ' + JSON.stringify(err));
            return err;
        });
    }
    getMethodsList(MethodCategory, LanguageId) {
        return this.database.executeSql("select * from Methodsdata WHERE    MethodCategory ='" + MethodCategory + "'  AND LanguageId='" + LanguageId + "'", []).then((data) => {
            let methodList = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    methodList.push({ MethodId: data.rows.item(i).MethodId, MethodLabel: data.rows.item(i).MethodLabel, MethodName: data.rows.item(i).MethodName, MethodSequenceNo: data.rows.item(i).MethodSequenceNo, MobileIcon: data.rows.item(i).MobileIcon, MobileIconURL: data.rows.item(i).MobileIconURL, TabletIcon: data.rows.item(i).TabletIcon, TabletIconURL: data.rows.item(i).TabletIconURL, LanguageId: data.rows.item(i).LanguageId, StackHolderId: data.rows.item(i).StackHolderId, MethodCategory: data.rows.item(i).MethodCategory, MethodCategoryName: data.rows.item(i).MethodCategoryName });
                }
            }
            return methodList;
        }, err => {
            alert('getAllDashboardData Error: ' + err);
            return [];
        });
    }
    addTopicsContent(result) {
        var query = "INSERT INTO TopicsContent(ContentId,LanguageId,MethodId,MethodLabel,MethodName,TopicId,TopicNo,TopicName,Content,ImgName,ImgUrl) VALUES";
        var data = [];
        var rowArgs = [];
        result.forEach(function (topicContent) {
            rowArgs.push("(?, ?, ?,?, ?, ?, ?, ?,? ,? ,? )");
            data.push(topicContent.ContentId);
            data.push(topicContent.languageId);
            data.push(topicContent.MethodId);
            data.push(topicContent.MethodLabel);
            data.push(topicContent.MethodName);
            data.push(topicContent.TopicId);
            data.push(topicContent.TopicNo);
            data.push(topicContent.TopicName);
            data.push(topicContent.Content);
            data.push(topicContent.ImgName);
            data.push(topicContent.ImgUrl);
        });
        query += rowArgs.join(", ");
        return this.database.executeSql(query, data).then(data => {
            return data;
        }, err => {
            alert('Error addTopicsContent: ' + JSON.stringify(err));
            return err;
        });
    }
    getTopics(MethodId, LanguageId) {
        return this.database.executeSql("select * from TopicsContent WHERE MethodId = '" + MethodId + "'  AND LanguageId='" + LanguageId + "'  ", []).then((data) => {
            let topicList = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    topicList.push({ ContentId: data.rows.item(i).ContentId, LanguageId: data.rows.item(i).LanguageId, MethodId: data.rows.item(i).MethodId, MethodLabel: data.rows.item(i).MethodLabel, MethodName: data.rows.item(i).MethodName, TopicId: data.rows.item(i).TopicId, TopicNo: data.rows.item(i).TopicNo + "ASC", TopicName: data.rows.item(i).TopicName, Content: data.rows.item(i).Content, ImgName: data.rows.item(i).ImgName, ImgUrl: data.rows.item(i).ImgUrl });
                }
            }
            //alert("line 143"+JSON.stringify(topicList));
            return topicList;
        }, err => {
            alert('getTopics Error: ' + err);
            return [];
        });
    }
    getContent(ContentId, LanguageId) {
        return this.database.executeSql("select * from TopicsContent WHERE ContentId = '" + ContentId + "'  AND LanguageId='" + LanguageId + "'", []).then((data) => {
            let contentList = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    contentList.push({ ContentId: data.rows.item(i).ContentId, LanguageId: data.rows.item(i).LanguageId, MethodId: data.rows.item(i).MethodId, MethodLabel: data.rows.item(i).MethodLabel, MethodName: data.rows.item(i).MethodName, TopicId: data.rows.item(i).TopicId, SubTopicId: data.rows.item(i).SubTopicId, TopicNo: data.rows.item(i).TopicNo, TopicName: data.rows.item(i).TopicName, Content: data.rows.item(i).Content, ImgName: data.rows.item(i).ImgName, ImgUrl: data.rows.item(i).ImgUrl });
                }
            }
            return contentList;
        }, err => {
            alert('getContent Error: ' + err);
            return [];
        });
    }
    getDatabaseState() {
        return this.databaseReady.asObservable();
    }
    addFAQDetail(result) {
        var query = "INSERT INTO FAQDetail(FaqId,FaqSeqNo,MethodId,MethodName,LanguageId,Question,Answer) VALUES";
        var data = [];
        var rowArgs = [];
        result.forEach(function (faqDetail) {
            rowArgs.push("(?, ?, ?, ?, ?, ?, ?)");
            data.push(faqDetail.FaqId);
            data.push(faqDetail.FaqSeqNo);
            data.push(faqDetail.MethodId);
            data.push(faqDetail.MethodName);
            data.push(faqDetail.LanguageId);
            data.push(faqDetail.Question);
            data.push(faqDetail.Answer);
        });
        query += rowArgs.join(", ");
        return this.database.executeSql(query, data).then(data => {
            return data;
        }, err => {
            alert('Error addFAQDetail: ' + JSON.stringify(err));
            return err;
        });
    }
    getFAQDetail(MethodId, LanguageId) {
        return this.database.executeSql("select * from FAQDetail WHERE MethodId='" + MethodId + "' AND LanguageId='" + LanguageId + "'", []).then((data) => {
            let faqList = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    faqList.push({ FaqId: data.rows.item(i).FaqId, FaqSeqNo: data.rows.item(i).FaqSeqNo + "ASC", MethodId: data.rows.item(i).MethodId, MethodName: data.rows.item(i).MethodName, LanguageId: data.rows.item(i).LanguageId, Question: data.rows.item(i).Question, Answer: data.rows.item(i).Answer });
                }
            }
            return faqList;
        }, err => {
            alert('getFAQDetail Error: ' + err);
            return [];
        });
    }
    addKeyMessageDetail(result) {
        var query = "INSERT INTO KeyMessageDetail(KeyMessageId,LanguageId,KeyMessageImage,KeyMessageHeading,Content,ContentImage) VALUES";
        var data = [];
        var rowArgs = [];
        result.forEach(function (keyMessage) {
            rowArgs.push("(?, ?, ?, ?, ?, ?)");
            data.push(keyMessage.KeyMessageId);
            data.push(keyMessage.LanguageId);
            data.push(keyMessage.KeyMessageImage);
            data.push(keyMessage.KeyMessageHeading);
            data.push(keyMessage.Content);
            data.push(keyMessage.ContentImage);
        });
        query += rowArgs.join(", ");
        return this.database.executeSql(query, data).then(data => {
            return data;
        }, err => {
            alert('Error addKeyMessageDetail: ' + JSON.stringify(err));
            return err;
        });
    }
    getKeyMessageDetail(LanguageId) {
        return this.database.executeSql("select * from KeyMessageDetail WHERE LanguageId='" + LanguageId + "'", []).then((data) => {
            let keyMessageDetailList = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    keyMessageDetailList.push({ KeyMessageId: data.rows.item(i).KeyMessageId, LanguageId: data.rows.item(i).LanguageId, KeyMessageImage: data.rows.item(i).KeyMessageImage, KeyMessageHeading: data.rows.item(i).KeyMessageHeading, Content: data.rows.item(i).Content, ContentImage: data.rows.item(i).ContentImage });
                }
            }
            return keyMessageDetailList;
        }, err => {
            alert('getKeyMessageDetail Error: ' + err);
            return [];
        });
    }
    addAskQuestionsDetailsLive(result) {
        var query = "INSERT INTO AskQuestions(FeedbackId,ClientUserId,DeviceId,LanguageId,Feedback,SubmittedDateTime,Response,ResponseDateTime,Statuss) VALUES";
        var data = [];
        var rowArgs = [];
        result.forEach(function (askQuestion) {
            rowArgs.push("(?, ?, ?, ?, ?, ?, ?, ?, ?)");
            data.push(askQuestion.FeedbackId);
            data.push(askQuestion.ClientUserId);
            data.push(askQuestion.DeviceId);
            data.push(askQuestion.LanguageId);
            data.push(askQuestion.Feedback);
            data.push(askQuestion.SubmittedDateTime);
            data.push(askQuestion.Response);
            data.push(askQuestion.ResponseDateTime);
            data.push(askQuestion.Status);
        });
        query += rowArgs.join(", ");
        return this.database.executeSql(query, data).then(data => {
            return data;
        }, err => {
            alert('Error addAskQuestionsDetailsLive: ' + JSON.stringify(err));
            return err;
        });
    }
    addAskQuestionsDetails(result) {
        var query = "INSERT INTO AskQuestions(FeedbackId,ClientUserId,DeviceId,LanguageId,Feedback,SubmittedDateTime) VALUES";
        var data = [];
        var rowArgs = [];
        result.forEach(function (askQuestion) {
            rowArgs.push("(?, ?, ?, ?, ? , ?)");
            data.push("0");
            data.push(askQuestion.ClientUserId);
            data.push(askQuestion.DeviceId);
            data.push(askQuestion.LanguageId);
            data.push(askQuestion.Feedback);
            data.push(askQuestion.SubmittedDateTime);
        });
        query += rowArgs.join(", ");
        return this.database.executeSql(query, data).then(data => {
            return data;
        }, err => {
            alert('Error addAskQuestionsDetails: ' + JSON.stringify(err));
            return err;
        });
    }
    getAskQuestionsDetails() {
        return this.database.executeSql("select * from AskQuestions ORDER BY ID DESC", []).then((data) => {
            let questionList = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    questionList.push({ ID: data.rows.item(i).ID, FeedbackId: data.rows.item(i).FeedbackId, ClientUserId: data.rows.item(i).ClientUserId, DeviceId: data.rows.item(i).DeviceId, LanguageId: data.rows.item(i).LanguageId, Feedback: data.rows.item(i).Feedback, SubmittedDateTime: data.rows.item(i).SubmittedDateTime, Response: data.rows.item(i).Response, ResponseDateTime: data.rows.item(i).ResponseDateTime, Statuss: data.rows.item(i).Statuss });
                }
            }
            return questionList;
        }, err => {
            alert('GetquestionList Error: ' + err);
            return [];
        });
    }
    getAskQuestionsDetailsLive() {
        return this.database.executeSql("select * from AskQuestions WHERE FeedbackId='0' ORDER BY ID ASC", []).then((data) => {
            let questionList = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    questionList.push({ ClientUserId: data.rows.item(i).ClientUserId, DeviceId: data.rows.item(i).DeviceId, LanguageId: data.rows.item(i).LanguageId, Feedback: data.rows.item(i).Feedback, SubmittedDateTime: data.rows.item(i).SubmittedDateTime });
                }
            }
            return questionList;
        }, err => {
            alert('getAskQuestionsDetailsLive Error: ' + err);
            return [];
        });
    }
    deletAskQuestionDetails() {
        var query = "delete from AskQuestions";
        return this.database.executeSql(query, []).then(data => {
            return true;
        }, err => {
            alert('Error AskQuestions: ' + JSON.stringify(err));
            return false;
        });
    }
    // addQuizCategory(result) {
    //   var query = "INSERT INTO QuizCategoryDetail(QuizCategoryId,LanguageId,QuizCategoryName) VALUES";
    //   var data = [];
    //   var rowArgs = [];
    //   result.forEach(function (quizCategory) {
    //           rowArgs.push("(?, ?, ?)");
    //           data.push(quizCategory.QuizCategoryId);
    //           data.push(quizCategory.LanguageId);
    //           data.push(quizCategory.QuizCategoryName);          
    //     });
    //   query += rowArgs.join(", ");
    //   return this.database.executeSql(query,data).then(data => {
    //     return data;
    //   }, err => {
    //     alert('Error addQuizCategory: '+ JSON.stringify(err));
    //     return err;
    //   });
    // }
    // getQuizCategory(LanguageId) {
    //   return this.database.executeSql("select * from QuizCategoryDetail WHERE LanguageId='"+ LanguageId + "'", []).then((data) => {
    //     let quizCategory = [];
    //     if (data.rows.length > 0) {
    //       for (var i = 0; i < data.rows.length; i++) {
    //         quizCategory.push({ QuizCategoryId: data.rows.item(i).QuizCategoryId,LanguageId: data.rows.item(i).LanguageId, QuizCategoryName: data.rows.item(i).QuizCategoryName});
    //       }
    //     }
    //     return quizCategory;
    //   }, err => {
    //     alert('getQuizCategory Error: '+ err);
    //     return [];
    //   });
    // }
    addQuizQuestions(result) {
        var query = "INSERT INTO QuizQuestions(QuestionNo,QuestionText,LanguageId,QuestionLevel) VALUES";
        var data = [];
        var rowArgs = [];
        result.forEach(function (quizQuestion) {
            rowArgs.push("(? ,?, ?, ?)");
            data.push(quizQuestion.QuestionNo);
            data.push(quizQuestion.QuestionText);
            data.push(quizQuestion.LanguageId);
            data.push(parseInt(quizQuestion.QuestionLevel));
        });
        query += rowArgs.join(", ");
        return this.database.executeSql(query, data).then(data => {
            return data;
        }, err => {
            alert('Error addQuizQuestions: ' + JSON.stringify(err));
            return err;
        });
    }
    updateQuizQuestions(correctAnswer, questionLevel, languageId) {
        // tslint:disable-next-line:max-line-length
        return this.database.executeSql('update QuizQuestions set CorrectAnswer ="' + correctAnswer + '" WHERE QuestionLevel="' + questionLevel + '" AND LanguageId="' + languageId + '"', []).then(data => {
            return data;
        }, err => {
            alert('updateQuizQuestions Error: ' + err);
            return err;
        });
    }
    updateQuizQuestionsForDay(questionLevel, languageId) {
        const d = new Date();
        const startTime = d.getFullYear().toString() + '-' + this.formatNumber((d.getMonth() + 1).toString()) + '-' + this.formatNumber(d.getDate().toString()) + ' ' + this.formatNumber(d.getHours().toString()) + ':' + this.formatNumber(d.getMinutes().toString()) + ':' + this.formatNumber(d.getSeconds().toString());
        console.log(startTime);
        console.log('update QuizQuestions set StartDateTime ="' + startTime + '" WHERE (QuestionLevel="' + questionLevel + '" AND LanguageId="' + languageId + '" AND   StartDateTime = "null" ');
        // tslint:disable-next-line:max-line-length
        return this.database.executeSql('update QuizQuestions set StartDateTime ="' + startTime + '" WHERE (QuestionLevel="' + questionLevel + '" AND LanguageId="' + languageId + '" AND  StartDateTime = "null")', []).then(data => {
            return data;
        }, err => {
            alert('updateQuizQuestionsForDay Error: ' + err);
            return err;
        });
    }
    updateQuizQuestionsAfterTwoDays(questionLevel, languageId) {
        const d = new Date();
        const startTime = d.getFullYear().toString() + '-' + this.formatNumber((d.getMonth() + 1).toString()) + '-' + this.formatNumber(d.getDate().toString()) + ' ' + this.formatNumber(d.getHours().toString()) + ':' + this.formatNumber(d.getMinutes().toString()) + ':' + this.formatNumber(d.getSeconds().toString());
        console.log(startTime);
        console.log('update QuizQuestions set StartDateTime ="' + startTime + '" WHERE (QuestionLevel="' + questionLevel + '" AND LanguageId="' + languageId + '"');
        // tslint:disable-next-line:max-line-length
        return this.database.executeSql('update QuizQuestions set StartDateTime ="' + startTime + '" WHERE (QuestionLevel="' + questionLevel + '" AND LanguageId="' + languageId + '" )', []).then(data => {
            return data;
        }, err => {
            alert('updateQuizQuestionsAfterTwoDays Error: ' + err);
            return err;
        });
    }
    getQuizQuestions(questionLevel, LanguageId) {
        return this.database.executeSql("select * from QuizQuestions WHERE QuestionLevel ='" + questionLevel + "' AND LanguageId='" + LanguageId + "'", []).then((data) => {
            let quizQuestion = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    quizQuestion.push({ QuestionNo: data.rows.item(i).QuestionNo, QuestionText: data.rows.item(i).QuestionText, LanguageId: data.rows.item(i).LanguageId, QuestionLevel: data.rows.item(i).QuestionLevel });
                }
            }
            return quizQuestion;
        }, err => {
            alert('GetquestionList Error: ' + err);
            return [];
        });
    }
    addQuizQuestionOptions(result) {
        var query = "INSERT INTO QuizQuestionOptions(QuestionNo,QuestionOptions,LanguageId,CorrectAnswer,QuestionLevel) VALUES";
        var data = [];
        var rowArgs = [];
        result.forEach(function (quizQuestionOptions) {
            rowArgs.push("(?, ?, ?, ?, ?)");
            data.push(quizQuestionOptions.QuestionNo);
            data.push(quizQuestionOptions.QuestionOptions);
            data.push(quizQuestionOptions.LanguageId);
            data.push(quizQuestionOptions.CorrectAnswer);
            data.push(quizQuestionOptions.QuestionLevel);
        });
        query += rowArgs.join(", ");
        return this.database.executeSql(query, data).then(data => {
            return data;
        }, err => {
            alert('Error addQuizQuestionOptions: ' + JSON.stringify(err));
            return err;
        });
    }
    getQuizQuestionOptions(QuestionLevel, LanguageId) {
        return this.database.executeSql("select * from QuizQuestionOptions WHERE QuestionLevel='" + QuestionLevel + "' AND LanguageId='" + LanguageId + "'", []).then((data) => {
            let getQuestionOptions = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    getQuestionOptions.push({ QuestionNo: data.rows.item(i).QuestionNo, QuestionOptions: data.rows.item(i).QuestionOptions, LanguageId: data.rows.item(i).LanguageId, CorrectAnswer: data.rows.item(i).CorrectAnswer, QuestionLevel: data.rows.item(i).QuestionLevel });
                }
            }
            return getQuestionOptions;
        }, err => {
            alert('getQuizQuestionOptions Error: ' + err);
            return [];
        });
    }
    getAnswerByQuestion(QuestionLevel, QuestionNo, LanguageId) {
        var CorrectAnswer = "1";
        return this.database.executeSql("select * from QuizQuestionOptions WHERE  QuestionLevel='" + QuestionLevel + "' AND QuestionNo = '" + QuestionNo + "'  AND CorrectAnswer='" + CorrectAnswer + "' AND LanguageId='" + LanguageId + "'", []).then((data) => {
            let correctAnswer = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    correctAnswer.push({ QuestionNo: data.rows.item(i).QuestionNo, QuestionOptions: data.rows.item(i).QuestionOptions, LanguageId: data.rows.item(i).LanguageId, CorrectAnswer: data.rows.item(i).CorrectAnswer, QuestionLevel: data.rows.item(i).QuestionLevel });
                }
            }
            return correctAnswer;
        }, err => {
            alert('getQuizQuestionOptions Error: ' + err);
            return [];
        });
    }
    getQuizLevel(languageId) {
        const query = 'SELECT distinct  QuestionLevel  as Levels , CorrectAnswer as count FROM QuizQuestions where LanguageId = "' + languageId + '" group by QuestionLevel ORDER BY QuestionLevel DESC';
        console.log(query);
        const ths = this;
        return ths.database.executeSql(query, []).then(data => {
            let levelContent = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    levelContent.push({ LevelId: data.rows.item(i).Levels, Count: data.rows.item(i).count });
                }
            }
            // console.log(data.rows.item(0).Levels);
            //  return data.rows.item(0).Levels;
            return levelContent;
        }, err => {
            alert('Error getQuizLevel: ' + JSON.stringify(err));
            return err;
        });
    }
    updateCorrectAnswerCount() {
        // tslint:disable-next-line:max-line-length
        return this.database.executeSql('update QuizQuestions set CorrectAnswer = null , StartDateTime = null', []).then(data => {
            return data;
        }, err => {
            alert('updateCorrectAnswerCount Error: ' + err);
            return err;
        });
    }
    getLastTimeOfQuiz(questionLevel, languageId) {
        const query = 'SELECT  StartDateTime  as startDateTime FROM QuizQuestions where LanguageId = "' + languageId + '" AND QuestionLevel = "' + questionLevel + '" group by QuestionLevel';
        console.log(query);
        const ths = this;
        return ths.database.executeSql(query, []).then(data => {
            let lastTime = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    lastTime.push({ StartTime: data.rows.item(i).startDateTime });
                }
            }
            return lastTime;
        }, err => {
            alert('Error getQuizLevel: ' + JSON.stringify(err));
            return err;
        });
    }
    addGetOtherContent(result, ContentType) {
        var query = "INSERT INTO GetOtherContent(ContentType,ContentId,LanguageId,Content,ImgName,ImgUrl) VALUES";
        var data = [];
        var rowArgs = [];
        result.forEach(function (getOtherContent) {
            rowArgs.push("(?, ?, ?, ?,?,?)");
            data.push(ContentType);
            data.push(getOtherContent.ContentId);
            data.push(getOtherContent.LanguageId);
            data.push(getOtherContent.Content);
            data.push(getOtherContent.ImgName);
            data.push(getOtherContent.ImgUrl);
        });
        query += rowArgs.join(", ");
        return this.database.executeSql(query, data).then(data => {
            return data;
        }, err => {
            alert('Error addGetOtherContent: ' + JSON.stringify(err));
            return err;
        });
    }
    getGetOtherContent(ContentType, LanguageId) {
        return this.database.executeSql("select * from GetOtherContent WHERE ContentType ='" + ContentType + "' AND LanguageId='" + LanguageId + "'", []).then((data) => {
            let otherContent = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    otherContent.push({ ContentType: data.rows.item(i).ContentType, ContentId: data.rows.item(i).ContentId, LanguageId: data.rows.item(i).LanguageId, Content: data.rows.item(i).Content, ImgName: data.rows.item(i).ImgName, ImgUrl: data.rows.item(i).ImgUrl });
                }
            }
            return otherContent;
        }, err => {
            alert('getGetOtherContent Error: ' + err);
            return [];
        });
    }
    dropTables() {
        var ths = this;
        var query = "delete from Methodsdata";
        var query1 = "delete from TopicsContent";
        var query2 = "delete from FAQDetail";
        var query3 = "delete from KeyMessageDetail";
        var query4 = "delete from AskQuestions";
        var query5 = "delete from QuizQuestions";
        var query6 = "delete from QuizQuestionOptions";
        var query7 = "delete from GetOtherContent";
        return ths.database.executeSql(query, []).then(data => {
            return ths.database.executeSql(query1, []).then(data => {
                return ths.database.executeSql(query2, []).then(data => {
                    return ths.database.executeSql(query3, []).then(data => {
                        return ths.database.executeSql(query4, []).then(data => {
                            return ths.database.executeSql(query5, []).then(data => {
                                return ths.database.executeSql(query6, []).then(data => {
                                    return ths.database.executeSql(query7, []).then(data => {
                                        return true;
                                    }, err => {
                                        alert('Error dropTables8: ' + JSON.stringify(err));
                                        return false;
                                    });
                                }, err => {
                                    alert('Error dropTables7: ' + JSON.stringify(err));
                                    return false;
                                });
                            }, err => {
                                alert('Error dropTables6: ' + JSON.stringify(err));
                                return false;
                            });
                        }, err => {
                            alert('Error dropTables5: ' + JSON.stringify(err));
                            return false;
                        });
                    }, err => {
                        alert('Error dropTables4: ' + JSON.stringify(err));
                        return false;
                    });
                }, err => {
                    alert('Error dropTables3: ' + JSON.stringify(err));
                    return false;
                });
            }, err => {
                alert('Error dropTables2: ' + JSON.stringify(err));
                return false;
            });
        }, err => {
            alert('Error dropTables1: ' + JSON.stringify(err));
            return false;
        });
    }
    addGetTime(userId, roleId, addeddate, languageId, contentType, startTime) {
        var data = [userId, roleId, addeddate, languageId, contentType, '', startTime, ''];
        const query = "INSERT INTO GetTime(UserId,RoleId,AddedDate,LanguageId,ContentType,MethodId,StartDateTime,EndDateTime) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        console.log(query);
        return this.database.executeSql(query, data).then(data => {
            console.log(data);
            return data;
        }, err => {
            alert('Error addGetTime: ' + JSON.stringify(err));
            return err;
        });
    }
    addGetDateTime(result) {
        var query = 'INSERT INTO GetTime(UserId,RoleId,AddedDate,LanguageId,ContentType,MethodId,StartDateTime,EndDateTime)   SELECT * FROM(Select "' + result.UserId + '", "' + result.RoleId + '", "' + result.AddedDate + '", "' + result.LanguageId + '", "' + result.ContentType + '", "' + result.MethodId + '", "' + result.StartDateTime + '", "' + result.EndDateTime + '")';
        console.log(query);
        return this.database.executeSql(query, []).then(data => {
            return data;
        }, err => {
            alert('Error addGetDateTime: ' + JSON.stringify(err));
            return err;
        });
    }
    addMethodGetTime(userId, roleId, addeddate, languageId, contentType, methodId, startTime) {
        var data = [userId, roleId, addeddate, languageId, contentType, methodId, startTime, ''];
        const query = "INSERT INTO GetTime(UserId,RoleId,AddedDate,LanguageId,ContentType,MethodId,StartDateTime,EndDateTime) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        console.log(query);
        return this.database.executeSql(query, data).then(data => {
            console.log(data);
            return data;
        }, err => {
            alert('Error addMethodGetTime: ' + JSON.stringify(err));
            return err;
        });
    }
    getGetTime() {
        return this.database.executeSql("select * from GetTime ", []).then((data) => {
            let otherContent = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    var totalTimeDifference = this.timeDifference(data.rows.item(i).StartDateTime, data.rows.item(i).EndDateTime);
                    otherContent.push({ UserId: data.rows.item(i).UserId, RoleId: data.rows.item(i).RoleId, AddedDate: data.rows.item(i).AddedDate, LanguageId: data.rows.item(i).LanguageId, ContentType: data.rows.item(i).ContentType, MethodId: data.rows.item(i).MethodId, StartDateTime: data.rows.item(i).StartDateTime, EndDateTime: data.rows.item(i).EndDateTime, TimeInMilliSec: totalTimeDifference });
                }
            }
            return otherContent;
        }, err => {
            alert('getGetTime Error: ' + err);
            return [];
        });
    }
    timeDifference(startTime, endTime) {
        var d1 = new Date(startTime);
        var d2 = new Date(endTime);
        var difference = Math.abs(d2 - d1);
        console.log('Difference between Two Dates>>>>>>' + difference);
        return difference;
    }
    millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return this.formatNumber(minutes) + ":" + this.formatNumber(seconds);
    }
    updateGetTime(startTime) {
        const d = new Date();
        const endTime = d.getFullYear().toString() + '-' + this.formatNumber((d.getMonth() + 1).toString()) + '-' + this.formatNumber(d.getDate().toString()) + ' ' + this.formatNumber(d.getHours().toString()) + ':' + this.formatNumber(d.getMinutes().toString()) + ':' + this.formatNumber(d.getSeconds().toString());
        console.log(endTime);
        return this.database.executeSql('update GetTime set EndDateTime = "' + endTime + '" where StartDateTime = "' + startTime + '"', []).then(data => {
            return data;
        }, err => {
            alert('updateGetTime Error: ' + err);
            return err;
        });
    }
    deletGetDateTime() {
        var query = "delete from GetTime";
        return this.database.executeSql(query, []).then(data => {
            return true;
        }, err => {
            alert('Error deletGetDateTime: ' + JSON.stringify(err));
            return false;
        });
    }
};
DatabaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite_porter__["a" /* SQLitePorter */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], DatabaseProvider);

//# sourceMappingURL=database.service.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_database_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_sqlite_porter__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_text_to_speech__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_device__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_video_player_ngx__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_img_viewer__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_photo_viewer__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_zip__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/ask-us/ask-us.module#AskUsPageModule', name: 'AskUsPage', segment: 'ask-us', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/faq-methods/faq-methods.module#FaqMethodsPageModule', name: 'FaqMethodsPage', segment: 'faq-methods', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/fp-overview/fp-overview.module#FpOverviewPageModule', name: 'FpOverviewPage', segment: 'fp-overview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/incentives/incentives.module#IncentivesPageModule', name: 'IncentivesPage', segment: 'incentives', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/key-content/key-content.module#KeyContentPageModule', name: 'KeyContentPage', segment: 'key-content', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/methods/methods.module#MethodsPageModule', name: 'MethodsPage', segment: 'methods', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/key-message/key-message.module#KeyMessagePageModule', name: 'KeyMessagePage', segment: 'key-message', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tool-one/tool-one.module#ToolOnePageModule', name: 'ToolOnePage', segment: 'tool-one', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/quiz/quiz.module#QuizPageModule', name: 'QuizPage', segment: 'quiz', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'user-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/quiz-category/quiz-category.module#QuizCategoryPageModule', name: 'QuizCategoryPage', segment: 'quiz-category', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/topics-content/topics-content.module#TopicsContentPageModule', name: 'TopicsContentPage', segment: 'topics-content', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/topics-list/topics-list.module#TopicsListPageModule', name: 'TopicsListPage', segment: 'topics-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tool-two/tool-two.module#ToolTwoPageModule', name: 'ToolTwoPage', segment: 'tool-two', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/library/library.module#LibraryPageModule', name: 'LibraryPage', segment: 'library', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_16_ionic_img_viewer__["b" /* IonicImageViewerModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_9__providers_database_service__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_sqlite_porter__["a" /* SQLitePorter */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_video_player_ngx__["a" /* VideoPlayer */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_text_to_speech__["a" /* TextToSpeech */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_zip__["a" /* Zip */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_enum__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let MyApp = class MyApp {
    constructor(platform, statusBar, splashScreen, eNumValue, tts) {
        this.eNumValue = eNumValue;
        this.tts = tts;
        this.showSplash = true;
        this.rootPage = "HomePage";
        platform.ready().then(() => {
            // statusBar.styleDefault();
            statusBar.overlaysWebView(false);
            splashScreen.hide();
            this.tts.speak({
                text: 'Welcome to the family planning app. A digital tool for capacity building.',
                locale: 'en-IN',
            }).then(() => console.log('Success'))
                .catch((reason) => console.log(reason));
            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(6000).subscribe(() => this.showSplash = false);
        });
    }
};
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nitish/Documents/pathfinder/src/app/app.html"*/'<div *ngIf="showSplash" class="showSplash">\n    <img src="assets/imgs/1_landing_page.png">\n    <!-- <div class="spinner">\n        <div class="cube1"></div>\n        <div class="cube2"></div>\n    </div> -->\n</div>\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/nitish/Documents/pathfinder/src/app/app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_app_enum__["a" /* AppEnum */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_app_enum__["a" /* AppEnum */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__["a" /* TextToSpeech */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[362]);
//# sourceMappingURL=main.js.map