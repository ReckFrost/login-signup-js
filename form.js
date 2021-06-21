
var form = document.getElementById("register")

var error = []

var success = ""

form.addEventListener("submit", function (e) {
    e.preventDefault()

    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var passwd = document.getElementById("passwd").value
    var cpasswd = document.getElementById("cpasswd").value
    var phone = document.getElementById("phone").value
    var gender = document.register.gender.value

    var phonelen = phone.length;
    var passlen = passwd.length;
    var letters = /^[a-zA-Z]+$/;
    var emailval = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var isValid = letters.test(document.getElementById("name").value);
    var passval = /^[A-Za-z]\w{7,14}$/;

    /*
       if (name == "" || email == "" || passwd == "" || cpasswd == "" || phone == "") {
           alert("Please Enter all the details")
       }
   */

    if (name == "") {
        alert("Please Enter Your Name");
        document.getElementById("name").focus();
        return false;
    }
    if (!isValid) {
        alert("Only Alphabets.");
        document.getElementById("name").focus();
        return false;
    }

    if (email == "") {
        window.alert("Please enter a valid e-mail address.");
        document.getElementById("email").focus();
        return false;
    }

    if (!document.getElementById("email").value.match(emailval)) {
        alert("Wrong e-mail address");
        return false;
    }

    if (isNaN(document.getElementById("phone").value)) {
        alert("Enter Valid Mobile Number");
        document.getElementById("phone").focus();
        return false;
    }
    if (phonelen !== 10) {
        alert(" Your Mobile Number must be 10 digit");
        document.getElementById("phone").focus();
        return false;
    }

    if (passwd == "") {
        alert("please enter password");
        document.getElementById("passwd").focus();
        return false;
    }
    if (passwd.match(passval)) {
        alert("at least 1 lowercase alphabetical character \nat least 1 uppercase alphabetical character \nat least 1 numeric character \nat least one special character");
        return false;
    }
    if (passlen < 8) {
        alert("Password should be 8 characters or longer");
        document.getElementById("passwd").focus();
        return false;
    }

    if (cpasswd == "") {
        alert("please re enter password");
        document.getElementById("cpasswd").focus();
        return false;
    }
    if (passwd !== cpasswd) {
        alert("password not match");
        document.getElementById("cpasswd").focus();
        document.getElementById("cpasswd").value = "";
        return false;
    }

    if (gender == "") {
        alert("Please Choose Your gender");
        document.register.gender.focus();
        return false;
    }

    success = "Form is Submitted"

    alert("Form is submitted")

})