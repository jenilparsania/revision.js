//all the functions are the methods

const person = {
    firstName : "Ricky",
    lastName : "Ponting",
    fullName : function(){
        return `Mr. ${this.firstName} ${this.lastName}`;
    }

}

console.log(person.fullName());
/*
this : Alone refers to the global object
in a function : this refers to the global object
in a function in a strict mode : this is undefined
in an object, this refers to the object
in an event, this refers to the element that received the event
Methods like call(),apply(), and bind() can refer this to any object
*/


// call()
// The call() method is a predefined J(avaScript method.
// It can invoke (call) a method with an object as an argument (parameter).

const greet = {
    fullName : function(){
        return "Hello "+ this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName : "Brian",
    lastName : "Lara"
}

const person2 = {
    firstName : "Martin",
    lastName : "Guptill"
}

console.log(greet.fullName.call(person1))
console.log(greet.fullName.call(person2))

// call method with the Arguments
const address = {
    location: function(city,country){
        return `${this.firstName} ${this.lastName} ${city} ${country}`
    }
}

const person3 = {
    firstName : "Jimmy",
    lastName : "Anderson"
}

console.log(address.location.call(person3,"Birmingham","UK"));


