require('dotenv').config();
// Server config
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('Erreur de configuration Email:', error);
  } else {
    console.log('Serveur prêt à envoyer des emails');
  }
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, service, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis' });
  }

  try {
    console.log('Reçu demande de contact:', { name, email, service });

    // Email to Company
    const companyMailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender address (must be authenticated user usually)
      to: process.env.EMAIL_RECEIVER || 'constructionmbc3@gmail.com', // List of receivers
      replyTo: email,
      subject: `Nouvelle demande de devis - ${service}`,
      html: `
        <h1>Nouvelle demande de devis</h1>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service demandé:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Email to Client (Confirmation)
    const clientMailOptions = {
      from: `"Construction MBC" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Confirmation de votre demande - Construction MBC',
      html: `
        <h1>Merci pour votre demande, ${name}!</h1>
        <p>Nous avons bien reçu votre demande concernant: <strong>${service}</strong></p>
        <p>Notre équipe vous contactera dans les plus brefs délais.</p>
        <br>
        <p>Cordialement,</p>
        <p><strong>L'équipe Construction MBC</strong></p>
        <p>📞 +221 78 991 91 91</p>
        <p>📧 ${process.env.EMAIL_RECEIVER || 'constructionmbc3@gmail.com'}</p>
      `,
    };

    // Send emails
    await transporter.sendMail(companyMailOptions);
    console.log('Email envoyé à l\'entreprise');
    
    await transporter.sendMail(clientMailOptions);
    console.log('Email de confirmation envoyé au client');

    res.status(200).json({ success: true, message: 'Emails envoyés avec succès' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi des emails:', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi des emails: ' + error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur Backend démarré sur le port ${PORT}`);
});
