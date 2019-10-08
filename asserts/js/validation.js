function validateForm() {
    var x = document.forms["checkForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    var password=document.checkForm.pwd.value;
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("Please enter the valid e-mail address");
        return false;
    }

    if(password != "") {
        if(password.length < 8) {
          alert("Password must contain at least eight characters!");
          return false;
        }
        re = /[0-9]/;
        if(!re.test(password)) {
          alert("Password must contain at least one number (0-9)!");
          return false;
        }
        re = /[a-z]/;
        if(!re.test(password)) {
          alert("Password must contain at least one lowercase letter (a-z)!");
          return false;
        }
        re = /[A-Z]/;
        if(!re.test(password)) {
          alert("Password must contain at least one uppercase letter (A-Z)!");
          return false;
        }
        re = /[?=.*@!#$%&? "]/
        if(!re.test(password)) {
            alert("Password should contain atleast one special character (?=.*@!#$%&? \")!");
            return false;
        }
      }
}
