<?php
header("Access-Control-Allow-Origin: *");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturar y limpiar los datos del formulario
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = trim($_POST["phone"]);
    $gluten = trim($_POST["gluten"]);
    $message = trim($_POST["message"]);
    $order = trim($_POST["order"]);
    $cake = trim($_POST["cake"]);
    $frosting = trim($_POST["frosting"]);
    $portions = trim($_POST["portions"]);

    // Validar los datos del formulario
    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Por favor, complete el formulario correctamente.";
        exit;
    }

    // Dirección de correo del destinatario y asunto del correo
    $recipient = "yullsbakery22@gmail.com";
    $subject = "Yull's Bakery - Nuevo mensaje de $email";

    // Contenido del correo electrónico
    $email_content = "NOMBRE: $name\n";
    $email_content .= "EMAIL: $email\n";
/*    $email_content .= "TELÉFONO: $phone\n";
   $email_content .= "GLUTEN: $gluten\n"; */
    $email_content .= "PEDIDO: $order\n";
/*    $email_content .= "TIPO DE BIZCOCHO: $cake\n";
    $email_content .= "SABOR DE FROSTING: $frosting\n";
    $email_content .= "PORCIONES: $portions\n"; */
    $email_content .= "MENSAJE:\n$message\n";

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