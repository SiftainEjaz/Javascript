//SINGLETON -> MADE FROM CONSTRUCTOR
//Declared through Object LITERALS will not be Singleton

//SINGLETON
// -> Object.create

//OBJECT LITERALS
//Defined as Key-Value Pair

const mySymbol=Symbol("myKey1")

const JsUser=
{
    name:"Siftain",
    "full name":"Siftain Ejaz",
    age:26,
    [mySymbol]:"myKey2",  //Defining Symbol inside an Object
    email:"sif@gmail.com",
    location:"Asansol",
    isLoggedIn:false,
    lastLoginDays:["Monday","Wednesday"]
}

JsUser.age=34

// console.log(JsUser["full name"]);
// console.log(JsUser["age"]);
// console.log(JsUser[mySymbol]); //Printing  format for SYMBOL
//Object.freeze(JsUser)  //freezes the Object i.e will not accept changes.

JsUser.age=30
//console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Hello");
}

JsUser.greeting2=function(){
    console.log(`Hello,this is ${this.name}`);   //this is used to refer to the current object's properties
    
}

//console.log(JsUser.greeting2);   //Prints [Function(Anonymous)]
console.log(JsUser.greeting2())










