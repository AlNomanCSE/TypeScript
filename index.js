"use strict";
let friends = ['al', 'Noman'];
console.log(friends.push(123));
const studen = {};
studen.name = "Nikmasn";
console.log(studen.name);
function hello() {
    console.log("hello");
}
hello();
function add(a, b) {
    return a + b;
}
console.log(add(12, 12));
let value = add(12, 13);
let valueINnumber = value;
console.log(valueINnumber.toString());
// enum
var Days;
(function (Days) {
    Days[Days["monday"] = 0] = "monday";
    Days[Days["tuesday"] = 1] = "tuesday";
    Days[Days["wednesday"] = 2] = "wednesday";
    Days[Days["thuyrsday"] = 3] = "thuyrsday";
    Days[Days["friday"] = 4] = "friday";
    Days[Days["saturday"] = 5] = "saturday";
    Days[Days["sunday"] = 6] = "sunday";
})(Days || (Days = {}));
console.log(Days.monday);
let address = 'khulna';
let password = 111231;
console.log(password.toFixed(3));
let Order_1 = {
    title: "Mr.",
    price: 1234,
    status: "Merried"
};
// string literal
let userName;
userName = "LOve";
console.log(typeof userName);
function optionalPermeter(a, b, c) {
    return a + b;
}
console.log(optionalPermeter(100, -12, true));
