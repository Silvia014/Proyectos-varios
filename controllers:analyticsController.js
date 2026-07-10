const ga4 = require("../services/ga4Service");

exports.getKPIs = async (req, res) => {

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

};

exports.getTraffic = async (req, res) => {

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

};

exports.getCountries = async (req, res) => {

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

};

exports.getDevices = async (req, res) => {

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

};

exports.getPages = async (req, res) => {

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

};

exports.getChannels = async (req, res) => {

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

};

exports.getBrowsers = async (req, res) => {

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

};

exports.getSources = async (req, res) => {

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

};

exports.getEvents = async (req, res) => {

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

};

exports.getRealtime = async (req, res) => {

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

};

exports.getConversions = async (req, res) => {

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

};

