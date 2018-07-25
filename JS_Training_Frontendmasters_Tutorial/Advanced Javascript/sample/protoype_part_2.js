function Foo(who) {
    this.me = who;
}

Foo.prototype.identify = function () {
    return "I am" + this.me;
};


var a1 = new Foo("a1");
a1.identify();

var a2 = new Foo("a2");

a1.speak = function () {
    alert("Hello, "+ this.__proto__.identify()+ ".");
};

a1.identify();