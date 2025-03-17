// Generic Functional Utilities (map<T, U>, filter<T>, etc.)

const map = <T, U>(arr: T[], fn: (n: T) => U): U[] => arr.map(fn);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const double = map(numbers, n => n * 2);

console.log(double);


const filter = <T>(arr: T[], fn: (item: T) => boolean) => arr.filter(fn);
const words = ["apple", "banana", "cheese"];

const capitalize = filter(words, word => word.length > 5);
console.log(capitalize);


//Type-Safe Functional Pipelines

type Func<T> = (n: T) => T;

// const pipe = (...args: any[])=> args.reduce(acc, fn => fn()) => (n : number);
const pipe = <T>(...args: (Func<T>)[]) => (input: T) => args.reduce((acc, fn)=>fn(acc), input);


const addOne = (n: number) => n + 1;
const double2 = (n: number) => n * 2;
console.log(pipe(addOne, double2)(3));
const uppercase = (n:string) => n.toUpperCase();
const greeting = (n:string) => `Hello ${n}`;
console.log(pipe(greeting, uppercase)("world"));

