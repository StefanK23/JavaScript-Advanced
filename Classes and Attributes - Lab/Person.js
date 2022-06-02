class person {

    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;

    }
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }

};

const people = new person('Stefan', 'Kumanov', 24, 'stefan@kum.bg')
console.log(people.toString());