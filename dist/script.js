/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/slider/MainSlider.js":
/*!*********************************************!*\
  !*** ./src/js/modules/slider/MainSlider.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainSlider)
/* harmony export */ });
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./src/js/modules/slider/Slider.js");

class MainSlider extends _Slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(_ref) {
    let {
      popupSelector,
      ...rest
    } = _ref;
    super(rest);
    this.popup = document.querySelector(popupSelector);
  }
  updateSlider() {
    this.slider.style.top = `-${(this.currentSlide - 1) * 100}vh`;
    if (this.currentSlide === 3) this.showPopupAfter(3000);else clearTimeout(this.timeoutId);
  }
  showPopupAfter(time) {
    if (this.popup.style.transform !== 'translateY(0px)') {
      this.timeoutId = setTimeout(() => {
        this.popup.style.transform = 'translateY(0)';
      }, time);
    }
  }
  init() {
    super.init();
    this.slider.style.position = 'relative';
    this.slider.style.transition = 'top 0.5s';
    this.slider.style.top = `-0vh`;
    this.popup.style.transform = 'translateY(100%)';
    this.popup.style.transition = 'transform 0.5s';
  }
}

/***/ }),

/***/ "./src/js/modules/slider/MiniSlider.js":
/*!*********************************************!*\
  !*** ./src/js/modules/slider/MiniSlider.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MiniSlider)
/* harmony export */ });
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./src/js/modules/slider/Slider.js");

class MiniSlider extends _Slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  updateSlider() {
    this.setActiveClass();
  }
  nextSlide() {
    this.slides[this.numberOfSlides - 1].after(this.slides[0]);
    super.nextSlide();
  }
  prevSlide() {
    this.slides[0].before(this.slides[this.numberOfSlides - 1]);
    super.prevSlide();
  }
  setActiveClass() {
    console.log('setting class', this.slides);
    [...this.slides].forEach((slide, i) => {
      i === 0 ? slide.classList.add(this.activeClass) : slide.classList.remove(this.activeClass);
    });
  }
}

/***/ }),

/***/ "./src/js/modules/slider/Slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/Slider.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
class Slider {
  constructor(_ref) {
    let {
      sliderSelector,
      slideClassName,
      nextBtnSelector,
      prevBtnSelector,
      resetBtnSelector,
      activeClass
    } = _ref;
    this.slider = document.querySelector(sliderSelector);
    this.slides = slideClassName ? this.slider.getElementsByClassName(slideClassName) : this.slider.children;
    this.nextBtns = document.querySelectorAll(nextBtnSelector);
    this.prevBtns = document.querySelectorAll(prevBtnSelector);
    this.resetBtns = document.querySelectorAll(resetBtnSelector);
    this.activeClass = activeClass;
    this.numberOfSlides = this.slides.length;
    this.__currentSlide = 1;
  }
  set currentSlide(value) {
    if (value > this.currentSlide) this.__currentSlide = value > this.numberOfSlides ? 1 : value;else this.__currentSlide = value < 1 ? this.numberOfSlides : value;
  }
  get currentSlide() {
    return this.__currentSlide;
  }
  nextSlide() {
    this.currentSlide++;
    if (this.updateSlider) this.updateSlider();
  }
  prevSlide() {
    this.currentSlide = --this.currentSlide < 1 ? this.numberOfSlides : this.currentSlide--;
    if (this.updateSlider) this.updateSlider();
  }
  resetSlider() {
    this.currentSlide = 1;
    if (this.updateSlider) this.updateSlider();
  }
  bindBtns() {
    this.nextBtns.forEach(btn => btn.addEventListener('click', () => this.nextSlide()));
    this.prevBtns.forEach(btn => btn.addEventListener('click', () => this.prevSlide()));
    this.resetBtns.forEach(btn => btn.addEventListener('click', () => this.resetSlider()));
  }
  init() {
    this.bindBtns();
    console.log(this);
  }
}

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_MainSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/MainSlider */ "./src/js/modules/slider/MainSlider.js");
/* harmony import */ var _modules_slider_MiniSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider/MiniSlider */ "./src/js/modules/slider/MiniSlider.js");


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  console.log(location.pathname);
  if (location.pathname.includes('modules')) {
    // Code for modules page
  } else {
    const mainSlider = new _modules_slider_MainSlider__WEBPACK_IMPORTED_MODULE_0__["default"]({
      sliderSelector: '.page',
      nextBtnSelector: '.next',
      resetBtnSelector: '.sidecontrol > a',
      popupSelector: '.hanson'
    });
    mainSlider.init();
    const showupSlider = new _modules_slider_MiniSlider__WEBPACK_IMPORTED_MODULE_1__["default"]({
      sliderSelector: '.showup__content-slider',
      nextBtnSelector: '.showup__next',
      prevBtnSelector: '.showup__prev',
      activeClass: 'card-active'
    });
    showupSlider.init();
    const modulesSlider = new _modules_slider_MiniSlider__WEBPACK_IMPORTED_MODULE_1__["default"]({
      sliderSelector: '.modules__content-slider',
      nextBtnSelector: '.modules__info-btns .slick-next',
      prevBtnSelector: '.modules__info-btns .slick-prev',
      activeClass: 'card-active'
    });
    modulesSlider.init();
    const feedSlider = new _modules_slider_MiniSlider__WEBPACK_IMPORTED_MODULE_1__["default"]({
      sliderSelector: '.feed__slider',
      nextBtnSelector: '.feed__slider .slick-next',
      prevBtnSelector: '.feed__slider .slick-prev',
      slideClassName: 'feed__item',
      activeClass: 'feed__item-active'
    });
    feedSlider.init();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map