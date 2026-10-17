<?php
// Include PHPMailer classes
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Rate limiting - 3 emails per IP per day
session_start();
$ip = $_SERVER['REMOTE_ADDR'];
$rateLimitFile = 'rate_limit.json';

// Initialize rate limit data
if (!file_exists($rateLimitFile)) {
    file_put_contents($rateLimitFile, json_encode([]));
}

$rateData = json_decode(file_get_contents($rateLimitFile), true);

// Check if IP exists and if limit reached
if (isset($rateData[$ip])) {
    if ($rateData[$ip]['count'] >= 3 && $rateData[$ip]['date'] == date('Y-m-d')) {
        http_response_code(429);
        die("You've reached the maximum of 3 submissions per day. Please try again tomorrow.");
    }
    
    // Reset count if it's a new day
    if ($rateData[$ip]['date'] != date('Y-m-d')) {
        $rateData[$ip]['count'] = 0;
        $rateData[$ip]['date'] = date('Y-m-d');
    }
} else {
    $rateData[$ip] = ['count' => 0, 'date' => date('Y-m-d')];
}

// Get form data from Next.js request
$input = json_decode(file_get_contents('php://input'), true);

$name = filter_var($input['name'], FILTER_SANITIZE_STRING);
$email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
$phone = filter_var($input['phone'], FILTER_SANITIZE_STRING);
$projectType = filter_var($input['projectType'], FILTER_SANITIZE_STRING);
$services = implode(', ', array_map('filter_var', $input['services']));
$budget = filter_var($input['budget'], FILTER_SANITIZE_STRING);
$description = filter_var($input['description'], FILTER_SANITIZE_STRING);

// Calculate estimate (same as frontend logic)
$estimate = 0;
$servicePrices = [
    'web-development' => 25000,
    'web-design' => 15000,
    'ecommerce' => 50000,
    'web-app' => 75000,
    'seo' => 10000,
    'maintenance' => 5000
];

foreach ($input['services'] as $service) {
    if (isset($servicePrices[$service])) {
        $estimate += $servicePrices[$service];
    }
}

// Adjust based on budget selection
if ($budget === 'under-50k' && $estimate > 50000) $estimate = 45000;
if ($budget === '50k-100k' && $estimate > 100000) $estimate = 95000;
if ($budget === '100k-250k' && $estimate > 250000) $estimate = 240000;

$estimateFormatted = '₹' . number_format($estimate);

try {
    // Send email to admin
    $adminMail = new PHPMailer(true);
    
    // SMTP configuration
    $adminMail->isSMTP();
    $adminMail->Host       = 'smtp.elasticemail.com';
    $adminMail->SMTPAuth   = true;
    $adminMail->Username   = 'notification@webleadingindia.com';
    $adminMail->Password   = 'A8E895A8A059BC38627B0EE62C8565704C62';
    $adminMail->SMTPSecure = 'tls';
    $adminMail->Port       = 2525;

    $adminMail->setFrom('notification@webleadingindia.com', 'Website Quote Form');
    $adminMail->addAddress('admin@example.com', 'Admin');
    $adminMail->addReplyTo($email, $name);

    $adminMail->isHTML(true);
    $adminMail->Subject = 'New Quote Request: ' . $name;

    // Modern HTML template for admin email
    $adminMail->Body = <<<HTML
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { padding: 20px; background-color: #f9f9f9; border-radius: 0 0 5px 5px; }
            .detail { margin-bottom: 15px; }
            .detail-label { font-weight: bold; color: #4CAF50; }
            .estimate { background-color: #e8f5e9; padding: 15px; border-radius: 5px; margin-top: 20px; }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>New Quote Request</h1>
        </div>
        <div class="content">
            <div class="detail"><span class="detail-label">Name:</span> $name</div>
            <div class="detail"><span class="detail-label">Email:</span> $email</div>
            <div class="detail"><span class="detail-label">Phone:</span> $phone</div>
            <div class="detail"><span class="detail-label">Project Type:</span> $projectType</div>
            <div class="detail"><span class="detail-label">Services Needed:</span> $services</div>
            <div class="detail"><span class="detail-label">Budget Range:</span> $budget</div>
            <div class="detail"><span class="detail-label">Project Description:</span><br>$description</div>
            
            <div class="estimate">
                <h3>Estimated Cost</h3>
                <p>Based on the selected services, the estimated cost is:</p>
                <h2>$estimateFormatted</h2>
                <p><em>Note: This is a preliminary estimate. Final pricing may vary after consultation.</em></p>
            </div>
        </div>
    </body>
    </html>
    HTML;

    $adminMail->send();

    // Send thank you email to user
    $userMail = new PHPMailer(true);
    
    // SMTP configuration (same as above)
    $userMail->isSMTP();
    $userMail->Host       = 'smtp.elasticemail.com';
    $userMail->SMTPAuth   = true;
    $userMail->Username   = 'notification@webleadingindia.com';
    $userMail->Password   = 'A8E895A8A059BC38627B0EE62C8565704C62';
    $userMail->SMTPSecure = 'tls';
    $userMail->Port       = 2525;

    $userMail->setFrom('notification@webleadingindia.com', 'Webleadingindia');
    $userMail->addAddress($email, $name);

    $userMail->isHTML(true);
    $userMail->Subject = 'Thank you for your quote request';

    // Modern HTML template for thank you email
    $userMail->Body = <<<HTML
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { padding: 20px; background-color: #f9f9f9; border-radius: 0 0 5px 5px; }
            .thank-you { font-size: 24px; color: #4CAF50; margin: 20px 0; }
            .estimate { background-color: #e8f5e9; padding: 15px; border-radius: 5px; margin: 20px 0; }
            .cta { background-color: #4CAF50; color: white; padding: 10px 20px; text-align: center; border-radius: 5px; display: inline-block; text-decoration: none; }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>Your Quote Request</h1>
        </div>
        <div class="content">
            <div class="thank-you">Thank you, $name!</div>
            <p>We've received your quote request and our team will review it shortly. Here's a summary of your request:</p>
            
            <div class="estimate">
                <h3>Your Estimated Cost</h3>
                <p>Based on the information you provided:</p>
                <h2>$estimateFormatted</h2>
                <p><em>This is a preliminary estimate. We'll contact you within 24 hours with a detailed proposal.</em></p>
            </div>
            
            <p>If you have any immediate questions, feel free to reply to this email or call us at +91 8376817258.</p>
            
            <p>Best regards,<br>Webleadingindia</p>
            
            <a href="https://webleadingindia.com" class="cta">Visit Our Website</a>
        </div>
    </body>
    </html>
    HTML;

    $userMail->send();

    // Update rate limit
    $rateData[$ip]['count']++;
    file_put_contents($rateLimitFile, json_encode($rateData));

    // Return success response to Next.js
    header('Content-Type: application/json');
    echo json_encode(['success' => true, 'message' => 'Thank you! Your request has been submitted.']);

} catch (Exception $e) {
    // Return error response to Next.js
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again later.']);
}