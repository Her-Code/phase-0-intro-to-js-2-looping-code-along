// Code your solutions in this file
function writeCards(names, eventName) {
    const messages = []; //empty array
    for (let i = 0; i < names.length; i++) { // input array
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`; //create a thank you message
      messages.push(message); //message is added to array
    }
    return messages;
  }
  
  // Example usage:
  const thankYouMessages = writeCards(["Guadalupe", "Ollie", "Aki"], "birthday");
  console.log(thankYouMessages);


//function was okay
  function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}
countDown(10);

let i = 4;

for (let i = 4; i >= 0; i--) {
    console.log(i); // Output: 4 3 2 1 0
}