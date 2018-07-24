//basic idea how it works
a;
b;
var a = b;
var b = 2;
b;
a;

console.log(a);
console.log(b);

//scope: hoisting
function b() {
    return c;
}

var a;
var c;
var d;

a = b();
