import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import{Resend } from 'resend';



dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' || 'https://portfolio-3xi8.vercel.app'}));
app.use(express.json());
const resend = new Resend(process.env.RESEND_API_KEY);

// // Gmail SMTP — explicit settings (more reliable than service:'gmail' shorthand)
// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false,          // STARTTLS on port 587
//   requireTLS: true,
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_APP_PASSWORD,
//   },
//   tls: {
//     rejectUnauthorized: true,
//   },
// });

// transporter.verify((err) => {
//   if (err) {
//     console.error('Mail transporter error:', err.message);
//     console.error('→ Check your GMAIL_USER and GMAIL_APP_PASSWORD in .env');
//   } else {
//     console.log('✓ Mail server ready');
//   }
// });

// app.post('/api/contact', async (req, res) => {
//   const { name, email, subject, message } = req.body;

// //   if (!name || !email || !subject || !message) {
// //     return res.status(400).json({ error: 'All fields are required.' });
// //   }

// //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //   if (!emailRegex.test(email)) {
// //     return res.status(400).json({ error: 'Invalid email address.' });
// //   }

// //   try {
// //     // 1. Notification to portfolio owner (reply-to is the sender)
// //     await transporter.sendMail({
// //       from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
// //       to: process.env.GMAIL_USER,
// //       replyTo: email,
// //       subject: `[Portfolio] ${subject}`,
// //       html: `
// //         <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0f0f17;color:#e5e7eb;border-radius:12px;">
// //           <h2 style="color:#a78bfa;margin:0 0 24px;">New Contact Form Submission</h2>
// //           <table style="width:100%;border-collapse:collapse;">
// //             <tr>
// //               <td style="padding:8px 0;color:#9ca3af;width:90px;">Name</td>
// //               <td style="padding:8px 0;color:#f3f4f6;font-weight:600;">${name}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding:8px 0;color:#9ca3af;">Email</td>
// //               <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#a78bfa;">${email}</a></td>
// //             </tr>
// //             <tr>
// //               <td style="padding:8px 0;color:#9ca3af;">Subject</td>
// //               <td style="padding:8px 0;color:#f3f4f6;">${subject}</td>
// //             </tr>
// //           </table>
// //           <div style="margin-top:24px;padding:16px;background:#1a1a2e;border-radius:8px;border-left:3px solid #7c3aed;">
// //             <p style="color:#9ca3af;font-size:13px;margin:0 0 8px;">Message</p>
// //             <p style="color:#e5e7eb;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
// //           </div>
// //         </div>
// //       `,
// //     });

// //     // 2. Auto-reply to sender
// //     await transporter.sendMail({
// //       from: `"Indrajeet Bhujbal" <${process.env.GMAIL_USER}>`,
// //       to: email,
// //       subject: `Got your message, ${name.split(' ')[0]}!`,
// //       html: `
// //         <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0f0f17;color:#e5e7eb;border-radius:12px;">
// //           <h2 style="color:#a78bfa;margin:0 0 16px;">Thanks for reaching out!</h2>
// //           <p style="color:#d1d5db;line-height:1.7;margin:0 0 16px;">
// //             Hi ${name.split(' ')[0]}, I received your message and will get back to you within 24 hours.
// //           </p>
// //           <div style="padding:16px;background:#1a1a2e;border-radius:8px;border-left:3px solid #7c3aed;margin-bottom:24px;">
// //             <p style="color:#9ca3af;font-size:13px;margin:0 0 4px;">Your message</p>
// //             <p style="color:#e5e7eb;margin:0;white-space:pre-wrap;font-size:14px;">${message}</p>
// //           </div>
// //           <p style="color:#6b7280;font-size:13px;margin:0;">— Indrajeet Bhujbal</p>
// //         </div>
// //       `,
// //     });

//     return res.status(200).json({ success: true });
//   } catch (err) {
//     console.error('Send mail error:', err.message);
//     return res.status(500).json({ error: 'Failed to send message. Please try again.' });
//   }
// });

app.post('/api/contact',async(req , res)=>{
  const{ name , email , subject , message } = req.body;
  if( !name || !email || !subject || !message){
    return res.status(400).json({error:'All fields are required.'})

  }
  
  try{
   const response =  await resend.emails.send({
      from : "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: subject,
      html :`<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong></p><p>${message}</p>`
    })
  
}catch(err){
  console.log('Send mail error:', err.message)
  return res.status(500).json({error:'Failed to send message. Please try again.'})
}
  return res.status(200).json({success:true,message:'Message sent successfully.'})


})

app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
