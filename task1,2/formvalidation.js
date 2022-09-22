function numvalidate(){

   
        var a = document.getElementById("mobnumber") .value;
        var b = document.getElementById("name") .value;
        var c = document.getElementById("email") .value;
       
       if(b ==""){
        document.getElementById("namemessages").innerHTML="* Please fill Name";
        return false;
       }
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
       
        // to check if name has any numerical value
        for(var i=0;i<b.length;i++)
        {
                if(b[i]>=0 && b[i]<=9){
                        var counts = 1;
                }
        }
        if(counts==1){
                document.getElementById("namemessages").innerHTML="* Name cannot have numerical value";
                return false;
         }

         if(c ==""){
                document.getElementById("nameemail").innerHTML="* Please fill Email";
                return false;
               }
        

}

