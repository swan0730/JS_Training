class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    greeting() {
        console.log(`Hi! I'm ${this.name.first}`);
    };
    farewell() {
        console.log(`${this.name.first} has left the building. Bye for now!`);
    };
}

let supun = new Person('Supun', 'Wanniarachchi', 24, 'male', ['music']);
supun.greeting();

let pramoda = new Person('Pramoda', 'Wanniarachchi', 24, 'male' ['Cricket']);
pramoda.farewell();

class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests);
        // subject and grade are specific to Teacher
        this.subject = subject;
        this.grade = grade;
    }
}

let snape = new Teacher('Sunil', 'Perera', 58, 'male', ['Potions'], 'Maths', 5);
snape.greeting();
snape.farewell();
console.log(snape.age)
console.log(snape.subject)