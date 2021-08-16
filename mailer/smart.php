<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'nastyalynx.post.mail@gmail.com';                 // Наш логин
$mail->Password = '97865900Ff';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('nastyalynx.post.mail@gmail.com', 'WINNER.ZP');   // От кого письмо 
$mail->addAddress('lorf1991@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
  <div style="
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    font-size: 18px;
    border-radius: 10px;
  ">

    <div>Пользователь оставил данные на сайте <span style="font-weight: 700; font-size: 22px; color: orange">winner.zp</span>:</div>
    <div>Имя: <span style="font-size: 20px; font-weight: 600; color: orange">' . $name . '</span></div>
    <div>Номер телефона: <span style="font-size: 20px; font-weight: 600; color: orange">' . $phone . '</span></div>
    <div>E-mail: <span style="font-size: 20px; font-weight: 600; color: orange">' . $email . '</span></div>  
    
  </div>'
;

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>