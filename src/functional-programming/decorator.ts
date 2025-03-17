//1️⃣ Class Decorators
function Logger(target: Function) {
	console.log(`Class "${target.name}" has been registered.`);
}

@Logger
class UserService1 {
	constructor() {
		console.log("UserService1 instance created.");
	}
}

const userService = new UserService1();



// Method decorator

function AddMilks(
	target: any,
	key: string,
	descriptor: PropertyDescriptor
) {
	const original = descriptor.value;
	descriptor.value = function (...args: any[]) {
		console.log("Adding milk");
		return original.apply(this, args) + " Milks";
	};
}

function AddSugar(target: any, key: string, descriptor: PropertyDescriptor) {
	const original = descriptor.value;
	descriptor.value = function (...args: any[]) {
		console.log("Adding sugar");
		return original.apply(this, args) + " Sugar";
	};
}

class Coffee {
	@AddMilks
	@AddSugar
	serve() {
		return "coffee";
	}
}

const coffee = new Coffee();
console.log(coffee.serve()); // Output: "Adding milk"  →  "coffee Milks"


//Property Decorators
function PriceValidation() {
	return function (target: any, propertyKey: string) {
		let value: number;

		Object.defineProperty(target, propertyKey, {
			get: function () {
				return value;
			},
			set: function (newValue: number) {
				if (newValue < 0) {
					throw new Error("Price cannot be negative");
				}
				value = newValue;
			},
		});
	};
}

class Tea {
	@PriceValidation()
	price!: number;

	constructor(cost: number) {
		this.price = cost;
	}
}

// const tea = new Tea(-100);  //Todo error  throw new Error("Price cannot be negative");
const tea = new Tea(100);  //Todo error  throw new Error("Price cannot be negative");



//Parameter Decorators
function LogParam(target: any, methodName: string, paramIndex: number) {
	console.log(`Method: ${methodName}, Parameter Index: ${paramIndex}`);
}

class UserService {
	greet(@LogParam name: string) {
		console.log(`Hello, ${name}!`);
	}
}

const service = new UserService();
service.greet("John");
