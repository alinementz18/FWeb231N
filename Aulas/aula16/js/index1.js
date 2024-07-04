$(document).ready(function() {
    $("#myForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            }
        },
        messages: {
            name: {
                required: "Por favor, insira seu nome",
                minlength: "Seu nome deve ter pelo menos 2 caracteres"
            },
            email: {
                required: "Por favor, insira seu email",
                email: "Por favor, insira um email válido"
            },
            password: {
                required: "Por favor, insira uma senha",
                minlength: "Sua senha deve ter pelo menos 5 caracteres"
            },
            confirm_password: {
                required: "Por favor, confirme sua senha",
                minlength: "Sua senha deve ter pelo menos 5 caracteres",
                equalTo: "As senhas não correspondem"
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});
