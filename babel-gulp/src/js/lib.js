// src/lib.js
let sum = (a, b) => a + b;

console.log(sum(3, 4));

const sentences = [
  { subject: "JavaScript", verb: "is", object: "great" },
  { subject: "papago", verb: "are", object: "large" }
];

const say = ({ subject, verb, object }) => {
  console.log(`${subject}${verb}${object}`);
};

// sentence 배열 내에 있는 각 객체별로 subject, verb, object를 연결해 출력
for (let s of sentences) {
  say(s);
}

export function power(x, y) {
  // ES7: 지수 연산자
  return x ** y;
}