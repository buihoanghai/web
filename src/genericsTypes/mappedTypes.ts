type User = {
	name: string;
	age: number;
}
type  PartialUser ={
	[K in keyof  User]? : User[K];
}
const user1: PartialUser ={name: "Alice"};
const user2: PartialUser ={};
// const user3: PartialUser ={name: "Alice", age:"24"}; //Type string is not assignable to type number

type  ReadonlyUser = {
	readonly [K in keyof User] : User[K];
}
const user4: ReadonlyUser = { name:"Bok", age:30};
// user4.age = 31; //Cannot assign to age because it is a read-only property

type Roles = "admin" | "user" | "guest";
type RolePermissions = {
	[K in Roles]: boolean;
}
const permissions: RolePermissions = {
	admin: false,
	guest: false,
	user: false
}
type MutableUser = {
	-readonly [K in keyof  ReadonlyUser]: ReadonlyUser[K];
}
const mutableUser:MutableUser = { name:"Hai", age:40};
mutableUser.age = 41;