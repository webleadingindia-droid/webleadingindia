import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Get form fields from quote page
    const name = formData.name as string;
    const email = formData.email as string;
    const phone = formData.phone as string;
    const projectType = formData.projectType as string;
    const services = formData.services as string[];
    const budget = formData.budget as string;
    const description = formData.description as string;

    console.log('Received quote form data:', { 
      name, 
      email, 
      phone, 
      projectType, 
      services, 
      budget, 
      description 
    });
    
    // Map project type ID to readable name
    const projectTypeNames: Record<string, string> = {
      'new-project': 'Brand New Project',
      'redesign': 'Redesign Existing Site',
      'add-features': 'Add Features to Existing Site',
      'not-sure': 'Not Sure Yet'
    };

    // Map service IDs to readable names
    const serviceNames: Record<string, string> = {
      'web-development': 'Website Development',
      'web-design': 'Website Design',
      'ecommerce': 'E-commerce Store',
      'web-app': 'Web Application',
      'seo': 'SEO Optimization',
      'maintenance': 'Maintenance'
    };

    // Map budget ID to readable name
    const budgetNames: Record<string, string> = {
      'under-50k': 'Under ₹50,000',
      '50k-100k': '₹50,000 - ₹1,00,000',
      '100k-250k': '₹1,00,000 - ₹2,50,000',
      'above-250k': 'Above ₹2,50,000',
      'not-sure': 'Not Sure Yet'
    };

    const selectedServices = services.map(serviceId => serviceNames[serviceId] || serviceId).join(', ');
    const selectedProjectType = projectTypeNames[projectType] || projectType;
    const selectedBudget = budgetNames[budget] || budget;

    // Prepare the form data for the external API
    const apiFormData = new FormData();
    apiFormData.append('email', email);
    apiFormData.append('subject', `Quote Request from ${name}`);
    apiFormData.append('details', `.`);
    
    // Read attachment file if needed
    const filePath = path.join(process.cwd(), 'public', 'Start-up-Registration.png');
    if (fs.existsSync(filePath)) {
      console.log('Attachment file found at:', filePath);
      const fileBuffer = fs.readFileSync(filePath);
      const fileBlob = new Blob([fileBuffer], { type: 'image/png' });
      const file = new File([fileBlob], 'Start-up-Registration.png', { type: 'image/png' });
      apiFormData.append('file', file);
    }

    apiFormData.append('message', `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Quote Request | Web Leading India</title>
    <style>
        /* Modern & Stylish CSS with Animations */
        :root {
            --primary: #41c06c;
            --primary-dark: #1c6836ff;
            --secondary: #FF6584;
            --dark: #165f30ff;
            --light: #F8F9FF;
            --success: #4CC9F0;
            --text: #2B2D42;
            --text-light: #8D99AE;
            --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }

        h1, h2, h3{
        color:#41C06C;
        }

        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background: white;
            color: black;
            line-height: 1.6;
        }

        .email-wrapper {
            max-width: 650px;
            margin: 30px auto;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: var(--shadow);
            animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .header {
            padding: 40px 20px;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
        }

        .header p{
        color:black;}

        .header::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
            transform: rotate(30deg);
            animation: shine 6s infinite linear;
        }

        @keyframes shine {
            0% { transform: rotate(30deg) translate(-30%, -30%); }
            100% { transform: rotate(30deg) translate(30%, 30%); }
        }

        .logo {
            max-width: 160px;
            margin-bottom: 20px;
            filter: drop-shadow(0 2px 5px rgba(0,0,0,0.1));
        }

        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.5px;
            position: relative;
            z-index: 1;
        }

        .header p {
            opacity: 0.9;
            font-weight: 300;
            margin: 10px 0 0;
            position: relative;
            z-index: 1;
        }

        .content {
            padding: 40px;
        }

        .checkmark {
            display: flex;
            align-items: center !important;
            justify-content: center !important;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            color: black;
            font-size: 40px;
            margin: 0 auto 30px;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        h2 {
            color: var(--dark);
            font-size: 24px;
            font-weight: 700;
            margin: 0 0 20px;
            text-align: center;
        }

        p {
            margin-bottom: 20px;
            font-size: 16px;
            color: var(--text);
        }

        .details-card {
            background: white;
            border-radius: 16px;
            padding: 25px;
            margin: 30px 0;
            border: 1px solid rgba(0, 0, 0, 0.05);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
            transition: var(--transition);
        }

        .details-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .detail-item {
            display: flex;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
        }

        .detail-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .detail-label {
            font-weight: 600;
            color: var(--primary);
            min-width: 140px;
        }

        .detail-value {
            color: var(--text);
            flex-grow: 1;
        }

        .button-container {
            text-align: center;
            margin: 30px 0;
        }

        .button {
            display: inline-block;
            padding: 14px 32px;
            background: #41C06C;
            color: white !important;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 16px;
            transition: var(--transition);
            box-shadow: 0 5px 15px rgba(130, 255, 99, 0.3);
            position: relative;
            overflow: hidden;
        }

        .button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(99, 255, 159, 0.4);
        }

        .button::after {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: black;
            transform: rotate(30deg);
            transition: var(--transition);
        }

        .button:hover::after {
            transform: rotate(30deg) translate(30%, 30%);
        }

        .social-container {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 30px 0;
        }

        .social-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #F0F2FF;
            transition: var(--transition);
        }

        .social-icon:hover {
            background: var(--primary);
            transform: translateY(-5px) scale(1.1);
        }

        .social-icon:hover img {
            filter: brightness(0) invert(1);
        }

        .footer {
            text-align: center;
            padding: 25px;
            background: white;
            color: black;
            font-size: 14px;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .highlight {
            color: var(--primary);
            font-weight: 600;
        }

        /* Responsive Design */
        @media only screen and (max-width: 600px) {
            .email-wrapper {
                margin: 15px;
                border-radius: 15px;
            }

            .header {
                padding: 30px 15px;
            }

            .content {
                padding: 25px 20px;
            }

            .detail-item {
                flex-direction: column;
            }

            .detail-label {
                margin-bottom: 5px;
            }

            .button {
                padding: 12px 24px;
                font-size: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <div class="header">
            <img src="https://www.webleadingindia.com/Logo.png" alt="Web Leading India" class="logo">
            <h1>Thank You for Your Request!</h1>
            <p>We're excited to work with you</p>
        </div>
        
        <div class="content">
            <div class="checkmark">✓</div>
            
            <h2>Your Quote Request is Confirmed</h2>
            
            <p>Dear <span class="highlight">${name}</span>,</p>
            
            <p>Thank you for choosing <strong>Web Leading India</strong> for your <strong>${selectedServices}</strong> project. We’ve received your details and our team is already working on your proposal.</p>
            
            <div class="details-card">
                <h3 style="margin-top: 0; color: var(--primary);">📋 Project Summary</h3>
                
                <div class="detail-item">
                    <span class="detail-label">👤 Name:</span>
                    <span class="detail-value">${name}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">📞 Phone:</span>
                    <span class="detail-value">${phone}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">✉️ Email:</span>
                    <span class="detail-value">${email}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">🛠️ Project Type:</span>
                    <span class="detail-value">${selectedProjectType}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">💼 Services:</span>
                    <span class="detail-value">${selectedServices}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">💰 Budget:</span>
                    <span class="detail-value">${selectedBudget}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">📝 Description:</span>
                    <span class="detail-value">${description}</span>
                </div>
            </div>
            
            <p>We’ll review your requirements and get back to you within <strong>24 hours</strong> with a customized proposal. For urgent queries, call us at <a href="tel:+918376817258" style="color: var(--primary); text-decoration: none;">+91 8376817258</a>.</p>
            
            <div class="button-container">
                <a href="https://webleadingindia.com" class="button">Visit Our Website</a>
            </div>            
           
        </div>
        
        <div class="footer">
            <p>© ${new Date().getFullYear()} <strong>WebLeadingIndia</strong>. All Rights Reserved.</p>
        </div>
    </div>
</body>
</html>
    `);

    console.log('Sending to external API with data:', {
      email,
      subject: `Quote Request from ${name}`,
      hasAttachment: apiFormData.has('file'),
      projectType: selectedProjectType,
      services: selectedServices,
      budget: selectedBudget
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
        message: 'Quote request submitted successfully!',
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