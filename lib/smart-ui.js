(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["SmartUI"] = factory(require("vue"));
	else
		root["SmartUI"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Cell = __webpack_require__(61);

Object.defineProperty(exports, 'Cell', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Cell).default;
  }
});

var _CellGroup = __webpack_require__(62);

Object.defineProperty(exports, 'CellGroup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CellGroup).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(69);

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Modal).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Spinner = __webpack_require__(73);

Object.defineProperty(exports, 'Spinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Spinner).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _Modal = __webpack_require__(3);

var _index = __webpack_require__(95);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this color means can't be click
var disableColor = '#999999';
// this color means should be careful
var destructiveColor = '#FF3B30';

// instantiate directly
// only one instance of ActionSheet in an Application
var actionsheet = new _vue2.default((0, _index2.default)({
  name: 'ActionSheet',

  data: function data() {
    return {
      visible: false,
      title: '',
      options: [
        // {
        //    text: String,
        //    disable: Boolean,
        //    destructive: Boolean,
        //    onSelect: Function
        // }
      ],
      // doesn't show the cancel button when it is true
      hideCancel: false,
      // default fontcolor for options
      tintColor: '#2b8ff7',
      // css z-index
      zIndex: 5
    };
  },


  components: {
    Modal: _Modal.Modal
  },

  created: function created() {
    this.init();
  },


  methods: {
    // set default value for data
    init: function init() {
      this.title = '';
      this.options = [];
      this.hideCancel = false;
    },


    // open the ActionSheet
    // @title: String,
    // @options: Array
    // @hideCancel: Boolean
    show: function show(title, options) {
      var hideCancel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this.title = title;
      this.hideCancel = hideCancel;
      this.options = options.map(function (opt) {
        // opt is an Object like this:
        // { text: String, disable: Boolean, destructive: Boolean, onSelect: Function }
        if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object') {
          return opt;
        }
        // opt is string
        else {
            return { text: opt, disable: false, destructive: false };
          }
      });
      this.visible = true;
    },


    // hide the ActionSheet
    hide: function hide() {
      this.visible = false;
      // should init again after the hide, since the ActionSheet is shared
      this.init();
    },


    // call option.onSelect and hide when click the option
    handleClick: function handleClick(i) {
      var conf = this.options[i];
      if (!conf.disable && conf.onSelect) {
        conf.onSelect();
        this.hide();
      }
    },


    // what color is the option
    getFontColor: function getFontColor(opt) {
      // disabled
      if (opt.disable) {
        return disableColor;
      }
      // emphasize
      if (opt.destructive) {
        return destructiveColor;
      }
      // default
      return this.tintColor;
    }
  }
}))

// create a mount point for ActionSheet and mount it
;(function () {
  var id = 'smart-ui-actionsheet-mount-point';
  var mountPoint = document.createElement('div');
  mountPoint.id = id;
  document.body.appendChild(mountPoint);
  actionsheet.$mount('#' + id);
})();

exports.default = {
  // SmartUI.config('ActionSheet', {
  //    zIndex: 100,
  //    tintColor: '#38f'
  // })
  config: function config(conf) {
    ['tintColor', 'zIndex'].forEach(function (name) {
      if (typeof conf[name] !== 'undefined') {
        actionsheet[name] = conf[name];
      }
    });
    return this;
  },
  show: function show() {
    actionsheet.show.apply(actionsheet, arguments);
  },
  hide: function hide() {
    actionsheet.hide.apply(actionsheet, arguments);
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(96);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _index2.default)({
  props: {
    // 宽
    width: {
      type: String,
      default: ''
    },
    // 高
    height: {
      type: String,
      default: '40px'
    },
    // 圆角
    radius: {
      type: String,
      default: ''
    },
    // 色彩
    tintColor: {
      type: String,
      default: '#2b8ff7'
    },
    // 类型
    type: {
      default: 'normal',
      validator: function validator(type) {
        var types = ['normal', 'simple', 'cutout'];
        return types.indexOf(type) > -1;
      }
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // loading
    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes: function classes() {
      return {
        disabled: this.disabled || this.loading
      };
    },
    overlayStyles: function overlayStyles() {
      var type = this.type,
          tintColor = this.tintColor;

      var styles = {};
      if (type === 'normal') {
        styles['background-color'] = tintColor;
      } else if (type === 'simple') {
        styles['background-color'] = '#fff';
      } else if (type === 'cutout') {
        styles['background-color'] = '#fff';
      }
      return styles;
    },
    style: function style() {
      var type = this.type,
          tintColor = this.tintColor;

      var styles = {
        width: this.width,
        height: this.height,
        'border-radius': this.radius,
        'font-size': this.height
      };

      if (type === 'normal') {
        styles['color'] = '#fff';
        styles['background-color'] = tintColor;
      } else if (type === 'simple') {
        styles['color'] = tintColor;
        styles['background-color'] = '#fff';
      } else if (type === 'cutout') {
        styles['border'] = '1px solid ' + tintColor;
        styles['color'] = tintColor;
        styles['background-color'] = '#fff';
      }

      return styles;
    },
    spinnerSize: function spinnerSize() {
      var size = parseFloat(this.height) * 0.45;
      return size < 12 ? 12 : size;
    }
  },

  methods: {
    handleClick: function handleClick() {
      if (!this.loading && !this.disabled) {
        this.$emit('click');
      }
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Checkbox = __webpack_require__(63);

Object.defineProperty(exports, 'Checkbox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Checkbox).default;
  }
});

var _CheckboxOption = __webpack_require__(64);

Object.defineProperty(exports, 'CheckboxOption', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CheckboxOption).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Datepicker = __webpack_require__(65);

Object.defineProperty(exports, 'Datepicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Datepicker).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _Dialog = __webpack_require__(66);

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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(97);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _index2.default)({
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
    value: {},
    error: {
      type: String
    }
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

  computed: {
    hasLabelSlot: function hasLabelSlot() {
      return !!this.$slots.label;
    }
  },

  methods: {
    handleInput: function handleInput(e) {
      this.val = e.target.value;
    },
    handleFocus: function handleFocus(e) {
      this.$emit('update:error', '');
      this.$emit('focus', e);
    },
    handleBlur: function handleBlur(e) {
      this.$emit('blur', e);
    },
    clear: function clear() {
      this.val = '';
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _Loading = __webpack_require__(67);

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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loadmore = __webpack_require__(68);

Object.defineProperty(exports, 'Loadmore', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Loadmore).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Popup = __webpack_require__(70);

Object.defineProperty(exports, 'Popup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Popup).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Radio = __webpack_require__(71);

Object.defineProperty(exports, 'Radio', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Radio).default;
  }
});

var _RadioOption = __webpack_require__(72);

Object.defineProperty(exports, 'RadioOption', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RadioOption).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectorOption = exports.Selector = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * 功能：
                                                                                                                                                                                                                                                                               *   1. 标记已选择的(done)
                                                                                                                                                                                                                                                                               *   2. 当选项比较多时，打开时自动滚动到已选择的
                                                                                                                                                                                                                                                                               *   3. 支持多选(done)
                                                                                                                                                                                                                                                                               *   4. 选项可禁用(done)
                                                                                                                                                                                                                                                                               *   8. 自定义选项内容(done)
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *   5. 搜索
                                                                                                                                                                                                                                                                               *   6. 多种打开模式（1，传统底部，2. 侧边栏）
                                                                                                                                                                                                                                                                               *   7. 分组
                                                                                                                                                                                                                                                                               */

var _Option = __webpack_require__(37);

var _Option2 = _interopRequireDefault(_Option);

var _index = __webpack_require__(99);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Selector = (0, _index2.default)({
  props: {
    // 标题
    title: {
      type: String,
      required: true
    },
    // 提示
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number, Array]
    },
    // 是否多选，默认是单选
    multiple: {
      default: false
    },
    // 是否选择后自动 hide
    // 默认是自动 hide，当是多选时，不会自动 hide
    autoHide: {
      type: Boolean,
      default: true
    },
    //
    options: {
      validator: function validator(opts) {
        var isValid = true;
        if (Array.isArray(opts)) {
          opts.some(function (opt) {
            if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) !== 'object' || !opt.hasOwnProperty('text') || !opt.hasOwnProperty('value')) {
              isValid = false;
              return true;
            }
          });
        } else {
          isValid = false;
        }
        return isValid;
      }
    }
  },

  data: function data() {
    return {
      visible: false,
      content: '',
      hasOptions: false
    };
  },


  watch: {
    value: function value() {
      this.checkStatus();
    }
  },

  created: function created() {
    var _this = this;

    // 是否使用了 options 属性
    this.hasOptions = typeof this.options !== 'undefined';
    if (this.hasOptions) {
      this.$watch('options', function () {
        return _this.$nextTick(_this.checkStatus);
      });
    }
  },
  mounted: function mounted() {
    this.checkStatus();
  },


  computed: {
    isMultiple: function isMultiple() {
      return this.multiple !== false;
    }
  },

  methods: {
    open: function open() {
      this.visible = true;
    },
    hide: function hide() {
      this.visible = false;
    },
    isSelected: function isSelected(value) {
      return this.isMultiple ? this.value.indexOf(value) > -1 : isEqual(value, this.value);
    },
    eachOptions: function eachOptions(callback) {
      var _this2 = this;

      [].forEach.call(this.$refs.options.childNodes, function (child) {
        if (child.nodeType === 1) {
          callback(_this2.takeProps(child), child);
        }
      });
    },
    checkStatus: function checkStatus() {
      var conts = [];
      this.eachOptions(function (opt, child) {
        if (opt.selected) conts.push(opt.text);
        toogleStatus(child, opt.selected);
      });
      this.content = conts.join(',');
    },


    // option props
    // {
    //   text: '',
    //   value: '',
    //   selected: false,
    //   disabled: false
    // }
    takeProps: function takeProps(node) {
      var props = {
        text: node.getAttribute('data-text'),
        value: node.getAttribute('data-value'),
        disabled: !!node.getAttribute('data-disabled')
      };
      props.selected = this.isSelected(props.value);
      return props;
    },
    onSelect: function onSelect(e) {
      var _this3 = this;

      var node = e.target;

      while (node) {
        if (node.classList.contains('Selector--bd')) {
          return;
        }
        if (!node.classList.contains('Selector--option')) {
          node = node.parentNode;
        } else {
          break;
        }
      }

      var props = this.takeProps(node);

      // 点击被禁止的 option 时不做任何操作
      if (props.disabled) return;

      var value = '';

      // 点击已被选中 option，则取消选中状态
      if (props.selected) {
        value = this.isMultiple ? this.value.filter(function (v) {
          return !isEqual(v, props.value);
        }) : '';
      } else {
        value = this.isMultiple ? this.value.slice().concat(props.value) : props.value;
        if (!this.isMultiple && this.autoHide) {
          setTimeout(function () {
            return _this3.hide();
          }, 200);
        }
      }

      this.$emit('input', value);
    }
  }
});

function isEqual(a, b) {
  return a + '' === b + '';
}

function toogleStatus(node, selected) {
  if (selected) {
    node.classList.add('active');
  } else {
    node.classList.remove('active');
  }
}

exports.Selector = Selector;
exports.SelectorOption = _Option2.default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Switcher = __webpack_require__(74);

Object.defineProperty(exports, 'Switcher', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Switcher).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TabBar = __webpack_require__(75);

Object.defineProperty(exports, 'TabBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TabBar).default;
  }
});

var _TabBarItem = __webpack_require__(76);

Object.defineProperty(exports, 'TabBarItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TabBarItem).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _Toast = __webpack_require__(77);

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

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

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

exports.default = {
  name: 'Cell',

  props: {
    title: undefined,
    content: undefined,
    // whether display arrow icon
    arrow: undefined,
    // navigate to another URL by Router
    to: {
      type: [String, Object]
    },
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

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

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

exports.default = {
  name: 'CellGroup',

  props: {
    hasBorder: {
      type: Boolean,
      default: true
    }
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Cell = __webpack_require__(2);

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

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Cell = __webpack_require__(2);

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

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(3);

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

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Spinner = __webpack_require__(4);

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

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

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

function getDocInfo() {
  return {
    scrollTop: document.body.scrollTop,
    pageHeight: document.body.offsetHeight,
    windowHeight: document.documentElement.clientHeight
  };
}

exports.default = {

  name: 'Lodamore',

  props: {
    visible: {
      type: Boolean,
      default: true
    },
    desc: {
      type: String,
      default: '正在加载...'
    }
  },

  data: function data() {
    return {
      show: false
    };
  },


  watch: {
    // visible 变化时去检测组件是否可见
    visible: function visible(newVal) {
      this.detectVisible();
    }
  },

  methods: {
    detectVisible: function detectVisible() {
      var docInfo = getDocInfo();
      if (docInfo.pageHeight >= docInfo.windowHeight && this.visible) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    onscroll: function onscroll() {
      this.detectVisible();
      var docInfo = getDocInfo();
      if (docInfo.pageHeight - docInfo.scrollTop === docInfo.windowHeight && this.visible) {
        this.$emit('reachBottom');
      }
    },
    startListen: function startListen() {
      window.addEventListener('scroll', this.onscroll);
    },
    stopListen: function stopListen() {
      window.removeEventListener('scroll', this.onscroll);
    }
  },

  mounted: function mounted() {
    this.detectVisible();
    this.startListen();
  },


  // 组件销毁时解除事件监听
  destroyed: function destroyed() {
    this.stopListen();
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

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
      if (newVal !== this.value) {
        this.$emit('input', newVal);
      }
    }
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

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
      return this.onVal === this.value;
    }
  },

  methods: {
    handleClick: function handleClick() {
      this.$emit('input', this.on ? this.offVal : this.onVal);
    }
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(98);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _index2.default)({
  name: 'SelectorOption',

  props: {
    value: {},
    text: {
      type: String,
      default: ''
    },
    disabled: {
      default: false
    }
  },

  computed: {
    isCustom: function isCustom() {
      return !!this.$slots.default;
    },
    isDisabled: function isDisabled() {
      return this.disabled !== false;
    }
  }
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

var _TabBar = __webpack_require__(17);

var _Cell = __webpack_require__(2);

var _Radio = __webpack_require__(14);

var _Checkbox = __webpack_require__(7);

var _Field = __webpack_require__(10);

var _Field2 = _interopRequireDefault(_Field);

var _Datepicker = __webpack_require__(8);

var _Selector = __webpack_require__(15);

var _Modal = __webpack_require__(3);

var _Popup = __webpack_require__(13);

var _Loadmore = __webpack_require__(12);

var _Spinner = __webpack_require__(4);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _Switcher = __webpack_require__(16);

var _Loading = __webpack_require__(11);

var _Loading2 = _interopRequireDefault(_Loading);

var _ActionSheet = __webpack_require__(5);

var _ActionSheet2 = _interopRequireDefault(_ActionSheet);

var _Toast = __webpack_require__(18);

var _Toast2 = _interopRequireDefault(_Toast);

var _Dialog = __webpack_require__(9);

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
  Field: _Field2.default,
  Datepicker: _Datepicker.Datepicker,
  Selector: _Selector.Selector,
  SelectorOption: _Selector.SelectorOption,
  Modal: _Modal.Modal,
  Popup: _Popup.Popup,
  Loadmore: _Loadmore.Loadmore,
  Spinner: _Spinner.Spinner,
  Button: _Button2.default,
  Switcher: _Switcher.Switcher
};

// register globally all components


// components
function install(Vue) {
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
  var modules = {
    ActionSheet: _ActionSheet2.default,
    Loading: _Loading2.default,
    Toast: _Toast2.default,
    Dialog: _Dialog2.default
  };
  var module = components[name] || modules[name];
  if (typeof module.config === 'function') {
    module.config.apply(null, args);
  } else {
    console.warn(name + '.config is not a function');
  }
}

/* eslint-disable */
module.exports = { install: install, config: config };

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(50)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(84),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(49)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(83),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(45)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(79),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(60)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(94),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(44)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(78),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(58)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(92),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(46)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(80),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(55)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(89),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(48)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(82),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(54)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(88),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(47)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(81),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(52)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(86),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(57)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(91),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(59)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(93),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(51)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(85),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(53)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(87),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(56)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(90),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 78 */
/***/ (function(module, exports) {

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

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('CellGroup', {
    ref: "cells"
  }, [_c('h3', {
    staticClass: "Checkbox--title smart-border-bottom"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', [_vm._t("default")], 2)])], 1)
},staticRenderFns: []}

/***/ }),
/* 80 */
/***/ (function(module, exports) {

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

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "RadioBox"
  }, [(_vm.title) ? _c('div', {
    staticClass: "Radio--title smart-border-bottom"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 82 */
/***/ (function(module, exports) {

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

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "CellGroup",
    class: {
      'smart-border-bottom': _vm.hasBorder, 'smart-border-top': _vm.hasBorder
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 84 */
/***/ (function(module, exports) {

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
    staticClass: "Cell smart-border-bottom"
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

/***/ }),
/* 85 */
/***/ (function(module, exports) {

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

/***/ }),
/* 86 */
/***/ (function(module, exports) {

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

/***/ }),
/* 87 */
/***/ (function(module, exports) {

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

/***/ }),
/* 88 */
/***/ (function(module, exports) {

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

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "Loadmore"
  }, [_vm._t("default", [_c('Spinner', {
    attrs: {
      "size": "16"
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.desc))])])], 2)
},staticRenderFns: []}

/***/ }),
/* 90 */
/***/ (function(module, exports) {

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
  }, [_vm._v("\n      " + _vm._s(_vm.content) + "\n    ")])])])
},staticRenderFns: []}

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Spinner",
    style: (_vm.style)
  })
},staticRenderFns: []}

/***/ }),
/* 92 */
/***/ (function(module, exports) {

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
    }, [_vm._v("\n            " + _vm._s(btn.title) + "\n          ")])
  }))])])], 1)])
},staticRenderFns: []}

/***/ }),
/* 93 */
/***/ (function(module, exports) {

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

/***/ }),
/* 94 */
/***/ (function(module, exports) {

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

/***/ }),
/* 95 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{attrs:{"anim":"fade","bgcolor":"rgba(0,0,0,.4)","dismissOnClick":true,"zIndex":_vm.zIndex},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('transition',{attrs:{"name":"smart-anim--bottomUp"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"ActionSheet"},[(_vm.title)?_c('div',{staticClass:"ActionSheet--title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"ActionSheet--options"},_vm._l((_vm.options),function(opt,i){return _c('div',{staticClass:"ActionSheet--option smart-border-top",style:({color: _vm.getFontColor(opt)}),on:{"click":function($event){_vm.handleClick(i)}}},[_vm._v("\n          "+_vm._s(opt.text)+"\n        ")])})),_vm._v(" "),(_vm.hideCancel == false)?_c('div',{staticClass:"ActionSheet--option smart-border-top ActionSheet--cancel",style:({color: _vm.tintColor}),on:{"click":_vm.hide}},[_vm._v("\n        取消\n      ")]):_vm._e()])])],1)}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 96 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Button",class:_vm.classes,style:(_vm.style),on:{"click":_vm.handleClick}},[(_vm.loading && !_vm.disabled)?_c('Spinner',{staticClass:"Button--spinner",attrs:{"size":_vm.spinnerSize,"width":"1","bgcolor":"rgba(255,255,255,.5)","forecolor":"#fff"}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"Button--name"},[_vm._t("default")],2),_vm._v(" "),(_vm.disabled || _vm.loading)?_c('div',{staticClass:"Button--overlay",style:(_vm.overlayStyles)}):_vm._e()],1)}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 97 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Cell',[(_vm.label)?_c('div',{staticClass:"Field--label",slot:"header"},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._v(" "),(!_vm.label && _vm.hasLabelSlot)?_c('div',{staticClass:"Field--label",slot:"header"},[_vm._t("label")],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"Field--bd",class:{'Field--warn': !!_vm.error},slot:"body"},[_c('div',{staticClass:"Field--input"},[_c('input',{style:({textAlign: _vm.align}),attrs:{"type":_vm.type,"placeholder":_vm.placeholder},domProps:{"value":_vm.val},on:{"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur}})]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.val),expression:"val"}],staticClass:"Field--delBox",on:{"click":_vm.clear}},[_c('div',{staticClass:"Field--del"})])])])}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 98 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Selector--option",class:{disabled: _vm.isDisabled},attrs:{"data-text":_vm.text,"data-value":_vm.value,"data-disabled":_vm.isDisabled}},[_c('div',{staticClass:"Selector--option--bd"},[(_vm.isCustom)?_vm._t("default"):_c('span',[_vm._v(_vm._s(_vm.text))])],2),_vm._v(" "),_c('div',{staticClass:"Selector--icon"})])}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 99 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Cell',{attrs:{"title":_vm.title,"arrow":""},on:{"click":_vm.open}},[_c('div',{staticClass:"Selector--values",class:{'Selector--values-shallow': !_vm.content},slot:"body"},[_vm._v(_vm._s(_vm.content || _vm.placeholder))])]),_vm._v(" "),_c('Popup',{model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('div',{staticClass:"Selector smart-border-top"},[_c('div',{staticClass:"Selector--hd"},[_c('div',{staticClass:"Selector--notice"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('div',{staticClass:"Selector--confirm",on:{"click":_vm.hide}},[_vm._v("确认")])]),_vm._v(" "),_c('div',{ref:"options",staticClass:"Selector--bd",on:{"click":function($event){_vm.onSelect($event)}}},[(!_vm.hasOptions)?_vm._t("default"):_vm._l((_vm.options),function(opt){return _c('SelectorOption',{attrs:{"value":opt.value,"text":opt.text,"disabled":opt.disabled}})})],2)])])],1)}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=smart-ui.js.map