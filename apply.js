// With the apply() method, we can write a method that can be used on different objects

const person = {
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName : "Mary",
    lastName : "Doe"
}

console.log(person.fullName.apply(person1))


// the difference between apply and call 

// the apply() method accepts the arguments as an array

const location2 = {
    fullName : function(city,country){
        return this.firstName + " " + this.lastName + " " + city + " " + country;
    }
}

const person3 = {
    firstName : "Ian",
    lastName : "Bell"
}

console.log(location2.fullName.apply(person3,["Manchestor","England"]));

