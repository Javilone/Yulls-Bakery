// FORM RESPONSE MANAGEMENT 
const messageWindow = document.getElementById("mensaje");

function messageWindowFunction() {
    messageWindow.classList.toggle('form-message-window');
}

messageWindow.addEventListener("click", messageWindowFunction);


// FORM AJAX MANAGEMENT 

const submitBtn = document.getElementById("submitBuyBtn");

$(document).ready(function () {
    $('#mensaje').addClass('form-message-window');
    $('#mensaje').hide(); // Oculto el contenedor con el id mensaje

    $('#yullsForm').submit(function(e) {
        e.preventDefault(); // Evito que el formulario se envíe

        $('#mensaje').show(); // Muestro el contenedor mensaje antes de enviar la solicitud AJAX

        // Envío el formulario usando AJAX
        $.ajax({
            type: 'POST',
            url: 'https://javilonedev.es/index.php',
            data: $(this).serialize(), // Serializo los datos del formulario
            success: function(response) {
                // Manejo de la respuesta del servidor
                if (response.trim() === 'enviado') {
                    $('#mensaje').html('<p>Mensaje enviado correctamente.</p>');
                    submitBtn.disabled = true; // Deshabilitar el botón directamente
                } else {
                    $('#mensaje').html('<p>Hubo un problema al enviar el mensaje.</p>');
                }
            },
            error: function() {
                $('#mensaje').html('<p>Por favor, rellena todos los campos.</p>');
            }
        });
    });
});