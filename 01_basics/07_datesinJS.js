//Dates

const myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());  //Prints today's date
// console.log(myDate.toLocaleDateString());  //Prints only today's date in MM/DD/YYYY Format
// console.log(myDate.toLocaleString());  //Prints today's date and time in a format
// console.log(myDate.toLocaleTimeString());  //Prints only time in a format
// console.log(myDate.toISOString()); //Prints YYYY-MM-DD and Time in a format HH:MM:SS
// console.log(myDate.toJSON());
// console.log(typeof myDate);   //Prints Object

//let createdDate=new Date(2024,0,31,15,21,20,1);
let createdDate=new Date("2024-01-14");
// let createdDate=new Date("08-12-2024");
//console.log(createdDate.toLocaleString());

let myTimeStamp=Date.now();

// console.log(myTimeStamp);   //Gets value in milliseconds. Useful for projects where timestamps play role
// console.log(createdDate.getTime());
//console.log(Math.floor(Date.now()/1000));  //Divide it by 1000 to get value in seconds and floor to get round value


let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getDay());  //Weekday ->Monday-1 and so on....
// console.log(newDate.getMonth()+1);
// console.log(`${newDate} and the time is${newDate.getTime()}`)


//CUSTOMISED LOCALE DATE
console.log(newDate.toLocaleString('default',{
    weekday:'short',
    day:'2-digit'
}))
















