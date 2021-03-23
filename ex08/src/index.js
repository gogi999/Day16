class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getPerson() {
        const personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`;
        return personInfo;
    }
}

// const person = new Person("Goran", "gogi9@email.com", 47);
// console.log(person.getPerson());

module.exports = Person;
