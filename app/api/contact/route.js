import nodemailer from 'nodemailer';


export async function POST(req,res){
    //only allow post method
    if(req.method !== 'POST'){
        return new Response(JSON.stringify({error : 'Method not allowed'}),{status : 405,})
    }
    try {
      const body = await req.json();
        const { name,email,message,newsletter } = body;

        if(!name || !email || !message){
            return new Response(JSON.stringify({error : 'Name,email and message are required'}),{status : 400,})
        }
            if(!/^\S+@\S+\.\S+$/.test(email)){
                return new Response(JSON.stringify({error : 'Invalid email format'}),{status : 400,})
            }
            // Create transporter (configuration will depend on your email provider)
            const transporter = nodemailer.createTransport({
                service: 'gmail',  // This preset includes host, port, and secure settings
                auth: {
                  user: process.env.EMAIL_USER,
                  pass: process.env.EMAIL_PASSWORD,
                },
              });

                // Email content - HTML template
    const emailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f0f4f9; padding: 20px; border-radius: 5px; }
        .content { padding: 20px 0; }
        .footer { font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Newsletter Subscription:</strong> ${newsletter ? 'Yes' : 'No'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
        <div class="footer">
          <p>This email was sent from your website contact form.</p>
        </div>
      </div>
    </body>
    </html>`;
        
      // Email data
      const mailOptions = {
        from: email, // The sender address
        to: process.env.EMAIL_USER, // Your recipient email
        subject: `New Contact Form Message from ${name}`,
        html: emailContent,
      };
       // Send email
    await transporter.sendMail(mailOptions);

    //return success response
    return new Response(JSON.stringify({success : true}),{status : 200,})
    } catch (error) {
        console.error('Contact form error:',error);
        return new Response(JSON.stringify({error : 'Failed to send mail'}),{status : 500,})
    }
}