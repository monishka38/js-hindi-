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

console.log(typeof outsidetemp);
// type of 
// null => object 
//boolean => boolean 
// string => string 
// undefined => undefined 
// number => number 
