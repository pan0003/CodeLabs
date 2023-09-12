// Exercise 1
function Exercise1() {
    console.log(this);
}

class Exercise1_2 {
    constructor (myName) {
        this.name = myName;
    }
    getName() {
        return this.name;
    }

    
}

const User = () => {
    (this.name = "John Doe"), (this.age = 20);
  };
  const user = new User();
  console.log(user);

  // Exercise 2, 3, 4,
  class PersonE2 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (age < 0) {
            console.log('Age cannot be negative');
        }
        else {
            this._age = value;
        }
    }

    greet() {
        console.log ('${this._name} is ${this._age} and I greet that person');
    }

    static info() {
        return 'This is a Person class';
    }
  }

const personA = new PersonE2('Joe');
const personB = new PersonE2('Kayla');
personA.greet();
personB.greet();
console.log (PersonE2.info);


