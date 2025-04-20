//primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbols, Bigint 

const score = 100
const scorevalue = 100.3

const isloggedIn = true
const outsidetemp = null 
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')
//console.log(Id === anotherId)
// false
//const bignumber = 3679374673836478936n

// Reference (non primitive)
// Aarry, Obejects, Functions 

const heros = ["shaktiman", "naagraj", "doga"]
let myobj ={
name : "monishka",
age : 17,
}

const myFunction = function(){
    console.log("hellow world");
}

//console.log(typeof outsidetemp);
// type of 
// null => object 
//boolean => boolean 
// string => string 
// undefined => undefined 
// number => number 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack (primitive) ; heap (non primitive) 

let myname = "monishka"

let anothername = myname 
anothername = "tinkle"

console.log(myname);
console.log(anothername);

let userOne = {
    Email : "monishka@gmail.com",
    upi : "user@bly"
}

let userTwo = userOne 
userTwo.Email = "tinkle@gmail.com"

console.log(userOne.Email);
console.log(userTwo.Email);

