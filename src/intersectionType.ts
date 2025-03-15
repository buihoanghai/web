type Person = { name: string };
type Employee = { employedId: number };
type Workers = Person & Employee;
const worker: Workers = {
	name: "Hai Bui",
	employedId: 1,
};

interface Car {
	brand: string;
}

interface Electric {
	batteryCapacity: number;
}

type Tesla = Car & Electric;
const myTesla: Tesla = {
	brand: "Tesla",
	batteryCapacity: 100
}