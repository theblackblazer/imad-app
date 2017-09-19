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

//Submit Name

var nameInput=document.getElementById('name');
var name = nameInput.value;
var submit=document.getElementById('Submit_btn');
submit.onclick=function(){
     //Create A Request
    var request = new XMLHttpRequest();
    //Capture the variable and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
            //Take Some Action
            if(request.status===200){
               //Make A request to the server and send the name
    
    //Capture a list of names and render it as a list
    var names=request.responseText;
    names=JSON.parse(names);
    var list='';
    for(var i=0;i<names.length;i++){
        list+= '<li>' +names[i]+ '</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
            }
            
        }
    };
    //Make A Request
    request.open('GET','http://singhaniapiyush294.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
   
    
};