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

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';
   // require 'vendor/autoload.php';
    
    $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
    try {
                             // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';                   // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'dimbar331@gmail.com';                 // SMTP username
        $mail->Password = 'lnm5ro2hio';                           // SMTP password
        $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465;                                    // TCP port to connect to
        $mail->CharSet = 'UTF-8';

        $mail->setFrom('dimbar331@gmail.com', 'Mailer');
        $mail->addAddress('di_1@inbox.ru', 'Joe User');     // Add a recipient
 
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Here is the subject';
        $mail->Body    = $mail_message;

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }

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