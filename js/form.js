function validat(){
    var frist = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var address = document.forms["myForm"]["address"].value;
    var location = document.forms["myForm"]["location"].value;
    var guests = document.forms["myForm"]["guests"].value;
    var arrivals = document.forms["myForm"]["arrivals"].value;
    var leaving = document.forms["myForm"]["leaving"].value;
    


    if(frist == ''){
        alert("Plese enter your name");
        return false;
    }

    if(!isNaN(frist)){
        alert("Plese type charector");
        return false;
    }

    if(email == ''){
        alert("Plese enter your email");
        return false;
    }

    var at = email.indexOf('@');
    var dot = email.lastIndexOf('.');

    if(at < 1 || dot < at+2 || dot + 2 >=email.length){
        alert("NOt a Valid Email");
        return false;
    }

    if(phone == ''){
        alert("Plese enter your phone");
        return false;
    }

    if(!isNaN(last)){
        alert("Plese type charector");
        return false;
    }
    if(isNaN(phone)){
        alert("Plese type number");
        return false;
    }

    if(phone.length<11){
        alert("Please type your 11up number");
        return false;
    }

    if(address == ''){
        alert("Plese enter your address");
        return false;
    }

    if(location== ''){
        alert("Plese enter your location");
        return false;
    }

    if(guests == ''){
        alert("Plese enter your phone");
        return false;
    }

    if(!isNaN(last)){
        alert("Plese type charector");
        return false;
    }
    if(isNaN(guests)){
        alert("Plese type number");
        return false;
    }

    if(guests.length<12){
        alert("Please type your 12up number");
        return false;
    }

    if(arrivals == ''){
        alert("Plese enter your arrivals date");
        return false;
    }

    if(leaving == ''){
        alert("Plese enter your leaving date");
        return false;
    }

    if(!subject.checked){
        alert("Plese enter subject");
        return false;
    }

}