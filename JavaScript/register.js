window.addEventListener('load', function() {
    const errorMessages = document.getElementsByClassName('errorMSG');
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].style.display = 'none';
    }
});

const form = document.forms['form'];
const namaDepanInput = document.getElementById('inputNamaDepan');
const namaBelakangInput = document.getElementById('inputNamaBelakang');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const alamatInput = document.getElementById('alamat');
const emailInput = document.getElementById('email');
const createPasswordInput = document.getElementById('createPassword');
const confirmPasswordInput = document.getElementById('confirmPassword');
const tanggalLahirInput = document.getElementById('tanggalLahir');
const aturanCheckbox = document.getElementById('aturan');
const submitButton = document.getElementsByClassName('submitBTN')[0];

function isInputEmpty(inputElement) {
    return inputElement.value.trim() === '';
}

function hasSpace(inputElement) {
    for (let i = 0; i < inputElement.value.length; i++) {
        if (inputElement.value[i] === ' ') {
            return true;
        }
    }
    return false;
}

function showError(inputElement, errorMessageElement) {
    inputElement.classList.add('inputError');
    errorMessageElement.style.display = 'block';
}

function hideError(inputElement, errorMessageElement) {
    inputElement.classList.remove('inputError');
    errorMessageElement.style.display = 'none';
}

function isFormValid() {
    let isValid = true;

    if (isInputEmpty(namaDepanInput)) {
        showError(namaDepanInput, document.getElementById('namaDepanKosong'));
        isValid = false;
    } else if (hasSpace(namaDepanInput)) {
        showError(namaDepanInput, document.getElementById('namaDepanSpasi'));
        isValid = false;
    }

    if (isInputEmpty(namaBelakangInput)) {
        showError(namaBelakangInput, document.getElementById('namaBelakangKosong'));
        isValid = false;
    } else if (hasSpace(namaBelakangInput)) {
        showError(namaBelakangInput, document.getElementById('namaBelakangSpasi'));
        isValid = false;
    }

    let genderSelected = false;
    genderInputs.forEach(function(input) {
        if (input.checked) {
            genderSelected = true;
        }
    });

    if (!genderSelected) {
        showError(document.querySelector('.gender'), document.getElementById('gender'));
        isValid = false;
    }

    if (isInputEmpty(tanggalLahirInput)) {
        showError(tanggalLahirInput, document.getElementById('tanggalLahirKosong'));
        isValid = false;
    }

    if (isInputEmpty(alamatInput)) {
        showError(alamatInput, document.getElementById('alamatKosong'));
        isValid = false;
    } else if (alamatInput.value.length < 10) {
        showError(alamatInput, document.getElementById('alamatKurang'));
        isValid = false;
    }

    if (isInputEmpty(emailInput)) {
        showError(emailInput, document.getElementById('emailKosong'));
        isValid = false;
    } else if (!emailInput.value.endsWith('@dragonzen.com')) {
        showError(emailInput, document.getElementById('emailFormat'));
        isValid = false;
    }

    if (isInputEmpty(createPasswordInput)) {
        showError(createPasswordInput, document.getElementById('createPasswordKosong'));
        isValid = false;
    }

    if (isInputEmpty(confirmPasswordInput)) {
        showError(confirmPasswordInput, document.getElementById('confirmPasswordKosong'));
        isValid = false;
    } else if (createPasswordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, document.getElementById('sandiBerbeda'));
        isValid = false;
    }

    if (!aturanCheckbox.checked) {
        showError(aturanCheckbox, document.getElementById('aturanTidakDicentang'));
        isValid = false;
    }

    return isValid;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const errorMessages = document.getElementsByClassName('errorMSG');
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].style.display = 'none';
    }

    if (!isFormValid()) {
        return;
    }

    window.location.href = './index.html';
});
