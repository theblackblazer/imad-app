//Counter code
var button = document.getElementbyId("counter");
button.onclick=function(){
    
    //Create A Request
    
    //Capture the variable and store it in a variable
    
    //Render the variable to the correct span
    counter = counter+1;
    var span = document.getElementById("count");
    span.innerHTML=counter.toString();
};