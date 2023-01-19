
const pw = document.getElementById('password');
const pwc = document.getElementById('password-confirmation');
const form = document.querySelector(".form");
pwc.addEventListener('input', verifyPassword);
pw.addEventListener('input', verifyPassword);

function verifyPassword() {
    let pwv = pw.value;
    let pwcv = pwc.value;

    if(pwv == '' || pwcv == '') {
        pw.style.border = '2px solid lightskyblue';
        pwc.style.border = '2px solid lightskyblue';
        removeError();
    } else if((pwv != '' && pwcv != '') && pwv == pwcv) {
            pw.style.border = '2px solid green';
            pwc.style.border = '2px solid green';
            removeError();
    } else {
            pw.style.border = '2px solid red';
            pwc.style.border = '2px solid red';
            let errorElement = document.createElement("div");
            errorElement.classList.add("error");
            errorElement.textContent = 'Passwords do not match.';
    
            let error = document.querySelector('.error');
            if(error == null) {
                form.appendChild(errorElement);
            }
    }
}

function removeError() {
    let error = document.querySelector('.error');
    if(error != null) {
        form.removeChild(error);
    }
}

