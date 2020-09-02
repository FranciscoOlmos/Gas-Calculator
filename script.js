var wrapperEle =document.body.querySelector(".wrapper");
var headOneEle =document.body.querySelector(".headOne");
var headTwoEle =document.body.querySelector(".headTwo");
var headThreeEle =document.body.querySelector(".headThree");
var headFourEle =document.body.querySelector(".headFour");
var buttonEle =document.body.querySelector(".editButton");


results();


 function results(){
    var miles= prompt("Please enter your estimated number of miles you drive per year.");
 var price=prompt("Please enter current cost for a gallon of gas.")
 
 headOneEle.innerHTML="To drive a car with an MPG rating of 12 for "+miles+" miles at $"+price+" per gallon would cost "+ calculateCost(miles,price,12);
   
   headTwoEle.innerHTML="To drive a car with an MPG rating of 17 for "+miles+" miles at $"+price+" per gallon would cost "+ calculateCost(miles,price,17);
   
     headThreeEle.innerHTML="To drive a car with an MPG rating of 26 for "+miles+" miles at $"+price+" per gallon would cost "+ calculateCost(miles,price,26);
   
   headFourEle.innerHTML="To drive a car with an MPG rating of 29 for "+miles+" miles at $"+price+" per gallon would cost "+ calculateCost(miles,price,29);
                            
                       
                            
 }
 
buttonEle.addEventListener("click", function(){
  results();
})  
 
 
 
 
  function calculateCost(miles,price,mpg)
   {
       var cost= miles/mpg*price 
       return cost;
   }