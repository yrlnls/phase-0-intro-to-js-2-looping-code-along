// Code your solutions in this file
// 1) writeCards(namesArray, event)
function writeCards(namesArray, event) {
    const thankYouMessages = []; // Array to hold thank you messages
  
    for (let i = 0; i < namesArray.length; i++) {
      thankYouMessages.push(
        `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`
      ); // Generate thank you message
    }
  
    return thankYouMessages; // Return the array of messages
  }
  
  // 2) countDown(number)
  function countDown(number) {
    while (number >= 0) {
      console.log(number); // Log the current number
      number--; // Decrease the number
    }
  }
