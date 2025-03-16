type User = {
	id: number;
	name: string;
	age: number;
}

type  UserKeys = keyof User; // id | name | age
type NameType = User['name'];
type AgeType = User['age'];


//1. Dynamic Object Property Access
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

const user: User = {
	age: 14,
	id: 1,
	name: "22"
}
const userName = getProperty(user, "name");
// const email = getProperty(user,"email"); //Todo Error Argument of type "email" is not assignable to parameter of type keyof Use


//✅ 2. Creating a Type-Safe Object Filter
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
	const result = {} as Pick<T, K>;
	keys.forEach(key => {
		result[key] = obj[key];
	})
	return result;
}

const partialUser = pick(user, ["name", "id"]); //{name:"22",id:1}
// const invalidPick = pick(user,["email"]); //Todo Error  Type "email" is not assignable to type keyof User


//✅ 3. Restricting Allowed Keys in Objects
type Settings = {
	theme: "light" | "dark";
	notifications: boolean;
	language: "en" | "vi";
	role: "admin" | "editor" | "view"
}
function updateValue<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
	obj[key] = value;
}

let settings: Settings = {
	theme: "light",
	notifications: true,
	language: "en",
	role: "admin"
}
updateValue(settings, "theme", "dark");
updateValue(settings, "notifications", false);
// updateValue(settings, "language", "fr"); //Todo Error Argument of type "fr" is not assignable to parameter of type "en" | "vi"
console.log(settings);
// settings.theme = "blue"; //Todo Error Type "blue" is not assignable to type "light" | "dark"

