
# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

Generics in ts that allow you to build functions, classes, and components that work with 
different data types while still preserving strict type checking.
Thats allow developers to create reusable components that
can work with multiple data types while maintaining type safety. 

Generics allow you to preserve the type dynamically.

coding example : 
 
```
function identity<T>(value: T): T {
  return value;
}

const result = identity<string>("hello");
```
``` 
function fistvalue<T>(arr: T[]): T {
  return arr[0];
}

const x = fistvalue([1, 2, 3]);  
const y = fistvalue(["a", "b"]); 
```

Generics in TypeScript allow developers to build  reusable
and scalable components without sacrificing type safety. Instead 
of using unsafe approaches like any, we can use generics where 
generics preserve relationships
between inputs and outputs by adapting different data types.
