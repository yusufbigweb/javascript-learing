console.log(name) // one error here: Uncaught ReferenceError: Cannot access 'name' before initialization
const name = "Yusuf";

function fun(){
    console.log("Yusuf'S Functions")
}
fun()
// The Hoisting is the simple word memory and primitive data and non-primitive data