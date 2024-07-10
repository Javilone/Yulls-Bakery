<?php
header("Access-Control-Allow-Origin: *");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturar y limpiar los datos del formulario
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
    $order = trim($_POST["order"]);

    // Validar los datos del formulario
    if (empty($name) || empty($order) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Por favor, complete el formulario correctamente.";
        exit;
    }

    // Dirección de correo del destinatario y asunto del correo
    $recipient = "contacto@javilonedev.es";
    $subject = "Yull's Bakery - Nuevo mensaje de $name";

    // Contenido del correo electrónico
    $email_content = "Nombre: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Pedido: $order\n";
    $email_content .= "Mensaje:\n$message\n";

    // Cabeceras del correo
    $email_headers = "From: $name <$email>";

    // Enviar el correo electrónico y manejar la respuesta
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        echo 'enviado';
    } else {
        http_response_code(500);
        echo 'Hubo un problema al enviar el mensaje.';
    }
} else {

    http_response_code(403);
    echo "Hubo un problema con tu envío, inténtalo de nuevo.";
}
?>