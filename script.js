/** Implement a click function to which writes digits on calculator screen */
screen = document.getElementById("screen");let
buttons = document.querySelectorAll('button');
String = "";
arr = Array.from(buttons);
arr.forEach(button => {
button.addEventListener("click",(e)=>{
  if(e.target.innerHTML == '='){
    string = eval(string);
    input.value =string;


  }
    string += e.target.innerHTML;
    

  })

})


  /** Implement a function which clears digits from calculator screen upon  AC button */



 /** Implement a function which enters digit to screen upon pressing any number button and decimal point */


 
/** Implement a function for adding/subtracting/multiplying/dividing first entered number */

/** */