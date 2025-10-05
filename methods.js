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
