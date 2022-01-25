var demo = document.getElementById('demo');

function saluta(){
    var username = document.getElementById('username').value; //prendo ciò che l'utente scrive

    if(username == ""){
    
      demo.innerHTML = "Non hai compilato il campo";
      demo.style = "color: red"; 
      
    }else{
        console.log("Ti chiami " + username);
        demo.innerHTML = "Ciao " + username;
        demo.style = "color: black";
    }
    
    document.getElementById('username').value = "";
}








