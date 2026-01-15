const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
    city: "New York",
    hobbies: ["reading", "traveling", "swimming"],
    address: {
        street: "123 Main St",
        zip: "10001"
    },
    married: false,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
// Convert the person object to a JSON string
const jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);
// Parse the JSON string back to a JavaScript object
const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

