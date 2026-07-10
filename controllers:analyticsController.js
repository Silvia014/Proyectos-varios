require("dotenv").config();
const ga4 = require("../services/ga4Service");

exports.getKPIs = async (req, res) => {
    try {
    const { startDate="30daysAgo", endDate="today" } = req.query;

    const response = await ga4.runReport({
        metrics: [
             "activeUsers",
             "newUsers",
                "sessions",
             "engagedSessions",
             "screenPageViews",
             "engagementRate"
            ],
        startDate,
        endDate
    });

    res.json(response);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: err.message
        });

    }

};

exports.getTraffic = async (req, res) => {
    try {
    const { startDate="30daysAgo", endDate="today" } = req.query;

    const response = await ga4.runReport({
        metrics:[
            "activeUsers",
            "sessions"
        ],
        startDate,
        endDate
    });

    res.json(response);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: err.message
        });

    }       
};
exports.getCountries = async (req, res) => {
    try {
        const { startDate="30daysAgo", endDate="today" } = req.query;

        const response = await ga4.runReport({
            metrics: [
               "activeUsers"
            ],
            dimensions: [
                "country"
            ],
            startDate,
            endDate
        });

        res.json(response);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: err.message
        });

    }
};

exports.getDevices = async (req, res) => {
    try {
        const { startDate="30daysAgo", endDate="today" } = req.query;

        const response = await ga4.runReport({
            metrics: [
            "activeUsers"
            ],
            dimensions: [
              "deviceCategory"
            ],
            startDate,
            endDate
        });

        res.json(response);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: err.message
        });

    }
};

exports.getPages = async (req, res) => {
    try {
        const { startDate="30daysAgo", endDate="today" } = req.query;

        const response = await ga4.runReport({
            metrics: [
            "screenPageViews"
            ],
            dimensions: [
                "pagePath"
            ],
            startDate,
            endDate
        });

        res.json(response);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: err.message
        });

    }
};

exports.getChannels = async (req, res) => {
    try {
        const { startDate="30daysAgo", endDate="today" } = req.query;

        const response = await ga4.runReport({
         metrics: [
         "sessions"
         ],
         dimensions: [
         "sessionDefaultChannelGroup"
         ],
         startDate,
         endDate
});

        res.json(response);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: err.message
        });

    }
};

exports.getBrowsers = async (req, res) => {
    try {
        const { startDate="30daysAgo", endDate="today" } = req.query;

        const response = await ga4.runReport({
         metrics: [
         "activeUsers"
         ],
         dimensions: [
         "browser"
         ],
         startDate,
         endDate
     });

        res.json(response);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: err.message
        });

    }
};

exports.getSources = async (req, res) => {
    try {
        const { startDate="30daysAgo", endDate="today" } = req.query;

        const response = await ga4.runReport({
            metrics: [
             "sessions"
                ],
                dimensions: [
                "sessionSourceMedium"
              ],
              startDate,
              endDate
        });

        res.json(response);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: err.message
        });

    }
};

exports.getEvents = async (req, res) => {
    try {
        const { startDate="30daysAgo", endDate="today" } = req.query;

        const response = await ga4.runReport({
            metrics: [
            "eventCount"
            ],
            dimensions: [
            "eventName"
            ],
            startDate,
            endDate
        });

        res.json(response);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: err.message
        });

    }
};

exports.getRealtime = async (req, res) => {
    try {
        const { startDate="30daysAgo", endDate="today" } = req.query;

        const response = await ga4.runReport({
            metrics:[
                "activeUsers",
                "sessions"
            ],
            startDate,
            endDate
        });

        res.json(response);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: err.message
        });

    }
};

exports.getConversions = async (req, res) => {
    try {
        const { startDate="30daysAgo", endDate="today" } = req.query;

        const response = await ga4.runReport({
         metrics: [
         "conversions"
         ],
         dimensions: [
         "eventName"
         ],
         startDate,
         endDate
        });

        res.json(response);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: err.message
        });

    }
};





