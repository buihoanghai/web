type Status = "success" | "error" | "loading";
type StatusMessage = `api_${Status}`;
let message1: StatusMessage = "api_success";
let message2: StatusMessage = "api_error";
// let message3: StatusMessage = "api_done"; //Todo Error Type "api_done" is not assignable to type "api_success" | "api_error" | "api_loading"


type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type Endpoint = "/users" | "/orders";
type APIRequest = `${HTTPMethod} ${Endpoint}`;
let req1: APIRequest = "GET /orders";
let req2: APIRequest = "GET /users";
let req3: APIRequest = "POST /orders";
// let req4: APIRequest = "PATCH /orders"; //Todo Error Type "PATCH / orders" is not assignable to type


//Extracting Variable Keys Dynamically
type Lang = "en" | "vi";
type TextKey = "title" | "description";

type LocalKey = `${Lang}_${TextKey}`;

type Translations = Record<LocalKey, string>;
type TranslationsType = {
	[K in keyof Translations]?: Translations[K];
}

const translations: TranslationsType = {
	en_title: "",
	vi_description: "",
	vi_title: "hello",
	// fe_title:"Hello" //Todo Error Object literal may only specify known properties, but fe_title does not exist in type TranslationsTyp
}

let t1: string = translations["en_title"];
let t2: string = translations["vi_description"];
let t3: string = translations[""];


//Using keyof and Template Literals
type User = {
	id: number;
	name: string;
	email: string;
}
type PrefixedKeys = `user_${keyof User}`;
type NewUser = {
	[K in keyof User as `user_${K}`]: User[K];
}
let usr1: NewUser = {
	user_email: "ha",
	user_id: 1,
	// user_id:"1", //Todo error Type string is not assignable to type number
	user_name: "a",
}