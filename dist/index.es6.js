import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';

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
//# sourceMappingURL=index.es6.js.map
