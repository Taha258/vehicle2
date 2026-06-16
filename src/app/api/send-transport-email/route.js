// src/app/api/send-transport-email/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    
    const { 
      fullName, phone, email, vehicleType, vehicleCondition,
      pickupCity, pickupProvince, pickupPostal,
      deliveryCity, deliveryProvince, deliveryPostal,
      preferredDate, notes, vehicle_photos 
    } = body;

    // ✅ Base64 images ko attachments mein convert karein
    const attachments = [];
    if (vehicle_photos && vehicle_photos.length > 0) {
      vehicle_photos.forEach((photo, index) => {
        const matches = photo.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
        if (matches && matches.length === 3) {
          const mimeType = matches[1];
          const base64Data = matches[2];
          const ext = mimeType.split('/')[1] || 'jpg';
          
          attachments.push({
            filename: `vehicle-photo-${index + 1}.${ext}`,
            content: base64Data,
          });
        }
      });
    }

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #FAC104; padding: 20px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: #000; margin: 0; font-size: 24px;">🚛 Nuova Richiesta Trasporto</h1>
        </div>
        
        <div style="background: #fff; padding: 30px; border: 1px solid #eee; border-radius: 0 0 12px 12px;">
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px;">
            Informazioni Personali
          </h2>
          <table style="width: 100%; margin-bottom: 25px; border-collapse: collapse;">
            <tr><td style="padding: 8px; background: #f9f9f9; width: 40%;"><strong>Nome Completo</strong></td><td style="padding: 8px;">${fullName}</td></tr>
            <tr><td style="padding: 8px; background: #f9f9f9;"><strong>Telefono</strong></td><td style="padding: 8px;">${phone}</td></tr>
            <tr><td style="padding: 8px; background: #f9f9f9;"><strong>Email</strong></td><td style="padding: 8px;"><a href="mailto:${email}">${email || 'Non fornito'}</a></td></tr>
          </table>
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px;">
            Informazioni Veicolo
          </h2>
          <table style="width: 100%; margin-bottom: 25px; border-collapse: collapse;">
            <tr><td style="padding: 8px; background: #f9f9f9; width: 40%;"><strong>Tipo di Veicolo</strong></td><td style="padding: 8px;">${vehicleType}</td></tr>
            <tr><td style="padding: 8px; background: #f9f9f9;"><strong>Condizione</strong></td><td style="padding: 8px;">${vehicleCondition}</td></tr>
          </table>
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px;">
            Dettagli Trasporto
          </h2>
          <table style="width: 100%; margin-bottom: 25px; border-collapse: collapse;">
            <tr><td style="padding: 8px; background: #f9f9f9; width: 40%;"><strong>Ritiro</strong></td><td style="padding: 8px;">${pickupCity}, ${pickupProvince} ${pickupPostal}</td></tr>
            <tr><td style="padding: 8px; background: #f9f9f9;"><strong>Consegna</strong></td><td style="padding: 8px;">${deliveryCity}, ${deliveryProvince} ${deliveryPostal}</td></tr>
            <tr><td style="padding: 8px; background: #f9f9f9;"><strong>Data Preferita</strong></td><td style="padding: 8px;">${preferredDate || 'Non specificata'}</td></tr>
          </table>
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px;">
            Note Aggiuntive
          </h2>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 8px; line-height: 1.6;">
            ${notes || 'Nessuna nota aggiuntiva'}
          </p>
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px; margin-top: 25px;">
            Foto Veicolo (${vehicle_photos?.length || 0})
          </h2>
          <p style="color: #666; font-size: 14px;">
            📎 ${vehicle_photos?.length || 0} foto allegata/e a questa email.
          </p>
          <p style="color: #999; font-size: 12px; margin-top: 10px;">
            Si prega di scaricare i file allegati per visualizzare le foto del veicolo.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
            Inviato dal modulo Richiesta Trasporto | WalCars
          </div>
        </div>
      </div>
    `;

    const emailOptions = {
      from: 'WalCars <onboarding@resend.dev>',
      to: ['khalidghani.333@gmail.com'],
      subject: `🚛 Nuova Richiesta Trasporto - ${vehicleType} (${vehicleCondition})`,
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
