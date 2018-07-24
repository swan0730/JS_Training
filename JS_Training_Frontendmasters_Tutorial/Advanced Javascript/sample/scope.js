var foo = function bar() {
    var foo = "baz";
    
    function baz(foo) {
        foo = bar;
        //function
        foo;
    }
    baz();
};

foo();
bar();//error
