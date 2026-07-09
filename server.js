console.log("🔥 ESTE ARCHIVO SE ESTÁ EJECUTANDO");
require('dotenv').config();
const express = require('express');
const { google } = require('googleapis');
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

const app = express();

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
});
const analyticsDataClient = new BetaAnalyticsDataClient({
  authClient: oauth2Client,
});
 console.log("REDIRECT_URI usada:", process.env.REDIRECT_URI);

// 🔐 LOGIN
app.get('/auth', (req, res) => {
  console.log("🚀 ENTRÓ AL AUTH");

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/analytics.readonly'
    ]
  });

  console.log("URL:", url);

  res.redirect(url);
});

// CALLBACK
app.get('/auth/callback', async (req, res) => {
  try {
    const { code } = req.query;

    const { tokens } = await oauth2Client.getToken(code);

    console.log("Autenticación completada");

    res.send("Login correcto");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});
app.get('/api/analytics', async (req, res) => {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '30daysAgo',
          endDate: 'today',
        },
      ],
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
      ],
    });

    const row = response.rows[0];

    res.json({
      activeUsers: Number(row.metricValues[0].value),
      sessions: Number(row.metricValues[1].value),
      pageViews: Number(row.metricValues[2].value),
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
});
// ROOT
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

app.listen(4000, () => {
  console.log('🔥 MI SERVER en http://localhost:4000');
});