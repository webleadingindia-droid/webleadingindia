import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Get form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    console.log('Received form data:', { name, email, phone, service, message });
    
    // Read the attachment file (if needed)
    const filePath = path.join(process.cwd(), 'public', 'Start-up-Registration.png');
    let file = null;
    
    if (fs.existsSync(filePath)) {
      console.log('Attachment file found at:', filePath);
      const fileBuffer = fs.readFileSync(filePath);
      const fileBlob = new Blob([fileBuffer], { type: 'image/png' });
      file = new File([fileBlob], 'Start-up-Registration.png', { type: 'image/png' });
    } else {
      console.log('No attachment file found at:', filePath);
    }

    // Prepare the form data for the external API
    const apiFormData = new FormData();
    apiFormData.append('email', email);
    apiFormData.append('subject', `Contact Form Submission from ${email}`);
    apiFormData.append('details', `.`);
    if (file) {
      apiFormData.append('file', file);
    }
    apiFormData.append('message', `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Us</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
        }
        .email-container {
            max-width: 650px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
            margin-bottom: 30px;
        }
        .logo {
            max-width: 150px;
            margin-bottom: 20px;
        }
        .checkmark {
            font-size: 60px;
            color: #4CAF50;
            text-align: center;
            margin: 20px 0;
        }
        h1 {
            color: #2c3e50;
            margin-top: 0;
            font-size: 24px;
        }
        p {
            margin-bottom: 20px;
            font-size: 16px;
        }
        .details {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            margin: 25px 0;
        }
        .detail-item {
            margin-bottom: 10px;
        }
        .detail-label {
            font-weight: bold;
            color: #555;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            text-align: center;
            font-size: 14px;
            color: #777;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #4CAF50;
            color: white !important;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            margin: 20px 0;
        }
        .social-links {
            margin: 20px 0;
            text-align: center;
        }
        .social-links a {
            margin: 0 10px;
            text-decoration: none;
        }
        @media only screen and (max-width: 600px) {
            .email-container {
                padding: 20px;
                margin: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <!-- Replace with your actual logo URL -->
            <img src="https://www.webleadingindia.com/Logo.png" alt="Company Logo" class="logo">
        </div>
        
        <div class="checkmark">✓</div>
        
        <h1 style="text-align: center;">Thank You for Contacting Us!</h1>
        
        <p>Dear ${name},</p>
        
        <p>We've received your message regarding <strong>${service}</strong> and appreciate you reaching out to us. Our team will review your inquiry and get back to you within 24-48 hours.</p>
        
        <p>For urgent matters, please feel free to call us directly at <strong>+91 8376817258</strong>.</p>
        
        <div class="details">
            <h3 style="margin-top: 0;">Your Contact Details:</h3>
            <div class="detail-item">
                <span class="detail-label">Name:</span> ${name}
            </div>
            <div class="detail-item">
                <span class="detail-label">Email:</span> ${email}
            </div>
            <div class="detail-item">
                <span class="detail-label">Phone:</span> ${phone}
            </div>
            <div class="detail-item">
                <span class="detail-label">Service:</span> ${service}
            </div>
            <div class="detail-item">
                <span class="detail-label">Message:</span> ${message}
            </div>
        </div>
        
        <p style="text-align: center;">
            <a href="https://webleadingindia.com" class="button">Visit Our Website</a>
        </p>
        
        <div class="footer">
            <p>© ${new Date().getFullYear()} Web Leading India. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
    `);

    console.log('Sending to external API with data:', {
      email,
      subject: `Contact Form Submission from ${email}`,
      hasAttachment: !!file,
      messageLength: message.length
    });

    // Send to external API
    const response = await fetch('https://webleadingindia.com/laramail/api/contact/send-email', {
      method: 'POST',
      body: apiFormData,
      headers: {
        'Accept': 'application/json',
      },
    });

    const responseText = await response.text();
    let data;
    
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse API response as JSON:', responseText);
      data = { rawResponse: responseText };
    }

    console.log('API Response:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      body: data
    });

    if (!response.ok) {
      const errorMessage = data.message || data.error || 'Failed to send email';
      console.error('API Error:', errorMessage);
      return NextResponse.json(
        { 
          success: false, 
          error: errorMessage,
          apiResponse: data,
          statusCode: response.status
        },
        { status: response.status }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully!',
        apiResponse: data
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Unexpected Error:', error);
    
    let errorMessage = 'Internal server error';
    let errorDetails = null;
    
    if (error instanceof Error) {
      errorMessage = error.message;
      errorDetails = {
        name: error.name,
        stack: error.stack
      };
    }

    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        errorDetails: process.env.NODE_ENV === 'development' ? errorDetails : undefined
      },
      { status: 500 }
    );
  }
}