'use strict';Object.defineProperty(exports,'__esModule',{value:true});var fontawesomeSvgCore=require('@fortawesome/fontawesome-svg-core'),freeSolidSvgIcons=require('@fortawesome/free-solid-svg-icons'),vueFontawesome=require('@fortawesome/vue-fontawesome');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}//
fontawesomeSvgCore.library.add(freeSolidSvgIcons.faCircle, freeSolidSvgIcons.faArrowCircleLeft, freeSolidSvgIcons.faArrowCircleRight, freeSolidSvgIcons.faArrowAltCircleLeft, freeSolidSvgIcons.faArrowAltCircleRight, freeSolidSvgIcons.faArrowLeft, freeSolidSvgIcons.faArrowRight, freeSolidSvgIcons.faChevronLeft, freeSolidSvgIcons.faChevronRight, freeSolidSvgIcons.faChevronCircleLeft, freeSolidSvgIcons.faChevronCircleRight, freeSolidSvgIcons.faCaretLeft, freeSolidSvgIcons.faCaretRight, freeSolidSvgIcons.faCaretSquareLeft, freeSolidSvgIcons.faCaretSquareRight, freeSolidSvgIcons.faAngleRight, freeSolidSvgIcons.faAngleLeft);
var script = {
  name: "Carousel",
  props: {
    icon: {
      type: String,
      default: "arrow"
    },
    color: {
      type: String,
      default: "black"
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 3500
    },
    arrows: {
      type: Boolean,
      default: true
    },
    bullets: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      currentSlide: 0,
      slides: 0,
      controlsStyle: {
        top: '50%',
        transform: 'translateY(-50%)'
      },
      direction: null,
      interval: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.slides = this.$children, this.slides.forEach(function (slide, index) {
      slide.index = index;
    });
    window.addEventListener('keyup', function (event) {
      event.keyCode === 37 ? _this.prevSlide() : event.keyCode === 39 ? _this.nextSlide() : null;
    });

    if (this.autoplay) {
      this.interval = setInterval(function () {
        _this.nextSlide();
      }, this.duration);
    }
  },
  computed: {
    leftIcon: function leftIcon() {
      return this.icon + '-left';
    },
    rightIcon: function rightIcon() {
      return this.icon + '-right';
    }
  },
  methods: {
    nextSlide: function nextSlide() {
      this.direction = 'right';
      this.currentSlide == this.slides.length - 1 ? this.currentSlide = 0 : this.currentSlide++;
    },
    prevSlide: function prevSlide() {
      this.direction = 'left';
      this.currentSlide === 0 ? this.currentSlide = this.slides.length - 1 : this.currentSlide--;
    },
    showSlide: function showSlide(n) {
      this.currentSlide > n - 1 ? this.direction = 'left' : this.direction = 'right';
      this.currentSlide = n - 1;
    },
    stopSlide: function stopSlide() {
      if (this.autoplay) {
        this.interval = clearInterval(this.interval);
      }
    },
    startSlide: function startSlide() {
      var _this2 = this;

      if (this.autoplay) {
        this.interval = setInterval(function () {
          _this2.nextSlide();
        }, this.duration);
      }
    }
  },
  components: {
    FontAwesomeIcon: vueFontawesome.FontAwesomeIcon
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "carousel",
    on: {
      "mouseenter": _vm.stopSlide,
      "mouseleave": _vm.startSlide
    }
  }, [_vm._t("default"), _vm._ssrNode(" "), _vm.arrows ? _vm._ssrNode("<div class=\"navigation\"" + _vm._ssrStyle(null, _vm.controlsStyle, null) + ">", "</div>", [_vm._ssrNode("<button" + _vm._ssrClass(null, _vm.color) + ">", "</button>", [_c('font-awesome-icon', {
    attrs: {
      "icon": _vm.leftIcon,
      "size": "2x"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<button" + _vm._ssrClass(null, _vm.color) + ">", "</button>", [_c('font-awesome-icon', {
    attrs: {
      "icon": _vm.rightIcon,
      "size": "2x"
    }
  })], 1)], 2) : _vm._e(), _vm._ssrNode(" "), _vm.bullets ? _vm._ssrNode("<div class=\"navigation-bullets\" style=\"bottom:10%\">", "</div>", _vm._l(_vm.slides.length, function (n) {
    return _vm._ssrNode("<button" + _vm._ssrClass("bullet", _vm.color) + ">", "</button>", [_c('font-awesome-icon', {
      class: {
        active: _vm.currentSlide == n - 1
      },
      attrs: {
        "icon": "circle"
      }
    })], 1);
  }), 0) : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-71ad6b03_0", {
    source: "*[data-v-71ad6b03]{box-sizing:border-box}.active[data-v-71ad6b03]{color:#4a5568}.carousel[data-v-71ad6b03]{width:100%;position:relative;overflow-x:hidden}.navigation[data-v-71ad6b03],.navigation-bullets[data-v-71ad6b03]{display:flex;justify-content:space-between;position:absolute;width:100%;padding:0 15px}.navigation-bullets[data-v-71ad6b03]{justify-content:center}.black[data-v-71ad6b03]{color:#000}.white[data-v-71ad6b03]{color:#fff}.red[data-v-71ad6b03]{color:#f56565}.orange[data-v-71ad6b03]{color:#ed8936}.yellow[data-v-71ad6b03]{color:#ecc94b}.green[data-v-71ad6b03]{color:#48bb78}.teal[data-v-71ad6b03]{color:#38b2ac}.indigo[data-v-71ad6b03]{color:#667eea}.purple[data-v-71ad6b03]{color:#9f7aea}.pink[data-v-71ad6b03]{color:#ed64a6}.blue[data-v-71ad6b03]{color:#4299e1}button[data-v-71ad6b03]{background:0 0;border:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-71ad6b03";
/* module identifier */

var __vue_module_identifier__ = "data-v-71ad6b03";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
var script$1 = {
  name: "Slide",
  data: function data() {
    return {
      index: 0
    };
  },
  computed: {
    visible: function visible() {
      return this.index == this.$parent.currentSlide;
    },
    transition: function transition() {
      return 'slide-' + this.$parent.direction;
    }
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.visible,
      expression: "visible"
    }],
    staticClass: "slide"
  }, [_vm._t("default")], 2)]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-974cf79a_0", {
    source: ".slide[data-v-974cf79a]{width:100%;position:relative}.slide-left-enter-active[data-v-974cf79a]{animation:slideLeftEnter-data-v-974cf79a 1s ease-in-out}.slide-left-leave-active[data-v-974cf79a]{position:absolute;top:0;bottom:0;left:0;right:0;animation:slideLeftLeave-data-v-974cf79a 1s ease-in-out}.slide-right-enter-active[data-v-974cf79a]{animation:slideRightEnter-data-v-974cf79a 1s ease-in-out}.slide-right-leave-active[data-v-974cf79a]{position:absolute;top:0;bottom:0;left:0;right:0;animation:slideRightLeave-data-v-974cf79a 1s ease-in-out}@keyframes slideLeftEnter-data-v-974cf79a{from{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes slideLeftLeave-data-v-974cf79a{from{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes slideRightEnter-data-v-974cf79a{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes slideRightLeave-data-v-974cf79a{from{transform:translateX(0)}to{transform:translateX(-100%)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-974cf79a";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-974cf79a";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,Carousel: __vue_component__,Slide: __vue_component__$1});var install = function installVueCarousel(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // Default export is library as a whole, registered via Vue.use()
exports.Carousel=__vue_component__;exports.Slide=__vue_component__$1;exports.default=plugin;