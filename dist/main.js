/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var text_balancer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! text-balancer */ \"./node_modules/text-balancer/text-balancer.js\");\n\r\n\r\nfunction initList() {\r\n    let search = document.querySelector(\".notes-search\");\r\n    let index = document.querySelectorAll(\".notes-item\");\r\n\r\n    function filterList(s) {\r\n        index.forEach((item) => {\r\n            let title = item.querySelector(\".note-title\").innerText;\r\n            let teacher = item.querySelector(\".note-teacher\").innerText;\r\n            let re = new RegExp(`(${s})`, \"gi\");\r\n            if (re.test(title + teacher)) {\r\n                item.classList.remove(\"hidden\");\r\n            } else {\r\n                item.classList.add(\"hidden\");\r\n            }\r\n        });\r\n    }\r\n    if (search) {\r\n        search.addEventListener(\"input\", () => {\r\n            filterList(search.value);\r\n        });\r\n    }\r\n}\r\n\r\ndocument.addEventListener(\r\n    \"DOMContentLoaded\",\r\n    function () {\r\n        text_balancer__WEBPACK_IMPORTED_MODULE_0__.balanceText('.post-title');\r\n        let headlines = document.querySelectorAll(\r\n            \".post-content h2[id], .post-content h3[id]\"\r\n        );\r\n        for (let i = 0; i < headlines.length; i++) {\r\n            let link = document.createElement(\"a\");\r\n            link.setAttribute(\"href\", \"#\" + headlines[i].id);\r\n            link.classList.add(\"post-jumplink\");\r\n            headlines[i].insertAdjacentElement(\"afterbegin\", link);\r\n        }\r\n\r\n        let paragraphs = document.querySelectorAll(\r\n            \".post-content p, .post-content li\"\r\n        );\r\n\r\n        for (let i = 0; i < paragraphs.length; i++) {\r\n            let image = paragraphs[i].querySelector(\"img, video, iframe\");\r\n            let text = paragraphs[i].innerText;\r\n            if (image) {\r\n                paragraphs[i].classList.add(\"hasimage\");\r\n            }\r\n            paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(\r\n                /\\[\\d+\\]/g,\r\n                `<a class='footnote' href='#1'>3</a>`\r\n            );\r\n        }\r\n\r\n        const images = document.querySelectorAll(\"img\");\r\n        images.forEach((img) => {\r\n            if (img.complete) {\r\n                img.classList.add(\"loaded\");\r\n                img.classList.add(\"cached\");\r\n            }\r\n            img.addEventListener(\"load\", () => {\r\n                img.classList.add(\"loaded\");\r\n            });\r\n        });\r\n        initList();\r\n    },\r\n    false\r\n);\r\n\n\n//# sourceURL=webpack://blog/./js/index.js?");

/***/ }),

/***/ "./node_modules/text-balancer/text-balancer.js":
/*!*****************************************************!*\
  !*** ./node_modules/text-balancer/text-balancer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("var candidates = [];\n\n// pass in a string of selectors to be balanced.\n// if you didnt specify any, thats ok! We'll just\n// balance anything with the balance-text class\nvar textBalancer = function (selectors) {\n\n    if (!selectors) {\n        candidates = document.querySelectorAll('.balance-text');\n    } else {\n        createSelectors(selectors);\n    }\n\n    balanceText();\n\n    var rebalanceText = debounce(function() {\n        balanceText();\n    }, 100);\n\n    window.addEventListener('resize', rebalanceText);\n}\n\n// this populates our candidates array with dom objects\n// that need to be balanced\nvar createSelectors = function(selectors) {\n    selectorArray = selectors.split(',');\n    for (var i = 0; i < selectorArray.length; i += 1) {\n        var currentSelectorElements = document.querySelectorAll(selectorArray[i].trim());\n\n        for (var j = 0; j < currentSelectorElements.length; j += 1) {\n            var currentSelectorElement = currentSelectorElements[j];\n            candidates.push(currentSelectorElement);\n        }\n    }\n}\n\n// Returns a function, that, as long as it continues to be invoked, will not\n// be triggered. The function will be called after it stops being called for\n// N milliseconds. If `immediate` is passed, trigger the function on the\n// leading edge, instead of the trailing.\nvar debounce = function (func, wait, immediate) {\n    var timeout;\n    return function() {\n        var context = this, args = arguments;\n        var later = function() {\n            timeout = null;\n            if (!immediate) func.apply(context, args);\n        };\n        var callNow = immediate && !timeout;\n        clearTimeout(timeout);\n        timeout = setTimeout(later, wait);\n        if (callNow) func.apply(context, args);\n    };\n};\n\n\n// HELPER FUNCTION -- initializes recursive binary search\nvar balanceText = function () {\n    var element;\n    var i;\n\n    for (i = 0; i < candidates.length; i += 1) {\n        element = candidates[i];\n\n        if (textElementIsMultipleLines(element)) {\n            element.style.maxWidth = '';\n            squeezeContainer(element, element.clientHeight, 0, element.clientWidth);\n        }\n\n    }\n\n}\n\n// Make the element as narrow as possible while maintaining its current height (number of lines). Binary search.\nvar squeezeContainer = function (element, originalHeight, bottomRange, topRange) {\n    var mid;\n    if (bottomRange >= topRange) {\n        element.style.maxWidth = topRange + 'px';\n        return;\n    }\n    mid = (bottomRange + topRange) / 2;\n    element.style.maxWidth = mid + 'px';\n\n    if (element.clientHeight > originalHeight) {\n        // we've squoze too far and element has spilled onto an additional line; recurse on wider range\n        squeezeContainer(element, originalHeight, mid+1, topRange);\n    } else {\n        // element has not wrapped to another line; keep squeezing!\n        squeezeContainer(element, originalHeight, bottomRange+1, mid);\n    }\n}\n\n// function to see if a headline is multiple lines\n// we only want to break if the headline is multiple lines\n//\n// We achieve this by turning the first word into a span\n// and then we compare the height of that span to the height\n// of the entire headline. If the headline is bigger than the\n// span by 10px we balance the headline.\nvar textElementIsMultipleLines = function (element) {\n    var firstWordHeight;\n    var elementHeight;\n    var HEIGHT_OFFSET;\n    var elementWords;\n    var firstWord;\n    var ORIGINAL_ELEMENT_TEXT;\n\n    ORIGINAL_ELEMENT_TEXT = element.innerHTML;\n\n    // usually there is around a 5px discrepency between\n    // the first word and the height of the whole headline\n    // so subtract the height of the headline by 10 px and\n    // we should be good\n    HEIGHT_OFFSET = 10;\n\n    // get all the words in the headline as\n    // an array -- will include punctuation\n    //\n    // this is used to put the headline back together\n    elementWords = element.innerHTML.split(' ');\n\n    // make span for first word and give it an id\n    // so we can access it in le dom\n    firstWord = document.createElement('span');\n    firstWord.id = 'element-first-word';\n    firstWord.innerHTML = elementWords[0];\n\n    // this is the entire headline\n    // as an array except for first word\n    //\n    // we will append it to the headline after the span\n    elementWords = elementWords.slice(1);\n\n    // empty the headline and append the span to it\n    element.innerHTML = '';\n    element.appendChild(firstWord);\n\n    // add the rest of the element back to it\n    element.innerHTML += ' ' + elementWords.join(' ');\n\n    // update the first word variable in the dom\n    firstWord = document.getElementById('element-first-word');\n\n    firstWordHeight = firstWord.offsetHeight;\n    elementHeight = element.offsetHeight;\n    // restore the original element text\n    element.innerHTML = ORIGINAL_ELEMENT_TEXT;\n\n    // compare the height of the element and the height of the first word\n    return elementHeight - HEIGHT_OFFSET > firstWordHeight;\n\n} // end headlineIsMultipleLines\n\nexports.balanceText = textBalancer;\n\n//# sourceURL=webpack://blog/./node_modules/text-balancer/text-balancer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;