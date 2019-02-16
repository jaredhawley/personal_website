(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _reading_list_reading_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reading-list/reading-list.component */ "./src/app/reading-list/reading-list.component.ts");
/* harmony import */ var _cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cover-letter/cover-letter.component */ "./src/app/cover-letter/cover-letter.component.ts");








var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    },
    {
        path: 'resume',
        component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"]
    },
    {
        path: 'readinglist',
        component: _reading_list_reading_list_component__WEBPACK_IMPORTED_MODULE_6__["ReadingListComponent"]
    },
    {
        path: 'coverletter',
        component: _cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_7__["CoverLetterComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat');\r\n\r\nbody {\r\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#a1dbff+0,3fb8ff+24,a1dbff+47,ffffff+100 */\r\n    background: #a1dbff; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n    background: linear-gradient(45deg, #a1dbff 0%,#3fb8ff 25%,#a1dbff 50%,#ffffff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a1dbff', endColorstr='#ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    /* overflow: hidden; */\r\n    font-family: 'Montserrat';\r\n    padding: 0;\r\n    height: 100%;\r\n}\r\n\r\n@media only screen and (min-width: 786px) {\r\n    body {\r\n        display: block;\r\n        padding: 2em;\r\n        height: calc(100% - 4em);\r\n        min-height: 500px;\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0VBQWtFOztBQUVsRTtJQUNJLHFJQUFxSTtJQUNySSxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FDc0QsY0FBYyxDQUNkLDZCQUE2QjtJQUMxSCxvRkFBb0YsQ0FBQyxzREFBc0Q7SUFDM0ksb0hBQW9ILENBQUMsMkNBQTJDO0lBQ2hLLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsYUFBYTtDQUNoQjs7QUFFRDtJQUNJO1FBQ0ksZUFBZTtRQUNmLGFBQWE7UUFDYix5QkFBeUI7UUFDekIsa0JBQWtCO0tBQ3JCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCcpO1xyXG5cclxuYm9keSB7XHJcbiAgICAvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cDovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jYTFkYmZmKzAsM2ZiOGZmKzI0LGExZGJmZis0NyxmZmZmZmYrMTAwICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjYTFkYmZmOyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjYTFkYmZmIDAlLCAjM2ZiOGZmIDI1JSwgI2ExZGJmZiA1MCUsICNmZmZmZmYgMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ExZGJmZiAwJSwjM2ZiOGZmIDI1JSwjYTFkYmZmIDUwJSwjZmZmZmZmIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjYTFkYmZmIDAlLCMzZmI4ZmYgMjUlLCNhMWRiZmYgNTAlLCNmZmZmZmYgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNhMWRiZmYnLCBlbmRDb2xvcnN0cj0nI2ZmZmZmZicsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzg2cHgpIHtcclxuICAgIGJvZHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDJlbTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDRlbSk7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Jared Hawley</title>\n  </head>\n  <body>\n    <app-nav-bar></app-nav-bar>\n  </body>\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cover-letter/cover-letter.component */ "./src/app/cover-letter/cover-letter.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _reading_list_reading_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reading-list/reading-list.component */ "./src/app/reading-list/reading-list.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__["ResumeComponent"],
                _cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_8__["CoverLetterComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _reading_list_reading_list_component__WEBPACK_IMPORTED_MODULE_10__["ReadingListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    height: 100%;\r\n    background: white url('bg.svg') no-repeat bottom right;\r\n    background-size: 82%;\r\n    font-size: 1.2em;\r\n}\r\n\r\n#scalable_padding{\r\n    padding: 6%;\r\n}\r\n\r\n#contact_card {\r\n    position: relative;\r\n    border: solid black .1em;\r\n    width: auto;\r\n\r\n    background: white;\r\n    -webkit-filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));\r\n            filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n    padding-bottom: 0.75em;\r\n}\r\n\r\nh3 {\r\n    color: black;\r\n    margin: 0;\r\n    padding: 1em 1em;\r\n    font-weight: bolder;\r\n}\r\n\r\nul{\r\n    margin: 0;\r\n    padding: 0em 1em;\r\n    vertical-align: middle;\r\n    line-height: 2em;\r\n}\r\n\r\nli {\r\n    display: inline;\r\n    font-size: 1em;\r\n    display: flex;\r\n    padding-bottom: 1em;\r\n    margin: 0em 0em;\r\n    list-style-type: none;\r\n}\r\n\r\n.e{\r\n    margin-right: .5em;\r\n    display: inline;\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n\r\nimg.linkedIn-logo{\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\na {\r\n    display: flex;\r\n    position: relative;\r\n    left: 0em;\r\n}\r\n\r\nimg{\r\n    cursor: pointer;\r\n}\r\n\r\n#linkedin{\r\n    display: inline;\r\n    cursor: pointer;\r\n}\r\n\r\n@media only screen and (min-width: 786px) {\r\n\r\nbody {\r\n    -webkit-filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));\r\n            filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));\r\n    font-size: 1.5em;\r\n}\r\n\r\n#contact_card {\r\n    max-width: 20em;\r\n}\r\n\r\nimg.linkedIn-logo{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdURBQTZFO0lBQzdFLHFCQUFxQjtJQUNyQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLDREQUFvRDtZQUFwRCxvREFBb0Q7Q0FDdkQ7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDekI7O0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsVUFBVTtDQUNiOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtDQUNuQjs7QUFFRDs7QUFFQTtJQUNJLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0NBRUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGUgdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcuc3ZnJykgbm8tcmVwZWF0IGJvdHRvbSByaWdodDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogODIlO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuI3NjYWxhYmxlX3BhZGRpbmd7XHJcbiAgICBwYWRkaW5nOiA2JTtcclxufVxyXG5cclxuI2NvbnRhY3RfY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIC4xZW07XHJcbiAgICB3aWR0aDogYXV0bztcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coOHB4IDhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVlbTtcclxufVxyXG5cclxuaDMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMWVtIDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbnVse1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMGVtIDFlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBsaW5lLWhlaWdodDogMmVtO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgbWFyZ2luOiAwZW0gMGVtO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbi5le1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmltZy5saW5rZWRJbi1sb2dve1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDBlbTtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jbGlua2VkaW57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0gXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc4NnB4KSB7XHJcblxyXG5ib2R5IHtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coOHB4IDhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbiNjb250YWN0X2NhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAyMGVtO1xyXG59XHJcblxyXG5pbWcubGlua2VkSW4tbG9nb3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"scalable_padding\">\n    <h1>Contact Me:</h1>\n    <div id=\"contact_card\">\n      <h3>Jared Hawley</h3>\n      <ul>\n          <li>\n            <div class=\"e\">Phone:</div>1-609-556-2466\n          </li>\n\n          <li>\n            <div class=\"e\">Email: </div>j.yelwah@gmail.com \n          </li>\n\n          <li>\n            <div class=\"e\">LinkedIn Profile:\n              \n            </div>\n            <a id=\"linkedIn\" (click)=this.openLinkedIn()>\n                <img class= \"image linkedIn-logo\" src=\"http://www.theredbrickroad.com/wp-content/uploads/2017/05/linkedin-logo-copy.png\">\n            </a>\n          </li>\n      </ul>\n    </div>\n  </div>\n</body>\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.openLinkedIn = function () {
        window.open('https://www.linkedin.com/in/jared-hawley-a6094112a/');
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/cover-letter/cover-letter.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cover-letter/cover-letter.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    height: 100%;\r\n    background: white url('bg.svg') no-repeat bottom right;\r\n    background-size: 82%;\r\n    -webkit-filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));\r\n            filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY292ZXItbGV0dGVyL2NvdmVyLWxldHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVEQUE2RTtJQUM3RSxxQkFBcUI7SUFDckIsNERBQW9EO1lBQXBELG9EQUFvRDtDQUN2RCIsImZpbGUiOiJzcmMvYXBwL2NvdmVyLWxldHRlci9jb3Zlci1sZXR0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSB1cmwoJy4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy5zdmcnKSBuby1yZXBlYXQgYm90dG9tIHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MiU7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDhweCA4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cover-letter/cover-letter.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cover-letter/cover-letter.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <embed src=\"'./../../assets/jaredhawleycoverletter.pdf\" type=\"application/pdf\" width=\"100%\" height=\"100%\">\n</body>"

/***/ }),

/***/ "./src/app/cover-letter/cover-letter.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cover-letter/cover-letter.component.ts ***!
  \********************************************************/
/*! exports provided: CoverLetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverLetterComponent", function() { return CoverLetterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoverLetterComponent = /** @class */ (function () {
    function CoverLetterComponent() {
    }
    CoverLetterComponent.prototype.ngOnInit = function () {
    };
    CoverLetterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cover-letter',
            template: __webpack_require__(/*! ./cover-letter.component.html */ "./src/app/cover-letter/cover-letter.component.html"),
            styles: [__webpack_require__(/*! ./cover-letter.component.css */ "./src/app/cover-letter/cover-letter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoverLetterComponent);
    return CoverLetterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    height: 100%;\r\n    background: white url('bg.svg') no-repeat bottom right;\r\n    background-size: 82%;\r\n}\r\n.sourceCodeButton{\r\n    margin: 1em;\r\n    display: block;\r\n    color: white;\r\n    background: royalblue;\r\n    text-decoration: none;\r\n    padding: 1em 1em;\r\n    font-size: 1em;\r\n    font-weight: bold;\r\n    border-radius: 4px;\r\n    -webkit-filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));\r\n            filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));\r\n    text-align: center;\r\n    top: calc(12em + 15%);\r\n    min-width: 80px;\r\n}\r\nh1 {\r\n    margin: 0;\r\n    padding: 3em 2em 2em 2em;\r\n    font-size: 1.25em;\r\n    text-align: center;\r\n    \r\n}\r\nh2 {\r\n    margin: 0;\r\n    padding: 0 3em;\r\n    font-size: 1em;\r\n    font-weight: normal;\r\n    text-align: right;\r\n}\r\nh3 {\r\n    font-size: 1em;\r\n    color: white;\r\n    font-style: italic;\r\n    position: absolute;\r\n    right: 2em;\r\n    bottom: 1em;\r\n    display: none;\r\n}\r\n@media only screen and (min-width: 786px) {\r\n    body{\r\n        -webkit-filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));\r\n                filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));\r\n    }\r\n\r\n    h1 {\r\n        font-size: 2em;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 1.5em;\r\n    }\r\n    h3{\r\n        display: inline;\r\n    }\r\n\r\n    .sourceCodeButton{\r\n        margin: 2em;\r\n        flex: content;\r\n        top: calc(20em + 10%);\r\n        width: 14em;\r\n    }\r\n}\r\n@media only screen and (min-width: 1700px) {\r\n    .sourceCodeButton{\r\n        margin: 4em;\r\n        padding: 1em;\r\n        font-size: 1.5em;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdURBQTZFO0lBQzdFLHFCQUFxQjtDQUN4QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1COztDQUV0QjtBQUVEO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtDQUNyQjtBQUVEO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztDQUNqQjtBQUVEO0lBQ0k7UUFDSSw0REFBb0Q7Z0JBQXBELG9EQUFvRDtLQUN2RDs7SUFFRDtRQUNJLGVBQWU7S0FDbEI7O0lBRUQ7UUFDSSxpQkFBaUI7S0FDcEI7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLFlBQVk7UUFDWixjQUFjO1FBQ2Qsc0JBQXNCO1FBQ3RCLFlBQVk7S0FDZjtDQUNKO0FBRUQ7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsaUJBQWlCO0tBQ3BCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSB1cmwoJy4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy5zdmcnKSBuby1yZXBlYXQgYm90dG9tIHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MiU7XHJcbn1cclxuLnNvdXJjZUNvZGVCdXR0b257XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogcm95YWxibHVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMWVtIDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDhweCA4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IGNhbGMoMTJlbSArIDE1JSk7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDNlbSAyZW0gMmVtIDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgM2VtO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDJlbTtcclxuICAgIGJvdHRvbTogMWVtO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3ODZweCkge1xyXG4gICAgYm9keXtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDhweCA4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgfVxyXG4gICAgaDN7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG5cclxuICAgIC5zb3VyY2VDb2RlQnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMmVtO1xyXG4gICAgICAgIGZsZXg6IGNvbnRlbnQ7XHJcbiAgICAgICAgdG9wOiBjYWxjKDIwZW0gKyAxMCUpO1xyXG4gICAgICAgIHdpZHRoOiAxNGVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE3MDBweCkge1xyXG4gICAgLnNvdXJjZUNvZGVCdXR0b257XHJcbiAgICAgICAgbWFyZ2luOiA0ZW07XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <h1>\"If you didn’t learn these things in order to demonstrate them in practice, what did you learn them for?\"</h1>\n  <h2>- Marcus Aurelius</h2>\n  <div style=\"display:flex; justify-content: center;\">\n    <a href=\"https://github.com/yelwah/personal_website\" class=\"sourceCodeButton\" target=\"_blank\">Source Code for This Site</a>\n  </div>\n  <h3> Try me on mobile</h3>\n</body>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    display: grid;\r\n    grid-template-rows: 3.6em auto;\r\n    grid-template-columns: auto;\r\n}\r\naside {\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\nimg.menuButton{\r\n    width: 40px;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 1em;\r\n    right: 1em;\r\n}\r\nimg.profilePicture {\r\n    display: none;\r\n}\r\nfigcaption {\r\n    position: absolute;\r\n    top: 1em;\r\n    left: 1em;\r\n    font-size: 1.2em ;\r\n    font-weight: bold;\r\n}\r\nfigure {\r\n    background: #DCE1F6;\r\n    height:100%;\r\n    margin: 0;\r\n}\r\nul {\r\n    display: none;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding-top: 1.4em;\r\n    padding-left: 0px;    \r\n}\r\nul li a {\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    font-size: .8em;\r\n    display: block;\r\n    padding: 1.5em 3em;\r\n    background: rgba(255, 255, 255, 0.9);\r\n    color: black;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    border-color: black(24, 73, 207, 0.9);\r\n    margin: 0.4em;\r\n}\r\n.openMenuAside{\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    background: none;\r\n}\r\n.openMenuMain{ \r\n    position: absolute;\r\n    top: 3.6em;\r\n    width: 100%;\r\n    height: calc(100% - 3.6em);\r\n\r\n}\r\n.openMenuUl{\r\n    display: block;\r\n    position: absolute;\r\n    padding: 0;\r\n    width: 60%;\r\n    right: -30px;\r\n}\r\n.openMenuFigure{\r\n    height: 3.6em;\r\n}\r\n@media only screen and (min-width: 786px) {\r\n    body{\r\n        display: grid;\r\n        grid-template-rows: auto;\r\n        grid-template-columns: 20% auto;\r\n    }\r\n\r\n    img.menuButton {\r\n        display: none;\r\n    }\r\n\r\n    img.profilePicture{\r\n        display: block;\r\n        border-radius: 50%;\r\n        background: white;\r\n        width: 130px;\r\n        height: 130px;\r\n        margin: 2em auto 1em auto;\r\n    }\r\n\r\n    figcaption { \r\n        position: static;\r\n        text-align: center;\r\n        color: black;\r\n    }\r\n\r\n    aside {\r\n        display: block;\r\n        background: #DCE1F6;\r\n    }\r\n    \r\n    figure{\r\n        height: 10em;\r\n    }\r\n\r\n    nav{\r\n        display:block;\r\n    }\r\n\r\n    ul {\r\n        display: block;\r\n        margin-top: 1em;\r\n        position: relative !important;\r\n        background: none !important;\r\n        width: 100% !important;\r\n        min-width: 175px;\r\n    }\r\n    ul li a{\r\n        margin: 0;\r\n        border-radius: 0;\r\n        border-width: 0;\r\n        border-style: none;\r\n    }\r\n\r\n    ul li a:hover {\r\n        background: rgba(240, 240, 255);\r\n        -webkit-animation-duration: 700ms;\r\n                animation-duration: 700ms;\r\n        -webkit-animation-fill-mode: forwards;\r\n                animation-fill-mode: forwards;\r\n        \r\n    }\r\n    .hvr-forward {\r\n        vertical-align: middle;\r\n        -webkit-transform: perspective(1px) translateZ(0);\r\n        transform: perspective(1px) translateZ(0);\r\n        box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n        transition-duration: 0.3s;\r\n        transition-property: -webkit-transform;\r\n        transition-property: transform;\r\n        transition-property: transform, -webkit-transform;\r\n    }\r\n\r\n    .hvr-forward:hover, .hvr-forward:focus, .hvr-forward:active {\r\n        -webkit-transform: translateX(8px);\r\n        transform: translateX(8px);\r\n    }\r\n    \r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLDRCQUE0QjtDQUMvQjtBQUNEO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtDQUNwQjtBQUVEO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFdBQVc7Q0FDZDtBQUVEO0lBQ0ksY0FBYztDQUNqQjtBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtDQUNyQjtBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixVQUFVO0NBQ2I7QUFFRDtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLGNBQWM7Q0FDakI7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7O0NBRTlCO0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtDQUNoQjtBQUdEO0lBQ0ksY0FBYztDQUNqQjtBQUVEO0lBQ0k7UUFDSSxjQUFjO1FBQ2QseUJBQXlCO1FBQ3pCLGdDQUFnQztLQUNuQzs7SUFFRDtRQUNJLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsY0FBYztRQUNkLDBCQUEwQjtLQUM3Qjs7SUFFRDtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsYUFBYTtLQUNoQjs7SUFFRDtRQUNJLGVBQWU7UUFDZixvQkFBb0I7S0FDdkI7O0lBRUQ7UUFDSSxhQUFhO0tBQ2hCOztJQUVEO1FBQ0ksY0FBYztLQUNqQjs7SUFFRDtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsOEJBQThCO1FBQzlCLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIsaUJBQWlCO0tBQ3BCO0lBQ0Q7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixtQkFBbUI7S0FDdEI7O0lBRUQ7UUFDSSxnQ0FBZ0M7UUFDaEMsa0NBQTBCO2dCQUExQiwwQkFBMEI7UUFDMUIsc0NBQThCO2dCQUE5Qiw4QkFBOEI7O0tBRWpDO0lBQ0Q7UUFDSSx1QkFBdUI7UUFDdkIsa0RBQWtEO1FBQ2xELDBDQUEwQztRQUMxQyxxQ0FBcUM7UUFFckMsMEJBQTBCO1FBRTFCLHVDQUErQjtRQUEvQiwrQkFBK0I7UUFBL0Isa0RBQStCO0tBQ2xDOztJQUVEO1FBQ0ksbUNBQW1DO1FBQ25DLDJCQUEyQjtLQUM5Qjs7O0NBR0oiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzLjZlbSBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG59XHJcbmFzaWRlIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5pbWcubWVudUJ1dHRvbntcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxZW07XHJcbiAgICByaWdodDogMWVtO1xyXG59XHJcblxyXG5pbWcucHJvZmlsZVBpY3R1cmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuZmlnY2FwdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDFlbTtcclxuICAgIGxlZnQ6IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW0gO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmZpZ3VyZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRENFMUY2O1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMS40ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDsgICAgXHJcbn1cclxuXHJcbnVsIGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMS41ZW0gM2VtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaygyNCwgNzMsIDIwNywgMC45KTtcclxuICAgIG1hcmdpbjogMC40ZW07XHJcbn1cclxuXHJcbi5vcGVuTWVudUFzaWRle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLm9wZW5NZW51TWFpbnsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMuNmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNmVtKTtcclxuXHJcbn1cclxuXHJcbi5vcGVuTWVudVVse1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIHJpZ2h0OiAtMzBweDtcclxufVxyXG5cclxuXHJcbi5vcGVuTWVudUZpZ3VyZXtcclxuICAgIGhlaWdodDogMy42ZW07XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzg2cHgpIHtcclxuICAgIGJvZHl7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBpbWcubWVudUJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBpbWcucHJvZmlsZVBpY3R1cmV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMmVtIGF1dG8gMWVtIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgZmlnY2FwdGlvbiB7IFxyXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICBhc2lkZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0RDRTFGNjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZmlndXJle1xyXG4gICAgICAgIGhlaWdodDogMTBlbTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZ7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxuXHJcbiAgICB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTc1cHg7XHJcbiAgICB9XHJcbiAgICB1bCBsaSBhe1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgdWwgbGkgYTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDAsIDI0MCwgMjU1KTtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDcwMG1zO1xyXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmh2ci1mb3J3YXJkIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAgIH1cclxuXHJcbiAgICAuaHZyLWZvcndhcmQ6aG92ZXIsIC5odnItZm9yd2FyZDpmb2N1cywgLmh2ci1mb3J3YXJkOmFjdGl2ZSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KTtcclxuICAgIH1cclxuICAgIFxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    \n    <aside>\n        <figure>\n            <img class= \"image profilePicture\" src=\"https://media.licdn.com/dms/image/C4D03AQFqnFaKOm5-MQ/profile-displayphoto-shrink_200_200/0?e=1553126400&v=beta&t=EDcO2ZZVMVUrDhavEf1aCf6U95NwWIicCHKAfcqLdiU\" alt=\"Picture of Jared Hawley\">\n            <figcaption>Jared Hawley</figcaption>\n        </figure>\n        <img class=\"image menuButton\" src=\"assets/images/menu-black.svg\" alt=\"Menu Button\" (click)=this.toggleMenu()>\n        <nav>\n            <ul>\n                <li class=\"hvr-forward\"><a routerLink=\"\">Home</a></li>\n                <li class=\"hvr-forward\"><a routerLink=\"/resume\">Resume</a></li>\n                <li class=\"hvr-forward\"><a routerLink=\"/coverletter\">Cover Letter</a></li>\n                <li class=\"hvr-forward\"><a routerLink=\"/readinglist\">Reading List</a></li>\n                <li class=\"hvr-forward\"><a routerLink=\"/contact\">Contact</a></li>\n            </ul>\n        </nav>\n    </aside>\n    <main>  \n        <router-outlet></router-outlet> \n    </main>\n\n</body>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.toggleMenu = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('aside').toggleClass('openMenuAside');
        jquery__WEBPACK_IMPORTED_MODULE_2__('main').toggleClass('openMenuMain');
        jquery__WEBPACK_IMPORTED_MODULE_2__('nav').toggleClass('openMenuNav');
        jquery__WEBPACK_IMPORTED_MODULE_2__('ul').toggleClass('openMenuUl');
        jquery__WEBPACK_IMPORTED_MODULE_2__('ul li').toggleClass('openMenuUlli');
        jquery__WEBPACK_IMPORTED_MODULE_2__('figure').toggleClass('openMenuFigure');
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/reading-list/reading-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/reading-list/reading-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    height: 100%;\r\n    background: white url('bg.svg') no-repeat bottom right;\r\n    background-size: 82%;\r\n    -webkit-filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));\r\n            filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));\r\n    min-width: 312px;\r\n}\r\n\r\n/* Extra small mobile version */\r\n\r\nh1 {\r\n    font-size: 1.2em;\r\n    margin: 0;\r\n    padding: 1em 0em 0em 1em;\r\n}\r\n\r\nul {\r\n    margin: 0;\r\n    padding-left: 3em;\r\n    font-size: 1.05em;\r\n}\r\n\r\nli {\r\n    padding: 0.6em;\r\n\r\n}\r\n\r\n@media only screen and (min-width: 786px) {\r\n\r\n    h1 {\r\n        font-size: 2em;\r\n        margin: 0;\r\n    }\r\n    \r\n    ul {\r\n        padding-top: 0.5em;\r\n        padding-left: 4em;\r\n        font-size: 1.5em;\r\n    }\r\n    \r\n    li {\r\n        padding: .6em;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZGluZy1saXN0L3JlYWRpbmctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVEQUE2RTtJQUM3RSxxQkFBcUI7SUFDckIsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCxpQkFBaUI7Q0FDcEI7O0FBRUQsZ0NBQWdDOztBQUNoQztJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxlQUFlOztDQUVsQjs7QUFHRDs7SUFFSTtRQUNJLGVBQWU7UUFDZixVQUFVO0tBQ2I7O0lBRUQ7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtLQUNwQjs7SUFFRDtRQUNJLGNBQWM7S0FDakI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3JlYWRpbmctbGlzdC9yZWFkaW5nLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGUgdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcuc3ZnJykgbm8tcmVwZWF0IGJvdHRvbSByaWdodDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogODIlO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg4cHggOHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xyXG4gICAgbWluLXdpZHRoOiAzMTJweDtcclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgbW9iaWxlIHZlcnNpb24gKi9cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDFlbSAwZW0gMGVtIDFlbTtcclxufVxyXG5cclxudWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzZW07XHJcbiAgICBmb250LXNpemU6IDEuMDVlbTtcclxufVxyXG5cclxubGkge1xyXG4gICAgcGFkZGluZzogMC42ZW07XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3ODZweCkge1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVsIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IC42ZW07XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/reading-list/reading-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/reading-list/reading-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <h1>Books I've Read & Recommend...</h1>\n  <ul>\n    <li><a target=\"_blank\" href=\"https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/B0006IU4C0/ref=tmm_aud_swatch_0?_encoding=UTF8&qid=1548700416&sr=8-3\">\n      7 Habits of Highly Effective People, <i>Stephen R. Covey</i></a></li>\n    <li><a target=\"_blank\" href=\"https://www.amazon.com/Tipping-Point-Little-Things-Difference/dp/B000OYD8T2/ref=sr_1_1?ie=UTF8&qid=1548700421&sr=8-1&keywords=the+tipping+point\">\n      The Tipping Point, <i>Malcom Gladwell</i></a></li>\n    <li><a target=\"_blank\" href=\"https://www.amazon.com/Obstacle-Way-Timeless-Turning-Triumph/dp/B00K5JUNSU/ref=sr_1_3?ie=UTF8&qid=1548700439&sr=8-3&keywords=the+obstacle+is+the+way\">\n      The Obstacle is the Way, <i>Ryan Holiday</i></a></li>\n    <li><a target=\"_blank\" href=\"https://www.amazon.com/Tim-Ferriss-Audio-Ego-Enemy/dp/B01GSIZ9EY/ref=tmm_aud_swatch_0?_encoding=UTF8&qid=1548700452&sr=8-2-spons\">\n      Ego is the Enemy, <i>Ryan Holiday</i></a></li>\n    <li><a target=\"_blank\" href=\"https://www.amazon.com/Power-Habit-What-Life-Business/dp/B007EJSMC8/ref=sr_1_2?ie=UTF8&qid=1548700480&sr=8-2&keywords=The+power+of+habit\">\n      The Power of Habit, <i>Charles Duhigg</i></a></li>\n    <li><a target=\"_blank\" href=\"https://www.amazon.com/12-Rules-Life-Antidote-Chaos/dp/B0797Y87JC/ref=sr_1_1?ie=UTF8&qid=1548700491&sr=8-1&keywords=12+rules+for+life\">\n      12 Rules for Life, <i>Jordan B. Peterson</i></a></li>\n    <li><a target=\"_blank\" href=\"https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/B0189PVAWY/ref=sr_1_1?ie=UTF8&qid=1548700603&sr=8-1&keywords=deep+work\">\n      Deep Work, <i>Jeff Bottoms</i></a></li>\n    <li><a target=\"_blank\" href=\"https://www.amazon.com/Creativity-Inc-Overcoming-Unseen-Inspiration/dp/B00IPJTQQW/ref=tmm_aud_swatch_0?_encoding=UTF8&qid=&sr=\">\n      Creativity Inc., <i>Ed Catmull</i></a></li>\n    <li><a target=\"_blank\" href=\"https://www.amazon.com/Meditations-New-Translation-Marcus-Aurelius/dp/0812968255/ref=sr_1_3?ie=UTF8&qid=1548700506&sr=8-3&keywords=meditations+marcus+aurelius\">\n      Meditations, <i>Marcus Aurelius</i></a></li>\n  </ul>\n</body>"

/***/ }),

/***/ "./src/app/reading-list/reading-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/reading-list/reading-list.component.ts ***!
  \********************************************************/
/*! exports provided: ReadingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingListComponent", function() { return ReadingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReadingListComponent = /** @class */ (function () {
    function ReadingListComponent() {
    }
    ReadingListComponent.prototype.ngOnInit = function () {
    };
    ReadingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reading-list',
            template: __webpack_require__(/*! ./reading-list.component.html */ "./src/app/reading-list/reading-list.component.html"),
            styles: [__webpack_require__(/*! ./reading-list.component.css */ "./src/app/reading-list/reading-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReadingListComponent);
    return ReadingListComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    height: 100%;\r\n    background: white url('bg.svg') no-repeat bottom right;\r\n    background-size: 82%;\r\n    -webkit-filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));\r\n            filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVEQUE2RTtJQUM3RSxxQkFBcUI7SUFDckIsNERBQW9EO1lBQXBELG9EQUFvRDtDQUN2RCIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSB1cmwoJy4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy5zdmcnKSBuby1yZXBlYXQgYm90dG9tIHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MiU7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDhweCA4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <embed src=\"'./../../assets/jaredhawleyresume.pdf\" type=\"application/pdf\" width=\"100%\" height=\"100%\">\n</body>"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Coding Practice\My Website\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map