function ValidRegF() {
 const fullname=document.getElementById('name').value;
 const email=document.getElementById('email').value;
 const password=document.getElementById('password').value;
 const mobile=document.getElementById('mobile').value;
 const repassword=document.getElementById('repassword').value;


if(fullname == '' || email == '' || password == '' || repassword == '' || mobile == '')
    alert('All fields are required');

    let emailp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email!=emailp)
        alert("email must consist of @");
    else
       return true;

    let mobileP = /^\d{10}$/;
    if(mobile!=mobileP)
        {
            alert("Mobile number required 10numbers");
        }
    else
       return true;


    if (fullname === "") {
        alert("Name must be filled out");
        return false;
    }


    if (email === "") {
        alert("Email must be filled out");
        return false;
    } else if (!email .test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

 
    if (password === "") {
        alert("Password must be filled out");
        return false;
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    if (repassword === "") {
        alert("Please re-enter your password");
        return false;
    } else if (repassword !== password) {
        alert("Passwords do not match");
        return false;
    }

    if (mobile === "") {
        alert("Mobile number must be filled out");
        return false;
    } else if (!mobile.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number");
        return false;
    }

  
    return true;
}
