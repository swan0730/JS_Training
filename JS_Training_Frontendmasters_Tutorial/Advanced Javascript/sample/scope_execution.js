var foo = "bar";

function bar() {
    var foo = "baz";
    
    function baz(foo) {
        foo = "bam";
        bam = "yay";
    }
    baz();
}

bar();
foo;
bam;
bar();