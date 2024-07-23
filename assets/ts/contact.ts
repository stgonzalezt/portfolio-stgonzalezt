document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form') as HTMLFormElement;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validación de campos
        const isValidName = validateName(nameInput.value);
        const isValidEmail = validateEmail(emailInput.value);
        const isValidMessage = validateMessage(messageInput.value);

        if (isValidName && isValidEmail && isValidMessage) {
            // Enviar formulario
            console.log('Formulario enviado');
            // Aquí puedes agregar la lógica para enviar el formulario
        } else {
            // Mostrar errores
            console.log('Formulario no válido');
            showValidationError(isValidName, isValidEmail, isValidMessage);
        }
    });

    function validateName(name: string): boolean {
        return name.trim() !== '';
    }

    function validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateMessage(message: string): boolean {
        return message.trim() !== '';
    }

    function showValidationError(isValidName: boolean, isValidEmail: boolean, isValidMessage: boolean) {
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');

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
