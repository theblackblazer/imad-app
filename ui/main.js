//Counter code
var button = document.getElementById('counter');
var counter=0;
button.onclick= function() {
    
    //Create A Request
    var request = new XMLHttpRequest();
    //Capture the variable and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
            //Take Some Action
            if(request.status===200){
                var counter=request.responseText;
                 
                var span = document.getElementById('count');
                 span.innerHTML=counter.toString();
            }
            
        }
    };
    //Make A Request
    request.open('GET','http://singhaniapiyush294.imad.hasura-app.io/counter',true);
    request.send(null);
   
};