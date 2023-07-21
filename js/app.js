//Lessons:
/**
 * Variables
 * Function
 * DOM 
 * Array
 * 
 * 
 * /


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

    // element.innerHTML +="<br>"
  }

  function ShowMessage(i){
    chat_response.innerHTML +="<br>";
    typeEffect(chat_response, first_response[i], 100);
    chat_response.innerHTML +="<br>";
  }

 

//loop to display the message with delay
let time = 4000;
for(i=0;i<first_response.length;i++){ 
   
     time +=time;
    // typeEffect(chat_response,"hello", typingSpeed);
     setTimeout(ShowMessage,time,i) ;
    

    //  setTimeout(ShowMessage,10000,1) ;


    //  setTimeout(ShowMessage,20000,2) ;


    //  setTimeout(ShowMessage,30000,3) ;

    //  setTimeout(ShowMessage,40000,4) ;


    //  setTimeout(ShowMessage,5000,2,100) ;

    //  setTimeout(ShowMessage,5000,3,100) ;

    //  setTimeout(ShowMessage,5000,4,100) ;

    

}