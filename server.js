console.log("🚀 Starting server...");
require('dotenv').config(); 
const express = require('express');
const path = require('path');
const { google } = require('googleapis');

const app = express();

// 🔐 OAuth config
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// 🌐 Servir HTML
app.use(express.static(__dirname));

// 🚀 Ruta login
app.get('/auth', (req, res) => {
  console.log("🔑 Iniciando autenticación con Google...");

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/analytics.readonly'
    ],
  });

  console.log("➡️ Redirigiendo a Google...");
  res.redirect(url);
});

// 🔁 Callback
app.get('/auth/callback', async (req, res) => {
  try {
    const code = req.query.code;

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    console.log("🔥 TOKENS:");
    console.log(tokens);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.send('❌ Error en autenticación');
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index2.html');
});

// ▶️ Servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

