(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('babel-runtime/helpers/classCallCheck'), require('babel-runtime/helpers/createClass')) :
  typeof define === 'function' && define.amd ? define(['babel-runtime/helpers/classCallCheck', 'babel-runtime/helpers/createClass'], factory) :
  (factory(global._classCallCheck,global._createClass));
}(this, (function (_classCallCheck,_createClass) { 'use strict';

_classCallCheck = 'default' in _classCallCheck ? _classCallCheck['default'] : _classCallCheck;
_createClass = 'default' in _createClass ? _createClass['default'] : _createClass;

var Greeting = function () {
  function Greeting(name) {
    _classCallCheck(this, Greeting);

    this.name = name || 'Guest';
  }

  _createClass(Greeting, [{
    key: 'hello',
    value: function hello() {
      return 'Welcome, ' + this.name + '!';
    }
  }]);

  return Greeting;
}();

var tester = new Greeting('Tester');
tester.hello();

})));
//# sourceMappingURL=index.umd.js.map
