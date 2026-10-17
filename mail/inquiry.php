<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

$response = ['success' => false, 'message' => ''];

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get JSON input
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    
    // Log received data for debugging
    file_put_contents('form_debug.log', date('Y-m-d H:i:s') . " - Received data: " . print_r($data, true) . "\n", FILE_APPEND);

    if (json_last_error() !== JSON_ERROR_NONE) {
        $response['message'] = 'Invalid JSON data: ' . json_last_error_msg();
        echo json_encode($response);
        exit;
    }

    // Validate and sanitize input
    $name = filter_var($data['name'] ?? '', FILTER_SANITIZE_STRING);
    $email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = filter_var($data['phone'] ?? '', FILTER_SANITIZE_STRING);
    $projectType = filter_var($data['projectType'] ?? '', FILTER_SANITIZE_STRING);
    $services = is_array($data['services'] ?? []) ? $data['services'] : [];
    $budget = filter_var($data['budget'] ?? '', FILTER_SANITIZE_STRING);
    $description = filter_var($data['description'] ?? '', FILTER_SANITIZE_STRING);
    
    // Validate required fields
    if (empty($name)) {
        $response['message'] = 'Name is required';
        echo json_encode($response);
        exit;
    }
    
    if (empty($email)) {
        $response['message'] = 'Email is required';
        echo json_encode($response);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'Invalid email format';
        echo json_encode($response);
        exit;
    }

    if (empty($description)) {
        $response['message'] = 'Description is required';
        echo json_encode($response);
        exit;
    }

    // Map IDs to human-readable values
    $projectTypes = [
        'new-project' => 'Brand New Project',
        'redesign' => 'Redesign Existing Site',
        'add-features' => 'Add Features to Existing Site',
        'not-sure' => 'Not Sure Yet'
    ];
    
    $serviceNames = [
        'web-development' => 'Website Development',
        'web-design' => 'Website Design',
        'ecommerce' => 'E-commerce Store',
        'web-app' => 'Web Application',
        'seo' => 'SEO Optimization',
        'maintenance' => 'Maintenance'
    ];
    
    $budgetRanges = [
        'under-50k' => 'Under ₹50,000',
        '50k-100k' => '₹50,000 - ₹1,00,000',
        '100k-250k' => '₹1,00,000 - ₹2,50,000',
        'above-250k' => 'Above ₹2,50,000',
        'not-sure' => 'Not Sure Yet'
    ];
    
    $selectedServices = array_map(function($id) use ($serviceNames) {
        return $serviceNames[$id] ?? $id;
    }, $services);

    try {
        // Send email to admin
        $adminMail = new PHPMailer(true);
        
        // SMTP Configuration
        $adminMail->isSMTP();
        $adminMail->Host = 'smtp.hostinger.com';
        $adminMail->SMTPAuth = true;
        $adminMail->Username = 'nirog@webleadingindia.com';
        $adminMail->Password = 'Prakash@123';
        $adminMail->SMTPSecure = 'ssl';
        $adminMail->Port = 465;
        $adminMail->SMTPDebug = 2; // Enable verbose debug output
        $adminMail->Debugoutput = function($str, $level) {
            file_put_contents('smtp_debug.log', date('Y-m-d H:i:s') . " - $level - $str\n", FILE_APPEND);
        };

        // Recipients
        $adminMail->setFrom('nirog@webleadingindia.com', 'WebLeadingIndia');
        $adminMail->addAddress('webleadingindia@gmail.com', 'Vinay');
        $adminMail->addReplyTo($email, $name);

        // Content
        $adminMail->isHTML(true);
        $adminMail->Subject = "New Quote Request: " . ($projectTypes[$projectType] ?? $projectType);
        
        // Admin Email Template
        $adminMail->Body = "
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
                body { font-family: 'Poppins', sans-serif; line-height: 1.6; color: #333; max-width: 650px; margin: 0 auto; padding: 0; background-color: #f9f9f9; }
                .container { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
                .header { background-color: #41C06C; padding: 30px 20px; text-align: center; color: white; }
                .logo { font-size: 24px; font-weight: 600; margin-bottom: 10px; }
                .title { font-size: 20px; margin: 0; }
                .content { padding: 30px; }
                .detail-box { margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 20px; }
                .detail-box:last-child { border-bottom: none; }
                .detail-label { font-weight: 500; color: #41C06C; display: block; margin-bottom: 5px; }
                .detail-value { color: #555; }
                .services-list { list-style-type: none; padding: 0; margin: 0; }
                .services-list li { display: inline-block; background: #f0f8f2; color: #2a7a4d; padding: 5px 12px; border-radius: 20px; margin-right: 8px; margin-bottom: 8px; font-size: 14px; }
                .footer { text-align: center; padding: 20px; font-size: 12px; color: #999; background-color: #f5f5f5; }
                .highlight-box { background-color: #f0f8f2; border-left: 4px solid #41C06C; padding: 15px; margin: 20px 0; border-radius: 0 4px 4px 0; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <div class='logo'>WebLeadingIndia</div>
                    <h1 class='title'>New Quote Request</h1>
                </div>
                
                <div class='content'>
                    <div class='detail-box'>
                        <span class='detail-label'>Client Information</span>
                        <div class='detail-value'>$name</div>
                        <div class='detail-value'>$email</div>
                        <div class='detail-value'>$phone</div>
                    </div>
                    
                    <div class='detail-box'>
                        <span class='detail-label'>Project Type</span>
                        <div class='detail-value'>" . ($projectTypes[$projectType] ?? $projectType) . "</div>
                    </div>
                    
                    <div class='detail-box'>
                        <span class='detail-label'>Services Needed</span>
                        <ul class='services-list'>";
                        foreach ($selectedServices as $service) {
                            $adminMail->Body .= "<li>$service</li>";
                        }
                        $adminMail->Body .= "</ul>
                    </div>
                    
                    <div class='detail-box'>
                        <span class='detail-label'>Budget Range</span>
                        <div class='detail-value'>" . ($budgetRanges[$budget] ?? $budget) . "</div>
                    </div>
                    
                    <div class='highlight-box'>
                        <span class='detail-label'>Project Description</span>
                        <div class='detail-value'>" . nl2br($description) . "</div>
                    </div>
                </div>
                
                <div class='footer'>
                    <p>This inquiry was submitted from the website quote form on " . date('F j, Y') . "</p>
                    <p>&copy; " . date('Y') . " WebLeadingIndia. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>";

        $adminMail->send();
        file_put_contents('email_debug.log', date('Y-m-d H:i:s') . " - Admin email sent successfully\n", FILE_APPEND);
        
        // Send thank you email to user
        $userMail = new PHPMailer(true);
        
        // SMTP Configuration (same as above)
        $userMail->isSMTP();
        $userMail->Host = 'smtp.hostinger.com';
        $userMail->SMTPAuth = true;
        $userMail->Username = 'nirog@webleadingindia.com';
        $userMail->Password = 'Prakash@123';
        $userMail->SMTPSecure = 'ssl';
        $userMail->Port = 465;
        
        $userMail->setFrom('nirog@webleadingindia.com', 'WebLeadingIndia');
        $userMail->addAddress($email, $name);

        $userMail->isHTML(true);
        $userMail->Subject = "Thank you for your quote request";
        
        // User Thank You Email Template
        $userMail->Body = "
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
                body { font-family: 'Poppins', sans-serif; line-height: 1.6; color: #333; max-width: 650px; margin: 0 auto; padding: 0; background-color: #f9f9f9; }
                .container { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
                .header { background-color: #41C06C; padding: 40px 20px; text-align: center; color: white; }
                .logo { font-size: 24px; font-weight: 600; margin-bottom: 10px; }
                .title { font-size: 24px; margin: 0; }
                .content { padding: 30px; }
                .thank-you { font-size: 18px; margin-bottom: 25px; text-align: center; }
                .summary-box { background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin: 25px 0; border: 1px solid #eee; }
                .summary-title { color: #41C06C; font-weight: 500; margin-top: 0; }
                .summary-item { margin-bottom: 10px; }
                .summary-label { font-weight: 500; }
                .services-list { list-style-type: none; padding: 0; margin: 10px 0 0 0; }
                .services-list li { display: inline-block; background: #f0f8f2; color: #2a7a4d; padding: 5px 12px; border-radius: 20px; margin-right: 8px; margin-bottom: 8px; font-size: 14px; }
                .contact-box { background-color: #f0f8f2; border-radius: 8px; padding: 20px; text-align: center; margin: 25px 0; }
                .contact-title { color: #41C06C; margin-top: 0; }
                .cta-button { display: inline-block; background-color: #41C06C; color: white; text-decoration: none; padding: 12px 25px; border-radius: 4px; font-weight: 500; margin-top: 15px; }
                .footer { text-align: center; padding: 20px; font-size: 12px; color: #999; background-color: #f5f5f5; }
                .icon { color: #41C06C; margin-right: 8px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <div class='logo'>WebLeadingIndia</div>
                    <h1 class='title'>Thank You, $name!</h1>
                </div>
                
                <div class='content'>
                    <div class='thank-you'>
                        We've received your quote request and we're excited to work with you!
                    </div>
                    
                    <div class='summary-box'>
                        <h3 class='summary-title'>Your Project Summary</h3>
                        <div class='summary-item'>
                            <span class='summary-label'>Project Type:</span> " . ($projectTypes[$projectType] ?? $projectType) . "
                        </div>
                        <div class='summary-item'>
                            <span class='summary-label'>Services:</span>
                            <ul class='services-list'>";
                            foreach ($selectedServices as $service) {
                                $userMail->Body .= "<li>$service</li>";
                            }
                            $userMail->Body .= "</ul>
                        </div>
                        <div class='summary-item'>
                            <span class='summary-label'>Budget:</span> " . ($budgetRanges[$budget] ?? $budget) . "
                        </div>
                    </div>
                    
                    <p>Our team is currently reviewing your requirements. You can expect to hear from us within 24 hours with a detailed proposal tailored to your needs.</p>
                    
                    <div class='contact-box'>
                        <h3 class='contact-title'>Need immediate assistance?</h3>
                        <p>Our team is here to help you with any questions you might have.</p>
                        <p>
                            <span class='icon'>📧</span> info@webleadingindia.com<br>
                            <span class='icon'>📱</span> +91 8376817258
                        </p>
                        <a href='mailto:info@webleadingindia.com' class='cta-button'>Contact Us Now</a>
                    </div>
                    
                    <p>We appreciate you considering WebLeadingIndia for your project. We're committed to delivering exceptional results that will help your business grow.</p>
                </div>
                
                <div class='footer'>
                    <p>This email was sent in response to your quote request on " . date('F j, Y') . "</p>
                    <p>&copy; " . date('Y') . " WebLeadingIndia. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>";

        $userMail->send();
        file_put_contents('email_debug.log', date('Y-m-d H:i:s') . " - User thank you email sent successfully\n", FILE_APPEND);
        
        $response['success'] = true;
        $response['message'] = 'Thank you for your quote request! We will contact you soon.';
    } catch (Exception $e) {
        $errorMsg = "Mailer Error: " . $e->getMessage();
        $response['message'] = $errorMsg;
        file_put_contents('error.log', date('Y-m-d H:i:s') . " - $errorMsg\n", FILE_APPEND);
    }
} else {
    $response['message'] = 'Invalid request method. Expected POST.';
    file_put_contents('error.log', date('Y-m-d H:i:s') . " - Invalid request method: " . $_SERVER["REQUEST_METHOD"] . "\n", FILE_APPEND);
}

echo json_encode($response);
?>