// closures
//A closure is a function that retains access to its lexical scope, 
// even when the function is executed outside that scope.
// Use Cases : Data Privacy, Memoziation,Currying and Maintaining state
function outer(){
    let count = 1;
    return function inner(){
        count*=4;
        return count;
    };

}

const counter = outer();
console.log(counter()); // 4
console.log(counter()); // 16

// Protypes and Inheritance
function Person(name){
    this.name = name;
}
Person.prototype.greet = function(){
    return `hello, ${this.name}`;
};

const zack = new Person("Zack Smith");
console.log(zack.greet()); // hello , Zack Smith 

// We can do this by class syntax as well for cleaner inheritance
class Person2 {
    constructor(name){
        this.name = name;
    }
    greet(){
        return `Hello, ${this.name}`;
    }
}

const steve = new Person2("Steve Smith");
console.log(steve.greet()); // Hello, Steve Smith


