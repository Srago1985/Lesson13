//promise
const getAnswer = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Simulate success or failure
            if (success) {
                resolve("Here is your answer!");
            } else {
                reject("Failed to get the answer.");
            }
        }
        , 2000);
    });
}
getAnswer()
    .then(answer => {
        console.log("Success:", answer);
        return getAnswer();        
    })
    .then(answer2 => {
        console.log("This runs after the first then.", answer2);
        return getAnswer(); 
    })
    .then(answer3 => {
        console.log("This runs after the second then.", answer3);         
    })
    .catch(error => {
        console.log("Error:", error);
    });     