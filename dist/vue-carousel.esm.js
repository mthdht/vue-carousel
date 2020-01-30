import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faArrowCircleLeft, faArrowCircleRight, faArrowAltCircleLeft, faArrowAltCircleRight, faArrowLeft, faArrowRight, faChevronLeft, faChevronRight, faChevronCircleLeft, faChevronCircleRight, faCaretLeft, faCaretRight, faCaretSquareLeft, faCaretSquareRight, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//
library.add(faCircle, faArrowCircleLeft, faArrowCircleRight, faArrowAltCircleLeft, faArrowAltCircleRight, faArrowLeft, faArrowRight, faChevronLeft, faChevronRight, faChevronCircleLeft, faChevronCircleRight, faCaretLeft, faCaretRight, faCaretSquareLeft, faCaretSquareRight, faAngleRight, faAngleLeft);
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
  data: function () {
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
  mounted: function () {
    this.slides = this.$children, this.slides.forEach((slide, index) => {
      slide.index = index;
    });
    window.addEventListener('keyup', event => {
      event.keyCode === 37 ? this.prevSlide() : event.keyCode === 39 ? this.nextSlide() : null;
    });

    if (this.autoplay) {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, this.duration);
    }
  },
  computed: {
    leftIcon() {
      return this.icon + '-left';
    },

    rightIcon() {
      return this.icon + '-right';
    }

  },
  methods: {
    nextSlide() {
      this.direction = 'right';
      this.currentSlide == this.slides.length - 1 ? this.currentSlide = 0 : this.currentSlide++;
    },

    prevSlide() {
      this.direction = 'left';
      this.currentSlide === 0 ? this.currentSlide = this.slides.length - 1 : this.currentSlide--;
    },

    showSlide(n) {
      this.currentSlide > n - 1 ? this.direction = 'left' : this.direction = 'right';
      this.currentSlide = n - 1;
    },

    stopSlide() {
      if (this.autoplay) {
        this.interval = clearInterval(this.interval);
      }
    },

    startSlide() {
      if (this.autoplay) {
        this.interval = setInterval(() => {
          this.nextSlide();
        }, this.duration);
      }
    }

  },
  components: {
    FontAwesomeIcon
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "carousel",
    on: {
      "mouseenter": _vm.stopSlide,
      "mouseleave": _vm.startSlide
    }
  }, [_vm._t("default"), _vm._v(" "), _vm.arrows ? _c('div', {
    staticClass: "navigation",
    style: _vm.controlsStyle
  }, [_c('button', {
    class: _vm.color,
    on: {
      "click": _vm.prevSlide
    }
  }, [_c('font-awesome-icon', {
    attrs: {
      "icon": _vm.leftIcon,
      "size": "2x"
    }
  })], 1), _vm._v(" "), _c('button', {
    class: _vm.color,
    on: {
      "click": _vm.nextSlide
    }
  }, [_c('font-awesome-icon', {
    attrs: {
      "icon": _vm.rightIcon,
      "size": "2x"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.bullets ? _c('div', {
    staticClass: "navigation-bullets",
    staticStyle: {
      "bottom": "10%"
    }
  }, _vm._l(_vm.slides.length, function (n) {
    return _c('button', {
      key: n,
      staticClass: "bullet",
      class: _vm.color,
      on: {
        "click": function ($event) {
          return _vm.showSlide(n);
        }
      }
    }, [_c('font-awesome-icon', {
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

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-71ad6b03_0", {
    source: "*[data-v-71ad6b03]{box-sizing:border-box}.active[data-v-71ad6b03]{color:#4a5568}.carousel[data-v-71ad6b03]{width:100%;position:relative;overflow-x:hidden}.navigation[data-v-71ad6b03],.navigation-bullets[data-v-71ad6b03]{display:flex;justify-content:space-between;position:absolute;width:100%;padding:0 15px}.navigation-bullets[data-v-71ad6b03]{justify-content:center}.black[data-v-71ad6b03]{color:#000}.white[data-v-71ad6b03]{color:#fff}.red[data-v-71ad6b03]{color:#f56565}.orange[data-v-71ad6b03]{color:#ed8936}.yellow[data-v-71ad6b03]{color:#ecc94b}.green[data-v-71ad6b03]{color:#48bb78}.teal[data-v-71ad6b03]{color:#38b2ac}.indigo[data-v-71ad6b03]{color:#667eea}.purple[data-v-71ad6b03]{color:#9f7aea}.pink[data-v-71ad6b03]{color:#ed64a6}.blue[data-v-71ad6b03]{color:#4299e1}button[data-v-71ad6b03]{background:0 0;border:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-71ad6b03";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

//
//
//
//
//
//
//
//
var script$1 = {
  name: "Slide",
  data: function () {
    return {
      index: 0
    };
  },
  computed: {
    visible() {
      return this.index == this.$parent.currentSlide;
    },

    transition() {
      return 'slide-' + this.$parent.direction;
    }

  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
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

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-974cf79a_0", {
    source: ".slide[data-v-974cf79a]{width:100%;position:relative}.slide-left-enter-active[data-v-974cf79a]{animation:slideLeftEnter-data-v-974cf79a 1s ease-in-out}.slide-left-leave-active[data-v-974cf79a]{position:absolute;top:0;bottom:0;left:0;right:0;animation:slideLeftLeave-data-v-974cf79a 1s ease-in-out}.slide-right-enter-active[data-v-974cf79a]{animation:slideRightEnter-data-v-974cf79a 1s ease-in-out}.slide-right-leave-active[data-v-974cf79a]{position:absolute;top:0;bottom:0;left:0;right:0;animation:slideRightLeave-data-v-974cf79a 1s ease-in-out}@keyframes slideLeftEnter-data-v-974cf79a{from{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes slideLeftLeave-data-v-974cf79a{from{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes slideRightEnter-data-v-974cf79a{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes slideRightLeave-data-v-974cf79a{from{transform:translateX(0)}to{transform:translateX(-100%)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-974cf79a";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Carousel: __vue_component__,
    Slide: __vue_component__$1
});

// Import vue components

const install = function installVueCarousel(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

let GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // Default export is library as a whole, registered via Vue.use()

export default plugin;
export { __vue_component__ as Carousel, __vue_component__$1 as Slide };
