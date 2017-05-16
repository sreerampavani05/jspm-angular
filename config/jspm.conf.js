System.config({
  baseURL: "../",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "dev/jspm_packages/github/*",
    "npm:*": "dev/jspm_packages/npm/*"
  },

  map: {
    "LSP-FE-TEAM/CKEditor-WordCount-Plugin": "github:LSP-FE-TEAM/CKEditor-WordCount-Plugin@1.12.1",
    "angular": "github:angular/bower-angular@1.6.4",
    "angular-animate": "github:angular/bower-angular-animate@1.6.4",
    "angular-busy": "npm:angular-busy@4.1.4",
    "angular-ckeditor": "npm:angular-ckeditor@0.3.1",
    "angular-file-upload": "npm:angular-file-upload@2.5.0",
    "angular-gettext": "npm:angular-gettext@2.3.9",
    "angular-material": "github:angular/bower-material@1.1.4",
    "angular-messages": "github:angular/bower-angular-messages@1.6.4",
    "angular-mocks": "github:angular/bower-angular-mocks@1.6.4",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.6.4",
    "angular-ui-router": "github:angular-ui/angular-ui-router-bower@1.0.3",
    "angular-ui-tree": "github:angular-ui-tree/angular-ui-tree@2.22.5",
    "angular-upload": "npm:angular-upload@1.0.13",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "clean-css": "npm:clean-css@4.1.2",
    "codebird": "npm:codebird@2.6.0",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.33",
    "filesaver.js": "npm:filesaver.js@0.2.0",
    "font-awesome": "npm:font-awesome@4.7.0",
    "gsklee/ngStorage": "github:gsklee/ngStorage@0.3.11",
    "json": "github:systemjs/plugin-json@0.3.0",
    "jublonet/codebird-js": "github:jublonet/codebird-js@2.6.0",
    "lodash": "npm:lodash@4.17.4",
    "moment": "npm:moment@2.18.1",
    "moment/moment-timezone": "github:moment/moment-timezone@0.5.9",
    "ng-tasty": "npm:ng-tasty@0.6.1",
    "nvd3": "npm:nvd3@1.8.5",
    "rangy": "npm:rangy@1.3.0",
    "slevithan/xregexp": "github:slevithan/xregexp@3.2.0",
    "text": "github:systemjs/plugin-text@0.0.9",
    "textAngular": "github:textAngular/textAngular@1.5.16",
    "github:angular/bower-angular-animate@1.6.4": {
      "angular": "github:angular/bower-angular@1.6.4"
    },
    "github:angular/bower-angular-aria@1.6.4": {
      "angular": "github:angular/bower-angular@1.6.4"
    },
    "github:angular/bower-angular-messages@1.6.4": {
      "angular": "github:angular/bower-angular@1.6.4"
    },
    "github:angular/bower-angular-mocks@1.6.4": {
      "angular": "github:angular/bower-angular@1.6.4"
    },
    "github:angular/bower-angular-sanitize@1.6.4": {
      "angular": "github:angular/bower-angular@1.6.4"
    },
    "github:angular/bower-material@1.1.4": {
      "angular": "github:angular/bower-angular@1.6.4",
      "angular-animate": "github:angular/bower-angular-animate@1.6.4",
      "angular-aria": "github:angular/bower-angular-aria@1.6.4",
      "css": "github:systemjs/plugin-css@0.1.33"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.6"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:angular-busy@4.1.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular-ckeditor@0.3.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular-file-upload@2.5.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:angular-gettext@2.3.9": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular-upload@1.0.13": {
      "angular": "npm:angular@1.6.4",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.0.6": {
      "base64-js": "npm:base64-js@1.2.0",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:clean-css@4.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:codebird@2.6.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:font-awesome@4.7.0": {
      "css": "github:systemjs/plugin-css@0.1.33"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ng-tasty@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:nvd3@1.8.5": {
      "d3": "npm:d3@3.5.17",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
