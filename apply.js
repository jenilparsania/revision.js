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

console.log(Math.max(1,2,3))

// Math.max do not works on arrays
// we can use the apply method here

console.log(Math.max.apply(null,[1,2,3]))
//  these below examples would also work 

// console.log(Math.max.apply(Math,[1,2,3]))  
// console.log(Math.max.apply(" ",[1,2,3]))