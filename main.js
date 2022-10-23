// kalkulatori zori

let a = Number(prompt("1-sonni kirit"));
let matematik_amal = prompt("nimadr amal kirit ");
let b = Number(prompt("2-sonniyam kirit"));

switch (1) {
    case 1:
        if (matematik_amal == "+") {
            console.log(a + b);
        }
            else if (matematik_amal == "-") {
            console.log(a - b);
        }
            else if (matematik_amal == "/") {
            console.log(a / b);
        } 
            else if (matematik_amal == "*") {
            console.log(a * b);
        }
            else if (matematik_amal == '%') {
                console.log(a % b);
            }
            else {
            console.log("miyeni iwlatey son  kirit");
        }
}

// tub sonlani topamz 

let d = prompt('son kirit')
let x = 0
    for(let i = 1; i <= d; i++) {
        if(d % i == 0){
            x = x + 1
        }
    }
        if(x == 2){
            console.log("tub");
        }
        else if(x > 2) {
            console.log('murakkkab');
        }
        else {
            console.log("murakabamass tubbamaas");
        }


let aaa = 'diyorjonxolmurorodv'

for(let i = 0; i < aaa.length; i++){
    console.log(aaa [8]);
}

// // shkolllllaalaasde

let shklad = 200;
let yana_shkalad = 400;

for (let i = 1; i <= 10; i++) {
  console.log(i + " kg " + shklad * i + "$");
}