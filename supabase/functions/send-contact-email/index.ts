
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const createThankYouEmail = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Thank You - SHIV</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
    
    body {
      margin: 0;
      padding: 0;
      font-family: 'Orbitron', 'Roboto Mono', monospace;
      background: linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%);
      color: #e2e8f0;
      line-height: 1.6;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: rgba(2, 6, 23, 0.9);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 12px;
      backdrop-filter: blur(20px);
      box-shadow: 
        0 4px 6px -1px rgba(0, 0, 0, 0.4),
        0 2px 4px -1px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(59, 130, 246, 0.1),
        0 0 20px rgba(59, 130, 246, 0.05);
    }
    
    .header {
      text-align: center;
      padding: 40px 30px 20px;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
      border-radius: 12px 12px 0 0;
    }
    
    .logo {
      font-size: 28px;
      font-weight: 700;
      color: #3b82f6;
      text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
      margin-bottom: 10px;
    }
    
    .subtitle {
      color: #94a3b8;
      font-size: 14px;
      margin: 0;
    }
    
    .content {
      padding: 30px;
    }
    
    .greeting {
      font-size: 24px;
      color: #f1f5f9;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .message {
      color: #cbd5e1;
      margin-bottom: 25px;
      font-size: 16px;
    }
    
    .highlight-box {
      background: rgba(59, 130, 246, 0.1);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
    }
    
    .response-time {
      color: #3b82f6;
      font-weight: 600;
    }
    
    .footer {
      text-align: center;
      padding: 30px;
      border-top: 1px solid rgba(59, 130, 246, 0.2);
      color: #64748b;
      font-size: 14px;
    }
    
    .security-note {
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      border-radius: 8px;
      padding: 15px;
      margin-top: 20px;
      font-size: 14px;
    }
    
    .tech-pattern {
      background-image: 
        linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
      background-size: 20px 20px;
    }
  </style>
</head>
<body class="tech-pattern">
  <div class="container">
    <div class="header">
      <div class="logo">SHIV</div>
      <p class="subtitle">Cybersecurity Professional</p>
    </div>
    
    <div class="content">
      <h1 class="greeting">Thank you, ${name}!</h1>
      
      <p class="message">
        Your message has been successfully received and encrypted in our secure communication channel. 
        I appreciate you reaching out regarding cybersecurity matters.
      </p>
      
      <div class="highlight-box">
        <p><strong class="response-time">Response Time:</strong> I typically respond within 24 hours</p>
        <p><strong>Security:</strong> All communications are encrypted and monitored</p>
        <p><strong>Priority:</strong> Professional inquiries receive immediate attention</p>
      </div>
      
      <p class="message">
        Whether you're looking to discuss cybersecurity challenges, explore collaboration opportunities, 
        or simply connect with a fellow security enthusiast, I'm excited to continue our conversation.
      </p>
      
      <div class="security-note">
        <strong>🔒 Security Notice:</strong> This communication is part of a secure channel. 
        Please do not share sensitive information via email. For confidential matters, 
        we'll arrange a secure communication method.
      </div>
    </div>
    
    <div class="footer">
      <p><strong>SHIV • Cybersecurity Professional</strong></p>
      <p>"Building secure digital futures, one line of code at a time"</p>
      <p style="margin-top: 15px; color: #475569;">
        This email was sent from an automated system. Please do not reply directly to this email.
      </p>
    </div>
  </div>
</body>
</html>
`;

const createNotificationEmail = (formData: ContactFormData) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>New Contact Form Submission</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
    
    body {
      margin: 0;
      padding: 0;
      font-family: 'Orbitron', 'Roboto Mono', monospace;
      background: linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%);
      color: #e2e8f0;
      line-height: 1.6;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: rgba(2, 6, 23, 0.9);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 12px;
      backdrop-filter: blur(20px);
      box-shadow: 
        0 4px 6px -1px rgba(0, 0, 0, 0.4),
        0 2px 4px -1px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(59, 130, 246, 0.1),
        0 0 20px rgba(59, 130, 246, 0.05);
    }
    
    .header {
      text-align: center;
      padding: 30px;
      background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
      border-radius: 12px 12px 0 0;
    }
    
    .alert-title {
      font-size: 24px;
      color: #ef4444;
      margin: 0;
      text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
    }
    
    .content {
      padding: 30px;
    }
    
    .field {
      margin-bottom: 20px;
      background: rgba(59, 130, 246, 0.05);
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 8px;
      padding: 15px;
    }
    
    .field-label {
      color: #3b82f6;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 5px;
      text-transform: uppercase;
    }
    
    .field-value {
      color: #f1f5f9;
      font-size: 16px;
      word-wrap: break-word;
    }
    
    .timestamp {
      text-align: center;
      padding: 20px;
      color: #64748b;
      font-size: 14px;
      border-top: 1px solid rgba(59, 130, 246, 0.2);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="alert-title">🚨 NEW CONTACT SUBMISSION</h1>
    </div>
    
    <div class="content">
      <div class="field">
        <div class="field-label">Name</div>
        <div class="field-value">${formData.name}</div>
      </div>
      
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value">${formData.email}</div>
      </div>
      
      <div class="field">
        <div class="field-label">Subject</div>
        <div class="field-value">${formData.subject}</div>
      </div>
      
      <div class="field">
        <div class="field-label">Message</div>
        <div class="field-value">${formData.message}</div>
      </div>
    </div>
    
    <div class="timestamp">
      Received: ${new Date().toLocaleString('en-US', { 
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      })}
    </div>
  </div>
</body>
</html>
`;

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", formData);

    // Send notification email to you
    const notificationResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["shiv@cybersec.dev"], // Replace with your actual email
      subject: `🚨 New Contact: ${formData.subject}`,
      html: createNotificationEmail(formData),
    });

    console.log("Notification email sent:", notificationResponse);

    // Send thank you email to the user
    const thankYouResponse = await resend.emails.send({
      from: "SHIV - Cybersecurity Professional <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Message Received - Secure Communication Established",
      html: createThankYouEmail(formData.name),
    });

    console.log("Thank you email sent:", thankYouResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully",
        notificationId: notificationResponse.data?.id,
        thankYouId: thankYouResponse.data?.id
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
