function validate(e) {
    const errorIconEls = document.getElementsByClassName("error-icon");
    const errorMessageEls = document.getElementsByClassName("error-message");
    const inputEls = document.getElementsByTagName("input");

    let valid = true;

    const emailPattern = /\w@\w/;

    for(let i = 0; i < inputEls.length; i++) {
        if(inputEls[i].value.length == 0 ) {
            errorIconEls[i].setAttribute("class", "error-icon visible");
            errorMessageEls[i].textContent = `${inputEls[i].getAttribute("placeholder")} cannot be empty`;
            inputEls[i].className = "input-error";
            valid = false;
        } else if(i == 2 && !emailPattern.test(inputEls[i].value)) {
            errorIconEls[i].setAttribute("class", "error-icon visible");
            errorMessageEls[i].textContent = "Looks like this is not an email";
            inputEls[i].className = "input-error";
            valid = false;
        } else if(i == 3 && inputEls[i].value.length < 8) {
            errorIconEls[i].setAttribute("class", "error-icon visible");
            errorMessageEls[i].textContent = "Your password must be at least 8 characters long";
            inputEls[i].className = "input-error";
            valid = false;
        } else {
            errorIconEls[i].setAttribute("class", "error-icon");
            errorMessageEls[i].textContent = "";
            inputEls[i].className = undefined;
        }
    }

    if(!valid) { e.preventDefault(); }
}

const formEl = document.getElementById("form");
formEl.setAttribute("novalidate", "");
formEl.addEventListener("submit", validate);