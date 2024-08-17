//Generate random colours
const randomColour=function(){
    const hex='0123456789ABCDEF'
    let colour='#'
    for(let i=0;i<6;i++)
    {
        colour+=hex[Math.floor(Math.random() * 16)];
    }

    return colour;
}

let interval;
const startChangingColour=function()
{
    if(interval==null)
        interval=setInterval(changeBgColour,1000)   //Function reference is given and time interval is in milliseconds
    function changeBgColour(){ 
        document.body.style.backgroundColor=randomColour();
    }
}

const stopChangingColour=function()
{
    clearInterval(interval);         //Need to give reference of setInterval
    interval=null;      //Derefrence the value after being used
}

document.querySelector('#start').addEventListener('click',startChangingColour);
document.querySelector('#stop').addEventListener('click',stopChangingColour);



