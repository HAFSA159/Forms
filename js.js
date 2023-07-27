function submitForm() {


var Email = document.getElementById('Email').value;
var Phone = document.getElementById('Phone').value;
var text = document.getElementById('text').value;
var date = document.getElementById('date').value;
    
    if (Email == "") {
      document.getElementById("Error1").innerHTML="Enter your email";
    }
      else { 
        document.getElementById("Error1").innerHTML="";
    }
    
    if (Phone === "" || Phone.startsWith("+212")) {
        document.getElementById("Error2").innerHTML="Enter your Phone No. (starting with +212)";
      }
      else { 
          document.getElementById("Error2").innerHTML="";
      }   
      
    if (text == "") {
        document.getElementById("Error3").innerHTML="Enter your Message";
      }
      else { 
          document.getElementById("Error3").innerHTML="";
      }


      var datee = new Date(date);
      var year= datee.getFullYear();
      // console.log(year);

      if (year < 1990 || year > 2023){

        document.getElementById("Error4").innerHTML="the year should be between 2000 and 2023";

      }
      else{
        document.getElementById("Error4").innerHTML="";
      }

        
  
       
}
