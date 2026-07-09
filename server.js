console.log("🔥 ESTE ARCHIVO SE ESTÁ EJECUTANDO");
require('dotenv').config();
const express = require('express');
const { google } = require('googleapis');

const app = express();

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
 console.log("REDIRECT_URI usada:", process.env.REDIRECT_URI);

// 🔐 LOGIN
app.get('/auth', (req, res) => {
  console.log("🚀 ENTRÓ AL AUTH DEL PUERTO 4000");

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/analytics.readonly'
    ],
  });

  console.log("URL GENERADA:");
  console.log(url);

  res.redirect(url);
});

// CALLBACK
app.get('/auth/callback', async (req, res) => {
  const code = req.query.code;

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  console.log(tokens);
  res.send('Login OK');
});

// ROOT
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

app.listen(4000, () => {
  console.log('🔥 MI SERVER en http://localhost:4000');
});