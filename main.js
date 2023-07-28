let arr = [];
let dataElement = document.getElementById('data');

function submitForm() {
    let Email = document.getElementById('Email').value;
    let Phone = document.getElementById('Phone').value;
    let text = document.getElementById('text').value;
    let date = document.getElementById('date').value;
    let hafsa = true;

    if (date == "") {
        document.getElementById("Error4").innerHTML = "Date is required";
    
    }else {
        document.getElementById("Error4").innerHTML = "";
    }

    if (Email == "") {
        document.getElementById("Error1").innerHTML = "Enter a valid Email";
        hafsa = false;

    } else if (Email !== "") {
        document.getElementById("Error1").innerHTML = "";
    }

    let phoneRegex =/^\+212[0-9]{9}$/;
    // ?+21200000000

    if (Phone=="") {

        document.getElementById("Error2").innerHTML = "Enter your Phone No.";

    }else if (!phoneRegex.test(Phone)){
     
        document.getElementById("Error2").innerHTML = "Enter your Phone No. (starting with +212)";
        hafsa = false;
    }
    else {
        document.getElementById("Error2").innerHTML ="";
    }
   
    if (text == "") {
        document.getElementById("Error3").innerHTML = "Enter your Message";
        return;
        hafsa = false;
      
    }
    else {
        document.getElementById("Error3").innerHTML = "";
    }

    let getDate = new Date(date);
    let year = getDate.getFullYear();

    if (year < 2000 || year > 2023) {
        document.getElementById("Error4").innerHTML = "the year should be between 2000 and 2023";
        return;
        hafsa = false;
    } 
if (hafsa){
    // !collection of properties with key w values
    const obj = {
        email: Email,
        phoneNumber: Phone,
        text: text,
        date: date
    }
    // + data in the  last array 
    arr.push(obj)

    // to clear the h1 to show the new data
    dataElement.innerHTML = '';
    
    // ! div katrj3o bayn 
    dataElement.style.display = "block";

    for (let index = 0; index < arr.length; index++) {
        // !create h1 element
        let h1 = document.createElement("h1");

    // ? for loop to create h1 and to show data from array
        let emailData = arr[index].email;
        let phoneData = arr[index].phoneNumber;
        let textData = arr[index].text;
        let birthDateData = arr[index].date;

        console.log(arr);

        h1.textContent = ` Email: ${emailData}, Phone: ${phoneData} , Text: ${textData}, Date: ${birthDateData} `;
        
        // !append child 7it id="data" element howa l parent h1 wst div data parent dyalha
        dataElement.appendChild(h1)
    }}
}