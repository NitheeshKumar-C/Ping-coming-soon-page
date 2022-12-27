function checkMail(){
    var input =document.getElementsByTagName("input")[0];
   var mail= input.value;
   
   var errorMsg=document.getElementById("errorMsg");
   const regex = new RegExp('^([^0-9][a-z|A-Z]+\.?[0-9|a-z|A-Z]*@[a-z]+[\.]{1}[a-z]{2,5}){0,}$');
        if(!regex.test(mail)){
            var message="Please provide a valid mail address";
            console.log("invalid");
            errorMsg.style.display="block";
            input.style.border="1px solid hsl(354, 100%, 66%)";
        }
        else{
            console.log("valid");
            errorMsg.style.display="none";
            input.style.border="1px solid hsla(108, 90%, 63%, 0.704)";
        }

}