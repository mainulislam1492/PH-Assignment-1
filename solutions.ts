
// Problem 1 : 

function filterEvenNumbers(ar : number[]):number[] {
    const EvenArr = ar.filter((num : number) => {
        // if(num % 2 == 0) return num;
        return num % 2 == 0;
    });

    return EvenArr;
}
console.log(filterEvenNumbers([1, 0, 0, 2, 4, 1,2]));
console.log(filterEvenNumbers([1, 3,5]));

// problem 2 : 

function reverseString(st : string) {
    const sz = st.length;
    if(sz == 0) return "Given String is empty";
    let rst = "";
    for(let i=sz-1; i>=0; i--) {
        rst += st[i];
    }
    st = rst;
    return st;
}

console.log(reverseString("hello"));


// problem 3 : 

function checkType(input : string | number) {
    if(typeof input === "number") return "Number";
    else if(typeof input === "string") return "String";
}

console.log(checkType("Hello"));
console.log(checkType(42));


// problem 4 : 

const getProperty = <T, T1 extends keyof T>(obj:T, key:T1) => {
    return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21, isGood : true };
console.log(getProperty(user, "name"));


// problem 5 : 
interface Book {
   title: string;
   author: string;
   publishedYear: number;
}

function toggleReadStatus(input : Book) {
    return {
       ...input, 
       isRead : true,
    };
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
console.log(toggleReadStatus(myBook));


// problem 6 : 

class Person {
    Name : string;
    Age : number;
    constructor(Name : string, Age : number) {
        this.Name = Name;
        this.Age = Age;
    }
}

class Student extends Person {
    Grade : string;
    constructor(Name : string, Age : number, Grade : string) {
        super(Name, Age);
        this.Grade = Grade;
        // super(Name, Age);
    }
    getDetails() {
        return `Name : ${this.Name}, Age : ${this.Age}, Grade : ${this.Grade}`;
    }
}

const student = new Student("Alice", 20, "A");
student.getDetails();


// problem 7 : 

function getIntersection(ar : number[], ar2 : number[]):number[] {
    const cnt = new Map<number, number>();
    for(let i=0; i<ar.length; i++) {
        cnt.set(ar[i], 1);
    }
    const Array : number[] = [];
    for(let i=0; i<ar2.length; i++) {
        if (cnt.has(ar2[i]) && cnt.get(ar2[i]) === 1) {
            Array.push(ar2[i]);
            cnt.set(ar2[i], 0); //avoid duplicatas value;
        }
    }
    return Array;
}
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
console.log(getIntersection([1, 2, 3, 4, 5], [ 6, 7]));
