//'use strict';

function foo() {
    console.log(this.bar);
}

function test() {
    bar = "barxx";
    console.log(bar);
}

var bar = "bar1";
var o2 = {bar: "bar2", foo: foo};
var o3 = {bar: "bar3", foo: foo};

foo();
test();
o2.foo();
o3.foo();