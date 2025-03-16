type CheckString<T> = T extends string ? "Yes" : "No";
let a: CheckString<string>;
let b: CheckString<number>;
// a = "No"; // Type "No" is not assignable to type "Yes"
// b = "Yes"; //  Type "Yes" is not assignable to type "No"
type ExtractProp<T, K extends keyof T> = K extends keyof T ? T[K] : never;
type User = {
	id: number;
	name: string;
	address?: { city: string, country: string };
}

let userName: ExtractProp<User, "name">;
let userId: ExtractProp<User, "id">;
userName = "Alice";
// userId = "1"; // Type string is not assignable to type number
userId = 1;

type OptionalIfExists<T, K extends keyof T> = K extends keyof T ? Partial<T[K]> : T[K];
let updatedUser: OptionalIfExists<User, "address">;
let updatedUser1: OptionalIfExists<User, "id">;
let updatedUser2: OptionalIfExists<User, "name">;
updatedUser = {city: "Paris", country: "France"};
updatedUser = {city: "Paris"};
updatedUser1 = 1;
updatedUser2 = undefined;

type Fruit = { type: "fruit", name: string; sweetness: number };
type Vegetable = { type: "vegetable", name: string; bitterness: number };
type Food = Fruit | Vegetable;
type OnlyFruits<T> = T extends { type: "fruit" } ? T : never;
let fruit: OnlyFruits<Food>;

fruit = {type: "fruit", name: "Apple", sweetness: 100};
// fruit = {type:"fruit", name:"Carrot", bitterness:100}; //Object literal may only specify known properties, and bitterness does not exist in type Fruit

type ApiResponse<T> = {
	success: boolean;
	data: T;
}
type HandleApiResponse<T> = T extends ApiResponse<infer U> ? U : never;
type UserResponse = ApiResponse<User>;
type OrderResponse = ApiResponse<Order>;
type Order = { orderId: number; amount: number };

let extractedUserData: HandleApiResponse<UserResponse>;

let extractedOrderData: HandleApiResponse<OrderResponse>;
extractedOrderData = {orderId: 1, amount: 1000};
extractedUserData = {id: 1, name: "ba"};
let category: HandleApiResponse<{ category: string }>; // else case throw never
// category = {category: "abc"};  //Type { userName: string; } is not assignable to type never

let extractedUserData1: UserResponse;
extractedUserData1 = {
	data: {
		id: 1,
		name: "ab"
	},
	success: true
}


type EnforceNumberReturn<T> = T extends () => infer R ? (R extends number ? T : never) : never;
const validFunction = () => 42;
const invalidFunction = () => "hello";
let allowedFunction :EnforceNumberReturn<typeof validFunction>;
allowedFunction = validFunction;
// allowedFunction = invalidFunction; Type () => //string is not assignable to type () => number Type string is not assignable to type number