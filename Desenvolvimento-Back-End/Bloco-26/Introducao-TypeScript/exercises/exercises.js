"use strict";
exports.__esModule = true;
exports.circle = exports.trapeze = exports.diamond = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return "Ol\u00E1 ".concat(name, "!");
}
exports.greeter = greeter;
function personAge(name, age) {
    return "".concat(name, " tem ").concat(age, " anos!");
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return Math.pow(side, 2);
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function diamond(biggerDiagonal, smallerDiagonal) {
    return (biggerDiagonal * smallerDiagonal) / 2;
}
exports.diamond = diamond;
function trapeze(height, smallerBase, biggerBase) {
    return (height * (biggerBase + smallerBase)) / 2;
}
exports.trapeze = trapeze;
function circle(r, PI) {
    return (r * r) * PI;
}
exports.circle = circle;
