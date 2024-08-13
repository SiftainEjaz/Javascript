//var c=300

// ***************************GLOBAL SCOPE************************************

let a=50
if(true)
{

    //*************************BLOCK SCOPE*************************************
    let a=10
    //console.log("Inner:",a);
    
    const b=20
    //c=30
    //var c=30       // VAR -> DOESNT UNDERSTAND BLOCK AND GLOBAL SCOPE
}

//console.log(a);


//console.log(b);
//console.log(c);


//CORE SCOPE IN CONSOLE ON WEB BROWSER and GLOBAL SCOPE ON NODE in Environment



//Child function can access parent parameters
function one()
{
    const username="Siftain";

    function two()
    {
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    //two();
}

one();

if(true)
{
    const username="Siftain"
    if(username=="Siftain")
    {
        const website=" youtube"
        //console.log(username + website);
    }

    //console.log(website);
    
}

//console.log(username);


// ***********************INTERESTING**************************

addone(5)               //No errors

function addone(num)
{
    return num+1
}


//FUNCTIONS CAN ALSO BE STORED INSIDE A VARIABLE(can hold anything)
//DECLARE AND HELD INSIDE A VARIABLE -> ALSO CALLED EXPRESSION

addtwo(5)     //Will give error
const addtwo =function(num)
{
    return num+2
}

//addtwo(5)


