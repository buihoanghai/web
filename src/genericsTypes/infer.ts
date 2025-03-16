//✅ Example 1: Extracting Return Type of a Function
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type User = { id: number; name: string; age: number; };

function fetchUser(): User {
	return {id: 1, name: "John", age: 10};
}

type Order = { orderId: number, amount: number };

function fetchOrder(): Order {
	return {orderId: 1, amount: 1000};
}

type OrderType = MyReturnType<typeof fetchOrder>;
type UserType = MyReturnType<typeof fetchUser>;

// Example usage:
let user: UserType = fetchUser();
console.log(user.id, user.name);
let order: OrderType = fetchOrder();
console.log(order.orderId, order.amount);


//✅ Example 2: Extracting Promise Resolved Value (Awaited<T>)
type MyAwaited<T> = T extends Promise<infer R> ? R : T;

async function fetchData(): Promise<string> {
	return "Hello, World!";
}

type DataType = MyAwaited<ReturnType<typeof fetchData>>;

async function main() {
	let data: DataType = await fetchData();
	console.log(data.toUpperCase());
}

main();


//✅ Example 3: Extracting First Argument Type of a Function
type MyFirstArgumentType<T> = T extends (arg1: infer A, ...args: any[]) => any ? A : never;

function greet(name: string): void {
	console.log(`Hello, ${name}!`);
}

type  MessageType = MyFirstArgumentType<typeof greet>;

// Example usage:
// let message: MessageType = true; //Todo error Type boolean is not assignable to type string
let message: MessageType = "Hai";
greet(message);


//✅ Example 4: Extracting Tuple Element Types
type FirstElement<T> = T extends [infer F, ...any[]] ? F : never;
type Names = ["Alice", "Bob", "Chris"];
type FirstName = FirstElement<Names>; // type FirstName = "Alice"

type LastElement<T> = T extends [...infer R, infer L] ? L : never;
type LastName = LastElement<Names>; // type LastName = "Chris"



// ✅ Example 5: Extracting Object Keys Based on Value Type
type KeysType<T,V> = {
	[K in keyof T]: T[K] extends V ? K : never;
}
type KeysWithType<T,V> = {
	[K in keyof T]: T[K] extends V ? K : never;
}[keyof T]

type NumberKeys = KeysWithType<User, number>;
type NumberKeys1 = KeysType<User, number>;

// Usage example
let idKeys:NumberKeys = "id";