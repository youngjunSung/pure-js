"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.power = power;

// src/lib.js
var sum = function sum(a, b) {
  return a + b;
};

console.log(sum(3, 4));
var sentences = [{
  subject: "JavaScript",
  verb: "is",
  object: "great"
}, {
  subject: "papago",
  verb: "are",
  object: "large"
}];

var say = function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;
  console.log("".concat(subject).concat(verb).concat(object));
}; // sentence 배열 내에 있는 각 객체별로 subject, verb, object를 연결해 출력


for (var _i = 0, _sentences = sentences; _i < _sentences.length; _i++) {
  var s = _sentences[_i];
  say(s);
}

function power(x, y) {
  // ES7: 지수 연산자
  return Math.pow(x, y);
}
//# sourceMappingURL=lib.js.map
