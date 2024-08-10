//constants can never be changed.Will throw error if changed
const accountId = 1000
//Preferred. Understands block scope{} concept
let accountEmail="siftain@google.com"
//var is not preferred. It doesnt understand block scope{} and functional scope concept
var accountPassword="12345"
//Not preferred. Will understand according to the value assigned.
accountCity="Jaipur"
//prints undefined if no value is assigned
let accountState;

accountEmail="abc@g.com"
accountPassword="222"
accountCity="asansol"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


