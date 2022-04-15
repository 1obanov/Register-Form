document.addEventListener('DOMContentLoaded', function (event) {
    isElementExist('.form_register', initValidationRegister);
    isElementExist('.form_login', initValidationLogin);
    isElementExist('.form_reset', initValidationReset);
    isElementExist('#date', initDatepicker);
    isElementExist('#password', initShowPassword);
});


// Helper if element exist then call function
function isElementExist(_el, _cb) {
    let elem = document.querySelector(_el);

    if (document.body.contains(elem)) {
        try {
            _cb();
        } catch (e) {
            console.log(e);
        }
    }
}

let options = {
    color: '#dd4b39'
}

function initValidationRegister() {
    const validation = new JustValidate('.form_register', {
        errorFieldCssClass: 'is-invalid',
        errorLabelStyle: options
    });

    validation
        .addField('#name', [{
            rule: 'required',
            errorMessage: 'Please enter the name',
        }, ])
        .addField('#email', [{
                rule: 'required',
                errorMessage: 'Please enter the email',
            },
            {
                rule: 'email',
                errorMessage: 'Please enter the correct email address',
            },
        ])
        .addField('#password', [{
            rule: 'required',
            errorMessage: 'Please enter the password',
        }, ])
}

function initValidationLogin() {
    const validation = new JustValidate('.form_login', {
        errorFieldCssClass: 'is-invalid',
        errorLabelStyle: options
    });

    validation
        .addField('#email', [{
                rule: 'required',
                errorMessage: 'Please enter the email',
            },
            {
                rule: 'email',
                errorMessage: 'Please enter the correct email address',
            },
        ])
        .addField('#password', [{
            rule: 'required',
            errorMessage: 'Please enter the password',
        }, ])
}

function initValidationReset() {
    const validation = new JustValidate('.form_reset', {
        errorFieldCssClass: 'is-invalid',
        errorLabelStyle: options
    });

    validation
        .addField('#email', [{
                rule: 'required',
                errorMessage: 'Please enter the email',
            },
            {
                rule: 'email',
                errorMessage: 'Please enter the correct email address',
            },
        ])
        .onSuccess(() => {
            document.querySelector('.form-inner').classList.add('flip');
        });
}


function initDatepicker() {
    const date = document.querySelector('input[name="date"]');
    const datepicker = new Datepicker(date);
}

function initShowPassword() {
    let showBtn = document.querySelector('.ico-show');

    showBtn.addEventListener("click", function (e) {

        let inputPassword = document.getElementById('password');
        if (inputPassword.type === 'password') {
            inputPassword.type = 'text';
        } else {
            inputPassword.type = 'password';
        }

        this.classList.toggle('switch')
    }, false);
}

//= vendors/validate.js
//= vendors/datepicker.min.js