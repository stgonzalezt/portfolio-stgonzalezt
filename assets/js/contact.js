document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('form');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Validación de campos
        var isValidName = validateName(nameInput.value);
        var isValidEmail = validateEmail(emailInput.value);
        var isValidMessage = validateMessage(messageInput.value);
        if (isValidName && isValidEmail && isValidMessage) {
            // Enviar formulario
            console.log('Formulario enviado');
            // Aquí puedes agregar la lógica para enviar el formulario
        }
        else {
            // Mostrar errores
            console.log('Formulario no válido');
            showValidationError(isValidName, isValidEmail, isValidMessage);
        }
    });
    function validateName(name) {
        return name.trim() !== '';
    }
    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    function validateMessage(message) {
        return message.trim() !== '';
    }
    function showValidationError(isValidName, isValidEmail, isValidMessage) {
        var nameError = document.getElementById('nameError');
        var emailError = document.getElementById('emailError');
        var messageError = document.getElementById('messageError');
        if (nameError) {
            nameError.style.display = isValidName ? 'none' : 'block';
        }
        if (emailError) {
            emailError.style.display = isValidEmail ? 'none' : 'block';
        }
        if (messageError) {
            messageError.style.display = isValidMessage ? 'none' : 'block';
        }
    }
});
