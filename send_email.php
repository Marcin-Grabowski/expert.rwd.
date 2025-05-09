<?php
// Konfiguracja odbiorcy
$to = 'ekspert.profilaktyka@gmail.com';

// Sprawdzenie, czy formularz został wysłany metodą POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Odbierz dane z formularza
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $organization = htmlspecialchars(trim($_POST['organization'] ?? ''));
    $phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $subject = htmlspecialchars(trim($_POST['subject'] ?? 'Brak tematu'));
    $messageBody = htmlspecialchars(trim($_POST['message'] ?? ''));

    // Prosta walidacja
    if (empty($name) || empty($email) || empty($messageBody)) {
        die('Proszę wypełnić wymagane pola: imię, e-mail i wiadomość.');
    }

    // Budowanie treści wiadomości
    $message = "Nowa wiadomość z formularza kontaktowego:\n\n";
    $message .= "Imię i nazwisko: $name\n";
    $message .= "Adres e-mail: $email\n";
    $message .= "Organizacja: $organization\n";
    $message .= "Telefon: $phone\n";
    $message .= "Temat: $subject\n\n";
    $message .= "Treść wiadomości:\n$messageBody\n";

    // Nagłówki wiadomości
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Wysyłka
    if (mail($to, $subject, $message, $headers)) {
        echo 'Dziękujemy! Twoja wiadomość została wysłana.';
    } else {
        echo 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.';
    }

} else {
    echo 'Nieprawidłowa metoda żądania.';
}
?>
