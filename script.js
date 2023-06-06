/** Implement a click function to which writes digits on calculator screen */
var screen = document.getElementById("screen");
function handleclick(digit){
  screen.textcontent +=digit; 
}
var btn1 = document.getElementsByClassName("btn-1");
function(){
  handleclick("1")
}
  /** Implement a function which clears digits from calculator screen upon  AC button */
  function clearcalculationscreen(){
    var ACbutton = document.getElementById("Ac-button");
    ACbutton.addEventListener("click",clearcalculationscreen);
    
  }
  
/** Implement a function which enters digit to screen upon pressing any number button and decimal point */

/** Implement a function for adding/subtracting/multiplying/dividing first entered number */

/** */
