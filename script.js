/** Implement a click function to which writes digits on calculator screen */

digitbuttons = document.getElementsByClassName("digit");
for(i = 0; i < digitbuttons.lenght; i++ ){
  digitbuttons[i].addEventlistener("click,aclick");
}
function aclick(){
  screen = document.getElementById("screen");
  digit = this.innerHTML;
  currentvalue = screen.value;
  newvalue = currentvalue + digit;
  screen.value = new value;
}  
  /** Implement a function which clears digits from calculator screen upon clicking AC button */
  function clearsdigits(){
  ACbutton = document.getElementsByClassName("ACbutton");
  ACbutton.addEventlistener("click,cleardigits")
  }
  
/** Implement a function which enters digit to screen upon pressing any number button and decimal point */

/** Implement a function for adding/subtracting/multiplying/dividing first entered number */

/** */
