<?php
header('Content-Type: application/json');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

$response = ['success' => false, 'message' => ''];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $service = filter_input(INPUT_POST, 'service', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    $template = filter_input(INPUT_POST, 'template', FILTER_SANITIZE_STRING);

    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        $response['message'] = 'Please fill all required fields.';
        echo json_encode($response);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'Invalid email format.';
        echo json_encode($response);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'nirog@webleadingindia.com';
        $mail->Password = 'Prakash@123';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';

        // Recipients
        $mail->setFrom('nirog@webleadingindia.com', 'WebLeadingIndia');
        $mail->addAddress('webleadingindia@gmail.com', 'Vinay');
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Submission: $service";
        
        // HTML Email Body with modern design
        $mail->Body = "
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f5f7fa; }
                .container { background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden; }
                .header { background-color: #41C06C; color: white; padding: 25px; text-align: center; }
                .header h1 { margin: 0; font-size: 22px; font-weight: 600; }
                .content { padding: 25px; }
                .field { margin-bottom: 16px; display: flex; }
                .field-label { font-weight: 600; color: #4a5568; min-width: 80px; }
                .field-value { color: #2d3748; }
                .message-container { margin-top: 20px; background-color: #f8f9fa; border-left: 3px solid #41C06C; padding: 15px; border-radius: 0 4px 4px 0; }
                .footer { text-align: center; padding: 20px; font-size: 13px; color: #718096; border-top: 1px solid #e2e8f0; }
                .logo { text-align: center; margin-bottom: 15px; }
                .logo img { height: 40px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>New Contact Form Submission</h1>
                </div>
                
                <div class='content'>
                    <div class='logo'>
                        <img src='https://www.webleadingindia.com/Logo.png' alt='WebLeadingIndia'>
                    </div>
                    
                    <div class='field'>
                        <div class='field-label'>Name:</div>
                        <div class='field-value'>$name</div>
                    </div>
                    <div class='field'>
                        <div class='field-label'>Email:</div>
                        <div class='field-value'>$email</div>
                    </div>
                    " . ($phone ? "<div class='field'><div class='field-label'>Phone:</div><div class='field-value'>$phone</div></div>" : "") . "
                    " . ($service ? "<div class='field'><div class='field-label'>Service:</div><div class='field-value'>$service</div></div>" : "") . "
                    
                    <div class='message-container'>
                        <div style='font-weight: 600; margin-bottom: 8px;'>Message:</div>
                        <div>" . nl2br($message) . "</div>
                    </div>
                </div>
                
                <div class='footer'>
                    This email was sent from the contact form on WebLeadingIndia.com
                </div>
            </div>
        </body>
        </html>
        ";

        // Plain text fallback
        $mail->AltBody = "New Contact Form Submission\n\nName: $name\nEmail: $email\n" . 
                         ($phone ? "Phone: $phone\n" : "") . 
                         ($service ? "Service: $service\n" : "") . 
                         "Message:\n$message";

        $mail->send();
        
        // Send thank you email to user
        sendThankYouEmail($name, $email, $service);
        
        $response['success'] = true;
        $response['message'] = 'Thank you for your message!';
    } catch (Exception $e) {
        $response['message'] = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    $response['message'] = 'Invalid request method.';
}

echo json_encode($response);

function sendThankYouEmail($name, $email, $service) {
    $mail = new PHPMailer(true);
    
    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'nirog@webleadingindia.com';
        $mail->Password = 'Prakash@123';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';

        $mail->setFrom('nirog@webleadingindia.com', 'WebLeadingIndia');
        $mail->addAddress($email, $name);

        $mail->isHTML(true);
        $mail->Subject = "Thank you for contacting WebLeadingIndia";
        
       // HTML Thank You Email with modern design
        $mail->Body = "
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f5f7fa; }
                .container { background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden; }
                .header { background-color: #41C06C; color: white; padding: 25px; text-align: center; }
                .header h1 { margin: 0; font-size: 22px; font-weight: 600; }
                .content { padding: 25px; }
                .thank-you { text-align: center; margin-bottom: 20px; }
                .thank-you-icon { color: #41C06C; font-size: 48px; margin-bottom: 15px; }
                .contact-box { background-color: #f8f9fa; border-radius: 6px; padding: 20px; margin-top: 25px; border-left: 3px solid #41C06C; }
                .contact-item { margin-bottom: 10px; display: flex; align-items: center; }
                .contact-icon { margin-right: 10px; color: #41C06C; }
                .footer { text-align: center; padding: 20px; font-size: 13px; color: #718096; border-top: 1px solid #e2e8f0; }
                .logo { text-align: center; margin-bottom: 15px; }
                .logo img { height: 40px; }
                .btn { display: inline-block; background-color: #41C06C; color: white; text-decoration: none; padding: 12px 25px; border-radius: 4px; font-weight: 500; margin-top: 15px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>Thank You for Contacting Us</h1>
                </div>
                
                <div class='content'>
                    <div class='logo'>
                        <img src='https://www.webleadingindia.com/Logo.png' alt='WebLeadingIndia'>
                    </div>
                    
                    <div class='thank-you'>
                        <div class='thank-you-icon'>✓</div>
                        <h2 style='margin: 0 0 10px 0;'>Thank you, $name!</h2>
                        <p>We've received your inquiry about our <strong>$service</strong> service and will get back to you within 24-48 hours.</p>
                    </div>
                    
                    <div class='contact-box'>
                        <h3 style='margin-top: 0;'>For immediate assistance:</h3>
                        
                        <div class='contact-item'>
                            <span class='contact-icon'>✉</span>
                            <span>nirog@webleadingindia.com</span>
                        </div>
                        
                        <div class='contact-item'>
                            <span class='contact-icon'>📞</span>
                            <span>+91 8376817258</span>
                        </div>
                        
                        <div class='contact-item'>
                            <span class='contact-icon'>🌐</span>
                            <span>webleadingindia.com</span>
                        </div>
                    </div>
                    
                    <div style='text-align: center; margin-top: 25px;'>
                        <a href='https://webleadingindia.com' class='btn'>Visit Our Website</a>
                    </div>
                </div>
                
                <div class='footer'>
                    © " . date('Y') . " WebLeadingIndia. All rights reserved.
                </div>
            </div>
        </body>
        </html>
        ";

        // Plain text fallback
        $mail->AltBody = "Thank you, $name!\n\n" .
                         "We have received your inquiry about our $service service.\n\n" .
                         "Our team will review your message and get back to you within 24-48 hours.\n\n" .
                         "For immediate assistance:\n" .
                         "Email: nirog@webleadingindia.com\n" .
                         "Phone: +91 8376817258";

        $mail->send();
    } catch (Exception $e) {
        error_log("Thank you email failed: ".$mail->ErrorInfo);
    }
}
?>