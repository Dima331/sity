<?php

    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $street = $_POST['user-street'];
    $house = $_POST['user-house'];
    $corp = $_POST['user-corp'];
    $flat = $_POST['user-flat'];
    $flove = $_POST['user-flove'];
    $comment = $_POST['user-comment'];
    $commradioent = $_POST['radio'];
    $checkbox = $_POST['checkbox']; // 1 или null
    $checkbox = isset($checkbox) ? 'Нет' : 'Да';


    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя: ' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Дом: ' . $house . '</li>
            <li>Корпус: ' . $corp . '</li>
            <li>Квартира: ' . $flat . '</li>
            <li>Этаж: ' . $flove . '</li>
            <li>Комментарий: ' . $comment . '</li>
            <li>Способ оплаты: ' . $commradioent . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $checkbox . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <Я сам>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('Di_1@inbox.ru', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

?>