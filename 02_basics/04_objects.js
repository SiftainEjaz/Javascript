//Singleton or object made using constructor

//const tinder=new Object();   //Singleton
const tinder={}                //non-Singleton

tinder.userId="123abc"
tinder.name="Siftain"
tinder.isLoggedIn=false

//console.log(tinder);

const regularUser={
    email:"some@gmail.com",
    fullname:
    {
        userFullName:
        {
            firstName:"Siftain",
            lastname:"Ejaz"
        }
    }
}

//console.log(regularUser.fullname.userFullName.firstName);

//Combining objects
const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"a",
    4:"b"
}
const obj4={
    5:"a",
    6:"b"
}
//const obj3={obj1,obj2}

//const obj3=Object.assign({},obj1,obj2,obj4)  //{} -> Target Object for combining all th eobjects

// const obj3={...obj1,...obj2, ...obj4}
// console.log(obj3);

//ARRAY OF OBJECTS
const users=
[
    {
        id:1,
        age:22
    },
    {
        id:2,
        age:24
    },
    {
        id:3,
        age:30
    }
]

// console.log(tinder)
// console.log(Object.keys(tinder))  //Returns an array of keys of the object
// console.log(Object.values(tinder)) //returns an array of values of the object
// console.log(Object.entries(tinder));  //return an array of array of Key value of the object

// console.log(tinder.hasOwnProperty('name'));  //Checking whether property is available in the particular object or not

const course={
    courseName:"JS in Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}


//  ****************OBJECT DESTRUCTURING*************************************


//course.courseInstructor


//after colon, short name given to the proeprties of object
const {courseInstructor:instructor,price:MRP}=course  //after equals represents the object which is to be destructur.
console.log(instructor,MRP);                          //afer const, the values that needs to be fetched

//API gives output in JSON Format(Can be an array as well)
//JSON -> Javascript Object Notation

/*
Example of JSON -> JSON Structuring requires the keys to be in the form of string, hence the quotes
{
    "name":"Siftain",
    "course":"JS in Hindi",
    "price":"Free"
}
*/




