function numvalidate(){

   
        var a = document.getElementById("mobnumber") .value;
        
        if(a ==""){
        document.getElementById("messages").innerHTML="* Please fill Mobile Number";
        return false;
        }
        if(isNaN(a)){
        document.getElementById("messages").innerHTML="* Enter only Numeric values";
        return false;
        }
        if(a.length<10){
        document.getElementById("messages").innerHTML="* Mobile Number must be 10 digit";
        return false;
        }
        if(a.length>10){
        document.getElementById("messages").innerHTML="* Mobile Number must be 10 digit" ;
        return false;
        }
       
   
        

}

// function namevalidate(){

// var n = document.getElementById("name") .value;
// let count=0;
// var l  = n.length();

// for(let i=0;i<l;i++)
// {
//     if(n[i]>=0 && n[i]<=9){
//         count=1;
//     }


// }
// if(count==1){
//     document.getElementById("namemessages").innerHTML="* Mobile Number must be 10 digit";
//     return false;
// }

// }