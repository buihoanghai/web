setTimeout(() => console.log("setTimeout"),0);
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));
console.log("Sync code");
console.log("Sync code2");