var foo = "abc";

function bar() {
    var foo = "xyz";
    alert(foo)
}

function baz(foo) {
    foo = "lmn";
    alert(foo)
}

document.querySelector('.btnSubmit').addEventListener('click', bar);