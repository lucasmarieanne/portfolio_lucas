const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Autoriser uniquement les requêtes venant de ton frontend React
  methods: ['GET', 'POST'], // Spécifier les méthodes HTTP autorisées
}));
app.use(bodyParser.json());

// Route pour envoyer l'e-mail
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Configurer Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // ou un autre service comme Yahoo, Outlook
    auth: {
      user: 'contact.bonneposture@gmail.com', // ton email
      pass: 'NiloOffi972', // ton mot de passe
    },
  });

  const mailOptions = {
    from: email, // l'email du formulaire
    to: 'contact.bonneposture@gmail.com', // destinataire
    subject: `Nouveau message de ${name}`,
    text: message,
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
    } else {
      console.log('E-mail envoyé: ' + info.response);
      res.status(200).send('E-mail envoyé avec succès');
    }
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
