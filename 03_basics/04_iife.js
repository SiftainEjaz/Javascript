//IMMEDIATELY INVOKED FUNCTIONS EXPRESSIONS


//SYNTAX for IIFE -> ()() -------> 1st ():- Function statement, 2nd ():- Execution call

//BENEFIT FROM POLLUTING GLOBAL VARIABLES INSIDE THE FUNCTION

//Named IIFE
(function chai()
{
    console.log("DB Connected");
})();

// INCASE OF More than one IIFEs, first IIFE must be terminated by ';' .Doesnt understand when to stop the context.

//Unnamed IIFE
( (name)=> console.log(`DB COnnected for ${name}`) )('Siftain');

( (name)=> console.log(`DB COnnected for ${name}`) )('SAIF')