//✅ Example 1: Handling Different Payment Methods
type Payment =
	| { type: "credit_card", cardNumber: string, expiry: string }
	| { type: "paypal"; email: string }
	| { type: "bank_transfer"; accountNumber: string, bankNumber: string };

function processPayment(payment: Payment) {
	switch (payment.type) {
		case "credit_card":
			console.log(`Processing credit card ${payment.cardNumber} for ${payment.expiry}`);
			break;
		case "paypal":
			console.log(`Processing paypal for ${payment.email}`);
			break;
		case "bank_transfer":
			console.log(`Processing bank transfer to ${payment.accountNumber} from ${payment.bankNumber}`);
			break;
	}
}

const pay1: Payment = {type: "credit_card", cardNumber: "1bc", expiry: ""};
processPayment(pay1);


//✅ Example 2: Managing UI States (Loading, Success, Error)
type UIState =
	| { type: "loading" }
  | { type: "success"; data:string }
  | { type: "error"; error: string };

function updateUI(state: UIState) {
	switch (state.type) {
    case "loading":
      console.log("Loading...");
      break;
    case "success":
      console.log("Success:", state.data);
      break;
    case "error":
      console.error("Error:", state.error);
      break;
  }
}
const state1:UIState = {type:"loading"};
updateUI(state1);


// ✅ Example 3: API Response Handling
type APIResponse =
	| { status: "success"; data: string }
	| { status: "error"; error: string }
function handleResponse(response: APIResponse){
	if(response.status === "success"){
		console.log("API call successful:", response.data);
	}else{
		console.error("API call failed:", response.error);
	}
}
const res1: APIResponse = {status:"error", error:"Server down"};
handleResponse(res1);

