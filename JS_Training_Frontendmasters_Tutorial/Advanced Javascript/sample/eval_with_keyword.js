//eval usage
var bar = "bar";

function foo(str) {
    eval(str); //cheating
    console.log(bar);
}

//print "var bar = 42" value
foo("var bar = 42");

//with usage
var obj = {
    a : 2,
    b : 3,
    c : 4
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with (obj) {
    a = b +c;
    d = b -a;
    d = 3;
}

obj.d;
d;