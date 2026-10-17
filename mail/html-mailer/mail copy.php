<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name         = htmlspecialchars($_POST['name'] ?? '');
    $email        = htmlspecialchars($_POST['email'] ?? '');
    $phone        = htmlspecialchars($_POST['phone'] ?? '');
    $projectType  = htmlspecialchars($_POST['projectType'] ?? '');
    $budget       = htmlspecialchars($_POST['budget'] ?? '');
    $description  = htmlspecialchars($_POST['description'] ?? '');
    $servicesArr  = $_POST['services'] ?? [];
    $services     = implode(', ', $servicesArr);

    $mail = new PHPMailer(true);

    try {
        // SMTP Settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'nirog@webleadingindia.com';
        $mail->Password   = 'Prakash@123';
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;

        // Email to Owner
        $mail->setFrom('nirog@webleadingindia.com', 'WebLeadingIndia');
        $mail->addAddress('prakashbhushan435@gmail.com', 'Vinay');
        
        $mail->isHTML(true);
        $mail->Subject = "New Quote Request from $name";
        
        // Modern HTML Template for Owner (using a single professional color - #3a7bd5)
        $mail->Body = '
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #3a7bd5; padding: 20px; text-align: center; color: white; border-radius: 5px 5px 0 0; }
                .content { padding: 20px; border: 1px solid #e1e1e1; border-top: none; border-radius: 0 0 5px 5px; }
                .detail { margin-bottom: 15px; }
                .detail-label { font-weight: bold; color: #3a7bd5; }
                .footer { margin-top: 20px; font-size: 12px; text-align: center; color: #777; }
            </style>
        </head>
        <body>
            <div class="header">
                <h2>New Quote Request</h2>
            </div>
            <div class="content">
                <div class="detail"><span class="detail-label">Name:</span> '.$name.'</div>
                <div class="detail"><span class="detail-label">Email:</span> '.$email.'</div>
                <div class="detail"><span class="detail-label">Phone:</span> '.$phone.'</div>
                <div class="detail"><span class="detail-label">Project Type:</span> '.$projectType.'</div>
                <div class="detail"><span class="detail-label">Services Needed:</span> '.$services.'</div>
                <div class="detail"><span class="detail-label">Budget:</span> '.$budget.'</div>
                <div class="detail"><span class="detail-label">Description:</span><br>'.nl2br($description).'</div>
            </div>
            <div class="footer">
                <p>This email was generated from your website contact form.</p>
            </div>
        </body>
        </html>';

        $mail->send();
        
        // Send Thank You Email to User
        $mail->clearAddresses(); // Clear previous recipients
        $mail->setFrom('nirog@webleadingindia.com', 'WebLeadingIndia');
        $mail->addAddress($email, $name);
        $mail->Subject = "Thank you for your quote request";
        
        // Modern Thank You Template for User (same color scheme)
        $mail->Body = '
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #3a7bd5; padding: 20px; text-align: center; color: white; border-radius: 5px 5px 0 0; }
                .content { padding: 20px; border: 1px solid #e1e1e1; border-top: none; border-radius: 0 0 5px 5px; }
                .footer { margin-top: 20px; font-size: 12px; text-align: center; color: #777; }
                .thank-you { font-size: 18px; margin-bottom: 20px; }
                .contact-info { margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h2>Thank You, '.$name.'!</h2>
            </div>
            <div class="content">
                <div class="thank-you">We appreciate you reaching out to us for a quote.</div>
                <p>We have received your request with the following details:</p>
                <p><strong>Project Type:</strong> '.$projectType.'</p>
                <p><strong>Services Needed:</strong> '.$services.'</p>
                <p>Our team will review your requirements and get back to you within 24-48 hours.</p>
                
                <div class="contact-info">
                    <p>If you have any immediate questions, feel free to contact us at:</p>
                    <p>Email: nirog@webleadingindia.com<br>
                    Phone: [Your Contact Number]</p>
                </div>
            </div>
            <div class="footer">
                <p>&copy; '.date('Y').' WebLeadingIndia. All rights reserved.</p>
            </div>
        </body>
        </html>';

        $mail->send();
        
        echo "<script>alert('Thank you! Your quote request has been sent successfully.'); window.location.href = 'thank-you.html';</script>";
    } catch (Exception $e) {
        echo "<script>alert('Mailer Error: {$mail->ErrorInfo}'); window.history.back();</script>";
    }
} else {
    echo "Invalid request.";
}