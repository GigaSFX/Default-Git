const login = 'admin';
const password = 'admin';
var count = 0;

function showLoginWindow () { 
    if ( document.querySelector(".popUpWindow").style.visibility == 'hidden'){
        document.querySelector(".popUpWindow").style.visibility = "visible";
    } else {
        document.querySelector(".popUpWindow").style.visibility = "hidden";    
    }
}

function checkPassword () {
    if (login !== document.querySelector('#userLogin').value || password !== document.querySelector('#userPassword').value && count < 3) {
        alert('Login or Password Worg! Please try again or Try create a new Account.');
        count++;
    } else {    
    window.location.replace("url");
    }
}