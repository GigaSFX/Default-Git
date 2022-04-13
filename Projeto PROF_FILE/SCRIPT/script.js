function showLoginWindow () { 
    if ( document.querySelector(".popUpWindow").style.visibility == 'hidden'){
        document.querySelector(".popUpWindow").style.visibility = "visible";
    } else {
        document.querySelector(".popUpWindow").style.visibility = "hidden";    
    }
}