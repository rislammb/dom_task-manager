/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\nwindow.onload = function () {\n  var taskInput = document.getElementById('taskInput');\n  var addTaskBtn = document.getElementById('addTaskBtn');\n  var taskContainer = document.getElementById('taskContainer');\n\n  taskInput.addEventListener('keypress', function (event) {\n    if (event.target.value !== '' && event.keyCode === 13) {\n      createTask(taskContainer, event.target.value);\n      this.value = '';\n    }\n  });\n  addTaskBtn.addEventListener('click', function () {\n    if (taskInput.value) {\n      createTask(taskContainer, taskInput.value);\n      taskInput.value = '';\n    }\n  });\n};\n\nfunction createTask(parent, task) {\n  var col = document.createElement('div');\n  col.className = 'col-sm-6 col-lg-4';\n\n  var singleTask = document.createElement('div');\n  singleTask.className = 'single-task d-flex';\n\n  var singleTaskP = document.createElement('p');\n  singleTaskP.innerText = task;\n  singleTask.appendChild(singleTaskP);\n\n  var span = document.createElement('span');\n  span.className = 'ml-auto';\n  span.innerHTML = '<i class=\"fas fa-times-circle\"></i>';\n  span.addEventListener('click', function () {\n    parent.removeChild(col);\n  });\n  singleTask.appendChild(span);\n\n  var taskControler = createTaskControler(singleTask);\n  taskControler.style.visibility = 'hidden';\n  singleTask.appendChild(taskControler);\n\n  singleTask.addEventListener('mouseenter', function () {\n    taskControler.style.visibility = 'visible';\n  });\n  singleTask.addEventListener('mouseleave', function () {\n    taskControler.style.visibility = 'hidden';\n  });\n\n  col.appendChild(singleTask);\n  parent.appendChild(col);\n}\n\nfunction createTaskControler(parent) {\n  var controlPanel = document.createElement('div');\n  controlPanel.className = 'task-control-panel d-flex align-items-center';\n\n  var colorPallete = createColorPallete(parent);\n  controlPanel.appendChild(colorPallete);\n\n  var editBtn = createEditBtn(parent);\n  controlPanel.appendChild(editBtn);\n\n  return controlPanel;\n}\n\nfunction createColorPallete(parent) {\n  var colors = ['palegreen', 'skyblue', 'powderblue', 'salmon', '#76f', '#af7'];\n  var colorDiv = document.createElement('div');\n  colorDiv.className = 'd-flex';\n\n  colors.forEach(function (color) {\n    var div = document.createElement('div');\n    div.className = 'color-circle ml-1';\n    div.style.backgroundColor = color;\n    div.addEventListener('click', function () {\n      parent.style.backgroundColor = color;\n    });\n    colorDiv.appendChild(div);\n  });\n  return colorDiv;\n}\n\nfunction createEditBtn(parent) {\n  var span = document.createElement('span');\n  span.className = 'ml-auto mr-2';\n  span.innerHTML = '<i class=\"fas fa-edit\"></i>';\n  span.style.color = '#fff';\n  span.addEventListener('click', function () {\n    var p = parent.querySelector('p');\n    var textArea = document.createElement('textarea');\n    textArea.className = 'inner-textarea';\n    textArea.style.width = parent.offsetWidth + 'px';\n    textArea.style.height = parent.offsetHeight + 'px';\n    textArea.innerText = p.innerText;\n\n    textArea.addEventListener('keypress', function (event) {\n      if (event.keyCode === 13) {\n        event.stopPropagation();\n        if (this.value) {\n          p.innerHTML = this.value;\n          parent.removeChild(this);\n        } else {\n          alert('Please Put some data!');\n        }\n      }\n    });\n\n    parent.appendChild(textArea);\n  });\n\n  return span;\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });