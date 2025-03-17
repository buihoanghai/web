type User = {
	id: number;
	name: string;
	email: string;
}

type PartialUser = Partial<User>;
let user: Partial<User> = {
	id: 1,
	name: "Alice",
};

type FullUser = Required<PartialUser>;
let fullUser: FullUser = {
	id: 1,
	name: "Alice",
	email: "alice@example.com",
};


// let invalidUser: FullUser = {
// 	name: "Alice",
// }
//Todo Error { name: string; } is missing the following properties from type Required<Partial<User>>: id, email

type ImmutableUser = Readonly<FullUser>;
const user1: ImmutableUser = {
	id: 1,
	name: "Alice",
	email: "alice@example.com",
};
// user1.name = "Alice1"; //Todo error Cannot assign to name because it is a read-only


// Pick<T, K> → Picks Specific Properties
type UserPreview = Pick<User, "id" | "name">
// type UserPreview = {id:number, name:string}

let user2: UserPreview = {
	id: 1,
	name: "Alice",
	// email: "alice@example.com", //Todo Error Object literal may only specify known properties, and email does not exist in type UserPreview
}


//Omit<T, K> → Removes Specific Properties
type OmitUser = Omit<User, "email">
let user3: OmitUser = {
	id: 1,
	name: "Alice",
	// email: "alice@example.com", //Todo Error Object literal may only specify known properties, and email does not exist in type OmitUser
}


//6️⃣ Record<K, T> → Creates an Object Type with Fixed Keys
type UserRoles = Record<string, "admin" | "user" | "guest">
// typeUserRoles = {[key:string]:"admin" | "user" | "guest" }
let roles: UserRoles = {
	alice: "admin",
	bob: "user",
	charlie: "guest",
};
// roles["dave"] = "superuser"; //Todo Error Type "superuser" is not assignable to type "admin" | "user" | "guest


//7️⃣ Extract<T, U> → Extracts Types That Exist in Both T and U
type T = "a" | "b" | "c";
type U = "b" | "c" | "d";
type Common = Extract<T,U>; //Expected: "b" | "c"
type Difference = Exclude<T, U>; //Expected : "a"


//NonNullable<T> → Removes null and undefined
type NullableUser = {
	id: number | null;
	name: string | null;
	email: string | null;
};

type NonNullableUser = {
	[K in keyof NullableUser]?: NonNullable<NullableUser[K]>
};

let user4: NonNullableUser = {
	id: 1,
	name: "Alice",
	// email: null,  // ❌ TypeScript should throw an error here
};


//🔟 ReturnType<T> → Gets the Return Type of a Function
function getUser(){
	return {id:1, name:"Alice"};
}
type UserType = ReturnType<typeof getUser>; //Expected: {id: number, name: string}