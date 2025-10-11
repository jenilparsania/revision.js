const person5 = {
    firstName : "John",
    lastName : "doe",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName : "Kevin",
    lastName : "Peterson"
}

let fullName = person5.fullName.bind(member);
console.log(fullName());


