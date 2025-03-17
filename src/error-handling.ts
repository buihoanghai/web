//Handling null and undefined (strictNullChecks)
function add(a?: number, b?: number): number | null {
    if (a === undefined || b === undefined) {
        return null;
    }
    return a + b;
}
//usage:
console.log(add(1, 2)); // Output: 3
console.log(add(1, undefined)); // Output: null
console.log(add(undefined, 2)); // Output: null
console.log(add(undefined, undefined)); // Output: null


//2. Exception Handling (try-catch, never)
function divide(a: number, b: number): number | never {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
//usage:
try {
    console.log(divide(10, 2)); // Output: 5
    console.log(divide(10, 0)); // Todo - throw exception
} catch (error: any) {
    console.error("An error occurred:", error.message);
}


// 3. Using Type Guards:
interface Animal<T extends string> {
	type: T;
	name: string;
}

interface Dog extends Animal<"dog"> {
	bark(): void;
}

interface Cat extends Animal<"cat"> {
	meow(): void;
}

interface Cow extends Animal<"cow"> {
	boo(): void;
}

// ✅ TypeScript enforces correct types
type AnimalType = Dog | Cat | Cow;

function isAnimalType<T extends AnimalType["type"]>(
	animal: AnimalType,
	type: T
): animal is Extract<AnimalType, { type: T }> {
	return animal.type === type;
}

function greetAnimal(animal: AnimalType) {
	if (isAnimalType(animal, "dog")) {
		animal.bark(); // ✅ Works fine
	} else if (isAnimalType(animal, "cat")) {
		animal.meow();
	} else {
		console.log(`I am a ${animal.type} called ${animal.name}`);
	}
}


// Test cases
const myDog: Dog = {
	type: "dog",
	name: "Buddy",
	bark() {
		console.log("Woof!", this.name);
	}
};

const myCat: Cat = {
	type: "cat",
	name: "Charlie",
	meow() {
		console.log("I am a cat called!", this.name);
	}
};

greetAnimal(myDog);   // ✅ Calls bark(): "Woof!"
greetAnimal(myCat); // ✅ "I am a animal called Charlie"
