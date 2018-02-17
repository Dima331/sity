<?php
    echo 43857;
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



    $headers = "From: Администратор сайта <Di_1@inbox.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

  // $mail = mail('di_1@inbox.ru', 'Заказ', $mail_message, $headers);
 
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  
//  require 'path/to/PHPMailer/src/Exception.php';
 // require 'path/to/PHPMailer/src/PHPMailer.php';
//  require 'path/to/PHPMailer/src/SMTP.php';
   
   //Load composer's autoloader
   //require 'vendor/autoload.php';
   // require "PHPMailer/PHPMailerAutoload.php";
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';
   // require 'vendor/autoload.php';
    
    $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
    try {
        //Server settings
        //$mail->SMTPDebug = 2;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'dimbar331@gmail.com';                 // SMTP username
        $mail->Password = 'lnm5ro2hio';                           // SMTP password
        $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465;                                    // TCP port to connect to
    
        //Recipients
        $mail->setFrom('dimbar331@gmail.com', 'Mailer');
        $mail->addAddress('di_1@inbox.ru', 'Joe User');     // Add a recipient
        $mail->addAddress('dimbar331@gmail.com');               // Name is optional
        $mail->addReplyTo('dimbar331@gmail.com', 'Information');
    
        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Here is the subject';
        $mail->Body    = $mail_message;
        $mail->AltBody = $mail_message;
    
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