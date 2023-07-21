
//Instructions
/**
 * Step 1: say hi, my name is Brice Light
 * I can help you find a suitable book for your spiritual growth.
 * For new beginners books type 1
 * For books on building a prayer life type 2
 * For books on personal revival type 3
 * 
 * 
 */
//DOM Elements
const chat_response = document.getElementById("chat-response");

//Message array
const first_response = ["hi, my name is Brice Light",
"I can help you find a suitable book for your spiritual growth.",
"For new beginners books type 1",
"For books on building a prayer life type 2",
"For books on personal revival type 3"];

// Function to simulate the typing effect
function typeEffect(element, text, speed) {
    let i = 0;
    function typeCharacter() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeCharacter, speed);
       
      }
    }
    typeCharacter();

    element.innerHTML +="<br>"
  }



//loop to display the message with delay
// for(i=0;i<first_response.length;i++){


    const typingSpeed = 100; // Adjust the speed in milliseconds (lower value = faster)

    typeEffect(chat_response, first_response[0], typingSpeed);
    // chat_response.innerHTML +="<br>";
    typeEffect(chat_response, first_response[1], typingSpeed);
    
    
    

// }