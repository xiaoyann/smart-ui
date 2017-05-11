(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["SmartUI"] = factory(require("vue"));
	else
		root["SmartUI"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Cell = __webpack_require__(62);

Object.defineProperty(exports, 'Cell', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Cell).default;
  }
});

var _CellGroup = __webpack_require__(63);

Object.defineProperty(exports, 'CellGroup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CellGroup).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(71);

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Modal).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Spinner = __webpack_require__(76);

Object.defineProperty(exports, 'Spinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Spinner).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _ActionSheet = __webpack_require__(60);

var _ActionSheet2 = _interopRequireDefault(_ActionSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionsheet = new _vue2.default(_extends({}, _ActionSheet2.default))

// 在应用中，ActionSheet 只会同时显示一个，不应该哪里要使用就在哪里创建一个实例。
// 所以单独创建一个挂载点，自动挂载。
;(function () {
	var id = 'smart-ui-actionsheet-mount-point';
	var mountPoint = document.createElement('div');
	mountPoint.id = id;
	document.body.appendChild(mountPoint);
	actionsheet.$mount('#' + id);
})();

exports.default = {
	config: function config(conf) {
		['tintColor', 'zIndex'].forEach(function (name) {
			if (typeof conf[name] !== 'undefined') {
				actionsheet[name] = conf[name];
			}
		});
	},
	show: function show() {
		actionsheet.show.apply(actionsheet, arguments);
	},
	hide: function hide() {
		actionsheet.hide.apply(actionsheet, arguments);
	}
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = config;

var _Button = __webpack_require__(61);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = {
  default: {
    button: {
      className: 'Button--default'
    },
    spinner: {
      bgcolor: '#ddd',
      forecolor: 'transparent'
    }
  },
  primary: {
    button: {
      className: 'Button--primary'
    },
    spinner: {
      bgcolor: 'rgba(255, 255, 255, .4)',
      forecolor: '#fff'
    }
  },
  caution: {
    button: {
      className: 'Button--caution'
    },
    spinner: {
      bgcolor: 'rgba(255, 255, 255, .4)',
      forecolor: '#fff'
    }
  }
};(function (opt) {
  Object.keys(opt).forEach(function (name) {
    return _Button2.default[name] = opt[name];
  });
})({
  props: {
    // 字体大小
    fontSize: {
      type: String,
      default: '12px'
    },
    // 宽
    width: {
      type: String,
      default: ''
    },
    // 高
    height: {
      type: String,
      default: ''
    },
    // 圆角
    radius: {
      type: String,
      default: '3px'
    },
    // 主题
    theme: {
      type: String,
      default: 'default'
    },
    // 禁用
    disabled: undefined,
    // loading
    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes: function classes() {
      return _defineProperty({
        Button: true,
        disabled: typeof this.disabled !== 'undefined' || this.loading
      }, 'Button--' + this.theme, true);
    },
    style: function style() {
      return {
        width: this.width,
        height: this.height,
        'border-radius': this.radius,
        'font-size': this.fontSize
      };
    },
    size: function size() {
      return parseInt(this.fontSize) + 1;
    },
    bgcolor: function bgcolor() {
      var config = theme[this.theme];
      return config.spinner.bgcolor;
    },
    forecolor: function forecolor() {
      var config = theme[this.theme];
      return config.spinner.forecolor;
    }
  },

  methods: {
    handleClick: function handleClick() {
      if (!this.loading) {
        this.$emit('click');
      }
    }
  }
});

function config(name, conf) {
  theme[name] = conf;
}

exports.default = { component: _Button2.default, config: config };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Checkbox = __webpack_require__(64);

Object.defineProperty(exports, 'Checkbox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Checkbox).default;
  }
});

var _CheckboxOption = __webpack_require__(65);

Object.defineProperty(exports, 'CheckboxOption', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CheckboxOption).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Datepicker = __webpack_require__(66);

Object.defineProperty(exports, 'Datepicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Datepicker).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _Dialog = __webpack_require__(67);

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _vue2.default(_extends({}, _Dialog2.default));(function () {
	var id = 'smart-ui-dialog-mount-point';
	var mountPoint = document.createElement('div');
	mountPoint.id = id;
	document.body.appendChild(mountPoint);
	instance.$mount('#' + id);
})();

exports.default = {
	alert: function alert() {
		instance.alert.apply(instance, arguments);
	},
	confirm: function confirm() {
		instance.confirm.apply(instance, arguments);
	},
	prompt: function prompt() {
		instance.prompt.apply(instance, arguments);
	},
	zIndex: function zIndex(_zIndex) {
		instance.zIndex = _zIndex;
		return instance;
	}
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Field = __webpack_require__(68);

Object.defineProperty(exports, 'Field', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Field).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _Loading = __webpack_require__(69);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loading = new _vue2.default(_extends({}, _Loading2.default));(function () {
	var id = 'smart-ui-loading-mount-point';
	var mountPoint = document.createElement('div');
	mountPoint.id = id;
	document.body.appendChild(mountPoint);
	loading.$mount('#' + id);
})();

exports.default = {
	show: function show(message) {
		loading.show(message);
	},
	hide: function hide() {
		loading.hide();
	},
	zIndex: function zIndex(_zIndex) {
		loading.zIndex = _zIndex;
		return loading;
	}
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loadmore = __webpack_require__(70);

Object.defineProperty(exports, 'Loadmore', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Loadmore).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Popup = __webpack_require__(72);

Object.defineProperty(exports, 'Popup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Popup).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Radio = __webpack_require__(73);

Object.defineProperty(exports, 'Radio', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Radio).default;
  }
});

var _RadioOption = __webpack_require__(74);

Object.defineProperty(exports, 'RadioOption', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RadioOption).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Selector = __webpack_require__(75);

Object.defineProperty(exports, 'Selector', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Selector).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Switcher = __webpack_require__(77);

Object.defineProperty(exports, 'Switcher', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Switcher).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TabBar = __webpack_require__(78);

Object.defineProperty(exports, 'TabBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TabBar).default;
  }
});

var _TabBarItem = __webpack_require__(79);

Object.defineProperty(exports, 'TabBarItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TabBarItem).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _Toast = __webpack_require__(80);

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toast = new _vue2.default(_extends({}, _Toast2.default));(function () {
	var id = 'smart-ui-toast-mount-point';
	var mountPoint = document.createElement('div');
	mountPoint.id = id;
	document.body.appendChild(mountPoint);
	toast.$mount('#' + id);
})();

exports.default = {
	show: function show() {
		toast.show.apply(toast, arguments);
		return toast;
	},
	zIndex: function zIndex(_zIndex) {
		toast.zIndex = _zIndex;
		return toast;
	}
};

/***/ },
/* 18 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _Modal = __webpack_require__(2);

// 禁止点击的按钮颜色
var disableColor = '#999999';
// 危险操作的按钮颜色
var destructiveColor = '#FF3B30';

exports.default = {
	name: 'ActionSheet',

	data: function data() {
		return {
			visible: false,
			// 标题
			title: '',
			// 可操作的选项
			options: [],
			// 是否隐藏取消按钮
			hideCancel: false,
			// 按钮颜色
			tintColor: '#2b8ff7',
			// css z-index
			zIndex: 5
		};
	},


	components: {
		Modal: _Modal.Modal
	},

	methods: {
		show: function show(title, options) {
			var hideCancel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			this.title = title;
			this.hideCancel = hideCancel;
			this.options = options.map(function (opt) {
				if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object') {
					return opt;
				} else {
					return { text: opt, disable: false, destructive: false };
				}
			});
			this.visible = true;
		},
		hide: function hide() {
			this.visible = false;
		},
		handleClick: function handleClick(i) {
			var conf = this.options[i];
			if (!conf.disable && conf.onSelect) {
				conf.onSelect();
				this.hide();
			}
		},


		// 计算按钮颜色
		getFontColor: function getFontColor(opt) {
			if (opt.disable) {
				return disableColor;
			}
			if (opt.destructive) {
				return destructiveColor;
			}
			return this.tintColor;
		}
	}
};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	name: 'Cell',

	props: {
		title: undefined,
		content: undefined,
		// whether display arrow icon
		arrow: undefined,
		// navigate to another URL by Router
		to: String,
		// active style
		active: undefined
	},

	computed: {
		hasIcon: function hasIcon() {
			return !!this.$slots.icon;
		},
		hasArrow: function hasArrow() {
			return this.arrow === false ? false : this.to ? true : typeof this.arrow !== 'undefined';
		}
	},

	methods: {
		handleClick: function handleClick() {
			if (this.to) {
				// is standard URL
				if (/^https?\:/.test(this.to)) {
					window.location = this.to;
				} else {
					if (this.$router) {
						this.$router.push(this.to);
					} else {
						this.$emit('click');
					}
				}
			} else {
				this.$emit('click');
			}
		}
	}
};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	name: 'CellGroup'
};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Cell = __webpack_require__(1);

exports.default = {
	name: 'Checkbox',

	props: {
		title: String,
		value: Array
	},

	components: {
		CellGroup: _Cell.CellGroup
	},

	watch: {
		value: function value(newVal) {
			this.checkStatus(newVal);
		}
	},

	mounted: function mounted() {
		this.watchChildren();
		this.checkStatus(this.value);
	},


	methods: {
		setValue: function setValue(checked, val) {
			var values = [];
			this.$refs.cells.$children.forEach(function (child) {
				if (child.checked) {
					values.push(child.value);
				}
			});
			this.$emit('input', values);
		},
		watchChildren: function watchChildren() {
			var _this = this;

			this.$refs.cells.$children.forEach(function (child) {
				return child.$on('click', _this.setValue);
			});
		},
		checkStatus: function checkStatus(values) {
			this.$refs.cells.$children.forEach(function (child) {
				return child.checkStatus(values);
			});
		}
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Cell = __webpack_require__(1);

exports.default = {
	name: 'CheckboxOption',

	props: ['value'],

	data: function data() {
		return {
			checked: false
		};
	},


	components: {
		Cell: _Cell.Cell
	},

	methods: {
		handleClick: function handleClick() {
			this.checked = !this.checked;
			this.$emit('click', this.checked, this.value);
		},
		checkStatus: function checkStatus(values) {
			this.checked = values.indexOf(this.value) > -1;
		}
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	props: {
		value: {},
		placeholder: String
	},

	data: function data() {
		return {
			val: this.value
		};
	},


	watch: {
		val: function val(newVal) {
			this.$emit('input', newVal);
		},
		value: function value(newVal) {
			this.val = newVal;
		}
	}
};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Modal = __webpack_require__(2);

function getType(obj) {
	return Object.prototype.toString.call(obj).slice(8, -1);
} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function isButton(obj) {
	var type = getType(obj);
	return (/^(Object|Array|Function)$/.test(type)
	);
}

function createButtons(options) {
	var buttons = [];
	var type = getType(options);

	if (type === 'Object') {
		buttons = [options];
	} else if (type === 'Function') {
		buttons = [{
			title: '确定',
			onClick: options
		}];
	} else if (type === 'Array') {
		buttons = options;
	}

	if (buttons.length === 0) {
		buttons = [{ title: '确定' }];
	}

	return buttons.map(function (btn) {
		if (getType(btn) !== 'Object') {
			return { title: btn };
		} else {
			return btn;
		}
	});
}

exports.default = {
	data: function data() {
		return {
			visible: false,
			title: '',
			content: '',
			buttons: [],
			isPrompt: false,
			promptVal: '',
			zIndex: 6
		};
	},


	components: {
		Modal: _Modal.Modal
	},

	computed: {
		width: function width() {
			return Math.floor(document.body.clientWidth * 0.85 / 15) * 15 + 'px';
		}
	},

	methods: {
		alert: function alert(title, content, buttons) {
			if (arguments.length === 1) {
				content = title;
				title = undefined;
			} else {
				if (isButton(content)) {
					buttons = content;
					content = title;
					title = undefined;
				}
			}
			this.title = title;
			this.content = content;
			this.buttons = createButtons(buttons);
			this.visible = true;
		},
		confirm: function confirm(title, content, callback) {
			if (arguments.length === 1) {
				content = title;
				title = undefined;
			} else {
				if (typeof content === 'function') {
					callback = content;
					content = title;
					title = undefined;
				}
			}
			this.alert(title, content, [{
				title: '取消',
				onClick: function onClick() {
					if (callback) callback(false);
				}
			}, {
				title: '确认',
				onClick: function onClick() {
					if (callback) callback(true);
				}
			}]);
		},
		prompt: function prompt(title, callback) {
			var _this = this;

			this.isPrompt = true;
			this.alert(title, '', [{
				title: '取消'
			}, {
				title: '确认',
				onClick: function onClick() {
					if (callback) callback(_this.promptVal);
				}
			}]);
		},
		handleClick: function handleClick(btn) {
			if (btn.onClick) {
				btn.onClick();
			}
			this.visible = false;
		},
		afterLeave: function afterLeave() {
			this.title = '';
			this.content = '';
			this.buttons = [];
			this.promptVal = '';
			this.isPrompt = false;
			this.zIndex = 6;
		}
	}
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	props: {
		label: {
			type: String
		},
		type: {
			type: String,
			default: 'text'
		},
		placeholder: {
			type: String
		},
		align: {
			type: String,
			default: 'left'
		},
		value: {}
	},

	data: function data() {
		return {
			val: this.value
		};
	},


	watch: {
		val: function val(newVal) {
			this.$emit('input', newVal);
		},
		value: function value(newVal) {
			this.val = newVal;
		}
	},

	methods: {
		handleInput: function handleInput(e) {
			this.val = e.target.value;
		},
		clear: function clear() {
			this.val = '';
		}
	}
};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Spinner = __webpack_require__(3);

exports.default = {
	data: function data() {
		return {
			message: '',
			visible: false,
			zIndex: 7
		};
	},


	components: {
		Spinner: _Spinner.Spinner
	},

	methods: {
		show: function show(message) {
			this.message = message;
			this.visible = true;
		},
		hide: function hide() {
			this.message = '';
			this.visible = false;
			this.zIndex = 4;
		}
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {

	name: 'Lodamore',

	props: {
		allLoaded: {
			type: Boolean,
			default: false
		},
		desc: {
			type: String,
			default: '正在加载...'
		}
	},

	data: function data() {
		return {
			visible: false
		};
	},


	watch: {
		allLoaded: function allLoaded(newVal) {
			this.visible = !newVal;
		}
	},

	methods: {
		onscroll: function onscroll() {
			if (this.allLoaded) {
				return this.stopListen();
			}

			var scrollTop = document.body.scrollTop;
			var scrollHeight = document.body.scrollHeight;
			var clientHeight = document.documentElement.clientHeight;

			if (this.visible) {
				scrollHeight -= 44;
			}

			if (scrollTop + clientHeight >= scrollHeight) {
				this.$emit('reachBottom');
			}
		},
		startListen: function startListen() {
			var clientHeight = document.documentElement.clientHeight;
			var scrollHeight = document.body.scrollHeight;
			// 如果页面数据不够一屏，说明没有更多的数据需要加载，所以不需要监听 scroll
			// 事件，不需要使用 Loadmore 
			if (scrollHeight > clientHeight) {
				this.visible = true;
				window.addEventListener('scroll', this.onscroll);
			}
		},
		stopListen: function stopListen() {
			window.removeEventListener('scroll', this.onscroll);
		}
	},

	mounted: function mounted() {
		this.startListen();
	},


	// 组件销毁时解除事件监听
	destroyed: function destroyed() {
		this.stopListen();
	}
};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
	name: 'Modal',

	props: {
		value: {
			type: Boolean
		},
		// 背景色
		bgcolor: {
			type: String,
			default: '#fff'
		},
		// css z-index
		zIndex: {
			type: [String, Number],
			default: 2
		},
		// 显示出来时的动画方式
		anim: {
			validator: function validator(v) {
				var names = ['none', 'bottomUp', 'fade'];
				return names.indexOf(v) > -1;
			},
			default: 'none'
		},
		// 点击时隐藏
		dismissOnClick: {
			type: Boolean,
			default: false
		}
	},

	data: function data() {
		return {
			visible: false
		};
	},


	computed: {
		animName: function animName() {
			var name = this.anim;
			if (name === 'none') {
				return '';
			} else {
				return 'smart-anim--' + name;
			}
		}
	},

	watch: {
		value: function value(newVal) {
			this.visible = newVal;
		}
	},

	methods: {
		hanldeClick: function hanldeClick(e) {
			if (e.target === this.$refs.modal && this.dismissOnClick) {
				this.$emit('input', false);
			}
		}
	}
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _conf = {
  bottom: {
    anim: 'smart-anim--bottomUp',
    style: {
      bottom: 0
    }
  },
  top: {
    anim: 'smart-anim--topDown',
    style: {
      top: 0
    }
  }
};

exports.default = {
  props: {
    value: {
      type: Boolean
    },
    // css z-index
    zIndex: {
      type: [String, Number],
      default: 2
    },
    position: {
      validator: function validator(value) {
        return value === 'bottom' || value === 'top';
      },

      default: 'bottom'
    }
  },

  data: function data() {
    return {
      visible: false
    };
  },


  computed: {
    conf: function conf() {
      return _conf[this.position];
    }
  },

  watch: {
    value: function value(newVal) {
      this.visible = newVal;
    },
    visible: function visible(newVal, oldVal) {
      this.$emit('input', newVal);
    }
  }
};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	name: 'Radio',

	props: ['value', 'title'],

	watch: {
		value: function value(newVal) {
			this.checkStatus(newVal);
		}
	},

	mounted: function mounted() {
		this.watchChildren();
		this.checkStatus(this.value);
	},


	methods: {
		setValue: function setValue(v) {
			this.$emit('input', v);
			this.checkStatus(v);
		},
		checkStatus: function checkStatus(v) {
			this.$children.forEach(function (child) {
				return child.checkStatus(v);
			});
		},
		watchChildren: function watchChildren() {
			var _this = this;

			this.$children.forEach(function (child) {
				return child.$on('changed', _this.setValue);
			});
		}
	}
};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	name: 'RadioOption',

	props: ['value', 'input'],

	data: function data() {
		return {
			val: this.value,
			active: false
		};
	},


	computed: {
		hasInput: function hasInput() {
			return typeof this.input !== 'undefined';
		}
	},

	watch: {
		val: function val(v) {
			this.$emit('changed', v);
		}
	},

	methods: {
		onClick: function onClick() {
			if (this.hasInput) {
				this.$refs.ipt.focus();
			}
			this.$emit('changed', this.val);
		},
		checkStatus: function checkStatus(radioValue) {
			this.active = radioValue === this.val;
		}
	}
};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	props: {
		value: {},
		placeholder: {
			type: String
		}
	},

	data: function data() {
		this.options = [];
		return {
			selectedIndex: -1
		};
	},


	watch: {
		selectedIndex: function selectedIndex(newIndex) {
			var option = this.options[newIndex];
			if (option) {
				this.$refs.selector.selectedIndex = newIndex;
				this.$emit('input', option.value);
			}
		},
		value: function value() {
			this.checkStatus();
		}
	},

	mounted: function mounted() {
		this.pickOptions();
	},


	methods: {
		pickOptions: function pickOptions() {
			var _this = this;

			var options = this.$refs.selector.options;
			this.selectedIndex = this.$refs.selector.selectedIndex;[].forEach.call(options, function (option) {
				_this.options.push({
					text: option.innerHTML,
					value: option.value
				});
			});
			this.checkStatus();
		},
		checkStatus: function checkStatus() {
			var _this2 = this;

			var selectedIndex = this.selectedIndex;
			this.options.forEach(function (option, index) {
				if (option.value === _this2.value + '') {
					selectedIndex = index;
				}
			});
			this.selectedIndex = selectedIndex;
		},
		handleChange: function handleChange(e) {
			if (this.options.length === 0) {
				this.pickOptions();
			}
			this.selectedIndex = e.target.selectedIndex;
		},
		getText: function getText() {
			if (this.selectedIndex > -1) {
				var option = this.options[this.selectedIndex] || {};
				return option.text;
			} else {
				return this.placeholder;
			}
		}
	}
};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    // 组件大小
    size: {
      type: [Number, String],
      default: 22
    },
    // 边框宽度
    width: {
      type: [Number, String],
      default: 2
    },
    // 背景色
    bgcolor: {
      type: String,
      default: '#e0e0e0'
    },
    // 前景色
    forecolor: {
      type: String,
      default: '#999'
    }
  },

  computed: {
    style: function style() {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        'border-top-color': this.bgcolor,
        'border-right-color': this.bgcolor,
        'border-bottom-color': this.bgcolor,
        'border-left-color': this.forecolor,
        'border-width': this.width + 'px'
      };
    }
  }
};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    offColor: {
      type: String,
      default: '#bfcbd9'
    },
    onColor: {
      type: String,
      default: '#20a0ff'
    },
    offText: {
      type: String,
      default: ''
    },
    onText: {
      type: String,
      default: ''
    },
    onVal: {
      default: true
    },
    offVal: {
      default: false
    },
    value: {}
  },

  computed: {
    on: function on() {
      return this.onVal == this.value;
    }
  },

  methods: {
    handleClick: function handleClick() {
      this.$emit('input', this.on ? this.offVal : this.onVal);
    }
  }
};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	name: 'TabBar',

	props: {
		fixed: {
			type: Boolean,
			default: false
		},
		visible: {
			type: Boolean,
			default: true
		},
		bgcolor: {
			type: String,
			default: 'rgba(247,247,250,.8)'
		}
	}
};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	name: 'TabBarItem',

	props: {
		// the title
		title: {
			type: String,
			required: true,
			default: ''
		},
		// navigate to another URL by Router
		to: String,
		selected: {
			type: Boolean,
			required: true,
			default: false
		}
	},

	computed: {
		// whether has slot
		hasSlot: function hasSlot() {
			return Object.keys(this.$slots).length > 0;
		}
	},

	methods: {
		handleClick: function handleClick() {
			if (this.to && this.$router) {
				// do not produce history, It is not necessary
				this.$router.replace(this.to);
			} else {
				this.$emit('click');
			}
		}
	}
};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	data: function data() {
		return {
			visible: false,
			content: '',
			position: 'center',
			zIndex: 7
		};
	},


	methods: {
		show: function show(content) {
			var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'center';

			var _this = this;

			var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
			var callback = arguments[3];

			if (typeof position === 'function') {
				callback = position;
				position = 'center';
			}

			if (typeof time === 'function') {
				callback = time;
				time = 2000;
			}

			this.content = content;
			this.position = position;
			this.visible = true;

			setTimeout(function () {
				_this.hide();
				if (typeof callback === 'function') {
					callback();
				}
			}, time);
		},
		hide: function hide() {
			this.visible = false;
		},
		afterLeave: function afterLeave() {
			this.content = '';
			this.position = 'center';
			this.zIndex = 4;
		}
	}
};

/***/ },
/* 39 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 40 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 41 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 42 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 43 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 44 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 45 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 46 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 47 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 48 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 49 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 50 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 51 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 52 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 53 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 54 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 55 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 56 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 57 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 58 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 59 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(39)

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(81)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(52)

/* template */
var __vue_template__ = __webpack_require__(94)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(51)

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(93)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(42)

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(84)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(50)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(92)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(47)

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(89)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(56)

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(98)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(45)

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(87)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(48)

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(90)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(43)

/* script */
__vue_exports__ = __webpack_require__(27)

/* template */
var __vue_template__ = __webpack_require__(85)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(55)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(97)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(58)

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(100)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(46)

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(88)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(49)

/* script */
__vue_exports__ = __webpack_require__(31)

/* template */
var __vue_template__ = __webpack_require__(91)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(57)

/* script */
__vue_exports__ = __webpack_require__(32)

/* template */
var __vue_template__ = __webpack_require__(99)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(54)

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(96)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(59)

/* script */
__vue_exports__ = __webpack_require__(34)

/* template */
var __vue_template__ = __webpack_require__(101)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(53)

/* script */
__vue_exports__ = __webpack_require__(35)

/* template */
var __vue_template__ = __webpack_require__(95)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(41)

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(83)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(40)

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(82)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(44)

/* script */
__vue_exports__ = __webpack_require__(38)

/* template */
var __vue_template__ = __webpack_require__(86)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 81 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Modal', {
    attrs: {
      "anim": "fade",
      "bgcolor": "rgba(0,0,0,.4)",
      "dismissOnClick": true,
      "zIndex": _vm.zIndex
    },
    model: {
      value: (_vm.visible),
      callback: function($$v) {
        _vm.visible = $$v
      },
      expression: "visible"
    }
  }, [_c('transition', {
    attrs: {
      "name": "smart-anim--bottomUp"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "ActionSheet"
  }, [(_vm.title) ? _c('div', {
    staticClass: "ActionSheet--title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ActionSheet--options"
  }, _vm._l((_vm.options), function(opt, i) {
    return _c('div', {
      staticClass: "ActionSheet--option smart-border-top",
      style: ({
        color: _vm.getFontColor(opt)
      }),
      on: {
        "click": function($event) {
          _vm.handleClick(i)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(opt.text) + "\n\t\t\t\t")])
  })), _vm._v(" "), (_vm.hideCancel == false) ? _c('div', {
    staticClass: "ActionSheet--option smart-border-top ActionSheet--cancel",
    style: ({
      color: _vm.tintColor
    }),
    on: {
      "click": _vm.hide
    }
  }, [_vm._v("\n\t\t\t\t取消\n\t\t\t")]) : _vm._e()])])], 1)
},staticRenderFns: []}

/***/ },
/* 82 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "TabBarItem",
    class: {
      'selected': _vm.selected
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_c('div', {
    staticClass: "TabBarItem--bd"
  }, [(_vm.hasSlot) ? _c('div', {
    staticClass: "TabBarItem--icon"
  }, [(_vm.selected === false) ? _vm._t("icon") : _vm._e(), _vm._v(" "), (_vm.selected === true) ? _vm._t("icon-selected") : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "TabBarItem--title"
  }, [_vm._v(_vm._s(_vm.title))])])])
},staticRenderFns: []}

/***/ },
/* 83 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "TabBar smart-border-top",
    class: {
      'TabBar--fixed': _vm.fixed, 'TabBar--hide': !_vm.visible
    },
    style: ({
      backgroundColor: _vm.bgcolor
    })
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ },
/* 84 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "CellGroup smart-border-top smart-border-bottom"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ },
/* 85 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "Loading",
    style: ({
      zIndex: _vm.zIndex
    })
  }, [_c('div', {
    staticClass: "Loading--main"
  }, [_c('Spinner', {
    attrs: {
      "size": "35",
      "bgcolor": "#f5f5f5",
      "forecolor": "transparent"
    }
  }), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.message),
      expression: "message"
    }],
    staticClass: "Loading--message"
  }, [_vm._v(_vm._s(_vm.message))])], 1)])
},staticRenderFns: []}

/***/ },
/* 86 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "smart-anim--fade"
    },
    on: {
      "after-leave": _vm.afterLeave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "Toast",
    style: ({
      zIndex: _vm.zIndex
    })
  }, [_c('div', {
    staticClass: "Toast--main",
    class: {
      top: _vm.position === 'top',
        center: _vm.position === 'center',
        bottom: _vm.position === 'bottom',
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.content) + "\n\t\t")])])])
},staticRenderFns: []}

/***/ },
/* 87 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Modal', {
    attrs: {
      "anim": "fade",
      "bgcolor": "rgba(0,0,0,.4)",
      "zIndex": _vm.zIndex
    },
    model: {
      value: (_vm.visible),
      callback: function($$v) {
        _vm.visible = $$v
      },
      expression: "visible"
    }
  }, [_c('div', {
    staticClass: "Dialog"
  }, [_c('transition', {
    attrs: {
      "name": "smart-anim--scale"
    },
    on: {
      "after-leave": _vm.afterLeave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "Dialog--main",
    style: ({
      'width': _vm.width
    })
  }, [_c('div', {
    staticClass: "Dialog--bd"
  }, [_c('h3', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.title),
      expression: "title"
    }],
    staticClass: "Dialog--title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.content),
      expression: "content"
    }],
    staticClass: "Dialog--content",
    style: ({
      paddingTop: _vm.title ? '8px' : 0
    })
  }, [_c('div', {
    staticClass: "Dialog--text"
  }, [_vm._v(_vm._s(_vm.content))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isPrompt),
      expression: "isPrompt"
    }],
    staticClass: "Dialog--content",
    style: ({
      paddingTop: _vm.title ? '8px' : 0
    })
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.promptVal),
      expression: "promptVal"
    }],
    ref: "promptInput",
    staticClass: "Dialog--prompt",
    domProps: {
      "value": (_vm.promptVal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.promptVal = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    class: {
      'Dialog--separator': _vm.buttons.length === 2
    }
  }, _vm._l((_vm.buttons), function(btn) {
    return _c('a', {
      staticClass: "Dialog--button smart-border-top",
      style: ({
        'width': _vm.buttons.length === 2 ? '50%' : '100%'
      }),
      attrs: {
        "href": "javascript:;"
      },
      on: {
        "click": function($event) {
          _vm.handleClick(btn)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(btn.title) + "\n\t\t\t\t\t")])
  }))])])], 1)])
},staticRenderFns: []}

/***/ },
/* 88 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Modal', {
    attrs: {
      "anim": "fade",
      "bgcolor": "rgba(0, 0, 0, .4)",
      "dismissOnClick": true,
      "zIndex": _vm.zIndex
    },
    model: {
      value: (_vm.visible),
      callback: function($$v) {
        _vm.visible = $$v
      },
      expression: "visible"
    }
  }, [_c('transition', {
    attrs: {
      "name": _vm.conf.anim
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "Popup",
    style: (_vm.conf.style)
  }, [_vm._t("default")], 2)])], 1)
},staticRenderFns: []}

/***/ },
/* 89 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Cell', {
    staticClass: "CheckboxOptionBox",
    on: {
      "click": _vm.handleClick
    }
  }, [_c('div', {
    staticClass: "CheckboxOption",
    slot: "header"
  }, [_c('div', {
    staticClass: "CheckboxOption--icon",
    class: {
      'checked': _vm.checked
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "CheckboxOption--name"
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}

/***/ },
/* 90 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Cell', [(_vm.label) ? _c('div', {
    staticClass: "Field--label",
    slot: "header"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.label) + "\n\t")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "Field--bd",
    slot: "body"
  }, [_c('div', {
    staticClass: "Field--input"
  }, [_c('input', {
    style: ({
      textAlign: _vm.align
    }),
    attrs: {
      "type": _vm.type,
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.val
    },
    on: {
      "input": _vm.handleInput
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.val),
      expression: "val"
    }],
    staticClass: "Field--delBox",
    on: {
      "click": _vm.clear
    }
  }, [_c('div', {
    staticClass: "Field--del"
  })])])])
},staticRenderFns: []}

/***/ },
/* 91 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "RadioBox"
  }, [(_vm.title) ? _c('div', {
    staticClass: "Radio--title smart-border-bottom"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ },
/* 92 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('CellGroup', {
    ref: "cells"
  }, [_c('h3', {
    staticClass: "Checkbox--title smart-border-bottom"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', [_vm._t("default")], 2)])], 1)
},staticRenderFns: []}

/***/ },
/* 93 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "CellBox",
    class: {
      'Cell--active': _vm.active !== undefined
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_c('div', {
    staticClass: "Cell smart-border-top"
  }, [(_vm.hasIcon) ? _c('div', {
    staticClass: "Cell--icon"
  }, [_vm._t("icon")], 2) : _vm._e(), _vm._v(" "), _vm._t("header", [(_vm.title) ? _c('div', {
    staticClass: "Cell--hd"
  }, [_c('span', {
    staticClass: "Cell--title"
  }, [_vm._v(_vm._s(_vm.title))])]) : _vm._e()]), _vm._v(" "), _vm._t("body", [_c('div', {
    staticClass: "Cell--bd"
  }, [_vm._v(_vm._s(_vm.content))])]), _vm._v(" "), (_vm.hasArrow) ? _c('i', {
    staticClass: "Cell--arrow"
  }) : _vm._e()], 2)])
},staticRenderFns: []}

/***/ },
/* 94 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes,
    style: (_vm.style),
    on: {
      "click": _vm.handleClick
    }
  }, [(_vm.loading) ? _c('Spinner', {
    staticStyle: {
      "margin-right": "5px"
    },
    attrs: {
      "size": _vm.size,
      "width": "1",
      "bgcolor": _vm.bgcolor,
      "forecolor": _vm.forecolor
    }
  }) : _vm._e(), _vm._v(" "), _c('div', [_vm._t("default")], 2)], 1)
},staticRenderFns: []}

/***/ },
/* 95 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Switcher",
    style: ({
      backgroundColor: _vm.on ? _vm.onColor : _vm.offColor
    }),
    on: {
      "click": _vm.handleClick
    }
  }, [_c('span', {
    staticClass: "Switcher--text"
  }, [_vm._v(_vm._s(_vm.onText))]), _c('span', {
    staticClass: "Switcher--text"
  }, [_vm._v(_vm._s(_vm.offText))]), _vm._v(" "), _c('div', {
    staticClass: "Switcher--slider",
    class: {
      'Switcher--open': _vm.on
    }
  })])
},staticRenderFns: []}

/***/ },
/* 96 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Selector"
  }, [_c('select', {
    ref: "selector",
    staticClass: "Selector--select",
    on: {
      "change": _vm.handleChange
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "Selector--overlay"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.getText()) + "\n\t")])])
},staticRenderFns: []}

/***/ },
/* 97 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "Loadmore"
  }, [_vm._t("default", [_c('Spinner', {
    attrs: {
      "size": "18"
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.desc))])])], 2)
},staticRenderFns: []}

/***/ },
/* 98 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Datepicker"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.val),
      expression: "val"
    }],
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": (_vm.val)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.val = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "Datepicker--bd"
  }, [_vm._v(_vm._s(_vm.val || _vm.placeholder))])])
},staticRenderFns: []}

/***/ },
/* 99 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "RadioOptionBox"
  }, [_c('div', {
    staticClass: "RadioOption smart-border-top",
    class: {
      active: _vm.active
    },
    on: {
      "click": _vm.onClick
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "RadioOption--text"
  }, [_vm._t("default")], 2)]), _vm._v(" "), (_vm.hasInput) ? _c('div', {
    staticClass: "RadioOption--ipt"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.val),
      expression: "val"
    }],
    ref: "ipt",
    attrs: {
      "type": "text",
      "placeholder": "请输入..."
    },
    domProps: {
      "value": (_vm.val)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.val = $event.target.value
      }
    }
  })]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "RadioOption--icon"
  }, [_c('span', {
    staticClass: "RadioOption--iconInner"
  })])
}]}

/***/ },
/* 100 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.animName
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    ref: "modal",
    staticClass: "Modal",
    style: ({
      'backgroundColor': _vm.bgcolor,
      zIndex: _vm.zIndex
    }),
    on: {
      "click": _vm.hanldeClick
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ },
/* 101 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Spinner",
    style: (_vm.style)
  })
},staticRenderFns: []}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

var _TabBar = __webpack_require__(16);

var _Cell = __webpack_require__(1);

var _Radio = __webpack_require__(13);

var _Checkbox = __webpack_require__(6);

var _Field = __webpack_require__(9);

var _Datepicker = __webpack_require__(7);

var _Selector = __webpack_require__(14);

var _Modal = __webpack_require__(2);

var _Popup = __webpack_require__(12);

var _Loadmore = __webpack_require__(11);

var _Spinner = __webpack_require__(3);

var _Button = __webpack_require__(5);

var _Button2 = _interopRequireDefault(_Button);

var _Switcher = __webpack_require__(15);

var _Loading = __webpack_require__(10);

var _Loading2 = _interopRequireDefault(_Loading);

var _ActionSheet = __webpack_require__(4);

var _ActionSheet2 = _interopRequireDefault(_ActionSheet);

var _Toast = __webpack_require__(17);

var _Toast2 = _interopRequireDefault(_Toast);

var _Dialog = __webpack_require__(8);

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// common style
var components = {
	TabBar: _TabBar.TabBar,
	TabBarItem: _TabBar.TabBarItem,
	Cell: _Cell.Cell,
	CellGroup: _Cell.CellGroup,
	Radio: _Radio.Radio,
	RadioOption: _Radio.RadioOption,
	Checkbox: _Checkbox.Checkbox,
	CheckboxOption: _Checkbox.CheckboxOption,
	Field: _Field.Field,
	Datepicker: _Datepicker.Datepicker,
	Selector: _Selector.Selector,
	Modal: _Modal.Modal,
	Popup: _Popup.Popup,
	Loadmore: _Loadmore.Loadmore,
	Spinner: _Spinner.Spinner,
	Button: _Button2.default,
	Switcher: _Switcher.Switcher
};

// register globally all components


// components
function install(Vue, options) {
	for (var name in components) {
		var component = components[name].component || components[name];
		Vue.component(name, component);
	}
	Vue.prototype.$actionSheet = _ActionSheet2.default;
	Vue.prototype.$loading = _Loading2.default;
	Vue.prototype.$toast = _Toast2.default;
	Vue.prototype.$dialog = _Dialog2.default;
}

// Components can export a function named config to 
// customize some options for user
function config(name) {
	var args = [].slice.call(arguments, 1);
	if (typeof components[name].config === 'function') {
		components[name].config.apply(null, args);
	} else {
		console.warn(name + '.config is not a function');
	}
}

module.exports = { install: install, config: config };

/***/ }
/******/ ]);
});
//# sourceMappingURL=smart-ui.js.map