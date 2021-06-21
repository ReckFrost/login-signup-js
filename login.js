var form = document.getElementById("login")

var error = []

var success = ""

form.addEventListener("submit", function (e) {
    e.preventDefault()

    var email = document.getElementById("email").value
    var passwd = document.getElementById("passwd").value

    var emailval = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var passlen = passwd.length;
    var passval = /^[A-Za-z]\w{7,14}$/;

    if (email == "") {
        window.alert("Please enter a valid e-mail address.");
        document.getElementById("email").focus();
        return false;
    }
    if (!document.getElementById("email").value.match(emailval)) {
        alert("Wrong e-mail address");
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

    success = "Form is Submitted"

    alert("Form is submitted")

})