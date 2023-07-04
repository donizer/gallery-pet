import {
  require_react_dom
} from "./chunk-PRK46SJB.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/react-progressive-graceful-image/node_modules/@researchgate/react-intersection-observer/lib/es/utils.js
function parseRootMargin(rootMargin) {
  var marginString = rootMargin ? rootMargin.trim() : "0px";
  var result = marginString.split(/\s+/).map(function(margin) {
    if (!marginRE.test(margin)) {
      throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
    }
    return margin;
  });
  var m0 = result.shift();
  var _a2 = result[0], m1 = _a2 === void 0 ? m0 : _a2, _b = result[1], m2 = _b === void 0 ? m0 : _b, _c = result[2], m3 = _c === void 0 ? m1 : _c;
  return m0 + " " + m1 + " " + m2 + " " + m3;
}
function shallowCompare(next, prev) {
  if (Array.isArray(next) && Array.isArray(prev)) {
    if (next.length === prev.length) {
      return next.some(function(_, index) {
        return shallowCompare(next[index], prev[index]);
      });
    }
  }
  return next !== prev;
}
function isChildrenWithRef(children) {
  return children && hasOwnProperty.call(children, "ref");
}
function thresholdCacheKey(threshold) {
  if (!threshold || typeof threshold === "number") {
    return threshold;
  }
  return threshold.join(",");
}
var _a, marginRE, hasOwnProperty, toString;
var init_utils = __esm({
  "node_modules/react-progressive-graceful-image/node_modules/@researchgate/react-intersection-observer/lib/es/utils.js"() {
    marginRE = /^-?\d*\.?\d+(px|%)$/;
    hasOwnProperty = (_a = Object.prototype, _a.hasOwnProperty);
    toString = _a.toString;
  }
});

// node_modules/react-progressive-graceful-image/node_modules/@researchgate/react-intersection-observer/lib/es/observer.js
function getPooled(options) {
  if (options === void 0) {
    options = {};
  }
  var root = options.root || null;
  var rootMargin = parseRootMargin(options.rootMargin);
  var threshold = Array.isArray(options.threshold) ? options.threshold : [options.threshold != null ? options.threshold : 0];
  var observers = observerElementsMap.keys();
  var observer;
  while (observer = observers.next().value) {
    var unmatched = root !== observer.root || rootMargin !== observer.rootMargin || shallowCompare(threshold, observer.thresholds);
    if (!unmatched) {
      return observer;
    }
  }
  return null;
}
function findObserverElement(observer, entry) {
  var elements = observerElementsMap.get(observer);
  if (elements) {
    var values = elements.values();
    var element = void 0;
    while (element = values.next().value) {
      if (element.target === entry.target) {
        return element;
      }
    }
  }
  return null;
}
function callback(entries, observer) {
  for (var i = 0; i < entries.length; i++) {
    var element = findObserverElement(observer, entries[i]);
    if (element) {
      element.handleChange(entries[i]);
    }
  }
}
function createObserver(options) {
  var pooled = getPooled(options);
  if (pooled) {
    return pooled;
  }
  var observer = new IntersectionObserver(callback, options);
  observerElementsMap.set(observer, /* @__PURE__ */ new Set());
  return observer;
}
function observeElement(element) {
  var _a2;
  if (element.observer && !observerElementsMap.has(element.observer)) {
    observerElementsMap.set(element.observer, /* @__PURE__ */ new Set());
  }
  (_a2 = observerElementsMap.get(element.observer)) === null || _a2 === void 0 ? void 0 : _a2.add(element);
  element.observer.observe(element.target);
}
function unobserveElement(element, target) {
  if (observerElementsMap.has(element.observer)) {
    var targets = observerElementsMap.get(element.observer);
    if (targets === null || targets === void 0 ? void 0 : targets.delete(element)) {
      if (targets.size > 0) {
        element.observer.unobserve(target);
      } else {
        element.observer.disconnect();
        observerElementsMap.delete(element.observer);
      }
    }
  }
}
var observerElementsMap;
var init_observer = __esm({
  "node_modules/react-progressive-graceful-image/node_modules/@researchgate/react-intersection-observer/lib/es/observer.js"() {
    init_utils();
    observerElementsMap = /* @__PURE__ */ new Map();
  }
});

// node_modules/react-progressive-graceful-image/node_modules/@researchgate/react-intersection-observer/lib/es/types.js
var init_types = __esm({
  "node_modules/react-progressive-graceful-image/node_modules/@researchgate/react-intersection-observer/lib/es/types.js"() {
  }
});

// node_modules/react-progressive-graceful-image/node_modules/@researchgate/react-intersection-observer/lib/es/IntersectionObserver.js
var import_react, import_react_dom, __extends, observerOptions, observableProps, getOptions, ReactIntersectionObserver, IntersectionObserver_default;
var init_IntersectionObserver = __esm({
  "node_modules/react-progressive-graceful-image/node_modules/@researchgate/react-intersection-observer/lib/es/IntersectionObserver.js"() {
    import_react = __toESM(require_react());
    import_react_dom = __toESM(require_react_dom());
    init_observer();
    init_utils();
    init_types();
    __extends = function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    observerOptions = ["root", "rootMargin", "threshold"];
    observableProps = ["root", "rootMargin", "threshold", "disabled"];
    getOptions = function(props) {
      return observerOptions.reduce(function(options, key) {
        var _a2;
        var isRootString = key === "root" && toString.call(props.root) === "[object String]";
        return Object.assign(options, (_a2 = {}, _a2[key] = isRootString ? document.querySelector(props[key]) : props[key], _a2));
      }, {});
    };
    ReactIntersectionObserver = /** @class */
    function(_super) {
      __extends(ReactIntersectionObserver2, _super);
      function ReactIntersectionObserver2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function(event) {
          _this.props.onChange(event, _this.externalUnobserve);
        };
        _this.handleNode = function(target) {
          var children = _this.props.children;
          if (isChildrenWithRef(children)) {
            var childenRef = children.ref;
            if (typeof childenRef === "function") {
              childenRef(target);
            } else if (childenRef && hasOwnProperty.call(childenRef, "current")) {
              childenRef.current = target;
            }
          }
          _this.targetNode = void 0;
          if (target) {
            var targetNode = (0, import_react_dom.findDOMNode)(target);
            if (targetNode && targetNode.nodeType === 1) {
              _this.targetNode = targetNode;
            }
          }
        };
        _this.observe = function() {
          if (_this.props.children == null || _this.props.disabled) {
            return false;
          }
          if (!_this.targetNode) {
            throw new Error("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree.");
          }
          _this.observer = createObserver(getOptions(_this.props));
          _this.target = _this.targetNode;
          observeElement(_this);
          return true;
        };
        _this.unobserve = function(target) {
          unobserveElement(_this, target);
        };
        _this.externalUnobserve = function() {
          if (_this.targetNode) {
            _this.unobserve(_this.targetNode);
          }
        };
        return _this;
      }
      ReactIntersectionObserver2.prototype.getSnapshotBeforeUpdate = function(prevProps) {
        var _this = this;
        this.prevTargetNode = this.targetNode;
        var relatedPropsChanged = observableProps.some(function(prop) {
          return shallowCompare(_this.props[prop], prevProps[prop]);
        });
        if (relatedPropsChanged) {
          if (this.prevTargetNode) {
            if (!prevProps.disabled) {
              this.unobserve(this.prevTargetNode);
            }
          }
        }
        return relatedPropsChanged;
      };
      ReactIntersectionObserver2.prototype.componentDidUpdate = function(_, __, relatedPropsChanged) {
        var targetNodeChanged = false;
        if (!relatedPropsChanged) {
          targetNodeChanged = this.prevTargetNode !== this.targetNode;
          if (targetNodeChanged && this.prevTargetNode != null) {
            this.unobserve(this.prevTargetNode);
          }
        }
        if (relatedPropsChanged || targetNodeChanged) {
          this.observe();
        }
      };
      ReactIntersectionObserver2.prototype.componentDidMount = function() {
        this.observe();
      };
      ReactIntersectionObserver2.prototype.componentWillUnmount = function() {
        if (this.targetNode) {
          this.unobserve(this.targetNode);
        }
      };
      ReactIntersectionObserver2.prototype.render = function() {
        var children = this.props.children;
        return children != null ? import_react.default.cloneElement(import_react.default.Children.only(children), {
          ref: this.handleNode
        }) : null;
      };
      ReactIntersectionObserver2.displayName = "IntersectionObserver";
      return ReactIntersectionObserver2;
    }(import_react.default.Component);
    IntersectionObserver_default = ReactIntersectionObserver;
  }
});

// node_modules/react-progressive-graceful-image/node_modules/@researchgate/react-intersection-observer/lib/es/hook.js
var import_react2, noop, useIntersectionObserver;
var init_hook = __esm({
  "node_modules/react-progressive-graceful-image/node_modules/@researchgate/react-intersection-observer/lib/es/hook.js"() {
    import_react2 = __toESM(require_react());
    init_observer();
    init_utils();
    noop = function() {
    };
    useIntersectionObserver = function(onChange, _a2) {
      var _b = _a2 === void 0 ? {} : _a2, root = _b.root, rootMargin = _b.rootMargin, threshold = _b.threshold, disabled = _b.disabled;
      var observingRef = (0, import_react2.useRef)(false);
      var instanceRef = (0, import_react2.useRef)({
        // unobserve function needs an instance and instance.handleChange needs an unobserve to be caught by closure.
        // So it's essentially a circular reference that's resolved by assigning handleChange later
        handleChange: function(event) {
          onChange(event, noop);
        }
      });
      var unobserve = (0, import_react2.useCallback)(function() {
        if (instanceRef.current.target && observingRef.current) {
          unobserveElement(instanceRef.current, instanceRef.current.target);
          observingRef.current = false;
        }
      }, []);
      instanceRef.current.handleChange = function handleChange(event) {
        onChange(event, unobserve);
      };
      var observe = function() {
        if (instanceRef.current.observer && instanceRef.current.target && !observingRef.current) {
          observeElement(instanceRef.current);
          observingRef.current = true;
        }
      };
      var memoizedThreshold = (0, import_react2.useMemo)(function() {
        return threshold;
      }, [
        thresholdCacheKey(threshold)
      ]);
      var observer = (0, import_react2.useMemo)(function() {
        if (disabled) {
          unobserve();
          instanceRef.current.observer = void 0;
          return void 0;
        }
        var rootOption = typeof root === "string" ? document.querySelector(root) : root;
        var obs = createObserver({
          root: rootOption,
          rootMargin,
          threshold: memoizedThreshold
        });
        instanceRef.current.observer = obs;
        unobserve();
        observe();
        return obs;
      }, [root, rootMargin, memoizedThreshold, disabled]);
      var setRef = (0, import_react2.useCallback)(function(node) {
        var isNewNode = node != null && instanceRef.current.target !== node;
        if (!observer) {
          unobserve();
        }
        if (isNewNode) {
          unobserve();
          instanceRef.current.target = node;
          observe();
        }
        if (!node) {
          unobserve();
          instanceRef.current.target = void 0;
        }
      }, [observer]);
      return [setRef, unobserve];
    };
  }
});

// node_modules/react-progressive-graceful-image/node_modules/@researchgate/react-intersection-observer/lib/es/index.js
var es_exports = {};
__export(es_exports, {
  default: () => IntersectionObserver_default,
  parseRootMargin: () => parseRootMargin,
  useIntersectionObserver: () => useIntersectionObserver
});
var init_es = __esm({
  "node_modules/react-progressive-graceful-image/node_modules/@researchgate/react-intersection-observer/lib/es/index.js"() {
    init_IntersectionObserver();
    init_utils();
    init_hook();
  }
});

// node_modules/react-progressive-graceful-image/dist.js
var require_dist = __commonJS({
  "node_modules/react-progressive-graceful-image/dist.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var React2 = _interopRequireWildcard(require_react());
    var _reactIntersectionObserver = _interopRequireDefault((init_es(), __toCommonJS(es_exports)));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var hasWindow = function hasWindow2() {
      return typeof window !== "undefined";
    };
    var ProgressiveImage = function(_React$Component) {
      _inherits(ProgressiveImage2, _React$Component);
      function ProgressiveImage2(props) {
        var _this;
        _classCallCheck(this, ProgressiveImage2);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ProgressiveImage2).call(this, props));
        _defineProperty(_assertThisInitialized(_this), "image", void 0);
        _defineProperty(_assertThisInitialized(_this), "handleOnlineStatus", function() {
          _this.setState({
            isOnline: window.navigator.onLine
          });
        });
        _defineProperty(_assertThisInitialized(_this), "loadImage", function(src, srcSetData) {
          if (_this.image) {
            _this.image.onload = null;
            _this.image.onerror = null;
          }
          var image = new Image();
          _this.image = image;
          image.onload = _this.onLoad;
          image.onerror = function(errorEvent) {
            _this.onError(errorEvent);
            return;
          };
          image.src = src;
          if (srcSetData) {
            image.srcset = srcSetData.srcSet;
            image.sizes = srcSetData.sizes;
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onLoad", function() {
          if (_this.props.delay) {
            _this.setImageWithDelay();
          } else {
            _this.setImage();
          }
        });
        _defineProperty(_assertThisInitialized(_this), "setImageWithDelay", function() {
          setTimeout(function() {
            _this.setImage();
          }, _this.props.delay);
        });
        _defineProperty(_assertThisInitialized(_this), "setImage", function() {
          if (_this._isMounted) {
            _this.setState({
              image: _this.image.src,
              loading: false,
              srcSetData: {
                srcSet: _this.image.srcset || "",
                sizes: _this.image.sizes || ""
              }
            }, function() {
              window.removeEventListener("online", _this.handleOnlineStatus);
              window.removeEventListener("offline", _this.handleOnlineStatus);
            });
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onError", function(errorEvent) {
          var onError = _this.props.onError;
          if (onError) {
            onError(errorEvent);
          }
        });
        _defineProperty(_assertThisInitialized(_this), "handleIntersection", function(event, unobserve, isOnline) {
          if (event.isIntersecting) {
            var _this$props = _this.props, src = _this$props.src, srcSetData = _this$props.srcSetData;
            if (isOnline) {
              _this.loadImage(src, srcSetData);
              unobserve();
            }
          }
        });
        _this._isMounted = false;
        _this.state = {
          isOnline: hasWindow() ? window.navigator.onLine : true,
          image: props.placeholder,
          loading: true,
          srcSetData: {
            srcSet: "",
            sizes: ""
          }
        };
        return _this;
      }
      _createClass(ProgressiveImage2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this._isMounted = true;
          if (!hasWindow()) {
            return;
          }
          window.addEventListener("online", this.handleOnlineStatus);
          window.addEventListener("offline", this.handleOnlineStatus);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var _this2 = this;
          var _this$props2 = this.props, src = _this$props2.src, placeholder = _this$props2.placeholder, srcSetData = _this$props2.srcSetData;
          if (src !== prevProps.src) {
            this.setState({
              image: placeholder,
              loading: true
            }, function() {
              _this2.loadImage(src, srcSetData);
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._isMounted = false;
          if (this.image) {
            this.image.onload = null;
            this.image.onerror = null;
          }
          if (this.timeout) {
            window.clearTimeout(this.timeout);
          }
          window.removeEventListener("online", this.handleOnlineStatus);
          window.removeEventListener("offline", this.handleOnlineStatus);
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;
          var options = {
            onChange: function onChange(event, unobserve) {
              return _this3.handleIntersection(event, unobserve, _this3.state.isOnline);
            },
            rootMargin: this.props.rootMargin || "0% 0% 25%",
            threshold: this.props.threshold || [0],
            disabled: this.props.noLazyLoad || false
          };
          var _this$state = this.state, image = _this$state.image, loading = _this$state.loading, srcSetData = _this$state.srcSetData;
          var _this$props3 = this.props, src = _this$props3.src, children = _this$props3.children, noRetry = _this$props3.noRetry, noLazyLoad = _this$props3.noLazyLoad;
          if (!children || typeof children !== "function") {
            throw new Error("ProgressiveImage requires a function as its only child");
          }
          if (noLazyLoad) {
            return children(src, false, this.props.srcSetData);
          }
          return React2.createElement(_reactIntersectionObserver["default"], options, children(image, loading, srcSetData));
        }
      }]);
      return ProgressiveImage2;
    }(React2.Component);
    exports["default"] = ProgressiveImage;
  }
});
export default require_dist();
//# sourceMappingURL=react-progressive-graceful-image.js.map
