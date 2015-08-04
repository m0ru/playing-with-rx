System.config({
  "baseURL": "/",
  "defaultJSExtensions": true,
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  }
});

System.config({
  "map": {
    "@cycle/core": "npm:@cycle/core@1.0.2",
    "@cycle/dom": "npm:@cycle/dom@3.2.1",
    "babel": "npm:babel-core@5.7.4",
    "babel-runtime": "npm:babel-runtime@5.7.0",
    "core-js": "npm:core-js@0.9.18",
    "cyclejs": "npm:cyclejs@0.24.1",
    "rx": "npm:rx@3.0.0",
    "system-image": "npm:system-image@0.1.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:@cycle/core@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "rx": "npm:rx@2.5.3"
    },
    "npm:@cycle/dom@3.2.1": {
      "@cycle/core": "npm:@cycle/core@1.0.2",
      "es6-map": "npm:es6-map@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "vdom-parser": "npm:vdom-parser@1.2.1",
      "vdom-to-html": "npm:vdom-to-html@2.1.1",
      "virtual-dom": "npm:virtual-dom@2.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.7.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:cyclejs@0.24.1": {
      "es6-map": "npm:es6-map@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "rx": "npm:rx@2.5.3",
      "vdom-to-html": "npm:vdom-to-html@2.1.1",
      "virtual-dom": "npm:virtual-dom@2.0.1"
    },
    "npm:d@0.1.1": {
      "es5-ext": "npm:es5-ext@0.10.7"
    },
    "npm:error@4.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelize": "npm:camelize@1.0.0",
      "string-template": "npm:string-template@0.2.1",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:es5-ext@0.10.7": {
      "es6-iterator": "npm:es6-iterator@0.1.3",
      "es6-symbol": "npm:es6-symbol@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:es6-iterator@0.1.3": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "es6-symbol": "npm:es6-symbol@2.0.1"
    },
    "npm:es6-map@0.1.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "es6-iterator": "npm:es6-iterator@0.1.3",
      "es6-set": "npm:es6-set@0.1.1",
      "es6-symbol": "npm:es6-symbol@0.1.1",
      "event-emitter": "npm:event-emitter@0.3.3"
    },
    "npm:es6-set@0.1.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "es6-iterator": "npm:es6-iterator@0.1.3",
      "es6-symbol": "npm:es6-symbol@0.1.1",
      "event-emitter": "npm:event-emitter@0.3.3"
    },
    "npm:es6-symbol@0.1.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7"
    },
    "npm:es6-symbol@2.0.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7"
    },
    "npm:ev-store@7.0.0": {
      "individual": "npm:individual@3.0.0"
    },
    "npm:event-emitter@0.3.3": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:global@4.3.0": {
      "process": "npm:process@0.5.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:next-tick@0.2.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:param-case@1.1.1": {
      "sentence-case": "npm:sentence-case@1.1.2"
    },
    "npm:rx@2.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:rx@3.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sentence-case@1.1.2": {
      "lower-case": "npm:lower-case@1.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vdom-parser@1.2.1": {
      "virtual-dom": "npm:virtual-dom@2.1.0"
    },
    "npm:vdom-to-html@2.1.1": {
      "escape-html": "npm:escape-html@1.0.2",
      "param-case": "npm:param-case@1.1.1",
      "virtual-dom": "npm:virtual-dom@2.1.0",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:virtual-dom@2.0.1": {
      "browser-split": "npm:browser-split@0.0.1",
      "error": "npm:error@4.4.0",
      "ev-store": "npm:ev-store@7.0.0",
      "global": "npm:global@4.3.0",
      "is-object": "npm:is-object@1.0.1",
      "next-tick": "npm:next-tick@0.2.2",
      "x-is-array": "npm:x-is-array@0.1.0",
      "x-is-string": "npm:x-is-string@0.1.0"
    },
    "npm:virtual-dom@2.1.0": {
      "browser-split": "npm:browser-split@0.0.1",
      "error": "npm:error@4.4.0",
      "ev-store": "npm:ev-store@7.0.0",
      "global": "npm:global@4.3.0",
      "is-object": "npm:is-object@1.0.1",
      "next-tick": "npm:next-tick@0.2.2",
      "x-is-array": "npm:x-is-array@0.1.0",
      "x-is-string": "npm:x-is-string@0.1.0"
    }
  }
});

