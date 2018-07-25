function Foo(who) {
    this.me = who;
}

Foo.prototype.speak = function () {
    alert("Hello, I am" + this.me+ ".");
};

var a1 = new Foo("a1");

a1.speak();