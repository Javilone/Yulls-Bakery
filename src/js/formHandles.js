$(document).ready(function() {
    $('#mensaje').addClass('form-message-window'); // Agregar la clase inicialmente
    $('#mensaje').hide(); // Ocultar el mensaje inicialmente

    $('#yullsForm').submit(function(e) {
        e.preventDefault(); // Evita que el formulario se envíe normalmente

        
        $('#mensaje').show(); // Muestra el contenedor mensaje antes de enviar la solicitud AJAX

        // Envía el formulario usando AJAX
        $.ajax({
            type: 'POST',
            url: 'https://javilonedev.es/index.php',
            data: $(this).serialize(), // Serializa los datos del formulario
            success: function(response) {
                // Aquí se maneja la respuesta del servidor
                if (response.trim() === 'enviado') {
                    $('#mensaje').html('<p>Mensaje enviado correctamente.</p>');
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