//var c=300

// ***************************GLOBAL SCOPE************************************

let a=50
if(true)
{

    //*************************BLOCK SCOPE*************************************
    let a=10
    console.log("Inner:",a);
    
    const b=20
    //c=30
    //var c=30       // VAR -> DOESNT UNDERSTAND BLOCK AND GLOBAL SCOPE
}

console.log(a);


//console.log(b);
//console.log(c);


//CORE SCOPE IN CONSOLE ON WEB BROWSER and GLOBAL SCOPE ON NODE in Environment

