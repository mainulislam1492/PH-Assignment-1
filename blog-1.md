# Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

## Why is any labeled a "type safety hole 

any is called a type safety hole becauese, any means : Dont cheack this,trust me, that means in ts, 
when we use a variable as a any type we can do anything with it like(we can use Number type functionality,
string type, boolean type ,anything) beacuese in any type dont check the type just use it.

key point :
  - Variable can store any type. 
  - Not check the data type

coding example : 
```
let x : any = "string";
x.toUpperCase();
x.toFixed();
```
both are ok for any type, when run this code, the could will crash at runtime 
beacuese we use toFixed() fn for a string. Thats why any is called a type safety hole.

## why unknown is safer 

unknown is alternative of any and both are similar but not same. 
in unknown type , firstly check the type then use it, you cant use before type checking.

coding example : 
```
let y : unknown = "Hello";
if(typeof y === "string") {
    y.toUpperCase();
}
y.toUpperCase(); // you cant directly because obj is unknown.
```
Key point : 
  - check the data type before using it.
  - prevents unsafe operation.
  

## Type Narrowing  

Type Narrowing means specify the type using check from broad data types.
youre given a parameter x in a fuction, and x can be string, number, boolean etc. the type 
broad, not specific. Now in function you specify the type (apply the functionality or used x 
 based on the type) :
 if (typeof x === "string") { } 
 if(typeof x === "number") { }
 if(typeof x == "boolean") { }
 this is called type narrowing.
 
 key point : 
  - based condition use a variable.

coding example : 
```
function add2(x : number | string) {
   if(typeof x ===  "number") x = x + 2;
   else if(x === "string) x.tostring() + 2;
}
```
 
 different types of type narrowing : 
 Typeguard, in typeof , typeof etc;
