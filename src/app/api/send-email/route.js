// src/app/api/send-email/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    
    const { 
      make, model, year, mileage, fuel_type, transmission, location,
      name, email, telephone, message,
      price, car_type, car_condition, body_color,
      engine, cylinders, horsepower, stock_id,
      overview, features,
      main_car_image, gallery_images
    } = body;

    const attachments = [];
    
    if (main_car_image) {
      const matches = main_car_image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
      if (matches && matches.length === 3) {
        const mimeType = matches[1];
        const base64Data = matches[2];
        const ext = mimeType.split('/')[1] || 'jpg';
        attachments.push({ filename: `main-car-image.${ext}`, content: base64Data });
      }
    }

    if (gallery_images && gallery_images.length > 0) {
      gallery_images.forEach((photo, index) => {
        const matches = photo.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
        if (matches && matches.length === 3) {
          const mimeType = matches[1];
          const base64Data = matches[2];
          const ext = mimeType.split('/')[1] || 'jpg';
          attachments.push({ filename: `gallery-photo-${index + 1}.${ext}`, content: base64Data });
        }
      });
    }

    const featuresString = features && features.length > 0 
      ? features.join(', ') 
      : 'Nessuna caratteristica specificata';

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
        <div style="background: #FAC104; padding: 25px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: #000; margin: 0; font-size: 26px;">🚗 Nuova Richiesta Vendita Auto</h1>
          <p style="color: #333; margin: 8px 0 0 0; font-size: 14px;">Inviata da ${name} - ${new Date().toLocaleString('it-IT')}</p>
        </div>
        
        <div style="background: #fff; padding: 30px; border: 1px solid #eee; border-radius: 0 0 12px 12px;">
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px; margin-top: 0;">
            🚘 Informazioni Veicolo
          </h2>
          <table style="width: 100%; margin-bottom: 25px; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 10px; background: #f9f9f9; width: 35%; border: 1px solid #eee;"><strong>Marca</strong></td><td style="padding: 10px; border: 1px solid #eee;">${make}</td></tr>
            <tr><td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;"><strong>Modello</strong></td><td style="padding: 10px; border: 1px solid #eee;">${model}</td></tr>
            <tr><td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;"><strong>Prezzo Richiesto</strong></td><td style="padding: 10px; border: 1px solid #eee; font-weight: bold; color: #FAC104;">€ ${Number(price).toLocaleString('it-IT')}</td></tr>
            <tr><td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;"><strong>Anno</strong></td><td style="padding: 10px; border: 1px solid #eee;">${year}</td></tr>
            <tr><td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;"><strong>Tipo</strong></td><td style="padding: 10px; border: 1px solid #eee;">${car_type}</td></tr>
            <tr><td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;"><strong>Condizione</strong></td><td style="padding: 10px; border: 1px solid #eee;">${car_condition}</td></tr>
            <tr><td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;"><strong>Carburante</strong></td><td style="padding: 10px; border: 1px solid #eee;">${fuel_type}</td></tr>
            <tr><td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;"><strong>Trasmissione</strong></td><td style="padding: 10px; border: 1px solid #eee;">${transmission}</td></tr>
            <tr><td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;"><strong>Chilometraggio</strong></td><td style="padding: 10px; border: 1px solid #eee;">${Number(mileage).toLocaleString('it-IT')} km</td></tr>
            <tr><td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;"><strong>Colore</strong></td><td style="padding: 10px; border: 1px solid #eee;">${body_color}</td></tr>
          </table>
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px;">⚙️ Dettagli Tecnici (Opzionali)</h2>
          <table style="width: 100%; margin-bottom: 25px; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 10px; background: #f9f9f9; width: 35%; border: 1px solid #eee;"><strong>Motore</strong></td><td style="padding: 10px; border: 1px solid #eee;">${engine || 'Non specificato'}</td></tr>
            <tr><td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;"><strong>Cilindri</strong></td><td style="padding: 10px; border: 1px solid #eee;">${cylinders || 'Non specificato'}</td></tr>
            <tr><td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;"><strong>Cavalli (HP)</strong></td><td style="padding: 10px; border: 1px solid #eee;">${horsepower || 'Non specificato'}</td></tr>
            <tr><td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;"><strong>Stock ID</strong></td><td style="padding: 10px; border: 1px solid #eee;">${stock_id || 'Non specificato'}</td></tr>
          </table>
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px;">🏷️ Caratteristiche / Optional</h2>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 25px;"><p style="margin: 0; line-height: 1.6;">${featuresString}</p></div>
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px;">📝 Descrizione dell'Auto</h2>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 25px;"><p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${overview || 'Nessuna descrizione fornita'}</p></div>
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px;">👤 Informazioni Venditore</h2>
          <table style="width: 100%; margin-bottom: 25px; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 10px; background: #f9f9f9; width: 35%; border: 1px solid #eee;"><strong>Nome</strong></td><td style="padding: 10px; border: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;"><strong>Email</strong></td><td style="padding: 10px; border: 1px solid #eee;"><a href="mailto:${email}" style="color: #FAC104;">${email}</a></td></tr>
            <tr><td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;"><strong>Telefono</strong></td><td style="padding: 10px; border: 1px solid #eee;"><a href="tel:${telephone}" style="color: #FAC104;">${telephone}</a></td></tr>
            <tr><td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;"><strong>Posizione</strong></td><td style="padding: 10px; border: 1px solid #eee;">${location || 'Non specificata'}</td></tr>
          </table>
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px;">💬 Messaggio Aggiuntivo</h2>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 25px;"><p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message || 'Nessun messaggio aggiuntivo'}</p></div>
          
          <h2 style="color: #FAC104; border-bottom: 2px solid #FAC104; padding-bottom: 8px; font-size: 18px;">📷 Foto dell'Auto</h2>
          <div style="background: #fffbeb; padding: 15px; border-radius: 8px; border: 1px solid #FAC104; margin-bottom: 25px;">
            <p style="margin: 0; font-size: 14px;">
              <strong>Immagine Principale:</strong> ${main_car_image ? '✅ Caricata (vedi allegato)' : '❌ Non caricata'}<br>
              <strong>Galleria:</strong> ${gallery_images?.length || 0} foto(s) ${gallery_images?.length > 0 ? '(vedi allegati)' : ''}
            </p>
            <p style="margin: 10px 0 0 0; color: #666; font-size: 13px;">📎 ${attachments.length} file(s) allegato/i a questa email.</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">Inviato dal modulo Vendi la tua Auto | WalCars</div>
        </div>
      </div>
    `;

    const emailOptions = {
      from: 'WalCars <onboarding@resend.dev>',
      to: ['muntahahussainsample@gmail.com'],
      subject: `🚗 Nuova Richiesta - ${make} ${model} (${year}) - €${Number(price).toLocaleString('it-IT')}`,
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