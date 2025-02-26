interface EventMap {
	[key: string]: any;
}

class EventEmitter<T extends EventMap> {
	private listeners: { [K in keyof T]?: ((data: T[K]) => void)[] } = {};

	on<K extends keyof T>(event: K, callback: (data: T[K]) => void) {
		this.listeners[event] = this.listeners[event] || [];
		this.listeners[event]!.push(callback);
	}

	emit<K extends keyof T>(event: K, data: T[K]) {
		this.listeners[event]?.forEach(cb => cb(data));
	}
}

const emitter = new EventEmitter<{ click: number; hover: string }>();
emitter.on("click", (count) => console.log(count * 2)); // count: number
emitter.on("hover", (text) => console.log(text.toUpperCase())); // text: string
emitter.emit("click", 5); // OK
emitter.emit("hover", "hello"); // OK
emitter.emit("click", "wrong"); // Error

interface HasLength {
	length: number;
}

function getLength<T extends HasLength>(item: T): number {
	return item.length;
}

console.log(getLength("hello"));      // OK: string has length
console.log(getLength([1, 2, 3]));    // OK: array has length
console.log(getLength(42));        // Error: number doesn’t have length