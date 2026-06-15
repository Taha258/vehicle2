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

    // Email content build karein
    const emailContent = `
      <h2>New Car Sale Inquiry</h2>
      <h3>Vehicle Information:</h3>
      <ul>
        <li><strong>Make:</strong> ${make}</li>
        <li><strong>Model:</strong> ${model}</li>
        <li><strong>Year:</strong> ${year}</li>
        <li><strong>Mileage:</strong> ${mileage} km</li>
        <li><strong>Fuel Type:</strong> ${fuel_type}</li>
        <li><strong>Transmission:</strong> ${transmission}</li>
        <li><strong>Location:</strong> ${location || 'Not provided'}</li>
      </ul>
      
      <h3>Seller Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Telephone:</strong> ${telephone}</li>
      </ul>
      
      <h3>Additional Message:</h3>
      <p>${message || 'No additional message'}</p>
      
      <h3>Photos:</h3>
      <p>${car_photos && car_photos.length > 0 ? `${car_photos.length} photos uploaded` : 'No photos uploaded'}</p>
    `;

    // Email bhejein
    const data = await resend.emails.send({
      from: 'WalCars <onboarding@resend.dev>', // Ya apna verified domain
      to: ['tahahussain427@gmail.com'],
      subject: `New Car Sale Inquiry - ${make} ${model} (${year})`,
      html: emailContent,
      reply_to: email, // User ka email taake reply kar sakein
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}