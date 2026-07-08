const express = require('express');
const path = require('path');
const { google } = require('googleapis');

const app = express();

// 🔐 OAuth config
const oauth2Client = new google.auth.OAuth2(
  "638289685605-3la42bch28cefa796lln2lhdri85l75s.apps.googleusercontent.com",
  "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",
  "http://localhost:3000/auth/callback" // ✅ SIN []
);

// 🌐 Servir HTML
app.use(express.static(__dirname));

// 🚀 Ruta login
app.get('/auth', (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/analytics.readonly' // ✅ SIN []
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

    res.send('✅ Login correcto, revisa la consola');
  } catch (error) {
    console.error(error);
    res.send('❌ Error en autenticación');
  }
});

// ▶️ Servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});