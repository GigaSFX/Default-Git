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
    if (login !== document.querySelector('#userLogin').value || password !== document.querySelector('#userPassword').value) {
        alert('Login or Password Worg! Please try again or Try create a new Account.');
        count++;
        if (count >= 4) {
            alert('Wait 30 min, util try another Login! Or Click in "Forget your Password?" to change your Password.');
            windows.location.replace("index.html")
        }
    } else {

        location.reload();
    }
}