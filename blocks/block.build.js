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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./font-awesome/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./font-awesome/chooser.js":
/*!*********************************!*\
  !*** ./font-awesome/chooser.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FontAwesomeIconChooser; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Component = window.wp.element.Component;\nvar SOLID = 'fas';\nvar icons = {\n  coffee: {\n    styles: [SOLID],\n    unicode: String.fromCharCode(parseInt('f0f4', 16)),\n    iconDefinition: {\n      prefix: 'fas',\n      iconName: 'coffee',\n      icon: [640, 512, [], \"f0f4\", \"M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z\"]\n    }\n  },\n  star: {\n    styles: [SOLID],\n    unicode: String.fromCharCode(parseInt('f005', 16)),\n    iconDefinition: {\n      prefix: 'fas',\n      iconName: 'star',\n      icon: [576, 512, [], \"f005\", \"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\"]\n    }\n  },\n  bath: {\n    styles: [SOLID],\n    unicode: String.fromCharCode(parseInt('f2cd', 16)),\n    iconDefinition: {\n      prefix: 'fas',\n      iconName: 'bath',\n      icon: [512, 512, [], \"f2cd\", \"M488 256H80V112c0-17.645 14.355-32 32-32 11.351 0 21.332 5.945 27.015 14.88-16.492 25.207-14.687 59.576 6.838 83.035-4.176 4.713-4.021 11.916.491 16.428l11.314 11.314c4.686 4.686 12.284 4.686 16.971 0l95.03-95.029c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.512-4.512-11.715-4.666-16.428-.491-17.949-16.469-42.294-21.429-64.178-15.365C163.281 45.667 139.212 32 112 32c-44.112 0-80 35.888-80 80v144h-8c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h8v32c0 28.43 12.362 53.969 32 71.547V456c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-8h256v8c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-32.453c19.638-17.578 32-43.117 32-71.547v-32h8c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z\"]\n    }\n  },\n  chair: {\n    styles: [SOLID],\n    unicode: String.fromCharCode(parseInt('f6c0', 16)),\n    iconDefinition: {\n      prefix: 'fas',\n      iconName: 'chair',\n      icon: [448, 512, [], \"f6c0\", \"M112 128c0-29.5 16.2-55 40-68.9V256h48V48h48v208h48V59.1c23.8 13.9 40 39.4 40 68.9v128h48V128C384 57.3 326.7 0 256 0h-64C121.3 0 64 57.3 64 128v128h48zm334.3 213.9l-10.7-32c-4.4-13.1-16.6-21.9-30.4-21.9H42.7c-13.8 0-26 8.8-30.4 21.9l-10.7 32C-5.2 362.6 10.2 384 32 384v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384h256v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384c21.8 0 37.2-21.4 30.3-42.1z\"]\n    }\n  }\n};\nvar className = 'font-awesome-icon-chooser';\n\nvar FontAwesomeIconChooser = /*#__PURE__*/function (_Component) {\n  _inherits(FontAwesomeIconChooser, _Component);\n\n  var _super = _createSuper(FontAwesomeIconChooser);\n\n  function FontAwesomeIconChooser() {\n    _classCallCheck(this, FontAwesomeIconChooser);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(FontAwesomeIconChooser, [{\n    key: \"render\",\n    value: function render() {\n      var handleSelect = this.props.handleSelect;\n      return wp.element.createElement(\"div\", {\n        className: className\n      }, wp.element.createElement(\"ul\", {\n        className: 'icons'\n      }, Object.keys(icons).map(function (icon, iconIndex) {\n        return icons[icon].styles.map(function (prefix, prefixIndex) {\n          return wp.element.createElement(\"li\", {\n            onClick: function onClick() {\n              return handleSelect(icons[icon].iconDefinition);\n            },\n            key: \"\".concat(iconIndex, \"-\").concat(prefixIndex)\n          }, wp.element.createElement(\"i\", {\n            className: \"\".concat(prefix, \" fa-\").concat(icon, \" \")\n          }));\n        });\n      })));\n    }\n  }]);\n\n  return FontAwesomeIconChooser;\n}(Component);\n\n\n\n//# sourceURL=webpack:///./font-awesome/chooser.js?");

/***/ }),

/***/ "./font-awesome/index.js":
/*!*******************************!*\
  !*** ./font-awesome/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chooser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chooser */ \"./font-awesome/chooser.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n(function (wp) {\n  var _wp$element = wp.element,\n      Fragment = _wp$element.Fragment,\n      Component = _wp$element.Component;\n  var _wp$components = wp.components,\n      SVG = _wp$components.SVG,\n      Path = _wp$components.Path;\n  var __ = wp.i18n.__;\n  var _window$wp$richText = window.wp.richText,\n      insertObject = _window$wp$richText.insertObject,\n      registerFormatType = _window$wp$richText.registerFormatType;\n  var RichTextToolbarButton = window.wp.blockEditor.RichTextToolbarButton;\n  var name = 'font-awesome/icon';\n\n  var title = __('Font Awesome Icon');\n\n  registerFormatType(name, {\n    name: name,\n    title: __('Font Awesome Icon'),\n    keywords: [__('icon'), __('font awesome')],\n    tagName: 'fa-icon',\n    className: null,\n    // if object is true, then the HTML rendered for this type will lack a closing tag.\n    object: false,\n    attributes: {\n      json: 'json'\n    },\n    edit: /*#__PURE__*/function (_Component) {\n      _inherits(FontAwesomeIconEdit, _Component);\n\n      var _super = _createSuper(FontAwesomeIconEdit);\n\n      function FontAwesomeIconEdit(props) {\n        var _this;\n\n        _classCallCheck(this, FontAwesomeIconEdit);\n\n        _this = _super.apply(this, arguments);\n        _this.addIcon = _this.addIcon.bind(_assertThisInitialized(_this));\n        _this.stopAddingIcon = _this.stopAddingIcon.bind(_assertThisInitialized(_this));\n        _this.handleFormatButtonClick = _this.handleFormatButtonClick.bind(_assertThisInitialized(_this));\n        _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));\n        _this.state = {\n          addingIcon: false\n        };\n        return _this;\n      }\n\n      _createClass(FontAwesomeIconEdit, [{\n        key: \"handleFormatButtonClick\",\n        value: function handleFormatButtonClick() {\n          var _this$props = this.props,\n              isActive = _this$props.isActive,\n              activeAttributes = _this$props.activeAttributes,\n              value = _this$props.value,\n              onChange = _this$props.onChange;\n\n          if (this.state.addingIcon) {\n            this.stopAddingIcon();\n            /*\n            } else if(isActive) {\n            // Remove both the unicode character and the format\n            const result = replace(removeFormat(value, name), new RegExp(activeAttributes.unicode), '')\n            onChange( result  )\n            */\n          } else {\n            this.addIcon();\n          }\n        }\n      }, {\n        key: \"addIcon\",\n        value: function addIcon() {\n          this.setState({\n            addingIcon: true\n          });\n        }\n      }, {\n        key: \"stopAddingIcon\",\n        value: function stopAddingIcon() {\n          this.setState({\n            addingIcon: false\n          });\n        }\n      }, {\n        key: \"handleSelect\",\n        value: function handleSelect(iconDefinition) {\n          var _this$props2 = this.props,\n              value = _this$props2.value,\n              onChange = _this$props2.onChange;\n          var formatToInsert = {\n            type: name,\n            attributes: {\n              json: JSON.stringify(iconDefinition)\n            }\n          };\n          onChange(insertObject(value, formatToInsert));\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          var _this$props3 = this.props,\n              isActive = _this$props3.isActive,\n              value = _this$props3.value; // TODO: figure out whether I want to do anything about this state where, when\n          // the icon is clicked isObjectActive is true and activeObjectAttributes contains it's attributes.\n          // console.log(`DEBUG render: isActive: ${isActive}, isObjectActive: ${isObjectActive} for value: `, value)\n\n          var currentFormat = value.replacements[value.start];\n          var isFaIconActive = currentFormat && currentFormat.type === name;\n\n          if (isFaIconActive) {\n            console.log(\"DEBUG: fa-icon activated with format: \", currentFormat);\n          }\n\n          return wp.element.createElement(Fragment, null, wp.element.createElement(RichTextToolbarButton, {\n            icon: wp.element.createElement(SVG, {\n              xmlns: \"http://www.w3.org/2000/svg\",\n              viewBox: \"0 0 448 512\",\n              className: \"svg-inline--fa fa-font-awesome fa-w-14\"\n            }, wp.element.createElement(Path, {\n              fill: \"currentColor\",\n              d: \"M397.8 32H50.2C22.7 32 0 54.7 0 82.2v347.6C0 457.3 22.7 480 50.2 480h347.6c27.5 0 50.2-22.7 50.2-50.2V82.2c0-27.5-22.7-50.2-50.2-50.2zm-45.4 284.3c0 4.2-3.6 6-7.8 7.8-16.7 7.2-34.6 13.7-53.8 13.7-26.9 0-39.4-16.7-71.7-16.7-23.3 0-47.8 8.4-67.5 17.3-1.2.6-2.4.6-3.6 1.2V385c0 1.8 0 3.6-.6 4.8v1.2c-2.4 8.4-10.2 14.3-19.1 14.3-11.3 0-20.3-9-20.3-20.3V166.4c-7.8-6-13.1-15.5-13.1-26.3 0-18.5 14.9-33.5 33.5-33.5 18.5 0 33.5 14.9 33.5 33.5 0 10.8-4.8 20.3-13.1 26.3v18.5c1.8-.6 3.6-1.2 5.4-2.4 18.5-7.8 40.6-14.3 61.5-14.3 22.7 0 40.6 6 60.9 13.7 4.2 1.8 8.4 2.4 13.1 2.4 22.7 0 47.8-16.1 53.8-16.1 4.8 0 9 3.6 9 7.8v140.3z\"\n            })),\n            title: title,\n            onClick: this.handleFormatButtonClick,\n            isActive: isActive,\n            shortcutType: \"primary\"\n          }), this.state.addingIcon && wp.element.createElement(_chooser__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n            handleSelect: this.handleSelect\n          }));\n        }\n      }]);\n\n      return FontAwesomeIconEdit;\n    }(Component)\n  });\n})(window.wp);\n\n//# sourceURL=webpack:///./font-awesome/index.js?");

/***/ })

/******/ });