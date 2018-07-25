class Foo {
    constructor (){
        alert("Hello");
    }
}

class Bar {
    constructor (who){
        this.me = who;
    }
}

Foo();

Bar.call ({});