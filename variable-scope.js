// // Variable Scope in JavaScript


// // variable scope => where a variable is recognized and accessible (local & global)

// // local scope
// function function1() {
//     let x = 1; // local used variable
//     console.log(x)
// }

// function function2() {
//     let x = 2;
//     console.log(x)
// }




// // global scope

// const y = "ysuf";// global used variable

// // function4()

// function function3() {
//     console.log(y)
// }

// function function4() {
//     console.log(y)
// }






// // function block scope


// function blockFunction() {
//     let name = "Yusuf";
//     console.log(name)
// }// Normal function

// // blockFunction() // this is function block where can't accece variable glabally only inber function any variable accecs data




// // ==========================



// // var example = "Arman Shaikh";
// // function mainFunction() {
// //     let name = "Yusuf Shaikh";
// //     console.log(name);
// //     console.log(example)
// //     function subFunction() {
// //         let foveratePlace = "Mumbai";
// //         console.log(foveratePlace)

// //         function subFun2() {
// //             console.log("This Sub Function 2")
// //             function subFun3() {
// //                 consoel.log("this is function 3")
// //                 function subFun4() {
// //                     let nameOfSir = "Tarak Sir";
// //                     console.log(nameOfSir)
// //                     const mainName = () => {
// //                         return "This is Kind"
// //                     }
// //                     mainName()
// //                 }
// //                 subFun4()
// //             }
// //             subFun3();
// //         }
// //         subFun2()
// //     }
// //     subFunction()
// // }
// // mainFunction()


// let name = "yusuf";

// if(name.length == 5){
//     console.log("Its Working...")

// }else{
//   console.log("Good")
// }




const btn = document.querySelector('button')
const userData = document.querySelector('.userData')

btn.addEventListener('click', function () {
    const secondLayer = document.querySelector(".background-layer-2")
    const heightDis = secondLayer.style.height = '0';
    const data = prompt('Enter Your Name')
    userData.innerHTML = `
    <h1> ${data} </h1>`;

    if(heightDis == 0){
        console.log("This is Yusuf")
    }

})