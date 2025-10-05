//all the functions are the methods

const person = {
    firstName : "Ricky",
    lastName : "Ponting",
    fullName : function(){
        return `Mr. ${this.firstName} ${this.lastName}`;
    }

}

console.log(person.fullName());