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
    $checkbox = $_POST['checkbox'];
    $checkbox = isset($checkbox) ? 'Нет' : 'Да';
    
    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    <style>
    li{
        list-style: none;
        font-size: 14px;
        }
        h2{
            color:rgb(102, 111, 28);
        }
        .num{
        color: white;
        background: #2980B9;
        display: inline-block;
        text-align: center;
        margin: 5px 10px;
        line-height: 40px;
        width: 40px;
        height: 40px;
        border-radius:10px;
        }
    </style>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li><span class="num">1</span>Имя: ' . $name . '</li>
            <li><span class="num">2</span>Телефон: ' . $phone . '</li>
            <li><span class="num">3</span>Улица: ' . $street . '</li>
            <li><span class="num">4</span>Дом: ' . $house . '</li>
            <li><span class="num">5</span>Корпус: ' . $corp . '</li>
            <li><span class="num">6</span>Квартира: ' . $flat . '</li>
            <li><span class="num">7</span>Этаж: ' . $flove . '</li>
            <li><span class="num">8</span>Комментарий: ' . $comment . '</li>
            <li><span class="num">9</span>Способ оплаты: ' . $commradioent . '</li>
            <li><span class="num">10</span>Нужно ли перезванивать клиенту: ' . $checkbox . '</li>
        </ul>
    </body>
    </html>';

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';
   // require 'vendor/autoload.php';
    
    $mail = new PHPMailer(true);                             
    try {
                         
        $mail->isSMTP();                                      
        $mail->Host = 'smtp.gmail.com';                  
        $mail->SMTPAuth = true;                               
        $mail->Username = 'dimbar331@gmail.com';               
        $mail->Password = 'lnm5ro2hio';                       
        $mail->SMTPSecure = 'ssl';                           
        $mail->Port = 465;                                    
        $mail->CharSet = 'UTF-8';
        $mail->setFrom('dimbar331@gmail.com', 'Mailer');
        $mail->addAddress('di_1@inbox.ru', 'Joe User');    
        $mail->isHTML(true);                                
        $mail->Subject = 'Here is the subject';
        $mail->Body    = $mail_message;

        $mail->send();
        //echo 'Message has been sent';
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