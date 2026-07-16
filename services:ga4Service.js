const { google } = require("googleapis");
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

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

async function runReport({
    metrics = [],
    dimensions = [],
    startDate = "30daysAgo",
    endDate = "today",
    limit = 100
}) {

    const [response] = await analyticsDataClient.runReport({

        property: `properties/${process.env.PROPERTY_ID}`,

        dateRanges: [{
            startDate,
            endDate
        }],

        metrics: metrics.map(name => ({ name })),

        dimensions: dimensions.map(name => ({ name })),

        limit

    });

    return response;

}

module.exports = {
    runReport
};
//conexión con Google Analytics 4