//TS identifies type based on intiial assigned value and the type is immutable

let str = "foo"
let num = 5
let bool = true

//Once a type is initalized lets can only be changed to its declared type

str = "bar" //runs
str = 5 // compiler catches error


//if you need to initialize a variable without assigning an initial value, you can explicitly tell TS what kind of value will be stored in the future

let foo: string;
let bar: number;
let biz: boolean;


//Arrays types are determined by their initial value, if an array contains only string data, only string data can be pushed to the array. 

let arr = ['Papaya', 'Bicente', 'Mijo']

arr.push(5) //compiler throws error


//changing the values inside to a different type
arr = [1,2.3] // compiler throws error



// array intiazlied with all data types

let array = [1, "john", true, 1.576]

array.push(10,"gary", false, 2.3456) // push method throws no errors


//like data types, arrays can be declared and explicitly told what they are supposed to contain in the future

let array1: string[]


array1 = "gary" //throws an error

array1 = ["gary"] //clears 


//note that let array1: string[] doesnt actually ASSIGN an empty array to the variable, to do that, it would look like this

let array2: string[] = []



//union types allow you to declare multiple types to be allowed inside a variable

let uid: string|number

uid = "john"
uid = 5 // both assignments clear



// for arrays, the union has to be within parantheses

let mixed: (string|number)[] = [] // this array now accepts string and number values




let person: object;

person = {
    name: "david",
    age: 25,
    gay: true
}

// explicit definition of person and its property types

let person2: {
    name: string,
    age: number,
    gay: boolean
}


//the later assignment of those values
person2 = {
    name: "david",
    age: 25,
    gay: true
}





//Dynamic (any) types allow a variable to accept any data type
let whatever: any = 25

whatever = true
whatever = "hello"
whatever = ['hello','gay','lord']
whatever = ['hello', 45, true, 34.65]
whatever = {
    name: "hubert", 
    age: 5, 
    gay: true 
    }

//any array and object example
  let a: any[] = []

  let obj: {
    name: any, 
    age: any, 
    gay: any, 
    friends: any
}  

 // all assigments clear past the compiler, however this type assignment basically reverts TS back to vanilla JS 
 //and removes all the beenfits of using TS in the first place. use only in certain special situations.


 //Functions


//functions work as they normally would

function f(){

}
const example = function(){

}
const example2 = () => {

}



// you can explicity declare a variable will contain a function in the future

 let getName: Function

getName = function(){

}

getName = () => {

}




//functions with explicit return values
 function getAge(age: number): number{
    return age
 }

//if a function does not return a value, it automatically assigns the void value, but you can be explicit as well
function logName(name: string): void{
    console.log(name)
}









// type aliasing is like storing the various types withina variable


type StringOrNum = string | number

const logDetails = (uid: StringOrNum, item: string) => {

}




type ObjectWithName =  {name: string, uid: StringOrNum, age: number, sexuality?: boolean}

const greet = (user: ObjectWithName) => {
    console.log(`${user.name} says hello`)
}

