const login = 'admin';
const password = 'admin';

function showLoginWindow () { 
    if ( document.querySelector(".popUpWindow").style.visibility == 'hidden'){
        document.querySelector(".popUpWindow").style.visibility = "visible";
    } else {
        document.querySelector(".popUpWindow").style.visibility = "hidden";    
    }
}

function checkPassword () {
    while (login === userLogin) {
        if (password === userPassword) {
            console.log('Login e senha correto!')
        } else {
                console.log('Login e senha errado!')
            }
        
    }
}