/* global console, alert(), onclick() */

//hide results before calculating

var tipResults = document.getElementById("results").style.display = "none";


//Variables
 
function tipCalculation() {

    "use strict";
    
const amountOfBill = document.getElementById("bill").value,
      myQuality = document.getElementById("quality").value,
      numOfPeople = document.getElementById("people").value;


//Validation of 3 fields

if (amountOfBill === "" || myQuality == 0) {

    alert("There is awrong ... please fill the inputs");
};


if(numOfPeople <= 0) {

    alert("There is awrong ... please check your values");
    
     tipResults.style.display = "none";
    

}else{

    tipResults.style.display = "block";
    
}


let tip = (amountOfBill / numOfPeople * myQuality) ;

         document.getElementById("results").innerHTML = "<sup>$</sup>" + tip ;


};


































