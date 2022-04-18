// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gwufv":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "36dae56046c53d63";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"fXeAP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ACESFilmicToneMapping", ()=>ACESFilmicToneMapping
);
parcelHelpers.export(exports, "AddEquation", ()=>AddEquation
);
parcelHelpers.export(exports, "AddOperation", ()=>AddOperation
);
parcelHelpers.export(exports, "AdditiveAnimationBlendMode", ()=>AdditiveAnimationBlendMode
);
parcelHelpers.export(exports, "AdditiveBlending", ()=>AdditiveBlending
);
parcelHelpers.export(exports, "AlphaFormat", ()=>AlphaFormat
);
parcelHelpers.export(exports, "AlwaysDepth", ()=>AlwaysDepth
);
parcelHelpers.export(exports, "AlwaysStencilFunc", ()=>AlwaysStencilFunc
);
parcelHelpers.export(exports, "AmbientLight", ()=>AmbientLight
);
parcelHelpers.export(exports, "AmbientLightProbe", ()=>AmbientLightProbe
);
parcelHelpers.export(exports, "AnimationClip", ()=>AnimationClip
);
parcelHelpers.export(exports, "AnimationLoader", ()=>AnimationLoader
);
parcelHelpers.export(exports, "AnimationMixer", ()=>AnimationMixer
);
parcelHelpers.export(exports, "AnimationObjectGroup", ()=>AnimationObjectGroup
);
parcelHelpers.export(exports, "AnimationUtils", ()=>AnimationUtils
);
parcelHelpers.export(exports, "ArcCurve", ()=>ArcCurve
);
parcelHelpers.export(exports, "ArrayCamera", ()=>ArrayCamera
);
parcelHelpers.export(exports, "ArrowHelper", ()=>ArrowHelper
);
parcelHelpers.export(exports, "Audio", ()=>Audio
);
parcelHelpers.export(exports, "AudioAnalyser", ()=>AudioAnalyser
);
parcelHelpers.export(exports, "AudioContext", ()=>AudioContext
);
parcelHelpers.export(exports, "AudioListener", ()=>AudioListener
);
parcelHelpers.export(exports, "AudioLoader", ()=>AudioLoader
);
parcelHelpers.export(exports, "AxesHelper", ()=>AxesHelper
);
parcelHelpers.export(exports, "AxisHelper", ()=>AxisHelper
);
parcelHelpers.export(exports, "BackSide", ()=>BackSide
);
parcelHelpers.export(exports, "BasicDepthPacking", ()=>BasicDepthPacking
);
parcelHelpers.export(exports, "BasicShadowMap", ()=>BasicShadowMap
);
parcelHelpers.export(exports, "BinaryTextureLoader", ()=>BinaryTextureLoader
);
parcelHelpers.export(exports, "Bone", ()=>Bone
);
parcelHelpers.export(exports, "BooleanKeyframeTrack", ()=>BooleanKeyframeTrack
);
parcelHelpers.export(exports, "BoundingBoxHelper", ()=>BoundingBoxHelper
);
parcelHelpers.export(exports, "Box2", ()=>Box2
);
parcelHelpers.export(exports, "Box3", ()=>Box3
);
parcelHelpers.export(exports, "Box3Helper", ()=>Box3Helper
);
parcelHelpers.export(exports, "BoxBufferGeometry", ()=>BoxGeometry
);
parcelHelpers.export(exports, "BoxGeometry", ()=>BoxGeometry
);
parcelHelpers.export(exports, "BoxHelper", ()=>BoxHelper
);
parcelHelpers.export(exports, "BufferAttribute", ()=>BufferAttribute
);
parcelHelpers.export(exports, "BufferGeometry", ()=>BufferGeometry
);
parcelHelpers.export(exports, "BufferGeometryLoader", ()=>BufferGeometryLoader
);
parcelHelpers.export(exports, "ByteType", ()=>ByteType
);
parcelHelpers.export(exports, "Cache", ()=>Cache
);
parcelHelpers.export(exports, "Camera", ()=>Camera
);
parcelHelpers.export(exports, "CameraHelper", ()=>CameraHelper
);
parcelHelpers.export(exports, "CanvasRenderer", ()=>CanvasRenderer
);
parcelHelpers.export(exports, "CanvasTexture", ()=>CanvasTexture
);
parcelHelpers.export(exports, "CatmullRomCurve3", ()=>CatmullRomCurve3
);
parcelHelpers.export(exports, "CineonToneMapping", ()=>CineonToneMapping
);
parcelHelpers.export(exports, "CircleBufferGeometry", ()=>CircleGeometry
);
parcelHelpers.export(exports, "CircleGeometry", ()=>CircleGeometry
);
parcelHelpers.export(exports, "ClampToEdgeWrapping", ()=>ClampToEdgeWrapping
);
parcelHelpers.export(exports, "Clock", ()=>Clock
);
parcelHelpers.export(exports, "Color", ()=>Color
);
parcelHelpers.export(exports, "ColorKeyframeTrack", ()=>ColorKeyframeTrack
);
parcelHelpers.export(exports, "CompressedTexture", ()=>CompressedTexture
);
parcelHelpers.export(exports, "CompressedTextureLoader", ()=>CompressedTextureLoader
);
parcelHelpers.export(exports, "ConeBufferGeometry", ()=>ConeGeometry
);
parcelHelpers.export(exports, "ConeGeometry", ()=>ConeGeometry
);
parcelHelpers.export(exports, "CubeCamera", ()=>CubeCamera
);
parcelHelpers.export(exports, "CubeReflectionMapping", ()=>CubeReflectionMapping
);
parcelHelpers.export(exports, "CubeRefractionMapping", ()=>CubeRefractionMapping
);
parcelHelpers.export(exports, "CubeTexture", ()=>CubeTexture
);
parcelHelpers.export(exports, "CubeTextureLoader", ()=>CubeTextureLoader
);
parcelHelpers.export(exports, "CubeUVReflectionMapping", ()=>CubeUVReflectionMapping
);
parcelHelpers.export(exports, "CubeUVRefractionMapping", ()=>CubeUVRefractionMapping
);
parcelHelpers.export(exports, "CubicBezierCurve", ()=>CubicBezierCurve
);
parcelHelpers.export(exports, "CubicBezierCurve3", ()=>CubicBezierCurve3
);
parcelHelpers.export(exports, "CubicInterpolant", ()=>CubicInterpolant
);
parcelHelpers.export(exports, "CullFaceBack", ()=>CullFaceBack
);
parcelHelpers.export(exports, "CullFaceFront", ()=>CullFaceFront
);
parcelHelpers.export(exports, "CullFaceFrontBack", ()=>CullFaceFrontBack
);
parcelHelpers.export(exports, "CullFaceNone", ()=>CullFaceNone
);
parcelHelpers.export(exports, "Curve", ()=>Curve
);
parcelHelpers.export(exports, "CurvePath", ()=>CurvePath
);
parcelHelpers.export(exports, "CustomBlending", ()=>CustomBlending
);
parcelHelpers.export(exports, "CustomToneMapping", ()=>CustomToneMapping
);
parcelHelpers.export(exports, "CylinderBufferGeometry", ()=>CylinderGeometry
);
parcelHelpers.export(exports, "CylinderGeometry", ()=>CylinderGeometry
);
parcelHelpers.export(exports, "Cylindrical", ()=>Cylindrical
);
parcelHelpers.export(exports, "DataTexture", ()=>DataTexture
);
parcelHelpers.export(exports, "DataTexture2DArray", ()=>DataTexture2DArray
);
parcelHelpers.export(exports, "DataTexture3D", ()=>DataTexture3D
);
parcelHelpers.export(exports, "DataTextureLoader", ()=>DataTextureLoader
);
parcelHelpers.export(exports, "DataUtils", ()=>DataUtils
);
parcelHelpers.export(exports, "DecrementStencilOp", ()=>DecrementStencilOp
);
parcelHelpers.export(exports, "DecrementWrapStencilOp", ()=>DecrementWrapStencilOp
);
parcelHelpers.export(exports, "DefaultLoadingManager", ()=>DefaultLoadingManager
);
parcelHelpers.export(exports, "DepthFormat", ()=>DepthFormat
);
parcelHelpers.export(exports, "DepthStencilFormat", ()=>DepthStencilFormat
);
parcelHelpers.export(exports, "DepthTexture", ()=>DepthTexture
);
parcelHelpers.export(exports, "DirectionalLight", ()=>DirectionalLight
);
parcelHelpers.export(exports, "DirectionalLightHelper", ()=>DirectionalLightHelper
);
parcelHelpers.export(exports, "DiscreteInterpolant", ()=>DiscreteInterpolant
);
parcelHelpers.export(exports, "DodecahedronBufferGeometry", ()=>DodecahedronGeometry
);
parcelHelpers.export(exports, "DodecahedronGeometry", ()=>DodecahedronGeometry
);
parcelHelpers.export(exports, "DoubleSide", ()=>DoubleSide
);
parcelHelpers.export(exports, "DstAlphaFactor", ()=>DstAlphaFactor
);
parcelHelpers.export(exports, "DstColorFactor", ()=>DstColorFactor
);
parcelHelpers.export(exports, "DynamicBufferAttribute", ()=>DynamicBufferAttribute
);
parcelHelpers.export(exports, "DynamicCopyUsage", ()=>DynamicCopyUsage
);
parcelHelpers.export(exports, "DynamicDrawUsage", ()=>DynamicDrawUsage
);
parcelHelpers.export(exports, "DynamicReadUsage", ()=>DynamicReadUsage
);
parcelHelpers.export(exports, "EdgesGeometry", ()=>EdgesGeometry
);
parcelHelpers.export(exports, "EdgesHelper", ()=>EdgesHelper
);
parcelHelpers.export(exports, "EllipseCurve", ()=>EllipseCurve
);
parcelHelpers.export(exports, "EqualDepth", ()=>EqualDepth
);
parcelHelpers.export(exports, "EqualStencilFunc", ()=>EqualStencilFunc
);
parcelHelpers.export(exports, "EquirectangularReflectionMapping", ()=>EquirectangularReflectionMapping
);
parcelHelpers.export(exports, "EquirectangularRefractionMapping", ()=>EquirectangularRefractionMapping
);
parcelHelpers.export(exports, "Euler", ()=>Euler
);
parcelHelpers.export(exports, "EventDispatcher", ()=>EventDispatcher
);
parcelHelpers.export(exports, "ExtrudeBufferGeometry", ()=>ExtrudeGeometry
);
parcelHelpers.export(exports, "ExtrudeGeometry", ()=>ExtrudeGeometry
);
parcelHelpers.export(exports, "FaceColors", ()=>FaceColors
);
parcelHelpers.export(exports, "FileLoader", ()=>FileLoader
);
parcelHelpers.export(exports, "FlatShading", ()=>FlatShading
);
parcelHelpers.export(exports, "Float16BufferAttribute", ()=>Float16BufferAttribute
);
parcelHelpers.export(exports, "Float32Attribute", ()=>Float32Attribute
);
parcelHelpers.export(exports, "Float32BufferAttribute", ()=>Float32BufferAttribute
);
parcelHelpers.export(exports, "Float64Attribute", ()=>Float64Attribute
);
parcelHelpers.export(exports, "Float64BufferAttribute", ()=>Float64BufferAttribute
);
parcelHelpers.export(exports, "FloatType", ()=>FloatType
);
parcelHelpers.export(exports, "Fog", ()=>Fog
);
parcelHelpers.export(exports, "FogExp2", ()=>FogExp2
);
parcelHelpers.export(exports, "Font", ()=>Font
);
parcelHelpers.export(exports, "FontLoader", ()=>FontLoader
);
parcelHelpers.export(exports, "FrontSide", ()=>FrontSide
);
parcelHelpers.export(exports, "Frustum", ()=>Frustum
);
parcelHelpers.export(exports, "GLBufferAttribute", ()=>GLBufferAttribute
);
parcelHelpers.export(exports, "GLSL1", ()=>GLSL1
);
parcelHelpers.export(exports, "GLSL3", ()=>GLSL3
);
parcelHelpers.export(exports, "GammaEncoding", ()=>GammaEncoding
);
parcelHelpers.export(exports, "GreaterDepth", ()=>GreaterDepth
);
parcelHelpers.export(exports, "GreaterEqualDepth", ()=>GreaterEqualDepth
);
parcelHelpers.export(exports, "GreaterEqualStencilFunc", ()=>GreaterEqualStencilFunc
);
parcelHelpers.export(exports, "GreaterStencilFunc", ()=>GreaterStencilFunc
);
parcelHelpers.export(exports, "GridHelper", ()=>GridHelper
);
parcelHelpers.export(exports, "Group", ()=>Group
);
parcelHelpers.export(exports, "HalfFloatType", ()=>HalfFloatType
);
parcelHelpers.export(exports, "HemisphereLight", ()=>HemisphereLight
);
parcelHelpers.export(exports, "HemisphereLightHelper", ()=>HemisphereLightHelper
);
parcelHelpers.export(exports, "HemisphereLightProbe", ()=>HemisphereLightProbe
);
parcelHelpers.export(exports, "IcosahedronBufferGeometry", ()=>IcosahedronGeometry
);
parcelHelpers.export(exports, "IcosahedronGeometry", ()=>IcosahedronGeometry
);
parcelHelpers.export(exports, "ImageBitmapLoader", ()=>ImageBitmapLoader
);
parcelHelpers.export(exports, "ImageLoader", ()=>ImageLoader
);
parcelHelpers.export(exports, "ImageUtils", ()=>ImageUtils
);
parcelHelpers.export(exports, "ImmediateRenderObject", ()=>ImmediateRenderObject
);
parcelHelpers.export(exports, "IncrementStencilOp", ()=>IncrementStencilOp
);
parcelHelpers.export(exports, "IncrementWrapStencilOp", ()=>IncrementWrapStencilOp
);
parcelHelpers.export(exports, "InstancedBufferAttribute", ()=>InstancedBufferAttribute
);
parcelHelpers.export(exports, "InstancedBufferGeometry", ()=>InstancedBufferGeometry
);
parcelHelpers.export(exports, "InstancedInterleavedBuffer", ()=>InstancedInterleavedBuffer
);
parcelHelpers.export(exports, "InstancedMesh", ()=>InstancedMesh
);
parcelHelpers.export(exports, "Int16Attribute", ()=>Int16Attribute
);
parcelHelpers.export(exports, "Int16BufferAttribute", ()=>Int16BufferAttribute
);
parcelHelpers.export(exports, "Int32Attribute", ()=>Int32Attribute
);
parcelHelpers.export(exports, "Int32BufferAttribute", ()=>Int32BufferAttribute
);
parcelHelpers.export(exports, "Int8Attribute", ()=>Int8Attribute
);
parcelHelpers.export(exports, "Int8BufferAttribute", ()=>Int8BufferAttribute
);
parcelHelpers.export(exports, "IntType", ()=>IntType
);
parcelHelpers.export(exports, "InterleavedBuffer", ()=>InterleavedBuffer
);
parcelHelpers.export(exports, "InterleavedBufferAttribute", ()=>InterleavedBufferAttribute
);
parcelHelpers.export(exports, "Interpolant", ()=>Interpolant
);
parcelHelpers.export(exports, "InterpolateDiscrete", ()=>InterpolateDiscrete
);
parcelHelpers.export(exports, "InterpolateLinear", ()=>InterpolateLinear
);
parcelHelpers.export(exports, "InterpolateSmooth", ()=>InterpolateSmooth
);
parcelHelpers.export(exports, "InvertStencilOp", ()=>InvertStencilOp
);
parcelHelpers.export(exports, "JSONLoader", ()=>JSONLoader
);
parcelHelpers.export(exports, "KeepStencilOp", ()=>KeepStencilOp
);
parcelHelpers.export(exports, "KeyframeTrack", ()=>KeyframeTrack
);
parcelHelpers.export(exports, "LOD", ()=>LOD
);
parcelHelpers.export(exports, "LatheBufferGeometry", ()=>LatheGeometry
);
parcelHelpers.export(exports, "LatheGeometry", ()=>LatheGeometry
);
parcelHelpers.export(exports, "Layers", ()=>Layers
);
parcelHelpers.export(exports, "LensFlare", ()=>LensFlare
);
parcelHelpers.export(exports, "LessDepth", ()=>LessDepth
);
parcelHelpers.export(exports, "LessEqualDepth", ()=>LessEqualDepth
);
parcelHelpers.export(exports, "LessEqualStencilFunc", ()=>LessEqualStencilFunc
);
parcelHelpers.export(exports, "LessStencilFunc", ()=>LessStencilFunc
);
parcelHelpers.export(exports, "Light", ()=>Light
);
parcelHelpers.export(exports, "LightProbe", ()=>LightProbe
);
parcelHelpers.export(exports, "Line", ()=>Line
);
parcelHelpers.export(exports, "Line3", ()=>Line3
);
parcelHelpers.export(exports, "LineBasicMaterial", ()=>LineBasicMaterial
);
parcelHelpers.export(exports, "LineCurve", ()=>LineCurve
);
parcelHelpers.export(exports, "LineCurve3", ()=>LineCurve3
);
parcelHelpers.export(exports, "LineDashedMaterial", ()=>LineDashedMaterial
);
parcelHelpers.export(exports, "LineLoop", ()=>LineLoop
);
parcelHelpers.export(exports, "LinePieces", ()=>LinePieces
);
parcelHelpers.export(exports, "LineSegments", ()=>LineSegments
);
parcelHelpers.export(exports, "LineStrip", ()=>LineStrip
);
parcelHelpers.export(exports, "LinearEncoding", ()=>LinearEncoding
);
parcelHelpers.export(exports, "LinearFilter", ()=>LinearFilter
);
parcelHelpers.export(exports, "LinearInterpolant", ()=>LinearInterpolant
);
parcelHelpers.export(exports, "LinearMipMapLinearFilter", ()=>LinearMipMapLinearFilter
);
parcelHelpers.export(exports, "LinearMipMapNearestFilter", ()=>LinearMipMapNearestFilter
);
parcelHelpers.export(exports, "LinearMipmapLinearFilter", ()=>LinearMipmapLinearFilter
);
parcelHelpers.export(exports, "LinearMipmapNearestFilter", ()=>LinearMipmapNearestFilter
);
parcelHelpers.export(exports, "LinearToneMapping", ()=>LinearToneMapping
);
parcelHelpers.export(exports, "Loader", ()=>Loader
);
parcelHelpers.export(exports, "LoaderUtils", ()=>LoaderUtils
);
parcelHelpers.export(exports, "LoadingManager", ()=>LoadingManager
);
parcelHelpers.export(exports, "LogLuvEncoding", ()=>LogLuvEncoding
);
parcelHelpers.export(exports, "LoopOnce", ()=>LoopOnce
);
parcelHelpers.export(exports, "LoopPingPong", ()=>LoopPingPong
);
parcelHelpers.export(exports, "LoopRepeat", ()=>LoopRepeat
);
parcelHelpers.export(exports, "LuminanceAlphaFormat", ()=>LuminanceAlphaFormat
);
parcelHelpers.export(exports, "LuminanceFormat", ()=>LuminanceFormat
);
parcelHelpers.export(exports, "MOUSE", ()=>MOUSE
);
parcelHelpers.export(exports, "Material", ()=>Material
);
parcelHelpers.export(exports, "MaterialLoader", ()=>MaterialLoader
);
parcelHelpers.export(exports, "Math", ()=>MathUtils
);
parcelHelpers.export(exports, "MathUtils", ()=>MathUtils
);
parcelHelpers.export(exports, "Matrix3", ()=>Matrix3
);
parcelHelpers.export(exports, "Matrix4", ()=>Matrix4
);
parcelHelpers.export(exports, "MaxEquation", ()=>MaxEquation
);
parcelHelpers.export(exports, "Mesh", ()=>Mesh
);
parcelHelpers.export(exports, "MeshBasicMaterial", ()=>MeshBasicMaterial
);
parcelHelpers.export(exports, "MeshDepthMaterial", ()=>MeshDepthMaterial
);
parcelHelpers.export(exports, "MeshDistanceMaterial", ()=>MeshDistanceMaterial
);
parcelHelpers.export(exports, "MeshFaceMaterial", ()=>MeshFaceMaterial
);
parcelHelpers.export(exports, "MeshLambertMaterial", ()=>MeshLambertMaterial
);
parcelHelpers.export(exports, "MeshMatcapMaterial", ()=>MeshMatcapMaterial
);
parcelHelpers.export(exports, "MeshNormalMaterial", ()=>MeshNormalMaterial
);
parcelHelpers.export(exports, "MeshPhongMaterial", ()=>MeshPhongMaterial
);
parcelHelpers.export(exports, "MeshPhysicalMaterial", ()=>MeshPhysicalMaterial
);
parcelHelpers.export(exports, "MeshStandardMaterial", ()=>MeshStandardMaterial
);
parcelHelpers.export(exports, "MeshToonMaterial", ()=>MeshToonMaterial
);
parcelHelpers.export(exports, "MinEquation", ()=>MinEquation
);
parcelHelpers.export(exports, "MirroredRepeatWrapping", ()=>MirroredRepeatWrapping
);
parcelHelpers.export(exports, "MixOperation", ()=>MixOperation
);
parcelHelpers.export(exports, "MultiMaterial", ()=>MultiMaterial
);
parcelHelpers.export(exports, "MultiplyBlending", ()=>MultiplyBlending
);
parcelHelpers.export(exports, "MultiplyOperation", ()=>MultiplyOperation
);
parcelHelpers.export(exports, "NearestFilter", ()=>NearestFilter
);
parcelHelpers.export(exports, "NearestMipMapLinearFilter", ()=>NearestMipMapLinearFilter
);
parcelHelpers.export(exports, "NearestMipMapNearestFilter", ()=>NearestMipMapNearestFilter
);
parcelHelpers.export(exports, "NearestMipmapLinearFilter", ()=>NearestMipmapLinearFilter
);
parcelHelpers.export(exports, "NearestMipmapNearestFilter", ()=>NearestMipmapNearestFilter
);
parcelHelpers.export(exports, "NeverDepth", ()=>NeverDepth
);
parcelHelpers.export(exports, "NeverStencilFunc", ()=>NeverStencilFunc
);
parcelHelpers.export(exports, "NoBlending", ()=>NoBlending
);
parcelHelpers.export(exports, "NoColors", ()=>NoColors
);
parcelHelpers.export(exports, "NoToneMapping", ()=>NoToneMapping
);
parcelHelpers.export(exports, "NormalAnimationBlendMode", ()=>NormalAnimationBlendMode
);
parcelHelpers.export(exports, "NormalBlending", ()=>NormalBlending
);
parcelHelpers.export(exports, "NotEqualDepth", ()=>NotEqualDepth
);
parcelHelpers.export(exports, "NotEqualStencilFunc", ()=>NotEqualStencilFunc
);
parcelHelpers.export(exports, "NumberKeyframeTrack", ()=>NumberKeyframeTrack
);
parcelHelpers.export(exports, "Object3D", ()=>Object3D
);
parcelHelpers.export(exports, "ObjectLoader", ()=>ObjectLoader
);
parcelHelpers.export(exports, "ObjectSpaceNormalMap", ()=>ObjectSpaceNormalMap
);
parcelHelpers.export(exports, "OctahedronBufferGeometry", ()=>OctahedronGeometry
);
parcelHelpers.export(exports, "OctahedronGeometry", ()=>OctahedronGeometry
);
parcelHelpers.export(exports, "OneFactor", ()=>OneFactor
);
parcelHelpers.export(exports, "OneMinusDstAlphaFactor", ()=>OneMinusDstAlphaFactor
);
parcelHelpers.export(exports, "OneMinusDstColorFactor", ()=>OneMinusDstColorFactor
);
parcelHelpers.export(exports, "OneMinusSrcAlphaFactor", ()=>OneMinusSrcAlphaFactor
);
parcelHelpers.export(exports, "OneMinusSrcColorFactor", ()=>OneMinusSrcColorFactor
);
parcelHelpers.export(exports, "OrthographicCamera", ()=>OrthographicCamera
);
parcelHelpers.export(exports, "PCFShadowMap", ()=>PCFShadowMap
);
parcelHelpers.export(exports, "PCFSoftShadowMap", ()=>PCFSoftShadowMap
);
parcelHelpers.export(exports, "PMREMGenerator", ()=>PMREMGenerator
);
parcelHelpers.export(exports, "ParametricBufferGeometry", ()=>ParametricGeometry
);
parcelHelpers.export(exports, "ParametricGeometry", ()=>ParametricGeometry
);
parcelHelpers.export(exports, "Particle", ()=>Particle
);
parcelHelpers.export(exports, "ParticleBasicMaterial", ()=>ParticleBasicMaterial
);
parcelHelpers.export(exports, "ParticleSystem", ()=>ParticleSystem
);
parcelHelpers.export(exports, "ParticleSystemMaterial", ()=>ParticleSystemMaterial
);
parcelHelpers.export(exports, "Path", ()=>Path
);
parcelHelpers.export(exports, "PerspectiveCamera", ()=>PerspectiveCamera
);
parcelHelpers.export(exports, "Plane", ()=>Plane
);
parcelHelpers.export(exports, "PlaneBufferGeometry", ()=>PlaneGeometry
);
parcelHelpers.export(exports, "PlaneGeometry", ()=>PlaneGeometry
);
parcelHelpers.export(exports, "PlaneHelper", ()=>PlaneHelper
);
parcelHelpers.export(exports, "PointCloud", ()=>PointCloud
);
parcelHelpers.export(exports, "PointCloudMaterial", ()=>PointCloudMaterial
);
parcelHelpers.export(exports, "PointLight", ()=>PointLight
);
parcelHelpers.export(exports, "PointLightHelper", ()=>PointLightHelper
);
parcelHelpers.export(exports, "Points", ()=>Points
);
parcelHelpers.export(exports, "PointsMaterial", ()=>PointsMaterial
);
parcelHelpers.export(exports, "PolarGridHelper", ()=>PolarGridHelper
);
parcelHelpers.export(exports, "PolyhedronBufferGeometry", ()=>PolyhedronGeometry
);
parcelHelpers.export(exports, "PolyhedronGeometry", ()=>PolyhedronGeometry
);
parcelHelpers.export(exports, "PositionalAudio", ()=>PositionalAudio
);
parcelHelpers.export(exports, "PropertyBinding", ()=>PropertyBinding
);
parcelHelpers.export(exports, "PropertyMixer", ()=>PropertyMixer
);
parcelHelpers.export(exports, "QuadraticBezierCurve", ()=>QuadraticBezierCurve
);
parcelHelpers.export(exports, "QuadraticBezierCurve3", ()=>QuadraticBezierCurve3
);
parcelHelpers.export(exports, "Quaternion", ()=>Quaternion
);
parcelHelpers.export(exports, "QuaternionKeyframeTrack", ()=>QuaternionKeyframeTrack
);
parcelHelpers.export(exports, "QuaternionLinearInterpolant", ()=>QuaternionLinearInterpolant
);
parcelHelpers.export(exports, "REVISION", ()=>REVISION
);
parcelHelpers.export(exports, "RGBADepthPacking", ()=>RGBADepthPacking
);
parcelHelpers.export(exports, "RGBAFormat", ()=>RGBAFormat
);
parcelHelpers.export(exports, "RGBAIntegerFormat", ()=>RGBAIntegerFormat
);
parcelHelpers.export(exports, "RGBA_ASTC_10x10_Format", ()=>RGBA_ASTC_10x10_Format
);
parcelHelpers.export(exports, "RGBA_ASTC_10x5_Format", ()=>RGBA_ASTC_10x5_Format
);
parcelHelpers.export(exports, "RGBA_ASTC_10x6_Format", ()=>RGBA_ASTC_10x6_Format
);
parcelHelpers.export(exports, "RGBA_ASTC_10x8_Format", ()=>RGBA_ASTC_10x8_Format
);
parcelHelpers.export(exports, "RGBA_ASTC_12x10_Format", ()=>RGBA_ASTC_12x10_Format
);
parcelHelpers.export(exports, "RGBA_ASTC_12x12_Format", ()=>RGBA_ASTC_12x12_Format
);
parcelHelpers.export(exports, "RGBA_ASTC_4x4_Format", ()=>RGBA_ASTC_4x4_Format
);
parcelHelpers.export(exports, "RGBA_ASTC_5x4_Format", ()=>RGBA_ASTC_5x4_Format
);
parcelHelpers.export(exports, "RGBA_ASTC_5x5_Format", ()=>RGBA_ASTC_5x5_Format
);
parcelHelpers.export(exports, "RGBA_ASTC_6x5_Format", ()=>RGBA_ASTC_6x5_Format
);
parcelHelpers.export(exports, "RGBA_ASTC_6x6_Format", ()=>RGBA_ASTC_6x6_Format
);
parcelHelpers.export(exports, "RGBA_ASTC_8x5_Format", ()=>RGBA_ASTC_8x5_Format
);
parcelHelpers.export(exports, "RGBA_ASTC_8x6_Format", ()=>RGBA_ASTC_8x6_Format
);
parcelHelpers.export(exports, "RGBA_ASTC_8x8_Format", ()=>RGBA_ASTC_8x8_Format
);
parcelHelpers.export(exports, "RGBA_BPTC_Format", ()=>RGBA_BPTC_Format
);
parcelHelpers.export(exports, "RGBA_ETC2_EAC_Format", ()=>RGBA_ETC2_EAC_Format
);
parcelHelpers.export(exports, "RGBA_PVRTC_2BPPV1_Format", ()=>RGBA_PVRTC_2BPPV1_Format
);
parcelHelpers.export(exports, "RGBA_PVRTC_4BPPV1_Format", ()=>RGBA_PVRTC_4BPPV1_Format
);
parcelHelpers.export(exports, "RGBA_S3TC_DXT1_Format", ()=>RGBA_S3TC_DXT1_Format
);
parcelHelpers.export(exports, "RGBA_S3TC_DXT3_Format", ()=>RGBA_S3TC_DXT3_Format
);
parcelHelpers.export(exports, "RGBA_S3TC_DXT5_Format", ()=>RGBA_S3TC_DXT5_Format
);
parcelHelpers.export(exports, "RGBDEncoding", ()=>RGBDEncoding
);
parcelHelpers.export(exports, "RGBEEncoding", ()=>RGBEEncoding
);
parcelHelpers.export(exports, "RGBEFormat", ()=>RGBEFormat
);
parcelHelpers.export(exports, "RGBFormat", ()=>RGBFormat
);
parcelHelpers.export(exports, "RGBIntegerFormat", ()=>RGBIntegerFormat
);
parcelHelpers.export(exports, "RGBM16Encoding", ()=>RGBM16Encoding
);
parcelHelpers.export(exports, "RGBM7Encoding", ()=>RGBM7Encoding
);
parcelHelpers.export(exports, "RGB_ETC1_Format", ()=>RGB_ETC1_Format
);
parcelHelpers.export(exports, "RGB_ETC2_Format", ()=>RGB_ETC2_Format
);
parcelHelpers.export(exports, "RGB_PVRTC_2BPPV1_Format", ()=>RGB_PVRTC_2BPPV1_Format
);
parcelHelpers.export(exports, "RGB_PVRTC_4BPPV1_Format", ()=>RGB_PVRTC_4BPPV1_Format
);
parcelHelpers.export(exports, "RGB_S3TC_DXT1_Format", ()=>RGB_S3TC_DXT1_Format
);
parcelHelpers.export(exports, "RGFormat", ()=>RGFormat
);
parcelHelpers.export(exports, "RGIntegerFormat", ()=>RGIntegerFormat
);
parcelHelpers.export(exports, "RawShaderMaterial", ()=>RawShaderMaterial
);
parcelHelpers.export(exports, "Ray", ()=>Ray
);
parcelHelpers.export(exports, "Raycaster", ()=>Raycaster
);
parcelHelpers.export(exports, "RectAreaLight", ()=>RectAreaLight
);
parcelHelpers.export(exports, "RedFormat", ()=>RedFormat
);
parcelHelpers.export(exports, "RedIntegerFormat", ()=>RedIntegerFormat
);
parcelHelpers.export(exports, "ReinhardToneMapping", ()=>ReinhardToneMapping
);
parcelHelpers.export(exports, "RepeatWrapping", ()=>RepeatWrapping
);
parcelHelpers.export(exports, "ReplaceStencilOp", ()=>ReplaceStencilOp
);
parcelHelpers.export(exports, "ReverseSubtractEquation", ()=>ReverseSubtractEquation
);
parcelHelpers.export(exports, "RingBufferGeometry", ()=>RingGeometry
);
parcelHelpers.export(exports, "RingGeometry", ()=>RingGeometry
);
parcelHelpers.export(exports, "SRGB8_ALPHA8_ASTC_10x10_Format", ()=>SRGB8_ALPHA8_ASTC_10x10_Format
);
parcelHelpers.export(exports, "SRGB8_ALPHA8_ASTC_10x5_Format", ()=>SRGB8_ALPHA8_ASTC_10x5_Format
);
parcelHelpers.export(exports, "SRGB8_ALPHA8_ASTC_10x6_Format", ()=>SRGB8_ALPHA8_ASTC_10x6_Format
);
parcelHelpers.export(exports, "SRGB8_ALPHA8_ASTC_10x8_Format", ()=>SRGB8_ALPHA8_ASTC_10x8_Format
);
parcelHelpers.export(exports, "SRGB8_ALPHA8_ASTC_12x10_Format", ()=>SRGB8_ALPHA8_ASTC_12x10_Format
);
parcelHelpers.export(exports, "SRGB8_ALPHA8_ASTC_12x12_Format", ()=>SRGB8_ALPHA8_ASTC_12x12_Format
);
parcelHelpers.export(exports, "SRGB8_ALPHA8_ASTC_4x4_Format", ()=>SRGB8_ALPHA8_ASTC_4x4_Format
);
parcelHelpers.export(exports, "SRGB8_ALPHA8_ASTC_5x4_Format", ()=>SRGB8_ALPHA8_ASTC_5x4_Format
);
parcelHelpers.export(exports, "SRGB8_ALPHA8_ASTC_5x5_Format", ()=>SRGB8_ALPHA8_ASTC_5x5_Format
);
parcelHelpers.export(exports, "SRGB8_ALPHA8_ASTC_6x5_Format", ()=>SRGB8_ALPHA8_ASTC_6x5_Format
);
parcelHelpers.export(exports, "SRGB8_ALPHA8_ASTC_6x6_Format", ()=>SRGB8_ALPHA8_ASTC_6x6_Format
);
parcelHelpers.export(exports, "SRGB8_ALPHA8_ASTC_8x5_Format", ()=>SRGB8_ALPHA8_ASTC_8x5_Format
);
parcelHelpers.export(exports, "SRGB8_ALPHA8_ASTC_8x6_Format", ()=>SRGB8_ALPHA8_ASTC_8x6_Format
);
parcelHelpers.export(exports, "SRGB8_ALPHA8_ASTC_8x8_Format", ()=>SRGB8_ALPHA8_ASTC_8x8_Format
);
parcelHelpers.export(exports, "Scene", ()=>Scene
);
parcelHelpers.export(exports, "SceneUtils", ()=>SceneUtils
);
parcelHelpers.export(exports, "ShaderChunk", ()=>ShaderChunk
);
parcelHelpers.export(exports, "ShaderLib", ()=>ShaderLib
);
parcelHelpers.export(exports, "ShaderMaterial", ()=>ShaderMaterial
);
parcelHelpers.export(exports, "ShadowMaterial", ()=>ShadowMaterial
);
parcelHelpers.export(exports, "Shape", ()=>Shape
);
parcelHelpers.export(exports, "ShapeBufferGeometry", ()=>ShapeGeometry
);
parcelHelpers.export(exports, "ShapeGeometry", ()=>ShapeGeometry
);
parcelHelpers.export(exports, "ShapePath", ()=>ShapePath
);
parcelHelpers.export(exports, "ShapeUtils", ()=>ShapeUtils
);
parcelHelpers.export(exports, "ShortType", ()=>ShortType
);
parcelHelpers.export(exports, "Skeleton", ()=>Skeleton
);
parcelHelpers.export(exports, "SkeletonHelper", ()=>SkeletonHelper
);
parcelHelpers.export(exports, "SkinnedMesh", ()=>SkinnedMesh
);
parcelHelpers.export(exports, "SmoothShading", ()=>SmoothShading
);
parcelHelpers.export(exports, "Sphere", ()=>Sphere
);
parcelHelpers.export(exports, "SphereBufferGeometry", ()=>SphereGeometry
);
parcelHelpers.export(exports, "SphereGeometry", ()=>SphereGeometry
);
parcelHelpers.export(exports, "Spherical", ()=>Spherical
);
parcelHelpers.export(exports, "SphericalHarmonics3", ()=>SphericalHarmonics3
);
parcelHelpers.export(exports, "SplineCurve", ()=>SplineCurve
);
parcelHelpers.export(exports, "SpotLight", ()=>SpotLight
);
parcelHelpers.export(exports, "SpotLightHelper", ()=>SpotLightHelper
);
parcelHelpers.export(exports, "Sprite", ()=>Sprite
);
parcelHelpers.export(exports, "SpriteMaterial", ()=>SpriteMaterial
);
parcelHelpers.export(exports, "SrcAlphaFactor", ()=>SrcAlphaFactor
);
parcelHelpers.export(exports, "SrcAlphaSaturateFactor", ()=>SrcAlphaSaturateFactor
);
parcelHelpers.export(exports, "SrcColorFactor", ()=>SrcColorFactor
);
parcelHelpers.export(exports, "StaticCopyUsage", ()=>StaticCopyUsage
);
parcelHelpers.export(exports, "StaticDrawUsage", ()=>StaticDrawUsage
);
parcelHelpers.export(exports, "StaticReadUsage", ()=>StaticReadUsage
);
parcelHelpers.export(exports, "StereoCamera", ()=>StereoCamera
);
parcelHelpers.export(exports, "StreamCopyUsage", ()=>StreamCopyUsage
);
parcelHelpers.export(exports, "StreamDrawUsage", ()=>StreamDrawUsage
);
parcelHelpers.export(exports, "StreamReadUsage", ()=>StreamReadUsage
);
parcelHelpers.export(exports, "StringKeyframeTrack", ()=>StringKeyframeTrack
);
parcelHelpers.export(exports, "SubtractEquation", ()=>SubtractEquation
);
parcelHelpers.export(exports, "SubtractiveBlending", ()=>SubtractiveBlending
);
parcelHelpers.export(exports, "TOUCH", ()=>TOUCH
);
parcelHelpers.export(exports, "TangentSpaceNormalMap", ()=>TangentSpaceNormalMap
);
parcelHelpers.export(exports, "TetrahedronBufferGeometry", ()=>TetrahedronGeometry
);
parcelHelpers.export(exports, "TetrahedronGeometry", ()=>TetrahedronGeometry
);
parcelHelpers.export(exports, "TextBufferGeometry", ()=>TextGeometry
);
parcelHelpers.export(exports, "TextGeometry", ()=>TextGeometry
);
parcelHelpers.export(exports, "Texture", ()=>Texture
);
parcelHelpers.export(exports, "TextureLoader", ()=>TextureLoader
);
parcelHelpers.export(exports, "TorusBufferGeometry", ()=>TorusGeometry
);
parcelHelpers.export(exports, "TorusGeometry", ()=>TorusGeometry
);
parcelHelpers.export(exports, "TorusKnotBufferGeometry", ()=>TorusKnotGeometry
);
parcelHelpers.export(exports, "TorusKnotGeometry", ()=>TorusKnotGeometry
);
parcelHelpers.export(exports, "Triangle", ()=>Triangle
);
parcelHelpers.export(exports, "TriangleFanDrawMode", ()=>TriangleFanDrawMode
);
parcelHelpers.export(exports, "TriangleStripDrawMode", ()=>TriangleStripDrawMode
);
parcelHelpers.export(exports, "TrianglesDrawMode", ()=>TrianglesDrawMode
);
parcelHelpers.export(exports, "TubeBufferGeometry", ()=>TubeGeometry
);
parcelHelpers.export(exports, "TubeGeometry", ()=>TubeGeometry
);
parcelHelpers.export(exports, "UVMapping", ()=>UVMapping
);
parcelHelpers.export(exports, "Uint16Attribute", ()=>Uint16Attribute
);
parcelHelpers.export(exports, "Uint16BufferAttribute", ()=>Uint16BufferAttribute
);
parcelHelpers.export(exports, "Uint32Attribute", ()=>Uint32Attribute
);
parcelHelpers.export(exports, "Uint32BufferAttribute", ()=>Uint32BufferAttribute
);
parcelHelpers.export(exports, "Uint8Attribute", ()=>Uint8Attribute
);
parcelHelpers.export(exports, "Uint8BufferAttribute", ()=>Uint8BufferAttribute
);
parcelHelpers.export(exports, "Uint8ClampedAttribute", ()=>Uint8ClampedAttribute
);
parcelHelpers.export(exports, "Uint8ClampedBufferAttribute", ()=>Uint8ClampedBufferAttribute
);
parcelHelpers.export(exports, "Uniform", ()=>Uniform
);
parcelHelpers.export(exports, "UniformsLib", ()=>UniformsLib
);
parcelHelpers.export(exports, "UniformsUtils", ()=>UniformsUtils
);
parcelHelpers.export(exports, "UnsignedByteType", ()=>UnsignedByteType
);
parcelHelpers.export(exports, "UnsignedInt248Type", ()=>UnsignedInt248Type
);
parcelHelpers.export(exports, "UnsignedIntType", ()=>UnsignedIntType
);
parcelHelpers.export(exports, "UnsignedShort4444Type", ()=>UnsignedShort4444Type
);
parcelHelpers.export(exports, "UnsignedShort5551Type", ()=>UnsignedShort5551Type
);
parcelHelpers.export(exports, "UnsignedShort565Type", ()=>UnsignedShort565Type
);
parcelHelpers.export(exports, "UnsignedShortType", ()=>UnsignedShortType
);
parcelHelpers.export(exports, "VSMShadowMap", ()=>VSMShadowMap
);
parcelHelpers.export(exports, "Vector2", ()=>Vector2
);
parcelHelpers.export(exports, "Vector3", ()=>Vector3
);
parcelHelpers.export(exports, "Vector4", ()=>Vector4
);
parcelHelpers.export(exports, "VectorKeyframeTrack", ()=>VectorKeyframeTrack
);
parcelHelpers.export(exports, "Vertex", ()=>Vertex
);
parcelHelpers.export(exports, "VertexColors", ()=>VertexColors
);
parcelHelpers.export(exports, "VideoTexture", ()=>VideoTexture
);
parcelHelpers.export(exports, "WebGL1Renderer", ()=>WebGL1Renderer
);
parcelHelpers.export(exports, "WebGLCubeRenderTarget", ()=>WebGLCubeRenderTarget
);
parcelHelpers.export(exports, "WebGLMultisampleRenderTarget", ()=>WebGLMultisampleRenderTarget
);
parcelHelpers.export(exports, "WebGLRenderTarget", ()=>WebGLRenderTarget
);
parcelHelpers.export(exports, "WebGLRenderTargetCube", ()=>WebGLRenderTargetCube
);
parcelHelpers.export(exports, "WebGLRenderer", ()=>WebGLRenderer
);
parcelHelpers.export(exports, "WebGLUtils", ()=>WebGLUtils
);
parcelHelpers.export(exports, "WireframeGeometry", ()=>WireframeGeometry
);
parcelHelpers.export(exports, "WireframeHelper", ()=>WireframeHelper
);
parcelHelpers.export(exports, "WrapAroundEnding", ()=>WrapAroundEnding
);
parcelHelpers.export(exports, "XHRLoader", ()=>XHRLoader
);
parcelHelpers.export(exports, "ZeroCurvatureEnding", ()=>ZeroCurvatureEnding
);
parcelHelpers.export(exports, "ZeroFactor", ()=>ZeroFactor
);
parcelHelpers.export(exports, "ZeroSlopeEnding", ()=>ZeroSlopeEnding
);
parcelHelpers.export(exports, "ZeroStencilOp", ()=>ZeroStencilOp
);
parcelHelpers.export(exports, "sRGBEncoding", ()=>sRGBEncoding
);
const REVISION = "128", MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
}, TOUCH = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
}, CullFaceNone = 0, CullFaceBack = 1, CullFaceFront = 2, CullFaceFrontBack = 3, BasicShadowMap = 0, PCFShadowMap = 1, PCFSoftShadowMap = 2, VSMShadowMap = 3, FrontSide = 0, BackSide = 1, DoubleSide = 2, FlatShading = 1, SmoothShading = 2, NoBlending = 0, NormalBlending = 1, AdditiveBlending = 2, SubtractiveBlending = 3, MultiplyBlending = 4, CustomBlending = 5, AddEquation = 100, SubtractEquation = 101, ReverseSubtractEquation = 102, MinEquation = 103, MaxEquation = 104, ZeroFactor = 200, OneFactor = 201, SrcColorFactor = 202, OneMinusSrcColorFactor = 203, SrcAlphaFactor = 204, OneMinusSrcAlphaFactor = 205, DstAlphaFactor = 206, OneMinusDstAlphaFactor = 207, DstColorFactor = 208, OneMinusDstColorFactor = 209, SrcAlphaSaturateFactor = 210, NeverDepth = 0, AlwaysDepth = 1, LessDepth = 2, LessEqualDepth = 3, EqualDepth = 4, GreaterEqualDepth = 5, GreaterDepth = 6, NotEqualDepth = 7, MultiplyOperation = 0, MixOperation = 1, AddOperation = 2, NoToneMapping = 0, LinearToneMapping = 1, ReinhardToneMapping = 2, CineonToneMapping = 3, ACESFilmicToneMapping = 4, CustomToneMapping = 5, UVMapping = 300, CubeReflectionMapping = 301, CubeRefractionMapping = 302, EquirectangularReflectionMapping = 303, EquirectangularRefractionMapping = 304, CubeUVReflectionMapping = 306, CubeUVRefractionMapping = 307, RepeatWrapping = 1000, ClampToEdgeWrapping = 1001, MirroredRepeatWrapping = 1002, NearestFilter = 1003, NearestMipmapNearestFilter = 1004, NearestMipMapNearestFilter = 1004, NearestMipmapLinearFilter = 1005, NearestMipMapLinearFilter = 1005, LinearFilter = 1006, LinearMipmapNearestFilter = 1007, LinearMipMapNearestFilter = 1007, LinearMipmapLinearFilter = 1008, LinearMipMapLinearFilter = 1008, UnsignedByteType = 1009, ByteType = 1010, ShortType = 1011, UnsignedShortType = 1012, IntType = 1013, UnsignedIntType = 1014, FloatType = 1015, HalfFloatType = 1016, UnsignedShort4444Type = 1017, UnsignedShort5551Type = 1018, UnsignedShort565Type = 1019, UnsignedInt248Type = 1020, AlphaFormat = 1021, RGBFormat = 1022, RGBAFormat = 1023, LuminanceFormat = 1024, LuminanceAlphaFormat = 1025, RGBEFormat = RGBAFormat, DepthFormat = 1026, DepthStencilFormat = 1027, RedFormat = 1028, RedIntegerFormat = 1029, RGFormat = 1030, RGIntegerFormat = 1031, RGBIntegerFormat = 1032, RGBAIntegerFormat = 1033, RGB_S3TC_DXT1_Format = 33776, RGBA_S3TC_DXT1_Format = 33777, RGBA_S3TC_DXT3_Format = 33778, RGBA_S3TC_DXT5_Format = 33779, RGB_PVRTC_4BPPV1_Format = 35840, RGB_PVRTC_2BPPV1_Format = 35841, RGBA_PVRTC_4BPPV1_Format = 35842, RGBA_PVRTC_2BPPV1_Format = 35843, RGB_ETC1_Format = 36196, RGB_ETC2_Format = 37492, RGBA_ETC2_EAC_Format = 37496, RGBA_ASTC_4x4_Format = 37808, RGBA_ASTC_5x4_Format = 37809, RGBA_ASTC_5x5_Format = 37810, RGBA_ASTC_6x5_Format = 37811, RGBA_ASTC_6x6_Format = 37812, RGBA_ASTC_8x5_Format = 37813, RGBA_ASTC_8x6_Format = 37814, RGBA_ASTC_8x8_Format = 37815, RGBA_ASTC_10x5_Format = 37816, RGBA_ASTC_10x6_Format = 37817, RGBA_ASTC_10x8_Format = 37818, RGBA_ASTC_10x10_Format = 37819, RGBA_ASTC_12x10_Format = 37820, RGBA_ASTC_12x12_Format = 37821, RGBA_BPTC_Format = 36492, SRGB8_ALPHA8_ASTC_4x4_Format = 37840, SRGB8_ALPHA8_ASTC_5x4_Format = 37841, SRGB8_ALPHA8_ASTC_5x5_Format = 37842, SRGB8_ALPHA8_ASTC_6x5_Format = 37843, SRGB8_ALPHA8_ASTC_6x6_Format = 37844, SRGB8_ALPHA8_ASTC_8x5_Format = 37845, SRGB8_ALPHA8_ASTC_8x6_Format = 37846, SRGB8_ALPHA8_ASTC_8x8_Format = 37847, SRGB8_ALPHA8_ASTC_10x5_Format = 37848, SRGB8_ALPHA8_ASTC_10x6_Format = 37849, SRGB8_ALPHA8_ASTC_10x8_Format = 37850, SRGB8_ALPHA8_ASTC_10x10_Format = 37851, SRGB8_ALPHA8_ASTC_12x10_Format = 37852, SRGB8_ALPHA8_ASTC_12x12_Format = 37853, LoopOnce = 2200, LoopRepeat = 2201, LoopPingPong = 2202, InterpolateDiscrete = 2300, InterpolateLinear = 2301, InterpolateSmooth = 2302, ZeroCurvatureEnding = 2400, ZeroSlopeEnding = 2401, WrapAroundEnding = 2402, NormalAnimationBlendMode = 2500, AdditiveAnimationBlendMode = 2501, TrianglesDrawMode = 0, TriangleStripDrawMode = 1, TriangleFanDrawMode = 2, LinearEncoding = 3000, sRGBEncoding = 3001, GammaEncoding = 3007, RGBEEncoding = 3002, LogLuvEncoding = 3003, RGBM7Encoding = 3004, RGBM16Encoding = 3005, RGBDEncoding = 3006, BasicDepthPacking = 3200, RGBADepthPacking = 3201, TangentSpaceNormalMap = 0, ObjectSpaceNormalMap = 1, ZeroStencilOp = 0, KeepStencilOp = 7680, ReplaceStencilOp = 7681, IncrementStencilOp = 7682, DecrementStencilOp = 7683, IncrementWrapStencilOp = 34055, DecrementWrapStencilOp = 34056, InvertStencilOp = 5386, NeverStencilFunc = 512, LessStencilFunc = 513, EqualStencilFunc = 514, LessEqualStencilFunc = 515, GreaterStencilFunc = 516, NotEqualStencilFunc = 517, GreaterEqualStencilFunc = 518, AlwaysStencilFunc = 519, StaticDrawUsage = 35044, DynamicDrawUsage = 35048, StreamDrawUsage = 35040, StaticReadUsage = 35045, DynamicReadUsage = 35049, StreamReadUsage = 35041, StaticCopyUsage = 35046, DynamicCopyUsage = 35050, StreamCopyUsage = 35042, GLSL1 = "100", GLSL3 = "300 es";
class EventDispatcher {
    addEventListener(e1, t) {
        void 0 === this._listeners && (this._listeners = {});
        const r = this._listeners;
        void 0 === r[e1] && (r[e1] = []), -1 === r[e1].indexOf(t) && r[e1].push(t);
    }
    hasEventListener(e2, t) {
        if (void 0 === this._listeners) return !1;
        const r = this._listeners;
        return void 0 !== r[e2] && -1 !== r[e2].indexOf(t);
    }
    removeEventListener(e3, t) {
        if (void 0 === this._listeners) return;
        const r = this._listeners[e3];
        if (void 0 !== r) {
            const e4 = r.indexOf(t);
            -1 !== e4 && r.splice(e4, 1);
        }
    }
    dispatchEvent(e5) {
        if (void 0 === this._listeners) return;
        const t = this._listeners[e5.type];
        if (void 0 !== t) {
            e5.target = this;
            const r = t.slice(0);
            for(let t1 = 0, n = r.length; t1 < n; t1++)r[t1].call(this, e5);
            e5.target = null;
        }
    }
}
const _lut = [];
for(let e = 0; e < 256; e++)_lut[e] = (e < 16 ? "0" : "") + e.toString(16);
let _seed = 1234567;
const DEG2RAD = Math.PI / 180, RAD2DEG = 180 / Math.PI;
function generateUUID() {
    const e6 = 4294967295 * Math.random() | 0, t = 4294967295 * Math.random() | 0, r = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0;
    return (_lut[255 & e6] + _lut[e6 >> 8 & 255] + _lut[e6 >> 16 & 255] + _lut[e6 >> 24 & 255] + "-" + _lut[255 & t] + _lut[t >> 8 & 255] + "-" + _lut[t >> 16 & 15 | 64] + _lut[t >> 24 & 255] + "-" + _lut[63 & r | 128] + _lut[r >> 8 & 255] + "-" + _lut[r >> 16 & 255] + _lut[r >> 24 & 255] + _lut[255 & n] + _lut[n >> 8 & 255] + _lut[n >> 16 & 255] + _lut[n >> 24 & 255]).toUpperCase();
}
function clamp(e7, t, r) {
    return Math.max(t, Math.min(r, e7));
}
function euclideanModulo(e8, t) {
    return (e8 % t + t) % t;
}
function mapLinear(e9, t, r, n, i) {
    return n + (e9 - t) * (i - n) / (r - t);
}
function inverseLerp(e10, t, r) {
    return e10 !== t ? (r - e10) / (t - e10) : 0;
}
function lerp(e11, t, r) {
    return (1 - r) * e11 + r * t;
}
function damp(e12, t, r, n) {
    return lerp(e12, t, 1 - Math.exp(-r * n));
}
function pingpong(e13, t = 1) {
    return t - Math.abs(euclideanModulo(e13, 2 * t) - t);
}
function smoothstep(e14, t, r) {
    return e14 <= t ? 0 : e14 >= r ? 1 : (e14 = (e14 - t) / (r - t)) * e14 * (3 - 2 * e14);
}
function smootherstep(e15, t, r) {
    return e15 <= t ? 0 : e15 >= r ? 1 : (e15 = (e15 - t) / (r - t)) * e15 * e15 * (e15 * (6 * e15 - 15) + 10);
}
function randInt(e16, t) {
    return e16 + Math.floor(Math.random() * (t - e16 + 1));
}
function randFloat(e17, t) {
    return e17 + Math.random() * (t - e17);
}
function randFloatSpread(e18) {
    return e18 * (0.5 - Math.random());
}
function seededRandom(e19) {
    return void 0 !== e19 && (_seed = e19 % 2147483647), ((_seed = 16807 * _seed % 2147483647) - 1) / 2147483646;
}
function degToRad(e20) {
    return e20 * DEG2RAD;
}
function radToDeg(e21) {
    return e21 * RAD2DEG;
}
function isPowerOfTwo(e22) {
    return 0 == (e22 & e22 - 1) && 0 !== e22;
}
function ceilPowerOfTwo(e23) {
    return Math.pow(2, Math.ceil(Math.log(e23) / Math.LN2));
}
function floorPowerOfTwo(e24) {
    return Math.pow(2, Math.floor(Math.log(e24) / Math.LN2));
}
function setQuaternionFromProperEuler(e25, t, r, n, i) {
    const a = Math.cos, o = Math.sin, s = a(r / 2), l = o(r / 2), c = a((t + n) / 2), h = o((t + n) / 2), u = a((t - n) / 2), d = o((t - n) / 2), p = a((n - t) / 2), m = o((n - t) / 2);
    switch(i){
        case "XYX":
            e25.set(s * h, l * u, l * d, s * c);
            break;
        case "YZY":
            e25.set(l * d, s * h, l * u, s * c);
            break;
        case "ZXZ":
            e25.set(l * u, l * d, s * h, s * c);
            break;
        case "XZX":
            e25.set(s * h, l * m, l * p, s * c);
            break;
        case "YXY":
            e25.set(l * p, s * h, l * m, s * c);
            break;
        case "ZYZ":
            e25.set(l * m, l * p, s * h, s * c);
            break;
        default:
            console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
    }
}
var MathUtils = Object.freeze({
    __proto__: null,
    DEG2RAD: DEG2RAD,
    RAD2DEG: RAD2DEG,
    generateUUID: generateUUID,
    clamp: clamp,
    euclideanModulo: euclideanModulo,
    mapLinear: mapLinear,
    inverseLerp: inverseLerp,
    lerp: lerp,
    damp: damp,
    pingpong: pingpong,
    smoothstep: smoothstep,
    smootherstep: smootherstep,
    randInt: randInt,
    randFloat: randFloat,
    randFloatSpread: randFloatSpread,
    seededRandom: seededRandom,
    degToRad: degToRad,
    radToDeg: radToDeg,
    isPowerOfTwo: isPowerOfTwo,
    ceilPowerOfTwo: ceilPowerOfTwo,
    floorPowerOfTwo: floorPowerOfTwo,
    setQuaternionFromProperEuler: setQuaternionFromProperEuler
});
class Vector2 {
    constructor(e26 = 0, t = 0){
        this.x = e26, this.y = t;
    }
    get width() {
        return this.x;
    }
    set width(e27) {
        this.x = e27;
    }
    get height() {
        return this.y;
    }
    set height(e28) {
        this.y = e28;
    }
    set(e29, t) {
        return this.x = e29, this.y = t, this;
    }
    setScalar(e30) {
        return this.x = e30, this.y = e30, this;
    }
    setX(e31) {
        return this.x = e31, this;
    }
    setY(e32) {
        return this.y = e32, this;
    }
    setComponent(e33, t) {
        switch(e33){
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            default:
                throw new Error("index is out of range: " + e33);
        }
        return this;
    }
    getComponent(e34) {
        switch(e34){
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + e34);
        }
    }
    clone() {
        return new this.constructor(this.x, this.y);
    }
    copy(e35) {
        return this.x = e35.x, this.y = e35.y, this;
    }
    add(e36, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e36, t)) : (this.x += e36.x, this.y += e36.y, this);
    }
    addScalar(e37) {
        return this.x += e37, this.y += e37, this;
    }
    addVectors(e38, t) {
        return this.x = e38.x + t.x, this.y = e38.y + t.y, this;
    }
    addScaledVector(e39, t) {
        return this.x += e39.x * t, this.y += e39.y * t, this;
    }
    sub(e40, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e40, t)) : (this.x -= e40.x, this.y -= e40.y, this);
    }
    subScalar(e41) {
        return this.x -= e41, this.y -= e41, this;
    }
    subVectors(e42, t) {
        return this.x = e42.x - t.x, this.y = e42.y - t.y, this;
    }
    multiply(e43) {
        return this.x *= e43.x, this.y *= e43.y, this;
    }
    multiplyScalar(e44) {
        return this.x *= e44, this.y *= e44, this;
    }
    divide(e45) {
        return this.x /= e45.x, this.y /= e45.y, this;
    }
    divideScalar(e46) {
        return this.multiplyScalar(1 / e46);
    }
    applyMatrix3(e47) {
        const t = this.x, r = this.y, n = e47.elements;
        return this.x = n[0] * t + n[3] * r + n[6], this.y = n[1] * t + n[4] * r + n[7], this;
    }
    min(e48) {
        return this.x = Math.min(this.x, e48.x), this.y = Math.min(this.y, e48.y), this;
    }
    max(e49) {
        return this.x = Math.max(this.x, e49.x), this.y = Math.max(this.y, e49.y), this;
    }
    clamp(e50, t) {
        return this.x = Math.max(e50.x, Math.min(t.x, this.x)), this.y = Math.max(e50.y, Math.min(t.y, this.y)), this;
    }
    clampScalar(e51, t) {
        return this.x = Math.max(e51, Math.min(t, this.x)), this.y = Math.max(e51, Math.min(t, this.y)), this;
    }
    clampLength(e52, t) {
        const r = this.length();
        return this.divideScalar(r || 1).multiplyScalar(Math.max(e52, Math.min(t, r)));
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this;
    }
    dot(e53) {
        return this.x * e53.x + this.y * e53.y;
    }
    cross(e54) {
        return this.x * e54.y - this.y * e54.x;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    distanceTo(e55) {
        return Math.sqrt(this.distanceToSquared(e55));
    }
    distanceToSquared(e56) {
        const t = this.x - e56.x, r = this.y - e56.y;
        return t * t + r * r;
    }
    manhattanDistanceTo(e57) {
        return Math.abs(this.x - e57.x) + Math.abs(this.y - e57.y);
    }
    setLength(e58) {
        return this.normalize().multiplyScalar(e58);
    }
    lerp(e59, t) {
        return this.x += (e59.x - this.x) * t, this.y += (e59.y - this.y) * t, this;
    }
    lerpVectors(e60, t, r) {
        return this.x = e60.x + (t.x - e60.x) * r, this.y = e60.y + (t.y - e60.y) * r, this;
    }
    equals(e61) {
        return e61.x === this.x && e61.y === this.y;
    }
    fromArray(e62, t = 0) {
        return this.x = e62[t], this.y = e62[t + 1], this;
    }
    toArray(e63 = [], t = 0) {
        return e63[t] = this.x, e63[t + 1] = this.y, e63;
    }
    fromBufferAttribute(e64, t, r) {
        return void 0 !== r && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e64.getX(t), this.y = e64.getY(t), this;
    }
    rotateAround(e65, t) {
        const r = Math.cos(t), n = Math.sin(t), i = this.x - e65.x, a = this.y - e65.y;
        return this.x = i * r - a * n + e65.x, this.y = i * n + a * r + e65.y, this;
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this;
    }
}
Vector2.prototype.isVector2 = !0;
class Matrix3 {
    constructor(){
        this.elements = [
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1
        ], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
    }
    set(e66, t, r, n, i, a, o, s, l) {
        const c = this.elements;
        return c[0] = e66, c[1] = n, c[2] = o, c[3] = t, c[4] = i, c[5] = s, c[6] = r, c[7] = a, c[8] = l, this;
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(e67) {
        const t = this.elements, r = e67.elements;
        return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], t[6] = r[6], t[7] = r[7], t[8] = r[8], this;
    }
    extractBasis(e68, t, r) {
        return e68.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), r.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(e69) {
        const t = e69.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
    }
    multiply(e70) {
        return this.multiplyMatrices(this, e70);
    }
    premultiply(e71) {
        return this.multiplyMatrices(e71, this);
    }
    multiplyMatrices(e72, t) {
        const r = e72.elements, n = t.elements, i = this.elements, a = r[0], o = r[3], s = r[6], l = r[1], c = r[4], h = r[7], u = r[2], d = r[5], p = r[8], m = n[0], f = n[3], g = n[6], v = n[1], _ = n[4], y = n[7], x = n[2], b = n[5], M = n[8];
        return i[0] = a * m + o * v + s * x, i[3] = a * f + o * _ + s * b, i[6] = a * g + o * y + s * M, i[1] = l * m + c * v + h * x, i[4] = l * f + c * _ + h * b, i[7] = l * g + c * y + h * M, i[2] = u * m + d * v + p * x, i[5] = u * f + d * _ + p * b, i[8] = u * g + d * y + p * M, this;
    }
    multiplyScalar(e73) {
        const t = this.elements;
        return t[0] *= e73, t[3] *= e73, t[6] *= e73, t[1] *= e73, t[4] *= e73, t[7] *= e73, t[2] *= e73, t[5] *= e73, t[8] *= e73, this;
    }
    determinant() {
        const e74 = this.elements, t = e74[0], r = e74[1], n = e74[2], i = e74[3], a = e74[4], o = e74[5], s = e74[6], l = e74[7], c = e74[8];
        return t * a * c - t * o * l - r * i * c + r * o * s + n * i * l - n * a * s;
    }
    invert() {
        const e75 = this.elements, t = e75[0], r = e75[1], n = e75[2], i = e75[3], a = e75[4], o = e75[5], s = e75[6], l = e75[7], c = e75[8], h = c * a - o * l, u = o * s - c * i, d = l * i - a * s, p = t * h + r * u + n * d;
        if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const m = 1 / p;
        return e75[0] = h * m, e75[1] = (n * l - c * r) * m, e75[2] = (o * r - n * a) * m, e75[3] = u * m, e75[4] = (c * t - n * s) * m, e75[5] = (n * i - o * t) * m, e75[6] = d * m, e75[7] = (r * s - l * t) * m, e75[8] = (a * t - r * i) * m, this;
    }
    transpose() {
        let e76;
        const t = this.elements;
        return e76 = t[1], t[1] = t[3], t[3] = e76, e76 = t[2], t[2] = t[6], t[6] = e76, e76 = t[5], t[5] = t[7], t[7] = e76, this;
    }
    getNormalMatrix(e77) {
        return this.setFromMatrix4(e77).invert().transpose();
    }
    transposeIntoArray(e78) {
        const t = this.elements;
        return e78[0] = t[0], e78[1] = t[3], e78[2] = t[6], e78[3] = t[1], e78[4] = t[4], e78[5] = t[7], e78[6] = t[2], e78[7] = t[5], e78[8] = t[8], this;
    }
    setUvTransform(e79, t, r, n, i, a, o) {
        const s = Math.cos(i), l = Math.sin(i);
        return this.set(r * s, r * l, -r * (s * a + l * o) + a + e79, -n * l, n * s, -n * (-l * a + s * o) + o + t, 0, 0, 1), this;
    }
    scale(e80, t) {
        const r = this.elements;
        return r[0] *= e80, r[3] *= e80, r[6] *= e80, r[1] *= t, r[4] *= t, r[7] *= t, this;
    }
    rotate(e81) {
        const t = Math.cos(e81), r = Math.sin(e81), n = this.elements, i = n[0], a = n[3], o = n[6], s = n[1], l = n[4], c = n[7];
        return n[0] = t * i + r * s, n[3] = t * a + r * l, n[6] = t * o + r * c, n[1] = -r * i + t * s, n[4] = -r * a + t * l, n[7] = -r * o + t * c, this;
    }
    translate(e82, t) {
        const r = this.elements;
        return r[0] += e82 * r[2], r[3] += e82 * r[5], r[6] += e82 * r[8], r[1] += t * r[2], r[4] += t * r[5], r[7] += t * r[8], this;
    }
    equals(e84) {
        const t = this.elements, r = e84.elements;
        for(let e83 = 0; e83 < 9; e83++)if (t[e83] !== r[e83]) return !1;
        return !0;
    }
    fromArray(e85, t = 0) {
        for(let r = 0; r < 9; r++)this.elements[r] = e85[r + t];
        return this;
    }
    toArray(e86 = [], t = 0) {
        const r = this.elements;
        return e86[t] = r[0], e86[t + 1] = r[1], e86[t + 2] = r[2], e86[t + 3] = r[3], e86[t + 4] = r[4], e86[t + 5] = r[5], e86[t + 6] = r[6], e86[t + 7] = r[7], e86[t + 8] = r[8], e86;
    }
    clone() {
        return (new this.constructor).fromArray(this.elements);
    }
}
let _canvas;
Matrix3.prototype.isMatrix3 = !0;
class ImageUtils {
    static getDataURL(e87) {
        if (/^data:/i.test(e87.src)) return e87.src;
        if ("undefined" == typeof HTMLCanvasElement) return e87.src;
        let t;
        if (e87 instanceof HTMLCanvasElement) t = e87;
        else {
            void 0 === _canvas && (_canvas = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), _canvas.width = e87.width, _canvas.height = e87.height;
            const r = _canvas.getContext("2d");
            e87 instanceof ImageData ? r.putImageData(e87, 0, 0) : r.drawImage(e87, 0, 0, e87.width, e87.height), t = _canvas;
        }
        return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e87), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
    }
}
let textureId = 0;
class Texture extends EventDispatcher {
    constructor(e88 = Texture.DEFAULT_IMAGE, t = Texture.DEFAULT_MAPPING, r = ClampToEdgeWrapping, n = ClampToEdgeWrapping, i = LinearFilter, a = LinearMipmapLinearFilter, o = RGBAFormat, s = UnsignedByteType, l = 1, c = LinearEncoding){
        super(), Object.defineProperty(this, "id", {
            value: textureId++
        }), this.uuid = generateUUID(), this.name = "", this.image = e88, this.mipmaps = [], this.mapping = t, this.wrapS = r, this.wrapT = n, this.magFilter = i, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = s, this.offset = new Vector2(0, 0), this.repeat = new Vector2(1, 1), this.center = new Vector2(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Matrix3, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.version = 0, this.onUpdate = null;
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    copy(e89) {
        return this.name = e89.name, this.image = e89.image, this.mipmaps = e89.mipmaps.slice(0), this.mapping = e89.mapping, this.wrapS = e89.wrapS, this.wrapT = e89.wrapT, this.magFilter = e89.magFilter, this.minFilter = e89.minFilter, this.anisotropy = e89.anisotropy, this.format = e89.format, this.internalFormat = e89.internalFormat, this.type = e89.type, this.offset.copy(e89.offset), this.repeat.copy(e89.repeat), this.center.copy(e89.center), this.rotation = e89.rotation, this.matrixAutoUpdate = e89.matrixAutoUpdate, this.matrix.copy(e89.matrix), this.generateMipmaps = e89.generateMipmaps, this.premultiplyAlpha = e89.premultiplyAlpha, this.flipY = e89.flipY, this.unpackAlignment = e89.unpackAlignment, this.encoding = e89.encoding, this;
    }
    toJSON(e90) {
        const t = void 0 === e90 || "string" == typeof e90;
        if (!t && void 0 !== e90.textures[this.uuid]) return e90.textures[this.uuid];
        const r = {
            metadata: {
                version: 4.5,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [
                this.repeat.x,
                this.repeat.y
            ],
            offset: [
                this.offset.x,
                this.offset.y
            ],
            center: [
                this.center.x,
                this.center.y
            ],
            rotation: this.rotation,
            wrap: [
                this.wrapS,
                this.wrapT
            ],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        if (void 0 !== this.image) {
            const n = this.image;
            if (void 0 === n.uuid && (n.uuid = generateUUID()), !t && void 0 === e90.images[n.uuid]) {
                let t;
                if (Array.isArray(n)) {
                    t = [];
                    for(let e91 = 0, r = n.length; e91 < r; e91++)n[e91].isDataTexture ? t.push(serializeImage(n[e91].image)) : t.push(serializeImage(n[e91]));
                } else t = serializeImage(n);
                e90.images[n.uuid] = {
                    uuid: n.uuid,
                    url: t
                };
            }
            r.image = n.uuid;
        }
        return t || (e90.textures[this.uuid] = r), r;
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
    transformUv(e92) {
        if (this.mapping !== UVMapping) return e92;
        if (e92.applyMatrix3(this.matrix), e92.x < 0 || e92.x > 1) switch(this.wrapS){
            case RepeatWrapping:
                e92.x = e92.x - Math.floor(e92.x);
                break;
            case ClampToEdgeWrapping:
                e92.x = e92.x < 0 ? 0 : 1;
                break;
            case MirroredRepeatWrapping:
                1 === Math.abs(Math.floor(e92.x) % 2) ? e92.x = Math.ceil(e92.x) - e92.x : e92.x = e92.x - Math.floor(e92.x);
        }
        if (e92.y < 0 || e92.y > 1) switch(this.wrapT){
            case RepeatWrapping:
                e92.y = e92.y - Math.floor(e92.y);
                break;
            case ClampToEdgeWrapping:
                e92.y = e92.y < 0 ? 0 : 1;
                break;
            case MirroredRepeatWrapping:
                1 === Math.abs(Math.floor(e92.y) % 2) ? e92.y = Math.ceil(e92.y) - e92.y : e92.y = e92.y - Math.floor(e92.y);
        }
        return this.flipY && (e92.y = 1 - e92.y), e92;
    }
    set needsUpdate(e93) {
        !0 === e93 && this.version++;
    }
}
function serializeImage(e94) {
    return "undefined" != typeof HTMLImageElement && e94 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e94 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e94 instanceof ImageBitmap ? ImageUtils.getDataURL(e94) : e94.data ? {
        data: Array.prototype.slice.call(e94.data),
        width: e94.width,
        height: e94.height,
        type: e94.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
Texture.DEFAULT_IMAGE = void 0, Texture.DEFAULT_MAPPING = UVMapping, Texture.prototype.isTexture = !0;
class Vector4 {
    constructor(e95 = 0, t = 0, r = 0, n = 1){
        this.x = e95, this.y = t, this.z = r, this.w = n;
    }
    get width() {
        return this.z;
    }
    set width(e96) {
        this.z = e96;
    }
    get height() {
        return this.w;
    }
    set height(e97) {
        this.w = e97;
    }
    set(e98, t, r, n) {
        return this.x = e98, this.y = t, this.z = r, this.w = n, this;
    }
    setScalar(e99) {
        return this.x = e99, this.y = e99, this.z = e99, this.w = e99, this;
    }
    setX(e100) {
        return this.x = e100, this;
    }
    setY(e101) {
        return this.y = e101, this;
    }
    setZ(e102) {
        return this.z = e102, this;
    }
    setW(e103) {
        return this.w = e103, this;
    }
    setComponent(e104, t) {
        switch(e104){
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            case 3:
                this.w = t;
                break;
            default:
                throw new Error("index is out of range: " + e104);
        }
        return this;
    }
    getComponent(e105) {
        switch(e105){
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + e105);
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(e106) {
        return this.x = e106.x, this.y = e106.y, this.z = e106.z, this.w = void 0 !== e106.w ? e106.w : 1, this;
    }
    add(e107, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e107, t)) : (this.x += e107.x, this.y += e107.y, this.z += e107.z, this.w += e107.w, this);
    }
    addScalar(e108) {
        return this.x += e108, this.y += e108, this.z += e108, this.w += e108, this;
    }
    addVectors(e109, t) {
        return this.x = e109.x + t.x, this.y = e109.y + t.y, this.z = e109.z + t.z, this.w = e109.w + t.w, this;
    }
    addScaledVector(e110, t) {
        return this.x += e110.x * t, this.y += e110.y * t, this.z += e110.z * t, this.w += e110.w * t, this;
    }
    sub(e111, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e111, t)) : (this.x -= e111.x, this.y -= e111.y, this.z -= e111.z, this.w -= e111.w, this);
    }
    subScalar(e112) {
        return this.x -= e112, this.y -= e112, this.z -= e112, this.w -= e112, this;
    }
    subVectors(e113, t) {
        return this.x = e113.x - t.x, this.y = e113.y - t.y, this.z = e113.z - t.z, this.w = e113.w - t.w, this;
    }
    multiply(e114) {
        return this.x *= e114.x, this.y *= e114.y, this.z *= e114.z, this.w *= e114.w, this;
    }
    multiplyScalar(e115) {
        return this.x *= e115, this.y *= e115, this.z *= e115, this.w *= e115, this;
    }
    applyMatrix4(e116) {
        const t = this.x, r = this.y, n = this.z, i = this.w, a = e116.elements;
        return this.x = a[0] * t + a[4] * r + a[8] * n + a[12] * i, this.y = a[1] * t + a[5] * r + a[9] * n + a[13] * i, this.z = a[2] * t + a[6] * r + a[10] * n + a[14] * i, this.w = a[3] * t + a[7] * r + a[11] * n + a[15] * i, this;
    }
    divideScalar(e117) {
        return this.multiplyScalar(1 / e117);
    }
    setAxisAngleFromQuaternion(e118) {
        this.w = 2 * Math.acos(e118.w);
        const t = Math.sqrt(1 - e118.w * e118.w);
        return t < 0.0001 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e118.x / t, this.y = e118.y / t, this.z = e118.z / t), this;
    }
    setAxisAngleFromRotationMatrix(e119) {
        let t, r, n, i;
        const a = e119.elements, o = a[0], s = a[4], l = a[8], c = a[1], h = a[5], u = a[9], d = a[2], p = a[6], m = a[10];
        if (Math.abs(s - c) < 0.01 && Math.abs(l - d) < 0.01 && Math.abs(u - p) < 0.01) {
            if (Math.abs(s + c) < 0.1 && Math.abs(l + d) < 0.1 && Math.abs(u + p) < 0.1 && Math.abs(o + h + m - 3) < 0.1) return this.set(1, 0, 0, 0), this;
            t = Math.PI;
            const e120 = (o + 1) / 2, a = (h + 1) / 2, f = (m + 1) / 2, g = (s + c) / 4, v = (l + d) / 4, _ = (u + p) / 4;
            return e120 > a && e120 > f ? e120 < 0.01 ? (r = 0, n = 0.707106781, i = 0.707106781) : (n = g / (r = Math.sqrt(e120)), i = v / r) : a > f ? a < 0.01 ? (r = 0.707106781, n = 0, i = 0.707106781) : (r = g / (n = Math.sqrt(a)), i = _ / n) : f < 0.01 ? (r = 0.707106781, n = 0.707106781, i = 0) : (r = v / (i = Math.sqrt(f)), n = _ / i), this.set(r, n, i, t), this;
        }
        let f = Math.sqrt((p - u) * (p - u) + (l - d) * (l - d) + (c - s) * (c - s));
        return Math.abs(f) < 0.001 && (f = 1), this.x = (p - u) / f, this.y = (l - d) / f, this.z = (c - s) / f, this.w = Math.acos((o + h + m - 1) / 2), this;
    }
    min(e121) {
        return this.x = Math.min(this.x, e121.x), this.y = Math.min(this.y, e121.y), this.z = Math.min(this.z, e121.z), this.w = Math.min(this.w, e121.w), this;
    }
    max(e122) {
        return this.x = Math.max(this.x, e122.x), this.y = Math.max(this.y, e122.y), this.z = Math.max(this.z, e122.z), this.w = Math.max(this.w, e122.w), this;
    }
    clamp(e123, t) {
        return this.x = Math.max(e123.x, Math.min(t.x, this.x)), this.y = Math.max(e123.y, Math.min(t.y, this.y)), this.z = Math.max(e123.z, Math.min(t.z, this.z)), this.w = Math.max(e123.w, Math.min(t.w, this.w)), this;
    }
    clampScalar(e124, t) {
        return this.x = Math.max(e124, Math.min(t, this.x)), this.y = Math.max(e124, Math.min(t, this.y)), this.z = Math.max(e124, Math.min(t, this.z)), this.w = Math.max(e124, Math.min(t, this.w)), this;
    }
    clampLength(e125, t) {
        const r = this.length();
        return this.divideScalar(r || 1).multiplyScalar(Math.max(e125, Math.min(t, r)));
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(e126) {
        return this.x * e126.x + this.y * e126.y + this.z * e126.z + this.w * e126.w;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    setLength(e127) {
        return this.normalize().multiplyScalar(e127);
    }
    lerp(e128, t) {
        return this.x += (e128.x - this.x) * t, this.y += (e128.y - this.y) * t, this.z += (e128.z - this.z) * t, this.w += (e128.w - this.w) * t, this;
    }
    lerpVectors(e129, t, r) {
        return this.x = e129.x + (t.x - e129.x) * r, this.y = e129.y + (t.y - e129.y) * r, this.z = e129.z + (t.z - e129.z) * r, this.w = e129.w + (t.w - e129.w) * r, this;
    }
    equals(e130) {
        return e130.x === this.x && e130.y === this.y && e130.z === this.z && e130.w === this.w;
    }
    fromArray(e131, t = 0) {
        return this.x = e131[t], this.y = e131[t + 1], this.z = e131[t + 2], this.w = e131[t + 3], this;
    }
    toArray(e132 = [], t = 0) {
        return e132[t] = this.x, e132[t + 1] = this.y, e132[t + 2] = this.z, e132[t + 3] = this.w, e132;
    }
    fromBufferAttribute(e133, t, r) {
        return void 0 !== r && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e133.getX(t), this.y = e133.getY(t), this.z = e133.getZ(t), this.w = e133.getW(t), this;
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
}
Vector4.prototype.isVector4 = !0;
class WebGLRenderTarget extends EventDispatcher {
    constructor(e134, t, r){
        super(), this.width = e134, this.height = t, this.depth = 1, this.scissor = new Vector4(0, 0, e134, t), this.scissorTest = !1, this.viewport = new Vector4(0, 0, e134, t), r = r || {}, this.texture = new Texture(void 0, r.mapping, r.wrapS, r.wrapT, r.magFilter, r.minFilter, r.format, r.type, r.anisotropy, r.encoding), this.texture.image = {}, this.texture.image.width = e134, this.texture.image.height = t, this.texture.image.depth = 1, this.texture.generateMipmaps = void 0 !== r.generateMipmaps && r.generateMipmaps, this.texture.minFilter = void 0 !== r.minFilter ? r.minFilter : LinearFilter, this.depthBuffer = void 0 === r.depthBuffer || r.depthBuffer, this.stencilBuffer = void 0 !== r.stencilBuffer && r.stencilBuffer, this.depthTexture = void 0 !== r.depthTexture ? r.depthTexture : null;
    }
    setTexture(e135) {
        e135.image = {
            width: this.width,
            height: this.height,
            depth: this.depth
        }, this.texture = e135;
    }
    setSize(e136, t, r = 1) {
        this.width === e136 && this.height === t && this.depth === r || (this.width = e136, this.height = t, this.depth = r, this.texture.image.width = e136, this.texture.image.height = t, this.texture.image.depth = r, this.dispose()), this.viewport.set(0, 0, e136, t), this.scissor.set(0, 0, e136, t);
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    copy(e137) {
        return this.width = e137.width, this.height = e137.height, this.depth = e137.depth, this.viewport.copy(e137.viewport), this.texture = e137.texture.clone(), this.depthBuffer = e137.depthBuffer, this.stencilBuffer = e137.stencilBuffer, this.depthTexture = e137.depthTexture, this;
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
}
WebGLRenderTarget.prototype.isWebGLRenderTarget = !0;
class WebGLMultisampleRenderTarget extends WebGLRenderTarget {
    constructor(e138, t, r){
        super(e138, t, r), this.samples = 4;
    }
    copy(e139) {
        return super.copy.call(this, e139), this.samples = e139.samples, this;
    }
}
WebGLMultisampleRenderTarget.prototype.isWebGLMultisampleRenderTarget = !0;
class Quaternion {
    constructor(e140 = 0, t = 0, r = 0, n = 1){
        this._x = e140, this._y = t, this._z = r, this._w = n;
    }
    static slerp(e141, t, r, n) {
        return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), r.slerpQuaternions(e141, t, n);
    }
    static slerpFlat(e142, t, r, n, i, a, o) {
        let s = r[n + 0], l = r[n + 1], c = r[n + 2], h = r[n + 3];
        const u = i[a + 0], d = i[a + 1], p = i[a + 2], m = i[a + 3];
        if (0 === o) return e142[t + 0] = s, e142[t + 1] = l, e142[t + 2] = c, void (e142[t + 3] = h);
        if (1 === o) return e142[t + 0] = u, e142[t + 1] = d, e142[t + 2] = p, void (e142[t + 3] = m);
        if (h !== m || s !== u || l !== d || c !== p) {
            let e143 = 1 - o;
            const t = s * u + l * d + c * p + h * m, r = t >= 0 ? 1 : -1, n = 1 - t * t;
            if (n > Number.EPSILON) {
                const i = Math.sqrt(n), a = Math.atan2(i, t * r);
                e143 = Math.sin(e143 * a) / i, o = Math.sin(o * a) / i;
            }
            const i = o * r;
            if (s = s * e143 + u * i, l = l * e143 + d * i, c = c * e143 + p * i, h = h * e143 + m * i, e143 === 1 - o) {
                const e144 = 1 / Math.sqrt(s * s + l * l + c * c + h * h);
                s *= e144, l *= e144, c *= e144, h *= e144;
            }
        }
        e142[t] = s, e142[t + 1] = l, e142[t + 2] = c, e142[t + 3] = h;
    }
    static multiplyQuaternionsFlat(e145, t, r, n, i, a) {
        const o = r[n], s = r[n + 1], l = r[n + 2], c = r[n + 3], h = i[a], u = i[a + 1], d = i[a + 2], p = i[a + 3];
        return e145[t] = o * p + c * h + s * d - l * u, e145[t + 1] = s * p + c * u + l * h - o * d, e145[t + 2] = l * p + c * d + o * u - s * h, e145[t + 3] = c * p - o * h - s * u - l * d, e145;
    }
    get x() {
        return this._x;
    }
    set x(e146) {
        this._x = e146, this._onChangeCallback();
    }
    get y() {
        return this._y;
    }
    set y(e147) {
        this._y = e147, this._onChangeCallback();
    }
    get z() {
        return this._z;
    }
    set z(e148) {
        this._z = e148, this._onChangeCallback();
    }
    get w() {
        return this._w;
    }
    set w(e149) {
        this._w = e149, this._onChangeCallback();
    }
    set(e150, t, r, n) {
        return this._x = e150, this._y = t, this._z = r, this._w = n, this._onChangeCallback(), this;
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e151) {
        return this._x = e151.x, this._y = e151.y, this._z = e151.z, this._w = e151.w, this._onChangeCallback(), this;
    }
    setFromEuler(e152, t) {
        if (!e152 || !e152.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
        const r = e152._x, n = e152._y, i = e152._z, a = e152._order, o = Math.cos, s = Math.sin, l = o(r / 2), c = o(n / 2), h = o(i / 2), u = s(r / 2), d = s(n / 2), p = s(i / 2);
        switch(a){
            case "XYZ":
                this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                break;
            case "YXZ":
                this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                break;
            case "ZXY":
                this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                break;
            case "ZYX":
                this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                break;
            case "YZX":
                this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
                break;
            case "XZY":
                this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p;
                break;
            default:
                console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
        }
        return !1 !== t && this._onChangeCallback(), this;
    }
    setFromAxisAngle(e153, t) {
        const r = t / 2, n = Math.sin(r);
        return this._x = e153.x * n, this._y = e153.y * n, this._z = e153.z * n, this._w = Math.cos(r), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e154) {
        const t = e154.elements, r = t[0], n = t[4], i = t[8], a = t[1], o = t[5], s = t[9], l = t[2], c = t[6], h = t[10], u = r + o + h;
        if (u > 0) {
            const e155 = 0.5 / Math.sqrt(u + 1);
            this._w = 0.25 / e155, this._x = (c - s) * e155, this._y = (i - l) * e155, this._z = (a - n) * e155;
        } else if (r > o && r > h) {
            const e156 = 2 * Math.sqrt(1 + r - o - h);
            this._w = (c - s) / e156, this._x = 0.25 * e156, this._y = (n + a) / e156, this._z = (i + l) / e156;
        } else if (o > h) {
            const e157 = 2 * Math.sqrt(1 + o - r - h);
            this._w = (i - l) / e157, this._x = (n + a) / e157, this._y = 0.25 * e157, this._z = (s + c) / e157;
        } else {
            const e158 = 2 * Math.sqrt(1 + h - r - o);
            this._w = (a - n) / e158, this._x = (i + l) / e158, this._y = (s + c) / e158, this._z = 0.25 * e158;
        }
        return this._onChangeCallback(), this;
    }
    setFromUnitVectors(e159, t) {
        let r = e159.dot(t) + 1;
        return r < Number.EPSILON ? (r = 0, Math.abs(e159.x) > Math.abs(e159.z) ? (this._x = -e159.y, this._y = e159.x, this._z = 0, this._w = r) : (this._x = 0, this._y = -e159.z, this._z = e159.y, this._w = r)) : (this._x = e159.y * t.z - e159.z * t.y, this._y = e159.z * t.x - e159.x * t.z, this._z = e159.x * t.y - e159.y * t.x, this._w = r), this.normalize();
    }
    angleTo(e160) {
        return 2 * Math.acos(Math.abs(clamp(this.dot(e160), -1, 1)));
    }
    rotateTowards(e161, t) {
        const r = this.angleTo(e161);
        if (0 === r) return this;
        const n = Math.min(1, t / r);
        return this.slerp(e161, n), this;
    }
    identity() {
        return this.set(0, 0, 0, 1);
    }
    invert() {
        return this.conjugate();
    }
    conjugate() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(e162) {
        return this._x * e162._x + this._y * e162._y + this._z * e162._z + this._w * e162._w;
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
        let e163 = this.length();
        return 0 === e163 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e163 = 1 / e163, this._x = this._x * e163, this._y = this._y * e163, this._z = this._z * e163, this._w = this._w * e163), this._onChangeCallback(), this;
    }
    multiply(e164, t) {
        return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e164, t)) : this.multiplyQuaternions(this, e164);
    }
    premultiply(e165) {
        return this.multiplyQuaternions(e165, this);
    }
    multiplyQuaternions(e166, t) {
        const r = e166._x, n = e166._y, i = e166._z, a = e166._w, o = t._x, s = t._y, l = t._z, c = t._w;
        return this._x = r * c + a * o + n * l - i * s, this._y = n * c + a * s + i * o - r * l, this._z = i * c + a * l + r * s - n * o, this._w = a * c - r * o - n * s - i * l, this._onChangeCallback(), this;
    }
    slerp(e167, t) {
        if (0 === t) return this;
        if (1 === t) return this.copy(e167);
        const r = this._x, n = this._y, i = this._z, a = this._w;
        let o = a * e167._w + r * e167._x + n * e167._y + i * e167._z;
        if (o < 0 ? (this._w = -e167._w, this._x = -e167._x, this._y = -e167._y, this._z = -e167._z, o = -o) : this.copy(e167), o >= 1) return this._w = a, this._x = r, this._y = n, this._z = i, this;
        const s = 1 - o * o;
        if (s <= Number.EPSILON) {
            const e168 = 1 - t;
            return this._w = e168 * a + t * this._w, this._x = e168 * r + t * this._x, this._y = e168 * n + t * this._y, this._z = e168 * i + t * this._z, this.normalize(), this._onChangeCallback(), this;
        }
        const l = Math.sqrt(s), c = Math.atan2(l, o), h = Math.sin((1 - t) * c) / l, u = Math.sin(t * c) / l;
        return this._w = a * h + this._w * u, this._x = r * h + this._x * u, this._y = n * h + this._y * u, this._z = i * h + this._z * u, this._onChangeCallback(), this;
    }
    slerpQuaternions(e169, t, r) {
        this.copy(e169).slerp(t, r);
    }
    equals(e170) {
        return e170._x === this._x && e170._y === this._y && e170._z === this._z && e170._w === this._w;
    }
    fromArray(e171, t = 0) {
        return this._x = e171[t], this._y = e171[t + 1], this._z = e171[t + 2], this._w = e171[t + 3], this._onChangeCallback(), this;
    }
    toArray(e172 = [], t = 0) {
        return e172[t] = this._x, e172[t + 1] = this._y, e172[t + 2] = this._z, e172[t + 3] = this._w, e172;
    }
    fromBufferAttribute(e173, t) {
        return this._x = e173.getX(t), this._y = e173.getY(t), this._z = e173.getZ(t), this._w = e173.getW(t), this;
    }
    _onChange(e174) {
        return this._onChangeCallback = e174, this;
    }
    _onChangeCallback() {}
}
Quaternion.prototype.isQuaternion = !0;
class Vector3 {
    constructor(e175 = 0, t = 0, r = 0){
        this.x = e175, this.y = t, this.z = r;
    }
    set(e176, t, r) {
        return void 0 === r && (r = this.z), this.x = e176, this.y = t, this.z = r, this;
    }
    setScalar(e177) {
        return this.x = e177, this.y = e177, this.z = e177, this;
    }
    setX(e178) {
        return this.x = e178, this;
    }
    setY(e179) {
        return this.y = e179, this;
    }
    setZ(e180) {
        return this.z = e180, this;
    }
    setComponent(e181, t) {
        switch(e181){
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            default:
                throw new Error("index is out of range: " + e181);
        }
        return this;
    }
    getComponent(e182) {
        switch(e182){
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + e182);
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z);
    }
    copy(e183) {
        return this.x = e183.x, this.y = e183.y, this.z = e183.z, this;
    }
    add(e184, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e184, t)) : (this.x += e184.x, this.y += e184.y, this.z += e184.z, this);
    }
    addScalar(e185) {
        return this.x += e185, this.y += e185, this.z += e185, this;
    }
    addVectors(e186, t) {
        return this.x = e186.x + t.x, this.y = e186.y + t.y, this.z = e186.z + t.z, this;
    }
    addScaledVector(e187, t) {
        return this.x += e187.x * t, this.y += e187.y * t, this.z += e187.z * t, this;
    }
    sub(e188, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e188, t)) : (this.x -= e188.x, this.y -= e188.y, this.z -= e188.z, this);
    }
    subScalar(e189) {
        return this.x -= e189, this.y -= e189, this.z -= e189, this;
    }
    subVectors(e190, t) {
        return this.x = e190.x - t.x, this.y = e190.y - t.y, this.z = e190.z - t.z, this;
    }
    multiply(e191, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e191, t)) : (this.x *= e191.x, this.y *= e191.y, this.z *= e191.z, this);
    }
    multiplyScalar(e192) {
        return this.x *= e192, this.y *= e192, this.z *= e192, this;
    }
    multiplyVectors(e193, t) {
        return this.x = e193.x * t.x, this.y = e193.y * t.y, this.z = e193.z * t.z, this;
    }
    applyEuler(e194) {
        return e194 && e194.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(_quaternion$4.setFromEuler(e194));
    }
    applyAxisAngle(e195, t) {
        return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e195, t));
    }
    applyMatrix3(e196) {
        const t = this.x, r = this.y, n = this.z, i = e196.elements;
        return this.x = i[0] * t + i[3] * r + i[6] * n, this.y = i[1] * t + i[4] * r + i[7] * n, this.z = i[2] * t + i[5] * r + i[8] * n, this;
    }
    applyNormalMatrix(e197) {
        return this.applyMatrix3(e197).normalize();
    }
    applyMatrix4(e198) {
        const t = this.x, r = this.y, n = this.z, i = e198.elements, a = 1 / (i[3] * t + i[7] * r + i[11] * n + i[15]);
        return this.x = (i[0] * t + i[4] * r + i[8] * n + i[12]) * a, this.y = (i[1] * t + i[5] * r + i[9] * n + i[13]) * a, this.z = (i[2] * t + i[6] * r + i[10] * n + i[14]) * a, this;
    }
    applyQuaternion(e199) {
        const t = this.x, r = this.y, n = this.z, i = e199.x, a = e199.y, o = e199.z, s = e199.w, l = s * t + a * n - o * r, c = s * r + o * t - i * n, h = s * n + i * r - a * t, u = -i * t - a * r - o * n;
        return this.x = l * s + u * -i + c * -o - h * -a, this.y = c * s + u * -a + h * -i - l * -o, this.z = h * s + u * -o + l * -a - c * -i, this;
    }
    project(e200) {
        return this.applyMatrix4(e200.matrixWorldInverse).applyMatrix4(e200.projectionMatrix);
    }
    unproject(e201) {
        return this.applyMatrix4(e201.projectionMatrixInverse).applyMatrix4(e201.matrixWorld);
    }
    transformDirection(e202) {
        const t = this.x, r = this.y, n = this.z, i = e202.elements;
        return this.x = i[0] * t + i[4] * r + i[8] * n, this.y = i[1] * t + i[5] * r + i[9] * n, this.z = i[2] * t + i[6] * r + i[10] * n, this.normalize();
    }
    divide(e203) {
        return this.x /= e203.x, this.y /= e203.y, this.z /= e203.z, this;
    }
    divideScalar(e204) {
        return this.multiplyScalar(1 / e204);
    }
    min(e205) {
        return this.x = Math.min(this.x, e205.x), this.y = Math.min(this.y, e205.y), this.z = Math.min(this.z, e205.z), this;
    }
    max(e206) {
        return this.x = Math.max(this.x, e206.x), this.y = Math.max(this.y, e206.y), this.z = Math.max(this.z, e206.z), this;
    }
    clamp(e207, t) {
        return this.x = Math.max(e207.x, Math.min(t.x, this.x)), this.y = Math.max(e207.y, Math.min(t.y, this.y)), this.z = Math.max(e207.z, Math.min(t.z, this.z)), this;
    }
    clampScalar(e208, t) {
        return this.x = Math.max(e208, Math.min(t, this.x)), this.y = Math.max(e208, Math.min(t, this.y)), this.z = Math.max(e208, Math.min(t, this.z)), this;
    }
    clampLength(e209, t) {
        const r = this.length();
        return this.divideScalar(r || 1).multiplyScalar(Math.max(e209, Math.min(t, r)));
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(e210) {
        return this.x * e210.x + this.y * e210.y + this.z * e210.z;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    setLength(e211) {
        return this.normalize().multiplyScalar(e211);
    }
    lerp(e212, t) {
        return this.x += (e212.x - this.x) * t, this.y += (e212.y - this.y) * t, this.z += (e212.z - this.z) * t, this;
    }
    lerpVectors(e213, t, r) {
        return this.x = e213.x + (t.x - e213.x) * r, this.y = e213.y + (t.y - e213.y) * r, this.z = e213.z + (t.z - e213.z) * r, this;
    }
    cross(e214, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e214, t)) : this.crossVectors(this, e214);
    }
    crossVectors(e215, t) {
        const r = e215.x, n = e215.y, i = e215.z, a = t.x, o = t.y, s = t.z;
        return this.x = n * s - i * o, this.y = i * a - r * s, this.z = r * o - n * a, this;
    }
    projectOnVector(e216) {
        const t = e216.lengthSq();
        if (0 === t) return this.set(0, 0, 0);
        const r = e216.dot(this) / t;
        return this.copy(e216).multiplyScalar(r);
    }
    projectOnPlane(e217) {
        return _vector$c.copy(this).projectOnVector(e217), this.sub(_vector$c);
    }
    reflect(e218) {
        return this.sub(_vector$c.copy(e218).multiplyScalar(2 * this.dot(e218)));
    }
    angleTo(e219) {
        const t = Math.sqrt(this.lengthSq() * e219.lengthSq());
        if (0 === t) return Math.PI / 2;
        const r = this.dot(e219) / t;
        return Math.acos(clamp(r, -1, 1));
    }
    distanceTo(e220) {
        return Math.sqrt(this.distanceToSquared(e220));
    }
    distanceToSquared(e221) {
        const t = this.x - e221.x, r = this.y - e221.y, n = this.z - e221.z;
        return t * t + r * r + n * n;
    }
    manhattanDistanceTo(e222) {
        return Math.abs(this.x - e222.x) + Math.abs(this.y - e222.y) + Math.abs(this.z - e222.z);
    }
    setFromSpherical(e223) {
        return this.setFromSphericalCoords(e223.radius, e223.phi, e223.theta);
    }
    setFromSphericalCoords(e224, t, r) {
        const n = Math.sin(t) * e224;
        return this.x = n * Math.sin(r), this.y = Math.cos(t) * e224, this.z = n * Math.cos(r), this;
    }
    setFromCylindrical(e225) {
        return this.setFromCylindricalCoords(e225.radius, e225.theta, e225.y);
    }
    setFromCylindricalCoords(e226, t, r) {
        return this.x = e226 * Math.sin(t), this.y = r, this.z = e226 * Math.cos(t), this;
    }
    setFromMatrixPosition(e227) {
        const t = e227.elements;
        return this.x = t[12], this.y = t[13], this.z = t[14], this;
    }
    setFromMatrixScale(e228) {
        const t = this.setFromMatrixColumn(e228, 0).length(), r = this.setFromMatrixColumn(e228, 1).length(), n = this.setFromMatrixColumn(e228, 2).length();
        return this.x = t, this.y = r, this.z = n, this;
    }
    setFromMatrixColumn(e229, t) {
        return this.fromArray(e229.elements, 4 * t);
    }
    setFromMatrix3Column(e230, t) {
        return this.fromArray(e230.elements, 3 * t);
    }
    equals(e231) {
        return e231.x === this.x && e231.y === this.y && e231.z === this.z;
    }
    fromArray(e232, t = 0) {
        return this.x = e232[t], this.y = e232[t + 1], this.z = e232[t + 2], this;
    }
    toArray(e233 = [], t = 0) {
        return e233[t] = this.x, e233[t + 1] = this.y, e233[t + 2] = this.z, e233;
    }
    fromBufferAttribute(e234, t, r) {
        return void 0 !== r && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e234.getX(t), this.y = e234.getY(t), this.z = e234.getZ(t), this;
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
}
Vector3.prototype.isVector3 = !0;
const _vector$c = new Vector3, _quaternion$4 = new Quaternion;
class Box3 {
    constructor(e235 = new Vector3(1 / 0, 1 / 0, 1 / 0), t = new Vector3(-1 / 0, -1 / 0, -1 / 0)){
        this.min = e235, this.max = t;
    }
    set(e236, t) {
        return this.min.copy(e236), this.max.copy(t), this;
    }
    setFromArray(e237) {
        let t = 1 / 0, r = 1 / 0, n = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0;
        for(let s = 0, l = e237.length; s < l; s += 3){
            const l = e237[s], c = e237[s + 1], h = e237[s + 2];
            l < t && (t = l), c < r && (r = c), h < n && (n = h), l > i && (i = l), c > a && (a = c), h > o && (o = h);
        }
        return this.min.set(t, r, n), this.max.set(i, a, o), this;
    }
    setFromBufferAttribute(e238) {
        let t = 1 / 0, r = 1 / 0, n = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0;
        for(let s = 0, l = e238.count; s < l; s++){
            const l = e238.getX(s), c = e238.getY(s), h = e238.getZ(s);
            l < t && (t = l), c < r && (r = c), h < n && (n = h), l > i && (i = l), c > a && (a = c), h > o && (o = h);
        }
        return this.min.set(t, r, n), this.max.set(i, a, o), this;
    }
    setFromPoints(e239) {
        this.makeEmpty();
        for(let t = 0, r = e239.length; t < r; t++)this.expandByPoint(e239[t]);
        return this;
    }
    setFromCenterAndSize(e240, t) {
        const r = _vector$b.copy(t).multiplyScalar(0.5);
        return this.min.copy(e240).sub(r), this.max.copy(e240).add(r), this;
    }
    setFromObject(e241) {
        return this.makeEmpty(), this.expandByObject(e241);
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    copy(e242) {
        return this.min.copy(e242.min), this.max.copy(e242.max), this;
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(e243) {
        return void 0 === e243 && (console.warn("THREE.Box3: .getCenter() target is now required"), e243 = new Vector3), this.isEmpty() ? e243.set(0, 0, 0) : e243.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e244) {
        return void 0 === e244 && (console.warn("THREE.Box3: .getSize() target is now required"), e244 = new Vector3), this.isEmpty() ? e244.set(0, 0, 0) : e244.subVectors(this.max, this.min);
    }
    expandByPoint(e245) {
        return this.min.min(e245), this.max.max(e245), this;
    }
    expandByVector(e246) {
        return this.min.sub(e246), this.max.add(e246), this;
    }
    expandByScalar(e247) {
        return this.min.addScalar(-e247), this.max.addScalar(e247), this;
    }
    expandByObject(e249) {
        e249.updateWorldMatrix(!1, !1);
        const t = e249.geometry;
        void 0 !== t && (null === t.boundingBox && t.computeBoundingBox(), _box$3.copy(t.boundingBox), _box$3.applyMatrix4(e249.matrixWorld), this.union(_box$3));
        const r = e249.children;
        for(let e248 = 0, t2 = r.length; e248 < t2; e248++)this.expandByObject(r[e248]);
        return this;
    }
    containsPoint(e250) {
        return !(e250.x < this.min.x || e250.x > this.max.x || e250.y < this.min.y || e250.y > this.max.y || e250.z < this.min.z || e250.z > this.max.z);
    }
    containsBox(e251) {
        return this.min.x <= e251.min.x && e251.max.x <= this.max.x && this.min.y <= e251.min.y && e251.max.y <= this.max.y && this.min.z <= e251.min.z && e251.max.z <= this.max.z;
    }
    getParameter(e252, t) {
        return void 0 === t && (console.warn("THREE.Box3: .getParameter() target is now required"), t = new Vector3), t.set((e252.x - this.min.x) / (this.max.x - this.min.x), (e252.y - this.min.y) / (this.max.y - this.min.y), (e252.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(e253) {
        return !(e253.max.x < this.min.x || e253.min.x > this.max.x || e253.max.y < this.min.y || e253.min.y > this.max.y || e253.max.z < this.min.z || e253.min.z > this.max.z);
    }
    intersectsSphere(e254) {
        return this.clampPoint(e254.center, _vector$b), _vector$b.distanceToSquared(e254.center) <= e254.radius * e254.radius;
    }
    intersectsPlane(e255) {
        let t, r;
        return e255.normal.x > 0 ? (t = e255.normal.x * this.min.x, r = e255.normal.x * this.max.x) : (t = e255.normal.x * this.max.x, r = e255.normal.x * this.min.x), e255.normal.y > 0 ? (t += e255.normal.y * this.min.y, r += e255.normal.y * this.max.y) : (t += e255.normal.y * this.max.y, r += e255.normal.y * this.min.y), e255.normal.z > 0 ? (t += e255.normal.z * this.min.z, r += e255.normal.z * this.max.z) : (t += e255.normal.z * this.max.z, r += e255.normal.z * this.min.z), t <= -e255.constant && r >= -e255.constant;
    }
    intersectsTriangle(e256) {
        if (this.isEmpty()) return !1;
        this.getCenter(_center), _extents.subVectors(this.max, _center), _v0$2.subVectors(e256.a, _center), _v1$7.subVectors(e256.b, _center), _v2$3.subVectors(e256.c, _center), _f0.subVectors(_v1$7, _v0$2), _f1.subVectors(_v2$3, _v1$7), _f2.subVectors(_v0$2, _v2$3);
        let t = [
            0,
            -_f0.z,
            _f0.y,
            0,
            -_f1.z,
            _f1.y,
            0,
            -_f2.z,
            _f2.y,
            _f0.z,
            0,
            -_f0.x,
            _f1.z,
            0,
            -_f1.x,
            _f2.z,
            0,
            -_f2.x,
            -_f0.y,
            _f0.x,
            0,
            -_f1.y,
            _f1.x,
            0,
            -_f2.y,
            _f2.x,
            0
        ];
        return !!satForAxes(t, _v0$2, _v1$7, _v2$3, _extents) && !!satForAxes(t = [
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1
        ], _v0$2, _v1$7, _v2$3, _extents) && (_triangleNormal.crossVectors(_f0, _f1), satForAxes(t = [
            _triangleNormal.x,
            _triangleNormal.y,
            _triangleNormal.z
        ], _v0$2, _v1$7, _v2$3, _extents));
    }
    clampPoint(e257, t) {
        return void 0 === t && (console.warn("THREE.Box3: .clampPoint() target is now required"), t = new Vector3), t.copy(e257).clamp(this.min, this.max);
    }
    distanceToPoint(e258) {
        return _vector$b.copy(e258).clamp(this.min, this.max).sub(e258).length();
    }
    getBoundingSphere(e259) {
        return void 0 === e259 && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(e259.center), e259.radius = 0.5 * this.getSize(_vector$b).length(), e259;
    }
    intersect(e260) {
        return this.min.max(e260.min), this.max.min(e260.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(e261) {
        return this.min.min(e261.min), this.max.max(e261.max), this;
    }
    applyMatrix4(e262) {
        return this.isEmpty() ? this : (_points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e262), _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e262), _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e262), _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e262), _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e262), _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e262), _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e262), _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e262), this.setFromPoints(_points), this);
    }
    translate(e263) {
        return this.min.add(e263), this.max.add(e263), this;
    }
    equals(e264) {
        return e264.min.equals(this.min) && e264.max.equals(this.max);
    }
}
Box3.prototype.isBox3 = !0;
const _points = [
    new Vector3,
    new Vector3,
    new Vector3,
    new Vector3,
    new Vector3,
    new Vector3,
    new Vector3,
    new Vector3
], _vector$b = new Vector3, _box$3 = new Box3, _v0$2 = new Vector3, _v1$7 = new Vector3, _v2$3 = new Vector3, _f0 = new Vector3, _f1 = new Vector3, _f2 = new Vector3, _center = new Vector3, _extents = new Vector3, _triangleNormal = new Vector3, _testAxis = new Vector3;
function satForAxes(e265, t, r, n, i) {
    for(let a = 0, o = e265.length - 3; a <= o; a += 3){
        _testAxis.fromArray(e265, a);
        const o = i.x * Math.abs(_testAxis.x) + i.y * Math.abs(_testAxis.y) + i.z * Math.abs(_testAxis.z), s = t.dot(_testAxis), l = r.dot(_testAxis), c = n.dot(_testAxis);
        if (Math.max(-Math.max(s, l, c), Math.min(s, l, c)) > o) return !1;
    }
    return !0;
}
const _box$2 = new Box3, _v1$6 = new Vector3, _toFarthestPoint = new Vector3, _toPoint = new Vector3;
class Sphere {
    constructor(e266 = new Vector3, t = -1){
        this.center = e266, this.radius = t;
    }
    set(e267, t) {
        return this.center.copy(e267), this.radius = t, this;
    }
    setFromPoints(e268, t) {
        const r = this.center;
        void 0 !== t ? r.copy(t) : _box$2.setFromPoints(e268).getCenter(r);
        let n = 0;
        for(let t3 = 0, i = e268.length; t3 < i; t3++)n = Math.max(n, r.distanceToSquared(e268[t3]));
        return this.radius = Math.sqrt(n), this;
    }
    copy(e269) {
        return this.center.copy(e269.center), this.radius = e269.radius, this;
    }
    isEmpty() {
        return this.radius < 0;
    }
    makeEmpty() {
        return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(e270) {
        return e270.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(e271) {
        return e271.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(e272) {
        const t = this.radius + e272.radius;
        return e272.center.distanceToSquared(this.center) <= t * t;
    }
    intersectsBox(e273) {
        return e273.intersectsSphere(this);
    }
    intersectsPlane(e274) {
        return Math.abs(e274.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(e275, t) {
        const r = this.center.distanceToSquared(e275);
        return void 0 === t && (console.warn("THREE.Sphere: .clampPoint() target is now required"), t = new Vector3), t.copy(e275), r > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
    }
    getBoundingBox(e276) {
        return void 0 === e276 && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), e276 = new Box3), this.isEmpty() ? (e276.makeEmpty(), e276) : (e276.set(this.center, this.center), e276.expandByScalar(this.radius), e276);
    }
    applyMatrix4(e277) {
        return this.center.applyMatrix4(e277), this.radius = this.radius * e277.getMaxScaleOnAxis(), this;
    }
    translate(e278) {
        return this.center.add(e278), this;
    }
    expandByPoint(e279) {
        _toPoint.subVectors(e279, this.center);
        const t = _toPoint.lengthSq();
        if (t > this.radius * this.radius) {
            const e280 = Math.sqrt(t), r = 0.5 * (e280 - this.radius);
            this.center.add(_toPoint.multiplyScalar(r / e280)), this.radius += r;
        }
        return this;
    }
    union(e281) {
        return _toFarthestPoint.subVectors(e281.center, this.center).normalize().multiplyScalar(e281.radius), this.expandByPoint(_v1$6.copy(e281.center).add(_toFarthestPoint)), this.expandByPoint(_v1$6.copy(e281.center).sub(_toFarthestPoint)), this;
    }
    equals(e282) {
        return e282.center.equals(this.center) && e282.radius === this.radius;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
}
const _vector$a = new Vector3, _segCenter = new Vector3, _segDir = new Vector3, _diff = new Vector3, _edge1 = new Vector3, _edge2 = new Vector3, _normal$1 = new Vector3;
class Ray {
    constructor(e283 = new Vector3, t = new Vector3(0, 0, -1)){
        this.origin = e283, this.direction = t;
    }
    set(e284, t) {
        return this.origin.copy(e284), this.direction.copy(t), this;
    }
    copy(e285) {
        return this.origin.copy(e285.origin), this.direction.copy(e285.direction), this;
    }
    at(e286, t) {
        return void 0 === t && (console.warn("THREE.Ray: .at() target is now required"), t = new Vector3), t.copy(this.direction).multiplyScalar(e286).add(this.origin);
    }
    lookAt(e287) {
        return this.direction.copy(e287).sub(this.origin).normalize(), this;
    }
    recast(e288) {
        return this.origin.copy(this.at(e288, _vector$a)), this;
    }
    closestPointToPoint(e289, t) {
        void 0 === t && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), t = new Vector3), t.subVectors(e289, this.origin);
        const r = t.dot(this.direction);
        return r < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(r).add(this.origin);
    }
    distanceToPoint(e290) {
        return Math.sqrt(this.distanceSqToPoint(e290));
    }
    distanceSqToPoint(e291) {
        const t = _vector$a.subVectors(e291, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e291) : (_vector$a.copy(this.direction).multiplyScalar(t).add(this.origin), _vector$a.distanceToSquared(e291));
    }
    distanceSqToSegment(e292, t, r, n) {
        _segCenter.copy(e292).add(t).multiplyScalar(0.5), _segDir.copy(t).sub(e292).normalize(), _diff.copy(this.origin).sub(_segCenter);
        const i = 0.5 * e292.distanceTo(t), a = -this.direction.dot(_segDir), o = _diff.dot(this.direction), s = -_diff.dot(_segDir), l = _diff.lengthSq(), c = Math.abs(1 - a * a);
        let h, u, d, p;
        if (c > 0) {
            if (u = a * o - s, p = i * c, (h = a * s - o) >= 0) {
                if (u >= -p) {
                    if (u <= p) {
                        const e293 = 1 / c;
                        d = (h *= e293) * (h + a * (u *= e293) + 2 * o) + u * (a * h + u + 2 * s) + l;
                    } else u = i, d = -(h = Math.max(0, -(a * u + o))) * h + u * (u + 2 * s) + l;
                } else u = -i, d = -(h = Math.max(0, -(a * u + o))) * h + u * (u + 2 * s) + l;
            } else u <= -p ? d = -(h = Math.max(0, -(-a * i + o))) * h + (u = h > 0 ? -i : Math.min(Math.max(-i, -s), i)) * (u + 2 * s) + l : u <= p ? (h = 0, d = (u = Math.min(Math.max(-i, -s), i)) * (u + 2 * s) + l) : d = -(h = Math.max(0, -(a * i + o))) * h + (u = h > 0 ? i : Math.min(Math.max(-i, -s), i)) * (u + 2 * s) + l;
        } else u = a > 0 ? -i : i, d = -(h = Math.max(0, -(a * u + o))) * h + u * (u + 2 * s) + l;
        return r && r.copy(this.direction).multiplyScalar(h).add(this.origin), n && n.copy(_segDir).multiplyScalar(u).add(_segCenter), d;
    }
    intersectSphere(e294, t) {
        _vector$a.subVectors(e294.center, this.origin);
        const r = _vector$a.dot(this.direction), n = _vector$a.dot(_vector$a) - r * r, i = e294.radius * e294.radius;
        if (n > i) return null;
        const a = Math.sqrt(i - n), o = r - a, s = r + a;
        return o < 0 && s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
    }
    intersectsSphere(e295) {
        return this.distanceSqToPoint(e295.center) <= e295.radius * e295.radius;
    }
    distanceToPlane(e296) {
        const t = e296.normal.dot(this.direction);
        if (0 === t) return 0 === e296.distanceToPoint(this.origin) ? 0 : null;
        const r = -(this.origin.dot(e296.normal) + e296.constant) / t;
        return r >= 0 ? r : null;
    }
    intersectPlane(e297, t) {
        const r = this.distanceToPlane(e297);
        return null === r ? null : this.at(r, t);
    }
    intersectsPlane(e298) {
        const t = e298.distanceToPoint(this.origin);
        return 0 === t || e298.normal.dot(this.direction) * t < 0;
    }
    intersectBox(e299, t) {
        let r, n, i, a, o, s;
        const l = 1 / this.direction.x, c = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin;
        return l >= 0 ? (r = (e299.min.x - u.x) * l, n = (e299.max.x - u.x) * l) : (r = (e299.max.x - u.x) * l, n = (e299.min.x - u.x) * l), c >= 0 ? (i = (e299.min.y - u.y) * c, a = (e299.max.y - u.y) * c) : (i = (e299.max.y - u.y) * c, a = (e299.min.y - u.y) * c), r > a || i > n ? null : ((i > r || r != r) && (r = i), (a < n || n != n) && (n = a), h >= 0 ? (o = (e299.min.z - u.z) * h, s = (e299.max.z - u.z) * h) : (o = (e299.max.z - u.z) * h, s = (e299.min.z - u.z) * h), r > s || o > n ? null : ((o > r || r != r) && (r = o), (s < n || n != n) && (n = s), n < 0 ? null : this.at(r >= 0 ? r : n, t)));
    }
    intersectsBox(e300) {
        return null !== this.intersectBox(e300, _vector$a);
    }
    intersectTriangle(e301, t, r, n, i) {
        _edge1.subVectors(t, e301), _edge2.subVectors(r, e301), _normal$1.crossVectors(_edge1, _edge2);
        let a, o = this.direction.dot(_normal$1);
        if (o > 0) {
            if (n) return null;
            a = 1;
        } else {
            if (!(o < 0)) return null;
            a = -1, o = -o;
        }
        _diff.subVectors(this.origin, e301);
        const s = a * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
        if (s < 0) return null;
        const l = a * this.direction.dot(_edge1.cross(_diff));
        if (l < 0) return null;
        if (s + l > o) return null;
        const c = -a * _diff.dot(_normal$1);
        return c < 0 ? null : this.at(c / o, i);
    }
    applyMatrix4(e302) {
        return this.origin.applyMatrix4(e302), this.direction.transformDirection(e302), this;
    }
    equals(e303) {
        return e303.origin.equals(this.origin) && e303.direction.equals(this.direction);
    }
    clone() {
        return (new this.constructor).copy(this);
    }
}
class Matrix4 {
    constructor(){
        this.elements = [
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
    }
    set(e304, t, r, n, i, a, o, s, l, c, h, u, d, p, m, f) {
        const g = this.elements;
        return g[0] = e304, g[4] = t, g[8] = r, g[12] = n, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = m, g[15] = f, this;
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
        return (new Matrix4).fromArray(this.elements);
    }
    copy(e305) {
        const t = this.elements, r = e305.elements;
        return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], t[6] = r[6], t[7] = r[7], t[8] = r[8], t[9] = r[9], t[10] = r[10], t[11] = r[11], t[12] = r[12], t[13] = r[13], t[14] = r[14], t[15] = r[15], this;
    }
    copyPosition(e306) {
        const t = this.elements, r = e306.elements;
        return t[12] = r[12], t[13] = r[13], t[14] = r[14], this;
    }
    setFromMatrix3(e307) {
        const t = e307.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(e308, t, r) {
        return e308.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), r.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(e309, t, r) {
        return this.set(e309.x, t.x, r.x, 0, e309.y, t.y, r.y, 0, e309.z, t.z, r.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(e310) {
        const t = this.elements, r = e310.elements, n = 1 / _v1$5.setFromMatrixColumn(e310, 0).length(), i = 1 / _v1$5.setFromMatrixColumn(e310, 1).length(), a = 1 / _v1$5.setFromMatrixColumn(e310, 2).length();
        return t[0] = r[0] * n, t[1] = r[1] * n, t[2] = r[2] * n, t[3] = 0, t[4] = r[4] * i, t[5] = r[5] * i, t[6] = r[6] * i, t[7] = 0, t[8] = r[8] * a, t[9] = r[9] * a, t[10] = r[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromEuler(e311) {
        e311 && e311.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        const t = this.elements, r = e311.x, n = e311.y, i = e311.z, a = Math.cos(r), o = Math.sin(r), s = Math.cos(n), l = Math.sin(n), c = Math.cos(i), h = Math.sin(i);
        if ("XYZ" === e311.order) {
            const e312 = a * c, r = a * h, n = o * c, i = o * h;
            t[0] = s * c, t[4] = -s * h, t[8] = l, t[1] = r + n * l, t[5] = e312 - i * l, t[9] = -o * s, t[2] = i - e312 * l, t[6] = n + r * l, t[10] = a * s;
        } else if ("YXZ" === e311.order) {
            const e313 = s * c, r = s * h, n = l * c, i = l * h;
            t[0] = e313 + i * o, t[4] = n * o - r, t[8] = a * l, t[1] = a * h, t[5] = a * c, t[9] = -o, t[2] = r * o - n, t[6] = i + e313 * o, t[10] = a * s;
        } else if ("ZXY" === e311.order) {
            const e314 = s * c, r = s * h, n = l * c, i = l * h;
            t[0] = e314 - i * o, t[4] = -a * h, t[8] = n + r * o, t[1] = r + n * o, t[5] = a * c, t[9] = i - e314 * o, t[2] = -a * l, t[6] = o, t[10] = a * s;
        } else if ("ZYX" === e311.order) {
            const e315 = a * c, r = a * h, n = o * c, i = o * h;
            t[0] = s * c, t[4] = n * l - r, t[8] = e315 * l + i, t[1] = s * h, t[5] = i * l + e315, t[9] = r * l - n, t[2] = -l, t[6] = o * s, t[10] = a * s;
        } else if ("YZX" === e311.order) {
            const e316 = a * s, r = a * l, n = o * s, i = o * l;
            t[0] = s * c, t[4] = i - e316 * h, t[8] = n * h + r, t[1] = h, t[5] = a * c, t[9] = -o * c, t[2] = -l * c, t[6] = r * h + n, t[10] = e316 - i * h;
        } else if ("XZY" === e311.order) {
            const e317 = a * s, r = a * l, n = o * s, i = o * l;
            t[0] = s * c, t[4] = -h, t[8] = l * c, t[1] = e317 * h + i, t[5] = a * c, t[9] = r * h - n, t[2] = n * h - r, t[6] = o * c, t[10] = i * h + e317;
        }
        return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromQuaternion(e318) {
        return this.compose(_zero, e318, _one);
    }
    lookAt(e319, t, r) {
        const n = this.elements;
        return _z.subVectors(e319, t), 0 === _z.lengthSq() && (_z.z = 1), _z.normalize(), _x.crossVectors(r, _z), 0 === _x.lengthSq() && (1 === Math.abs(r.z) ? _z.x += 0.0001 : _z.z += 0.0001, _z.normalize(), _x.crossVectors(r, _z)), _x.normalize(), _y.crossVectors(_z, _x), n[0] = _x.x, n[4] = _y.x, n[8] = _z.x, n[1] = _x.y, n[5] = _y.y, n[9] = _z.y, n[2] = _x.z, n[6] = _y.z, n[10] = _z.z, this;
    }
    multiply(e320, t) {
        return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e320, t)) : this.multiplyMatrices(this, e320);
    }
    premultiply(e321) {
        return this.multiplyMatrices(e321, this);
    }
    multiplyMatrices(e322, t) {
        const r = e322.elements, n = t.elements, i = this.elements, a = r[0], o = r[4], s = r[8], l = r[12], c = r[1], h = r[5], u = r[9], d = r[13], p = r[2], m = r[6], f = r[10], g = r[14], v = r[3], _ = r[7], y = r[11], x = r[15], b = n[0], M = n[4], w = n[8], S = n[12], T = n[1], E = n[5], A = n[9], L = n[13], C = n[2], R = n[6], P = n[10], B = n[14], D = n[3], I = n[7], G = n[11], F = n[15];
        return i[0] = a * b + o * T + s * C + l * D, i[4] = a * M + o * E + s * R + l * I, i[8] = a * w + o * A + s * P + l * G, i[12] = a * S + o * L + s * B + l * F, i[1] = c * b + h * T + u * C + d * D, i[5] = c * M + h * E + u * R + d * I, i[9] = c * w + h * A + u * P + d * G, i[13] = c * S + h * L + u * B + d * F, i[2] = p * b + m * T + f * C + g * D, i[6] = p * M + m * E + f * R + g * I, i[10] = p * w + m * A + f * P + g * G, i[14] = p * S + m * L + f * B + g * F, i[3] = v * b + _ * T + y * C + x * D, i[7] = v * M + _ * E + y * R + x * I, i[11] = v * w + _ * A + y * P + x * G, i[15] = v * S + _ * L + y * B + x * F, this;
    }
    multiplyScalar(e323) {
        const t = this.elements;
        return t[0] *= e323, t[4] *= e323, t[8] *= e323, t[12] *= e323, t[1] *= e323, t[5] *= e323, t[9] *= e323, t[13] *= e323, t[2] *= e323, t[6] *= e323, t[10] *= e323, t[14] *= e323, t[3] *= e323, t[7] *= e323, t[11] *= e323, t[15] *= e323, this;
    }
    determinant() {
        const e324 = this.elements, t = e324[0], r = e324[4], n = e324[8], i = e324[12], a = e324[1], o = e324[5], s = e324[9], l = e324[13], c = e324[2], h = e324[6], u = e324[10], d = e324[14];
        return e324[3] * (+i * s * h - n * l * h - i * o * u + r * l * u + n * o * d - r * s * d) + e324[7] * (+t * s * d - t * l * u + i * a * u - n * a * d + n * l * c - i * s * c) + e324[11] * (+t * l * h - t * o * d - i * a * h + r * a * d + i * o * c - r * l * c) + e324[15] * (-n * o * c - t * s * h + t * o * u + n * a * h - r * a * u + r * s * c);
    }
    transpose() {
        const e325 = this.elements;
        let t;
        return t = e325[1], e325[1] = e325[4], e325[4] = t, t = e325[2], e325[2] = e325[8], e325[8] = t, t = e325[6], e325[6] = e325[9], e325[9] = t, t = e325[3], e325[3] = e325[12], e325[12] = t, t = e325[7], e325[7] = e325[13], e325[13] = t, t = e325[11], e325[11] = e325[14], e325[14] = t, this;
    }
    setPosition(e326, t, r) {
        const n = this.elements;
        return e326.isVector3 ? (n[12] = e326.x, n[13] = e326.y, n[14] = e326.z) : (n[12] = e326, n[13] = t, n[14] = r), this;
    }
    invert() {
        const e327 = this.elements, t = e327[0], r = e327[1], n = e327[2], i = e327[3], a = e327[4], o = e327[5], s = e327[6], l = e327[7], c = e327[8], h = e327[9], u = e327[10], d = e327[11], p = e327[12], m = e327[13], f = e327[14], g = e327[15], v = h * f * l - m * u * l + m * s * d - o * f * d - h * s * g + o * u * g, _ = p * u * l - c * f * l - p * s * d + a * f * d + c * s * g - a * u * g, y = c * m * l - p * h * l + p * o * d - a * m * d - c * o * g + a * h * g, x = p * h * s - c * m * s - p * o * u + a * m * u + c * o * f - a * h * f, b = t * v + r * _ + n * y + i * x;
        if (0 === b) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const M = 1 / b;
        return e327[0] = v * M, e327[1] = (m * u * i - h * f * i - m * n * d + r * f * d + h * n * g - r * u * g) * M, e327[2] = (o * f * i - m * s * i + m * n * l - r * f * l - o * n * g + r * s * g) * M, e327[3] = (h * s * i - o * u * i - h * n * l + r * u * l + o * n * d - r * s * d) * M, e327[4] = _ * M, e327[5] = (c * f * i - p * u * i + p * n * d - t * f * d - c * n * g + t * u * g) * M, e327[6] = (p * s * i - a * f * i - p * n * l + t * f * l + a * n * g - t * s * g) * M, e327[7] = (a * u * i - c * s * i + c * n * l - t * u * l - a * n * d + t * s * d) * M, e327[8] = y * M, e327[9] = (p * h * i - c * m * i - p * r * d + t * m * d + c * r * g - t * h * g) * M, e327[10] = (a * m * i - p * o * i + p * r * l - t * m * l - a * r * g + t * o * g) * M, e327[11] = (c * o * i - a * h * i - c * r * l + t * h * l + a * r * d - t * o * d) * M, e327[12] = x * M, e327[13] = (c * m * n - p * h * n + p * r * u - t * m * u - c * r * f + t * h * f) * M, e327[14] = (p * o * n - a * m * n - p * r * s + t * m * s + a * r * f - t * o * f) * M, e327[15] = (a * h * n - c * o * n + c * r * s - t * h * s - a * r * u + t * o * u) * M, this;
    }
    scale(e328) {
        const t = this.elements, r = e328.x, n = e328.y, i = e328.z;
        return t[0] *= r, t[4] *= n, t[8] *= i, t[1] *= r, t[5] *= n, t[9] *= i, t[2] *= r, t[6] *= n, t[10] *= i, t[3] *= r, t[7] *= n, t[11] *= i, this;
    }
    getMaxScaleOnAxis() {
        const e329 = this.elements, t = e329[0] * e329[0] + e329[1] * e329[1] + e329[2] * e329[2], r = e329[4] * e329[4] + e329[5] * e329[5] + e329[6] * e329[6], n = e329[8] * e329[8] + e329[9] * e329[9] + e329[10] * e329[10];
        return Math.sqrt(Math.max(t, r, n));
    }
    makeTranslation(e330, t, r) {
        return this.set(1, 0, 0, e330, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1), this;
    }
    makeRotationX(e331) {
        const t = Math.cos(e331), r = Math.sin(e331);
        return this.set(1, 0, 0, 0, 0, t, -r, 0, 0, r, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(e332) {
        const t = Math.cos(e332), r = Math.sin(e332);
        return this.set(t, 0, r, 0, 0, 1, 0, 0, -r, 0, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(e333) {
        const t = Math.cos(e333), r = Math.sin(e333);
        return this.set(t, -r, 0, 0, r, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(e334, t) {
        const r = Math.cos(t), n = Math.sin(t), i = 1 - r, a = e334.x, o = e334.y, s = e334.z, l = i * a, c = i * o;
        return this.set(l * a + r, l * o - n * s, l * s + n * o, 0, l * o + n * s, c * o + r, c * s - n * a, 0, l * s - n * o, c * s + n * a, i * s * s + r, 0, 0, 0, 0, 1), this;
    }
    makeScale(e335, t, r) {
        return this.set(e335, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1), this;
    }
    makeShear(e336, t, r) {
        return this.set(1, t, r, 0, e336, 1, r, 0, e336, t, 1, 0, 0, 0, 0, 1), this;
    }
    compose(e337, t, r) {
        const n = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, l = i + i, c = a + a, h = o + o, u = i * l, d = i * c, p = i * h, m = a * c, f = a * h, g = o * h, v = s * l, _ = s * c, y = s * h, x = r.x, b = r.y, M = r.z;
        return n[0] = (1 - (m + g)) * x, n[1] = (d + y) * x, n[2] = (p - _) * x, n[3] = 0, n[4] = (d - y) * b, n[5] = (1 - (u + g)) * b, n[6] = (f + v) * b, n[7] = 0, n[8] = (p + _) * M, n[9] = (f - v) * M, n[10] = (1 - (u + m)) * M, n[11] = 0, n[12] = e337.x, n[13] = e337.y, n[14] = e337.z, n[15] = 1, this;
    }
    decompose(e338, t, r) {
        const n = this.elements;
        let i = _v1$5.set(n[0], n[1], n[2]).length();
        const a = _v1$5.set(n[4], n[5], n[6]).length(), o = _v1$5.set(n[8], n[9], n[10]).length();
        this.determinant() < 0 && (i = -i), e338.x = n[12], e338.y = n[13], e338.z = n[14], _m1$2.copy(this);
        const s = 1 / i, l = 1 / a, c = 1 / o;
        return _m1$2.elements[0] *= s, _m1$2.elements[1] *= s, _m1$2.elements[2] *= s, _m1$2.elements[4] *= l, _m1$2.elements[5] *= l, _m1$2.elements[6] *= l, _m1$2.elements[8] *= c, _m1$2.elements[9] *= c, _m1$2.elements[10] *= c, t.setFromRotationMatrix(_m1$2), r.x = i, r.y = a, r.z = o, this;
    }
    makePerspective(e339, t, r, n, i, a) {
        void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
        const o = this.elements, s = 2 * i / (t - e339), l = 2 * i / (r - n), c = (t + e339) / (t - e339), h = (r + n) / (r - n), u = -(a + i) / (a - i), d = -2 * a * i / (a - i);
        return o[0] = s, o[4] = 0, o[8] = c, o[12] = 0, o[1] = 0, o[5] = l, o[9] = h, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = d, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
    }
    makeOrthographic(e340, t, r, n, i, a) {
        const o = this.elements, s = 1 / (t - e340), l = 1 / (r - n), c = 1 / (a - i), h = (t + e340) * s, u = (r + n) * l, d = (a + i) * c;
        return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -h, o[1] = 0, o[5] = 2 * l, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * c, o[14] = -d, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
    }
    equals(e342) {
        const t = this.elements, r = e342.elements;
        for(let e341 = 0; e341 < 16; e341++)if (t[e341] !== r[e341]) return !1;
        return !0;
    }
    fromArray(e343, t = 0) {
        for(let r = 0; r < 16; r++)this.elements[r] = e343[r + t];
        return this;
    }
    toArray(e344 = [], t = 0) {
        const r = this.elements;
        return e344[t] = r[0], e344[t + 1] = r[1], e344[t + 2] = r[2], e344[t + 3] = r[3], e344[t + 4] = r[4], e344[t + 5] = r[5], e344[t + 6] = r[6], e344[t + 7] = r[7], e344[t + 8] = r[8], e344[t + 9] = r[9], e344[t + 10] = r[10], e344[t + 11] = r[11], e344[t + 12] = r[12], e344[t + 13] = r[13], e344[t + 14] = r[14], e344[t + 15] = r[15], e344;
    }
}
Matrix4.prototype.isMatrix4 = !0;
const _v1$5 = new Vector3, _m1$2 = new Matrix4, _zero = new Vector3(0, 0, 0), _one = new Vector3(1, 1, 1), _x = new Vector3, _y = new Vector3, _z = new Vector3, _matrix$1 = new Matrix4, _quaternion$3 = new Quaternion;
class Euler {
    constructor(e345 = 0, t = 0, r = 0, n = Euler.DefaultOrder){
        this._x = e345, this._y = t, this._z = r, this._order = n;
    }
    get x() {
        return this._x;
    }
    set x(e346) {
        this._x = e346, this._onChangeCallback();
    }
    get y() {
        return this._y;
    }
    set y(e347) {
        this._y = e347, this._onChangeCallback();
    }
    get z() {
        return this._z;
    }
    set z(e348) {
        this._z = e348, this._onChangeCallback();
    }
    get order() {
        return this._order;
    }
    set order(e349) {
        this._order = e349, this._onChangeCallback();
    }
    set(e350, t, r, n) {
        return this._x = e350, this._y = t, this._z = r, this._order = n || this._order, this._onChangeCallback(), this;
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e351) {
        return this._x = e351._x, this._y = e351._y, this._z = e351._z, this._order = e351._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e352, t, r) {
        const n = e352.elements, i = n[0], a = n[4], o = n[8], s = n[1], l = n[5], c = n[9], h = n[2], u = n[6], d = n[10];
        switch(t = t || this._order){
            case "XYZ":
                this._y = Math.asin(clamp(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(u, l), this._z = 0);
                break;
            case "YXZ":
                this._x = Math.asin(-clamp(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._y = Math.atan2(o, d), this._z = Math.atan2(s, l)) : (this._y = Math.atan2(-h, i), this._z = 0);
                break;
            case "ZXY":
                this._x = Math.asin(clamp(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(s, i));
                break;
            case "ZYX":
                this._y = Math.asin(-clamp(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(s, i)) : (this._x = 0, this._z = Math.atan2(-a, l));
                break;
            case "YZX":
                this._z = Math.asin(clamp(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, i)) : (this._x = 0, this._y = Math.atan2(o, d));
                break;
            case "XZY":
                this._z = Math.asin(-clamp(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-c, d), this._y = 0);
                break;
            default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
        }
        return this._order = t, !1 !== r && this._onChangeCallback(), this;
    }
    setFromQuaternion(e353, t, r) {
        return _matrix$1.makeRotationFromQuaternion(e353), this.setFromRotationMatrix(_matrix$1, t, r);
    }
    setFromVector3(e354, t) {
        return this.set(e354.x, e354.y, e354.z, t || this._order);
    }
    reorder(e355) {
        return _quaternion$3.setFromEuler(this), this.setFromQuaternion(_quaternion$3, e355);
    }
    equals(e356) {
        return e356._x === this._x && e356._y === this._y && e356._z === this._z && e356._order === this._order;
    }
    fromArray(e357) {
        return this._x = e357[0], this._y = e357[1], this._z = e357[2], void 0 !== e357[3] && (this._order = e357[3]), this._onChangeCallback(), this;
    }
    toArray(e358 = [], t = 0) {
        return e358[t] = this._x, e358[t + 1] = this._y, e358[t + 2] = this._z, e358[t + 3] = this._order, e358;
    }
    toVector3(e359) {
        return e359 ? e359.set(this._x, this._y, this._z) : new Vector3(this._x, this._y, this._z);
    }
    _onChange(e360) {
        return this._onChangeCallback = e360, this;
    }
    _onChangeCallback() {}
}
Euler.prototype.isEuler = !0, Euler.DefaultOrder = "XYZ", Euler.RotationOrders = [
    "XYZ",
    "YZX",
    "ZXY",
    "XZY",
    "YXZ",
    "ZYX"
];
class Layers {
    constructor(){
        this.mask = 1;
    }
    set(e361) {
        this.mask = 1 << e361 | 0;
    }
    enable(e362) {
        this.mask |= 1 << e362 | 0;
    }
    enableAll() {
        this.mask = -1;
    }
    toggle(e363) {
        this.mask ^= 1 << e363 | 0;
    }
    disable(e364) {
        this.mask &= ~(1 << e364 | 0);
    }
    disableAll() {
        this.mask = 0;
    }
    test(e365) {
        return 0 != (this.mask & e365.mask);
    }
}
let _object3DId = 0;
const _v1$4 = new Vector3, _q1 = new Quaternion, _m1$1 = new Matrix4, _target = new Vector3, _position$3 = new Vector3, _scale$2 = new Vector3, _quaternion$2 = new Quaternion, _xAxis = new Vector3(1, 0, 0), _yAxis = new Vector3(0, 1, 0), _zAxis = new Vector3(0, 0, 1), _addedEvent = {
    type: "added"
}, _removedEvent = {
    type: "removed"
};
class Object3D extends EventDispatcher {
    constructor(){
        super(), Object.defineProperty(this, "id", {
            value: _object3DId++
        }), this.uuid = generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Object3D.DefaultUp.clone();
        const e366 = new Vector3, t = new Euler, r = new Quaternion, n = new Vector3(1, 1, 1);
        t._onChange(function() {
            r.setFromEuler(t, !1);
        }), r._onChange(function() {
            t.setFromQuaternion(r, void 0, !1);
        }), Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: e366
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: r
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            modelViewMatrix: {
                value: new Matrix4
            },
            normalMatrix: {
                value: new Matrix3
            }
        }), this.matrix = new Matrix4, this.matrixWorld = new Matrix4, this.matrixAutoUpdate = Object3D.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Layers, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e367) {
        this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e367), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(e368) {
        return this.quaternion.premultiply(e368), this;
    }
    setRotationFromAxisAngle(e369, t) {
        this.quaternion.setFromAxisAngle(e369, t);
    }
    setRotationFromEuler(e370) {
        this.quaternion.setFromEuler(e370, !0);
    }
    setRotationFromMatrix(e371) {
        this.quaternion.setFromRotationMatrix(e371);
    }
    setRotationFromQuaternion(e372) {
        this.quaternion.copy(e372);
    }
    rotateOnAxis(e373, t) {
        return _q1.setFromAxisAngle(e373, t), this.quaternion.multiply(_q1), this;
    }
    rotateOnWorldAxis(e374, t) {
        return _q1.setFromAxisAngle(e374, t), this.quaternion.premultiply(_q1), this;
    }
    rotateX(e375) {
        return this.rotateOnAxis(_xAxis, e375);
    }
    rotateY(e376) {
        return this.rotateOnAxis(_yAxis, e376);
    }
    rotateZ(e377) {
        return this.rotateOnAxis(_zAxis, e377);
    }
    translateOnAxis(e378, t) {
        return _v1$4.copy(e378).applyQuaternion(this.quaternion), this.position.add(_v1$4.multiplyScalar(t)), this;
    }
    translateX(e379) {
        return this.translateOnAxis(_xAxis, e379);
    }
    translateY(e380) {
        return this.translateOnAxis(_yAxis, e380);
    }
    translateZ(e381) {
        return this.translateOnAxis(_zAxis, e381);
    }
    localToWorld(e382) {
        return e382.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(e383) {
        return e383.applyMatrix4(_m1$1.copy(this.matrixWorld).invert());
    }
    lookAt(e384, t, r) {
        e384.isVector3 ? _target.copy(e384) : _target.set(e384, t, r);
        const n = this.parent;
        this.updateWorldMatrix(!0, !1), _position$3.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? _m1$1.lookAt(_position$3, _target, this.up) : _m1$1.lookAt(_target, _position$3, this.up), this.quaternion.setFromRotationMatrix(_m1$1), n && (_m1$1.extractRotation(n.matrixWorld), _q1.setFromRotationMatrix(_m1$1), this.quaternion.premultiply(_q1.invert()));
    }
    add(e386) {
        if (arguments.length > 1) {
            for(let e385 = 0; e385 < arguments.length; e385++)this.add(arguments[e385]);
            return this;
        }
        return e386 === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e386), this) : (e386 && e386.isObject3D ? (null !== e386.parent && e386.parent.remove(e386), e386.parent = this, this.children.push(e386), e386.dispatchEvent(_addedEvent)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e386), this);
    }
    remove(e388) {
        if (arguments.length > 1) {
            for(let e387 = 0; e387 < arguments.length; e387++)this.remove(arguments[e387]);
            return this;
        }
        const t = this.children.indexOf(e388);
        return -1 !== t && (e388.parent = null, this.children.splice(t, 1), e388.dispatchEvent(_removedEvent)), this;
    }
    clear() {
        for(let e389 = 0; e389 < this.children.length; e389++){
            const t = this.children[e389];
            t.parent = null, t.dispatchEvent(_removedEvent);
        }
        return this.children.length = 0, this;
    }
    attach(e390) {
        return this.updateWorldMatrix(!0, !1), _m1$1.copy(this.matrixWorld).invert(), null !== e390.parent && (e390.parent.updateWorldMatrix(!0, !1), _m1$1.multiply(e390.parent.matrixWorld)), e390.applyMatrix4(_m1$1), this.add(e390), e390.updateWorldMatrix(!1, !0), this;
    }
    getObjectById(e391) {
        return this.getObjectByProperty("id", e391);
    }
    getObjectByName(e392) {
        return this.getObjectByProperty("name", e392);
    }
    getObjectByProperty(e393, t) {
        if (this[e393] === t) return this;
        for(let r = 0, n = this.children.length; r < n; r++){
            const n = this.children[r].getObjectByProperty(e393, t);
            if (void 0 !== n) return n;
        }
    }
    getWorldPosition(e394) {
        return void 0 === e394 && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), e394 = new Vector3), this.updateWorldMatrix(!0, !1), e394.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(e395) {
        return void 0 === e395 && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), e395 = new Quaternion), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_position$3, e395, _scale$2), e395;
    }
    getWorldScale(e396) {
        return void 0 === e396 && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), e396 = new Vector3), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_position$3, _quaternion$2, e396), e396;
    }
    getWorldDirection(e397) {
        void 0 === e397 && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), e397 = new Vector3), this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e397.set(t[8], t[9], t[10]).normalize();
    }
    raycast() {}
    traverse(e398) {
        e398(this);
        const t = this.children;
        for(let r = 0, n = t.length; r < n; r++)t[r].traverse(e398);
    }
    traverseVisible(e399) {
        if (!1 === this.visible) return;
        e399(this);
        const t = this.children;
        for(let r = 0, n = t.length; r < n; r++)t[r].traverseVisible(e399);
    }
    traverseAncestors(e400) {
        const t = this.parent;
        null !== t && (e400(t), t.traverseAncestors(e400));
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
    }
    updateMatrixWorld(e401) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e401) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e401 = !0);
        const t = this.children;
        for(let r = 0, n = t.length; r < n; r++)t[r].updateMatrixWorld(e401);
    }
    updateWorldMatrix(e402, t) {
        const r = this.parent;
        if (!0 === e402 && null !== r && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === t) {
            const e403 = this.children;
            for(let t = 0, r = e403.length; t < r; t++)e403[t].updateWorldMatrix(!1, !0);
        }
    }
    toJSON(e404) {
        const t4 = void 0 === e404 || "string" == typeof e404, r1 = {};
        t4 && (e404 = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {}
        }, r1.metadata = {
            version: 4.5,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        const n3 = {};
        function i(t, r) {
            return void 0 === t[r.uuid] && (t[r.uuid] = r.toJSON(e404)), r.uuid;
        }
        if (n3.uuid = this.uuid, n3.type = this.type, "" !== this.name && (n3.name = this.name), !0 === this.castShadow && (n3.castShadow = !0), !0 === this.receiveShadow && (n3.receiveShadow = !0), !1 === this.visible && (n3.visible = !1), !1 === this.frustumCulled && (n3.frustumCulled = !1), 0 !== this.renderOrder && (n3.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n3.userData = this.userData), n3.layers = this.layers.mask, n3.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n3.matrixAutoUpdate = !1), this.isInstancedMesh && (n3.type = "InstancedMesh", n3.count = this.count, n3.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (n3.instanceColor = this.instanceColor.toJSON())), this.isMesh || this.isLine || this.isPoints) {
            n3.geometry = i(e404.geometries, this.geometry);
            const t = this.geometry.parameters;
            if (void 0 !== t && void 0 !== t.shapes) {
                const r = t.shapes;
                if (Array.isArray(r)) for(let t5 = 0, n = r.length; t5 < n; t5++){
                    const n = r[t5];
                    i(e404.shapes, n);
                }
                else i(e404.shapes, r);
            }
        }
        if (this.isSkinnedMesh && (n3.bindMode = this.bindMode, n3.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (i(e404.skeletons, this.skeleton), n3.skeleton = this.skeleton.uuid)), void 0 !== this.material) {
            if (Array.isArray(this.material)) {
                const t = [];
                for(let r = 0, n1 = this.material.length; r < n1; r++)t.push(i(e404.materials, this.material[r]));
                n3.material = t;
            } else n3.material = i(e404.materials, this.material);
        }
        if (this.children.length > 0) {
            n3.children = [];
            for(let t = 0; t < this.children.length; t++)n3.children.push(this.children[t].toJSON(e404).object);
        }
        if (this.animations.length > 0) {
            n3.animations = [];
            for(let t = 0; t < this.animations.length; t++){
                const r = this.animations[t];
                n3.animations.push(i(e404.animations, r));
            }
        }
        if (t4) {
            const t = a(e404.geometries), n = a(e404.materials), i = a(e404.textures), o = a(e404.images), s = a(e404.shapes), l = a(e404.skeletons), c = a(e404.animations);
            t.length > 0 && (r1.geometries = t), n.length > 0 && (r1.materials = n), i.length > 0 && (r1.textures = i), o.length > 0 && (r1.images = o), s.length > 0 && (r1.shapes = s), l.length > 0 && (r1.skeletons = l), c.length > 0 && (r1.animations = c);
        }
        return r1.object = n3, r1;
        function a(e405) {
            const t = [];
            for(const r in e405){
                const n = e405[r];
                delete n.metadata, t.push(n);
            }
            return t;
        }
    }
    clone(e406) {
        return (new this.constructor).copy(this, e406);
    }
    copy(e407, t = !0) {
        if (this.name = e407.name, this.up.copy(e407.up), this.position.copy(e407.position), this.rotation.order = e407.rotation.order, this.quaternion.copy(e407.quaternion), this.scale.copy(e407.scale), this.matrix.copy(e407.matrix), this.matrixWorld.copy(e407.matrixWorld), this.matrixAutoUpdate = e407.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e407.matrixWorldNeedsUpdate, this.layers.mask = e407.layers.mask, this.visible = e407.visible, this.castShadow = e407.castShadow, this.receiveShadow = e407.receiveShadow, this.frustumCulled = e407.frustumCulled, this.renderOrder = e407.renderOrder, this.userData = JSON.parse(JSON.stringify(e407.userData)), !0 === t) for(let t6 = 0; t6 < e407.children.length; t6++){
            const r = e407.children[t6];
            this.add(r.clone());
        }
        return this;
    }
}
Object3D.DefaultUp = new Vector3(0, 1, 0), Object3D.DefaultMatrixAutoUpdate = !0, Object3D.prototype.isObject3D = !0;
const _vector1 = new Vector3, _vector2$1 = new Vector3, _normalMatrix = new Matrix3;
class Plane {
    constructor(e408 = new Vector3(1, 0, 0), t = 0){
        this.normal = e408, this.constant = t;
    }
    set(e409, t) {
        return this.normal.copy(e409), this.constant = t, this;
    }
    setComponents(e410, t, r, n) {
        return this.normal.set(e410, t, r), this.constant = n, this;
    }
    setFromNormalAndCoplanarPoint(e411, t) {
        return this.normal.copy(e411), this.constant = -t.dot(this.normal), this;
    }
    setFromCoplanarPoints(e412, t, r) {
        const n = _vector1.subVectors(r, t).cross(_vector2$1.subVectors(e412, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(n, e412), this;
    }
    copy(e413) {
        return this.normal.copy(e413.normal), this.constant = e413.constant, this;
    }
    normalize() {
        const e414 = 1 / this.normal.length();
        return this.normal.multiplyScalar(e414), this.constant *= e414, this;
    }
    negate() {
        return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(e415) {
        return this.normal.dot(e415) + this.constant;
    }
    distanceToSphere(e416) {
        return this.distanceToPoint(e416.center) - e416.radius;
    }
    projectPoint(e417, t) {
        return void 0 === t && (console.warn("THREE.Plane: .projectPoint() target is now required"), t = new Vector3), t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e417)).add(e417);
    }
    intersectLine(e418, t) {
        void 0 === t && (console.warn("THREE.Plane: .intersectLine() target is now required"), t = new Vector3);
        const r = e418.delta(_vector1), n = this.normal.dot(r);
        if (0 === n) return 0 === this.distanceToPoint(e418.start) ? t.copy(e418.start) : null;
        const i = -(e418.start.dot(this.normal) + this.constant) / n;
        return i < 0 || i > 1 ? null : t.copy(r).multiplyScalar(i).add(e418.start);
    }
    intersectsLine(e419) {
        const t = this.distanceToPoint(e419.start), r = this.distanceToPoint(e419.end);
        return t < 0 && r > 0 || r < 0 && t > 0;
    }
    intersectsBox(e420) {
        return e420.intersectsPlane(this);
    }
    intersectsSphere(e421) {
        return e421.intersectsPlane(this);
    }
    coplanarPoint(e422) {
        return void 0 === e422 && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), e422 = new Vector3), e422.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(e423, t) {
        const r = t || _normalMatrix.getNormalMatrix(e423), n = this.coplanarPoint(_vector1).applyMatrix4(e423), i = this.normal.applyMatrix3(r).normalize();
        return this.constant = -n.dot(i), this;
    }
    translate(e424) {
        return this.constant -= e424.dot(this.normal), this;
    }
    equals(e425) {
        return e425.normal.equals(this.normal) && e425.constant === this.constant;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
}
Plane.prototype.isPlane = !0;
const _v0$1 = new Vector3, _v1$3 = new Vector3, _v2$2 = new Vector3, _v3$1 = new Vector3, _vab = new Vector3, _vac = new Vector3, _vbc = new Vector3, _vap = new Vector3, _vbp = new Vector3, _vcp = new Vector3;
class Triangle {
    constructor(e426 = new Vector3, t = new Vector3, r = new Vector3){
        this.a = e426, this.b = t, this.c = r;
    }
    static getNormal(e427, t, r, n) {
        void 0 === n && (console.warn("THREE.Triangle: .getNormal() target is now required"), n = new Vector3), n.subVectors(r, t), _v0$1.subVectors(e427, t), n.cross(_v0$1);
        const i = n.lengthSq();
        return i > 0 ? n.multiplyScalar(1 / Math.sqrt(i)) : n.set(0, 0, 0);
    }
    static getBarycoord(e428, t, r, n, i) {
        _v0$1.subVectors(n, t), _v1$3.subVectors(r, t), _v2$2.subVectors(e428, t);
        const a = _v0$1.dot(_v0$1), o = _v0$1.dot(_v1$3), s = _v0$1.dot(_v2$2), l = _v1$3.dot(_v1$3), c = _v1$3.dot(_v2$2), h = a * l - o * o;
        if (void 0 === i && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), i = new Vector3), 0 === h) return i.set(-2, -1, -1);
        const u = 1 / h, d = (l * s - o * c) * u, p = (a * c - o * s) * u;
        return i.set(1 - d - p, p, d);
    }
    static containsPoint(e429, t, r, n) {
        return this.getBarycoord(e429, t, r, n, _v3$1), _v3$1.x >= 0 && _v3$1.y >= 0 && _v3$1.x + _v3$1.y <= 1;
    }
    static getUV(e430, t, r, n, i, a, o, s) {
        return this.getBarycoord(e430, t, r, n, _v3$1), s.set(0, 0), s.addScaledVector(i, _v3$1.x), s.addScaledVector(a, _v3$1.y), s.addScaledVector(o, _v3$1.z), s;
    }
    static isFrontFacing(e431, t, r, n) {
        return _v0$1.subVectors(r, t), _v1$3.subVectors(e431, t), _v0$1.cross(_v1$3).dot(n) < 0;
    }
    set(e432, t, r) {
        return this.a.copy(e432), this.b.copy(t), this.c.copy(r), this;
    }
    setFromPointsAndIndices(e433, t, r, n) {
        return this.a.copy(e433[t]), this.b.copy(e433[r]), this.c.copy(e433[n]), this;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    copy(e434) {
        return this.a.copy(e434.a), this.b.copy(e434.b), this.c.copy(e434.c), this;
    }
    getArea() {
        return _v0$1.subVectors(this.c, this.b), _v1$3.subVectors(this.a, this.b), 0.5 * _v0$1.cross(_v1$3).length();
    }
    getMidpoint(e435) {
        return void 0 === e435 && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), e435 = new Vector3), e435.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(e436) {
        return Triangle.getNormal(this.a, this.b, this.c, e436);
    }
    getPlane(e437) {
        return void 0 === e437 && (console.warn("THREE.Triangle: .getPlane() target is now required"), e437 = new Plane), e437.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(e438, t) {
        return Triangle.getBarycoord(e438, this.a, this.b, this.c, t);
    }
    getUV(e439, t, r, n, i) {
        return Triangle.getUV(e439, this.a, this.b, this.c, t, r, n, i);
    }
    containsPoint(e440) {
        return Triangle.containsPoint(e440, this.a, this.b, this.c);
    }
    isFrontFacing(e441) {
        return Triangle.isFrontFacing(this.a, this.b, this.c, e441);
    }
    intersectsBox(e442) {
        return e442.intersectsTriangle(this);
    }
    closestPointToPoint(e443, t) {
        void 0 === t && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), t = new Vector3);
        const r = this.a, n = this.b, i = this.c;
        let a, o;
        _vab.subVectors(n, r), _vac.subVectors(i, r), _vap.subVectors(e443, r);
        const s = _vab.dot(_vap), l = _vac.dot(_vap);
        if (s <= 0 && l <= 0) return t.copy(r);
        _vbp.subVectors(e443, n);
        const c = _vab.dot(_vbp), h = _vac.dot(_vbp);
        if (c >= 0 && h <= c) return t.copy(n);
        const u = s * h - c * l;
        if (u <= 0 && s >= 0 && c <= 0) return a = s / (s - c), t.copy(r).addScaledVector(_vab, a);
        _vcp.subVectors(e443, i);
        const d = _vab.dot(_vcp), p = _vac.dot(_vcp);
        if (p >= 0 && d <= p) return t.copy(i);
        const m = d * l - s * p;
        if (m <= 0 && l >= 0 && p <= 0) return o = l / (l - p), t.copy(r).addScaledVector(_vac, o);
        const f = c * p - d * h;
        if (f <= 0 && h - c >= 0 && d - p >= 0) return _vbc.subVectors(i, n), o = (h - c) / (h - c + (d - p)), t.copy(n).addScaledVector(_vbc, o);
        const g = 1 / (f + m + u);
        return a = m * g, o = u * g, t.copy(r).addScaledVector(_vab, a).addScaledVector(_vac, o);
    }
    equals(e444) {
        return e444.a.equals(this.a) && e444.b.equals(this.b) && e444.c.equals(this.c);
    }
}
let materialId = 0;
function Material() {
    Object.defineProperty(this, "id", {
        value: materialId++
    }), this.uuid = generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = NormalBlending, this.side = FrontSide, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = SrcAlphaFactor, this.blendDst = OneMinusSrcAlphaFactor, this.blendEquation = AddEquation, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = LessEqualDepth, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = AlwaysStencilFunc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = KeepStencilOp, this.stencilZFail = KeepStencilOp, this.stencilZPass = KeepStencilOp, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0;
}
Material.prototype = Object.assign(Object.create(EventDispatcher.prototype), {
    constructor: Material,
    isMaterial: !0,
    onBuild: function() {},
    onBeforeCompile: function() {},
    customProgramCacheKey: function() {
        return this.onBeforeCompile.toString();
    },
    setValues: function(e445) {
        if (void 0 !== e445) for(const t in e445){
            const r = e445[t];
            if (void 0 === r) {
                console.warn("THREE.Material: '" + t + "' parameter is undefined.");
                continue;
            }
            if ("shading" === t) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === r;
                continue;
            }
            const n = this[t];
            void 0 !== n ? n && n.isColor ? n.set(r) : n && n.isVector3 && r && r.isVector3 ? n.copy(r) : this[t] = r : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
        }
    },
    toJSON: function(e446) {
        const t7 = void 0 === e446 || "string" == typeof e446;
        t7 && (e446 = {
            textures: {},
            images: {}
        });
        const r2 = {
            metadata: {
                version: 4.5,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        function n4(e447) {
            const t = [];
            for(const r in e447){
                const n = e447[r];
                delete n.metadata, t.push(n);
            }
            return t;
        }
        if (r2.uuid = this.uuid, r2.type = this.type, "" !== this.name && (r2.name = this.name), this.color && this.color.isColor && (r2.color = this.color.getHex()), void 0 !== this.roughness && (r2.roughness = this.roughness), void 0 !== this.metalness && (r2.metalness = this.metalness), this.sheen && this.sheen.isColor && (r2.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (r2.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (r2.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (r2.specular = this.specular.getHex()), void 0 !== this.shininess && (r2.shininess = this.shininess), void 0 !== this.clearcoat && (r2.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (r2.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (r2.clearcoatMap = this.clearcoatMap.toJSON(e446).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (r2.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e446).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (r2.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e446).uuid, r2.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (r2.map = this.map.toJSON(e446).uuid), this.matcap && this.matcap.isTexture && (r2.matcap = this.matcap.toJSON(e446).uuid), this.alphaMap && this.alphaMap.isTexture && (r2.alphaMap = this.alphaMap.toJSON(e446).uuid), this.lightMap && this.lightMap.isTexture && (r2.lightMap = this.lightMap.toJSON(e446).uuid, r2.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (r2.aoMap = this.aoMap.toJSON(e446).uuid, r2.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (r2.bumpMap = this.bumpMap.toJSON(e446).uuid, r2.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (r2.normalMap = this.normalMap.toJSON(e446).uuid, r2.normalMapType = this.normalMapType, r2.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (r2.displacementMap = this.displacementMap.toJSON(e446).uuid, r2.displacementScale = this.displacementScale, r2.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (r2.roughnessMap = this.roughnessMap.toJSON(e446).uuid), this.metalnessMap && this.metalnessMap.isTexture && (r2.metalnessMap = this.metalnessMap.toJSON(e446).uuid), this.emissiveMap && this.emissiveMap.isTexture && (r2.emissiveMap = this.emissiveMap.toJSON(e446).uuid), this.specularMap && this.specularMap.isTexture && (r2.specularMap = this.specularMap.toJSON(e446).uuid), this.envMap && this.envMap.isTexture && (r2.envMap = this.envMap.toJSON(e446).uuid, void 0 !== this.combine && (r2.combine = this.combine)), void 0 !== this.envMapIntensity && (r2.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (r2.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (r2.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (r2.gradientMap = this.gradientMap.toJSON(e446).uuid), void 0 !== this.size && (r2.size = this.size), null !== this.shadowSide && (r2.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (r2.sizeAttenuation = this.sizeAttenuation), this.blending !== NormalBlending && (r2.blending = this.blending), this.side !== FrontSide && (r2.side = this.side), this.vertexColors && (r2.vertexColors = !0), this.opacity < 1 && (r2.opacity = this.opacity), !0 === this.transparent && (r2.transparent = this.transparent), r2.depthFunc = this.depthFunc, r2.depthTest = this.depthTest, r2.depthWrite = this.depthWrite, r2.colorWrite = this.colorWrite, r2.stencilWrite = this.stencilWrite, r2.stencilWriteMask = this.stencilWriteMask, r2.stencilFunc = this.stencilFunc, r2.stencilRef = this.stencilRef, r2.stencilFuncMask = this.stencilFuncMask, r2.stencilFail = this.stencilFail, r2.stencilZFail = this.stencilZFail, r2.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (r2.rotation = this.rotation), !0 === this.polygonOffset && (r2.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (r2.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (r2.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (r2.linewidth = this.linewidth), void 0 !== this.dashSize && (r2.dashSize = this.dashSize), void 0 !== this.gapSize && (r2.gapSize = this.gapSize), void 0 !== this.scale && (r2.scale = this.scale), !0 === this.dithering && (r2.dithering = !0), this.alphaTest > 0 && (r2.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (r2.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (r2.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (r2.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (r2.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (r2.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (r2.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (r2.morphTargets = !0), !0 === this.morphNormals && (r2.morphNormals = !0), !0 === this.skinning && (r2.skinning = !0), !0 === this.flatShading && (r2.flatShading = this.flatShading), !1 === this.visible && (r2.visible = !1), !1 === this.toneMapped && (r2.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (r2.userData = this.userData), t7) {
            const t = n4(e446.textures), i = n4(e446.images);
            t.length > 0 && (r2.textures = t), i.length > 0 && (r2.images = i);
        }
        return r2;
    },
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(e448) {
        this.name = e448.name, this.fog = e448.fog, this.blending = e448.blending, this.side = e448.side, this.vertexColors = e448.vertexColors, this.opacity = e448.opacity, this.transparent = e448.transparent, this.blendSrc = e448.blendSrc, this.blendDst = e448.blendDst, this.blendEquation = e448.blendEquation, this.blendSrcAlpha = e448.blendSrcAlpha, this.blendDstAlpha = e448.blendDstAlpha, this.blendEquationAlpha = e448.blendEquationAlpha, this.depthFunc = e448.depthFunc, this.depthTest = e448.depthTest, this.depthWrite = e448.depthWrite, this.stencilWriteMask = e448.stencilWriteMask, this.stencilFunc = e448.stencilFunc, this.stencilRef = e448.stencilRef, this.stencilFuncMask = e448.stencilFuncMask, this.stencilFail = e448.stencilFail, this.stencilZFail = e448.stencilZFail, this.stencilZPass = e448.stencilZPass, this.stencilWrite = e448.stencilWrite;
        const t = e448.clippingPlanes;
        let r = null;
        if (null !== t) {
            const e449 = t.length;
            r = new Array(e449);
            for(let n = 0; n !== e449; ++n)r[n] = t[n].clone();
        }
        return this.clippingPlanes = r, this.clipIntersection = e448.clipIntersection, this.clipShadows = e448.clipShadows, this.shadowSide = e448.shadowSide, this.colorWrite = e448.colorWrite, this.precision = e448.precision, this.polygonOffset = e448.polygonOffset, this.polygonOffsetFactor = e448.polygonOffsetFactor, this.polygonOffsetUnits = e448.polygonOffsetUnits, this.dithering = e448.dithering, this.alphaTest = e448.alphaTest, this.alphaToCoverage = e448.alphaToCoverage, this.premultipliedAlpha = e448.premultipliedAlpha, this.visible = e448.visible, this.toneMapped = e448.toneMapped, this.userData = JSON.parse(JSON.stringify(e448.userData)), this;
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
}), Object.defineProperty(Material.prototype, "needsUpdate", {
    set: function(e450) {
        !0 === e450 && this.version++;
    }
});
const _colorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}, _hslA = {
    h: 0,
    s: 0,
    l: 0
}, _hslB = {
    h: 0,
    s: 0,
    l: 0
};
function hue2rgb(e451, t, r) {
    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e451 + 6 * (t - e451) * r : r < 0.5 ? t : r < 2 / 3 ? e451 + 6 * (t - e451) * (2 / 3 - r) : e451;
}
function SRGBToLinear(e452) {
    return e452 < 0.04045 ? 0.0773993808 * e452 : Math.pow(0.9478672986 * e452 + 0.0521327014, 2.4);
}
function LinearToSRGB(e453) {
    return e453 < 0.0031308 ? 12.92 * e453 : 1.055 * Math.pow(e453, 0.41666) - 0.055;
}
class Color {
    constructor(e454, t, r){
        return void 0 === t && void 0 === r ? this.set(e454) : this.setRGB(e454, t, r);
    }
    set(e455) {
        return e455 && e455.isColor ? this.copy(e455) : "number" == typeof e455 ? this.setHex(e455) : "string" == typeof e455 && this.setStyle(e455), this;
    }
    setScalar(e456) {
        return this.r = e456, this.g = e456, this.b = e456, this;
    }
    setHex(e457) {
        return e457 = Math.floor(e457), this.r = (e457 >> 16 & 255) / 255, this.g = (e457 >> 8 & 255) / 255, this.b = (255 & e457) / 255, this;
    }
    setRGB(e458, t, r) {
        return this.r = e458, this.g = t, this.b = r, this;
    }
    setHSL(e459, t, r) {
        if (e459 = euclideanModulo(e459, 1), t = clamp(t, 0, 1), r = clamp(r, 0, 1), 0 === t) this.r = this.g = this.b = r;
        else {
            const n = r <= 0.5 ? r * (1 + t) : r + t - r * t, i = 2 * r - n;
            this.r = hue2rgb(i, n, e459 + 1 / 3), this.g = hue2rgb(i, n, e459), this.b = hue2rgb(i, n, e459 - 1 / 3);
        }
        return this;
    }
    setStyle(e460) {
        function t8(t) {
            void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e460 + " will be ignored.");
        }
        let r;
        if (r = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e460)) {
            let e461;
            const n = r[1], i = r[2];
            switch(n){
                case "rgb":
                case "rgba":
                    if (e461 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)) return this.r = Math.min(255, parseInt(e461[1], 10)) / 255, this.g = Math.min(255, parseInt(e461[2], 10)) / 255, this.b = Math.min(255, parseInt(e461[3], 10)) / 255, t8(e461[4]), this;
                    if (e461 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)) return this.r = Math.min(100, parseInt(e461[1], 10)) / 100, this.g = Math.min(100, parseInt(e461[2], 10)) / 100, this.b = Math.min(100, parseInt(e461[3], 10)) / 100, t8(e461[4]), this;
                    break;
                case "hsl":
                case "hsla":
                    if (e461 = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)) {
                        const r = parseFloat(e461[1]) / 360, n = parseInt(e461[2], 10) / 100, i = parseInt(e461[3], 10) / 100;
                        return t8(e461[4]), this.setHSL(r, n, i);
                    }
            }
        } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e460)) {
            const e462 = r[1], t = e462.length;
            if (3 === t) return this.r = parseInt(e462.charAt(0) + e462.charAt(0), 16) / 255, this.g = parseInt(e462.charAt(1) + e462.charAt(1), 16) / 255, this.b = parseInt(e462.charAt(2) + e462.charAt(2), 16) / 255, this;
            if (6 === t) return this.r = parseInt(e462.charAt(0) + e462.charAt(1), 16) / 255, this.g = parseInt(e462.charAt(2) + e462.charAt(3), 16) / 255, this.b = parseInt(e462.charAt(4) + e462.charAt(5), 16) / 255, this;
        }
        return e460 && e460.length > 0 ? this.setColorName(e460) : this;
    }
    setColorName(e463) {
        const t = _colorKeywords[e463.toLowerCase()];
        return void 0 !== t ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e463), this;
    }
    clone() {
        return new this.constructor(this.r, this.g, this.b);
    }
    copy(e464) {
        return this.r = e464.r, this.g = e464.g, this.b = e464.b, this;
    }
    copyGammaToLinear(e465, t = 2) {
        return this.r = Math.pow(e465.r, t), this.g = Math.pow(e465.g, t), this.b = Math.pow(e465.b, t), this;
    }
    copyLinearToGamma(e466, t = 2) {
        const r = t > 0 ? 1 / t : 1;
        return this.r = Math.pow(e466.r, r), this.g = Math.pow(e466.g, r), this.b = Math.pow(e466.b, r), this;
    }
    convertGammaToLinear(e467) {
        return this.copyGammaToLinear(this, e467), this;
    }
    convertLinearToGamma(e468) {
        return this.copyLinearToGamma(this, e468), this;
    }
    copySRGBToLinear(e469) {
        return this.r = SRGBToLinear(e469.r), this.g = SRGBToLinear(e469.g), this.b = SRGBToLinear(e469.b), this;
    }
    copyLinearToSRGB(e470) {
        return this.r = LinearToSRGB(e470.r), this.g = LinearToSRGB(e470.g), this.b = LinearToSRGB(e470.b), this;
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this), this;
    }
    getHex() {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
    }
    getHexString() {
        return ("000000" + this.getHex().toString(16)).slice(-6);
    }
    getHSL(e471) {
        void 0 === e471 && (console.warn("THREE.Color: .getHSL() target is now required"), e471 = {
            h: 0,
            s: 0,
            l: 0
        });
        const t = this.r, r = this.g, n = this.b, i = Math.max(t, r, n), a = Math.min(t, r, n);
        let o, s;
        const l = (a + i) / 2;
        if (a === i) o = 0, s = 0;
        else {
            const e472 = i - a;
            switch(s = l <= 0.5 ? e472 / (i + a) : e472 / (2 - i - a), i){
                case t:
                    o = (r - n) / e472 + (r < n ? 6 : 0);
                    break;
                case r:
                    o = (n - t) / e472 + 2;
                    break;
                case n:
                    o = (t - r) / e472 + 4;
            }
            o /= 6;
        }
        return e471.h = o, e471.s = s, e471.l = l, e471;
    }
    getStyle() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")";
    }
    offsetHSL(e473, t, r) {
        return this.getHSL(_hslA), _hslA.h += e473, _hslA.s += t, _hslA.l += r, this.setHSL(_hslA.h, _hslA.s, _hslA.l), this;
    }
    add(e474) {
        return this.r += e474.r, this.g += e474.g, this.b += e474.b, this;
    }
    addColors(e475, t) {
        return this.r = e475.r + t.r, this.g = e475.g + t.g, this.b = e475.b + t.b, this;
    }
    addScalar(e476) {
        return this.r += e476, this.g += e476, this.b += e476, this;
    }
    sub(e477) {
        return this.r = Math.max(0, this.r - e477.r), this.g = Math.max(0, this.g - e477.g), this.b = Math.max(0, this.b - e477.b), this;
    }
    multiply(e478) {
        return this.r *= e478.r, this.g *= e478.g, this.b *= e478.b, this;
    }
    multiplyScalar(e479) {
        return this.r *= e479, this.g *= e479, this.b *= e479, this;
    }
    lerp(e480, t) {
        return this.r += (e480.r - this.r) * t, this.g += (e480.g - this.g) * t, this.b += (e480.b - this.b) * t, this;
    }
    lerpColors(e481, t, r) {
        return this.r = e481.r + (t.r - e481.r) * r, this.g = e481.g + (t.g - e481.g) * r, this.b = e481.b + (t.b - e481.b) * r, this;
    }
    lerpHSL(e482, t) {
        this.getHSL(_hslA), e482.getHSL(_hslB);
        const r = lerp(_hslA.h, _hslB.h, t), n = lerp(_hslA.s, _hslB.s, t), i = lerp(_hslA.l, _hslB.l, t);
        return this.setHSL(r, n, i), this;
    }
    equals(e483) {
        return e483.r === this.r && e483.g === this.g && e483.b === this.b;
    }
    fromArray(e484, t = 0) {
        return this.r = e484[t], this.g = e484[t + 1], this.b = e484[t + 2], this;
    }
    toArray(e485 = [], t = 0) {
        return e485[t] = this.r, e485[t + 1] = this.g, e485[t + 2] = this.b, e485;
    }
    fromBufferAttribute(e486, t) {
        return this.r = e486.getX(t), this.g = e486.getY(t), this.b = e486.getZ(t), !0 === e486.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this;
    }
    toJSON() {
        return this.getHex();
    }
}
Color.NAMES = _colorKeywords, Color.prototype.isColor = !0, Color.prototype.r = 1, Color.prototype.g = 1, Color.prototype.b = 1;
class MeshBasicMaterial extends Material {
    constructor(e487){
        super(), this.type = "MeshBasicMaterial", this.color = new Color(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = MultiplyOperation, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(e487);
    }
    copy(e488) {
        return super.copy(e488), this.color.copy(e488.color), this.map = e488.map, this.lightMap = e488.lightMap, this.lightMapIntensity = e488.lightMapIntensity, this.aoMap = e488.aoMap, this.aoMapIntensity = e488.aoMapIntensity, this.specularMap = e488.specularMap, this.alphaMap = e488.alphaMap, this.envMap = e488.envMap, this.combine = e488.combine, this.reflectivity = e488.reflectivity, this.refractionRatio = e488.refractionRatio, this.wireframe = e488.wireframe, this.wireframeLinewidth = e488.wireframeLinewidth, this.wireframeLinecap = e488.wireframeLinecap, this.wireframeLinejoin = e488.wireframeLinejoin, this.skinning = e488.skinning, this.morphTargets = e488.morphTargets, this;
    }
}
MeshBasicMaterial.prototype.isMeshBasicMaterial = !0;
const _vector$9 = new Vector3, _vector2 = new Vector2;
class BufferAttribute {
    constructor(e489, t, r){
        if (Array.isArray(e489)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "", this.array = e489, this.itemSize = t, this.count = void 0 !== e489 ? e489.length / t : 0, this.normalized = !0 === r, this.usage = StaticDrawUsage, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0, this.onUploadCallback = function() {};
    }
    set needsUpdate(e490) {
        !0 === e490 && this.version++;
    }
    setUsage(e491) {
        return this.usage = e491, this;
    }
    copy(e492) {
        return this.name = e492.name, this.array = new e492.array.constructor(e492.array), this.itemSize = e492.itemSize, this.count = e492.count, this.normalized = e492.normalized, this.usage = e492.usage, this;
    }
    copyAt(e493, t, r) {
        e493 *= this.itemSize, r *= t.itemSize;
        for(let n = 0, i = this.itemSize; n < i; n++)this.array[e493 + n] = t.array[r + n];
        return this;
    }
    copyArray(e494) {
        return this.array.set(e494), this;
    }
    copyColorsArray(e495) {
        const t = this.array;
        let r = 0;
        for(let n = 0, i = e495.length; n < i; n++){
            let i = e495[n];
            void 0 === i && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), i = new Color), t[r++] = i.r, t[r++] = i.g, t[r++] = i.b;
        }
        return this;
    }
    copyVector2sArray(e496) {
        const t = this.array;
        let r = 0;
        for(let n = 0, i = e496.length; n < i; n++){
            let i = e496[n];
            void 0 === i && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n), i = new Vector2), t[r++] = i.x, t[r++] = i.y;
        }
        return this;
    }
    copyVector3sArray(e497) {
        const t = this.array;
        let r = 0;
        for(let n = 0, i = e497.length; n < i; n++){
            let i = e497[n];
            void 0 === i && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), i = new Vector3), t[r++] = i.x, t[r++] = i.y, t[r++] = i.z;
        }
        return this;
    }
    copyVector4sArray(e498) {
        const t = this.array;
        let r = 0;
        for(let n = 0, i = e498.length; n < i; n++){
            let i = e498[n];
            void 0 === i && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), i = new Vector4), t[r++] = i.x, t[r++] = i.y, t[r++] = i.z, t[r++] = i.w;
        }
        return this;
    }
    applyMatrix3(e499) {
        if (2 === this.itemSize) for(let t = 0, r = this.count; t < r; t++)_vector2.fromBufferAttribute(this, t), _vector2.applyMatrix3(e499), this.setXY(t, _vector2.x, _vector2.y);
        else if (3 === this.itemSize) for(let t9 = 0, r3 = this.count; t9 < r3; t9++)_vector$9.fromBufferAttribute(this, t9), _vector$9.applyMatrix3(e499), this.setXYZ(t9, _vector$9.x, _vector$9.y, _vector$9.z);
        return this;
    }
    applyMatrix4(e500) {
        for(let t = 0, r = this.count; t < r; t++)_vector$9.x = this.getX(t), _vector$9.y = this.getY(t), _vector$9.z = this.getZ(t), _vector$9.applyMatrix4(e500), this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
        return this;
    }
    applyNormalMatrix(e501) {
        for(let t = 0, r = this.count; t < r; t++)_vector$9.x = this.getX(t), _vector$9.y = this.getY(t), _vector$9.z = this.getZ(t), _vector$9.applyNormalMatrix(e501), this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
        return this;
    }
    transformDirection(e502) {
        for(let t = 0, r = this.count; t < r; t++)_vector$9.x = this.getX(t), _vector$9.y = this.getY(t), _vector$9.z = this.getZ(t), _vector$9.transformDirection(e502), this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
        return this;
    }
    set(e503, t = 0) {
        return this.array.set(e503, t), this;
    }
    getX(e504) {
        return this.array[e504 * this.itemSize];
    }
    setX(e505, t) {
        return this.array[e505 * this.itemSize] = t, this;
    }
    getY(e506) {
        return this.array[e506 * this.itemSize + 1];
    }
    setY(e507, t) {
        return this.array[e507 * this.itemSize + 1] = t, this;
    }
    getZ(e508) {
        return this.array[e508 * this.itemSize + 2];
    }
    setZ(e509, t) {
        return this.array[e509 * this.itemSize + 2] = t, this;
    }
    getW(e510) {
        return this.array[e510 * this.itemSize + 3];
    }
    setW(e511, t) {
        return this.array[e511 * this.itemSize + 3] = t, this;
    }
    setXY(e512, t, r) {
        return e512 *= this.itemSize, this.array[e512 + 0] = t, this.array[e512 + 1] = r, this;
    }
    setXYZ(e513, t, r, n) {
        return e513 *= this.itemSize, this.array[e513 + 0] = t, this.array[e513 + 1] = r, this.array[e513 + 2] = n, this;
    }
    setXYZW(e514, t, r, n, i) {
        return e514 *= this.itemSize, this.array[e514 + 0] = t, this.array[e514 + 1] = r, this.array[e514 + 2] = n, this.array[e514 + 3] = i, this;
    }
    onUpload(e515) {
        return this.onUploadCallback = e515, this;
    }
    clone() {
        return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
        const e516 = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.prototype.slice.call(this.array),
            normalized: this.normalized
        };
        return "" !== this.name && (e516.name = this.name), this.usage !== StaticDrawUsage && (e516.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (e516.updateRange = this.updateRange), e516;
    }
}
BufferAttribute.prototype.isBufferAttribute = !0;
class Int8BufferAttribute extends BufferAttribute {
    constructor(e517, t, r){
        super(new Int8Array(e517), t, r);
    }
}
class Uint8BufferAttribute extends BufferAttribute {
    constructor(e518, t, r){
        super(new Uint8Array(e518), t, r);
    }
}
class Uint8ClampedBufferAttribute extends BufferAttribute {
    constructor(e519, t, r){
        super(new Uint8ClampedArray(e519), t, r);
    }
}
class Int16BufferAttribute extends BufferAttribute {
    constructor(e520, t, r){
        super(new Int16Array(e520), t, r);
    }
}
class Uint16BufferAttribute extends BufferAttribute {
    constructor(e521, t, r){
        super(new Uint16Array(e521), t, r);
    }
}
class Int32BufferAttribute extends BufferAttribute {
    constructor(e522, t, r){
        super(new Int32Array(e522), t, r);
    }
}
class Uint32BufferAttribute extends BufferAttribute {
    constructor(e523, t, r){
        super(new Uint32Array(e523), t, r);
    }
}
class Float16BufferAttribute extends BufferAttribute {
    constructor(e524, t, r){
        super(new Uint16Array(e524), t, r);
    }
}
Float16BufferAttribute.prototype.isFloat16BufferAttribute = !0;
class Float32BufferAttribute extends BufferAttribute {
    constructor(e525, t, r){
        super(new Float32Array(e525), t, r);
    }
}
class Float64BufferAttribute extends BufferAttribute {
    constructor(e526, t, r){
        super(new Float64Array(e526), t, r);
    }
}
function arrayMax(e527) {
    if (0 === e527.length) return -1 / 0;
    let t = e527[0];
    for(let r = 1, n = e527.length; r < n; ++r)e527[r] > t && (t = e527[r]);
    return t;
}
const TYPED_ARRAYS = {
    Int8Array: Int8Array,
    Uint8Array: Uint8Array,
    Uint8ClampedArray: Uint8ClampedArray,
    Int16Array: Int16Array,
    Uint16Array: Uint16Array,
    Int32Array: Int32Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array
};
function getTypedArray(e528, t) {
    return new TYPED_ARRAYS[e528](t);
}
let _id = 0;
const _m1 = new Matrix4, _obj = new Object3D, _offset = new Vector3, _box$1 = new Box3, _boxMorphTargets = new Box3, _vector$8 = new Vector3;
class BufferGeometry extends EventDispatcher {
    constructor(){
        super(), Object.defineProperty(this, "id", {
            value: _id++
        }), this.uuid = generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }, this.userData = {};
    }
    getIndex() {
        return this.index;
    }
    setIndex(e529) {
        return Array.isArray(e529) ? this.index = new (arrayMax(e529) > 65535 ? Uint32BufferAttribute : Uint16BufferAttribute)(e529, 1) : this.index = e529, this;
    }
    getAttribute(e530) {
        return this.attributes[e530];
    }
    setAttribute(e531, t) {
        return this.attributes[e531] = t, this;
    }
    deleteAttribute(e532) {
        return delete this.attributes[e532], this;
    }
    hasAttribute(e533) {
        return void 0 !== this.attributes[e533];
    }
    addGroup(e534, t, r = 0) {
        this.groups.push({
            start: e534,
            count: t,
            materialIndex: r
        });
    }
    clearGroups() {
        this.groups = [];
    }
    setDrawRange(e535, t) {
        this.drawRange.start = e535, this.drawRange.count = t;
    }
    applyMatrix4(e536) {
        const t = this.attributes.position;
        void 0 !== t && (t.applyMatrix4(e536), t.needsUpdate = !0);
        const r = this.attributes.normal;
        if (void 0 !== r) {
            const t = (new Matrix3).getNormalMatrix(e536);
            r.applyNormalMatrix(t), r.needsUpdate = !0;
        }
        const n = this.attributes.tangent;
        return void 0 !== n && (n.transformDirection(e536), n.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    }
    rotateX(e537) {
        return _m1.makeRotationX(e537), this.applyMatrix4(_m1), this;
    }
    rotateY(e538) {
        return _m1.makeRotationY(e538), this.applyMatrix4(_m1), this;
    }
    rotateZ(e539) {
        return _m1.makeRotationZ(e539), this.applyMatrix4(_m1), this;
    }
    translate(e540, t, r) {
        return _m1.makeTranslation(e540, t, r), this.applyMatrix4(_m1), this;
    }
    scale(e541, t, r) {
        return _m1.makeScale(e541, t, r), this.applyMatrix4(_m1), this;
    }
    lookAt(e542) {
        return _obj.lookAt(e542), _obj.updateMatrix(), this.applyMatrix4(_obj.matrix), this;
    }
    center() {
        return this.computeBoundingBox(), this.boundingBox.getCenter(_offset).negate(), this.translate(_offset.x, _offset.y, _offset.z), this;
    }
    setFromPoints(e543) {
        const t = [];
        for(let r = 0, n = e543.length; r < n; r++){
            const n = e543[r];
            t.push(n.x, n.y, n.z || 0);
        }
        return this.setAttribute("position", new Float32BufferAttribute(t, 3)), this;
    }
    computeBoundingBox() {
        null === this.boundingBox && (this.boundingBox = new Box3);
        const e544 = this.attributes.position, t = this.morphAttributes.position;
        if (e544 && e544.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new Vector3(-1 / 0, -1 / 0, -1 / 0), new Vector3(1 / 0, 1 / 0, 1 / 0));
        if (void 0 !== e544) {
            if (this.boundingBox.setFromBufferAttribute(e544), t) for(let e545 = 0, r = t.length; e545 < r; e545++){
                const r = t[e545];
                _box$1.setFromBufferAttribute(r), this.morphTargetsRelative ? (_vector$8.addVectors(this.boundingBox.min, _box$1.min), this.boundingBox.expandByPoint(_vector$8), _vector$8.addVectors(this.boundingBox.max, _box$1.max), this.boundingBox.expandByPoint(_vector$8)) : (this.boundingBox.expandByPoint(_box$1.min), this.boundingBox.expandByPoint(_box$1.max));
            }
        } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
        null === this.boundingSphere && (this.boundingSphere = new Sphere);
        const e546 = this.attributes.position, t = this.morphAttributes.position;
        if (e546 && e546.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new Vector3, 1 / 0);
        if (e546) {
            const r = this.boundingSphere.center;
            if (_box$1.setFromBufferAttribute(e546), t) for(let e547 = 0, r4 = t.length; e547 < r4; e547++){
                const r = t[e547];
                _boxMorphTargets.setFromBufferAttribute(r), this.morphTargetsRelative ? (_vector$8.addVectors(_box$1.min, _boxMorphTargets.min), _box$1.expandByPoint(_vector$8), _vector$8.addVectors(_box$1.max, _boxMorphTargets.max), _box$1.expandByPoint(_vector$8)) : (_box$1.expandByPoint(_boxMorphTargets.min), _box$1.expandByPoint(_boxMorphTargets.max));
            }
            _box$1.getCenter(r);
            let n = 0;
            for(let t10 = 0, i = e546.count; t10 < i; t10++)_vector$8.fromBufferAttribute(e546, t10), n = Math.max(n, r.distanceToSquared(_vector$8));
            if (t) for(let i1 = 0, a = t.length; i1 < a; i1++){
                const a = t[i1], o = this.morphTargetsRelative;
                for(let t11 = 0, i = a.count; t11 < i; t11++)_vector$8.fromBufferAttribute(a, t11), o && (_offset.fromBufferAttribute(e546, t11), _vector$8.add(_offset)), n = Math.max(n, r.distanceToSquared(_vector$8));
            }
            this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
        }
    }
    computeFaceNormals() {}
    computeTangents() {
        const e551 = this.index, t15 = this.attributes;
        if (null === e551 || void 0 === t15.position || void 0 === t15.normal || void 0 === t15.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        const r5 = e551.array, n = t15.position.array, i2 = t15.normal.array, a = t15.uv.array, o = n.length / 3;
        void 0 === t15.tangent && this.setAttribute("tangent", new BufferAttribute(new Float32Array(4 * o), 4));
        const s = t15.tangent.array, l = [], c = [];
        for(let e548 = 0; e548 < o; e548++)l[e548] = new Vector3, c[e548] = new Vector3;
        const h = new Vector3, u = new Vector3, d = new Vector3, p = new Vector2, m = new Vector2, f = new Vector2, g = new Vector3, v = new Vector3;
        function _(e552, t, r) {
            h.fromArray(n, 3 * e552), u.fromArray(n, 3 * t), d.fromArray(n, 3 * r), p.fromArray(a, 2 * e552), m.fromArray(a, 2 * t), f.fromArray(a, 2 * r), u.sub(h), d.sub(h), m.sub(p), f.sub(p);
            const i = 1 / (m.x * f.y - f.x * m.y);
            isFinite(i) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(i), v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(i), l[e552].add(g), l[t].add(g), l[r].add(g), c[e552].add(v), c[t].add(v), c[r].add(v));
        }
        let y = this.groups;
        0 === y.length && (y = [
            {
                start: 0,
                count: r5.length
            }
        ]);
        for(let e549 = 0, t13 = y.length; e549 < t13; ++e549){
            const t = y[e549], n = t.start;
            for(let e553 = n, i = n + t.count; e553 < i; e553 += 3)_(r5[e553 + 0], r5[e553 + 1], r5[e553 + 2]);
        }
        const x = new Vector3, b = new Vector3, M = new Vector3, w = new Vector3;
        function S(e554) {
            M.fromArray(i2, 3 * e554), w.copy(M);
            const t = l[e554];
            x.copy(t), x.sub(M.multiplyScalar(M.dot(t))).normalize(), b.crossVectors(w, t);
            const r = b.dot(c[e554]) < 0 ? -1 : 1;
            s[4 * e554] = x.x, s[4 * e554 + 1] = x.y, s[4 * e554 + 2] = x.z, s[4 * e554 + 3] = r;
        }
        for(let e550 = 0, t14 = y.length; e550 < t14; ++e550){
            const t = y[e550], n = t.start;
            for(let e555 = n, i = n + t.count; e555 < i; e555 += 3)S(r5[e555 + 0]), S(r5[e555 + 1]), S(r5[e555 + 2]);
        }
    }
    computeVertexNormals() {
        const e558 = this.index, t = this.getAttribute("position");
        if (void 0 !== t) {
            let r = this.getAttribute("normal");
            if (void 0 === r) r = new BufferAttribute(new Float32Array(3 * t.count), 3), this.setAttribute("normal", r);
            else for(let e557 = 0, t16 = r.count; e557 < t16; e557++)r.setXYZ(e557, 0, 0, 0);
            const n = new Vector3, i = new Vector3, a = new Vector3, o = new Vector3, s = new Vector3, l = new Vector3, c = new Vector3, h = new Vector3;
            if (e558) for(let u = 0, d = e558.count; u < d; u += 3){
                const d = e558.getX(u + 0), p = e558.getX(u + 1), m = e558.getX(u + 2);
                n.fromBufferAttribute(t, d), i.fromBufferAttribute(t, p), a.fromBufferAttribute(t, m), c.subVectors(a, i), h.subVectors(n, i), c.cross(h), o.fromBufferAttribute(r, d), s.fromBufferAttribute(r, p), l.fromBufferAttribute(r, m), o.add(c), s.add(c), l.add(c), r.setXYZ(d, o.x, o.y, o.z), r.setXYZ(p, s.x, s.y, s.z), r.setXYZ(m, l.x, l.y, l.z);
            }
            else for(let e556 = 0, o1 = t.count; e556 < o1; e556 += 3)n.fromBufferAttribute(t, e556 + 0), i.fromBufferAttribute(t, e556 + 1), a.fromBufferAttribute(t, e556 + 2), c.subVectors(a, i), h.subVectors(n, i), c.cross(h), r.setXYZ(e556 + 0, c.x, c.y, c.z), r.setXYZ(e556 + 1, c.x, c.y, c.z), r.setXYZ(e556 + 2, c.x, c.y, c.z);
            this.normalizeNormals(), r.needsUpdate = !0;
        }
    }
    merge(e559, t) {
        if (!e559 || !e559.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e559);
        void 0 === t && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
        const r = this.attributes;
        for(const n in r){
            if (void 0 === e559.attributes[n]) continue;
            const i = r[n].array, a = e559.attributes[n], o = a.array, s = a.itemSize * t, l = Math.min(o.length, i.length - s);
            for(let e560 = 0, t17 = s; e560 < l; e560++, t17++)i[t17] = o[e560];
        }
        return this;
    }
    normalizeNormals() {
        const e561 = this.attributes.normal;
        for(let t = 0, r = e561.count; t < r; t++)_vector$8.fromBufferAttribute(e561, t), _vector$8.normalize(), e561.setXYZ(t, _vector$8.x, _vector$8.y, _vector$8.z);
    }
    toNonIndexed() {
        function e564(e565, t) {
            const r = e565.array, n = e565.itemSize, i = e565.normalized, a = new r.constructor(t.length * n);
            let o = 0, s = 0;
            for(let e563 = 0, i4 = t.length; e563 < i4; e563++){
                o = t[e563] * n;
                for(let e566 = 0; e566 < n; e566++)a[s++] = r[o++];
            }
            return new BufferAttribute(a, n, i);
        }
        if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
        const t18 = new BufferGeometry, r7 = this.index.array, n6 = this.attributes;
        for(const i5 in n6){
            const a = e564(n6[i5], r7);
            t18.setAttribute(i5, a);
        }
        const i3 = this.morphAttributes;
        for(const n5 in i3){
            const a = [], o = i3[n5];
            for(let t = 0, n = o.length; t < n; t++){
                const n = e564(o[t], r7);
                a.push(n);
            }
            t18.morphAttributes[n5] = a;
        }
        t18.morphTargetsRelative = this.morphTargetsRelative;
        const a1 = this.groups;
        for(let e562 = 0, r6 = a1.length; e562 < r6; e562++){
            const r = a1[e562];
            t18.addGroup(r.start, r.count, r.materialIndex);
        }
        return t18;
    }
    toJSON() {
        const e567 = {
            metadata: {
                version: 4.5,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (e567.uuid = this.uuid, e567.type = this.type, "" !== this.name && (e567.name = this.name), Object.keys(this.userData).length > 0 && (e567.userData = this.userData), void 0 !== this.parameters) {
            const t = this.parameters;
            for(const r in t)void 0 !== t[r] && (e567[r] = t[r]);
            return e567;
        }
        e567.data = {
            attributes: {}
        };
        const t = this.index;
        null !== t && (e567.data.index = {
            type: t.array.constructor.name,
            array: Array.prototype.slice.call(t.array)
        });
        const r = this.attributes;
        for(const t19 in r){
            const n = r[t19];
            e567.data.attributes[t19] = n.toJSON(e567.data);
        }
        const n = {};
        let i = !1;
        for(const t20 in this.morphAttributes){
            const r = this.morphAttributes[t20], a = [];
            for(let t = 0, n7 = r.length; t < n7; t++){
                const n = r[t];
                a.push(n.toJSON(e567.data));
            }
            a.length > 0 && (n[t20] = a, i = !0);
        }
        i && (e567.data.morphAttributes = n, e567.data.morphTargetsRelative = this.morphTargetsRelative);
        const a = this.groups;
        a.length > 0 && (e567.data.groups = JSON.parse(JSON.stringify(a)));
        const o = this.boundingSphere;
        return null !== o && (e567.data.boundingSphere = {
            center: o.center.toArray(),
            radius: o.radius
        }), e567;
    }
    clone() {
        return (new BufferGeometry).copy(this);
    }
    copy(e571) {
        this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
        const t = {};
        this.name = e571.name;
        const r = e571.index;
        null !== r && this.setIndex(r.clone(t));
        const n = e571.attributes;
        for(const e568 in n){
            const r = n[e568];
            this.setAttribute(e568, r.clone(t));
        }
        const i = e571.morphAttributes;
        for(const e569 in i){
            const r = [], n = i[e569];
            for(let e572 = 0, i6 = n.length; e572 < i6; e572++)r.push(n[e572].clone(t));
            this.morphAttributes[e569] = r;
        }
        this.morphTargetsRelative = e571.morphTargetsRelative;
        const a = e571.groups;
        for(let e570 = 0, t21 = a.length; e570 < t21; e570++){
            const t = a[e570];
            this.addGroup(t.start, t.count, t.materialIndex);
        }
        const o = e571.boundingBox;
        null !== o && (this.boundingBox = o.clone());
        const s = e571.boundingSphere;
        return null !== s && (this.boundingSphere = s.clone()), this.drawRange.start = e571.drawRange.start, this.drawRange.count = e571.drawRange.count, this.userData = e571.userData, this;
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
}
BufferGeometry.prototype.isBufferGeometry = !0;
const _inverseMatrix$2 = new Matrix4, _ray$2 = new Ray, _sphere$3 = new Sphere, _vA$1 = new Vector3, _vB$1 = new Vector3, _vC$1 = new Vector3, _tempA = new Vector3, _tempB = new Vector3, _tempC = new Vector3, _morphA = new Vector3, _morphB = new Vector3, _morphC = new Vector3, _uvA$1 = new Vector2, _uvB$1 = new Vector2, _uvC$1 = new Vector2, _intersectionPoint = new Vector3, _intersectionPointWorld = new Vector3;
class Mesh extends Object3D {
    constructor(e573 = new BufferGeometry, t = new MeshBasicMaterial){
        super(), this.type = "Mesh", this.geometry = e573, this.material = t, this.updateMorphTargets();
    }
    copy(e574) {
        return super.copy(e574), void 0 !== e574.morphTargetInfluences && (this.morphTargetInfluences = e574.morphTargetInfluences.slice()), void 0 !== e574.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e574.morphTargetDictionary)), this.material = e574.material, this.geometry = e574.geometry, this;
    }
    updateMorphTargets() {
        const e575 = this.geometry;
        if (e575.isBufferGeometry) {
            const t = e575.morphAttributes, r = Object.keys(t);
            if (r.length > 0) {
                const e576 = t[r[0]];
                if (void 0 !== e576) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let t = 0, r = e576.length; t < r; t++){
                        const r = e576[t].name || String(t);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = t;
                    }
                }
            }
        } else {
            const t = e575.morphTargets;
            void 0 !== t && t.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
    }
    raycast(e577, t) {
        const r = this.geometry, n = this.material, i = this.matrixWorld;
        if (void 0 === n) return;
        if (null === r.boundingSphere && r.computeBoundingSphere(), _sphere$3.copy(r.boundingSphere), _sphere$3.applyMatrix4(i), !1 === e577.ray.intersectsSphere(_sphere$3)) return;
        if (_inverseMatrix$2.copy(i).invert(), _ray$2.copy(e577.ray).applyMatrix4(_inverseMatrix$2), null !== r.boundingBox && !1 === _ray$2.intersectsBox(r.boundingBox)) return;
        let a;
        if (r.isBufferGeometry) {
            const i = r.index, o = r.attributes.position, s = r.morphAttributes.position, l = r.morphTargetsRelative, c = r.attributes.uv, h = r.attributes.uv2, u = r.groups, d = r.drawRange;
            if (null !== i) {
                if (Array.isArray(n)) for(let r = 0, p = u.length; r < p; r++){
                    const p = u[r], m = n[p.materialIndex];
                    for(let r9 = Math.max(p.start, d.start), n8 = Math.min(p.start + p.count, d.start + d.count); r9 < n8; r9 += 3){
                        const n = i.getX(r9), u = i.getX(r9 + 1), d = i.getX(r9 + 2);
                        (a = checkBufferGeometryIntersection(this, m, e577, _ray$2, o, s, l, c, h, n, u, d)) && (a.faceIndex = Math.floor(r9 / 3), a.face.materialIndex = p.materialIndex, t.push(a));
                    }
                }
                else for(let r8 = Math.max(0, d.start), u1 = Math.min(i.count, d.start + d.count); r8 < u1; r8 += 3){
                    const u = i.getX(r8), d = i.getX(r8 + 1), p = i.getX(r8 + 2);
                    (a = checkBufferGeometryIntersection(this, n, e577, _ray$2, o, s, l, c, h, u, d, p)) && (a.faceIndex = Math.floor(r8 / 3), t.push(a));
                }
            } else if (void 0 !== o) {
                if (Array.isArray(n)) for(let r = 0, i = u.length; r < i; r++){
                    const i = u[r], p = n[i.materialIndex];
                    for(let r11 = Math.max(i.start, d.start), n11 = Math.min(i.start + i.count, d.start + d.count); r11 < n11; r11 += 3)(a = checkBufferGeometryIntersection(this, p, e577, _ray$2, o, s, l, c, h, r11, r11 + 1, r11 + 2)) && (a.faceIndex = Math.floor(r11 / 3), a.face.materialIndex = i.materialIndex, t.push(a));
                }
                else for(let r10 = Math.max(0, d.start), i7 = Math.min(o.count, d.start + d.count); r10 < i7; r10 += 3)(a = checkBufferGeometryIntersection(this, n, e577, _ray$2, o, s, l, c, h, r10, r10 + 1, r10 + 2)) && (a.faceIndex = Math.floor(r10 / 3), t.push(a));
            }
        } else r.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
}
function checkIntersection(e578, t, r, n, i, a, o, s) {
    let l;
    if (null === (l = t.side === BackSide ? n.intersectTriangle(o, a, i, !0, s) : n.intersectTriangle(i, a, o, t.side !== DoubleSide, s))) return null;
    _intersectionPointWorld.copy(s), _intersectionPointWorld.applyMatrix4(e578.matrixWorld);
    const c = r.ray.origin.distanceTo(_intersectionPointWorld);
    return c < r.near || c > r.far ? null : {
        distance: c,
        point: _intersectionPointWorld.clone(),
        object: e578
    };
}
function checkBufferGeometryIntersection(e579, t, r, n, i, a, o, s, l, c, h, u) {
    _vA$1.fromBufferAttribute(i, c), _vB$1.fromBufferAttribute(i, h), _vC$1.fromBufferAttribute(i, u);
    const d = e579.morphTargetInfluences;
    if (t.morphTargets && a && d) {
        _morphA.set(0, 0, 0), _morphB.set(0, 0, 0), _morphC.set(0, 0, 0);
        for(let e580 = 0, t = a.length; e580 < t; e580++){
            const t = d[e580], r = a[e580];
            0 !== t && (_tempA.fromBufferAttribute(r, c), _tempB.fromBufferAttribute(r, h), _tempC.fromBufferAttribute(r, u), o ? (_morphA.addScaledVector(_tempA, t), _morphB.addScaledVector(_tempB, t), _morphC.addScaledVector(_tempC, t)) : (_morphA.addScaledVector(_tempA.sub(_vA$1), t), _morphB.addScaledVector(_tempB.sub(_vB$1), t), _morphC.addScaledVector(_tempC.sub(_vC$1), t)));
        }
        _vA$1.add(_morphA), _vB$1.add(_morphB), _vC$1.add(_morphC);
    }
    e579.isSkinnedMesh && t.skinning && (e579.boneTransform(c, _vA$1), e579.boneTransform(h, _vB$1), e579.boneTransform(u, _vC$1));
    const p = checkIntersection(e579, t, r, n, _vA$1, _vB$1, _vC$1, _intersectionPoint);
    if (p) {
        s && (_uvA$1.fromBufferAttribute(s, c), _uvB$1.fromBufferAttribute(s, h), _uvC$1.fromBufferAttribute(s, u), p.uv = Triangle.getUV(_intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2)), l && (_uvA$1.fromBufferAttribute(l, c), _uvB$1.fromBufferAttribute(l, h), _uvC$1.fromBufferAttribute(l, u), p.uv2 = Triangle.getUV(_intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2));
        const e581 = {
            a: c,
            b: h,
            c: u,
            normal: new Vector3,
            materialIndex: 0
        };
        Triangle.getNormal(_vA$1, _vB$1, _vC$1, e581.normal), p.face = e581;
    }
    return p;
}
Mesh.prototype.isMesh = !0;
class BoxGeometry extends BufferGeometry {
    constructor(e582 = 1, t23 = 1, r12 = 1, n14 = 1, i8 = 1, a3 = 1){
        super(), this.type = "BoxGeometry", this.parameters = {
            width: e582,
            height: t23,
            depth: r12,
            widthSegments: n14,
            heightSegments: i8,
            depthSegments: a3
        };
        const o2 = this;
        n14 = Math.floor(n14), i8 = Math.floor(i8), a3 = Math.floor(a3);
        const s1 = [], l = [], c = [], h = [];
        let u2 = 0, d = 0;
        function p1(e584, t, r, n, i, a, p, m, f, g, v) {
            const _ = a / f, y = p / g, x = a / 2, b = p / 2, M = m / 2, w = f + 1, S = g + 1;
            let T = 0, E = 0;
            const A = new Vector3;
            for(let a2 = 0; a2 < S; a2++){
                const o = a2 * y - b;
                for(let s = 0; s < w; s++){
                    const u = s * _ - x;
                    A[e584] = u * n, A[t] = o * i, A[r] = M, l.push(A.x, A.y, A.z), A[e584] = 0, A[t] = 0, A[r] = m > 0 ? 1 : -1, c.push(A.x, A.y, A.z), h.push(s / f), h.push(1 - a2 / g), T += 1;
                }
            }
            for(let e583 = 0; e583 < g; e583++)for(let t22 = 0; t22 < f; t22++){
                const r = u2 + t22 + w * e583, n = u2 + t22 + w * (e583 + 1), i = u2 + (t22 + 1) + w * (e583 + 1), a = u2 + (t22 + 1) + w * e583;
                s1.push(r, n, a), s1.push(n, i, a), E += 6;
            }
            o2.addGroup(d, E, v), d += E, u2 += T;
        }
        p1("z", "y", "x", -1, -1, r12, t23, e582, a3, i8, 0), p1("z", "y", "x", 1, -1, r12, t23, -e582, a3, i8, 1), p1("x", "z", "y", 1, 1, e582, r12, t23, n14, a3, 2), p1("x", "z", "y", 1, -1, e582, r12, -t23, n14, a3, 3), p1("x", "y", "z", 1, -1, e582, t23, r12, n14, i8, 4), p1("x", "y", "z", -1, -1, e582, t23, -r12, n14, i8, 5), this.setIndex(s1), this.setAttribute("position", new Float32BufferAttribute(l, 3)), this.setAttribute("normal", new Float32BufferAttribute(c, 3)), this.setAttribute("uv", new Float32BufferAttribute(h, 2));
    }
}
function cloneUniforms(e585) {
    const t = {};
    for(const r in e585){
        t[r] = {};
        for(const n in e585[r]){
            const i = e585[r][n];
            i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? t[r][n] = i.clone() : Array.isArray(i) ? t[r][n] = i.slice() : t[r][n] = i;
        }
    }
    return t;
}
function mergeUniforms(e586) {
    const t = {};
    for(let r = 0; r < e586.length; r++){
        const n = cloneUniforms(e586[r]);
        for(const e587 in n)t[e587] = n[e587];
    }
    return t;
}
const UniformsUtils = {
    clone: cloneUniforms,
    merge: mergeUniforms
};
var default_vertex = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", default_fragment = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
class ShaderMaterial extends Material {
    constructor(e588){
        super(), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = default_vertex, this.fragmentShader = default_fragment, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [
                1,
                1,
                1
            ],
            uv: [
                0,
                0
            ],
            uv2: [
                0,
                0
            ]
        }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== e588 && (void 0 !== e588.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e588));
    }
    copy(e589) {
        return super.copy(e589), this.fragmentShader = e589.fragmentShader, this.vertexShader = e589.vertexShader, this.uniforms = cloneUniforms(e589.uniforms), this.defines = Object.assign({}, e589.defines), this.wireframe = e589.wireframe, this.wireframeLinewidth = e589.wireframeLinewidth, this.lights = e589.lights, this.clipping = e589.clipping, this.skinning = e589.skinning, this.morphTargets = e589.morphTargets, this.morphNormals = e589.morphNormals, this.extensions = Object.assign({}, e589.extensions), this.glslVersion = e589.glslVersion, this;
    }
    toJSON(e591) {
        const t = super.toJSON(e591);
        t.glslVersion = this.glslVersion, t.uniforms = {};
        for(const r in this.uniforms){
            const n = this.uniforms[r].value;
            n && n.isTexture ? t.uniforms[r] = {
                type: "t",
                value: n.toJSON(e591).uuid
            } : n && n.isColor ? t.uniforms[r] = {
                type: "c",
                value: n.getHex()
            } : n && n.isVector2 ? t.uniforms[r] = {
                type: "v2",
                value: n.toArray()
            } : n && n.isVector3 ? t.uniforms[r] = {
                type: "v3",
                value: n.toArray()
            } : n && n.isVector4 ? t.uniforms[r] = {
                type: "v4",
                value: n.toArray()
            } : n && n.isMatrix3 ? t.uniforms[r] = {
                type: "m3",
                value: n.toArray()
            } : n && n.isMatrix4 ? t.uniforms[r] = {
                type: "m4",
                value: n.toArray()
            } : t.uniforms[r] = {
                value: n
            };
        }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
        const r13 = {};
        for(const e590 in this.extensions)!0 === this.extensions[e590] && (r13[e590] = !0);
        return Object.keys(r13).length > 0 && (t.extensions = r13), t;
    }
}
ShaderMaterial.prototype.isShaderMaterial = !0;
class Camera extends Object3D {
    constructor(){
        super(), this.type = "Camera", this.matrixWorldInverse = new Matrix4, this.projectionMatrix = new Matrix4, this.projectionMatrixInverse = new Matrix4;
    }
    copy(e592, t) {
        return super.copy(e592, t), this.matrixWorldInverse.copy(e592.matrixWorldInverse), this.projectionMatrix.copy(e592.projectionMatrix), this.projectionMatrixInverse.copy(e592.projectionMatrixInverse), this;
    }
    getWorldDirection(e593) {
        void 0 === e593 && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), e593 = new Vector3), this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e593.set(-t[8], -t[9], -t[10]).normalize();
    }
    updateMatrixWorld(e594) {
        super.updateMatrixWorld(e594), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(e595, t) {
        super.updateWorldMatrix(e595, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
        return (new this.constructor).copy(this);
    }
}
Camera.prototype.isCamera = !0;
class PerspectiveCamera extends Camera {
    constructor(e596 = 50, t = 1, r = 0.1, n = 2000){
        super(), this.type = "PerspectiveCamera", this.fov = e596, this.zoom = 1, this.near = r, this.far = n, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(e597, t) {
        return super.copy(e597, t), this.fov = e597.fov, this.zoom = e597.zoom, this.near = e597.near, this.far = e597.far, this.focus = e597.focus, this.aspect = e597.aspect, this.view = null === e597.view ? null : Object.assign({}, e597.view), this.filmGauge = e597.filmGauge, this.filmOffset = e597.filmOffset, this;
    }
    setFocalLength(e598) {
        const t = 0.5 * this.getFilmHeight() / e598;
        this.fov = 2 * RAD2DEG * Math.atan(t), this.updateProjectionMatrix();
    }
    getFocalLength() {
        const e599 = Math.tan(0.5 * DEG2RAD * this.fov);
        return 0.5 * this.getFilmHeight() / e599;
    }
    getEffectiveFOV() {
        return 2 * RAD2DEG * Math.atan(Math.tan(0.5 * DEG2RAD * this.fov) / this.zoom);
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1);
    }
    setViewOffset(e600, t, r, n, i, a) {
        this.aspect = e600 / t, null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = e600, this.view.fullHeight = t, this.view.offsetX = r, this.view.offsetY = n, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
    }
    clearViewOffset() {
        null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        const e601 = this.near;
        let t = e601 * Math.tan(0.5 * DEG2RAD * this.fov) / this.zoom, r = 2 * t, n = this.aspect * r, i = -0.5 * n;
        const a = this.view;
        if (null !== this.view && this.view.enabled) {
            const e602 = a.fullWidth, o = a.fullHeight;
            i += a.offsetX * n / e602, t -= a.offsetY * r / o, n *= a.width / e602, r *= a.height / o;
        }
        const o = this.filmOffset;
        0 !== o && (i += e601 * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + n, t, t - r, e601, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e603) {
        const t = super.toJSON(e603);
        return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
    }
}
PerspectiveCamera.prototype.isPerspectiveCamera = !0;
const fov = 90, aspect = 1;
class CubeCamera extends Object3D {
    constructor(e604, t, r){
        if (super(), this.type = "CubeCamera", !0 !== r.isWebGLCubeRenderTarget) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
        this.renderTarget = r;
        const n = new PerspectiveCamera(fov, aspect, e604, t);
        n.layers = this.layers, n.up.set(0, -1, 0), n.lookAt(new Vector3(1, 0, 0)), this.add(n);
        const i = new PerspectiveCamera(fov, aspect, e604, t);
        i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new Vector3(-1, 0, 0)), this.add(i);
        const a = new PerspectiveCamera(fov, aspect, e604, t);
        a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(new Vector3(0, 1, 0)), this.add(a);
        const o = new PerspectiveCamera(fov, aspect, e604, t);
        o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(new Vector3(0, -1, 0)), this.add(o);
        const s = new PerspectiveCamera(fov, aspect, e604, t);
        s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new Vector3(0, 0, 1)), this.add(s);
        const l = new PerspectiveCamera(fov, aspect, e604, t);
        l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new Vector3(0, 0, -1)), this.add(l);
    }
    update(e605, t) {
        null === this.parent && this.updateMatrixWorld();
        const r = this.renderTarget, [n, i, a, o, s, l] = this.children, c = e605.xr.enabled, h = e605.getRenderTarget();
        e605.xr.enabled = !1;
        const u = r.texture.generateMipmaps;
        r.texture.generateMipmaps = !1, e605.setRenderTarget(r, 0), e605.render(t, n), e605.setRenderTarget(r, 1), e605.render(t, i), e605.setRenderTarget(r, 2), e605.render(t, a), e605.setRenderTarget(r, 3), e605.render(t, o), e605.setRenderTarget(r, 4), e605.render(t, s), r.texture.generateMipmaps = u, e605.setRenderTarget(r, 5), e605.render(t, l), e605.setRenderTarget(h), e605.xr.enabled = c;
    }
}
class CubeTexture extends Texture {
    constructor(e606, t, r, n, i, a, o, s, l, c){
        super(e606 = void 0 !== e606 ? e606 : [], t = void 0 !== t ? t : CubeReflectionMapping, r, n, i, a, o = void 0 !== o ? o : RGBFormat, s, l, c), this._needsFlipEnvMap = !0, this.flipY = !1;
    }
    get images() {
        return this.image;
    }
    set images(e607) {
        this.image = e607;
    }
}
CubeTexture.prototype.isCubeTexture = !0;
class WebGLCubeRenderTarget extends WebGLRenderTarget {
    constructor(e608, t, r){
        Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = r), super(e608, e608, t), t = t || {}, this.texture = new CubeTexture(void 0, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.generateMipmaps = void 0 !== t.generateMipmaps && t.generateMipmaps, this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : LinearFilter, this.texture._needsFlipEnvMap = !1;
    }
    fromEquirectangularTexture(e609, t) {
        this.texture.type = t.type, this.texture.format = RGBAFormat, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
        const r = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
            fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
        }, n = new BoxGeometry(5, 5, 5), i = new ShaderMaterial({
            name: "CubemapFromEquirect",
            uniforms: cloneUniforms(r.uniforms),
            vertexShader: r.vertexShader,
            fragmentShader: r.fragmentShader,
            side: BackSide,
            blending: NoBlending
        });
        i.uniforms.tEquirect.value = t;
        const a = new Mesh(n, i), o = t.minFilter;
        return t.minFilter === LinearMipmapLinearFilter && (t.minFilter = LinearFilter), new CubeCamera(1, 10, this).update(e609, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
    }
    clear(e610, t, r, n) {
        const i = e610.getRenderTarget();
        for(let i9 = 0; i9 < 6; i9++)e610.setRenderTarget(this, i9), e610.clear(t, r, n);
        e610.setRenderTarget(i);
    }
}
WebGLCubeRenderTarget.prototype.isWebGLCubeRenderTarget = !0;
class DataTexture extends Texture {
    constructor(e611, t, r, n, i, a, o, s, l, c, h, u){
        super(null, a, o, s, l, c, n, i, h, u), this.image = {
            data: e611 || null,
            width: t || 1,
            height: r || 1
        }, this.magFilter = void 0 !== l ? l : NearestFilter, this.minFilter = void 0 !== c ? c : NearestFilter, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
    }
}
DataTexture.prototype.isDataTexture = !0;
const _sphere$2 = new Sphere, _vector$7 = new Vector3;
class Frustum {
    constructor(e612 = new Plane, t = new Plane, r = new Plane, n = new Plane, i = new Plane, a = new Plane){
        this.planes = [
            e612,
            t,
            r,
            n,
            i,
            a
        ];
    }
    set(e613, t, r, n, i, a) {
        const o = this.planes;
        return o[0].copy(e613), o[1].copy(t), o[2].copy(r), o[3].copy(n), o[4].copy(i), o[5].copy(a), this;
    }
    copy(e614) {
        const t = this.planes;
        for(let r = 0; r < 6; r++)t[r].copy(e614.planes[r]);
        return this;
    }
    setFromProjectionMatrix(e615) {
        const t = this.planes, r = e615.elements, n = r[0], i = r[1], a = r[2], o = r[3], s = r[4], l = r[5], c = r[6], h = r[7], u = r[8], d = r[9], p = r[10], m = r[11], f = r[12], g = r[13], v = r[14], _ = r[15];
        return t[0].setComponents(o - n, h - s, m - u, _ - f).normalize(), t[1].setComponents(o + n, h + s, m + u, _ + f).normalize(), t[2].setComponents(o + i, h + l, m + d, _ + g).normalize(), t[3].setComponents(o - i, h - l, m - d, _ - g).normalize(), t[4].setComponents(o - a, h - c, m - p, _ - v).normalize(), t[5].setComponents(o + a, h + c, m + p, _ + v).normalize(), this;
    }
    intersectsObject(e616) {
        const t = e616.geometry;
        return null === t.boundingSphere && t.computeBoundingSphere(), _sphere$2.copy(t.boundingSphere).applyMatrix4(e616.matrixWorld), this.intersectsSphere(_sphere$2);
    }
    intersectsSprite(e617) {
        return _sphere$2.center.set(0, 0, 0), _sphere$2.radius = 0.7071067811865476, _sphere$2.applyMatrix4(e617.matrixWorld), this.intersectsSphere(_sphere$2);
    }
    intersectsSphere(e619) {
        const t = this.planes, r = e619.center, n = -e619.radius;
        for(let e618 = 0; e618 < 6; e618++){
            if (t[e618].distanceToPoint(r) < n) return !1;
        }
        return !0;
    }
    intersectsBox(e620) {
        const t = this.planes;
        for(let r = 0; r < 6; r++){
            const n = t[r];
            if (_vector$7.x = n.normal.x > 0 ? e620.max.x : e620.min.x, _vector$7.y = n.normal.y > 0 ? e620.max.y : e620.min.y, _vector$7.z = n.normal.z > 0 ? e620.max.z : e620.min.z, n.distanceToPoint(_vector$7) < 0) return !1;
        }
        return !0;
    }
    containsPoint(e621) {
        const t = this.planes;
        for(let r = 0; r < 6; r++)if (t[r].distanceToPoint(e621) < 0) return !1;
        return !0;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
}
function WebGLAnimation() {
    let e622 = null, t24 = !1, r = null, n = null;
    function i(t, a) {
        r(t, a), n = e622.requestAnimationFrame(i);
    }
    return {
        start: function() {
            !0 !== t24 && null !== r && (n = e622.requestAnimationFrame(i), t24 = !0);
        },
        stop: function() {
            e622.cancelAnimationFrame(n), t24 = !1;
        },
        setAnimationLoop: function(e623) {
            r = e623;
        },
        setContext: function(t) {
            e622 = t;
        }
    };
}
function WebGLAttributes(e624, t25) {
    const r14 = t25.isWebGL2, n15 = new WeakMap;
    return {
        get: function(e625) {
            return e625.isInterleavedBufferAttribute && (e625 = e625.data), n15.get(e625);
        },
        remove: function(t) {
            t.isInterleavedBufferAttribute && (t = t.data);
            const r = n15.get(t);
            r && (e624.deleteBuffer(r.buffer), n15.delete(t));
        },
        update: function(t26, i10) {
            if (t26.isGLBufferAttribute) {
                const e626 = n15.get(t26);
                return void ((!e626 || e626.version < t26.version) && n15.set(t26, {
                    buffer: t26.buffer,
                    type: t26.type,
                    bytesPerElement: t26.elementSize,
                    version: t26.version
                }));
            }
            t26.isInterleavedBufferAttribute && (t26 = t26.data);
            const a4 = n15.get(t26);
            void 0 === a4 ? n15.set(t26, function(t, n) {
                const i = t.array, a = t.usage, o = e624.createBuffer();
                e624.bindBuffer(n, o), e624.bufferData(n, i, a), t.onUploadCallback();
                let s = 5126;
                return i instanceof Float32Array ? s = 5126 : i instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : i instanceof Uint16Array ? t.isFloat16BufferAttribute ? r14 ? s = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : s = 5123 : i instanceof Int16Array ? s = 5122 : i instanceof Uint32Array ? s = 5125 : i instanceof Int32Array ? s = 5124 : i instanceof Int8Array ? s = 5120 : i instanceof Uint8Array && (s = 5121), {
                    buffer: o,
                    type: s,
                    bytesPerElement: i.BYTES_PER_ELEMENT,
                    version: t.version
                };
            }(t26, i10)) : a4.version < t26.version && (function(t, n, i) {
                const a = n.array, o = n.updateRange;
                e624.bindBuffer(i, t), -1 === o.count ? e624.bufferSubData(i, 0, a) : (r14 ? e624.bufferSubData(i, o.offset * a.BYTES_PER_ELEMENT, a, o.offset, o.count) : e624.bufferSubData(i, o.offset * a.BYTES_PER_ELEMENT, a.subarray(o.offset, o.offset + o.count)), o.count = -1);
            }(a4.buffer, t26, i10), a4.version = t26.version);
        }
    };
}
class PlaneGeometry extends BufferGeometry {
    constructor(e629 = 1, t = 1, r = 1, n = 1){
        super(), this.type = "PlaneGeometry", this.parameters = {
            width: e629,
            height: t,
            widthSegments: r,
            heightSegments: n
        };
        const i = e629 / 2, a = t / 2, o = Math.floor(r), s = Math.floor(n), l = o + 1, c = s + 1, h = e629 / o, u = t / s, d = [], p = [], m = [], f = [];
        for(let e627 = 0; e627 < c; e627++){
            const t = e627 * u - a;
            for(let r = 0; r < l; r++){
                const n = r * h - i;
                p.push(n, -t, 0), m.push(0, 0, 1), f.push(r / o), f.push(1 - e627 / s);
            }
        }
        for(let e628 = 0; e628 < s; e628++)for(let t27 = 0; t27 < o; t27++){
            const r = t27 + l * e628, n = t27 + l * (e628 + 1), i = t27 + 1 + l * (e628 + 1), a = t27 + 1 + l * e628;
            d.push(r, n, a), d.push(n, i, a);
        }
        this.setIndex(d), this.setAttribute("position", new Float32BufferAttribute(p, 3)), this.setAttribute("normal", new Float32BufferAttribute(m, 3)), this.setAttribute("uv", new Float32BufferAttribute(f, 2));
    }
}
var alphamap_fragment = "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif", alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif", alphatest_fragment = "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif", aomap_fragment = "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif", aomap_pars_fragment = "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif", begin_vertex = "vec3 transformed = vec3( position );", beginnormal_vertex = "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs = "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif", bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif", clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif", clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif", clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif", color_fragment = "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif", color_pars_fragment = "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif", color_pars_vertex = "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif", color_vertex = "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif", common = "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}", cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif", defaultnormal_vertex = "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif", displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif", displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif", encodings_fragment = "gl_FragColor = linearToOutputTexel( gl_FragColor );", encodings_pars_fragment = "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}", envmap_fragment = "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif", envmap_common_pars_fragment = "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif", envmap_pars_fragment = "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif", envmap_pars_vertex = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif", envmap_vertex = "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif", fog_vertex = "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif", fog_pars_vertex = "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif", fog_fragment = "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment = "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif", gradientmap_pars_fragment = "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}", lightmap_fragment = "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif", lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif", lights_lambert_vertex = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif", lights_pars_begin = "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif", envmap_physical_pars_fragment = "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif", lights_toon_fragment = "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment = "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)", lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment = "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)", lights_physical_fragment = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif", lights_physical_pars_fragment = "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps = "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif", lights_fragment_end = "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif", logdepthbuf_fragment = "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment = "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif", logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif", map_fragment = "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif", map_pars_fragment = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif", map_particle_fragment = "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment = "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif", metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif", morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif", morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif", morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif", normal_fragment_begin = "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;", normal_fragment_maps = "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif", clearcoat_normal_fragment_begin = "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif", clearcoat_normal_fragment_maps = "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif", clearcoat_pars_fragment = "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif", packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}", premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex = "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment = "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment = "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif", roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif", shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif", shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif", shadowmask_pars_fragment = "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}", skinbase_vertex = "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex = "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif", skinning_vertex = "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex = "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif", specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif", specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif", tonemapping_fragment = "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment = "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmissionmap_fragment = "#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif", transmissionmap_pars_fragment = "#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif", uv_pars_fragment = "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif", uv_pars_vertex = "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif", uv_vertex = "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif", uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif", uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif", uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif", worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif", background_frag = "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", background_vert = "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}", cube_frag = "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", cube_vert = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}", depth_frag = "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}", depth_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}", distanceRGBA_frag = "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}", distanceRGBA_vert = "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}", equirect_frag = "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", equirect_vert = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}", linedashed_frag = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}", linedashed_vert = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}", meshbasic_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshbasic_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}", meshlambert_frag = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshlambert_vert = "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshmatcap_frag = "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshmatcap_vert = "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}", meshtoon_frag = "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshtoon_vert = "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshphong_frag = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshphong_vert = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshphysical_frag = "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshphysical_vert = "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", normal_frag = "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}", normal_vert = "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}", points_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}", points_vert = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}", shadow_frag = "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", shadow_vert = "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", sprite_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", sprite_vert = "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}";
const ShaderChunk = {
    alphamap_fragment: alphamap_fragment,
    alphamap_pars_fragment: alphamap_pars_fragment,
    alphatest_fragment: alphatest_fragment,
    aomap_fragment: aomap_fragment,
    aomap_pars_fragment: aomap_pars_fragment,
    begin_vertex: begin_vertex,
    beginnormal_vertex: beginnormal_vertex,
    bsdfs: bsdfs,
    bumpmap_pars_fragment: bumpmap_pars_fragment,
    clipping_planes_fragment: clipping_planes_fragment,
    clipping_planes_pars_fragment: clipping_planes_pars_fragment,
    clipping_planes_pars_vertex: clipping_planes_pars_vertex,
    clipping_planes_vertex: clipping_planes_vertex,
    color_fragment: color_fragment,
    color_pars_fragment: color_pars_fragment,
    color_pars_vertex: color_pars_vertex,
    color_vertex: color_vertex,
    common: common,
    cube_uv_reflection_fragment: cube_uv_reflection_fragment,
    defaultnormal_vertex: defaultnormal_vertex,
    displacementmap_pars_vertex: displacementmap_pars_vertex,
    displacementmap_vertex: displacementmap_vertex,
    emissivemap_fragment: emissivemap_fragment,
    emissivemap_pars_fragment: emissivemap_pars_fragment,
    encodings_fragment: encodings_fragment,
    encodings_pars_fragment: encodings_pars_fragment,
    envmap_fragment: envmap_fragment,
    envmap_common_pars_fragment: envmap_common_pars_fragment,
    envmap_pars_fragment: envmap_pars_fragment,
    envmap_pars_vertex: envmap_pars_vertex,
    envmap_physical_pars_fragment: envmap_physical_pars_fragment,
    envmap_vertex: envmap_vertex,
    fog_vertex: fog_vertex,
    fog_pars_vertex: fog_pars_vertex,
    fog_fragment: fog_fragment,
    fog_pars_fragment: fog_pars_fragment,
    gradientmap_pars_fragment: gradientmap_pars_fragment,
    lightmap_fragment: lightmap_fragment,
    lightmap_pars_fragment: lightmap_pars_fragment,
    lights_lambert_vertex: lights_lambert_vertex,
    lights_pars_begin: lights_pars_begin,
    lights_toon_fragment: lights_toon_fragment,
    lights_toon_pars_fragment: lights_toon_pars_fragment,
    lights_phong_fragment: lights_phong_fragment,
    lights_phong_pars_fragment: lights_phong_pars_fragment,
    lights_physical_fragment: lights_physical_fragment,
    lights_physical_pars_fragment: lights_physical_pars_fragment,
    lights_fragment_begin: lights_fragment_begin,
    lights_fragment_maps: lights_fragment_maps,
    lights_fragment_end: lights_fragment_end,
    logdepthbuf_fragment: logdepthbuf_fragment,
    logdepthbuf_pars_fragment: logdepthbuf_pars_fragment,
    logdepthbuf_pars_vertex: logdepthbuf_pars_vertex,
    logdepthbuf_vertex: logdepthbuf_vertex,
    map_fragment: map_fragment,
    map_pars_fragment: map_pars_fragment,
    map_particle_fragment: map_particle_fragment,
    map_particle_pars_fragment: map_particle_pars_fragment,
    metalnessmap_fragment: metalnessmap_fragment,
    metalnessmap_pars_fragment: metalnessmap_pars_fragment,
    morphnormal_vertex: morphnormal_vertex,
    morphtarget_pars_vertex: morphtarget_pars_vertex,
    morphtarget_vertex: morphtarget_vertex,
    normal_fragment_begin: normal_fragment_begin,
    normal_fragment_maps: normal_fragment_maps,
    normalmap_pars_fragment: normalmap_pars_fragment,
    clearcoat_normal_fragment_begin: clearcoat_normal_fragment_begin,
    clearcoat_normal_fragment_maps: clearcoat_normal_fragment_maps,
    clearcoat_pars_fragment: clearcoat_pars_fragment,
    packing: packing,
    premultiplied_alpha_fragment: premultiplied_alpha_fragment,
    project_vertex: project_vertex,
    dithering_fragment: dithering_fragment,
    dithering_pars_fragment: dithering_pars_fragment,
    roughnessmap_fragment: roughnessmap_fragment,
    roughnessmap_pars_fragment: roughnessmap_pars_fragment,
    shadowmap_pars_fragment: shadowmap_pars_fragment,
    shadowmap_pars_vertex: shadowmap_pars_vertex,
    shadowmap_vertex: shadowmap_vertex,
    shadowmask_pars_fragment: shadowmask_pars_fragment,
    skinbase_vertex: skinbase_vertex,
    skinning_pars_vertex: skinning_pars_vertex,
    skinning_vertex: skinning_vertex,
    skinnormal_vertex: skinnormal_vertex,
    specularmap_fragment: specularmap_fragment,
    specularmap_pars_fragment: specularmap_pars_fragment,
    tonemapping_fragment: tonemapping_fragment,
    tonemapping_pars_fragment: tonemapping_pars_fragment,
    transmissionmap_fragment: transmissionmap_fragment,
    transmissionmap_pars_fragment: transmissionmap_pars_fragment,
    uv_pars_fragment: uv_pars_fragment,
    uv_pars_vertex: uv_pars_vertex,
    uv_vertex: uv_vertex,
    uv2_pars_fragment: uv2_pars_fragment,
    uv2_pars_vertex: uv2_pars_vertex,
    uv2_vertex: uv2_vertex,
    worldpos_vertex: worldpos_vertex,
    background_frag: background_frag,
    background_vert: background_vert,
    cube_frag: cube_frag,
    cube_vert: cube_vert,
    depth_frag: depth_frag,
    depth_vert: depth_vert,
    distanceRGBA_frag: distanceRGBA_frag,
    distanceRGBA_vert: distanceRGBA_vert,
    equirect_frag: equirect_frag,
    equirect_vert: equirect_vert,
    linedashed_frag: linedashed_frag,
    linedashed_vert: linedashed_vert,
    meshbasic_frag: meshbasic_frag,
    meshbasic_vert: meshbasic_vert,
    meshlambert_frag: meshlambert_frag,
    meshlambert_vert: meshlambert_vert,
    meshmatcap_frag: meshmatcap_frag,
    meshmatcap_vert: meshmatcap_vert,
    meshtoon_frag: meshtoon_frag,
    meshtoon_vert: meshtoon_vert,
    meshphong_frag: meshphong_frag,
    meshphong_vert: meshphong_vert,
    meshphysical_frag: meshphysical_frag,
    meshphysical_vert: meshphysical_vert,
    normal_frag: normal_frag,
    normal_vert: normal_vert,
    points_frag: points_frag,
    points_vert: points_vert,
    shadow_frag: shadow_frag,
    shadow_vert: shadow_vert,
    sprite_frag: sprite_frag,
    sprite_vert: sprite_vert
}, UniformsLib = {
    common: {
        diffuse: {
            value: new Color(15658734)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        uvTransform: {
            value: new Matrix3
        },
        uv2Transform: {
            value: new Matrix3
        },
        alphaMap: {
            value: null
        }
    },
    specularmap: {
        specularMap: {
            value: null
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        refractionRatio: {
            value: 0.98
        },
        maxMipLevel: {
            value: 0
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalScale: {
            value: new Vector2(1, 1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 0.00025
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2000
        },
        fogColor: {
            value: new Color(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMap: {
            value: []
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotShadowMap: {
            value: []
        },
        spotShadowMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMap: {
            value: []
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        ltc_1: {
            value: null
        },
        ltc_2: {
            value: null
        }
    },
    points: {
        diffuse: {
            value: new Color(15658734)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        uvTransform: {
            value: new Matrix3
        }
    },
    sprite: {
        diffuse: {
            value: new Color(15658734)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new Vector2(0.5, 0.5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        uvTransform: {
            value: new Matrix3
        }
    }
}, ShaderLib = {
    basic: {
        uniforms: mergeUniforms([
            UniformsLib.common,
            UniformsLib.specularmap,
            UniformsLib.envmap,
            UniformsLib.aomap,
            UniformsLib.lightmap,
            UniformsLib.fog
        ]),
        vertexShader: ShaderChunk.meshbasic_vert,
        fragmentShader: ShaderChunk.meshbasic_frag
    },
    lambert: {
        uniforms: mergeUniforms([
            UniformsLib.common,
            UniformsLib.specularmap,
            UniformsLib.envmap,
            UniformsLib.aomap,
            UniformsLib.lightmap,
            UniformsLib.emissivemap,
            UniformsLib.fog,
            UniformsLib.lights,
            {
                emissive: {
                    value: new Color(0)
                }
            }
        ]),
        vertexShader: ShaderChunk.meshlambert_vert,
        fragmentShader: ShaderChunk.meshlambert_frag
    },
    phong: {
        uniforms: mergeUniforms([
            UniformsLib.common,
            UniformsLib.specularmap,
            UniformsLib.envmap,
            UniformsLib.aomap,
            UniformsLib.lightmap,
            UniformsLib.emissivemap,
            UniformsLib.bumpmap,
            UniformsLib.normalmap,
            UniformsLib.displacementmap,
            UniformsLib.fog,
            UniformsLib.lights,
            {
                emissive: {
                    value: new Color(0)
                },
                specular: {
                    value: new Color(1118481)
                },
                shininess: {
                    value: 30
                }
            }
        ]),
        vertexShader: ShaderChunk.meshphong_vert,
        fragmentShader: ShaderChunk.meshphong_frag
    },
    standard: {
        uniforms: mergeUniforms([
            UniformsLib.common,
            UniformsLib.envmap,
            UniformsLib.aomap,
            UniformsLib.lightmap,
            UniformsLib.emissivemap,
            UniformsLib.bumpmap,
            UniformsLib.normalmap,
            UniformsLib.displacementmap,
            UniformsLib.roughnessmap,
            UniformsLib.metalnessmap,
            UniformsLib.fog,
            UniformsLib.lights,
            {
                emissive: {
                    value: new Color(0)
                },
                roughness: {
                    value: 1
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }
        ]),
        vertexShader: ShaderChunk.meshphysical_vert,
        fragmentShader: ShaderChunk.meshphysical_frag
    },
    toon: {
        uniforms: mergeUniforms([
            UniformsLib.common,
            UniformsLib.aomap,
            UniformsLib.lightmap,
            UniformsLib.emissivemap,
            UniformsLib.bumpmap,
            UniformsLib.normalmap,
            UniformsLib.displacementmap,
            UniformsLib.gradientmap,
            UniformsLib.fog,
            UniformsLib.lights,
            {
                emissive: {
                    value: new Color(0)
                }
            }
        ]),
        vertexShader: ShaderChunk.meshtoon_vert,
        fragmentShader: ShaderChunk.meshtoon_frag
    },
    matcap: {
        uniforms: mergeUniforms([
            UniformsLib.common,
            UniformsLib.bumpmap,
            UniformsLib.normalmap,
            UniformsLib.displacementmap,
            UniformsLib.fog,
            {
                matcap: {
                    value: null
                }
            }
        ]),
        vertexShader: ShaderChunk.meshmatcap_vert,
        fragmentShader: ShaderChunk.meshmatcap_frag
    },
    points: {
        uniforms: mergeUniforms([
            UniformsLib.points,
            UniformsLib.fog
        ]),
        vertexShader: ShaderChunk.points_vert,
        fragmentShader: ShaderChunk.points_frag
    },
    dashed: {
        uniforms: mergeUniforms([
            UniformsLib.common,
            UniformsLib.fog,
            {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }
        ]),
        vertexShader: ShaderChunk.linedashed_vert,
        fragmentShader: ShaderChunk.linedashed_frag
    },
    depth: {
        uniforms: mergeUniforms([
            UniformsLib.common,
            UniformsLib.displacementmap
        ]),
        vertexShader: ShaderChunk.depth_vert,
        fragmentShader: ShaderChunk.depth_frag
    },
    normal: {
        uniforms: mergeUniforms([
            UniformsLib.common,
            UniformsLib.bumpmap,
            UniformsLib.normalmap,
            UniformsLib.displacementmap,
            {
                opacity: {
                    value: 1
                }
            }
        ]),
        vertexShader: ShaderChunk.normal_vert,
        fragmentShader: ShaderChunk.normal_frag
    },
    sprite: {
        uniforms: mergeUniforms([
            UniformsLib.sprite,
            UniformsLib.fog
        ]),
        vertexShader: ShaderChunk.sprite_vert,
        fragmentShader: ShaderChunk.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new Matrix3
            },
            t2D: {
                value: null
            }
        },
        vertexShader: ShaderChunk.background_vert,
        fragmentShader: ShaderChunk.background_frag
    },
    cube: {
        uniforms: mergeUniforms([
            UniformsLib.envmap,
            {
                opacity: {
                    value: 1
                }
            }
        ]),
        vertexShader: ShaderChunk.cube_vert,
        fragmentShader: ShaderChunk.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: ShaderChunk.equirect_vert,
        fragmentShader: ShaderChunk.equirect_frag
    },
    distanceRGBA: {
        uniforms: mergeUniforms([
            UniformsLib.common,
            UniformsLib.displacementmap,
            {
                referencePosition: {
                    value: new Vector3
                },
                nearDistance: {
                    value: 1
                },
                farDistance: {
                    value: 1000
                }
            }
        ]),
        vertexShader: ShaderChunk.distanceRGBA_vert,
        fragmentShader: ShaderChunk.distanceRGBA_frag
    },
    shadow: {
        uniforms: mergeUniforms([
            UniformsLib.lights,
            UniformsLib.fog,
            {
                color: {
                    value: new Color(0)
                },
                opacity: {
                    value: 1
                }
            }
        ]),
        vertexShader: ShaderChunk.shadow_vert,
        fragmentShader: ShaderChunk.shadow_frag
    }
};
function WebGLBackground(e630, t28, r15, n, i11) {
    const a = new Color(0);
    let o, s, l = 0, c = null, h = 0, u = null;
    function d(e631, t) {
        r15.buffers.color.setClear(e631.r, e631.g, e631.b, t, i11);
    }
    return {
        getClearColor: function() {
            return a;
        },
        setClearColor: function(e632, t = 1) {
            a.set(e632), d(a, l = t);
        },
        getClearAlpha: function() {
            return l;
        },
        setClearAlpha: function(e633) {
            d(a, l = e633);
        },
        render: function(r16, i, p, m) {
            let f = !0 === i.isScene ? i.background : null;
            f && f.isTexture && (f = t28.get(f));
            const g = e630.xr, v = g.getSession && g.getSession();
            v && "additive" === v.environmentBlendMode && (f = null), null === f ? d(a, l) : f && f.isColor && (d(f, 1), m = !0), (e630.autoClear || m) && e630.clear(e630.autoClearColor, e630.autoClearDepth, e630.autoClearStencil), f && (f.isCubeTexture || f.mapping === CubeUVReflectionMapping) ? (void 0 === s && ((s = new Mesh(new BoxGeometry(1, 1, 1), new ShaderMaterial({
                name: "BackgroundCubeMaterial",
                uniforms: cloneUniforms(ShaderLib.cube.uniforms),
                vertexShader: ShaderLib.cube.vertexShader,
                fragmentShader: ShaderLib.cube.fragmentShader,
                side: BackSide,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            }))).geometry.deleteAttribute("normal"), s.geometry.deleteAttribute("uv"), s.onBeforeRender = function(e, t, r) {
                this.matrixWorld.copyPosition(r.matrixWorld);
            }, Object.defineProperty(s.material, "envMap", {
                get: function() {
                    return this.uniforms.envMap.value;
                }
            }), n.update(s)), s.material.uniforms.envMap.value = f, s.material.uniforms.flipEnvMap.value = f.isCubeTexture && f._needsFlipEnvMap ? -1 : 1, c === f && h === f.version && u === e630.toneMapping || (s.material.needsUpdate = !0, c = f, h = f.version, u = e630.toneMapping), r16.unshift(s, s.geometry, s.material, 0, 0, null)) : f && f.isTexture && (void 0 === o && ((o = new Mesh(new PlaneGeometry(2, 2), new ShaderMaterial({
                name: "BackgroundMaterial",
                uniforms: cloneUniforms(ShaderLib.background.uniforms),
                vertexShader: ShaderLib.background.vertexShader,
                fragmentShader: ShaderLib.background.fragmentShader,
                side: FrontSide,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            }))).geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
                get: function() {
                    return this.uniforms.t2D.value;
                }
            }), n.update(o)), o.material.uniforms.t2D.value = f, !0 === f.matrixAutoUpdate && f.updateMatrix(), o.material.uniforms.uvTransform.value.copy(f.matrix), c === f && h === f.version && u === e630.toneMapping || (o.material.needsUpdate = !0, c = f, h = f.version, u = e630.toneMapping), r16.unshift(o, o.geometry, o.material, 0, 0, null));
        }
    };
}
function WebGLBindingStates(e634, t29, r17, n16) {
    const i12 = e634.getParameter(34921), a5 = n16.isWebGL2 ? null : t29.get("OES_vertex_array_object"), o3 = n16.isWebGL2 || null !== a5, s2 = {}, l1 = d(null);
    let c1 = l1;
    function h1(t) {
        return n16.isWebGL2 ? e634.bindVertexArray(t) : a5.bindVertexArrayOES(t);
    }
    function u3(t) {
        return n16.isWebGL2 ? e634.deleteVertexArray(t) : a5.deleteVertexArrayOES(t);
    }
    function d(e636) {
        const t = [], r = [], n = [];
        for(let e635 = 0; e635 < i12; e635++)t[e635] = 0, r[e635] = 0, n[e635] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: t,
            enabledAttributes: r,
            attributeDivisors: n,
            object: e636,
            attributes: {},
            index: null
        };
    }
    function p() {
        const e637 = c1.newAttributes;
        for(let t = 0, r = e637.length; t < r; t++)e637[t] = 0;
    }
    function m(e638) {
        f(e638, 0);
    }
    function f(r, i) {
        const a = c1.newAttributes, o = c1.enabledAttributes, s = c1.attributeDivisors;
        if (a[r] = 1, 0 === o[r] && (e634.enableVertexAttribArray(r), o[r] = 1), s[r] !== i) (n16.isWebGL2 ? e634 : t29.get("ANGLE_instanced_arrays"))[n16.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](r, i), s[r] = i;
    }
    function g() {
        const t = c1.newAttributes, r = c1.enabledAttributes;
        for(let n = 0, i = r.length; n < i; n++)r[n] !== t[n] && (e634.disableVertexAttribArray(n), r[n] = 0);
    }
    function v(t, r, i, a, o, s) {
        !0 !== n16.isWebGL2 || 5124 !== i && 5125 !== i ? e634.vertexAttribPointer(t, r, i, a, o, s) : e634.vertexAttribIPointer(t, r, i, o, s);
    }
    function _1() {
        y1(), c1 !== l1 && h1((c1 = l1).object);
    }
    function y1() {
        l1.geometry = null, l1.program = null, l1.wireframe = !1;
    }
    return {
        setup: function(i13, l2, u4, _, y) {
            let x = !1;
            if (o3) {
                const t30 = function(t, r, i) {
                    const o = !0 === i.wireframe;
                    let l = s2[t.id];
                    void 0 === l && (l = {}, s2[t.id] = l);
                    let c = l[r.id];
                    void 0 === c && (c = {}, l[r.id] = c);
                    let h = c[o];
                    return void 0 === h && (h = d(n16.isWebGL2 ? e634.createVertexArray() : a5.createVertexArrayOES()), c[o] = h), h;
                }(_, u4, l2);
                c1 !== t30 && h1((c1 = t30).object), (x = function(e640, t) {
                    const r = c1.attributes, n = e640.attributes;
                    let i = 0;
                    for(const e639 in n){
                        const t = r[e639], a = n[e639];
                        if (void 0 === t) return !0;
                        if (t.attribute !== a) return !0;
                        if (t.data !== a.data) return !0;
                        i++;
                    }
                    return c1.attributesNum !== i || c1.index !== t;
                }(_, y)) && function(e642, t) {
                    const r = {}, n = e642.attributes;
                    let i = 0;
                    for(const e641 in n){
                        const t = n[e641], a = {};
                        a.attribute = t, t.data && (a.data = t.data), r[e641] = a, i++;
                    }
                    c1.attributes = r, c1.attributesNum = i, c1.index = t;
                }(_, y);
            } else {
                const e643 = !0 === l2.wireframe;
                c1.geometry === _.id && c1.program === u4.id && c1.wireframe === e643 || (c1.geometry = _.id, c1.program = u4.id, c1.wireframe = e643, x = !0);
            }
            !0 === i13.isInstancedMesh && (x = !0), null !== y && r17.update(y, 34963), x && (function(i, a, o, s) {
                if (!1 === n16.isWebGL2 && (i.isInstancedMesh || s.isInstancedBufferGeometry) && null === t29.get("ANGLE_instanced_arrays")) return;
                p();
                const l = s.attributes, c = o.getAttributes(), h = a.defaultAttributeValues;
                for(const t in c){
                    const n = c[t];
                    if (n >= 0) {
                        const a = l[t];
                        if (void 0 !== a) {
                            const t = a.normalized, i = a.itemSize, o = r17.get(a);
                            if (void 0 === o) continue;
                            const l = o.buffer, c = o.type, h = o.bytesPerElement;
                            if (a.isInterleavedBufferAttribute) {
                                const r = a.data, o = r.stride, u = a.offset;
                                r && r.isInstancedInterleavedBuffer ? (f(n, r.meshPerAttribute), void 0 === s._maxInstanceCount && (s._maxInstanceCount = r.meshPerAttribute * r.count)) : m(n), e634.bindBuffer(34962, l), v(n, i, c, t, o * h, u * h);
                            } else a.isInstancedBufferAttribute ? (f(n, a.meshPerAttribute), void 0 === s._maxInstanceCount && (s._maxInstanceCount = a.meshPerAttribute * a.count)) : m(n), e634.bindBuffer(34962, l), v(n, i, c, t, 0, 0);
                        } else if ("instanceMatrix" === t) {
                            const t = r17.get(i.instanceMatrix);
                            if (void 0 === t) continue;
                            const a = t.buffer, o = t.type;
                            f(n + 0, 1), f(n + 1, 1), f(n + 2, 1), f(n + 3, 1), e634.bindBuffer(34962, a), e634.vertexAttribPointer(n + 0, 4, o, !1, 64, 0), e634.vertexAttribPointer(n + 1, 4, o, !1, 64, 16), e634.vertexAttribPointer(n + 2, 4, o, !1, 64, 32), e634.vertexAttribPointer(n + 3, 4, o, !1, 64, 48);
                        } else if ("instanceColor" === t) {
                            const t = r17.get(i.instanceColor);
                            if (void 0 === t) continue;
                            const a = t.buffer, o = t.type;
                            f(n, 1), e634.bindBuffer(34962, a), e634.vertexAttribPointer(n, 3, o, !1, 12, 0);
                        } else if (void 0 !== h) {
                            const r = h[t];
                            if (void 0 !== r) switch(r.length){
                                case 2:
                                    e634.vertexAttrib2fv(n, r);
                                    break;
                                case 3:
                                    e634.vertexAttrib3fv(n, r);
                                    break;
                                case 4:
                                    e634.vertexAttrib4fv(n, r);
                                    break;
                                default:
                                    e634.vertexAttrib1fv(n, r);
                            }
                        }
                    }
                }
                g();
            }(i13, l2, u4, _), null !== y && e634.bindBuffer(34963, r17.get(y).buffer));
        },
        reset: _1,
        resetDefaultState: y1,
        dispose: function() {
            _1();
            for(const e645 in s2){
                const t = s2[e645];
                for(const e644 in t){
                    const r = t[e644];
                    for(const e646 in r)u3(r[e646].object), delete r[e646];
                    delete t[e644];
                }
                delete s2[e645];
            }
        },
        releaseStatesOfGeometry: function(e648) {
            if (void 0 === s2[e648.id]) return;
            const t = s2[e648.id];
            for(const e647 in t){
                const r = t[e647];
                for(const e649 in r)u3(r[e649].object), delete r[e649];
                delete t[e647];
            }
            delete s2[e648.id];
        },
        releaseStatesOfProgram: function(e651) {
            for(const t in s2){
                const r = s2[t];
                if (void 0 === r[e651.id]) continue;
                const n = r[e651.id];
                for(const e650 in n)u3(n[e650].object), delete n[e650];
                delete r[e651.id];
            }
        },
        initAttributes: p,
        enableAttribute: m,
        disableUnusedAttributes: g
    };
}
function WebGLBufferRenderer(e652, t32, r, n17) {
    const i = n17.isWebGL2;
    let a;
    this.setMode = function(e653) {
        a = e653;
    }, this.render = function(t, n) {
        e652.drawArrays(a, t, n), r.update(n, a, 1);
    }, this.renderInstances = function(n, o, s) {
        if (0 === s) return;
        let l, c;
        if (i) l = e652, c = "drawArraysInstanced";
        else if (c = "drawArraysInstancedANGLE", null === (l = t32.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        l[c](a, n, o, s), r.update(o, a, s);
    };
}
function WebGLCapabilities(e654, t33, r18) {
    let n;
    function i(t) {
        if ("highp" === t) {
            if (e654.getShaderPrecisionFormat(35633, 36338).precision > 0 && e654.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
            t = "mediump";
        }
        return "mediump" === t && e654.getShaderPrecisionFormat(35633, 36337).precision > 0 && e654.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
    }
    const a = "undefined" != typeof WebGL2RenderingContext && e654 instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && e654 instanceof WebGL2ComputeRenderingContext;
    let o = void 0 !== r18.precision ? r18.precision : "highp";
    const s = i(o);
    s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
    const l = !0 === r18.logarithmicDepthBuffer, c = e654.getParameter(34930), h = e654.getParameter(35660), u = e654.getParameter(3379), d = e654.getParameter(34076), p = e654.getParameter(34921), m = e654.getParameter(36347), f = e654.getParameter(36348), g = e654.getParameter(36349), v = h > 0, _ = a || t33.has("OES_texture_float");
    return {
        isWebGL2: a,
        getMaxAnisotropy: function() {
            if (void 0 !== n) return n;
            if (!0 === t33.has("EXT_texture_filter_anisotropic")) {
                const r = t33.get("EXT_texture_filter_anisotropic");
                n = e654.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            } else n = 0;
            return n;
        },
        getMaxPrecision: i,
        precision: o,
        logarithmicDepthBuffer: l,
        maxTextures: c,
        maxVertexTextures: h,
        maxTextureSize: u,
        maxCubemapSize: d,
        maxAttributes: p,
        maxVertexUniforms: m,
        maxVaryings: f,
        maxFragmentUniforms: g,
        vertexTextures: v,
        floatFragmentTextures: _,
        floatVertexTextures: v && _,
        maxSamples: a ? e654.getParameter(36183) : 0
    };
}
function WebGLClipping(e655) {
    const t35 = this;
    let r19 = null, n18 = 0, i14 = !1, a6 = !1;
    const o4 = new Plane, s3 = new Matrix3, l = {
        value: null,
        needsUpdate: !1
    };
    function c2() {
        l.value !== r19 && (l.value = r19, l.needsUpdate = n18 > 0), t35.numPlanes = n18, t35.numIntersection = 0;
    }
    function h(e656, r, n, i) {
        const a = null !== e656 ? e656.length : 0;
        let c = null;
        if (0 !== a) {
            if (c = l.value, !0 !== i || null === c) {
                const t = n + 4 * a, i = r.matrixWorldInverse;
                s3.getNormalMatrix(i), (null === c || c.length < t) && (c = new Float32Array(t));
                for(let t34 = 0, r20 = n; t34 !== a; ++t34, r20 += 4)o4.copy(e656[t34]).applyMatrix4(i, s3), o4.normal.toArray(c, r20), c[r20 + 3] = o4.constant;
            }
            l.value = c, l.needsUpdate = !0;
        }
        return t35.numPlanes = a, t35.numIntersection = 0, c;
    }
    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e657, t, a) {
        const o = 0 !== e657.length || t || 0 !== n18 || i14;
        return i14 = t, r19 = h(e657, a, 0), n18 = e657.length, o;
    }, this.beginShadows = function() {
        a6 = !0, h(null);
    }, this.endShadows = function() {
        a6 = !1, c2();
    }, this.setState = function(t, o, s) {
        const u = t.clippingPlanes, d = t.clipIntersection, p = t.clipShadows, m = e655.get(t);
        if (!i14 || null === u || 0 === u.length || a6 && !p) a6 ? h(null) : c2();
        else {
            const e659 = a6 ? 0 : n18, t = 4 * e659;
            let i = m.clippingState || null;
            l.value = i, i = h(u, o, t, s);
            for(let e658 = 0; e658 !== t; ++e658)i[e658] = r19[e658];
            m.clippingState = i, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += e659;
        }
    };
}
function WebGLCubeMaps(e660) {
    let t36 = new WeakMap;
    function r22(e661, t) {
        return t === EquirectangularReflectionMapping ? e661.mapping = CubeReflectionMapping : t === EquirectangularRefractionMapping && (e661.mapping = CubeRefractionMapping), e661;
    }
    function n(e662) {
        const r = e662.target;
        r.removeEventListener("dispose", n);
        const i = t36.get(r);
        void 0 !== i && (t36.delete(r), i.dispose());
    }
    return {
        get: function(i) {
            if (i && i.isTexture) {
                const a = i.mapping;
                if (a === EquirectangularReflectionMapping || a === EquirectangularRefractionMapping) {
                    if (t36.has(i)) return r22(t36.get(i).texture, i.mapping);
                    {
                        const a = i.image;
                        if (a && a.height > 0) {
                            const o = e660.getRenderTarget(), s = new WebGLCubeRenderTarget(a.height / 2);
                            return s.fromEquirectangularTexture(e660, i), t36.set(i, s), e660.setRenderTarget(o), i.addEventListener("dispose", n), r22(s.texture, i.mapping);
                        }
                        return null;
                    }
                }
            }
            return i;
        },
        dispose: function() {
            t36 = new WeakMap;
        }
    };
}
function WebGLExtensions(e663) {
    const t37 = {};
    function r23(r) {
        if (void 0 !== t37[r]) return t37[r];
        let n;
        switch(r){
            case "WEBGL_depth_texture":
                n = e663.getExtension("WEBGL_depth_texture") || e663.getExtension("MOZ_WEBGL_depth_texture") || e663.getExtension("WEBKIT_WEBGL_depth_texture");
                break;
            case "EXT_texture_filter_anisotropic":
                n = e663.getExtension("EXT_texture_filter_anisotropic") || e663.getExtension("MOZ_EXT_texture_filter_anisotropic") || e663.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case "WEBGL_compressed_texture_s3tc":
                n = e663.getExtension("WEBGL_compressed_texture_s3tc") || e663.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e663.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case "WEBGL_compressed_texture_pvrtc":
                n = e663.getExtension("WEBGL_compressed_texture_pvrtc") || e663.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            default:
                n = e663.getExtension(r);
        }
        return t37[r] = n, n;
    }
    return {
        has: function(e664) {
            return null !== r23(e664);
        },
        init: function(e665) {
            e665.isWebGL2 ? r23("EXT_color_buffer_float") : (r23("WEBGL_depth_texture"), r23("OES_texture_float"), r23("OES_texture_half_float"), r23("OES_texture_half_float_linear"), r23("OES_standard_derivatives"), r23("OES_element_index_uint"), r23("OES_vertex_array_object"), r23("ANGLE_instanced_arrays")), r23("OES_texture_float_linear"), r23("EXT_color_buffer_half_float");
        },
        get: function(e666) {
            const t = r23(e666);
            return null === t && console.warn("THREE.WebGLRenderer: " + e666 + " extension not supported."), t;
        }
    };
}
function WebGLGeometries(e668, t38, r24, n19) {
    const i15 = {}, a7 = new WeakMap;
    function o5(e669) {
        const s = e669.target;
        null !== s.index && t38.remove(s.index);
        for(const e667 in s.attributes)t38.remove(s.attributes[e667]);
        s.removeEventListener("dispose", o5), delete i15[s.id];
        const l = a7.get(s);
        l && (t38.remove(l), a7.delete(s)), n19.releaseStatesOfGeometry(s), !0 === s.isInstancedBufferGeometry && delete s._maxInstanceCount, r24.memory.geometries--;
    }
    function s4(e670) {
        const r = [], n = e670.index, i = e670.attributes.position;
        let o = 0;
        if (null !== n) {
            const e671 = n.array;
            o = n.version;
            for(let t = 0, n20 = e671.length; t < n20; t += 3){
                const n = e671[t + 0], i = e671[t + 1], a = e671[t + 2];
                r.push(n, i, i, a, a, n);
            }
        } else {
            const e672 = i.array;
            o = i.version;
            for(let t = 0, n = e672.length / 3 - 1; t < n; t += 3){
                const e673 = t + 0, n = t + 1, i = t + 2;
                r.push(e673, n, n, i, i, e673);
            }
        }
        const s = new (arrayMax(r) > 65535 ? Uint32BufferAttribute : Uint16BufferAttribute)(r, 1);
        s.version = o;
        const l = a7.get(e670);
        l && t38.remove(l), a7.set(e670, s);
    }
    return {
        get: function(e, t) {
            return !0 === i15[t.id] ? t : (t.addEventListener("dispose", o5), i15[t.id] = !0, r24.memory.geometries++, t);
        },
        update: function(e676) {
            const r = e676.attributes;
            for(const e674 in r)t38.update(r[e674], 34962);
            const n = e676.morphAttributes;
            for(const e675 in n){
                const r = n[e675];
                for(let e677 = 0, n21 = r.length; e677 < n21; e677++)t38.update(r[e677], 34962);
            }
        },
        getWireframeAttribute: function(e678) {
            const t = a7.get(e678);
            if (t) {
                const r = e678.index;
                null !== r && t.version < r.version && s4(e678);
            } else s4(e678);
            return a7.get(e678);
        }
    };
}
function WebGLIndexedBufferRenderer(e679, t39, r, n22) {
    const i = n22.isWebGL2;
    let a, o, s;
    this.setMode = function(e680) {
        a = e680;
    }, this.setIndex = function(e681) {
        o = e681.type, s = e681.bytesPerElement;
    }, this.render = function(t, n) {
        e679.drawElements(a, n, o, t * s), r.update(n, a, 1);
    }, this.renderInstances = function(n, l, c) {
        if (0 === c) return;
        let h, u;
        if (i) h = e679, u = "drawElementsInstanced";
        else if (u = "drawElementsInstancedANGLE", null === (h = t39.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        h[u](a, l, o, n * s, c), r.update(l, a, c);
    };
}
function WebGLInfo(e682) {
    const t = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    return {
        memory: {
            geometries: 0,
            textures: 0
        },
        render: t,
        programs: null,
        autoReset: !0,
        reset: function() {
            t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
        },
        update: function(e683, r, n) {
            switch(t.calls++, r){
                case 4:
                    t.triangles += n * (e683 / 3);
                    break;
                case 1:
                    t.lines += n * (e683 / 2);
                    break;
                case 3:
                    t.lines += n * (e683 - 1);
                    break;
                case 2:
                    t.lines += n * e683;
                    break;
                case 0:
                    t.points += n * e683;
                    break;
                default:
                    console.error("THREE.WebGLInfo: Unknown draw mode:", r);
            }
        }
    };
}
function numericalSort(e684, t) {
    return e684[0] - t[0];
}
function absNumericalSort(e685, t) {
    return Math.abs(t[1]) - Math.abs(e685[1]);
}
function WebGLMorphtargets(e689) {
    const t40 = {}, r = new Float32Array(8), n = [];
    for(let e686 = 0; e686 < 8; e686++)n[e686] = [
        e686,
        0
    ];
    return {
        update: function(i, a, o, s) {
            const l = i.morphTargetInfluences, c = void 0 === l ? 0 : l.length;
            let h = t40[a.id];
            if (void 0 === h) {
                h = [];
                for(let e690 = 0; e690 < c; e690++)h[e690] = [
                    e690,
                    0
                ];
                t40[a.id] = h;
            }
            for(let e691 = 0; e691 < c; e691++){
                const t = h[e691];
                t[0] = e691, t[1] = l[e691];
            }
            h.sort(absNumericalSort);
            for(let e687 = 0; e687 < 8; e687++)e687 < c && h[e687][1] ? (n[e687][0] = h[e687][0], n[e687][1] = h[e687][1]) : (n[e687][0] = Number.MAX_SAFE_INTEGER, n[e687][1] = 0);
            n.sort(numericalSort);
            const u = o.morphTargets && a.morphAttributes.position, d = o.morphNormals && a.morphAttributes.normal;
            let p = 0;
            for(let e688 = 0; e688 < 8; e688++){
                const t = n[e688], i = t[0], o = t[1];
                i !== Number.MAX_SAFE_INTEGER && o ? (u && a.getAttribute("morphTarget" + e688) !== u[i] && a.setAttribute("morphTarget" + e688, u[i]), d && a.getAttribute("morphNormal" + e688) !== d[i] && a.setAttribute("morphNormal" + e688, d[i]), r[e688] = o, p += o) : (u && !0 === a.hasAttribute("morphTarget" + e688) && a.deleteAttribute("morphTarget" + e688), d && !0 === a.hasAttribute("morphNormal" + e688) && a.deleteAttribute("morphNormal" + e688), r[e688] = 0);
            }
            const m = a.morphTargetsRelative ? 1 : 1 - p;
            s.getUniforms().setValue(e689, "morphTargetBaseInfluence", m), s.getUniforms().setValue(e689, "morphTargetInfluences", r);
        }
    };
}
function WebGLObjects(e692, t41, r, n) {
    let i = new WeakMap;
    function a(e693) {
        const t = e693.target;
        t.removeEventListener("dispose", a), r.remove(t.instanceMatrix), null !== t.instanceColor && r.remove(t.instanceColor);
    }
    return {
        update: function(e694) {
            const o = n.render.frame, s = e694.geometry, l = t41.get(e694, s);
            return i.get(l) !== o && (t41.update(l), i.set(l, o)), e694.isInstancedMesh && (!1 === e694.hasEventListener("dispose", a) && e694.addEventListener("dispose", a), r.update(e694.instanceMatrix, 34962), null !== e694.instanceColor && r.update(e694.instanceColor, 34962)), l;
        },
        dispose: function() {
            i = new WeakMap;
        }
    };
}
ShaderLib.physical = {
    uniforms: mergeUniforms([
        ShaderLib.standard.uniforms,
        {
            clearcoat: {
                value: 0
            },
            clearcoatMap: {
                value: null
            },
            clearcoatRoughness: {
                value: 0
            },
            clearcoatRoughnessMap: {
                value: null
            },
            clearcoatNormalScale: {
                value: new Vector2(1, 1)
            },
            clearcoatNormalMap: {
                value: null
            },
            sheen: {
                value: new Color(0)
            },
            transmission: {
                value: 0
            },
            transmissionMap: {
                value: null
            }
        }
    ]),
    vertexShader: ShaderChunk.meshphysical_vert,
    fragmentShader: ShaderChunk.meshphysical_frag
};
class DataTexture2DArray extends Texture {
    constructor(e695 = null, t = 1, r = 1, n = 1){
        super(null), this.image = {
            data: e695,
            width: t,
            height: r,
            depth: n
        }, this.magFilter = NearestFilter, this.minFilter = NearestFilter, this.wrapR = ClampToEdgeWrapping, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
    }
}
DataTexture2DArray.prototype.isDataTexture2DArray = !0;
class DataTexture3D extends Texture {
    constructor(e696 = null, t = 1, r = 1, n = 1){
        super(null), this.image = {
            data: e696,
            width: t,
            height: r,
            depth: n
        }, this.magFilter = NearestFilter, this.minFilter = NearestFilter, this.wrapR = ClampToEdgeWrapping, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
    }
}
DataTexture3D.prototype.isDataTexture3D = !0;
const emptyTexture = new Texture, emptyTexture2dArray = new DataTexture2DArray, emptyTexture3d = new DataTexture3D, emptyCubeTexture = new CubeTexture, arrayCacheF32 = [], arrayCacheI32 = [], mat4array = new Float32Array(16), mat3array = new Float32Array(9), mat2array = new Float32Array(4);
function flatten(e697, t, r) {
    const n = e697[0];
    if (n <= 0 || n > 0) return e697;
    const i = t * r;
    let a = arrayCacheF32[i];
    if (void 0 === a && (a = new Float32Array(i), arrayCacheF32[i] = a), 0 !== t) {
        n.toArray(a, 0);
        for(let n23 = 1, i = 0; n23 !== t; ++n23)i += r, e697[n23].toArray(a, i);
    }
    return a;
}
function arraysEqual(e698, t) {
    if (e698.length !== t.length) return !1;
    for(let r = 0, n = e698.length; r < n; r++)if (e698[r] !== t[r]) return !1;
    return !0;
}
function copyArray(e699, t) {
    for(let r = 0, n = t.length; r < n; r++)e699[r] = t[r];
}
function allocTexUnits(e700, t) {
    let r = arrayCacheI32[t];
    void 0 === r && (r = new Int32Array(t), arrayCacheI32[t] = r);
    for(let n = 0; n !== t; ++n)r[n] = e700.allocateTextureUnit();
    return r;
}
function setValueV1f(e701, t) {
    const r = this.cache;
    r[0] !== t && (e701.uniform1f(this.addr, t), r[0] = t);
}
function setValueV2f(e702, t) {
    const r = this.cache;
    if (void 0 !== t.x) r[0] === t.x && r[1] === t.y || (e702.uniform2f(this.addr, t.x, t.y), r[0] = t.x, r[1] = t.y);
    else {
        if (arraysEqual(r, t)) return;
        e702.uniform2fv(this.addr, t), copyArray(r, t);
    }
}
function setValueV3f(e703, t) {
    const r = this.cache;
    if (void 0 !== t.x) r[0] === t.x && r[1] === t.y && r[2] === t.z || (e703.uniform3f(this.addr, t.x, t.y, t.z), r[0] = t.x, r[1] = t.y, r[2] = t.z);
    else if (void 0 !== t.r) r[0] === t.r && r[1] === t.g && r[2] === t.b || (e703.uniform3f(this.addr, t.r, t.g, t.b), r[0] = t.r, r[1] = t.g, r[2] = t.b);
    else {
        if (arraysEqual(r, t)) return;
        e703.uniform3fv(this.addr, t), copyArray(r, t);
    }
}
function setValueV4f(e704, t) {
    const r = this.cache;
    if (void 0 !== t.x) r[0] === t.x && r[1] === t.y && r[2] === t.z && r[3] === t.w || (e704.uniform4f(this.addr, t.x, t.y, t.z, t.w), r[0] = t.x, r[1] = t.y, r[2] = t.z, r[3] = t.w);
    else {
        if (arraysEqual(r, t)) return;
        e704.uniform4fv(this.addr, t), copyArray(r, t);
    }
}
function setValueM2(e705, t) {
    const r = this.cache, n = t.elements;
    if (void 0 === n) {
        if (arraysEqual(r, t)) return;
        e705.uniformMatrix2fv(this.addr, !1, t), copyArray(r, t);
    } else {
        if (arraysEqual(r, n)) return;
        mat2array.set(n), e705.uniformMatrix2fv(this.addr, !1, mat2array), copyArray(r, n);
    }
}
function setValueM3(e706, t) {
    const r = this.cache, n = t.elements;
    if (void 0 === n) {
        if (arraysEqual(r, t)) return;
        e706.uniformMatrix3fv(this.addr, !1, t), copyArray(r, t);
    } else {
        if (arraysEqual(r, n)) return;
        mat3array.set(n), e706.uniformMatrix3fv(this.addr, !1, mat3array), copyArray(r, n);
    }
}
function setValueM4(e707, t) {
    const r = this.cache, n = t.elements;
    if (void 0 === n) {
        if (arraysEqual(r, t)) return;
        e707.uniformMatrix4fv(this.addr, !1, t), copyArray(r, t);
    } else {
        if (arraysEqual(r, n)) return;
        mat4array.set(n), e707.uniformMatrix4fv(this.addr, !1, mat4array), copyArray(r, n);
    }
}
function setValueV1i(e708, t) {
    const r = this.cache;
    r[0] !== t && (e708.uniform1i(this.addr, t), r[0] = t);
}
function setValueV2i(e709, t) {
    const r = this.cache;
    arraysEqual(r, t) || (e709.uniform2iv(this.addr, t), copyArray(r, t));
}
function setValueV3i(e710, t) {
    const r = this.cache;
    arraysEqual(r, t) || (e710.uniform3iv(this.addr, t), copyArray(r, t));
}
function setValueV4i(e711, t) {
    const r = this.cache;
    arraysEqual(r, t) || (e711.uniform4iv(this.addr, t), copyArray(r, t));
}
function setValueV1ui(e712, t) {
    const r = this.cache;
    r[0] !== t && (e712.uniform1ui(this.addr, t), r[0] = t);
}
function setValueV2ui(e713, t) {
    const r = this.cache;
    arraysEqual(r, t) || (e713.uniform2uiv(this.addr, t), copyArray(r, t));
}
function setValueV3ui(e714, t) {
    const r = this.cache;
    arraysEqual(r, t) || (e714.uniform3uiv(this.addr, t), copyArray(r, t));
}
function setValueV4ui(e715, t) {
    const r = this.cache;
    arraysEqual(r, t) || (e715.uniform4uiv(this.addr, t), copyArray(r, t));
}
function setValueT1(e716, t, r) {
    const n = this.cache, i = r.allocateTextureUnit();
    n[0] !== i && (e716.uniform1i(this.addr, i), n[0] = i), r.safeSetTexture2D(t || emptyTexture, i);
}
function setValueT3D1(e717, t, r) {
    const n = this.cache, i = r.allocateTextureUnit();
    n[0] !== i && (e717.uniform1i(this.addr, i), n[0] = i), r.setTexture3D(t || emptyTexture3d, i);
}
function setValueT6(e718, t, r) {
    const n = this.cache, i = r.allocateTextureUnit();
    n[0] !== i && (e718.uniform1i(this.addr, i), n[0] = i), r.safeSetTextureCube(t || emptyCubeTexture, i);
}
function setValueT2DArray1(e719, t, r) {
    const n = this.cache, i = r.allocateTextureUnit();
    n[0] !== i && (e719.uniform1i(this.addr, i), n[0] = i), r.setTexture2DArray(t || emptyTexture2dArray, i);
}
function getSingularSetter(e720) {
    switch(e720){
        case 5126:
            return setValueV1f;
        case 35664:
            return setValueV2f;
        case 35665:
            return setValueV3f;
        case 35666:
            return setValueV4f;
        case 35674:
            return setValueM2;
        case 35675:
            return setValueM3;
        case 35676:
            return setValueM4;
        case 5124:
        case 35670:
            return setValueV1i;
        case 35667:
        case 35671:
            return setValueV2i;
        case 35668:
        case 35672:
            return setValueV3i;
        case 35669:
        case 35673:
            return setValueV4i;
        case 5125:
            return setValueV1ui;
        case 36294:
            return setValueV2ui;
        case 36295:
            return setValueV3ui;
        case 36296:
            return setValueV4ui;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return setValueT1;
        case 35679:
        case 36299:
        case 36307:
            return setValueT3D1;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return setValueT6;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return setValueT2DArray1;
    }
}
function setValueV1fArray(e721, t) {
    e721.uniform1fv(this.addr, t);
}
function setValueV2fArray(e722, t) {
    const r = flatten(t, this.size, 2);
    e722.uniform2fv(this.addr, r);
}
function setValueV3fArray(e723, t) {
    const r = flatten(t, this.size, 3);
    e723.uniform3fv(this.addr, r);
}
function setValueV4fArray(e724, t) {
    const r = flatten(t, this.size, 4);
    e724.uniform4fv(this.addr, r);
}
function setValueM2Array(e725, t) {
    const r = flatten(t, this.size, 4);
    e725.uniformMatrix2fv(this.addr, !1, r);
}
function setValueM3Array(e726, t) {
    const r = flatten(t, this.size, 9);
    e726.uniformMatrix3fv(this.addr, !1, r);
}
function setValueM4Array(e727, t) {
    const r = flatten(t, this.size, 16);
    e727.uniformMatrix4fv(this.addr, !1, r);
}
function setValueV1iArray(e728, t) {
    e728.uniform1iv(this.addr, t);
}
function setValueV2iArray(e729, t) {
    e729.uniform2iv(this.addr, t);
}
function setValueV3iArray(e730, t) {
    e730.uniform3iv(this.addr, t);
}
function setValueV4iArray(e731, t) {
    e731.uniform4iv(this.addr, t);
}
function setValueV1uiArray(e732, t) {
    e732.uniform1uiv(this.addr, t);
}
function setValueV2uiArray(e733, t) {
    e733.uniform2uiv(this.addr, t);
}
function setValueV3uiArray(e734, t) {
    e734.uniform3uiv(this.addr, t);
}
function setValueV4uiArray(e735, t) {
    e735.uniform4uiv(this.addr, t);
}
function setValueT1Array(e737, t, r) {
    const n = t.length, i = allocTexUnits(r, n);
    e737.uniform1iv(this.addr, i);
    for(let e736 = 0; e736 !== n; ++e736)r.safeSetTexture2D(t[e736] || emptyTexture, i[e736]);
}
function setValueT6Array(e739, t, r) {
    const n = t.length, i = allocTexUnits(r, n);
    e739.uniform1iv(this.addr, i);
    for(let e738 = 0; e738 !== n; ++e738)r.safeSetTextureCube(t[e738] || emptyCubeTexture, i[e738]);
}
function getPureArraySetter(e740) {
    switch(e740){
        case 5126:
            return setValueV1fArray;
        case 35664:
            return setValueV2fArray;
        case 35665:
            return setValueV3fArray;
        case 35666:
            return setValueV4fArray;
        case 35674:
            return setValueM2Array;
        case 35675:
            return setValueM3Array;
        case 35676:
            return setValueM4Array;
        case 5124:
        case 35670:
            return setValueV1iArray;
        case 35667:
        case 35671:
            return setValueV2iArray;
        case 35668:
        case 35672:
            return setValueV3iArray;
        case 35669:
        case 35673:
            return setValueV4iArray;
        case 5125:
            return setValueV1uiArray;
        case 36294:
            return setValueV2uiArray;
        case 36295:
            return setValueV3uiArray;
        case 36296:
            return setValueV4uiArray;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return setValueT1Array;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return setValueT6Array;
    }
}
function SingleUniform(e741, t, r) {
    this.id = e741, this.addr = r, this.cache = [], this.setValue = getSingularSetter(t.type);
}
function PureArrayUniform(e742, t, r) {
    this.id = e742, this.addr = r, this.cache = [], this.size = t.size, this.setValue = getPureArraySetter(t.type);
}
function StructuredUniform(e743) {
    this.id = e743, this.seq = [], this.map = {};
}
PureArrayUniform.prototype.updateCache = function(e744) {
    const t = this.cache;
    e744 instanceof Float32Array && t.length !== e744.length && (this.cache = new Float32Array(e744.length)), copyArray(t, e744);
}, StructuredUniform.prototype.setValue = function(e745, t, r) {
    const n = this.seq;
    for(let i = 0, a = n.length; i !== a; ++i){
        const a = n[i];
        a.setValue(e745, t[a.id], r);
    }
};
const RePathPart = /(\w+)(\])?(\[|\.)?/g;
function addUniform(e746, t) {
    e746.seq.push(t), e746.map[t.id] = t;
}
function parseUniform(e747, t, r) {
    const n = e747.name, i = n.length;
    for(RePathPart.lastIndex = 0;;){
        const a = RePathPart.exec(n), o = RePathPart.lastIndex;
        let s = a[1];
        const l = "]" === a[2], c = a[3];
        if (l && (s |= 0), void 0 === c || "[" === c && o + 2 === i) {
            addUniform(r, void 0 === c ? new SingleUniform(s, e747, t) : new PureArrayUniform(s, e747, t));
            break;
        }
        {
            let e748 = r.map[s];
            void 0 === e748 && addUniform(r, e748 = new StructuredUniform(s)), r = e748;
        }
    }
}
function WebGLUniforms(e749, t) {
    this.seq = [], this.map = {};
    const r = e749.getProgramParameter(t, 35718);
    for(let n = 0; n < r; ++n){
        const r = e749.getActiveUniform(t, n);
        parseUniform(r, e749.getUniformLocation(t, r.name), this);
    }
}
function WebGLShader(e750, t, r) {
    const n = e750.createShader(t);
    return e750.shaderSource(n, r), e750.compileShader(n), n;
}
WebGLUniforms.prototype.setValue = function(e751, t, r, n) {
    const i = this.map[t];
    void 0 !== i && i.setValue(e751, r, n);
}, WebGLUniforms.prototype.setOptional = function(e752, t, r) {
    const n = t[r];
    void 0 !== n && this.setValue(e752, r, n);
}, WebGLUniforms.upload = function(e753, t, r, n) {
    for(let i = 0, a = t.length; i !== a; ++i){
        const a = t[i], o = r[a.id];
        !1 !== o.needsUpdate && a.setValue(e753, o.value, n);
    }
}, WebGLUniforms.seqWithValue = function(e754, t) {
    const r = [];
    for(let n = 0, i = e754.length; n !== i; ++n){
        const i = e754[n];
        i.id in t && r.push(i);
    }
    return r;
};
let programIdCount = 0;
function addLineNumbers(e756) {
    const t = e756.split("\n");
    for(let e755 = 0; e755 < t.length; e755++)t[e755] = e755 + 1 + ": " + t[e755];
    return t.join("\n");
}
function getEncodingComponents(e757) {
    switch(e757){
        case LinearEncoding:
            return [
                "Linear",
                "( value )"
            ];
        case sRGBEncoding:
            return [
                "sRGB",
                "( value )"
            ];
        case RGBEEncoding:
            return [
                "RGBE",
                "( value )"
            ];
        case RGBM7Encoding:
            return [
                "RGBM",
                "( value, 7.0 )"
            ];
        case RGBM16Encoding:
            return [
                "RGBM",
                "( value, 16.0 )"
            ];
        case RGBDEncoding:
            return [
                "RGBD",
                "( value, 256.0 )"
            ];
        case GammaEncoding:
            return [
                "Gamma",
                "( value, float( GAMMA_FACTOR ) )"
            ];
        case LogLuvEncoding:
            return [
                "LogLuv",
                "( value )"
            ];
        default:
            return console.warn("THREE.WebGLProgram: Unsupported encoding:", e757), [
                "Linear",
                "( value )"
            ];
    }
}
function getShaderErrors(e758, t, r) {
    const n = e758.getShaderParameter(t, 35713), i = e758.getShaderInfoLog(t).trim();
    return n && "" === i ? "" : "THREE.WebGLShader: gl.getShaderInfoLog() " + r + "\n" + i + addLineNumbers(e758.getShaderSource(t));
}
function getTexelDecodingFunction(e759, t) {
    const r = getEncodingComponents(t);
    return "vec4 " + e759 + "( vec4 value ) { return " + r[0] + "ToLinear" + r[1] + "; }";
}
function getTexelEncodingFunction(e760, t) {
    const r = getEncodingComponents(t);
    return "vec4 " + e760 + "( vec4 value ) { return LinearTo" + r[0] + r[1] + "; }";
}
function getToneMappingFunction(e761, t) {
    let r;
    switch(t){
        case LinearToneMapping:
            r = "Linear";
            break;
        case ReinhardToneMapping:
            r = "Reinhard";
            break;
        case CineonToneMapping:
            r = "OptimizedCineon";
            break;
        case ACESFilmicToneMapping:
            r = "ACESFilmic";
            break;
        case CustomToneMapping:
            r = "Custom";
            break;
        default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), r = "Linear";
    }
    return "vec3 " + e761 + "( vec3 color ) { return " + r + "ToneMapping( color ); }";
}
function generateExtensions(e762) {
    return [
        e762.extensionDerivatives || e762.envMapCubeUV || e762.bumpMap || e762.tangentSpaceNormalMap || e762.clearcoatNormalMap || e762.flatShading || "physical" === e762.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "",
        (e762.extensionFragDepth || e762.logarithmicDepthBuffer) && e762.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
        e762.extensionDrawBuffers && e762.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
        (e762.extensionShaderTextureLOD || e762.envMap) && e762.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
    ].filter(filterEmptyLine).join("\n");
}
function generateDefines(e763) {
    const t = [];
    for(const r in e763){
        const n = e763[r];
        !1 !== n && t.push("#define " + r + " " + n);
    }
    return t.join("\n");
}
function fetchAttributeLocations(e764, t) {
    const r = {}, n = e764.getProgramParameter(t, 35721);
    for(let i = 0; i < n; i++){
        const n = e764.getActiveAttrib(t, i).name;
        r[n] = e764.getAttribLocation(t, n);
    }
    return r;
}
function filterEmptyLine(e765) {
    return "" !== e765;
}
function replaceLightNums(e766, t) {
    return e766.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function replaceClippingPlaneNums(e767, t) {
    return e767.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
function resolveIncludes(e768) {
    return e768.replace(includePattern, includeReplacer);
}
function includeReplacer(e, t) {
    const r = ShaderChunk[t];
    if (void 0 === r) throw new Error("Can not resolve #include <" + t + ">");
    return resolveIncludes(r);
}
const deprecatedUnrollLoopPattern = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, unrollLoopPattern = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function unrollLoops(e769) {
    return e769.replace(unrollLoopPattern, loopReplacer).replace(deprecatedUnrollLoopPattern, deprecatedLoopReplacer);
}
function deprecatedLoopReplacer(e770, t, r, n) {
    return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), loopReplacer(e770, t, r, n);
}
function loopReplacer(e, t, r, n) {
    let i = "";
    for(let e771 = parseInt(t); e771 < parseInt(r); e771++)i += n.replace(/\[\s*i\s*\]/g, "[ " + e771 + " ]").replace(/UNROLLED_LOOP_INDEX/g, e771);
    return i;
}
function generatePrecision(e772) {
    let t = "precision " + e772.precision + " float;\nprecision " + e772.precision + " int;";
    return "highp" === e772.precision ? t += "\n#define HIGH_PRECISION" : "mediump" === e772.precision ? t += "\n#define MEDIUM_PRECISION" : "lowp" === e772.precision && (t += "\n#define LOW_PRECISION"), t;
}
function generateShadowMapTypeDefine(e773) {
    let t = "SHADOWMAP_TYPE_BASIC";
    return e773.shadowMapType === PCFShadowMap ? t = "SHADOWMAP_TYPE_PCF" : e773.shadowMapType === PCFSoftShadowMap ? t = "SHADOWMAP_TYPE_PCF_SOFT" : e773.shadowMapType === VSMShadowMap && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function generateEnvMapTypeDefine(e774) {
    let t = "ENVMAP_TYPE_CUBE";
    if (e774.envMap) switch(e774.envMapMode){
        case CubeReflectionMapping:
        case CubeRefractionMapping:
            t = "ENVMAP_TYPE_CUBE";
            break;
        case CubeUVReflectionMapping:
        case CubeUVRefractionMapping:
            t = "ENVMAP_TYPE_CUBE_UV";
    }
    return t;
}
function generateEnvMapModeDefine(e775) {
    let t = "ENVMAP_MODE_REFLECTION";
    if (e775.envMap) switch(e775.envMapMode){
        case CubeRefractionMapping:
        case CubeUVRefractionMapping:
            t = "ENVMAP_MODE_REFRACTION";
    }
    return t;
}
function generateEnvMapBlendingDefine(e776) {
    let t = "ENVMAP_BLENDING_NONE";
    if (e776.envMap) switch(e776.combine){
        case MultiplyOperation:
            t = "ENVMAP_BLENDING_MULTIPLY";
            break;
        case MixOperation:
            t = "ENVMAP_BLENDING_MIX";
            break;
        case AddOperation:
            t = "ENVMAP_BLENDING_ADD";
    }
    return t;
}
function WebGLProgram(e777, t, r, n) {
    const i = e777.getContext(), a = r.defines;
    let o = r.vertexShader, s = r.fragmentShader;
    const l = generateShadowMapTypeDefine(r), c = generateEnvMapTypeDefine(r), h = generateEnvMapModeDefine(r), u = generateEnvMapBlendingDefine(r), d = e777.gammaFactor > 0 ? e777.gammaFactor : 1, p = r.isWebGL2 ? "" : generateExtensions(r), m = generateDefines(a), f = i.createProgram();
    let g, v, _ = r.glslVersion ? "#version " + r.glslVersion + "\n" : "";
    r.isRawShaderMaterial ? ((g = [
        m
    ].filter(filterEmptyLine).join("\n")).length > 0 && (g += "\n"), (v = [
        p,
        m
    ].filter(filterEmptyLine).join("\n")).length > 0 && (v += "\n")) : (g = [
        generatePrecision(r),
        "#define SHADER_NAME " + r.shaderName,
        m,
        r.instancing ? "#define USE_INSTANCING" : "",
        r.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        r.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        "#define GAMMA_FACTOR " + d,
        "#define MAX_BONES " + r.maxBones,
        r.useFog && r.fog ? "#define USE_FOG" : "",
        r.useFog && r.fogExp2 ? "#define FOG_EXP2" : "",
        r.map ? "#define USE_MAP" : "",
        r.envMap ? "#define USE_ENVMAP" : "",
        r.envMap ? "#define " + h : "",
        r.lightMap ? "#define USE_LIGHTMAP" : "",
        r.aoMap ? "#define USE_AOMAP" : "",
        r.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        r.bumpMap ? "#define USE_BUMPMAP" : "",
        r.normalMap ? "#define USE_NORMALMAP" : "",
        r.normalMap && r.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
        r.normalMap && r.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
        r.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        r.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        r.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        r.displacementMap && r.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
        r.specularMap ? "#define USE_SPECULARMAP" : "",
        r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        r.metalnessMap ? "#define USE_METALNESSMAP" : "",
        r.alphaMap ? "#define USE_ALPHAMAP" : "",
        r.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        r.vertexTangents ? "#define USE_TANGENT" : "",
        r.vertexColors ? "#define USE_COLOR" : "",
        r.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        r.vertexUvs ? "#define USE_UV" : "",
        r.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        r.flatShading ? "#define FLAT_SHADED" : "",
        r.skinning ? "#define USE_SKINNING" : "",
        r.useVertexTexture ? "#define BONE_TEXTURE" : "",
        r.morphTargets ? "#define USE_MORPHTARGETS" : "",
        r.morphNormals && !1 === r.flatShading ? "#define USE_MORPHNORMALS" : "",
        r.doubleSided ? "#define DOUBLE_SIDED" : "",
        r.flipSided ? "#define FLIP_SIDED" : "",
        r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        r.shadowMapEnabled ? "#define " + l : "",
        r.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        r.logarithmicDepthBuffer && r.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "\tattribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "\tattribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "\tattribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "\tattribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "\tattribute vec3 color;",
        "#endif",
        "#ifdef USE_MORPHTARGETS",
        "\tattribute vec3 morphTarget0;",
        "\tattribute vec3 morphTarget1;",
        "\tattribute vec3 morphTarget2;",
        "\tattribute vec3 morphTarget3;",
        "\t#ifdef USE_MORPHNORMALS",
        "\t\tattribute vec3 morphNormal0;",
        "\t\tattribute vec3 morphNormal1;",
        "\t\tattribute vec3 morphNormal2;",
        "\t\tattribute vec3 morphNormal3;",
        "\t#else",
        "\t\tattribute vec3 morphTarget4;",
        "\t\tattribute vec3 morphTarget5;",
        "\t\tattribute vec3 morphTarget6;",
        "\t\tattribute vec3 morphTarget7;",
        "\t#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "\tattribute vec4 skinIndex;",
        "\tattribute vec4 skinWeight;",
        "#endif",
        "\n"
    ].filter(filterEmptyLine).join("\n"), v = [
        p,
        generatePrecision(r),
        "#define SHADER_NAME " + r.shaderName,
        m,
        r.alphaTest ? "#define ALPHATEST " + r.alphaTest + (r.alphaTest % 1 ? "" : ".0") : "",
        "#define GAMMA_FACTOR " + d,
        r.useFog && r.fog ? "#define USE_FOG" : "",
        r.useFog && r.fogExp2 ? "#define FOG_EXP2" : "",
        r.map ? "#define USE_MAP" : "",
        r.matcap ? "#define USE_MATCAP" : "",
        r.envMap ? "#define USE_ENVMAP" : "",
        r.envMap ? "#define " + c : "",
        r.envMap ? "#define " + h : "",
        r.envMap ? "#define " + u : "",
        r.lightMap ? "#define USE_LIGHTMAP" : "",
        r.aoMap ? "#define USE_AOMAP" : "",
        r.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        r.bumpMap ? "#define USE_BUMPMAP" : "",
        r.normalMap ? "#define USE_NORMALMAP" : "",
        r.normalMap && r.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
        r.normalMap && r.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
        r.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        r.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        r.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        r.specularMap ? "#define USE_SPECULARMAP" : "",
        r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        r.metalnessMap ? "#define USE_METALNESSMAP" : "",
        r.alphaMap ? "#define USE_ALPHAMAP" : "",
        r.sheen ? "#define USE_SHEEN" : "",
        r.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        r.vertexTangents ? "#define USE_TANGENT" : "",
        r.vertexColors || r.instancingColor ? "#define USE_COLOR" : "",
        r.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        r.vertexUvs ? "#define USE_UV" : "",
        r.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        r.gradientMap ? "#define USE_GRADIENTMAP" : "",
        r.flatShading ? "#define FLAT_SHADED" : "",
        r.doubleSided ? "#define DOUBLE_SIDED" : "",
        r.flipSided ? "#define FLIP_SIDED" : "",
        r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        r.shadowMapEnabled ? "#define " + l : "",
        r.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        r.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        r.logarithmicDepthBuffer && r.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
        (r.extensionShaderTextureLOD || r.envMap) && r.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        r.toneMapping !== NoToneMapping ? "#define TONE_MAPPING" : "",
        r.toneMapping !== NoToneMapping ? ShaderChunk.tonemapping_pars_fragment : "",
        r.toneMapping !== NoToneMapping ? getToneMappingFunction("toneMapping", r.toneMapping) : "",
        r.dithering ? "#define DITHERING" : "",
        ShaderChunk.encodings_pars_fragment,
        r.map ? getTexelDecodingFunction("mapTexelToLinear", r.mapEncoding) : "",
        r.matcap ? getTexelDecodingFunction("matcapTexelToLinear", r.matcapEncoding) : "",
        r.envMap ? getTexelDecodingFunction("envMapTexelToLinear", r.envMapEncoding) : "",
        r.emissiveMap ? getTexelDecodingFunction("emissiveMapTexelToLinear", r.emissiveMapEncoding) : "",
        r.lightMap ? getTexelDecodingFunction("lightMapTexelToLinear", r.lightMapEncoding) : "",
        getTexelEncodingFunction("linearToOutputTexel", r.outputEncoding),
        r.depthPacking ? "#define DEPTH_PACKING " + r.depthPacking : "",
        "\n"
    ].filter(filterEmptyLine).join("\n")), o = replaceClippingPlaneNums(o = replaceLightNums(o = resolveIncludes(o), r), r), s = replaceClippingPlaneNums(s = replaceLightNums(s = resolveIncludes(s), r), r), o = unrollLoops(o), s = unrollLoops(s), r.isWebGL2 && !0 !== r.isRawShaderMaterial && (_ = "#version 300 es\n", g = [
        "#define attribute in",
        "#define varying out",
        "#define texture2D texture"
    ].join("\n") + "\n" + g, v = [
        "#define varying in",
        r.glslVersion === GLSL3 ? "" : "out highp vec4 pc_fragColor;",
        r.glslVersion === GLSL3 ? "" : "#define gl_FragColor pc_fragColor",
        "#define gl_FragDepthEXT gl_FragDepth",
        "#define texture2D texture",
        "#define textureCube texture",
        "#define texture2DProj textureProj",
        "#define texture2DLodEXT textureLod",
        "#define texture2DProjLodEXT textureProjLod",
        "#define textureCubeLodEXT textureLod",
        "#define texture2DGradEXT textureGrad",
        "#define texture2DProjGradEXT textureProjGrad",
        "#define textureCubeGradEXT textureGrad"
    ].join("\n") + "\n" + v);
    const y = _ + v + s, x = WebGLShader(i, 35633, _ + g + o), b = WebGLShader(i, 35632, y);
    if (i.attachShader(f, x), i.attachShader(f, b), void 0 !== r.index0AttributeName ? i.bindAttribLocation(f, 0, r.index0AttributeName) : !0 === r.morphTargets && i.bindAttribLocation(f, 0, "position"), i.linkProgram(f), e777.debug.checkShaderErrors) {
        const e778 = i.getProgramInfoLog(f).trim(), t = i.getShaderInfoLog(x).trim(), r = i.getShaderInfoLog(b).trim();
        let n = !0, a = !0;
        if (!1 === i.getProgramParameter(f, 35714)) {
            n = !1;
            const t = getShaderErrors(i, x, "vertex"), r = getShaderErrors(i, b, "fragment");
            console.error("THREE.WebGLProgram: shader error: ", i.getError(), "35715", i.getProgramParameter(f, 35715), "gl.getProgramInfoLog", e778, t, r);
        } else "" !== e778 ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", e778) : "" !== t && "" !== r || (a = !1);
        a && (this.diagnostics = {
            runnable: n,
            programLog: e778,
            vertexShader: {
                log: t,
                prefix: g
            },
            fragmentShader: {
                log: r,
                prefix: v
            }
        });
    }
    let M, w;
    return i.deleteShader(x), i.deleteShader(b), this.getUniforms = function() {
        return void 0 === M && (M = new WebGLUniforms(i, f)), M;
    }, this.getAttributes = function() {
        return void 0 === w && (w = fetchAttributeLocations(i, f)), w;
    }, this.destroy = function() {
        n.releaseStatesOfProgram(this), i.deleteProgram(f), this.program = void 0;
    }, this.name = r.shaderName, this.id = programIdCount++, this.cacheKey = t, this.usedTimes = 1, this.program = f, this.vertexShader = x, this.fragmentShader = b, this;
}
function WebGLPrograms(e779, t42, r25, n24, i16, a) {
    const o6 = [], s = n24.isWebGL2, l = n24.logarithmicDepthBuffer, c = n24.floatVertexTextures, h = n24.maxVertexUniforms, u = n24.vertexTextures;
    let d = n24.precision;
    const p = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    }, m1 = [
        "precision",
        "isWebGL2",
        "supportsVertexTextures",
        "outputEncoding",
        "instancing",
        "instancingColor",
        "map",
        "mapEncoding",
        "matcap",
        "matcapEncoding",
        "envMap",
        "envMapMode",
        "envMapEncoding",
        "envMapCubeUV",
        "lightMap",
        "lightMapEncoding",
        "aoMap",
        "emissiveMap",
        "emissiveMapEncoding",
        "bumpMap",
        "normalMap",
        "objectSpaceNormalMap",
        "tangentSpaceNormalMap",
        "clearcoatMap",
        "clearcoatRoughnessMap",
        "clearcoatNormalMap",
        "displacementMap",
        "specularMap",
        "roughnessMap",
        "metalnessMap",
        "gradientMap",
        "alphaMap",
        "combine",
        "vertexColors",
        "vertexAlphas",
        "vertexTangents",
        "vertexUvs",
        "uvsVertexOnly",
        "fog",
        "useFog",
        "fogExp2",
        "flatShading",
        "sizeAttenuation",
        "logarithmicDepthBuffer",
        "skinning",
        "maxBones",
        "useVertexTexture",
        "morphTargets",
        "morphNormals",
        "premultipliedAlpha",
        "numDirLights",
        "numPointLights",
        "numSpotLights",
        "numHemiLights",
        "numRectAreaLights",
        "numDirLightShadows",
        "numPointLightShadows",
        "numSpotLightShadows",
        "shadowMapEnabled",
        "shadowMapType",
        "toneMapping",
        "physicallyCorrectLights",
        "alphaTest",
        "doubleSided",
        "flipSided",
        "numClippingPlanes",
        "numClipIntersection",
        "depthPacking",
        "dithering",
        "sheen",
        "transmissionMap"
    ];
    function f(e780) {
        let t;
        return e780 && e780.isTexture ? t = e780.encoding : e780 && e780.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), t = e780.texture.encoding) : t = LinearEncoding, t;
    }
    return {
        getParameters: function(i, o, m, g, v) {
            const _ = g.fog, y = i.isMeshStandardMaterial ? g.environment : null, x = t42.get(i.envMap || y), b = p[i.type], M = v.isSkinnedMesh ? function(e781) {
                const t = e781.skeleton.bones;
                if (c) return 1024;
                {
                    const e782 = h, r = Math.floor((e782 - 20) / 4), n = Math.min(r, t.length);
                    return n < t.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + t.length + " bones. This GPU supports " + n + "."), 0) : n;
                }
            }(v) : 0;
            let w, S;
            if (null !== i.precision && (d = n24.getMaxPrecision(i.precision)) !== i.precision && console.warn("THREE.WebGLProgram.getParameters:", i.precision, "not supported, using", d, "instead."), b) {
                const e783 = ShaderLib[b];
                w = e783.vertexShader, S = e783.fragmentShader;
            } else w = i.vertexShader, S = i.fragmentShader;
            const T = e779.getRenderTarget();
            return {
                isWebGL2: s,
                shaderID: b,
                shaderName: i.type,
                vertexShader: w,
                fragmentShader: S,
                defines: i.defines,
                isRawShaderMaterial: !0 === i.isRawShaderMaterial,
                glslVersion: i.glslVersion,
                precision: d,
                instancing: !0 === v.isInstancedMesh,
                instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor,
                supportsVertexTextures: u,
                outputEncoding: null !== T ? f(T.texture) : e779.outputEncoding,
                map: !!i.map,
                mapEncoding: f(i.map),
                matcap: !!i.matcap,
                matcapEncoding: f(i.matcap),
                envMap: !!x,
                envMapMode: x && x.mapping,
                envMapEncoding: f(x),
                envMapCubeUV: !!x && (x.mapping === CubeUVReflectionMapping || x.mapping === CubeUVRefractionMapping),
                lightMap: !!i.lightMap,
                lightMapEncoding: f(i.lightMap),
                aoMap: !!i.aoMap,
                emissiveMap: !!i.emissiveMap,
                emissiveMapEncoding: f(i.emissiveMap),
                bumpMap: !!i.bumpMap,
                normalMap: !!i.normalMap,
                objectSpaceNormalMap: i.normalMapType === ObjectSpaceNormalMap,
                tangentSpaceNormalMap: i.normalMapType === TangentSpaceNormalMap,
                clearcoatMap: !!i.clearcoatMap,
                clearcoatRoughnessMap: !!i.clearcoatRoughnessMap,
                clearcoatNormalMap: !!i.clearcoatNormalMap,
                displacementMap: !!i.displacementMap,
                roughnessMap: !!i.roughnessMap,
                metalnessMap: !!i.metalnessMap,
                specularMap: !!i.specularMap,
                alphaMap: !!i.alphaMap,
                gradientMap: !!i.gradientMap,
                sheen: !!i.sheen,
                transmissionMap: !!i.transmissionMap,
                combine: i.combine,
                vertexTangents: i.normalMap && i.vertexTangents,
                vertexColors: i.vertexColors,
                vertexAlphas: !0 === i.vertexColors && v.geometry && v.geometry.attributes.color && 4 === v.geometry.attributes.color.itemSize,
                vertexUvs: !!(i.map || i.bumpMap || i.normalMap || i.specularMap || i.alphaMap || i.emissiveMap || i.roughnessMap || i.metalnessMap || i.clearcoatMap || i.clearcoatRoughnessMap || i.clearcoatNormalMap || i.displacementMap || i.transmissionMap),
                uvsVertexOnly: !(i.map || i.bumpMap || i.normalMap || i.specularMap || i.alphaMap || i.emissiveMap || i.roughnessMap || i.metalnessMap || i.clearcoatNormalMap || i.transmissionMap || !i.displacementMap),
                fog: !!_,
                useFog: i.fog,
                fogExp2: _ && _.isFogExp2,
                flatShading: !!i.flatShading,
                sizeAttenuation: i.sizeAttenuation,
                logarithmicDepthBuffer: l,
                skinning: i.skinning && M > 0,
                maxBones: M,
                useVertexTexture: c,
                morphTargets: i.morphTargets,
                morphNormals: i.morphNormals,
                numDirLights: o.directional.length,
                numPointLights: o.point.length,
                numSpotLights: o.spot.length,
                numRectAreaLights: o.rectArea.length,
                numHemiLights: o.hemi.length,
                numDirLightShadows: o.directionalShadowMap.length,
                numPointLightShadows: o.pointShadowMap.length,
                numSpotLightShadows: o.spotShadowMap.length,
                numClippingPlanes: a.numPlanes,
                numClipIntersection: a.numIntersection,
                dithering: i.dithering,
                shadowMapEnabled: e779.shadowMap.enabled && m.length > 0,
                shadowMapType: e779.shadowMap.type,
                toneMapping: i.toneMapped ? e779.toneMapping : NoToneMapping,
                physicallyCorrectLights: e779.physicallyCorrectLights,
                premultipliedAlpha: i.premultipliedAlpha,
                alphaTest: i.alphaTest,
                doubleSided: i.side === DoubleSide,
                flipSided: i.side === BackSide,
                depthPacking: void 0 !== i.depthPacking && i.depthPacking,
                index0AttributeName: i.index0AttributeName,
                extensionDerivatives: i.extensions && i.extensions.derivatives,
                extensionFragDepth: i.extensions && i.extensions.fragDepth,
                extensionDrawBuffers: i.extensions && i.extensions.drawBuffers,
                extensionShaderTextureLOD: i.extensions && i.extensions.shaderTextureLOD,
                rendererExtensionFragDepth: s || r25.has("EXT_frag_depth"),
                rendererExtensionDrawBuffers: s || r25.has("WEBGL_draw_buffers"),
                rendererExtensionShaderTextureLod: s || r25.has("EXT_shader_texture_lod"),
                customProgramCacheKey: i.customProgramCacheKey()
            };
        },
        getProgramCacheKey: function(t) {
            const r = [];
            if (t.shaderID ? r.push(t.shaderID) : (r.push(t.fragmentShader), r.push(t.vertexShader)), void 0 !== t.defines) for(const e784 in t.defines)r.push(e784), r.push(t.defines[e784]);
            if (!1 === t.isRawShaderMaterial) {
                for(let e785 = 0; e785 < m1.length; e785++)r.push(t[m1[e785]]);
                r.push(e779.outputEncoding), r.push(e779.gammaFactor);
            }
            return r.push(t.customProgramCacheKey), r.join();
        },
        getUniforms: function(e786) {
            const t = p[e786.type];
            let r;
            if (t) {
                const e787 = ShaderLib[t];
                r = UniformsUtils.clone(e787.uniforms);
            } else r = e786.uniforms;
            return r;
        },
        acquireProgram: function(t, r) {
            let n;
            for(let e788 = 0, t43 = o6.length; e788 < t43; e788++){
                const t = o6[e788];
                if (t.cacheKey === r) {
                    ++(n = t).usedTimes;
                    break;
                }
            }
            return void 0 === n && (n = new WebGLProgram(e779, r, t, i16), o6.push(n)), n;
        },
        releaseProgram: function(e789) {
            if (0 == --e789.usedTimes) {
                const t = o6.indexOf(e789);
                o6[t] = o6[o6.length - 1], o6.pop(), e789.destroy();
            }
        },
        programs: o6
    };
}
function WebGLProperties() {
    let e790 = new WeakMap;
    return {
        get: function(t) {
            let r = e790.get(t);
            return void 0 === r && (r = {}, e790.set(t, r)), r;
        },
        remove: function(t) {
            e790.delete(t);
        },
        update: function(t, r, n) {
            e790.get(t)[r] = n;
        },
        dispose: function() {
            e790 = new WeakMap;
        }
    };
}
function painterSortStable(e791, t) {
    return e791.groupOrder !== t.groupOrder ? e791.groupOrder - t.groupOrder : e791.renderOrder !== t.renderOrder ? e791.renderOrder - t.renderOrder : e791.program !== t.program ? e791.program.id - t.program.id : e791.material.id !== t.material.id ? e791.material.id - t.material.id : e791.z !== t.z ? e791.z - t.z : e791.id - t.id;
}
function reversePainterSortStable(e792, t) {
    return e792.groupOrder !== t.groupOrder ? e792.groupOrder - t.groupOrder : e792.renderOrder !== t.renderOrder ? e792.renderOrder - t.renderOrder : e792.z !== t.z ? t.z - e792.z : e792.id - t.id;
}
function WebGLRenderList(e793) {
    const t44 = [];
    let r26 = 0;
    const n25 = [], i17 = [], a8 = {
        id: -1
    };
    function o7(n, i, o, s, l, c) {
        let h = t44[r26];
        const u = e793.get(o);
        return void 0 === h ? (h = {
            id: n.id,
            object: n,
            geometry: i,
            material: o,
            program: u.program || a8,
            groupOrder: s,
            renderOrder: n.renderOrder,
            z: l,
            group: c
        }, t44[r26] = h) : (h.id = n.id, h.object = n, h.geometry = i, h.material = o, h.program = u.program || a8, h.groupOrder = s, h.renderOrder = n.renderOrder, h.z = l, h.group = c), r26++, h;
    }
    return {
        opaque: n25,
        transparent: i17,
        init: function() {
            r26 = 0, n25.length = 0, i17.length = 0;
        },
        push: function(e794, t, r, a, s, l) {
            const c = o7(e794, t, r, a, s, l);
            (!0 === r.transparent ? i17 : n25).push(c);
        },
        unshift: function(e795, t, r, a, s, l) {
            const c = o7(e795, t, r, a, s, l);
            (!0 === r.transparent ? i17 : n25).unshift(c);
        },
        finish: function() {
            for(let e796 = r26, n = t44.length; e796 < n; e796++){
                const r = t44[e796];
                if (null === r.id) break;
                r.id = null, r.object = null, r.geometry = null, r.material = null, r.program = null, r.group = null;
            }
        },
        sort: function(e797, t) {
            n25.length > 1 && n25.sort(e797 || painterSortStable), i17.length > 1 && i17.sort(t || reversePainterSortStable);
        }
    };
}
function WebGLRenderLists(e798) {
    let t = new WeakMap;
    return {
        get: function(r, n) {
            let i;
            return !1 === t.has(r) ? (i = new WebGLRenderList(e798), t.set(r, [
                i
            ])) : n >= t.get(r).length ? (i = new WebGLRenderList(e798), t.get(r).push(i)) : i = t.get(r)[n], i;
        },
        dispose: function() {
            t = new WeakMap;
        }
    };
}
function UniformsCache() {
    const e799 = {};
    return {
        get: function(t) {
            if (void 0 !== e799[t.id]) return e799[t.id];
            let r;
            switch(t.type){
                case "DirectionalLight":
                    r = {
                        direction: new Vector3,
                        color: new Color
                    };
                    break;
                case "SpotLight":
                    r = {
                        position: new Vector3,
                        direction: new Vector3,
                        color: new Color,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0
                    };
                    break;
                case "PointLight":
                    r = {
                        position: new Vector3,
                        color: new Color,
                        distance: 0,
                        decay: 0
                    };
                    break;
                case "HemisphereLight":
                    r = {
                        direction: new Vector3,
                        skyColor: new Color,
                        groundColor: new Color
                    };
                    break;
                case "RectAreaLight":
                    r = {
                        color: new Color,
                        position: new Vector3,
                        halfWidth: new Vector3,
                        halfHeight: new Vector3
                    };
            }
            return e799[t.id] = r, r;
        }
    };
}
function ShadowUniformsCache() {
    const e800 = {};
    return {
        get: function(t) {
            if (void 0 !== e800[t.id]) return e800[t.id];
            let r;
            switch(t.type){
                case "DirectionalLight":
                case "SpotLight":
                    r = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new Vector2
                    };
                    break;
                case "PointLight":
                    r = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new Vector2,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1000
                    };
            }
            return e800[t.id] = r, r;
        }
    };
}
let nextVersion = 0;
function shadowCastingLightsFirst(e801, t) {
    return (t.castShadow ? 1 : 0) - (e801.castShadow ? 1 : 0);
}
function WebGLLights(e804, t45) {
    const r27 = new UniformsCache, n26 = ShadowUniformsCache(), i = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1
        },
        ambient: [
            0,
            0,
            0
        ],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadow: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: []
    };
    for(let e802 = 0; e802 < 9; e802++)i.probe.push(new Vector3);
    const a9 = new Vector3, o8 = new Matrix4, s5 = new Matrix4;
    return {
        setup: function(a) {
            let o = 0, s = 0, l = 0;
            for(let e805 = 0; e805 < 9; e805++)i.probe[e805].set(0, 0, 0);
            let c = 0, h = 0, u = 0, d = 0, p = 0, m = 0, f = 0, g = 0;
            a.sort(shadowCastingLightsFirst);
            for(let e803 = 0, t = a.length; e803 < t; e803++){
                const t = a[e803], v = t.color, _ = t.intensity, y = t.distance, x = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
                if (t.isAmbientLight) o += v.r * _, s += v.g * _, l += v.b * _;
                else if (t.isLightProbe) for(let e806 = 0; e806 < 9; e806++)i.probe[e806].addScaledVector(t.sh.coefficients[e806], _);
                else if (t.isDirectionalLight) {
                    const e807 = r27.get(t);
                    if (e807.color.copy(t.color).multiplyScalar(t.intensity), t.castShadow) {
                        const e808 = t.shadow, r = n26.get(t);
                        r.shadowBias = e808.bias, r.shadowNormalBias = e808.normalBias, r.shadowRadius = e808.radius, r.shadowMapSize = e808.mapSize, i.directionalShadow[c] = r, i.directionalShadowMap[c] = x, i.directionalShadowMatrix[c] = t.shadow.matrix, m++;
                    }
                    i.directional[c] = e807, c++;
                } else if (t.isSpotLight) {
                    const e809 = r27.get(t);
                    if (e809.position.setFromMatrixPosition(t.matrixWorld), e809.color.copy(v).multiplyScalar(_), e809.distance = y, e809.coneCos = Math.cos(t.angle), e809.penumbraCos = Math.cos(t.angle * (1 - t.penumbra)), e809.decay = t.decay, t.castShadow) {
                        const e810 = t.shadow, r = n26.get(t);
                        r.shadowBias = e810.bias, r.shadowNormalBias = e810.normalBias, r.shadowRadius = e810.radius, r.shadowMapSize = e810.mapSize, i.spotShadow[u] = r, i.spotShadowMap[u] = x, i.spotShadowMatrix[u] = t.shadow.matrix, g++;
                    }
                    i.spot[u] = e809, u++;
                } else if (t.isRectAreaLight) {
                    const e811 = r27.get(t);
                    e811.color.copy(v).multiplyScalar(_), e811.halfWidth.set(0.5 * t.width, 0, 0), e811.halfHeight.set(0, 0.5 * t.height, 0), i.rectArea[d] = e811, d++;
                } else if (t.isPointLight) {
                    const e812 = r27.get(t);
                    if (e812.color.copy(t.color).multiplyScalar(t.intensity), e812.distance = t.distance, e812.decay = t.decay, t.castShadow) {
                        const e813 = t.shadow, r = n26.get(t);
                        r.shadowBias = e813.bias, r.shadowNormalBias = e813.normalBias, r.shadowRadius = e813.radius, r.shadowMapSize = e813.mapSize, r.shadowCameraNear = e813.camera.near, r.shadowCameraFar = e813.camera.far, i.pointShadow[h] = r, i.pointShadowMap[h] = x, i.pointShadowMatrix[h] = t.shadow.matrix, f++;
                    }
                    i.point[h] = e812, h++;
                } else if (t.isHemisphereLight) {
                    const e814 = r27.get(t);
                    e814.skyColor.copy(t.color).multiplyScalar(_), e814.groundColor.copy(t.groundColor).multiplyScalar(_), i.hemi[p] = e814, p++;
                }
            }
            d > 0 && (t45.isWebGL2 ? (i.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1, i.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2) : !0 === e804.has("OES_texture_float_linear") ? (i.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1, i.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2) : !0 === e804.has("OES_texture_half_float_linear") ? (i.rectAreaLTC1 = UniformsLib.LTC_HALF_1, i.rectAreaLTC2 = UniformsLib.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = o, i.ambient[1] = s, i.ambient[2] = l;
            const v = i.hash;
            v.directionalLength === c && v.pointLength === h && v.spotLength === u && v.rectAreaLength === d && v.hemiLength === p && v.numDirectionalShadows === m && v.numPointShadows === f && v.numSpotShadows === g || (i.directional.length = c, i.spot.length = u, i.rectArea.length = d, i.point.length = h, i.hemi.length = p, i.directionalShadow.length = m, i.directionalShadowMap.length = m, i.pointShadow.length = f, i.pointShadowMap.length = f, i.spotShadow.length = g, i.spotShadowMap.length = g, i.directionalShadowMatrix.length = m, i.pointShadowMatrix.length = f, i.spotShadowMatrix.length = g, v.directionalLength = c, v.pointLength = h, v.spotLength = u, v.rectAreaLength = d, v.hemiLength = p, v.numDirectionalShadows = m, v.numPointShadows = f, v.numSpotShadows = g, i.version = nextVersion++);
        },
        setupView: function(e815, t) {
            let r = 0, n = 0, l = 0, c = 0, h = 0;
            const u = t.matrixWorldInverse;
            for(let t46 = 0, d = e815.length; t46 < d; t46++){
                const d = e815[t46];
                if (d.isDirectionalLight) {
                    const e816 = i.directional[r];
                    e816.direction.setFromMatrixPosition(d.matrixWorld), a9.setFromMatrixPosition(d.target.matrixWorld), e816.direction.sub(a9), e816.direction.transformDirection(u), r++;
                } else if (d.isSpotLight) {
                    const e817 = i.spot[l];
                    e817.position.setFromMatrixPosition(d.matrixWorld), e817.position.applyMatrix4(u), e817.direction.setFromMatrixPosition(d.matrixWorld), a9.setFromMatrixPosition(d.target.matrixWorld), e817.direction.sub(a9), e817.direction.transformDirection(u), l++;
                } else if (d.isRectAreaLight) {
                    const e818 = i.rectArea[c];
                    e818.position.setFromMatrixPosition(d.matrixWorld), e818.position.applyMatrix4(u), s5.identity(), o8.copy(d.matrixWorld), o8.premultiply(u), s5.extractRotation(o8), e818.halfWidth.set(0.5 * d.width, 0, 0), e818.halfHeight.set(0, 0.5 * d.height, 0), e818.halfWidth.applyMatrix4(s5), e818.halfHeight.applyMatrix4(s5), c++;
                } else if (d.isPointLight) {
                    const e819 = i.point[n];
                    e819.position.setFromMatrixPosition(d.matrixWorld), e819.position.applyMatrix4(u), n++;
                } else if (d.isHemisphereLight) {
                    const e820 = i.hemi[h];
                    e820.direction.setFromMatrixPosition(d.matrixWorld), e820.direction.transformDirection(u), e820.direction.normalize(), h++;
                }
            }
        },
        state: i
    };
}
function WebGLRenderState(e821, t) {
    const r = new WebGLLights(e821, t), n = [], i = [];
    return {
        init: function() {
            n.length = 0, i.length = 0;
        },
        state: {
            lightsArray: n,
            shadowsArray: i,
            lights: r
        },
        setupLights: function() {
            r.setup(n);
        },
        setupLightsView: function(e822) {
            r.setupView(n, e822);
        },
        pushLight: function(e823) {
            n.push(e823);
        },
        pushShadow: function(e824) {
            i.push(e824);
        }
    };
}
function WebGLRenderStates(e825, t) {
    let r = new WeakMap;
    return {
        get: function(n, i = 0) {
            let a;
            return !1 === r.has(n) ? (a = new WebGLRenderState(e825, t), r.set(n, [
                a
            ])) : i >= r.get(n).length ? (a = new WebGLRenderState(e825, t), r.get(n).push(a)) : a = r.get(n)[i], a;
        },
        dispose: function() {
            r = new WeakMap;
        }
    };
}
class MeshDepthMaterial extends Material {
    constructor(e826){
        super(), this.type = "MeshDepthMaterial", this.depthPacking = BasicDepthPacking, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e826);
    }
    copy(e827) {
        return super.copy(e827), this.depthPacking = e827.depthPacking, this.skinning = e827.skinning, this.morphTargets = e827.morphTargets, this.map = e827.map, this.alphaMap = e827.alphaMap, this.displacementMap = e827.displacementMap, this.displacementScale = e827.displacementScale, this.displacementBias = e827.displacementBias, this.wireframe = e827.wireframe, this.wireframeLinewidth = e827.wireframeLinewidth, this;
    }
}
MeshDepthMaterial.prototype.isMeshDepthMaterial = !0;
class MeshDistanceMaterial extends Material {
    constructor(e828){
        super(), this.type = "MeshDistanceMaterial", this.referencePosition = new Vector3, this.nearDistance = 1, this.farDistance = 1000, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e828);
    }
    copy(e829) {
        return super.copy(e829), this.referencePosition.copy(e829.referencePosition), this.nearDistance = e829.nearDistance, this.farDistance = e829.farDistance, this.skinning = e829.skinning, this.morphTargets = e829.morphTargets, this.map = e829.map, this.alphaMap = e829.alphaMap, this.displacementMap = e829.displacementMap, this.displacementScale = e829.displacementScale, this.displacementBias = e829.displacementBias, this;
    }
}
MeshDistanceMaterial.prototype.isMeshDistanceMaterial = !0;
var vsm_frag = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}", vsm_vert = "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}";
function WebGLShadowMap(e830, t47, r28) {
    let n27 = new Frustum;
    const i18 = new Vector2, a10 = new Vector2, o9 = new Vector4, s6 = [], l3 = [], c3 = {}, h2 = r28.maxTextureSize, u5 = {
        0: BackSide,
        1: FrontSide,
        2: DoubleSide
    }, d1 = new ShaderMaterial({
        defines: {
            SAMPLE_RATE: 0.25,
            HALF_SAMPLE_RATE: 1 / 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new Vector2
            },
            radius: {
                value: 4
            }
        },
        vertexShader: vsm_vert,
        fragmentShader: vsm_frag
    }), p2 = d1.clone();
    p2.defines.HORIZONTAL_PASS = 1;
    const m2 = new BufferGeometry;
    m2.setAttribute("position", new BufferAttribute(new Float32Array([
        -1,
        -1,
        0.5,
        3,
        -1,
        0.5,
        -1,
        3,
        0.5
    ]), 3));
    const f = new Mesh(m2, d1), g = this;
    function v(r, n) {
        const i = t47.update(f);
        d1.uniforms.shadow_pass.value = r.map.texture, d1.uniforms.resolution.value = r.mapSize, d1.uniforms.radius.value = r.radius, e830.setRenderTarget(r.mapPass), e830.clear(), e830.renderBufferDirect(n, null, i, d1, f, null), p2.uniforms.shadow_pass.value = r.mapPass.texture, p2.uniforms.resolution.value = r.mapSize, p2.uniforms.radius.value = r.radius, e830.setRenderTarget(r.map), e830.clear(), e830.renderBufferDirect(n, null, i, p2, f, null);
    }
    function _(e831, t, r) {
        const n = e831 << 0 | t << 1 | r << 2;
        let i = s6[n];
        return void 0 === i && (i = new MeshDepthMaterial({
            depthPacking: RGBADepthPacking,
            morphTargets: e831,
            skinning: t
        }), s6[n] = i), i;
    }
    function y(e832, t, r) {
        const n = e832 << 0 | t << 1 | r << 2;
        let i = l3[n];
        return void 0 === i && (i = new MeshDistanceMaterial({
            morphTargets: e832,
            skinning: t
        }), l3[n] = i), i;
    }
    function x(t, r, n, i, a, o, s) {
        let l = null, h = _, d = t.customDepthMaterial;
        if (!0 === i.isPointLight && (h = y, d = t.customDistanceMaterial), void 0 === d) {
            let e833 = !1;
            !0 === n.morphTargets && (e833 = r.morphAttributes && r.morphAttributes.position && r.morphAttributes.position.length > 0);
            let i = !1;
            !0 === t.isSkinnedMesh && (!0 === n.skinning ? i = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", t)), l = h(e833, i, !0 === t.isInstancedMesh);
        } else l = d;
        if (e830.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) {
            const e834 = l.uuid, t = n.uuid;
            let r = c3[e834];
            void 0 === r && (r = {}, c3[e834] = r);
            let i = r[t];
            void 0 === i && (i = l.clone(), r[t] = i), l = i;
        }
        return l.visible = n.visible, l.wireframe = n.wireframe, l.side = s === VSMShadowMap ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : u5[n.side], l.clipShadows = n.clipShadows, l.clippingPlanes = n.clippingPlanes, l.clipIntersection = n.clipIntersection, l.wireframeLinewidth = n.wireframeLinewidth, l.linewidth = n.linewidth, !0 === i.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(i.matrixWorld), l.nearDistance = a, l.farDistance = o), l;
    }
    function b(r, i, a, o, s) {
        if (!1 === r.visible) return;
        if (r.layers.test(i.layers) && (r.isMesh || r.isLine || r.isPoints) && (r.castShadow || r.receiveShadow && s === VSMShadowMap) && (!r.frustumCulled || n27.intersectsObject(r))) {
            r.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, r.matrixWorld);
            const n = t47.update(r), i = r.material;
            if (Array.isArray(i)) {
                const t = n.groups;
                for(let l = 0, c = t.length; l < c; l++){
                    const c = t[l], h = i[c.materialIndex];
                    if (h && h.visible) {
                        const t = x(r, n, h, o, a.near, a.far, s);
                        e830.renderBufferDirect(a, null, n, t, r, c);
                    }
                }
            } else if (i.visible) {
                const t = x(r, n, i, o, a.near, a.far, s);
                e830.renderBufferDirect(a, null, n, t, r, null);
            }
        }
        const l = r.children;
        for(let e835 = 0, t = l.length; e835 < t; e835++)b(l[e835], i, a, o, s);
    }
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = PCFShadowMap, this.render = function(t, r, s) {
        if (!1 === g.enabled) return;
        if (!1 === g.autoUpdate && !1 === g.needsUpdate) return;
        if (0 === t.length) return;
        const l = e830.getRenderTarget(), c = e830.getActiveCubeFace(), u = e830.getActiveMipmapLevel(), d = e830.state;
        d.setBlending(NoBlending), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
        for(let l4 = 0, c4 = t.length; l4 < c4; l4++){
            const c = t[l4], u = c.shadow;
            if (void 0 === u) {
                console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
                continue;
            }
            if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
            i18.copy(u.mapSize);
            const p = u.getFrameExtents();
            if (i18.multiply(p), a10.copy(u.mapSize), (i18.x > h2 || i18.y > h2) && (i18.x > h2 && (a10.x = Math.floor(h2 / p.x), i18.x = a10.x * p.x, u.mapSize.x = a10.x), i18.y > h2 && (a10.y = Math.floor(h2 / p.y), i18.y = a10.y * p.y, u.mapSize.y = a10.y)), null === u.map && !u.isPointLightShadow && this.type === VSMShadowMap) {
                const e836 = {
                    minFilter: LinearFilter,
                    magFilter: LinearFilter,
                    format: RGBAFormat
                };
                u.map = new WebGLRenderTarget(i18.x, i18.y, e836), u.map.texture.name = c.name + ".shadowMap", u.mapPass = new WebGLRenderTarget(i18.x, i18.y, e836), u.camera.updateProjectionMatrix();
            }
            if (null === u.map) {
                const e837 = {
                    minFilter: NearestFilter,
                    magFilter: NearestFilter,
                    format: RGBAFormat
                };
                u.map = new WebGLRenderTarget(i18.x, i18.y, e837), u.map.texture.name = c.name + ".shadowMap", u.camera.updateProjectionMatrix();
            }
            e830.setRenderTarget(u.map), e830.clear();
            const m = u.getViewportCount();
            for(let e838 = 0; e838 < m; e838++){
                const t = u.getViewport(e838);
                o9.set(a10.x * t.x, a10.y * t.y, a10.x * t.z, a10.y * t.w), d.viewport(o9), u.updateMatrices(c, e838), n27 = u.getFrustum(), b(r, s, u.camera, c, this.type);
            }
            u.isPointLightShadow || this.type !== VSMShadowMap || v(u, s), u.needsUpdate = !1;
        }
        g.needsUpdate = !1, e830.setRenderTarget(l, c, u);
    };
}
function WebGLState(e839, t48, r29) {
    const n28 = r29.isWebGL2;
    const i19 = new function() {
        let t49 = !1;
        const r30 = new Vector4;
        let n29 = null;
        const i = new Vector4(0, 0, 0, 0);
        return {
            setMask: function(r) {
                n29 === r || t49 || (e839.colorMask(r, r, r, r), n29 = r);
            },
            setLocked: function(e840) {
                t49 = e840;
            },
            setClear: function(t, n, a, o, s) {
                !0 === s && (t *= o, n *= o, a *= o), r30.set(t, n, a, o), !1 === i.equals(r30) && (e839.clearColor(t, n, a, o), i.copy(r30));
            },
            reset: function() {
                t49 = !1, n29 = null, i.set(-1, 0, 0, 0);
            }
        };
    }, a11 = new function() {
        let t50 = !1, r = null, n30 = null, i = null;
        return {
            setTest: function(e841) {
                e841 ? G(2929) : F(2929);
            },
            setMask: function(n) {
                r === n || t50 || (e839.depthMask(n), r = n);
            },
            setFunc: function(t) {
                if (n30 !== t) {
                    if (t) switch(t){
                        case NeverDepth:
                            e839.depthFunc(512);
                            break;
                        case AlwaysDepth:
                            e839.depthFunc(519);
                            break;
                        case LessDepth:
                            e839.depthFunc(513);
                            break;
                        case LessEqualDepth:
                            e839.depthFunc(515);
                            break;
                        case EqualDepth:
                            e839.depthFunc(514);
                            break;
                        case GreaterEqualDepth:
                            e839.depthFunc(518);
                            break;
                        case GreaterDepth:
                            e839.depthFunc(516);
                            break;
                        case NotEqualDepth:
                            e839.depthFunc(517);
                            break;
                        default:
                            e839.depthFunc(515);
                    }
                    else e839.depthFunc(515);
                    n30 = t;
                }
            },
            setLocked: function(e842) {
                t50 = e842;
            },
            setClear: function(t) {
                i !== t && (e839.clearDepth(t), i = t);
            },
            reset: function() {
                t50 = !1, r = null, n30 = null, i = null;
            }
        };
    }, o10 = new function() {
        let t51 = !1, r31 = null, n31 = null, i = null, a = null, o11 = null, s = null, l = null, c = null;
        return {
            setTest: function(e843) {
                t51 || (e843 ? G(2960) : F(2960));
            },
            setMask: function(n) {
                r31 === n || t51 || (e839.stencilMask(n), r31 = n);
            },
            setFunc: function(t, r, o) {
                n31 === t && i === r && a === o || (e839.stencilFunc(t, r, o), n31 = t, i = r, a = o);
            },
            setOp: function(t, r, n) {
                o11 === t && s === r && l === n || (e839.stencilOp(t, r, n), o11 = t, s = r, l = n);
            },
            setLocked: function(e844) {
                t51 = e844;
            },
            setClear: function(t) {
                c !== t && (e839.clearStencil(t), c = t);
            },
            reset: function() {
                t51 = !1, r31 = null, n31 = null, i = null, a = null, o11 = null, s = null, l = null, c = null;
            }
        };
    };
    let s7 = {}, l5 = null, c5 = {}, h = null, u = !1, d = null, p = null, m = null, f = null, g = null, v = null, _ = null, y = !1, x = null, b = null, M = null, w = null, S = null;
    const T = e839.getParameter(35661);
    let E = !1, A = 0;
    const L = e839.getParameter(7938);
    -1 !== L.indexOf("WebGL") ? (A = parseFloat(/^WebGL (\d)/.exec(L)[1]), E = A >= 1) : -1 !== L.indexOf("OpenGL ES") && (A = parseFloat(/^OpenGL ES (\d)/.exec(L)[1]), E = A >= 2);
    let C = null, R = {};
    const P = new Vector4(0, 0, e839.canvas.width, e839.canvas.height), B = new Vector4(0, 0, e839.canvas.width, e839.canvas.height);
    function D(t, r, n) {
        const i = new Uint8Array(4), a = e839.createTexture();
        e839.bindTexture(t, a), e839.texParameteri(t, 10241, 9728), e839.texParameteri(t, 10240, 9728);
        for(let t52 = 0; t52 < n; t52++)e839.texImage2D(r + t52, 0, 6408, 1, 1, 0, 6408, 5121, i);
        return a;
    }
    const I = {};
    function G(t) {
        !0 !== s7[t] && (e839.enable(t), s7[t] = !0);
    }
    function F(t) {
        !1 !== s7[t] && (e839.disable(t), s7[t] = !1);
    }
    I[3553] = D(3553, 3553, 1), I[34067] = D(34067, 34069, 6), i19.setClear(0, 0, 0, 1), a11.setClear(1), o10.setClear(0), G(2929), a11.setFunc(LessEqualDepth), O(!1), z(CullFaceBack), G(2884), U(NoBlending);
    const V = {
        [AddEquation]: 32774,
        [SubtractEquation]: 32778,
        [ReverseSubtractEquation]: 32779
    };
    if (n28) V[MinEquation] = 32775, V[MaxEquation] = 32776;
    else {
        const e845 = t48.get("EXT_blend_minmax");
        null !== e845 && (V[MinEquation] = e845.MIN_EXT, V[MaxEquation] = e845.MAX_EXT);
    }
    const N = {
        [ZeroFactor]: 0,
        [OneFactor]: 1,
        [SrcColorFactor]: 768,
        [SrcAlphaFactor]: 770,
        [SrcAlphaSaturateFactor]: 776,
        [DstColorFactor]: 774,
        [DstAlphaFactor]: 772,
        [OneMinusSrcColorFactor]: 769,
        [OneMinusSrcAlphaFactor]: 771,
        [OneMinusDstColorFactor]: 775,
        [OneMinusDstAlphaFactor]: 773
    };
    function U(t, r, n, i, a, o, s, l) {
        if (t !== NoBlending) {
            if (!1 === u && (G(3042), u = !0), t === CustomBlending) a = a || r, o = o || n, s = s || i, r === p && a === g || (e839.blendEquationSeparate(V[r], V[a]), p = r, g = a), n === m && i === f && o === v && s === _ || (e839.blendFuncSeparate(N[n], N[i], N[o], N[s]), m = n, f = i, v = o, _ = s), d = t, y = null;
            else if (t !== d || l !== y) {
                if (p === AddEquation && g === AddEquation || (e839.blendEquation(32774), p = AddEquation, g = AddEquation), l) switch(t){
                    case NormalBlending:
                        e839.blendFuncSeparate(1, 771, 1, 771);
                        break;
                    case AdditiveBlending:
                        e839.blendFunc(1, 1);
                        break;
                    case SubtractiveBlending:
                        e839.blendFuncSeparate(0, 0, 769, 771);
                        break;
                    case MultiplyBlending:
                        e839.blendFuncSeparate(0, 768, 0, 770);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", t);
                }
                else switch(t){
                    case NormalBlending:
                        e839.blendFuncSeparate(770, 771, 1, 771);
                        break;
                    case AdditiveBlending:
                        e839.blendFunc(770, 1);
                        break;
                    case SubtractiveBlending:
                        e839.blendFunc(0, 769);
                        break;
                    case MultiplyBlending:
                        e839.blendFunc(0, 768);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", t);
                }
                m = null, f = null, v = null, _ = null, d = t, y = l;
            }
        } else !0 === u && (F(3042), u = !1);
    }
    function O(t) {
        x !== t && (t ? e839.frontFace(2304) : e839.frontFace(2305), x = t);
    }
    function z(t) {
        t !== CullFaceNone ? (G(2884), t !== b && (t === CullFaceBack ? e839.cullFace(1029) : t === CullFaceFront ? e839.cullFace(1028) : e839.cullFace(1032))) : F(2884), b = t;
    }
    function H(t, r, n) {
        t ? (G(32823), w === r && S === n || (e839.polygonOffset(r, n), w = r, S = n)) : F(32823);
    }
    function k(t) {
        void 0 === t && (t = 33984 + T - 1), C !== t && (e839.activeTexture(t), C = t);
    }
    return {
        buffers: {
            color: i19,
            depth: a11,
            stencil: o10
        },
        enable: G,
        disable: F,
        bindFramebuffer: function(t, r) {
            null === r && null !== l5 && (r = l5), c5[t] !== r && (e839.bindFramebuffer(t, r), c5[t] = r, n28 && (36009 === t && (c5[36160] = r), 36160 === t && (c5[36009] = r)));
        },
        bindXRFramebuffer: function(t) {
            t !== l5 && (e839.bindFramebuffer(36160, t), l5 = t);
        },
        useProgram: function(t) {
            return h !== t && (e839.useProgram(t), h = t, !0);
        },
        setBlending: U,
        setMaterial: function(e846, t) {
            e846.side === DoubleSide ? F(2884) : G(2884);
            let r = e846.side === BackSide;
            t && (r = !r), O(r), e846.blending === NormalBlending && !1 === e846.transparent ? U(NoBlending) : U(e846.blending, e846.blendEquation, e846.blendSrc, e846.blendDst, e846.blendEquationAlpha, e846.blendSrcAlpha, e846.blendDstAlpha, e846.premultipliedAlpha), a11.setFunc(e846.depthFunc), a11.setTest(e846.depthTest), a11.setMask(e846.depthWrite), i19.setMask(e846.colorWrite);
            const n = e846.stencilWrite;
            o10.setTest(n), n && (o10.setMask(e846.stencilWriteMask), o10.setFunc(e846.stencilFunc, e846.stencilRef, e846.stencilFuncMask), o10.setOp(e846.stencilFail, e846.stencilZFail, e846.stencilZPass)), H(e846.polygonOffset, e846.polygonOffsetFactor, e846.polygonOffsetUnits), !0 === e846.alphaToCoverage ? G(32926) : F(32926);
        },
        setFlipSided: O,
        setCullFace: z,
        setLineWidth: function(t) {
            t !== M && (E && e839.lineWidth(t), M = t);
        },
        setPolygonOffset: H,
        setScissorTest: function(e847) {
            e847 ? G(3089) : F(3089);
        },
        activeTexture: k,
        bindTexture: function(t, r) {
            null === C && k();
            let n = R[C];
            void 0 === n && (n = {
                type: void 0,
                texture: void 0
            }, R[C] = n), n.type === t && n.texture === r || (e839.bindTexture(t, r || I[t]), n.type = t, n.texture = r);
        },
        unbindTexture: function() {
            const t = R[C];
            void 0 !== t && void 0 !== t.type && (e839.bindTexture(t.type, null), t.type = void 0, t.texture = void 0);
        },
        compressedTexImage2D: function() {
            try {
                e839.compressedTexImage2D.apply(e839, arguments);
            } catch (e848) {
                console.error("THREE.WebGLState:", e848);
            }
        },
        texImage2D: function() {
            try {
                e839.texImage2D.apply(e839, arguments);
            } catch (e849) {
                console.error("THREE.WebGLState:", e849);
            }
        },
        texImage3D: function() {
            try {
                e839.texImage3D.apply(e839, arguments);
            } catch (e850) {
                console.error("THREE.WebGLState:", e850);
            }
        },
        scissor: function(t) {
            !1 === P.equals(t) && (e839.scissor(t.x, t.y, t.z, t.w), P.copy(t));
        },
        viewport: function(t) {
            !1 === B.equals(t) && (e839.viewport(t.x, t.y, t.z, t.w), B.copy(t));
        },
        reset: function() {
            e839.disable(3042), e839.disable(2884), e839.disable(2929), e839.disable(32823), e839.disable(3089), e839.disable(2960), e839.disable(32926), e839.blendEquation(32774), e839.blendFunc(1, 0), e839.blendFuncSeparate(1, 0, 1, 0), e839.colorMask(!0, !0, !0, !0), e839.clearColor(0, 0, 0, 0), e839.depthMask(!0), e839.depthFunc(513), e839.clearDepth(1), e839.stencilMask(4294967295), e839.stencilFunc(519, 0, 4294967295), e839.stencilOp(7680, 7680, 7680), e839.clearStencil(0), e839.cullFace(1029), e839.frontFace(2305), e839.polygonOffset(0, 0), e839.activeTexture(33984), e839.bindFramebuffer(36160, null), !0 === n28 && (e839.bindFramebuffer(36009, null), e839.bindFramebuffer(36008, null)), e839.useProgram(null), e839.lineWidth(1), e839.scissor(0, 0, e839.canvas.width, e839.canvas.height), e839.viewport(0, 0, e839.canvas.width, e839.canvas.height), s7 = {}, C = null, R = {}, l5 = null, c5 = {}, h = null, u = !1, d = null, p = null, m = null, f = null, g = null, v = null, _ = null, y = !1, x = null, b = null, M = null, w = null, S = null, P.set(0, 0, e839.canvas.width, e839.canvas.height), B.set(0, 0, e839.canvas.width, e839.canvas.height), i19.reset(), a11.reset(), o10.reset();
        }
    };
}
function WebGLTextures(e852, t53, r32, n32, i20, a12, o12) {
    const s8 = i20.isWebGL2, l6 = i20.maxTextures, c6 = i20.maxCubemapSize, h3 = i20.maxTextureSize, u6 = i20.maxSamples, d2 = new WeakMap;
    let p3, m3 = !1;
    try {
        m3 = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (e851) {}
    function f1(e853, t) {
        return m3 ? new OffscreenCanvas(e853, t) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    }
    function g(e854, t, r, n) {
        let i = 1;
        if ((e854.width > n || e854.height > n) && (i = n / Math.max(e854.width, e854.height)), i < 1 || !0 === t) {
            if ("undefined" != typeof HTMLImageElement && e854 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e854 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e854 instanceof ImageBitmap) {
                const n = t ? floorPowerOfTwo : Math.floor, a = n(i * e854.width), o = n(i * e854.height);
                void 0 === p3 && (p3 = f1(a, o));
                const s = r ? f1(a, o) : p3;
                return s.width = a, s.height = o, s.getContext("2d").drawImage(e854, 0, 0, a, o), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + e854.width + "x" + e854.height + ") to (" + a + "x" + o + ")."), s;
            }
            return "data" in e854 && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + e854.width + "x" + e854.height + ")."), e854;
        }
        return e854;
    }
    function v(e855) {
        return isPowerOfTwo(e855.width) && isPowerOfTwo(e855.height);
    }
    function _(e856, t) {
        return e856.generateMipmaps && t && e856.minFilter !== NearestFilter && e856.minFilter !== LinearFilter;
    }
    function y(t, r, i, a) {
        e852.generateMipmap(t), n32.get(r).__maxMipLevel = Math.log2(Math.max(i, a));
    }
    function x(r, n, i) {
        if (!1 === s8) return n;
        if (null !== r) {
            if (void 0 !== e852[r]) return e852[r];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + r + "'");
        }
        let a = n;
        return 6403 === n && (5126 === i && (a = 33326), 5131 === i && (a = 33325), 5121 === i && (a = 33321)), 6407 === n && (5126 === i && (a = 34837), 5131 === i && (a = 34843), 5121 === i && (a = 32849)), 6408 === n && (5126 === i && (a = 34836), 5131 === i && (a = 34842), 5121 === i && (a = 32856)), 33325 !== a && 33326 !== a && 34842 !== a && 34836 !== a || t53.get("EXT_color_buffer_float"), a;
    }
    function b1(e857) {
        return e857 === NearestFilter || e857 === NearestMipmapNearestFilter || e857 === NearestMipmapLinearFilter ? 9728 : 9729;
    }
    function M(t54) {
        const r33 = t54.target;
        r33.removeEventListener("dispose", M), function(t) {
            const r = n32.get(t);
            if (void 0 === r.__webglInit) return;
            e852.deleteTexture(r.__webglTexture), n32.remove(t);
        }(r33), r33.isVideoTexture && d2.delete(r33), o12.memory.textures--;
    }
    function w(t56) {
        const r34 = t56.target;
        r34.removeEventListener("dispose", w), function(t) {
            const r = t.texture, i = n32.get(t), a = n32.get(r);
            if (!t) return;
            void 0 !== a.__webglTexture && e852.deleteTexture(a.__webglTexture);
            t.depthTexture && t.depthTexture.dispose();
            if (t.isWebGLCubeRenderTarget) for(let t55 = 0; t55 < 6; t55++)e852.deleteFramebuffer(i.__webglFramebuffer[t55]), i.__webglDepthbuffer && e852.deleteRenderbuffer(i.__webglDepthbuffer[t55]);
            else e852.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && e852.deleteRenderbuffer(i.__webglDepthbuffer), i.__webglMultisampledFramebuffer && e852.deleteFramebuffer(i.__webglMultisampledFramebuffer), i.__webglColorRenderbuffer && e852.deleteRenderbuffer(i.__webglColorRenderbuffer), i.__webglDepthRenderbuffer && e852.deleteRenderbuffer(i.__webglDepthRenderbuffer);
            n32.remove(r), n32.remove(t);
        }(r34), o12.memory.textures--;
    }
    let S = 0;
    function T(e858, t57) {
        const i = n32.get(e858);
        if (e858.isVideoTexture && function(e859) {
            const t = o12.render.frame;
            d2.get(e859) !== t && (d2.set(e859, t), e859.update());
        }(e858), e858.version > 0 && i.__version !== e858.version) {
            const r = e858.image;
            if (void 0 === r) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
            else {
                if (!1 !== r.complete) return void P(i, e858, t57);
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            }
        }
        r32.activeTexture(33984 + t57), r32.bindTexture(3553, i.__webglTexture);
    }
    function E(t58, i21) {
        const o13 = n32.get(t58);
        t58.version > 0 && o13.__version !== t58.version ? function(t, n, i) {
            if (6 !== n.image.length) return;
            R(t, n), r32.activeTexture(33984 + i), r32.bindTexture(34067, t.__webglTexture), e852.pixelStorei(37440, n.flipY), e852.pixelStorei(37441, n.premultiplyAlpha), e852.pixelStorei(3317, n.unpackAlignment), e852.pixelStorei(37443, 0);
            const o = n && (n.isCompressedTexture || n.image[0].isCompressedTexture), l = n.image[0] && n.image[0].isDataTexture, h = [];
            for(let e860 = 0; e860 < 6; e860++)h[e860] = o || l ? l ? n.image[e860].image : n.image[e860] : g(n.image[e860], !1, !0, c6);
            const u = h[0], d = v(u) || s8, p = a12.convert(n.format), m = a12.convert(n.type), f = x(n.internalFormat, p, m);
            let b;
            if (C(34067, n, d), o) {
                for(let e861 = 0; e861 < 6; e861++){
                    b = h[e861].mipmaps;
                    for(let t = 0; t < b.length; t++){
                        const i = b[t];
                        n.format !== RGBAFormat && n.format !== RGBFormat ? null !== p ? r32.compressedTexImage2D(34069 + e861, t, f, i.width, i.height, 0, i.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : r32.texImage2D(34069 + e861, t, f, i.width, i.height, 0, p, m, i.data);
                    }
                }
                t.__maxMipLevel = b.length - 1;
            } else {
                b = n.mipmaps;
                for(let e862 = 0; e862 < 6; e862++)if (l) {
                    r32.texImage2D(34069 + e862, 0, f, h[e862].width, h[e862].height, 0, p, m, h[e862].data);
                    for(let t = 0; t < b.length; t++){
                        const n = b[t], i = n.image[e862].image;
                        r32.texImage2D(34069 + e862, t + 1, f, i.width, i.height, 0, p, m, i.data);
                    }
                } else {
                    r32.texImage2D(34069 + e862, 0, f, p, m, h[e862]);
                    for(let t = 0; t < b.length; t++){
                        const n = b[t];
                        r32.texImage2D(34069 + e862, t + 1, f, p, m, n.image[e862]);
                    }
                }
                t.__maxMipLevel = b.length;
            }
            _(n, d) && y(34067, n, u.width, u.height);
            t.__version = n.version, n.onUpdate && n.onUpdate(n);
        }(o13, t58, i21) : (r32.activeTexture(33984 + i21), r32.bindTexture(34067, o13.__webglTexture));
    }
    const A = {
        [RepeatWrapping]: 10497,
        [ClampToEdgeWrapping]: 33071,
        [MirroredRepeatWrapping]: 33648
    }, L = {
        [NearestFilter]: 9728,
        [NearestMipmapNearestFilter]: 9984,
        [NearestMipmapLinearFilter]: 9986,
        [LinearFilter]: 9729,
        [LinearMipmapNearestFilter]: 9985,
        [LinearMipmapLinearFilter]: 9987
    };
    function C(r, a, o) {
        if (o ? (e852.texParameteri(r, 10242, A[a.wrapS]), e852.texParameteri(r, 10243, A[a.wrapT]), 32879 !== r && 35866 !== r || e852.texParameteri(r, 32882, A[a.wrapR]), e852.texParameteri(r, 10240, L[a.magFilter]), e852.texParameteri(r, 10241, L[a.minFilter])) : (e852.texParameteri(r, 10242, 33071), e852.texParameteri(r, 10243, 33071), 32879 !== r && 35866 !== r || e852.texParameteri(r, 32882, 33071), a.wrapS === ClampToEdgeWrapping && a.wrapT === ClampToEdgeWrapping || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e852.texParameteri(r, 10240, b1(a.magFilter)), e852.texParameteri(r, 10241, b1(a.minFilter)), a.minFilter !== NearestFilter && a.minFilter !== LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === t53.has("EXT_texture_filter_anisotropic")) {
            const o = t53.get("EXT_texture_filter_anisotropic");
            if (a.type === FloatType && !1 === t53.has("OES_texture_float_linear")) return;
            if (!1 === s8 && a.type === HalfFloatType && !1 === t53.has("OES_texture_half_float_linear")) return;
            (a.anisotropy > 1 || n32.get(a).__currentAnisotropy) && (e852.texParameterf(r, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i20.getMaxAnisotropy())), n32.get(a).__currentAnisotropy = a.anisotropy);
        }
    }
    function R(t, r) {
        void 0 === t.__webglInit && (t.__webglInit = !0, r.addEventListener("dispose", M), t.__webglTexture = e852.createTexture(), o12.memory.textures++);
    }
    function P(t, n, i) {
        let o = 3553;
        n.isDataTexture2DArray && (o = 35866), n.isDataTexture3D && (o = 32879), R(t, n), r32.activeTexture(33984 + i), r32.bindTexture(o, t.__webglTexture), e852.pixelStorei(37440, n.flipY), e852.pixelStorei(37441, n.premultiplyAlpha), e852.pixelStorei(3317, n.unpackAlignment), e852.pixelStorei(37443, 0);
        const l = function(e863) {
            return !s8 && (e863.wrapS !== ClampToEdgeWrapping || e863.wrapT !== ClampToEdgeWrapping || e863.minFilter !== NearestFilter && e863.minFilter !== LinearFilter);
        }(n) && !1 === v(n.image), c = g(n.image, l, !1, h3), u = v(c) || s8, d = a12.convert(n.format);
        let p, m = a12.convert(n.type), f = x(n.internalFormat, d, m);
        C(o, n, u);
        const b = n.mipmaps;
        if (n.isDepthTexture) f = 6402, s8 ? f = n.type === FloatType ? 36012 : n.type === UnsignedIntType ? 33190 : n.type === UnsignedInt248Type ? 35056 : 33189 : n.type === FloatType && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), n.format === DepthFormat && 6402 === f && n.type !== UnsignedShortType && n.type !== UnsignedIntType && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), n.type = UnsignedShortType, m = a12.convert(n.type)), n.format === DepthStencilFormat && 6402 === f && (f = 34041, n.type !== UnsignedInt248Type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), n.type = UnsignedInt248Type, m = a12.convert(n.type))), r32.texImage2D(3553, 0, f, c.width, c.height, 0, d, m, null);
        else if (n.isDataTexture) {
            if (b.length > 0 && u) {
                for(let e864 = 0, t59 = b.length; e864 < t59; e864++)p = b[e864], r32.texImage2D(3553, e864, f, p.width, p.height, 0, d, m, p.data);
                n.generateMipmaps = !1, t.__maxMipLevel = b.length - 1;
            } else r32.texImage2D(3553, 0, f, c.width, c.height, 0, d, m, c.data), t.__maxMipLevel = 0;
        } else if (n.isCompressedTexture) {
            for(let e865 = 0, t61 = b.length; e865 < t61; e865++)p = b[e865], n.format !== RGBAFormat && n.format !== RGBFormat ? null !== d ? r32.compressedTexImage2D(3553, e865, f, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : r32.texImage2D(3553, e865, f, p.width, p.height, 0, d, m, p.data);
            t.__maxMipLevel = b.length - 1;
        } else if (n.isDataTexture2DArray) r32.texImage3D(35866, 0, f, c.width, c.height, c.depth, 0, d, m, c.data), t.__maxMipLevel = 0;
        else if (n.isDataTexture3D) r32.texImage3D(32879, 0, f, c.width, c.height, c.depth, 0, d, m, c.data), t.__maxMipLevel = 0;
        else if (b.length > 0 && u) {
            for(let e866 = 0, t62 = b.length; e866 < t62; e866++)p = b[e866], r32.texImage2D(3553, e866, f, d, m, p);
            n.generateMipmaps = !1, t.__maxMipLevel = b.length - 1;
        } else r32.texImage2D(3553, 0, f, d, m, c), t.__maxMipLevel = 0;
        _(n, u) && y(o, n, c.width, c.height), t.__version = n.version, n.onUpdate && n.onUpdate(n);
    }
    function B(t, i, o, s) {
        const l = i.texture, c = a12.convert(l.format), h = a12.convert(l.type), u = x(l.internalFormat, c, h);
        32879 === s || 35866 === s ? r32.texImage3D(s, 0, u, i.width, i.height, i.depth, 0, c, h, null) : r32.texImage2D(s, 0, u, i.width, i.height, 0, c, h, null), r32.bindFramebuffer(36160, t), e852.framebufferTexture2D(36160, o, s, n32.get(l).__webglTexture, 0), r32.bindFramebuffer(36160, null);
    }
    function D(t, r, n) {
        if (e852.bindRenderbuffer(36161, t), r.depthBuffer && !r.stencilBuffer) {
            let i = 33189;
            if (n) {
                const t = r.depthTexture;
                t && t.isDepthTexture && (t.type === FloatType ? i = 36012 : t.type === UnsignedIntType && (i = 33190));
                const n = G(r);
                e852.renderbufferStorageMultisample(36161, n, i, r.width, r.height);
            } else e852.renderbufferStorage(36161, i, r.width, r.height);
            e852.framebufferRenderbuffer(36160, 36096, 36161, t);
        } else if (r.depthBuffer && r.stencilBuffer) {
            if (n) {
                const t = G(r);
                e852.renderbufferStorageMultisample(36161, t, 35056, r.width, r.height);
            } else e852.renderbufferStorage(36161, 34041, r.width, r.height);
            e852.framebufferRenderbuffer(36160, 33306, 36161, t);
        } else {
            const t = r.texture, i = a12.convert(t.format), o = a12.convert(t.type), s = x(t.internalFormat, i, o);
            if (n) {
                const t = G(r);
                e852.renderbufferStorageMultisample(36161, t, s, r.width, r.height);
            } else e852.renderbufferStorage(36161, s, r.width, r.height);
        }
        e852.bindRenderbuffer(36161, null);
    }
    function I(t63) {
        const i22 = n32.get(t63), a13 = !0 === t63.isWebGLCubeRenderTarget;
        if (t63.depthTexture) {
            if (a13) throw new Error("target.depthTexture not supported in Cube render targets");
            !function(t, i) {
                if (i && i.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                if (r32.bindFramebuffer(36160, t), !i.depthTexture || !i.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                n32.get(i.depthTexture).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), T(i.depthTexture, 0);
                const a = n32.get(i.depthTexture).__webglTexture;
                if (i.depthTexture.format === DepthFormat) e852.framebufferTexture2D(36160, 36096, 3553, a, 0);
                else {
                    if (i.depthTexture.format !== DepthStencilFormat) throw new Error("Unknown depthTexture format");
                    e852.framebufferTexture2D(36160, 33306, 3553, a, 0);
                }
            }(i22.__webglFramebuffer, t63);
        } else if (a13) {
            i22.__webglDepthbuffer = [];
            for(let n = 0; n < 6; n++)r32.bindFramebuffer(36160, i22.__webglFramebuffer[n]), i22.__webglDepthbuffer[n] = e852.createRenderbuffer(), D(i22.__webglDepthbuffer[n], t63, !1);
        } else r32.bindFramebuffer(36160, i22.__webglFramebuffer), i22.__webglDepthbuffer = e852.createRenderbuffer(), D(i22.__webglDepthbuffer, t63, !1);
        r32.bindFramebuffer(36160, null);
    }
    function G(e867) {
        return s8 && e867.isWebGLMultisampleRenderTarget ? Math.min(u6, e867.samples) : 0;
    }
    let F = !1, V = !1;
    this.allocateTextureUnit = function() {
        const e868 = S;
        return e868 >= l6 && console.warn("THREE.WebGLTextures: Trying to use " + e868 + " texture units while this GPU supports only " + l6), S += 1, e868;
    }, this.resetTextureUnits = function() {
        S = 0;
    }, this.setTexture2D = T, this.setTexture2DArray = function(e869, t) {
        const i = n32.get(e869);
        e869.version > 0 && i.__version !== e869.version ? P(i, e869, t) : (r32.activeTexture(33984 + t), r32.bindTexture(35866, i.__webglTexture));
    }, this.setTexture3D = function(e870, t) {
        const i = n32.get(e870);
        e870.version > 0 && i.__version !== e870.version ? P(i, e870, t) : (r32.activeTexture(33984 + t), r32.bindTexture(32879, i.__webglTexture));
    }, this.setTextureCube = E, this.setupRenderTarget = function(t) {
        const i = t.texture, l = n32.get(t), c = n32.get(i);
        t.addEventListener("dispose", w), c.__webglTexture = e852.createTexture(), c.__version = i.version, o12.memory.textures++;
        const h = !0 === t.isWebGLCubeRenderTarget, u = !0 === t.isWebGLMultisampleRenderTarget, d = i.isDataTexture3D || i.isDataTexture2DArray, p = v(t) || s8;
        if (!s8 || i.format !== RGBFormat || i.type !== FloatType && i.type !== HalfFloatType || (i.format = RGBAFormat, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), h) {
            l.__webglFramebuffer = [];
            for(let t = 0; t < 6; t++)l.__webglFramebuffer[t] = e852.createFramebuffer();
        } else if (l.__webglFramebuffer = e852.createFramebuffer(), u) {
            if (s8) {
                l.__webglMultisampledFramebuffer = e852.createFramebuffer(), l.__webglColorRenderbuffer = e852.createRenderbuffer(), e852.bindRenderbuffer(36161, l.__webglColorRenderbuffer);
                const n = a12.convert(i.format), o = a12.convert(i.type), s = x(i.internalFormat, n, o), c = G(t);
                e852.renderbufferStorageMultisample(36161, c, s, t.width, t.height), r32.bindFramebuffer(36160, l.__webglMultisampledFramebuffer), e852.framebufferRenderbuffer(36160, 36064, 36161, l.__webglColorRenderbuffer), e852.bindRenderbuffer(36161, null), t.depthBuffer && (l.__webglDepthRenderbuffer = e852.createRenderbuffer(), D(l.__webglDepthRenderbuffer, t, !0)), r32.bindFramebuffer(36160, null);
            } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
        }
        if (h) {
            r32.bindTexture(34067, c.__webglTexture), C(34067, i, p);
            for(let e871 = 0; e871 < 6; e871++)B(l.__webglFramebuffer[e871], t, 36064, 34069 + e871);
            _(i, p) && y(34067, i, t.width, t.height), r32.bindTexture(34067, null);
        } else {
            let e872 = 3553;
            d && (s8 ? e872 = i.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), r32.bindTexture(e872, c.__webglTexture), C(e872, i, p), B(l.__webglFramebuffer, t, 36064, e872), _(i, p) && y(3553, i, t.width, t.height), r32.bindTexture(3553, null);
        }
        t.depthBuffer && I(t);
    }, this.updateRenderTargetMipmap = function(e873) {
        const t = e873.texture;
        if (_(t, v(e873) || s8)) {
            const i = e873.isWebGLCubeRenderTarget ? 34067 : 3553, a = n32.get(t).__webglTexture;
            r32.bindTexture(i, a), y(i, t, e873.width, e873.height), r32.bindTexture(i, null);
        }
    }, this.updateMultisampleRenderTarget = function(t) {
        if (t.isWebGLMultisampleRenderTarget) {
            if (s8) {
                const i = t.width, a = t.height;
                let o = 16384;
                t.depthBuffer && (o |= 256), t.stencilBuffer && (o |= 1024);
                const s = n32.get(t);
                r32.bindFramebuffer(36008, s.__webglMultisampledFramebuffer), r32.bindFramebuffer(36009, s.__webglFramebuffer), e852.blitFramebuffer(0, 0, i, a, 0, 0, i, a, o, 9728), r32.bindFramebuffer(36008, null), r32.bindFramebuffer(36009, s.__webglMultisampledFramebuffer);
            } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
        }
    }, this.safeSetTexture2D = function(e874, t) {
        e874 && e874.isWebGLRenderTarget && (!1 === F && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), F = !0), e874 = e874.texture), T(e874, t);
    }, this.safeSetTextureCube = function(e875, t) {
        e875 && e875.isWebGLCubeRenderTarget && (!1 === V && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), V = !0), e875 = e875.texture), E(e875, t);
    };
}
function WebGLUtils(e876, t, r35) {
    const n = r35.isWebGL2;
    return {
        convert: function(e877) {
            let r;
            if (e877 === UnsignedByteType) return 5121;
            if (e877 === UnsignedShort4444Type) return 32819;
            if (e877 === UnsignedShort5551Type) return 32820;
            if (e877 === UnsignedShort565Type) return 33635;
            if (e877 === ByteType) return 5120;
            if (e877 === ShortType) return 5122;
            if (e877 === UnsignedShortType) return 5123;
            if (e877 === IntType) return 5124;
            if (e877 === UnsignedIntType) return 5125;
            if (e877 === FloatType) return 5126;
            if (e877 === HalfFloatType) return n ? 5131 : null !== (r = t.get("OES_texture_half_float")) ? r.HALF_FLOAT_OES : null;
            if (e877 === AlphaFormat) return 6406;
            if (e877 === RGBFormat) return 6407;
            if (e877 === RGBAFormat) return 6408;
            if (e877 === LuminanceFormat) return 6409;
            if (e877 === LuminanceAlphaFormat) return 6410;
            if (e877 === DepthFormat) return 6402;
            if (e877 === DepthStencilFormat) return 34041;
            if (e877 === RedFormat) return 6403;
            if (e877 === RedIntegerFormat) return 36244;
            if (e877 === RGFormat) return 33319;
            if (e877 === RGIntegerFormat) return 33320;
            if (e877 === RGBIntegerFormat) return 36248;
            if (e877 === RGBAIntegerFormat) return 36249;
            if (e877 === RGB_S3TC_DXT1_Format || e877 === RGBA_S3TC_DXT1_Format || e877 === RGBA_S3TC_DXT3_Format || e877 === RGBA_S3TC_DXT5_Format) {
                if (null === (r = t.get("WEBGL_compressed_texture_s3tc"))) return null;
                if (e877 === RGB_S3TC_DXT1_Format) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (e877 === RGBA_S3TC_DXT1_Format) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (e877 === RGBA_S3TC_DXT3_Format) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (e877 === RGBA_S3TC_DXT5_Format) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
            }
            if (e877 === RGB_PVRTC_4BPPV1_Format || e877 === RGB_PVRTC_2BPPV1_Format || e877 === RGBA_PVRTC_4BPPV1_Format || e877 === RGBA_PVRTC_2BPPV1_Format) {
                if (null === (r = t.get("WEBGL_compressed_texture_pvrtc"))) return null;
                if (e877 === RGB_PVRTC_4BPPV1_Format) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (e877 === RGB_PVRTC_2BPPV1_Format) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (e877 === RGBA_PVRTC_4BPPV1_Format) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (e877 === RGBA_PVRTC_2BPPV1_Format) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
            }
            if (e877 === RGB_ETC1_Format) return null !== (r = t.get("WEBGL_compressed_texture_etc1")) ? r.COMPRESSED_RGB_ETC1_WEBGL : null;
            if ((e877 === RGB_ETC2_Format || e877 === RGBA_ETC2_EAC_Format) && null !== (r = t.get("WEBGL_compressed_texture_etc"))) {
                if (e877 === RGB_ETC2_Format) return r.COMPRESSED_RGB8_ETC2;
                if (e877 === RGBA_ETC2_EAC_Format) return r.COMPRESSED_RGBA8_ETC2_EAC;
            }
            return e877 === RGBA_ASTC_4x4_Format || e877 === RGBA_ASTC_5x4_Format || e877 === RGBA_ASTC_5x5_Format || e877 === RGBA_ASTC_6x5_Format || e877 === RGBA_ASTC_6x6_Format || e877 === RGBA_ASTC_8x5_Format || e877 === RGBA_ASTC_8x6_Format || e877 === RGBA_ASTC_8x8_Format || e877 === RGBA_ASTC_10x5_Format || e877 === RGBA_ASTC_10x6_Format || e877 === RGBA_ASTC_10x8_Format || e877 === RGBA_ASTC_10x10_Format || e877 === RGBA_ASTC_12x10_Format || e877 === RGBA_ASTC_12x12_Format || e877 === SRGB8_ALPHA8_ASTC_4x4_Format || e877 === SRGB8_ALPHA8_ASTC_5x4_Format || e877 === SRGB8_ALPHA8_ASTC_5x5_Format || e877 === SRGB8_ALPHA8_ASTC_6x5_Format || e877 === SRGB8_ALPHA8_ASTC_6x6_Format || e877 === SRGB8_ALPHA8_ASTC_8x5_Format || e877 === SRGB8_ALPHA8_ASTC_8x6_Format || e877 === SRGB8_ALPHA8_ASTC_8x8_Format || e877 === SRGB8_ALPHA8_ASTC_10x5_Format || e877 === SRGB8_ALPHA8_ASTC_10x6_Format || e877 === SRGB8_ALPHA8_ASTC_10x8_Format || e877 === SRGB8_ALPHA8_ASTC_10x10_Format || e877 === SRGB8_ALPHA8_ASTC_12x10_Format || e877 === SRGB8_ALPHA8_ASTC_12x12_Format ? null !== (r = t.get("WEBGL_compressed_texture_astc")) ? e877 : null : e877 === RGBA_BPTC_Format ? null !== (r = t.get("EXT_texture_compression_bptc")) ? e877 : null : e877 === UnsignedInt248Type ? n ? 34042 : null !== (r = t.get("WEBGL_depth_texture")) ? r.UNSIGNED_INT_24_8_WEBGL : null : void 0;
        }
    };
}
class ArrayCamera extends PerspectiveCamera {
    constructor(e878 = []){
        super(), this.cameras = e878;
    }
}
ArrayCamera.prototype.isArrayCamera = !0;
class Group extends Object3D {
    constructor(){
        super(), this.type = "Group";
    }
}
Group.prototype.isGroup = !0;
const _moveEvent = {
    type: "move"
};
class WebXRController {
    constructor(){
        this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
        return null === this._hand && (this._hand = new Group, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
            pinching: !1
        }), this._hand;
    }
    getTargetRaySpace() {
        return null === this._targetRay && (this._targetRay = new Group, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new Vector3, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new Vector3), this._targetRay;
    }
    getGripSpace() {
        return null === this._grip && (this._grip = new Group, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new Vector3, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new Vector3), this._grip;
    }
    dispatchEvent(e879) {
        return null !== this._targetRay && this._targetRay.dispatchEvent(e879), null !== this._grip && this._grip.dispatchEvent(e879), null !== this._hand && this._hand.dispatchEvent(e879), this;
    }
    disconnect(e880) {
        return this.dispatchEvent({
            type: "disconnected",
            data: e880
        }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this;
    }
    update(e881, t, r) {
        let n = null, i = null, a = null;
        const o = this._targetRay, s = this._grip, l = this._hand;
        if (e881 && "visible-blurred" !== t.session.visibilityState) {
            if (null !== o && null !== (n = t.getPose(e881.targetRaySpace, r)) && (o.matrix.fromArray(n.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), n.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(n.linearVelocity)) : o.hasLinearVelocity = !1, n.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(n.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(_moveEvent)), l && e881.hand) {
                a = !0;
                for (const n of e881.hand.values()){
                    const e883 = t.getJointPose(n, r);
                    if (void 0 === l.joints[n.jointName]) {
                        const e882 = new Group;
                        e882.matrixAutoUpdate = !1, e882.visible = !1, l.joints[n.jointName] = e882, l.add(e882);
                    }
                    const i = l.joints[n.jointName];
                    null !== e883 && (i.matrix.fromArray(e883.transform.matrix), i.matrix.decompose(i.position, i.rotation, i.scale), i.jointRadius = e883.radius), i.visible = null !== e883;
                }
                const n33 = l.joints["index-finger-tip"], i = l.joints["thumb-tip"], o = n33.position.distanceTo(i.position), s = 0.02, c = 0.005;
                l.inputState.pinching && o > s + c ? (l.inputState.pinching = !1, this.dispatchEvent({
                    type: "pinchend",
                    handedness: e881.handedness,
                    target: this
                })) : !l.inputState.pinching && o <= s - c && (l.inputState.pinching = !0, this.dispatchEvent({
                    type: "pinchstart",
                    handedness: e881.handedness,
                    target: this
                }));
            } else null !== s && e881.gripSpace && null !== (i = t.getPose(e881.gripSpace, r)) && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1);
        }
        return null !== o && (o.visible = null !== n), null !== s && (s.visible = null !== i), null !== l && (l.visible = null !== a), this;
    }
}
class WebXRManager extends EventDispatcher {
    constructor(e884, t64){
        super();
        const r36 = this, n34 = e884.state;
        let i23 = null, a14 = 1, o14 = null, s9 = "local-floor", l7 = null;
        const c7 = [], h4 = new Map, u7 = new PerspectiveCamera;
        u7.layers.enable(1), u7.viewport = new Vector4;
        const d3 = new PerspectiveCamera;
        d3.layers.enable(2), d3.viewport = new Vector4;
        const p4 = [
            u7,
            d3
        ], m4 = new ArrayCamera;
        m4.layers.enable(1), m4.layers.enable(2);
        let f2 = null, g1 = null;
        function v1(e885) {
            const t = h4.get(e885.inputSource);
            t && t.dispatchEvent({
                type: e885.type,
                data: e885.inputSource
            });
        }
        function _2() {
            h4.forEach(function(e886, t) {
                e886.disconnect(t);
            }), h4.clear(), f2 = null, g1 = null, n34.bindXRFramebuffer(null), e884.setRenderTarget(e884.getRenderTarget()), S.stop(), r36.isPresenting = !1, r36.dispatchEvent({
                type: "sessionend"
            });
        }
        function y2(e888) {
            const t = i23.inputSources;
            for(let e887 = 0; e887 < c7.length; e887++)h4.set(t[e887], c7[e887]);
            for(let t65 = 0; t65 < e888.removed.length; t65++){
                const r = e888.removed[t65], n = h4.get(r);
                n && (n.dispatchEvent({
                    type: "disconnected",
                    data: r
                }), h4.delete(r));
            }
            for(let t66 = 0; t66 < e888.added.length; t66++){
                const r = e888.added[t66], n = h4.get(r);
                n && n.dispatchEvent({
                    type: "connected",
                    data: r
                });
            }
        }
        this.enabled = !1, this.isPresenting = !1, this.getController = function(e889) {
            let t = c7[e889];
            return void 0 === t && (t = new WebXRController, c7[e889] = t), t.getTargetRaySpace();
        }, this.getControllerGrip = function(e890) {
            let t = c7[e890];
            return void 0 === t && (t = new WebXRController, c7[e890] = t), t.getGripSpace();
        }, this.getHand = function(e891) {
            let t = c7[e891];
            return void 0 === t && (t = new WebXRController, c7[e891] = t), t.getHandSpace();
        }, this.setFramebufferScaleFactor = function(e892) {
            a14 = e892, !0 === r36.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
        }, this.setReferenceSpaceType = function(e893) {
            s9 = e893, !0 === r36.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
        }, this.getReferenceSpace = function() {
            return o14;
        }, this.getSession = function() {
            return i23;
        }, this.setSession = async function(e894) {
            if (null !== (i23 = e894)) {
                i23.addEventListener("select", v1), i23.addEventListener("selectstart", v1), i23.addEventListener("selectend", v1), i23.addEventListener("squeeze", v1), i23.addEventListener("squeezestart", v1), i23.addEventListener("squeezeend", v1), i23.addEventListener("end", _2), i23.addEventListener("inputsourceschange", y2);
                const e895 = t64.getContextAttributes();
                !0 !== e895.xrCompatible && await t64.makeXRCompatible();
                const n = {
                    antialias: e895.antialias,
                    alpha: e895.alpha,
                    depth: e895.depth,
                    stencil: e895.stencil,
                    framebufferScaleFactor: a14
                }, l = new XRWebGLLayer(i23, t64, n);
                i23.updateRenderState({
                    baseLayer: l
                }), o14 = await i23.requestReferenceSpace(s9), S.setContext(i23), S.start(), r36.isPresenting = !0, r36.dispatchEvent({
                    type: "sessionstart"
                });
            }
        };
        const x = new Vector3, b = new Vector3;
        function M1(e896, t) {
            null === t ? e896.matrixWorld.copy(e896.matrix) : e896.matrixWorld.multiplyMatrices(t.matrixWorld, e896.matrix), e896.matrixWorldInverse.copy(e896.matrixWorld).invert();
        }
        this.getCamera = function(e899) {
            m4.near = d3.near = u7.near = e899.near, m4.far = d3.far = u7.far = e899.far, f2 === m4.near && g1 === m4.far || (i23.updateRenderState({
                depthNear: m4.near,
                depthFar: m4.far
            }), f2 = m4.near, g1 = m4.far);
            const t68 = e899.parent, r37 = m4.cameras;
            M1(m4, t68);
            for(let e897 = 0; e897 < r37.length; e897++)M1(r37[e897], t68);
            e899.matrixWorld.copy(m4.matrixWorld), e899.matrix.copy(m4.matrix), e899.matrix.decompose(e899.position, e899.quaternion, e899.scale);
            const n35 = e899.children;
            for(let e898 = 0, t67 = n35.length; e898 < t67; e898++)n35[e898].updateMatrixWorld(!0);
            return 2 === r37.length ? function(e900, t, r) {
                x.setFromMatrixPosition(t.matrixWorld), b.setFromMatrixPosition(r.matrixWorld);
                const n = x.distanceTo(b), i = t.projectionMatrix.elements, a = r.projectionMatrix.elements, o = i[14] / (i[10] - 1), s = i[14] / (i[10] + 1), l = (i[9] + 1) / i[5], c = (i[9] - 1) / i[5], h = (i[8] - 1) / i[0], u = (a[8] + 1) / a[0], d = o * h, p = o * u, m = n / (-h + u), f = m * -h;
                t.matrixWorld.decompose(e900.position, e900.quaternion, e900.scale), e900.translateX(f), e900.translateZ(m), e900.matrixWorld.compose(e900.position, e900.quaternion, e900.scale), e900.matrixWorldInverse.copy(e900.matrixWorld).invert();
                const g = o + m, v = s + m, _ = d - f, y = p + (n - f), M = l * s / v * g, w = c * s / v * g;
                e900.projectionMatrix.makePerspective(_, y, M, w, g, v);
            }(m4, u7, d3) : m4.projectionMatrix.copy(u7.projectionMatrix), m4;
        };
        let w1 = null;
        const S = new WebGLAnimation;
        S.setAnimationLoop(function(e903, t) {
            if (null !== (l7 = t.getViewerPose(o14))) {
                const e902 = l7.views, t = i23.renderState.baseLayer;
                n34.bindXRFramebuffer(t.framebuffer);
                let r = !1;
                e902.length !== m4.cameras.length && (m4.cameras.length = 0, r = !0);
                for(let n = 0; n < e902.length; n++){
                    const i = e902[n], a = t.getViewport(i), o = p4[n];
                    o.matrix.fromArray(i.transform.matrix), o.projectionMatrix.fromArray(i.projectionMatrix), o.viewport.set(a.x, a.y, a.width, a.height), 0 === n && m4.matrix.copy(o.matrix), !0 === r && m4.cameras.push(o);
                }
            }
            const r = i23.inputSources;
            for(let e901 = 0; e901 < c7.length; e901++){
                const n = c7[e901], i = r[e901];
                n.update(i, t, o14);
            }
            w1 && w1(e903, t);
        }), this.setAnimationLoop = function(e904) {
            w1 = e904;
        }, this.dispose = function() {};
    }
}
function WebGLMaterials(e905) {
    function t69(t, r) {
        t.opacity.value = r.opacity, r.color && t.diffuse.value.copy(r.color), r.emissive && t.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (t.map.value = r.map), r.alphaMap && (t.alphaMap.value = r.alphaMap), r.specularMap && (t.specularMap.value = r.specularMap);
        const n = e905.get(r).envMap;
        if (n) {
            t.envMap.value = n, t.flipEnvMap.value = n.isCubeTexture && n._needsFlipEnvMap ? -1 : 1, t.reflectivity.value = r.reflectivity, t.refractionRatio.value = r.refractionRatio;
            const i = e905.get(n).__maxMipLevel;
            void 0 !== i && (t.maxMipLevel.value = i);
        }
        let i, a;
        r.lightMap && (t.lightMap.value = r.lightMap, t.lightMapIntensity.value = r.lightMapIntensity), r.aoMap && (t.aoMap.value = r.aoMap, t.aoMapIntensity.value = r.aoMapIntensity), r.map ? i = r.map : r.specularMap ? i = r.specularMap : r.displacementMap ? i = r.displacementMap : r.normalMap ? i = r.normalMap : r.bumpMap ? i = r.bumpMap : r.roughnessMap ? i = r.roughnessMap : r.metalnessMap ? i = r.metalnessMap : r.alphaMap ? i = r.alphaMap : r.emissiveMap ? i = r.emissiveMap : r.clearcoatMap ? i = r.clearcoatMap : r.clearcoatNormalMap ? i = r.clearcoatNormalMap : r.clearcoatRoughnessMap && (i = r.clearcoatRoughnessMap), void 0 !== i && (i.isWebGLRenderTarget && (i = i.texture), !0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix)), r.aoMap ? a = r.aoMap : r.lightMap && (a = r.lightMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), t.uv2Transform.value.copy(a.matrix));
    }
    function r38(t, r) {
        t.roughness.value = r.roughness, t.metalness.value = r.metalness, r.roughnessMap && (t.roughnessMap.value = r.roughnessMap), r.metalnessMap && (t.metalnessMap.value = r.metalnessMap), r.emissiveMap && (t.emissiveMap.value = r.emissiveMap), r.bumpMap && (t.bumpMap.value = r.bumpMap, t.bumpScale.value = r.bumpScale, r.side === BackSide && (t.bumpScale.value *= -1)), r.normalMap && (t.normalMap.value = r.normalMap, t.normalScale.value.copy(r.normalScale), r.side === BackSide && t.normalScale.value.negate()), r.displacementMap && (t.displacementMap.value = r.displacementMap, t.displacementScale.value = r.displacementScale, t.displacementBias.value = r.displacementBias), e905.get(r).envMap && (t.envMapIntensity.value = r.envMapIntensity);
    }
    return {
        refreshFogUniforms: function(e906, t) {
            e906.fogColor.value.copy(t.color), t.isFog ? (e906.fogNear.value = t.near, e906.fogFar.value = t.far) : t.isFogExp2 && (e906.fogDensity.value = t.density);
        },
        refreshMaterialUniforms: function(e907, n36, i24, a) {
            n36.isMeshBasicMaterial ? t69(e907, n36) : n36.isMeshLambertMaterial ? (t69(e907, n36), function(e908, t) {
                t.emissiveMap && (e908.emissiveMap.value = t.emissiveMap);
            }(e907, n36)) : n36.isMeshToonMaterial ? (t69(e907, n36), function(e909, t) {
                t.gradientMap && (e909.gradientMap.value = t.gradientMap), t.emissiveMap && (e909.emissiveMap.value = t.emissiveMap), t.bumpMap && (e909.bumpMap.value = t.bumpMap, e909.bumpScale.value = t.bumpScale, t.side === BackSide && (e909.bumpScale.value *= -1)), t.normalMap && (e909.normalMap.value = t.normalMap, e909.normalScale.value.copy(t.normalScale), t.side === BackSide && e909.normalScale.value.negate()), t.displacementMap && (e909.displacementMap.value = t.displacementMap, e909.displacementScale.value = t.displacementScale, e909.displacementBias.value = t.displacementBias);
            }(e907, n36)) : n36.isMeshPhongMaterial ? (t69(e907, n36), function(e910, t) {
                e910.specular.value.copy(t.specular), e910.shininess.value = Math.max(t.shininess, 0.0001), t.emissiveMap && (e910.emissiveMap.value = t.emissiveMap), t.bumpMap && (e910.bumpMap.value = t.bumpMap, e910.bumpScale.value = t.bumpScale, t.side === BackSide && (e910.bumpScale.value *= -1)), t.normalMap && (e910.normalMap.value = t.normalMap, e910.normalScale.value.copy(t.normalScale), t.side === BackSide && e910.normalScale.value.negate()), t.displacementMap && (e910.displacementMap.value = t.displacementMap, e910.displacementScale.value = t.displacementScale, e910.displacementBias.value = t.displacementBias);
            }(e907, n36)) : n36.isMeshStandardMaterial ? (t69(e907, n36), n36.isMeshPhysicalMaterial ? function(e911, t) {
                r38(e911, t), e911.reflectivity.value = t.reflectivity, e911.clearcoat.value = t.clearcoat, e911.clearcoatRoughness.value = t.clearcoatRoughness, t.sheen && e911.sheen.value.copy(t.sheen), t.clearcoatMap && (e911.clearcoatMap.value = t.clearcoatMap), t.clearcoatRoughnessMap && (e911.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap), t.clearcoatNormalMap && (e911.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), e911.clearcoatNormalMap.value = t.clearcoatNormalMap, t.side === BackSide && e911.clearcoatNormalScale.value.negate()), e911.transmission.value = t.transmission, t.transmissionMap && (e911.transmissionMap.value = t.transmissionMap);
            }(e907, n36) : r38(e907, n36)) : n36.isMeshMatcapMaterial ? (t69(e907, n36), function(e912, t) {
                t.matcap && (e912.matcap.value = t.matcap), t.bumpMap && (e912.bumpMap.value = t.bumpMap, e912.bumpScale.value = t.bumpScale, t.side === BackSide && (e912.bumpScale.value *= -1)), t.normalMap && (e912.normalMap.value = t.normalMap, e912.normalScale.value.copy(t.normalScale), t.side === BackSide && e912.normalScale.value.negate()), t.displacementMap && (e912.displacementMap.value = t.displacementMap, e912.displacementScale.value = t.displacementScale, e912.displacementBias.value = t.displacementBias);
            }(e907, n36)) : n36.isMeshDepthMaterial ? (t69(e907, n36), function(e913, t) {
                t.displacementMap && (e913.displacementMap.value = t.displacementMap, e913.displacementScale.value = t.displacementScale, e913.displacementBias.value = t.displacementBias);
            }(e907, n36)) : n36.isMeshDistanceMaterial ? (t69(e907, n36), function(e914, t) {
                t.displacementMap && (e914.displacementMap.value = t.displacementMap, e914.displacementScale.value = t.displacementScale, e914.displacementBias.value = t.displacementBias), e914.referencePosition.value.copy(t.referencePosition), e914.nearDistance.value = t.nearDistance, e914.farDistance.value = t.farDistance;
            }(e907, n36)) : n36.isMeshNormalMaterial ? (t69(e907, n36), function(e915, t) {
                t.bumpMap && (e915.bumpMap.value = t.bumpMap, e915.bumpScale.value = t.bumpScale, t.side === BackSide && (e915.bumpScale.value *= -1)), t.normalMap && (e915.normalMap.value = t.normalMap, e915.normalScale.value.copy(t.normalScale), t.side === BackSide && e915.normalScale.value.negate()), t.displacementMap && (e915.displacementMap.value = t.displacementMap, e915.displacementScale.value = t.displacementScale, e915.displacementBias.value = t.displacementBias);
            }(e907, n36)) : n36.isLineBasicMaterial ? (function(e916, t) {
                e916.diffuse.value.copy(t.color), e916.opacity.value = t.opacity;
            }(e907, n36), n36.isLineDashedMaterial && function(e917, t) {
                e917.dashSize.value = t.dashSize, e917.totalSize.value = t.dashSize + t.gapSize, e917.scale.value = t.scale;
            }(e907, n36)) : n36.isPointsMaterial ? function(e918, t, r, n) {
                let i;
                e918.diffuse.value.copy(t.color), e918.opacity.value = t.opacity, e918.size.value = t.size * r, e918.scale.value = 0.5 * n, t.map && (e918.map.value = t.map), t.alphaMap && (e918.alphaMap.value = t.alphaMap), t.map ? i = t.map : t.alphaMap && (i = t.alphaMap), void 0 !== i && (!0 === i.matrixAutoUpdate && i.updateMatrix(), e918.uvTransform.value.copy(i.matrix));
            }(e907, n36, i24, a) : n36.isSpriteMaterial ? function(e919, t) {
                let r;
                e919.diffuse.value.copy(t.color), e919.opacity.value = t.opacity, e919.rotation.value = t.rotation, t.map && (e919.map.value = t.map), t.alphaMap && (e919.alphaMap.value = t.alphaMap), t.map ? r = t.map : t.alphaMap && (r = t.alphaMap), void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), e919.uvTransform.value.copy(r.matrix));
            }(e907, n36) : n36.isShadowMaterial ? (e907.color.value.copy(n36.color), e907.opacity.value = n36.opacity) : n36.isShaderMaterial && (n36.uniformsNeedUpdate = !1);
        }
    };
}
function createCanvasElement() {
    const e920 = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    return e920.style.display = "block", e920;
}
function WebGLRenderer(e921) {
    const t70 = void 0 !== (e921 = e921 || {}).canvas ? e921.canvas : createCanvasElement(), r39 = void 0 !== e921.context ? e921.context : null, n37 = void 0 !== e921.alpha && e921.alpha, i25 = void 0 === e921.depth || e921.depth, a15 = void 0 === e921.stencil || e921.stencil, o15 = void 0 !== e921.antialias && e921.antialias, s10 = void 0 === e921.premultipliedAlpha || e921.premultipliedAlpha, l8 = void 0 !== e921.preserveDrawingBuffer && e921.preserveDrawingBuffer, c8 = void 0 !== e921.powerPreference ? e921.powerPreference : "default", h5 = void 0 !== e921.failIfMajorPerformanceCaveat && e921.failIfMajorPerformanceCaveat;
    let u8 = null, d4 = null;
    const p5 = [], m5 = [];
    this.domElement = t70, this.debug = {
        checkShaderErrors: !0
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = LinearEncoding, this.physicallyCorrectLights = !1, this.toneMapping = NoToneMapping, this.toneMappingExposure = 1;
    const f3 = this;
    let g2 = !1, v2 = 0, _3 = 0, y3 = null, x1 = -1, b = null;
    const M2 = new Vector4, w2 = new Vector4;
    let S1 = null, T = t70.width, E = t70.height, A = 1, L = null, C = null;
    const R = new Vector4(0, 0, T, E), P = new Vector4(0, 0, T, E);
    let B = !1;
    const D = new Frustum;
    let I = !1, G = !1;
    const F = new Matrix4, V = new Vector3, N = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0
    };
    function U() {
        return null === y3 ? A : 1;
    }
    let O, z, H, k, W, j, q, $, X, Y, Z, J, Q, K, ee, te, re, ne, ie, ae, oe, se, le = r39;
    function ce(e922, r) {
        for(let n = 0; n < e922.length; n++){
            const i = e922[n], a = t70.getContext(i, r);
            if (null !== a) return a;
        }
        return null;
    }
    try {
        const e923 = {
            alpha: n37,
            depth: i25,
            stencil: a15,
            antialias: o15,
            premultipliedAlpha: s10,
            preserveDrawingBuffer: l8,
            powerPreference: c8,
            failIfMajorPerformanceCaveat: h5
        };
        if (t70.addEventListener("webglcontextlost", de, !1), t70.addEventListener("webglcontextrestored", pe, !1), null === le) {
            const t = [
                "webgl2",
                "webgl",
                "experimental-webgl"
            ];
            if (!0 === f3.isWebGL1Renderer && t.shift(), null === (le = ce(t, e923))) throw ce(t) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
        void 0 === le.getShaderPrecisionFormat && (le.getShaderPrecisionFormat = function() {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            };
        });
    } catch (e924) {
        throw console.error("THREE.WebGLRenderer: " + e924.message), e924;
    }
    function he() {
        O = new WebGLExtensions(le), z = new WebGLCapabilities(le, O, e921), O.init(z), oe = new WebGLUtils(le, O, z), H = new WebGLState(le, O, z), k = new WebGLInfo(le), W = new WebGLProperties, j = new WebGLTextures(le, O, H, W, z, oe, k), q = new WebGLCubeMaps(f3), $ = new WebGLAttributes(le, z), se = new WebGLBindingStates(le, O, $, z), X = new WebGLGeometries(le, $, k, se), Y = new WebGLObjects(le, X, $, k), ne = new WebGLMorphtargets(le), ee = new WebGLClipping(W), Z = new WebGLPrograms(f3, q, O, z, se, ee), J = new WebGLMaterials(W), Q = new WebGLRenderLists(W), K = new WebGLRenderStates(O, z), re = new WebGLBackground(f3, q, H, Y, s10), te = new WebGLShadowMap(f3, Y, z), ie = new WebGLBufferRenderer(le, O, k, z), ae = new WebGLIndexedBufferRenderer(le, O, k, z), k.programs = Z.programs, f3.capabilities = z, f3.extensions = O, f3.properties = W, f3.renderLists = Q, f3.shadowMap = te, f3.state = H, f3.info = k;
    }
    he();
    const ue = new WebXRManager(f3, le);
    function de(e925) {
        e925.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), g2 = !0;
    }
    function pe() {
        console.log("THREE.WebGLRenderer: Context Restored."), g2 = !1;
        const e926 = k.autoReset, t = te.enabled, r = te.autoUpdate, n = te.needsUpdate, i = te.type;
        he(), k.autoReset = e926, te.enabled = t, te.autoUpdate = r, te.needsUpdate = n, te.type = i;
    }
    function me(e927) {
        const t71 = e927.target;
        t71.removeEventListener("dispose", me), function(e928) {
            (function(e929) {
                const t = W.get(e929).programs;
                void 0 !== t && t.forEach(function(e930) {
                    Z.releaseProgram(e930);
                });
            })(e928), W.remove(e928);
        }(t71);
    }
    this.xr = ue, this.getContext = function() {
        return le;
    }, this.getContextAttributes = function() {
        return le.getContextAttributes();
    }, this.forceContextLoss = function() {
        const e931 = O.get("WEBGL_lose_context");
        e931 && e931.loseContext();
    }, this.forceContextRestore = function() {
        const e932 = O.get("WEBGL_lose_context");
        e932 && e932.restoreContext();
    }, this.getPixelRatio = function() {
        return A;
    }, this.setPixelRatio = function(e933) {
        void 0 !== e933 && (A = e933, this.setSize(T, E, !1));
    }, this.getSize = function(e934) {
        return void 0 === e934 && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), e934 = new Vector2), e934.set(T, E);
    }, this.setSize = function(e935, r, n) {
        ue.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (T = e935, E = r, t70.width = Math.floor(e935 * A), t70.height = Math.floor(r * A), !1 !== n && (t70.style.width = e935 + "px", t70.style.height = r + "px"), this.setViewport(0, 0, e935, r));
    }, this.getDrawingBufferSize = function(e936) {
        return void 0 === e936 && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), e936 = new Vector2), e936.set(T * A, E * A).floor();
    }, this.setDrawingBufferSize = function(e937, r, n) {
        T = e937, E = r, A = n, t70.width = Math.floor(e937 * n), t70.height = Math.floor(r * n), this.setViewport(0, 0, e937, r);
    }, this.getCurrentViewport = function(e938) {
        return void 0 === e938 && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), e938 = new Vector4), e938.copy(M2);
    }, this.getViewport = function(e939) {
        return e939.copy(R);
    }, this.setViewport = function(e940, t, r, n) {
        e940.isVector4 ? R.set(e940.x, e940.y, e940.z, e940.w) : R.set(e940, t, r, n), H.viewport(M2.copy(R).multiplyScalar(A).floor());
    }, this.getScissor = function(e941) {
        return e941.copy(P);
    }, this.setScissor = function(e942, t, r, n) {
        e942.isVector4 ? P.set(e942.x, e942.y, e942.z, e942.w) : P.set(e942, t, r, n), H.scissor(w2.copy(P).multiplyScalar(A).floor());
    }, this.getScissorTest = function() {
        return B;
    }, this.setScissorTest = function(e943) {
        H.setScissorTest(B = e943);
    }, this.setOpaqueSort = function(e944) {
        L = e944;
    }, this.setTransparentSort = function(e945) {
        C = e945;
    }, this.getClearColor = function(e946) {
        return void 0 === e946 && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"), e946 = new Color), e946.copy(re.getClearColor());
    }, this.setClearColor = function() {
        re.setClearColor.apply(re, arguments);
    }, this.getClearAlpha = function() {
        return re.getClearAlpha();
    }, this.setClearAlpha = function() {
        re.setClearAlpha.apply(re, arguments);
    }, this.clear = function(e947, t, r) {
        let n = 0;
        (void 0 === e947 || e947) && (n |= 16384), (void 0 === t || t) && (n |= 256), (void 0 === r || r) && (n |= 1024), le.clear(n);
    }, this.clearColor = function() {
        this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
        this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
        this.clear(!1, !1, !0);
    }, this.dispose = function() {
        t70.removeEventListener("webglcontextlost", de, !1), t70.removeEventListener("webglcontextrestored", pe, !1), Q.dispose(), K.dispose(), W.dispose(), q.dispose(), Y.dispose(), se.dispose(), ue.dispose(), ue.removeEventListener("sessionstart", ge), ue.removeEventListener("sessionend", ve), _e.stop();
    }, this.renderBufferImmediate = function(e948, t) {
        se.initAttributes();
        const r = W.get(e948);
        e948.hasPositions && !r.position && (r.position = le.createBuffer()), e948.hasNormals && !r.normal && (r.normal = le.createBuffer()), e948.hasUvs && !r.uv && (r.uv = le.createBuffer()), e948.hasColors && !r.color && (r.color = le.createBuffer());
        const n = t.getAttributes();
        e948.hasPositions && (le.bindBuffer(34962, r.position), le.bufferData(34962, e948.positionArray, 35048), se.enableAttribute(n.position), le.vertexAttribPointer(n.position, 3, 5126, !1, 0, 0)), e948.hasNormals && (le.bindBuffer(34962, r.normal), le.bufferData(34962, e948.normalArray, 35048), se.enableAttribute(n.normal), le.vertexAttribPointer(n.normal, 3, 5126, !1, 0, 0)), e948.hasUvs && (le.bindBuffer(34962, r.uv), le.bufferData(34962, e948.uvArray, 35048), se.enableAttribute(n.uv), le.vertexAttribPointer(n.uv, 2, 5126, !1, 0, 0)), e948.hasColors && (le.bindBuffer(34962, r.color), le.bufferData(34962, e948.colorArray, 35048), se.enableAttribute(n.color), le.vertexAttribPointer(n.color, 3, 5126, !1, 0, 0)), se.disableUnusedAttributes(), le.drawArrays(4, 0, e948.count), e948.count = 0;
    }, this.renderBufferDirect = function(e949, t, r, n, i, a) {
        null === t && (t = N);
        const o = i.isMesh && i.matrixWorld.determinant() < 0, s = we(e949, t, n, i);
        H.setMaterial(n, o);
        let l = r.index;
        const c = r.attributes.position;
        if (null === l) {
            if (void 0 === c || 0 === c.count) return;
        } else if (0 === l.count) return;
        let h, u = 1;
        !0 === n.wireframe && (l = X.getWireframeAttribute(r), u = 2), (n.morphTargets || n.morphNormals) && ne.update(i, r, n, s), se.setup(i, n, s, r, l);
        let d = ie;
        null !== l && (h = $.get(l), (d = ae).setIndex(h));
        const p = null !== l ? l.count : c.count, m = r.drawRange.start * u, f = r.drawRange.count * u, g = null !== a ? a.start * u : 0, v = null !== a ? a.count * u : 1 / 0, _ = Math.max(m, g), y = Math.min(p, m + f, g + v) - 1, x = Math.max(0, y - _ + 1);
        if (0 !== x) {
            if (i.isMesh) !0 === n.wireframe ? (H.setLineWidth(n.wireframeLinewidth * U()), d.setMode(1)) : d.setMode(4);
            else if (i.isLine) {
                let e950 = n.linewidth;
                void 0 === e950 && (e950 = 1), H.setLineWidth(e950 * U()), i.isLineSegments ? d.setMode(1) : i.isLineLoop ? d.setMode(2) : d.setMode(3);
            } else i.isPoints ? d.setMode(0) : i.isSprite && d.setMode(4);
            if (i.isInstancedMesh) d.renderInstances(_, x, i.count);
            else if (r.isInstancedBufferGeometry) {
                const e951 = Math.min(r.instanceCount, r._maxInstanceCount);
                d.renderInstances(_, x, e951);
            } else d.render(_, x);
        }
    }, this.compile = function(e952, t72) {
        (d4 = K.get(e952)).init(), e952.traverseVisible(function(e953) {
            e953.isLight && e953.layers.test(t72.layers) && (d4.pushLight(e953), e953.castShadow && d4.pushShadow(e953));
        }), d4.setupLights(), e952.traverse(function(t) {
            const r = t.material;
            if (r) {
                if (Array.isArray(r)) for(let n = 0; n < r.length; n++)be(r[n], e952, t);
                else be(r, e952, t);
            }
        });
    };
    let fe = null;
    function ge() {
        _e.stop();
    }
    function ve() {
        _e.start();
    }
    const _e = new WebGLAnimation;
    function ye(e954, t, r) {
        const n = !0 === t.isScene ? t.overrideMaterial : null;
        for(let i = 0, a = e954.length; i < a; i++){
            const a = e954[i], o = a.object, s = a.geometry, l = null === n ? a.material : n, c = a.group;
            if (r.isArrayCamera) {
                const e955 = r.cameras;
                for(let r40 = 0, n = e955.length; r40 < n; r40++){
                    const n = e955[r40];
                    o.layers.test(n.layers) && (H.viewport(M2.copy(n.viewport)), d4.setupLightsView(n), xe(o, t, n, s, l, c));
                }
            } else xe(o, t, r, s, l, c);
        }
    }
    function xe(e956, t73, r, n, i, a) {
        if (e956.onBeforeRender(f3, t73, r, n, i, a), e956.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, e956.matrixWorld), e956.normalMatrix.getNormalMatrix(e956.modelViewMatrix), e956.isImmediateRenderObject) {
            const n = we(r, t73, i, e956);
            H.setMaterial(i), se.reset(), function(e957, t) {
                e957.render(function(e958) {
                    f3.renderBufferImmediate(e958, t);
                });
            }(e956, n);
        } else f3.renderBufferDirect(r, t73, n, i, e956, a);
        e956.onAfterRender(f3, t73, r, n, i, a);
    }
    function be(e959, t, r) {
        !0 !== t.isScene && (t = N);
        const n = W.get(e959), i = d4.state.lights, a = d4.state.shadowsArray, o = i.state.version, s = Z.getParameters(e959, i.state, a, t, r), l = Z.getProgramCacheKey(s);
        let c = n.programs;
        n.environment = e959.isMeshStandardMaterial ? t.environment : null, n.fog = t.fog, n.envMap = q.get(e959.envMap || n.environment), void 0 === c && (e959.addEventListener("dispose", me), c = new Map, n.programs = c);
        let h = c.get(l);
        if (void 0 !== h) {
            if (n.currentProgram === h && n.lightsStateVersion === o) return Me(e959, s), h;
        } else s.uniforms = Z.getUniforms(e959), e959.onBuild(s, f3), e959.onBeforeCompile(s, f3), h = Z.acquireProgram(s, l), c.set(l, h), n.uniforms = s.uniforms;
        const u = n.uniforms;
        (e959.isShaderMaterial || e959.isRawShaderMaterial) && !0 !== e959.clipping || (u.clippingPlanes = ee.uniform), Me(e959, s), n.needsLights = function(e960) {
            return e960.isMeshLambertMaterial || e960.isMeshToonMaterial || e960.isMeshPhongMaterial || e960.isMeshStandardMaterial || e960.isShadowMaterial || e960.isShaderMaterial && !0 === e960.lights;
        }(e959), n.lightsStateVersion = o, n.needsLights && (u.ambientLightColor.value = i.state.ambient, u.lightProbe.value = i.state.probe, u.directionalLights.value = i.state.directional, u.directionalLightShadows.value = i.state.directionalShadow, u.spotLights.value = i.state.spot, u.spotLightShadows.value = i.state.spotShadow, u.rectAreaLights.value = i.state.rectArea, u.ltc_1.value = i.state.rectAreaLTC1, u.ltc_2.value = i.state.rectAreaLTC2, u.pointLights.value = i.state.point, u.pointLightShadows.value = i.state.pointShadow, u.hemisphereLights.value = i.state.hemi, u.directionalShadowMap.value = i.state.directionalShadowMap, u.directionalShadowMatrix.value = i.state.directionalShadowMatrix, u.spotShadowMap.value = i.state.spotShadowMap, u.spotShadowMatrix.value = i.state.spotShadowMatrix, u.pointShadowMap.value = i.state.pointShadowMap, u.pointShadowMatrix.value = i.state.pointShadowMatrix);
        const p = h.getUniforms(), m = WebGLUniforms.seqWithValue(p.seq, u);
        return n.currentProgram = h, n.uniformsList = m, h;
    }
    function Me(e961, t) {
        const r = W.get(e961);
        r.outputEncoding = t.outputEncoding, r.instancing = t.instancing, r.numClippingPlanes = t.numClippingPlanes, r.numIntersection = t.numClipIntersection, r.vertexAlphas = t.vertexAlphas;
    }
    function we(e962, t, r, n) {
        !0 !== t.isScene && (t = N), j.resetTextureUnits();
        const i = t.fog, a = r.isMeshStandardMaterial ? t.environment : null, o = null === y3 ? f3.outputEncoding : y3.texture.encoding, s = q.get(r.envMap || a), l = !0 === r.vertexColors && n.geometry && n.geometry.attributes.color && 4 === n.geometry.attributes.color.itemSize, c = W.get(r), h = d4.state.lights;
        if (!0 === I && (!0 === G || e962 !== b)) {
            const t = e962 === b && r.id === x1;
            ee.setState(r, e962, t);
        }
        let u = !1;
        r.version === c.__version ? c.needsLights && c.lightsStateVersion !== h.state.version ? u = !0 : c.outputEncoding !== o ? u = !0 : n.isInstancedMesh && !1 === c.instancing ? u = !0 : n.isInstancedMesh || !0 !== c.instancing ? c.envMap !== s ? u = !0 : r.fog && c.fog !== i ? u = !0 : void 0 === c.numClippingPlanes || c.numClippingPlanes === ee.numPlanes && c.numIntersection === ee.numIntersection ? c.vertexAlphas !== l && (u = !0) : u = !0 : u = !0 : (u = !0, c.__version = r.version);
        let p = c.currentProgram;
        !0 === u && (p = be(r, t, n));
        let m = !1, g = !1, v = !1;
        const _ = p.getUniforms(), M = c.uniforms;
        if (H.useProgram(p.program) && (m = !0, g = !0, v = !0), r.id !== x1 && (x1 = r.id, g = !0), m || b !== e962) {
            if (_.setValue(le, "projectionMatrix", e962.projectionMatrix), z.logarithmicDepthBuffer && _.setValue(le, "logDepthBufFC", 2 / (Math.log(e962.far + 1) / Math.LN2)), b !== e962 && (b = e962, g = !0, v = !0), r.isShaderMaterial || r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshStandardMaterial || r.envMap) {
                const t = _.map.cameraPosition;
                void 0 !== t && t.setValue(le, V.setFromMatrixPosition(e962.matrixWorld));
            }
            (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && _.setValue(le, "isOrthographic", !0 === e962.isOrthographicCamera), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial || r.isShadowMaterial || r.skinning) && _.setValue(le, "viewMatrix", e962.matrixWorldInverse);
        }
        if (r.skinning) {
            _.setOptional(le, n, "bindMatrix"), _.setOptional(le, n, "bindMatrixInverse");
            const e963 = n.skeleton;
            if (e963) {
                const t = e963.bones;
                if (z.floatVertexTextures) {
                    if (null === e963.boneTexture) {
                        let r = Math.sqrt(4 * t.length);
                        r = ceilPowerOfTwo(r), r = Math.max(r, 4);
                        const n = new Float32Array(r * r * 4);
                        n.set(e963.boneMatrices);
                        const i = new DataTexture(n, r, r, RGBAFormat, FloatType);
                        e963.boneMatrices = n, e963.boneTexture = i, e963.boneTextureSize = r;
                    }
                    _.setValue(le, "boneTexture", e963.boneTexture, j), _.setValue(le, "boneTextureSize", e963.boneTextureSize);
                } else _.setOptional(le, e963, "boneMatrices");
            }
        }
        var w, S;
        return (g || c.receiveShadow !== n.receiveShadow) && (c.receiveShadow = n.receiveShadow, _.setValue(le, "receiveShadow", n.receiveShadow)), g && (_.setValue(le, "toneMappingExposure", f3.toneMappingExposure), c.needsLights && (S = v, (w = M).ambientLightColor.needsUpdate = S, w.lightProbe.needsUpdate = S, w.directionalLights.needsUpdate = S, w.directionalLightShadows.needsUpdate = S, w.pointLights.needsUpdate = S, w.pointLightShadows.needsUpdate = S, w.spotLights.needsUpdate = S, w.spotLightShadows.needsUpdate = S, w.rectAreaLights.needsUpdate = S, w.hemisphereLights.needsUpdate = S), i && r.fog && J.refreshFogUniforms(M, i), J.refreshMaterialUniforms(M, r, A, E), WebGLUniforms.upload(le, c.uniformsList, M, j)), r.isShaderMaterial && !0 === r.uniformsNeedUpdate && (WebGLUniforms.upload(le, c.uniformsList, M, j), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && _.setValue(le, "center", n.center), _.setValue(le, "modelViewMatrix", n.modelViewMatrix), _.setValue(le, "normalMatrix", n.normalMatrix), _.setValue(le, "modelMatrix", n.matrixWorld), p;
    }
    _e.setAnimationLoop(function(e964) {
        fe && fe(e964);
    }), "undefined" != typeof window && _e.setContext(window), this.setAnimationLoop = function(e965) {
        fe = e965, ue.setAnimationLoop(e965), null === e965 ? _e.stop() : _e.start();
    }, ue.addEventListener("sessionstart", ge), ue.addEventListener("sessionend", ve), this.render = function(e966, t75) {
        let r42, n38;
        if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), r42 = arguments[2]), void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), n38 = arguments[3]), void 0 !== t75 && !0 !== t75.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        if (!0 === g2) return;
        !0 === e966.autoUpdate && e966.updateMatrixWorld(), null === t75.parent && t75.updateMatrixWorld(), !0 === ue.enabled && !0 === ue.isPresenting && (t75 = ue.getCamera(t75)), !0 === e966.isScene && e966.onBeforeRender(f3, e966, t75, r42 || y3), (d4 = K.get(e966, m5.length)).init(), m5.push(d4), F.multiplyMatrices(t75.projectionMatrix, t75.matrixWorldInverse), D.setFromProjectionMatrix(F), G = this.localClippingEnabled, I = ee.init(this.clippingPlanes, G, t75), (u8 = Q.get(e966, p5.length)).init(), p5.push(u8), function e969(t, r, n, i) {
            if (!1 === t.visible) return;
            const a = t.layers.test(r.layers);
            if (a) {
                if (t.isGroup) n = t.renderOrder;
                else if (t.isLOD) !0 === t.autoUpdate && t.update(r);
                else if (t.isLight) d4.pushLight(t), t.castShadow && d4.pushShadow(t);
                else if (t.isSprite) {
                    if (!t.frustumCulled || D.intersectsSprite(t)) {
                        i && V.setFromMatrixPosition(t.matrixWorld).applyMatrix4(F);
                        const e967 = Y.update(t), r = t.material;
                        r.visible && u8.push(t, e967, r, n, V.z, null);
                    }
                } else if (t.isImmediateRenderObject) i && V.setFromMatrixPosition(t.matrixWorld).applyMatrix4(F), u8.push(t, null, t.material, n, V.z, null);
                else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== k.render.frame && (t.skeleton.update(), t.skeleton.frame = k.render.frame), !t.frustumCulled || D.intersectsObject(t))) {
                    i && V.setFromMatrixPosition(t.matrixWorld).applyMatrix4(F);
                    const e968 = Y.update(t), r = t.material;
                    if (Array.isArray(r)) {
                        const i = e968.groups;
                        for(let a = 0, o = i.length; a < o; a++){
                            const o = i[a], s = r[o.materialIndex];
                            s && s.visible && u8.push(t, e968, s, n, V.z, o);
                        }
                    } else r.visible && u8.push(t, e968, r, n, V.z, null);
                }
            }
            const o = t.children;
            for(let t74 = 0, a16 = o.length; t74 < a16; t74++)e969(o[t74], r, n, i);
        }(e966, t75, 0, f3.sortObjects), u8.finish(), !0 === f3.sortObjects && u8.sort(L, C), !0 === I && ee.beginShadows();
        const i26 = d4.state.shadowsArray;
        te.render(i26, e966, t75), d4.setupLights(), d4.setupLightsView(t75), !0 === I && ee.endShadows(), !0 === this.info.autoReset && this.info.reset(), void 0 !== r42 && this.setRenderTarget(r42), re.render(u8, e966, t75, n38);
        const a17 = u8.opaque, o16 = u8.transparent;
        a17.length > 0 && ye(a17, e966, t75), o16.length > 0 && ye(o16, e966, t75), null !== y3 && (j.updateRenderTargetMipmap(y3), j.updateMultisampleRenderTarget(y3)), !0 === e966.isScene && e966.onAfterRender(f3, e966, t75), H.buffers.depth.setTest(!0), H.buffers.depth.setMask(!0), H.buffers.color.setMask(!0), H.setPolygonOffset(!1), se.resetDefaultState(), x1 = -1, b = null, m5.pop(), d4 = m5.length > 0 ? m5[m5.length - 1] : null, p5.pop(), u8 = p5.length > 0 ? p5[p5.length - 1] : null;
    }, this.getActiveCubeFace = function() {
        return v2;
    }, this.getActiveMipmapLevel = function() {
        return _3;
    }, this.getRenderTarget = function() {
        return y3;
    }, this.setRenderTarget = function(e970, t = 0, r = 0) {
        y3 = e970, v2 = t, _3 = r, e970 && void 0 === W.get(e970).__webglFramebuffer && j.setupRenderTarget(e970);
        let n = null, i = !1, a = !1;
        if (e970) {
            const r = e970.texture;
            (r.isDataTexture3D || r.isDataTexture2DArray) && (a = !0);
            const o = W.get(e970).__webglFramebuffer;
            e970.isWebGLCubeRenderTarget ? (n = o[t], i = !0) : n = e970.isWebGLMultisampleRenderTarget ? W.get(e970).__webglMultisampledFramebuffer : o, M2.copy(e970.viewport), w2.copy(e970.scissor), S1 = e970.scissorTest;
        } else M2.copy(R).multiplyScalar(A).floor(), w2.copy(P).multiplyScalar(A).floor(), S1 = B;
        if (H.bindFramebuffer(36160, n), H.viewport(M2), H.scissor(w2), H.setScissorTest(S1), i) {
            const n = W.get(e970.texture);
            le.framebufferTexture2D(36160, 36064, 34069 + t, n.__webglTexture, r);
        } else if (a) {
            const n = W.get(e970.texture), i = t || 0;
            le.framebufferTextureLayer(36160, 36064, n.__webglTexture, r || 0, i);
        }
    }, this.readRenderTargetPixels = function(e971, t, r, n, i, a, o) {
        if (!e971 || !e971.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let s = W.get(e971).__webglFramebuffer;
        if (e971.isWebGLCubeRenderTarget && void 0 !== o && (s = s[o]), s) {
            H.bindFramebuffer(36160, s);
            try {
                const o = e971.texture, s = o.format, l = o.type;
                if (s !== RGBAFormat && oe.convert(s) !== le.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                const c = l === HalfFloatType && (O.has("EXT_color_buffer_half_float") || z.isWebGL2 && O.has("EXT_color_buffer_float"));
                if (!(l === UnsignedByteType || oe.convert(l) === le.getParameter(35738) || l === FloatType && (z.isWebGL2 || O.has("OES_texture_float") || O.has("WEBGL_color_buffer_float")) || c)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                36053 === le.checkFramebufferStatus(36160) ? t >= 0 && t <= e971.width - n && r >= 0 && r <= e971.height - i && le.readPixels(t, r, n, i, oe.convert(s), oe.convert(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
            } finally{
                const e972 = null !== y3 ? W.get(y3).__webglFramebuffer : null;
                H.bindFramebuffer(36160, e972);
            }
        }
    }, this.copyFramebufferToTexture = function(e973, t, r = 0) {
        const n = Math.pow(2, -r), i = Math.floor(t.image.width * n), a = Math.floor(t.image.height * n), o = oe.convert(t.format);
        j.setTexture2D(t, 0), le.copyTexImage2D(3553, r, o, e973.x, e973.y, i, a, 0), H.unbindTexture();
    }, this.copyTextureToTexture = function(e974, t, r, n = 0) {
        const i = t.image.width, a = t.image.height, o = oe.convert(r.format), s = oe.convert(r.type);
        j.setTexture2D(r, 0), le.pixelStorei(37440, r.flipY), le.pixelStorei(37441, r.premultiplyAlpha), le.pixelStorei(3317, r.unpackAlignment), t.isDataTexture ? le.texSubImage2D(3553, n, e974.x, e974.y, i, a, o, s, t.image.data) : t.isCompressedTexture ? le.compressedTexSubImage2D(3553, n, e974.x, e974.y, t.mipmaps[0].width, t.mipmaps[0].height, o, t.mipmaps[0].data) : le.texSubImage2D(3553, n, e974.x, e974.y, o, s, t.image), 0 === n && r.generateMipmaps && le.generateMipmap(3553), H.unbindTexture();
    }, this.copyTextureToTexture3D = function(e975, t, r, n, i = 0) {
        if (f3.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        const { width: a , height: o , data: s  } = r.image, l = oe.convert(n.format), c = oe.convert(n.type);
        let h;
        if (n.isDataTexture3D) j.setTexture3D(n, 0), h = 32879;
        else {
            if (!n.isDataTexture2DArray) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
            j.setTexture2DArray(n, 0), h = 35866;
        }
        le.pixelStorei(37440, n.flipY), le.pixelStorei(37441, n.premultiplyAlpha), le.pixelStorei(3317, n.unpackAlignment);
        const u = le.getParameter(3314), d = le.getParameter(32878), p = le.getParameter(3316), m = le.getParameter(3315), g = le.getParameter(32877);
        le.pixelStorei(3314, a), le.pixelStorei(32878, o), le.pixelStorei(3316, e975.min.x), le.pixelStorei(3315, e975.min.y), le.pixelStorei(32877, e975.min.z), le.texSubImage3D(h, i, t.x, t.y, t.z, e975.max.x - e975.min.x + 1, e975.max.y - e975.min.y + 1, e975.max.z - e975.min.z + 1, l, c, s), le.pixelStorei(3314, u), le.pixelStorei(32878, d), le.pixelStorei(3316, p), le.pixelStorei(3315, m), le.pixelStorei(32877, g), 0 === i && n.generateMipmaps && le.generateMipmap(h), H.unbindTexture();
    }, this.initTexture = function(e976) {
        j.setTexture2D(e976, 0), H.unbindTexture();
    }, this.resetState = function() {
        v2 = 0, _3 = 0, y3 = null, H.reset(), se.reset();
    }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
    }));
}
class WebGL1Renderer extends WebGLRenderer {
}
WebGL1Renderer.prototype.isWebGL1Renderer = !0;
class FogExp2 {
    constructor(e977, t = 0.00025){
        this.name = "", this.color = new Color(e977), this.density = t;
    }
    clone() {
        return new FogExp2(this.color, this.density);
    }
    toJSON() {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        };
    }
}
FogExp2.prototype.isFogExp2 = !0;
class Fog {
    constructor(e978, t = 1, r = 1000){
        this.name = "", this.color = new Color(e978), this.near = t, this.far = r;
    }
    clone() {
        return new Fog(this.color, this.near, this.far);
    }
    toJSON() {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        };
    }
}
Fog.prototype.isFog = !0;
class Scene extends Object3D {
    constructor(){
        super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }));
    }
    copy(e979, t) {
        return super.copy(e979, t), null !== e979.background && (this.background = e979.background.clone()), null !== e979.environment && (this.environment = e979.environment.clone()), null !== e979.fog && (this.fog = e979.fog.clone()), null !== e979.overrideMaterial && (this.overrideMaterial = e979.overrideMaterial.clone()), this.autoUpdate = e979.autoUpdate, this.matrixAutoUpdate = e979.matrixAutoUpdate, this;
    }
    toJSON(e980) {
        const t = super.toJSON(e980);
        return null !== this.background && (t.object.background = this.background.toJSON(e980)), null !== this.environment && (t.object.environment = this.environment.toJSON(e980)), null !== this.fog && (t.object.fog = this.fog.toJSON()), t;
    }
}
Scene.prototype.isScene = !0;
class InterleavedBuffer {
    constructor(e981, t){
        this.array = e981, this.stride = t, this.count = void 0 !== e981 ? e981.length / t : 0, this.usage = StaticDrawUsage, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0, this.uuid = generateUUID(), this.onUploadCallback = function() {};
    }
    set needsUpdate(e982) {
        !0 === e982 && this.version++;
    }
    setUsage(e983) {
        return this.usage = e983, this;
    }
    copy(e984) {
        return this.array = new e984.array.constructor(e984.array), this.count = e984.count, this.stride = e984.stride, this.usage = e984.usage, this;
    }
    copyAt(e985, t, r) {
        e985 *= this.stride, r *= t.stride;
        for(let n = 0, i = this.stride; n < i; n++)this.array[e985 + n] = t.array[r + n];
        return this;
    }
    set(e986, t = 0) {
        return this.array.set(e986, t), this;
    }
    clone(e987) {
        void 0 === e987.arrayBuffers && (e987.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = generateUUID()), void 0 === e987.arrayBuffers[this.array.buffer._uuid] && (e987.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
        const t = new this.array.constructor(e987.arrayBuffers[this.array.buffer._uuid]), r = new InterleavedBuffer(t, this.stride);
        return r.setUsage(this.usage), r;
    }
    onUpload(e988) {
        return this.onUploadCallback = e988, this;
    }
    toJSON(e989) {
        return void 0 === e989.arrayBuffers && (e989.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = generateUUID()), void 0 === e989.arrayBuffers[this.array.buffer._uuid] && (e989.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
        };
    }
}
InterleavedBuffer.prototype.isInterleavedBuffer = !0;
const _vector$6 = new Vector3;
class InterleavedBufferAttribute {
    constructor(e990, t, r, n){
        this.name = "", this.data = e990, this.itemSize = t, this.offset = r, this.normalized = !0 === n;
    }
    get count() {
        return this.data.count;
    }
    get array() {
        return this.data.array;
    }
    set needsUpdate(e991) {
        this.data.needsUpdate = e991;
    }
    applyMatrix4(e992) {
        for(let t = 0, r = this.data.count; t < r; t++)_vector$6.x = this.getX(t), _vector$6.y = this.getY(t), _vector$6.z = this.getZ(t), _vector$6.applyMatrix4(e992), this.setXYZ(t, _vector$6.x, _vector$6.y, _vector$6.z);
        return this;
    }
    applyNormalMatrix(e993) {
        for(let t = 0, r = this.count; t < r; t++)_vector$6.x = this.getX(t), _vector$6.y = this.getY(t), _vector$6.z = this.getZ(t), _vector$6.applyNormalMatrix(e993), this.setXYZ(t, _vector$6.x, _vector$6.y, _vector$6.z);
        return this;
    }
    transformDirection(e994) {
        for(let t = 0, r = this.count; t < r; t++)_vector$6.x = this.getX(t), _vector$6.y = this.getY(t), _vector$6.z = this.getZ(t), _vector$6.transformDirection(e994), this.setXYZ(t, _vector$6.x, _vector$6.y, _vector$6.z);
        return this;
    }
    setX(e995, t) {
        return this.data.array[e995 * this.data.stride + this.offset] = t, this;
    }
    setY(e996, t) {
        return this.data.array[e996 * this.data.stride + this.offset + 1] = t, this;
    }
    setZ(e997, t) {
        return this.data.array[e997 * this.data.stride + this.offset + 2] = t, this;
    }
    setW(e998, t) {
        return this.data.array[e998 * this.data.stride + this.offset + 3] = t, this;
    }
    getX(e999) {
        return this.data.array[e999 * this.data.stride + this.offset];
    }
    getY(e1000) {
        return this.data.array[e1000 * this.data.stride + this.offset + 1];
    }
    getZ(e1001) {
        return this.data.array[e1001 * this.data.stride + this.offset + 2];
    }
    getW(e1002) {
        return this.data.array[e1002 * this.data.stride + this.offset + 3];
    }
    setXY(e1003, t, r) {
        return e1003 = e1003 * this.data.stride + this.offset, this.data.array[e1003 + 0] = t, this.data.array[e1003 + 1] = r, this;
    }
    setXYZ(e1004, t, r, n) {
        return e1004 = e1004 * this.data.stride + this.offset, this.data.array[e1004 + 0] = t, this.data.array[e1004 + 1] = r, this.data.array[e1004 + 2] = n, this;
    }
    setXYZW(e1005, t, r, n, i) {
        return e1005 = e1005 * this.data.stride + this.offset, this.data.array[e1005 + 0] = t, this.data.array[e1005 + 1] = r, this.data.array[e1005 + 2] = n, this.data.array[e1005 + 3] = i, this;
    }
    clone(e1006) {
        if (void 0 === e1006) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
            const e1007 = [];
            for(let t = 0; t < this.count; t++){
                const r = t * this.data.stride + this.offset;
                for(let t76 = 0; t76 < this.itemSize; t76++)e1007.push(this.data.array[r + t76]);
            }
            return new BufferAttribute(new this.array.constructor(e1007), this.itemSize, this.normalized);
        }
        return void 0 === e1006.interleavedBuffers && (e1006.interleavedBuffers = {}), void 0 === e1006.interleavedBuffers[this.data.uuid] && (e1006.interleavedBuffers[this.data.uuid] = this.data.clone(e1006)), new InterleavedBufferAttribute(e1006.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    }
    toJSON(e1008) {
        if (void 0 === e1008) {
            console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
            const e1009 = [];
            for(let t = 0; t < this.count; t++){
                const r = t * this.data.stride + this.offset;
                for(let t77 = 0; t77 < this.itemSize; t77++)e1009.push(this.data.array[r + t77]);
            }
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: e1009,
                normalized: this.normalized
            };
        }
        return void 0 === e1008.interleavedBuffers && (e1008.interleavedBuffers = {}), void 0 === e1008.interleavedBuffers[this.data.uuid] && (e1008.interleavedBuffers[this.data.uuid] = this.data.toJSON(e1008)), {
            isInterleavedBufferAttribute: !0,
            itemSize: this.itemSize,
            data: this.data.uuid,
            offset: this.offset,
            normalized: this.normalized
        };
    }
}
InterleavedBufferAttribute.prototype.isInterleavedBufferAttribute = !0;
class SpriteMaterial extends Material {
    constructor(e1010){
        super(), this.type = "SpriteMaterial", this.color = new Color(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e1010);
    }
    copy(e1011) {
        return super.copy(e1011), this.color.copy(e1011.color), this.map = e1011.map, this.alphaMap = e1011.alphaMap, this.rotation = e1011.rotation, this.sizeAttenuation = e1011.sizeAttenuation, this;
    }
}
let _geometry;
SpriteMaterial.prototype.isSpriteMaterial = !0;
const _intersectPoint = new Vector3, _worldScale = new Vector3, _mvPosition = new Vector3, _alignedPosition = new Vector2, _rotatedPosition = new Vector2, _viewWorldMatrix = new Matrix4, _vA = new Vector3, _vB = new Vector3, _vC = new Vector3, _uvA = new Vector2, _uvB = new Vector2, _uvC = new Vector2;
class Sprite extends Object3D {
    constructor(e1013){
        if (super(), this.type = "Sprite", void 0 === _geometry) {
            _geometry = new BufferGeometry;
            const e1012 = new Float32Array([
                -0.5,
                -0.5,
                0,
                0,
                0,
                0.5,
                -0.5,
                0,
                1,
                0,
                0.5,
                0.5,
                0,
                1,
                1,
                -0.5,
                0.5,
                0,
                0,
                1
            ]), t = new InterleavedBuffer(e1012, 5);
            _geometry.setIndex([
                0,
                1,
                2,
                0,
                2,
                3
            ]), _geometry.setAttribute("position", new InterleavedBufferAttribute(t, 3, 0, !1)), _geometry.setAttribute("uv", new InterleavedBufferAttribute(t, 2, 3, !1));
        }
        this.geometry = _geometry, this.material = void 0 !== e1013 ? e1013 : new SpriteMaterial, this.center = new Vector2(0.5, 0.5);
    }
    raycast(e1014, t) {
        null === e1014.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), _worldScale.setFromMatrixScale(this.matrixWorld), _viewWorldMatrix.copy(e1014.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e1014.camera.matrixWorldInverse, this.matrixWorld), _mvPosition.setFromMatrixPosition(this.modelViewMatrix), e1014.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && _worldScale.multiplyScalar(-_mvPosition.z);
        const r = this.material.rotation;
        let n, i;
        0 !== r && (i = Math.cos(r), n = Math.sin(r));
        const a = this.center;
        transformVertex(_vA.set(-0.5, -0.5, 0), _mvPosition, a, _worldScale, n, i), transformVertex(_vB.set(0.5, -0.5, 0), _mvPosition, a, _worldScale, n, i), transformVertex(_vC.set(0.5, 0.5, 0), _mvPosition, a, _worldScale, n, i), _uvA.set(0, 0), _uvB.set(1, 0), _uvC.set(1, 1);
        let o = e1014.ray.intersectTriangle(_vA, _vB, _vC, !1, _intersectPoint);
        if (null === o && (transformVertex(_vB.set(-0.5, 0.5, 0), _mvPosition, a, _worldScale, n, i), _uvB.set(0, 1), null === (o = e1014.ray.intersectTriangle(_vA, _vC, _vB, !1, _intersectPoint)))) return;
        const s = e1014.ray.origin.distanceTo(_intersectPoint);
        s < e1014.near || s > e1014.far || t.push({
            distance: s,
            point: _intersectPoint.clone(),
            uv: Triangle.getUV(_intersectPoint, _vA, _vB, _vC, _uvA, _uvB, _uvC, new Vector2),
            face: null,
            object: this
        });
    }
    copy(e1015) {
        return super.copy(e1015), void 0 !== e1015.center && this.center.copy(e1015.center), this.material = e1015.material, this;
    }
}
function transformVertex(e1016, t, r, n, i, a) {
    _alignedPosition.subVectors(e1016, r).addScalar(0.5).multiply(n), void 0 !== i ? (_rotatedPosition.x = a * _alignedPosition.x - i * _alignedPosition.y, _rotatedPosition.y = i * _alignedPosition.x + a * _alignedPosition.y) : _rotatedPosition.copy(_alignedPosition), e1016.copy(t), e1016.x += _rotatedPosition.x, e1016.y += _rotatedPosition.y, e1016.applyMatrix4(_viewWorldMatrix);
}
Sprite.prototype.isSprite = !0;
const _v1$2 = new Vector3, _v2$1 = new Vector3;
class LOD extends Object3D {
    constructor(){
        super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            },
            isLOD: {
                value: !0
            }
        }), this.autoUpdate = !0;
    }
    copy(e1018) {
        super.copy(e1018, !1);
        const t = e1018.levels;
        for(let e1017 = 0, r = t.length; e1017 < r; e1017++){
            const r = t[e1017];
            this.addLevel(r.object.clone(), r.distance);
        }
        return this.autoUpdate = e1018.autoUpdate, this;
    }
    addLevel(e1019, t = 0) {
        t = Math.abs(t);
        const r = this.levels;
        let n;
        for(n = 0; n < r.length && !(t < r[n].distance); n++);
        return r.splice(n, 0, {
            distance: t,
            object: e1019
        }), this.add(e1019), this;
    }
    getCurrentLevel() {
        return this._currentLevel;
    }
    getObjectForDistance(e1020) {
        const t = this.levels;
        if (t.length > 0) {
            let r, n;
            for(r = 1, n = t.length; r < n && !(e1020 < t[r].distance); r++);
            return t[r - 1].object;
        }
        return null;
    }
    raycast(e1021, t) {
        if (this.levels.length > 0) {
            _v1$2.setFromMatrixPosition(this.matrixWorld);
            const r = e1021.ray.origin.distanceTo(_v1$2);
            this.getObjectForDistance(r).raycast(e1021, t);
        }
    }
    update(e1022) {
        const t = this.levels;
        if (t.length > 1) {
            _v1$2.setFromMatrixPosition(e1022.matrixWorld), _v2$1.setFromMatrixPosition(this.matrixWorld);
            const r = _v1$2.distanceTo(_v2$1) / e1022.zoom;
            let n, i;
            for(t[0].object.visible = !0, n = 1, i = t.length; n < i && r >= t[n].distance; n++)t[n - 1].object.visible = !1, t[n].object.visible = !0;
            for(this._currentLevel = n - 1; n < i; n++)t[n].object.visible = !1;
        }
    }
    toJSON(e1024) {
        const t = super.toJSON(e1024);
        !1 === this.autoUpdate && (t.object.autoUpdate = !1), t.object.levels = [];
        const r = this.levels;
        for(let e1023 = 0, n = r.length; e1023 < n; e1023++){
            const n = r[e1023];
            t.object.levels.push({
                object: n.object.uuid,
                distance: n.distance
            });
        }
        return t;
    }
}
const _basePosition = new Vector3, _skinIndex = new Vector4, _skinWeight = new Vector4, _vector$5 = new Vector3, _matrix = new Matrix4;
class SkinnedMesh extends Mesh {
    constructor(e1025, t){
        super(e1025, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Matrix4, this.bindMatrixInverse = new Matrix4;
    }
    copy(e1026) {
        return super.copy(e1026), this.bindMode = e1026.bindMode, this.bindMatrix.copy(e1026.bindMatrix), this.bindMatrixInverse.copy(e1026.bindMatrixInverse), this.skeleton = e1026.skeleton, this;
    }
    bind(e1027, t) {
        this.skeleton = e1027, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
    }
    pose() {
        this.skeleton.pose();
    }
    normalizeSkinWeights() {
        const e1028 = new Vector4, t = this.geometry.attributes.skinWeight;
        for(let r = 0, n = t.count; r < n; r++){
            e1028.x = t.getX(r), e1028.y = t.getY(r), e1028.z = t.getZ(r), e1028.w = t.getW(r);
            const n = 1 / e1028.manhattanLength();
            n !== 1 / 0 ? e1028.multiplyScalar(n) : e1028.set(1, 0, 0, 0), t.setXYZW(r, e1028.x, e1028.y, e1028.z, e1028.w);
        }
    }
    updateMatrixWorld(e1029) {
        super.updateMatrixWorld(e1029), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
    }
    boneTransform(e1031, t) {
        const r = this.skeleton, n = this.geometry;
        _skinIndex.fromBufferAttribute(n.attributes.skinIndex, e1031), _skinWeight.fromBufferAttribute(n.attributes.skinWeight, e1031), _basePosition.fromBufferAttribute(n.attributes.position, e1031).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
        for(let e1030 = 0; e1030 < 4; e1030++){
            const n = _skinWeight.getComponent(e1030);
            if (0 !== n) {
                const i = _skinIndex.getComponent(e1030);
                _matrix.multiplyMatrices(r.bones[i].matrixWorld, r.boneInverses[i]), t.addScaledVector(_vector$5.copy(_basePosition).applyMatrix4(_matrix), n);
            }
        }
        return t.applyMatrix4(this.bindMatrixInverse);
    }
}
SkinnedMesh.prototype.isSkinnedMesh = !0;
class Bone extends Object3D {
    constructor(){
        super(), this.type = "Bone";
    }
}
Bone.prototype.isBone = !0;
const _offsetMatrix = new Matrix4, _identityMatrix = new Matrix4;
class Skeleton {
    constructor(e1032 = [], t = []){
        this.uuid = generateUUID(), this.bones = e1032.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
    }
    init() {
        const e1033 = this.bones, t = this.boneInverses;
        if (this.boneMatrices = new Float32Array(16 * e1033.length), 0 === t.length) this.calculateInverses();
        else if (e1033.length !== t.length) {
            console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
            for(let e1034 = 0, t = this.bones.length; e1034 < t; e1034++)this.boneInverses.push(new Matrix4);
        }
    }
    calculateInverses() {
        this.boneInverses.length = 0;
        for(let e1035 = 0, t = this.bones.length; e1035 < t; e1035++){
            const t = new Matrix4;
            this.bones[e1035] && t.copy(this.bones[e1035].matrixWorld).invert(), this.boneInverses.push(t);
        }
    }
    pose() {
        for(let e1037 = 0, t = this.bones.length; e1037 < t; e1037++){
            const t = this.bones[e1037];
            t && t.matrixWorld.copy(this.boneInverses[e1037]).invert();
        }
        for(let e1036 = 0, t78 = this.bones.length; e1036 < t78; e1036++){
            const t = this.bones[e1036];
            t && (t.parent && t.parent.isBone ? (t.matrix.copy(t.parent.matrixWorld).invert(), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale));
        }
    }
    update() {
        const e1038 = this.bones, t = this.boneInverses, r = this.boneMatrices, n = this.boneTexture;
        for(let n39 = 0, i = e1038.length; n39 < i; n39++){
            const i = e1038[n39] ? e1038[n39].matrixWorld : _identityMatrix;
            _offsetMatrix.multiplyMatrices(i, t[n39]), _offsetMatrix.toArray(r, 16 * n39);
        }
        null !== n && (n.needsUpdate = !0);
    }
    clone() {
        return new Skeleton(this.bones, this.boneInverses);
    }
    getBoneByName(e1039) {
        for(let t = 0, r = this.bones.length; t < r; t++){
            const r = this.bones[t];
            if (r.name === e1039) return r;
        }
    }
    dispose() {
        null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null);
    }
    fromJSON(e1040, t) {
        this.uuid = e1040.uuid;
        for(let r = 0, n = e1040.bones.length; r < n; r++){
            const n = e1040.bones[r];
            let i = t[n];
            void 0 === i && (console.warn("THREE.Skeleton: No bone found with UUID:", n), i = new Bone), this.bones.push(i), this.boneInverses.push((new Matrix4).fromArray(e1040.boneInverses[r]));
        }
        return this.init(), this;
    }
    toJSON() {
        const e1041 = {
            metadata: {
                version: 4.5,
                type: "Skeleton",
                generator: "Skeleton.toJSON"
            },
            bones: [],
            boneInverses: []
        };
        e1041.uuid = this.uuid;
        const t = this.bones, r = this.boneInverses;
        for(let n = 0, i = t.length; n < i; n++){
            const i = t[n];
            e1041.bones.push(i.uuid);
            const a = r[n];
            e1041.boneInverses.push(a.toArray());
        }
        return e1041;
    }
}
const _instanceLocalMatrix = new Matrix4, _instanceWorldMatrix = new Matrix4, _instanceIntersects = [], _mesh = new Mesh;
class InstancedMesh extends Mesh {
    constructor(e1042, t, r){
        super(e1042, t), this.instanceMatrix = new BufferAttribute(new Float32Array(16 * r), 16), this.instanceColor = null, this.count = r, this.frustumCulled = !1;
    }
    copy(e1043) {
        return super.copy(e1043), this.instanceMatrix.copy(e1043.instanceMatrix), null !== e1043.instanceColor && (this.instanceColor = e1043.instanceColor.clone()), this.count = e1043.count, this;
    }
    getColorAt(e1044, t) {
        t.fromArray(this.instanceColor.array, 3 * e1044);
    }
    getMatrixAt(e1045, t) {
        t.fromArray(this.instanceMatrix.array, 16 * e1045);
    }
    raycast(e1047, t) {
        const r = this.matrixWorld, n = this.count;
        if (_mesh.geometry = this.geometry, _mesh.material = this.material, void 0 !== _mesh.material) for(let i = 0; i < n; i++){
            this.getMatrixAt(i, _instanceLocalMatrix), _instanceWorldMatrix.multiplyMatrices(r, _instanceLocalMatrix), _mesh.matrixWorld = _instanceWorldMatrix, _mesh.raycast(e1047, _instanceIntersects);
            for(let e1046 = 0, r43 = _instanceIntersects.length; e1046 < r43; e1046++){
                const r = _instanceIntersects[e1046];
                r.instanceId = i, r.object = this, t.push(r);
            }
            _instanceIntersects.length = 0;
        }
    }
    setColorAt(e1048, t) {
        null === this.instanceColor && (this.instanceColor = new BufferAttribute(new Float32Array(3 * this.count), 3)), t.toArray(this.instanceColor.array, 3 * e1048);
    }
    setMatrixAt(e1049, t) {
        t.toArray(this.instanceMatrix.array, 16 * e1049);
    }
    updateMorphTargets() {}
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
}
InstancedMesh.prototype.isInstancedMesh = !0;
class LineBasicMaterial extends Material {
    constructor(e1050){
        super(), this.type = "LineBasicMaterial", this.color = new Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.morphTargets = !1, this.setValues(e1050);
    }
    copy(e1051) {
        return super.copy(e1051), this.color.copy(e1051.color), this.linewidth = e1051.linewidth, this.linecap = e1051.linecap, this.linejoin = e1051.linejoin, this.morphTargets = e1051.morphTargets, this;
    }
}
LineBasicMaterial.prototype.isLineBasicMaterial = !0;
const _start$1 = new Vector3, _end$1 = new Vector3, _inverseMatrix$1 = new Matrix4, _ray$1 = new Ray, _sphere$1 = new Sphere;
class Line extends Object3D {
    constructor(e1052 = new BufferGeometry, t = new LineBasicMaterial){
        super(), this.type = "Line", this.geometry = e1052, this.material = t, this.updateMorphTargets();
    }
    copy(e1053) {
        return super.copy(e1053), this.material = e1053.material, this.geometry = e1053.geometry, this;
    }
    computeLineDistances() {
        const e1054 = this.geometry;
        if (e1054.isBufferGeometry) {
            if (null === e1054.index) {
                const t = e1054.attributes.position, r = [
                    0
                ];
                for(let e1055 = 1, n = t.count; e1055 < n; e1055++)_start$1.fromBufferAttribute(t, e1055 - 1), _end$1.fromBufferAttribute(t, e1055), r[e1055] = r[e1055 - 1], r[e1055] += _start$1.distanceTo(_end$1);
                e1054.setAttribute("lineDistance", new Float32BufferAttribute(r, 1));
            } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        } else e1054.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        return this;
    }
    raycast(e1056, t) {
        const r = this.geometry, n = this.matrixWorld, i = e1056.params.Line.threshold, a = r.drawRange;
        if (null === r.boundingSphere && r.computeBoundingSphere(), _sphere$1.copy(r.boundingSphere), _sphere$1.applyMatrix4(n), _sphere$1.radius += i, !1 === e1056.ray.intersectsSphere(_sphere$1)) return;
        _inverseMatrix$1.copy(n).invert(), _ray$1.copy(e1056.ray).applyMatrix4(_inverseMatrix$1);
        const o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = o * o, l = new Vector3, c = new Vector3, h = new Vector3, u = new Vector3, d = this.isLineSegments ? 2 : 1;
        if (r.isBufferGeometry) {
            const n = r.index, i = r.attributes.position;
            if (null !== n) for(let r45 = Math.max(0, a.start), o = Math.min(n.count, a.start + a.count) - 1; r45 < o; r45 += d){
                const a = n.getX(r45), o = n.getX(r45 + 1);
                if (l.fromBufferAttribute(i, a), c.fromBufferAttribute(i, o), _ray$1.distanceSqToSegment(l, c, u, h) > s) continue;
                u.applyMatrix4(this.matrixWorld);
                const d = e1056.ray.origin.distanceTo(u);
                d < e1056.near || d > e1056.far || t.push({
                    distance: d,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: r45,
                    face: null,
                    faceIndex: null,
                    object: this
                });
            }
            else for(let r44 = Math.max(0, a.start), n40 = Math.min(i.count, a.start + a.count) - 1; r44 < n40; r44 += d){
                if (l.fromBufferAttribute(i, r44), c.fromBufferAttribute(i, r44 + 1), _ray$1.distanceSqToSegment(l, c, u, h) > s) continue;
                u.applyMatrix4(this.matrixWorld);
                const n = e1056.ray.origin.distanceTo(u);
                n < e1056.near || n > e1056.far || t.push({
                    distance: n,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: r44,
                    face: null,
                    faceIndex: null,
                    object: this
                });
            }
        } else r.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
    updateMorphTargets() {
        const e1057 = this.geometry;
        if (e1057.isBufferGeometry) {
            const t = e1057.morphAttributes, r = Object.keys(t);
            if (r.length > 0) {
                const e1058 = t[r[0]];
                if (void 0 !== e1058) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let t = 0, r = e1058.length; t < r; t++){
                        const r = e1058[t].name || String(t);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = t;
                    }
                }
            }
        } else {
            const t = e1057.morphTargets;
            void 0 !== t && t.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
    }
}
Line.prototype.isLine = !0;
const _start = new Vector3, _end = new Vector3;
class LineSegments extends Line {
    constructor(e1059, t){
        super(e1059, t), this.type = "LineSegments";
    }
    computeLineDistances() {
        const e1060 = this.geometry;
        if (e1060.isBufferGeometry) {
            if (null === e1060.index) {
                const t = e1060.attributes.position, r = [];
                for(let e1061 = 0, n = t.count; e1061 < n; e1061 += 2)_start.fromBufferAttribute(t, e1061), _end.fromBufferAttribute(t, e1061 + 1), r[e1061] = 0 === e1061 ? 0 : r[e1061 - 1], r[e1061 + 1] = r[e1061] + _start.distanceTo(_end);
                e1060.setAttribute("lineDistance", new Float32BufferAttribute(r, 1));
            } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        } else e1060.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        return this;
    }
}
LineSegments.prototype.isLineSegments = !0;
class LineLoop extends Line {
    constructor(e1062, t){
        super(e1062, t), this.type = "LineLoop";
    }
}
LineLoop.prototype.isLineLoop = !0;
class PointsMaterial extends Material {
    constructor(e1063){
        super(), this.type = "PointsMaterial", this.color = new Color(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(e1063);
    }
    copy(e1064) {
        return super.copy(e1064), this.color.copy(e1064.color), this.map = e1064.map, this.alphaMap = e1064.alphaMap, this.size = e1064.size, this.sizeAttenuation = e1064.sizeAttenuation, this.morphTargets = e1064.morphTargets, this;
    }
}
PointsMaterial.prototype.isPointsMaterial = !0;
const _inverseMatrix = new Matrix4, _ray = new Ray, _sphere = new Sphere, _position$2 = new Vector3;
class Points extends Object3D {
    constructor(e1065 = new BufferGeometry, t = new PointsMaterial){
        super(), this.type = "Points", this.geometry = e1065, this.material = t, this.updateMorphTargets();
    }
    copy(e1066) {
        return super.copy(e1066), this.material = e1066.material, this.geometry = e1066.geometry, this;
    }
    raycast(e1067, t) {
        const r = this.geometry, n = this.matrixWorld, i = e1067.params.Points.threshold, a = r.drawRange;
        if (null === r.boundingSphere && r.computeBoundingSphere(), _sphere.copy(r.boundingSphere), _sphere.applyMatrix4(n), _sphere.radius += i, !1 === e1067.ray.intersectsSphere(_sphere)) return;
        _inverseMatrix.copy(n).invert(), _ray.copy(e1067.ray).applyMatrix4(_inverseMatrix);
        const o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = o * o;
        if (r.isBufferGeometry) {
            const i = r.index, o = r.attributes.position;
            if (null !== i) for(let r47 = Math.max(0, a.start), l = Math.min(i.count, a.start + a.count); r47 < l; r47++){
                const a = i.getX(r47);
                _position$2.fromBufferAttribute(o, a), testPoint(_position$2, a, s, n, e1067, t, this);
            }
            else for(let r46 = Math.max(0, a.start), i27 = Math.min(o.count, a.start + a.count); r46 < i27; r46++)_position$2.fromBufferAttribute(o, r46), testPoint(_position$2, r46, s, n, e1067, t, this);
        } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
    updateMorphTargets() {
        const e1068 = this.geometry;
        if (e1068.isBufferGeometry) {
            const t = e1068.morphAttributes, r = Object.keys(t);
            if (r.length > 0) {
                const e1069 = t[r[0]];
                if (void 0 !== e1069) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let t = 0, r = e1069.length; t < r; t++){
                        const r = e1069[t].name || String(t);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = t;
                    }
                }
            }
        } else {
            const t = e1068.morphTargets;
            void 0 !== t && t.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
    }
}
function testPoint(e1070, t, r, n, i, a, o) {
    const s = _ray.distanceSqToPoint(e1070);
    if (s < r) {
        const r = new Vector3;
        _ray.closestPointToPoint(e1070, r), r.applyMatrix4(n);
        const l = i.ray.origin.distanceTo(r);
        if (l < i.near || l > i.far) return;
        a.push({
            distance: l,
            distanceToRay: Math.sqrt(s),
            point: r,
            index: t,
            face: null,
            object: o
        });
    }
}
Points.prototype.isPoints = !0;
class VideoTexture extends Texture {
    constructor(e1071, t79, r, n, i, a, o, s, l){
        super(e1071, t79, r, n, i, a, o, s, l), this.format = void 0 !== o ? o : RGBFormat, this.minFilter = void 0 !== a ? a : LinearFilter, this.magFilter = void 0 !== i ? i : LinearFilter, this.generateMipmaps = !1;
        const c = this;
        "requestVideoFrameCallback" in e1071 && e1071.requestVideoFrameCallback(function t() {
            c.needsUpdate = !0, e1071.requestVideoFrameCallback(t);
        });
    }
    clone() {
        return new this.constructor(this.image).copy(this);
    }
    update() {
        const e1072 = this.image;
        !1 === "requestVideoFrameCallback" in e1072 && e1072.readyState >= e1072.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
    }
}
VideoTexture.prototype.isVideoTexture = !0;
class CompressedTexture extends Texture {
    constructor(e1073, t, r, n, i, a, o, s, l, c, h, u){
        super(null, a, o, s, l, c, n, i, h, u), this.image = {
            width: t,
            height: r
        }, this.mipmaps = e1073, this.flipY = !1, this.generateMipmaps = !1;
    }
}
CompressedTexture.prototype.isCompressedTexture = !0;
class CanvasTexture extends Texture {
    constructor(e1074, t, r, n, i, a, o, s, l){
        super(e1074, t, r, n, i, a, o, s, l), this.needsUpdate = !0;
    }
}
CanvasTexture.prototype.isCanvasTexture = !0;
class DepthTexture extends Texture {
    constructor(e1075, t, r, n, i, a, o, s, l, c){
        if ((c = void 0 !== c ? c : DepthFormat) !== DepthFormat && c !== DepthStencilFormat) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === r && c === DepthFormat && (r = UnsignedShortType), void 0 === r && c === DepthStencilFormat && (r = UnsignedInt248Type), super(null, n, i, a, o, s, c, r, l), this.image = {
            width: e1075,
            height: t
        }, this.magFilter = void 0 !== o ? o : NearestFilter, this.minFilter = void 0 !== s ? s : NearestFilter, this.flipY = !1, this.generateMipmaps = !1;
    }
}
DepthTexture.prototype.isDepthTexture = !0;
class CircleGeometry extends BufferGeometry {
    constructor(e1077 = 1, t = 8, r = 0, n = 2 * Math.PI){
        super(), this.type = "CircleGeometry", this.parameters = {
            radius: e1077,
            segments: t,
            thetaStart: r,
            thetaLength: n
        }, t = Math.max(3, t);
        const i = [], a = [], o = [], s = [], l = new Vector3, c = new Vector2;
        a.push(0, 0, 0), o.push(0, 0, 1), s.push(0.5, 0.5);
        for(let i28 = 0, h = 3; i28 <= t; i28++, h += 3){
            const u = r + i28 / t * n;
            l.x = e1077 * Math.cos(u), l.y = e1077 * Math.sin(u), a.push(l.x, l.y, l.z), o.push(0, 0, 1), c.x = (a[h] / e1077 + 1) / 2, c.y = (a[h + 1] / e1077 + 1) / 2, s.push(c.x, c.y);
        }
        for(let e1076 = 1; e1076 <= t; e1076++)i.push(e1076, e1076 + 1, 0);
        this.setIndex(i), this.setAttribute("position", new Float32BufferAttribute(a, 3)), this.setAttribute("normal", new Float32BufferAttribute(o, 3)), this.setAttribute("uv", new Float32BufferAttribute(s, 2));
    }
}
class CylinderGeometry extends BufferGeometry {
    constructor(e1078 = 1, t80 = 1, r48 = 1, n41 = 8, i29 = 1, a18 = !1, o = 0, s = 2 * Math.PI){
        super(), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: e1078,
            radiusBottom: t80,
            height: r48,
            radialSegments: n41,
            heightSegments: i29,
            openEnded: a18,
            thetaStart: o,
            thetaLength: s
        };
        const l9 = this;
        n41 = Math.floor(n41), i29 = Math.floor(i29);
        const c9 = [], h = [], u = [], d = [];
        let p = 0;
        const m6 = [], f = r48 / 2;
        let g3 = 0;
        function v3(r) {
            const i = p, a = new Vector2, m = new Vector3;
            let v = 0;
            const _ = !0 === r ? e1078 : t80, y = !0 === r ? 1 : -1;
            for(let e1081 = 1; e1081 <= n41; e1081++)h.push(0, f * y, 0), u.push(0, y, 0), d.push(0.5, 0.5), p++;
            const x = p;
            for(let e1079 = 0; e1079 <= n41; e1079++){
                const t = e1079 / n41 * s + o, r = Math.cos(t), i = Math.sin(t);
                m.x = _ * i, m.y = f * y, m.z = _ * r, h.push(m.x, m.y, m.z), u.push(0, y, 0), a.x = 0.5 * r + 0.5, a.y = 0.5 * i * y + 0.5, d.push(a.x, a.y), p++;
            }
            for(let e1080 = 0; e1080 < n41; e1080++){
                const t = i + e1080, n = x + e1080;
                !0 === r ? c9.push(n, n + 1, t) : c9.push(n + 1, n, t), v += 3;
            }
            l9.addGroup(g3, v, !0 === r ? 1 : 2), g3 += v;
        }
        !function() {
            const a = new Vector3, v = new Vector3;
            let _ = 0;
            const y = (t80 - e1078) / r48;
            for(let l = 0; l <= i29; l++){
                const c = [], g = l / i29, _ = g * (t80 - e1078) + e1078;
                for(let e1082 = 0; e1082 <= n41; e1082++){
                    const t = e1082 / n41, i = t * s + o, l = Math.sin(i), m = Math.cos(i);
                    v.x = _ * l, v.y = -g * r48 + f, v.z = _ * m, h.push(v.x, v.y, v.z), a.set(l, y, m).normalize(), u.push(a.x, a.y, a.z), d.push(t, 1 - g), c.push(p++);
                }
                m6.push(c);
            }
            for(let e1083 = 0; e1083 < n41; e1083++)for(let t = 0; t < i29; t++){
                const r = m6[t][e1083], n = m6[t + 1][e1083], i = m6[t + 1][e1083 + 1], a = m6[t][e1083 + 1];
                c9.push(r, n, a), c9.push(n, i, a), _ += 6;
            }
            l9.addGroup(g3, _, 0), g3 += _;
        }(), !1 === a18 && (e1078 > 0 && v3(!0), t80 > 0 && v3(!1)), this.setIndex(c9), this.setAttribute("position", new Float32BufferAttribute(h, 3)), this.setAttribute("normal", new Float32BufferAttribute(u, 3)), this.setAttribute("uv", new Float32BufferAttribute(d, 2));
    }
}
class ConeGeometry extends CylinderGeometry {
    constructor(e1084 = 1, t = 1, r = 8, n = 1, i = !1, a = 0, o = 2 * Math.PI){
        super(0, e1084, t, r, n, i, a, o), this.type = "ConeGeometry", this.parameters = {
            radius: e1084,
            height: t,
            radialSegments: r,
            heightSegments: n,
            openEnded: i,
            thetaStart: a,
            thetaLength: o
        };
    }
}
class PolyhedronGeometry extends BufferGeometry {
    constructor(e1085, t82, r49 = 1, n43 = 0){
        super(), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: e1085,
            indices: t82,
            radius: r49,
            detail: n43
        };
        const i30 = [], a19 = [];
        function o17(e1088, t, r, n) {
            const i = n + 1, a = [];
            for(let n42 = 0; n42 <= i; n42++){
                a[n42] = [];
                const o = e1088.clone().lerp(r, n42 / i), s = t.clone().lerp(r, n42 / i), l = i - n42;
                for(let e1087 = 0; e1087 <= l; e1087++)a[n42][e1087] = 0 === e1087 && n42 === i ? o : o.clone().lerp(s, e1087 / l);
            }
            for(let e1086 = 0; e1086 < i; e1086++)for(let t81 = 0; t81 < 2 * (i - e1086) - 1; t81++){
                const r = Math.floor(t81 / 2);
                t81 % 2 == 0 ? (s11(a[e1086][r + 1]), s11(a[e1086 + 1][r]), s11(a[e1086][r])) : (s11(a[e1086][r + 1]), s11(a[e1086 + 1][r + 1]), s11(a[e1086 + 1][r]));
            }
        }
        function s11(e1089) {
            i30.push(e1089.x, e1089.y, e1089.z);
        }
        function l10(t, r) {
            const n = 3 * t;
            r.x = e1085[n + 0], r.y = e1085[n + 1], r.z = e1085[n + 2];
        }
        function c(e1090, t, r, n) {
            n < 0 && 1 === e1090.x && (a19[t] = e1090.x - 1), 0 === r.x && 0 === r.z && (a19[t] = n / 2 / Math.PI + 0.5);
        }
        function h(e1091) {
            return Math.atan2(e1091.z, -e1091.x);
        }
        !function(e1092) {
            const r = new Vector3, n = new Vector3, i = new Vector3;
            for(let a = 0; a < t82.length; a += 3)l10(t82[a + 0], r), l10(t82[a + 1], n), l10(t82[a + 2], i), o17(r, n, i, e1092);
        }(n43), function(e1093) {
            const t = new Vector3;
            for(let r = 0; r < i30.length; r += 3)t.x = i30[r + 0], t.y = i30[r + 1], t.z = i30[r + 2], t.normalize().multiplyScalar(e1093), i30[r + 0] = t.x, i30[r + 1] = t.y, i30[r + 2] = t.z;
        }(r49), function() {
            const e1094 = new Vector3;
            for(let r50 = 0; r50 < i30.length; r50 += 3){
                e1094.x = i30[r50 + 0], e1094.y = i30[r50 + 1], e1094.z = i30[r50 + 2];
                const n = h(e1094) / 2 / Math.PI + 0.5, o = (t83 = e1094, Math.atan2(-t83.y, Math.sqrt(t83.x * t83.x + t83.z * t83.z)) / Math.PI + 0.5);
                a19.push(n, 1 - o);
            }
            var t83;
            (function() {
                const e1095 = new Vector3, t = new Vector3, r = new Vector3, n = new Vector3, o = new Vector2, s = new Vector2, l = new Vector2;
                for(let u = 0, d = 0; u < i30.length; u += 9, d += 6){
                    e1095.set(i30[u + 0], i30[u + 1], i30[u + 2]), t.set(i30[u + 3], i30[u + 4], i30[u + 5]), r.set(i30[u + 6], i30[u + 7], i30[u + 8]), o.set(a19[d + 0], a19[d + 1]), s.set(a19[d + 2], a19[d + 3]), l.set(a19[d + 4], a19[d + 5]), n.copy(e1095).add(t).add(r).divideScalar(3);
                    const p = h(n);
                    c(o, d + 0, e1095, p), c(s, d + 2, t, p), c(l, d + 4, r, p);
                }
            })(), function() {
                for(let e1096 = 0; e1096 < a19.length; e1096 += 6){
                    const t = a19[e1096 + 0], r = a19[e1096 + 2], n = a19[e1096 + 4], i = Math.max(t, r, n), o = Math.min(t, r, n);
                    i > 0.9 && o < 0.1 && (t < 0.2 && (a19[e1096 + 0] += 1), r < 0.2 && (a19[e1096 + 2] += 1), n < 0.2 && (a19[e1096 + 4] += 1));
                }
            }();
        }(), this.setAttribute("position", new Float32BufferAttribute(i30, 3)), this.setAttribute("normal", new Float32BufferAttribute(i30.slice(), 3)), this.setAttribute("uv", new Float32BufferAttribute(a19, 2)), 0 === n43 ? this.computeVertexNormals() : this.normalizeNormals();
    }
}
class DodecahedronGeometry extends PolyhedronGeometry {
    constructor(e1097 = 1, t = 0){
        const r = (1 + Math.sqrt(5)) / 2, n = 1 / r;
        super([
            -1,
            -1,
            -1,
            -1,
            -1,
            1,
            -1,
            1,
            -1,
            -1,
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            1,
            1,
            1,
            -1,
            1,
            1,
            1,
            0,
            -n,
            -r,
            0,
            -n,
            r,
            0,
            n,
            -r,
            0,
            n,
            r,
            -n,
            -r,
            0,
            -n,
            r,
            0,
            n,
            -r,
            0,
            n,
            r,
            0,
            -r,
            0,
            -n,
            r,
            0,
            -n,
            -r,
            0,
            n,
            r,
            0,
            n
        ], [
            3,
            11,
            7,
            3,
            7,
            15,
            3,
            15,
            13,
            7,
            19,
            17,
            7,
            17,
            6,
            7,
            6,
            15,
            17,
            4,
            8,
            17,
            8,
            10,
            17,
            10,
            6,
            8,
            0,
            16,
            8,
            16,
            2,
            8,
            2,
            10,
            0,
            12,
            1,
            0,
            1,
            18,
            0,
            18,
            16,
            6,
            10,
            2,
            6,
            2,
            13,
            6,
            13,
            15,
            2,
            16,
            18,
            2,
            18,
            3,
            2,
            3,
            13,
            18,
            1,
            9,
            18,
            9,
            11,
            18,
            11,
            3,
            4,
            14,
            12,
            4,
            12,
            0,
            4,
            0,
            8,
            11,
            9,
            5,
            11,
            5,
            19,
            11,
            19,
            7,
            19,
            5,
            14,
            19,
            14,
            4,
            19,
            4,
            17,
            1,
            12,
            14,
            1,
            14,
            5,
            1,
            5,
            9
        ], e1097, t), this.type = "DodecahedronGeometry", this.parameters = {
            radius: e1097,
            detail: t
        };
    }
}
const _v0 = new Vector3, _v1$1 = new Vector3, _normal = new Vector3, _triangle = new Triangle;
class EdgesGeometry extends BufferGeometry {
    constructor(e1100, t){
        if (super(), this.type = "EdgesGeometry", this.parameters = {
            thresholdAngle: t
        }, t = void 0 !== t ? t : 1, !0 === e1100.isGeometry) return void console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        const r = Math.pow(10, 4), n = Math.cos(DEG2RAD * t), i = e1100.getIndex(), a = e1100.getAttribute("position"), o = i ? i.count : a.count, s = [
            0,
            0,
            0
        ], l = [
            "a",
            "b",
            "c"
        ], c = new Array(3), h = {}, u = [];
        for(let e1098 = 0; e1098 < o; e1098 += 3){
            i ? (s[0] = i.getX(e1098), s[1] = i.getX(e1098 + 1), s[2] = i.getX(e1098 + 2)) : (s[0] = e1098, s[1] = e1098 + 1, s[2] = e1098 + 2);
            const { a: t , b: o , c: d  } = _triangle;
            if (t.fromBufferAttribute(a, s[0]), o.fromBufferAttribute(a, s[1]), d.fromBufferAttribute(a, s[2]), _triangle.getNormal(_normal), c[0] = `${Math.round(t.x * r)},${Math.round(t.y * r)},${Math.round(t.z * r)}`, c[1] = `${Math.round(o.x * r)},${Math.round(o.y * r)},${Math.round(o.z * r)}`, c[2] = `${Math.round(d.x * r)},${Math.round(d.y * r)},${Math.round(d.z * r)}`, c[0] !== c[1] && c[1] !== c[2] && c[2] !== c[0]) for(let e1101 = 0; e1101 < 3; e1101++){
                const t = (e1101 + 1) % 3, r = c[e1101], i = c[t], a = _triangle[l[e1101]], o = _triangle[l[t]], d = `${r}_${i}`, p = `${i}_${r}`;
                p in h && h[p] ? (_normal.dot(h[p].normal) <= n && (u.push(a.x, a.y, a.z), u.push(o.x, o.y, o.z)), h[p] = null) : d in h || (h[d] = {
                    index0: s[e1101],
                    index1: s[t],
                    normal: _normal.clone()
                });
            }
        }
        for(const e1099 in h)if (h[e1099]) {
            const { index0: t , index1: r  } = h[e1099];
            _v0.fromBufferAttribute(a, t), _v1$1.fromBufferAttribute(a, r), u.push(_v0.x, _v0.y, _v0.z), u.push(_v1$1.x, _v1$1.y, _v1$1.z);
        }
        this.setAttribute("position", new Float32BufferAttribute(u, 3));
    }
}
const Earcut = {
    triangulate: function(e1102, t, r) {
        r = r || 2;
        const n = t && t.length, i = n ? t[0] * r : e1102.length;
        let a = linkedList(e1102, 0, i, r, !0);
        const o = [];
        if (!a || a.next === a.prev) return o;
        let s, l, c, h, u, d, p;
        if (n && (a = eliminateHoles(e1102, t, a, r)), e1102.length > 80 * r) {
            s = c = e1102[0], l = h = e1102[1];
            for(let t = r; t < i; t += r)(u = e1102[t]) < s && (s = u), (d = e1102[t + 1]) < l && (l = d), u > c && (c = u), d > h && (h = d);
            p = 0 !== (p = Math.max(c - s, h - l)) ? 1 / p : 0;
        }
        return earcutLinked(a, o, r, s, l, p), o;
    }
};
function linkedList(e1103, t, r, n, i) {
    let a, o;
    if (i === signedArea(e1103, t, r, n) > 0) for(a = t; a < r; a += n)o = insertNode(a, e1103[a], e1103[a + 1], o);
    else for(a = r - n; a >= t; a -= n)o = insertNode(a, e1103[a], e1103[a + 1], o);
    return o && equals(o, o.next) && (removeNode(o), o = o.next), o;
}
function filterPoints(e1104, t) {
    if (!e1104) return e1104;
    t || (t = e1104);
    let r, n = e1104;
    do if (r = !1, n.steiner || !equals(n, n.next) && 0 !== area(n.prev, n, n.next)) n = n.next;
    else {
        if (removeNode(n), (n = t = n.prev) === n.next) break;
        r = !0;
    }
    while (r || n !== t)
    return t;
}
function earcutLinked(e1105, t, r, n, i, a, o) {
    if (!e1105) return;
    !o && a && indexCurve(e1105, n, i, a);
    let s, l, c = e1105;
    for(; e1105.prev !== e1105.next;)if (s = e1105.prev, l = e1105.next, a ? isEarHashed(e1105, n, i, a) : isEar(e1105)) t.push(s.i / r), t.push(e1105.i / r), t.push(l.i / r), removeNode(e1105), e1105 = l.next, c = l.next;
    else if ((e1105 = l) === c) {
        o ? 1 === o ? earcutLinked(e1105 = cureLocalIntersections(filterPoints(e1105), t, r), t, r, n, i, a, 2) : 2 === o && splitEarcut(e1105, t, r, n, i, a) : earcutLinked(filterPoints(e1105), t, r, n, i, a, 1);
        break;
    }
}
function isEar(e1106) {
    const t = e1106.prev, r = e1106, n = e1106.next;
    if (area(t, r, n) >= 0) return !1;
    let i = e1106.next.next;
    for(; i !== e1106.prev;){
        if (pointInTriangle(t.x, t.y, r.x, r.y, n.x, n.y, i.x, i.y) && area(i.prev, i, i.next) >= 0) return !1;
        i = i.next;
    }
    return !0;
}
function isEarHashed(e1107, t, r, n) {
    const i = e1107.prev, a = e1107, o = e1107.next;
    if (area(i, a, o) >= 0) return !1;
    const s = i.x < a.x ? i.x < o.x ? i.x : o.x : a.x < o.x ? a.x : o.x, l = i.y < a.y ? i.y < o.y ? i.y : o.y : a.y < o.y ? a.y : o.y, c = i.x > a.x ? i.x > o.x ? i.x : o.x : a.x > o.x ? a.x : o.x, h = i.y > a.y ? i.y > o.y ? i.y : o.y : a.y > o.y ? a.y : o.y, u = zOrder(s, l, t, r, n), d = zOrder(c, h, t, r, n);
    let p = e1107.prevZ, m = e1107.nextZ;
    for(; p && p.z >= u && m && m.z <= d;){
        if (p !== e1107.prev && p !== e1107.next && pointInTriangle(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return !1;
        if (p = p.prevZ, m !== e1107.prev && m !== e1107.next && pointInTriangle(i.x, i.y, a.x, a.y, o.x, o.y, m.x, m.y) && area(m.prev, m, m.next) >= 0) return !1;
        m = m.nextZ;
    }
    for(; p && p.z >= u;){
        if (p !== e1107.prev && p !== e1107.next && pointInTriangle(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return !1;
        p = p.prevZ;
    }
    for(; m && m.z <= d;){
        if (m !== e1107.prev && m !== e1107.next && pointInTriangle(i.x, i.y, a.x, a.y, o.x, o.y, m.x, m.y) && area(m.prev, m, m.next) >= 0) return !1;
        m = m.nextZ;
    }
    return !0;
}
function cureLocalIntersections(e1108, t, r) {
    let n = e1108;
    do {
        const i = n.prev, a = n.next.next;
        !equals(i, a) && intersects(i, n, n.next, a) && locallyInside(i, a) && locallyInside(a, i) && (t.push(i.i / r), t.push(n.i / r), t.push(a.i / r), removeNode(n), removeNode(n.next), n = e1108 = a), n = n.next;
    }while (n !== e1108)
    return filterPoints(n);
}
function splitEarcut(e1109, t, r, n, i, a) {
    let o = e1109;
    do {
        let e1110 = o.next.next;
        for(; e1110 !== o.prev;){
            if (o.i !== e1110.i && isValidDiagonal(o, e1110)) {
                let s = splitPolygon(o, e1110);
                return o = filterPoints(o, o.next), s = filterPoints(s, s.next), earcutLinked(o, t, r, n, i, a), void earcutLinked(s, t, r, n, i, a);
            }
            e1110 = e1110.next;
        }
        o = o.next;
    }while (o !== e1109)
}
function eliminateHoles(e1111, t, r, n) {
    const i = [];
    let a, o, s, l, c;
    for(a = 0, o = t.length; a < o; a++)(c = linkedList(e1111, s = t[a] * n, l = a < o - 1 ? t[a + 1] * n : e1111.length, n, !1)) === c.next && (c.steiner = !0), i.push(getLeftmost(c));
    for(i.sort(compareX), a = 0; a < i.length; a++)eliminateHole(i[a], r), r = filterPoints(r, r.next);
    return r;
}
function compareX(e1112, t) {
    return e1112.x - t.x;
}
function eliminateHole(e1113, t) {
    if (t = findHoleBridge(e1113, t)) {
        const r = splitPolygon(t, e1113);
        filterPoints(t, t.next), filterPoints(r, r.next);
    }
}
function findHoleBridge(e1114, t) {
    let r = t;
    const n = e1114.x, i = e1114.y;
    let a, o = -1 / 0;
    do {
        if (i <= r.y && i >= r.next.y && r.next.y !== r.y) {
            const e1115 = r.x + (i - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
            if (e1115 <= n && e1115 > o) {
                if (o = e1115, e1115 === n) {
                    if (i === r.y) return r;
                    if (i === r.next.y) return r.next;
                }
                a = r.x < r.next.x ? r : r.next;
            }
        }
        r = r.next;
    }while (r !== t)
    if (!a) return null;
    if (n === o) return a;
    const s = a, l = a.x, c = a.y;
    let h, u = 1 / 0;
    r = a;
    do n >= r.x && r.x >= l && n !== r.x && pointInTriangle(i < c ? n : o, i, l, c, i < c ? o : n, i, r.x, r.y) && (h = Math.abs(i - r.y) / (n - r.x), locallyInside(r, e1114) && (h < u || h === u && (r.x > a.x || r.x === a.x && sectorContainsSector(a, r))) && (a = r, u = h)), r = r.next;
    while (r !== s)
    return a;
}
function sectorContainsSector(e1116, t) {
    return area(e1116.prev, e1116, t.prev) < 0 && area(t.next, e1116, e1116.next) < 0;
}
function indexCurve(e1117, t, r, n) {
    let i = e1117;
    do null === i.z && (i.z = zOrder(i.x, i.y, t, r, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
    while (i !== e1117)
    i.prevZ.nextZ = null, i.prevZ = null, sortLinked(i);
}
function sortLinked(e1118) {
    let t, r, n, i, a, o, s, l, c = 1;
    do {
        for(r = e1118, e1118 = null, a = null, o = 0; r;){
            for(o++, n = r, s = 0, t = 0; t < c && (s++, n = n.nextZ); t++);
            for(l = c; s > 0 || l > 0 && n;)0 !== s && (0 === l || !n || r.z <= n.z) ? (i = r, r = r.nextZ, s--) : (i = n, n = n.nextZ, l--), a ? a.nextZ = i : e1118 = i, i.prevZ = a, a = i;
            r = n;
        }
        a.nextZ = null, c *= 2;
    }while (o > 1)
    return e1118;
}
function zOrder(e1119, t, r, n, i) {
    return (e1119 = 1431655765 & ((e1119 = 858993459 & ((e1119 = 252645135 & ((e1119 = 16711935 & ((e1119 = 32767 * (e1119 - r) * i) | e1119 << 8)) | e1119 << 4)) | e1119 << 2)) | e1119 << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1;
}
function getLeftmost(e1120) {
    let t = e1120, r = e1120;
    do (t.x < r.x || t.x === r.x && t.y < r.y) && (r = t), t = t.next;
    while (t !== e1120)
    return r;
}
function pointInTriangle(e1121, t, r, n, i, a, o, s) {
    return (i - o) * (t - s) - (e1121 - o) * (a - s) >= 0 && (e1121 - o) * (n - s) - (r - o) * (t - s) >= 0 && (r - o) * (a - s) - (i - o) * (n - s) >= 0;
}
function isValidDiagonal(e1122, t) {
    return e1122.next.i !== t.i && e1122.prev.i !== t.i && !intersectsPolygon(e1122, t) && (locallyInside(e1122, t) && locallyInside(t, e1122) && middleInside(e1122, t) && (area(e1122.prev, e1122, t.prev) || area(e1122, t.prev, t)) || equals(e1122, t) && area(e1122.prev, e1122, e1122.next) > 0 && area(t.prev, t, t.next) > 0);
}
function area(e1123, t, r) {
    return (t.y - e1123.y) * (r.x - t.x) - (t.x - e1123.x) * (r.y - t.y);
}
function equals(e1124, t) {
    return e1124.x === t.x && e1124.y === t.y;
}
function intersects(e1125, t, r, n) {
    const i = sign(area(e1125, t, r)), a = sign(area(e1125, t, n)), o = sign(area(r, n, e1125)), s = sign(area(r, n, t));
    return i !== a && o !== s || !(0 !== i || !onSegment(e1125, r, t)) || !(0 !== a || !onSegment(e1125, n, t)) || !(0 !== o || !onSegment(r, e1125, n)) || !(0 !== s || !onSegment(r, t, n));
}
function onSegment(e1126, t, r) {
    return t.x <= Math.max(e1126.x, r.x) && t.x >= Math.min(e1126.x, r.x) && t.y <= Math.max(e1126.y, r.y) && t.y >= Math.min(e1126.y, r.y);
}
function sign(e1127) {
    return e1127 > 0 ? 1 : e1127 < 0 ? -1 : 0;
}
function intersectsPolygon(e1128, t) {
    let r = e1128;
    do {
        if (r.i !== e1128.i && r.next.i !== e1128.i && r.i !== t.i && r.next.i !== t.i && intersects(r, r.next, e1128, t)) return !0;
        r = r.next;
    }while (r !== e1128)
    return !1;
}
function locallyInside(e1129, t) {
    return area(e1129.prev, e1129, e1129.next) < 0 ? area(e1129, t, e1129.next) >= 0 && area(e1129, e1129.prev, t) >= 0 : area(e1129, t, e1129.prev) < 0 || area(e1129, e1129.next, t) < 0;
}
function middleInside(e1130, t) {
    let r = e1130, n = !1;
    const i = (e1130.x + t.x) / 2, a = (e1130.y + t.y) / 2;
    do r.y > a != r.next.y > a && r.next.y !== r.y && i < (r.next.x - r.x) * (a - r.y) / (r.next.y - r.y) + r.x && (n = !n), r = r.next;
    while (r !== e1130)
    return n;
}
function splitPolygon(e1131, t) {
    const r = new Node(e1131.i, e1131.x, e1131.y), n = new Node(t.i, t.x, t.y), i = e1131.next, a = t.prev;
    return e1131.next = t, t.prev = e1131, r.next = i, i.prev = r, n.next = r, r.prev = n, a.next = n, n.prev = a, n;
}
function insertNode(e1132, t, r, n) {
    const i = new Node(e1132, t, r);
    return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function removeNode(e1133) {
    e1133.next.prev = e1133.prev, e1133.prev.next = e1133.next, e1133.prevZ && (e1133.prevZ.nextZ = e1133.nextZ), e1133.nextZ && (e1133.nextZ.prevZ = e1133.prevZ);
}
function Node(e1134, t, r) {
    this.i = e1134, this.x = t, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function signedArea(e1135, t, r, n) {
    let i = 0;
    for(let a = t, o = r - n; a < r; a += n)i += (e1135[o] - e1135[a]) * (e1135[a + 1] + e1135[o + 1]), o = a;
    return i;
}
class ShapeUtils {
    static area(e1136) {
        const t = e1136.length;
        let r = 0;
        for(let n = t - 1, i = 0; i < t; n = i++)r += e1136[n].x * e1136[i].y - e1136[i].x * e1136[n].y;
        return 0.5 * r;
    }
    static isClockWise(e1137) {
        return ShapeUtils.area(e1137) < 0;
    }
    static triangulateShape(e1140, t) {
        const r = [], n = [], i = [];
        removeDupEndPts(e1140), addContour(r, e1140);
        let a = e1140.length;
        t.forEach(removeDupEndPts);
        for(let e1138 = 0; e1138 < t.length; e1138++)n.push(a), a += t[e1138].length, addContour(r, t[e1138]);
        const o = Earcut.triangulate(r, n);
        for(let e1139 = 0; e1139 < o.length; e1139 += 3)i.push(o.slice(e1139, e1139 + 3));
        return i;
    }
}
function removeDupEndPts(e1141) {
    const t = e1141.length;
    t > 2 && e1141[t - 1].equals(e1141[0]) && e1141.pop();
}
function addContour(e1142, t) {
    for(let r = 0; r < t.length; r++)e1142.push(t[r].x), e1142.push(t[r].y);
}
class ExtrudeGeometry extends BufferGeometry {
    constructor(e1143, t89){
        super(), this.type = "ExtrudeGeometry", this.parameters = {
            shapes: e1143,
            options: t89
        }, e1143 = Array.isArray(e1143) ? e1143 : [
            e1143
        ];
        const r52 = this, n44 = [], i31 = [];
        for(let t84 = 0, r51 = e1143.length; t84 < r51; t84++)a20(e1143[t84]);
        function a20(e1151) {
            const a21 = [], o18 = void 0 !== t89.curveSegments ? t89.curveSegments : 12, s12 = void 0 !== t89.steps ? t89.steps : 1;
            let l11 = void 0 !== t89.depth ? t89.depth : 100, c10 = void 0 === t89.bevelEnabled || t89.bevelEnabled, h6 = void 0 !== t89.bevelThickness ? t89.bevelThickness : 6, u9 = void 0 !== t89.bevelSize ? t89.bevelSize : h6 - 2, d5 = void 0 !== t89.bevelOffset ? t89.bevelOffset : 0, p6 = void 0 !== t89.bevelSegments ? t89.bevelSegments : 3;
            const m7 = t89.extrudePath, f4 = void 0 !== t89.UVGenerator ? t89.UVGenerator : WorldUVGenerator;
            void 0 !== t89.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), l11 = t89.amount);
            let g4, v, _, y, x, b = !1;
            m7 && (g4 = m7.getSpacedPoints(s12), b = !0, c10 = !1, v = m7.computeFrenetFrames(s12, !1), _ = new Vector3, y = new Vector3, x = new Vector3), c10 || (p6 = 0, h6 = 0, u9 = 0, d5 = 0);
            const M = e1151.extractPoints(o18);
            let w = M.shape;
            const S = M.holes;
            if (!ShapeUtils.isClockWise(w)) {
                w = w.reverse();
                for(let e1152 = 0, t = S.length; e1152 < t; e1152++){
                    const t = S[e1152];
                    ShapeUtils.isClockWise(t) && (S[e1152] = t.reverse());
                }
            }
            const T = ShapeUtils.triangulateShape(w, S), E = w;
            for(let e1144 = 0, t88 = S.length; e1144 < t88; e1144++){
                const t = S[e1144];
                w = w.concat(t);
            }
            function A(e1153, t, r) {
                return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), t.clone().multiplyScalar(r).add(e1153);
            }
            const L = w.length, C = T.length;
            function R(e1154, t, r) {
                let n, i, a;
                const o = e1154.x - t.x, s = e1154.y - t.y, l = r.x - e1154.x, c = r.y - e1154.y, h = o * o + s * s, u = o * c - s * l;
                if (Math.abs(u) > Number.EPSILON) {
                    const u = Math.sqrt(h), d = Math.sqrt(l * l + c * c), p = t.x - s / u, m = t.y + o / u, f = ((r.x - c / d - p) * c - (r.y + l / d - m) * l) / (o * c - s * l), g = (n = p + o * f - e1154.x) * n + (i = m + s * f - e1154.y) * i;
                    if (g <= 2) return new Vector2(n, i);
                    a = Math.sqrt(g / 2);
                } else {
                    let e1155 = !1;
                    o > Number.EPSILON ? l > Number.EPSILON && (e1155 = !0) : o < -Number.EPSILON ? l < -Number.EPSILON && (e1155 = !0) : Math.sign(s) === Math.sign(c) && (e1155 = !0), e1155 ? (n = -s, i = o, a = Math.sqrt(h)) : (n = o, i = s, a = Math.sqrt(h / 2));
                }
                return new Vector2(n / a, i / a);
            }
            const P = [];
            for(let e1145 = 0, t85 = E.length, r53 = t85 - 1, n45 = e1145 + 1; e1145 < t85; e1145++, r53++, n45++)r53 === t85 && (r53 = 0), n45 === t85 && (n45 = 0), P[e1145] = R(E[e1145], E[r53], E[n45]);
            const B = [];
            let D, I = P.concat();
            for(let e1146 = 0, t86 = S.length; e1146 < t86; e1146++){
                const t = S[e1146];
                D = [];
                for(let e1156 = 0, r = t.length, n = r - 1, i = e1156 + 1; e1156 < r; e1156++, n++, i++)n === r && (n = 0), i === r && (i = 0), D[e1156] = R(t[e1156], t[n], t[i]);
                B.push(D), I = I.concat(D);
            }
            for(let e1147 = 0; e1147 < p6; e1147++){
                const t = e1147 / p6, r = h6 * Math.cos(t * Math.PI / 2), n = u9 * Math.sin(t * Math.PI / 2) + d5;
                for(let e1158 = 0, t90 = E.length; e1158 < t90; e1158++){
                    const t = A(E[e1158], P[e1158], n);
                    V(t.x, t.y, -r);
                }
                for(let e1157 = 0, t91 = S.length; e1157 < t91; e1157++){
                    const t = S[e1157];
                    D = B[e1157];
                    for(let e1159 = 0, i = t.length; e1159 < i; e1159++){
                        const i = A(t[e1159], D[e1159], n);
                        V(i.x, i.y, -r);
                    }
                }
            }
            const G = u9 + d5;
            for(let e1148 = 0; e1148 < L; e1148++){
                const t = c10 ? A(w[e1148], I[e1148], G) : w[e1148];
                b ? (y.copy(v.normals[0]).multiplyScalar(t.x), _.copy(v.binormals[0]).multiplyScalar(t.y), x.copy(g4[0]).add(y).add(_), V(x.x, x.y, x.z)) : V(t.x, t.y, 0);
            }
            for(let e1149 = 1; e1149 <= s12; e1149++)for(let t87 = 0; t87 < L; t87++){
                const r = c10 ? A(w[t87], I[t87], G) : w[t87];
                b ? (y.copy(v.normals[e1149]).multiplyScalar(r.x), _.copy(v.binormals[e1149]).multiplyScalar(r.y), x.copy(g4[e1149]).add(y).add(_), V(x.x, x.y, x.z)) : V(r.x, r.y, l11 / s12 * e1149);
            }
            for(let e1150 = p6 - 1; e1150 >= 0; e1150--){
                const t = e1150 / p6, r = h6 * Math.cos(t * Math.PI / 2), n = u9 * Math.sin(t * Math.PI / 2) + d5;
                for(let e1161 = 0, t92 = E.length; e1161 < t92; e1161++){
                    const t = A(E[e1161], P[e1161], n);
                    V(t.x, t.y, l11 + r);
                }
                for(let e1160 = 0, t93 = S.length; e1160 < t93; e1160++){
                    const t = S[e1160];
                    D = B[e1160];
                    for(let e1162 = 0, i = t.length; e1162 < i; e1162++){
                        const i = A(t[e1162], D[e1162], n);
                        b ? V(i.x, i.y + g4[s12 - 1].y, g4[s12 - 1].x + r) : V(i.x, i.y, l11 + r);
                    }
                }
            }
            function F(e1163, t) {
                let r = e1163.length;
                for(; --r >= 0;){
                    const n = r;
                    let i = r - 1;
                    i < 0 && (i = e1163.length - 1);
                    for(let e1164 = 0, r54 = s12 + 2 * p6; e1164 < r54; e1164++){
                        const r = L * e1164, a = L * (e1164 + 1);
                        U(t + n + r, t + i + r, t + i + a, t + n + a);
                    }
                }
            }
            function V(e1165, t, r) {
                a21.push(e1165), a21.push(t), a21.push(r);
            }
            function N(e1166, t, i) {
                O(e1166), O(t), O(i);
                const a = n44.length / 3, o = f4.generateTopUV(r52, n44, a - 3, a - 2, a - 1);
                z(o[0]), z(o[1]), z(o[2]);
            }
            function U(e1167, t, i, a) {
                O(e1167), O(t), O(a), O(t), O(i), O(a);
                const o = n44.length / 3, s = f4.generateSideWallUV(r52, n44, o - 6, o - 3, o - 2, o - 1);
                z(s[0]), z(s[1]), z(s[3]), z(s[1]), z(s[2]), z(s[3]);
            }
            function O(e1168) {
                n44.push(a21[3 * e1168 + 0]), n44.push(a21[3 * e1168 + 1]), n44.push(a21[3 * e1168 + 2]);
            }
            function z(e1169) {
                i31.push(e1169.x), i31.push(e1169.y);
            }
            !function() {
                const e1175 = n44.length / 3;
                if (c10) {
                    let e1172 = 0, t = L * e1172;
                    for(let e1170 = 0; e1170 < C; e1170++){
                        const r = T[e1170];
                        N(r[2] + t, r[1] + t, r[0] + t);
                    }
                    t = L * (e1172 = s12 + 2 * p6);
                    for(let e1171 = 0; e1171 < C; e1171++){
                        const r = T[e1171];
                        N(r[0] + t, r[1] + t, r[2] + t);
                    }
                } else {
                    for(let e1174 = 0; e1174 < C; e1174++){
                        const t = T[e1174];
                        N(t[2], t[1], t[0]);
                    }
                    for(let e1173 = 0; e1173 < C; e1173++){
                        const t = T[e1173];
                        N(t[0] + L * s12, t[1] + L * s12, t[2] + L * s12);
                    }
                }
                r52.addGroup(e1175, n44.length / 3 - e1175, 0);
            }(), function() {
                const e1177 = n44.length / 3;
                let t = 0;
                F(E, t), t += E.length;
                for(let e1176 = 0, r = S.length; e1176 < r; e1176++){
                    const r = S[e1176];
                    F(r, t), t += r.length;
                }
                r52.addGroup(e1177, n44.length / 3 - e1177, 1);
            }();
        }
        this.setAttribute("position", new Float32BufferAttribute(n44, 3)), this.setAttribute("uv", new Float32BufferAttribute(i31, 2)), this.computeVertexNormals();
    }
    toJSON() {
        const e1178 = BufferGeometry.prototype.toJSON.call(this);
        return toJSON$1(this.parameters.shapes, this.parameters.options, e1178);
    }
}
const WorldUVGenerator = {
    generateTopUV: function(e, t, r, n, i) {
        const a = t[3 * r], o = t[3 * r + 1], s = t[3 * n], l = t[3 * n + 1], c = t[3 * i], h = t[3 * i + 1];
        return [
            new Vector2(a, o),
            new Vector2(s, l),
            new Vector2(c, h)
        ];
    },
    generateSideWallUV: function(e, t, r, n, i, a) {
        const o = t[3 * r], s = t[3 * r + 1], l = t[3 * r + 2], c = t[3 * n], h = t[3 * n + 1], u = t[3 * n + 2], d = t[3 * i], p = t[3 * i + 1], m = t[3 * i + 2], f = t[3 * a], g = t[3 * a + 1], v = t[3 * a + 2];
        return Math.abs(s - h) < 0.01 ? [
            new Vector2(o, 1 - l),
            new Vector2(c, 1 - u),
            new Vector2(d, 1 - m),
            new Vector2(f, 1 - v)
        ] : [
            new Vector2(s, 1 - l),
            new Vector2(h, 1 - u),
            new Vector2(p, 1 - m),
            new Vector2(g, 1 - v)
        ];
    }
};
function toJSON$1(e1179, t, r) {
    if (r.shapes = [], Array.isArray(e1179)) for(let t94 = 0, n = e1179.length; t94 < n; t94++){
        const n = e1179[t94];
        r.shapes.push(n.uuid);
    }
    else r.shapes.push(e1179.uuid);
    return void 0 !== t.extrudePath && (r.options.extrudePath = t.extrudePath.toJSON()), r;
}
class IcosahedronGeometry extends PolyhedronGeometry {
    constructor(e1180 = 1, t = 0){
        const r = (1 + Math.sqrt(5)) / 2;
        super([
            -1,
            r,
            0,
            1,
            r,
            0,
            -1,
            -r,
            0,
            1,
            -r,
            0,
            0,
            -1,
            r,
            0,
            1,
            r,
            0,
            -1,
            -r,
            0,
            1,
            -r,
            r,
            0,
            -1,
            r,
            0,
            1,
            -r,
            0,
            -1,
            -r,
            0,
            1
        ], [
            0,
            11,
            5,
            0,
            5,
            1,
            0,
            1,
            7,
            0,
            7,
            10,
            0,
            10,
            11,
            1,
            5,
            9,
            5,
            11,
            4,
            11,
            10,
            2,
            10,
            7,
            6,
            7,
            1,
            8,
            3,
            9,
            4,
            3,
            4,
            2,
            3,
            2,
            6,
            3,
            6,
            8,
            3,
            8,
            9,
            4,
            9,
            5,
            2,
            4,
            11,
            6,
            2,
            10,
            8,
            6,
            7,
            9,
            8,
            1
        ], e1180, t), this.type = "IcosahedronGeometry", this.parameters = {
            radius: e1180,
            detail: t
        };
    }
}
class LatheGeometry extends BufferGeometry {
    constructor(e1181, t = 12, r = 0, n = 2 * Math.PI){
        super(), this.type = "LatheGeometry", this.parameters = {
            points: e1181,
            segments: t,
            phiStart: r,
            phiLength: n
        }, t = Math.floor(t), n = clamp(n, 0, 2 * Math.PI);
        const i = [], a = [], o = [], s = 1 / t, l = new Vector3, c = new Vector2;
        for(let i32 = 0; i32 <= t; i32++){
            const h = r + i32 * s * n, u = Math.sin(h), d = Math.cos(h);
            for(let r56 = 0; r56 <= e1181.length - 1; r56++)l.x = e1181[r56].x * u, l.y = e1181[r56].y, l.z = e1181[r56].x * d, a.push(l.x, l.y, l.z), c.x = i32 / t, c.y = r56 / (e1181.length - 1), o.push(c.x, c.y);
        }
        for(let r55 = 0; r55 < t; r55++)for(let t95 = 0; t95 < e1181.length - 1; t95++){
            const n = t95 + r55 * e1181.length, a = n, o = n + e1181.length, s = n + e1181.length + 1, l = n + 1;
            i.push(a, o, l), i.push(o, s, l);
        }
        if (this.setIndex(i), this.setAttribute("position", new Float32BufferAttribute(a, 3)), this.setAttribute("uv", new Float32BufferAttribute(o, 2)), this.computeVertexNormals(), n === 2 * Math.PI) {
            const r = this.attributes.normal.array, n = new Vector3, i = new Vector3, a = new Vector3, o = t * e1181.length * 3;
            for(let t96 = 0, s = 0; t96 < e1181.length; t96++, s += 3)n.x = r[s + 0], n.y = r[s + 1], n.z = r[s + 2], i.x = r[o + s + 0], i.y = r[o + s + 1], i.z = r[o + s + 2], a.addVectors(n, i).normalize(), r[s + 0] = r[o + s + 0] = a.x, r[s + 1] = r[o + s + 1] = a.y, r[s + 2] = r[o + s + 2] = a.z;
        }
    }
}
class OctahedronGeometry extends PolyhedronGeometry {
    constructor(e1182 = 1, t = 0){
        super([
            1,
            0,
            0,
            -1,
            0,
            0,
            0,
            1,
            0,
            0,
            -1,
            0,
            0,
            0,
            1,
            0,
            0,
            -1
        ], [
            0,
            2,
            4,
            0,
            4,
            3,
            0,
            3,
            5,
            0,
            5,
            2,
            1,
            2,
            5,
            1,
            5,
            3,
            1,
            3,
            4,
            1,
            4,
            2
        ], e1182, t), this.type = "OctahedronGeometry", this.parameters = {
            radius: e1182,
            detail: t
        };
    }
}
class ParametricGeometry extends BufferGeometry {
    constructor(e1184, t, r){
        super(), this.type = "ParametricGeometry", this.parameters = {
            func: e1184,
            slices: t,
            stacks: r
        };
        const n = [], i = [], a = [], o = [], s = new Vector3, l = new Vector3, c = new Vector3, h = new Vector3, u = new Vector3;
        e1184.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
        const d = t + 1;
        for(let n46 = 0; n46 <= r; n46++){
            const d = n46 / r;
            for(let r58 = 0; r58 <= t; r58++){
                const n = r58 / t;
                e1184(n, d, l), i.push(l.x, l.y, l.z), n - 0.00001 >= 0 ? (e1184(n - 0.00001, d, c), h.subVectors(l, c)) : (e1184(n + 0.00001, d, c), h.subVectors(c, l)), d - 0.00001 >= 0 ? (e1184(n, d - 0.00001, c), u.subVectors(l, c)) : (e1184(n, d + 0.00001, c), u.subVectors(c, l)), s.crossVectors(h, u).normalize(), a.push(s.x, s.y, s.z), o.push(n, d);
            }
        }
        for(let e1183 = 0; e1183 < r; e1183++)for(let r57 = 0; r57 < t; r57++){
            const t = e1183 * d + r57, i = e1183 * d + r57 + 1, a = (e1183 + 1) * d + r57 + 1, o = (e1183 + 1) * d + r57;
            n.push(t, i, o), n.push(i, a, o);
        }
        this.setIndex(n), this.setAttribute("position", new Float32BufferAttribute(i, 3)), this.setAttribute("normal", new Float32BufferAttribute(a, 3)), this.setAttribute("uv", new Float32BufferAttribute(o, 2));
    }
}
class RingGeometry extends BufferGeometry {
    constructor(e1187 = 0.5, t = 1, r = 8, n = 1, i = 0, a = 2 * Math.PI){
        super(), this.type = "RingGeometry", this.parameters = {
            innerRadius: e1187,
            outerRadius: t,
            thetaSegments: r,
            phiSegments: n,
            thetaStart: i,
            thetaLength: a
        }, r = Math.max(3, r);
        const o = [], s = [], l = [], c = [];
        let h = e1187;
        const u = (t - e1187) / (n = Math.max(1, n)), d = new Vector3, p = new Vector2;
        for(let e1185 = 0; e1185 <= n; e1185++){
            for(let e1188 = 0; e1188 <= r; e1188++){
                const n = i + e1188 / r * a;
                d.x = h * Math.cos(n), d.y = h * Math.sin(n), s.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / t + 1) / 2, p.y = (d.y / t + 1) / 2, c.push(p.x, p.y);
            }
            h += u;
        }
        for(let e1186 = 0; e1186 < n; e1186++){
            const t = e1186 * (r + 1);
            for(let e1189 = 0; e1189 < r; e1189++){
                const n = e1189 + t, i = n, a = n + r + 1, s = n + r + 2, l = n + 1;
                o.push(i, a, l), o.push(a, s, l);
            }
        }
        this.setIndex(o), this.setAttribute("position", new Float32BufferAttribute(s, 3)), this.setAttribute("normal", new Float32BufferAttribute(l, 3)), this.setAttribute("uv", new Float32BufferAttribute(c, 2));
    }
}
class ShapeGeometry extends BufferGeometry {
    constructor(e1190, t102 = 12){
        super(), this.type = "ShapeGeometry", this.parameters = {
            shapes: e1190,
            curveSegments: t102
        };
        const r = [], n47 = [], i33 = [], a22 = [];
        let o19 = 0, s = 0;
        if (!1 === Array.isArray(e1190)) l12(e1190);
        else for(let t97 = 0; t97 < e1190.length; t97++)l12(e1190[t97]), this.addGroup(o19, s, t97), o19 += s, s = 0;
        function l12(e1195) {
            const o = n47.length / 3, l = e1195.extractPoints(t102);
            let c = l.shape;
            const h = l.holes;
            !1 === ShapeUtils.isClockWise(c) && (c = c.reverse());
            for(let e1191 = 0, t101 = h.length; e1191 < t101; e1191++){
                const t = h[e1191];
                !0 === ShapeUtils.isClockWise(t) && (h[e1191] = t.reverse());
            }
            const u = ShapeUtils.triangulateShape(c, h);
            for(let e1192 = 0, t98 = h.length; e1192 < t98; e1192++){
                const t = h[e1192];
                c = c.concat(t);
            }
            for(let e1193 = 0, t99 = c.length; e1193 < t99; e1193++){
                const t = c[e1193];
                n47.push(t.x, t.y, 0), i33.push(0, 0, 1), a22.push(t.x, t.y);
            }
            for(let e1194 = 0, t100 = u.length; e1194 < t100; e1194++){
                const t = u[e1194], n = t[0] + o, i = t[1] + o, a = t[2] + o;
                r.push(n, i, a), s += 3;
            }
        }
        this.setIndex(r), this.setAttribute("position", new Float32BufferAttribute(n47, 3)), this.setAttribute("normal", new Float32BufferAttribute(i33, 3)), this.setAttribute("uv", new Float32BufferAttribute(a22, 2));
    }
    toJSON() {
        const e1196 = BufferGeometry.prototype.toJSON.call(this);
        return toJSON(this.parameters.shapes, e1196);
    }
}
function toJSON(e1197, t) {
    if (t.shapes = [], Array.isArray(e1197)) for(let r = 0, n = e1197.length; r < n; r++){
        const n = e1197[r];
        t.shapes.push(n.uuid);
    }
    else t.shapes.push(e1197.uuid);
    return t;
}
class SphereGeometry extends BufferGeometry {
    constructor(e1199 = 1, t = 8, r = 6, n = 0, i = 2 * Math.PI, a = 0, o = Math.PI){
        super(), this.type = "SphereGeometry", this.parameters = {
            radius: e1199,
            widthSegments: t,
            heightSegments: r,
            phiStart: n,
            phiLength: i,
            thetaStart: a,
            thetaLength: o
        }, t = Math.max(3, Math.floor(t)), r = Math.max(2, Math.floor(r));
        const s = Math.min(a + o, Math.PI);
        let l = 0;
        const c = [], h = new Vector3, u = new Vector3, d = [], p = [], m = [], f = [];
        for(let d6 = 0; d6 <= r; d6++){
            const g = [], v = d6 / r;
            let _ = 0;
            0 == d6 && 0 == a ? _ = 0.5 / t : d6 == r && s == Math.PI && (_ = -0.5 / t);
            for(let r59 = 0; r59 <= t; r59++){
                const s = r59 / t;
                h.x = -e1199 * Math.cos(n + s * i) * Math.sin(a + v * o), h.y = e1199 * Math.cos(a + v * o), h.z = e1199 * Math.sin(n + s * i) * Math.sin(a + v * o), p.push(h.x, h.y, h.z), u.copy(h).normalize(), m.push(u.x, u.y, u.z), f.push(s + _, 1 - v), g.push(l++);
            }
            c.push(g);
        }
        for(let e1198 = 0; e1198 < r; e1198++)for(let n48 = 0; n48 < t; n48++){
            const t = c[e1198][n48 + 1], i = c[e1198][n48], o = c[e1198 + 1][n48], l = c[e1198 + 1][n48 + 1];
            (0 !== e1198 || a > 0) && d.push(t, i, l), (e1198 !== r - 1 || s < Math.PI) && d.push(i, o, l);
        }
        this.setIndex(d), this.setAttribute("position", new Float32BufferAttribute(p, 3)), this.setAttribute("normal", new Float32BufferAttribute(m, 3)), this.setAttribute("uv", new Float32BufferAttribute(f, 2));
    }
}
class TetrahedronGeometry extends PolyhedronGeometry {
    constructor(e1200 = 1, t = 0){
        super([
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            1,
            -1,
            1,
            -1,
            -1
        ], [
            2,
            1,
            0,
            0,
            3,
            2,
            1,
            3,
            0,
            2,
            3,
            1
        ], e1200, t), this.type = "TetrahedronGeometry", this.parameters = {
            radius: e1200,
            detail: t
        };
    }
}
class TextGeometry extends ExtrudeGeometry {
    constructor(e1201, t = {}){
        const r = t.font;
        if (!r || !r.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new BufferGeometry;
        const n = r.generateShapes(e1201, t.size);
        t.depth = void 0 !== t.height ? t.height : 50, void 0 === t.bevelThickness && (t.bevelThickness = 10), void 0 === t.bevelSize && (t.bevelSize = 8), void 0 === t.bevelEnabled && (t.bevelEnabled = !1), super(n, t), this.type = "TextGeometry";
    }
}
class TorusGeometry extends BufferGeometry {
    constructor(e1203 = 1, t = 0.4, r = 8, n = 6, i = 2 * Math.PI){
        super(), this.type = "TorusGeometry", this.parameters = {
            radius: e1203,
            tube: t,
            radialSegments: r,
            tubularSegments: n,
            arc: i
        }, r = Math.floor(r), n = Math.floor(n);
        const a = [], o = [], s = [], l = [], c = new Vector3, h = new Vector3, u = new Vector3;
        for(let a23 = 0; a23 <= r; a23++)for(let d = 0; d <= n; d++){
            const p = d / n * i, m = a23 / r * Math.PI * 2;
            h.x = (e1203 + t * Math.cos(m)) * Math.cos(p), h.y = (e1203 + t * Math.cos(m)) * Math.sin(p), h.z = t * Math.sin(m), o.push(h.x, h.y, h.z), c.x = e1203 * Math.cos(p), c.y = e1203 * Math.sin(p), u.subVectors(h, c).normalize(), s.push(u.x, u.y, u.z), l.push(d / n), l.push(a23 / r);
        }
        for(let e1202 = 1; e1202 <= r; e1202++)for(let t103 = 1; t103 <= n; t103++){
            const r = (n + 1) * e1202 + t103 - 1, i = (n + 1) * (e1202 - 1) + t103 - 1, o = (n + 1) * (e1202 - 1) + t103, s = (n + 1) * e1202 + t103;
            a.push(r, i, s), a.push(i, o, s);
        }
        this.setIndex(a), this.setAttribute("position", new Float32BufferAttribute(o, 3)), this.setAttribute("normal", new Float32BufferAttribute(s, 3)), this.setAttribute("uv", new Float32BufferAttribute(l, 2));
    }
}
class TorusKnotGeometry extends BufferGeometry {
    constructor(e1205 = 1, t105 = 0.4, r60 = 64, n49 = 8, i34 = 2, a24 = 3){
        super(), this.type = "TorusKnotGeometry", this.parameters = {
            radius: e1205,
            tube: t105,
            tubularSegments: r60,
            radialSegments: n49,
            p: i34,
            q: a24
        }, r60 = Math.floor(r60), n49 = Math.floor(n49);
        const o21 = [], s13 = [], l13 = [], c = [], h = new Vector3, u = new Vector3, d = new Vector3, p = new Vector3, m = new Vector3, f = new Vector3, g = new Vector3;
        for(let o20 = 0; o20 <= r60; ++o20){
            const _ = o20 / r60 * i34 * Math.PI * 2;
            v(_, i34, a24, e1205, d), v(_ + 0.01, i34, a24, e1205, p), f.subVectors(p, d), g.addVectors(p, d), m.crossVectors(f, g), g.crossVectors(m, f), m.normalize(), g.normalize();
            for(let e1206 = 0; e1206 <= n49; ++e1206){
                const i = e1206 / n49 * Math.PI * 2, a = -t105 * Math.cos(i), p = t105 * Math.sin(i);
                h.x = d.x + (a * g.x + p * m.x), h.y = d.y + (a * g.y + p * m.y), h.z = d.z + (a * g.z + p * m.z), s13.push(h.x, h.y, h.z), u.subVectors(h, d).normalize(), l13.push(u.x, u.y, u.z), c.push(o20 / r60), c.push(e1206 / n49);
            }
        }
        for(let e1204 = 1; e1204 <= r60; e1204++)for(let t104 = 1; t104 <= n49; t104++){
            const r = (n49 + 1) * (e1204 - 1) + (t104 - 1), i = (n49 + 1) * e1204 + (t104 - 1), a = (n49 + 1) * e1204 + t104, s = (n49 + 1) * (e1204 - 1) + t104;
            o21.push(r, i, s), o21.push(i, a, s);
        }
        function v(e1207, t, r, n, i) {
            const a = Math.cos(e1207), o = Math.sin(e1207), s = r / t * e1207, l = Math.cos(s);
            i.x = n * (2 + l) * 0.5 * a, i.y = n * (2 + l) * o * 0.5, i.z = n * Math.sin(s) * 0.5;
        }
        this.setIndex(o21), this.setAttribute("position", new Float32BufferAttribute(s13, 3)), this.setAttribute("normal", new Float32BufferAttribute(l13, 3)), this.setAttribute("uv", new Float32BufferAttribute(c, 2));
    }
}
class TubeGeometry extends BufferGeometry {
    constructor(e1208, t106 = 64, r61 = 1, n = 8, i35 = !1){
        super(), this.type = "TubeGeometry", this.parameters = {
            path: e1208,
            tubularSegments: t106,
            radius: r61,
            radialSegments: n,
            closed: i35
        };
        const a25 = e1208.computeFrenetFrames(t106, i35);
        this.tangents = a25.tangents, this.normals = a25.normals, this.binormals = a25.binormals;
        const o22 = new Vector3, s = new Vector3, l14 = new Vector2;
        let c = new Vector3;
        const h = [], u = [], d7 = [], p = [];
        function m(i) {
            c = e1208.getPointAt(i / t106, c);
            const l = a25.normals[i], d = a25.binormals[i];
            for(let e1209 = 0; e1209 <= n; e1209++){
                const t = e1209 / n * Math.PI * 2, i = Math.sin(t), a = -Math.cos(t);
                s.x = a * l.x + i * d.x, s.y = a * l.y + i * d.y, s.z = a * l.z + i * d.z, s.normalize(), u.push(s.x, s.y, s.z), o22.x = c.x + r61 * s.x, o22.y = c.y + r61 * s.y, o22.z = c.z + r61 * s.z, h.push(o22.x, o22.y, o22.z);
            }
        }
        !function() {
            for(let e1210 = 0; e1210 < t106; e1210++)m(e1210);
            m(!1 === i35 ? t106 : 0), function() {
                for(let e1211 = 0; e1211 <= t106; e1211++)for(let r = 0; r <= n; r++)l14.x = e1211 / t106, l14.y = r / n, d7.push(l14.x, l14.y);
            }(), function() {
                for(let e1212 = 1; e1212 <= t106; e1212++)for(let t = 1; t <= n; t++){
                    const r = (n + 1) * (e1212 - 1) + (t - 1), i = (n + 1) * e1212 + (t - 1), a = (n + 1) * e1212 + t, o = (n + 1) * (e1212 - 1) + t;
                    p.push(r, i, o), p.push(i, a, o);
                }
            }();
        }(), this.setIndex(p), this.setAttribute("position", new Float32BufferAttribute(h, 3)), this.setAttribute("normal", new Float32BufferAttribute(u, 3)), this.setAttribute("uv", new Float32BufferAttribute(d7, 2));
    }
    toJSON() {
        const e1213 = BufferGeometry.prototype.toJSON.call(this);
        return e1213.path = this.parameters.path.toJSON(), e1213;
    }
}
class WireframeGeometry extends BufferGeometry {
    constructor(e1214){
        if (super(), this.type = "WireframeGeometry", !0 === e1214.isGeometry) return void console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        const t = [], r = [
            0,
            0
        ], n = {}, i = new Vector3;
        if (null !== e1214.index) {
            const a = e1214.attributes.position, o = e1214.index;
            let s = e1214.groups;
            0 === s.length && (s = [
                {
                    start: 0,
                    count: o.count,
                    materialIndex: 0
                }
            ]);
            for(let e1216 = 0, t108 = s.length; e1216 < t108; ++e1216){
                const t = s[e1216], i = t.start;
                for(let e1217 = i, a = i + t.count; e1217 < a; e1217 += 3)for(let t107 = 0; t107 < 3; t107++){
                    const i = o.getX(e1217 + t107), a = o.getX(e1217 + (t107 + 1) % 3);
                    r[0] = Math.min(i, a), r[1] = Math.max(i, a);
                    const s = r[0] + "," + r[1];
                    void 0 === n[s] && (n[s] = {
                        index1: r[0],
                        index2: r[1]
                    });
                }
            }
            for(const e1215 in n){
                const r = n[e1215];
                i.fromBufferAttribute(a, r.index1), t.push(i.x, i.y, i.z), i.fromBufferAttribute(a, r.index2), t.push(i.x, i.y, i.z);
            }
        } else {
            const r = e1214.attributes.position;
            for(let e1218 = 0, n = r.count / 3; e1218 < n; e1218++)for(let n50 = 0; n50 < 3; n50++){
                const a = 3 * e1218 + n50;
                i.fromBufferAttribute(r, a), t.push(i.x, i.y, i.z);
                const o = 3 * e1218 + (n50 + 1) % 3;
                i.fromBufferAttribute(r, o), t.push(i.x, i.y, i.z);
            }
        }
        this.setAttribute("position", new Float32BufferAttribute(t, 3));
    }
}
var Geometries = Object.freeze({
    __proto__: null,
    BoxGeometry: BoxGeometry,
    BoxBufferGeometry: BoxGeometry,
    CircleGeometry: CircleGeometry,
    CircleBufferGeometry: CircleGeometry,
    ConeGeometry: ConeGeometry,
    ConeBufferGeometry: ConeGeometry,
    CylinderGeometry: CylinderGeometry,
    CylinderBufferGeometry: CylinderGeometry,
    DodecahedronGeometry: DodecahedronGeometry,
    DodecahedronBufferGeometry: DodecahedronGeometry,
    EdgesGeometry: EdgesGeometry,
    ExtrudeGeometry: ExtrudeGeometry,
    ExtrudeBufferGeometry: ExtrudeGeometry,
    IcosahedronGeometry: IcosahedronGeometry,
    IcosahedronBufferGeometry: IcosahedronGeometry,
    LatheGeometry: LatheGeometry,
    LatheBufferGeometry: LatheGeometry,
    OctahedronGeometry: OctahedronGeometry,
    OctahedronBufferGeometry: OctahedronGeometry,
    ParametricGeometry: ParametricGeometry,
    ParametricBufferGeometry: ParametricGeometry,
    PlaneGeometry: PlaneGeometry,
    PlaneBufferGeometry: PlaneGeometry,
    PolyhedronGeometry: PolyhedronGeometry,
    PolyhedronBufferGeometry: PolyhedronGeometry,
    RingGeometry: RingGeometry,
    RingBufferGeometry: RingGeometry,
    ShapeGeometry: ShapeGeometry,
    ShapeBufferGeometry: ShapeGeometry,
    SphereGeometry: SphereGeometry,
    SphereBufferGeometry: SphereGeometry,
    TetrahedronGeometry: TetrahedronGeometry,
    TetrahedronBufferGeometry: TetrahedronGeometry,
    TextGeometry: TextGeometry,
    TextBufferGeometry: TextGeometry,
    TorusGeometry: TorusGeometry,
    TorusBufferGeometry: TorusGeometry,
    TorusKnotGeometry: TorusKnotGeometry,
    TorusKnotBufferGeometry: TorusKnotGeometry,
    TubeGeometry: TubeGeometry,
    TubeBufferGeometry: TubeGeometry,
    WireframeGeometry: WireframeGeometry
});
class ShadowMaterial extends Material {
    constructor(e1219){
        super(), this.type = "ShadowMaterial", this.color = new Color(0), this.transparent = !0, this.setValues(e1219);
    }
    copy(e1220) {
        return super.copy(e1220), this.color.copy(e1220.color), this;
    }
}
ShadowMaterial.prototype.isShadowMaterial = !0;
class RawShaderMaterial extends ShaderMaterial {
    constructor(e1221){
        super(e1221), this.type = "RawShaderMaterial";
    }
}
RawShaderMaterial.prototype.isRawShaderMaterial = !0;
class MeshStandardMaterial extends Material {
    constructor(e1222){
        super(), this.defines = {
            STANDARD: ""
        }, this.type = "MeshStandardMaterial", this.color = new Color(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = TangentSpaceNormalMap, this.normalScale = new Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.vertexTangents = !1, this.setValues(e1222);
    }
    copy(e1223) {
        return super.copy(e1223), this.defines = {
            STANDARD: ""
        }, this.color.copy(e1223.color), this.roughness = e1223.roughness, this.metalness = e1223.metalness, this.map = e1223.map, this.lightMap = e1223.lightMap, this.lightMapIntensity = e1223.lightMapIntensity, this.aoMap = e1223.aoMap, this.aoMapIntensity = e1223.aoMapIntensity, this.emissive.copy(e1223.emissive), this.emissiveMap = e1223.emissiveMap, this.emissiveIntensity = e1223.emissiveIntensity, this.bumpMap = e1223.bumpMap, this.bumpScale = e1223.bumpScale, this.normalMap = e1223.normalMap, this.normalMapType = e1223.normalMapType, this.normalScale.copy(e1223.normalScale), this.displacementMap = e1223.displacementMap, this.displacementScale = e1223.displacementScale, this.displacementBias = e1223.displacementBias, this.roughnessMap = e1223.roughnessMap, this.metalnessMap = e1223.metalnessMap, this.alphaMap = e1223.alphaMap, this.envMap = e1223.envMap, this.envMapIntensity = e1223.envMapIntensity, this.refractionRatio = e1223.refractionRatio, this.wireframe = e1223.wireframe, this.wireframeLinewidth = e1223.wireframeLinewidth, this.wireframeLinecap = e1223.wireframeLinecap, this.wireframeLinejoin = e1223.wireframeLinejoin, this.skinning = e1223.skinning, this.morphTargets = e1223.morphTargets, this.morphNormals = e1223.morphNormals, this.flatShading = e1223.flatShading, this.vertexTangents = e1223.vertexTangents, this;
    }
}
MeshStandardMaterial.prototype.isMeshStandardMaterial = !0;
class MeshPhysicalMaterial extends MeshStandardMaterial {
    constructor(e1224){
        super(), this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Vector2(1, 1), this.clearcoatNormalMap = null, this.reflectivity = 0.5, Object.defineProperty(this, "ior", {
            get: function() {
                return (1 + 0.4 * this.reflectivity) / (1 - 0.4 * this.reflectivity);
            },
            set: function(e1225) {
                this.reflectivity = clamp(2.5 * (e1225 - 1) / (e1225 + 1), 0, 1);
            }
        }), this.sheen = null, this.transmission = 0, this.transmissionMap = null, this.setValues(e1224);
    }
    copy(e1226) {
        return super.copy(e1226), this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        }, this.clearcoat = e1226.clearcoat, this.clearcoatMap = e1226.clearcoatMap, this.clearcoatRoughness = e1226.clearcoatRoughness, this.clearcoatRoughnessMap = e1226.clearcoatRoughnessMap, this.clearcoatNormalMap = e1226.clearcoatNormalMap, this.clearcoatNormalScale.copy(e1226.clearcoatNormalScale), this.reflectivity = e1226.reflectivity, e1226.sheen ? this.sheen = (this.sheen || new Color).copy(e1226.sheen) : this.sheen = null, this.transmission = e1226.transmission, this.transmissionMap = e1226.transmissionMap, this;
    }
}
MeshPhysicalMaterial.prototype.isMeshPhysicalMaterial = !0;
class MeshPhongMaterial extends Material {
    constructor(e1227){
        super(), this.type = "MeshPhongMaterial", this.color = new Color(16777215), this.specular = new Color(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = TangentSpaceNormalMap, this.normalScale = new Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = MultiplyOperation, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(e1227);
    }
    copy(e1228) {
        return super.copy(e1228), this.color.copy(e1228.color), this.specular.copy(e1228.specular), this.shininess = e1228.shininess, this.map = e1228.map, this.lightMap = e1228.lightMap, this.lightMapIntensity = e1228.lightMapIntensity, this.aoMap = e1228.aoMap, this.aoMapIntensity = e1228.aoMapIntensity, this.emissive.copy(e1228.emissive), this.emissiveMap = e1228.emissiveMap, this.emissiveIntensity = e1228.emissiveIntensity, this.bumpMap = e1228.bumpMap, this.bumpScale = e1228.bumpScale, this.normalMap = e1228.normalMap, this.normalMapType = e1228.normalMapType, this.normalScale.copy(e1228.normalScale), this.displacementMap = e1228.displacementMap, this.displacementScale = e1228.displacementScale, this.displacementBias = e1228.displacementBias, this.specularMap = e1228.specularMap, this.alphaMap = e1228.alphaMap, this.envMap = e1228.envMap, this.combine = e1228.combine, this.reflectivity = e1228.reflectivity, this.refractionRatio = e1228.refractionRatio, this.wireframe = e1228.wireframe, this.wireframeLinewidth = e1228.wireframeLinewidth, this.wireframeLinecap = e1228.wireframeLinecap, this.wireframeLinejoin = e1228.wireframeLinejoin, this.skinning = e1228.skinning, this.morphTargets = e1228.morphTargets, this.morphNormals = e1228.morphNormals, this.flatShading = e1228.flatShading, this;
    }
}
MeshPhongMaterial.prototype.isMeshPhongMaterial = !0;
class MeshToonMaterial extends Material {
    constructor(e1229){
        super(), this.defines = {
            TOON: ""
        }, this.type = "MeshToonMaterial", this.color = new Color(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = TangentSpaceNormalMap, this.normalScale = new Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e1229);
    }
    copy(e1230) {
        return super.copy(e1230), this.color.copy(e1230.color), this.map = e1230.map, this.gradientMap = e1230.gradientMap, this.lightMap = e1230.lightMap, this.lightMapIntensity = e1230.lightMapIntensity, this.aoMap = e1230.aoMap, this.aoMapIntensity = e1230.aoMapIntensity, this.emissive.copy(e1230.emissive), this.emissiveMap = e1230.emissiveMap, this.emissiveIntensity = e1230.emissiveIntensity, this.bumpMap = e1230.bumpMap, this.bumpScale = e1230.bumpScale, this.normalMap = e1230.normalMap, this.normalMapType = e1230.normalMapType, this.normalScale.copy(e1230.normalScale), this.displacementMap = e1230.displacementMap, this.displacementScale = e1230.displacementScale, this.displacementBias = e1230.displacementBias, this.alphaMap = e1230.alphaMap, this.wireframe = e1230.wireframe, this.wireframeLinewidth = e1230.wireframeLinewidth, this.wireframeLinecap = e1230.wireframeLinecap, this.wireframeLinejoin = e1230.wireframeLinejoin, this.skinning = e1230.skinning, this.morphTargets = e1230.morphTargets, this.morphNormals = e1230.morphNormals, this;
    }
}
MeshToonMaterial.prototype.isMeshToonMaterial = !0;
class MeshNormalMaterial extends Material {
    constructor(e1231){
        super(), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = TangentSpaceNormalMap, this.normalScale = new Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(e1231);
    }
    copy(e1232) {
        return super.copy(e1232), this.bumpMap = e1232.bumpMap, this.bumpScale = e1232.bumpScale, this.normalMap = e1232.normalMap, this.normalMapType = e1232.normalMapType, this.normalScale.copy(e1232.normalScale), this.displacementMap = e1232.displacementMap, this.displacementScale = e1232.displacementScale, this.displacementBias = e1232.displacementBias, this.wireframe = e1232.wireframe, this.wireframeLinewidth = e1232.wireframeLinewidth, this.skinning = e1232.skinning, this.morphTargets = e1232.morphTargets, this.morphNormals = e1232.morphNormals, this.flatShading = e1232.flatShading, this;
    }
}
MeshNormalMaterial.prototype.isMeshNormalMaterial = !0;
class MeshLambertMaterial extends Material {
    constructor(e1233){
        super(), this.type = "MeshLambertMaterial", this.color = new Color(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = MultiplyOperation, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e1233);
    }
    copy(e1234) {
        return super.copy(e1234), this.color.copy(e1234.color), this.map = e1234.map, this.lightMap = e1234.lightMap, this.lightMapIntensity = e1234.lightMapIntensity, this.aoMap = e1234.aoMap, this.aoMapIntensity = e1234.aoMapIntensity, this.emissive.copy(e1234.emissive), this.emissiveMap = e1234.emissiveMap, this.emissiveIntensity = e1234.emissiveIntensity, this.specularMap = e1234.specularMap, this.alphaMap = e1234.alphaMap, this.envMap = e1234.envMap, this.combine = e1234.combine, this.reflectivity = e1234.reflectivity, this.refractionRatio = e1234.refractionRatio, this.wireframe = e1234.wireframe, this.wireframeLinewidth = e1234.wireframeLinewidth, this.wireframeLinecap = e1234.wireframeLinecap, this.wireframeLinejoin = e1234.wireframeLinejoin, this.skinning = e1234.skinning, this.morphTargets = e1234.morphTargets, this.morphNormals = e1234.morphNormals, this;
    }
}
MeshLambertMaterial.prototype.isMeshLambertMaterial = !0;
class MeshMatcapMaterial extends Material {
    constructor(e1235){
        super(), this.defines = {
            MATCAP: ""
        }, this.type = "MeshMatcapMaterial", this.color = new Color(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = TangentSpaceNormalMap, this.normalScale = new Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(e1235);
    }
    copy(e1236) {
        return super.copy(e1236), this.defines = {
            MATCAP: ""
        }, this.color.copy(e1236.color), this.matcap = e1236.matcap, this.map = e1236.map, this.bumpMap = e1236.bumpMap, this.bumpScale = e1236.bumpScale, this.normalMap = e1236.normalMap, this.normalMapType = e1236.normalMapType, this.normalScale.copy(e1236.normalScale), this.displacementMap = e1236.displacementMap, this.displacementScale = e1236.displacementScale, this.displacementBias = e1236.displacementBias, this.alphaMap = e1236.alphaMap, this.skinning = e1236.skinning, this.morphTargets = e1236.morphTargets, this.morphNormals = e1236.morphNormals, this.flatShading = e1236.flatShading, this;
    }
}
MeshMatcapMaterial.prototype.isMeshMatcapMaterial = !0;
class LineDashedMaterial extends LineBasicMaterial {
    constructor(e1237){
        super(), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e1237);
    }
    copy(e1238) {
        return super.copy(e1238), this.scale = e1238.scale, this.dashSize = e1238.dashSize, this.gapSize = e1238.gapSize, this;
    }
}
LineDashedMaterial.prototype.isLineDashedMaterial = !0;
var Materials = Object.freeze({
    __proto__: null,
    ShadowMaterial: ShadowMaterial,
    SpriteMaterial: SpriteMaterial,
    RawShaderMaterial: RawShaderMaterial,
    ShaderMaterial: ShaderMaterial,
    PointsMaterial: PointsMaterial,
    MeshPhysicalMaterial: MeshPhysicalMaterial,
    MeshStandardMaterial: MeshStandardMaterial,
    MeshPhongMaterial: MeshPhongMaterial,
    MeshToonMaterial: MeshToonMaterial,
    MeshNormalMaterial: MeshNormalMaterial,
    MeshLambertMaterial: MeshLambertMaterial,
    MeshDepthMaterial: MeshDepthMaterial,
    MeshDistanceMaterial: MeshDistanceMaterial,
    MeshBasicMaterial: MeshBasicMaterial,
    MeshMatcapMaterial: MeshMatcapMaterial,
    LineDashedMaterial: LineDashedMaterial,
    LineBasicMaterial: LineBasicMaterial,
    Material: Material
});
const AnimationUtils = {
    arraySlice: function(e1239, t, r) {
        return AnimationUtils.isTypedArray(e1239) ? new e1239.constructor(e1239.subarray(t, void 0 !== r ? r : e1239.length)) : e1239.slice(t, r);
    },
    convertArray: function(e1240, t, r) {
        return !e1240 || !r && e1240.constructor === t ? e1240 : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e1240) : Array.prototype.slice.call(e1240);
    },
    isTypedArray: function(e1241) {
        return ArrayBuffer.isView(e1241) && !(e1241 instanceof DataView);
    },
    getKeyframeOrder: function(e1243) {
        const t109 = e1243.length, r62 = new Array(t109);
        for(let e1242 = 0; e1242 !== t109; ++e1242)r62[e1242] = e1242;
        return r62.sort(function(t, r) {
            return e1243[t] - e1243[r];
        }), r62;
    },
    sortedArray: function(e1244, t, r) {
        const n = e1244.length, i = new e1244.constructor(n);
        for(let a = 0, o = 0; o !== n; ++a){
            const n = r[a] * t;
            for(let r63 = 0; r63 !== t; ++r63)i[o++] = e1244[n + r63];
        }
        return i;
    },
    flattenJSON: function(e1245, t, r, n) {
        let i = 1, a = e1245[0];
        for(; void 0 !== a && void 0 === a[n];)a = e1245[i++];
        if (void 0 === a) return;
        let o = a[n];
        if (void 0 !== o) {
            if (Array.isArray(o)) do void 0 !== (o = a[n]) && (t.push(a.time), r.push.apply(r, o)), a = e1245[i++];
            while (void 0 !== a)
            else if (void 0 !== o.toArray) do void 0 !== (o = a[n]) && (t.push(a.time), o.toArray(r, r.length)), a = e1245[i++];
            while (void 0 !== a)
            else do void 0 !== (o = a[n]) && (t.push(a.time), r.push(o)), a = e1245[i++];
            while (void 0 !== a)
        }
    },
    subclip: function(e1249, t, r, n, i = 30) {
        const a = e1249.clone();
        a.name = t;
        const o = [];
        for(let e1246 = 0; e1246 < a.tracks.length; ++e1246){
            const t = a.tracks[e1246], s = t.getValueSize(), l = [], c = [];
            for(let e1250 = 0; e1250 < t.times.length; ++e1250){
                const a = t.times[e1250] * i;
                if (!(a < r || a >= n)) {
                    l.push(t.times[e1250]);
                    for(let r = 0; r < s; ++r)c.push(t.values[e1250 * s + r]);
                }
            }
            0 !== l.length && (t.times = AnimationUtils.convertArray(l, t.times.constructor), t.values = AnimationUtils.convertArray(c, t.values.constructor), o.push(t));
        }
        a.tracks = o;
        let s = 1 / 0;
        for(let e1247 = 0; e1247 < a.tracks.length; ++e1247)s > a.tracks[e1247].times[0] && (s = a.tracks[e1247].times[0]);
        for(let e1248 = 0; e1248 < a.tracks.length; ++e1248)a.tracks[e1248].shift(-1 * s);
        return a.resetDuration(), a;
    },
    makeClipAdditive: function(e1251, t = 0, r = e1251, n = 30) {
        n <= 0 && (n = 30);
        const i = r.tracks.length, a = t / n;
        for(let t110 = 0; t110 < i; ++t110){
            const n = r.tracks[t110], i = n.ValueTypeName;
            if ("bool" === i || "string" === i) continue;
            const o = e1251.tracks.find(function(e1254) {
                return e1254.name === n.name && e1254.ValueTypeName === i;
            });
            if (void 0 === o) continue;
            let s = 0;
            const l = n.getValueSize();
            n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (s = l / 3);
            let c = 0;
            const h = o.getValueSize();
            o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
            const u = n.times.length - 1;
            let d;
            if (a <= n.times[0]) {
                const e1255 = s, t = l - s;
                d = AnimationUtils.arraySlice(n.values, e1255, t);
            } else if (a >= n.times[u]) {
                const e1256 = u * l + s, t = e1256 + l - s;
                d = AnimationUtils.arraySlice(n.values, e1256, t);
            } else {
                const e1257 = n.createInterpolant(), t = s, r = l - s;
                e1257.evaluate(a), d = AnimationUtils.arraySlice(e1257.resultBuffer, t, r);
            }
            if ("quaternion" === i) (new Quaternion).fromArray(d).normalize().conjugate().toArray(d);
            const p = o.times.length;
            for(let e1252 = 0; e1252 < p; ++e1252){
                const t = e1252 * h + c;
                if ("quaternion" === i) Quaternion.multiplyQuaternionsFlat(o.values, t, d, 0, o.values, t);
                else {
                    const e1258 = h - 2 * c;
                    for(let r = 0; r < e1258; ++r)o.values[t + r] -= d[r];
                }
            }
        }
        return e1251.blendMode = AdditiveAnimationBlendMode, e1251;
    }
};
class Interpolant {
    constructor(e1259, t, r, n){
        this.parameterPositions = e1259, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new t.constructor(r), this.sampleValues = t, this.valueSize = r, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(e1260) {
        const t = this.parameterPositions;
        let r = this._cachedIndex, n = t[r], i = t[r - 1];
        e: {
            t: {
                let a;
                r: {
                    n: if (!(e1260 < n)) {
                        for(let a26 = r + 2;;){
                            if (void 0 === n) {
                                if (e1260 < i) break n;
                                return r = t.length, this._cachedIndex = r, this.afterEnd_(r - 1, e1260, i);
                            }
                            if (r === a26) break;
                            if (i = n, e1260 < (n = t[++r])) break t;
                        }
                        a = t.length;
                        break r;
                    }
                    if (e1260 >= i) break e;
                    {
                        const o = t[1];
                        e1260 < o && (r = 2, i = o);
                        for(let a28 = r - 2;;){
                            if (void 0 === i) return this._cachedIndex = 0, this.beforeStart_(0, e1260, n);
                            if (r === a28) break;
                            if (n = i, e1260 >= (i = t[--r - 1])) break t;
                        }
                        a = r, r = 0;
                    }
                }
                for(; r < a;){
                    const n = r + a >>> 1;
                    e1260 < t[n] ? a = n : r = n + 1;
                }
                if (n = t[r], void 0 === (i = t[r - 1])) return this._cachedIndex = 0, this.beforeStart_(0, e1260, n);
                if (void 0 === n) return r = t.length, this._cachedIndex = r, this.afterEnd_(r - 1, i, e1260);
            }
            this._cachedIndex = r, this.intervalChanged_(r, i, n);
        }
        return this.interpolate_(r, i, e1260, n);
    }
    getSettings_() {
        return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e1262) {
        const t = this.resultBuffer, r = this.sampleValues, n = this.valueSize, i = e1262 * n;
        for(let e1261 = 0; e1261 !== n; ++e1261)t[e1261] = r[i + e1261];
        return t;
    }
    interpolate_() {
        throw new Error("call to abstract method");
    }
    intervalChanged_() {}
}
Interpolant.prototype.beforeStart_ = Interpolant.prototype.copySampleValue_, Interpolant.prototype.afterEnd_ = Interpolant.prototype.copySampleValue_;
class CubicInterpolant extends Interpolant {
    constructor(e1263, t, r, n){
        super(e1263, t, r, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
            endingStart: ZeroCurvatureEnding,
            endingEnd: ZeroCurvatureEnding
        };
    }
    intervalChanged_(e1264, t, r) {
        const n = this.parameterPositions;
        let i = e1264 - 2, a = e1264 + 1, o = n[i], s = n[a];
        if (void 0 === o) switch(this.getSettings_().endingStart){
            case ZeroSlopeEnding:
                i = e1264, o = 2 * t - r;
                break;
            case WrapAroundEnding:
                o = t + n[i = n.length - 2] - n[i + 1];
                break;
            default:
                i = e1264, o = r;
        }
        if (void 0 === s) switch(this.getSettings_().endingEnd){
            case ZeroSlopeEnding:
                a = e1264, s = 2 * r - t;
                break;
            case WrapAroundEnding:
                a = 1, s = r + n[1] - n[0];
                break;
            default:
                a = e1264 - 1, s = t;
        }
        const l = 0.5 * (r - t), c = this.valueSize;
        this._weightPrev = l / (t - o), this._weightNext = l / (s - r), this._offsetPrev = i * c, this._offsetNext = a * c;
    }
    interpolate_(e1266, t, r, n) {
        const i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e1266 * o, l = s - o, c = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (r - t) / (n - t), m = p * p, f = m * p, g = -u * f + 2 * u * m - u * p, v = (1 + u) * f + (-1.5 - 2 * u) * m + (-0.5 + u) * p + 1, _ = (-1 - d) * f + (1.5 + d) * m + 0.5 * p, y = d * f - d * m;
        for(let e1265 = 0; e1265 !== o; ++e1265)i[e1265] = g * a[c + e1265] + v * a[l + e1265] + _ * a[s + e1265] + y * a[h + e1265];
        return i;
    }
}
class LinearInterpolant extends Interpolant {
    constructor(e1267, t, r, n){
        super(e1267, t, r, n);
    }
    interpolate_(e1269, t, r, n) {
        const i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e1269 * o, l = s - o, c = (r - t) / (n - t), h = 1 - c;
        for(let e1268 = 0; e1268 !== o; ++e1268)i[e1268] = a[l + e1268] * h + a[s + e1268] * c;
        return i;
    }
}
class DiscreteInterpolant extends Interpolant {
    constructor(e1270, t, r, n){
        super(e1270, t, r, n);
    }
    interpolate_(e1271) {
        return this.copySampleValue_(e1271 - 1);
    }
}
class KeyframeTrack {
    constructor(e1272, t, r, n){
        if (void 0 === e1272) throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === t || 0 === t.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e1272);
        this.name = e1272, this.times = AnimationUtils.convertArray(t, this.TimeBufferType), this.values = AnimationUtils.convertArray(r, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation);
    }
    static toJSON(e1273) {
        const t = e1273.constructor;
        let r;
        if (t.toJSON !== this.toJSON) r = t.toJSON(e1273);
        else {
            r = {
                name: e1273.name,
                times: AnimationUtils.convertArray(e1273.times, Array),
                values: AnimationUtils.convertArray(e1273.values, Array)
            };
            const t = e1273.getInterpolation();
            t !== e1273.DefaultInterpolation && (r.interpolation = t);
        }
        return r.type = e1273.ValueTypeName, r;
    }
    InterpolantFactoryMethodDiscrete(e1274) {
        return new DiscreteInterpolant(this.times, this.values, this.getValueSize(), e1274);
    }
    InterpolantFactoryMethodLinear(e1275) {
        return new LinearInterpolant(this.times, this.values, this.getValueSize(), e1275);
    }
    InterpolantFactoryMethodSmooth(e1276) {
        return new CubicInterpolant(this.times, this.values, this.getValueSize(), e1276);
    }
    setInterpolation(e1277) {
        let t;
        switch(e1277){
            case InterpolateDiscrete:
                t = this.InterpolantFactoryMethodDiscrete;
                break;
            case InterpolateLinear:
                t = this.InterpolantFactoryMethodLinear;
                break;
            case InterpolateSmooth:
                t = this.InterpolantFactoryMethodSmooth;
        }
        if (void 0 === t) {
            const t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant) {
                if (e1277 === this.DefaultInterpolation) throw new Error(t);
                this.setInterpolation(this.DefaultInterpolation);
            }
            return console.warn("THREE.KeyframeTrack:", t), this;
        }
        return this.createInterpolant = t, this;
    }
    getInterpolation() {
        switch(this.createInterpolant){
            case this.InterpolantFactoryMethodDiscrete:
                return InterpolateDiscrete;
            case this.InterpolantFactoryMethodLinear:
                return InterpolateLinear;
            case this.InterpolantFactoryMethodSmooth:
                return InterpolateSmooth;
        }
    }
    getValueSize() {
        return this.values.length / this.times.length;
    }
    shift(e1278) {
        if (0 !== e1278) {
            const t = this.times;
            for(let r = 0, n = t.length; r !== n; ++r)t[r] += e1278;
        }
        return this;
    }
    scale(e1279) {
        if (1 !== e1279) {
            const t = this.times;
            for(let r = 0, n = t.length; r !== n; ++r)t[r] *= e1279;
        }
        return this;
    }
    trim(e1280, t) {
        const r = this.times, n = r.length;
        let i = 0, a = n - 1;
        for(; i !== n && r[i] < e1280;)++i;
        for(; -1 !== a && r[a] > t;)--a;
        if (++a, 0 !== i || a !== n) {
            i >= a && (i = (a = Math.max(a, 1)) - 1);
            const e1281 = this.getValueSize();
            this.times = AnimationUtils.arraySlice(r, i, a), this.values = AnimationUtils.arraySlice(this.values, i * e1281, a * e1281);
        }
        return this;
    }
    validate() {
        let e1282 = !0;
        const t = this.getValueSize();
        t - Math.floor(t) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e1282 = !1);
        const r = this.times, n = this.values, i = r.length;
        0 === i && (console.error("THREE.KeyframeTrack: Track is empty.", this), e1282 = !1);
        let a = null;
        for(let t111 = 0; t111 !== i; t111++){
            const n = r[t111];
            if ("number" == typeof n && isNaN(n)) {
                console.error("THREE.KeyframeTrack: Time is not a valid number.", this, t111, n), e1282 = !1;
                break;
            }
            if (null !== a && a > n) {
                console.error("THREE.KeyframeTrack: Out of order keys.", this, t111, n, a), e1282 = !1;
                break;
            }
            a = n;
        }
        if (void 0 !== n && AnimationUtils.isTypedArray(n)) for(let t112 = 0, r64 = n.length; t112 !== r64; ++t112){
            const r = n[t112];
            if (isNaN(r)) {
                console.error("THREE.KeyframeTrack: Value is not a valid number.", this, t112, r), e1282 = !1;
                break;
            }
        }
        return e1282;
    }
    optimize() {
        const e1283 = AnimationUtils.arraySlice(this.times), t = AnimationUtils.arraySlice(this.values), r = this.getValueSize(), n = this.getInterpolation() === InterpolateSmooth, i = e1283.length - 1;
        let a = 1;
        for(let o = 1; o < i; ++o){
            let i = !1;
            const s = e1283[o];
            if (s !== e1283[o + 1] && (1 !== o || s !== e1283[0])) {
                if (n) i = !0;
                else {
                    const e1284 = o * r, n = e1284 - r, a = e1284 + r;
                    for(let o23 = 0; o23 !== r; ++o23){
                        const r = t[e1284 + o23];
                        if (r !== t[n + o23] || r !== t[a + o23]) {
                            i = !0;
                            break;
                        }
                    }
                }
            }
            if (i) {
                if (o !== a) {
                    e1283[a] = e1283[o];
                    const n = o * r, i = a * r;
                    for(let e1285 = 0; e1285 !== r; ++e1285)t[i + e1285] = t[n + e1285];
                }
                ++a;
            }
        }
        if (i > 0) {
            e1283[a] = e1283[i];
            for(let e1286 = i * r, n = a * r, o = 0; o !== r; ++o)t[n + o] = t[e1286 + o];
            ++a;
        }
        return a !== e1283.length ? (this.times = AnimationUtils.arraySlice(e1283, 0, a), this.values = AnimationUtils.arraySlice(t, 0, a * r)) : (this.times = e1283, this.values = t), this;
    }
    clone() {
        const e1287 = AnimationUtils.arraySlice(this.times, 0), t = AnimationUtils.arraySlice(this.values, 0), r = new this.constructor(this.name, e1287, t);
        return r.createInterpolant = this.createInterpolant, r;
    }
}
KeyframeTrack.prototype.TimeBufferType = Float32Array, KeyframeTrack.prototype.ValueBufferType = Float32Array, KeyframeTrack.prototype.DefaultInterpolation = InterpolateLinear;
class BooleanKeyframeTrack extends KeyframeTrack {
}
BooleanKeyframeTrack.prototype.ValueTypeName = "bool", BooleanKeyframeTrack.prototype.ValueBufferType = Array, BooleanKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete, BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0, BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
class ColorKeyframeTrack extends KeyframeTrack {
}
ColorKeyframeTrack.prototype.ValueTypeName = "color";
class NumberKeyframeTrack extends KeyframeTrack {
}
NumberKeyframeTrack.prototype.ValueTypeName = "number";
class QuaternionLinearInterpolant extends Interpolant {
    constructor(e1288, t, r, n){
        super(e1288, t, r, n);
    }
    interpolate_(e1290, t, r, n) {
        const i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (r - t) / (n - t);
        let l = e1290 * o;
        for(let e1289 = l + o; l !== e1289; l += 4)Quaternion.slerpFlat(i, 0, a, l - o, a, l, s);
        return i;
    }
}
class QuaternionKeyframeTrack extends KeyframeTrack {
    InterpolantFactoryMethodLinear(e1291) {
        return new QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), e1291);
    }
}
QuaternionKeyframeTrack.prototype.ValueTypeName = "quaternion", QuaternionKeyframeTrack.prototype.DefaultInterpolation = InterpolateLinear, QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
class StringKeyframeTrack extends KeyframeTrack {
}
StringKeyframeTrack.prototype.ValueTypeName = "string", StringKeyframeTrack.prototype.ValueBufferType = Array, StringKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete, StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0, StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
class VectorKeyframeTrack extends KeyframeTrack {
}
VectorKeyframeTrack.prototype.ValueTypeName = "vector";
class AnimationClip {
    constructor(e1292, t = -1, r, n = NormalAnimationBlendMode){
        this.name = e1292, this.tracks = r, this.duration = t, this.blendMode = n, this.uuid = generateUUID(), this.duration < 0 && this.resetDuration();
    }
    static parse(e1294) {
        const t = [], r = e1294.tracks, n = 1 / (e1294.fps || 1);
        for(let e1293 = 0, i = r.length; e1293 !== i; ++e1293)t.push(parseKeyframeTrack(r[e1293]).scale(n));
        const i36 = new this(e1294.name, e1294.duration, t, e1294.blendMode);
        return i36.uuid = e1294.uuid, i36;
    }
    static toJSON(e1296) {
        const t = [], r = e1296.tracks, n = {
            name: e1296.name,
            duration: e1296.duration,
            tracks: t,
            uuid: e1296.uuid,
            blendMode: e1296.blendMode
        };
        for(let e1295 = 0, n51 = r.length; e1295 !== n51; ++e1295)t.push(KeyframeTrack.toJSON(r[e1295]));
        return n;
    }
    static CreateFromMorphTargetSequence(e1298, t, r, n) {
        const i = t.length, a = [];
        for(let e1297 = 0; e1297 < i; e1297++){
            let o = [], s = [];
            o.push((e1297 + i - 1) % i, e1297, (e1297 + 1) % i), s.push(0, 1, 0);
            const l = AnimationUtils.getKeyframeOrder(o);
            o = AnimationUtils.sortedArray(o, 1, l), s = AnimationUtils.sortedArray(s, 1, l), n || 0 !== o[0] || (o.push(i), s.push(s[0])), a.push(new NumberKeyframeTrack(".morphTargetInfluences[" + t[e1297].name + "]", o, s).scale(1 / r));
        }
        return new this(e1298, -1, a);
    }
    static findByName(e1300, t) {
        let r = e1300;
        if (!Array.isArray(e1300)) {
            const t = e1300;
            r = t.geometry && t.geometry.animations || t.animations;
        }
        for(let e1299 = 0; e1299 < r.length; e1299++)if (r[e1299].name === t) return r[e1299];
        return null;
    }
    static CreateClipsFromMorphTargetSequences(e1302, t, r) {
        const n = {}, i = /^([\w-]*?)([\d]+)$/;
        for(let t113 = 0, r65 = e1302.length; t113 < r65; t113++){
            const r = e1302[t113], a = r.name.match(i);
            if (a && a.length > 1) {
                const e1303 = a[1];
                let t = n[e1303];
                t || (n[e1303] = t = []), t.push(r);
            }
        }
        const a = [];
        for(const e1301 in n)a.push(this.CreateFromMorphTargetSequence(e1301, n[e1301], t, r));
        return a;
    }
    static parseAnimation(e1305, t114) {
        if (!e1305) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
        const r66 = function(e1306, t, r, n, i) {
            if (0 !== r.length) {
                const a = [], o = [];
                AnimationUtils.flattenJSON(r, a, o, n), 0 !== a.length && i.push(new e1306(t, a, o));
            }
        }, n52 = [], i37 = e1305.name || "default", a30 = e1305.fps || 30, o26 = e1305.blendMode;
        let s = e1305.length || -1;
        const l = e1305.hierarchy || [];
        for(let e1304 = 0; e1304 < l.length; e1304++){
            const i = l[e1304].keys;
            if (i && 0 !== i.length) {
                if (i[0].morphTargets) {
                    const e1307 = {};
                    let t;
                    for(t = 0; t < i.length; t++)if (i[t].morphTargets) for(let r = 0; r < i[t].morphTargets.length; r++)e1307[i[t].morphTargets[r]] = -1;
                    for(const r67 in e1307){
                        const e1308 = [], a = [];
                        for(let n = 0; n !== i[t].morphTargets.length; ++n){
                            const n = i[t];
                            e1308.push(n.time), a.push(n.morphTarget === r67 ? 1 : 0);
                        }
                        n52.push(new NumberKeyframeTrack(".morphTargetInfluence[" + r67 + "]", e1308, a));
                    }
                    s = e1307.length * (a30 || 1);
                } else {
                    const a = ".bones[" + t114[e1304].name + "]";
                    r66(VectorKeyframeTrack, a + ".position", i, "pos", n52), r66(QuaternionKeyframeTrack, a + ".quaternion", i, "rot", n52), r66(VectorKeyframeTrack, a + ".scale", i, "scl", n52);
                }
            }
        }
        return 0 === n52.length ? null : new this(i37, s, n52, o26);
    }
    resetDuration() {
        let e1309 = 0;
        for(let t = 0, r = this.tracks.length; t !== r; ++t){
            const r = this.tracks[t];
            e1309 = Math.max(e1309, r.times[r.times.length - 1]);
        }
        return this.duration = e1309, this;
    }
    trim() {
        for(let e1310 = 0; e1310 < this.tracks.length; e1310++)this.tracks[e1310].trim(0, this.duration);
        return this;
    }
    validate() {
        let e1311 = !0;
        for(let t = 0; t < this.tracks.length; t++)e1311 = e1311 && this.tracks[t].validate();
        return e1311;
    }
    optimize() {
        for(let e1312 = 0; e1312 < this.tracks.length; e1312++)this.tracks[e1312].optimize();
        return this;
    }
    clone() {
        const e1313 = [];
        for(let t = 0; t < this.tracks.length; t++)e1313.push(this.tracks[t].clone());
        return new this.constructor(this.name, this.duration, e1313, this.blendMode);
    }
    toJSON() {
        return this.constructor.toJSON(this);
    }
}
function getTrackTypeForValueTypeName(e1314) {
    switch(e1314.toLowerCase()){
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
            return NumberKeyframeTrack;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
            return VectorKeyframeTrack;
        case "color":
            return ColorKeyframeTrack;
        case "quaternion":
            return QuaternionKeyframeTrack;
        case "bool":
        case "boolean":
            return BooleanKeyframeTrack;
        case "string":
            return StringKeyframeTrack;
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e1314);
}
function parseKeyframeTrack(e1315) {
    if (void 0 === e1315.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const t = getTrackTypeForValueTypeName(e1315.type);
    if (void 0 === e1315.times) {
        const t = [], r = [];
        AnimationUtils.flattenJSON(e1315.keys, t, r, "value"), e1315.times = t, e1315.values = r;
    }
    return void 0 !== t.parse ? t.parse(e1315) : new t(e1315.name, e1315.times, e1315.values, e1315.interpolation);
}
const Cache = {
    enabled: !1,
    files: {},
    add: function(e1316, t) {
        !1 !== this.enabled && (this.files[e1316] = t);
    },
    get: function(e1317) {
        if (!1 !== this.enabled) return this.files[e1317];
    },
    remove: function(e1318) {
        delete this.files[e1318];
    },
    clear: function() {
        this.files = {};
    }
};
class LoadingManager {
    constructor(e1319, t115, r68){
        const n53 = this;
        let i = !1, a = 0, o = 0, s = void 0;
        const l = [];
        this.onStart = void 0, this.onLoad = e1319, this.onProgress = t115, this.onError = r68, this.itemStart = function(e1320) {
            o++, !1 === i && void 0 !== n53.onStart && n53.onStart(e1320, a, o), i = !0;
        }, this.itemEnd = function(e1321) {
            a++, void 0 !== n53.onProgress && n53.onProgress(e1321, a, o), a === o && (i = !1, void 0 !== n53.onLoad && n53.onLoad());
        }, this.itemError = function(e1322) {
            void 0 !== n53.onError && n53.onError(e1322);
        }, this.resolveURL = function(e1323) {
            return s ? s(e1323) : e1323;
        }, this.setURLModifier = function(e1324) {
            return s = e1324, this;
        }, this.addHandler = function(e1325, t) {
            return l.push(e1325, t), this;
        }, this.removeHandler = function(e1326) {
            const t = l.indexOf(e1326);
            return -1 !== t && l.splice(t, 2), this;
        }, this.getHandler = function(e1327) {
            for(let t = 0, r = l.length; t < r; t += 2){
                const r = l[t], n = l[t + 1];
                if (r.global && (r.lastIndex = 0), r.test(e1327)) return n;
            }
            return null;
        };
    }
}
const DefaultLoadingManager = new LoadingManager;
class Loader {
    constructor(e1328){
        this.manager = void 0 !== e1328 ? e1328 : DefaultLoadingManager, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {}
    loadAsync(e1329, t) {
        const r = this;
        return new Promise(function(n, i) {
            r.load(e1329, n, t, i);
        });
    }
    parse() {}
    setCrossOrigin(e1330) {
        return this.crossOrigin = e1330, this;
    }
    setWithCredentials(e1331) {
        return this.withCredentials = e1331, this;
    }
    setPath(e1332) {
        return this.path = e1332, this;
    }
    setResourcePath(e1333) {
        return this.resourcePath = e1333, this;
    }
    setRequestHeader(e1334) {
        return this.requestHeader = e1334, this;
    }
}
const loading = {};
class FileLoader extends Loader {
    constructor(e1335){
        super(e1335);
    }
    load(e1336, t119, r69, n54) {
        void 0 === e1336 && (e1336 = ""), void 0 !== this.path && (e1336 = this.path + e1336), e1336 = this.manager.resolveURL(e1336);
        const i = this, a = Cache.get(e1336);
        if (void 0 !== a) return i.manager.itemStart(e1336), setTimeout(function() {
            t119 && t119(a), i.manager.itemEnd(e1336);
        }, 0), a;
        if (void 0 !== loading[e1336]) return void loading[e1336].push({
            onLoad: t119,
            onProgress: r69,
            onError: n54
        });
        const o = e1336.match(/^data:(.*?)(;base64)?,(.*)$/);
        let s;
        if (o) {
            const r = o[1], a = !!o[2];
            let s = o[3];
            s = decodeURIComponent(s), a && (s = atob(s));
            try {
                let a;
                const o = (this.responseType || "").toLowerCase();
                switch(o){
                    case "arraybuffer":
                    case "blob":
                        const e1337 = new Uint8Array(s.length);
                        for(let t117 = 0; t117 < s.length; t117++)e1337[t117] = s.charCodeAt(t117);
                        a = "blob" === o ? new Blob([
                            e1337.buffer
                        ], {
                            type: r
                        }) : e1337.buffer;
                        break;
                    case "document":
                        const t116 = new DOMParser;
                        a = t116.parseFromString(s, r);
                        break;
                    case "json":
                        a = JSON.parse(s);
                        break;
                    default:
                        a = s;
                }
                setTimeout(function() {
                    t119 && t119(a), i.manager.itemEnd(e1336);
                }, 0);
            } catch (t) {
                setTimeout(function() {
                    n54 && n54(t), i.manager.itemError(e1336), i.manager.itemEnd(e1336);
                }, 0);
            }
        } else {
            loading[e1336] = [], loading[e1336].push({
                onLoad: t119,
                onProgress: r69,
                onError: n54
            }), (s = new XMLHttpRequest).open("GET", e1336, !0), s.addEventListener("load", function(t) {
                const r = this.response, n = loading[e1336];
                if (delete loading[e1336], 200 === this.status || 0 === this.status) {
                    0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), Cache.add(e1336, r);
                    for(let e1340 = 0, t = n.length; e1340 < t; e1340++){
                        const t = n[e1340];
                        t.onLoad && t.onLoad(r);
                    }
                    i.manager.itemEnd(e1336);
                } else {
                    for(let e1341 = 0, r = n.length; e1341 < r; e1341++){
                        const r = n[e1341];
                        r.onError && r.onError(t);
                    }
                    i.manager.itemError(e1336), i.manager.itemEnd(e1336);
                }
            }, !1), s.addEventListener("progress", function(t) {
                const r = loading[e1336];
                for(let e1342 = 0, n = r.length; e1342 < n; e1342++){
                    const n = r[e1342];
                    n.onProgress && n.onProgress(t);
                }
            }, !1), s.addEventListener("error", function(t) {
                const r = loading[e1336];
                delete loading[e1336];
                for(let e1343 = 0, n = r.length; e1343 < n; e1343++){
                    const n = r[e1343];
                    n.onError && n.onError(t);
                }
                i.manager.itemError(e1336), i.manager.itemEnd(e1336);
            }, !1), s.addEventListener("abort", function(t) {
                const r = loading[e1336];
                delete loading[e1336];
                for(let e1344 = 0, n = r.length; e1344 < n; e1344++){
                    const n = r[e1344];
                    n.onError && n.onError(t);
                }
                i.manager.itemError(e1336), i.manager.itemEnd(e1336);
            }, !1), void 0 !== this.responseType && (s.responseType = this.responseType), void 0 !== this.withCredentials && (s.withCredentials = this.withCredentials), s.overrideMimeType && s.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
            for(const e1338 in this.requestHeader)s.setRequestHeader(e1338, this.requestHeader[e1338]);
            s.send(null);
        }
        return i.manager.itemStart(e1336), s;
    }
    setResponseType(e1345) {
        return this.responseType = e1345, this;
    }
    setMimeType(e1346) {
        return this.mimeType = e1346, this;
    }
}
class AnimationLoader extends Loader {
    constructor(e1347){
        super(e1347);
    }
    load(e1348, t120, r70, n) {
        const i = this, a = new FileLoader(this.manager);
        a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e1348, function(r) {
            try {
                t120(i.parse(JSON.parse(r)));
            } catch (t) {
                n ? n(t) : console.error(t), i.manager.itemError(e1348);
            }
        }, r70, n);
    }
    parse(e1349) {
        const t = [];
        for(let r = 0; r < e1349.length; r++){
            const n = AnimationClip.parse(e1349[r]);
            t.push(n);
        }
        return t;
    }
}
class CompressedTextureLoader extends Loader {
    constructor(e1350){
        super(e1350);
    }
    load(e1351, t122, r72, n) {
        const i = this, a = [], o = new CompressedTexture, s = new FileLoader(this.manager);
        s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(i.withCredentials);
        let l = 0;
        function c11(c) {
            s.load(e1351[c], function(e1352) {
                const r = i.parse(e1352, !0);
                a[c] = {
                    width: r.width,
                    height: r.height,
                    format: r.format,
                    mipmaps: r.mipmaps
                }, 6 === (l += 1) && (1 === r.mipmapCount && (o.minFilter = LinearFilter), o.image = a, o.format = r.format, o.needsUpdate = !0, t122 && t122(o));
            }, r72, n);
        }
        if (Array.isArray(e1351)) for(let t121 = 0, r71 = e1351.length; t121 < r71; ++t121)c11(t121);
        else s.load(e1351, function(e1353) {
            const r = i.parse(e1353, !0);
            if (r.isCubemap) {
                const e1354 = r.mipmaps.length / r.mipmapCount;
                for(let t = 0; t < e1354; t++){
                    a[t] = {
                        mipmaps: []
                    };
                    for(let e1355 = 0; e1355 < r.mipmapCount; e1355++)a[t].mipmaps.push(r.mipmaps[t * r.mipmapCount + e1355]), a[t].format = r.format, a[t].width = r.width, a[t].height = r.height;
                }
                o.image = a;
            } else o.image.width = r.width, o.image.height = r.height, o.mipmaps = r.mipmaps;
            1 === r.mipmapCount && (o.minFilter = LinearFilter), o.format = r.format, o.needsUpdate = !0, t122 && t122(o);
        }, r72, n);
        return o;
    }
}
class ImageLoader extends Loader {
    constructor(e1356){
        super(e1356);
    }
    load(e1357, t123, r, n) {
        void 0 !== this.path && (e1357 = this.path + e1357), e1357 = this.manager.resolveURL(e1357);
        const i = this, a = Cache.get(e1357);
        if (void 0 !== a) return i.manager.itemStart(e1357), setTimeout(function() {
            t123 && t123(a), i.manager.itemEnd(e1357);
        }, 0), a;
        const o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
        function s() {
            o.removeEventListener("load", s, !1), o.removeEventListener("error", l, !1), Cache.add(e1357, this), t123 && t123(this), i.manager.itemEnd(e1357);
        }
        function l(t) {
            o.removeEventListener("load", s, !1), o.removeEventListener("error", l, !1), n && n(t), i.manager.itemError(e1357), i.manager.itemEnd(e1357);
        }
        return o.addEventListener("load", s, !1), o.addEventListener("error", l, !1), "data:" !== e1357.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), i.manager.itemStart(e1357), o.src = e1357, o;
    }
}
class CubeTextureLoader extends Loader {
    constructor(e1358){
        super(e1358);
    }
    load(e1359, t, r73, n) {
        const i = new CubeTexture, a = new ImageLoader(this.manager);
        a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
        let o = 0;
        function s(r) {
            a.load(e1359[r], function(e1360) {
                i.images[r] = e1360, 6 === ++o && (i.needsUpdate = !0, t && t(i));
            }, void 0, n);
        }
        for(let t124 = 0; t124 < e1359.length; ++t124)s(t124);
        return i;
    }
}
class DataTextureLoader extends Loader {
    constructor(e1361){
        super(e1361);
    }
    load(e1362, t, r74, n) {
        const i = this, a = new DataTexture, o = new FileLoader(this.manager);
        return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(i.withCredentials), o.load(e1362, function(e1363) {
            const r = i.parse(e1363);
            r && (void 0 !== r.image ? a.image = r.image : void 0 !== r.data && (a.image.width = r.width, a.image.height = r.height, a.image.data = r.data), a.wrapS = void 0 !== r.wrapS ? r.wrapS : ClampToEdgeWrapping, a.wrapT = void 0 !== r.wrapT ? r.wrapT : ClampToEdgeWrapping, a.magFilter = void 0 !== r.magFilter ? r.magFilter : LinearFilter, a.minFilter = void 0 !== r.minFilter ? r.minFilter : LinearFilter, a.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1, void 0 !== r.encoding && (a.encoding = r.encoding), void 0 !== r.flipY && (a.flipY = r.flipY), void 0 !== r.format && (a.format = r.format), void 0 !== r.type && (a.type = r.type), void 0 !== r.mipmaps && (a.mipmaps = r.mipmaps, a.minFilter = LinearMipmapLinearFilter), 1 === r.mipmapCount && (a.minFilter = LinearFilter), void 0 !== r.generateMipmaps && (a.generateMipmaps = r.generateMipmaps), a.needsUpdate = !0, t && t(a, r));
        }, r74, n), a;
    }
}
class TextureLoader extends Loader {
    constructor(e1364){
        super(e1364);
    }
    load(e1365, t, r75, n55) {
        const i = new Texture, a = new ImageLoader(this.manager);
        return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e1365, function(r) {
            i.image = r;
            const n = e1365.search(/\.jpe?g($|\?)/i) > 0 || 0 === e1365.search(/^data\:image\/jpeg/);
            i.format = n ? RGBFormat : RGBAFormat, i.needsUpdate = !0, void 0 !== t && t(i);
        }, r75, n55), i;
    }
}
class Curve {
    constructor(){
        this.type = "Curve", this.arcLengthDivisions = 200;
    }
    getPoint() {
        return console.warn("THREE.Curve: .getPoint() not implemented."), null;
    }
    getPointAt(e1366, t) {
        const r = this.getUtoTmapping(e1366);
        return this.getPoint(r, t);
    }
    getPoints(e1367 = 5) {
        const t = [];
        for(let r = 0; r <= e1367; r++)t.push(this.getPoint(r / e1367));
        return t;
    }
    getSpacedPoints(e1368 = 5) {
        const t = [];
        for(let r = 0; r <= e1368; r++)t.push(this.getPointAt(r / e1368));
        return t;
    }
    getLength() {
        const e1369 = this.getLengths();
        return e1369[e1369.length - 1];
    }
    getLengths(e1370 = this.arcLengthDivisions) {
        if (this.cacheArcLengths && this.cacheArcLengths.length === e1370 + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1;
        const t = [];
        let r, n = this.getPoint(0), i = 0;
        t.push(0);
        for(let a = 1; a <= e1370; a++)i += (r = this.getPoint(a / e1370)).distanceTo(n), t.push(i), n = r;
        return this.cacheArcLengths = t, t;
    }
    updateArcLengths() {
        this.needsUpdate = !0, this.getLengths();
    }
    getUtoTmapping(e1371, t) {
        const r = this.getLengths();
        let n = 0;
        const i = r.length;
        let a;
        a = t || e1371 * r[i - 1];
        let o, s = 0, l = i - 1;
        for(; s <= l;)if ((o = r[n = Math.floor(s + (l - s) / 2)] - a) < 0) s = n + 1;
        else {
            if (!(o > 0)) {
                l = n;
                break;
            }
            l = n - 1;
        }
        if (r[n = l] === a) return n / (i - 1);
        const c = r[n];
        return (n + (a - c) / (r[n + 1] - c)) / (i - 1);
    }
    getTangent(e1372, t) {
        let r = e1372 - 0.0001, n = e1372 + 0.0001;
        r < 0 && (r = 0), n > 1 && (n = 1);
        const i = this.getPoint(r), a = this.getPoint(n), o = t || (i.isVector2 ? new Vector2 : new Vector3);
        return o.copy(a).sub(i).normalize(), o;
    }
    getTangentAt(e1373, t) {
        const r = this.getUtoTmapping(e1373);
        return this.getTangent(r, t);
    }
    computeFrenetFrames(e1374, t) {
        const r = new Vector3, n = [], i = [], a = [], o = new Vector3, s = new Matrix4;
        for(let t125 = 0; t125 <= e1374; t125++){
            const r = t125 / e1374;
            n[t125] = this.getTangentAt(r, new Vector3), n[t125].normalize();
        }
        i[0] = new Vector3, a[0] = new Vector3;
        let l = Number.MAX_VALUE;
        const c = Math.abs(n[0].x), h = Math.abs(n[0].y), u = Math.abs(n[0].z);
        c <= l && (l = c, r.set(1, 0, 0)), h <= l && (l = h, r.set(0, 1, 0)), u <= l && r.set(0, 0, 1), o.crossVectors(n[0], r).normalize(), i[0].crossVectors(n[0], o), a[0].crossVectors(n[0], i[0]);
        for(let t126 = 1; t126 <= e1374; t126++){
            if (i[t126] = i[t126 - 1].clone(), a[t126] = a[t126 - 1].clone(), o.crossVectors(n[t126 - 1], n[t126]), o.length() > Number.EPSILON) {
                o.normalize();
                const e1375 = Math.acos(clamp(n[t126 - 1].dot(n[t126]), -1, 1));
                i[t126].applyMatrix4(s.makeRotationAxis(o, e1375));
            }
            a[t126].crossVectors(n[t126], i[t126]);
        }
        if (!0 === t) {
            let t = Math.acos(clamp(i[0].dot(i[e1374]), -1, 1));
            t /= e1374, n[0].dot(o.crossVectors(i[0], i[e1374])) > 0 && (t = -t);
            for(let r = 1; r <= e1374; r++)i[r].applyMatrix4(s.makeRotationAxis(n[r], t * r)), a[r].crossVectors(n[r], i[r]);
        }
        return {
            tangents: n,
            normals: i,
            binormals: a
        };
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    copy(e1376) {
        return this.arcLengthDivisions = e1376.arcLengthDivisions, this;
    }
    toJSON() {
        const e1377 = {
            metadata: {
                version: 4.5,
                type: "Curve",
                generator: "Curve.toJSON"
            }
        };
        return e1377.arcLengthDivisions = this.arcLengthDivisions, e1377.type = this.type, e1377;
    }
    fromJSON(e1378) {
        return this.arcLengthDivisions = e1378.arcLengthDivisions, this;
    }
}
class EllipseCurve extends Curve {
    constructor(e1379 = 0, t = 0, r = 1, n = 1, i = 0, a = 2 * Math.PI, o = !1, s = 0){
        super(), this.type = "EllipseCurve", this.aX = e1379, this.aY = t, this.xRadius = r, this.yRadius = n, this.aStartAngle = i, this.aEndAngle = a, this.aClockwise = o, this.aRotation = s;
    }
    getPoint(e1380, t) {
        const r = t || new Vector2, n = 2 * Math.PI;
        let i = this.aEndAngle - this.aStartAngle;
        const a = Math.abs(i) < Number.EPSILON;
        for(; i < 0;)i += n;
        for(; i > n;)i -= n;
        i < Number.EPSILON && (i = a ? 0 : n), !0 !== this.aClockwise || a || (i === n ? i = -n : i -= n);
        const o = this.aStartAngle + e1380 * i;
        let s = this.aX + this.xRadius * Math.cos(o), l = this.aY + this.yRadius * Math.sin(o);
        if (0 !== this.aRotation) {
            const e1381 = Math.cos(this.aRotation), t = Math.sin(this.aRotation), r = s - this.aX, n = l - this.aY;
            s = r * e1381 - n * t + this.aX, l = r * t + n * e1381 + this.aY;
        }
        return r.set(s, l);
    }
    copy(e1382) {
        return super.copy(e1382), this.aX = e1382.aX, this.aY = e1382.aY, this.xRadius = e1382.xRadius, this.yRadius = e1382.yRadius, this.aStartAngle = e1382.aStartAngle, this.aEndAngle = e1382.aEndAngle, this.aClockwise = e1382.aClockwise, this.aRotation = e1382.aRotation, this;
    }
    toJSON() {
        const e1383 = super.toJSON();
        return e1383.aX = this.aX, e1383.aY = this.aY, e1383.xRadius = this.xRadius, e1383.yRadius = this.yRadius, e1383.aStartAngle = this.aStartAngle, e1383.aEndAngle = this.aEndAngle, e1383.aClockwise = this.aClockwise, e1383.aRotation = this.aRotation, e1383;
    }
    fromJSON(e1384) {
        return super.fromJSON(e1384), this.aX = e1384.aX, this.aY = e1384.aY, this.xRadius = e1384.xRadius, this.yRadius = e1384.yRadius, this.aStartAngle = e1384.aStartAngle, this.aEndAngle = e1384.aEndAngle, this.aClockwise = e1384.aClockwise, this.aRotation = e1384.aRotation, this;
    }
}
EllipseCurve.prototype.isEllipseCurve = !0;
class ArcCurve extends EllipseCurve {
    constructor(e1385, t, r, n, i, a){
        super(e1385, t, r, r, n, i, a), this.type = "ArcCurve";
    }
}
function CubicPoly() {
    let e1386 = 0, t127 = 0, r76 = 0, n56 = 0;
    function i38(i, a, o, s) {
        e1386 = i, t127 = o, r76 = -3 * i + 3 * a - 2 * o - s, n56 = 2 * i - 2 * a + o + s;
    }
    return {
        initCatmullRom: function(e1387, t, r, n, a) {
            i38(t, r, a * (r - e1387), a * (n - t));
        },
        initNonuniformCatmullRom: function(e1388, t, r, n, a, o, s) {
            let l = (t - e1388) / a - (r - e1388) / (a + o) + (r - t) / o, c = (r - t) / o - (n - t) / (o + s) + (n - r) / s;
            i38(t, r, l *= o, c *= o);
        },
        calc: function(i) {
            const a = i * i;
            return e1386 + t127 * i + r76 * a + n56 * (a * i);
        }
    };
}
ArcCurve.prototype.isArcCurve = !0;
const tmp = new Vector3, px = new CubicPoly, py = new CubicPoly, pz = new CubicPoly;
class CatmullRomCurve3 extends Curve {
    constructor(e1389 = [], t = !1, r = "centripetal", n = 0.5){
        super(), this.type = "CatmullRomCurve3", this.points = e1389, this.closed = t, this.curveType = r, this.tension = n;
    }
    getPoint(e1390, t = new Vector3) {
        const r = t, n = this.points, i = n.length, a = (i - (this.closed ? 0 : 1)) * e1390;
        let o, s, l = Math.floor(a), c = a - l;
        this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / i) + 1) * i : 0 === c && l === i - 1 && (l = i - 2, c = 1), this.closed || l > 0 ? o = n[(l - 1) % i] : (tmp.subVectors(n[0], n[1]).add(n[0]), o = tmp);
        const h = n[l % i], u = n[(l + 1) % i];
        if (this.closed || l + 2 < i ? s = n[(l + 2) % i] : (tmp.subVectors(n[i - 1], n[i - 2]).add(n[i - 1]), s = tmp), "centripetal" === this.curveType || "chordal" === this.curveType) {
            const e1391 = "chordal" === this.curveType ? 0.5 : 0.25;
            let t = Math.pow(o.distanceToSquared(h), e1391), r = Math.pow(h.distanceToSquared(u), e1391), n = Math.pow(u.distanceToSquared(s), e1391);
            r < 0.0001 && (r = 1), t < 0.0001 && (t = r), n < 0.0001 && (n = r), px.initNonuniformCatmullRom(o.x, h.x, u.x, s.x, t, r, n), py.initNonuniformCatmullRom(o.y, h.y, u.y, s.y, t, r, n), pz.initNonuniformCatmullRom(o.z, h.z, u.z, s.z, t, r, n);
        } else "catmullrom" === this.curveType && (px.initCatmullRom(o.x, h.x, u.x, s.x, this.tension), py.initCatmullRom(o.y, h.y, u.y, s.y, this.tension), pz.initCatmullRom(o.z, h.z, u.z, s.z, this.tension));
        return r.set(px.calc(c), py.calc(c), pz.calc(c)), r;
    }
    copy(e1392) {
        super.copy(e1392), this.points = [];
        for(let t = 0, r = e1392.points.length; t < r; t++){
            const r = e1392.points[t];
            this.points.push(r.clone());
        }
        return this.closed = e1392.closed, this.curveType = e1392.curveType, this.tension = e1392.tension, this;
    }
    toJSON() {
        const e1393 = super.toJSON();
        e1393.points = [];
        for(let t = 0, r = this.points.length; t < r; t++){
            const r = this.points[t];
            e1393.points.push(r.toArray());
        }
        return e1393.closed = this.closed, e1393.curveType = this.curveType, e1393.tension = this.tension, e1393;
    }
    fromJSON(e1394) {
        super.fromJSON(e1394), this.points = [];
        for(let t = 0, r = e1394.points.length; t < r; t++){
            const r = e1394.points[t];
            this.points.push((new Vector3).fromArray(r));
        }
        return this.closed = e1394.closed, this.curveType = e1394.curveType, this.tension = e1394.tension, this;
    }
}
function CatmullRom(e1395, t, r, n, i) {
    const a = 0.5 * (n - t), o = 0.5 * (i - r), s = e1395 * e1395;
    return (2 * r - 2 * n + a + o) * (e1395 * s) + (-3 * r + 3 * n - 2 * a - o) * s + a * e1395 + r;
}
function QuadraticBezierP0(e1396, t) {
    const r = 1 - e1396;
    return r * r * t;
}
function QuadraticBezierP1(e1397, t) {
    return 2 * (1 - e1397) * e1397 * t;
}
function QuadraticBezierP2(e1398, t) {
    return e1398 * e1398 * t;
}
function QuadraticBezier(e1399, t, r, n) {
    return QuadraticBezierP0(e1399, t) + QuadraticBezierP1(e1399, r) + QuadraticBezierP2(e1399, n);
}
function CubicBezierP0(e1400, t) {
    const r = 1 - e1400;
    return r * r * r * t;
}
function CubicBezierP1(e1401, t) {
    const r = 1 - e1401;
    return 3 * r * r * e1401 * t;
}
function CubicBezierP2(e1402, t) {
    return 3 * (1 - e1402) * e1402 * e1402 * t;
}
function CubicBezierP3(e1403, t) {
    return e1403 * e1403 * e1403 * t;
}
function CubicBezier(e1404, t, r, n, i) {
    return CubicBezierP0(e1404, t) + CubicBezierP1(e1404, r) + CubicBezierP2(e1404, n) + CubicBezierP3(e1404, i);
}
CatmullRomCurve3.prototype.isCatmullRomCurve3 = !0;
class CubicBezierCurve extends Curve {
    constructor(e1405 = new Vector2, t = new Vector2, r = new Vector2, n = new Vector2){
        super(), this.type = "CubicBezierCurve", this.v0 = e1405, this.v1 = t, this.v2 = r, this.v3 = n;
    }
    getPoint(e1406, t = new Vector2) {
        const r = t, n = this.v0, i = this.v1, a = this.v2, o = this.v3;
        return r.set(CubicBezier(e1406, n.x, i.x, a.x, o.x), CubicBezier(e1406, n.y, i.y, a.y, o.y)), r;
    }
    copy(e1407) {
        return super.copy(e1407), this.v0.copy(e1407.v0), this.v1.copy(e1407.v1), this.v2.copy(e1407.v2), this.v3.copy(e1407.v3), this;
    }
    toJSON() {
        const e1408 = super.toJSON();
        return e1408.v0 = this.v0.toArray(), e1408.v1 = this.v1.toArray(), e1408.v2 = this.v2.toArray(), e1408.v3 = this.v3.toArray(), e1408;
    }
    fromJSON(e1409) {
        return super.fromJSON(e1409), this.v0.fromArray(e1409.v0), this.v1.fromArray(e1409.v1), this.v2.fromArray(e1409.v2), this.v3.fromArray(e1409.v3), this;
    }
}
CubicBezierCurve.prototype.isCubicBezierCurve = !0;
class CubicBezierCurve3 extends Curve {
    constructor(e1410 = new Vector3, t = new Vector3, r = new Vector3, n = new Vector3){
        super(), this.type = "CubicBezierCurve3", this.v0 = e1410, this.v1 = t, this.v2 = r, this.v3 = n;
    }
    getPoint(e1411, t = new Vector3) {
        const r = t, n = this.v0, i = this.v1, a = this.v2, o = this.v3;
        return r.set(CubicBezier(e1411, n.x, i.x, a.x, o.x), CubicBezier(e1411, n.y, i.y, a.y, o.y), CubicBezier(e1411, n.z, i.z, a.z, o.z)), r;
    }
    copy(e1412) {
        return super.copy(e1412), this.v0.copy(e1412.v0), this.v1.copy(e1412.v1), this.v2.copy(e1412.v2), this.v3.copy(e1412.v3), this;
    }
    toJSON() {
        const e1413 = super.toJSON();
        return e1413.v0 = this.v0.toArray(), e1413.v1 = this.v1.toArray(), e1413.v2 = this.v2.toArray(), e1413.v3 = this.v3.toArray(), e1413;
    }
    fromJSON(e1414) {
        return super.fromJSON(e1414), this.v0.fromArray(e1414.v0), this.v1.fromArray(e1414.v1), this.v2.fromArray(e1414.v2), this.v3.fromArray(e1414.v3), this;
    }
}
CubicBezierCurve3.prototype.isCubicBezierCurve3 = !0;
class LineCurve extends Curve {
    constructor(e1415 = new Vector2, t = new Vector2){
        super(), this.type = "LineCurve", this.v1 = e1415, this.v2 = t;
    }
    getPoint(e1416, t = new Vector2) {
        const r = t;
        return 1 === e1416 ? r.copy(this.v2) : (r.copy(this.v2).sub(this.v1), r.multiplyScalar(e1416).add(this.v1)), r;
    }
    getPointAt(e1417, t) {
        return this.getPoint(e1417, t);
    }
    getTangent(e, t) {
        const r = t || new Vector2;
        return r.copy(this.v2).sub(this.v1).normalize(), r;
    }
    copy(e1418) {
        return super.copy(e1418), this.v1.copy(e1418.v1), this.v2.copy(e1418.v2), this;
    }
    toJSON() {
        const e1419 = super.toJSON();
        return e1419.v1 = this.v1.toArray(), e1419.v2 = this.v2.toArray(), e1419;
    }
    fromJSON(e1420) {
        return super.fromJSON(e1420), this.v1.fromArray(e1420.v1), this.v2.fromArray(e1420.v2), this;
    }
}
LineCurve.prototype.isLineCurve = !0;
class LineCurve3 extends Curve {
    constructor(e1421 = new Vector3, t = new Vector3){
        super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = e1421, this.v2 = t;
    }
    getPoint(e1422, t = new Vector3) {
        const r = t;
        return 1 === e1422 ? r.copy(this.v2) : (r.copy(this.v2).sub(this.v1), r.multiplyScalar(e1422).add(this.v1)), r;
    }
    getPointAt(e1423, t) {
        return this.getPoint(e1423, t);
    }
    copy(e1424) {
        return super.copy(e1424), this.v1.copy(e1424.v1), this.v2.copy(e1424.v2), this;
    }
    toJSON() {
        const e1425 = super.toJSON();
        return e1425.v1 = this.v1.toArray(), e1425.v2 = this.v2.toArray(), e1425;
    }
    fromJSON(e1426) {
        return super.fromJSON(e1426), this.v1.fromArray(e1426.v1), this.v2.fromArray(e1426.v2), this;
    }
}
class QuadraticBezierCurve extends Curve {
    constructor(e1427 = new Vector2, t = new Vector2, r = new Vector2){
        super(), this.type = "QuadraticBezierCurve", this.v0 = e1427, this.v1 = t, this.v2 = r;
    }
    getPoint(e1428, t = new Vector2) {
        const r = t, n = this.v0, i = this.v1, a = this.v2;
        return r.set(QuadraticBezier(e1428, n.x, i.x, a.x), QuadraticBezier(e1428, n.y, i.y, a.y)), r;
    }
    copy(e1429) {
        return super.copy(e1429), this.v0.copy(e1429.v0), this.v1.copy(e1429.v1), this.v2.copy(e1429.v2), this;
    }
    toJSON() {
        const e1430 = super.toJSON();
        return e1430.v0 = this.v0.toArray(), e1430.v1 = this.v1.toArray(), e1430.v2 = this.v2.toArray(), e1430;
    }
    fromJSON(e1431) {
        return super.fromJSON(e1431), this.v0.fromArray(e1431.v0), this.v1.fromArray(e1431.v1), this.v2.fromArray(e1431.v2), this;
    }
}
QuadraticBezierCurve.prototype.isQuadraticBezierCurve = !0;
class QuadraticBezierCurve3 extends Curve {
    constructor(e1432 = new Vector3, t = new Vector3, r = new Vector3){
        super(), this.type = "QuadraticBezierCurve3", this.v0 = e1432, this.v1 = t, this.v2 = r;
    }
    getPoint(e1433, t = new Vector3) {
        const r = t, n = this.v0, i = this.v1, a = this.v2;
        return r.set(QuadraticBezier(e1433, n.x, i.x, a.x), QuadraticBezier(e1433, n.y, i.y, a.y), QuadraticBezier(e1433, n.z, i.z, a.z)), r;
    }
    copy(e1434) {
        return super.copy(e1434), this.v0.copy(e1434.v0), this.v1.copy(e1434.v1), this.v2.copy(e1434.v2), this;
    }
    toJSON() {
        const e1435 = super.toJSON();
        return e1435.v0 = this.v0.toArray(), e1435.v1 = this.v1.toArray(), e1435.v2 = this.v2.toArray(), e1435;
    }
    fromJSON(e1436) {
        return super.fromJSON(e1436), this.v0.fromArray(e1436.v0), this.v1.fromArray(e1436.v1), this.v2.fromArray(e1436.v2), this;
    }
}
QuadraticBezierCurve3.prototype.isQuadraticBezierCurve3 = !0;
class SplineCurve extends Curve {
    constructor(e1437 = []){
        super(), this.type = "SplineCurve", this.points = e1437;
    }
    getPoint(e1438, t = new Vector2) {
        const r = t, n = this.points, i = (n.length - 1) * e1438, a = Math.floor(i), o = i - a, s = n[0 === a ? a : a - 1], l = n[a], c = n[a > n.length - 2 ? n.length - 1 : a + 1], h = n[a > n.length - 3 ? n.length - 1 : a + 2];
        return r.set(CatmullRom(o, s.x, l.x, c.x, h.x), CatmullRom(o, s.y, l.y, c.y, h.y)), r;
    }
    copy(e1439) {
        super.copy(e1439), this.points = [];
        for(let t = 0, r = e1439.points.length; t < r; t++){
            const r = e1439.points[t];
            this.points.push(r.clone());
        }
        return this;
    }
    toJSON() {
        const e1440 = super.toJSON();
        e1440.points = [];
        for(let t = 0, r = this.points.length; t < r; t++){
            const r = this.points[t];
            e1440.points.push(r.toArray());
        }
        return e1440;
    }
    fromJSON(e1441) {
        super.fromJSON(e1441), this.points = [];
        for(let t = 0, r = e1441.points.length; t < r; t++){
            const r = e1441.points[t];
            this.points.push((new Vector2).fromArray(r));
        }
        return this;
    }
}
SplineCurve.prototype.isSplineCurve = !0;
var Curves = Object.freeze({
    __proto__: null,
    ArcCurve: ArcCurve,
    CatmullRomCurve3: CatmullRomCurve3,
    CubicBezierCurve: CubicBezierCurve,
    CubicBezierCurve3: CubicBezierCurve3,
    EllipseCurve: EllipseCurve,
    LineCurve: LineCurve,
    LineCurve3: LineCurve3,
    QuadraticBezierCurve: QuadraticBezierCurve,
    QuadraticBezierCurve3: QuadraticBezierCurve3,
    SplineCurve: SplineCurve
});
class CurvePath extends Curve {
    constructor(){
        super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
    }
    add(e1442) {
        this.curves.push(e1442);
    }
    closePath() {
        const e1443 = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
        e1443.equals(t) || this.curves.push(new LineCurve(t, e1443));
    }
    getPoint(e1444) {
        const t = e1444 * this.getLength(), r = this.getCurveLengths();
        let n = 0;
        for(; n < r.length;){
            if (r[n] >= t) {
                const e1445 = r[n] - t, i = this.curves[n], a = i.getLength(), o = 0 === a ? 0 : 1 - e1445 / a;
                return i.getPointAt(o);
            }
            n++;
        }
        return null;
    }
    getLength() {
        const e1446 = this.getCurveLengths();
        return e1446[e1446.length - 1];
    }
    updateArcLengths() {
        this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
    }
    getCurveLengths() {
        if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
        const e1447 = [];
        let t = 0;
        for(let r = 0, n = this.curves.length; r < n; r++)t += this.curves[r].getLength(), e1447.push(t);
        return this.cacheLengths = e1447, e1447;
    }
    getSpacedPoints(e1448 = 40) {
        const t = [];
        for(let r = 0; r <= e1448; r++)t.push(this.getPoint(r / e1448));
        return this.autoClose && t.push(t[0]), t;
    }
    getPoints(e1450 = 12) {
        const t = [];
        let r;
        for(let n = 0, i = this.curves; n < i.length; n++){
            const a = i[n], o = a && a.isEllipseCurve ? 2 * e1450 : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? e1450 * a.points.length : e1450, s = a.getPoints(o);
            for(let e1449 = 0; e1449 < s.length; e1449++){
                const n = s[e1449];
                r && r.equals(n) || (t.push(n), r = n);
            }
        }
        return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
    }
    copy(e1451) {
        super.copy(e1451), this.curves = [];
        for(let t = 0, r = e1451.curves.length; t < r; t++){
            const r = e1451.curves[t];
            this.curves.push(r.clone());
        }
        return this.autoClose = e1451.autoClose, this;
    }
    toJSON() {
        const e1452 = super.toJSON();
        e1452.autoClose = this.autoClose, e1452.curves = [];
        for(let t = 0, r = this.curves.length; t < r; t++){
            const r = this.curves[t];
            e1452.curves.push(r.toJSON());
        }
        return e1452;
    }
    fromJSON(e1453) {
        super.fromJSON(e1453), this.autoClose = e1453.autoClose, this.curves = [];
        for(let t = 0, r = e1453.curves.length; t < r; t++){
            const r = e1453.curves[t];
            this.curves.push((new Curves[r.type]).fromJSON(r));
        }
        return this;
    }
}
class Path extends CurvePath {
    constructor(e1454){
        super(), this.type = "Path", this.currentPoint = new Vector2, e1454 && this.setFromPoints(e1454);
    }
    setFromPoints(e1455) {
        this.moveTo(e1455[0].x, e1455[0].y);
        for(let t = 1, r = e1455.length; t < r; t++)this.lineTo(e1455[t].x, e1455[t].y);
        return this;
    }
    moveTo(e1456, t) {
        return this.currentPoint.set(e1456, t), this;
    }
    lineTo(e1457, t) {
        const r = new LineCurve(this.currentPoint.clone(), new Vector2(e1457, t));
        return this.curves.push(r), this.currentPoint.set(e1457, t), this;
    }
    quadraticCurveTo(e1458, t, r, n) {
        const i = new QuadraticBezierCurve(this.currentPoint.clone(), new Vector2(e1458, t), new Vector2(r, n));
        return this.curves.push(i), this.currentPoint.set(r, n), this;
    }
    bezierCurveTo(e1459, t, r, n, i, a) {
        const o = new CubicBezierCurve(this.currentPoint.clone(), new Vector2(e1459, t), new Vector2(r, n), new Vector2(i, a));
        return this.curves.push(o), this.currentPoint.set(i, a), this;
    }
    splineThru(e1460) {
        const t = [
            this.currentPoint.clone()
        ].concat(e1460), r = new SplineCurve(t);
        return this.curves.push(r), this.currentPoint.copy(e1460[e1460.length - 1]), this;
    }
    arc(e1461, t, r, n, i, a) {
        const o = this.currentPoint.x, s = this.currentPoint.y;
        return this.absarc(e1461 + o, t + s, r, n, i, a), this;
    }
    absarc(e1462, t, r, n, i, a) {
        return this.absellipse(e1462, t, r, r, n, i, a), this;
    }
    ellipse(e1463, t, r, n, i, a, o, s) {
        const l = this.currentPoint.x, c = this.currentPoint.y;
        return this.absellipse(e1463 + l, t + c, r, n, i, a, o, s), this;
    }
    absellipse(e1464, t, r, n, i, a, o, s) {
        const l = new EllipseCurve(e1464, t, r, n, i, a, o, s);
        if (this.curves.length > 0) {
            const e1465 = l.getPoint(0);
            e1465.equals(this.currentPoint) || this.lineTo(e1465.x, e1465.y);
        }
        this.curves.push(l);
        const c = l.getPoint(1);
        return this.currentPoint.copy(c), this;
    }
    copy(e1466) {
        return super.copy(e1466), this.currentPoint.copy(e1466.currentPoint), this;
    }
    toJSON() {
        const e1467 = super.toJSON();
        return e1467.currentPoint = this.currentPoint.toArray(), e1467;
    }
    fromJSON(e1468) {
        return super.fromJSON(e1468), this.currentPoint.fromArray(e1468.currentPoint), this;
    }
}
class Shape extends Path {
    constructor(e1469){
        super(e1469), this.uuid = generateUUID(), this.type = "Shape", this.holes = [];
    }
    getPointsHoles(e1470) {
        const t = [];
        for(let r = 0, n = this.holes.length; r < n; r++)t[r] = this.holes[r].getPoints(e1470);
        return t;
    }
    extractPoints(e1471) {
        return {
            shape: this.getPoints(e1471),
            holes: this.getPointsHoles(e1471)
        };
    }
    copy(e1472) {
        super.copy(e1472), this.holes = [];
        for(let t = 0, r = e1472.holes.length; t < r; t++){
            const r = e1472.holes[t];
            this.holes.push(r.clone());
        }
        return this;
    }
    toJSON() {
        const e1473 = super.toJSON();
        e1473.uuid = this.uuid, e1473.holes = [];
        for(let t = 0, r = this.holes.length; t < r; t++){
            const r = this.holes[t];
            e1473.holes.push(r.toJSON());
        }
        return e1473;
    }
    fromJSON(e1474) {
        super.fromJSON(e1474), this.uuid = e1474.uuid, this.holes = [];
        for(let t = 0, r = e1474.holes.length; t < r; t++){
            const r = e1474.holes[t];
            this.holes.push((new Path).fromJSON(r));
        }
        return this;
    }
}
class Light extends Object3D {
    constructor(e1475, t = 1){
        super(), this.type = "Light", this.color = new Color(e1475), this.intensity = t;
    }
    dispose() {}
    copy(e1476) {
        return super.copy(e1476), this.color.copy(e1476.color), this.intensity = e1476.intensity, this;
    }
    toJSON(e1477) {
        const t = super.toJSON(e1477);
        return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.penumbra && (t.object.penumbra = this.penumbra), void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()), t;
    }
}
Light.prototype.isLight = !0;
class HemisphereLight extends Light {
    constructor(e1478, t, r){
        super(e1478, r), this.type = "HemisphereLight", this.position.copy(Object3D.DefaultUp), this.updateMatrix(), this.groundColor = new Color(t);
    }
    copy(e1479) {
        return Light.prototype.copy.call(this, e1479), this.groundColor.copy(e1479.groundColor), this;
    }
}
HemisphereLight.prototype.isHemisphereLight = !0;
const _projScreenMatrix$1 = new Matrix4, _lightPositionWorld$1 = new Vector3, _lookTarget$1 = new Vector3;
class LightShadow {
    constructor(e1480){
        this.camera = e1480, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new Vector2(512, 512), this.map = null, this.mapPass = null, this.matrix = new Matrix4, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Frustum, this._frameExtents = new Vector2(1, 1), this._viewportCount = 1, this._viewports = [
            new Vector4(0, 0, 1, 1)
        ];
    }
    getViewportCount() {
        return this._viewportCount;
    }
    getFrustum() {
        return this._frustum;
    }
    updateMatrices(e1481) {
        const t = this.camera, r = this.matrix;
        _lightPositionWorld$1.setFromMatrixPosition(e1481.matrixWorld), t.position.copy(_lightPositionWorld$1), _lookTarget$1.setFromMatrixPosition(e1481.target.matrixWorld), t.lookAt(_lookTarget$1), t.updateMatrixWorld(), _projScreenMatrix$1.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(_projScreenMatrix$1), r.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), r.multiply(t.projectionMatrix), r.multiply(t.matrixWorldInverse);
    }
    getViewport(e1482) {
        return this._viewports[e1482];
    }
    getFrameExtents() {
        return this._frameExtents;
    }
    dispose() {
        this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(e1483) {
        return this.camera = e1483.camera.clone(), this.bias = e1483.bias, this.radius = e1483.radius, this.mapSize.copy(e1483.mapSize), this;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    toJSON() {
        const e1484 = {};
        return 0 !== this.bias && (e1484.bias = this.bias), 0 !== this.normalBias && (e1484.normalBias = this.normalBias), 1 !== this.radius && (e1484.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (e1484.mapSize = this.mapSize.toArray()), e1484.camera = this.camera.toJSON(!1).object, delete e1484.camera.matrix, e1484;
    }
}
class SpotLightShadow extends LightShadow {
    constructor(){
        super(new PerspectiveCamera(50, 1, 0.5, 500)), this.focus = 1;
    }
    updateMatrices(e1485) {
        const t = this.camera, r = 2 * RAD2DEG * e1485.angle * this.focus, n = this.mapSize.width / this.mapSize.height, i = e1485.distance || t.far;
        r === t.fov && n === t.aspect && i === t.far || (t.fov = r, t.aspect = n, t.far = i, t.updateProjectionMatrix()), super.updateMatrices(e1485);
    }
    copy(e1486) {
        return super.copy(e1486), this.focus = e1486.focus, this;
    }
}
SpotLightShadow.prototype.isSpotLightShadow = !0;
class SpotLight extends Light {
    constructor(e1487, t, r = 0, n = Math.PI / 3, i = 0, a = 1){
        super(e1487, t), this.type = "SpotLight", this.position.copy(Object3D.DefaultUp), this.updateMatrix(), this.target = new Object3D, this.distance = r, this.angle = n, this.penumbra = i, this.decay = a, this.shadow = new SpotLightShadow;
    }
    get power() {
        return this.intensity * Math.PI;
    }
    set power(e1488) {
        this.intensity = e1488 / Math.PI;
    }
    dispose() {
        this.shadow.dispose();
    }
    copy(e1489) {
        return super.copy(e1489), this.distance = e1489.distance, this.angle = e1489.angle, this.penumbra = e1489.penumbra, this.decay = e1489.decay, this.target = e1489.target.clone(), this.shadow = e1489.shadow.clone(), this;
    }
}
SpotLight.prototype.isSpotLight = !0;
const _projScreenMatrix = new Matrix4, _lightPositionWorld = new Vector3, _lookTarget = new Vector3;
class PointLightShadow extends LightShadow {
    constructor(){
        super(new PerspectiveCamera(90, 1, 0.5, 500)), this._frameExtents = new Vector2(4, 2), this._viewportCount = 6, this._viewports = [
            new Vector4(2, 1, 1, 1),
            new Vector4(0, 1, 1, 1),
            new Vector4(3, 1, 1, 1),
            new Vector4(1, 1, 1, 1),
            new Vector4(3, 0, 1, 1),
            new Vector4(1, 0, 1, 1)
        ], this._cubeDirections = [
            new Vector3(1, 0, 0),
            new Vector3(-1, 0, 0),
            new Vector3(0, 0, 1),
            new Vector3(0, 0, -1),
            new Vector3(0, 1, 0),
            new Vector3(0, -1, 0)
        ], this._cubeUps = [
            new Vector3(0, 1, 0),
            new Vector3(0, 1, 0),
            new Vector3(0, 1, 0),
            new Vector3(0, 1, 0),
            new Vector3(0, 0, 1),
            new Vector3(0, 0, -1)
        ];
    }
    updateMatrices(e1490, t = 0) {
        const r = this.camera, n = this.matrix, i = e1490.distance || r.far;
        i !== r.far && (r.far = i, r.updateProjectionMatrix()), _lightPositionWorld.setFromMatrixPosition(e1490.matrixWorld), r.position.copy(_lightPositionWorld), _lookTarget.copy(r.position), _lookTarget.add(this._cubeDirections[t]), r.up.copy(this._cubeUps[t]), r.lookAt(_lookTarget), r.updateMatrixWorld(), n.makeTranslation(-_lightPositionWorld.x, -_lightPositionWorld.y, -_lightPositionWorld.z), _projScreenMatrix.multiplyMatrices(r.projectionMatrix, r.matrixWorldInverse), this._frustum.setFromProjectionMatrix(_projScreenMatrix);
    }
}
PointLightShadow.prototype.isPointLightShadow = !0;
class PointLight extends Light {
    constructor(e1491, t, r = 0, n = 1){
        super(e1491, t), this.type = "PointLight", this.distance = r, this.decay = n, this.shadow = new PointLightShadow;
    }
    get power() {
        return 4 * this.intensity * Math.PI;
    }
    set power(e1492) {
        this.intensity = e1492 / (4 * Math.PI);
    }
    dispose() {
        this.shadow.dispose();
    }
    copy(e1493) {
        return super.copy(e1493), this.distance = e1493.distance, this.decay = e1493.decay, this.shadow = e1493.shadow.clone(), this;
    }
}
PointLight.prototype.isPointLight = !0;
class OrthographicCamera extends Camera {
    constructor(e1494 = -1, t = 1, r = 1, n = -1, i = 0.1, a = 2000){
        super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e1494, this.right = t, this.top = r, this.bottom = n, this.near = i, this.far = a, this.updateProjectionMatrix();
    }
    copy(e1495, t) {
        return super.copy(e1495, t), this.left = e1495.left, this.right = e1495.right, this.top = e1495.top, this.bottom = e1495.bottom, this.near = e1495.near, this.far = e1495.far, this.zoom = e1495.zoom, this.view = null === e1495.view ? null : Object.assign({}, e1495.view), this;
    }
    setViewOffset(e1496, t, r, n, i, a) {
        null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = e1496, this.view.fullHeight = t, this.view.offsetX = r, this.view.offsetY = n, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
    }
    clearViewOffset() {
        null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        const e1497 = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), r = (this.right + this.left) / 2, n = (this.top + this.bottom) / 2;
        let i = r - e1497, a = r + e1497, o = n + t, s = n - t;
        if (null !== this.view && this.view.enabled) {
            const e1498 = (this.right - this.left) / this.view.fullWidth / this.zoom, t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            a = (i += e1498 * this.view.offsetX) + e1498 * this.view.width, s = (o -= t * this.view.offsetY) - t * this.view.height;
        }
        this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e1499) {
        const t = super.toJSON(e1499);
        return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null !== this.view && (t.object.view = Object.assign({}, this.view)), t;
    }
}
OrthographicCamera.prototype.isOrthographicCamera = !0;
class DirectionalLightShadow extends LightShadow {
    constructor(){
        super(new OrthographicCamera(-5, 5, 5, -5, 0.5, 500));
    }
}
DirectionalLightShadow.prototype.isDirectionalLightShadow = !0;
class DirectionalLight extends Light {
    constructor(e1500, t){
        super(e1500, t), this.type = "DirectionalLight", this.position.copy(Object3D.DefaultUp), this.updateMatrix(), this.target = new Object3D, this.shadow = new DirectionalLightShadow;
    }
    dispose() {
        this.shadow.dispose();
    }
    copy(e1501) {
        return super.copy(e1501), this.target = e1501.target.clone(), this.shadow = e1501.shadow.clone(), this;
    }
}
DirectionalLight.prototype.isDirectionalLight = !0;
class AmbientLight extends Light {
    constructor(e1502, t){
        super(e1502, t), this.type = "AmbientLight";
    }
}
AmbientLight.prototype.isAmbientLight = !0;
class RectAreaLight extends Light {
    constructor(e1503, t, r = 10, n = 10){
        super(e1503, t), this.type = "RectAreaLight", this.width = r, this.height = n;
    }
    copy(e1504) {
        return super.copy(e1504), this.width = e1504.width, this.height = e1504.height, this;
    }
    toJSON(e1505) {
        const t = super.toJSON(e1505);
        return t.object.width = this.width, t.object.height = this.height, t;
    }
}
RectAreaLight.prototype.isRectAreaLight = !0;
class SphericalHarmonics3 {
    constructor(){
        this.coefficients = [];
        for(let e1506 = 0; e1506 < 9; e1506++)this.coefficients.push(new Vector3);
    }
    set(e1507) {
        for(let t = 0; t < 9; t++)this.coefficients[t].copy(e1507[t]);
        return this;
    }
    zero() {
        for(let e1508 = 0; e1508 < 9; e1508++)this.coefficients[e1508].set(0, 0, 0);
        return this;
    }
    getAt(e1509, t) {
        const r = e1509.x, n = e1509.y, i = e1509.z, a = this.coefficients;
        return t.copy(a[0]).multiplyScalar(0.282095), t.addScaledVector(a[1], 0.488603 * n), t.addScaledVector(a[2], 0.488603 * i), t.addScaledVector(a[3], 0.488603 * r), t.addScaledVector(a[4], r * n * 1.092548), t.addScaledVector(a[5], n * i * 1.092548), t.addScaledVector(a[6], 0.315392 * (3 * i * i - 1)), t.addScaledVector(a[7], r * i * 1.092548), t.addScaledVector(a[8], 0.546274 * (r * r - n * n)), t;
    }
    getIrradianceAt(e1510, t) {
        const r = e1510.x, n = e1510.y, i = e1510.z, a = this.coefficients;
        return t.copy(a[0]).multiplyScalar(0.886227), t.addScaledVector(a[1], 1.023328 * n), t.addScaledVector(a[2], 1.023328 * i), t.addScaledVector(a[3], 1.023328 * r), t.addScaledVector(a[4], 0.858086 * r * n), t.addScaledVector(a[5], 0.858086 * n * i), t.addScaledVector(a[6], 0.743125 * i * i - 0.247708), t.addScaledVector(a[7], 0.858086 * r * i), t.addScaledVector(a[8], 0.429043 * (r * r - n * n)), t;
    }
    add(e1511) {
        for(let t = 0; t < 9; t++)this.coefficients[t].add(e1511.coefficients[t]);
        return this;
    }
    addScaledSH(e1512, t) {
        for(let r = 0; r < 9; r++)this.coefficients[r].addScaledVector(e1512.coefficients[r], t);
        return this;
    }
    scale(e1513) {
        for(let t = 0; t < 9; t++)this.coefficients[t].multiplyScalar(e1513);
        return this;
    }
    lerp(e1514, t) {
        for(let r = 0; r < 9; r++)this.coefficients[r].lerp(e1514.coefficients[r], t);
        return this;
    }
    equals(e1515) {
        for(let t = 0; t < 9; t++)if (!this.coefficients[t].equals(e1515.coefficients[t])) return !1;
        return !0;
    }
    copy(e1516) {
        return this.set(e1516.coefficients);
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    fromArray(e1517, t = 0) {
        const r = this.coefficients;
        for(let n = 0; n < 9; n++)r[n].fromArray(e1517, t + 3 * n);
        return this;
    }
    toArray(e1518 = [], t = 0) {
        const r = this.coefficients;
        for(let n = 0; n < 9; n++)r[n].toArray(e1518, t + 3 * n);
        return e1518;
    }
    static getBasisAt(e1519, t) {
        const r = e1519.x, n = e1519.y, i = e1519.z;
        t[0] = 0.282095, t[1] = 0.488603 * n, t[2] = 0.488603 * i, t[3] = 0.488603 * r, t[4] = 1.092548 * r * n, t[5] = 1.092548 * n * i, t[6] = 0.315392 * (3 * i * i - 1), t[7] = 1.092548 * r * i, t[8] = 0.546274 * (r * r - n * n);
    }
}
SphericalHarmonics3.prototype.isSphericalHarmonics3 = !0;
class LightProbe extends Light {
    constructor(e1520 = new SphericalHarmonics3, t = 1){
        super(void 0, t), this.sh = e1520;
    }
    copy(e1521) {
        return super.copy(e1521), this.sh.copy(e1521.sh), this;
    }
    fromJSON(e1522) {
        return this.intensity = e1522.intensity, this.sh.fromArray(e1522.sh), this;
    }
    toJSON(e1523) {
        const t = super.toJSON(e1523);
        return t.object.sh = this.sh.toArray(), t;
    }
}
LightProbe.prototype.isLightProbe = !0;
class MaterialLoader extends Loader {
    constructor(e1524){
        super(e1524), this.textures = {};
    }
    load(e1525, t128, r77, n) {
        const i = this, a = new FileLoader(i.manager);
        a.setPath(i.path), a.setRequestHeader(i.requestHeader), a.setWithCredentials(i.withCredentials), a.load(e1525, function(r) {
            try {
                t128(i.parse(JSON.parse(r)));
            } catch (t) {
                n ? n(t) : console.error(t), i.manager.itemError(e1525);
            }
        }, r77, n);
    }
    parse(e1526) {
        const t = this.textures;
        function r(e1527) {
            return void 0 === t[e1527] && console.warn("THREE.MaterialLoader: Undefined texture", e1527), t[e1527];
        }
        const n = new Materials[e1526.type];
        if (void 0 !== e1526.uuid && (n.uuid = e1526.uuid), void 0 !== e1526.name && (n.name = e1526.name), void 0 !== e1526.color && void 0 !== n.color && n.color.setHex(e1526.color), void 0 !== e1526.roughness && (n.roughness = e1526.roughness), void 0 !== e1526.metalness && (n.metalness = e1526.metalness), void 0 !== e1526.sheen && (n.sheen = (new Color).setHex(e1526.sheen)), void 0 !== e1526.emissive && void 0 !== n.emissive && n.emissive.setHex(e1526.emissive), void 0 !== e1526.specular && void 0 !== n.specular && n.specular.setHex(e1526.specular), void 0 !== e1526.shininess && (n.shininess = e1526.shininess), void 0 !== e1526.clearcoat && (n.clearcoat = e1526.clearcoat), void 0 !== e1526.clearcoatRoughness && (n.clearcoatRoughness = e1526.clearcoatRoughness), void 0 !== e1526.fog && (n.fog = e1526.fog), void 0 !== e1526.flatShading && (n.flatShading = e1526.flatShading), void 0 !== e1526.blending && (n.blending = e1526.blending), void 0 !== e1526.combine && (n.combine = e1526.combine), void 0 !== e1526.side && (n.side = e1526.side), void 0 !== e1526.shadowSide && (n.shadowSide = e1526.shadowSide), void 0 !== e1526.opacity && (n.opacity = e1526.opacity), void 0 !== e1526.transparent && (n.transparent = e1526.transparent), void 0 !== e1526.alphaTest && (n.alphaTest = e1526.alphaTest), void 0 !== e1526.depthTest && (n.depthTest = e1526.depthTest), void 0 !== e1526.depthWrite && (n.depthWrite = e1526.depthWrite), void 0 !== e1526.colorWrite && (n.colorWrite = e1526.colorWrite), void 0 !== e1526.stencilWrite && (n.stencilWrite = e1526.stencilWrite), void 0 !== e1526.stencilWriteMask && (n.stencilWriteMask = e1526.stencilWriteMask), void 0 !== e1526.stencilFunc && (n.stencilFunc = e1526.stencilFunc), void 0 !== e1526.stencilRef && (n.stencilRef = e1526.stencilRef), void 0 !== e1526.stencilFuncMask && (n.stencilFuncMask = e1526.stencilFuncMask), void 0 !== e1526.stencilFail && (n.stencilFail = e1526.stencilFail), void 0 !== e1526.stencilZFail && (n.stencilZFail = e1526.stencilZFail), void 0 !== e1526.stencilZPass && (n.stencilZPass = e1526.stencilZPass), void 0 !== e1526.wireframe && (n.wireframe = e1526.wireframe), void 0 !== e1526.wireframeLinewidth && (n.wireframeLinewidth = e1526.wireframeLinewidth), void 0 !== e1526.wireframeLinecap && (n.wireframeLinecap = e1526.wireframeLinecap), void 0 !== e1526.wireframeLinejoin && (n.wireframeLinejoin = e1526.wireframeLinejoin), void 0 !== e1526.rotation && (n.rotation = e1526.rotation), 1 !== e1526.linewidth && (n.linewidth = e1526.linewidth), void 0 !== e1526.dashSize && (n.dashSize = e1526.dashSize), void 0 !== e1526.gapSize && (n.gapSize = e1526.gapSize), void 0 !== e1526.scale && (n.scale = e1526.scale), void 0 !== e1526.polygonOffset && (n.polygonOffset = e1526.polygonOffset), void 0 !== e1526.polygonOffsetFactor && (n.polygonOffsetFactor = e1526.polygonOffsetFactor), void 0 !== e1526.polygonOffsetUnits && (n.polygonOffsetUnits = e1526.polygonOffsetUnits), void 0 !== e1526.skinning && (n.skinning = e1526.skinning), void 0 !== e1526.morphTargets && (n.morphTargets = e1526.morphTargets), void 0 !== e1526.morphNormals && (n.morphNormals = e1526.morphNormals), void 0 !== e1526.dithering && (n.dithering = e1526.dithering), void 0 !== e1526.alphaToCoverage && (n.alphaToCoverage = e1526.alphaToCoverage), void 0 !== e1526.premultipliedAlpha && (n.premultipliedAlpha = e1526.premultipliedAlpha), void 0 !== e1526.vertexTangents && (n.vertexTangents = e1526.vertexTangents), void 0 !== e1526.visible && (n.visible = e1526.visible), void 0 !== e1526.toneMapped && (n.toneMapped = e1526.toneMapped), void 0 !== e1526.userData && (n.userData = e1526.userData), void 0 !== e1526.vertexColors && ("number" == typeof e1526.vertexColors ? n.vertexColors = e1526.vertexColors > 0 : n.vertexColors = e1526.vertexColors), void 0 !== e1526.uniforms) for(const t129 in e1526.uniforms){
            const i = e1526.uniforms[t129];
            switch(n.uniforms[t129] = {}, i.type){
                case "t":
                    n.uniforms[t129].value = r(i.value);
                    break;
                case "c":
                    n.uniforms[t129].value = (new Color).setHex(i.value);
                    break;
                case "v2":
                    n.uniforms[t129].value = (new Vector2).fromArray(i.value);
                    break;
                case "v3":
                    n.uniforms[t129].value = (new Vector3).fromArray(i.value);
                    break;
                case "v4":
                    n.uniforms[t129].value = (new Vector4).fromArray(i.value);
                    break;
                case "m3":
                    n.uniforms[t129].value = (new Matrix3).fromArray(i.value);
                    break;
                case "m4":
                    n.uniforms[t129].value = (new Matrix4).fromArray(i.value);
                    break;
                default:
                    n.uniforms[t129].value = i.value;
            }
        }
        if (void 0 !== e1526.defines && (n.defines = e1526.defines), void 0 !== e1526.vertexShader && (n.vertexShader = e1526.vertexShader), void 0 !== e1526.fragmentShader && (n.fragmentShader = e1526.fragmentShader), void 0 !== e1526.extensions) for(const t130 in e1526.extensions)n.extensions[t130] = e1526.extensions[t130];
        if (void 0 !== e1526.shading && (n.flatShading = 1 === e1526.shading), void 0 !== e1526.size && (n.size = e1526.size), void 0 !== e1526.sizeAttenuation && (n.sizeAttenuation = e1526.sizeAttenuation), void 0 !== e1526.map && (n.map = r(e1526.map)), void 0 !== e1526.matcap && (n.matcap = r(e1526.matcap)), void 0 !== e1526.alphaMap && (n.alphaMap = r(e1526.alphaMap)), void 0 !== e1526.bumpMap && (n.bumpMap = r(e1526.bumpMap)), void 0 !== e1526.bumpScale && (n.bumpScale = e1526.bumpScale), void 0 !== e1526.normalMap && (n.normalMap = r(e1526.normalMap)), void 0 !== e1526.normalMapType && (n.normalMapType = e1526.normalMapType), void 0 !== e1526.normalScale) {
            let t = e1526.normalScale;
            !1 === Array.isArray(t) && (t = [
                t,
                t
            ]), n.normalScale = (new Vector2).fromArray(t);
        }
        return void 0 !== e1526.displacementMap && (n.displacementMap = r(e1526.displacementMap)), void 0 !== e1526.displacementScale && (n.displacementScale = e1526.displacementScale), void 0 !== e1526.displacementBias && (n.displacementBias = e1526.displacementBias), void 0 !== e1526.roughnessMap && (n.roughnessMap = r(e1526.roughnessMap)), void 0 !== e1526.metalnessMap && (n.metalnessMap = r(e1526.metalnessMap)), void 0 !== e1526.emissiveMap && (n.emissiveMap = r(e1526.emissiveMap)), void 0 !== e1526.emissiveIntensity && (n.emissiveIntensity = e1526.emissiveIntensity), void 0 !== e1526.specularMap && (n.specularMap = r(e1526.specularMap)), void 0 !== e1526.envMap && (n.envMap = r(e1526.envMap)), void 0 !== e1526.envMapIntensity && (n.envMapIntensity = e1526.envMapIntensity), void 0 !== e1526.reflectivity && (n.reflectivity = e1526.reflectivity), void 0 !== e1526.refractionRatio && (n.refractionRatio = e1526.refractionRatio), void 0 !== e1526.lightMap && (n.lightMap = r(e1526.lightMap)), void 0 !== e1526.lightMapIntensity && (n.lightMapIntensity = e1526.lightMapIntensity), void 0 !== e1526.aoMap && (n.aoMap = r(e1526.aoMap)), void 0 !== e1526.aoMapIntensity && (n.aoMapIntensity = e1526.aoMapIntensity), void 0 !== e1526.gradientMap && (n.gradientMap = r(e1526.gradientMap)), void 0 !== e1526.clearcoatMap && (n.clearcoatMap = r(e1526.clearcoatMap)), void 0 !== e1526.clearcoatRoughnessMap && (n.clearcoatRoughnessMap = r(e1526.clearcoatRoughnessMap)), void 0 !== e1526.clearcoatNormalMap && (n.clearcoatNormalMap = r(e1526.clearcoatNormalMap)), void 0 !== e1526.clearcoatNormalScale && (n.clearcoatNormalScale = (new Vector2).fromArray(e1526.clearcoatNormalScale)), void 0 !== e1526.transmission && (n.transmission = e1526.transmission), void 0 !== e1526.transmissionMap && (n.transmissionMap = r(e1526.transmissionMap)), n;
    }
    setTextures(e1528) {
        return this.textures = e1528, this;
    }
}
class LoaderUtils {
    static decodeText(e1529) {
        if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(e1529);
        let t = "";
        for(let r = 0, n = e1529.length; r < n; r++)t += String.fromCharCode(e1529[r]);
        try {
            return decodeURIComponent(escape(t));
        } catch (e) {
            return t;
        }
    }
    static extractUrlBase(e1530) {
        const t = e1530.lastIndexOf("/");
        return -1 === t ? "./" : e1530.substr(0, t + 1);
    }
}
class InstancedBufferGeometry extends BufferGeometry {
    constructor(){
        super(), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
    }
    copy(e1531) {
        return super.copy(e1531), this.instanceCount = e1531.instanceCount, this;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    toJSON() {
        const e1532 = super.toJSON(this);
        return e1532.instanceCount = this.instanceCount, e1532.isInstancedBufferGeometry = !0, e1532;
    }
}
InstancedBufferGeometry.prototype.isInstancedBufferGeometry = !0;
class InstancedBufferAttribute extends BufferAttribute {
    constructor(e1533, t, r, n){
        "number" == typeof r && (n = r, r = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(e1533, t, r), this.meshPerAttribute = n || 1;
    }
    copy(e1534) {
        return super.copy(e1534), this.meshPerAttribute = e1534.meshPerAttribute, this;
    }
    toJSON() {
        const e1535 = super.toJSON();
        return e1535.meshPerAttribute = this.meshPerAttribute, e1535.isInstancedBufferAttribute = !0, e1535;
    }
}
InstancedBufferAttribute.prototype.isInstancedBufferAttribute = !0;
class BufferGeometryLoader extends Loader {
    constructor(e1536){
        super(e1536);
    }
    load(e1537, t131, r78, n) {
        const i = this, a = new FileLoader(i.manager);
        a.setPath(i.path), a.setRequestHeader(i.requestHeader), a.setWithCredentials(i.withCredentials), a.load(e1537, function(r) {
            try {
                t131(i.parse(JSON.parse(r)));
            } catch (t) {
                n ? n(t) : console.error(t), i.manager.itemError(e1537);
            }
        }, r78, n);
    }
    parse(e1539) {
        const t135 = {}, r = {};
        function n57(e1540, n58) {
            if (void 0 !== t135[n58]) return t135[n58];
            const i40 = e1540.interleavedBuffers[n58], a = function(e1541, t) {
                if (void 0 !== r[t]) return r[t];
                const n = e1541.arrayBuffers[t], i = new Uint32Array(n).buffer;
                return r[t] = i, i;
            }(e1540, i40.buffer), o = getTypedArray(i40.type, a), s = new InterleavedBuffer(o, i40.stride);
            return s.uuid = i40.uuid, t135[n58] = s, s;
        }
        const i39 = e1539.isInstancedBufferGeometry ? new InstancedBufferGeometry : new BufferGeometry, a31 = e1539.data.index;
        if (void 0 !== a31) {
            const e1542 = getTypedArray(a31.type, a31.array);
            i39.setIndex(new BufferAttribute(e1542, 1));
        }
        const o27 = e1539.data.attributes;
        for(const t132 in o27){
            const r = o27[t132];
            let a;
            if (r.isInterleavedBufferAttribute) {
                const t = n57(e1539.data, r.data);
                a = new InterleavedBufferAttribute(t, r.itemSize, r.offset, r.normalized);
            } else {
                const e1543 = getTypedArray(r.type, r.array);
                a = new (r.isInstancedBufferAttribute ? InstancedBufferAttribute : BufferAttribute)(e1543, r.itemSize, r.normalized);
            }
            void 0 !== r.name && (a.name = r.name), void 0 !== r.usage && a.setUsage(r.usage), void 0 !== r.updateRange && (a.updateRange.offset = r.updateRange.offset, a.updateRange.count = r.updateRange.count), i39.setAttribute(t132, a);
        }
        const s14 = e1539.data.morphAttributes;
        if (s14) for(const t133 in s14){
            const r = s14[t133], a = [];
            for(let t = 0, i = r.length; t < i; t++){
                const i = r[t];
                let o;
                if (i.isInterleavedBufferAttribute) {
                    const t = n57(e1539.data, i.data);
                    o = new InterleavedBufferAttribute(t, i.itemSize, i.offset, i.normalized);
                } else {
                    const e1544 = getTypedArray(i.type, i.array);
                    o = new BufferAttribute(e1544, i.itemSize, i.normalized);
                }
                void 0 !== i.name && (o.name = i.name), a.push(o);
            }
            i39.morphAttributes[t133] = a;
        }
        e1539.data.morphTargetsRelative && (i39.morphTargetsRelative = !0);
        const l = e1539.data.groups || e1539.data.drawcalls || e1539.data.offsets;
        if (void 0 !== l) for(let e1538 = 0, t134 = l.length; e1538 !== t134; ++e1538){
            const t = l[e1538];
            i39.addGroup(t.start, t.count, t.materialIndex);
        }
        const c = e1539.data.boundingSphere;
        if (void 0 !== c) {
            const e1545 = new Vector3;
            void 0 !== c.center && e1545.fromArray(c.center), i39.boundingSphere = new Sphere(e1545, c.radius);
        }
        return e1539.name && (i39.name = e1539.name), e1539.userData && (i39.userData = e1539.userData), i39;
    }
}
class ObjectLoader extends Loader {
    constructor(e1546){
        super(e1546);
    }
    load(e1547, t136, r79, n) {
        const i = this, a32 = "" === this.path ? LoaderUtils.extractUrlBase(e1547) : this.path;
        this.resourcePath = this.resourcePath || a32;
        const o28 = new FileLoader(this.manager);
        o28.setPath(this.path), o28.setRequestHeader(this.requestHeader), o28.setWithCredentials(this.withCredentials), o28.load(e1547, function(r) {
            let a = null;
            try {
                a = JSON.parse(r);
            } catch (t) {
                return void 0 !== n && n(t), void console.error("THREE:ObjectLoader: Can't parse " + e1547 + ".", t.message);
            }
            const o = a.metadata;
            void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase() ? i.parse(a, t136) : console.error("THREE.ObjectLoader: Can't load " + e1547);
        }, r79, n);
    }
    parse(e1548, t) {
        const r = this.parseAnimations(e1548.animations), n = this.parseShapes(e1548.shapes), i = this.parseGeometries(e1548.geometries, n), a = this.parseImages(e1548.images, function() {
            void 0 !== t && t(l);
        }), o = this.parseTextures(e1548.textures, a), s = this.parseMaterials(e1548.materials, o), l = this.parseObject(e1548.object, i, s, r), c = this.parseSkeletons(e1548.skeletons, l);
        if (this.bindSkeletons(l, c), void 0 !== t) {
            let e1549 = !1;
            for(const t137 in a)if (a[t137] instanceof HTMLImageElement) {
                e1549 = !0;
                break;
            }
            !1 === e1549 && t(l);
        }
        return l;
    }
    parseShapes(e1550) {
        const t = {};
        if (void 0 !== e1550) for(let r = 0, n = e1550.length; r < n; r++){
            const n = (new Shape).fromJSON(e1550[r]);
            t[n.uuid] = n;
        }
        return t;
    }
    parseSkeletons(e1551, t) {
        const r = {}, n = {};
        if (t.traverse(function(e1552) {
            e1552.isBone && (n[e1552.uuid] = e1552);
        }), void 0 !== e1551) for(let t138 = 0, i = e1551.length; t138 < i; t138++){
            const i = (new Skeleton).fromJSON(e1551[t138], n);
            r[i.uuid] = i;
        }
        return r;
    }
    parseGeometries(e1553, t) {
        const r = {};
        let n;
        if (void 0 !== e1553) {
            const i = new BufferGeometryLoader;
            for(let a = 0, o = e1553.length; a < o; a++){
                let o;
                const s = e1553[a];
                switch(s.type){
                    case "PlaneGeometry":
                    case "PlaneBufferGeometry":
                        o = new Geometries[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
                        break;
                    case "BoxGeometry":
                    case "BoxBufferGeometry":
                        o = new Geometries[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
                        break;
                    case "CircleGeometry":
                    case "CircleBufferGeometry":
                        o = new Geometries[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
                        break;
                    case "CylinderGeometry":
                    case "CylinderBufferGeometry":
                        o = new Geometries[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                        break;
                    case "ConeGeometry":
                    case "ConeBufferGeometry":
                        o = new Geometries[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                        break;
                    case "SphereGeometry":
                    case "SphereBufferGeometry":
                        o = new Geometries[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                        break;
                    case "DodecahedronGeometry":
                    case "DodecahedronBufferGeometry":
                    case "IcosahedronGeometry":
                    case "IcosahedronBufferGeometry":
                    case "OctahedronGeometry":
                    case "OctahedronBufferGeometry":
                    case "TetrahedronGeometry":
                    case "TetrahedronBufferGeometry":
                        o = new Geometries[s.type](s.radius, s.detail);
                        break;
                    case "RingGeometry":
                    case "RingBufferGeometry":
                        o = new Geometries[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
                        break;
                    case "TorusGeometry":
                    case "TorusBufferGeometry":
                        o = new Geometries[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
                        break;
                    case "TorusKnotGeometry":
                    case "TorusKnotBufferGeometry":
                        o = new Geometries[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q);
                        break;
                    case "TubeGeometry":
                    case "TubeBufferGeometry":
                        o = new Geometries[s.type]((new Curves[s.path.type]).fromJSON(s.path), s.tubularSegments, s.radius, s.radialSegments, s.closed);
                        break;
                    case "LatheGeometry":
                    case "LatheBufferGeometry":
                        o = new Geometries[s.type](s.points, s.segments, s.phiStart, s.phiLength);
                        break;
                    case "PolyhedronGeometry":
                    case "PolyhedronBufferGeometry":
                        o = new Geometries[s.type](s.vertices, s.indices, s.radius, s.details);
                        break;
                    case "ShapeGeometry":
                    case "ShapeBufferGeometry":
                        n = [];
                        for(let e1556 = 0, r81 = s.shapes.length; e1556 < r81; e1556++){
                            const r = t[s.shapes[e1556]];
                            n.push(r);
                        }
                        o = new Geometries[s.type](n, s.curveSegments);
                        break;
                    case "ExtrudeGeometry":
                    case "ExtrudeBufferGeometry":
                        n = [];
                        for(let e1554 = 0, r80 = s.shapes.length; e1554 < r80; e1554++){
                            const r = t[s.shapes[e1554]];
                            n.push(r);
                        }
                        const e1555 = s.options.extrudePath;
                        void 0 !== e1555 && (s.options.extrudePath = (new Curves[e1555.type]).fromJSON(e1555)), o = new Geometries[s.type](n, s.options);
                        break;
                    case "BufferGeometry":
                    case "InstancedBufferGeometry":
                        o = i.parse(s);
                        break;
                    case "Geometry":
                        console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                        continue;
                }
                o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), !0 === o.isBufferGeometry && void 0 !== s.userData && (o.userData = s.userData), r[s.uuid] = o;
            }
        }
        return r;
    }
    parseMaterials(e1557, t) {
        const r = {}, n = {};
        if (void 0 !== e1557) {
            const i = new MaterialLoader;
            i.setTextures(t);
            for(let t139 = 0, a = e1557.length; t139 < a; t139++){
                const a = e1557[t139];
                if ("MultiMaterial" === a.type) {
                    const e1558 = [];
                    for(let t = 0; t < a.materials.length; t++){
                        const n = a.materials[t];
                        void 0 === r[n.uuid] && (r[n.uuid] = i.parse(n)), e1558.push(r[n.uuid]);
                    }
                    n[a.uuid] = e1558;
                } else void 0 === r[a.uuid] && (r[a.uuid] = i.parse(a)), n[a.uuid] = r[a.uuid];
            }
        }
        return n;
    }
    parseAnimations(e1559) {
        const t = {};
        if (void 0 !== e1559) for(let r = 0; r < e1559.length; r++){
            const n = e1559[r], i = AnimationClip.parse(n);
            t[i.uuid] = i;
        }
        return t;
    }
    parseImages(e1560, t140) {
        const r = this, n59 = {};
        let i;
        function a(e1561) {
            if ("string" == typeof e1561) {
                const t = e1561, n = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(t) ? t : r.resourcePath + t;
                return t = n, r.manager.itemStart(t), i.load(t, function() {
                    r.manager.itemEnd(t);
                }, void 0, function() {
                    r.manager.itemError(t), r.manager.itemEnd(t);
                });
            }
            var t;
            return e1561.data ? {
                data: getTypedArray(e1561.type, e1561.data),
                width: e1561.width,
                height: e1561.height
            } : null;
        }
        if (void 0 !== e1560 && e1560.length > 0) {
            const r = new LoadingManager(t140);
            (i = new ImageLoader(r)).setCrossOrigin(this.crossOrigin);
            for(let t = 0, r83 = e1560.length; t < r83; t++){
                const r = e1560[t], i = r.url;
                if (Array.isArray(i)) {
                    n59[r.uuid] = [];
                    for(let e1562 = 0, t = i.length; e1562 < t; e1562++){
                        const t = a(i[e1562]);
                        null !== t && (t instanceof HTMLImageElement ? n59[r.uuid].push(t) : n59[r.uuid].push(new DataTexture(t.data, t.width, t.height)));
                    }
                } else {
                    const e1563 = a(r.url);
                    null !== e1563 && (n59[r.uuid] = e1563);
                }
            }
        }
        return n59;
    }
    parseTextures(e1564, t141) {
        function r(e1565, t) {
            return "number" == typeof e1565 ? e1565 : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e1565), t[e1565]);
        }
        const n = {};
        if (void 0 !== e1564) for(let i = 0, a = e1564.length; i < a; i++){
            const a = e1564[i];
            let o;
            void 0 === a.image && console.warn('THREE.ObjectLoader: No "image" specified for', a.uuid), void 0 === t141[a.image] && console.warn("THREE.ObjectLoader: Undefined image", a.image);
            const s = t141[a.image];
            Array.isArray(s) ? (o = new CubeTexture(s), 6 === s.length && (o.needsUpdate = !0)) : (o = s && s.data ? new DataTexture(s.data, s.width, s.height) : new Texture(s), s && (o.needsUpdate = !0)), o.uuid = a.uuid, void 0 !== a.name && (o.name = a.name), void 0 !== a.mapping && (o.mapping = r(a.mapping, TEXTURE_MAPPING)), void 0 !== a.offset && o.offset.fromArray(a.offset), void 0 !== a.repeat && o.repeat.fromArray(a.repeat), void 0 !== a.center && o.center.fromArray(a.center), void 0 !== a.rotation && (o.rotation = a.rotation), void 0 !== a.wrap && (o.wrapS = r(a.wrap[0], TEXTURE_WRAPPING), o.wrapT = r(a.wrap[1], TEXTURE_WRAPPING)), void 0 !== a.format && (o.format = a.format), void 0 !== a.type && (o.type = a.type), void 0 !== a.encoding && (o.encoding = a.encoding), void 0 !== a.minFilter && (o.minFilter = r(a.minFilter, TEXTURE_FILTER)), void 0 !== a.magFilter && (o.magFilter = r(a.magFilter, TEXTURE_FILTER)), void 0 !== a.anisotropy && (o.anisotropy = a.anisotropy), void 0 !== a.flipY && (o.flipY = a.flipY), void 0 !== a.premultiplyAlpha && (o.premultiplyAlpha = a.premultiplyAlpha), void 0 !== a.unpackAlignment && (o.unpackAlignment = a.unpackAlignment), n[a.uuid] = o;
        }
        return n;
    }
    parseObject(e1566, t143, r, n61) {
        let i41, a, o;
        function s(e1567) {
            return void 0 === t143[e1567] && console.warn("THREE.ObjectLoader: Undefined geometry", e1567), t143[e1567];
        }
        function l(e1568) {
            if (void 0 !== e1568) {
                if (Array.isArray(e1568)) {
                    const t = [];
                    for(let n = 0, i = e1568.length; n < i; n++){
                        const i = e1568[n];
                        void 0 === r[i] && console.warn("THREE.ObjectLoader: Undefined material", i), t.push(r[i]);
                    }
                    return t;
                }
                return void 0 === r[e1568] && console.warn("THREE.ObjectLoader: Undefined material", e1568), r[e1568];
            }
        }
        switch(e1566.type){
            case "Scene":
                i41 = new Scene, void 0 !== e1566.background && Number.isInteger(e1566.background) && (i41.background = new Color(e1566.background)), void 0 !== e1566.fog && ("Fog" === e1566.fog.type ? i41.fog = new Fog(e1566.fog.color, e1566.fog.near, e1566.fog.far) : "FogExp2" === e1566.fog.type && (i41.fog = new FogExp2(e1566.fog.color, e1566.fog.density)));
                break;
            case "PerspectiveCamera":
                i41 = new PerspectiveCamera(e1566.fov, e1566.aspect, e1566.near, e1566.far), void 0 !== e1566.focus && (i41.focus = e1566.focus), void 0 !== e1566.zoom && (i41.zoom = e1566.zoom), void 0 !== e1566.filmGauge && (i41.filmGauge = e1566.filmGauge), void 0 !== e1566.filmOffset && (i41.filmOffset = e1566.filmOffset), void 0 !== e1566.view && (i41.view = Object.assign({}, e1566.view));
                break;
            case "OrthographicCamera":
                i41 = new OrthographicCamera(e1566.left, e1566.right, e1566.top, e1566.bottom, e1566.near, e1566.far), void 0 !== e1566.zoom && (i41.zoom = e1566.zoom), void 0 !== e1566.view && (i41.view = Object.assign({}, e1566.view));
                break;
            case "AmbientLight":
                i41 = new AmbientLight(e1566.color, e1566.intensity);
                break;
            case "DirectionalLight":
                i41 = new DirectionalLight(e1566.color, e1566.intensity);
                break;
            case "PointLight":
                i41 = new PointLight(e1566.color, e1566.intensity, e1566.distance, e1566.decay);
                break;
            case "RectAreaLight":
                i41 = new RectAreaLight(e1566.color, e1566.intensity, e1566.width, e1566.height);
                break;
            case "SpotLight":
                i41 = new SpotLight(e1566.color, e1566.intensity, e1566.distance, e1566.angle, e1566.penumbra, e1566.decay);
                break;
            case "HemisphereLight":
                i41 = new HemisphereLight(e1566.color, e1566.groundColor, e1566.intensity);
                break;
            case "LightProbe":
                i41 = (new LightProbe).fromJSON(e1566);
                break;
            case "SkinnedMesh":
                a = s(e1566.geometry), o = l(e1566.material), i41 = new SkinnedMesh(a, o), void 0 !== e1566.bindMode && (i41.bindMode = e1566.bindMode), void 0 !== e1566.bindMatrix && i41.bindMatrix.fromArray(e1566.bindMatrix), void 0 !== e1566.skeleton && (i41.skeleton = e1566.skeleton);
                break;
            case "Mesh":
                a = s(e1566.geometry), o = l(e1566.material), i41 = new Mesh(a, o);
                break;
            case "InstancedMesh":
                a = s(e1566.geometry), o = l(e1566.material);
                const t142 = e1566.count, r84 = e1566.instanceMatrix, n60 = e1566.instanceColor;
                (i41 = new InstancedMesh(a, o, t142)).instanceMatrix = new BufferAttribute(new Float32Array(r84.array), 16), void 0 !== n60 && (i41.instanceColor = new BufferAttribute(new Float32Array(n60.array), n60.itemSize));
                break;
            case "LOD":
                i41 = new LOD;
                break;
            case "Line":
                i41 = new Line(s(e1566.geometry), l(e1566.material));
                break;
            case "LineLoop":
                i41 = new LineLoop(s(e1566.geometry), l(e1566.material));
                break;
            case "LineSegments":
                i41 = new LineSegments(s(e1566.geometry), l(e1566.material));
                break;
            case "PointCloud":
            case "Points":
                i41 = new Points(s(e1566.geometry), l(e1566.material));
                break;
            case "Sprite":
                i41 = new Sprite(l(e1566.material));
                break;
            case "Group":
                i41 = new Group;
                break;
            case "Bone":
                i41 = new Bone;
                break;
            default:
                i41 = new Object3D;
        }
        if (i41.uuid = e1566.uuid, void 0 !== e1566.name && (i41.name = e1566.name), void 0 !== e1566.matrix ? (i41.matrix.fromArray(e1566.matrix), void 0 !== e1566.matrixAutoUpdate && (i41.matrixAutoUpdate = e1566.matrixAutoUpdate), i41.matrixAutoUpdate && i41.matrix.decompose(i41.position, i41.quaternion, i41.scale)) : (void 0 !== e1566.position && i41.position.fromArray(e1566.position), void 0 !== e1566.rotation && i41.rotation.fromArray(e1566.rotation), void 0 !== e1566.quaternion && i41.quaternion.fromArray(e1566.quaternion), void 0 !== e1566.scale && i41.scale.fromArray(e1566.scale)), void 0 !== e1566.castShadow && (i41.castShadow = e1566.castShadow), void 0 !== e1566.receiveShadow && (i41.receiveShadow = e1566.receiveShadow), e1566.shadow && (void 0 !== e1566.shadow.bias && (i41.shadow.bias = e1566.shadow.bias), void 0 !== e1566.shadow.normalBias && (i41.shadow.normalBias = e1566.shadow.normalBias), void 0 !== e1566.shadow.radius && (i41.shadow.radius = e1566.shadow.radius), void 0 !== e1566.shadow.mapSize && i41.shadow.mapSize.fromArray(e1566.shadow.mapSize), void 0 !== e1566.shadow.camera && (i41.shadow.camera = this.parseObject(e1566.shadow.camera))), void 0 !== e1566.visible && (i41.visible = e1566.visible), void 0 !== e1566.frustumCulled && (i41.frustumCulled = e1566.frustumCulled), void 0 !== e1566.renderOrder && (i41.renderOrder = e1566.renderOrder), void 0 !== e1566.userData && (i41.userData = e1566.userData), void 0 !== e1566.layers && (i41.layers.mask = e1566.layers), void 0 !== e1566.children) {
            const a = e1566.children;
            for(let e1569 = 0; e1569 < a.length; e1569++)i41.add(this.parseObject(a[e1569], t143, r, n61));
        }
        if (void 0 !== e1566.animations) {
            const t = e1566.animations;
            for(let e1570 = 0; e1570 < t.length; e1570++){
                const r = t[e1570];
                i41.animations.push(n61[r]);
            }
        }
        if ("LOD" === e1566.type) {
            void 0 !== e1566.autoUpdate && (i41.autoUpdate = e1566.autoUpdate);
            const t = e1566.levels;
            for(let e1571 = 0; e1571 < t.length; e1571++){
                const r = t[e1571], n = i41.getObjectByProperty("uuid", r.object);
                void 0 !== n && i41.addLevel(n, r.distance);
            }
        }
        return i41;
    }
    bindSkeletons(e1572, t) {
        0 !== Object.keys(t).length && e1572.traverse(function(e1573) {
            if (!0 === e1573.isSkinnedMesh && void 0 !== e1573.skeleton) {
                const r = t[e1573.skeleton];
                void 0 === r ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", e1573.skeleton) : e1573.bind(r, e1573.bindMatrix);
            }
        });
    }
    setTexturePath(e1574) {
        return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(e1574);
    }
}
const TEXTURE_MAPPING = {
    UVMapping: UVMapping,
    CubeReflectionMapping: CubeReflectionMapping,
    CubeRefractionMapping: CubeRefractionMapping,
    EquirectangularReflectionMapping: EquirectangularReflectionMapping,
    EquirectangularRefractionMapping: EquirectangularRefractionMapping,
    CubeUVReflectionMapping: CubeUVReflectionMapping,
    CubeUVRefractionMapping: CubeUVRefractionMapping
}, TEXTURE_WRAPPING = {
    RepeatWrapping: RepeatWrapping,
    ClampToEdgeWrapping: ClampToEdgeWrapping,
    MirroredRepeatWrapping: MirroredRepeatWrapping
}, TEXTURE_FILTER = {
    NearestFilter: NearestFilter,
    NearestMipmapNearestFilter: NearestMipmapNearestFilter,
    NearestMipmapLinearFilter: NearestMipmapLinearFilter,
    LinearFilter: LinearFilter,
    LinearMipmapNearestFilter: LinearMipmapNearestFilter,
    LinearMipmapLinearFilter: LinearMipmapLinearFilter
};
class ImageBitmapLoader extends Loader {
    constructor(e1575){
        super(e1575), "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
            premultiplyAlpha: "none"
        };
    }
    setOptions(e1576) {
        return this.options = e1576, this;
    }
    load(e1577, t144, r85, n) {
        void 0 === e1577 && (e1577 = ""), void 0 !== this.path && (e1577 = this.path + e1577), e1577 = this.manager.resolveURL(e1577);
        const i = this, a = Cache.get(e1577);
        if (void 0 !== a) return i.manager.itemStart(e1577), setTimeout(function() {
            t144 && t144(a), i.manager.itemEnd(e1577);
        }, 0), a;
        const o = {};
        o.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", o.headers = this.requestHeader, fetch(e1577, o).then(function(e1578) {
            return e1578.blob();
        }).then(function(e1579) {
            return createImageBitmap(e1579, Object.assign(i.options, {
                colorSpaceConversion: "none"
            }));
        }).then(function(r) {
            Cache.add(e1577, r), t144 && t144(r), i.manager.itemEnd(e1577);
        }).catch(function(t) {
            n && n(t), i.manager.itemError(e1577), i.manager.itemEnd(e1577);
        }), i.manager.itemStart(e1577);
    }
}
ImageBitmapLoader.prototype.isImageBitmapLoader = !0;
class ShapePath {
    constructor(){
        this.type = "ShapePath", this.color = new Color, this.subPaths = [], this.currentPath = null;
    }
    moveTo(e1580, t) {
        return this.currentPath = new Path, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e1580, t), this;
    }
    lineTo(e1581, t) {
        return this.currentPath.lineTo(e1581, t), this;
    }
    quadraticCurveTo(e1582, t, r, n) {
        return this.currentPath.quadraticCurveTo(e1582, t, r, n), this;
    }
    bezierCurveTo(e1583, t, r, n, i, a) {
        return this.currentPath.bezierCurveTo(e1583, t, r, n, i, a), this;
    }
    splineThru(e1584) {
        return this.currentPath.splineThru(e1584), this;
    }
    toShapes(e1586, t147) {
        function r87(e1587) {
            const t = [];
            for(let r = 0, n = e1587.length; r < n; r++){
                const n = e1587[r], i = new Shape;
                i.curves = n.curves, t.push(i);
            }
            return t;
        }
        function n62(e1588, t) {
            const r = t.length;
            let n = !1;
            for(let i = r - 1, a = 0; a < r; i = a++){
                let r = t[i], o = t[a], s = o.x - r.x, l = o.y - r.y;
                if (Math.abs(l) > Number.EPSILON) {
                    if (l < 0 && (r = t[a], s = -s, o = t[i], l = -l), e1588.y < r.y || e1588.y > o.y) continue;
                    if (e1588.y === r.y) {
                        if (e1588.x === r.x) return !0;
                    } else {
                        const t = l * (e1588.x - r.x) - s * (e1588.y - r.y);
                        if (0 === t) return !0;
                        if (t < 0) continue;
                        n = !n;
                    }
                } else {
                    if (e1588.y !== r.y) continue;
                    if (o.x <= e1588.x && e1588.x <= r.x || r.x <= e1588.x && e1588.x <= o.x) return !0;
                }
            }
            return n;
        }
        const i42 = ShapeUtils.isClockWise, a33 = this.subPaths;
        if (0 === a33.length) return [];
        if (!0 === t147) return r87(a33);
        let o29, s15, l15;
        const c = [];
        if (1 === a33.length) return s15 = a33[0], (l15 = new Shape).curves = s15.curves, c.push(l15), c;
        let h = !i42(a33[0].getPoints());
        h = e1586 ? !h : h;
        const u = [], d = [];
        let p, m, f = [], g = 0;
        d[g] = void 0, f[g] = [];
        for(let t145 = 0, r86 = a33.length; t145 < r86; t145++)o29 = i42(p = (s15 = a33[t145]).getPoints()), (o29 = e1586 ? !o29 : o29) ? (!h && d[g] && g++, d[g] = {
            s: new Shape,
            p: p
        }, d[g].s.curves = s15.curves, h && g++, f[g] = []) : f[g].push({
            h: s15,
            p: p[0]
        });
        if (!d[0]) return r87(a33);
        if (d.length > 1) {
            let e1590 = !1;
            const t = [];
            for(let e1589 = 0, t148 = d.length; e1589 < t148; e1589++)u[e1589] = [];
            for(let r = 0, i = d.length; r < i; r++){
                const i = f[r];
                for(let a = 0; a < i.length; a++){
                    const o = i[a];
                    let s = !0;
                    for(let i43 = 0; i43 < d.length; i43++)n62(o.p, d[i43].p) && (r !== i43 && t.push({
                        froms: r,
                        tos: i43,
                        hole: a
                    }), s ? (s = !1, u[i43].push(o)) : e1590 = !0);
                    s && u[r].push(o);
                }
            }
            t.length > 0 && (e1590 || (f = u));
        }
        for(let e1585 = 0, t146 = d.length; e1585 < t146; e1585++){
            l15 = d[e1585].s, c.push(l15);
            for(let t = 0, r = (m = f[e1585]).length; t < r; t++)l15.holes.push(m[t].h);
        }
        return c;
    }
}
class Font {
    constructor(e1591){
        this.type = "Font", this.data = e1591;
    }
    generateShapes(e1593, t = 100) {
        const r = [], n = createPaths(e1593, t, this.data);
        for(let e1592 = 0, t149 = n.length; e1592 < t149; e1592++)Array.prototype.push.apply(r, n[e1592].toShapes());
        return r;
    }
}
function createPaths(e1595, t, r) {
    const n = Array.from(e1595), i = t / r.resolution, a = (r.boundingBox.yMax - r.boundingBox.yMin + r.underlineThickness) * i, o = [];
    let s = 0, l = 0;
    for(let e1594 = 0; e1594 < n.length; e1594++){
        const t = n[e1594];
        if ("\n" === t) s = 0, l -= a;
        else {
            const e1596 = createPath(t, i, s, l, r);
            s += e1596.offsetX, o.push(e1596.path);
        }
    }
    return o;
}
function createPath(e1597, t, r, n, i) {
    const a = i.glyphs[e1597] || i.glyphs["?"];
    if (!a) return void console.error('THREE.Font: character "' + e1597 + '" does not exists in font family ' + i.familyName + ".");
    const o = new ShapePath;
    let s, l, c, h, u, d, p, m;
    if (a.o) {
        const e1598 = a._cachedOutline || (a._cachedOutline = a.o.split(" "));
        for(let i = 0, a34 = e1598.length; i < a34;)switch(e1598[i++]){
            case "m":
                s = e1598[i++] * t + r, l = e1598[i++] * t + n, o.moveTo(s, l);
                break;
            case "l":
                s = e1598[i++] * t + r, l = e1598[i++] * t + n, o.lineTo(s, l);
                break;
            case "q":
                c = e1598[i++] * t + r, h = e1598[i++] * t + n, u = e1598[i++] * t + r, d = e1598[i++] * t + n, o.quadraticCurveTo(u, d, c, h);
                break;
            case "b":
                c = e1598[i++] * t + r, h = e1598[i++] * t + n, u = e1598[i++] * t + r, d = e1598[i++] * t + n, p = e1598[i++] * t + r, m = e1598[i++] * t + n, o.bezierCurveTo(u, d, p, m, c, h);
        }
    }
    return {
        offsetX: a.ha * t,
        path: o
    };
}
Font.prototype.isFont = !0;
class FontLoader extends Loader {
    constructor(e1599){
        super(e1599);
    }
    load(e1600, t, r88, n63) {
        const i = this, a = new FileLoader(this.manager);
        a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(i.withCredentials), a.load(e1600, function(e1601) {
            let r;
            try {
                r = JSON.parse(e1601);
            } catch (t150) {
                console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), r = JSON.parse(e1601.substring(65, e1601.length - 2));
            }
            const n = i.parse(r);
            t && t(n);
        }, r88, n63);
    }
    parse(e1602) {
        return new Font(e1602);
    }
}
let _context;
const AudioContext = {
    getContext: function() {
        return void 0 === _context && (_context = new (window.AudioContext || window.webkitAudioContext)), _context;
    },
    setContext: function(e1603) {
        _context = e1603;
    }
};
class AudioLoader extends Loader {
    constructor(e1604){
        super(e1604);
    }
    load(e1605, t151, r89, n) {
        const i = this, a35 = new FileLoader(this.manager);
        a35.setResponseType("arraybuffer"), a35.setPath(this.path), a35.setRequestHeader(this.requestHeader), a35.setWithCredentials(this.withCredentials), a35.load(e1605, function(r) {
            try {
                const a = r.slice(0);
                AudioContext.getContext().decodeAudioData(a, function(e1606) {
                    t151(e1606);
                });
            } catch (t) {
                n ? n(t) : console.error(t), i.manager.itemError(e1605);
            }
        }, r89, n);
    }
}
class HemisphereLightProbe extends LightProbe {
    constructor(e1607, t, r = 1){
        super(void 0, r);
        const n = (new Color).set(e1607), i = (new Color).set(t), a = new Vector3(n.r, n.g, n.b), o = new Vector3(i.r, i.g, i.b), s = Math.sqrt(Math.PI), l = s * Math.sqrt(0.75);
        this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s), this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(l);
    }
}
HemisphereLightProbe.prototype.isHemisphereLightProbe = !0;
class AmbientLightProbe extends LightProbe {
    constructor(e1608, t = 1){
        super(void 0, t);
        const r = (new Color).set(e1608);
        this.sh.coefficients[0].set(r.r, r.g, r.b).multiplyScalar(2 * Math.sqrt(Math.PI));
    }
}
AmbientLightProbe.prototype.isAmbientLightProbe = !0;
const _eyeRight = new Matrix4, _eyeLeft = new Matrix4;
class StereoCamera {
    constructor(){
        this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new PerspectiveCamera, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new PerspectiveCamera, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
            focus: null,
            fov: null,
            aspect: null,
            near: null,
            far: null,
            zoom: null,
            eyeSep: null
        };
    }
    update(e1609) {
        const t = this._cache;
        if (t.focus !== e1609.focus || t.fov !== e1609.fov || t.aspect !== e1609.aspect * this.aspect || t.near !== e1609.near || t.far !== e1609.far || t.zoom !== e1609.zoom || t.eyeSep !== this.eyeSep) {
            t.focus = e1609.focus, t.fov = e1609.fov, t.aspect = e1609.aspect * this.aspect, t.near = e1609.near, t.far = e1609.far, t.zoom = e1609.zoom, t.eyeSep = this.eyeSep;
            const r = e1609.projectionMatrix.clone(), n = t.eyeSep / 2, i = n * t.near / t.focus, a = t.near * Math.tan(DEG2RAD * t.fov * 0.5) / t.zoom;
            let o, s;
            _eyeLeft.elements[12] = -n, _eyeRight.elements[12] = n, o = -a * t.aspect + i, s = a * t.aspect + i, r.elements[0] = 2 * t.near / (s - o), r.elements[8] = (s + o) / (s - o), this.cameraL.projectionMatrix.copy(r), o = -a * t.aspect - i, s = a * t.aspect - i, r.elements[0] = 2 * t.near / (s - o), r.elements[8] = (s + o) / (s - o), this.cameraR.projectionMatrix.copy(r);
        }
        this.cameraL.matrixWorld.copy(e1609.matrixWorld).multiply(_eyeLeft), this.cameraR.matrixWorld.copy(e1609.matrixWorld).multiply(_eyeRight);
    }
}
class Clock {
    constructor(e1610 = !0){
        this.autoStart = e1610, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
    }
    start() {
        this.startTime = now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
    }
    stop() {
        this.getElapsedTime(), this.running = !1, this.autoStart = !1;
    }
    getElapsedTime() {
        return this.getDelta(), this.elapsedTime;
    }
    getDelta() {
        let e1611 = 0;
        if (this.autoStart && !this.running) return this.start(), 0;
        if (this.running) {
            const t = now();
            e1611 = (t - this.oldTime) / 1000, this.oldTime = t, this.elapsedTime += e1611;
        }
        return e1611;
    }
}
function now() {
    return ("undefined" == typeof performance ? Date : performance).now();
}
const _position$1 = new Vector3, _quaternion$1 = new Quaternion, _scale$1 = new Vector3, _orientation$1 = new Vector3;
class AudioListener extends Object3D {
    constructor(){
        super(), this.type = "AudioListener", this.context = AudioContext.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new Clock;
    }
    getInput() {
        return this.gain;
    }
    removeFilter() {
        return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
    }
    getFilter() {
        return this.filter;
    }
    setFilter(e1612) {
        return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e1612, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
    }
    getMasterVolume() {
        return this.gain.gain.value;
    }
    setMasterVolume(e1613) {
        return this.gain.gain.setTargetAtTime(e1613, this.context.currentTime, 0.01), this;
    }
    updateMatrixWorld(e1614) {
        super.updateMatrixWorld(e1614);
        const t = this.context.listener, r = this.up;
        if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(_position$1, _quaternion$1, _scale$1), _orientation$1.set(0, 0, -1).applyQuaternion(_quaternion$1), t.positionX) {
            const e1615 = this.context.currentTime + this.timeDelta;
            t.positionX.linearRampToValueAtTime(_position$1.x, e1615), t.positionY.linearRampToValueAtTime(_position$1.y, e1615), t.positionZ.linearRampToValueAtTime(_position$1.z, e1615), t.forwardX.linearRampToValueAtTime(_orientation$1.x, e1615), t.forwardY.linearRampToValueAtTime(_orientation$1.y, e1615), t.forwardZ.linearRampToValueAtTime(_orientation$1.z, e1615), t.upX.linearRampToValueAtTime(r.x, e1615), t.upY.linearRampToValueAtTime(r.y, e1615), t.upZ.linearRampToValueAtTime(r.z, e1615);
        } else t.setPosition(_position$1.x, _position$1.y, _position$1.z), t.setOrientation(_orientation$1.x, _orientation$1.y, _orientation$1.z, r.x, r.y, r.z);
    }
}
class Audio extends Object3D {
    constructor(e1616){
        super(), this.type = "Audio", this.listener = e1616, this.context = e1616.context, this.gain = this.context.createGain(), this.gain.connect(e1616.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
    }
    getOutput() {
        return this.gain;
    }
    setNodeSource(e1617) {
        return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e1617, this.connect(), this;
    }
    setMediaElementSource(e1618) {
        return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e1618), this.connect(), this;
    }
    setMediaStreamSource(e1619) {
        return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e1619), this.connect(), this;
    }
    setBuffer(e1620) {
        return this.buffer = e1620, this.sourceType = "buffer", this.autoplay && this.play(), this;
    }
    play(e1621 = 0) {
        if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
        if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
        this._startedAt = this.context.currentTime + e1621;
        const t = this.context.createBufferSource();
        return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
    }
    pause() {
        if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
        console.warn("THREE.Audio: this Audio has no playback control.");
    }
    stop() {
        if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
        console.warn("THREE.Audio: this Audio has no playback control.");
    }
    connect() {
        if (this.filters.length > 0) {
            this.source.connect(this.filters[0]);
            for(let e1622 = 1, t = this.filters.length; e1622 < t; e1622++)this.filters[e1622 - 1].connect(this.filters[e1622]);
            this.filters[this.filters.length - 1].connect(this.getOutput());
        } else this.source.connect(this.getOutput());
        return this._connected = !0, this;
    }
    disconnect() {
        if (this.filters.length > 0) {
            this.source.disconnect(this.filters[0]);
            for(let e1623 = 1, t = this.filters.length; e1623 < t; e1623++)this.filters[e1623 - 1].disconnect(this.filters[e1623]);
            this.filters[this.filters.length - 1].disconnect(this.getOutput());
        } else this.source.disconnect(this.getOutput());
        return this._connected = !1, this;
    }
    getFilters() {
        return this.filters;
    }
    setFilters(e1624) {
        return e1624 || (e1624 = []), !0 === this._connected ? (this.disconnect(), this.filters = e1624.slice(), this.connect()) : this.filters = e1624.slice(), this;
    }
    setDetune(e1625) {
        if (this.detune = e1625, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
    }
    getDetune() {
        return this.detune;
    }
    getFilter() {
        return this.getFilters()[0];
    }
    setFilter(e1626) {
        return this.setFilters(e1626 ? [
            e1626
        ] : []);
    }
    setPlaybackRate(e1627) {
        if (!1 !== this.hasPlaybackControl) return this.playbackRate = e1627, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
        console.warn("THREE.Audio: this Audio has no playback control.");
    }
    getPlaybackRate() {
        return this.playbackRate;
    }
    onEnded() {
        this.isPlaying = !1;
    }
    getLoop() {
        return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
    }
    setLoop(e1628) {
        if (!1 !== this.hasPlaybackControl) return this.loop = e1628, !0 === this.isPlaying && (this.source.loop = this.loop), this;
        console.warn("THREE.Audio: this Audio has no playback control.");
    }
    setLoopStart(e1629) {
        return this.loopStart = e1629, this;
    }
    setLoopEnd(e1630) {
        return this.loopEnd = e1630, this;
    }
    getVolume() {
        return this.gain.gain.value;
    }
    setVolume(e1631) {
        return this.gain.gain.setTargetAtTime(e1631, this.context.currentTime, 0.01), this;
    }
}
const _position = new Vector3, _quaternion = new Quaternion, _scale = new Vector3, _orientation = new Vector3;
class PositionalAudio extends Audio {
    constructor(e1632){
        super(e1632), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
    }
    getOutput() {
        return this.panner;
    }
    getRefDistance() {
        return this.panner.refDistance;
    }
    setRefDistance(e1633) {
        return this.panner.refDistance = e1633, this;
    }
    getRolloffFactor() {
        return this.panner.rolloffFactor;
    }
    setRolloffFactor(e1634) {
        return this.panner.rolloffFactor = e1634, this;
    }
    getDistanceModel() {
        return this.panner.distanceModel;
    }
    setDistanceModel(e1635) {
        return this.panner.distanceModel = e1635, this;
    }
    getMaxDistance() {
        return this.panner.maxDistance;
    }
    setMaxDistance(e1636) {
        return this.panner.maxDistance = e1636, this;
    }
    setDirectionalCone(e1637, t, r) {
        return this.panner.coneInnerAngle = e1637, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = r, this;
    }
    updateMatrixWorld(e1638) {
        if (super.updateMatrixWorld(e1638), !0 === this.hasPlaybackControl && !1 === this.isPlaying) return;
        this.matrixWorld.decompose(_position, _quaternion, _scale), _orientation.set(0, 0, 1).applyQuaternion(_quaternion);
        const t = this.panner;
        if (t.positionX) {
            const e1639 = this.context.currentTime + this.listener.timeDelta;
            t.positionX.linearRampToValueAtTime(_position.x, e1639), t.positionY.linearRampToValueAtTime(_position.y, e1639), t.positionZ.linearRampToValueAtTime(_position.z, e1639), t.orientationX.linearRampToValueAtTime(_orientation.x, e1639), t.orientationY.linearRampToValueAtTime(_orientation.y, e1639), t.orientationZ.linearRampToValueAtTime(_orientation.z, e1639);
        } else t.setPosition(_position.x, _position.y, _position.z), t.setOrientation(_orientation.x, _orientation.y, _orientation.z);
    }
}
class AudioAnalyser {
    constructor(e1640, t = 2048){
        this.analyser = e1640.context.createAnalyser(), this.analyser.fftSize = t, this.data = new Uint8Array(this.analyser.frequencyBinCount), e1640.getOutput().connect(this.analyser);
    }
    getFrequencyData() {
        return this.analyser.getByteFrequencyData(this.data), this.data;
    }
    getAverageFrequency() {
        let e1641 = 0;
        const t = this.getFrequencyData();
        for(let r = 0; r < t.length; r++)e1641 += t[r];
        return e1641 / t.length;
    }
}
class PropertyMixer {
    constructor(e1642, t, r){
        let n, i, a;
        switch(this.binding = e1642, this.valueSize = r, t){
            case "quaternion":
                n = this._slerp, i = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * r), this._workIndex = 5;
                break;
            case "string":
            case "bool":
                n = this._select, i = this._select, a = this._setAdditiveIdentityOther, this.buffer = new Array(5 * r);
                break;
            default:
                n = this._lerp, i = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * r);
        }
        this._mixBufferRegion = n, this._mixBufferRegionAdditive = i, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
    }
    accumulate(e1643, t) {
        const r = this.buffer, n = this.valueSize, i = e1643 * n + n;
        let a = this.cumulativeWeight;
        if (0 === a) {
            for(let e1644 = 0; e1644 !== n; ++e1644)r[i + e1644] = r[e1644];
            a = t;
        } else {
            const e1645 = t / (a += t);
            this._mixBufferRegion(r, i, 0, e1645, n);
        }
        this.cumulativeWeight = a;
    }
    accumulateAdditive(e1646) {
        const t = this.buffer, r = this.valueSize, n = r * this._addIndex;
        0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(t, n, 0, e1646, r), this.cumulativeWeightAdditive += e1646;
    }
    apply(e1648) {
        const t = this.valueSize, r = this.buffer, n = e1648 * t + t, i = this.cumulativeWeight, a = this.cumulativeWeightAdditive, o = this.binding;
        if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, i < 1) {
            const e1649 = t * this._origIndex;
            this._mixBufferRegion(r, n, e1649, 1 - i, t);
        }
        a > 0 && this._mixBufferRegionAdditive(r, n, this._addIndex * t, 1, t);
        for(let e1647 = t, i44 = t + t; e1647 !== i44; ++e1647)if (r[e1647] !== r[e1647 + t]) {
            o.setValue(r, n);
            break;
        }
    }
    saveOriginalState() {
        const e1651 = this.binding, t = this.buffer, r = this.valueSize, n = r * this._origIndex;
        e1651.getValue(t, n);
        for(let e1650 = r, i = n; e1650 !== i; ++e1650)t[e1650] = t[n + e1650 % r];
        this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
    }
    restoreOriginalState() {
        const e1652 = 3 * this.valueSize;
        this.binding.setValue(this.buffer, e1652);
    }
    _setAdditiveIdentityNumeric() {
        const e1653 = this._addIndex * this.valueSize, t = e1653 + this.valueSize;
        for(let r = e1653; r < t; r++)this.buffer[r] = 0;
    }
    _setAdditiveIdentityQuaternion() {
        this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
    }
    _setAdditiveIdentityOther() {
        const e1654 = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
        for(let r = 0; r < this.valueSize; r++)this.buffer[t + r] = this.buffer[e1654 + r];
    }
    _select(e1655, t, r, n, i) {
        if (n >= 0.5) for(let n64 = 0; n64 !== i; ++n64)e1655[t + n64] = e1655[r + n64];
    }
    _slerp(e1656, t, r, n) {
        Quaternion.slerpFlat(e1656, t, e1656, t, e1656, r, n);
    }
    _slerpAdditive(e1657, t, r, n, i) {
        const a = this._workIndex * i;
        Quaternion.multiplyQuaternionsFlat(e1657, a, e1657, t, e1657, r), Quaternion.slerpFlat(e1657, t, e1657, t, e1657, a, n);
    }
    _lerp(e1658, t, r, n, i) {
        const a = 1 - n;
        for(let o = 0; o !== i; ++o){
            const i = t + o;
            e1658[i] = e1658[i] * a + e1658[r + o] * n;
        }
    }
    _lerpAdditive(e1659, t, r, n, i) {
        for(let a = 0; a !== i; ++a){
            const i = t + a;
            e1659[i] = e1659[i] + e1659[r + a] * n;
        }
    }
}
const _RESERVED_CHARS_RE = "\\[\\]\\.:\\/", _reservedRe = new RegExp("[\\[\\]\\.:\\/]", "g"), _wordChar = "[^\\[\\]\\.:\\/]", _wordCharOrDot = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]", _directoryRe = /((?:WC+[\/:])*)/.source.replace("WC", _wordChar), _nodeRe = /(WCOD+)?/.source.replace("WCOD", _wordCharOrDot), _objectRe = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", _wordChar), _propertyRe = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", _wordChar), _trackRe = new RegExp("^" + _directoryRe + _nodeRe + _objectRe + _propertyRe + "$"), _supportedObjectNames = [
    "material",
    "materials",
    "bones"
];
class Composite {
    constructor(e1660, t, r){
        const n = r || PropertyBinding.parseTrackName(t);
        this._targetGroup = e1660, this._bindings = e1660.subscribe_(t, n);
    }
    getValue(e1661, t) {
        this.bind();
        const r = this._targetGroup.nCachedObjects_, n = this._bindings[r];
        void 0 !== n && n.getValue(e1661, t);
    }
    setValue(e1662, t) {
        const r = this._bindings;
        for(let n = this._targetGroup.nCachedObjects_, i = r.length; n !== i; ++n)r[n].setValue(e1662, t);
    }
    bind() {
        const e1663 = this._bindings;
        for(let t = this._targetGroup.nCachedObjects_, r = e1663.length; t !== r; ++t)e1663[t].bind();
    }
    unbind() {
        const e1664 = this._bindings;
        for(let t = this._targetGroup.nCachedObjects_, r = e1664.length; t !== r; ++t)e1664[t].unbind();
    }
}
class PropertyBinding {
    constructor(e1665, t, r){
        this.path = t, this.parsedPath = r || PropertyBinding.parseTrackName(t), this.node = PropertyBinding.findNode(e1665, this.parsedPath.nodeName) || e1665, this.rootNode = e1665, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(e1666, t, r) {
        return e1666 && e1666.isAnimationObjectGroup ? new PropertyBinding.Composite(e1666, t, r) : new PropertyBinding(e1666, t, r);
    }
    static sanitizeNodeName(e1667) {
        return e1667.replace(/\s/g, "_").replace(_reservedRe, "");
    }
    static parseTrackName(e1668) {
        const t = _trackRe.exec(e1668);
        if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e1668);
        const r = {
            nodeName: t[2],
            objectName: t[3],
            objectIndex: t[4],
            propertyName: t[5],
            propertyIndex: t[6]
        }, n = r.nodeName && r.nodeName.lastIndexOf(".");
        if (void 0 !== n && -1 !== n) {
            const e1669 = r.nodeName.substring(n + 1);
            -1 !== _supportedObjectNames.indexOf(e1669) && (r.nodeName = r.nodeName.substring(0, n), r.objectName = e1669);
        }
        if (null === r.propertyName || 0 === r.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e1668);
        return r;
    }
    static findNode(e1670, t) {
        if (!t || "" === t || "." === t || -1 === t || t === e1670.name || t === e1670.uuid) return e1670;
        if (e1670.skeleton) {
            const r = e1670.skeleton.getBoneByName(t);
            if (void 0 !== r) return r;
        }
        if (e1670.children) {
            const r = function(e1671) {
                for(let n = 0; n < e1671.length; n++){
                    const i = e1671[n];
                    if (i.name === t || i.uuid === t) return i;
                    const a = r(i.children);
                    if (a) return a;
                }
                return null;
            }, n65 = r(e1670.children);
            if (n65) return n65;
        }
        return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e1672, t) {
        e1672[t] = this.node[this.propertyName];
    }
    _getValue_array(e1673, t) {
        const r = this.resolvedProperty;
        for(let n = 0, i = r.length; n !== i; ++n)e1673[t++] = r[n];
    }
    _getValue_arrayElement(e1674, t) {
        e1674[t] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(e1675, t) {
        this.resolvedProperty.toArray(e1675, t);
    }
    _setValue_direct(e1676, t) {
        this.targetObject[this.propertyName] = e1676[t];
    }
    _setValue_direct_setNeedsUpdate(e1677, t) {
        this.targetObject[this.propertyName] = e1677[t], this.targetObject.needsUpdate = !0;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e1678, t) {
        this.targetObject[this.propertyName] = e1678[t], this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_array(e1679, t) {
        const r = this.resolvedProperty;
        for(let n = 0, i = r.length; n !== i; ++n)r[n] = e1679[t++];
    }
    _setValue_array_setNeedsUpdate(e1680, t) {
        const r = this.resolvedProperty;
        for(let n = 0, i = r.length; n !== i; ++n)r[n] = e1680[t++];
        this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e1681, t) {
        const r = this.resolvedProperty;
        for(let n = 0, i = r.length; n !== i; ++n)r[n] = e1681[t++];
        this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(e1682, t) {
        this.resolvedProperty[this.propertyIndex] = e1682[t];
    }
    _setValue_arrayElement_setNeedsUpdate(e1683, t) {
        this.resolvedProperty[this.propertyIndex] = e1683[t], this.targetObject.needsUpdate = !0;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e1684, t) {
        this.resolvedProperty[this.propertyIndex] = e1684[t], this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_fromArray(e1685, t) {
        this.resolvedProperty.fromArray(e1685, t);
    }
    _setValue_fromArray_setNeedsUpdate(e1686, t) {
        this.resolvedProperty.fromArray(e1686, t), this.targetObject.needsUpdate = !0;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e1687, t) {
        this.resolvedProperty.fromArray(e1687, t), this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _getValue_unbound(e1688, t) {
        this.bind(), this.getValue(e1688, t);
    }
    _setValue_unbound(e1689, t) {
        this.bind(), this.setValue(e1689, t);
    }
    bind() {
        let e1690 = this.node;
        const t = this.parsedPath, r = t.objectName, n = t.propertyName;
        let i = t.propertyIndex;
        if (e1690 || (e1690 = PropertyBinding.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e1690), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e1690) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
        if (r) {
            let n = t.objectIndex;
            switch(r){
                case "materials":
                    if (!e1690.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                    if (!e1690.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                    e1690 = e1690.material.materials;
                    break;
                case "bones":
                    if (!e1690.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                    e1690 = e1690.skeleton.bones;
                    for(let t152 = 0; t152 < e1690.length; t152++)if (e1690[t152].name === n) {
                        n = t152;
                        break;
                    }
                    break;
                default:
                    if (void 0 === e1690[r]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                    e1690 = e1690[r];
            }
            if (void 0 !== n) {
                if (void 0 === e1690[n]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e1690);
                e1690 = e1690[n];
            }
        }
        const a = e1690[n];
        if (void 0 === a) {
            const r = t.nodeName;
            return void console.error("THREE.PropertyBinding: Trying to update property for track: " + r + "." + n + " but it wasn't found.", e1690);
        }
        let o = this.Versioning.None;
        this.targetObject = e1690, void 0 !== e1690.needsUpdate ? o = this.Versioning.NeedsUpdate : void 0 !== e1690.matrixWorldNeedsUpdate && (o = this.Versioning.MatrixWorldNeedsUpdate);
        let s = this.BindingType.Direct;
        if (void 0 !== i) {
            if ("morphTargetInfluences" === n) {
                if (!e1690.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                if (!e1690.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                if (!e1690.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                void 0 !== e1690.morphTargetDictionary[i] && (i = e1690.morphTargetDictionary[i]);
            }
            s = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = i;
        } else void 0 !== a.fromArray && void 0 !== a.toArray ? (s = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (s = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = n;
        this.getValue = this.GetterByBindingType[s], this.setValue = this.SetterByBindingTypeAndVersioning[s][o];
    }
    unbind() {
        this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
}
PropertyBinding.Composite = Composite, PropertyBinding.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
}, PropertyBinding.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
}, PropertyBinding.prototype.GetterByBindingType = [
    PropertyBinding.prototype._getValue_direct,
    PropertyBinding.prototype._getValue_array,
    PropertyBinding.prototype._getValue_arrayElement,
    PropertyBinding.prototype._getValue_toArray
], PropertyBinding.prototype.SetterByBindingTypeAndVersioning = [
    [
        PropertyBinding.prototype._setValue_direct,
        PropertyBinding.prototype._setValue_direct_setNeedsUpdate,
        PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate
    ],
    [
        PropertyBinding.prototype._setValue_array,
        PropertyBinding.prototype._setValue_array_setNeedsUpdate,
        PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate
    ],
    [
        PropertyBinding.prototype._setValue_arrayElement,
        PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,
        PropertyBinding.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
    ],
    [
        PropertyBinding.prototype._setValue_fromArray,
        PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,
        PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
    ]
];
class AnimationObjectGroup {
    constructor(){
        this.uuid = generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
        const e1691 = {};
        this._indicesByUUID = e1691;
        for(let t = 0, r = arguments.length; t !== r; ++t)e1691[arguments[t].uuid] = t;
        this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
        const t153 = this;
        this.stats = {
            objects: {
                get total () {
                    return t153._objects.length;
                },
                get inUse () {
                    return this.total - t153.nCachedObjects_;
                }
            },
            get bindingsPerObject () {
                return t153._bindings.length;
            }
        };
    }
    add() {
        const e1692 = this._objects, t = this._indicesByUUID, r = this._paths, n = this._parsedPaths, i = this._bindings, a = i.length;
        let o = void 0, s = e1692.length, l = this.nCachedObjects_;
        for(let c = 0, h = arguments.length; c !== h; ++c){
            const h = arguments[c], u = h.uuid;
            let d = t[u];
            if (void 0 === d) {
                d = s++, t[u] = d, e1692.push(h);
                for(let e1693 = 0, t154 = a; e1693 !== t154; ++e1693)i[e1693].push(new PropertyBinding(h, r[e1693], n[e1693]));
            } else if (d < l) {
                o = e1692[d];
                const s = --l, c = e1692[s];
                t[c.uuid] = d, e1692[d] = c, t[u] = s, e1692[s] = h;
                for(let e1694 = 0, t156 = a; e1694 !== t156; ++e1694){
                    const t = i[e1694], a = t[s];
                    let o = t[d];
                    t[d] = a, void 0 === o && (o = new PropertyBinding(h, r[e1694], n[e1694])), t[s] = o;
                }
            } else e1692[d] !== o && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
        }
        this.nCachedObjects_ = l;
    }
    remove() {
        const e1697 = this._objects, t = this._indicesByUUID, r = this._bindings, n = r.length;
        let i = this.nCachedObjects_;
        for(let a = 0, o = arguments.length; a !== o; ++a){
            const o = arguments[a], s = o.uuid, l = t[s];
            if (void 0 !== l && l >= i) {
                const a = i++, c = e1697[a];
                t[c.uuid] = l, e1697[l] = c, t[s] = a, e1697[a] = o;
                for(let e1695 = 0, t158 = n; e1695 !== t158; ++e1695){
                    const t = r[e1695], n = t[a], i = t[l];
                    t[l] = n, t[a] = i;
                }
            }
        }
        this.nCachedObjects_ = i;
    }
    uncache() {
        const e1698 = this._objects, t = this._indicesByUUID, r = this._bindings, n = r.length;
        let i = this.nCachedObjects_, a = e1698.length;
        for(let o = 0, s = arguments.length; o !== s; ++o){
            const s = arguments[o].uuid, l = t[s];
            if (void 0 !== l) {
                if (delete t[s], l < i) {
                    const o = --i, s = e1698[o], c = --a, h = e1698[c];
                    t[s.uuid] = l, e1698[l] = s, t[h.uuid] = o, e1698[o] = h, e1698.pop();
                    for(let e1699 = 0, t160 = n; e1699 !== t160; ++e1699){
                        const t = r[e1699], n = t[o], i = t[c];
                        t[l] = n, t[o] = i, t.pop();
                    }
                } else {
                    const i = --a, o = e1698[i];
                    i > 0 && (t[o.uuid] = l), e1698[l] = o, e1698.pop();
                    for(let e1700 = 0, t163 = n; e1700 !== t163; ++e1700){
                        const t = r[e1700];
                        t[l] = t[i], t.pop();
                    }
                }
            }
        }
        this.nCachedObjects_ = i;
    }
    subscribe_(e1701, t) {
        const r = this._bindingsIndicesByPath;
        let n = r[e1701];
        const i = this._bindings;
        if (void 0 !== n) return i[n];
        const a = this._paths, o = this._parsedPaths, s = this._objects, l = s.length, c = this.nCachedObjects_, h = new Array(l);
        n = i.length, r[e1701] = n, a.push(e1701), o.push(t), i.push(h);
        for(let r90 = c, n67 = s.length; r90 !== n67; ++r90){
            const n = s[r90];
            h[r90] = new PropertyBinding(n, e1701, t);
        }
        return h;
    }
    unsubscribe_(e1702) {
        const t = this._bindingsIndicesByPath, r = t[e1702];
        if (void 0 !== r) {
            const n = this._paths, i = this._parsedPaths, a = this._bindings, o = a.length - 1, s = a[o];
            t[e1702[o]] = r, a[r] = s, a.pop(), i[r] = i[o], i.pop(), n[r] = n[o], n.pop();
        }
    }
}
AnimationObjectGroup.prototype.isAnimationObjectGroup = !0;
class AnimationAction {
    constructor(e1704, t, r = null, n = t.blendMode){
        this._mixer = e1704, this._clip = t, this._localRoot = r, this.blendMode = n;
        const i = t.tracks, a = i.length, o = new Array(a), s = {
            endingStart: ZeroCurvatureEnding,
            endingEnd: ZeroCurvatureEnding
        };
        for(let e1703 = 0; e1703 !== a; ++e1703){
            const t = i[e1703].createInterpolant(null);
            o[e1703] = t, t.settings = s;
        }
        this._interpolantSettings = s, this._interpolants = o, this._propertyBindings = new Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = LoopRepeat, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
    }
    play() {
        return this._mixer._activateAction(this), this;
    }
    stop() {
        return this._mixer._deactivateAction(this), this.reset();
    }
    reset() {
        return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
    }
    isRunning() {
        return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
    }
    isScheduled() {
        return this._mixer._isActiveAction(this);
    }
    startAt(e1705) {
        return this._startTime = e1705, this;
    }
    setLoop(e1706, t) {
        return this.loop = e1706, this.repetitions = t, this;
    }
    setEffectiveWeight(e1707) {
        return this.weight = e1707, this._effectiveWeight = this.enabled ? e1707 : 0, this.stopFading();
    }
    getEffectiveWeight() {
        return this._effectiveWeight;
    }
    fadeIn(e1708) {
        return this._scheduleFading(e1708, 0, 1);
    }
    fadeOut(e1709) {
        return this._scheduleFading(e1709, 1, 0);
    }
    crossFadeFrom(e1710, t, r) {
        if (e1710.fadeOut(t), this.fadeIn(t), r) {
            const r = this._clip.duration, n = e1710._clip.duration, i = n / r, a = r / n;
            e1710.warp(1, i, t), this.warp(a, 1, t);
        }
        return this;
    }
    crossFadeTo(e1711, t, r) {
        return e1711.crossFadeFrom(this, t, r);
    }
    stopFading() {
        const e1712 = this._weightInterpolant;
        return null !== e1712 && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e1712)), this;
    }
    setEffectiveTimeScale(e1713) {
        return this.timeScale = e1713, this._effectiveTimeScale = this.paused ? 0 : e1713, this.stopWarping();
    }
    getEffectiveTimeScale() {
        return this._effectiveTimeScale;
    }
    setDuration(e1714) {
        return this.timeScale = this._clip.duration / e1714, this.stopWarping();
    }
    syncWith(e1715) {
        return this.time = e1715.time, this.timeScale = e1715.timeScale, this.stopWarping();
    }
    halt(e1716) {
        return this.warp(this._effectiveTimeScale, 0, e1716);
    }
    warp(e1717, t, r) {
        const n = this._mixer, i = n.time, a = this.timeScale;
        let o = this._timeScaleInterpolant;
        null === o && (o = n._lendControlInterpolant(), this._timeScaleInterpolant = o);
        const s = o.parameterPositions, l = o.sampleValues;
        return s[0] = i, s[1] = i + r, l[0] = e1717 / a, l[1] = t / a, this;
    }
    stopWarping() {
        const e1718 = this._timeScaleInterpolant;
        return null !== e1718 && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e1718)), this;
    }
    getMixer() {
        return this._mixer;
    }
    getClip() {
        return this._clip;
    }
    getRoot() {
        return this._localRoot || this._mixer._root;
    }
    _update(e1719, t, r, n) {
        if (!this.enabled) return void this._updateWeight(e1719);
        const i = this._startTime;
        if (null !== i) {
            const n = (e1719 - i) * r;
            if (n < 0 || 0 === r) return;
            this._startTime = null, t = r * n;
        }
        t *= this._updateTimeScale(e1719);
        const a = this._updateTime(t), o = this._updateWeight(e1719);
        if (o > 0) {
            const e1720 = this._interpolants, t = this._propertyBindings;
            switch(this.blendMode){
                case AdditiveAnimationBlendMode:
                    for(let r = 0, n68 = e1720.length; r !== n68; ++r)e1720[r].evaluate(a), t[r].accumulateAdditive(o);
                    break;
                case NormalAnimationBlendMode:
                default:
                    for(let r91 = 0, i = e1720.length; r91 !== i; ++r91)e1720[r91].evaluate(a), t[r91].accumulate(n, o);
            }
        }
    }
    _updateWeight(e1721) {
        let t = 0;
        if (this.enabled) {
            t = this.weight;
            const r = this._weightInterpolant;
            if (null !== r) {
                const n = r.evaluate(e1721)[0];
                t *= n, e1721 > r.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1));
            }
        }
        return this._effectiveWeight = t, t;
    }
    _updateTimeScale(e1722) {
        let t = 0;
        if (!this.paused) {
            t = this.timeScale;
            const r = this._timeScaleInterpolant;
            if (null !== r) t *= r.evaluate(e1722)[0], e1722 > r.parameterPositions[1] && (this.stopWarping(), 0 === t ? this.paused = !0 : this.timeScale = t);
        }
        return this._effectiveTimeScale = t, t;
    }
    _updateTime(e1723) {
        const t = this._clip.duration, r = this.loop;
        let n = this.time + e1723, i = this._loopCount;
        const a = r === LoopPingPong;
        if (0 === e1723) return -1 === i ? n : a && 1 == (1 & i) ? t - n : n;
        if (r === LoopOnce) {
            -1 === i && (this._loopCount = 0, this._setEndings(!0, !0, !1));
            e: {
                if (n >= t) n = t;
                else {
                    if (!(n < 0)) {
                        this.time = n;
                        break e;
                    }
                    n = 0;
                }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = n, this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: e1723 < 0 ? -1 : 1
                });
            }
        } else {
            if (-1 === i && (e1723 >= 0 ? (i = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), n >= t || n < 0) {
                const r = Math.floor(n / t);
                n -= t * r, i += Math.abs(r);
                const o = this.repetitions - i;
                if (o <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, n = e1723 > 0 ? t : 0, this.time = n, this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: e1723 > 0 ? 1 : -1
                });
                else {
                    if (1 === o) {
                        const t = e1723 < 0;
                        this._setEndings(t, !t, a);
                    } else this._setEndings(!1, !1, a);
                    this._loopCount = i, this.time = n, this._mixer.dispatchEvent({
                        type: "loop",
                        action: this,
                        loopDelta: r
                    });
                }
            } else this.time = n;
            if (a && 1 == (1 & i)) return t - n;
        }
        return n;
    }
    _setEndings(e1724, t, r) {
        const n = this._interpolantSettings;
        r ? (n.endingStart = ZeroSlopeEnding, n.endingEnd = ZeroSlopeEnding) : (n.endingStart = e1724 ? this.zeroSlopeAtStart ? ZeroSlopeEnding : ZeroCurvatureEnding : WrapAroundEnding, n.endingEnd = t ? this.zeroSlopeAtEnd ? ZeroSlopeEnding : ZeroCurvatureEnding : WrapAroundEnding);
    }
    _scheduleFading(e1725, t, r) {
        const n = this._mixer, i = n.time;
        let a = this._weightInterpolant;
        null === a && (a = n._lendControlInterpolant(), this._weightInterpolant = a);
        const o = a.parameterPositions, s = a.sampleValues;
        return o[0] = i, s[0] = t, o[1] = i + e1725, s[1] = r, this;
    }
}
class AnimationMixer extends EventDispatcher {
    constructor(e1726){
        super(), this._root = e1726, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
    }
    _bindAction(e1728, t) {
        const r = e1728._localRoot || this._root, n = e1728._clip.tracks, i = n.length, a = e1728._propertyBindings, o = e1728._interpolants, s = r.uuid, l = this._bindingsByRootAndName;
        let c = l[s];
        void 0 === c && (c = {}, l[s] = c);
        for(let e1727 = 0; e1727 !== i; ++e1727){
            const i = n[e1727], l = i.name;
            let h = c[l];
            if (void 0 !== h) a[e1727] = h;
            else {
                if (void 0 !== (h = a[e1727])) {
                    null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, s, l));
                    continue;
                }
                const n = t && t._propertyBindings[e1727].binding.parsedPath;
                ++(h = new PropertyMixer(PropertyBinding.create(r, l, n), i.ValueTypeName, i.getValueSize())).referenceCount, this._addInactiveBinding(h, s, l), a[e1727] = h;
            }
            o[e1727].resultBuffer = h.buffer;
        }
    }
    _activateAction(e1729) {
        if (!this._isActiveAction(e1729)) {
            if (null === e1729._cacheIndex) {
                const t = (e1729._localRoot || this._root).uuid, r = e1729._clip.uuid, n = this._actionsByClip[r];
                this._bindAction(e1729, n && n.knownActions[0]), this._addInactiveAction(e1729, r, t);
            }
            const t = e1729._propertyBindings;
            for(let e1730 = 0, r = t.length; e1730 !== r; ++e1730){
                const r = t[e1730];
                0 == r.useCount++ && (this._lendBinding(r), r.saveOriginalState());
            }
            this._lendAction(e1729);
        }
    }
    _deactivateAction(e1731) {
        if (this._isActiveAction(e1731)) {
            const t = e1731._propertyBindings;
            for(let e1732 = 0, r = t.length; e1732 !== r; ++e1732){
                const r = t[e1732];
                0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r));
            }
            this._takeBackAction(e1731);
        }
    }
    _initMemoryManager() {
        this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
        const e1733 = this;
        this.stats = {
            actions: {
                get total () {
                    return e1733._actions.length;
                },
                get inUse () {
                    return e1733._nActiveActions;
                }
            },
            bindings: {
                get total () {
                    return e1733._bindings.length;
                },
                get inUse () {
                    return e1733._nActiveBindings;
                }
            },
            controlInterpolants: {
                get total () {
                    return e1733._controlInterpolants.length;
                },
                get inUse () {
                    return e1733._nActiveControlInterpolants;
                }
            }
        };
    }
    _isActiveAction(e1734) {
        const t = e1734._cacheIndex;
        return null !== t && t < this._nActiveActions;
    }
    _addInactiveAction(e1735, t, r) {
        const n = this._actions, i = this._actionsByClip;
        let a = i[t];
        if (void 0 === a) a = {
            knownActions: [
                e1735
            ],
            actionByRoot: {}
        }, e1735._byClipCacheIndex = 0, i[t] = a;
        else {
            const t = a.knownActions;
            e1735._byClipCacheIndex = t.length, t.push(e1735);
        }
        e1735._cacheIndex = n.length, n.push(e1735), a.actionByRoot[r] = e1735;
    }
    _removeInactiveAction(e1736) {
        const t = this._actions, r = t[t.length - 1], n = e1736._cacheIndex;
        r._cacheIndex = n, t[n] = r, t.pop(), e1736._cacheIndex = null;
        const i = e1736._clip.uuid, a = this._actionsByClip, o = a[i], s = o.knownActions, l = s[s.length - 1], c = e1736._byClipCacheIndex;
        l._byClipCacheIndex = c, s[c] = l, s.pop(), e1736._byClipCacheIndex = null, delete o.actionByRoot[(e1736._localRoot || this._root).uuid], 0 === s.length && delete a[i], this._removeInactiveBindingsForAction(e1736);
    }
    _removeInactiveBindingsForAction(e1738) {
        const t = e1738._propertyBindings;
        for(let e1737 = 0, r = t.length; e1737 !== r; ++e1737){
            const r = t[e1737];
            0 == --r.referenceCount && this._removeInactiveBinding(r);
        }
    }
    _lendAction(e1739) {
        const t = this._actions, r = e1739._cacheIndex, n = this._nActiveActions++, i = t[n];
        e1739._cacheIndex = n, t[n] = e1739, i._cacheIndex = r, t[r] = i;
    }
    _takeBackAction(e1740) {
        const t = this._actions, r = e1740._cacheIndex, n = --this._nActiveActions, i = t[n];
        e1740._cacheIndex = n, t[n] = e1740, i._cacheIndex = r, t[r] = i;
    }
    _addInactiveBinding(e1741, t, r) {
        const n = this._bindingsByRootAndName, i = this._bindings;
        let a = n[t];
        void 0 === a && (a = {}, n[t] = a), a[r] = e1741, e1741._cacheIndex = i.length, i.push(e1741);
    }
    _removeInactiveBinding(e1742) {
        const t = this._bindings, r = e1742.binding, n = r.rootNode.uuid, i = r.path, a = this._bindingsByRootAndName, o = a[n], s = t[t.length - 1], l = e1742._cacheIndex;
        s._cacheIndex = l, t[l] = s, t.pop(), delete o[i], 0 === Object.keys(o).length && delete a[n];
    }
    _lendBinding(e1743) {
        const t = this._bindings, r = e1743._cacheIndex, n = this._nActiveBindings++, i = t[n];
        e1743._cacheIndex = n, t[n] = e1743, i._cacheIndex = r, t[r] = i;
    }
    _takeBackBinding(e1744) {
        const t = this._bindings, r = e1744._cacheIndex, n = --this._nActiveBindings, i = t[n];
        e1744._cacheIndex = n, t[n] = e1744, i._cacheIndex = r, t[r] = i;
    }
    _lendControlInterpolant() {
        const e1745 = this._controlInterpolants, t = this._nActiveControlInterpolants++;
        let r = e1745[t];
        return void 0 === r && ((r = new LinearInterpolant(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = t, e1745[t] = r), r;
    }
    _takeBackControlInterpolant(e1746) {
        const t = this._controlInterpolants, r = e1746.__cacheIndex, n = --this._nActiveControlInterpolants, i = t[n];
        e1746.__cacheIndex = n, t[n] = e1746, i.__cacheIndex = r, t[r] = i;
    }
    clipAction(e1747, t, r) {
        const n = t || this._root, i = n.uuid;
        let a = "string" == typeof e1747 ? AnimationClip.findByName(n, e1747) : e1747;
        const o = null !== a ? a.uuid : e1747, s = this._actionsByClip[o];
        let l = null;
        if (void 0 === r && (r = null !== a ? a.blendMode : NormalAnimationBlendMode), void 0 !== s) {
            const e1748 = s.actionByRoot[i];
            if (void 0 !== e1748 && e1748.blendMode === r) return e1748;
            l = s.knownActions[0], null === a && (a = l._clip);
        }
        if (null === a) return null;
        const c = new AnimationAction(this, a, t, r);
        return this._bindAction(c, l), this._addInactiveAction(c, o, i), c;
    }
    existingAction(e1749, t) {
        const r = t || this._root, n = r.uuid, i = "string" == typeof e1749 ? AnimationClip.findByName(r, e1749) : e1749, a = i ? i.uuid : e1749, o = this._actionsByClip[a];
        return void 0 !== o && o.actionByRoot[n] || null;
    }
    stopAllAction() {
        const e1750 = this._actions;
        for(let t = this._nActiveActions - 1; t >= 0; --t)e1750[t].stop();
        return this;
    }
    update(e1752) {
        e1752 *= this.timeScale;
        const t = this._actions, r = this._nActiveActions, n = this.time += e1752, i = Math.sign(e1752), a = this._accuIndex ^= 1;
        for(let o = 0; o !== r; ++o)t[o]._update(n, e1752, i, a);
        const o30 = this._bindings, s = this._nActiveBindings;
        for(let e1751 = 0; e1751 !== s; ++e1751)o30[e1751].apply(a);
        return this;
    }
    setTime(e1754) {
        this.time = 0;
        for(let e1753 = 0; e1753 < this._actions.length; e1753++)this._actions[e1753].time = 0;
        return this.update(e1754);
    }
    getRoot() {
        return this._root;
    }
    uncacheClip(e1755) {
        const t = this._actions, r = e1755.uuid, n = this._actionsByClip, i = n[r];
        if (void 0 !== i) {
            const e1756 = i.knownActions;
            for(let r92 = 0, n69 = e1756.length; r92 !== n69; ++r92){
                const n = e1756[r92];
                this._deactivateAction(n);
                const i = n._cacheIndex, a = t[t.length - 1];
                n._cacheIndex = null, n._byClipCacheIndex = null, a._cacheIndex = i, t[i] = a, t.pop(), this._removeInactiveBindingsForAction(n);
            }
            delete n[r];
        }
    }
    uncacheRoot(e1759) {
        const t = e1759.uuid, r = this._actionsByClip;
        for(const e1757 in r){
            const n = r[e1757].actionByRoot[t];
            void 0 !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
        }
        const n = this._bindingsByRootAndName[t];
        if (void 0 !== n) for(const e1758 in n){
            const t = n[e1758];
            t.restoreOriginalState(), this._removeInactiveBinding(t);
        }
    }
    uncacheAction(e1760, t) {
        const r = this.existingAction(e1760, t);
        null !== r && (this._deactivateAction(r), this._removeInactiveAction(r));
    }
}
AnimationMixer.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
class Uniform {
    constructor(e1761){
        "string" == typeof e1761 && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e1761 = arguments[1]), this.value = e1761;
    }
    clone() {
        return new Uniform(void 0 === this.value.clone ? this.value : this.value.clone());
    }
}
class InstancedInterleavedBuffer extends InterleavedBuffer {
    constructor(e1762, t, r = 1){
        super(e1762, t), this.meshPerAttribute = r || 1;
    }
    copy(e1763) {
        return super.copy(e1763), this.meshPerAttribute = e1763.meshPerAttribute, this;
    }
    clone(e1764) {
        const t = super.clone(e1764);
        return t.meshPerAttribute = this.meshPerAttribute, t;
    }
    toJSON(e1765) {
        const t = super.toJSON(e1765);
        return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t;
    }
}
InstancedInterleavedBuffer.prototype.isInstancedInterleavedBuffer = !0;
class GLBufferAttribute {
    constructor(e1766, t, r, n, i){
        this.buffer = e1766, this.type = t, this.itemSize = r, this.elementSize = n, this.count = i, this.version = 0;
    }
    set needsUpdate(e1767) {
        !0 === e1767 && this.version++;
    }
    setBuffer(e1768) {
        return this.buffer = e1768, this;
    }
    setType(e1769, t) {
        return this.type = e1769, this.elementSize = t, this;
    }
    setItemSize(e1770) {
        return this.itemSize = e1770, this;
    }
    setCount(e1771) {
        return this.count = e1771, this;
    }
}
GLBufferAttribute.prototype.isGLBufferAttribute = !0;
class Raycaster {
    constructor(e1772, t, r = 0, n = 1 / 0){
        this.ray = new Ray(e1772, t), this.near = r, this.far = n, this.camera = null, this.layers = new Layers, this.params = {
            Mesh: {},
            Line: {
                threshold: 1
            },
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        };
    }
    set(e1773, t) {
        this.ray.set(e1773, t);
    }
    setFromCamera(e1774, t) {
        t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e1774.x, e1774.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t && t.isOrthographicCamera ? (this.ray.origin.set(e1774.x, e1774.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
    }
    intersectObject(e1775, t = !1, r = []) {
        return intersectObject(e1775, this, r, t), r.sort(ascSort), r;
    }
    intersectObjects(e1776, t = !1, r = []) {
        for(let n = 0, i = e1776.length; n < i; n++)intersectObject(e1776[n], this, r, t);
        return r.sort(ascSort), r;
    }
}
function ascSort(e1777, t) {
    return e1777.distance - t.distance;
}
function intersectObject(e1778, t, r, n) {
    if (e1778.layers.test(t.layers) && e1778.raycast(t, r), !0 === n) {
        const n = e1778.children;
        for(let e1779 = 0, i = n.length; e1779 < i; e1779++)intersectObject(n[e1779], t, r, !0);
    }
}
class Spherical {
    constructor(e1780 = 1, t = 0, r = 0){
        return this.radius = e1780, this.phi = t, this.theta = r, this;
    }
    set(e1781, t, r) {
        return this.radius = e1781, this.phi = t, this.theta = r, this;
    }
    copy(e1782) {
        return this.radius = e1782.radius, this.phi = e1782.phi, this.theta = e1782.theta, this;
    }
    makeSafe() {
        return this.phi = Math.max(0.000001, Math.min(Math.PI - 0.000001, this.phi)), this;
    }
    setFromVector3(e1783) {
        return this.setFromCartesianCoords(e1783.x, e1783.y, e1783.z);
    }
    setFromCartesianCoords(e1784, t, r) {
        return this.radius = Math.sqrt(e1784 * e1784 + t * t + r * r), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e1784, r), this.phi = Math.acos(clamp(t / this.radius, -1, 1))), this;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
}
class Cylindrical {
    constructor(e1785 = 1, t = 0, r = 0){
        return this.radius = e1785, this.theta = t, this.y = r, this;
    }
    set(e1786, t, r) {
        return this.radius = e1786, this.theta = t, this.y = r, this;
    }
    copy(e1787) {
        return this.radius = e1787.radius, this.theta = e1787.theta, this.y = e1787.y, this;
    }
    setFromVector3(e1788) {
        return this.setFromCartesianCoords(e1788.x, e1788.y, e1788.z);
    }
    setFromCartesianCoords(e1789, t, r) {
        return this.radius = Math.sqrt(e1789 * e1789 + r * r), this.theta = Math.atan2(e1789, r), this.y = t, this;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
}
const _vector$4 = new Vector2;
class Box2 {
    constructor(e1790 = new Vector2(1 / 0, 1 / 0), t = new Vector2(-1 / 0, -1 / 0)){
        this.min = e1790, this.max = t;
    }
    set(e1791, t) {
        return this.min.copy(e1791), this.max.copy(t), this;
    }
    setFromPoints(e1792) {
        this.makeEmpty();
        for(let t = 0, r = e1792.length; t < r; t++)this.expandByPoint(e1792[t]);
        return this;
    }
    setFromCenterAndSize(e1793, t) {
        const r = _vector$4.copy(t).multiplyScalar(0.5);
        return this.min.copy(e1793).sub(r), this.max.copy(e1793).add(r), this;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    copy(e1794) {
        return this.min.copy(e1794.min), this.max.copy(e1794.max), this;
    }
    makeEmpty() {
        return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y;
    }
    getCenter(e1795) {
        return void 0 === e1795 && (console.warn("THREE.Box2: .getCenter() target is now required"), e1795 = new Vector2), this.isEmpty() ? e1795.set(0, 0) : e1795.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e1796) {
        return void 0 === e1796 && (console.warn("THREE.Box2: .getSize() target is now required"), e1796 = new Vector2), this.isEmpty() ? e1796.set(0, 0) : e1796.subVectors(this.max, this.min);
    }
    expandByPoint(e1797) {
        return this.min.min(e1797), this.max.max(e1797), this;
    }
    expandByVector(e1798) {
        return this.min.sub(e1798), this.max.add(e1798), this;
    }
    expandByScalar(e1799) {
        return this.min.addScalar(-e1799), this.max.addScalar(e1799), this;
    }
    containsPoint(e1800) {
        return !(e1800.x < this.min.x || e1800.x > this.max.x || e1800.y < this.min.y || e1800.y > this.max.y);
    }
    containsBox(e1801) {
        return this.min.x <= e1801.min.x && e1801.max.x <= this.max.x && this.min.y <= e1801.min.y && e1801.max.y <= this.max.y;
    }
    getParameter(e1802, t) {
        return void 0 === t && (console.warn("THREE.Box2: .getParameter() target is now required"), t = new Vector2), t.set((e1802.x - this.min.x) / (this.max.x - this.min.x), (e1802.y - this.min.y) / (this.max.y - this.min.y));
    }
    intersectsBox(e1803) {
        return !(e1803.max.x < this.min.x || e1803.min.x > this.max.x || e1803.max.y < this.min.y || e1803.min.y > this.max.y);
    }
    clampPoint(e1804, t) {
        return void 0 === t && (console.warn("THREE.Box2: .clampPoint() target is now required"), t = new Vector2), t.copy(e1804).clamp(this.min, this.max);
    }
    distanceToPoint(e1805) {
        return _vector$4.copy(e1805).clamp(this.min, this.max).sub(e1805).length();
    }
    intersect(e1806) {
        return this.min.max(e1806.min), this.max.min(e1806.max), this;
    }
    union(e1807) {
        return this.min.min(e1807.min), this.max.max(e1807.max), this;
    }
    translate(e1808) {
        return this.min.add(e1808), this.max.add(e1808), this;
    }
    equals(e1809) {
        return e1809.min.equals(this.min) && e1809.max.equals(this.max);
    }
}
Box2.prototype.isBox2 = !0;
const _startP = new Vector3, _startEnd = new Vector3;
class Line3 {
    constructor(e1810 = new Vector3, t = new Vector3){
        this.start = e1810, this.end = t;
    }
    set(e1811, t) {
        return this.start.copy(e1811), this.end.copy(t), this;
    }
    copy(e1812) {
        return this.start.copy(e1812.start), this.end.copy(e1812.end), this;
    }
    getCenter(e1813) {
        return void 0 === e1813 && (console.warn("THREE.Line3: .getCenter() target is now required"), e1813 = new Vector3), e1813.addVectors(this.start, this.end).multiplyScalar(0.5);
    }
    delta(e1814) {
        return void 0 === e1814 && (console.warn("THREE.Line3: .delta() target is now required"), e1814 = new Vector3), e1814.subVectors(this.end, this.start);
    }
    distanceSq() {
        return this.start.distanceToSquared(this.end);
    }
    distance() {
        return this.start.distanceTo(this.end);
    }
    at(e1815, t) {
        return void 0 === t && (console.warn("THREE.Line3: .at() target is now required"), t = new Vector3), this.delta(t).multiplyScalar(e1815).add(this.start);
    }
    closestPointToPointParameter(e1816, t) {
        _startP.subVectors(e1816, this.start), _startEnd.subVectors(this.end, this.start);
        const r = _startEnd.dot(_startEnd);
        let n = _startEnd.dot(_startP) / r;
        return t && (n = clamp(n, 0, 1)), n;
    }
    closestPointToPoint(e1817, t, r) {
        const n = this.closestPointToPointParameter(e1817, t);
        return void 0 === r && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), r = new Vector3), this.delta(r).multiplyScalar(n).add(this.start);
    }
    applyMatrix4(e1818) {
        return this.start.applyMatrix4(e1818), this.end.applyMatrix4(e1818), this;
    }
    equals(e1819) {
        return e1819.start.equals(this.start) && e1819.end.equals(this.end);
    }
    clone() {
        return (new this.constructor).copy(this);
    }
}
class ImmediateRenderObject extends Object3D {
    constructor(e1820){
        super(), this.material = e1820, this.render = function() {}, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0;
    }
}
ImmediateRenderObject.prototype.isImmediateRenderObject = !0;
const _vector$3 = new Vector3;
class SpotLightHelper extends Object3D {
    constructor(e1822, t){
        super(), this.light = e1822, this.light.updateMatrixWorld(), this.matrix = e1822.matrixWorld, this.matrixAutoUpdate = !1, this.color = t;
        const r = new BufferGeometry, n = [
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            -1,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            1,
            0,
            0,
            0,
            0,
            -1,
            1
        ];
        for(let e1821 = 0, t166 = 1, r93 = 32; e1821 < r93; e1821++, t166++){
            const i = e1821 / r93 * Math.PI * 2, a = t166 / r93 * Math.PI * 2;
            n.push(Math.cos(i), Math.sin(i), 1, Math.cos(a), Math.sin(a), 1);
        }
        r.setAttribute("position", new Float32BufferAttribute(n, 3));
        const i = new LineBasicMaterial({
            fog: !1,
            toneMapped: !1
        });
        this.cone = new LineSegments(r, i), this.add(this.cone), this.update();
    }
    dispose() {
        this.cone.geometry.dispose(), this.cone.material.dispose();
    }
    update() {
        this.light.updateMatrixWorld();
        const e1823 = this.light.distance ? this.light.distance : 1000, t = e1823 * Math.tan(this.light.angle);
        this.cone.scale.set(t, t, e1823), _vector$3.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(_vector$3), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
    }
}
const _vector$2 = new Vector3, _boneMatrix = new Matrix4, _matrixWorldInv = new Matrix4;
class SkeletonHelper extends LineSegments {
    constructor(e1825){
        const t = getBoneList(e1825), r = new BufferGeometry, n = [], i = [], a = new Color(0, 0, 1), o = new Color(0, 1, 0);
        for(let e1824 = 0; e1824 < t.length; e1824++){
            const r = t[e1824];
            r.parent && r.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), i.push(a.r, a.g, a.b), i.push(o.r, o.g, o.b));
        }
        r.setAttribute("position", new Float32BufferAttribute(n, 3)), r.setAttribute("color", new Float32BufferAttribute(i, 3)), super(r, new LineBasicMaterial({
            vertexColors: !0,
            depthTest: !1,
            depthWrite: !1,
            toneMapped: !1,
            transparent: !0
        })), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = e1825, this.bones = t, this.matrix = e1825.matrixWorld, this.matrixAutoUpdate = !1;
    }
    updateMatrixWorld(e1827) {
        const t = this.bones, r = this.geometry, n = r.getAttribute("position");
        _matrixWorldInv.copy(this.root.matrixWorld).invert();
        for(let e1826 = 0, r94 = 0; e1826 < t.length; e1826++){
            const i = t[e1826];
            i.parent && i.parent.isBone && (_boneMatrix.multiplyMatrices(_matrixWorldInv, i.matrixWorld), _vector$2.setFromMatrixPosition(_boneMatrix), n.setXYZ(r94, _vector$2.x, _vector$2.y, _vector$2.z), _boneMatrix.multiplyMatrices(_matrixWorldInv, i.parent.matrixWorld), _vector$2.setFromMatrixPosition(_boneMatrix), n.setXYZ(r94 + 1, _vector$2.x, _vector$2.y, _vector$2.z), r94 += 2);
        }
        r.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e1827);
    }
}
function getBoneList(e1828) {
    const t = [];
    e1828 && e1828.isBone && t.push(e1828);
    for(let r = 0; r < e1828.children.length; r++)t.push.apply(t, getBoneList(e1828.children[r]));
    return t;
}
class PointLightHelper extends Mesh {
    constructor(e1829, t, r){
        super(new SphereGeometry(t, 4, 2), new MeshBasicMaterial({
            wireframe: !0,
            fog: !1,
            toneMapped: !1
        })), this.light = e1829, this.light.updateMatrixWorld(), this.color = r, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
    }
    dispose() {
        this.geometry.dispose(), this.material.dispose();
    }
    update() {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
    }
}
const _vector$1 = new Vector3, _color1 = new Color, _color2 = new Color;
class HemisphereLightHelper extends Object3D {
    constructor(e1830, t, r){
        super(), this.light = e1830, this.light.updateMatrixWorld(), this.matrix = e1830.matrixWorld, this.matrixAutoUpdate = !1, this.color = r;
        const n = new OctahedronGeometry(t);
        n.rotateY(0.5 * Math.PI), this.material = new MeshBasicMaterial({
            wireframe: !0,
            fog: !1,
            toneMapped: !1
        }), void 0 === this.color && (this.material.vertexColors = !0);
        const i = n.getAttribute("position"), a = new Float32Array(3 * i.count);
        n.setAttribute("color", new BufferAttribute(a, 3)), this.add(new Mesh(n, this.material)), this.update();
    }
    dispose() {
        this.children[0].geometry.dispose(), this.children[0].material.dispose();
    }
    update() {
        const e1832 = this.children[0];
        if (void 0 !== this.color) this.material.color.set(this.color);
        else {
            const t = e1832.geometry.getAttribute("color");
            _color1.copy(this.light.color), _color2.copy(this.light.groundColor);
            for(let e1831 = 0, r = t.count; e1831 < r; e1831++){
                const n = e1831 < r / 2 ? _color1 : _color2;
                t.setXYZ(e1831, n.r, n.g, n.b);
            }
            t.needsUpdate = !0;
        }
        e1832.lookAt(_vector$1.setFromMatrixPosition(this.light.matrixWorld).negate());
    }
}
class GridHelper extends LineSegments {
    constructor(e1834 = 10, t = 10, r = 4473924, n = 8947848){
        r = new Color(r), n = new Color(n);
        const i = t / 2, a = e1834 / t, o = e1834 / 2, s = [], l = [];
        for(let e1833 = 0, c = 0, h = -o; e1833 <= t; e1833++, h += a){
            s.push(-o, 0, h, o, 0, h), s.push(h, 0, -o, h, 0, o);
            const t = e1833 === i ? r : n;
            t.toArray(l, c), c += 3, t.toArray(l, c), c += 3, t.toArray(l, c), c += 3, t.toArray(l, c), c += 3;
        }
        const c12 = new BufferGeometry;
        c12.setAttribute("position", new Float32BufferAttribute(s, 3)), c12.setAttribute("color", new Float32BufferAttribute(l, 3)), super(c12, new LineBasicMaterial({
            vertexColors: !0,
            toneMapped: !1
        })), this.type = "GridHelper";
    }
}
class PolarGridHelper extends LineSegments {
    constructor(e1835 = 10, t = 16, r = 8, n = 64, i = 4473924, a = 8947848){
        i = new Color(i), a = new Color(a);
        const o = [], s = [];
        for(let r95 = 0; r95 <= t; r95++){
            const n = r95 / t * (2 * Math.PI), l = Math.sin(n) * e1835, c = Math.cos(n) * e1835;
            o.push(0, 0, 0), o.push(l, 0, c);
            const h = 1 & r95 ? i : a;
            s.push(h.r, h.g, h.b), s.push(h.r, h.g, h.b);
        }
        for(let t167 = 0; t167 <= r; t167++){
            const l = 1 & t167 ? i : a, c = e1835 - e1835 / r * t167;
            for(let e1836 = 0; e1836 < n; e1836++){
                let t = e1836 / n * (2 * Math.PI), r = Math.sin(t) * c, i = Math.cos(t) * c;
                o.push(r, 0, i), s.push(l.r, l.g, l.b), t = (e1836 + 1) / n * (2 * Math.PI), r = Math.sin(t) * c, i = Math.cos(t) * c, o.push(r, 0, i), s.push(l.r, l.g, l.b);
            }
        }
        const l = new BufferGeometry;
        l.setAttribute("position", new Float32BufferAttribute(o, 3)), l.setAttribute("color", new Float32BufferAttribute(s, 3)), super(l, new LineBasicMaterial({
            vertexColors: !0,
            toneMapped: !1
        })), this.type = "PolarGridHelper";
    }
}
const _v1 = new Vector3, _v2 = new Vector3, _v3 = new Vector3;
class DirectionalLightHelper extends Object3D {
    constructor(e1837, t, r){
        super(), this.light = e1837, this.light.updateMatrixWorld(), this.matrix = e1837.matrixWorld, this.matrixAutoUpdate = !1, this.color = r, void 0 === t && (t = 1);
        let n = new BufferGeometry;
        n.setAttribute("position", new Float32BufferAttribute([
            -t,
            t,
            0,
            t,
            t,
            0,
            t,
            -t,
            0,
            -t,
            -t,
            0,
            -t,
            t,
            0
        ], 3));
        const i = new LineBasicMaterial({
            fog: !1,
            toneMapped: !1
        });
        this.lightPlane = new Line(n, i), this.add(this.lightPlane), (n = new BufferGeometry).setAttribute("position", new Float32BufferAttribute([
            0,
            0,
            0,
            0,
            0,
            1
        ], 3)), this.targetLine = new Line(n, i), this.add(this.targetLine), this.update();
    }
    dispose() {
        this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
    }
    update() {
        _v1.setFromMatrixPosition(this.light.matrixWorld), _v2.setFromMatrixPosition(this.light.target.matrixWorld), _v3.subVectors(_v2, _v1), this.lightPlane.lookAt(_v2), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(_v2), this.targetLine.scale.z = _v3.length();
    }
}
const _vector = new Vector3, _camera = new Camera;
class CameraHelper extends LineSegments {
    constructor(e1838){
        const t168 = new BufferGeometry, r96 = new LineBasicMaterial({
            color: 16777215,
            vertexColors: !0,
            toneMapped: !1
        }), n = [], i = [], a = {}, o = new Color(16755200), s = new Color(16711680), l = new Color(43775), c = new Color(16777215), h = new Color(3355443);
        function u(e1839, t, r) {
            d(e1839, r), d(t, r);
        }
        function d(e1840, t) {
            n.push(0, 0, 0), i.push(t.r, t.g, t.b), void 0 === a[e1840] && (a[e1840] = []), a[e1840].push(n.length / 3 - 1);
        }
        u("n1", "n2", o), u("n2", "n4", o), u("n4", "n3", o), u("n3", "n1", o), u("f1", "f2", o), u("f2", "f4", o), u("f4", "f3", o), u("f3", "f1", o), u("n1", "f1", o), u("n2", "f2", o), u("n3", "f3", o), u("n4", "f4", o), u("p", "n1", s), u("p", "n2", s), u("p", "n3", s), u("p", "n4", s), u("u1", "u2", l), u("u2", "u3", l), u("u3", "u1", l), u("c", "t", c), u("p", "c", h), u("cn1", "cn2", h), u("cn3", "cn4", h), u("cf1", "cf2", h), u("cf3", "cf4", h), t168.setAttribute("position", new Float32BufferAttribute(n, 3)), t168.setAttribute("color", new Float32BufferAttribute(i, 3)), super(t168, r96), this.type = "CameraHelper", this.camera = e1838, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e1838.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update();
    }
    update() {
        const e1841 = this.geometry, t = this.pointMap;
        _camera.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), setPoint("c", t, e1841, _camera, 0, 0, -1), setPoint("t", t, e1841, _camera, 0, 0, 1), setPoint("n1", t, e1841, _camera, -1, -1, -1), setPoint("n2", t, e1841, _camera, 1, -1, -1), setPoint("n3", t, e1841, _camera, -1, 1, -1), setPoint("n4", t, e1841, _camera, 1, 1, -1), setPoint("f1", t, e1841, _camera, -1, -1, 1), setPoint("f2", t, e1841, _camera, 1, -1, 1), setPoint("f3", t, e1841, _camera, -1, 1, 1), setPoint("f4", t, e1841, _camera, 1, 1, 1), setPoint("u1", t, e1841, _camera, 0.7, 1.1, -1), setPoint("u2", t, e1841, _camera, -0.7, 1.1, -1), setPoint("u3", t, e1841, _camera, 0, 2, -1), setPoint("cf1", t, e1841, _camera, -1, 0, 1), setPoint("cf2", t, e1841, _camera, 1, 0, 1), setPoint("cf3", t, e1841, _camera, 0, -1, 1), setPoint("cf4", t, e1841, _camera, 0, 1, 1), setPoint("cn1", t, e1841, _camera, -1, 0, -1), setPoint("cn2", t, e1841, _camera, 1, 0, -1), setPoint("cn3", t, e1841, _camera, 0, -1, -1), setPoint("cn4", t, e1841, _camera, 0, 1, -1), e1841.getAttribute("position").needsUpdate = !0;
    }
    dispose() {
        this.geometry.dispose(), this.material.dispose();
    }
}
function setPoint(e1842, t, r, n, i, a, o) {
    _vector.set(i, a, o).unproject(n);
    const s = t[e1842];
    if (void 0 !== s) {
        const e1843 = r.getAttribute("position");
        for(let t = 0, r97 = s.length; t < r97; t++)e1843.setXYZ(s[t], _vector.x, _vector.y, _vector.z);
    }
}
const _box = new Box3;
class BoxHelper extends LineSegments {
    constructor(e1844, t = 16776960){
        const r = new Uint16Array([
            0,
            1,
            1,
            2,
            2,
            3,
            3,
            0,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            4,
            0,
            4,
            1,
            5,
            2,
            6,
            3,
            7
        ]), n = new Float32Array(24), i = new BufferGeometry;
        i.setIndex(new BufferAttribute(r, 1)), i.setAttribute("position", new BufferAttribute(n, 3)), super(i, new LineBasicMaterial({
            color: t,
            toneMapped: !1
        })), this.object = e1844, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
    }
    update(e1845) {
        if (void 0 !== e1845 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && _box.setFromObject(this.object), _box.isEmpty()) return;
        const t = _box.min, r = _box.max, n = this.geometry.attributes.position, i = n.array;
        i[0] = r.x, i[1] = r.y, i[2] = r.z, i[3] = t.x, i[4] = r.y, i[5] = r.z, i[6] = t.x, i[7] = t.y, i[8] = r.z, i[9] = r.x, i[10] = t.y, i[11] = r.z, i[12] = r.x, i[13] = r.y, i[14] = t.z, i[15] = t.x, i[16] = r.y, i[17] = t.z, i[18] = t.x, i[19] = t.y, i[20] = t.z, i[21] = r.x, i[22] = t.y, i[23] = t.z, n.needsUpdate = !0, this.geometry.computeBoundingSphere();
    }
    setFromObject(e1846) {
        return this.object = e1846, this.update(), this;
    }
    copy(e1847) {
        return LineSegments.prototype.copy.call(this, e1847), this.object = e1847.object, this;
    }
}
class Box3Helper extends LineSegments {
    constructor(e1848, t = 16776960){
        const r = new Uint16Array([
            0,
            1,
            1,
            2,
            2,
            3,
            3,
            0,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            4,
            0,
            4,
            1,
            5,
            2,
            6,
            3,
            7
        ]), n = new BufferGeometry;
        n.setIndex(new BufferAttribute(r, 1)), n.setAttribute("position", new Float32BufferAttribute([
            1,
            1,
            1,
            -1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            -1,
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            -1,
            -1,
            -1,
            1,
            -1,
            -1
        ], 3)), super(n, new LineBasicMaterial({
            color: t,
            toneMapped: !1
        })), this.box = e1848, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
    }
    updateMatrixWorld(e1849) {
        const t = this.box;
        t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(0.5), super.updateMatrixWorld(e1849));
    }
}
class PlaneHelper extends Line {
    constructor(e1850, t = 1, r = 16776960){
        const n = r, i = new BufferGeometry;
        i.setAttribute("position", new Float32BufferAttribute([
            1,
            -1,
            1,
            -1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            1,
            1,
            -1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            -1,
            1,
            1,
            1,
            1,
            0,
            0,
            1,
            0,
            0,
            0
        ], 3)), i.computeBoundingSphere(), super(i, new LineBasicMaterial({
            color: n,
            toneMapped: !1
        })), this.type = "PlaneHelper", this.plane = e1850, this.size = t;
        const a = new BufferGeometry;
        a.setAttribute("position", new Float32BufferAttribute([
            1,
            1,
            1,
            -1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            -1,
            1
        ], 3)), a.computeBoundingSphere(), this.add(new Mesh(a, new MeshBasicMaterial({
            color: n,
            opacity: 0.2,
            transparent: !0,
            depthWrite: !1,
            toneMapped: !1
        })));
    }
    updateMatrixWorld(e1851) {
        let t = -this.plane.constant;
        Math.abs(t) < 0.00000001 && (t = 0.00000001), this.scale.set(0.5 * this.size, 0.5 * this.size, t), this.children[0].material.side = t < 0 ? BackSide : FrontSide, this.lookAt(this.plane.normal), super.updateMatrixWorld(e1851);
    }
}
const _axis = new Vector3;
let _lineGeometry, _coneGeometry;
class ArrowHelper extends Object3D {
    constructor(e1852 = new Vector3(0, 0, 1), t = new Vector3(0, 0, 0), r = 1, n = 16776960, i = 0.2 * r, a = 0.2 * i){
        super(), this.type = "ArrowHelper", void 0 === _lineGeometry && ((_lineGeometry = new BufferGeometry).setAttribute("position", new Float32BufferAttribute([
            0,
            0,
            0,
            0,
            1,
            0
        ], 3)), (_coneGeometry = new CylinderGeometry(0, 0.5, 1, 5, 1)).translate(0, -0.5, 0)), this.position.copy(t), this.line = new Line(_lineGeometry, new LineBasicMaterial({
            color: n,
            toneMapped: !1
        })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Mesh(_coneGeometry, new MeshBasicMaterial({
            color: n,
            toneMapped: !1
        })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e1852), this.setLength(r, i, a);
    }
    setDirection(e1853) {
        if (e1853.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
        else if (e1853.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
        else {
            _axis.set(e1853.z, 0, -e1853.x).normalize();
            const t = Math.acos(e1853.y);
            this.quaternion.setFromAxisAngle(_axis, t);
        }
    }
    setLength(e1854, t = 0.2 * e1854, r = 0.2 * t) {
        this.line.scale.set(1, Math.max(0.0001, e1854 - t), 1), this.line.updateMatrix(), this.cone.scale.set(r, t, r), this.cone.position.y = e1854, this.cone.updateMatrix();
    }
    setColor(e1855) {
        this.line.material.color.set(e1855), this.cone.material.color.set(e1855);
    }
    copy(e1856) {
        return super.copy(e1856, !1), this.line.copy(e1856.line), this.cone.copy(e1856.cone), this;
    }
}
class AxesHelper extends LineSegments {
    constructor(e1857 = 1){
        const t = [
            0,
            0,
            0,
            e1857,
            0,
            0,
            0,
            0,
            0,
            0,
            e1857,
            0,
            0,
            0,
            0,
            0,
            0,
            e1857
        ], r = new BufferGeometry;
        r.setAttribute("position", new Float32BufferAttribute(t, 3)), r.setAttribute("color", new Float32BufferAttribute([
            1,
            0,
            0,
            1,
            0.6,
            0,
            0,
            1,
            0,
            0.6,
            1,
            0,
            0,
            0,
            1,
            0,
            0.6,
            1
        ], 3)), super(r, new LineBasicMaterial({
            vertexColors: !0,
            toneMapped: !1
        })), this.type = "AxesHelper";
    }
    dispose() {
        this.geometry.dispose(), this.material.dispose();
    }
}
const _floatView = new Float32Array(1), _int32View = new Int32Array(_floatView.buffer);
class DataUtils {
    static toHalfFloat(e1858) {
        _floatView[0] = e1858;
        const t = _int32View[0];
        let r = t >> 16 & 32768, n = t >> 12 & 2047;
        const i = t >> 23 & 255;
        return i < 103 ? r : i > 142 ? (r |= 31744, r |= (255 == i ? 0 : 1) && 8388607 & t) : i < 113 ? r |= ((n |= 2048) >> 114 - i) + (n >> 113 - i & 1) : (r |= i - 112 << 10 | n >> 1, r += 1 & n);
    }
}
const LOD_MIN = 4, LOD_MAX = 8, SIZE_MAX = Math.pow(2, LOD_MAX), EXTRA_LOD_SIGMA = [
    0.125,
    0.215,
    0.35,
    0.446,
    0.526,
    0.582
], TOTAL_LODS = LOD_MAX - LOD_MIN + 1 + EXTRA_LOD_SIGMA.length, MAX_SAMPLES = 20, ENCODINGS = {
    [LinearEncoding]: 0,
    [sRGBEncoding]: 1,
    [RGBEEncoding]: 2,
    [RGBM7Encoding]: 3,
    [RGBM16Encoding]: 4,
    [RGBDEncoding]: 5,
    [GammaEncoding]: 6
}, backgroundMaterial = new MeshBasicMaterial({
    side: BackSide,
    depthWrite: !1,
    depthTest: !1
}), backgroundBox = new Mesh(new BoxGeometry, backgroundMaterial), _flatCamera = new OrthographicCamera, { _lodPlanes: _lodPlanes , _sizeLods: _sizeLods , _sigmas: _sigmas  } = _createPlanes(), _clearColor = new Color;
let _oldTarget = null;
const PHI = (1 + Math.sqrt(5)) / 2, INV_PHI = 1 / PHI, _axisDirections = [
    new Vector3(1, 1, 1),
    new Vector3(-1, 1, 1),
    new Vector3(1, 1, -1),
    new Vector3(-1, 1, -1),
    new Vector3(0, PHI, INV_PHI),
    new Vector3(0, PHI, -INV_PHI),
    new Vector3(INV_PHI, 0, PHI),
    new Vector3(-INV_PHI, 0, PHI),
    new Vector3(PHI, INV_PHI, 0),
    new Vector3(-PHI, INV_PHI, 0)
];
function convertLinearToRGBE(e1859) {
    const t = Math.max(e1859.r, e1859.g, e1859.b), r = Math.min(Math.max(Math.ceil(Math.log2(t)), -128), 127);
    return e1859.multiplyScalar(Math.pow(2, -r)), (r + 128) / 255;
}
class PMREMGenerator {
    constructor(e1860){
        this._renderer = e1860, this._pingPongRenderTarget = null, this._blurMaterial = _getBlurShader(MAX_SAMPLES), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial);
    }
    fromScene(e1861, t = 0, r = 0.1, n = 100) {
        _oldTarget = this._renderer.getRenderTarget();
        const i = this._allocateTargets();
        return this._sceneToCubeUV(e1861, r, n, i), t > 0 && this._blur(i, 0, 0, t), this._applyPMREM(i), this._cleanup(i), i;
    }
    fromEquirectangular(e1862) {
        return this._fromTexture(e1862);
    }
    fromCubemap(e1863) {
        return this._fromTexture(e1863);
    }
    compileCubemapShader() {
        null === this._cubemapShader && (this._cubemapShader = _getCubemapShader(), this._compileMaterial(this._cubemapShader));
    }
    compileEquirectangularShader() {
        null === this._equirectShader && (this._equirectShader = _getEquirectShader(), this._compileMaterial(this._equirectShader));
    }
    dispose() {
        this._blurMaterial.dispose(), null !== this._cubemapShader && this._cubemapShader.dispose(), null !== this._equirectShader && this._equirectShader.dispose();
        for(let e1864 = 0; e1864 < _lodPlanes.length; e1864++)_lodPlanes[e1864].dispose();
    }
    _cleanup(e1865) {
        this._pingPongRenderTarget.dispose(), this._renderer.setRenderTarget(_oldTarget), e1865.scissorTest = !1, _setViewport(e1865, 0, 0, e1865.width, e1865.height);
    }
    _fromTexture(e1866) {
        _oldTarget = this._renderer.getRenderTarget();
        const t = this._allocateTargets(e1866);
        return this._textureToCubeUV(e1866, t), this._applyPMREM(t), this._cleanup(t), t;
    }
    _allocateTargets(e1867) {
        const t = {
            magFilter: NearestFilter,
            minFilter: NearestFilter,
            generateMipmaps: !1,
            type: UnsignedByteType,
            format: RGBEFormat,
            encoding: _isLDR(e1867) ? e1867.encoding : RGBEEncoding,
            depthBuffer: !1
        }, r = _createRenderTarget(t);
        return r.depthBuffer = !e1867, this._pingPongRenderTarget = _createRenderTarget(t), r;
    }
    _compileMaterial(e1868) {
        const t = new Mesh(_lodPlanes[0], e1868);
        this._renderer.compile(t, _flatCamera);
    }
    _sceneToCubeUV(e1869, t, r, n) {
        const i = new PerspectiveCamera(90, 1, t, r), a = [
            1,
            -1,
            1,
            1,
            1,
            1
        ], o = [
            1,
            1,
            1,
            -1,
            -1,
            -1
        ], s = this._renderer, l = s.autoClear, c = s.outputEncoding, h = s.toneMapping;
        s.getClearColor(_clearColor), s.toneMapping = NoToneMapping, s.outputEncoding = LinearEncoding, s.autoClear = !1;
        let u = !1;
        const d = e1869.background;
        if (d) {
            if (d.isColor) {
                backgroundMaterial.color.copy(d).convertSRGBToLinear(), e1869.background = null;
                const t = convertLinearToRGBE(backgroundMaterial.color);
                backgroundMaterial.opacity = t, u = !0;
            }
        } else {
            backgroundMaterial.color.copy(_clearColor).convertSRGBToLinear();
            const e1870 = convertLinearToRGBE(backgroundMaterial.color);
            backgroundMaterial.opacity = e1870, u = !0;
        }
        for(let t169 = 0; t169 < 6; t169++){
            const r = t169 % 3;
            0 == r ? (i.up.set(0, a[t169], 0), i.lookAt(o[t169], 0, 0)) : 1 == r ? (i.up.set(0, 0, a[t169]), i.lookAt(0, o[t169], 0)) : (i.up.set(0, a[t169], 0), i.lookAt(0, 0, o[t169])), _setViewport(n, r * SIZE_MAX, t169 > 2 ? SIZE_MAX : 0, SIZE_MAX, SIZE_MAX), s.setRenderTarget(n), u && s.render(backgroundBox, i), s.render(e1869, i);
        }
        s.toneMapping = h, s.outputEncoding = c, s.autoClear = l;
    }
    _textureToCubeUV(e1871, t) {
        const r = this._renderer;
        e1871.isCubeTexture ? null == this._cubemapShader && (this._cubemapShader = _getCubemapShader()) : null == this._equirectShader && (this._equirectShader = _getEquirectShader());
        const n = e1871.isCubeTexture ? this._cubemapShader : this._equirectShader, i = new Mesh(_lodPlanes[0], n), a = n.uniforms;
        a.envMap.value = e1871, e1871.isCubeTexture || a.texelSize.value.set(1 / e1871.image.width, 1 / e1871.image.height), a.inputEncoding.value = ENCODINGS[e1871.encoding], a.outputEncoding.value = ENCODINGS[t.texture.encoding], _setViewport(t, 0, 0, 3 * SIZE_MAX, 2 * SIZE_MAX), r.setRenderTarget(t), r.render(i, _flatCamera);
    }
    _applyPMREM(e1872) {
        const t = this._renderer, r = t.autoClear;
        t.autoClear = !1;
        for(let t170 = 1; t170 < TOTAL_LODS; t170++){
            const r = Math.sqrt(_sigmas[t170] * _sigmas[t170] - _sigmas[t170 - 1] * _sigmas[t170 - 1]), n = _axisDirections[(t170 - 1) % _axisDirections.length];
            this._blur(e1872, t170 - 1, t170, r, n);
        }
        t.autoClear = r;
    }
    _blur(e1873, t, r, n, i) {
        const a = this._pingPongRenderTarget;
        this._halfBlur(e1873, a, t, r, n, "latitudinal", i), this._halfBlur(a, e1873, r, r, n, "longitudinal", i);
    }
    _halfBlur(e1876, t, r, n, i, a, o) {
        const s = this._renderer, l = this._blurMaterial;
        "latitudinal" !== a && "longitudinal" !== a && console.error("blur direction must be either latitudinal or longitudinal!");
        const c = new Mesh(_lodPlanes[n], l), h = l.uniforms, u = _sizeLods[r] - 1, d = isFinite(i) ? Math.PI / (2 * u) : 2 * Math.PI / (2 * MAX_SAMPLES - 1), p = i / d, m = isFinite(i) ? 1 + Math.floor(3 * p) : MAX_SAMPLES;
        m > MAX_SAMPLES && console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${MAX_SAMPLES}`);
        const f = [];
        let g = 0;
        for(let e1874 = 0; e1874 < MAX_SAMPLES; ++e1874){
            const t = e1874 / p, r = Math.exp(-t * t / 2);
            f.push(r), 0 == e1874 ? g += r : e1874 < m && (g += 2 * r);
        }
        for(let e1875 = 0; e1875 < f.length; e1875++)f[e1875] = f[e1875] / g;
        h.envMap.value = e1876.texture, h.samples.value = m, h.weights.value = f, h.latitudinal.value = "latitudinal" === a, o && (h.poleAxis.value = o), h.dTheta.value = d, h.mipInt.value = LOD_MAX - r, h.inputEncoding.value = ENCODINGS[e1876.texture.encoding], h.outputEncoding.value = ENCODINGS[e1876.texture.encoding];
        const v = _sizeLods[n];
        _setViewport(t, 3 * Math.max(0, SIZE_MAX - 2 * v), (0 === n ? 0 : 2 * SIZE_MAX) + 2 * v * (n > LOD_MAX - LOD_MIN ? n - LOD_MAX + LOD_MIN : 0), 3 * v, 2 * v), s.setRenderTarget(t), s.render(c, _flatCamera);
    }
}
function _isLDR(e1877) {
    return void 0 !== e1877 && e1877.type === UnsignedByteType && (e1877.encoding === LinearEncoding || e1877.encoding === sRGBEncoding || e1877.encoding === GammaEncoding);
}
function _createPlanes() {
    const e1879 = [], t = [], r = [];
    let n = LOD_MAX;
    for(let i = 0; i < TOTAL_LODS; i++){
        const a = Math.pow(2, n);
        t.push(a);
        let o = 1 / a;
        i > LOD_MAX - LOD_MIN ? o = EXTRA_LOD_SIGMA[i - LOD_MAX + LOD_MIN - 1] : 0 == i && (o = 0), r.push(o);
        const s = 1 / (a - 1), l = -s / 2, c = 1 + s / 2, h = [
            l,
            l,
            c,
            l,
            c,
            c,
            l,
            l,
            c,
            c,
            l,
            c
        ], u = 6, d = 6, p = 3, m = 2, f = 1, g = new Float32Array(p * d * u), v = new Float32Array(m * d * u), _ = new Float32Array(f * d * u);
        for(let e1878 = 0; e1878 < u; e1878++){
            const t = e1878 % 3 * 2 / 3 - 1, r = e1878 > 2 ? 0 : -1, n = [
                t,
                r,
                0,
                t + 2 / 3,
                r,
                0,
                t + 2 / 3,
                r + 1,
                0,
                t,
                r,
                0,
                t + 2 / 3,
                r + 1,
                0,
                t,
                r + 1,
                0
            ];
            g.set(n, p * d * e1878), v.set(h, m * d * e1878);
            const i = [
                e1878,
                e1878,
                e1878,
                e1878,
                e1878,
                e1878
            ];
            _.set(i, f * d * e1878);
        }
        const y = new BufferGeometry;
        y.setAttribute("position", new BufferAttribute(g, p)), y.setAttribute("uv", new BufferAttribute(v, m)), y.setAttribute("faceIndex", new BufferAttribute(_, f)), e1879.push(y), n > LOD_MIN && n--;
    }
    return {
        _lodPlanes: e1879,
        _sizeLods: t,
        _sigmas: r
    };
}
function _createRenderTarget(e1880) {
    const t = new WebGLRenderTarget(3 * SIZE_MAX, 3 * SIZE_MAX, e1880);
    return t.texture.mapping = CubeUVReflectionMapping, t.texture.name = "PMREM.cubeUv", t.scissorTest = !0, t;
}
function _setViewport(e1881, t, r, n, i) {
    e1881.viewport.set(t, r, n, i), e1881.scissor.set(t, r, n, i);
}
function _getBlurShader(e1882) {
    const t = new Float32Array(e1882), r = new Vector3(0, 1, 0);
    return new RawShaderMaterial({
        name: "SphericalGaussianBlur",
        defines: {
            n: e1882
        },
        uniforms: {
            envMap: {
                value: null
            },
            samples: {
                value: 1
            },
            weights: {
                value: t
            },
            latitudinal: {
                value: !1
            },
            dTheta: {
                value: 0
            },
            mipInt: {
                value: 0
            },
            poleAxis: {
                value: r
            },
            inputEncoding: {
                value: ENCODINGS[LinearEncoding]
            },
            outputEncoding: {
                value: ENCODINGS[LinearEncoding]
            }
        },
        vertexShader: _getCommonVertexShader(),
        fragmentShader: `\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t${_getEncodings()}\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,
        blending: NoBlending,
        depthTest: !1,
        depthWrite: !1
    });
}
function _getEquirectShader() {
    const e1883 = new Vector2(1, 1);
    return new RawShaderMaterial({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            texelSize: {
                value: e1883
            },
            inputEncoding: {
                value: ENCODINGS[LinearEncoding]
            },
            outputEncoding: {
                value: ENCODINGS[LinearEncoding]
            }
        },
        vertexShader: _getCommonVertexShader(),
        fragmentShader: `\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t${_getEncodings()}\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,
        blending: NoBlending,
        depthTest: !1,
        depthWrite: !1
    });
}
function _getCubemapShader() {
    return new RawShaderMaterial({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            inputEncoding: {
                value: ENCODINGS[LinearEncoding]
            },
            outputEncoding: {
                value: ENCODINGS[LinearEncoding]
            }
        },
        vertexShader: _getCommonVertexShader(),
        fragmentShader: `\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t${_getEncodings()}\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,
        blending: NoBlending,
        depthTest: !1,
        depthWrite: !1
    });
}
function _getCommonVertexShader() {
    return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
}
function _getEncodings() {
    return "\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t";
}
const LineStrip = 0, LinePieces = 1, NoColors = 0, FaceColors = 1, VertexColors = 2;
function MeshFaceMaterial(e1884) {
    return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), e1884;
}
function MultiMaterial(e1885 = []) {
    return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), e1885.isMultiMaterial = !0, e1885.materials = e1885, e1885.clone = function() {
        return e1885.slice();
    }, e1885;
}
function PointCloud(e1886, t) {
    return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new Points(e1886, t);
}
function Particle(e1887) {
    return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new Sprite(e1887);
}
function ParticleSystem(e1888, t) {
    return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new Points(e1888, t);
}
function PointCloudMaterial(e1889) {
    return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new PointsMaterial(e1889);
}
function ParticleBasicMaterial(e1890) {
    return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new PointsMaterial(e1890);
}
function ParticleSystemMaterial(e1891) {
    return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new PointsMaterial(e1891);
}
function Vertex(e1892, t, r) {
    return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new Vector3(e1892, t, r);
}
function DynamicBufferAttribute(e1893, t) {
    return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."), new BufferAttribute(e1893, t).setUsage(DynamicDrawUsage);
}
function Int8Attribute(e1894, t) {
    return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new Int8BufferAttribute(e1894, t);
}
function Uint8Attribute(e1895, t) {
    return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new Uint8BufferAttribute(e1895, t);
}
function Uint8ClampedAttribute(e1896, t) {
    return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new Uint8ClampedBufferAttribute(e1896, t);
}
function Int16Attribute(e1897, t) {
    return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new Int16BufferAttribute(e1897, t);
}
function Uint16Attribute(e1898, t) {
    return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new Uint16BufferAttribute(e1898, t);
}
function Int32Attribute(e1899, t) {
    return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new Int32BufferAttribute(e1899, t);
}
function Uint32Attribute(e1900, t) {
    return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new Uint32BufferAttribute(e1900, t);
}
function Float32Attribute(e1901, t) {
    return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new Float32BufferAttribute(e1901, t);
}
function Float64Attribute(e1902, t) {
    return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new Float64BufferAttribute(e1902, t);
}
function AxisHelper(e1903) {
    return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new AxesHelper(e1903);
}
function BoundingBoxHelper(e1904, t) {
    return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new BoxHelper(e1904, t);
}
function EdgesHelper(e1905, t) {
    return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new LineSegments(new EdgesGeometry(e1905.geometry), new LineBasicMaterial({
        color: void 0 !== t ? t : 16777215
    }));
}
function WireframeHelper(e1906, t) {
    return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new LineSegments(new WireframeGeometry(e1906.geometry), new LineBasicMaterial({
        color: void 0 !== t ? t : 16777215
    }));
}
function XHRLoader(e1907) {
    return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new FileLoader(e1907);
}
function BinaryTextureLoader(e1908) {
    return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new DataTextureLoader(e1908);
}
function WebGLRenderTargetCube(e1909, t, r) {
    return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."), new WebGLCubeRenderTarget(e1909, r);
}
function CanvasRenderer() {
    console.error("THREE.CanvasRenderer has been removed");
}
function JSONLoader() {
    console.error("THREE.JSONLoader has been removed.");
}
Curve.create = function(e1910, t) {
    return console.log("THREE.Curve.create() has been deprecated"), e1910.prototype = Object.create(Curve.prototype), e1910.prototype.constructor = e1910, e1910.prototype.getPoint = t, e1910;
}, Path.prototype.fromPoints = function(e1911) {
    return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(e1911);
}, GridHelper.prototype.setColors = function() {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
}, SkeletonHelper.prototype.update = function() {
    console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
}, Loader.prototype.extractUrlBase = function(e1912) {
    return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), LoaderUtils.extractUrlBase(e1912);
}, Loader.Handlers = {
    add: function() {
        console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
    },
    get: function() {
        console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
    }
}, Box2.prototype.center = function(e1913) {
    return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(e1913);
}, Box2.prototype.empty = function() {
    return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty();
}, Box2.prototype.isIntersectionBox = function(e1914) {
    return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e1914);
}, Box2.prototype.size = function(e1915) {
    return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(e1915);
}, Box3.prototype.center = function(e1916) {
    return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(e1916);
}, Box3.prototype.empty = function() {
    return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
}, Box3.prototype.isIntersectionBox = function(e1917) {
    return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e1917);
}, Box3.prototype.isIntersectionSphere = function(e1918) {
    return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e1918);
}, Box3.prototype.size = function(e1919) {
    return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(e1919);
}, Sphere.prototype.empty = function() {
    return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
}, Frustum.prototype.setFromMatrix = function(e1920) {
    return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(e1920);
}, Line3.prototype.center = function(e1921) {
    return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(e1921);
}, Matrix3.prototype.flattenToArrayOffset = function(e1922, t) {
    return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e1922, t);
}, Matrix3.prototype.multiplyVector3 = function(e1923) {
    return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e1923.applyMatrix3(this);
}, Matrix3.prototype.multiplyVector3Array = function() {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
}, Matrix3.prototype.applyToBufferAttribute = function(e1924) {
    return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), e1924.applyMatrix3(this);
}, Matrix3.prototype.applyToVector3Array = function() {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
}, Matrix3.prototype.getInverse = function(e1925) {
    return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(e1925).invert();
}, Matrix4.prototype.extractPosition = function(e1926) {
    return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e1926);
}, Matrix4.prototype.flattenToArrayOffset = function(e1927, t) {
    return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e1927, t);
}, Matrix4.prototype.getPosition = function() {
    return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), (new Vector3).setFromMatrixColumn(this, 3);
}, Matrix4.prototype.setRotationFromQuaternion = function(e1928) {
    return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e1928);
}, Matrix4.prototype.multiplyToArray = function() {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
}, Matrix4.prototype.multiplyVector3 = function(e1929) {
    return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), e1929.applyMatrix4(this);
}, Matrix4.prototype.multiplyVector4 = function(e1930) {
    return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e1930.applyMatrix4(this);
}, Matrix4.prototype.multiplyVector3Array = function() {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
}, Matrix4.prototype.rotateAxis = function(e1931) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e1931.transformDirection(this);
}, Matrix4.prototype.crossVector = function(e1932) {
    return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e1932.applyMatrix4(this);
}, Matrix4.prototype.translate = function() {
    console.error("THREE.Matrix4: .translate() has been removed.");
}, Matrix4.prototype.rotateX = function() {
    console.error("THREE.Matrix4: .rotateX() has been removed.");
}, Matrix4.prototype.rotateY = function() {
    console.error("THREE.Matrix4: .rotateY() has been removed.");
}, Matrix4.prototype.rotateZ = function() {
    console.error("THREE.Matrix4: .rotateZ() has been removed.");
}, Matrix4.prototype.rotateByAxis = function() {
    console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
}, Matrix4.prototype.applyToBufferAttribute = function(e1933) {
    return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), e1933.applyMatrix4(this);
}, Matrix4.prototype.applyToVector3Array = function() {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
}, Matrix4.prototype.makeFrustum = function(e1934, t, r, n, i, a) {
    return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(e1934, t, n, r, i, a);
}, Matrix4.prototype.getInverse = function(e1935) {
    return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(e1935).invert();
}, Plane.prototype.isIntersectionLine = function(e1936) {
    return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e1936);
}, Quaternion.prototype.multiplyVector3 = function(e1937) {
    return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e1937.applyQuaternion(this);
}, Quaternion.prototype.inverse = function() {
    return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert();
}, Ray.prototype.isIntersectionBox = function(e1938) {
    return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e1938);
}, Ray.prototype.isIntersectionPlane = function(e1939) {
    return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e1939);
}, Ray.prototype.isIntersectionSphere = function(e1940) {
    return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e1940);
}, Triangle.prototype.area = function() {
    return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
}, Triangle.prototype.barycoordFromPoint = function(e1941, t) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(e1941, t);
}, Triangle.prototype.midpoint = function(e1942) {
    return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(e1942);
}, Triangle.prototypenormal = function(e1943) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(e1943);
}, Triangle.prototype.plane = function(e1944) {
    return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(e1944);
}, Triangle.barycoordFromPoint = function(e1945, t, r, n, i) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Triangle.getBarycoord(e1945, t, r, n, i);
}, Triangle.normal = function(e1946, t, r, n) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Triangle.getNormal(e1946, t, r, n);
}, Shape.prototype.extractAllPoints = function(e1947) {
    return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(e1947);
}, Shape.prototype.extrude = function(e1948) {
    return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new ExtrudeGeometry(this, e1948);
}, Shape.prototype.makeGeometry = function(e1949) {
    return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new ShapeGeometry(this, e1949);
}, Vector2.prototype.fromAttribute = function(e1950, t, r) {
    return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e1950, t, r);
}, Vector2.prototype.distanceToManhattan = function(e1951) {
    return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e1951);
}, Vector2.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
}, Vector3.prototype.setEulerFromRotationMatrix = function() {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
}, Vector3.prototype.setEulerFromQuaternion = function() {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
}, Vector3.prototype.getPositionFromMatrix = function(e1952) {
    return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e1952);
}, Vector3.prototype.getScaleFromMatrix = function(e1953) {
    return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e1953);
}, Vector3.prototype.getColumnFromMatrix = function(e1954, t) {
    return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e1954);
}, Vector3.prototype.applyProjection = function(e1955) {
    return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(e1955);
}, Vector3.prototype.fromAttribute = function(e1956, t, r) {
    return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e1956, t, r);
}, Vector3.prototype.distanceToManhattan = function(e1957) {
    return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e1957);
}, Vector3.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
}, Vector4.prototype.fromAttribute = function(e1958, t, r) {
    return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e1958, t, r);
}, Vector4.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
}, Object3D.prototype.getChildByName = function(e1959) {
    return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e1959);
}, Object3D.prototype.renderDepth = function() {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
}, Object3D.prototype.translate = function(e1960, t) {
    return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e1960);
}, Object3D.prototype.getWorldRotation = function() {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
}, Object3D.prototype.applyMatrix = function(e1961) {
    return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e1961);
}, Object.defineProperties(Object3D.prototype, {
    eulerOrder: {
        get: function() {
            return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
        },
        set: function(e1962) {
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e1962;
        }
    },
    useQuaternion: {
        get: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
        },
        set: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
        }
    }
}), Mesh.prototype.setDrawMode = function() {
    console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
}, Object.defineProperties(Mesh.prototype, {
    drawMode: {
        get: function() {
            return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0;
        },
        set: function() {
            console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
        }
    }
}), SkinnedMesh.prototype.initBones = function() {
    console.error("THREE.SkinnedMesh: initBones() has been removed.");
}, PerspectiveCamera.prototype.setLens = function(e1963, t) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== t && (this.filmGauge = t), this.setFocalLength(e1963);
}, Object.defineProperties(Light.prototype, {
    onlyShadow: {
        set: function() {
            console.warn("THREE.Light: .onlyShadow has been removed.");
        }
    },
    shadowCameraFov: {
        set: function(e1964) {
            console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e1964;
        }
    },
    shadowCameraLeft: {
        set: function(e1965) {
            console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e1965;
        }
    },
    shadowCameraRight: {
        set: function(e1966) {
            console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e1966;
        }
    },
    shadowCameraTop: {
        set: function(e1967) {
            console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e1967;
        }
    },
    shadowCameraBottom: {
        set: function(e1968) {
            console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e1968;
        }
    },
    shadowCameraNear: {
        set: function(e1969) {
            console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e1969;
        }
    },
    shadowCameraFar: {
        set: function(e1970) {
            console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e1970;
        }
    },
    shadowCameraVisible: {
        set: function() {
            console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
        }
    },
    shadowBias: {
        set: function(e1971) {
            console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e1971;
        }
    },
    shadowDarkness: {
        set: function() {
            console.warn("THREE.Light: .shadowDarkness has been removed.");
        }
    },
    shadowMapWidth: {
        set: function(e1972) {
            console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e1972;
        }
    },
    shadowMapHeight: {
        set: function(e1973) {
            console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e1973;
        }
    }
}), Object.defineProperties(BufferAttribute.prototype, {
    length: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length;
        }
    },
    dynamic: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === DynamicDrawUsage;
        },
        set: function() {
            console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(DynamicDrawUsage);
        }
    }
}), BufferAttribute.prototype.setDynamic = function(e1974) {
    return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === e1974 ? DynamicDrawUsage : StaticDrawUsage), this;
}, BufferAttribute.prototype.copyIndicesArray = function() {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
}, BufferAttribute.prototype.setArray = function() {
    console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
}, BufferGeometry.prototype.addIndex = function(e1975) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e1975);
}, BufferGeometry.prototype.addAttribute = function(e1976, t) {
    return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), t && t.isBufferAttribute || t && t.isInterleavedBufferAttribute ? "index" === e1976 ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t), this) : this.setAttribute(e1976, t) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(e1976, new BufferAttribute(arguments[1], arguments[2])));
}, BufferGeometry.prototype.addDrawCall = function(e1977, t, r) {
    void 0 !== r && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e1977, t);
}, BufferGeometry.prototype.clearDrawCalls = function() {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
}, BufferGeometry.prototype.computeOffsets = function() {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
}, BufferGeometry.prototype.removeAttribute = function(e1978) {
    return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(e1978);
}, BufferGeometry.prototype.applyMatrix = function(e1979) {
    return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e1979);
}, Object.defineProperties(BufferGeometry.prototype, {
    drawcalls: {
        get: function() {
            return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups;
        }
    },
    offsets: {
        get: function() {
            return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups;
        }
    }
}), InterleavedBuffer.prototype.setDynamic = function(e1980) {
    return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === e1980 ? DynamicDrawUsage : StaticDrawUsage), this;
}, InterleavedBuffer.prototype.setArray = function() {
    console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
}, ExtrudeGeometry.prototype.getArrays = function() {
    console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
}, ExtrudeGeometry.prototype.addShapeList = function() {
    console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
}, ExtrudeGeometry.prototype.addShape = function() {
    console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
}, Scene.prototype.dispose = function() {
    console.error("THREE.Scene: .dispose() has been removed.");
}, Uniform.prototype.onUpdate = function() {
    return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this;
}, Object.defineProperties(Material.prototype, {
    wrapAround: {
        get: function() {
            console.warn("THREE.Material: .wrapAround has been removed.");
        },
        set: function() {
            console.warn("THREE.Material: .wrapAround has been removed.");
        }
    },
    overdraw: {
        get: function() {
            console.warn("THREE.Material: .overdraw has been removed.");
        },
        set: function() {
            console.warn("THREE.Material: .overdraw has been removed.");
        }
    },
    wrapRGB: {
        get: function() {
            return console.warn("THREE.Material: .wrapRGB has been removed."), new Color;
        }
    },
    shading: {
        get: function() {
            console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
        },
        set: function(e1981) {
            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === e1981;
        }
    },
    stencilMask: {
        get: function() {
            return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask;
        },
        set: function(e1982) {
            console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = e1982;
        }
    }
}), Object.defineProperties(ShaderMaterial.prototype, {
    derivatives: {
        get: function() {
            return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
        },
        set: function(e1983) {
            console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e1983;
        }
    }
}), WebGLRenderer.prototype.clearTarget = function(e1984, t, r, n) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(e1984), this.clear(t, r, n);
}, WebGLRenderer.prototype.animate = function(e1985) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(e1985);
}, WebGLRenderer.prototype.getCurrentRenderTarget = function() {
    return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget();
}, WebGLRenderer.prototype.getMaxAnisotropy = function() {
    return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy();
}, WebGLRenderer.prototype.getPrecision = function() {
    return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision;
}, WebGLRenderer.prototype.resetGLState = function() {
    return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
}, WebGLRenderer.prototype.supportsFloatTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float");
}, WebGLRenderer.prototype.supportsHalfFloatTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float");
}, WebGLRenderer.prototype.supportsStandardDerivatives = function() {
    return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives");
}, WebGLRenderer.prototype.supportsCompressedTextureS3TC = function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc");
}, WebGLRenderer.prototype.supportsCompressedTexturePVRTC = function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc");
}, WebGLRenderer.prototype.supportsBlendMinMax = function() {
    return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax");
}, WebGLRenderer.prototype.supportsVertexTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures;
}, WebGLRenderer.prototype.supportsInstancedArrays = function() {
    return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays");
}, WebGLRenderer.prototype.enableScissorTest = function(e1986) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e1986);
}, WebGLRenderer.prototype.initMaterial = function() {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
}, WebGLRenderer.prototype.addPrePlugin = function() {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
}, WebGLRenderer.prototype.addPostPlugin = function() {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
}, WebGLRenderer.prototype.updateShadowMap = function() {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
}, WebGLRenderer.prototype.setFaceCulling = function() {
    console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
}, WebGLRenderer.prototype.allocTextureUnit = function() {
    console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
}, WebGLRenderer.prototype.setTexture = function() {
    console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
}, WebGLRenderer.prototype.setTexture2D = function() {
    console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
}, WebGLRenderer.prototype.setTextureCube = function() {
    console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
}, WebGLRenderer.prototype.getActiveMipMapLevel = function() {
    return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel();
}, Object.defineProperties(WebGLRenderer.prototype, {
    shadowMapEnabled: {
        get: function() {
            return this.shadowMap.enabled;
        },
        set: function(e1987) {
            console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e1987;
        }
    },
    shadowMapType: {
        get: function() {
            return this.shadowMap.type;
        },
        set: function(e1988) {
            console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e1988;
        }
    },
    shadowMapCullFace: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
        }
    },
    context: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext();
        }
    },
    vr: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr;
        }
    },
    gammaInput: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1;
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
        }
    },
    gammaOutput: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1;
        },
        set: function(e1989) {
            console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === e1989 ? sRGBEncoding : LinearEncoding;
        }
    },
    toneMappingWhitePoint: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1;
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
        }
    }
}), Object.defineProperties(WebGLShadowMap.prototype, {
    cullFace: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
        }
    },
    renderReverseSided: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
        }
    },
    renderSingleSided: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
        }
    }
}), Object.defineProperties(WebGLRenderTarget.prototype, {
    wrapS: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
        },
        set: function(e1990) {
            console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e1990;
        }
    },
    wrapT: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
        },
        set: function(e1991) {
            console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e1991;
        }
    },
    magFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
        },
        set: function(e1992) {
            console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e1992;
        }
    },
    minFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
        },
        set: function(e1993) {
            console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e1993;
        }
    },
    anisotropy: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy;
        },
        set: function(e1994) {
            console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e1994;
        }
    },
    offset: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
        },
        set: function(e1995) {
            console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e1995;
        }
    },
    repeat: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
        },
        set: function(e1996) {
            console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e1996;
        }
    },
    format: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
        },
        set: function(e1997) {
            console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e1997;
        }
    },
    type: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
        },
        set: function(e1998) {
            console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e1998;
        }
    },
    generateMipmaps: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps;
        },
        set: function(e1999) {
            console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e1999;
        }
    }
}), Audio.prototype.load = function(e2000) {
    console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
    const t = this;
    return (new AudioLoader).load(e2000, function(e2001) {
        t.setBuffer(e2001);
    }), this;
}, AudioAnalyser.prototype.getData = function() {
    return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData();
}, CubeCamera.prototype.updateCubeMap = function(e2002, t) {
    return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(e2002, t);
}, CubeCamera.prototype.clear = function(e2003, t, r, n) {
    return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(e2003, t, r, n);
}, ImageUtils.crossOrigin = void 0, ImageUtils.loadTexture = function(e2004, t, r, n) {
    console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
    const i = new TextureLoader;
    i.setCrossOrigin(this.crossOrigin);
    const a = i.load(e2004, r, void 0, n);
    return t && (a.mapping = t), a;
}, ImageUtils.loadTextureCube = function(e2005, t, r, n) {
    console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
    const i = new CubeTextureLoader;
    i.setCrossOrigin(this.crossOrigin);
    const a = i.load(e2005, r, void 0, n);
    return t && (a.mapping = t), a;
}, ImageUtils.loadCompressedTexture = function() {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
}, ImageUtils.loadCompressedTextureCube = function() {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
};
const SceneUtils = {
    createMultiMaterialObject: function() {
        console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
    },
    detach: function() {
        console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
    },
    attach: function() {
        console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
    }
};
function LensFlare() {
    console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js");
}
"undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
        revision: "128"
    }
})), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "128");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["gwufv","fXeAP"], "fXeAP", "parcelRequire8d86")

//# sourceMappingURL=index.46c53d63.js.map
