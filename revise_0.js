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
