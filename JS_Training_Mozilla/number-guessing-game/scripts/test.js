var guessSubmit = document.querySelector('.guessSubmit');

guessSubmit.addEventListener('click', check);

function Person(first, last, age, gender, interests) {
    this.name = {
        'first': first,
        'last' : last
    };
    console.log(this.name.first);

    this.name.first = 'abc';

    console.log(this.name.first);
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
}

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

function check() {
    alert('abc');
}