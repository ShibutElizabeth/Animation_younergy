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
})({"jK9Pg":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5d976ea45144a9f8";
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

},{}],"cWVbR":[function(require,module,exports) {
var _threeModuleMinJs = require("../libs/three.module.min.js");
var _fragmentGlsl = require("../shaders/fragment.glsl");
var _vertexGlsl = require("../shaders/vertex.glsl");
(function() {
    //Hero banner particle wave animation
    var SEPARATION = 160, AMOUNTX = 140, AMOUNTY = 100;
    let container;
    let camera, scene, renderer;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    let particles, count = 0;
    var moveable = [];
    var limit = 180;
    var clock = new _threeModuleMinJs.Clock();
    var newTime = 0;
    var isWaveDirection = true;
    init();
    animate();
    function init() {
        container = document.body;
        camera = new _threeModuleMinJs.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.01, 30000);
        scene = new _threeModuleMinJs.Scene();
        const numParticles = AMOUNTX * AMOUNTY;
        const positions = new Float32Array(numParticles * 3);
        const scales = new Float32Array(numParticles * 3);
        let i = 0, j = 0;
        for(let ix = 0; ix < AMOUNTX; ix++)for(let iy = 0; iy < AMOUNTY; iy++){
            moveable.push(positions[i], positions[i * 2], 0, 0);
            positions[i] = ix * SEPARATION - AMOUNTX * SEPARATION / 2;
            positions[i + 2] = 0;
            positions[i + 2] = iy * SEPARATION * 3 + AMOUNTY * SEPARATION / 10000;
            scales[j] = 1;
            i += 3;
            j++;
        }
        const geometry = new _threeModuleMinJs.BufferGeometry();
        geometry.setAttribute('position', new _threeModuleMinJs.BufferAttribute(positions, 3));
        geometry.setAttribute('scale', new _threeModuleMinJs.BufferAttribute(scales, 1));
        geometry.setAttribute('moveable', new _threeModuleMinJs.BufferAttribute(new Uint8Array(moveable), 1));
        const material = new _threeModuleMinJs.ShaderMaterial({
            uniforms: {
                color: {
                    value: new _threeModuleMinJs.Color(16777215)
                },
                time: {
                    value: 0
                },
                limits: {
                    value: new _threeModuleMinJs.Vector2(0, limit)
                },
                angle: {
                    value: 0
                },
                speed: {
                    value: 900
                }
            },
            vertexShader: _vertexGlsl,
            fragmentShader: _fragmentGlsl,
            alphaToCoverage: true,
            blending: _threeModuleMinJs.AdditiveBlending,
            depthTest: true,
            transparent: true
        });
        particles = new _threeModuleMinJs.Points(geometry, material);
        scene.add(particles);
        renderer = new _threeModuleMinJs.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setPixelRatio = devicePixelRatio;
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);
        renderer.setClearColor(0, 1);
        container.style.touchAction = 'none';
        window.addEventListener('resize', onWindowResize);
    }
    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    function animate() {
        var lastFrameTime;
        var deltaT;
        function recurse(thisFrameTime) {
            window.requestAnimationFrame(recurse);
            lastFrameTime = lastFrameTime || thisFrameTime;
            deltaT = thisFrameTime - lastFrameTime;
            render(deltaT);
            lastFrameTime = thisFrameTime;
        }
        recurse();
    }
    function render(deltaT) {
        camera.position.x = 0;
        camera.position.y = 760;
        camera.position.z = 20000;
        camera.lookAt(scene.position);
        const positions = particles.geometry.attributes.position.array;
        const scales = particles.geometry.attributes.scale.array;
        let i = 0, j = 0;
        newTime += clock.getDelta();
        newTime += 0.015;
        isWaveDirection ? particles.material.uniforms.time.value += 0.02 : particles.material.uniforms.time.value -= 0.02;
        renderer.render(scene, camera);
        count += 0.08;
    }
})();

},{"../libs/three.module.min.js":"fXeAP","../shaders/fragment.glsl":"gHgxb","../shaders/vertex.glsl":"kKjfY"}],"gHgxb":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nuniform vec3 color;\n\nvoid main() {\n    if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.5) discard;\n    gl_FragColor = vec4(color, 1.0);\n}";

},{}],"kKjfY":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nattribute float scale;\nattribute float moveable;\nuniform float time;\nuniform vec2 limits;\nuniform float speed;\nuniform float angle;\n\nvec2 rotate(vec2 v, float a) {\n    float s = sin(a);\n    float c = cos(a);\n    mat2 m = mat2(c, -s, s, c);\n    return m * v;\n}\n//\tClassic Perlin 3D Noise \n//\tby Stefan Gustavson\n//\nvec4 permute(vec4 x) {\n    return mod(((x * 34.0) + 1.0) * x, 289.0);\n}\nvec4 taylorInvSqrt(vec4 r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec4 fade(vec4 t) {\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n\nfloat cnoise(vec4 P) {\n    vec4 Pi0 = floor(P); // Integer part for indexing\n    vec4 Pi1 = Pi0 + 1.0; // Integer part + 1\n    Pi0 = mod(Pi0, 289.0);\n    Pi1 = mod(Pi1, 289.0);\n    vec4 Pf0 = fract(P); // Fractional part for interpolation\n    vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = vec4(Pi0.zzzz);\n    vec4 iz1 = vec4(Pi1.zzzz);\n    vec4 iw0 = vec4(Pi0.wwww);\n    vec4 iw1 = vec4(Pi1.wwww);\n\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 ixy00 = permute(ixy0 + iw0);\n    vec4 ixy01 = permute(ixy0 + iw1);\n    vec4 ixy10 = permute(ixy1 + iw0);\n    vec4 ixy11 = permute(ixy1 + iw1);\n\n    vec4 gx00 = ixy00 / 7.0;\n    vec4 gy00 = floor(gx00) / 7.0;\n    vec4 gz00 = floor(gy00) / 6.0;\n    gx00 = fract(gx00) - 0.5;\n    gy00 = fract(gy00) - 0.5;\n    gz00 = fract(gz00) - 0.5;\n    vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);\n    vec4 sw00 = step(gw00, vec4(0.0));\n    gx00 -= sw00 * (step(0.0, gx00) - 0.5);\n    gy00 -= sw00 * (step(0.0, gy00) - 0.5);\n\n    vec4 gx01 = ixy01 / 7.0;\n    vec4 gy01 = floor(gx01) / 7.0;\n    vec4 gz01 = floor(gy01) / 6.0;\n    gx01 = fract(gx01) - 0.5;\n    gy01 = fract(gy01) - 0.5;\n    gz01 = fract(gz01) - 0.5;\n    vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);\n    vec4 sw01 = step(gw01, vec4(0.0));\n    gx01 -= sw01 * (step(0.0, gx01) - 0.5);\n    gy01 -= sw01 * (step(0.0, gy01) - 0.5);\n\n    vec4 gx10 = ixy10 / 7.0;\n    vec4 gy10 = floor(gx10) / 7.0;\n    vec4 gz10 = floor(gy10) / 6.0;\n    gx10 = fract(gx10) - 0.5;\n    gy10 = fract(gy10) - 0.5;\n    gz10 = fract(gz10) - 0.5;\n    vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);\n    vec4 sw10 = step(gw10, vec4(0.0));\n    gx10 -= sw10 * (step(0.0, gx10) - 0.5);\n    gy10 -= sw10 * (step(0.0, gy10) - 0.5);\n\n    vec4 gx11 = ixy11 / 7.0;\n    vec4 gy11 = floor(gx11) / 7.0;\n    vec4 gz11 = floor(gy11) / 6.0;\n    gx11 = fract(gx11) - 0.5;\n    gy11 = fract(gy11) - 0.5;\n    gz11 = fract(gz11) - 0.5;\n    vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);\n    vec4 sw11 = step(gw11, vec4(0.0));\n    gx11 -= sw11 * (step(0.0, gx11) - 0.5);\n    gy11 -= sw11 * (step(0.0, gy11) - 0.5);\n\n    vec4 g0000 = vec4(gx00.x, gy00.x, gz00.x, gw00.x);\n    vec4 g1000 = vec4(gx00.y, gy00.y, gz00.y, gw00.y);\n    vec4 g0100 = vec4(gx00.z, gy00.z, gz00.z, gw00.z);\n    vec4 g1100 = vec4(gx00.w, gy00.w, gz00.w, gw00.w);\n    vec4 g0010 = vec4(gx10.x, gy10.x, gz10.x, gw10.x);\n    vec4 g1010 = vec4(gx10.y, gy10.y, gz10.y, gw10.y);\n    vec4 g0110 = vec4(gx10.z, gy10.z, gz10.z, gw10.z);\n    vec4 g1110 = vec4(gx10.w, gy10.w, gz10.w, gw10.w);\n    vec4 g0001 = vec4(gx01.x, gy01.x, gz01.x, gw01.x);\n    vec4 g1001 = vec4(gx01.y, gy01.y, gz01.y, gw01.y);\n    vec4 g0101 = vec4(gx01.z, gy01.z, gz01.z, gw01.z);\n    vec4 g1101 = vec4(gx01.w, gy01.w, gz01.w, gw01.w);\n    vec4 g0011 = vec4(gx11.x, gy11.x, gz11.x, gw11.x);\n    vec4 g1011 = vec4(gx11.y, gy11.y, gz11.y, gw11.y);\n    vec4 g0111 = vec4(gx11.z, gy11.z, gz11.z, gw11.z);\n    vec4 g1111 = vec4(gx11.w, gy11.w, gz11.w, gw11.w);\n\n    vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));\n    g0000 *= norm00.x;\n    g0100 *= norm00.y;\n    g1000 *= norm00.z;\n    g1100 *= norm00.w;\n\n    vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));\n    g0001 *= norm01.x;\n    g0101 *= norm01.y;\n    g1001 *= norm01.z;\n    g1101 *= norm01.w;\n\n    vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));\n    g0010 *= norm10.x;\n    g0110 *= norm10.y;\n    g1010 *= norm10.z;\n    g1110 *= norm10.w;\n\n    vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));\n    g0011 *= norm11.x;\n    g0111 *= norm11.y;\n    g1011 *= norm11.z;\n    g1111 *= norm11.w;\n\n    float n0000 = dot(g0000, Pf0);\n    float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));\n    float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));\n    float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));\n    float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));\n    float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));\n    float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));\n    float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));\n    float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));\n    float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));\n    float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));\n    float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));\n    float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));\n    float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));\n    float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));\n    float n1111 = dot(g1111, Pf1);\n\n    vec4 fade_xyzw = fade(Pf0);\n    vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);\n    vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);\n    vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);\n    vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);\n    float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);\n    return 2.2 * n_xyzw;\n}\n\nvoid main() {\n    float limLen = limits.y - limits.x;\n    vec3 pos = position;\n\n    if (floor(moveable + 0.5) < 1.0) {\n        float dist = float(speed * time * 6.);\n        float currPos = mod(float(pos.z + dist), 3. * limLen);\n        // pos.z += currPos;\n    }\n    pos.z += 3. * limLen * fract(time * 10.);\n\n    float noise = cnoise(vec4(pos.x * 0.0005, pos.z * 0.0002 - time * 1.5, time, 0.));\n    // pos.y += 200.+200.*noise;\n    float n = (sin(pos.x * 0.004 * 0.6 - time * 3.) + 1.) * 60. +\n        (sin(pos.z * 0.004 * 0.2 - time * 4.) + 1.) * 60.;\n    float koef = 140. + n;\n\n    float vscale = n * 0.7;\n    pos.y += koef;\n    vec2 center = vec2(0., 12000.);\n    pos.xz = rotate(pos.xz - center, angle) + center;\n\n    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\n    gl_PointSize = (100. + 180. * noise) * scale * (450.0 / -mvPosition.z);\n    gl_PointSize = vscale * (450.0 / -mvPosition.z);\n    float smoothScale = smoothstep(0., 8400., pos.z);\n    if (pos.z < 8400.) gl_PointSize *= smoothScale;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}";

},{}]},["jK9Pg","cWVbR"], "cWVbR", "parcelRequire8d86")

//# sourceMappingURL=index.5144a9f8.js.map
