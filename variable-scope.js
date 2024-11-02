// Variable Scope in JavaScript


// variable scope => where a variable is recognized and accessible (local & global)

// local scope
function function1(){
    let x = 1; // local used variable
    console.log(x)
}

function function2(){
    let x = 2;
    console.log(x)
}




// global scope

const y = "ysuf";// global used variable

// function4()

function function3(){
    console.log(y)
}

function function4(){
    console.log(y)
}






// function block scope


function blockFunction(){
    let name = "Yusuf";
    console.log(name)
}// Normal function

blockFunction() // this is function block where can't accece variable glabally only inber function any variable accecs data

