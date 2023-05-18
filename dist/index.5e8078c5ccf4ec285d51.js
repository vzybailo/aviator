/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/parallax.js":
/*!*********************************!*\
  !*** ./src/modules/parallax.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function parallax() {
  let bg = document.querySelector('.avia');
  let parallaxUp = document.querySelectorAll('.parallax-up');
  let parallaxUpPlane = document.querySelectorAll('.parallax-up-plane');
  let parallaxDown = document.querySelectorAll('.parallax-down');
  bg.addEventListener('mouseover', e => {
    let y = e.clientY / window.innerHeight;
    for (let i = 0; i < parallaxUp.length; i++) {
      parallaxUp[i].style.transform = 'translate(0, -' + y * 5 + '%)';
    }
    for (let i = 0; i < parallaxDown.length; i++) {
      parallaxDown[i].style.transform = 'translate(0, ' + y * 5 + '%)';
    }
    parallaxUpPlane.forEach(elem => {
      elem.style.transform = 'translate(0, -' + y * 10 + '%)';
    });
  });
}
parallax();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parallax);

/***/ }),

/***/ "./src/modules/second-screen.js":
/*!**************************************!*\
  !*** ./src/modules/second-screen.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function changeScreen() {
  let btn = document.querySelector('.avia__btn');
  let firstScreen = document.querySelector('.avia__first-screen');
  let secondScreen = document.querySelector('.avia__second-screen');
  btn.addEventListener('click', () => {
    firstScreen.style.top = '-100vh';
    secondScreen.style.top = '100vh';
    console.log('work');
  });
}
changeScreen();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeScreen);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Gilroy-BlackItalic.woff */ "./src/fonts/Gilroy-BlackItalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bg.jpg */ "./src/img/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bg-sec.png */ "./src/img/bg-sec.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Gilroy\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(woff);\n  font-weight: 400;\n  font-style: normal;\n}\nhtml, body {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"OpenSans\";\n  background: #4D2E30;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Manrope\";\n  color: rgb(26, 83, 83);\n  margin: 0;\n}\n\na {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n\n.wrapper {\n  position: relative;\n  height: 100vh;\n}\n\n.container {\n  position: relative;\n  height: 100vh;\n}\n\n.avia__first-screen {\n  position: relative;\n  top: 0;\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  transition: all 1s ease;\n  overflow: hidden;\n}\n\n.avia__wrap {\n  height: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.avia__logo {\n  position: relative;\n  z-index: 100;\n  text-align: center;\n}\n\n.avia__title {\n  position: relative;\n  z-index: 100;\n  font-family: \"Gilroy\";\n  color: #fff;\n  text-align: center;\n  margin-bottom: 70px;\n}\n\n.avia__uptitle {\n  font-weight: 900;\n  font-size: 28px;\n  line-height: 28px;\n  color: #BA939C;\n  margin-bottom: 19px;\n}\n\n.avia__maintitle {\n  display: flex;\n  flex-direction: column;\n  font-size: 80px;\n  line-height: 80px;\n  margin-bottom: 24px;\n  text-transform: uppercase;\n}\n.avia__maintitle span {\n  font-size: 52px;\n  line-height: 52px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.avia__percents {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  line-height: 72px;\n  text-transform: uppercase;\n}\n.avia__percents .perc__start {\n  margin-right: 24px;\n}\n.avia__percents .perc__plus {\n  display: inline-flex;\n  font-size: 56px;\n  line-height: 88px;\n  margin: 0 24px;\n}\n.avia__percents .perc__bg {\n  display: inline-flex;\n  align-items: center;\n  padding: 12px 24px;\n  background: #CE0232;\n  border-radius: 88px;\n  font-size: 56px;\n  line-height: 64px;\n}\n.avia__percents .two__lines {\n  display: inline;\n  flex-direction: column;\n  text-align: left;\n  font-size: 20px;\n  line-height: 24px;\n  padding: 0;\n  margin-left: 16px;\n}\n\n.avia__btn {\n  position: relative;\n  z-index: 100;\n  cursor: pointer;\n}\n\n.avia__btn-bg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: #CE0232;\n  transform: skew(-15deg, 0deg);\n}\n\n.avia__btn-text {\n  position: relative;\n  font-family: \"Gilroy\";\n  font-size: 56px;\n  line-height: 64px;\n  text-transform: uppercase;\n  color: #fff;\n  padding: 28px 25px;\n}\n\n.cloud__left {\n  position: absolute;\n  left: 0;\n  top: 45%;\n  z-index: 30;\n  transition: all 0.2s ease;\n}\n\n.cloud__right {\n  position: absolute;\n  right: 0;\n  top: 45%;\n  z-index: 30;\n  transition: all 0.2s ease;\n}\n\n.cabin {\n  position: absolute;\n  bottom: -18%;\n  z-index: 60;\n  transition: all 0.2s ease;\n}\n\n.title__aviator {\n  position: absolute;\n  bottom: -32%;\n  left: -2%;\n  z-index: 50;\n  transition: all 0.2s ease;\n}\n\nimg.plane__left {\n  position: absolute;\n  top: 20%;\n  left: -20%;\n  z-index: 25;\n  transition: all 0.2s ease;\n}\n\nimg.plane__right {\n  position: absolute;\n  top: 20%;\n  right: -18%;\n  z-index: 25;\n  transition: all 0.2s ease;\n}\n\nimg.border__left {\n  position: absolute;\n  top: 5%;\n  left: 2%;\n  z-index: 70;\n  width: 25%;\n}\n\nimg.border__right {\n  position: absolute;\n  top: 6%;\n  right: 2%;\n  z-index: 70;\n  width: 25%;\n  transform: rotate(180deg);\n}\n\n.sunrise {\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  animation: spin 60s infinite linear;\n}\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.avia__second-screen {\n  position: relative;\n  top: 100%;\n  z-index: 1000;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}", "",{"version":3,"sources":["webpack://./src/scss/_fonts.scss","webpack://./src/styles.scss","webpack://./src/scss/_base.scss","webpack://./src/scss/_first-screen.scss","webpack://./src/scss/_second-screen.scss"],"names":[],"mappings":"AAAA;EACI,qBAAA;EACA,yDAAA;EACA,gBAAA;EACA,kBAAA;ACCJ;ACLA;EACI,SAAA;EACA,UAAA;ADOJ;;ACLA;EACI,uBAAA;EACA,mBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;ADQJ;;ACNA;EACI,sBAAA;EACA,sBAAA;EACA,SAAA;ADSJ;;ACPA;EACI,6BAAA;EAAA,qBAAA;ADUJ;;ACRA;EACI,kBAAA;EACA,aAAA;ADWJ;;ACTA;EACI,kBAAA;EACA,aAAA;ADYJ;;AEnCA;EACI,kBAAA;EACA,MAAA;EACA,aAAA;EACA,mDAAA;EACA,4BAAA;EACA,kCAAA;EACA,sBAAA;EACA,uBAAA;EACA,gBAAA;AFsCJ;;AEpCA;EACI,YAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;AFuCJ;;AErCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;AFwCJ;;AEtCA;EACI,kBAAA;EACA,YAAA;EACA,qBAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AFyCJ;;AEvCA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,mBAAA;AF0CJ;;AExCA;EACI,aAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBAAA;AF2CJ;AE1CI;EACI,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,mBAAA;AF4CR;;AEzCA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;AF4CJ;AE3CI;EACI,kBAAA;AF6CR;AE3CI;EACI,oBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AF6CR;AE3CI;EACI,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;AF6CR;AE3CI;EACI,eAAA;EACA,sBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,UAAA;EACA,iBAAA;AF6CR;;AE1CA;EACI,kBAAA;EACA,YAAA;EACA,eAAA;AF6CJ;;AE3CA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,6BAAA;AF8CJ;;AE5CA;EACI,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,WAAA;EACA,kBAAA;AF+CJ;;AE7CA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,yBAAA;AFgDJ;;AE9CA;EACI,kBAAA;EACA,QAAA;EACA,QAAA;EACA,WAAA;EACA,yBAAA;AFiDJ;;AE/CA;EACI,kBAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;AFkDJ;;AEhDA;EACI,kBAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,yBAAA;AFmDJ;;AEjDA;EACI,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,yBAAA;AFoDJ;;AElDA;EACI,kBAAA;EACA,QAAA;EACA,WAAA;EACA,WAAA;EACA,yBAAA;AFqDJ;;AEnDA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,UAAA;AFsDJ;;AEpDA;EACI,kBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;EACA,yBAAA;AFuDJ;;AErDA;EACI,kBAAA;EACA,MAAA;EACA,WAAA;EACA,mCAAA;AFwDJ;;AEtDA;EACI;IACI,yBAAA;EFyDN;AACF;AGvOA;EACI,kBAAA;EACA,SAAA;EACA,aAAA;EACA,mDAAA;EACA,4BAAA;EACA,kCAAA;EACA,sBAAA;AHyOJ","sourcesContent":["@font-face {\r\n    font-family: 'Gilroy';\r\n    src: url('fonts/Gilroy-BlackItalic.woff') format(woff);\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}","@font-face {\n  font-family: \"Gilroy\";\n  src: url(\"fonts/Gilroy-BlackItalic.woff\") format(woff);\n  font-weight: 400;\n  font-style: normal;\n}\nhtml, body {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"OpenSans\";\n  background: #4D2E30;\n  user-select: none;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Manrope\";\n  color: rgb(26, 83, 83);\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n}\n\n.wrapper {\n  position: relative;\n  height: 100vh;\n}\n\n.container {\n  position: relative;\n  height: 100vh;\n}\n\n.avia__first-screen {\n  position: relative;\n  top: 0;\n  height: 100vh;\n  background: url(\"./img/bg.jpg\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  transition: all 1s ease;\n  overflow: hidden;\n}\n\n.avia__wrap {\n  height: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.avia__logo {\n  position: relative;\n  z-index: 100;\n  text-align: center;\n}\n\n.avia__title {\n  position: relative;\n  z-index: 100;\n  font-family: \"Gilroy\";\n  color: #fff;\n  text-align: center;\n  margin-bottom: 70px;\n}\n\n.avia__uptitle {\n  font-weight: 900;\n  font-size: 28px;\n  line-height: 28px;\n  color: #BA939C;\n  margin-bottom: 19px;\n}\n\n.avia__maintitle {\n  display: flex;\n  flex-direction: column;\n  font-size: 80px;\n  line-height: 80px;\n  margin-bottom: 24px;\n  text-transform: uppercase;\n}\n.avia__maintitle span {\n  font-size: 52px;\n  line-height: 52px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.avia__percents {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  line-height: 72px;\n  text-transform: uppercase;\n}\n.avia__percents .perc__start {\n  margin-right: 24px;\n}\n.avia__percents .perc__plus {\n  display: inline-flex;\n  font-size: 56px;\n  line-height: 88px;\n  margin: 0 24px;\n}\n.avia__percents .perc__bg {\n  display: inline-flex;\n  align-items: center;\n  padding: 12px 24px;\n  background: #CE0232;\n  border-radius: 88px;\n  font-size: 56px;\n  line-height: 64px;\n}\n.avia__percents .two__lines {\n  display: inline;\n  flex-direction: column;\n  text-align: left;\n  font-size: 20px;\n  line-height: 24px;\n  padding: 0;\n  margin-left: 16px;\n}\n\n.avia__btn {\n  position: relative;\n  z-index: 100;\n  cursor: pointer;\n}\n\n.avia__btn-bg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: #CE0232;\n  transform: skew(-15deg, 0deg);\n}\n\n.avia__btn-text {\n  position: relative;\n  font-family: \"Gilroy\";\n  font-size: 56px;\n  line-height: 64px;\n  text-transform: uppercase;\n  color: #fff;\n  padding: 28px 25px;\n}\n\n.cloud__left {\n  position: absolute;\n  left: 0;\n  top: 45%;\n  z-index: 30;\n  transition: all 0.2s ease;\n}\n\n.cloud__right {\n  position: absolute;\n  right: 0;\n  top: 45%;\n  z-index: 30;\n  transition: all 0.2s ease;\n}\n\n.cabin {\n  position: absolute;\n  bottom: -18%;\n  z-index: 60;\n  transition: all 0.2s ease;\n}\n\n.title__aviator {\n  position: absolute;\n  bottom: -32%;\n  left: -2%;\n  z-index: 50;\n  transition: all 0.2s ease;\n}\n\nimg.plane__left {\n  position: absolute;\n  top: 20%;\n  left: -20%;\n  z-index: 25;\n  transition: all 0.2s ease;\n}\n\nimg.plane__right {\n  position: absolute;\n  top: 20%;\n  right: -18%;\n  z-index: 25;\n  transition: all 0.2s ease;\n}\n\nimg.border__left {\n  position: absolute;\n  top: 5%;\n  left: 2%;\n  z-index: 70;\n  width: 25%;\n}\n\nimg.border__right {\n  position: absolute;\n  top: 6%;\n  right: 2%;\n  z-index: 70;\n  width: 25%;\n  transform: rotate(180deg);\n}\n\n.sunrise {\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  animation: spin 60s infinite linear;\n}\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.avia__second-screen {\n  position: relative;\n  top: 100%;\n  z-index: 1000;\n  background: url(\"./img/bg-sec.png\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}","html, body {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nbody {\r\n    font-family: 'OpenSans';\r\n    background: #4D2E30;\r\n    user-select: none;\r\n}\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Manrope';\r\n    color: rgb(26, 83, 83);\r\n    margin: 0;\r\n}\r\na {\r\n    text-decoration: none;\r\n}\r\n.wrapper {\r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n.container {\r\n    position: relative;\r\n    height: 100vh;\r\n}",".avia__first-screen {\r\n    position: relative;\r\n    top: 0;\r\n    height: 100vh;\r\n    background: url('./img/bg.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    background-size: cover;\r\n    transition: all 1s ease;\r\n    overflow: hidden;\r\n}\r\n.avia__wrap {\r\n    height: 100%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.avia__logo {\r\n    position: relative;\r\n    z-index: 100;\r\n    text-align: center;\r\n}\r\n.avia__title {\r\n    position: relative;\r\n    z-index: 100;\r\n    font-family: 'Gilroy';\r\n    color: #fff;\r\n    text-align: center;\r\n    margin-bottom: 70px;\r\n}\r\n.avia__uptitle {\r\n    font-weight: 900;\r\n    font-size: 28px;\r\n    line-height: 28px;\r\n    color: #BA939C;\r\n    margin-bottom: 19px;\r\n}\r\n.avia__maintitle {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 80px;\r\n    line-height: 80px;\r\n    margin-bottom: 24px;\r\n    text-transform: uppercase;\r\n    span {\r\n        font-size: 52px;\r\n        line-height: 52px;\r\n        text-transform: uppercase;\r\n        letter-spacing: 1px;\r\n    }\r\n}\r\n.avia__percents {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 28px;\r\n    line-height: 72px;\r\n    text-transform: uppercase;\r\n    .perc__start {\r\n        margin-right: 24px;\r\n    }\r\n    .perc__plus {\r\n        display: inline-flex;\r\n        font-size: 56px;\r\n        line-height: 88px;\r\n        margin: 0 24px;\r\n    }\r\n    .perc__bg {\r\n        display: inline-flex;\r\n        align-items: center;\r\n        padding: 12px 24px;\r\n        background: #CE0232;\r\n        border-radius: 88px;\r\n        font-size: 56px;\r\n        line-height: 64px;\r\n    }\r\n    .two__lines {\r\n        display: inline;\r\n        flex-direction: column;\r\n        text-align: left;\r\n        font-size: 20px;\r\n        line-height: 24px;\r\n        padding: 0;\r\n        margin-left: 16px;\r\n    }\r\n}\r\n.avia__btn {\r\n    position: relative;\r\n    z-index: 100;\r\n    cursor: pointer;\r\n}\r\n.avia__btn-bg {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #CE0232;\r\n    transform: skew(-15deg, 0deg);\r\n}\r\n.avia__btn-text {\r\n    position: relative;\r\n    font-family: 'Gilroy';\r\n    font-size: 56px;\r\n    line-height: 64px;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    padding: 28px 25px;\r\n}\r\n.cloud__left {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 45%;\r\n    z-index: 30;\r\n    transition: all .2s ease;\r\n}\r\n.cloud__right {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 45%;\r\n    z-index: 30;\r\n    transition: all .2s ease;\r\n}\r\n.cabin {\r\n    position: absolute;\r\n    bottom: -18%;\r\n    z-index: 60;\r\n    transition: all .2s ease;\r\n}\r\n.title__aviator {\r\n    position: absolute;\r\n    bottom: -32%;\r\n    left: -2%;\r\n    z-index: 50;\r\n    transition: all .2s ease;\r\n}\r\nimg.plane__left {\r\n    position: absolute;\r\n    top: 20%;\r\n    left: -20%;\r\n    z-index: 25;\r\n    transition: all .2s ease;\r\n}\r\nimg.plane__right {\r\n    position: absolute;\r\n    top: 20%;\r\n    right: -18%;\r\n    z-index: 25;\r\n    transition: all .2s ease;\r\n}\r\nimg.border__left {\r\n    position: absolute;\r\n    top: 5%;\r\n    left: 2%;\r\n    z-index: 70;\r\n    width: 25%;\r\n}\r\nimg.border__right {\r\n    position: absolute;\r\n    top: 6%;\r\n    right: 2%;\r\n    z-index: 70;\r\n    width: 25%;\r\n    transform: rotate(180deg);\r\n}\r\n.sunrise {\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 10;\r\n    animation: spin 60s infinite linear;\r\n}\r\n@keyframes spin {\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}",".avia__second-screen {\r\n    position: relative;\r\n    top: 100%;\r\n    z-index: 1000;\r\n    background: url('./img/bg-sec.png');\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    background-size: cover;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo-jet.png */ "./src/img/logo-jet.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/clouds_left.png */ "./src/img/clouds_left.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/clouds_right.png */ "./src/img/clouds_right.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Cabin.png */ "./src/img/Cabin.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Aviator.png */ "./src/img/Aviator.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/plane_left_full.png */ "./src/img/plane_left_full.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/plane_right_full.png */ "./src/img/plane_right_full.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/border.png */ "./src/img/border.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/tiny-rays.png */ "./src/img/tiny-rays.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>JET Aviator</title>\r\n</head>\r\n<body>\r\n    <div class=\"wrapper avia\">\r\n        <div class=\"container\">\r\n            <div class=\"avia__first-screen\">\r\n                <div class=\"avia__wrap\">\r\n                    <div class=\"avia__logo\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\" class=\"avia__pic\">\r\n                    </div>\r\n                    <div class=\"avia__title\">\r\n                        <div class=\"avia__uptitle\">PEGUE SUA SORTE NO AVIATOR</div>\r\n                        <div class=\"avia__maintitle\">\r\n                            Bônus de 100%\r\n                            <span>no  primeiro  depósito</span>\r\n                        </div>\r\n                        <div class=\"avia__percents perc\">\r\n                            <span class=\"perc__start\">até</span>\r\n                            <span class=\"perc__bg\">1500 R$</span>\r\n                            <span class=\"perc__plus\">+</span>\r\n                            <span class=\"perc__bg\">500\r\n                                <span class=\"two__lines\">rodadas<br> grátis</span>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"avia__btn\">\r\n                        <div class=\"avia__btn-bg\"></div>\r\n                        <div class=\"avia__btn-text\">Joque agora</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"avia__clouds-left\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" class=\"cloud__left parallax-up\">\r\n                </div>\r\n                <div class=\"avia__clouds-right\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" class=\"cloud__right parallax-up\">\r\n                </div>\r\n                <div class=\"avia__cabin\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" class=\"cabin parallax-down\">\r\n                </div>\r\n                <div class=\"avia__under-title\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" class=\"title__aviator parallax-down\">\r\n                </div>\r\n                <div class=\"avia__plane-left\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\" class=\"plane__left parallax-up-plane\">\r\n                </div>\r\n                <div class=\"avia__plane-right\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" class=\"plane__right parallax-up-plane\">\r\n                </div>\r\n                <div class=\"avia__border-left\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" class=\"border__left\">\r\n                </div>\r\n                <div class=\"avia__border-right\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" class=\"border__right\">\r\n                </div>\r\n                <div class=\"avia__sunrise\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" class=\"sunrise\">\r\n                </div>\r\n            </div>\r\n            <div class=\"avia__second-screen\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Gilroy-BlackItalic.woff":
/*!*******************************************!*\
  !*** ./src/fonts/Gilroy-BlackItalic.woff ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Gilroy-BlackItalic.woff";

/***/ }),

/***/ "./src/img/Aviator.png":
/*!*****************************!*\
  !*** ./src/img/Aviator.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Aviator.png";

/***/ }),

/***/ "./src/img/Cabin.png":
/*!***************************!*\
  !*** ./src/img/Cabin.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Cabin.png";

/***/ }),

/***/ "./src/img/bg-sec.png":
/*!****************************!*\
  !*** ./src/img/bg-sec.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bg-sec.png";

/***/ }),

/***/ "./src/img/bg.jpg":
/*!************************!*\
  !*** ./src/img/bg.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bg.jpg";

/***/ }),

/***/ "./src/img/border.png":
/*!****************************!*\
  !*** ./src/img/border.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/border.png";

/***/ }),

/***/ "./src/img/clouds_left.png":
/*!*********************************!*\
  !*** ./src/img/clouds_left.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/clouds_left.png";

/***/ }),

/***/ "./src/img/clouds_right.png":
/*!**********************************!*\
  !*** ./src/img/clouds_right.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/clouds_right.png";

/***/ }),

/***/ "./src/img/logo-jet.png":
/*!******************************!*\
  !*** ./src/img/logo-jet.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo-jet.png";

/***/ }),

/***/ "./src/img/plane_left_full.png":
/*!*************************************!*\
  !*** ./src/img/plane_left_full.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/plane_left_full.png";

/***/ }),

/***/ "./src/img/plane_right_full.png":
/*!**************************************!*\
  !*** ./src/img/plane_right_full.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/plane_right_full.png";

/***/ }),

/***/ "./src/img/tiny-rays.png":
/*!*******************************!*\
  !*** ./src/img/tiny-rays.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/tiny-rays.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _modules_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/parallax */ "./src/modules/parallax.js");
/* harmony import */ var _modules_second_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/second-screen */ "./src/modules/second-screen.js");




})();

/******/ })()
;
//# sourceMappingURL=index.5e8078c5ccf4ec285d51.js.map