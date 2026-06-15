// src/app/api/send-email/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    
    const { 
      make, model, year, mileage, fuel_type, transmission, location,
      name, email, telephone, message,
      car_photos 
    } = body;

    // ✅ Base64 images ko attachments mein convert karein
    const attachments = [];
    if (car_photos && car_photos.length > 0) {
      car_photos.forEach((photo, index) => {
        const matches = photo.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
        if (matches && matches.length === 3) {
          const mimeType = matches[1];
          const base64Data = matches[2];
          const ext = mimeType.split('/')[1] || 'jpg';
          
          attachments.push({
            filename: `car-photo-${index + 1}.${ext}`,
            content: base64Data,
          });
        }
      });
    }

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #FAC104; padding: 20px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: #000; margin: 0; font-size: 24px;">🚗 New Car Sale Inquiry</h1>
        </div>
        
        <div style="background: #fff; padding: 30px; border: 1px solid #eee; border-radius: 0 0 12px 12px;">
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px;">
            Vehicle Information
          </h2>
          <table style="width: 100%; margin-bottom: 25px; border-collapse: collapse;">
            <tr><td style="padding: 8px; background: #f9f9f9; width: 40%;"><strong>Make</strong></td><td style="padding: 8px;">${make}</td></tr>
            <tr><td style="padding: 8px; background: #f9f9f9;"><strong>Model</strong></td><td style="padding: 8px;">${model}</td></tr>
            <tr><td style="padding: 8px; background: #f9f9f9;"><strong>Year</strong></td><td style="padding: 8px;">${year}</td></tr>
            <tr><td style="padding: 8px; background: #f9f9f9;"><strong>Mileage</strong></td><td style="padding: 8px;">${mileage} km</td></tr>
            <tr><td style="padding: 8px; background: #f9f9f9;"><strong>Fuel Type</strong></td><td style="padding: 8px;">${fuel_type}</td></tr>
            <tr><td style="padding: 8px; background: #f9f9f9;"><strong>Transmission</strong></td><td style="padding: 8px;">${transmission}</td></tr>
            <tr><td style="padding: 8px; background: #f9f9f9;"><strong>Location</strong></td><td style="padding: 8px;">${location || 'Not provided'}</td></tr>
          </table>
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px;">
            Seller Information
          </h2>
          <table style="width: 100%; margin-bottom: 25px; border-collapse: collapse;">
            <tr><td style="padding: 8px; background: #f9f9f9; width: 40%;"><strong>Name</strong></td><td style="padding: 8px;">${name}</td></tr>
            <tr><td style="padding: 8px; background: #f9f9f9;"><strong>Email</strong></td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; background: #f9f9f9;"><strong>Telephone</strong></td><td style="padding: 8px;">${telephone}</td></tr>
          </table>
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px;">
            Additional Message
          </h2>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 8px; line-height: 1.6;">
            ${message || 'No additional message'}
          </p>
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px; margin-top: 25px;">
            Car Photos (${car_photos?.length || 0})
          </h2>
          <p style="color: #666; font-size: 14px;">
            📎 ${car_photos?.length || 0} photo(s) attached to this email.
          </p>
          <p style="color: #999; font-size: 12px; margin-top: 10px;">
            Please download the attached files to view the car photos.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
            Sent from WalCars Sell Form
          </div>
        </div>
      </div>
    `;

    const emailOptions = {
      from: 'WalCars <onboarding@resend.dev>',
      to: ['walcarsit@gmail.com'],  // ✅ Updated email address
      subject: `🚗 New Car Sale Inquiry - ${make} ${model} (${year})`,
      html: emailContent,
      reply_to: email,
    };

    if (attachments.length > 0) {
      emailOptions.attachments = attachments;
    }

    const data = await resend.emails.send(emailOptions);

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}