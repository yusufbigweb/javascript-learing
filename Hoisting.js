// fun()
// console.log(name) // one error here: Uncaught ReferenceError: Cannot access 'name' before initialization

function fun(){
    console.log("Yusuf'S Functions")
}
const name = "Yusuf";
// The Hoisting is the simple word memory and primitive data and non-primitive data



// foo();
// bar();


//function declaration work! 
function foo(){
    console.log(10);
}

// function expresstion stop hoisting!
let bar = function(){
    console.log(5)
}
