let value: string | number;
value = "Hello";
value = 42;
// value = true; //Error  Type boolean is not assignable to type string | number
function format(input: string | number){
	if(typeof input === "string")
		return input.toUpperCase();
	return input.toFixed();
}
format("abc");
format(123);
// format(true); //Argument of type boolean is not assignable to parameter of type string | number